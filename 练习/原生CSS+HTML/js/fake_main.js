$(document).ready(function(){

    //Code to center the subscription pup-up box

    $box = $('#box');
    $box.css({
        'left':'50%',
        'top':'50%', 
        'margin-left':-$box.width()/2 +'px',
        'margin-top':-$box.height()/2+'px'
    });

    //Subscription pup-up
    $('.start_btn').click(function(){
       $('#box').fadeIn(200);
       return false;
    })
	$('.close').click(function(){
		
		$('#box').fadeOut(200);

		return false;
	});

})