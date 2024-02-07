const {sales_commision_calculator, sales_commision_list} = require("./sales_commision_calculator")

test("test that the commision recieve from a sales person who sell a 5000 is 650 per week", ()=>{
    let weekAmount = 5000;
    let commision_earning = sales_commision_calculator(weekAmount);

    expect(commision_earning).toBe(650);
});

test("test that when one have a list of sales good it still solve the person earning", ()=>{
    let store = new Array();
    let firstDayOfWeek = 1000;
    let secondDayOfWeek = 1500;
    let thirdDayOfWeek = 1700;
    let fourthDayOfWeek = 1800;
    let fifthDayOfWeek = 2000;
    store.push(firstDayOfWeek);
    store.push(secondDayOfWeek);
    store.push(thirdDayOfWeek);
    store.push(fourthDayOfWeek);
    store.push(fifthDayOfWeek);
    let commision_earning = sales_commision_list(store);

    expect(commision_earning).toBe(920);
});

test("test that when one have a list of sales good it still solve the person earning", ()=>{
    let store = new Array();
    let firstDayOfWeek = 239.99;
    let secondDayOfWeek = 129.75;
    let thirdDayOfWeek = 99.95;
    let fourthDayOfWeek = 350.89;

    store.push(firstDayOfWeek);
    store.push(secondDayOfWeek);
    store.push(thirdDayOfWeek);
    store.push(fourthDayOfWeek);
    
    let commision_earning = sales_commision_list(store);

    expect(commision_earning).toBe(273.85);
});