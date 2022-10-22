
// CONSTANTS AND GLOBALS #########################################

const width = window.innerWidth * .92;

// Change height & margin change based on selected notebook
let height = 1800;
let margin = {
  top: 100,
  left: 200
};

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



    // CREATE MAIN SVG ELEMENT ==================================
    svg = d3.select("#bar-vis")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "lavender");


    // AXIS TICKS ==================================

    xAxisGroup = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${height - margin.top})`)
        .style("font-size", "1.5rem")
        .call(d3.axisBottom(xScale));

    // yAxisGroup = svg.append("g")
    //     .attr("transform", `translate(${100}, ${100})`)
    //     .call(d3.axisLeft(yScale));



  // USER INTERFACE SETUP FOR VIS OPTIONS ===================

  // Grab the dropdown menu
  const selectMenu = d3.select("#dropdown");

  // Listen for user changes on menu and call draw
  selectMenu.on("change", event => {
    state.notebook = event.target.value;

    // Update this vis only if unsupervised not selected
    if (state.notebook < 5) {

      // clears out xAxis title, so it doesn't overlap
      d3.select(".xAxis-title").remove();
      d3.select(".yAxis-title").remove();


      // Adjusts height based on notebook
      height = state.notebook > 1 ? 1000 : 1800;
      svg.attr("height", height)

      // Adjust margin based on notebook
      margin.left = state.notebook > 1 ? 110: 200;


      draw();
    }
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


  // UPDATE SCALES =====================

  xScale = d3.scaleLinear()
    .domain(d3.extent(filtered_data, d => d.score))
    .range([0, width - margin.left * 1.25])
    .nice()

  yScale = d3.scaleBand()
    .domain(filtered_data.map(d => d.name))
    .range([0, height - margin.top])
    .paddingInner(.2)
    .paddingOuter(.1)

  // xScale.domain(d3.extent(filtered_data, d => d.score)).nice()

  // yScale.domain(filtered_data.map(d => d.name))


  // UPDATE AXES ======================
  // yAxisGroup
  //   .transition()
  //   .duration(500)
  //   .call(d3.axisLeft(yScale))// need to update the scale

  xAxisGroup
    .transition()
    .duration(500)
    .attr("transform", `translate(${margin.left}, ${height - margin.top})`)
    .call(d3.axisBottom(xScale))// need to update the scale


  // DRAW ==========================================

    // Draw Bars
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

    // Bar Numbers
    svg.selectAll(".bar-nums")
        .data(filtered_data, d => d.notebook + d.name)
        .join(
            enter => enter
              .append("text")
                .attr("class", "bar-nums")
                .style("font-size", "2rem")
                .attr("x", d => d.score > 0 ?
                                xScale(d.score) + margin.left + 10 :
                                -(xScale(0) - xScale(d.score)) + margin.left * 1.35
                                + (+state.notebook === 4 ? xScale(0) * .6 :
                                    state.notebook > 1 ? xScale(0) * .65 : 0))
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

    // Y-axis Feature Names: Line 1
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
        .attr("y", d => yScale(d.name) + yScale.bandwidth() / 3
                        + (+state.notebook === 1 ? 6 : 15))
        .attr("opacity", 1)
        .text(d => {
          
          let feat1 = `${d.name.split("~~")[0]}`;
          let tails = ["_DemPos_RepNeg", 
                        "uency",
                        " or Pacific Islander"];

          tails.map(tail => {

            feat1 = feat1.replace(tail, "")
          })

          if (feat1.slice(0, 3) === "who") {
            feat1 = "whoEarnedMore_same";
          }

          return feat1;
        }),
        update => update,
        exit => exit
            .call(exit => exit.transition()
            .remove()
            )
    );

    // Y-Axis Feature Names: Line 2
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

        feat2 = feat2.replace(tail, "");

        return feat2 === "undefined" ? "" : feat2;
      }),
      update => update,
      exit => exit
          .call(exit => exit.transition()
          .remove()
          )
    );


    
    // AXIS TITLES ==================================

    // Y-Axis Title
    svg.append("text")
      .attr("y", margin.top / 3)
      .attr("x", -margin.left * 3.5 - (state.notebook > 1 ? 180 : 0))
      .attr("class", "yAxis-title")
      .attr("transform", "rotate(-90)")
      .style("font-weight", "bold")
      .style("font-size", "2.5rem")
      .text("Features")
    

    // X-Axis Title 
    svg.append("text")
      .attr("text-anchor", "end")
      .attr("x", width - margin.left * 1.65 - (state.notebook > 1 ? 180 : 0))
      .attr("y", height - margin.top * 0.1)
      .attr("class", "xAxis-title")
      .style("font-weight", "bold")
      .style("font-size", "2rem")
      .text(`${state.notebook < 3 ? "Pearson's R" : "Coefficient"}`);
};



