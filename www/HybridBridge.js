var exec = require('cordova/exec'),
    cordova = require('cordova');

function HybridBridge() {

}
HybridBridge.prototype.addItem = function(item, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "HybridBridge", "addItem", [item]);
};

module.exports = new HybridBridge();


