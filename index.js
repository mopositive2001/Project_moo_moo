$(document).ready(function(){

    $("#messageApp").toggle("scale");
    $("#icon").click(function(){
        console.log("Icon Clicked")
        document.getElementById("messageApp").style.zIndex = 100;
        document.getElementById("messageApp").style.opacity=1;
        $("#messageApp").toggle("scale");
    })
    document.getElementById("outside").style.zIndex = 200;
   
    if($(window).height()>$(window).width()){
        $("#outside").css("height", 70 + "%");
        $("#outside").css("width", 70 + "%");
        $("#shadow").css("height", 70 + "%");
        $("#shadow").css("width", 70 + "%");
        $("#shadow").css("left", 10 + "%");
        $("#shadow").css("top", 12 + "%");
        console.log("CHecesdfsf");
    }
})

setInterval(()=>{
    var today= new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    console.log(today);
    document.getElementById("time").innerHTML =today;
},1000)