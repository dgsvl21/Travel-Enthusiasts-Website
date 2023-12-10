function scrollToMain() {
  const mainSection = document.getElementById("main");
  window.scrollTo({
    top: mainSection.offsetTop,
    behavior: "smooth"
  })
}

const destinations = {
  //adicionar destinos
  //exemplo -> porto: 'porto.html'
};

function searchDestination() {
  var destination = document.getElementById("searchInput").value.toLowerCase();
  console.log("Destination:", destination);

  if (destinations.hasOwnProperty(destination)) {
    var destinationUrl = destinations[destination];
    window.location.href = destinationUrl;
  } else {
  alert('Not found');
  }
}