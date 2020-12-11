//   Display current date and time at the top of the application
  var newDate = new Date();
  var nowDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  var displayDate = document.getElementById('currentDay');
  displayDate.innerHTML = nowDate;
//   Variables
  var m = moment();
  var nowTime = m.format('LTS');
  var nowHour = newDate.getHours();

// Hours array
  var container = $('.container');
  var businessHours = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
  var twentyFourHourTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  renderRows();
  saveEnteredEvents();

function saveEnteredEvents() {
  $('.saveBtn').click (function () {
    // console.log($(this).siblings('textarea').val());
    const enterEvent = $(this).attr('enter-event');
    const key = `Event:${enterEvent}`;
    const value = $(this).siblings('textarea').val();
    localStorage.setItem(key, value);
    }) 
}

// Render Rows
  function renderRows() {
  for (i = 0; i < twentyFourHourTime.length; i++) {
    var row = $('<div>');
    row.addClass('row time-block');
// Add id's to rows that iterate through array
    $(row).attr('id', (i + 9) + '-hour');
    container.append(row);
// Render business hours on left side display
   for (j = 0; j < businessHours.length; j++) {
    var hourDisplay = $('<div>').addClass('col-1 hour');
    hourDisplay.text(businessHours[i]);    
   }
// Row colors
    if (nowHour < twentyFourHourTime[i]) {
        row.addClass('past');
    }
    else if (nowHour > twentyFourHourTime[i]) {
        row.addClass('future');
  }
    else if (nowHour == twentyFourHourTime[i]) {
        row.addClass('present');
    }
// Render text boxes and save buttons with a save icon
    var textArea = $('<textarea>').addClass('col-10 description time-block');
    textArea.attr('id', 'enter-event');
    var saveBtn = $('<button>').addClass('saveBtn col-1');
    saveBtn.attr('id', 'save-button');
    row.append(hourDisplay, textArea, saveBtn);
    var saveIcon = $('<i>').addClass('far fa-save');
    saveBtn.append(saveIcon);  
}
  }


// var enterInfo = document.getElementById('enter-event');
// var saveInfo = document.getElementsByClassName('saveBtn');

// // Event Listeners
// $('.saveBtn').click(function() {
//     $(this).parent();
//     localStorage.setItem('Event', enterInfo.value);


//     function getEvents() {
//         var events = localStorage.getItem('Event');
//         $('#enter-event').text(events);
//     }
//     getEvents();
// })





    

