const prompt = require("prompt-sync")();

function calculate_gas_milage(miles, gallon){
    return miles / gallon;
};


function calculate_list_of_trips(list){
    let totalMiles = 0;let totalGallon = 0;
    for(let count = 0; count < list.length; count+=2){
        totalMiles += list[count];
        totalGallon += list[count+1];
    }
    return Number(calculate_gas_milage(totalMiles, totalGallon).toFixed(2));
}


module.exports = {calculate_gas_milage,calculate_list_of_trips, main};


function main(){
    let mile; let gallon; let trip_info = new Array();let moveOn;

    while(typeof moveOn === "undefined"){
    mile = Number(prompt("The mile of the journey "));
    
    gallon = Number(prompt("The gallon used for the trip "));
    
    trip_info.push(mile);
    
    trip_info.push(gallon);
    
    let condition = prompt("Enter yes to stop ");
    
    if (condition.toUpperCase() === "YES") moveOn = "stop";
    }
    result = calculate_list_of_trips(trip_info);
    return result;
}

