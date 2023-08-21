const express = require('express');
const router = express.Router();
const {Insert,View,Delete,Singleview,Update} = require('../controller/employee')
router.post('/insert',Insert)
router.get('/view',View)
router.delete('/delete/:id',Delete);
router.get('/singleview/:id',Singleview)
router.put('/update/:id',Update)

module.exports= router;