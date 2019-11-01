function reverseChar(str) {
  //create two arrays to hold special character and their index position
  var specIndex = [];
  var specChar = [];

  //loop through array and push non-numeric characters and their index into the arrays
  for (var i = 0; i<str.length; i++) {
      if (/[^a-zA-Z0-9]/g.test(str[i]) === true ) {
          specIndex.push(i);
          specChar.push(str[i]);
      }
  }

  //delete special characters from original string, convert string to array and reverse
  str = str.replace(/[^a-zA-Z0-9]/g,"").split("").reverse();

  //create array to hold new string
  var newStr = [];

  //loop through original string and push special characters into the newStr array based on index number
  for (var i = 0; i<str.length; i++) {
      if (specIndex.includes(i)) {
          var index = specIndex.indexOf(i);
          newStr.push(specChar[index]);
      }
      newStr.push(str[i])
     }

  //log the result to control
  console.log(str.join(""))
} 

function reverseString() {
var input = document.getElementById("string-input").value;
document.getElementById("result").innerHTML = reverseChar(input)
}