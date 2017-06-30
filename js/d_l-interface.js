var Doctor = require("./../js/d_l.js").doctorModule;
var doctor = new Doctor();

var showDoctors = function(doctor, status){
  $("#doctor").append("<li>" + doctor + "<ul><li>" + status + "</li></ul></li>");
};

$(document).ready(function(){
  $("#issueForm").submit(function(event){
    event.preventDefault();
      $("#doctor").empty();
    var searchIssue = $("#issue").val();
    // doctor.getDoctors(searchIssue);
    $("#output").show();
    $("#issue").append(searchIssue);
    doctor.getDoctors(searchIssue, showDoctors);
  });
});
