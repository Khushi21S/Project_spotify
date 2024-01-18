import { useState } from 'react';
import TextInput from '../components/shared/TextInput';
import CloudinaryUpload from '../components/shared/CloudinaryUpload';
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelpers';
import { useNavigate } from 'react-router-dom';
import LoggedInContainer from '../containers/LoggedInContainer';



const UploadSong = () =>{

    const [name, setName] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [ songUrl, setSongUrl] = useState("");
    const [uploadedSongFileName, setUploadedSongFileName] = useState("");
    const navigate = useNavigate();

    const submitSong = async () =>{

        const data = {name, thumbnail, track:songUrl};
        const response = await makeAuthenticatedPOSTRequest("/song/create", data);
        if(response.err){
            alert("Could not create a song")
            return;
        }
        alert("Success");
        navigate("/home");
    }
    return (
        <LoggedInContainer>
             <div className='text-2xl font-semibold mb-5 text-white mt-8'>Upload your music</div>
             <div className='w-2/3 flex space-x-3 mx-8'>
                <div className='w-1/2'><TextInput label="Name" labelClassName={"text-white"} placeholder={"Name"} value={name} setValue={setName}/></div>
                <div className='w-1/2'><TextInput label="Thumbnail"labelClassName={"text-white"} placeholder={"Thumbnail"} value={thumbnail} setValue={setThumbnail}/></div></div>
                <div className='py-8 px-8'>
                    {
                         uploadedSongFileName?
                         <div className='bg-white rounded-full p-3 w-1/3'>
                             {uploadedSongFileName.substring(0,35)}...
                         </div>

                         :
                         <CloudinaryUpload 
                         setUrl ={setSongUrl} 
                         setName={setUploadedSongFileName}/>
                     }
                 </div>
                 <div className='bg-white rounded-full w-40 flex items-center justify-center mx-8 p-3 cursor-pointer font-semibold' onClick={submitSong}>
               Submit Song
               </div>

        </LoggedInContainer>
    )

};





export default UploadSong;