
  var faq1 = document.getElementById("members-faq");
  var button1 = document.getElementById("members-button");
  var p1 = document.getElementById("members-p");

  button1.onclick = function(){

    if(faq1.className == "open"){

      //shink the box
      faq1.className = "answers";
      button1.className = "arrow-icon";
      p1.className= "the-question";

    } else {

       //Check if any are open and close
       var open = document.getElementsByClassName("open");
       var openButton = document.getElementsByClassName("open-button");
       var openP = document.getElementsByClassName("open-p");

       if( open.length > 0){
         open[0].className = "answers";
         openButton[0].className = "arrow-icon";
          openP[0].className = "the-question";

       }

      //expand the box
      faq1.className = "open";
      button1.className = "open-button";
      p1.className = "open-p";
    }
  }


  
  var faq2 = document.getElementById("upload-faq");
  var button2 = document.getElementById("upload-button");
  var p2 = document.getElementById("upload-p");

  button2.onclick = function(){

    if(faq2.className == "open"){
      //shink the box
      faq2.className = "answers";
      button2.className = "arrow-icon";
      p2.className = "the-question";

    } else {

       //Check if any are open and close
       var open = document.getElementsByClassName("open");
       var openButton = document.getElementsByClassName("open-button");
       var openP = document.getElementsByClassName("open-p");

       if( open.length > 0){
         open[0].className = "answers";
         openButton[0].className = "arrow-icon";
         openP[0].className = "the-question";
       }

      //expand the box
      faq2.className = "open";
      button2.className = "open-button";
      p2.className = "open-p";
    }
  }


  var faq3 = document.getElementById("password-faq");
  var button3 = document.getElementById("password-button");
  var p3 = document.getElementById("password-p");

  button3.onclick = function(){

    if(faq3.className == "open"){

      //shink the box
      faq3.className = "answers";
      button3.className = "arrow-icon";
      p3.className = "the-question";

    } else {

       //Check if any are open and close
       var open = document.getElementsByClassName("open");
       var openButton = document.getElementsByClassName("open-button");
       var openP = document.getElementsByClassName("open-p");

       if( open.length > 0){
         open[0].className = "answers";
         openButton[0].className = "arrow-icon";
         openP[0].className = "the-question";
       }

      //expand the box
      faq3.className = "open";
      button3.className = "open-button";
      p3.className = "open-p";
    }
  }



  var faq4 = document.getElementById("subscription-faq");
  var button4 = document.getElementById("subscription-button");
  var p4 = document.getElementById("subscription-p");

  button4.onclick = function(){

    if(faq4.className == "open"){

      //shink the box
      faq4.className = "answers";
      button4.className = "arrow-icon";
      p4.className = "the-question";

    } else {

      //Check if any are open and close
      var open = document.getElementsByClassName("open");
      var openButton = document.getElementsByClassName("open-button");
      var openP = document.getElementsByClassName("open-p");

      if( open.length > 0){
      open[0].className = "answers";
      openButton[0].className = "arrow-icon";
      openP[0].className = "the-question";
      }

      //expand the box
      faq4.className = "open";
      button4.className = "open-button";
      p4.className = "open-p";
    }
  }


  var faq5 = document.getElementById("support-faq");
  var button5 = document.getElementById("support-button");
  var p5 = document.getElementById("support-p");

  button5.onclick = function(){

    if(faq5.className == "open"){

      //shink the box
      faq5.className = "answers";
      button5.className = "arrow-icon";
      p5.className = "the-question";

    } else {

      //Check if any are open and close
      var open = document.getElementsByClassName("open");
      var openButton = document.getElementsByClassName("open-button");
      var openP = document.getElementsByClassName("open-p");

      if( open.length > 0){
        open[0].className = "answers";
        openButton[0].className = "arrow-icon";
        openP[0].className = "the-question";
      }

      //expand the box
      faq5.className = "open";
      button5.className = "open-button";
      p5.className = "open-p";
    }
  } 