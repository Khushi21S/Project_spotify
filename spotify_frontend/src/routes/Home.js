import { Icon } from '@iconify/react';
import spotify_logo from '../assets/images/spotify_logo_white.svg';
import IconText from '../components/shared/IconText';
import TextWithHover from '../components/shared/TextWithHover';

const focusCardsData = [{title:"Peaceful Piano", 
                         description:"Relax and indulge with beautiful piano pieces", 
                         imgUrl: "https://images.unsplash.com/photo-1618688259579-54fc3b432a3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        },
                        {title: "Deep Sleep Music",
                         description: "Calming, gentle ambient music to help you fall asleep faster and sleep better",
                         imgUrl: "https://images.unsplash.com/photo-1515894203077-9cd36032142f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        },
                        {title: "Ocean Waves",
                         description: "Uninterrupted ocean waves to calm your mind",
                         imgUrl: "https://plus.unsplash.com/premium_photo-1667149988377-0e326e842beb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        },
                        {title:"Nature sound",
                         description: "Birds chirping in the morning, or fall asleep naturally with birds at night",
                         imgUrl: "https://plus.unsplash.com/premium_photo-1683121337605-77c76ca9077d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        },
                        {title:"Relaxing Sitar",
                         description: "Relax and indulge with beautiful sitar pieces",
                        imgUrl: "https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
];
const SpotifyPlaylistCardsData = [
                        {title:"Taylor Swift Mix", 
                         description:"It includes all the Taylor Swift songs you love to listen", 
                         imgUrl: "https://images.unsplash.com/photo-1548778052-311f4bc2b502?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGF5bG9yJTIwc3dpZnR8ZW58MHx8MHx8fDA%3D"
                        },
                        {title: "Time Capsule",
                         description: "We made you a personalized playlist with songs to take you back in time.",
                         imgUrl: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        },
                        {title: "On Repeat",
                         description: "Songs you love right now",
                         imgUrl: "https://images.unsplash.com/photo-1564669722947-c89159202d19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        },
                        {title:"Repeat Rewind",
                         description: "Your past favorites",
                         imgUrl: "https://images.unsplash.com/photo-1594499894242-02df4221a799?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        },
                        {title:"Throwback",
                         description: "Songs that ruled hearts in the Y2K decade",
                        imgUrl: "https://images.unsplash.com/photo-1503198321514-5ff92b71eb15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
];
const SoundsOfIndiaCardsData = [
    {title:"Punjabi 101", 
     description:"Ultimate 101 Punjabi Hits with Karan Aujla", 
     imgUrl: "https://images.unsplash.com/photo-1676804899250-18a342d77e16?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {title: "Dance Ganpati",
     description: "This Ganpati, bring in the celebrations with these dance bangers.",
     imgUrl: "https://images.unsplash.com/photo-1528293319334-2b98c83a27fd?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {title: "Indie India",
     description: "Best of the Indian Indie scene",
     imgUrl: "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {title:"Old is Gold",
     description: "Soulful Hindi songs for your nostalgic journey.",
     imgUrl: "https://images.unsplash.com/photo-1605989993875-dbe0deb6d07f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {title:"Trending Valentine",
     description: "India's Ultimate Love Playlist",
    imgUrl: "https://images.unsplash.com/photo-1484979045040-0ab3854b6acb?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const Home  = () =>{
    return (
        <div className="h-full w-full flex">
            <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                <div>
                    <div className='logoDiv p-6'>
                        <img src={spotify_logo} alt='spotify logo' width={125} />
                    </div>
                    <div className='py-5'> 
                    <IconText iconName={"material-symbols:home"} displayText = {"Home"} active />
                    <IconText iconName={"ic:baseline-search"} displayText = {"Search"} />
                    <IconText iconName={"mingcute:book-5-line"} displayText = {"Library"} />
                    </div>
                    <div className='pt-5'>
                    <IconText iconName={"basil:add-solid"} displayText = {"Create Playlist"} />
                    <IconText iconName={"mdi:heart"} displayText = {"Liked Songs"} />
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
                            <TextWithHover displayText={"Sign up"}/>
                            <div className='bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer'>
                                Log in
                            </div>
                        </div>
                    </div>
                </div>
                <div className='content p-8 pt-0 overflow-auto'>
                    <PlaylistView titleText="Focus" cardsData={focusCardsData}/>
                    <PlaylistView titleText="Spotify Playlists" cardsData={SpotifyPlaylistCardsData}/>
                    <PlaylistView titleText="Sounds of India" cardsData={SoundsOfIndiaCardsData}/>
                </div>
            </div>

       </div>
    )
}

const PlaylistView = ({titleText, cardsData}) =>{
    return(
        <div className='text-white mt-8'>
            <div className='text-2xl font-semibold mb-5'>{titleText}</div>
            <div className='w-full flex justify-between space-x-5'>
                {
                    cardsData.map((item) =>{
                        return <Card title={item.title} description={item.description} imgUrl={item.imgUrl}/>
                    })
                }
            </div>
        </div>
    )
}

const Card = ({title, description, imgUrl}) =>{

    return (
        <div className='bg-black bg-opacity-40 w-1/5 p-4 rounded-lg'>
            <div className='pb-4 pt-2'>
                <img className='w-full rounded-md' src= {imgUrl} 
                alt='label'
                />
            </div>
            <div className='text-white font-semibold py-3'>{title}</div>
            <div className='text-gray-500 text-sm'>{description}</div>
        </div>
    )
}

export default Home;