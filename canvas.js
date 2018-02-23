$(document).ready(function() {

  let canvasDiv = document.getElementById('canvasDiv');

  canvas = document.createElement('canvas');

  canvas.setAttribute('width', '900px');
  canvas.setAttribute('height', '900px');
  canvas.setAttribute('id', 'canvas');

  canvasDiv.appendChild(canvas);

  if(typeof G_vmlCanvasManager !== 'undefined') {
    canvas = G_vmlCanvasManager.initElement(canvas);
  }

  context = canvas.getContext('2d');

  $('#canvas').mousedown((e) => {
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;

    paint = true;
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    redraw();
  });
  // copy pasta
  $('#canvas').mousemove(function(e){
    if(paint){
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
      redraw();
    }
  });

  $('#canvas').mouseup(function(e){
    paint = false;
  });

  $('#canvas').mouseleave(function(e){
    paint = false;
  });

  let clickX = new Array();
  let clickY = new Array();
  let clickDrag = new Array();
  let paint;

  function addClick(x, y, dragging)
  {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
  }

  function redraw(){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

    context.strokeStyle = "black";
    context.lineJoin = "round";
    context.lineWidth = 5;

    for(let i=0; i < clickX.length; i++) {
      context.beginPath();
      if(clickDrag[i] && i){
        context.moveTo(clickX[i-1], clickY[i-1]);
       }else{
         context.moveTo(clickX[i]-1, clickY[i]);
       }
       context.lineTo(clickX[i], clickY[i]);
       context.closePath();
       context.stroke();
    }
  }
});
