import { useState } from "react";

function Form(){

    var [gender,setGender]=useState("");
    var [course,setCourses]=useState("");
    var [checkbox,setCheckbox]=useState(false);
    var [radiocheck,setCheckRadio]=useState("");


    function handleCourses(e){
        setCourses(e.target.value);
    }

    function handleGender(e){
        setGender(e.target.value);
    }
    
    function handleCheckBox(e){
        if(e.target.checked)
            setCheckbox(true)

        else{
            setCheckbox(false)
        }
            

    }

    return (
        <div className="container"> 
            <div className="row">
                    <div className="col-4">
                        <h3 className="text-success">Form Page</h3>

                            <div>
                                    <label>Courses</label>
                                    <select className="form-select" onChange={e=>handleCourses(e)}>
                                    <option></option>
                                   <option>React</option>
                                   <option>Python</option>
                                   <option>Node JS</option>
                                   <option>Java</option>
                                    </select>


                                </div>

                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name="radioDefault"value="Male "id="radioDefault1" onChange={e=>handleGender(e)}/>
                                    <label className="form-check-label" for="radioDefault1">
                                        Male
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name="radioDefault" value="Female" id="radioDefault2" onChange={e=>handleGender(e)}/>
                                    <label className="form-check-label" for="radioDefault2">
                                        Female
                                    </label>
                                    </div>
                                 <div class="form-check">
                                    <input className="form-check-input" type="checkbox" name="checkDefault" id="checkDefault" onChange={e=>handleCheckBox(e)}/>
                                    <label className="form-check-label" for="checkDefault">
                                        Avatar 1
                                    </label>
                                   
                                </div>
                        </div>

                </div>

            <div className="row">
                
                <div className="col-5">
                    <br/><br/><br/><br/><br/>
                    Courses Selected {course}  <br/>
                    Gender is {gender} <br/>
                    Checkbox is {checkbox.toString()}
                </div>

                </div>


        </div>


    )
    
}

export default Form;
