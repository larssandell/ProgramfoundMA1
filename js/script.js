// Question 1:

var cpuType= 1;            // Number
var brandIntel = false;    // boolean
var brandSeries = "Ryzon"; // String

console.log(typeof(cpuType));
console.log(typeof(brandIntel));
console.log(typeof(brandSeries));
// Question 2:

var firstName = "Lars ";
var lastName = "Sandell";

var fullName = firstName + lastName;

console.log(fullName);

// Question 3:

var frogType = true;

console.log("the type of frog is", typeof(frogType));

// Question 4:

var orderHasShipped = true;

if (orderHasShipped === true) {
    console.log("The shippment is shipped")
} else if (orderHasShipped !== true) {
    console.log("The shippment is not shipped")
}


// Question 5:

for (var i = 7; i <= 13; i++) {
    console.log(i);
}