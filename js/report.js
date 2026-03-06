import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js"

import { getLocation } from "./geo.js"
import { getDeviceId } from "./device.js"

export async function publishAnnouncement(){

const file = document.getElementById("imageInput").files[0]

const description = document.getElementById("description").value

const location = await getLocation()

const deviceId = getDeviceId()

let imageUrl = ""

if(file){

const storageRef = ref(window.storage,"images/"+Date.now())

await uploadBytes(storageRef,file)

imageUrl = await getDownloadURL(storageRef)

}

await addDoc(collection(window.db,"announcements"),{

description: description,
image: imageUrl,

lat: location.lat,
lng: location.lng,

deviceId: deviceId,
createdAt: Date.now()

})

alert("Anuncio publicado")

window.location.href="index.html"

}