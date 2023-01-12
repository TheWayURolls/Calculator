document.getElementById("calculator").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : "+sum;
})
document.getElementById("calculator1").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)-parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : "+sum;
})
document.getElementById("calculator2").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)*parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : "+sum;
})
document.getElementById("calculator3").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)/parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : "+sum;
});

function myalert(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    alert(sum);
}
function calculator2(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)-parseInt(num2);
    alert(sum);
}
function calculator3(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)*parseInt(num2);
    alert(sum);
}
function calculator4(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)/parseInt(num2);
    alert(sum);
}
function myalert(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    alert(sum);
}

const img = document.createElement("img")
img.src = "img/6439010002.jpg";
img.style.width = "200px";
document.getElementById("mydiv").appendChild(img);

function bmi(){
    var w1 = document.getElementById("w").value;
    var h1 = document.getElementById("h").value;
    var sum = parseFloat(h1) / 100;
    sum = sum * sum;
    var sum2 = parseFloat (w1) / parseFloat(sum);
    document.getElementById("result").innerHTML = "ค่า BMI ของคุณคือ : "+sum2;
    alert("ค่า BMI ของคุณคือ : "+sum2.toFixed(2));
}