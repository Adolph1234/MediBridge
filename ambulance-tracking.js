let map, ambulanceMarker, directionsService, directionsRenderer;

// Sample hospital location
const hospitalLocation = { lat: -6.7924, lng: 39.2083 }; // Replace with actual hospital coordinates

// Sample starting ambulance location
let ambulanceLocation = { lat: -6.8000, lng: 39.2200 };

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: ambulanceLocation,
        zoom: 14,
    });

    ambulanceMarker = new google.maps.Marker({
        position: ambulanceLocation,
        map: map,
        icon: {
            url: "https://img.icons8.com/color/48/000000/ambulance.png",
            scaledSize: new google.maps.Size(50, 50),
        },
        title: "Ambulance",
    });

    // Hospital Marker
    new google.maps.Marker({
        position: hospitalLocation,
        map: map,
        icon: {
            url: "https://img.icons8.com/fluency/48/000000/hospital.png",
            scaledSize: new google.maps.Size(50, 50),
        },
        title: "Hospital",
    });

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        suppressMarkers: true
    });

    updateRoute();
    // Simulate ambulance moving every 5 seconds
    setInterval(moveAmbulance, 5000);
}

function updateRoute() {
    directionsService.route(
        {
            origin: ambulanceLocation,
            destination: hospitalLocation,
            travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
            if (status === "OK") {
                directionsRenderer.setDirections(response);
                const duration = response.routes[0].legs[0].duration.text;
                document.getElementById("eta").innerText = `Estimated Time to Hospital: ${duration}`;
            } else {
                console.error("Directions request failed due to " + status);
            }
        }
    );
}

// Simulate ambulance movement (for demo purposes)
function moveAmbulance() {
    // Slightly change latitude and longitude to simulate movement
    ambulanceLocation.lat += (Math.random() - 0.5) / 500;
    ambulanceLocation.lng += (Math.random() - 0.5) / 500;

    ambulanceMarker.setPosition(ambulanceLocation);
    updateRoute();
}

// Initialize map
window.onload = initMap;
