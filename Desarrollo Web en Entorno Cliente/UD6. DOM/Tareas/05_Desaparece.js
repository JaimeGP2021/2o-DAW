var boton1 = document.getElementById('b1');
var boton2 = document.getElementById('b2');
var boton3 = document.getElementById('b3');
var v1 = true;
var v2 = true;
var v3 = true;

boton1.addEventListener('click', function (){
  if (v1){
  document.getElementById('p1').className = 'invisible';
  v1=false
  } else{
  document.getElementById('p1').className = 'visible';
  v1=true
  }
})

boton2.addEventListener('click', function (){
  if (v2){
  document.getElementById('p2').className = 'invisible';
  v2=false
  } else{
  document.getElementById('p2').className = 'visible';
  v2=true
  }
})

boton3.addEventListener('click', function (){
  if (v3){
  document.getElementById('p3').className = 'invisible';
  v3=false
  } else{
  document.getElementById('p3').className = 'visible';
  v3=true
  }
})
