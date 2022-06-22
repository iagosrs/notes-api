const { ObjectId } = require("mongodb");

module.exports = function (app, db) {
    app.post("/notes", (req, res) => {
        console.log(req.body);
        const note = { text: req.body.body, title: req.body.title };
        db.collection('notes').insertOne(note, (err, result) => {
            if (err) { 
                res.send({ 'error': 'An error has occurred' }); 
            } else {
                console.log(result)
                res.send(result); 
            }
        });
  });
  app.get('/notes/:id', (req, res) => { 
    const id = req.params.id;
    const details = { '_id': new ObjectId(id) }; 

    db.collection('notes').findOne(details, (err, item) => {
        if (err) { 
            res.send({'error':'An error has occurred'});
        } else {
            res.send(item); 
        } 
    });
  });
  
  app.delete('/notes/:id', (req, res) => { 
    const id = req.params.id;
    const details = { '_id': new ObjectId(id) }; 

    db.collection('notes').remove(details, (err, item) => {
        if (err) { 
            res.send({'error':'An error has occurred'});
        } else {
            res.send('Note ' + id + ' deleted!'); 
        } 
    });
  });

  app.put("/notes/:id", (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectId(id) }; 
    const note = { text: req.body.body, title: req.body.title }; 
    
    db.collection('notes').replaceOne(details, note, (err, result) => {
        if (err) { 
            res.send({ 'error': 'An error has occurred' }); 
        } else {
            res.send(note); 
        }
    });
});
};


