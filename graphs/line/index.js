
module.exports = function module(name, width, height, data) {
    var col = data.fields;
    data = data.rows;
    var color = d3.scaleOrdinal(d3.schemeCategory10);
    var tmpi = 0;

    // set the dimensions and margins of the graph
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = width - margin.left - margin.right,
        height = height - margin.top - margin.bottom;

    // parse the id / time

    // set the ranges
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);



    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    d3.select(name).selectAll("*").remove();
    var svg = d3.select(name)
                    .append('svg')
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");



      // Scale the range of the data
      x.domain(d3.extent(data, function(d) { return d[Object.keys(d)[0]]; }));
      if (data.length) {
            var keys = Object.keys(data[0]);
            var all = [];
            keys.splice(0, 1);
            keys.forEach(function (i){
                all = all.concat(data.map(function(d){
                    return d[i];
                }));
            });
            y.domain(d3.extent(all));
        }

      var mostra_eixo = function (field) {
        // define the 1st line
        var valueline = d3.line()
        .x(function(d) { return x(d[Object.keys(d)[0]]); })
        .y(function(d) { return y(d[field]); });

          // Add the valueline path.
          svg.append("path")
              .data([data])
              .attr("class", "line")
              .attr("d", valueline)
              .style("stroke", color(tmpi++))
              .style("stroke-width", 2)
              .style("fill", "none");
      }

      if (data.length) {
        var keys = Object.keys(data[0]);
        var all = [];
        keys.splice(0, 1);
        keys.forEach( function (i){
            mostra_eixo(i);
        });
    }

      // Add the X Axis
      svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

      // Add the Y Axis
      svg.append("g")
          .call(d3.axisLeft(y));



};