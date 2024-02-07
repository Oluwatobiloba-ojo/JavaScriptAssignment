const {sales_commision_calculator, sales_commision_list} = require("./sales_commision_calculator")

const input = require("prompt-sync")();

function collectInput(){
    let amount = Number(input("Enter the amount "));
    return amount;
}

let list_of_amount_for_week = [];
let amount = collectInput();
list_of_amount_for_week.push(amount);
let condition = String(input("Do you still want to add amount enter yes / no "));



while(condition.toUpperCase() === "YES"){
    amount = collectInput();
    list_of_amount_for_week.push(amount);
    condition = input("Do you still want to add amount enter yes / no ");
}

console.log(sales_commision_list(list_of_amount_for_week));