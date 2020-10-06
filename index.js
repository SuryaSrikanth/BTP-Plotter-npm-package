import functionPlot from 'function-plot'

function drawFromData(eqn, htmlTag) {
    
    graphTitle = "";
    eqn.equations.forEach(function (funcObj) {
      console.log(funcObj.fn);
      graphTitle = graphTitle.concat(String(funcObj.fn), ", ");
    });
    
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
  
    // JSONdata.plugins = [functionPlot.plugins.zoomBox()];
    functionPlot(JSONdata);
  
  }

module.exports.drawFromData = drawFromData;  