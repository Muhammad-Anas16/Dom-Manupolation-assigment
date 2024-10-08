var studentName = prompt("Enter Your Name")
var userName = document.getElementById("name");
userName.innerText = studentName;
var marks1 = +prompt("Enter English Marks")
var marks2 = +prompt("Enter Urdu Marks")
var marks3 = +prompt("Enter Math Marks")



var totalMarks = 100;

var getMainElm = document.getElementById("main");

// console.log(getMainElm)

var table = document.createElement("table");
table.setAttribute("border", "1");

var row = document.createElement("tr");

var colA = document.createElement("th");
var colB = document.createElement("th")
var colC = document.createElement("th")
var colD = document.createElement("th")

table.appendChild(row);
row.appendChild(colA);
row.appendChild(colB);
row.appendChild(colC);
row.appendChild(colD);

var row1 = document.createElement("tr");

var col1 = document.createElement("td");
var col2 = document.createElement("td")
var col3 = document.createElement("td")
var col4 = document.createElement("td")

table.appendChild(row1);
row1.appendChild(col1);
row1.appendChild(col2);
row1.appendChild(col3);
row1.appendChild(col4);

var row2 = document.createElement("tr");

var col5 = document.createElement("td");
var col6 = document.createElement("td")
var col7 = document.createElement("td")
var col8 = document.createElement("td")

table.appendChild(row2);
row2.appendChild(col5);
row2.appendChild(col6);
row2.appendChild(col7);
row2.appendChild(col8);

var row3 = document.createElement("tr");

var col9 = document.createElement("td");
var col10 = document.createElement("td")
var col11 = document.createElement("td")
var col12 = document.createElement("td")

table.appendChild(row3);
row3.appendChild(col9);
row3.appendChild(col10);
row3.appendChild(col11);
row3.appendChild(col12);

colA.innerText = "S . no";
colB.innerText = "Subject";
colC.innerText = "Obtain Marks";
colD.innerText = "Total Marks";


col1.innerText = "1";
col2.innerText = "Enlish";
col3.innerText = marks1;
col4.innerText = totalMarks;


col5.innerText = "2";
col6.innerText = "Urdu";
col7.innerText = marks2;
col8.innerText = totalMarks;


col9.innerText = "3";
col10.innerText = "Math";
col11.innerText =
   marks3;
col12.innerText = totalMarks;

getMainElm.appendChild(table)

console.log(getMainElm)
console.log(table)

var totalNumber = marks1 + marks2 + marks3;

var finalResult = document.getElementById("total-num");

finalResult.innerText = totalNumber


var getPercantage = (( totalNumber/ 300 ) * 100 + " %");

var getPercantageSpan = document.getElementById("per%");

getPercantageSpan.innerText = getPercantage;
