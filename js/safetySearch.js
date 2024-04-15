
// Homework 4 - William Horton
// This is the javascript file for ticketmaster.html

// set the outershadow box to hidden
$('#shadow-box').hide();

// Store the alert message
const alertPlaceholder = document.getElementById('alertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type}" role="alert">`,
    `   <div>${message}</div>`,
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}
// Create the alert event upon click
// - depending on what conditions are met in the search term and city the text will be different

const alertTrigger = document.getElementById('get-safety-ratings')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
      $('#alertPlaceholder').empty();
      //if ($('#make-input').val() || "" && $('#model-input').val() === "" || $('#year-input').val() === "")
      //{
      //    appendAlert('Search term and city cannot be empty. Please enter a search term and city.', 'danger');
      //} 

  })
}

// upon the search being clicked
$('#get-safety-ratings').click(getSafetyRatings);

    function getSafetyRatings() {
        // set the outer shadow border to visible
        $('#shadow-box').show();

        // get the search term and the city name
        const makeSearch = $('#make-input').val();
        const modelSearch = $('#model-input').val();
        const yearSearch = $('#year-input').val();

        // if either box are empty then return - the alert event will be handled
        //if (classificationSearch === "" || citySearch === "") {
        //    return;
        //}
        console.log(makeSearch, modelSearch, yearSearch);

        //var sendInfo = {Year: yearSearch, city: modelSearch, sort: makeSearch}
        // Make an AJAX request
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

                // Clear the both divs before adding events
                $('#safety-rating-container').empty();
                //$('#amount-of-results').empty();

                // if the data returned is empty, then notify the user and return
                //if (data._embedded === undefined) {
                //    $('#amount-of-results').append('' +
                //        '<p class="my-auto align-middle mx-5 fs-5">\n' +
                //            'Sorry... No results were found for the entered search term and city.\n' +
                //        '</p>');
                //    return;
                //}

                // notify the user on the amount of results
                //const numberOfResults = data._embedded.events.length;
                //$('#amount-of-results').append('' +
                //    '<p class="align-middle text-secondary mx-5 fs-4">\n' +
                //        `${numberOfResults} result(s) found\n` +
                //    '</p>');


                // for each event, execute
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
                    const vehicleVideo = safetyRating.VehicleVideo;
                    const overallFrontCrashRating = safetyRating.OverallFrontCrashRating;
                    const overallSideCrashRating = safetyRating.OverallSideCrashRating;
                    const rolloverRating = safetyRating.RolloverRating;
                    const recallsCount = safetyRating.RecallsCount;
                    const investigationCount = safetyRating.InvestigationCount;


                    console.log(year, vehicle_id, overallRating, make, model, vehicleDescription, complaintsCount, vehiclePicture, vehicleVideo);
                    console.log(overallFrontCrashRating, overallSideCrashRating, rolloverRating, recallsCount, investigationCount);

                    // Append our the event card onto page
                    
                    $('#safety-rating-container').append('' +
                        '<section class="shadow">' +
                        '   <div class="card mb-3 mx-0">\n' +
                        '           <div class="row g-0">\n' +
                        '                    <div class="col-sm-4 align-self-center">\n' +
                        `                        <img class="card-img rounded p-1" src="${vehiclePicture}"  alt="event-image">\n` +
                        '                    </div>\n' +
                        '                    <div class="col-sm-8">\n' +
                                    '           <div class="row g-0">\n' +
                                '                    <div class="col-6">\n' +
                                '                        <div class="card-body">\n' +
                                `                            <h5 class="card-title fs-4">${make}: ${model}</h5>\n` +
                                `                            <p class="card-text text-secondary fs-4">${vehicleDescription}</p>\n` +
                                `                            <p class="card-text text-secondary">Complaints Count: ${complaintsCount}</p>\n` +
                                `                            <a href="${vehicleVideo}"><button class="btn btn-primary">Vehicle Video</button></a>\n` +
                                '                        </div>\n' +
                                '                    </div>\n' +
                                    '                <div class="col-6">\n' +
                                    '                    <div class="card-body text-success">\n' +
                                    `                       <h5 class="card-title fs-5 text-end">${year}</h5>\n` +
                                    `                       <p class="card-text fs-5 text-end">Overall Rating: ${overallRating}</p>\n` +
                                    `                       <p class="card-text fs-5 text-end">Front Crash Rating: ${overallFrontCrashRating}</p>\n` +
                                    `                       <p class="card-text fs-5 text-end">Side Crash Rating: ${overallSideCrashRating}</p>\n` +
                                    `                       <p class="card-text fs-5 text-end">Rollover Rating: ${rolloverRating}</p>\n` +
                                    `                       <p class="card-text fs-5 text-end">Recalls Count: ${recallsCount}</p>\n` +
                                    `                       <p class="card-text fs-5 text-end">Investigation Count: ${investigationCount}</p>\n` +
                                    '                    </div>\n' +
                                    '                </div>\n' +
                                '                </div>\n' +
                            '                </div>\n' +
                        '          </div>\n' +
                        '  </div>\n' +
                        '</section>');
                });
                
            }
        });
    }
