var apiKey = require("./../.env").apiKey;
Doctor = function(){};

Doctor.prototype.getDoctors = function(medicalIssue, showDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=50&user_key=' + apiKey)
   .then(function(result) {
     var doctorObject = {};
     doctorObject.name = new Array();
     doctorObject.status = new Array();
     if(result.data.length === 0)
     {
       showDoctors("There are 0 specialists found in the Portland Area", "Please consult with your PCP for more advice or try again in the search-box")
     }
     for(var i=0;i<result.data.length;i++){
       doctorObject.name.push(result.data[i].practices[0].name);
       if (result.data[i].practices[0].accepts_new_patients === true) {
         doctorObject.status.push("Accepting new patients");
       }
       else{
         doctorObject.status.push("Not accepting any more patients");
       }
       showDoctors(doctorObject.name[i], doctorObject.status[i]);
     }
    })
   .fail(function(error){
      console.log("fail");
    });
};

Doctor.prototype.getSymptoms = function(showSymptoms){
  $.get('https://api.betterdoctor.com/2016-03-01/conditions?skip=0&limit=10&user_key=' + apiKey).then(function(result){
    var allSymptoms = [];
    for (var k = 0; k < result.data.length; k++) {
      allSymptoms.push(result.data[k].name);
      showSymptoms(allSymptoms[k]);
    }
  })
};
exports.doctorModule = Doctor;
