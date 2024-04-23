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
