// ─────────────────────────────────────────────────────────────────────────────
//  Firebase configuration
// ─────────────────────────────────────────────────────────────────────────────
//
//  Paste the config object from your Firebase project here to turn on real,
//  cross-device live communication (guest phone ↔ staff dashboard on different
//  devices, anywhere).
//
//  How to get it (takes ~3 minutes, free):
//    1. Go to https://console.firebase.google.com and create a project.
//    2. Build → Firestore Database → Create database → Start in *production*
//       mode (we ship security rules in firestore.rules — see README).
//    3. Project settings (gear icon) → "Your apps" → Web app (</>) → register.
//    4. Copy the `firebaseConfig` values it shows you into the object below.
//
//  Until you fill this in, the app automatically runs in LOCAL mode: requests
//  sync live between browser tabs/windows on the SAME device so you can still
//  see and demo the live flow. Once these keys are real, it goes cross-device.
//
//  NOTE: these web config values are NOT secrets — they are meant to ship in the
//  browser. What protects your data is the Firestore security rules, not hiding
//  these. See firestore.rules.
// ─────────────────────────────────────────────────────────────────────────────

export const firebaseConfig = {
  apiKey: "AIzaSyCXu4WQiUbGoPYgIBTqX5rMnuyIRKVHlIw",
  authDomain: "blutable-52c13.firebaseapp.com",
  projectId: "blutable-52c13",
  storageBucket: "blutable-52c13.firebasestorage.app",
  messagingSenderId: "825304804714",
  appId: "1:825304804714:web:c7febec1b08b4661198913",
  measurementId: "G-LV9N3XFZG4",
};

// Logical venue id — lets one Firebase project serve multiple lounges later.
export const VENUE_ID = "blu";

// True once the placeholder values above have been replaced with real ones.
export const isFirebaseConfigured = !Object
  .values(firebaseConfig)
  .some(v => typeof v === "string" && v.startsWith("YOUR_"));
