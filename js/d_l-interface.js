var Doctor = require("./../js/d_l.js").doctorModule;
var doctor = new Doctor();

var showDoctors = function(doctor, status){
  $("#doctor").append("<li>" + doctor + "<ul><li>" + status + "</li></ul></li>");
};

var showSymptoms = function(symptom){
  $("#symptoms").append("<li>" + symptom + "</li>")
}

$(document).ready(function(){
  doctor.getSymptoms(showSymptoms);
  $("#issueForm").submit(function(event){
    event.preventDefault();
    $("#doctor").empty();
    var searchIssue = $("#issue").val();
    $("#output").show();
    $("#insertedIssue").html(searchIssue);
    $("#issue").append(searchIssue);
    doctor.getDoctors(searchIssue, showDoctors);
  });
});
