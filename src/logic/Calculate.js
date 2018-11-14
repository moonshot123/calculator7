import React from 'react'


const Calculate = (state,name) => {
    console.log("계산값확인 state :"+state)
    console.log("계산값확인 total :"+state.total)
    console.log("계산값확인 next :"+state.next)
    console.log("계산값확인 operation :"+state.operation)
    console.log("입력값확인 name: "+name)
    
    let total = state.total
    let next = state.next
    let operation = state.operation
    
    //clear
    if ( name === "C" ) {
        return {
            total: null,
            next: null,
            operation: null
          };
    }
 
       if( next === null && total === null && operation === null ){
            next = name;
            return {            
                next: name            
            };
        }else if( next !== null && total === null && operation === null ){
            if( name === "+" || name === "-" || name === "*" || name === "/" ){
                total = next;
                operation = name;
                return {
                    total: total,
                    next: null,
                    operation: operation
                }; 
            }else{
                next = next + name;
                return {      
                    next: next     
                };
            }
           
        }else if(  next === null && total !== null && operation !== null && name !== "="){
            next = name;
            return {            
                next: next            
            };
        }else if(  next !== null && total !== null && operation !== null && name !== "="){
            next = next + name;
            return {      
                next: next     
            };
        }else if(  next !== null && total !== null && operation !== null && name === "="){
            
            if(operation === "+"){
                console.log("더하기")
                total = String( parseFloat(total) + parseFloat(next) )
            }
            if(operation === "-"){
                console.log("빼기")
                total = String( parseFloat(total) - parseFloat(next) )
            }
            if(operation === "*"){
                console.log("곱하기")
                total = String( parseFloat(total) * parseFloat(next) )
            }
            if(operation === "/"){
                console.log("나누기")
            if(total !== "0"){
                    total =  String(( parseInt(total) / parseInt(next) ) )
            }else{
                    total="0은 안됨"
                }
            }

            return {      
                total: total     
            };
            
        }

    return(
        <div>
            {total} 
            {next} 
            {operation}    
        </div>
    )
}

export default Calculate