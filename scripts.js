function scrollToMain() {
  const mainSection = document.getElementById("main");
  window.scrollTo({
    top: mainSection.offsetTop,
    behavior: "smooth"
  })
}

