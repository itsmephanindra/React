import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import { useState } from 'react';

function ProfileUpdate() {


    let [fileContent,setFileContent]=useState("");
    let [fileErrors,setFileErrors]=useState("");


    function handleFile(e)
    {console.log(e.target.files[0].name, e.target.files[0].type);setFileContent(e.target.files[0]);}

    function UploadFile(){
 
        let fileArray=fileContent.name.split('.');
        let fileExtension=fileArray[fileArray.length-1];

               
        if (fileExtension==="jpeg" || fileExtension==="png")
            setFileErrors();       
        else
           setFileErrors("Invalid file type, Please upload a JPEG or PNG image.");
        

        console.log(fileContent.size);
          if (fileContent.size > 10 )
            {console.log("Uploading file: ",fileContent.size);setFileErrors();}            
            
          else
           setFileErrors("File Size is < 10");
    }
    

return (

<>

<div className="container">
    <div className="row">
        <div className="col-12"></div>
        <Header/>

        <div className='row mt-3'>
        <div className='col-3'> 
            <h4>Upload Profile pic </h4><input type="file"  className="form-control" onChange={e=>handleFile(e)} placeholder='Upload your file here '/>
                </div> 
                
                <div className='mt-3'>
            <button className='btn btn-primary' onClick={e=>UploadFile()}>Upload</button>

                </div>
                <div className='text-danger'>
                    {fileErrors}
                </div>
                </div>
        <div className='row'></div>
        <div className='col-12'><Footer/></div>



    </div>




</div>
</>
)

}


export default ProfileUpdate;