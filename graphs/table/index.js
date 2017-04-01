
module.exports = function module(name, width, height, data) {

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    d3.select(name).selectAll("*").remove();

    var table = d3.select(name).append('div')
        .style("overflow-y", "scroll")
        .style("height", window.innerHeight*0.6-40+"px").append('table')
        .classed("table", true)
        .classed("table-bordered", true)
        .classed("table-striped", true);
        var thead = table.append('thead')
        var tbody = table.append('tbody');

        // append the header row
        thead.append('tr')
          .selectAll('th')
          .data(data.fields).enter()
          .append('th')
            .text(function (column) { return column.name; });

        // create a row for each object in the data
        var rows = tbody.selectAll('tr')
          .data(data.rows)
          .enter()
          .append('tr');

        // create a cell in each row for each column
        var cells = rows.selectAll('td')
          .data(function (row) {
            return data.fields.map(function (column) {
              return {column: column, value: row[column.name]};
            });
          })
          .enter()
          .append('td')
            .text(function (d) { return d.value; });


};