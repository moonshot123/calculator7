import React, { Component } from 'react';
import './App.css';
import CalculatorInput from './components/CalculatorInput'
import Calculate from '../src/logic/Calculate'

class App extends Component {
  state = {
    
    total: null,    //계산값
    next: null,     //두번째값
    operation: null,//부호
    
  }
  
  handleBtnClick = (name) => {
    console.log(" APP에서 name : "+name)
    this.setState(
      Calculate( this.state, name )
    )
  }

  render() {


    return (
    <div>
        <div>
            

               

          <CalculatorInput clickhadler={this.handleBtnClick}/>            
        </div>
    </div>
    );
  }
}

export default App;
