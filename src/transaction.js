function Transaction(status){
  this.date = new Date();
  this.credit = 0;
  this.debit = 0;
  this.type = '';

};
Transaction.prototype.isCredit = function(){
  this.type = 'Credit'
};

Transaction.prototype.isDebit = function(){
  this.type = 'Debit'
};

Transaction.prototype.updateStatement = function(money){
  if(this.type === 'Credit'){this.credit = money }
  else{this.debit = money}
};
