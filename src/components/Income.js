import React from 'react';
import PropTypes from 'prop-types';

const Income = props =>
    <div className="row">
      <div className="col-12">
        <h3>Annual income</h3>
      </div>
      <div className="col-4 col-md-4">
        <p>Annual salary</p>
        <input onChange={props.handleIncomeChange} type="textarea" value={"£" + props.incomes[0].amount}></input>
      </div>
      
      <div className="col-4 col-md-4">
        <p>From age</p>
        <input readOnly={true} type="textarea" defaultValue={props.incomes[0].from_age}></input>
      </div>

      <div className="col-4 col-md-4">         
        <p>To age</p>
        <input readOnly={true} type="textarea" defaultValue={props.incomes[0].to_age}></input>
      </div>
    </div>;


Income.propTypes = {
 incomes: PropTypes.array.isRequired,
 handleIncomeChange: PropTypes.func.isRequired,
}


export default Income;