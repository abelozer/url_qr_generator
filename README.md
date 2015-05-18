Chrome extension that generates a QR code for the current URL. You can scan this URL using another device (e.g. a smartphone with a camera and a suitable QR reader app) and visit the URL directly without having to type it.

Kudos to @NilsEckelt for suggesting this, and for @mduemcke and @abelozer for coding it.


#Prerequisite 
You must have Google chrome installed on your computer. This plugin has been tested with the following versions of Chrome on a Macbook running OSX 10.9.4:

1. Version 39.0.2171.95 (64-bit). 

This plugin _should_ work with other (slightly older/newer) versions; however, it's not been tested.

#Installation instructions


1. Get all the contents of this git repo (it's about 500 KB). Use one of the methods suggested by github:   
     a. ```git clone https://github.com/abelozer/url_qr_generator.git```
     b. Download and unzip the zip file.  
       
2.   Open Google chrome. Type ```chrome://extensions``` in your navigation bar to get to Chrome Extensions.  
    
3.   Make sure the **Developer Mode** box is **checked**. 

4. Click on the **Load unpacked extension** button. This brings up a typical "find-file"-style pop-up dialog.

5. Navigate to the ```src``` folder underneath the folder where you cloned/unzipped the contents of this repo. For example: if you cloned this repo to ```/Users/ich/url_qr_generator```, then navigate to ```/Users/ich/url_qrl_generator/src```.

6. Click the **Select** button on the dialog to accept the above folder and dismiss the dialog.

7. You _should_ now have a new extension named **QR Code** in your extensions list.

8. Make sure the QR Code extension is enabled: the checkbox next to **Enabled** should be **checked**.

9. You should see the extension as an icon to the right side of the navigation bar in Chrome.

10. To use the extension, simply click on the extensions icon button on any open page in Chrome. It should pop up a square QR code underneath the navigation bar, ready to be scanned.