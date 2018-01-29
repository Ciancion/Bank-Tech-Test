function Bank(){
  this.balance = 0;
  this.transactions = [];
};

Bank.prototype.createTransaction = function(){
  var transaction = new Transaction()
  this.transactions.push(transaction)
};

Bank.prototype.deposit = function(money){
  this.createTransaction();
  index = (this.transactions.length - 1)
  this.transactions[index].credit = money;
  this.balance += money
};

Bank.prototype.withdrawal = function(money){
  this.createTransaction();
  index = (this.transactions.length - 1)
  this.transactions[index].debit = money;
  this.balance -= money
};
