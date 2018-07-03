

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
$("#add-train").on("click", function (event) {
    event.preventDefault();


    var name = $("#name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var frequency = $("#first-train-time-input").val().trim();
    var next = $("#frequency-input").val().trim();

    console.log(name);
    console.log(destination);
    console.log(frequency);
    console.log(next);

    database.ref().set({
        name: name,
        destination: destination,
        frequency: frequency,
        next : next
    });
})
// })
// Firebase watcher + initial loader HINT: .on("value")
// database.ref().on("value", function(snapshot) {

//     // Log everything that's coming out of snapshot
//     console.log(snapshot.val());
//     console.log(snapshot.val().name);
//     console.log(snapshot.val().destination);
//     console.log(snapshot.val().frequency);
//     console.log(snapshot.val().next);
// });
// })
// console.log(far);

database.ref().on('value', function(snapshot) {
    $("#schedule-table").append(`
        <tr>
            <td>${snapshot.val().name}</td>
            <td>${snapshot.val().destination}</td>
            <td>${snapshot.val().frequency}</td>
            <td>${snapshot.val().next}</td>
            <td>Here</td>
        </tr>
    `);
});

//Adding Form data to Table///
// $("#schedule-table").append("<tr><td>" + name + "</td>" 


// + destination + "</td><td>" +
// frequency + "</td><td>" + next + "</td><td>" + far + "</td><td>"

// );



// var myNum = 12;

// console.log('My favorite number is ' + myNum);
// console.log(`My favorite number is ${myNum}`)