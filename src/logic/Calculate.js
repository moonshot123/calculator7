import React from 'react'
import isNumber from './isNumber'
import operation from './operation'


const Calculate = (state,name) => {
    console.log("계산값확인 total :"+state.total);
    console.log("계산값확인 next :"+state.next)
    console.log("계산값확인 operation :"+state.operation)
    console.log("입력값확인 name: "+name)
    
    
    //0. 부호인지 확인 (=,-,*,/,C,=)    :    
    //1. 숫자확인 및 변환               : isNumber 
    //2. 첫번째, 두번째 숫자인지 확인    : opratio 
    //3. 나눌때 앞자리가 0인지? 

    
    


    //부호확인
    if( name === "+" ){
        total = name + next
        console.log("더하기"+total) 
    } else if ( name === "-" ) {
        total = name + next
    } else if ( name === "*" ) {
        
    } else if ( name === "/" ) {
        
    } else if ( name === "C" ) {
        return {
            total: null,
            next: null,
            operation: null,
          };
    } else if ( name === "=" ) {
        
    } else {
       
        //첫번째, 두번째 숫자인지 확인
        if( (next === null) && isNumber(next) ){
            next = name;
        }
        else{}

        

    }
    

    //



    
    
    
    return(
        <div>
        계산부분
        

        </div>

    )


}

export default Calculate