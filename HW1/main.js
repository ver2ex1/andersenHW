function numToScale () {
    try {
    var num = +prompt('Введите число')
    var scale = +prompt('Введите систему счисления')
    console.log(num.toString(scale))
    }
    catch (error) {
        console.log('Некорректный ввод!')
    }
}

function sumAndDividing () {
    let firstValue = +prompt('Введите первое значение')
      if (isNaN(firstValue)) {
        console.log('Некорректный ввод!') 
        return
        }
    let secondValue = +prompt('Введите второе значение')
      if (isNaN(secondValue)) {
        console.log('Некорректный ввод!')
        return
        } 
      else {
        console.log(firstValue + secondValue , firstValue / secondValue)  
        }
      }




