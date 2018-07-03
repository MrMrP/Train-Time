








// Initialize Firebase
var config = {
    apiKey: "AIzaSyCAK4tvzud68AKubNJBQE88Vq1RyUhU64w",
    authDomain: "train-time-460e3.firebaseapp.com",
    databaseURL: "https://train-time-460e3.firebaseio.com",
    projectId: "train-time-460e3",
    storageBucket: "train-time-460e3.appspot.com",
    messagingSenderId: "469737575874"
  };
  
firebase.initializeApp(config);

//Variable to reference database

var database = firebase.database();


//Variables////
// var trainName = name;
// var trainDestination = destination
// var trainFrequency = frequency
// var trainNext = next
// var trainHowFar = far

var name = "";
var destination = "";
var frequency = "";
var next = "";
var far = ""; 

///Function for collecting form data////
$("#add-train").on("click", function(event) {
    event.preventDefault();    


var name = $("#name-input").val().trim();
var destination = $("#destination-input").val().trim();
var frequency = $("#first-train-time-input").val().trim();
var next = $("#frequency-input").val().trim();

database.ref().set({
    name: name,
    destination: destination,
    frequency: frequency,
    next : next
})
})
// Firebase watcher + initial loader HINT: .on("value")
database.ref().on("value", function(snapshot) {

    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().frequency);
    console.log(snapshot.val().next);
});
// console.log(far);


//Adding Form data to Table///



