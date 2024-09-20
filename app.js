// Q1
var city = "Karachi";
if (city === "Karachi") {
    console.log(`${city} is the city of lights`);
}

// Q2
if (x === y) {
    var newVar = prompt("Value of z is")
} document.write(newVar);

// Q3
var zipCode = +prompt("Enter Zip Code");
var code = 10010;
if (zipCode === code) {
    alert(`Karachi`)
} 

if (zipCode !== code) {
    alert(`Enter Correct City`)
}

// Q4
var x = 3;
if (x === 3) {
    x = 5;
} console.log(x);

// Chap 11 Comparision Operators

// Q1&2
var variable1 = 3;
var variable2 = 6;

if (variable1 !== variable2) {
    console.log(`${variable1} is unequal to ${variable2}`);

} if (variable1 >= variable2) {
    console.log(`${variable1} is greator than and equal to ${variable2}`);
}

// Q3
variable2 = 3;
if (variable1 !== variable2) {
    console.log(`${variable1} is unequal to ${variable2}`);
}

// Q4
var variable3 = 3;
var variable4 = 6;

if (variable3 !== variable4) {
    alert(`${variable3} is unequal to ${variable4}`);
}

// Q5
var Name = "Shehzeen";
var name = prompt("Enter your name");
if (Name !== name) {
    alert("No match")
}

// Chap 12 if...else and else if statements

// Q1
var a = 45;
var b = 78;
if (a >= b) {
    alert(`${a} is equal to ${b}`);
} else {
    alert(`${a} is not equal to ${b}`)
}

// Q2
var marks = +prompt("Enter your Marks");
var grade;
if (marks >= 100) {
    grade = "A+";
} else if (marks >= 80) {
    grade = "A";
} else if (marks >= 70) {
    grade = "B";
} else if (marks >= 60) {
    grade = "C";
} else if (marks >= 50){ 
    grade = "D";
} else if(marks <= 50) {
    grade = "Fail";
} alert(`According to your marks your grade is ${grade}`);\

// Q3
var a = 15;
if (a === 10) {
alert(`a is 10`)
} else if (a !== 10) {
    alert(`The correct value of a is ${a}`)
}

// Q4
var city = "Gujranwala";
if (city === "Karachi") {
    alert(`Its Karachi`)
} else if (city === "Lahore") {
    alert(`Its Lahore`)
} else {
    alert(`Verify your city first!!`)
}

// Chap13 Testing Sets of Condition

// Q1
var e = 700;
var f = 700;
var g = 557;
var h = 557;
if (e === f && g === h) {
    alert(`its true`)
}

// Q2
var v = 800;
var w = 800;
var y = 56;
var z = 33;
if (v === w || y === z) {
    alert(`its half true`)
}

// Q3
var varia = "Hamza";
var age = 57;
if (varia === "Arsalan" || age <= 60) {
    alert(`ya!! its me`)
}

// Q4
var num1 = 29;
var num2 = 87;
if (num1 > num2 || num1 < num2) {
    alert(`TRUE!!!:)`)
}

// Q5
var firstName = "Shehzeen";
var lastName = "Ali";
var firstName = prompt("Enter your first Name");
var lastName = prompt("Enter your last Name");
if (firstName === "Shehzeen" && lastName === "Ali") {
    alert(`im here`)
}

// Chap 14 (if statement nested)
// Q1
var password = +prompt ("Enter Password");
if (password !== " ") {
if (password <= "1234") {
    alert(`Password must be greator than 5`);
} else if (password >= "12345") {
    alert(`OK`);
}
}

// Q2
var a = 1;
var c = "Max";
if (a === 1) {
    if (c === "Max") {
        alert(`OK`);
    }
}

// Q4
var Num1 = 6;
var Num2 = 6;

if (Num1 === Num2) {
    if (Num1 <= Num2) {
        alert(`Test Pass`)
    }
}

// PDF 2 Questions

// Q2
var r = 34;
var s = 34;
if (r >= s) {
    console.log(`OK`);
    if (r === s) {
        console.log(`true`);
    }
}

// Q5
var password = "shehzali12";
var password = prompt("Enter his/her password");
var password2 = prompt ("Enter 2nd Password");
if (password === password2) {
    console.log(`Correct password woohooo!!`)
} else {
    console.log (`Incorrect Password:(`)
}

// Q6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = `Good Day!`
} else {
    greeting = `Good Evening`
} document.write(greeting);

// Q7
var time = 1900;
var time = +prompt("Enter Time");
if (time >= "0000" && time < 1200) {
    alert("Good Morning");
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
} else if (time >= 2100 && time < 2359) {
    alert("Good Night");
}