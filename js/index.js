
const searchIcon = document.querySelector('.toggle-search')

searchIcon.addEventListener('click', function (e) {
    e.preventDefault(); 
    const searchBar = document.querySelector('.searchbar.left');
    searchBar.classList.toggle('active'); // Toggle the active class
   
    searchIcon.classList.toggle('clicked');

  });


 


  function myFunction(event) {
    // Prevent interaction with other dropdowns
    event.stopPropagation();
  
    // Get the parent `.nav-item` of the clicked dropdown
    const navItem = event.currentTarget.closest('.nav-item');
    
    // Find the corresponding `.drop-menu` inside this `.nav-item`
    const dropMenu = navItem.querySelector('.drop-menu');
  
    // Toggle the visibility of this `.drop-menu`
    dropMenu.classList.toggle("showdrop");
  
    // Close any other open dropdowns
    document.querySelectorAll('.drop-menu').forEach(menu => {
      if (menu !== dropMenu) {
        menu.classList.remove('showdrop');
      }
    });
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    // console.log(e,"WindowClick");
    // console.log(e.target,"WindowClick");
    if (!e.target.matches('.dropbtn')) {
      document.querySelectorAll('.drop-menu').forEach(menu => {
        menu.classList.remove('showdrop');
      });
    }
  }
  
  


  // Toggle button icon swap 
const button = document.getElementById('toggleButton');
const buttonIcon = document.getElementById('buttonIcon');
const sidebarDrawer = document.getElementById('sidebarDrawer');

if (sidebarDrawer) {
    sidebarDrawer.addEventListener('shown.bs.offcanvas', () => {
        buttonIcon.classList.remove('fa-bars');
        buttonIcon.classList.add('fa-times');
    });

    sidebarDrawer.addEventListener('hidden.bs.offcanvas', () => {
        buttonIcon.classList.remove('fa-times');
        buttonIcon.classList.add('fa-bars');
    });
}


const before = document.querySelector(".label.before");
const after = document.querySelector(".label.after");
const beforeSm = document.querySelector(".demo-overlay-sm .label.before");

const afterSm = document.querySelector(".demo-overlay-sm .label.after");
console.log(afterSm,"beforeSm")
const compareBtn = document.querySelector(".compare");
const compareBtnSm = document.querySelector(".compare-sm");


compareBtn?.addEventListener("click", function (e) {
  e.preventDefault();
  const overlay = document.querySelector(".img-divider");

  if (overlay.classList.contains("left")) {
    overlay.classList.remove("left");
    overlay.classList.add("right");
    before.style.display = "block";
    after.style.display = "none"; // Ensure 'after' is shown
  } else {
    overlay.classList.remove("right");
    overlay.classList.add("left");
    after.style.display = "block";
    before.style.display = "none"; // Ensure 'before' is shown
  }
});

compareBtnSm?.addEventListener("click", function (e) {
  e.preventDefault();
  const overlay = document.querySelector(".img-divider-sm");

  if (overlay.classList.contains("left")) {
    overlay.classList.remove("left");
    overlay.classList.add("right");
    beforeSm.style.display = "block";
    afterSm.style.display = "none"; // Ensure 'after' is shown
  } else {
    overlay.classList.remove("right");
    overlay.classList.add("left");
    afterSm.style.display = "block";
    beforeSm.style.display = "none"; // Ensure 'before' is shown
  }
});




/**
   * Preloader
   */
const preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    setTimeout(()=>{
      preloader.remove();
    },300)
    
  });
}


 /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
 function toggleScrolled() {
  const selectBody = document.querySelector('body');
  const selectHeader = document.querySelector('#header');
  const selectNav =document.querySelector('.navbar');
 
  if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top'))
    {
    return;
    }else
    {
      window.scrollY > 100 
      ? (selectBody.classList.add('scrolled'), selectNav.classList.add('scrolled')) 
      : (selectBody.classList.remove('scrolled'), selectNav.classList.remove('scrolled'));
            
    }
}
        


document.addEventListener('scroll', toggleScrolled);
window.addEventListener('load', toggleScrolled);



// --------------------
//     Project filter
// ----------------
  
filterSelection("all")
function filterSelection(c){
    let x, i;
    // console.log(c);
    x=document.getElementsByClassName("project-card");
    // console.log(x);
  if(c=="all")c="";
  
  for(i=0;i<x.length;i++){
    // console.log(x[i].className.indexOf(c));
    removeClass(x[i],"show");
    if(x[i].className.indexOf(c)>-1) addClass(x[i],"show");
  }
}


// Show filtered elements  
function addClass(element, className){
   let i, arr1, arr2;

  //  console.log(element,className,"addClass");
   arr1=element.className.split(" "); //["project-card","architecture"]
   arr2=className.split(" "); //"show"
    console.log(arr2.length,"lenght");
   for(i =0; i<arr2.length;i++){
      
      //  console.log(arr1.indexOf(arr2[i]));
       if(arr1.indexOf(arr2[i])== -1){//check whether the class "show" present in arr1
         element.className +=" "+arr2[i]; //add show in elements class name
       }
   }
}

