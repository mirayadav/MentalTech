function dashboard() {
    window.name = document.getElementById("name");
    window.picture = document.getElementById("picture");
    window.logout = document.getElementById("log-out");
    
    
    
    this.initFirebase();
}
document.getElementById("log-out").addEventListener("click", function() {
        firebase.auth().signOut();
    window.location.replace("\index.html");
    
    });

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
        console.log(user.displayName.toString());
        document.getElementById("name").innerHTML = (user.displayName.toString());
      
        $("#picture").attr("src", user.photoURL.toString())
  } else {
    window.location.replace("/");
  }
});

dashboard.prototype.initFirebase = function() {
  // Shortcuts to Firebase SDK features.
  this.auth = firebase.auth();
  this.database = firebase.database();
  this.storage = firebase.storage();
  // Initiates Firebase auth and listen to auth state changes.
};

 dashboard.prototype.signOut = function() {
  // Sign out of Firebase.
  this.auth.signOut();
};

window.onload = function() {
  window.dashboard = new dashboard();
};