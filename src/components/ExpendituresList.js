import React from 'react';
import PropTypes from 'prop-types';
import Expenditures from './Expenditures';

const ExpendituresList = props =>
  <div>
    <h3>Monthly spending</h3>

    {props.expenditures
      .map((expenditures, index) =>
      <Expenditures 
          key={index}
          id={index}
          amount={expenditures.amount}
          name={expenditures.name}
          from_age={expenditures.from_age}
          to_age={expenditures.to_age}
          handleExpenseChange={props.handleExpenseChange}
      />
    )}
  </div>;


ExpendituresList.propTypes = {
 expenditures: PropTypes.array.isRequired,
 handleExpenseChange: PropTypes.func.isRequired
}


export default ExpendituresList;