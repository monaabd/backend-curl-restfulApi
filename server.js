//uilding RESTful APIs using Node JS, Express JS
//testitng all in curl https://gist.github.com/subfuzion/08c5d85437d5d4f00e58
var app = require('express')();
var bodyParser = require('body-parser');

var customers={
   "customer1":{
       "name":"Bita",
        "accountNumber":"8105-9787878",
        "oppeningAmount": 2000
   },
    "customer2":{
      "name":"Mohamad",
      "accountNumber":"8105-344333",
      "oppeningAmount": 4000
 },

  }

//   var newCustomer={
//     "customer3":{
//       "name":"Mina",
//       "accountNumber":8105-20000,
//       "oppeningAmount": 5000,
//       "id":3
//  }
//   }

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//URI customers which has all customers info json type
app.get('/customers', function(req, res) {
  res.send(customers);       
});

app.get('/customers/:id',function(req,res){

   res.send(customers[req.params.id]);
 
});

//URI newCustoemr which create new customer and send the whole custoemr list plus new one
//nokte code pain baraye post chon in post hast to barash bayad az postman ya curl estefade koni , ya az methode fetch
app.post('/customers', function (req, res) {
     
     var newCustomer = req.body;
     customers[`customer${Object.keys(customers).length+1}`] = newCustomer;
     console.log(customers);
     res.send(newCustomer);
  }) ; 

  app.put('/customers/:id',function(req,res){
    customers[req.params.id]= req.body ;
 
  res.send(req.body);
  })

  app.delete('/customers/:id', function (req, res) {
    
    delete customers[req.params.id];
    res.send('deleted customer');
  })

//deghat fetch o mitoni dar frontend begar bepari na to bak end mesle inja
// function postReq(){
//   fetch('http://localhost:3000/', {
//   method:'POST',
//   body: JSON.stringify(data),


// }).then(res => res.json())
// .then(function(data){
//    data[customer3]=newCustomer[customer3];
//    console.log('data',data);
// }) 

// .catch(error => console.error('error',error));
// }
// postReq();
app.listen(3000);