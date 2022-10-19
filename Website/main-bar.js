
/* CONSTANTS AND GLOBALS */
const width = window.innerWidth * .9;
const height = 2200;
const margin = {
  top: 100,
  left: 250
};

const pastel1Colors = d3.scaleOrdinal(d3.schemePastel1);
const pastel2Colors = d3.scaleOrdinal(d3.schemePastel2);
const accentColors = d3.scaleOrdinal(d3.schemeAccent);
const schemeSet3Colors = d3.scaleOrdinal(d3.schemeSet3);


// Variables to be assigned in init() and used in draw()
let svg, 
xScale, 
yScale, 
xAxis,
yAxis,
colorScale,
xAxisGroup,
yAxisGroup;

// APPLICATION STATE #########################################
let state = {
  data: [],
  notebook: 1 
};


// IMPORT IN DATA ############################################
d3.csv("data_to_visualize/combined_data.csv", d3.autoType).then(imported_data => {
  
    // Save the imported data into state object
    state.data = imported_data;
    
    // Call init() function right after importing data
    init();
  });



// INITIALIZING FUNTION ######################################
function init() {

    // FILTER DATA =======================

    const filtered_data = state.data
        .filter(d => d.notebook === "1-eda")
        .sort((a, b) => b.score - a.score);



    // SCALES =================================================
    xScale = d3.scaleLinear()
      .domain(d3.extent(filtered_data, d => d.score))
      .range([0, width - margin.left * 1.25])
      .nice()

    yScale = d3.scaleBand()
      .domain(filtered_data.map(d => d.name))
      .range([0, height - margin.top])
      .paddingInner(.2)
      .paddingOuter(.1)

    colorScale = d3.scaleOrdinal()
        .domain(filtered_data.map(d => d.score > 0))
        .range(["#C1E1C1", "#FAA0A0"]);

    // // AXIS
    // xAxis = d3.axisBottom()
    //   .scale(xScale);

    // yAxis = d3.axisLeft()
    //   .scale(yScale);



    


    // CREATE MAIN SVG ELEMENT ==================================
    svg = d3.select("#bar-vis")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      // .style("background-color", "lavender");

    // + CALL AXES
    xAxisGroup = svg.select(".x-axis")
        // .attr("transform", `translate(${50}, ${heightForVis1 - margin.bottom})`)
        .call(d3.axisBottom(xScale));

    yAxisGroup = svg.select(".y-axis")
        // .attr("transform", `translate(${margin.right}, ${0})`)
        .call(d3.axisLeft(yScale));

      
    // AXIS TICKS  ----------------------------------------------
      
    // // xAxis ticks
    // svg.append("g")
    //   .attr("transform", `translate(${margin}, ${height - margin})`)
    //   .style("font-size", "0.8rem")
    //   .call(xAxis);

    // // yAxis ticks
    // svg.append("g")
    //   .attr("transform", `translate(${xScale(0) + margin}, 0)`)
    //   .style("font-size", "0.8rem")
    //   .call(yAxis);



    // AXIS LABELS ----------------------------------------------

    // yAxis title
    svg.append("text")
      .attr("y", margin.top / 3)
      .attr("x", -margin.left * 3.5)
      .attr("transform", "rotate(-90)")
      .style("font-weight", "bold")
      .style("font-size", "2.5rem")
      .text("Features")

  // USER INTERFACE SETUP FOR VIS OPTIONS ===================

  // Grab elements for listeners and values
  const selectMenu = d3.select("#dropdown");

  // Listen for user changes on menu and call draw
  selectMenu.on("change", event => {
    state.notebook = event.target.value;
    draw();
  });

  // Call draw function once Init() is finished for the first time
  draw(); 
}

