
/* $("#modal-body").show();
  //$("#filtered").hide();


 $("#reservebtn").click(function (){
                $('html, body').animate({
                    scrollTop: $("#form").offset().top
                }, 2000);
                document.getElementById("date").setAttribute("class", "active");
            });
*/


 $("#startOverHostel").click(function(){
  document.getElementById("modal-Hostel").style.display="none";
 });

 $("#startOverHotel").click(function(){
  document.getElementById("modal-Hotel").style.display="none";
 });

 $("#startOverMotel").click(function(){
  document.getElementById("modal-Motel").style.display="none";
 });

 $("#startOverHouse").click(function(){
  document.getElementById("modal-House").style.display="none";
 });

//Date datepicker
var days;
$(function(){


   $("#startDate").datepicker({
    dateFormat: 'yy-mm-dd',
    changeMonth: true,
    minDate: new Date(),
    maxDate: '+1y',
    onSelect: function(date){

        var selectedDate = new Date(date);
        var msecsInADay = 86400000;
        var stDate = new Date(selectedDate.getTime() + msecsInADay);

       //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
        $("#endDate").datepicker( "option", "minDate", stDate );
        var enDate = new Date(selectedDate.getTime() + 15 * msecsInADay);


        $("#endDate").datepicker( "option", "maxDate", enDate );

    }
});

$("#endDate").datepicker({
    dateFormat: 'yy-mm-dd',
    changeMonth: true,
    onSelect : function(){
    var start = $('#startDate').datepicker('getDate');
    var end = $('#endDate').datepicker('getDate');
     days   = (end - start)/1000/60/60/24;
    console.log(days);
    }
});

//Find the number of days between dates

  /*function dateDiff() {
    var start = $('#startDate').datepicker('getDate');
    var end = $('#endDate').datepicker('getDate');
    var days   = (end - start)/1000/60/60/24;
    console.log(days);

    document.getElementById("noDays").innerHTML = days ;
    return days;
  }*/



});

  //Find the number of days between dates

var  guests;
//Find the number of days between dates
function calculate() {


   // alert(days);
   document.getElementById("noDays").innerHTML = days + " Days   > " ;
    guests= document.getElementById('noGuest').value;
   document.getElementById("numGuest").innerHTML = guests + " Guest(s)  " ;
}
$(function () {
$("#hostel30Get").hide();
$("#hotel157Get").hide();
$("#motelGet").hide();
$("#houseGet").hide();
});
// filtering
var accom = [
        {
        name    : "Hostel1",
        type     : "Hostel",
        price    : 30,
        nightMin: 1,
        nightMax: 10,
        guestMin: 1,
        guestMax: 1,
        location: "Wellington",
        lat    : -41.3088548,
        lng    :174.7762779
        },
   {
        name    : "Hotel1",
        type     : "Hotel",
        price    : 157,
        nightMin: 1,
        nightMax: 5,
        guestMin: 1,
        guestMax: 2,
        location: "Auckland",
        lat    : -41.2908289,
        lng    :174.77193
        },
        {
        name    : "Motel1",
        type     : "Motel",
        price    : 90,
        nightMin: 3,
        nightMax: 10,
        guestMin: 2,
        guestMax: 4,
        location: "Auckland",
        lat    : -41.3137808,
        lng    :174.7757938
        },
        {
        name    : "House1",
        type     : "House",
        price    : 240,
        nightMin: 2,
        nightMax: 15,
        guestMin: 1,
        guestMax: 4,
        location: "Auckland",
        lat    : -41.2881738,
        lng    :174.7279415
        }
];
function accomo(){
  //$("#filtered").show();

console.log(guests,days);
console.log(accom.length);
console.log(accom[0].name);
console.log(accom[0].guestMin);
  for (var i = 0; i < accom.length; i++) {
    console.log(i);
    console.log(accom[i].guestMin, accom[i].guestMax, accom[i].nightMin, accom[i].nightMax);
    if ((guests >= accom[i].guestMin) && (guests <= accom[i].guestMax) && (days >= accom[i].nightMin) && (days <= accom[i].nightMax)) {
      
      if (accom[i].type=="Hostel") {
        $("#hostel30Get").show();
      }
      if (accom[i].type=="Hotel") {
        $("#hotel157Get").show();
      } 
      if (accom[i].type=="Motel") {
        $("#motelGet").show();
      }
      if (accom[i].type=="House") {
        $("#houseGet").show();
      }
    }
  }
}


//Make Booking for hostel $30
function makeBooking30() {
var bfcost = 0;
   //

   var bf = document.getElementById('bFast').value;
   console.log(bf);
   if (bf=="Yes"){

     bfcost = 30;
   }
   console.log(bf);
    var total = days * (30 + bfcost);
   // alert(days);

   document.getElementById("noDaysHostel").innerHTML = days + " Days   > " ;
   document.getElementById("numGuestHostel").innerHTML = guests + " Guest(s) > " ;
   document.getElementById("bFastHostel").innerHTML = "with "  + " breakfast ($30)" ;
   document.getElementById("totalCostHostel").innerHTML = total + " Dollars " ;
   console.log(total);

    //map and marker
    map=new google.maps.Map(document.getElementById("map30"),{
    center: {lat: -41.3088548, lng: 174.7762779},
    zoom: 15
  });



  marker = new google.maps.Marker({
    position: {lat: -41.3088548, lng: 174.7762779},
    map: map,
    title: "Hostel30"
  });
  infowidow= new google.maps.InfoWindow({
    content: "Hostel $30 per Night"
  });
   marker.addListener('click', function(){
    infowidow.open(map, marker);
   });
}

