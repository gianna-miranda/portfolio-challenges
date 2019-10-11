var operator = "",
  num = "",
  holder1 = "", //strings are used so that numbers can be concatenated together
  holder2 = "",
  count = 0,
  result = NaN;

function calculate(num, count) {
  if (count === 0 && holder1.length < 11) { //make sure input is no larger than 11 digits
    holder1 += num;
  } else if (count === 1 && holder2.length < 11) { //if an operator is selected
    holder2 += num;
  } else if (count === 2) {
    switch (operator) {
      case ('+'):
        result = Number(holder1) + Number(holder2);
        break;
      case ('-'):
        result = Number(holder1) - Number(holder2);
        break;
      case ('*'):
        result = Number(holder1) * Number(holder2);
        break;
      case ('/'):
        result = Number(holder1) / Number(holder2);
        break;
      case ('%'):
        if (holder2 === "") {
          result = Number(holder1) / 100; //if user selects equal after the mod operator then they are given the percentage in decimal form
        } else {
          result = (Number(holder1) / 100) * holder2; //if user selects a number after the mod operator then they are given the percentage of second number
        }
        break;
    }
  }
}

$(document).ready(function() {
  $(".zero").click(function() {
    num = '0';
    calculate(num, count);
    if (count === 0) { //variable value before operator button is selected
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder1;
    } else { //variable value after operator is selected
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder2;
    }
  });

  $(".point").click(function() {
    num = '.';
    calculate(num, count);
    if (count === 0) { //variable value before operator button is selected
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder1;
    } else { //variable value after operator is selected
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder2;
    }
  });

  $(".one").click(function() {
    num = '1';
    calculate(num, count);
    if (count === 0) { //variable value before operator button is selected
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder1;
    } else { //variable value after operator is selected
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder2;
    }
  });

  $(".two").click(function() {
    num = '2';
    calculate(num, count);
    if (count === 0) {
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder1;
    } else {
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder2;
    }
  });

  $(".three").click(function() {
    num = '3';
    calculate(num, count);
    if (count === 0) {
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder1;
    } else {
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder2;
    }
  });

  $(".four").click(function() {
    num = '4';
    calculate(num, count);
    if (count === 0) {
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder1;
    } else {
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder2;
    }
  });

  $(".five").click(function() {
    num = '5';
    calculate(num, count);
    if (count === 0) {
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder1;
    } else {
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder2;
    }
  });

  $(".six").click(function() {
    num = '6';
    calculate(num, count);
    if (count === 0) {
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder1;
    } else {
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder2;
    }
  });

  $(".seven").click(function() {
    num = '7';
    calculate(num, count);
    if (count === 0) {
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder1;
    } else {
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder2;
    }
  });

  $(".eight").click(function() {
    num = '8';
    calculate(num, count);
    if (count === 0) {
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder1;
    } else {
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder2;
    }
  });

  $(".nine").click(function() {
    num = '9';
    calculate(num, count);
    if (count === 0) {
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder1;
    } else {
      document.getElementById("screen").textContent = "";
      document.getElementById("screen").textContent += holder2;
    }
  });

  $(".plus").click(function() {
    if (num === "" && !isNaN(result)) { //if there is an answer stored, then clicking an operator after equal sign should continue operation
      holder1 = result.toString();
    }
    if (holder2 !== "") { // if instead of clicking "equal" if user continues chaining operations together
      count = 2;
      calculate(num, count);
      document.getElementById("screen").textContent = holder2;
      holder1 = result.toString();
      holder2 = "";
    }
    count = 1;
    operator = "+";
    calculate("", count);
    $(".plus h2").css("color", "rgb(33,107,153)"); //highlights the operator    
    $(".minus h2").css("color", ""); //removes highlight of operator
    $(".mult h2").css("color", ""); //removes highlight of operator
    $(".divide h2").css("color", ""); //removes highlight of operator
    $(".mod h2").css("color", ""); //removes highlight of operator
  });

  $(".minus").click(function() {
    if (num === "" && !isNaN(result)) { //if there is an answer stored, then clicking an operator after equal sign should continue operation
      holder1 = result.toString();
    }
    if (holder2 !== "") { // if instead of clicking "equal" if user continues chaining operations together
      count = 2;
      calculate(num, count);
      document.getElementById("screen").textContent = holder2;
      holder1 = result.toString();
      holder2 = "";
    }
    count = 1;
    operator = "-";
    calculate("", count);
    $(".minus h2").css("color", "rgb(33,107,153)"); //highlights the operator
    $(".plus h2").css("color", ""); //removes highlight of operator
    $(".mult h2").css("color", ""); //removes highlight of operator
    $(".divide h2").css("color", ""); //removes highlight of operator
    $(".mod h2").css("color", ""); //removes highlight of operator
  });

  $(".mult").click(function() {
    if (num === "" && !isNaN(result)) { //if there is an answer stored, then clicking an operator after equal sign should continue operation
      holder1 = result.toString();
    }
    if (holder2 !== "") { // if instead of clicking "equal" if user continues chaining operations together
      count = 2;
      calculate(num, count);
      document.getElementById("screen").textContent = holder2;
      holder1 = result.toString();
      holder2 = "";
    }
    count = 1;
    operator = "*";
    calculate("", count);
    $(".mult h2").css("color", "rgb(33,107,153)"); //highlights the operator
    $(".plus h2").css("color", ""); //removes highlight of operator
    $(".minus h2").css("color", ""); //removes highlight of operator
    $(".divide h2").css("color", ""); //removes highlight of operator
    $(".mod h2").css("color", ""); //removes highlight of operator
  });

  $(".divide").click(function() {
    if (num === "" && !isNaN(result)) { //if there is an answer stored, then clicking an operator after equal sign should continue operation
      holder1 = result.toString();
    }
    if (holder2 !== "") { // if instead of clicking "equal" if user continues chaining operations together
      count = 2;
      calculate(num, count);
      document.getElementById("screen").textContent = holder2;
      holder1 = result.toString();
      holder2 = "";
    }
    count = 1;
    operator = "/";
    calculate("", count);
    $(".divide h2").css("color", "rgb(33,107,153)"); //highlights the operator
    $(".plus h2").css("color", ""); //removes highlight of operator
    $(".minus h2").css("color", ""); //removes highlight of operator
    $(".mult h2").css("color", ""); //removes highlight of operator
    $(".mod h2").css("color", ""); //removes highlight of operator
  });

  $(".mod").click(function() {
    if (num === "" && !isNaN(result)) { //if there is an answer stored, then clicking an operator after equal sign should continue operation
      holder1 = result.toString();
    }
    if (holder2 !== "") { // if instead of clicking "equal" if user continues chaining operations together
      count = 2;
      calculate(num, count);
      document.getElementById("screen").textContent = holder2;
      holder1 = result.toString();
      holder2 = "";
    }
    count = 1;
    operator = "%";
    calculate("", count);
    $(".mod h2").css("color", "rgb(33,107,153)"); //highlights the operator
    $(".plus h2").css("color", ""); //removes highlight of operator
    $(".minus h2").css("color", ""); //removes highlight of operator
    $(".mult h2").css("color", ""); //removes highlight of operator
    $(".divide h2").css("color", ""); //removes highlight of operator
  });

  $(".equal").click(function() {
    count = 2;
    calculate(num, count);

    $(".plus h2").css("color", ""); //removes highlight of operator
    $(".minus h2").css("color", "");
    $(".mult h2").css("color", "");
    $(".divide h2").css("color", "");
    $(".mod h2").css("color", "");

    if (result.toString().length < 10) {
      document.getElementById("screen").textContent = result;
    } else {
      document.getElementById("screen").textContent = result.toPrecision(7);
    } //make answer fit in the display screen

    num = "";
    holder1 = "";
    holder2 = "";
    operator = "";
    count = 0;
  });

  $(".clear").click(function() {
    count = 0;
    num = "";
    holder1 = "";
    holder2 = "";
    operator = "";
    result = NaN;
    document.getElementById("screen").textContent = "";
    $(".plus h2").css("color", ""); //removes highlight of operator
    $(".minus h2").css("color", "");
    $(".mult h2").css("color", "");
    $(".divide h2").css("color", "");
    $(".mod h2").css("color", "");
  });

  $(".del").click(function() {
    num = "";
    if (count === 0) {
      holder1 = holder1.substring(0, holder1.length - 1); //deletes one entry at a time
      document.getElementById("screen").textContent = holder1;
    } else if (count === 1) {
      holder2 = holder2.substring(0, holder2.length - 1); //deletes one entry at a time
      document.getElementById("screen").textContent = holder2;
    }

  });

});