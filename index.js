$(document).ready(function(){

    $("#messageApp").toggle("scale");
    $("#icon").click(function(){
        console.log("Icon Clicked")
        document.getElementById("messageApp").style.zIndex = 100;
        // document.getElementById("messageApp").style.opacity=1;
        document.getElementById("messageApp").style.animation = "openIcon .6s forwards";
        document.getElementById("messageApp").style.animationTimingFunction = "ease-out";
        $("#messageApp").toggle("scale");
        setTimeout(() => {
            $("#frame").contents().find("#textContainer").append('<div class="textBubble receive"><p>Hello, my name is Vanessa</p></div>');
        }, 700)
    })
    // document.getElementById("outside").style.zIndex = 200;
   
    // if($(window).height()>$(window).width()){
    //     $("#outside").css("height", 70 + "%");
    //     $("#outside").css("width", 70 + "%");
    //     $("#shadow").css("height", 70 + "%");
    //     $("#shadow").css("width", 70 + "%");
    //     $("#shadow").css("left", 10 + "%");
    //     $("#shadow").css("top", 12 + "%");
    // }

    var today_first= new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if(document.getElementById("time")!=null){
        document.getElementById("time").innerHTML =today_first;
    }

    // $("#messageBarSpace").click(function(){
    //     $("#frame").contents().find("#textContainer").append('<div class="textBubble send"><p>What do you like?</p></div>');
    //     $("#frame").contents().scrollTop($("#frame").contents().height());

    //     setTimeout(() => {
    //         $("#frame").contents().find("#textContainer").append('<div class="textBubble receive"><p>I like food.</p></div>');
    //         $("#frame").contents().scrollTop($("#frame").contents().height());
    // }, 1000)
    //     // .scrollTo(0, document.body.scrollHeight);
    // })

    // Click on message bar to expand options
    $("#messageBarSpace").click(function(){
        document.getElementById("messageBarSpace").style.display="none";
        document.getElementById("messageOption").style.display="flex";
        document.getElementById("messageOption").style.animation = "chooseIn 0.3s";
        
        document.getElementById("message1").style.animation = "expand .4s forwards";
        setTimeout(() => {
            document.getElementById("message2").style.animation = "expand .4s forwards";
            setTimeout(() => {
                document.getElementById("message3").style.animation = "expand .4s forwards";
            },400)
        },400);
    })

    
    //When user chooses message in the messageOption
    //Message1
    $("#message1").click(function(){
        // document.getElementById("messageBarSpace").style.display="flex";
        // document.getElementById("messageOption").style.display="none";
        closeDialog();

        setTimeout(() => {
            $("#frame").contents().find("#textContainer").append('<div class="textBubble send"><p>Hi, tell me about yourself!</p></div>');
            $("#frame").contents().scrollTop($("#frame").contents().height());
        },700)
        
        setTimeout(() => {
            $("#frame").contents().find("#textContainer").append('<div class="textBubble receive"><p>I am a junior Computer Engineering student at the prestigous institution widely refered to and known as Texas A&M. I code sometimes.</p></div>');
            $("#frame").contents().scrollTop($("#frame").contents().height());
        },1400)
    })

    //Message2
    $("#message2").click(function(){
        // document.getElementById("messageBarSpace").style.display="flex";
        // document.getElementById("messageOption").style.display="none";
        closeDialog()

        setTimeout(() => {
            $("#frame").contents().find("#textContainer").append('<div class="textBubble send"><p>Where can I go to find more information about you?</p></div>');
            $("#frame").contents().scrollTop($("#frame").contents().height());
        },700)
        
        setTimeout(() => {
            $("#frame").contents().find("#textContainer").append('<div class="textBubble receive"><p>You can find me on other platforms as well as my resume when you click on the i icon above, next to my name.</p></div>');
            $("#frame").contents().scrollTop($("#frame").contents().height());
        },1400)  

        //bouncing moreInfo icon
        setTimeout(() => {
            var info = document.getElementById("moreInfo").style;
            info.top="73%"
            info.borderWidth= "2px";
            info.borderColor="red";
            info.color="red";
            info.animation = "bouncesMoreInfo 1s infinite ease-in-out";
        },2400)  //add 1 second for the user to read the message first

        //reset moreInfo icon to normal
        setTimeout(() => {
            var info = document.getElementById("moreInfo").style;
            info.animation="none";
            info.top="75%"
            info.borderWidth= "1.33px";
            info.borderColor="black";
            info.color="black";
        },9400)  //add 7 seconds to wait after the bouncing is done
    })
    
    //Message3
    $("#message3").click(function(){
        // document.getElementById("messageBarSpace").style.display="flex";
        // document.getElementById("messageOption").style.display="none";
        closeDialog();

        setTimeout(() => {
            $("#frame").contents().find("#textContainer").append('<div class="textBubble send"><p>What do you like?</p></div>');
            $("#frame").contents().scrollTop($("#frame").contents().height());
        },700)
        
        setTimeout(() => {
            $("#frame").contents().find("#textContainer").append('<div class="textBubble receive"><p>I like food. I also like traveling because I can try different food in diffent cultures. In my free time, I watch people eat for fun because I like food. </p></div>');
            $("#frame").contents().scrollTop($("#frame").contents().height());
        },1400)  
    })

    //When moreInfo icon is clicked, ContactCard slides in
    let counter = 0
    $("#moreInfo").click(function(){
        if(counter % 2 == 0){
            document.getElementById("contactCard").style.top="50%";
            document.getElementById("contactCard").style.animation="slideIn 1s";
        }
        else{
            document.getElementById("contactCard").style.top="200%";
            document.getElementById("contactCard").style.animation="slideOut 2s";
        }
        ++counter
        
    })
    //When click on the closeButton on contactCard, contactCard slides out
    $("#closeButton").click(function(){
        document.getElementById("contactCard").style.top="200%";
        document.getElementById("contactCard").style.animation="slideOut 2s";
        /*setTimeout(() => {
            document.getElementById("contactCard").style.display="none";
        },2000)*/
    })

})

//Collapsing Dialog after selecting a question
function closeDialog(){
    document.getElementById("message3").style.animation = "collapse .2s forwards";
    setTimeout(() => {
        document.getElementById("message2").style.animation = "collapse .2s forwards";
        setTimeout(() => {
            document.getElementById("message1").style.animation = "collapse .2s forwards";
        },200)
    },200);

    setTimeout(() => {
        document.getElementById("messageOption").style.animation = "chooseOut 0.3s";
        setTimeout(() => {
            document.getElementById("messageOption").style.display="none";
            document.getElementById("messageBarSpace").style.display="block";
        }, 300)
    }, 300);
}



setInterval(()=>{
    var today= new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    console.log(today);
    if(document.getElementById("time")!=null){
        document.getElementById("time").innerHTML =today;
    }
},1000)