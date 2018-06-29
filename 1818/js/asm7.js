//initial i = 0, for mark() function.
var i = 0;

//create add() function to add list.
function add(){
var newEl = document.createElement('li');
var textContent = prompt("Please enter: ");//ask user to input content.

//create list item structure.
newEl.innerHTML = textContent+"<button onclick='delCurrent(this.parentNode)'>delete</button><button onclick='editCurrent(this.parentNode)'>edit</button><button onclick='mark(this.parentNode)'>mark</button><button onclick='up(this.parentNode)'>up</button><button onclick='down(this.parentNode)'>down</button>";
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newEl);//add to list
}

//create up() method to move up.
function up(self){
    if(self.previousSibling){
    var parent = self.parentNode; //select the parent <ul>.
    parent.insertBefore(self,self.previousSibling);//move before the previous sibling.
}

}

//create down() method to move down.
function down(self){
    if(self.nextSibling){
    var parent = self.parentNode;//select the parent <ul>.
    parent.insertBefore(self.nextSibling,self);//move after the next sibling.
}
}


//create method to delete current item.
function delCurrent(self){
    var ul = document.getElementsByTagName('ul')[0];//select the <ul> node.
    ul.removeChild(self);//remove the list item.
}

//create method to edit current item.
function editCurrent(self){
    self.firstChild.textContent = prompt("Please enter content: ");//ask user to input new content.
}

//create method to mark current item by three different colors.
function mark(self){
    var color = ['red','green','yellow'];//create a color array.
    self.className = color[i%color.length];//change color by each function run
    i+=1;
}

//create method to clear the list.
function da(){
    if(confirm("are you want to clear all?")){
        var ul = document.getElementsByTagName('ul')[0];//select the <ul> node.
    var childs = ul.childNodes;//create the list array
    for(var i = childs.length - 1; i >= 0; i--) { //remove loop start from the lastchild
    ul.removeChild(childs[i]); 
    }
   
  }
  else{
   return;
  }
}

//create method to edit the list title.
function editTitle(){
    var listTitle = document.getElementById('title')//select the title.
    listTitle.firstChild.textContent = prompt("Please enter content: ");//ask user to input new title.
}



    





