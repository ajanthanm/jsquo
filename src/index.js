/*
*   JSquo v0.0.1 (Ajanthan Mani)
*
*   Simple and lightweight Javascript SDK to inject dynamic html widgets to your site.
*
*   Licensed under the terms of the MIT license.
*   Free Software, Hell Yeah!
*/

var xmlHTTP = null;
var isCompleted = false;
var isProcessing = false;


try {
    xmlHTTP = new XMLHttpRequest();
} catch(e){
    try{
        xmlHTTP = new ActiveXObject("MSXML2.XMLHTTP.3.0");
    }
    catch(e){
        try{
            xmlHTTP = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch(e){
            xmlHTTP = null;
        }
    }
}

if(xmlHTTP == null){
    return null;
}