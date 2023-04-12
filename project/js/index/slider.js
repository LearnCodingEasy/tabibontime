const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});
var swiper = new Swiper(".physicalHealth", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 3,
  freeMode: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

// Book With Us
var bookWithUs = new Swiper(".bookWithUsSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 4,
  freeMode: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

// signUpSlider
var swiper = new Swiper(".signUpSlider", {
  /**
   * تحديد اتجاه العرض
   * Determine the display direction
   */
  // direction: "horizontal",
  // direction: 'vertical',
  /**
   * تحديد سرعة التحويل بين الشرائح
   * Determine the speed of conversion between slides
   */
  // speed: 500,
  /**
   * يتكرر العرض من البداية بعد الوصول للنهاية
   * The show repeats from the beginning after reaching the end
   */
  // loop: true,
  /**
   * المسافة بين الشرائح
   * The distance between the slats
   */
  spaceBetween: 20,
  centeredSlides: true,
  /**
   * autoplay:
   * Swiper يتيح لك تشغيل
   * تلقائيًا دون الحاجة إلى تدخل المستخدم
   * true يمكن تفعيل هذه الخاصية باستخدام القيمة
   *
   * autoplay:
   * Allows you to launch Swiper automatically without the need for user interaction.
   * This feature can be enabled with the value true.
   */
  autoplay: {
    // Time To Move
    delay: 5000,
    // Item View
    // slidesPerView: "auto",
    slidesPerView: 1,
    disableOnInteraction: false,
  },
  /**
   * يتم إضافة شريط التمرير إلى الشريحة
   * A slider is added to the slide
   */
  pagination: {
    // Circle Button
    el: ".swiper-pagination",
    //  يمكن الضغط على العداد للانتقال للشريحة
    clickable: true,
  },
  /**
   *  إضافة أزرار التنقل القياسية إلى الشريحة
   */
  navigation: {
    // زر الإتجاه التالي
    nextEl: ".swiper-button-next",
    // زر الإتجاه السابق
    prevEl: ".swiper-button-prev",
  },
  /**
   *
   *
   * تعيين تأثير انتقال الشرائح (fade, cube, coverflow, flip)
   */
  // effect: "fade",
  /**
   *
   * يحول مؤشر الماوس إلى شكل اليد عند التمرير على العرض
   */
  // grabCursor: true,
  /**
   *
   * يتيح للمستخدم التحكم في العرض باستخدام لوحة المفاتيح
   */
  keyboard: true,
  /**
   * إضافة مستمعي الأحداث
   */
  on: {
    autoplayTimeLeft(s, time, progress) {
      // progressCircle.style.setProperty("--progress", 1 - progress);
      // progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});
