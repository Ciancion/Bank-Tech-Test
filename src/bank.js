function Bank(){
  this.balance = 0;
  this.transactions = [];
};

Bank.prototype.createTransaction = function(){
  var transaction = new Transaction()
  this.transactions.push(transaction)
  for(i = 0; i < this.transactions.length; i++){
    this.currentTransaction = this.transactions[i]
  }
};

Bank.prototype.deposit = function(money){
  this.createTransaction();
  this.currentTransaction.credit = money;
  this.balance += money
};

Bank.prototype.withdrawal = function(money){
  this.createTransaction();
  this.currentTransaction.debit = money;
  this.balance -= money
};
