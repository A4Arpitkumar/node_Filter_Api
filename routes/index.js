var express = require('express');
const User = require('../Models/userSchema');
var router = express.Router();

/* GET home page. */
router.get('/getdata', async function(req, res, next) {
  try {
    const data = await User.find({state : "gujarat",age :{$gt : 50}});
    console.log(data);
    res.status(200).json({
      data
    })
  } catch (error) {
    console.log(error);
  }
});

router.delete('/delete/:id', async function(req, res, next) {
  try {
    const data = await User.findByIdAndDelete(req.params.id);
    console.log("data is delete");
    
  } catch (error) {
    console.log(error);
  }
});

router.patch('/edit/:id', async function(req, res, next) {
  try {
    const data = await User.findByIdAndUpdate(req.params.id,req.body);
   
    res.status(201).json({
      data
    })
  } catch (error) {
    console.log(error);
  }
});

// router.post('/getdata',function(req,res,next){
//   console.log(req.body);

//   const data = new User({
//     "name" : req.body.name,
//     "gender" : req.body.gender,
//     "phone" : req.body.phone,
//     "email" : req.body.email,
//     "city" : req.body.city,
//     "state" : req.body.state,
//     "age" : req.body.age
//   });

//   const results = data.save();
//   res.send(results);
//   res.redirect('/');
//   console.log("Data Inserted");
// })


module.exports = router;
