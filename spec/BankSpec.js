describe("Bank", function(){
  var bank;

  beforeEach(function(){
    bank = new Bank();
    transaction = new Transaction();

  });

  it("Should create a transaction", function(){
    bank.createTransaction(status);

    expect(bank.transactions.length).toEqual(1)
  });

  it("Should have an initial balance set to 0", function(){
    expect(bank.balance).toEqual(0);
  });

  it("Should allow to deposit money", function(){
    bank.deposit(2);
    expect(bank.balance).toEqual(2);
  });

  it("Should allow to take money", function(){
    bank.deposit(10);
    bank.withdrawal(5);

    expect(bank.balance).toEqual(5);
  });

});
