// membuat variable
var awal = 2000;
var akhir = 300;

// Multiple Parameter
function printText(text, selamat){
  alert(selamat);


  var total_pengeluaran = awal - akhir;
  document.getElementById("wrap").innerHTML = "Total Pengeluaran " + total_pengeluaran + text;   
}
   
