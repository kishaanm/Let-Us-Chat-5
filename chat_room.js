var firebaseConfig = {
    apiKey: "AIzaSyATRtvzULjQa7WzeJpsNP6pSFx72gYdsFc",
    authDomain: "let-s-chat-8441d.firebaseapp.com",
    databaseURL: "https://let-s-chat-8441d-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-8441d",
    storageBucket: "let-s-chat-8441d.appspot.com",
    messagingSenderId: "670183050632",
    appId: "1:670183050632:web:b6b441d77c44334433be3d"
};
  
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addUser(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(user_name).value;
      purpose : "adding user";

      localStorage.setItem("room_name", room_name);
      window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name -" + Room_names);
      
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div></hr>";

      document.getElementById("output").innerHTML += row;

     });});
}

getData();

function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "chat_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

         console.log(firebase_message_id);
	       console.log(message_data);
	       name = message_data['name'];
	       message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;

      } });  }); }
getData();