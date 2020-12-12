import functionPlot from "function-plot";


function drawFromData(eqn, htmlTag) {

  let graphTitle = "";

  if (!eqn.hasOwnProperty("title")) {
    eqn.data.forEach(function (funcObj) {
      eqn.title = graphTitle.concat(String(funcObj.fn), ", ");
    });
  }


  let eqn_f = { ...eqn, target: htmlTag }
  functionPlot(eqn_f);
  
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

var make_available = window || global;

make_available.drawFromPath = drawFromPath;

make_available.drawFromData = drawFromData;

make_available.getsvgdata = getsvgdata;

make_available.copydata = copydata;

export default { drawFromPath, drawFromData, getsvgdata, copydata };