import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js"

let db
let storage

export function initFirebase(){

const firebaseConfig = {

apiKey: "YOUR_KEY",
authDomain: "YOUR_DOMAIN",
projectId: "YOUR_PROJECT",
storageBucket: "YOUR_BUCKET",
messagingSenderId: "XXX",
appId: "XXX"

}

const app = initializeApp(firebaseConfig)

db = getFirestore(app)
storage = getStorage(app)

window.db = db
window.storage = storage

}