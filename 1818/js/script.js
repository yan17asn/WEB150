//var itemTwo = document.getElementById('two');
//var elText = itemTwo.firstChild.nodeValue;
//elText = elText.replace('pine nuts', 'kale');
//itemTwo.firstChild.nodeValue = elText;
//itemTwo.lastChild.nodeValue = itemTwo.lastChild.nodeValue.replace('pine nuts', 'last');

//var itemOne = document.getElementById('one');

//document.getElementById("output").innerHTML = itemOne;


//itemOne.firstChild.firstChild.nodeValue = itemOne.firstChild.firstChild.nodeValue.replace('fresh', 'organic');

//itemOne.lastChild.nodeValue = itemOne.lastChild.nodeValue.replace('figs', 'last');
//itemOne.firstChild.nodeValue = itemOne.firstChild.nodeValue.replace('<em>fresh</em>', 'organic');


var startItem = document.getElementById('two')
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;
prevItem.className = 'complete';
nextItem.className = 'cool';