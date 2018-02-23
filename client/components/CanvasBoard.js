import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';

const mapStateToProps = store => ({

  // marketList: store.markets.marketList,
});

const mapDispatchToProps = dispatch => {
  return {
  // addMarket: () => dispatch(actions.addMarket()),
  // setNewLocation: () => dispatch(actions.setNewLocation()),
  // addCard: (e) => dispatch(actions.addCard(e)),
  // deleteCard: (e) => dispatch(actions.deleteCard(e)),
  }
};

class CanvasBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: null,
      clickX: [],
      clickY: [],
      clickDrag: [],
      paint: false,
    }
    this.addClick = this.addClick.bind(this);
    this.redraw = this.redraw.bind(this);
    this.startDraw = this.startDraw.bind(this);
    this.draw = this.draw.bind(this);
    this.stopDraw = this.stopDraw.bind(this);
  }

  componentDidMount() {
    console.log('cdm')
    this.setState({context: this.refs.canvas.getContext('2d')});
  }

  addClick(x, y, dragging) {
    let xArr = this.state.clickX.concat([x]);
    let yArr = this.state.clickY.concat([y]);
    let dragArr = this.state.clickDrag.concat([dragging]);
    this.setState({clickX: xArr, clickY: yArr, clickDrag: dragArr});
  }

  redraw(){
    this.state.context.clearRect(0, 0, this.state.context.canvas.width, this.state.context.canvas.height); // Clears the canvas

    this.state.context.strokeStyle = "black";
    this.state.context.lineJoin = "round";
    this.state.context.lineWidth = 5;

    for(let i = 0; i < this.state.clickX.length; i++) {
      this.state.context.beginPath();
      if(this.state.clickDrag[i] && i) {
        this.state.context.moveTo(this.state.clickX[i-1], this.state.clickY[i-1]);
       } else {
         this.state.context.moveTo(this.state.clickX[i]-1, this.state.clickY[i]);
       }
       this.state.context.lineTo(this.state.clickX[i], this.state.clickY[i]);
       this.state.context.closePath();
       this.state.context.stroke();
    }
  }

    startDraw(e) {
      console.log('inside startDraw');
      let mouseX = e.pageX - e.currentTarget.offsetLeft;
      let mouseY = e.pageY - e.currentTarget.offsetTop;

      this.setState({paint: true});
      this.addClick(mouseX, mouseY);
      this.redraw();
    }

    draw(e) {
      console.log('inside Draw');
      if(this.state.paint){
        this.addClick(e.pageX - e.currentTarget.offsetLeft, e.pageY - e.currentTarget.offsetTop, true);
        this.redraw();
      }
    }

    stopDraw(e) {
      console.log('inside stopDraw');
      this.setState({paint: false});
    }

  render() {
    return(
      <div id='canvasDiv'>
        <canvas onMouseDown={(e)=>this.startDraw(e)} onMouseMove={(e)=>this.draw(e)} onMouseUp={(e)=>this.stopDraw(e)} onMouseLeave={(e)=>this.stopDraw(e)} ref="canvas" width={900} height={900}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CanvasBoard);
