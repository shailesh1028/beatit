	$(document).ready(function(){
		//$('#loader-body').css('display','none');
	});
	/*$(window).load(function() {
			alert('yes');
     		
     		/*$('#slideshow').css('display','block');
     		$('#line-left').css('display','block');
     		$('#line-top').css('display','block');
     		$('#line-right').css('display','block');
     		$('#line-bottom').css('display','block');
     		$('#body-content').css('display','block');
  	});*/


	function msg(i){
		var a=parseInt(""+i);
		if(a<6000000000 || a>10000000000)
			alert('Enter a valid Mobile No.');
	}

	function visible(){
		$("#body-main").fadeOut(1000).css('display','none');
		$("#body-area").fadeIn(1000).css('display','block');
	 	//$("#body-area").css('display','block',function(){
	 		//$("#body-area").addClass("animated fadeIn delay-1s")});
	    //$("#body-area").scrollTop(0);
	}

	function show_member(a){
		$.post("member.php",{
			n:a
		},
		    function(data){
		    	$("#mem_size").css('display','block');
		        $("#mem_size").html(data);
	    });
	 }
