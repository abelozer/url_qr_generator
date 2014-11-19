function removeQRCode(){
    var qrNode = document.getElementById("qr_code");
    qrNode.parentNode.removeChild(qrNode);
    return qrNode.src;
}

function getChromeMock(urlData) {
    return {
        tabs: {
            query: function(args, callback) {
                callback([{url:urlData}]);
            }
        }
    };
}

describe("popup", function(){
        it("Should display QR code with correct URL", function() {
            qrGenerator.createQR("www.test.com");
            var actual = removeQRCode();
            expect(actual).toBe("https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=www.test.com");
        }),

        it("Should call callback after getting URL", function() {
            chrome = getChromeMock("www.something.com");

            qrGenerator.requestQR();
            var actual = removeQRCode();
            expect(actual).toBe("https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=www.something.com");
        }),

        it("Should shorten a long url", function() {
            chrome = getChromeMock("www.averyveryveryveryveryveryveryveryverylongurl.com");

            spyOn(XMLHttpRequest.prototype, 'send').andCallThrough();
            qrGenerator.requestQR();
            removeQRCode();
            expect(XMLHttpRequest.prototype.send).toHaveBeenCalled();
        }),

        it("Shouldn't shorten a short url", function() {
            chrome = getChromeMock("www.short.com");

            spyOn(XMLHttpRequest.prototype, 'send').andCallThrough();
            qrGenerator.requestQR();
            removeQRCode();
            expect(XMLHttpRequest.prototype.send).not.toHaveBeenCalled();
        });
    }

);