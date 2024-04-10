const express = require('express');
const router = express.Router();


//http://localhost:3001/users
router.get('/', (req, resp, next)=>{
    resp.status(200).json({
      message:'Successful - GET',
      metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});


//GET
//http://localhost:3001/users/34
//the id can be anything 
router.get("/:id",(req, res, next)=>{
res.status(200).json({
    message: 'Successful - GET by id',
    metadata: {
        id: req.params.id,
        hostname: req.hostname,
        method: req.method,
    },
   })
  });


  //http://localhost:3001/users
router.post('/', (req, resp, next)=>{
    const name = req.body.name
    resp.status(201).json({
      message:'Successful -POST',
      metadata: {
          name: name,
          hostname: req.hostname,
          method: req.method,
        },
    });
});


//PUT
//http://localhost:3001/users/34
//the id can be anything 
router.put("/:id",(req, res, next)=>{
    res.status(200).json({
        message: 'Successful - PUT by id',
        metadata: {
            id: req.params.id,
            hostname: req.hostname,
            method: req.method,
        },
       })
      });


//DELETE
//http://localhost:3001/users/34
//the id can be anything 
router.delete("/:id",(req, res, next)=>{
    res.status(200).json({
        message: 'Successful - DELETE by id',
        metadata: {
            id: req.params.id,
            hostname: req.hostname,
            method: req.method,
        },
       })
      });

module.exports = router;
