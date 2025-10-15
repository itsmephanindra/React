function validateEmail(email){
var emailreg=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailreg.test(email)
}

export default validateEmail;