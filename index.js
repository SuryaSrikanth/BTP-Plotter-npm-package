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
    
    if (eqn.hasOwnProperty('backgroundColor')){
      document.getElementsByClassName('function-plot')[0].style.backgroundColor = eqn.backgroundColor;
      // console.log(eqn.backgroundColor)
    }
  
      // Path setting size
      if (eqn.hasOwnProperty('strokeWidth')){
        let pths = document.getElementsByClassName('function-plot')[0].querySelectorAll('path');
        pths.forEach((e)=>{
          e.setAttribute('stroke-width', eqn.strokeWidth)
        });
        // console.log(eqn.strokeWidth)
  
        document.getElementsByClassName('function-plot')[0].on('change', function(){
          console.log('changed')
          pths.forEach((e)=>{
            e.setAttribute('stroke-width', eqn.strokeWidth)
          });
            
        }
        )
      } 

  }

  // FileIO
function drawFromPath(p, htmlTag) {
  // using Async request---- Working, try Xmlhttprequest
  (async () => {
    const jsondata = await (await fetch(p)).json();
    drawFromData(jsondata, htmlTag);
  })();
  // var xhttp = new XMLHttpRequest();
  // xhttp.onreadystatechange = function () {
  //   if (this.readyState == 4 && this.status == 200) {
  //     console.log(this.responseText);
  //     var jsondata = JSON.parse(this.responseText);
  //     drawFromData(jsondata, htmlTag);
  //   }
  // };
  // xhttp.open("GET", p, true);
  // xhttp.send();
}



function getsvgdata(ide){
  var x = document.getElementById(ide).innerHTML;
  return x;
}
function copydata(ide){
  var x = document.getElementById(ide);
  x.select();
  // copyText.setSelectionRange(0, 99999); 
  document.execCommand("copy");
  // alert("Copied the text: " + copyText.value);
}



module.exports.drawFromData = drawFromData;  
module.exports.drawFromPath = drawFromPath;
module.exports.getsvgdata = getsvgdata;
module.exports.copydata = copydata;