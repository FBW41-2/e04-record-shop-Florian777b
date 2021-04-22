const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('data/db.json');
const db = low(adapter);
const mongodb = require('mongodb')


exports.getRecords = (req, res, next) => {
    //acces db from global object    // select all records
    req.app.locals.db.collection('records').find().toArray((err,docs) => {
        res.json(docs)
    })
}

exports.getRecord = (req, res, next) => {
    const { id } = req.params;
    const record = db.get('records').find({ id });
    res.status(200).send(record);
}

exports.deleteRecord = (req, res, next) => {
    const { id } = req.params;
    req.app.locals.db.collection(’records’).deleteOne({_id: id}, (result) => {
        console.log(result)
        res.json({deleted : true})
    })
}

exports.updateRecord = (req, res, next) => {
    const { id } = req.params;
    const dt = req.body;
    const record = db.get('records').find({ id }).assign(dt).write();
    res.status(200).send(record);
}

exports.addRecord = (req, res, next) => {
    const record = req.body;
    //acces db from global object
    req.app.locals.db.collection(’records’).insertOne(record, (err, entry) => {
        res.json(entry)
    })
}