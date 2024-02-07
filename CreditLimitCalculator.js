let customer = {
    account_number : "0127213719",
    item_charge : "",
    balance : 1000,
    total_credit : 500,
    allowed_credit_limit : 900,
}

function setUpCustomer(account_number, item_charge, balance, total_credit, credit_limit){
    customer.account_number = account_number;
    customer.allowed_credit_limit = credit_limit;
    customer.balance = balance;
    customer.item_charge = item_charge;
    customer.total_credit = total_credit;
    return customer;
}

function calculateBalance(){
    return (customer.balance + customer.item_charge) - customer.total_credit;
}

function compare_balance(){
    if (calculateBalance() > customer.allowed_credit_limit) return "Credit Limit exceeded";
    else return "Credit Limit does not exceed";
}

module.exports = {setUpCustomer, calculateBalance, compare_balance};
