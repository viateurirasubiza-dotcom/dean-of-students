const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const postsDiv = document.getElementById("posts");

db.collection("posts").orderBy("time","desc")
.onSnapshot(snapshot => {
  postsDiv.innerHTML = "";

  snapshot.forEach(doc => {
    let data = doc.data();

    postsDiv.innerHTML += `
      <div class="post">
        <h3>${data.quote}</h3>
        <img src="${data.image}">
      </div>
    `;
  });
});
