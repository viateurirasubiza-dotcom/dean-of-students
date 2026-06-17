const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function postData(){
  let quote = document.getElementById("quote").value;
  let image = document.getElementById("image").value;

  db.collection("posts").add({
    quote: quote,
    image: image,
    time: Date.now()
  });

  alert("Posted successfully!");
}
