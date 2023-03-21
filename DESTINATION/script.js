//////////////////////////////////////
//////////////the navbar//////////////
//////////////////////////////////////

const navItem1 = document.querySelectorAll(".nav-item")[0];
const navItem2 = document.querySelectorAll(".nav-item")[1];
const navItem3 = document.querySelectorAll(".nav-item")[2];

const dropDot1 = document.querySelectorAll(".dropping-dot")[0];
const dropDot2 = document.querySelectorAll(".dropping-dot")[1];
const dropDot3 = document.querySelectorAll(".dropping-dot")[2];

function hover1() {
  dropDot1.classList.remove("hidden");

  dropDot1.classList.add("translated");

  function delayed() {
    dropDot1.classList.add("mouseon");
    dropDot1.classList.remove("mouseout");
  }

  setTimeout(delayed, 500);
}

function hover2() {
  dropDot2.classList.remove("hidden");

  dropDot2.classList.add("translated");

  function delayed() {
    dropDot2.classList.add("mouseon");
    dropDot2.classList.remove("mouseout");
  }

  setTimeout(delayed, 500);
}

function hover3() {
  dropDot3.classList.remove("hidden");

  dropDot3.classList.add("translated");

  function delayed() {
    dropDot3.classList.add("mouseon");
    dropDot3.classList.remove("mouseout");
  }

  setTimeout(delayed, 500);
}

navItem1.onmouseover = function () {
  hover1();
};
navItem2.onmouseover = function () {
  hover2();
};
navItem3.onmouseover = function () {
  hover3();
};

function unhover1() {
  dropDot1.classList.remove("mouseon");
  dropDot1.classList.add("mouseout");

  function delayed() {
    dropDot1.classList.remove("translated");

    dropDot1.classList.add("hidden");
  }

  setTimeout(delayed, 500);
}

function unhover2() {
  dropDot2.classList.remove("mouseon");
  dropDot2.classList.add("mouseout");

  function delayed() {
    dropDot2.classList.remove("translated");

    dropDot2.classList.add("hidden");
  }

  setTimeout(delayed, 500);
}

function unhover3() {
  dropDot3.classList.remove("mouseon");
  dropDot3.classList.add("mouseout");

  function delayed() {
    dropDot3.classList.remove("translated");

    dropDot3.classList.add("hidden");
  }

  setTimeout(delayed, 500);
}

navItem1.onmouseout = function () {
  unhover1();
};
navItem2.onmouseout = function () {
  unhover2();
};
navItem3.onmouseout = function () {
  unhover3();
};











//////////////////////////////////////////////
//////////////the planets navbar//////////////
//////////////////////////////////////////////

//////////////////
// all variables//
/////////////////

// moon stuff

const moon = document.querySelectorAll(".planet-item")[0];

const moonName = document.querySelectorAll(".data-name")[0];

const moonDesc = document.querySelectorAll(".data-desc")[0];

const moonDis = document.querySelectorAll(".data-distance")[0];

const moonTime = document.querySelectorAll(".data-time")[0];

const moonImg = document.querySelectorAll(".data-img")[0];

// mars stuff

const mars = document.querySelectorAll(".planet-item")[1];

const marsName = document.querySelectorAll(".data-name")[1];

const marsDesc = document.querySelectorAll(".data-desc")[1];

const marsDis = document.querySelectorAll(".data-distance")[1];

const marsTime = document.querySelectorAll(".data-time")[1];

const marsImg = document.querySelectorAll(".data-img")[1];

// europa stuff

const europa = document.querySelectorAll(".planet-item")[2];

const europaName = document.querySelectorAll(".planet-item")[2];

const europaDesc = document.querySelectorAll(".data-desc")[2];

const europaDis = document.querySelectorAll(".data-distance")[2];

const europaTime = document.querySelectorAll(".data-time")[2];

const europaImg = document.querySelectorAll(".data-img")[2];

// titan stuff

const titan = document.querySelectorAll(".planet-item")[3];

const titanName = document.querySelectorAll(".data-name")[3];

const titanDesc = document.querySelectorAll(".data-desc")[3];

const titanDis = document.querySelectorAll(".data-distance")[3];

const titanTime = document.querySelectorAll(".data-time")[3];

const titanImg = document.querySelectorAll(".data-img")[3];


////////////////
// all values//
//////////////




// moon values

