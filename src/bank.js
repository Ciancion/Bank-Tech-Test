function Bank() {
  this.balance = 0;
  this.statement = [];
};

Bank.prototype.createTransaction = function(type, amount) {
  return new Transaction(type, amount);
  // this.transactions.push(transaction);
};

Bank.prototype.deposit = function(amount) {
  transaction = this.createTransaction('Credit', amount);
  this.balance += amount;
  this.updateStatement(transaction);

};

Bank.prototype.withdrawal = function(amount) {
  if (this.balance < amount) {
    throw new Error('Your balance is not enough to process the withdrawal')
  } else {
    transaction = this.createTransaction('Debit', amount);
    this.balance -= amount;
    this.updateStatement(transaction);
  };
};

Bank.prototype.updateStatement = function(transaction) {
  this.statement.push({
    'transaction': transaction,
    'balance': this.balance
  })
};

Bank.prototype.getStatement = function() {
  var output = '';

  for(i = 0; i < this.statement.length; i++){
     result = `${this.statement[i].transaction.date} || ${this.statement[i].transaction.type} || ${this.statement[i].transaction.value} || balance: ${this.statement[i].balance}`
     output = [output, result].join(', ')
  };

  return output
};
