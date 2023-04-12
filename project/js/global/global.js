window.onload = () => {
  /*
  =====================================================
  Todo =============== Remove Loading =================
  =====================================================
  */
  let removeLoading = () => {
    let loading = document.querySelector("body #preloader");
    if (loading) {
      setTimeout(() => {
        loading.remove();
      }, 1000);
    } else {
      console.error(`Loader Not Found!`);
    }
  };

  removeLoading();
  /*
  =====================================================
  Todo ======== Header Do Action Window Scroll ===========
  * When The Scroll Is Higher Than 350 Viewport Height
  * Add The header-action Class To The Header
  =====================================================
  */
  let scrollWindowHeaderAction = () => {
    const header = document.querySelector("body #header");
    if (header) {
      window.scrollY >= 350
        ? header.classList.add("header-scroll-action")
        : header.classList.remove("header-scroll-action");
    } else {
      console.error(`Header Not Found!`);
    }
  };
  window.addEventListener("scroll", scrollWindowHeaderAction());

  /*
  =====================================================
  Todo =============== Show Nav Menu ==================
  =====================================================
  */
  const showElement = (toggleId, navId, AttributeClassName) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    // Validate That Variables Exist
    if (toggle && nav) {
      // Toggle Class ShowEle Element On Click
      toggle.addEventListener("click", () => {
        nav.classList.toggle(AttributeClassName);
        toggle.firstElementChild.classList.toggle("fa-times");
      });
    }
  };

  showElement(`navbar-toggle`, "navbar-menu-div", "show-navbar-menu");

  /*
  =====================================================
  Todo ======= When Scroll Section Name Active Link ===
  =====================================================
  */
  /*
  const sections = document.querySelectorAll(`body section[id]`);
  function scrollLinkActive() {
    if (sections) {
      sections.forEach((current) => {
        // Get Scroll Viewport Height
        let scrollY = window.pageYOffset;
        console.log("scrollY: ", scrollY);
        // All Section Name
        let sectionId = current.getAttribute("Id");
        console.log("Section Id Name: ", sectionId);
        // Get All Sections Height
        let sectionHeight = current.offsetHeight;
        console.log("Section Height: ", sectionHeight);
        // Size Scroll To Section
        let sectionTop = current.offsetTop - 50;
        console.log("Size Scroll To Section: ", sectionTop);
        let eleSection = document.querySelector(
          `.nav-menu a[data-href=${sectionId}]`
        );
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          eleSection.classList.add(`nav-link-active`);
        } else {
          eleSection.classList.remove(`nav-link-active`);
        }
      });
    } else {
      console.error(`Sections Not Found!`);
    }
  }
  window.addEventListener(`scroll`, scrollLinkActive);
*/
  /*
  =====================================================
  Todo =============== DARK LIGHT THEME ===============
  =====================================================
  */
  // Select Element
  const darkTheme = "dark-theme";
  let selectedTheme = window.localStorage.getItem(`selected-theme`);
  let lisDataTheme = document.querySelectorAll(
    `body .profile-menu-li-theme-ul-li`
  );

  if (selectedTheme !== null) {
    // Add Class To Body To Change Theme
    // If the validation is fulfilled,
    // we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList.add(window.localStorage.getItem(`selected-theme`));
  }

  if (lisDataTheme) {
    lisDataTheme.forEach((li) => {
      li.addEventListener(`click`, (e) => {
        console.log(e.currentTarget.getAttribute(`data-theme-name`));
        // Remove Active Theme From All Li
        lisDataTheme.forEach((li) => {
          li.classList.remove(`profile-menu-li-theme-ul-li-active-theme`);
        });
        // Add Active Theme To Current Element
        e.currentTarget.classList.add(
          `profile-menu-li-theme-ul-li-active-theme`
        );
        // Add Current Class To Local Storage
        window.localStorage.setItem(
          `selected-theme`,
          e.currentTarget.getAttribute(`data-theme-name`)
        );
        // Add Class To Body To Change Theme
        if (e.currentTarget.getAttribute(`data-theme-name`) === `dark-theme`) {
          document.body.classList.add(`dark-theme`);
          document.body.classList.remove(`light-theme`);
        } else {
          document.body.classList.remove(`dark-theme`);
          document.body.classList.add(`light-theme`);
        }
      });
    });
  }

  /*
  =====================================================
  Todo =========== Back To Top & Fide In ==============
  * Onclick Back To Top
  * When The Scroll Is Higher Than 350 Viewport Height
  * Add The header-action Class To The Header
  =====================================================
  */
  let buttonBackToTop = document.querySelector(`body .back-to-top`);
  if (buttonBackToTop) {
    buttonBackToTop.onclick = function (e) {
      e.preventDefault();
      console.log(`User Click Button Back To Top`);
      window.screenTop = 0;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
    function showButtonBackToTop() {
      window.scrollY >= 350
        ? buttonBackToTop.classList.add("show-back-to-top")
        : buttonBackToTop.classList.remove("show-back-to-top");
    }
    window.addEventListener("scroll", showButtonBackToTop);
  } else {
    console.error(`Button Back To Top Not Found!`);
  }
  /*
  =====================================================
  Todo =================== SignUp =====================
  =====================================================
  */
  let linkPopupSignUp = document.querySelector(
    `body .profile-menu a[data-href='signUp']`
  );

  if (linkPopupSignUp) {
    linkPopupSignUp.addEventListener(`click`, (event) => {
      event.preventDefault();
      let sectionSignUp = document.querySelector(`section[class='signUp']`);
      sectionSignUp.classList.toggle(`show-signUp`);
      let sectionSignUpPopupOut = document.querySelector(
        `body .signUp .back-home a`
      );
      sectionSignUpPopupOut.addEventListener(`click`, (event) => {
        event.preventDefault();
        sectionSignUp.classList.toggle(`show-signUp`);
      });
    });
  }
  // Icon Toggle Show Password
  let myButtonIcon = document.querySelector(
    "#form-signUp .btn-toggle-icon-signUp"
  );
  let myInputIcon = document.querySelector("#form-signUp #inputPassword");
  myButtonIcon.onclick = function (e) {
    e.preventDefault();
    if (this.classList.contains("fa-eye")) {
      this.classList.remove("fa-eye");
      this.classList.add("fa-eye-slash");
      myInputIcon.setAttribute("type", "text");
    } else {
      this.classList.remove("fa-eye-slash");
      this.classList.add("fa-eye");
      myInputIcon.setAttribute("type", "password");
    }
  };
  /*
  =====================================================
  Todo =================== SignIn =====================
  =====================================================
  */
  let linkPopupSignIn = document.querySelector(
    `body .profile-menu a[data-href='signIn']`
  );

  if (linkPopupSignIn) {
    linkPopupSignIn.addEventListener(`click`, (event) => {
      event.preventDefault();
      let sectionSignIn = document.querySelector(`section[class='signIn']`);
      sectionSignIn.classList.toggle(`show-signIn`);
      let sectionSignInPopupOut = document.querySelector(
        `body .signIn .back-home a`
      );
      sectionSignInPopupOut.addEventListener(`click`, (event) => {
        event.preventDefault();
        sectionSignIn.classList.toggle(`show-signIn`);
      });
    });
  }

  /*
  =====================================================
  Todo =================== Profile =====================
  =====================================================
  */
  let linkPopupProfile = document.querySelector(
    `body .profile-menu a[data-href='profile']`
  );

  if (linkPopupProfile) {
    linkPopupProfile.addEventListener(`click`, (event) => {
      event.preventDefault();
      let sectionProfile = document.querySelector(`section[class='profile']`);
      sectionProfile.classList.toggle(`show-profile`);
      let sectionProfilePopupOut = document.querySelector(
        `body .profile .back-home a`
      );
      console.log("sectionProfilePopupOut: ", sectionProfilePopupOut);
      sectionProfilePopupOut.addEventListener(`click`, (event) => {
        event.preventDefault();
        sectionProfile.classList.toggle(`show-profile`);
      });
    });
  }

  /*
  =====================================================
  Todo =================== Create Post =====================
  =====================================================
  */
  let linkPopupCreatePost = document.querySelector(
    `body .profile-menu a[data-href='createPost']`
  );

  if (linkPopupCreatePost) {
    linkPopupCreatePost.addEventListener(`click`, (event) => {
      event.preventDefault();
      let sectionCreatePost = document.querySelector(
        `section[class='createPost']`
      );
      sectionCreatePost.classList.toggle(`show-createPost`);
      let sectionCreatePostPopupOut = document.querySelector(
        `body .createPost .back-home a`
      );
      sectionCreatePostPopupOut.addEventListener(`click`, (event) => {
        event.preventDefault();
        sectionCreatePost.classList.toggle(`show-createPost`);
      });
    });
  }

  /*
  =====================================================
  Todo =============== Copy Right =================
  =====================================================
  */
  // Copy Right Year
  let copyRightYear = document.querySelector(`body .copyrightYear`);
  if (copyRightYear) {
    let time = new Date();
    let Year = time.getFullYear();
    copyRightYear.innerHTML = Year;
  }
};

