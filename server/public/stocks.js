module.exports = function(app){ 
    app.post('/stocks', function(req, res){
        res.send('Hello');
    });
};