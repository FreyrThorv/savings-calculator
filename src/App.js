import React, { Component } from 'react';
import './App.css';
import Income from './components/Income';
import ExpendituresList from './components/ExpendituresList';
import SliderList from './components/SliderList';
import FeedbackWidget from './components/FeedbackWidget';
import update from 'immutability-helper';

class App extends Component {  
  constructor(props) {
    super(props);

    if (!localStorage.getItem('myData')) {
      this.state = {
        "incomes": [
          {
            "amount": 45300,
            "from_age": 30,
            "to_age": 67,
            "frequency": "annual",
            "name": "Annual salary"
          }
        ],
        "expenditures": [
          {
            "amount": 1199,
            "slider_amount": 1199,
            "from_age": 30,
            "to_age": 65,
            "frequency": "monthly",
            "name": "Mortgage"
          },
          {
            "amount": 1199,
            "slider_amount": 1199,
            "from_age": 30,
            "to_age": 65,
            "frequency": "monthly",
            "name": "Bills"
          },
          {
            "amount": 1199,
            "slider_amount": 1199,
            "from_age": 30,
            "to_age": 65,
            "frequency": "monthly",
            "name": "General spending"
          }
        ],
        "monthly_income": 0,
        "monthly_expenses": 0,
        "monthly_savings": 0,
        "feedback":"",
      };
    } else {
      this.state = JSON.parse(localStorage.getItem('myData'));
      }
    }

  
  getInitialState = () => {
    return JSON.parse(localStorage.getItem('state') || '{}');
  } 

  componentDidUpdate = (prevProps, prevState) => {
    localStorage.setItem('myData', JSON.stringify(this.state));
  }

  componentWillMount(){
    this.calculateSavings();
  }

  calculateSavings = () => {
    var arrayLength = this.state.expenditures.length;
    var totalExpenses = 0;

    for (var i = 0; i < arrayLength; i++) {
      totalExpenses =+ parseInt(this.state.expenditures[i].slider_amount) + totalExpenses;
    }

    var yearlyIncome = parseInt(this.state.incomes[0].amount);
    var monthlyIncome = yearlyIncome / 12;

    var totalSavingsPerMonth = monthlyIncome - totalExpenses;


    this.setState({
      monthly_income: Math.round(monthlyIncome),
      monthly_expenses: Math.round(totalExpenses),
      monthly_savings: Math.round(totalSavingsPerMonth),
    })
  }

  handleFeedback = (event) => {
    this.setState({
      feedback: event.target.id
    })
  }

  handleExpenseChange = (event) => {
    let index = event.target.id;
    // Strip pound sign
    var expenditureNumber = event.target.value.replace(/\D/g,''); 

    this.setState({
      expenditures: update(this.state.expenditures, {
        [index]: {
          amount: {$set: expenditureNumber}
        }
      })
    },() => {
      this.calculateSavings();
    })
  }

  handleIncomeChange = (event) => {
    // Strip pound sign
    var incomeNumber = event.target.value.replace(/\D/g,''); 

    this.setState({
      incomes: update(this.state.incomes, {
        [0]: {
          amount: {$set: incomeNumber}
        }
      })
    },() => {
      this.calculateSavings();
    })
  }

  handleSliders = (event) => {
    let index = event.target.id.replace(/\D/g,'');
    this.setState({
      expenditures: update(this.state.expenditures, {
        [index]: {
          slider_amount: {$set: event.target.value}
        }
      }
      )
    }, 
    () => {
      this.calculateSavings();
    })
  }

  render() {
    return (
      <div className="app-container container">
        <div className="row">
          <div className="col-12 offset-md-3 col-md-6">
            <h2 className="to-uppercase"><span className="accent-block">■</span> Your income & spend</h2>
            <Income 
              incomes={this.state.incomes}
              handleIncomeChange={this.handleIncomeChange}    
            />
            <ExpendituresList
              expenditures={this.state.expenditures}
              handleExpenseChange={this.handleExpenseChange}
             />
          </div>


          <div className="margin-top-40 col-12 offset-md-3 col-md-6">  
            <h2 className="to-uppercase"><span className="accent-block">■</span> Spend less</h2>
            <p>Try reducing your monthly spending to see how your forecast could improve!</p>
            <div>
              <SliderList 
                expenditures={this.state.expenditures}
                handleSliders={this.handleSliders}
              />

              <p className="margin-top-40">{"You're spending £" + this.state.monthly_expenses + " per month and have £" + this.state.monthly_income + " coming in..."}</p>
              <b>
                <p className={this.state.monthly_savings > 0 ? "saving" : "spending"}>
                  {
                    this.state.monthly_savings > 0 
                    ? "This means you're saving £" + this.state.monthly_savings + " per month" 
                    : "This means you're overspending by £" + Math.abs(this.state.monthly_savings) + " per month" 
                  } 
                </p>
              </b>     
              <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/watch?v=2q9Gd1u6vwQ">Find ways to save</a>
              
              <FeedbackWidget 
                feedback={this.state.feedback}
                handleFeedback={this.handleFeedback}
              />
            </div>
           </div>
        </div>
      </div>
    );
  }
}

export default App;
