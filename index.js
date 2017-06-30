var ZabbixSender = require('./zabbix');
var Sender = new ZabbixSender({host: 'ZabbixPla-ZabbixAu-1P80076K4P8M7-1965525499.us-east-2.elb.amazonaws.com'});
exports.handler = (event, context, callback) => {
    // Add items to request
    //Sender.addItem('webserver', 'httpd.running', 0);
    //Sender.addItem('dbserver', 'mysql.ping', 1);
    
    // Add item with default host
    Sender.addItem('lambda','MikeTemplateItemKey', 350);
    
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
