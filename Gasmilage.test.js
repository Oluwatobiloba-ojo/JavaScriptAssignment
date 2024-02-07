const {calculate_gas_milage, calculate_list_of_trips} = require("./Gasmilage");

test("test that the gas milage of 200miles per 10gallon is 20miles per gallon",()=>{
    let gallon = 10;
    let miles = 200;
    let result = calculate_gas_milage(miles, gallon);
    expect(result).toBe(20.00);
});

test("test for the average of three trips by the drivers ", () =>{
    let mile1 = 1000;
    let gallon1 = 20;
    
    let mile2 = 2000;
    let gallon2 = 100;

    let mile3 = 5000
    let gallon3 = 100;

    let input = [mile1, gallon1, mile2, gallon2, mile3, gallon3];
    let result = calculate_list_of_trips(input);

    expect(result).toBe(36.36);
});



