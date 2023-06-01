let calculation = ''
      function evaluation(){
        calculation=eval(calculation);
        calc.innerHTML= calculation
        localStorage.setItem('calc', JSON.stringify(calculation))
      }
        
      calculation = JSON.parse(localStorage.getItem('calc'))|| 0
      let calc = document.querySelector('.js-calculate')
      calc.innerHTML = calculation
      
      function calculator(count){

          calc.innerHTML = calculation+=count;
          
        }
