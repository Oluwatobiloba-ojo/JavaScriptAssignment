
function sales_commision_calculator(weeklyAmount){
    return 200 + ((weeklyAmount * 9) / 100); 
}

function sales_commision_list(list){
    let total = 0;
    list.forEach((element)=> total += element);
    return Number(sales_commision_calculator(total).toFixed(2));
}

module.exports = {sales_commision_calculator, sales_commision_list};

