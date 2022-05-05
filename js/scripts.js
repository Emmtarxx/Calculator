// function add(number1, number2){
//     return number1 + number2;
//   }
// function subtract(number1,number2){
// return number1-number2;
// }
// function multiply(number1,number2){
//     return number1 * number2;

// }
//   const number1 = parseInt(prompt("Enter a number:"));
//   const number2 = parseInt(prompt("Enter another number:"));

//   alert("The result of subtraction is" + subtract(number1, number2));
//   alert("The result of addition is" + add(number1, number2));
//   alert("the result of multiply is " + multiply(number1, number2));
function add(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function mul(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}
$(document).ready(function () {
  $("#Add").click(function (event) {
      event.preventDefault();
      const number1 = parseInt($("#num1").val());
      const number2 = parseInt($("#num2").val());


      if (number1 === "" || number2 === "") {
          $("#result").text("Please input a number")
      } else {
          const result = add(number1, number2)
          $("#result").text(result);
      }
  })
  $("#Sub").click(function (event) {
      event.preventDefault();
      const number1 = parseInt($("#num1").val());
      const number2 = parseInt($("#num2").val());


      if (number1 === "" || number2 === "") {
          $("#result").text("Please input a number")
      } else {
          const result = sub(number1, number2)
          $("#result").text(result);
      }
  })
  $("#Mul").click(function (event) {
      event.preventDefault();
      const number1 = parseInt($("#num1").val());
      const number2 = parseInt($("#num2").val());


      if (number1 === "" || number2 === "") {
          $("#result").text("Please input a number")
      } else {
          const result = mul(number1, number2)
          $("#result").text(result);
      }
  })
  $("#Div").click(function (event) {
      event.preventDefault();
      const number1 = parseInt($("#num1").val());
      const number2 = parseInt($("#num2").val());


      if (number1 === "" || number2 === "") {
          $("#result").text("Please input a number")
      } else {
          const result = div(number1, number2)
          $("#result").text(result);
      }
  })
})