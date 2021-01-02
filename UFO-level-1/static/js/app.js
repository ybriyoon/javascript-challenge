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