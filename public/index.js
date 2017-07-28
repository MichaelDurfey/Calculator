let methodValue = 0;
let displayValue = '';
let currentText= '';
let calculator = {
  sum: 0,
  add: function(val1, val2) {
    this.sum += val1 + val2;
    display(this.sum);
  },
  subtract: function(val1, val2) {
    this.sum -= val1 - val2;
    display(this.sum);
  },
  multiply: function(val1, val2) {
    methodValue = val1 * val2
    this.sum += methodValue;
    display(this.sum);
  },
  divide: function(val1, val2) {
    this.sum = val1 / val2;
    display(this.sum);
  },
  clear: function() {
    calc = [];
    this.sum = 0;
    displayValue = '';
    primaryValue = 0;
    display(0);
    currentText = '';
    currentDisplay(0)
  }, 
}

let calc = [];
let currentMethod;

let input = value => {
  let stringValue = value.toString();
  displayValue += stringValue;     
  display(displayValue);
  primaryValue = Number(displayValue);
}

  let displayMethod = '';
  
  $('.method').on('click', e => {
    currentMethod = e.delegateTarget.id;
    displayMethod += e.target.innerHTML;
    display(0);
    calc.push(primaryValue);
    calc.push(currentMethod);
    displayValue = '';
    primaryValue = 0;
  });


$('#equals').on('click', () => {
  primaryValue > 0 ? calc.push(primaryValue) : calc;
  primaryValue = 0;
  let val1 = Number(calc[0]);
  let val2 = Number(calc[2]);
  let method = calc[1];
  return calculator[method](val1, val2);
});  


let display = (value) => {
  let placeHolder = '0';
  $('.answer').html(`${!value ? placeHolder : value}`);
};
display();

let current = '';

let currentDisplay = (val) => {
  let placeHolder = "0";
  $('.current').html(`${!val ? placeHolder : val}`); 
}
currentDisplay();

let currValue = '';
$('.value').on('click', (e) =>{
    let currValue = Number(e.delegateTarget.attributes[2].value);
    input(currValue)
});

$('.button').on('click', e => { 
  let currentVal = e.currentTarget.childNodes;
  let innerText = () => {
    for (let i = 0; i < currentVal.length; i++) {
      if($(currentVal[i]).hasClass("buttonText")){
               return currentVal[i].innerText;   
      }
    };
  }
  current = innerText();
  currentText += current
  currentDisplay(currentText);
})

$('#clear').on('click', function (){
  calculator.clear();
});