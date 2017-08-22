/**
 * Created by Ron on 2017/8/22.
 */
var center = [[0.5, 0.5], [0.7, 0.8], [0.4, 0.9],
    [0.11, 0.32], [0.88, 0.25], [0.75, 0.12],
    [0.5, 0.1], [0.2, 0.3], [0.4, 0.1]];

var height = 600;
var width = 600;

var svg = d3.select("#chart")
    .append("svg")
    .attr("height", height)
    .attr("width", width);


var xScale = d3.scaleLinear()
    .domain([0, 1.2 * d3.max(center, function (d) {
        return d[0];
    })])
    .range([0, 580]);

var ySCale = d3.scaleLinear()
    .domain([0,1.2 * d3.max(center, function (d) {
        return d[1];
    })])
    .range([580, 0]);


var xAxis = d3.axisTop(xScale);
var yAxis = d3.axisRight(ySCale);

svg.append("g").attr("transform", "translate(0,580)").call(xAxis);
svg.append("g").attr("transform", "translate(0,0)").call(yAxis);


var circle = svg.selectAll("circle").data(center)
    .enter()
    .append("circle")
    .attr("fill", "black")
    .attr("cx",function(d){
        return xScale(d[0]);
    })
    .attr("cy",function(d){
        return ySCale(d[1]);
    })
    .attr("r",5)
    .on("mouseover",function(d){
        console.log(d[0]+","+d[1]);
    });