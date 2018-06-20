import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swipe from 'swipe-js-iso';

import objectAssign from 'object-assign';


export default class SwipeImage extends React.Component {

  //class ReactSwipe extends Component {
    static propTypes = {
      swipeOptions: PropTypes.shape({
        startSlide: PropTypes.number,
        speed: PropTypes.number,
        auto: PropTypes.number,
        continuous: PropTypes.bool,
        disableScroll: PropTypes.bool,
        stopPropagation: PropTypes.bool,
        swiping: PropTypes.func,
        callback: PropTypes.func,
        transitionEnd: PropTypes.func
      }),
      style: PropTypes.shape({
        container: PropTypes.object,
        wrapper: PropTypes.object,
        child: PropTypes.object
      }),
      id: PropTypes.string,
      className: PropTypes.string,
      childCount: PropTypes.number
    };

    static defaultProps = {
      swipeOptions: {},
      style: {
        container: {
          overflow: 'hidden',
          visibility: 'hidden',
          position: 'relative'
        },

        wrapper: {
          overflow: 'hidden',
          position: 'relative'
        },

        child: {
          float: 'left',
          width: '100%',
          position: 'relative',
          transitionProperty: 'transform'
        }
      },
      className: '',
      childCount: 0
    };

    componentDidMount() {
      const { swipeOptions } = this.props;

      this.swipe = Swipe(this.container, swipeOptions);
    }

    componentDidUpdate(prevProps) {
      const { childCount, swipeOptions } = this.props;

      if (prevProps.childCount !== childCount) {
        this.swipe.kill();
        this.swipe = Swipe(this.container, swipeOptions);
      }
    }

    componentWillUnmount() {
      this.swipe.kill();
      this.swipe = void 0;
    }

    next() {
      this.swipe.next();
    }

    prev() {
      this.swipe.prev();
    }

    slide(...args) {
      this.swipe.slide(...args);
    }

    getPos() {
      return this.swipe.getPos();
    }

    getNumSlides() {
      return this.swipe.getNumSlides();
    }

    render() {
      const { id, className, style, children } = this.props;

      return (
        <div ref={container => this.container = container} id={id} className={`react-swipe-container ${className}`} style={style.container}>
          <div style={style.wrapper}>
            {React.Children.map(children, (child) => {
              if (!child) {
                return null;
              }

              const childStyle = child.props.style ?
                objectAssign({}, style.child, child.props.style) :
                style.child;

              return React.cloneElement(child, {style: childStyle});
            })}
          </div>
        </div>
      );
    }
  }




//   constructor(props) {
//     super(props);
//
//     this.state = {
//       left: 0,
//       originalOffset: 0,
//       velocity: 0,
//       timeOfLastDragEvent: 0,
//       touchStartX: 0,
//       prevTouchX: 0,
//       beingTouched: false,
//       height: 0,
//       intervalId: null
//     };
//   }
//
//   componentDidMount() {
//     window.setTimeout(() => this.setState({height: 65}), 50);
//   }
//
//   animateSlidingToZero() {
//     let {left, velocity, beingTouched} = this.state;
//     if (!beingTouched && left < -0.01) {
//       velocity += 10 * 0.033;
//       left += velocity;
//       if (left < -350) {
//         window.clearInterval(this.state.intervalId);
//         this.handleRemoveSelf();
//       }
//       this.setState({left, velocity});
//     } else if (!beingTouched) {
//       left = 0;
//       velocity = 0;
//       window.clearInterval(this.state.intervalId);
//       this.setState({left, velocity, intervalId: null, originalOffset: 0});
//     }
//   }
//
//   handleRemoveSelf() {
//     this.setState({height: 0});
//     window.setTimeout(() => this.props.onRemoval(), 100);
//   }
//
//   handleStart(clientX) {
//     if (this.state.intervalId !== null) {
//       window.clearInterval(this.state.intervalId);
//     }
//     this.setState({
//       originalOffset: this.state.left,
//       velocity: 0,
//       timeOfLastDragEvent: Date.now(),
//       touchStartX: clientX,
//       beingTouched: true,
//       intervalId: null
//     });
//   }
//
//   handleMove(clientX) {
//     if (this.state.beingTouched) {
//       const touchX = clientX;
//       const currTime = Date.now();
//       const elapsed = currTime - this.state.timeOfLastDragEvent;
//       const velocity = 20 * (touchX - this.state.prevTouchX) / elapsed;
//       let deltaX = touchX - this.state.touchStartX + this.state.originalOffset;
//       if (deltaX < -350) {
//         this.handleRemoveSelf();
//       } else if (deltaX > 0) {
//         deltaX = 0;
//       }
//       this.setState({
//         left: deltaX,
//         velocity,
//         timeOfLastDragEvent: currTime,
//         prevTouchX: touchX
//       });
//     }
//   }
//
//   handleEnd() {
//     this.setState({
//       velocity: this.state.velocity,
//       touchStartX: 0,
//       beingTouched: false,
//       intervalId: window.setInterval(this.animateSlidingToZero.bind(this), 33)
//     });
//   }
//
//   handleTouchStart(touchStartEvent) {
//     touchStartEvent.preventDefault();
//     this.handleMotionStart(touchStartEvent.targetTouches[0].clientX);
//   }
//
//   handleTouchMove(touchMoveEvent) {
//     this.handleMove(touchMoveEvent.targetTouches[0].clientX);
//   }
//
//   handleTouchEnd() {
//     this.handleEnd();
//   }
//
//   handleMouseDown(mouseDownEvent) {
//     mouseDownEvent.preventDefault();
//     this.handleStart(mouseDownEvent.clientX);
//   }
//
//   handleMouseMove(mouseMoveEvent) {
//     this.handleMove(mouseMoveEvent.clientX);
//   }
//
//   handleMouseUp() {
//     this.handleEnd();
//   }
//
//   handleMouseLeave() {
//     this.handleMouseUp();
//   }
//
//   render() {
//     return (
//       <div
//         className="swipeImage"
//         style={{height: this.state.height + 'px', transition: 'height 250ms ease-in-out'}}
//         onTouchStart={touchStartEvent => this.handleTouchStart(touchStartEvent)}
//         onTouchMove={touchMoveEvent => this.handleTouchMove(touchMoveEvent)}
//         onTouchEnd={() => this.handleTouchEnd()}
//         // The following event handlers are for mouse compatibility:
//         onMouseDown={mouseDownEvent => this.handleMouseDown(mouseDownEvent)}
//         onMouseMove={mouseMoveEvent => this.handleMouseMove(mouseMoveEvent)}
//         onMouseUp={() => this.handleMouseUp()}
//         onMouseLeave={() => this.handleMouseLeave()}
//       >
//         <img
//           className="swipmage-content"
//           style={{left: this.state.left + 'px'}}
//           src={Image}
//         >
//           {this.props.children}
//         </img>
//       </div>
//     );
//   }
// }
