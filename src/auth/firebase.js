import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxVjEUHBE3N0r6xNBsp_cpvyqGalz-ou4",
  authDomain: "crypto-coins-altas.firebaseapp.com",
  projectId: "crypto-coins-altas",
  storageBucket: "crypto-coins-altas.appspot.com",
  messagingSenderId: "575353062719",
  appId: "1:575353062719:web:796711c6ca6e6acc80ff8a",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const yenikullanicikayit = (email, password, navigate, displayName) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential);
      updateProfile(auth.currentUser, {
        displayName: displayName,
      })
        .then(() => {
          // Profile updated!
          // ...
        })
        .catch((error) => {
          // An error occurred
          // ...
        });
      navigate("/crypto-coins/login");
      // ...
    })
    .catch((error) => {
      console.log(error);
      // ..
    });
};

export const kullanicigirisi = (email, password, navigate) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential);
      navigate("/crypto-coins/");
      // ...
    })
    .catch((error) => {
      alert("Böyle bir kullanıcı yok");
    });
};

export const cikis = () => {
  signOut(auth);
};

export const kullaniciyakala = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser)

    } else {
      setCurrentUser(false)
    }
  });
};
