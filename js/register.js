$('#register2').hide();
$('#usernameError').hide();
$('#passwordError').hide();
$('#customerbutton').click(customerRegchange);
$('#representativebutton').click(representativeRegchange);
$('#register').click(getRegisterInfo);
sessionStorage.setItem('Authed',"false");
sessionStorage.setItem('Username',"");
sessionStorage.setItem('Password',"");
sessionStorage.setItem('UserType',"");

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


    function getRegisterInfo() {
        $('#username').removeClass("errorbox");
        $('#usernameLabel').removeClass("errortext");
        $('#usernameError').hide();
        $('#password').removeClass("errorbox");
        $('#passwordLabel').removeClass("errortext");
        $('#passwordError').hide();

        let ucheck = usernameCheck();
        let pcheck = passwordCheck();
        if (ucheck && pcheck){
            let username = $('#username').val();
            let password = $('#password').val();
            const userType = sessionStorage.getItem('UserType')
            console.log(username, password, userType);
            $.ajax({
                type: "GET",
                url: 'https://js6i22vcp4.execute-api.us-east-1.amazonaws.com/FirstStage/SignUp',
                async: true,
                data: {
                    Username: username, 
                    Password: password,
                    UserType: userType
                },
                dataType: 'text',
                success: function(data) {
                    if (data == "successful") {
                        console.log(data);
                        console.log("success")
                        sessionStorage.setItem('Username',username);
                        sessionStorage.setItem('Password',password);
                        sessionStorage.setItem('UserType',userType);
                        sessionStorage.setItem('Authed',"true");
                        window.location.href = 'search.html';
                    } else {
                        console.log("failure")
                        $('#username').val("")
                        $('#password').val("")
                        $('#usernameErrorMessage').text("Username is taken.");
                        $('#username').addClass("errorbox");
                        $('#usernameLabel').addClass("errortext");
                        $('#usernameError').show();

                    }
                }
            });
        }
        
    }


function customerRegchange(){
    $('#register1').hide();
    $('#register2').show();
    sessionStorage.setItem('UserType',"Customer")
    console.log(sessionStorage.getItem('UserType'))
}

function representativeRegchange(){
    $('#register1').hide();
    $('#register2').show();
    sessionStorage.setItem('UserType','Representative')
    console.log(sessionStorage.getItem('UserType'))
}

