import { collection, addDoc } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

async function createReport(reportData) {

  try {

    const docRef = await addDoc(
      collection(window.db, "reports"),
      reportData
    );

    console.log("Report created:", docRef.id);

  } catch (error) {

    console.error("Error creating report:", error);

  }

}

createReport({
  type: "lost",
  animal: "dog",
  description: "brown dog with collar",
  lat: -34.6037,
  lng: -58.3816,
  timestamp: Date.now(),
  contact: ""
});