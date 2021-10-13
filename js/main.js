// write your javascript code here.
// feel free to change the pre-set attributes as you see fit

let margin = {
    top: 60,
    left: 50,
    right: 30,
    bottom: 35
  },
  width = 500 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

//SVG that will hold the visualization 
let svg = d3.select('#vis')
  .append('svg')
  .attr('preserveAspectRatio', 'xMidYMid meet') // this will scale your visualization according to the size of its parent element and the page.
  .attr('width', '100%') // this is now required by Chrome to ensure the SVG shows up at all
  .style('background-color', 'white') 
  .style('border', 'solid')
  .attr('viewBox', [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))

// Add a square 
let rect = svg.append('rect')
  .attr('x', '100')
  .attr('y', '200')
  .attr('width', '20%')
  .attr('height', '20%')
  .attr('fill', '#a6cee3')
  .on("dblclick", function(){var nextColor = this.style.fill == "white" ? "magenta" : "white";
        d3.select(this).style("fill", nextColor);})
  .on('mouseover', function () {
    d3.select(this)
      .attr('stroke', '#4598C4')
      .attr('stroke-width',3)
  })
    // point unselected
  .on('mouseout', function () {
    d3.select(this)
      .attr('stroke-width',0)
  })
  // https://stackoverflow.com/a/64596477
  .call(d3.drag()
    .on('start', dragStart)
    .on('drag', dragRect)
    .on('end', dragEnd)
  );

// Add a circle 
let circle = svg.append('circle') 
  .attr('cx', '350')
  .attr('cy', '250')
  .attr('r', '60')
  .attr('fill', '#b2df8a')
  .on('mouseover', function () {
    d3.select(this)
      .attr('stroke', '#80CA3F')
      .attr('stroke-width',3)
  })
    // point unselected
  .on('mouseout', function () {
    d3.select(this)
      .attr('stroke-width',0)
  })
  .call(d3.drag()
    .on('start', dragStart)
    .on('drag', dragCircle)
    .on('end', dragEnd)
  );

  function dragStart(event,d){
    this.parentNode.appendChild(this) // https://stackoverflow.com/a/18362953
  }
      
  function dragRect(event,d){
    var xCoor = event.x;
    var yCoor = event.y;
    d3.select(this)
      .attr("x", xCoor)
      .attr("y", yCoor);
  }

  function dragCircle(event,d){
    var xCoor = event.x;
    var yCoor = event.y;
    d3.select(this)
      .attr("cx", xCoor)
      .attr("cy", yCoor);
  }
  
  function dragEnd(event,d){
  }