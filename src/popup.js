var qrGenerator = {
	qrCodeInserted : false,

	createQR: function(url) {

		var img = document.createElement('img');
		img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=' + url;
        img.id = "qr_code";

		document.body.appendChild(img);
        this.qrCodeInserted = true;
    },

    requestQR: function() {
        var obj = this;
        this.getCurrentTab_(function(url) {obj.createQR(url)});
    },

    getCurrentTab_: function(callbackFunction) {
        this.qrCodeInserted = false;
        chrome.tabs.query({'active': true, 'lastFocusedWindow':true}, function(tabs) {
            callbackFunction(tabs[0].url);

        })
    }
};


document.addEventListener('DOMContentLoaded', function () {
  qrGenerator.requestQR();
});