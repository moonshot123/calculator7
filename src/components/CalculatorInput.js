import React,{Component} from 'react'
import CalculatorButton from './CalculatorButton'

 

class CalculatorInput extends Component{

    handleBtnClick = (name) => {
        console.log(name);
        this.props.clickhadler(name)
    }

    render(){
        return (
            <div>
                <h1>입력부</h1>

                <div>
                <CalculatorButton name="7" clickhadler={this.handleBtnClick}/>
                <CalculatorButton name="8" clickhadler={this.handleBtnClick}/>
                <CalculatorButton name="9" clickhadler={this.handleBtnClick}/>
                <CalculatorButton name="+" clickhadler={this.handleBtnClick}/>
                </div>
                <div>
                <CalculatorButton name="4" clickhadler={this.handleBtnClick}/>
                <CalculatorButton name="5" clickhadler={this.handleBtnClick}/>
                <CalculatorButton name="6" clickhadler={this.handleBtnClick}/>
                <CalculatorButton name="-" clickhadler={this.handleBtnClick}/>
                </div>
                <div>
                <CalculatorButton name="1" clickhadler={this.handleBtnClick}/>
                <CalculatorButton name="2" clickhadler={this.handleBtnClick}/>
                <CalculatorButton name="3" clickhadler={this.handleBtnClick}/>
                <CalculatorButton name="*" clickhadler={this.handleBtnClick}/>
                </div>
                <div>
                <CalculatorButton name="0" clickhadler={this.handleBtnClick}/>
                <CalculatorButton name="=" clickhadler={this.handleBtnClick}/>
                <CalculatorButton name="C" clickhadler={this.handleBtnClick}/>
                <CalculatorButton name="/" clickhadler={this.handleBtnClick}/>
                </div>







            </div>


        )


    }

}




export default CalculatorInput
