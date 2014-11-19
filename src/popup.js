var qrGenerator = {

    createQR: function(url) {
        var img = document.createElement('img');
        img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=' + url;
        img.id = "qr_code";

        document.body.appendChild(img);
    },

    requestQR: function() {
        var obj = this;
        this.getCurrentTab_(function(url) {obj.evaluateURL_(url)});
    },

    evaluateURL_: function(url) {
        if(url.length < 50){
            this.createQR(encodeURIComponent(url));
        } else {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("POST", "https://www.googleapis.com/urlshortener/v1/url", false);
            xmlhttp.setRequestHeader("Content-type","application/json");
            xmlhttp.send('{"longUrl": "' + url + '"}');
            var response = JSON.parse(xmlhttp.responseText);
            this.createQR(response.id);
        }
    },

    getCurrentTab_: function(callbackFunction) {
        chrome.tabs.query({'active': true, 'lastFocusedWindow':true}, function(tabs) {
            callbackFunction(tabs[0].url);
        })
    }

};

document.addEventListener('DOMContentLoaded', function () {
    qrGenerator.requestQR();
});