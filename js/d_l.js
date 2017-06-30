var apiKey = require("./../.env").apiKey;
Doctor = function(){};

Doctor.prototype.getDoctors = function(medicalIssue, showDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=5&user_key=' + apiKey)
   .then(function(result) {
     var doctorObject = {};
     doctorObject.name = new Array();
     doctorObject.status = new Array();
     for(var i=0;i<result.data.length;i++){
       console.log(result.data[i].practices[0].name);
       doctorObject.name.push(result.data[i].practices[0].name);
       if (result.data[i].practices[0].accepts_new_patients === true) {
         doctorObject.status.push("Accepting new patients");
       }
       else{
         doctorObject.status.push("Not accepting any more patients");
       }
       showDoctors(doctorObject.name[i], doctorObject.status[i]);
     }
     console.log(doctorObject);
    })
   .fail(function(error){
      console.log("fail");
    });
};
exports.doctorModule = Doctor;
