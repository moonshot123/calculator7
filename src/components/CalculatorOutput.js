import React from 'react'
import PropTypes from 'prop-types'
import "./CalculatorOutput.css"

const CalculatorOutput = ({total}) => {

    console.log("출력부 로그 : "+total)
    return(
       
        <div className="totalMain">
            값:{total}
        </div>
                
    )

}

CalculatorOutput.prototype={
    total : PropTypes.string
}


export default CalculatorOutput