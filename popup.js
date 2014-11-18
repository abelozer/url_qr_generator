var globalURL = "";

var qrGenerator = {
	
	createQR: function(url) {

		var img = document.createElement('img');
		img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=' + url;

		document.body.appendChild(img);
	
    },

    requestQR: function() {
        var obj = this;
        this.getCurrentTab_(function() {obj.createQR(globalURL)});
    },

    getCurrentTab_: function(callbackFunction) {
        chrome.tabs.query({'active': true, 'lastFocusedWindow':true}, function(tabs) {
            globalURL = tabs[0].url;
            callbackFunction();

        })
    }
};


document.addEventListener('DOMContentLoaded', function () {
  qrGenerator.requestQR();
});