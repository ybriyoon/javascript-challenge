// get table
var tableData = data;
let tbody = d3.select("tbody");
let filtered = 0;
   
tableData.forEach(data => {
    var row = tbody.append("tr");
    Object.entries(data).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Listen for events and search through the `date/time`
var button = d3.select("#filter-btn");
// var reset = d3.select("#reset-btn");

button.on("click", function() {
  var date_input = d3.select("#datetime");
  var input_value = date_input.property("value");
  console.log(input_value);
  tbody.html("");

// Filter by date
  var filtered = tableData.filter(data => data.datetime === input_value);
  console.log(filtered);
  if (filtered.length >= 1) {
    filtered.forEach(filtered_data => {
      var row = tbody.append("tr");
      Object.entries(filtered_data).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  } else {
    tbody.append("h5").text("No sightings on the entered date.");
  }
});

// // reset table to original display
// function resetData(){
//     // Prevent the page from refreshing
//     d3.event.preventDefault();

//     // reset the form
//     document.forms['ufo-form'].reset()

//     // flag that table is not filtered
//     filtered = 0;

//     // wipe out the tbody to be able to write out new table
//     tbody.html("");

//     // fill in observations only where date matches user input
//     tableData.forEach(row => {
//         tbody.append("tr");
    
//         for (key in row){
//             const cell = tbody.append("td");
//             cell.text(row[key]);
//         }
//     });
// }