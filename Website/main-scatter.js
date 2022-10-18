
/* CONSTANTS AND GLOBALS */
const width = window.innerWidth * .8;
const height = 600;
const margin = 80;

const pastel1Colors = d3.scaleOrdinal(d3.schemePastel1);
const pastel2Colors = d3.scaleOrdinal(d3.schemePastel2);
const accentColors = d3.scaleOrdinal(d3.schemeAccent);
const schemeSet3Colors = d3.scaleOrdinal(d3.schemeSet3);

// const formatDate = d3.time.format("%Y-%m-%d");

d3.csv('data_to_visualize/6-unsupervised_scatter.csv', d3.autoType)
    .then(data => {

    console.log(data)


    // SCALES =================================================

    const xScale = d3.scaleLinear()
        .domain([-4, 4])
        .range([0, width - margin * 3])
        .nice()

    const yScale = d3.scaleLinear()
        .domain([-4, 4])
        .range([margin, height - margin]);

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
    //   .style("background-color", "powderblue")


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

    

    // Draw SVG Scatterplot ==========================================
    const dots = svg.selectAll("circle.dot")
        .data(
            data.sort((a, b) => b.relationshipQuality_isGood - a.relationshipQuality_isGood), 
            d => d.id)
        .join(
            enter => enter
            .append("circle")
                .attr("class", "dot")
                .attr("transform", d => `translate(${xScale(d.comp0) + margin / 2}, 
                                        ${yScale(d.comp1)})`)
                .attr("r", 3.25)
                .attr("fill", d => colorScale(d.relationshipQuality_isGood))
                .attr("stroke", "grey")
                .attr("opacity", "0.4")
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
});