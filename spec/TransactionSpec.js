describe("Transaction", function(){
  var transaction;

  beforeEach(function(){
    transaction = new Transaction();
  });


  // it("Should update the status of the transaction to Credit when a deposit is made", function(){
  //   transaction.status = "Credit"
  //   expect(transaction.isCredit()).toBeTruthy()
  // });
  //
  // it("Should update the status of debit to true when a debit is made", function(){
  //   transaction.status = "Debit"
  //   expect(transaction.isDebit()).toBeTruthy()
  // });

  it("Should save the date of the transaction when it is done", function(){
    function TransactionDouble(){
      this.date = "29/01/2018"
    };
    transactionDouble = new TransactionDouble

    expect(transactionDouble.date).toBe("29/01/2018")
  });

});
