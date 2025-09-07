<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <p>مرحبا</p>
  <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCjsDDXRgORwsKBpz24n7MO1MJoAk4x69Q",
    authDomain: "alio-ae07a.firebaseapp.com",
    projectId: "alio-ae07a",
    storageBucket: "alio-ae07a.firebasestorage.app",
    messagingSenderId: "462883579468",
    appId: "1:462883579468:web:31cb7d16dbb232357d36e9",
    measurementId: "G-MM3VRHEFBT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
</body>
</html>
