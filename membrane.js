var $$ = function(sel) {
    return document.querySelector(sel);
}
 
var $$$ = function(sel) {
    return document.querySelectorAll(sel);
}

Array.prototype.contains = function(q){if(this.indexOf(q) != -1){return true}else{return false}}

var scriptInject = function(uri){
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