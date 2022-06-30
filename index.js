$(document).ready(function(){
    $("#messageApp").toggle("scale");
    $("#icon").click(function(){
        console.log("Icon Clicked")
        document.getElementById("messageApp").style.zIndex = 100;
        $("#messageApp").toggle("scale");
    })
})