//숫자인지 확인하는곳, 부호인지
const isNumber = (next) => {
    return( /[0-9]+/.test(next) )
}

export default isNumber