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
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
roomname = localStorage.getItem("roomname");
console.log(username);
console.log(roomname);
function send() {
      msg = document.getElementById("message").value;
      firebase.database().ref(roomname).push({
            name: username,
            message: msg,
            like: 0
      });

}
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
