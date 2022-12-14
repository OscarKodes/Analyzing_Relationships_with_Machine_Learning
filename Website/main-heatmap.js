
/* CONSTANTS AND GLOBALS */
const isMobile = window.innerWidth < 1080;

const width = isMobile ?
                window.innerWidth * .92 :
                1050;
const height = isMobile ? 
                1000 :
                500;
const margin = {
  top: isMobile ? 400 : 200,
  left: 80,
  right: 50
};

const pastel1Colors = d3.scaleOrdinal(d3.schemePastel1);
const pastel2Colors = d3.scaleOrdinal(d3.schemePastel2);
const accentColors = d3.scaleOrdinal(d3.schemeAccent);
const schemeSet3Colors = d3.scaleOrdinal(d3.schemeSet3);

// const formatDate = d3.time.format("%Y-%m-%d");

d3.csv('data_to_visualize/5-unsupervised_component_0_1.csv', d3.autoType)
    .then(data => {


    // SCALES =================================================

    const xScale = d3.scaleBand()
        .domain(data.map(d => d.feature))
        .range([0, width - margin.right * 3]);

    const yScale = d3.scaleBand()
        .domain(data.map(d => d.component))
        .range([margin.top / 2, height / 15 + margin.top]);

    const allColors = ["black", "grey", "yellow"];

    const colorScale = d3.scaleLinear()
        .domain([-1, 0, 1])
        .range(["black", "grey", "yellow"])

    // AXIS
    const xAxis = d3.axisTop()
      .scale(xScale);

    const yAxis = d3.axisLeft()
      .scale(yScale);


    // CREATE MAIN SVG ELEMENT ==================================
    const svg = d3.select("#heatmap-vis")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      // .style("background-color", "lavender")


    // AXIS TICKS  ----------------------------------------------
      
    // xAxis ticks
    svg.append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top * 1.5})`)
      // .attr("transform", "rotate(45)")
      // .style("writing-mode", "vertical-lr")
      // .attr("text-alignment", "right")
      // .style("text-orientation", "mixed")
      .style("font-size", "1.65rem")
      .call(xAxis)
      .selectAll("text")  
        .style("text-anchor", "start")
        .attr("dx", "0.5rem")
        .attr("dy", ".55rem")
        .attr("transform", "rotate(-68)");

    // yAxis ticks
    svg.append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .style("font-size", "2.5rem")
      .call(yAxis);



    // boxes
    const boxes = svg.selectAll(".box")
                .data(data)
                .join(
                    enter => enter
                      .append("rect")
                        .attr("class", "box")
                        .attr("height", yScale.bandwidth())
                        .attr("width", xScale.bandwidth())
                        .attr("x", d => xScale(d.feature) + margin.left)
                        .attr("y", d => yScale(d.component) + margin.top )
                        .attr("fill", colorScale(0))
                        // .attr("transform", `translate(${margin.left + xScale(0)}, 0)`)
                        .attr("stroke", "black")
                        // .call(enter =>  enter.transition()
                        //   .delay(5000)
                        //   .duration(2000)
                        //   .attr("fill", d => colorScale(d.score)))
                      ,
                      update => update,
                      exit => exit
                        .call(exit => exit.transition()
                          .remove()
                        )
                );

        // Color dots for Legend
        svg.selectAll(".legend")
            .data(allColors)
            .join("circle")
            .attr("class", "legend-dot")
            .attr("cx", 50)
            .attr("cy", (_, i) => (isMobile? 150 : 80) + i * (isMobile ? 50 : 35))
            .attr("r", isMobile ? 15 : 10)
            .style("fill", d => d)
            .attr("stroke", "black")

        // labels for Legend
        svg.selectAll(".legend-label")
            .data(["-1", "0", "+1"])
            .join("text")
            .attr("class", "legend-label")
            .attr("x", d => d === "0" ? 
                            isMobile ? 95 : 88 : 80)
            .attr("y", (_, i) => (isMobile? 150 : 80) + i * (isMobile ? 50 : 35))
            .text(d => d)
            .style("font-size", "2rem")
            .style("font-family", "monospace")
            .attr("alignment-baseline","middle")

                // yAxis title
    svg.append("text")
    .attr("y", isMobile ? 
                margin.top / 11 :
                margin.top / 5)
    .attr("x", isMobile ? 
                -margin.left * 10.5 : 
                -420)
    .attr("transform", "rotate(-90)")
    .style("font-weight", "bold")
    .style("font-size", "2.2rem")
    .text("Component")

    // xAxis title
    svg.append("text")
    .attr("text-anchor", "end")
    .attr("x", isMobile ? width - margin.left * 5 : 550)
    .attr("y", height - margin.top / 5)
    .style("font-weight", "bold")
    .style("font-size", "2.2rem")
    .text("Features");


    // ============================================
    // ANIMATION WHEN DROPDOWN CHANGES
    const dropdown = document.getElementById("dropdown");

    dropdown.addEventListener("change", (event) => {

      if (+event.target.value === 5) {

        boxes
          .transition()
            .delay(100)
            .duration(1000)
            .attr("fill", d => colorScale(d.score))
      }
    });
                        
    


    // ============================================
    // TOOLTIPS

    // set default arrows on tool tips
    tippy.setDefaults({
      "arrow": true
    })

    // set the tooltip content
    boxes
      .attr("data-tippy-content", d => d.score.toFixed(2))


    // call tippy on the boxes
    tippy(boxes.nodes());
});