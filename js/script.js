

//Date datepicker
$(function(){
    $('#startDate').datepicker();
    $('#endDate').datepicker();
  });

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
      changeMonth: true
  });

  //Find the number of days between dates
    function dateDiff() {

      var start = $('#startDate').datepicker('getDate');
      var end = $('#endDate').datepicker('getDate');
      var days   = (end - start)/1000/60/60/24;
      if (days > 15) {
        alert ("Please choose dates less than 15 days")
        $("#submit1").hide();
        $('#startDate').focus();

      }

        $("#endDate").click(function(){
          $("#submit1").show();
        });

      document.getElementById("noDays").value = days ;
      return;
    }
var days;
//Find the number of days between dates
function calculate() {

   var start  = $('#startDate').datepicker('getDate');
   var end = $('#endDate').datepicker('getDate');
   days  = (end - start)/1000/60/60/24;
   // alert(days);
   document.getElementById("noDays").innerHTML = days + " Days   > " ;
   var g = document.getElementById('noGuest').value;
   document.getElementById("numGuest").innerHTML = g + " Guest(s)  " ;
}

//Make Booking for hostel $30
function makeBooking30() {
var bfcost = 0;
   // var start  = $('#startDate').datepicker('getDate');
   // var end = $('#endDate').datepicker('getDate');
   // var days  = (end - start)/1000/60/60/24;
   var g = document.getElementById('noGuest').value;
   var bf = document.getElementById('bFast').value;
   console.log(bf);
   if (bf=="Yes"){
     bf=""
     bfcost = 30;
   }
   console.log(bf);
    var total = days * (30 + bfcost);
   // alert(days);

   document.getElementById("noDaysM").innerHTML = days + " Days   > " ;
   document.getElementById("numGuestM").innerHTML = g + " Guest(s) > " ;
   document.getElementById("bFastM").innerHTML = "with " + bf + " breakfast ($30)" ;
   document.getElementById("totalCostM").innerHTML = total + " Dollars " ;
   console.log(total);
}

//Make Booking for hostel $157
function makeBooking157() {
var bfcost = 0;
   // var start  = $('#startDate').datepicker('getDate');
   // var end = $('#endDate').datepicker('getDate');
   // var days  = (end - start)/1000/60/60/24;
   var g = document.getElementById('noGuest').value;
   var bf = document.getElementById('bFast').value;
   console.log(bf);
   if (bf=="Yes"){
     bf=""
     bfcost = 30;
   }
   console.log(bf);
    var total = days * (157 + bfcost);
   // alert(days);

   document.getElementById("noDaysM").innerHTML = days + " Days   > " ;
   document.getElementById("numGuestM").innerHTML = g + " Guest(s) > " ;
   document.getElementById("bFastM").innerHTML = "with " + bf + " breakfast ($30)" ;
   document.getElementById("totalCostM").innerHTML = total + " Dollars " ;
   console.log(total);
}

//Make Booking for motel $90
function makeBooking90() {
var bfcost = 0;
   // var start  = $('#startDate').datepicker('getDate');
   // var end = $('#endDate').datepicker('getDate');
   // var days  = (end - start)/1000/60/60/24;
   var g = document.getElementById('noGuest').value;
   var bf = document.getElementById('bFast').value;
   console.log(bf);
   if (bf=="Yes"){
     bf=""
     bfcost = 30;
   }
   console.log(bf);
    var total = days * (90 + bfcost);
   // alert(days);

   document.getElementById("noDaysM").innerHTML = days + " Days   > " ;
   document.getElementById("numGuestM").innerHTML = g + " Guest(s) > " ;
   document.getElementById("bFastM").innerHTML = "with " + bf + " breakfast ($30)" ;
   document.getElementById("totalCostM").innerHTML = total + " Dollars " ;
   console.log(total);
}

//Make Booking for house $240
function makeBooking240() {
var bfcost = 0;
   // var start  = $('#startDate').datepicker('getDate');
   // var end = $('#endDate').datepicker('getDate');
   // var days  = (end - start)/1000/60/60/24;
   var g = document.getElementById('noGuest').value;
   var bf = document.getElementById('bFast').value;
   console.log(bf);
   if (bf=="Yes"){
     bf=""
     bfcost = 30;
   }
   console.log(bf);
    var total = days * (240 + bfcost);
   // alert(days);

   document.getElementById("noDaysM").innerHTML = days + " Days   > " ;
   document.getElementById("numGuestM").innerHTML = g + " Guest(s) > " ;
   document.getElementById("bFastM").innerHTML = "with " + bf + " breakfast ($30)" ;
   document.getElementById("totalCostM").innerHTML = total + " Dollars " ;
   console.log(total);
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

// Swiper
// var swiper = new Swiper('.swiper-container', {
//       effect: 'coverflow',
//       grabCursor: true,
//       centeredSlides: true,
//       slidesPerView: 'auto',
//       coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows : true,
//       },
//       pagination: {
//         el: '.swiper-pagination',
//       },
//     });
