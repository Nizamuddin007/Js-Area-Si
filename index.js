
function area(){
    var radius= document.getElementById("radius").value;
    document.getElementById("ans").innerHTML=`Area of circle is: ${Math.PI * Number(radius) * Number(radius)} `;
    document.getElementById("ans").style.color="red";
}

function circum(){
    var radius= document.getElementById("radius").value;
    document.getElementById("ans").innerHTML= `Circumference of circle is: ${2 * Math.PI * Number(radius)} `;
    document.getElementById("ans").style.color="red";
}   

function areaOfTriangle(){
var base = document.getElementById("base").value;
var height = document.getElementById("height").value;
document.getElementById("triangleAns").innerHTML=`Area of Triangle is: ${0.5 * Number(base) * Number(height)}`; 
document.getElementById("triangleAns").style.color="red";

}

function calculateSimpleInterest(){
    var principle =document.getElementById("principle").value; 
    var rate=document.getElementById("rate").value;
    var time=document.getElementById("years").value;
    document.getElementById("SiAns").innerHTML=`Simple Interes is: 
    ${(Number(principle)* Number(rate) * Number(time))/100} `;
    document.getElementById("SiAns").style.color="red";
}