var ZabbixSender = require('./zabbix.js');
var Sender = new ZabbixSender({host: 'ZabbixPla-ZabbixAu-1P80076K4P8M7-1965525499.us-east-2.elb.amazonaws.com'});
exports.handler = (event, context, callback) => {

    
    function getRandomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // Add item with pre-defined Host, add pre-defined Key, use random numbers for Value
    Sender.addItem('Zabbix server','MikeTemplateItemKey', getRandomNum(100,1000));
    Sender.addItem('Zabbix server','MikeJunk', getRandomNum(500,1000));
    
    // Send the items to zabbix trapper
    Sender.send(function(err, res) {
        if (err) {
            throw err;
        }
    
        // print the response object
        console.log(res);
        
        callback(null, res);
    });
    
};
