// membuat variable
var awal = 2000;
var akhir = 300;

// Menambahkan parameter pada fungsi 
function printText(text){
  alert("Input Selesai");


  var total_pengeluaran = awal - akhir;
  document.getElementById("wrap").innerHTML = "Total Pengeluaran " + total_pengeluaran + text;   
}
   
