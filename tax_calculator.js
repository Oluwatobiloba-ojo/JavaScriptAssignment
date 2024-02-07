function tax_calculator(income){
    if (income <= 30000) return income * (15 /100);
    else return income * (20 / 100);
}

const prompt = require("prompt-sync")()
module.exports = {tax_calculator, main};

function main(){
    name = prompt("Enter your name ");
    income = prompt("Enter your income ");
    total_income = tax_calculator(income);
    console.log(`${name} this is your tax to be paid ${total_income} out of ${income}`);
    let condition = prompt("Did you still want to continue enter yes / no to stop ");
    
    while(condition.toLowerCase() === "yes"){
    name = prompt("Enter your name ");
    income = prompt("Enter your income ");
    total_income = tax_calculator(income);
    console.log(`${name} this is your tax to be paid ${total_income} out of ${income}`);
    condition = prompt("Did you still want to continue enter yes / no to stop ");
    }
    
}
