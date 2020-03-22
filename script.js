"use strict";


let signs = [sign0, sign1, sign2, sign3, sign4, sign5, sign6, sign7, sign8, sign9];

let methods = [division, multiplication, addition, subtraction];

var theyPushed = [];

var greyPushed = "";

var first_digit = 0;
var method = "";
var res = "";
var memory = 0;
var isArc = false;

function equal() {

  FirstColor();
  if (greyPushed !=="") {
    ChangeDark(greyPushed);
    greyPushed = "";
  }

  switch (method){
    case "lg":
      res = Math.log(first_digit)/Math.log(+res);
      break;
    case "EE":
      res = first_digit*Math.pow(10, +res);
      break;
    case "^1/y":
      res = Math.pow(first_digit, 1/+res);
      break;
    case "**":
      res = Math.pow(first_digit, +res);
      break;
    case "/":
      res = first_digit/(+res);
      break;
    case "*":
      res = first_digit*(+res);
      break;
    case "+":
      res = first_digit+(+res);
      break;
    case "-":
      res = first_digit-(+res);
      break;
  }
  method = "";
  first_digit = 0;
  result.innerHTML = res;

}

// добавить изменение цвета при нажатии
for (let i =0; i<4; ++i){

  methods[i].addEventListener('click', function () {
    FirstColor();

    ChangeOrange(methods[i]);


    if ((method!=="")&&(first_digit!==0)&&(res!=="")) {

      equal();
      ChangeOrange(methods[i]);
    }


    if (res!=="")
      first_digit = +res;

    switch (i){
      case 0:
        method = "/";
        break;
      case 1:
        method = "*";
        break;
      case 2:
        method = "+";
        break;
      case 3:
        method = "-";
        break;
    }

    res = "";

    if (method==="")
      result.innerHTML = "";
  })

}

for (let i =0; i<10; ++i){
  signs[i].addEventListener('click', function(){
    res += i.toString();
    pushRes(res);

  })
}

my2.addEventListener('click', function () {
  res = Math.pow(2, +res);
  pushRes(res);
});

mc.addEventListener('click', function () {
  if (memory!==0){
    ChangeDark(mr);
  }
  memory = 0;
});

mPlus.addEventListener('click', function () {
  if (memory===0 && +res!==0){
    ChangeDark(mr);
  }
  memory+= (+res);
});

mMinus.addEventListener('click', function () {
  if (memory===0 && +res!==0){
    ChangeDark(mr);
  }
  memory-= (+res);
});

mr.addEventListener('click', function () {
  res = memory;
  pushRes(res);
});

square.addEventListener('click', function () {
  res = Math.pow(+res, 2);
  pushRes(res);
});

cube.addEventListener('click', function () {
  res = Math.pow(+res, 3);
  pushRes(res);
});

ten.addEventListener('click', function () {
  res = Math.pow(10, +res);
  pushRes(res);
});

sign_.addEventListener('click', function () {
  if (res.indexOf('.')===-1){
    res += '.';
    pushRes(res);
  }
});

degree.addEventListener('click', function () {
  diffOperation("**")
  CheckAndChange(this)
});

subX.addEventListener('click', function () {
  res = 1/+res;
  pushRes(res);
});

root2.addEventListener('click', function () {
  res = Math.sqrt(+res);
  pushRes(res);
});

root3.addEventListener('click', function () {
  res = Math.pow(+res, 1/3);
  pushRes(res);
});

rootY.addEventListener('click', function () {
  diffOperation("^1/y");
  CheckAndChange(this);
});

myln.addEventListener('click', function () {
  res = Math.log(+res);
  pushRes(res);
});

mylg.addEventListener('click', function () {
  res = Math.log(+res)/Math.log(10);
  pushRes(res);
});

factorial.addEventListener('click', function () {
  res = myFactorial(+res, 1);
  pushRes(res);

});

sinX.addEventListener('click', function () {
  if (isArc){
    res = Math.asin(+res);
  }
  else{
    res = Math.sin(+res);
  }
  pushRes(res);

});

cosX.addEventListener('click', function () {
  if (isArc){
    res = Math.acos(+res);
  }
  else{
    res = Math.cos(+res);
  }
  pushRes(res);

});

tanX.addEventListener('click', function () {
  if (isArc){
    res = Math.atan(+res);
  }
  else{
    res = Math.tan(+res);
  }
  pushRes(res);
});

getE.addEventListener('click', function () {
  res = Math.exp(1);
  pushRes(res);
});

mylog2.addEventListener('click', function () {
  res = Math.log(+res)/Math.log(2);
  pushRes(res);
});

logY.addEventListener('click', function () {
  diffOperation("lg");
  CheckAndChange(this);

});

EE.addEventListener('click', function () {
  diffOperation("EE");
  CheckAndChange(this);
});

sinH.addEventListener('click', function () {
  if (isArc){
    res = Math.asinh(+res);
  }
  else{
    res = Math.sinh(+res);
  }
  pushRes(res);
});


cosH.addEventListener('click', function () {
  if (isArc){
    res = Math.acosh(+res);
  }
  else{
    res = Math.cosh(+res);
  }
  pushRes(res);
});


tanH.addEventListener('click', function () {
  if (isArc){
    res = Math.atanh(+res);
  }
  else{
    res = Math.tanh(+res);
  }
  pushRes(res);
});

pi.addEventListener('click', function () {
  res = Math.PI;
  pushRes(res);
});

myclean.addEventListener('click', function () {
  res = '';
  first_digit = 0;
  method = "";
  FirstColor();
  pushRes(res);
});

change_sign.addEventListener('click', function () {
  res = (+res)*(-1).toString();
  pushRes(res);

});

e.addEventListener('click', function () {
  res = +Math.exp(+res);
  pushRes(res);
});

arc.addEventListener('click', function () {
  isArc = !isArc;
  ChangeDark(arc);
});

get_answer.addEventListener('click', function () {
  equal();
});


percent.addEventListener('click', function () {
  switch (method){
    case "/":
      res = (+res)/100;
      break;
    case "*":
      res = (+res)/100;
      break;
    case "+":
      res = (+res)/100*first_digit;
      break;
    case "-":
      res = (+res)/100*first_digit;
  }
  FirstColor();

  pushRes(res);

});

function myFactorial(x, r) {
  if (x>1){
    return myFactorial(x-1, r*x);
  } else{
    return r;
  }
}

function FirstColor() {
  theyPushed.forEach(function (item, i, theyPushed) {
    document.getElementById(item.id).classList.toggle("pushedOrange");
    document.getElementById(item.id).classList.toggle("orange");
  });
  theyPushed = [];

}

function ChangeOrange(name) {
  name.classList.toggle("pushedOrange");
  name.classList.toggle("orange");
  theyPushed.push(name);
}
function ChangeDark(name) {
  name.classList.toggle("dark");
  name.classList.toggle("gray");
}

function CheckAndChange(name) {
  if(greyPushed!==name) {
    if (greyPushed !== "") {
      ChangeDark(greyPushed);
    }
    greyPushed = name;
    ChangeDark(name);
  }

}

function diffOperation(name) {
  if (res!=="") {
    first_digit = +res;
  }

  res = "";
  pushRes(res);
  method = name;
}

function pushRes(res) {
  if (res || res===""){
    result.innerHTML = res;
  } else{
    result.innerHTML = "Error";
  }
}
