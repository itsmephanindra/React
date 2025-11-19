import { useState } from "react";

function Login(){

  let [displaystatus,setDisplayStatus]=useState("modal display-none");
  let isModalOpen=false;



function handleModal(){
    if (isModalOpen === false){
          setDisplayStatus("modal display_block");
        isModalOpen=true;
    }
    else{
       setDisplayStatus("modal display_none");
       isModalOpen=false;

    }


}


    return(


        <div>
            <button classNameNameName="btn btn-primary me-2" onClick={e=>handleModal()}>Login</button>

              <div className={displaystatus}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
              onClick={e=>handleModal()}
              >

              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                onClick={e=>handleModal()}
              >Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

  
        
        </div>
    )
}


export default Login;