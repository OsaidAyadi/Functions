// exe6

function double1(x) {
    return 2 * x ;
  }
  function double2 (x){
  return 2 * x;
  }
  function  double3 (x) {
    return 2 * x;
  }


// exe7

function cube (num){
var tak3eb=num*num*num;
return tak3eb

}


// exe 8

function multiply (num1, num2) {
var mult=num1*num2;

return mult;

}

// exe 9


function canIGetADrivingLicense (age) {
if(age >= 20)
return "yes you can"
else 
return ("please come back after " + (20-age) + " years to get one")



}

// exe 10

function sameLength (one,two) {

    if(one.length === two.length)
    return true
    else 
    return false

}


// exe 11

function largerNubmer (num1, num2) {
if(num1 > num2)
return "larger number: " + num1
else if ( num2 > num1)
return "larger number: " + num2
else 
return "the same"
}



// exe 12


function smallerNubmer (num1,num2,num3) {

if (num1<=num2 && num1<=num3)
return "the smallest number: " + num1
else if (num2<=num3 && num2<=num1)

return "the smallest number: " + num2

else if (num3<=num1 && num3<=num2)

return "the smallest number: " + num3

else 
return "the same"
}

// exe 13


function shorterString (st1,st2,st3,st4,st5) {
    var n1 = st1.length;
    var n2 = st2.length;
    var n3 = st3.length;
    var n4 = st4.length;
    var n5 = st5.length;

if (n1<=n2 && n1<=n3 && n1<=n4 && n1<=n5 )
return st1;

else if  (n2<=n1 && n2<=n3 && n2<=n4 && n2<=n5 )
return st2;

else if  (n3<=n1 && n3<=n2 && n3<=n4 && n3<=n5 )
return st3;

else if  (n4<=n1 && n4<=n2 && n4<=n3 && n4<=n5 )
return st4;

else if  (n5<=n1 && n5<=n2 && n5<=n3 && n5<=n4 )
return st5;

else
return "The Same"

}

// exe 14


function longerString (st1,st2,st3,st4) {
  var n1 = st1.length;
  var n2 = st2.length;
  var n3 = st3.length;
  var n4 = st4.length;

if (n1>=n2 && n1>=n3 && n1>=n4)
return st1;

else if  (n2>=n1 && n2>=n3 && n2>=n4 )
return st2;

else if  (n3>=n1 && n3>=n2 && n3>=n4 )
return st3;

else if  (n4>=n1 && n4>=n2 && n4>=n3 )
return st4;

else
return "The Same"
}

// exe 15

function isEven(num) {
if(num %2=== 0)
return true
else if (num%2 !== 0)
return false


}


// exe 16


function isOdd(num) {
  if(num %2 !== 0)
  return true
  else if (num%2 === 0)
  return false
}




// exe 17

function  positive (num) {
if (num<0){
return num*-1
}
return num;

}

//  exe 18




function fullName(firstName, lastName) {
return (firstName + " " + lastName)

}


// exe 19


function average(n1,n2,n3,n4,n5) {
  var avg=(n1+n2+n3+n4+n5)/5;
  return avg



}



// exe 20

function randomNumber () {

return Math.random();



}

// exe 21


function randomBetweenNumbers (n1,n2) {

 return (Math.random() * (n2-n1)  + n1)

}


















