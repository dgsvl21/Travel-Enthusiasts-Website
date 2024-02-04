//arrow down animation btn
function scrollToMain() {
  const mainSection = document.getElementById("main");
  window.scrollTo({
    top: mainSection.offsetTop,
    behavior: "smooth"
  })
}

//search bar destinations
const destinations = {
  porto: '/Porto Page/portopage.html',
  london: '/London Page/londonpage.html',
  paris: ,
  dubai: ,
  milan ,
  milano ,
  new york ,
  newyork ,
};

//working search bar
function searchDestination(event) {
  event.preventDefault();
  
  var destination = document.getElementById("searchInput").value.toLowerCase().trim();
  console.log("Destination:", destination);

  if (destinations.hasOwnProperty(destination)) {
    var destinationUrl = destinations[destination];
    window.location.href = destinationUrl;
  } else {
  alert('Not found');
  }
}

//scroll to-top btn
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

//


