import './FormContent.css'

function FormContent(){


    return (
        <div className='form_box'>
            
            <div className='form_fields'>
                <label>Name</label><br/>
                <input type="text" placeholder='Enter your name'/><br/>

                <label>Email</label><br/>
                <input type="text" placeholder='Enter your name'/><br/>

                <button className='form_button'>Submit </button>
                <button className='form_button'>Cancel </button>

                </div>
        
        </div>
    )
}

export default FormContent;

