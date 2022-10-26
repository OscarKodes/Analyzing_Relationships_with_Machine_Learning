
/* CONSTANTS AND GLOBALS */

const isMobile = window.innerWidth < 1080;

const width = isMobile ? 
                window.innerWidth * .92 :
                1020;
const height = isMobile ?
                1050 :
                850;
const margin = {
  top: 80,
  left: 85,
  right: 55
};

const pastel1Colors = d3.scaleOrdinal(d3.schemePastel1);
const pastel2Colors = d3.scaleOrdinal(d3.schemePastel2);
const accentColors = d3.scaleOrdinal(d3.schemeAccent);
const schemeSet3Colors = d3.scaleOrdinal(d3.schemeSet3);

// const formatDate = d3.time.format("%Y-%m-%d");

d3.csv('data_to_visualize/6-unsupervised_scatter.csv', d3.autoType)
    .then(data => {


    // SCALES =================================================

    const xScale = d3.scaleLinear()
        .domain([-4, 4])
        .range([0, width - margin.right * 3])
        .nice()

    const yScale = d3.scaleLinear()
        .domain([-4, 4])
        .range([height - margin.top, margin.top]);

    const allColors = ["black", "grey", "yellow"];

    const colorScale = d3.scaleLinear()
        .domain([0, 1])
        .range(["blue", "yellow"])

    // AXIS
    const xAxis = d3.axisBottom()
      .scale(xScale);

    const yAxis = d3.axisLeft()
      .scale(yScale);


    // CREATE MAIN SVG ELEMENT ==================================
    const svg = d3.select("#scatter-vis")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      // .style("background-color", "lavender")


    // AXIS TICKS  ----------------------------------------------
      
    // xAxis ticks
    svg.append("g")
      .attr("transform", `translate(${margin.left}, ${height - margin.top})`)
      .style("font-size", "2rem")
      .call(xAxis);

    // yAxis ticks
    svg.append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .style("font-size", "2rem")
      .call(yAxis);

    

    // Draw SVG Scatterplot ==========================================
    const dots = svg.selectAll("circle.dot")
        .data(
            data.sort((a, b) => b.relationshipQuality_isGood - a.relationshipQuality_isGood), 
            d => d.id)
        .join(
            enter => enter
            .append("circle")
                .attr("class", "dot")
                .attr("transform", d => `translate(${xScale(d.comp0) }, 
                                        ${yScale(d.comp1)})`)
                .attr("r", isMobile ? 8 : 6)
                .attr("fill", d => colorScale(d.relationshipQuality_isGood))
                .attr("stroke", "black")
                .attr("stroke-width", "1px")
                .attr("fill-opacity", ".65")
                // .on("mouseover", tipMouseover)
                // .on("mouseout", tipMouseout)
            // .call(enter => enter.transition()
            //     .duration(500)
            //     .attr("r", d => sizeScale(d["Budget (million $)"]))
            //     ),
            ,
            update => update
            // .attr("opacity", "1")
            // .call(update => update.transition()
            //     .duration(1000)
            //     .attr("opacity", "0.4")),
            ,
            exit => exit
            // .call(exit => exit.transition()
            //     .duration(500)
            //     .attr("r", 0))
                .remove()
        );

                        // yAxis title
    svg.append("text")
    .attr("y", margin.top / 3)
    .attr("x", isMobile ?
                -margin.left * 8 :
                -450)
    .attr("transform", "rotate(-90)")
    .style("font-weight", "bold")
    .style("font-size", isMobile ? "2.2rem" : "2.5rem")
    .text("Component 1")

    // xAxis title
    svg.append("text")
    .attr("text-anchor", "end")
    .attr("x", isMobile ? 
                width - margin.left * 4 :
                580)
    .attr("y", isMobile ?
                height - margin.top / 8 :
                height - margin.top / 3)
    .style("font-weight", "bold")
    .style("font-size", isMobile ? "2.2rem" : "2.5rem")
    .text("Component 0");
});