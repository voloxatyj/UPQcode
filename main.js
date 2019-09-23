const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const next1 = document.querySelector("#next1");
const prev1 = document.querySelector("#prev1");

const intervalTime = 5000;
let slideInterval;
let auto;
/*Main*/

let random = () => {
  if (Math.round(Math.random) == 1) {
    auto = true;
  }
};

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling && slides) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

next.addEventListener("click", e => {
  nextSlide();
  random();
  if (auto) {
    clearInterval();
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
next1.addEventListener("click", e => {
  nextSlide();
  random();
  if (auto) {
    clearInterval();
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.previousElementSibling && slides) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

prev.addEventListener("click", e => {
  prevSlide();
  random();
  if (auto) {
    clearInterval();
    slideInterval = setInterval(prevSlide, intervalTime);
  }
});
prev1.addEventListener("click", e => {
  prevSlide();
  random();
  if (auto) {
    clearInterval();
    slideInterval = setInterval(prevSlide, intervalTime);
  }
});

if (auto) {
  slideInterval = setInterval(() => {
    nextSlide();
  }, intervalTime);
}

/*Contacts*/
var myLatlng;
var mapOptions;
var infowindow;
var marker;
const barca = document.querySelector("#barcelona");
const helsinki = document.querySelector("#helsinki");
const kyiv = document.querySelector("#kyiv");
const brussels = document.querySelector("#brussels");
const warsaw = document.querySelector("#warsaw");

function initMap() {
  myLatlng = new google.maps.LatLng(49.83826, 24.02324);

  options = {
    zoom: 7,
    center: myLatlng,
    mapTypeId: "roadmap",
    zoomControl: true,
    draggable: true,
    styles: [
      {
        featureType: "all",
        stylers: [{ color: "#C0C0C0" }]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#CCFFFF" }]
      },
      {
        featureType: "landscape",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      }
    ]
  };

  var map = new google.maps.Map(document.getElementById("map"), options);

  let home = {
    coords: { lat: 49.83826, lng: 24.02324 },
    content: "<h1>Home,sweet,home</h1>"
  };
  addMarker(home);

  let warsawcoords = {
    coords: { lat: 52.22977, lng: 21.01178 },
    iconImage:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m3.png",
    content:
      "<h1 class='text-center'>Warsaw</h1></br><p>Warsaw's name in the Polish language is Warszawa (also formerly spelled Warszewa and Warszowa). Other previous spellings of the name may have included Worszewa and Werszewa.</p>"
  };
  let helsinkicoords = {
    coords: { lat: 60.16952, lng: 24.93545 },
    iconImage:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m2.png",
    content:
      "<h1 class='text-center'>Helsinki</h1></br><p>Helsinki has one of the highest urban standards of living in the world. In 2011, the British magazine Monocle ranked Helsinki the world's most liveable city in its liveable cities index.</p>"
  };
  let brusselscoords = {
    coords: { lat: 50.85045, lng: 4.34878 },
    iconImage:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m4.png",
    content:
      "<h1 class='text-center'>Brussels</h1></br><p>Brussels grew from a small rural settlement on the river Senne to become an important city-region in Europe. Since the end of the Second World War, it has been a major centre for international politics and the home of numerous international organisations, politicians, diplomats and civil servants.</p>"
  };
  let kyivcoords = {
    coords: { lat: 50.45466, lng: 30.5238 },
    iconImage:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m5.png",
    content:
      "<h1 class='text-center'>Kyiv</h1></br><p>The city's name is said to derive from the name of Kyi, one of its four legendary founders. During its history, Kiev, one of the oldest cities in Eastern Europe, passed through several stages of great prominence and relative obscurity. The city probably existed as a commercial centre as early as the 5th century. A Slavic settlement on the great trade route between Scandinavia and Constantinople, Kiev was a tributary of the Khazars.</p>"
  };
  let barcacoords = {
    coords: { lat: 41.38879, lng: 2.15899 },
    iconImage:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
    content:
      "<h1 class='text-center'>Barcelona</h1></br><p>Founded as a Roman city, in the Middle Ages Barcelona became the capital of the County of Barcelona. After merging with the Kingdom of Aragon, Barcelona continued to be an important city in the Crown of Aragon as an economic and administrative centre of this Crown and the capital of the Principality of Catalonia. Barcelona has a rich cultural heritage and is today an important cultural centre and a major tourist destination.</p>"
  };

  var lineSymbol = {
    path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
    scale: 8,
    strokeColor: "#393"
  };

  function animateCircle(line) {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = line.get("icons");
      icons[0].offset = count / 2 + "%";
      line.set("icons", icons);
    }, 20);
  }

  barca.addEventListener("click", e => {
    addMarker(barcacoords);
    let theWayWeChoose = [home.coords, barcacoords.coords];
    var theWay = new google.maps.Polyline({
      path: theWayWeChoose,
      geodesic: true,
      icons: [
        {
          icon: lineSymbol,
          offset: "100%"
        }
      ],
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 5
    });
    theWay.setMap(map);
    animateCircle(theWay);
  });
  kyiv.addEventListener("click", e => {
    addMarker(kyivcoords);
    let theWayWeChoose = [home.coords, kyivcoords.coords];
    var theWay = new google.maps.Polyline({
      path: theWayWeChoose,
      geodesic: true,
      icons: [
        {
          icon: lineSymbol,
          offset: "100%"
        }
      ],
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 5
    });
    theWay.setMap(map);
    animateCircle(theWay);
  });
  brussels.addEventListener("click", e => {
    addMarker(brusselscoords);
    let theWayWeChoose = [home.coords, brusselscoords.coords];
    var theWay = new google.maps.Polyline({
      path: theWayWeChoose,
      geodesic: true,
      icons: [
        {
          icon: lineSymbol,
          offset: "100%"
        }
      ],
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 5
    });
    theWay.setMap(map);
    animateCircle(theWay);
  });
  helsinki.addEventListener("click", e => {
    addMarker(helsinkicoords);
    let theWayWeChoose = [home.coords, helsinkicoords.coords];
    var theWay = new google.maps.Polyline({
      path: theWayWeChoose,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      icons: [
        {
          icon: lineSymbol,
          offset: "100%"
        }
      ],
      strokeWeight: 5
    });
    theWay.setMap(map);
    animateCircle(theWay);
  });
  warsaw.addEventListener("click", e => {
    addMarker(warsawcoords);
    let theWayWeChoose = [home.coords, warsawcoords.coords];
    var theWay = new google.maps.Polyline({
      path: theWayWeChoose,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      icons: [
        {
          icon: lineSymbol,
          offset: "100%"
        }
      ],
      strokeWeight: 5
    });
    theWay.setMap(map);
    animateCircle(theWay);
  });

  barca.addEventListener("click", e => {
    let cardCapital = document.querySelector(".cardBarcelona");
    cardCapital.classList.toggle("capital");
  });

  brussels.addEventListener("click", e => {
    let cardCapital = document.querySelector(".cardBrussels");
    cardCapital.classList.toggle("capital");
  });

  helsinki.addEventListener("click", e => {
    let cardCapital = document.querySelector(".cardHelsinki");
    cardCapital.classList.toggle("capital");
  });

  kyiv.addEventListener("click", e => {
    let cardCapital = document.querySelector(".cardKyiv");
    cardCapital.classList.toggle("capital");
  });

  warsaw.addEventListener("click", e => {
    let cardCapital = document.querySelector(".cardWarsaw");
    cardCapital.classList.toggle("capital");
  });

  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      draggable: true,
      zoom: 7,
      map: map,
      animation: google.maps.Animation.DROP
    });
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    if (marker.getPosition()) {
      map.setCenter(marker.getPosition());
    }
    if (props.content) {
      var infowindow = new google.maps.InfoWindow({
        content: props.content
      });
      marker.addListener("click", () => {
        infowindow.open(map, marker);
      });
    }
    if (marker.getAnimation() !== null) {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    } else {
      marker.setAnimation(null);
    }
  }
}

