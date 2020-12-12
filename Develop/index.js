//   Display current date and time at the top of the application
  var newDate = new Date();
  var nowDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  var displayDate = document.getElementById('currentDay');
  displayDate.innerHTML = nowDate;
//   Variables for time
  var m = moment();
  var nowTime = m.format('LTS');
  var nowHour = newDate.getHours();

// Reference container in HTML
  var container = $('.container');
// Hour arrays for time display local storage connections
  var businessHours = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
  var twentyFourHourTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];
// Call render rows function at the beginning of the file so it always populates upon opening the page
renderRows();

// Render Rows
  function renderRows() {
  for (i = 0; i < twentyFourHourTime.length; i++) {
    var row = $('<div>');
    row.addClass('row time-block');
// Add id's to rows that iterate through array of rows
    $(row).attr('id', (i + 9) + '-hour');
    container.append(row);
// Render business hours on left side display
   for (j = 0; j < businessHours.length; j++) {
    var hourDisplay = $('<div>').addClass('col-1 hour');
    hourDisplay.text(businessHours[i]);    
   }

// Row colors
    if (nowHour > twentyFourHourTime[i]) {
        row.addClass('past');
    }
    else if (nowHour < twentyFourHourTime[i]) {
        row.addClass('future');
  }
    else if (nowHour == twentyFourHourTime[i]) {
        row.addClass('present');
    }
// Render text boxes and save buttons with a save icon
    var textArea = $('<textarea>').addClass('col-10 description time-block textarea').attr('id', twentyFourHourTime[i]);
    var saveBtn = $('<button>').addClass('saveBtn col-1').attr('id', twentyFourHourTime[i]);
    row.append(hourDisplay, textArea, saveBtn);
    var saveIcon = $('<i>').addClass('far fa-save');
    saveBtn.append(saveIcon);  
// The getTasks variable section needs to be inside the render rows function in order to work
// If I had it as a separate function I would need it to be outside and called at the beginning of the JS file
// This is what will get the items saved in locla storage to populate to the page upon refresh
    var getTasks = localStorage.getItem(twentyFourHourTime[i]);
    if (localStorage.key(i) === $('.textarea').attr('id')); {
        textArea.text(JSON.parse(getTasks));
    }

   }

}

// Event listener for clicking any of the save buttons--it calls the function for storing the task list
$('.saveBtn').click(dailyTasks);
// Function for saving daily tasks in day planner
   function dailyTasks() {
    var key = $(this).attr('id');
    var value = $(this).siblings('textarea').val();
    localStorage.setItem(key, JSON.stringify(value));
   }
// Clear button function that removes all items from local storage and reloads page
$('.clear-button').click(clearTasks);
   function clearTasks() {
    var key = $(this).attr('id');
    var value = $(this).siblings('textarea').val();  
    localStorage.clear(key, value);
    location.reload();
   }




    

