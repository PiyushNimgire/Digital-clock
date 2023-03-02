// setInterval(function(){
//   

setInterval(displayHello, 1000);

function displayHello() {
  let currDate = new Date;
  let hh = currDate.getHours();
  let mm = currDate.getMinutes();
  let ss = currDate.getSeconds();
  document.getElementById("demo1").innerHTML =  hh;
  document.getElementById("demo2").innerHTML =  mm;
  document.getElementById("demo3").innerHTML =  ss;
}
 