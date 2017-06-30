var Doctors = require("./../js/d_l.js").doctorModule;

$(document).ready(function(){
  $("#issueForm").submit(function(event){
    event.preventDefault();
    var searchIssue = $("#issue").val();
    
  });
});
