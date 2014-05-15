/*
 *  membrane.js
 *  ------------------------------------
 *  An open source project by Zack Guard
 *  zacharyguard.co.nf
*/

var $$ = function(sel) {
    return document.querySelector(sel);
}
 
var $$$ = function(sel) {
    return document.querySelectorAll(sel);
}

Array.prototype.contains = function(q) {
    if(this.indexOf(q) != -1){
        return true;
    } else {
        return false;
    }
}

var scriptInject = function(uri) {
    var _injectJS_script = document.createElement("script");
    _injectJS_script.src = uri;
    document.querySelectorAll("head")[0].appendChild(_injectJS_script);
}

Array.prototype.vSort = function(sortKey,sortFunction) {
    switch (sortFunction) {
        case "number-asc":
            return this.sort(function(a, b){
                return a[sortKey]-b[sortKey];
            });
            break;
        case "number-desc":
            return this.sort(function(a, b){
                return b[sortKey]-a[sortKey];
            });
            break;
        case "alpha-desc":
            return this.sort(function(a,b){
                if(a[sortKey].toLowerCase() < b[sortKey].toLowerCase()) return 1;
                if(a[sortKey].toLowerCase() > b[sortKey].toLowerCase()) return -1;
                return 0;
            });
            break;
        default:
            return this.sort(function(a,b){
                if(a[sortKey].toLowerCase() < b[sortKey].toLowerCase()) return -1;
                if(a[sortKey].toLowerCase() > b[sortKey].toLowerCase()) return 1;
                return 0;
            });
            break;
    }
}

var gotoElem = function(sel) {
    var targetElem = $$(sel); // must be an element object, not a selector string
    window.scrollTo(targetElem.offsetLeft+targetElem.offsetWidth/2-window.innerWidth/2,targetElem.offsetTop+targetElem.offsetHeight/2-window.innerHeight/2);
}

var addStyle = function(sel,style) {
    var newStylesheet = document.createElement("style");
    newStylesheet.innerHTML = sel+"{"+style+"}";
    $$$("head")[0].appendChild(newStylesheet);
}

String.prototype.parseURL = function(target) {
    var parser = document.createElement("a");
    parser.href = this;
    switch (target) {
        case "protocol":
            return parser.protocol; break;
        case "hostname":
            return parser.hostname; break;
        case "port":
            return parser.port; break;
        case "path":
            return parser.pathname; break;
        case "patharray":
            var _pathstring = parser.pathname.substring(1,this.length-1); // cut off leading and ending slashes (/)
            return _pathstring.split("/"); break;
        case "params":
            return parser.search; break;
        case "paramsarray":
            var _urlparams = parser.search.substring(1,parser.search.length).split("&"); // ["foo=bar","bax=qux","waffles=pie"]
            var _paramsobject = {};
            for (i=0;i<_urlparams.length;i++) {
                var _key = _urlparams[i].split("=")[0];
                var _val = _urlparams[i].split("=")[1];
                _paramsobject[_key] = _val;
            };
            return _paramsobject;
            break;
        case "hash":
            return parser.hash; break;
        case "host":
            return parse.host; break;
        default:
            return parser.href; break;
    }
}

var loop = function(func,count) {
    for (i=0;i<count;i++) {
        func();
    }
}

String.prototype.containsArrayElement = function(array) {
    var returnVal = false;
    for(i=0;i<array.length;i++){
        if (this.indexOf(array[i]) != -1){
            returnVal = true;
        }
    }
    return returnVal;
}