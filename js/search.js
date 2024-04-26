
$(document).ready(function(){
    $('body').css('visibility','visible');
});

if (sessionStorage.getItem('Authed') == "false" || sessionStorage.getItem('Authed') == null) {
    $('#model').prop('disabled',true);
    $('#year').prop('disabled',true);
    $('#make').prop('disabled',true);
    $('#search').prop('disabled',true);
    $('#errorLogin').css('display','inline-block');
    $('#logRegLinks').css('visibility','visible');
    $('#signout').css('display','none');
}
if (sessionStorage.getItem('Authed') == "true") {
    $('#model').prop('disabled',false);
    $('#year').prop('disabled',false);
    $('#make').prop('disabled',false);
    $('#search').prop('disabled',false);
    $('#errorLogin').css('display','none');
    $('#logRegLinks').css('visibility','hidden');
    $('#signout').css('display','inline-block');
}

$('#signout').click(signout);
function signout(){
    sessionStorage.setItem('Authed',"false");
    sessionStorage.setItem('Username',"");
    sessionStorage.setItem('Password',"");
    sessionStorage.setItem('UserType',"");
    window.location.href = 'register.html';

}

$('#search').click(getSafetyRatings);

    function getSafetyRatings() {
        const makeSearch = $('#make').val();
        const modelSearch = $('#model').val();
        const yearSearch = $('#year').val();

        console.log(makeSearch, modelSearch, yearSearch);
        $.ajax({
            type: "GET",
            url: 'https://js6i22vcp4.execute-api.us-east-1.amazonaws.com/FirstStage/GETYEARMAKEMODEL',
            async: true,
            data: {
                Year: yearSearch, 
                Make: makeSearch,
                Model: modelSearch
            },
            dataType: 'json',
            success: function(data) {
                console.log(data);
                sessionStorage.setItem('results',JSON.stringify(data));                
                window.location.href = 'results.html';
            }
        });
    }
