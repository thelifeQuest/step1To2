function arriving(){
    var arriv= prompt("0!=?")
    if(arriv== 1){
        document.getElementById("arrivButton").style.fontSize= "40px";
        document.getElementById("arrivButton").innerHTML="Welcome, We've been waiting on you.";
        document.getElementById("btn1").style.display ="none";
        document.getElementById("btn2").style.display ="none";
        console.log("org.x@domain?")


    } 
    }


function help(){
alert("A positive mindset is all you need ;)")

}

function myFunction(x) {
    if (x.matches) { 
      document.querySelector(".container").style.display="none";
      document.querySelector(".images").style.display="none";
      document.getElementById("mobile1").style.display="inline";
    } 
  }
  
  var x = window.matchMedia("(max-width: 650px)")
  myFunction(x) 
  x.addListener(myFunction)