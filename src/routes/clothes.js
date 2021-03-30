'use strict';
const express = require('express');
const validator = require('../middlewares/validator.js');
const Clothes = require('../models/clothes.js');
const clothes = new Clothes();
const router = express.Router();

router.post('/', addRecord);
router.get('/', getAll);
router.get('/:id', validator, getOneRecord);
router.put('/:id', validator, updateRecord);
router.delete('/:id', validator, deleteRecord);

function addRecord(req, res) {
    const Object = req.body;
    const resObj = clothes.create(Object);
    res.status(201).json(resObj);
  }
function getAll(req, res) {
  const Objs = clothes.read();
  res.json(Objs);
}

function getOneRecord(req, res) {
  const resObj = clothes.read(req.params.id);
  res.json(resObj);
}



function updateRecord(req, res) {
  const Object = req.body;
  const resObj = clothes.update(req.params.id, Object);
  res.json(resObj);
}

function deleteRecord(req, res) {
  const resObj = clothes.delete(req.params.id);
  res.json(resObj);
}

module.exports = router;