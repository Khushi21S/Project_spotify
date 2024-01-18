import { useContext, useState, useLayoutEffect, useRef } from 'react';
import {Howl, Howler} from 'howler';
import { Icon } from '@iconify/react';
import spotify_logo from '../assets/images/spotify_logo_white.svg';
import IconText from '../components/shared/IconText';
import TextWithHover from '../components/shared/TextWithHover';
import songContext from '../contexts/songContext';
import CreatePlaylistModal from '../modals/CreatePlaylistModal';
import AddtoPlaylistModal from '../modals/AddtoPlaylistModal';
import { makeAuthenticatedGETRequest, makeAuthenticatedPOSTRequest } from '../utils/serverHelpers';


const LoggedInContainer = ({children, curActiveScreen}) =>{

    const [createPlayListModalOpen, setCreatePlaylistModalOpen] = useState(false);
    const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false);

    const {currentSong, setCurrentSong, soundPlayed, setSoundPlayed, isPaused, setIsPaused}  = useContext(songContext);

    const firstUpdate = useRef(true);

    useLayoutEffect(()=>{
        if(firstUpdate.current){
            firstUpdate.current = false;
            return;
        }
        if(!currentSong){
            return;
        }
        changeSong(currentSong.track);
    }, [currentSong && currentSong.track]);

    const addSongToPlaylist = async (playlistId) =>{
        const songId = currentSong._id;
        const payload = {playlistId, songId}
        const response = await makeAuthenticatedPOSTRequest("/playlist/add/song", payload);
        if(response._id){
            setAddToPlaylistModalOpen(false);
        }

    }


    const playSound = () =>{
        if(!soundPlayed){
            return;
        }
        soundPlayed.play();
    }

    const changeSong = (songSrc) => {
        if(soundPlayed){
            soundPlayed.stop();
        }
        let sound = new Howl({
            src: [songSrc],
            html5: true
          }
        );
        setSoundPlayed(sound);
        sound.play();
        setIsPaused(false);
    };

    const pauseSound = () =>{
        soundPlayed.pause();
    }

    const togglePlayPause = () => {
        if(isPaused){
            playSound();
            setIsPaused(false);
        
        }
        
        else{
            pauseSound();
            setIsPaused(true);
        }

    }

    return (
        <div className="h-full w-full bg-app-black">
            {createPlayListModalOpen && <CreatePlaylistModal closeModal ={()=>{setCreatePlaylistModalOpen(false)}} />}
            {addToPlaylistModalOpen && <AddtoPlaylistModal closeModal ={()=>{setAddToPlaylistModalOpen(false)}} addSongToPlaylist={addSongToPlaylist} />}
            <div className={`${currentSong ? "h-9/10" : "h-full"} w-full flex`}>
                <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                    <div>
                        <div className='logoDiv p-6'>
                            <img src={spotify_logo} alt='spotify logo' width={125} />
                        </div>
                        <div className='py-5'> 
                        <IconText iconName={"material-symbols:home"} displayText = {"Home"} targetLink='/home' active={curActiveScreen==="home"} />
                        <IconText iconName={"ic:baseline-search"} displayText = {"Search"} targetLink="/search" active={curActiveScreen==="search"} />
                        <IconText iconName={"mingcute:book-5-line"} displayText = {"Library"} active={curActiveScreen==="library"} targetLink='/library'/>
                        <IconText iconName={"mdi:music"} displayText = {"My Music"} targetLink='/myMusic' active={curActiveScreen==="myMusic"}/>
                        </div>
                        <div className='pt-5'>
                            <IconText iconName={"basil:add-solid"} displayText = {"Create Playlist"} onClick={()=>{setCreatePlaylistModalOpen(true)}}/>
                            < IconText iconName={"mdi:heart"} displayText = {"Liked Songs"} />
                        </div>
                    </div>
                    <div className='px-5'>
                        <div className='border border-gray-100 rounded-full text-white w-2/5 flex px-2 py-1 items-center justify-center hover:border-white cursor-pointer'>
                             <Icon icon="ph:globe"/>    
                             <div className='ml-2 text-sm'>English</div>
                        </div>
                    </div>
                </div>
                <div className="h-full w-4/5 bg-app-black overflow-auto">
                    <div className='navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end'>
                        <div className='w-1/2 h-full flex items-center'>
                            <div className='w-3/5 flex justify-around border-r border-white'>
                                <TextWithHover displayText={"Premium"}/>
                                <TextWithHover displayText={"Support"}/>
                                <TextWithHover displayText={"Download"}/>
                            </div>
                            <div className='w-2/5 flex justify-around h-full items-center'>
                                <TextWithHover displayText={"Upload Song"}/>
                                <div className='bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer'>
                                KS
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='content p-8 pt-0 overflow-auto'>
                        {children}
                    </div>
                </div>
           </div>
           {
             currentSong &&
           
              <div className='h-1/10 w-full bg-black bg-opacity-30 text-white overflow-auto flex items-center px-4'>
                <div className='w-1/4 flex items-center'>
                    <img src= {currentSong.thumbnail} 
                    alt='currentSongThumbnail' className='h-14 w-14 rounded'></img>
                    <div className='pl-4'>
                        <div className='text-sm hover:underline cursor-pointer'>{currentSong.name}</div>
                        <div className='text-xs text-gray-500 hover:underline cursor-pointer'>{currentSong.artist.firstName + " " + currentSong.artist.lastName}</div>
                    </div>
                </div>
                <div className='w-1/2 flex justify-center h-full items-center flex-col'> 
                   <div className='flex w-1/3 justify-between items-center'>
                        <Icon icon="ion:shuffle" fontSize={23} className='cursor-pointer text-gray-500 hover:text-white'/>
                        <Icon icon="fluent:previous-28-regular" fontSize={23} className='cursor-pointer text-gray-500 hover:text-white'  />
                        <Icon icon={isPaused ? "gridicons:play": "zondicons:pause-solid" }
                        fontSize={35} 
                        className='cursor-pointer text-gray-500 hover:text-white'
                        onClick={togglePlayPause}/>
                        <Icon icon="fluent:next-28-regular" fontSize={23} className='cursor-pointer text-gray-500 hover:text-white' />
                        <Icon icon="mingcute:repeat-line" fontSize={23} className='cursor-pointer text-gray-500 hover:text-white'/>
                    </div>
                   <div>
                    
                   </div>
                </div>
                <div className='w-1/4 flex justify-end pr-4 space-x-4 items-center'>
                       <Icon icon="ic:baseline-playlist-add" fontSize={23} className='cursor-pointer text-gray-500 hover:text-white' onClick={()=>{setAddToPlaylistModalOpen(true)}}/>
                       <Icon icon="ph:heart-bold" fontSize={23} className='cursor-pointer text-gray-500 hover:text-white' />
                </div>
              </div>
            }
        </div>
    )
}



export default LoggedInContainer;