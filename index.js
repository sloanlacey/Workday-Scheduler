  var NowDate = new Date();
//   moment().format('MMMM Do YYYY, h:mm:ss a');
  var eDisplayDate = document.getElementById('currentDay');
  eDisplayDate.innerHTML = NowDate;

// Render Rows
  var container = $('.container');
  var hourArray = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

  for (i = 0; i < hourArray.length; i++) {
    var row = $('<div>').addClass('row time-block');
    container.append(row);
    var hourDisplay = $('<div>').addClass('col-1 hour');
    hourDisplay.text(hourArray[i]); 
    var textArea = $('<textarea>').addClass('col-10 description time-block');
    var saveBtn = $('<button>').addClass('saveBtn col-1');
    row.append(hourDisplay, textArea, saveBtn);
    var saveIcon = $('<i>').addClass('far fa-save');
    saveBtn.append(saveIcon);
  }