import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';

const mapStateToProps = store => {
  return {
    drawer: store.drawer,
    clickX: store.canvas.clickX,
    clickY: store.canvas.clickY,
    clickDrag: store.canvas.clickDrag
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addClick: (x, y, dragging) => dispatch(actions.addClick(x, y, dragging))
  }
};

class CanvasBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: null,
      paint: false,
    }
    this.redraw = this.redraw.bind(this);
    this.startDraw = this.startDraw.bind(this);
    this.draw = this.draw.bind(this);
    this.stopDraw = this.stopDraw.bind(this);
  }

  componentDidMount() {
    this.setState({context: this.refs.canvas.getContext('2d')});
  }

  // invoke redraw when we get props from store (updated state)
  componentDidUpdate() {
    this.redraw();
  }

  redraw(){
    this.state.context.clearRect(0, 0, this.state.context.canvas.width, this.state.context.canvas.height); // Clears the canvas
    
    this.state.context.strokeStyle = "black";
    this.state.context.lineJoin = "round";
    this.state.context.lineWidth = 5;

    for(let i = 0; i < this.props.clickX.length; i++) {
      this.state.context.beginPath();
      if(this.props.clickDrag[i] && i) {
        this.state.context.moveTo(this.props.clickX[i-1], this.props.clickY[i-1]);
       } else {
         this.state.context.moveTo(this.props.clickX[i]-1, this.props.clickY[i]);
       }
       this.state.context.lineTo(this.props.clickX[i], this.props.clickY[i]);
       this.state.context.closePath();
       this.state.context.stroke();
    }
  }

  startDraw(e) {
    let mouseX = e.pageX - e.currentTarget.offsetLeft;
    let mouseY = e.pageY - e.currentTarget.offsetTop;

    this.setState({paint: true});

    // these need to dispatch to store action
    // redraw happens in component after redux state has been updated with click coordinates
    this.props.addClick(mouseX, mouseY);
  }

  draw(e) {
    if(this.state.paint){
      this.props.addClick(e.pageX - e.currentTarget.offsetLeft, e.pageY - e.currentTarget.offsetTop, true);
    }
  }

  stopDraw(e) {
    this.setState({paint: false});
  }

  render() {
    console.log(this.props.drawer);
    let canvas = (
      <canvas ref="canvas" width={900} height={450}/>
    )

    if (this.props.drawer) {
      canvas = ( <canvas onMouseDown={(e)=>this.startDraw(e)} onMouseMove={(e)=>this.draw(e)} onMouseUp={(e)=>this.stopDraw(e)} onMouseLeave={(e)=>this.stopDraw(e)} ref="canvas" width={900} height={450}/> )
    }
    return(
      <div id='canvasDiv'>
        {canvas}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CanvasBoard);
