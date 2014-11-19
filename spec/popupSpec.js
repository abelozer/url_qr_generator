describe("popup", function(){
        it("Should call URL for QR code with correct argument", function() {
            qrGenerator.createQR("www.test.com");
            var qrNode = document.getElementById("qr_code");
            var actual = qrNode.src;
            qrNode.parentNode.removeChild(qrNode);
            expect(actual).toBe("https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=www.test.com");
        });

        it("Should call URL for QR code with correct argument", function() {
            chrome = {
                tabs: {
                    query: function(args, callback) {
                        callback([{url:"www.something.com"}]);
                    }
                }
            };

            qrGenerator.requestQR();
            var qrNode = document.getElementById("qr_code");
            var actual = qrNode.src;
            qrNode.parentNode.removeChild(qrNode);
            expect(actual).toBe("https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=www.something.com");
        });
    }

);