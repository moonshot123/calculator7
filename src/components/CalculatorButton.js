import React,{Component} from 'react';
import PropTypes from "prop-types";


class CalculatorButton extends Component {

    handleClick = () => {
        this.props.clickhadler(this.props.name)
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick} >{this.props.name}</button>
            </div>
        )
    }  
}

CalculatorButton.proptype ={
    name : PropTypes.string,
    clickhadler : PropTypes.func
}

export default CalculatorButton;