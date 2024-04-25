$('#register2').hide();
document.body.style.paddingTop = '8%'
$('#customerbutton').click(customerRegchange);
$('#representativebutton').click(representativeRegchange);
$('#register').click(getRegisterInfo);
sessionStorage.setItem('Authed',"false");
sessionStorage.setItem('Username',"");
sessionStorage.setItem('Password',"");
sessionStorage.setItem('UserType',"");

    function getRegisterInfo() {
        const username = $('#username').val();
        const password = $('#password').val();
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
                    $('#username').val("Invalid username used")
                    $('#password').val("")
                }
            }
        });
        
    }


function customerRegchange(){
    $('#register1').hide();
    $('#register2').show();
    document.body.style.paddingTop = '1%'
    sessionStorage.setItem('UserType',"Customer")
    console.log(sessionStorage.getItem('UserType'))
}

function representativeRegchange(){
    $('#register1').hide();
    $('#register2').show();
    document.body.style.paddingTop = '1%'
    sessionStorage.setItem('UserType','Representative')
    console.log(sessionStorage.getItem('UserType'))
}

