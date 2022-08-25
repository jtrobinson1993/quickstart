const TABS = document.querySelectorAll(".tabs__nav-item a");
const CONTENTS = document.querySelectorAll('.tabs__content-area');

TABS.forEach((TAB) => {
  TAB.addEventListener("click", (e) => {
    TABS.forEach((t) => {
      t.parentNode.classList.remove("active");
    });
    CONTENTS.forEach((c) => {
      c.classList.remove('active');
    })
    e.target.parentNode.classList.add('active');
    document.querySelector(e.target.getAttribute('href')).classList.add('active');
  });
});
