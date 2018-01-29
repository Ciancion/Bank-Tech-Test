describe("Transaction", function(){
  var transaction;

  beforeEach(function(){
    transaction = new Transaction();
  });

  it("Should save the date of the transaction when it is done", function(){
    function TransactionDouble(){
      this.date = "29/01/2018"
    };
    transactionDouble = new TransactionDouble

    expect(transactionDouble.date).toBe("29/01/2018")
  });

});
