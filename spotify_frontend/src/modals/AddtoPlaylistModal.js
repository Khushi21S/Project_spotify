import { useState, useEffect } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";

const AddtoPlaylistModal = ({closeModal, addSongToPlaylist}) =>{
    const [myPlaylists, setMyPlaylists] = useState([]);

    useEffect(()=>{
        const getData = async () =>{
            const response = await makeAuthenticatedGETRequest('/playlist/get/me');
            setMyPlaylists(response.data);
            console.log(response.data);
        };
        getData();
    },[])
    return (
        <div className="absolute bg-black w-screen h-screen bg-opacity-40 flex justify-center items-center" onClick={closeModal}>
            <div className="bg-app-gray w-1/3 rounded p-8" onClick={(e)=>{e.stopPropagation()}}>
                <div className="text-white mb-5 font-semibold text-lg">Select Playlist</div>
                <div className="space-y-3 flex flex-col justify-center items-center">
                    {myPlaylists.map(item =>{
                        return <PlaylistListComponent info ={item}
                        addSongToPlaylist={addSongToPlaylist}/>
                    })}
                </div>
            </div>
        </div>

    );
}

const PlaylistListComponent = ({info, addSongToPlaylist}) =>{
    return(
        <div className="bg-app black w-full flex items-center space-x-4 hover:bg-gray-400 hover:bg-opacity-20 cursor-pointer p-3" onClick={()=>{addSongToPlaylist(info._id)}}>
            <div className="flex justify-center items-center space-x-4">
                <div><img src={info.thumbnail} className="h-10 w-12 rounded" alt="thumbnail"/></div>
                <div className="text-white font-semibold text-sm">{info.name}</div>
            </div>

        </div>
    )
}

export default AddtoPlaylistModal;