import React from 'react';
import PropTypes from 'prop-types';

const Slider = props =>
  <div className="row">
  	<div className="col-2">
		<p><b>{props.name}:</b></p>
	</div>
    <div className="col-8">
	    <input onChange={props.handleSliders} id={"slider-"+props.index} type="range" min="0" max={props.amount} defaultValue={props.sliderAmount} className="margin-top-10"/>
    </div>
    <div className="col-2">
	    <p>£{props.sliderAmount}</p>
 	</div>
  </div>;


Slider.propTypes = {
 sliderAmount: PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
 ]).isRequired,
 index: PropTypes.number.isRequired,
 handleSliders: PropTypes.func.isRequired,
}


export default Slider;