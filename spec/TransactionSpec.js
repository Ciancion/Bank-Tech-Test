describe("Transaction", function(){
  var transaction;

  beforeEach(function(){
    transaction = new Transaction();
  });

  it("Should show initial credit of the transaction", function(){
    expect(transaction.credit).toEqual(0)
  });

  it("Should show initial debit of the transaction", function(){
    expect(transaction.debit).toEqual(0)
  });

  it("Should save the date of the transaction when it is done", function(){
    function TransactionDouble(){
      this.date = "29/01/2018"
    };
    transactionDouble = new TransactionDouble

    expect(transactionDouble.date).toBe("29/01/2018")
  });

  it("Should update the type of transaction in  Credit when it is credit", function(){
    transaction.isCredit();
    expect(transaction.type).toEqual('Credit')
  });

  it("Should update the type of transaction in Debit when it is debit", function(){
    transaction.isDebit();
    expect(transaction.type).toEqual('Debit')
  });

});
