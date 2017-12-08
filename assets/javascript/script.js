  var config = {
    apiKey: "AIzaSyBn_3dPTR-Ipu388OyUhmGAwVivWR5gMrE",
    authDomain: "employeeinfo-1ea87.firebaseapp.com",
    databaseURL: "https://employeeinfo-1ea87.firebaseio.com",
    projectId: "employeeinfo-1ea87",
    storageBucket: "employeeinfo-1ea87.appspot.com",
    messagingSenderId: "878306616612"
  };
  firebase.initializeApp(config);

	  var database = firebase.database();



$('#submit').on("click", function() {
	event.preventDefault();

	$('#employeeName').append('<tr><td>'+ $('#name').val() + '</td></tr>');
	$('#employeeRole').append('<tr><td>'+ $('#role').val() + '</td></tr>');
	$('#employeeStartdate').append('<tr><td>'+ $('#date').val() + '</td></tr>');
	$('#employeeMonths').append('<tr><td>'+ 20 + '</td></tr>');
	$('#employeeRate').append('<tr><td>'+ $('#rate').val() + '</td></tr>');
	$('#employeeBilled').append('<tr><td>'+ 200 + '</td></tr>');

 // Initialize Firebase

	var name = $('#name').val();
	var role = $('#role').val();
	var date = $('#date').val();
	var months = 20;
	var rate = $('#rate').val();
	var billed = 200;

	 database.ref().push(
    {
    employeeName: name,
    employeeRole: role,
    employeeStartdate: date,
    employeeRate: rate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP

    });
});



database.ref().on("child_added", function(snapshot){

 	console.log(snapshot.val().employeeName);
	$('#employeeName').append('<tr><td>'+ snapshot.val().employeeName + '</td></tr>');
	$('#employeeRole').append('<tr><td>'+ snapshot.val().employeeRole + '</td></tr>');
	$('#employeeStartdate').append('<tr><td>'+ snapshot.val().employeeStartdate + '</td></tr>');
	$('#employeeMonths').append('<tr><td>'+ 20 + '</td></tr>');
	$('#employeeRate').append('<tr><td>'+ snapshot.val().employeeRate + '</td></tr>');
	$('#employeeBilled').append('<tr><td>'+ 200 + '</td></tr>');


	},

// 	{
 	function (errorObject) {
  	console.log("The read failed: " + errorObject.code);
	}),



// 	},
// 	{
	database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
		$('#employeeName').text(snapshot.val().employeeName);
	 	$('#employeeRole').text(snapshot.val().employeeRole);
	 	$('#employeeStartdate').text(snapshot.val().employeeStartdate);
	 	$('#employeeRate').text(snapshot.val().employeeRate);

	});
// 	}


// 	);
// }



