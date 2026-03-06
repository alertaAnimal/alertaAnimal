import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"

let map

export async function initMap(){

map = L.map('map').setView([-34.6037, -58.3816], 13)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

maxZoom:19,
attribution:'© OpenStreetMap'

}).addTo(map)

loadAnnouncements()

}

async function loadAnnouncements(){

const snapshot = await getDocs(collection(window.db,"announcements"))

snapshot.forEach(doc=>{

const data = doc.data()

L.marker([data.lat,data.lng])
.addTo(map)
.bindPopup(data.description || "Avistamiento")

})

}