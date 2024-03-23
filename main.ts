import inquirer from "inquirer";

let answer = await inquirer.prompt([
    {
        type: "number",
        name: "firstNum",
        message: "enter first number: ",
    },
    {
        type: "number",
        name: "secondNum",
        message: "enter second number: ", 
    },
    {
        type: "list",
        name: "operator",
        message: "choose your operator: ",
        choices:["+","-","x","/"]
    }
])

let number1 = answer.firstNum
let number2 = answer.secondNum
let optr = answer.operator


if ( optr === "+" ){
    console.log( "the sum is: " , number1 + number2 )
}
else if ( optr === "-" ){
    console.log( "the substraction is: " , number1 - number2 )
}
else if ( optr === "*" ){
    console.log( "the multiplication is: " , number1 * number2 )
}
else {
    console.log( "the division is is: " , number1 / number2 )
}