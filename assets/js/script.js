window.fbAsyncInit = function() {
  FB.init({
    appId      : '192480834550924',
    xfbml      : true,
    version    : 'v2.8'
  });
  FB.AppEvents.logPageView();
};


$(function(){
  // sign in animation
  $('.signin form .input-group input').focusout(function(){
    var text_val = $(this).val();
    
    if(text_val === "") {
      $(this).removeClass('has-value');
    } else {
      $(this).addClass('has-value');
    }
  });
  
  // google sign in
  gapi.load('auth2', function(){
  	gapi.auth2.init();
  });

});


// facebook login
(function(d, s, id){
 	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));