// 1.Write a program that takes the lengths of three sides of a triangle and determines if a valid triangle can be formed. For a valid triangle, the sum of any two sides must be greater than the third side.

var side1=prompt("enter 1st side length:")
var side2=prompt("enter 2st side length:")
var side3=prompt("enter 3st side length:")
if((side1+side2)>side3 && (side2+side3)>side1 && (side3+side1)>side2){
    console.log("it is a valid triangle");
}
else{
    console.log("it is not a valid triangle");
    
}

// 2.Write a program to check whether a given number is prime or not. A prime number is a number that is only divisible by 1 and itself.

var num=+prompt("enter a number to check prime or not:")
for(i=2;i<num;i++){
    if(num%i==0){
        console.log(`${num} is not a prime number`);
        break;
    }
    else{
        console.log(`${num} is prime number`);
        break
    }
}


// 3.Write a program that takes three numbers as input and returns the largest of them.

var input1=+prompt("enter number1")
var input2=+prompt("enter number2")
var input3=+prompt("enter number3")

if(input1>input2 && input1>input3){
    console.log(`${input1} is greater`);  
}
else if(input2>input1 && input2>input3){
    console.log(`${input2} is greater`);  
}
else{
    console.log(`${input3} is grater`);
    
}

// 4. Checking when given year is a leap year or not
 var year=+prompt("enter the year");
 if(year%4==0 && year%100!=0 || year%400==0){
    console.log(`${year} is leap year`);
 }
 else{
    console.log(`${year} not leap year`);
    
 }


// 5.Write a program that checks if a number is divisible by both 3 and 5. If it is, print "FizzBuzz", if divisible by only 3 print "Fizz", if divisible by only 5 print "Buzz", and if not divisible by either print the number.

var input=+prompt("enter a number");
if(input%3 ==0 && input%5 ==0){
    console.log( "FizzBuzz");
}
else if(input%3==0){
    console.log("Fizz");   
}
else if(input%5==0){
    console.log("Buzz");
}
else{
    console.log(`${input}`);
}

// 6.Write a program that takes two numbers and calculates their LCM using if-else statements.

var fstnum=+prompt("enter 1st number:")
var secondnum=+prompt("enter 2nd number")
repeat=0
if(fstnum>secondnum){
    repeat=fstnum
}
else{
    repeat=secondnum
}
var fstmultiples=[]
var Lcm=0
for(i=1;i<=secondnum;i++){
    fstmultiples.push(fstnum*i)
}
for(j=0;j<fstmultiples.length;j++){
    if(fstmultiples[j]%secondnum == 0){
        Lcm=fstmultiples[j]
        break
    }
}
console.log("LCM is:",Lcm);


// 7.Write a program that takes two numbers and finds their GCD using if-else statements.

var fstnum1=+prompt("enter 1st number:")
var secondnum1=+prompt("enter 2nd number")
repeat1=0
if(fstnum1>secondnum1){
    repeat1=fstnum1
}
else{
    repeat1=secondnum1
}
var fstmultiples1=[]
var lcm=0
for(i=1;i<=repeat1;i++){
    fstmultiples1.push(fstnum1*i)
}
for(j=0;j<fstmultiples1.length;j++){
    if(fstmultiples1[j]%secondnum1 == 0){
        lcm=fstmultiples1[j]
        break
    }
}
console.log("GCD is :",(fstnum1*secondnum1)/lcm);


// 8.Create a simple calculator using a switch statement.

var a=+prompt("enter a number")
var b=+prompt("enter b number")
var operation=prompt("enter opertaion")
switch(operation){
    case "+":
        console.log(a+b);
        break;
        case "-":
            console.log(a-b);
            break;
            case "*":
                console.log(a*b);
                break;
                case "%":
                    console.log(a%b);
                    break;
                    case "/":
                        console.log(a/b);
                        break; 
                        default:
                            console.log("entered invalid opertaions ");
                                  
}
