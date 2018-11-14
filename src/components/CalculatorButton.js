import React,{Component} from 'react';
import PropTypes from "prop-types";
import './CalculatorButton.css';

class CalculatorButton extends Component {

    handleClick = () => {
        this.props.clickhadler(this.props.name)
    }

    render(){
        return(
            <div className="container">
                <button className="btn" onClick={this.handleClick} >{this.props.name}</button>
            </div>
        )
    }  
}

CalculatorButton.proptype ={
    name : PropTypes.string,
    clickhadler : PropTypes.func
}

export default CalculatorButton;