// DRAW FUNCTION ####################################################
function draw() {

    // FILTER DATA =======================

    let filtered_data = state.data
        .filter(d => d.notebook[0] === String(state.notebook))
        .sort((a, b) => b.score - a.score);

    console.log(filtered_data);


    // + UPDATE SCALE(S), if needed
    xScale.domain(d3.extent(filtered_data, d => d.score)).nice()
    console.log(d3.extent(filtered_data, d => d.score))

    yScale.domain(filtered_data.map(d => d.name))

    // + UPDATE AXIS/AXES, if needed
    yAxisGroup
      .transition()
      .duration(1000)
      .call(d3.axisLeft(yScale))// need to udpate the scale

    xAxisGroup
      .transition()
      .duration(1000)
      .call(d3.axisBottom(xScale))// need to udpate the scale

//   // Tooltip Handling =============================================
//   const tooltip = d3.select("#tooltip");

//   // Tooltip Mouseover 
//   const tipMouseover = function(event, d) {

//     const tooltipHTML = `<b>Title:</b> ${d.Film}<br/>
//                           <b>Genre:</b> ${d.Genre}</span><br/>
//                           <b>Rotten Tomatoes:</b> ${d["Rotten Tomatoes Ratings %"]}%<br/>
//                           <b>Audience Ratings:</b> ${d["Audience Ratings %"]}%<br/> 
//                           <b>Budget:</b> $${d["Budget (million $)"]} million (USD)<br>
//                           <b>Year:</b> ${d["Year of release"]}`;

//     let color = colorScale(d.Genre);
//     let size = sizeScale(d["Budget (million $)"]);

//     tooltip.html(tooltipHTML)
//       .style("left", ((d.Film.length >= 20 ? // Dynamic positioning if long film title
//                         event.pageX - 160 - ((d.Film.length - 19) * 5) : 
//                         event.pageX - 160) + "px"))  
//       .style("top", (event.pageY - 120 - 0.5 * size + "px"))
//       .style("border", `${color} solid 0.2rem`) // Same border color as genre
//       .style("outline", "1px solid black")
//       .transition()
//         .duration(100) 
//         .style("opacity", .85) 

//     d3.select(this)
//       .transition()
//       .duration(100)
//       .style("opacity", 1);
//   };

//   // Tooltip Mouseout
//   const tipMouseout = function(d) {
//       tooltip.transition()
//           .duration(200) 
//           .style("opacity", 0); // Make tooltip div invisible

//       d3.select(this)
//       .transition()
//       .duration(200)
//       .style("opacity", 0.5);
//   };

// Draw SVG  ==========================================

    // bars
    svg.selectAll(".bar")
        .data(filtered_data, d => d.notebook + d.name)
        .join(
            enter => enter
              .append("rect")
                .attr("class", "bar")
                .attr("height", yScale.bandwidth())
                .attr("width", d => d.score > 0 ? 
                                    xScale(d.score) - xScale(0) :
                                    xScale(0) - xScale(d.score))
                .attr("x", d => d.score > 0 ? 
                                0 : -(xScale(0) - xScale(d.score)))
                .attr("y", d => yScale(d.name))
                .attr("fill", d => colorScale(d.score > 0))
                .attr("transform", `translate(${margin.left + xScale(0)}, 0)`)
                .attr("stroke", "grey")
              .call(enter => enter.transition()
              ),
              update => update,
              exit => exit
                .call(exit => exit.transition()
                  .remove()
                )
        );

    // bar numbers
    svg.selectAll(".bar-nums")
        .data(filtered_data, d => d.notebook + d.name)
        .join(
            enter => enter
              .append("text")
                .attr("class", "bar-nums")
                .style("font-size", "2rem")
                .attr("x", d => d.score > 0 ?
                                xScale(d.score) + margin.left + 10 :
                                -(xScale(0) - xScale(d.score)) + margin.left * 1.2)
                .attr("y", d => yScale(d.name) + yScale.bandwidth() / 2 + 10)
                .attr("opacity", 1)
                .text(d => Math.round(d.score * 100) / 100)
                .call(enter => enter.transition()
            ),
            update => update,
            exit => exit
                .call(exit => exit.transition()
                .remove()
                )
        );

    // yAxis Feature names
    svg.selectAll(".feature_name")
        .data(filtered_data, d => d.notebook + d.name)
        .join(
            enter => enter
              .append("text")
        .attr("class", "feature_name")
        .style("text-anchor", d => d.score > 0 ? "end" : "start")
        .style("font-size", "1.8rem")
        .attr("x", d => d.score > 0 ?
                            xScale(0) + margin.left - 10:
                            xScale(0) + margin.left + 10)
        .attr("y", d => yScale(d.name) + yScale.bandwidth() / 3 + 6)
        .attr("opacity", 1)
        .text(d => {
          
          let feat1 = `${d.name.split("~~")[0]}`;
          let tail = "_DemPos_RepNeg";

          if (feat1.indexOf(tail)) {
            feat1 = feat1.replace(tail, "");
          }

          return feat1;
        }),
        update => update,
        exit => exit
            .call(exit => exit.transition()
            .remove()
            )
    );

    // yAxis Feature names
      svg.selectAll(".feature_name2")
        .data(filtered_data, d => d.notebook + d.name)
        .join(
            enter => enter
              .append("text")
        .attr("class", "feature_name2")
        .style("text-anchor", d => d.score > 0 ? "end" : "start")
        .style("font-size", "1.8rem")
        .attr("x", d => d.score > 0 ?
                            xScale(0) + margin.left - 10:
                            xScale(0) + margin.left + 10)
        .attr("y", d => yScale(d.name) + yScale.bandwidth() / 1.35 + 10)
        .attr("opacity", 1)
        .text(d => {
          
          let feat2 = `${d.name.split("~~")[1]}`;
          let tail = "_DemPos_RepNeg";

          if (feat2.indexOf(tail)) {
            feat2 = feat2.replace(tail, "");
          }

          return feat2;
        }),
        update => update,
        exit => exit
            .call(exit => exit.transition()
            .remove()
            )
    );


    // xAxis title
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", width - margin.left * 1.5)
        .attr("y", height - margin.top * .5)
        .style("font-weight", "bold")
        .style("font-size", "2rem")
        .text(`${state.notebook < 3 ? "Pearson's R" : "Coefficient"}`);
};



