import functionPlot from "function-plot";

function drawFromData(eqn, htmlTag) {
  let graphTitle = "";

  if (eqn.hasOwnProperty("graphTitle")){
    graphTitle = eqn.graphTitle;
  }
  else {
  eqn.equations.forEach(function (funcObj) { 
   graphTitle = graphTitle.concat(String(funcObj.fn), ", ");
  }
  );}

  let JSONdata = {
    title: graphTitle,
    target: htmlTag,
    grid: eqn.grid,
    width: eqn.dimensions.width,
    height: eqn.dimensions.height,
    disableZoom: !eqn.interactive,
    xAxis: {
      label: "x - axis",
    },
    yAxis: {
      label: "y - axis",
    },
    data: eqn.equations,
  };

  functionPlot(JSONdata);

  if (eqn.hasOwnProperty("backgroundColor")) {
    document.getElementsByClassName("function-plot")[0].style.backgroundColor =
      eqn.backgroundColor;
  }

  // Path setting size
  if (eqn.hasOwnProperty("strokeWidth")) {
    let pths = document
      .getElementsByClassName("function-plot")[0]
      .querySelectorAll("path");
    pths.forEach((e) => {
      e.setAttribute("stroke-width", eqn.strokeWidth);
    });

    document
      .getElementsByClassName("function-plot")[0]
      .on("change", function () {
        console.log("changed");
        pths.forEach((e) => {
          e.setAttribute("stroke-width", eqn.strokeWidth);
        });
      });
  }
}

// FileIO
function drawFromPath(p, htmlTag) {
  // using Async request---- Working, try Xmlhttprequest
  (async () => {
    const jsondata = await (await fetch(p)).json();
    drawFromData(jsondata, htmlTag);
  })();
}

function getsvgdata(ide) {
  var x = document.getElementById(ide).innerHTML;
  return x;
}
function copydata(ide) {
  var x = document.getElementById(ide);
  x.select();
  document.execCommand("copy");
}

global.drawFromPath = drawFromPath;
global.drawFromData = drawFromData;
global.getsvgdata = getsvgdata;
global.copydata = copydata;

export default { drawFromPath, drawFromData, getsvgdata, copydata };