const form = document.getElementById("form");
const username = document.getElementById("uername");
const email = document.getElementById("Email");
const password = document.getElementById("Password");
const comfirmpassword = document.getElementById("Confirm-Password");

form.addEventListener('submit', e =>{
    e.preventDefault();
    checkInput();

});

function checkInput(){
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const confirmPasswordValue=comfirmpassword.value.trim();

    //Username validation condition
    if(usernameValue === '')
    {
        setError(username, 'UserName cannot be Empty')
    }else{
        setSuccess(username)
    }

    //Email validation condition
    if(emailValue === '')
    {
        setError(email, 'Email cannot be Empty')
    }else if(!isemail(email)){
        setError(email, 'Not a valid Email')
    }
    else{
        setSuccess(email)
    }

    //Password valation condition
    if(passwordValue === '')
    {
        setError(password, 'Password cannot be Empty')
    }else{
        setSuccess(password)
    }

    //Confirmation password validation condition
    if(confirmPasswordValue === '')
    {
        setError(comfirmpassword, 'Confirm Password cannot be empty')
    }else if(passwordValue!== confirmPasswordValue)
    {
        setError(comfirmpassword, 'Confirm Password cannot be empty')
    }else{
        setSuccess(comfirmpassword)
    }

}

function setError(input, message){
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
    formControl.classname = 'form-Control error';
    small.innerText=message;
}

function setSuccess(){
    const formControl=input.parentElement;
    formControl.classname='form-Control success';
}


function isemail(email){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}