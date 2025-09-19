// common/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCroW_dxdWh9Kq7vb9FCiyFHV1XYc_R6mU",
  authDomain: "make-your-future-21821.firebaseapp.com",
  projectId: "make-your-future-21821",
  storageBucket: "make-your-future-21821.firebasestorage.app",
  messagingSenderId: "49675227502",
  appId: "1:49675227502:web:de9e1c7e32f11901e5317f",
  measurementId: "G-QS10NF99SH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Export analyticsInstance safely (no duplicate declaration)
let _analyticsInstance = null;
try {
  _analyticsInstance = getAnalytics(app);
} catch (e) {
  // analytics may not be available in some environments; safe to ignore
  console.warn('Analytics not initialized:', e);
}
export { _analyticsInstance as analyticsInstance };
