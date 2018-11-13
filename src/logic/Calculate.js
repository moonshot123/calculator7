import React from 'react'
import isNumber from './isNumber'



const Calculate = (state,name) => {
    console.log("계산값확인 state :"+state);
    console.log("계산값확인 total :"+state.total);
    console.log("계산값확인 next :"+state.next)
    console.log("계산값확인 operation :"+state.operation)
    console.log("입력값확인 name: "+name)
    
    let total = state.total
    let next = state.next
    let operation = state.operation
    
   
    //0. 부호인지 확인 (=,-,*,/,C,=)    :    
    //1. 숫자확인 및 변환               : isNumber 
    //2. 첫번째, 두번째 숫자인지 확인    : opratio 
    //3. 나눌때 앞자리가 0인지? 

    
    //clear
    if ( name === "C" ) {
        return {
            total: null,
            next: null,
            operation: null
          };
    }


    //부호확인
    if( name === "+" || name === "-" || name === "*" || name === "/" ){
        state.operation = name;
        console.log( state.operation);

        return {          
            operation: state.operation
          };

    }
    
    //숫자입력 >> 첫번째 , 두번째


    //입력값이 숫자인지 확인 숫자면 operation으로 보냄
    if( isNumber(name) ){
       console.log("name 숫자확인");

       if( next === null && total === null && operation === null ){
        next = name;
            return {            
                next: name            
            };
        }else if( next !== null && total === null && operation === null ){
        next = next + name;
            return {      
                next: next     
            };

        }else if ( next !== null && total === null && operation !== null && operation !== "="){
        total = next;
            return {
                total: total,
                next: null,
                operation: operation
            };
        }else if( next === null && total !== null && operation === null ){
            next = name;
            return {
                next: name
            };
        }else if ( next !== null && total !== null && operation === null ){
            next = next + name;
            return {      
                next: next     
            };
        }else if( next !== null && total !== null && operation !== null ){
             
            ////////////

            if(name === "=" ){
                if(operation === "+"){
                    total = String( parseFloat(total) + parseFloat(next) )
                }
                if(operation === "-"){
                    total = String( parseFloat(total) - parseFloat(next) )
                }
                if(operation === "*"){
                    total = String( parseFloat(total) * parseFloat(next) )
                }
                if(operation === "/"){
                    //앞자리0
                    if(total !== "0"){
                        total =  String(( parseFloat(total) / parseFloat(next) ) + ( parseFloat(total) % parseFloat(next) ))
                    }else{
                        total="0은 안됨"
                    }
                }
            }

            ////////////

            return {      
                total: total,
                next: null,
                operation: null     
            };
        }
        

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