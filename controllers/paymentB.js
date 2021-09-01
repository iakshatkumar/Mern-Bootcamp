const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "pybg44yhz4skf72r",
  publicKey: "s62v94rpwkxxymdj",
  privateKey: "00f161894ab18875ec625615159085f3",
});

exports.getToken = (req,res)=>{
    
  gateway.clientToken.generate({
      
  }, function(err,response){
       if(err){
           res.status(500).send(err)
       }
       else{
           res.send(response)
       }
  });
}
exports.processPayment = (req,res)=>{
  
  let nonceFromTheClient = req.body.paymentMethodNonce
  let amountFromTheClient = req.body.amount
  gateway.transaction.sale({
      amount:amountFromTheClient,
      paymentMethodNonce:nonceFromTheClient,
      
      option:{
          submitForSettlement:true
      }
   },function(err,result){
        if(err){
            console.log(err);
            res.status(500).json({
                error:err
            })
        }
        else{
            res.json(result);
        }
  });
};