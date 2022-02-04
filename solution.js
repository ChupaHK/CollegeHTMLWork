//////////////Solution 1//////////////////////
function generateTip(form){
    console.log(form);

    let forms = document.getElementsByTagName("form");
    console.log(forms[0]);

    let billInput;
    var twentyPerBtn = document.querySelector('.twentyPercent');
	var bill = document.getElementById('billInput');
	var tipSuggestion = document.getElementById('tipAmount');
    
    function calcTwenty() 
    {
  	var billInput = bill.value;
  	var tipAmount = billInput * .2;
  	}
    
    billInput = document.getElementById("billInput");
    console.log(billInput.value);
    
    tipAmount = document.getElementById("billInput");
    console.log(tipAmount.value);

    let tip = document.getElementById("tip");
    tip.innerHTML = `Tip on $${billInput.value} is: ` + `$${tipAmount.value* .200}`;

    form.reset();
    form["billInput"].focus();
}
//////////////Solution 2//////////////////////
function changeStyle01(){
    var element = document.getElementById("question22");
    element.style.backgroundColor = "#E0ea7f";
}
function changeStyle02(){
    var element = document.getElementById("question22");
    element.style.backgroundColor = "#6abb7e";
}
//////////////Solution 3//////////////////////
var temp = prompt("Enter Fahrenheit temperature")
var fahrenheit = temp;
temp = parseInt(temp)
temp-=32
temp*=(5/9)
alert("Fahrenheit temperature is "+fahrenheit+"\n\nCelsium temperature is "+temp.toFixed(0))
//////////////Solution 4//////////////////////
let arraysEntered = [];

function addNumber(){
    let input = document.getElementById("arrayElement").value;
    console.log(input);

    arraysEntered.push(input);

    console.log("Size of entered array", arraysEntered.length);

    for(let i=0; i<arraysEntered.length; i++){
        console.log(arraysEntered[i]);

        result4a.innerHTML =`Display the array here: ${arraysEntered}`;
    }
    
}
function showFre(){
    let input = document.getElementById("arrayElement").value;
    console.log(input);

    var arr1=arraysEntered.push(input);
    var mf = 1;
	var m = 0;
    var item;
    for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
         result4b.innerHTML =`The element ${item} appeara ${arr1} times.`;
    }
}

//////////////Solution 5//////////////////////
let imgs = document.getElementsByTagName("img");
           

            function mouseovereffect(){
                imgs[0].src="pls.jpg";
            }
            function mouseouteffect(){
                imgs[0].src="yls.jpg"
            }
//////////////Solution 6//////////////////////
function myFunction()
{
var temp=document.getElementById("headlines").selectedIndex;
var arrayOfNews=["On Sunday, the Saskatchewan Health Authority informed Prairie Spirit School Division of a case of COVID-19 in an individual at Warman Community Middle School.",
                 "Hamilton Public Health reported 74 new COVID-19 cases on the weekend and five more deaths involving four long-term care (LTC) homes plus one in the community.",
                 "The spirit of giving is coming a little earlier this year as volunteers gather at Place Emilie-Gamelin in Montreal on Sundayto distribute food to the homless. ",
                 "RCMP in Lake Louise are warning of hefty fines if residents do not adhere mandatory COVID-19 rules.",
                 "Alberta Premier Jason Kenney calls an attempt by the Michigan government to shutdown the Enbridge Line 5 pipeline very concerning and a continued effort to landlock Canadian energy."];


         var e = document.getElementById("headlines");
         var text=e.options[e.selectedIndex].text;
         var h1=document.getElementById("heading");
         var details=document.getElementById("newsDetail");
         document.getElementById("news").value =arrayOfNews[e.selectedIndex];
         
}
//////////////Solution 7//////////////////////
var a, b, c;
var outputText;

function validate() {

    // get the input
    a = document.forms["input_form"]["aterm"].value;
    b = document.forms["input_form"]["bterm"].value;
    c = document.forms["input_form"]["cterm"].value;
    
    // validate a, b and c
    if (a == 0) {
        outputText = "<em>a</em> cannot equal zero!";
    } else if (isNaN(a)) {
        outputText = "<em>a</em> must be a number!";
    } else if (isNaN(b)) {
        outputText = "<em>b</em> must be a number!";
    } else if (isNaN(c)) {
        outputText = "<em>c</em> must be a number!";
    } else {
        // calculate the result using x = (-b +- sqrt(b^2 - 4ac)) / 2a
        var x1 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        var x2 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        outputText = "Solution : x= " + x2.toFixed(3) + " ,x= " + x1.toFixed(3) + "";
    }
    
    // output the result (or errors)
    document.getElementById(" soln").innerHTML = outputText;
}