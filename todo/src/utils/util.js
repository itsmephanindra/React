export const checkUserLoginStatus=()=>{
 let userData=localStorage.getItem('userData');

//  console.log(userData);
 
    if (userData===null)
        return false;

    else
        return true;
}