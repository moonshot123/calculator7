import React from 'react'
import isNumber from './isNumber'
import operation from './operagtion'


const Calculate = (state,name) => {
    console.log("계산값확인 total :"+state.total);
    console.log("계산값확인 next :"+state.next)
    console.log("계산값확인 operation :"+state.operation)
    console.log("입력값확인 name: "+name)
    
    
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
        console.log(operation);

        return {          
            operation: state.operation
          };

    }
    
    //숫자입력 >> 첫번째 , 두번째


    //입력값이 숫자인지 확인 숫자면 operation으로 보냄
    if( isNumber(name) ){
       console.log("name 숫자확인");

       operation(state,name)
        

    }



    //계산 로직완
    if(name === "=" ){
        if(operation === "+"){
            total = total + next
        }
        if(operation === "-"){
            total = total - next
        }
        if(operation === "*"){
            total = total * next
        }
        if(operation === "/"){
            //앞자리0
            if(total !== "0"){
                total = next / total
            }else{
                total="0은 안됨"
            }
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