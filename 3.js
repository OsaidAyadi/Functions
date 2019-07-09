var maxAge= 100;

function calculateSupply(age,amount){
age = maxAge - age ;
var perDay = age *amount*365;

return ("You will need "+ perDay +" to last you until the ripe old age of "+maxAge);


}

console.log(calculateSupply(25,3))
