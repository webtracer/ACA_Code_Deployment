const express = require('express');
const router = express.Router();

const STGCodeDrop = require('../../models/CodeDrops');

// @route GET api/QAT_Deployment
// @description GET all QAT_Deployment
// @access public
router.get('/', (req, res) => {
    STGCodeDrop.find()
        .then(STG_Deployment => res.json(QAT_Deployment))
        .catch(err => res.status(404).json({nocodedropfound: "No Code Drops Found"}));
});

// @route GET api/QAT_Deployment/:id
// @description Get single code drop by ID
// @access Public
router.get('/:id', (req, res) => {
    console.log('The get by id was hit');
    STGCodeDrop.findById(req.params.id)
        .then(STG_Deployment => res.json(QAT_Deployment))
        .catch(err => res.status(404).json({nocodedropfound: `No Code Drop found for ID: ${req.params.id}`}));
});

// @route GET api/QAT_Deployment
// @description add/save QAT_Deployment
// @access Public
router.post('/', (req, res) => {
    STGCodeDrop.create(req.body)
        .then( STG_Deployment => res.json({ msg: "Code drop added successfully" }))
        .catch(err => res.status(400).json({ error: err }));
});

// @route GET api/QAT_Deployment/:id
// @description Update QAT_Deployment
// @access Public
router.put('/:id', (req, res) => {
    STGCodeDrop.findByIdAndUpdate(req.params.id, req.body)
        .then(STG_Deployment => res.json({ msg: "Updated successfully"}))
        .catch(err => res.status(400).json({ error: "unable to update database"}));
});

// @route GET api/QAT_Deployment/:id
// @description Delete code drop by id
// @access Public
router.delete('/:id', (req, res) => {
    STGCodeDrop.findByIdAndDelete(req.params.id, req.body)
        .then(STG_Deployment => res.json({ msg: "Code Drop deleted successfully"}))
        .catch(err => res.status(400).json({ error: "No such code drop"}));
});

module.exports = router;