// window.onload = () => {

// **************************************
// Browser
// window.onload = () => {
// console.log(`Fire Javascript Browser Start`);
// const menuStatusButton = document.querySelector(".profile-menu-button");
// // console.log("menuStatusButton: ", menuStatusButton);

// const menuStatusIcon = document.querySelector(".profile-menu-status");
// // console.log("menuStatusIcon: ", menuStatusIcon);
// const menuStatusImage = document.querySelector(".profile-menu-image");
// // console.log("menuStatusImage: ", menuStatusImage);

// let menuStatusIconUser = document.createElement(`i`);
// let myAttr = document.createAttribute(`class`);
// myAttr.value = `fas fa-user`;
// menuStatusIconUser.setAttributeNode(myAttr);
// const checkStatus = async () => {
//   try {
//     // Send request to server & Return true if status is success (2xx)
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     // console.log("response: ", response);
//     return response.status >= 200 && response.status < 300;
//   } catch (error) {
//     // Return False On Error
//     return false;
//   }
// };
// // Check status every 3 seconds, update status message and class name

// // console.log("checkStatus();: ", checkStatus());
// setInterval(async () => {
//   const status = await checkStatus();
//   // console.log("status: ", status);
//   menuStatusIcon.className = ` ${
//     status ? " netWork-connected" : " netWork-disconnected"
//   }`;
// }, 5000);

// setTimeout(async () => {
//   menuStatusIcon.classList.contains(`  netWork-disconnected`)
//     ? menuStatusImage.remove()
//     : console.log(`firstElementChild`, menuStatusButton.firstElementChild);
//   menuStatusIcon.classList.contains(`  netWork-disconnected`)
//     ? menuStatusButton.appendChild(menuStatusIconUser)
//     : console.log(`firstElementChild`, menuStatusButton.firstElementChild);
// }, 6000);
// // 1000 milliseconds = 1 seconds
// };

