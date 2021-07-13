/* 
You have to code a country code checker which checks which country does the given number belongs to

The options are as follows:
91 - India
55 - Brazil
81 - Japan
30 - Greece
47 - Norway
If a number does not belong from any country, then print "Other Country"
The number needs to be input as "CC-XXXXX-XXXXX" (CC being country code)
*/

var number = '91-345566';
var code = number.slice(0,2);
// console.log(code);

switch(code) {
   case "91":
       console.log("India");
       break;
   case "55":
       console.log("Brazil");
       break;
    case "81":
       console.log("Japan");
       break;
    case 30:
       console.log("Greece");
       break;
    case "47":
       console.log("Norway");
       break;
   default:
       console.log("Other Country");
}

