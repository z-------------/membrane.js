# membrane.js

#### A super light collection of JavaScript addon functions.

## Features

+ `$$(selector)` - shorthand for document.querySelector
```javascript
$$("section:nth-of-type(2)")
$$("#element")
```

+ `$$$(selector)` - shorthand for document.querySelectorAll
```javascript
$$$("div.subhead")
$$$("h2")
```

+ `Array.prototype.contains(value)` - check if an array contains a specific value
```javascript
var myArray = ["waffles",3.14,true,"I love pie"]
myArray.contains(3.14) --> true
myArray.contains("blueberry") --> false
```

+ `scriptInject(url)` - inject a JavaScript library (like jQuery or Membrane) to the page
```javascript
scriptInject("//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js")
```

+ `Array.prototype.vSort(key,sortType)` - sort an array of objects by a specific value
```javascript
var arrayOfObjects = [{"somekey":2.72,"otherkey":"waffles"},{"somekey":3.14,"otherkey":"blueberry"}]
arrayOfObjects.vSort("somekey","number-desc") --> [{"somekey":3.14,"otherkey":"blueberry"},{"somekey":2.72,"otherkey":"waffles"}]
arrayOfObjects.vSort("otherkey") --> [{"somekey":3.14,"otherkey":"blueberry"},{"somekey":2.72,"otherkey":"waffles"}]
// all sortTypes are "number-asc", "number-desc", "alpha-desc" and "alpha-asc". defaults to "alpha-asc"
```

+ `gotoElem(selector)` - scrolls to a point on the page such that the specified element is in the center
```javascript
gotoElem("#myDiv")
```

+ Much more awesome stuff to come...

## [Download](https://github.com/z-------------/membrane.js/archive/master.zip)