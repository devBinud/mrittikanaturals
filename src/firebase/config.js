// firebase/config.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxl0-CDOHDhi7XYtcJLsbSzkL3V_AazSk",
  authDomain: "mrittikanaturals-c3571.firebaseapp.com",
  projectId: "mrittikanaturals-c3571",
  storageBucket: "mrittikanaturals-c3571.appspot.com", // ✅ CORRECTED
  messagingSenderId: "248938451173",
  appId: "1:248938451173:web:ca2905736ae30ef62e440c"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
