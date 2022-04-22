//document.querySelector(".selector") - повертає перший елемент який відповідає селектору переданому в аргумент
//document.querySelectorAll(".selector") - повертає масив елементів які відповідає селектору переданому в аргумент
//(будьякий елемент).innerHtml - міняє html елемента
//(будьякий елемент).append - додає до елемента
//document.createElement("div") - повертає новостворений елемент типу який переданий в якості парамету

  document.getElementById("mainTable__header2").innerHTML="Стугна ";


  document.getElementById("mainTable__header1").innerHTML="Стугна (ПТУР)";


 var elems = document.getElementsByTagName('img');
 for(var i=0; i<elems.length; i++) elems[i].style.width='900px';

