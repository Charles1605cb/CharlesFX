

var header = document.querySelector(".header_Animate");
var Grand_Container = document.querySelector(".containerMain");

const showLoader = () => {
    header.style.display = "block";
    setTimeout(function () {
        if (Grand_Container.style.display = "none") {
              Grand_Container.style.display = "block";
                        header.style.display = "none";
        }
    }, 750)
};

showLoader();

var courses_mentor = document.getElementById("mentor_courses");
const load_mentorship_Plans = () => {;
  courses_mentor.style.color = "var(--clr-fx-red);";
  window.location.href = "Mentorship_Courses.html"
  console.log(courses_mentor);
}


const nav_show = document.getElementById("show_nav");
const nav_hide = document.getElementById("hide_navs");
var menu_Contents = document.querySelector(".Contents_controls");
var Log_Ins = document.querySelector(".logIns");
var home_Contents = document.querySelector(".Inner_contents");

// Cahnge background Visibility and Modal Toggling
var modal = document.querySelector(".modal");
var footer = document.getElementById("Footer");
var nav_main = document.querySelector(".nav")
const default_icon = document.getElementById("white_default");
const button_changer = document.getElementById("dark-changer");
const modal_remove = document.getElementById("remove_modal");

// For Modal
const showModal = () => {
  modal.style.display = "block";
  setTimeout(() => {
    modal.style.display = "none";
  }, 7000);
    modal.scrollIntoView({ behavior: "smooth" });
 // Modal disappears after 3 seconds
};
modal_remove.addEventListener("click", (e) => {
  modal.style.display = "none"
})
const background_Changer = (e) => {
  showModal();
  home_Contents.classList.add("changer");
  footer.classList.add("footer_changer");
  default_icon.style.display = "none";
  button_changer.style.display = "block"
  console.log(footer);
};

default_icon.addEventListener("click", () => {
  background_Changer();
});

const background_remover = (event) =>{
  home_Contents.classList.remove("changer");
  footer.classList.remove("footer_changer");
  default_icon.style.display = "block";
  button_changer.style.display = "none";
};

button_changer.addEventListener("click", (e) => {
  background_remover();
})


const show_nav_Elements = () => {
    if (menu_Contents.style.display = "none") {
        menu_Contents.style.display = "block";
        home_Contents.classList.add("RunAdd");
    }
    nav_hide.style.display = "block";
    nav_show.style.display = "none"
}

const hide_nav_Elements = () => {
    if (menu_Contents.style.display = "block") {
        menu_Contents.style.display = "none";
            home_Contents.classList.remove("RunAdd");
    }
     nav_hide.style.display = "none";
     nav_show.style.display = "block";
}


nav_show.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(nav_Contents)
    show_nav_Elements();
})

nav_hide.addEventListener("click", (e) => {
    e.preventDefault();
    hide_nav_Elements();
})

const checkNav_Elements = () => {
    if (menu_Contents) {
          menu_Contents.style.display = "none";
          home_Contents.classList.remove("RunAdd");
    }
}

// Scrolling Animation
 // Function to check if an element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Function to add the 'visible' class to containers in the viewport
    function addVisibleClass() {
      var containers = document.querySelectorAll(".animates");
      containers.forEach(container => {
        if (isInViewport(container)) {
          container.classList.add('visible');
        }
      });
    }

    // Add event listeners for scroll and load
    window.addEventListener('scroll', addVisibleClass);
    window.addEventListener('load', addVisibleClass);



// HomeTab
    const homeImg = document.querySelector(".homeImg");
    const forexLordImg = document.getElementById("forex_lord_img");

    homeImg.addEventListener("mouseenter", () => {
      homeImg.classList.add("hover");
      forexLordImg.classList.add("hovered");
    });

    homeImg.addEventListener("mouseleave", () => {
      homeImg.classList.remove("hover");
      forexLordImg.classList.remove("hovered");
    });

    // Login/SignUp Activations

    const btn_Sign_Up = document.getElementById("signup_btn");
    const login_btn = document.getElementById("login_btn");


    const load_SignUp_Page = () => {
    }
    btn_Sign_Up.addEventListener("click", () => {
      window.location.href = "signup.html";
    });


    login_btn.addEventListener("click", () => {
      window.location.href = "login.html"
    });

    // Prevent Image dragging

    document.querySelectorAll("img").forEach((img) => {
      img.addEventListener("mousedown", function (event) {
        event.preventDefault();
      });
      img.addEventListener("contextmenu", function (event) {
        event.preventDefault();
      });
    });


    let Enrol = document.getElementById("Enrol");
    let Enroll = document.getElementById("Enroll");
    let Enrolll = document.getElementById("Enrolll");
    let Enrollll = document.getElementById("Enrollll");

    Enrol.addEventListener("click", () => {
      alert("You just enroled a monthly plan")
    });

    Enroll.addEventListener("click", () => {
      alert("You just enroled a 3-month plan")
    });

    Enrolll.addEventListener("click", () => {
      alert("You just enroled a 6-month plan")
    });

    Enrollll.addEventListener("click", () => {
      alert("You just enroled a yearly plan")
    });

    const btn_Sign_Upp = document.getElementById("signupp_btn");
    const load_SignUpp_Page = () => {
      window.location.href = "Signup.html";
};
    btn_Sign_Upp.addEventListener("click", (e) => {
    e.preventDefault();
    load_SignUpp_Page();

    });

let subscribe = document.getElementById("sub");
let unsubcribe = document.getElementById("unsub");
    
 subscribe.addEventListener("click", () => {
  subscribe.style.display = "none";
  alert("You Have successfully Subscribed");
  unsubcribe.style.display = "block";
 });

 unsubcribe.addEventListener("click", () => {
  unsubcribe.style.display = "none";
  alert("You Have successfully Unsubscribed");
  subscribe.style.display = "block";
 });

 let load_mentorship_Planss = () => {
  alert("No free class at the Moment \n enroll now \n or try again later")
};