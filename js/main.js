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
  .attr('fill', 'pink')
  //point selected
  .on('mouseover', function () {
    d3.select(this)
      .attr('stroke', 'black')
      .attr('stroke-width',3)
  })
  // point unselected
  .on('mouseout', function () {
    d3.select(this)
      .attr('stroke-width',0)
  })
  // Click functionality
  .on("click", function(){
    // Array of colors to choose at every click
    var colors = ['#23049D','#AA2EE6','#FF79CD','#FFDF6B','#FA9905','#FF5200','#9EDE73','#98DED9','#E8F044','#323EDD','#DC2ADE','#FFD5E5','#C0FFB3'];
    // Random index generator
    var randomChoice = Math.floor(Math.random() * colors.length);
    // Change circle color to random selection
    d3.select('circle').style("fill", colors[randomChoice])
  })
  //drag functionality
  .call(d3.drag() // https://stackoverflow.com/a/64596477
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
  // point selected
  .on('mouseover', function () {
    d3.select(this)
      .attr('stroke', 'black')
      .attr('stroke-width',3)
  })
  // point unselected
  .on('mouseout', function () {
    d3.select(this)
      .attr('stroke-width',0)
  })
  //drag functionality
  .call(d3.drag()
    .on('start', dragStart)
    .on('drag', dragCircle)
    .on('end', dragEnd)
  )
  // Double click functionality
  .on("dblclick", function(){
    // Check the color of the circle element
    var nextColor = this.style.fill == "pink" ? "#b2df8a" : "pink";
    // Update with toggle value
    d3.select(this).style("fill", nextColor)
    // Change square according to circle actual value
    if (this.style.fill == "pink") {
      d3.select('rect').style("fill", '#b2df8a')
    } else {
      d3.select('rect').style("fill", 'pink')
    };
  });

  //drag event started
  function dragStart(event,d){
    // make drag and click events work independently
    event.stopPropagation(); //https://stackoverflow.com/a/10096323
  }
      
  // drag event for an object with x and y attributes
  function dragRect(event,d){
    //get mouse coordinates
    var xCoor = event.x;
    var yCoor = event.y;
    //set mouse coordinates on object
    d3.select(this)
      .attr("x", xCoor)
      .attr("y", yCoor);
    // put object on top
    this.parentNode.appendChild(this); // https://stackoverflow.com/a/18362953
  }

  // drag event for an object with cx and cy attributes
  function dragCircle(event,d){
    //get mouse coordinates
    var xCoordinates = event.x;
    var yCoordinates = event.y;
    //set mouse coordinates on object
    d3.select(this)
      .attr("cx", xCoordinates)
      .attr("cy", yCoordinates);
    // put object on top
    this.parentNode.appendChild(this); // https://stackoverflow.com/a/18362953
  }
  
  //required for drag
  function dragEnd(event,d){
  }