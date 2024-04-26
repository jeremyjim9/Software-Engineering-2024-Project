$(document).ready(function(){
    $('body').css('visibility','visible');
});
if (sessionStorage.getItem('Authed') == "false") {
    window.location.href = 'search.html';
}
$('#shadow-box').hide();
$(document).ready(function() {
    const storedData = sessionStorage.getItem('results');
        if (storedData) {
            $('#shadow-box').show();
            const data = JSON.parse(storedData);
            console.log(data);
            $.each(data, function(i, safetyRating) {

                // get the necessary data from the json file
                const year = safetyRating.Year;
                const vehicle_id = safetyRating.Vehicle_ID;
                const overallRating = safetyRating.OverallRating;
                const make = safetyRating.Make;
                const model = safetyRating.Model;
                const vehicleDescription = safetyRating.VehicleDescription;
                const complaintsCount = safetyRating.ComplaintsCount;
                const vehiclePicture = safetyRating.VehiclePicture;
                const frontCrashPicture = safetyRating.FrontCrashPicture;
                const sideCrashPicture = safetyRating.SideCrashPicture;
                const sidePolePicture = safetyRating.SidePolePicture;
                const frontCrashVideo = safetyRating.FrontCrashVideo;
                const sideCrashVideo = safetyRating.SideCrashVideo;
                const sidePoleVideo = safetyRating.SidePoleVideo;
                const overallFrontCrashRating = safetyRating.OverallFrontCrashRating;
                const overallSideCrashRating = safetyRating.OverallSideCrashRating;
                const rolloverRating = safetyRating.RolloverRating;
                const recallsCount = safetyRating.RecallsCount;
                const investigationCount = safetyRating.InvestigationCount;


            console.log(year, vehicle_id, overallRating, make, model, vehicleDescription, complaintsCount, vehiclePicture);
            console.log(overallFrontCrashRating, overallSideCrashRating, rolloverRating, recallsCount, investigationCount);
            console.log(sessionStorage.getItem('UserType'))
            var safetyRatingHtml = ""
            if (sessionStorage.getItem('UserType') == "Customer") {
                safetyRatingHtml = `
                <section class="shadow">
                    <div class="card mb-3 mx-0">
                        <div class="row g-0">
                            <div class="col-sm-4 align-self-center">
                                <img class="card-img rounded p-1" src="${vehiclePicture}" alt="">
                            </div>
                            <div class="col-sm-8">
                                <div class="row g-0">
                                    <div class="col-6">
                                        <div class="card-body">
                                            <h5 class="card-title fs-4">${make}: ${model}</h5>
                                            <p class="card-text text-secondary fs-4">${vehicleDescription}</p>

                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="card-body text-success">
                                            <h5 class="card-title fs-5 text-end">${year}</h5>
                                            <p class="card-text fs-5 text-end">Overall Rating: ${overallRating}</p>
                                            <p class="card-text fs-5 text-end">Front Crash Rating: ${overallFrontCrashRating}</p>
                                            <p class="card-text fs-5 text-end">Side Crash Rating: ${overallSideCrashRating}</p>
                                            <p class="card-text fs-5 text-end">Rollover Rating: ${rolloverRating}</p>
                                            <p class="card-text fs-5 text-end">Recalls Count: ${recallsCount}</p>
                                            <p class="card-text fs-5 text-end">Investigation Count: ${investigationCount}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`;
            } else if (sessionStorage.getItem('UserType') == "Representative") {
                safetyRatingHtml = `
                <section class="shadow">
                    <div class="card mb-3 mx-0">
                        <div class="row g-0">
                            <div class="col-sm-4 align-self-center">
                                <img class="card-img rounded p-1" src="${vehiclePicture}" alt="">
                                <img class="card-img rounded p-1" src="${frontCrashPicture}" alt="">
                                <img class="card-img rounded p-1" src="${sideCrashPicture}" alt="">
                                <img class="card-img rounded p-1" src="${sidePolePicture}" alt="">
                            </div>
                            <div class="col-sm-8">
                                <div class="row g-0">
                                    <div class="col-6">
                                        <div class="card-body">
                                            <h5 class="card-title fs-4">${make}: ${model}</h5>
                                            <p class="card-text text-secondary fs-4">${vehicleDescription}</p>
                                            <p class="card-text text-secondary">Complaints Count: ${complaintsCount}</p>
                                            <a href="${frontCrashVideo}"><button class="btn btn-primary">Front Crash Video</button></a>
                                            <a href="${sideCrashVideo}"><button class="btn btn-primary">Side Crash Video</button></a>
                                            <a href="${sidePoleVideo}"><button class="btn btn-primary">Side Pole Crash Video</button></a>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="card-body text-success">
                                            <h5 class="card-title fs-5 text-end">${year}</h5>
                                            <p class="card-text fs-5 text-end">Overall Rating: ${overallRating}</p>
                                            <p class="card-text fs-5 text-end">Front Crash Rating: ${overallFrontCrashRating}</p>
                                            <p class="card-text fs-5 text-end">Side Crash Rating: ${overallSideCrashRating}</p>
                                            <p class="card-text fs-5 text-end">Rollover Rating: ${rolloverRating}</p>
                                            <p class="card-text fs-5 text-end">Recalls Count: ${recallsCount}</p>
                                            <p class="card-text fs-5 text-end">Investigation Count: ${investigationCount}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`;
            }
            
            
            
            $('#safety-rating-container').append(safetyRatingHtml);
        });
    } else {
        console.error('No data found in Session Storage');
    }
});
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
