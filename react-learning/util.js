



function isMailValid(email){

    if(email.length>3)
        return console.log(email,"Email is Valid")
    else
        return console.log(email,"Email is inValid")
}


function loopArray(array1)
{
    array1.forEach(element => {
        console.log(element);        
    });

    }

function currentDate(){
    var date=new Date();
     return console.log(date.toString());
}

export {isMailValid,loopArray,currentDate}


