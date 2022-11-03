var firebaseConfig = {
    apiKey: "AIzaSyATRtvzULjQa7WzeJpsNP6pSFx72gYdsFc",
    authDomain: "let-s-chat-8441d.firebaseapp.com",
    databaseURL: "https://let-s-chat-8441d-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-8441d",
    storageBucket: "let-s-chat-8441d.appspot.com",
    messagingSenderId: "670183050632",
    appId: "1:670183050632:web:b6b441d77c44334433be3d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}