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
                
                $('#safety-rating-container').append('' +
                    '<section class="shadow">' +
                    '   <div class="card mb-3 mx-0">\n' +
                    '           <div class="row g-0">\n' +
                    '                    <div class="col-sm-4 align-self-center">\n' +
                    `                        <img class="card-img rounded p-1" src="${vehiclePicture}"  alt="No Image">\n` +
                    `                        <img class="card-img rounded p-1" src="${frontCrashPicture}"  alt="No Image">\n` +
                    `                        <img class="card-img rounded p-1" src="${sideCrashPicture}"  alt="No Image">\n` +
                    `                        <img class="card-img rounded p-1" src="${sidePolePicture}"  alt="No Image">\n` +
                    '                    </div>\n' +
                    '                    <div class="col-sm-8">\n' +
                                '           <div class="row g-0">\n' +
                            '                    <div class="col-6">\n' +
                            '                        <div class="card-body">\n' +
                            `                            <h5 class="card-title fs-4">${make}: ${model}</h5>\n` +
                            `                            <p class="card-text text-secondary fs-4">${vehicleDescription}</p>\n` +
                            `                            <p class="card-text text-secondary">Complaints Count: ${complaintsCount}</p>\n` +
                            `                            <a href="${frontCrashVideo}"><button class="btn btn-primary">Front Crash Video</button></a>\n` +
                            `                            <a href="${sideCrashVideo}"><button class="btn btn-primary">Side Crash Video</button></a>\n` +
                            `                            <a href="${sidePoleVideo}"><button class="btn btn-primary">Side Pole Crash Video</button></a>\n` +
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
        } else {
            console.error('No data found in Session Storage');
        }
    });
