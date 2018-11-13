//첫번째 숫자 두번째 숫자 구분하는곳?
//import isNumber from "./isNumber"
import React from 'react'

const operation = (state,name) => {
    
    console.log("계산값확인 operation total :"+state.total);
    console.log("계산값확인 operation next :"+state.next)
    console.log("계산값확인 operation operation :"+state.operation)
    console.log("입력값확인 operation name: "+name)

    const total = state.total
    const next = state.next
    const operation = state.operation
    const name = name
    
    //계산부
    if( next === null && total === null && operation === null ){
        next = name;
        console.log("첫번째 입력 : "+next)
    }else if( next !== null && total === null && operation === null ){
        next = next + name;
        console.log("부호안 누르고 : "+next)
    }else if ( next !== null && total === null && operation !== null ){
        total = next;
        console.log(""+total)
    }

    
    return(
        <div>
            {total} 
            {next} 
            {operation}
            {name}

        </div>
    )

}

export default operation