/*Services*/

var tl = new TimelineMax({ onUpdate: updatePercentage });
const controller = new ScrollMagic.Controller();

tl.to("#ball", 20, { x: 30, y: 20 });
tl.to("#ball", 20, { x: 150, y: 95 });
tl.to("#ball", 20, { x: 310, y: 130 });
tl.to("#ball", 20, { x: 425, y: 220 });
tl.to("#ball", 20, { x: 505, y: 280 });
tl.to("#ball", 20, { x: 540, y: 320 });
tl.to("#ball", 20, { x: 560, y: 340 });
tl.to("#ball", 20, { x: 575, y: 370 });
tl.to("#ball", 20, { x: 670, y: 500 });
tl.to("#ball", 20, { x: 600, y: 620 });
tl.to("#ball", 20, { x: 650, y: 750 });
tl.to("#ball", 20, { x: 580, y: 900 });
tl.to("#ball", 20, { x: 520, y: 980 });
tl.to("#ball", 20, { x: 460, y: 1075 });
tl.to("#ball", 20, { x: 280, y: 1145 });
tl.to("#ball", 20, { x: 150, y: 1200 });
tl.to("#ball", 20, { x: 50, y: 1235 });
tl.to("#ball", 20, { x: -50, y: 1240 });

const scene = new ScrollMagic.Scene({
  triggerElement: ".containerServices",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin("ball")
  .setTween(tl)
  .addTo(controller);

function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  /* console.log(tl.progress()); */
}
