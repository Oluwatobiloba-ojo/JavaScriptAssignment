const {tax_calculator} = require("./tax_calculator")

test("Test that the tax calculator will give us the tax rate to be 15 if the amount is less than 30,000", ()=>{
    let income = 20000;
    let tax_payment = tax_calculator(income);
    let tax_rate = (tax_payment * 100) / income;

    expect(tax_payment).toBe(3000);
    expect(tax_rate).toBe(15);
});

test("Test that the tax calculator will give us the tax rate to be 20 if the income is greater than 30,000", ()=>{
    let income = 40000;
    let tax_payment = tax_calculator(income);
    let tax_rate = (tax_payment * 100) / income;

    expect(tax_payment).toBe(8000);
    expect(tax_rate).toBe(20);
});

