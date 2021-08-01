
var firebaseConfig = {
  apiKey: "AIzaSyBFTH_DjrCc7rwLpGA5mq81s_HolbiYg6w",
  authDomain: "chomp-up.firebaseapp.com",
  databaseURL: "https://chomp-up-default-rtdb.firebaseio.com",
  projectId: "chomp-up",
  storageBucket: "chomp-up.appspot.com",
  messagingSenderId: "122608077223",
  appId: "1:122608077223:web:ab30de3e65dad2447e8e82",
  measurementId: "G-QJPSH7SZZ9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + username + " !";
function addroom() {
  roomname = document.getElementById("room_name").value;
  firebase.database().ref("/").child(roomname).update({
    purpose: "Adding Room Name"
  });
  localStorage.setItem("roomname", roomname);
  window.location = "kwitter_page.html";
}
function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log(childKey);
      console.log(Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirect(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
getData();
function redirect(name){
console.log(name);
localStorage.setItem("roomname",name);
window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("roomname");
  window.location="index.html";
}