function Transaction(type, amount) {
  this.date = new Date();
  this.value = amount;
  this.type = type;
};
