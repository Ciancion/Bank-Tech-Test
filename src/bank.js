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
  this.currentTransaction.isCredit()
  this.currentTransaction.updateStatement(money)
  this.balance += money
};

Bank.prototype.withdrawal = function(money){
  if(this.balance < money){throw new Error('Your balance is not enough to process the withdrawal')
  } else {this.createTransaction();
    this.currentTransaction.isDebit()
    this.currentTransaction.updateStatement(money)
    this.balance -= money
  }
};
