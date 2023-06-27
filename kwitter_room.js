var firebaseConfig = {
      apiKey: "AIzaSyCcoLVNR4kDPoh6KOkUXhZOHKvZYVid8Og",
      authDomain: "kwltter.firebaseapp.com",
      databaseURL: "https://kwltter-default-rtdb.firebaseio.com",
      projectId: "kwltter",
      storageBucket: "kwltter.appspot.com",
      messagingSenderId: "669323530463",
      appId: "1:669323530463:web:7eb8779dbc26a56e26196a"
    };

    firebase.initializeApp(firebaseConfig)
   // user_name = localStorage.getItem("user_name")
   // document.getElementById("user_name").innerHTML = "Welcome to Kwitter " + user_name + "!"

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html"
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
  window.location = "index.html"
}

