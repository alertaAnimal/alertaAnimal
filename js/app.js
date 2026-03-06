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


import { getDocs } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

async function loadReports() {

  const querySnapshot = await getDocs(
    collection(window.db, "reports")
  );

  querySnapshot.forEach((doc) => {

    const data = doc.data();

    console.log(data);

  });

}

