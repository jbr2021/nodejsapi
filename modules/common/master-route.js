const express = require('express');
const IndexModule = require('../home/index');

const router = express.Router();

router.get('/', IndexModule.index);
router.get('/liveness', IndexModule.liveness);
router.get('/readiness', IndexModule.readiness);

module.exports = router;