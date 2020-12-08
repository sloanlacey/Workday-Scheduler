  var newDate = new Date();
  var nowDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  var displayDate = document.getElementById('currentDay');
  displayDate.innerHTML = nowDate;

// Render Rows
  var container = $('.container');
  var businessHours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

  for (let i = 0; i < businessHours.length; i++) {
      console.log(i);
    var row = $('<div>').addClass('row time-block');
    // Add id's to rows that iterate through array
    $(row).attr('id', (i + 9) + '-hour');
    container.append(row);
    var hourDisplay = $('<div>').addClass('col-1 hour');
    hourDisplay.text(businessHours[i]); 
    var textArea = $('<textarea>').addClass('col-10 description time-block');
    var saveBtn = $('<button>').addClass('saveBtn col-1');
    row.append(hourDisplay, textArea, saveBtn);
    var saveIcon = $('<i>').addClass('far fa-save');
    saveBtn.append(saveIcon);

  }
// Event Listeners
  $('.saveBtn').click(function() {
      alert('I have been clicked');
  });