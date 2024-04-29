$(document).ready(function () {
  $('body').css('visibility', 'visible');
});
if (sessionStorage.getItem('Authed') == "false") {
  window.location.href = 'search.html';
}

$('#username').text(sessionStorage.getItem('Username'));
$('#cusRep').text(sessionStorage.getItem('UserType'));


const toastLiveExample = document.getElementById('liveToast')


$('#logout').click(function () {
  sessionStorage.setItem('Authed', 'false');
  window.location.href = 'search.html';
});


$('#shadow-box').hide();
$(document).ready(function () {
  const storedData = sessionStorage.getItem('results');
  if (storedData) {
    $('#shadow-box').show();
    const data = JSON.parse(storedData);
    console.log(data);
    $('#resultsAmt').text(data.length);
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();

    $.each(data, function (i, safetyRating) {

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
      const photos = [vehiclePicture, frontCrashPicture, sideCrashPicture, sidePolePicture];
      const videos = [frontCrashVideo, sideCrashVideo, sidePoleVideo];


      console.log(year, vehicle_id, overallRating, make, model, vehicleDescription, complaintsCount, vehiclePicture);
      console.log(overallFrontCrashRating, overallSideCrashRating, rolloverRating, recallsCount, investigationCount);
      console.log(sessionStorage.getItem('UserType'))
      var safetyRatingHtml = ""
      if (sessionStorage.getItem('UserType') == "Customer") {
        safetyRatingHtml = `<div class="card my-3" id="resultsCard">
              <div class="card-header p-2" id="resultsCardHeader">
                ${vehicleDescription}
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-5 col-12">
                    <div class="container w-100">
                      <div id="carousel${i}" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">`;
        if (photos === null || photos.length === 0) {
          safetyRatingHtml += `<div class="carousel-item active">
                    <div class="container" id="cardImage">
                      <img
                        src="images/logos.svg"
                        class="d-block img-fluid w-100"
                        onerror="this.onerror=null;this.src='images/logo.jpg';"
                        alt="No Images Available"
                      >
                    </div></div></div>
                    <button class="carousel-control-prev" type="button"
                      data-bs-target="#carousel${i}"
                      data-bs-slide="prev">
                      <span class="carousel-control-prev-icon"
                        aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button"
                      data-bs-target="#carousel${i}"
                      data-bs-slide="next">
                      <span class="carousel-control-next-icon"
                        aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                  `;
        }
        else {
          let x = 0;
          while (x < photos.length) {
            if (x === 0) {
              safetyRatingHtml += `<div class="carousel-item active">
                    <div class="container" id="cardImage">
                      <img
                        src="${photos[x]}"
                        class="d-block img-fluid w-100"
                        onerror="this.onerror=null;this.src='images/logo.jpg';"
                        alt="No Images Available"
                      >
                    </div></div>`;
            }
            /*
            else {
              safetyRatingHtml += `<div class="carousel-item">
                    <div class="container" id="cardImage">
                      <img
                        src="${photos[x]}"
                        class="d-block img-fluid w-100"
                        onerror="this.onerror=null;this.src='images/logo.jpg';"
                        alt="No Images Available"
                      >
                    </div>
                  </div>`;
            }
            */
            x++;
          }
          safetyRatingHtml += `
              </div>
              <button class="carousel-control-prev" type="button"
                data-bs-target="#carousel${i}"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon"
                  aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button"
                data-bs-target="#carousel${i}"
                data-bs-slide="next">
                <span class="carousel-control-next-icon"
                  aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            `;
        }

        safetyRatingHtml += `
                </div>
          </div>
          <div class="col-md-7 col-12">
            <div class="row">
              <div class="col">
                <h5>Make:</h5>
                <h5>Model:</h5>
                <h5>Year:</h5>
                <h5>Overall Rating:</h5>
                <h5>Front Crash Rating:</h5>
                <h5>Side Crash Rating:</h5>
                <h5>Rollover Rating:</h5>
                <h5>Recalls:</h5>
                <h5>Investigations:</h5>
              </div>
              <div class="col text-end">
                <h5 class="ratings">${make}</h5>
                <h5 class="ratings">${model}</h5>
                <h5 class="ratings">${year}</h5>
                <h5 class="ratings">${starsCalc(overallRating)}</h5>
                <h5 class="ratings">${starsCalc(overallFrontCrashRating)}</h5>
                <h5 class="ratings">${starsCalc(overallSideCrashRating)}</h5>
                <h5 class="ratings">${starsCalc(rolloverRating)}</h5>
                <h5 class="ratings">${recallsCount}</h5>
                <h5 class="ratings">${investigationCount}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

      } else if (sessionStorage.getItem('UserType') == "Representative") {


        safetyRatingHtml = `<div class="card my-3" id="resultsCard">
              <div class="card-header p-2" id="resultsCardHeader">
                ${vehicleDescription}
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-5 col-12">
                    <div class="container w-100">
                      <div id="carousel${i}" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">`;
        if ((photos === null || photos.length === 0) && videos.length === 0) {
          safetyRatingHtml += `<div class="carousel-item active">
                    <div class="container" id="cardImage">
                      <img
                        src="images/logos.svg"
                        class="d-block img-fluid w-100"
                        onerror="this.onerror=null;this.src='images/logo.jpg';"
                        alt="No Images Available"
                      >
                    </div></div>`;
        }
        else {
          let x = 0;
          while (x < photos.length) {
            if (x === 0) {
              safetyRatingHtml += `<div class="carousel-item active">
                    <div class="container" id="cardImage">
                      <img
                        src="${photos[x]}"
                        class="d-block img-fluid w-100"
                        onerror="this.onerror=null;this.src='images/logo.jpg';"
                        alt="No Images Available"
                      >
                    </div></div>`;
            }
            else {
              safetyRatingHtml += `<div class="carousel-item">
                    <div class="container" id="cardImage">
                      <img
                        src="${photos[x]}"
                        class="d-block img-fluid w-100"
                        onerror="this.onerror=null;this.src='images/logo.jpg';"
                        alt="No Images Available"
                      >
                    </div>
                  </div>`;
            }
            x++;
          }
        }

         if (videos.length > 0) {
          let x = 0;
          while (x < videos.length) {
            if (x === 0 && (photos === null || photos.length === 0)) {
              safetyRatingHtml += `<div class="carousel-item active">
                    <div class="container" id="cardImage">
                        <video width="100%" height="100%" controls>
                        <source src="${videos[x]}" type="video/mp4">
                        <source src="${videos[x]}" type="video/ogg">
                        Your browser does not support the video tag.
                    </video>
                    </div></div>`;
            }
            else {
              safetyRatingHtml += `<div class="carousel-item">
                    <div class="container" id="cardImage">
                    <video width="100%" height="100%" controls>
                    <source src="${videos[x]}" type="video/mp4">
                    <source src="${videos[x]}" type="video/ogg">
                    Your browser does not support the video tag.
                </video>
                    </div>
                  </div>`;
            }
            x++;
          }
        } 

        safetyRatingHtml += `
              </div>
              <button class="carousel-control-prev" type="button"
                data-bs-target="#carousel${i}"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon"
                  aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button"
                data-bs-target="#carousel${i}"
                data-bs-slide="next">
                <span class="carousel-control-next-icon"
                  aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            `;

        safetyRatingHtml += `
              </div>
          </div>
          <div class="col-md-7 col-12">
          <div class="row">
            <div class="col ">
              <h5>Make:</h5>
              <h5>Model:</h5>
              <h5>Year:</h5>
              <h5>Overall Rating:</h5>
              <h5>Front Crash Rating:</h5>
              <h5>Side Crash Rating:</h5>
              <h5>Rollover Rating:</h5>
              <h5>Recalls:</h5>
              <h5>Investigations:</h5>
              <h5>Complaints:</h5>
            </div>
            <div class="col text-end">
            <h5 class="ratings">${make}</h5>
            <h5 class="ratings">${model}</h5>
            <h5 class="ratings">${year}</h5>
            <h5 class="ratings">${starsCalc(overallRating)}</h5>
            <h5 class="ratings">${starsCalc(overallFrontCrashRating)}</h5>
            <h5 class="ratings">${starsCalc(overallSideCrashRating)}</h5>
            <h5 class="ratings">${starsCalc(rolloverRating)}</h5>
            <h5 class="ratings">${recallsCount}</h5>
            <h5 class="ratings">${investigationCount}</h5>
            <h5 class="ratings">${complaintsCount}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
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
    success: function (data) {
      console.log(data);
      sessionStorage.setItem('results', JSON.stringify(data));
      window.location.href = 'results.html';
    }
  });
}

function starsCalc(rating) {
  if(rating === null || rating === "Not Rated"){
    return "Not Rated";
  }
  else{
    let x = 0;
  let stars = "<div>";
  while (x < rating) {
    stars += `<span class="fa fa-star checked"></span>`;
    x++
  }
  while (x < 5) {
    stars += `<span class="fa fa-star"></span>`;
    x++;
  }
  stars += "</div>";
  return stars;
  }
}
