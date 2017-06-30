var ZabbixSender = require('./zabbix.js');
var Sender = new ZabbixSender({host: 'ZabbixPla-ZabbixAu-1P80076K4P8M7-1965525499.us-east-2.elb.amazonaws.com'});
exports.handler = (event, context, callback) => {

    
    // Add item with default host
    var random1 = Math.floor(Math.random() * 500) + 1;
    var random2 = Math.floor(Math.random() * 350) + 1;

    Sender.addItem('Zabbix server','MikeTemplateItemKey', random1);
    Sender.addItem('Zabbix server','MikeJunk', random2);
    
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
