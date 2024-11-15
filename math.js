function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
    Account.prototype.deposits = function(deposit) {
        return deposit + balance;
    }
    Account.prototype.withdrawals = function(withdraw) {
        return balance - withdraw;
    }
}


Account.prototype.compoundInterest = function(balance) {
    let p = balance; //principle amount
    let i = .04; //interest
    let n = 5; //compounding periods;
    let t = 2; //# of years
    const amount = p * Math.pow(1 + (i / n), n * t);
    const interest = amount - p
    return interest
}

let account1 = new Account("0000123", 200, "John Doe");
let account2 = new Account("0000456", 30, "Jane Smith");

console.log(account2.deposits(200));
console.log(account1.withdrawals(20));

console.log(account1.compoundInterest(200).toFixed(2));