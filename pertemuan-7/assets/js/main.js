// membuat variable
var awal = 2000;
var akhir = 300;

// Fungsi return
function printText(){

  var a = 20;
  var b = 30;
  return a + b;
}

var output = printText();
var total_pengeluaran = awal - akhir;
document.getElementById("wrap").innerHTML = output;   
