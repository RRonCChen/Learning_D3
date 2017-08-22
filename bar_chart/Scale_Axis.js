/**
 * Created by Ron on 2017/8/22.
 */

var ySCale =d3.scaleLinear()
    .domain([580,0])
    .range([0,580]);

var svg = d3.select("svg");

var axis = d3.axisRight(ySCale);

svg.append("g").attr("transform","translate(0,0)").call(axis);

