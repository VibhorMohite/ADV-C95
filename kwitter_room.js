
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC5UleA0nVYrCNGHPH6E098Qw3mlC89yVM",
  authDomain: "kwitter-f7b35.firebaseapp.com",
  databaseURL: "https://kwitter-f7b35-default-rtdb.firebaseio.com",
  projectId: "kwitter-f7b35",
  storageBucket: "kwitter-f7b35.appspot.com",
  messagingSenderId: "1084100213136",
  appId: "1:1084100213136:web:b3630d03e775f6d8b51b15"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name" , room_name);
  window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row="<div class='room_name' id="+ Room_names + "onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML = row;
      });
    });
    }

getData();
function redirecttoroomname(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}