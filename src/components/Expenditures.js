import React from 'react';
import PropTypes from 'prop-types';

const Expenditures = props =>
    <div className="row">
      <div className="col-4 col-md-4">
        <p>{props.name}</p>
        <input id={props.id} onChange={props.handleExpenseChange} type="textarea" defaultValue={"£" + props.amount}></input>
      </div>
      
      <div className="col-4 col-md-4">
        <p>From age</p>
        <input readOnly={true} type="textarea" defaultValue={props.from_age}></input>
      </div>

      <div className="col-4 col-md-4">         
        <p>To age</p>
        <input readOnly={true} type="textarea" defaultValue={props.to_age}></input>
      </div>
    </div>;


Expenditures.propTypes = {
 name: PropTypes.string.isRequired,
 amount: PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
 ]).isRequired,
 from_age: PropTypes.number.isRequired,
 to_age: PropTypes.number.isRequired,
 handleExpenseChange: PropTypes.func.isRequired
}


export default Expenditures;