//Make Booking for hotel $157
function makeBooking157() {
  var bf;
var bfcost = 0;

   var guests = document.getElementById('noGuest').value;
  var bf = document.getElementById('bFast').value;
  console.log(bf);
   if (bf=="Yes"){

     bfcost = 30;
   }
   console.log(bf);
    var total = days * (157 + bfcost);
   // alert(days);

   document.getElementById("noDaysHotel").innerHTML = days + " Days   > " ;
   document.getElementById("numGuestHotel").innerHTML = guests + " Guest(s) > " ;
   document.getElementById("bFastHotel").innerHTML = "with "  + " breakfast ($30)" ;
   document.getElementById("totalCostHotel").innerHTML = total + " Dollars " ;
   console.log(total);

     //map and marker
    map=new google.maps.Map(document.getElementById("map157"),{
    center: {lat: -41.2908289, lng: 174.77193},
    zoom: 15
  });
    marker = new google.maps.Marker({
    position: {lat: -41.2908289, lng: 174.77193},
    map: map,
    title: "Hotel 157"
  });
  infowidow= new google.maps.InfoWindow({
    content: "Hotel $157 per Night"
  });
   marker.addListener('click', function(){
    infowidow.open(map, marker);
   });





}

//Make Booking for motel $90
function makeBooking90() {
var bf;
var bfcost = 0;

   var guests = document.getElementById('noGuest').value;
  var bf = document.getElementById('bFast').value;
  console.log(bf);
   if (bf=="Yes"){

     bfcost = 30;
   }
   console.log(bf);
    var total = days * (90 + bfcost);
   // alert(days);

   document.getElementById("noDaysMotel").innerHTML = days + " Days   > " ;
   document.getElementById("numGuestMotel").innerHTML = guests + " Guest(s) > " ;
   document.getElementById("bFastMotel").innerHTML = "with "  + " breakfast ($30)" ;
   document.getElementById("totalCostMotel").innerHTML = total + " Dollars " ;
   console.log(total);


    map=new google.maps.Map(document.getElementById("map90"),{
    center: {lat: -41.3137808, lng: 174.7757938},
    zoom: 15
  });

    marker = new google.maps.Marker({
    position: {lat: -41.3137808, lng: 174.7757938},
    map: map,
    title: "Motel 90"
  });
  infowidow= new google.maps.InfoWindow({
    content: "Motel $90 per Night"
  });
   marker.addListener('click', function(){
    infowidow.open(map, marker);
   });

}
//Make Booking for house $240
function makeBooking240() {
var bf;
var bfcost = 0;

   var guests = document.getElementById('noGuest').value;
  var bf = document.getElementById('bFast').value;
  console.log(bf);
   if (bf=="Yes"){

     bfcost = 30;
   }
   console.log(bf);
    var total = days * (240 + bfcost);
   // alert(days);

   document.getElementById("noDaysHouse").innerHTML = days + " Days   > " ;
   document.getElementById("numGuestHouse").innerHTML = guests + " Guest(s) > " ;
   document.getElementById("bFastHouse").innerHTML = "with "  + " breakfast ($30)" ;
   document.getElementById("totalCostHouse").innerHTML = total + " Dollars " ;
   console.log(total);

    map=new google.maps.Map(document.getElementById("map240"),{
    center: {lat: -41.2881738, lng: 174.7279415},
    zoom: 15
  });

  marker = new google.maps.Marker({
    position: {lat: -41.2881738, lng: 174.7279415},
    map: map,
    title: "House 240"
  });
  infowidow= new google.maps.InfoWindow({
    content: "House $240 per Night"
  });
   marker.addListener('click', function(){
    infowidow.open(map, marker);
   });


}

// function Validate() {
//         var noGuest= document.getElementById("noGuest");
//         if (subcat.value == "0") {
//             //If the "Please Select" option is selected display error.
//             alert("Please select an option!");
//             return false;
//         }
//         return true;
//     }
//
//
//     onclick ="return Validate();"


// Jumping between tabs in the modal
$(function () {
    $('#date a').click(function (e) {
        e.preventDefault();
        $('a[href="' + $(this).attr('href') + '"]').tab('show');
    })

    $('#guest a').click(function (e) {
        e.preventDefault();
        $('a[href="' + $(this).attr('href') + '"]').tab('show');
    })

    $('#total a').click(function (e) {
        e.preventDefault();
        $('a[href="' + $(this).attr('href') + '"]').tab('show');
    })
});

//google maps
var map;





