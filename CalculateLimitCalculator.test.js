const {setUpCustomer, calculateBalance, compare_balance} = require("../JAVACHAPTERFOUREXCERCISE/CreditLimitCalculator")

test("test that when we set the customer it return the customer and confirm", ()=>{
    let new_customer = setUpCustomer(102021, 2000, 10000, 5000, 7000);

    expect(new_customer.balance).toBe(10000);
});

test("test that when we set up the customer with their balance, charges and credit we can get balance", ()=>{
    let beginingBalance = 10000;
    let itemCharge = 5000;
    let credit = 4000;
    let new_customer = setUpCustomer(12021, itemCharge, beginingBalance, credit);
    console.log(new_customer);
    expect(calculateBalance()).toBe(11000);
});

test("test for if the balance is greater than credit limit return Credit limit exceeded", ()=>{
    let beginingBalance = 10000;
    let item_charge = 5000;
    let credit = 4000;
    setUpCustomer(120101, item_charge, beginingBalance, credit, 10000);
    let balance = calculateBalance();
    expect(balance).toBe(11000);
    expect(compare_balance()).toBe("Credit Limit exceeded");
});

test("test that if the balance is less than the credit limit return credit limit has nor exceed", ()=>{
    let beginingBalance = 10000;
    let item_charge = 5000;
    let credit = 4000;
    setUpCustomer(120101, item_charge, beginingBalance, credit, 20000);
    let balance = calculateBalance();
    expect(balance).toBe(11000);
    expect(compare_balance()).toBe("Credit Limit does not exceed");
});
