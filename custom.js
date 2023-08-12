jQuery(document).ready(function(){
  setInterval(function(){
    var date = new Date();
    var year = date.getFullYear();
    var time = date.toLocaleString();
    jQuery('#time').text(time);
    jQuery('#year').text(year);
  })
  
  //form validation start here
jQuery('form').submit(function(){
 var stuName = jQuery('#stuName').val();
 if(stuName == ''){
   jQuery('.stuName').text('Please Enter Your Name')
 }
 
 var stuPhnoe = jQuery('#stuPhnoe').val();
 if(stuPhnoe == ''){
   jQuery('.stuPhnoe').text('Please Enter Your Phone Number')
 }
 
 var stuFname = jQuery('#stuFname').val();
 if(stuFname == ''){
   jQuery('.stuFname').text('Please Enter Your Fathers Name')
 }
 
 var stuFphone = jQuery('#stuFphone').val();
 if(stuFphone == ''){
   jQuery('.stuFphone').text('Please Enter Your Fathers Phone Number')
 }
 
 var schoolName = jQuery('#schoolName').val();
 if(schoolName == ''){
   jQuery('.schoolName').text('Please Enter Your School Name')
 }
 
 var upoZilla = jQuery('#upoZilla').val();
 if(upoZilla == ''){
   jQuery('.upoZilla').text('Please Enter Your UpoZilla Name')
 }
 
 var village = jQuery('#village').val();
 if(village == ''){
   jQuery('.village').text('Please Enter Your Village Name')
 }

if(stuName && stuPhnoe && stuFname && stuFphone && schoolName && upoZilla && village !== ''){
  jQuery('.success').text('Submit Successful')
}


})
  
  
  
  
  
  
  
  
  
  
  
  
  
  
})