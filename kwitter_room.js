var firebaseConfig = {
      apiKey: "AIzaSyBxzJ15bLl63kY7Vc4msQdTDkYgiJedm0M",
      authDomain: "kwtter--app.firebaseapp.com",
      databaseURL: "https://kwtter--app-default-rtdb.firebaseio.com",
      projectId: "kwtter--app",
      storageBucket: "kwtter--app.appspot.com",
      messagingSenderId: "983970218052",
      appId: "1:983970218052:web:3fe5ff0a4623bad085bc11",
      measurementId: "G-YHPW6Z2T9V"
    };
//ADD YOUR FIREBASE LINKS HERE

firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
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

        localSStorage.setItem("room_name" , room_name);

        window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}