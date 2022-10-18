
/* CONSTANTS AND GLOBALS */
const width = window.innerWidth * .8;
const height = 300;
const margin = 100;

const pastel1Colors = d3.scaleOrdinal(d3.schemePastel1);
const pastel2Colors = d3.scaleOrdinal(d3.schemePastel2);
const accentColors = d3.scaleOrdinal(d3.schemeAccent);
const schemeSet3Colors = d3.scaleOrdinal(d3.schemeSet3);

// const formatDate = d3.time.format("%Y-%m-%d");

d3.csv('data_to_visualize/5-unsupervised_component_0_1.csv', d3.autoType)
    .then(data => {

    console.log(data)


    // SCALES =================================================

    const xScale = d3.scaleBand()
        .domain(data.map(d => d.feature))
        .range([0, width - margin / 2]);

    const yScale = d3.scaleBand()
        .domain(data.map(d => d.component))
        .range([0, (height - margin) / 2]);

    const allColors = ["black", "grey", "yellow"];

    const colorScale = d3.scaleLinear()
        .domain([-1, 0, 1])
        .range(["black", "grey", "yellow"])

    // AXIS
    const xAxis = d3.axisBottom()
      .scale(xScale);

    const yAxis = d3.axisLeft()
      .scale(yScale);


    // CREATE MAIN SVG ELEMENT ==================================
    const svg = d3.select("#heatmap-vis")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "lavender")


    // AXIS TICKS  ----------------------------------------------
      
    // xAxis ticks
    svg.append("g")
      .attr("transform", `translate(${margin}, ${height - margin})`)
      .style("font-size", "0.8rem")
      .call(xAxis);

    // yAxis ticks
    svg.append("g")
      .attr("transform", `translate(${margin}, 0)`)
      .style("font-size", "0.8rem")
      .call(yAxis);



    // boxes
    svg.selectAll(".box")
        .data(data)
        .join(
            enter => enter
              .append("rect")
                .attr("class", "box")
                .attr("height", yScale.bandwidth())
                .attr("width", xScale.bandwidth())
                .attr("x", d => xScale(d.feature))
                .attr("y", d => yScale(d.component))
                .attr("fill", d => colorScale(d.score))
                // .attr("transform", `translate(${margin + xScale(0)}, 0)`)
                .attr("stroke", "grey")
              .call(enter => enter.transition()
              ),
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
            .attr("cx", width - margin * .6 - 10)
            .attr("cy", (_, i) => 130 + i * 20)
            .attr("r", 6)
            .style("fill", d => d)
            .attr("stroke", "black")
            .attr("opacity", "0.6")

        // labels for Legend
        svg.selectAll(".legend-label")
            .data([-1, 0, 1])
            .join("text")
            .attr("class", "legend-label")
            .attr("x", width - margin / 2 - 10)
            .attr("y", (_, i) => 130 + i * 20)
            .text(d => d)
            .style("font-size", "15px")
            .attr("alignment-baseline","middle")
});