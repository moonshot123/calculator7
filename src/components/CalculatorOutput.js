import React from 'react'
import PropTypes from 'prop-types'


const CalculatorOutput = ({total}) => {

    console.log("출력부 로그 : "+total)
    return(
       
        <div>
            {total}
        </div>
                
    )

}

CalculatorOutput.prototype={
    total : PropTypes.string
}


export default CalculatorOutput