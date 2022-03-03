var shoe1={
  color:"", 
  size:"",
  shoeName:""
};

var gloves1={
  color:"",
  size:"",
  season:"",
  material:""
};

function checkOut() {
  shoe1.color=document.getElementById("colorInput").value;
  shoe1.size=document.getElementById("sizeInput").value;
  shoe1.shoeName=document.getElementById("shoeNameInput").value;
  alert(shoe1.color + " " + shoe1.size + " " + shoe1.shoeName);
}

function gloveRequest(){
  gloves1.color=document.getElementById("gloveColor").value;
  gloves1.size=document.getElementById("gloveSize").value;
  gloves1.season=document.getElementById("gloveSeason").value;
  gloves1.material=document.getElementById("gloveMaterial").value;
  
}