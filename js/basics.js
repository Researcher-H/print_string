// js-01 //


var word = document.querySelector("#js1");

console.log(word.innerHTML);

word.innerHTML = "Hello world, from js file";


// js-02 //


// https://www.w3schools.com/jsref/met_win_open.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Window/open
// https://blog.codecamp.jp/programming-javascript-pop-up

var myWindow; //create a variable

function openWin() {
    // window.open(URL, name, specs, replace)
    myWindow = window.open("", "myWindow", "width=200,height=100"); //if want to skip the 3 parameters put, ""
    myWindow.document.write("<p>ポップアップ表示だよ</p>");
}


// js-03 //


// simple tab
// https://blog.codecamp.jp/programming-tab-how-1

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


// js-04 //


// add one value to a clicked button
// https://stackoverflow.com/questions/4825295/javascript-onclick-to-get-the-id-of-the-clicked-button

var true_num = document.querySelector("#true_area #count").innerHTML;
var false_num = document.querySelector("#false_area #count").innerHTML;

function count_bttn(clicked_id){
  if (clicked_id == "true_btn"){
    true_num++;
  } else {
    false_num++;
  }

  document.querySelector("#true_area #count").innerHTML = true_num;
  document.querySelector("#false_area #count").innerHTML = false_num;
}


// js-05 //


function myFunction() {
  var x = document.querySelector("#images");

  if (x.style.display === "none") {
    x.style.display = "block";
    setTimeout(function(){ x.style.display = "none"; }, 3000);
    
  } else {
    x.style.display = "none";
  }
}


// js-06 //


var random_num1 = Math.random(); // this actually create 0.0 ~ 1.0 (inclusive of 0, but not 1)
document.querySelector("#sing_rnd_num").innerHTML = random_num1;

var random_num2 = Math.floor(Math.random()*10); // this create 0 ~ 9
document.querySelector("#int_rnd_num").innerHTML = random_num2;

// create mutliple random numbers with an array with 8 elements
var arr = [];
while(arr.length < 8){
    var r = Math.floor(Math.random() * 10);
    if(arr.indexOf(r) === -1) arr.push(r);
}

document.querySelector("#mult_rnd_num").innerHTML = arr;
document.write(arr);

// make an array with dict
// Array toString() Method
// https://www.w3schools.com/jsref/jsref_tostring_array.asp

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.toString();


// js-07 //

// var file = new File(datafile);
// var result = file.open ('r');

// document.getElementById("js7").addEventListener('change', function() {
//   var fr=new FileReader();

//   fr.onload=function(){
//     document.getElementById('output').textContent=fr.result;
//   }

//   fr.readAsText(this.files[0]);
// })

