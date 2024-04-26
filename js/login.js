$('#usernameError').hide();
$('#passwordError').hide();
$('#login').click(getLoginInfo);

if (sessionStorage.getItem('Authed') == "true") {
    window.location.href = 'search.html';
}
else{
    sessionStorage.setItem('Authed',"false");
    sessionStorage.setItem('Username',"");
    sessionStorage.setItem('Password',"");
    sessionStorage.setItem('UserType',"");
}


$(document).ready(function(){
    $('body').css('visibility','visible');
});



function usernameCheck(){
    let username = $('#username').val();
    if (username == "")
    {
        $('#usernameErrorMessage').text("Username is required.");
        $('#username').addClass("errorbox");
        $('#usernameLabel').addClass("errortext");
        $('#usernameError').show();
        return false;
    }
    else {
        return true;
    }
}
function passwordCheck(){
    let password = $('#password').val();
    if (password == "")
    {
        $('#passwordErrorMessage').text("Password is required.");
        $('#password').addClass("errorbox");
        $('#passwordLabel').addClass("errortext");
        $('#passwordError').show();
        return false;
    }
    else {
        return true;
    }
}


    function getLoginInfo() {
        $('#username').removeClass("errorbox");
        $('#usernameLabel').removeClass("errortext");
        $('#usernameError').hide();
        $('#password').removeClass("errorbox");
        $('#passwordLabel').removeClass("errortext");
        $('#passwordError').hide();

        let ucheck = usernameCheck();
        let pcheck = passwordCheck();
        if (ucheck && pcheck){
            const username = $('#username').val();
            const password = $('#password').val();
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
                        $('#username').val("")
                        $('#password').val("")
                        $('#usernameErrorMessage').text("Username or Password is incorrect.");
                        $('#passwordErrorMessage').text("Username or Password is incorrect.");
                        $('#username').addClass("errorbox");
                        $('#usernameLabel').addClass("errortext");
                        $('#usernameError').show();
                        $('#password').addClass("errorbox");
                        $('#passwordLabel').addClass("errortext");
                        $('#passwordError').show();
                    }
                }
            });
        }
    }