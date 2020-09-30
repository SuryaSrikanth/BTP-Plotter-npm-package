import functionPlot from 'function-plot'

function drawFromData(eqn, htmlTag) {
    // Reading the Equations
    graphTitle = "";
    eqn.equations.forEach(function (funcObj) {
      console.log(funcObj.fn);
      graphTitle = graphTitle.concat(String(funcObj.fn), ", ");
    });
  
    // Extra stuff to add if theres time....
    // Calculate pixels for width and height if given in percent or em.
    // Path setting size
    // Setting Background
    // Append child beside tag
  
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
  
    // Adding ZoomBox when holding shift
    JSONdata.plugins = [functionPlot.plugins.zoomBox()];
    functionPlot(JSONdata);
  }

module.exports.drawFromData = drawFromData;  