// Hide elements that are not selected
function removeClass(element,className){
   let i , arr1, arr2;

   arr1 =element.className.split(" ");
   arr2 = className.split(" ");

   for(i=0; i<arr2.length;i++){
    while(arr1.indexOf(arr2[i])>-1){
      arr1.splice(arr1.indexOf(arr2[i]),1);

    }
   }

   element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
const tabContainer = document.querySelector(".sortable-wrapper");
const tabs = tabContainer?.getElementsByClassName("tab-item");


if (tabs)
for(let tab of tabs){
  console.log(tab,"tabbbbbbb");
  tab.addEventListener("click",function(){
    let currentActive = document.getElementsByClassName("active");
    console.log( currentActive[0].className,"currentActive")
    console.log(currentActive[0].className.replace("active",""),"replaaccee")
    currentActive[0].className = currentActive[0].className.replace(" active","");
    console.log(this.className,"thisss")
    this.className+=" active"
  })
}

const  serviceTabContainer = document.querySelector(".srvice-list");
const serviceTabs = serviceTabContainer?.getElementsByClassName("tab-link");
const serviceEntryTittleFromTabs = document.querySelector(".service.entry-tittle");

if(serviceTabs)
  for(let serviceTab of serviceTabs){
  
console.log(serviceTab,"----------------serviceTabs")

serviceTab.addEventListener("click",function(){
  let currentActive = document.getElementsByClassName("active");
  console.log(currentActive[0].getAttribute("id"),"currentActive------------")
  currentActive[0].className = currentActive[0].className.replace(" active","");
 
  serviceEntryTittleFromTabs.innerHTML=this.innerHTML.trim();
   this.className+=" active"
})
}





const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');

document.body.addEventListener('mousemove', function(e) {
  console.log("-------------------cursor-------------")
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  gsap.to($bigBall, { duration: 0.4, x: mouseX - 15, y: mouseY - 15 });
  gsap.to($smallBall, { duration: 0.1, x: mouseX - 5, y: mouseY - 7 });
});






// service nav dropdown

const serviceMenu = document.querySelector(".service-menu");
console.log(serviceMenu,"serviceMenu-----");
const serviceMenuItems = serviceMenu?.getElementsByTagName("a")
console.log(serviceMenuItems,"services link-----")



if(serviceMenuItems)
for(let menuItem of serviceMenuItems){
  
  
  menuItem.addEventListener("click",function(e){
      e.preventDefault();
      const serviceName = menuItem.textContent.trim();
     localStorage.setItem("selectedService",serviceName);
     console.log("------before window href------");
     window.location.href="/service.html";

     console.log("------after window href------");
  })

  

};


// on service page after redirecting from the dropdown link on home page 

const selectedService = localStorage.getItem("selectedService");
// if(!selectedService) return;
const serviceEntryTittle = document.querySelector(".service.entry-tittle");



console.log(serviceTabs,"new serviceTabs")
if(serviceTabs)
for(let tab of serviceTabs ){

  
  tab.classList.remove("active");
  console.log(tab.textContent,"classListttttttt");
// Add active class to the matching tab
  if(tab.textContent.trim()===selectedService){
    tab.classList.add("active");
    
    serviceEntryTittle.innerHTML=selectedService
    //show the corresponding tab content
    const targetId = tab.getAttribute("data-bs-target");
    console.log(targetId,"targetId");
    const targetContent = document.querySelector(targetId);
    console.log(targetContent,"targetContent")

    if(targetContent){
      document.querySelectorAll(".tab-pane").forEach((pane)=>pane.classList.remove("show", "active"));
      targetContent.classList.add("show", "active");
    }
  }

}
   


// Projects navigation
const projectCard = document.querySelectorAll(".project-card");
// const projectTitle = projectCard.getElementsByClassName("project-title")
console.log(projectCard,"projectCard");
projectCard.forEach(project=>{
   
   
   const readButton= project?.getElementsByClassName("project-readmore-btn");
   
   if(readButton)
   for(let btn of readButton){
      btn.addEventListener("click",function(e){
        e.preventDefault();
          //  window.location.href="/project-details.html";
           const projectTitle = btn.getAttribute("project-name").trim();
           localStorage.setItem("projectName",projectTitle);
           window.location.href="/project-details.html";
      })
  
   }
   
})

  
// project details entry tittle
const projectDetailTitle = document.querySelector(".project-detail.entry-tittle");
console.log(projectDetailTitle,"projectDetailTitle")

const selectedProject = localStorage.getItem("projectName");
console.log(selectedProject,"selectedProject");
    
if(projectDetailTitle)
projectDetailTitle.innerHTML=selectedProject;

 

// Typeahead

 
var searchSuggestions = ['Modular Kitchen', 'Hall Theatre', '3D Layout', 'Interior Design'];

$('.search').typeahead({
  source: function (query, process) {
     
      var matches = searchSuggestions.filter(function (item) {
          return item.toLowerCase().includes(query.toLowerCase());
      });

     
      if (matches.length === 0) {
          matches.push('No matches found'); // Fallback text
      }

      
      process(matches);
  },
  matcher: function (item) {
      
      return true;
  },
  highlighter: function (item) {
      
      if (item === 'No matches found') {
          return '<strong class="text-danger">' + item + '</strong>';
      }
      return item;
  },
  afterSelect: function (item) {
      if (item === 'No matches found') {
          this.$element.val(''); 
      }
  }
});