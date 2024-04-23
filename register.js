$('#register2').hide();
document.body.style.paddingTop = '8%'
$('#customerbutton').click(regchange);
$('#representativebutton').click(regchange);

function regchange(){
    $('#register1').hide();
    $('#register2').show();
    document.body.style.paddingTop = '1%'
}

function register(){
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if(fname.value == "")
    {
        alert("fname");
    }
    if(lname.value == "")
    {
        alert("lname");
    }
    if(email.value == "")
    {
        alert("email");
    }
    else{
        emailcheck(email.value);
    }
    if(password.value == "")
    {
        alert("password");
    }
    else{
        passwordcheck(password.value);
    }
}