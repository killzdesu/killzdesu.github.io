var list4 = document.querySelectorAll('input[value="4"]');

var list5 = document.querySelectorAll('input[value="5"]');

document.querySelectorAll('input[value="3"]').forEach(function(item, key){

var k = Math.random();
console.log(k)
if(k>0.5){
list5[key].setAttribute("checked", "checked");

list4[key].removeAttribute("checked");}
else {
list4[key].setAttribute("checked", "checked");

list5[key].removeAttribute("checked");}
});
