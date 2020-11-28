


//  // Initialize Firebase  
//  var config = {
//     apiKey: "AIzaSyCljNtC6sTWOhiJwfVfHLz1ZTqyZ6YuD-Y",
//     authDomain: "project-fi-bf5e3.firebaseapp.com",
//     databaseURL: "https://project-fi-bf5e3.firebaseio.com",
//     projectId: "project-fi-bf5e3",
//     storageBucket: "project-fi-bf5e3.appspot.com"
//   };
//   firebase.initializeApp(config);   












// var currentUid = null;  
// firebase.auth().onAuthStateChanged(function(user) {  
//  // onAuthStateChanged listener triggers every time the user ID token changes.  
//  // This could happen when a new user signs in or signs out.  
//  // It could also happen when the current user ID token expires and is refreshed.  
//  if (user && user.uid != currentUid) {  
//   // Update the UI when a new user signs in.  
//   // Otherwise ignore if this is a token refresh.  
//   // Update the current user UID.  
//   currentUid = user.uid;  
//   console.log(user)

//   $('#loger-n').html('|  '+user.displayName)
//   $('#loger-p').html('<img style = "margin-bottom:-20px;width:35px;height:35px;border-radius:50%" src="'+ user.photoURL+'" alt="">')
//   $('#user-id').html(user.displayName)
//   $('#user-id2').html(user.uid)
//   $('#user-name').html(user.displayName)
//   $('#user-mail').html(user.email)
  
//   $('#auth-p').html('<img style="width:200px;height:200px" src="'+ user.photoURL+'" alt="">')
  
//   $('#loginn').hide()
//  } else {  
//   // Sign out operation. Reset the current user UID.  
//   currentUid = null;  
//   $('#out').hide()
//   console.log("no user signed in");  
//  }  
// });  


// $('#out').click(function(){

//   firebase.auth().signOut().then(function() {
//     // Sign-out successful.
//   }).catch(function(error) {
//     // An error happened.
//     console.log(error)
//   });





// })