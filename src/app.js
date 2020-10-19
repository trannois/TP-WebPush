const express = require('express')
const app = express()

const util = require('./util')
const dbSub = require('./subscriptions.js');
dbSub.initDb();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Push App!')
});

app.post('/api/save-subscription/', function (req, res) {
    if (!util.isValidSaveRequest(req, res)) {
        return;
    }
    return dbSub.saveSubscription(req.body)
        .then(function(subscriptionId) {
            console.log(subscriptionId)
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ data: { success: true } }));
        })
        .catch(function(err) {
            res.status(500);
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({
                error: {
                    id: 'unable-to-save-subscription',
                    message: 'The subscription was received but we were unable to save it to our database.'
                }
            }));
        });
});


app.use(express.static('../public'));

app.listen(80, function () {
    console.log('Push server start!')
});