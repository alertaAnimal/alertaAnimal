import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"

let map

export async function initMap(){

map = new google.maps.Map(document.getElementById("map"),{

center:{lat:-34.6037,lng:-58.3816},
zoom:13

})

loadAnnouncements()

}

async function loadAnnouncements(){

const snapshot = await getDocs(collection(window.db,"announcements"))

snapshot.forEach(doc=>{

const data = doc.data()

const marker = new google.maps.Marker({

position:{
lat:data.lat,
lng:data.lng
},

map:map

})

})

}