// JavaScript
function markCompleted(item) {
  var item = document.getElementById(item);
  var nodeList = item.childNodes;
  for (let i = 0; i < nodeList.length; i++) {
    if (nodeList[i].style["text-decoration"] === "line-through") {
      nodeList[i].style["text-decoration"] = "none";
    } else {
      nodeList[i].style["text-decoration"] = "line-through";
    }
  }
}

function deleteItem(item) {
  document.getElementById(item).remove();
}

function createItem() {
  var itemText = document.getElementById("newItem").value;
  var orderedList = document.getElementById("orderedList");
  var childrenNumber = orderedList.childElementCount;
  var li = document.createElement("li");
  var id = `item_${childrenNumber + 1}`;
  li.setAttribute("id", id);
  li.className = "item";

  var span1 = document.createElement("span");
  span1.className = "itemName";
  span1.setAttribute("onclick", `markCompleted('${id}')`);
  span1.innerHTML = itemText;
  li.appendChild(span1);

  var span2 = document.createElement("span");
  span2.className = "itemDelete";
  span2.setAttribute("onclick", `deleteItem('${id}')`);
  span2.innerHTML = "X";
  li.appendChild(span2);

  orderedList.appendChild(li);
  document.getElementById("newItem").value = "";
}

var header = document.getElementById("btn-group");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}