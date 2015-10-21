/**
 * JarrodSmith
 * 10/15/15
 * SDI 1510 Section 1
 * Letter grade calculator
 */

//Variables
//Variable for the number grade
var gradePercent;

//Input
//Prompts user to input number grade
gradePercent = Number(prompt("Please enter your grade percentage."));


//Equation

//Takes input gives you output accordingly
if (gradePercent <= 69){
    console.log("You have a %" + gradePercent + ", which means you have earned a(n) F in the class!");
}else if (gradePercent <= 72){
    console.log("You have a %" + gradePercent + ", which means you have earned a(n) D in the class!");
}else if (gradePercent <= 75){
    console.log("You have a %" + gradePercent + ", which means you have earned a(n) C in the class!");
}else if (gradePercent <= 79){
    console.log("You have a %" + gradePercent + ", which means you have earned a(n) C+ in the class!");
}else if (gradePercent <= 84){
    console.log("You have a %" + gradePercent + ", which means you have earned a(n) B in the class!");
}else if (gradePercent <= 89){
    console.log("You have a %" + gradePercent + ", which means you have earned a(n) B+ in the class!");
}else if (gradePercent <= 94){
    console.log("You have a %" + gradePercent + ", which means you have earned a(n) A in the class!");
}else{
    console.log("You have a %" + gradePercent + ", which means you have earned a(n) A+ in the class!");
}
