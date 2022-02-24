var shoe1={
  color:"", 
  size:"",
  shoeName:""
};

function checkOut() {
  shoe1.color=document.getElementById("colorInput").value;
  shoe1.size=document.getElementById("sizeInput").value;
  shoe1.shoeName=document.getElementById("shoeNameInput").value;
  alert(shoe1.color + " " + shoe1.size + " " + shoe1.shoeName);
}