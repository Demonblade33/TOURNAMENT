document.write(`<script src="https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js"><\/script>`);
document.write(`<script src="https://www.gstatic.com/firebasejs/9.6.10/firebase-auth-compat.js"><\/script>`);

setTimeout(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyBdt5Ne9Haj9HdsXC6vVvO39sGZ3WveH74",
    authDomain: "demongodyt-5b2d1.firebaseapp.com",
    projectId: "demongodyt-5b2d1",
    storageBucket: "demongodyt-5b2d1.firebasestorage.app",
    messagingSenderId: "151950156819",
    appId: "1:151950156819:web:5e8f9035ffa191a77f4be6",
    measurementId: "G-8CSB2KKRJG"
  };

  firebase.initializeApp(firebaseConfig);
}, 100);
