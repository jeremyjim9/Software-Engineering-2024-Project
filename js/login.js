
document.body.style.paddingTop = '8%'
$('#register2').hide();
$('#customerbutton').click(regchange);
$('#representativebutton').click(regchange);
$('#login').click(getLoginInfo);
sessionStorage.setItem('Authed',"false");
sessionStorage.setItem('Username',"");
sessionStorage.setItem('Password',"");
sessionStorage.setItem('UserType',"");

    function getLoginInfo() {
        const username = $('#username').val();
        const password = $('#password').val();
        
        console.log(username, password);
        $.ajax({
            type: "GET",
            url: 'https://js6i22vcp4.execute-api.us-east-1.amazonaws.com/FirstStage/SignIn',
            async: true,
            data: {
                Username: username, 
                Password: password
            },
            dataType: 'text',
            success: function(data) {
                console.log(data)
                if (data == "Customer") {
                    console.log(data);
                    console.log("success")
                    sessionStorage.setItem('Username',username);
                    sessionStorage.setItem('Password',password);
                    sessionStorage.setItem('UserType',"Customer");
                    sessionStorage.setItem('Authed',"true");
                    window.location.href = 'search.html';
                } else if (data == "Representative"){
                    console.log(data);
                    console.log("success")
                    sessionStorage.setItem('Username',username);
                    sessionStorage.setItem('Password',password);
                    sessionStorage.setItem('UserType',"Representative");
                    sessionStorage.setItem('Authed',"true");
                    window.location.href = 'search.html';
                } else {
                    console.log("failure")
                    $('#username').val("Invalid login")
                    $('#password').val("")
                }
            }
        });
        
    }


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