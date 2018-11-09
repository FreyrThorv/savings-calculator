import React from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';

const SliderList = props =>
  <div>
  {props.expenditures
      .map((expenditures, index) =>  
    <Slider
      key={index}
      index={index}
      sliderAmount={expenditures.slider_amount}
      name={expenditures.name}
      from_age={expenditures.from_age}
      to_age={expenditures.to_age}
      handleSliders={props.handleSliders}
      expenditures={props.expenditures}
      amount={expenditures.amount}
    />
  )}

  </div>;


SliderList.propTypes = {
 expenditures: PropTypes.array.isRequired,
 handleSliders: PropTypes.func.isRequired,
}


export default SliderList;