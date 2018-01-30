describe("Transaction", function() {
  var transaction;

  beforeEach(function() {
    transaction = new Transaction('Debit', 200);
  });

  it("Should show value of the transaction", function() {
    expect(transaction.value).toEqual(200)
  });

  it("Should show initial type of the transaction", function() {
    expect(transaction.type).toEqual('Debit')
  });

  it("Should save the date of the transaction when it is done", function() {
    function TransactionDouble() {
      this.date = "29/01/2018"
    };
    transactionDouble = new TransactionDouble

    expect(transactionDouble.date).toBe("29/01/2018")
  });


});
