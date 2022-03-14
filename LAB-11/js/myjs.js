//alert("welcome!!!");
// Sum of two number number, string, maths, array
function Sum()
{
    let a, b, result;
    a=parseInt(prompt("Enter Num1: "));
    b=parseInt(prompt("Enter Num1: "));
    result=a+b;
    console.log(result);

    alert(`sum of ${a} and ${b} is ${result}`);

    document.getElementById("num1").innerHTML=a;
    document.getElementById("num2").innerHTML=b;
    document.getElementById("res").innerHTML=result;
    // document.write(result);
}
function isCheck(){
    var num = parseInt(prompt("Enter Num: "));
    //document.getElementById("oddeven").innerHTML=num;
    //alert(num);
    if((num%2) === 0)
    {
        document.getElementById("oddeven").style.color="green"
        document.getElementById("oddeven").innerHTML=`${num} is even`;
    }
    else
    {
        document.getElementById("oddeven").style.color="red"
        document.getElementById("oddeven").innerHTML=`${num} is odd`;
    }
}
function Printnum(){
    let num1 = parseInt(prompt("Enter Num: "));
    for(let i=1; i<=num1; i++)
    {
        document.write(i + "<br/>")
    }
}

function generateColor(){
    length =6;
    var chars = "abcdef0123456789";
    var color = "";
    for(var i=0; i<length; i++)
    {
        color += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return "#" + color;
}
function changecolor()
{
    document.body.style.backgroundColor = generateColor();
}

function Fibonacci()
{
    let num1 = parseInt(prompt("Enter Num: "));
    var a=0, b=1, flag=0;
   for(var i=0; i<=num1; i++)
   {
       var temp = a+b;
       document.write(temp + "<br/>");
       a=b;
       b=temp;
   }
   if (num1 == 0 || num1 == 1)
   {
        flag = 1;
   }

    for (let i = 2; i <= num1 / 2; i++)
    {
        if (num1 % i == 0) 
        {
            flag = 1;
            break;
        }
    }
    if (flag == 0)
    {
        $(num1).addclass("circle");
    }
   
}

var count =(function() {
    var counter = 0;
    return function () { return counter +=1;}
})();
function displaycount(){
    document.getElementById("Carry").innerHTML = count();
}