const moonNameHtml = moonName.innerHTML;

const moonDescHtml = moonDesc.innerHTML;

const moonDisHtml = moonDis.innerHTML;

const moonTimeHtml = moonTime.innerHTML;

const moonImgSrc = moonImg.src;



// mars values

const marsNameHtml = marsName.innerHTML;

const marsDescHtml = marsDesc.innerHTML;

const marsDisHtml = marsDis.innerHTML;

const marsTimeHtml = marsTime.innerHTML;

const marsImgSrc = marsImg.src;

// europa values


const europaNameHtml = europaName.innerHTML;

const europaDescHtml = europaDesc.innerHTML;

const europaDisHtml = europaDis.innerHTML;

const europaTimeHtml = europaTime.innerHTML;

const europaImgSrc = europaImg.src;


// titan values


const titanNameHtml = titanName.innerHTML;

const titanDescHtml = titanDesc.innerHTML;

const titanDisHtml = titanDis.innerHTML;

const titanTimeHtml = titanTime.innerHTML;

const titanImgSrc = titanImg.src;












// default stuff

const defaultImg = document.querySelector(".default-img");

const defaultName = document.querySelector(".default-name");

const defaultDesc = document.querySelector(".default-desc");

const defaultDis = document.querySelector(".default-dis");

const defaultTime = document.querySelector(".default-time");

const defaultImgSrc = defaultImg.src;




///////////////////
// all functions//
/////////////////

const curretSection = document.querySelector(".current-sections");

moon.addEventListener("click", function(){

  if (moon != curretSection){

    defaultImg.src = moonImgSrc;

    defaultName.innerHTML = moonNameHtml;

    defaultDesc.innerHTML = moonDescHtml;

    defaultDis.innerHTML = moonDisHtml;

    defaultTime.innerHTML = moonTimeHtml;

    moon.classList.add("current-planet");
    
    mars.classList.remove("current-planet");

    europa.classList.remove("current-planet");

    titan.classList.remove("current-planet");


  }else{}

});

  mars.addEventListener("click", function(){

    if(mars != curretSection){

      defaultImg.src = marsImgSrc;
  
     defaultName.innerHTML = marsNameHtml;
    
     defaultDesc.innerHTML = marsDescHtml;
    
     defaultDis.innerHTML = marsDisHtml;
    
     defaultTime.innerHTML = marsTimeHtml;
    
     mars.classList.add("current-planet");
    
     moon.classList.remove("current-planet");
    
     europa.classList.remove("current-planet");
    
     titan.classList.remove("current-planet");

    }else{}
   
  });



  europa.addEventListener("click", function(){

    if(europa != curretSection){

      defaultImg.src = europaImgSrc;
  
     defaultName.innerHTML = europaNameHtml;
    
     defaultDesc.innerHTML = europaDescHtml;
    
     defaultDis.innerHTML = europaDisHtml;
    
     defaultTime.innerHTML = europaTimeHtml;
    
     europa.classList.add("current-planet");
    
     moon.classList.remove("current-planet");
    
     mars.classList.remove("current-planet");
    
     titan.classList.remove("current-planet");

    }else{}
   
  });






  titan.addEventListener("click", function(){

    if(titan != curretSection){

      defaultImg.src = titanImgSrc;
  
     defaultName.innerHTML = titanNameHtml;
    
     defaultDesc.innerHTML = titanDescHtml;
    
     defaultDis.innerHTML = titanDisHtml;
    
     defaultTime.innerHTML = titanTimeHtml;
    
     titan.classList.add("current-planet");
    
     moon.classList.remove("current-planet");
    
     mars.classList.remove("current-planet");
    
     titan.classList.remove("current-planet");

    }else{}
   
  });







  





const userswidth = window.innerWidth;

const userswidthPx = userswidth + "px";

const root = document.querySelector(":root");

var rootStyle = getComputedStyle(root);

root.style.setProperty("--screen-width", userswidthPx);







const ham = document.querySelector(".ham");

const close = document.querySelector(".close");

const ul = document.querySelector("nav ul");

ham.addEventListener("click", function(){

  ul.classList.add("translated");

  ham.classList.add("hidden2");

  close.classList.remove("hidden2");

});



close.addEventListener("click", function(){

  ul.classList.remove("translated");

  ham.classList.remove("hidden2");

  close.classList.add("hidden2");

});