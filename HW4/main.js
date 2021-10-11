function concatStrings (str , separator) {
    return function (next) {
      if (typeof next !== 'string') {
        return str
      }
      if (typeof separator === 'string') {
        return concatStrings(str + separator + next + separator)
      }
      else {
        return concatStrings(str + next)
      }
    }
  }

    class Calculator {
    constructor(fValue , secValue){
      this.fValue = fValue
      this.secValue = secValue
      this.logDiv = this.logDiv.bind(this);
      this.logSum = this.logSum.bind(this);
      this.logMul = this.logMul.bind(this);
      this.logSub = this.logSub.bind(this);
      this.setX = this.setX.bind(this);
      this.setY = this.setY.bind(this);
      if (!Number.isInteger(fValue) || !Number.isInteger(secValue)) {
        throw new Error ('Invalid value')
      }
    }
    setX(num) {
        if (!Number.isInteger(num)){
            throw new Error ('Invalid value')
        }
        else {
        return this.fValue = num
        }
      }
      setY(num) {
        if (!Number.isInteger(num)){
            throw new Error ('Invalid value')
        }
        else {
        return this.secValue = num
        }
      }
      logSum(){
        console.log(this.fValue + this.secValue)
      }
      logMul(){
        console.log(this.fValue * this.secValue)
      }
      logSub(){
        console.log(this.fValue - this.secValue)
      }
      logDiv(){
      if (this.secValue === 0) {
        throw new Error ('Second value can not be a null')
      }
      else {
        console.log(this.fValue / this.secValue)
      }
      }
  }
  

  
  
  
  