/**
 * Created by Ron on 2017/8/22.
 */

var data = [100, 30, 50, 60, 90, 25, 61, 73];

var width = 600;
var height = 600;
var rectStep = 5;

var padding = {top: 20, right: 20, left: 50, bottom: 20};

var rectWidth = (width - (data.length - 1) * rectStep - (padding.left * 2)) / data.length;

var svg = d3.select("#chart").append("svg").attr("width", width).attr("height", height);

// 長條圖
var rect = svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("fill", "steelblue")
    .attr("x", function (d, i) {
        return padding.left + ((width - padding.left * 2) / data.length) * i;
    })
    .attr("y", function (d) {
        return height - d - padding.bottom;
    })
    .attr("width", rectWidth)
    .attr("height", function (d) {
        return d;
    });

// 文字
var text = svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("class", "bar_text")
    .attr("fill", "white")
    .attr("font-size", "14px")
    .attr("text-anchor", "middle")
    .attr("x", function (d, i) {
        return padding.left + ((width - padding.left * 2) / data.length) * i;
    })
    .attr("y", function (d) {
        return height - d - padding.bottom;
    })
    .attr("dx", rectWidth / 2)
    .attr("dy", "1em")
    .text(function (d) {
        return d;
    });


function draw() {
    rectWidth = (width - (data.length - 1) * rectStep - (padding.left * 2)) / data.length;
    //For Rect

    //update
    updateRect = svg.selectAll("rect").data(data);

    updateRect.attr("fill", "steelblue")
        .attr("x", function (d, i) {
            return padding.left + ((width - padding.left * 2) / data.length) * i;
        })
        .attr("y", function (d) {
            return height - d - padding.bottom;
        })
        .attr("width", rectWidth)
        .attr("height", function (d) {
            return d;
        });

    //enter
    enterRect = updateRect.enter();

    enterRect.append("rect")
        .attr("fill", "steelblue")
        .attr("x", function (d, i) {
            return padding.left + ((width - padding.left * 2) / data.length) * i;
        })
        .attr("y", function (d) {
            return height - d - padding.bottom;
        })
        .attr("width", rectWidth)
        .attr("height", function (d) {
            return d;
        });

    //exit
    exitRect = updateRect.exit();

    exitRect.remove();

    //For Text

    //update
    updateText = svg.selectAll(".bar_text").data(data);

    updateText.attr("class", "bar_text")
        .attr("fill", "white")
        .attr("font-size", "14px")
        .attr("text-anchor", "middle")
        .attr("x", function (d, i) {
            return padding.left + ((width - padding.left * 2) / data.length) * i;
        })
        .attr("y", function (d) {
            return height - d - padding.bottom;
        })
        .attr("dx", rectWidth / 2)
        .attr("dy", "1em")
        .text(function (d) {
            return d;
        });

    //enter
    enterText = updateText.enter();

    enterText.append("text")
        .attr("class", "bar_text")
        .attr("fill", "white")
        .attr("font-size", "14px")
        .attr("text-anchor", "middle")
        .attr("x", function (d, i) {
            return padding.left + ((width - padding.left * 2) / data.length) * i;
        })
        .attr("y", function (d) {
            return height - d - padding.bottom;
        })
        .attr("dx", rectWidth / 2)
        .attr("dy", "1em")
        .text(function (d) {
            return d;
        });

    //exit
    exitRect = updateText.exit();

    exitRect.remove();
}

//排序
function sortBar() {
    data.sort(d3.ascending);
    draw();
}

//增加
function addData() {
    data.push(30);
    draw();
}