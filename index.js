var num = 0;
	$(document).ready(function(){
		$('.loader').fadeOut(3000,function(){
			$('.main-body').css('display','block');
		});
		$('#loader-body').css('display','none');
			$("form").submit(function(e){
				e.preventDefault();
			$("#reg_submit").attr('disabled','disabled');
			$("#reg_submit").val('Submitting');
			name=$("#name").val();
			mobile=$("#mobile").val();
			email=$("#email").val();
			insti=$("#insti").val();
			n=$("#yop").val();
			url=$("#url").val();
			/*if(n>1){
				name2=$("#name2").val();
				mobile2=$("#mobile2").val();
				if(mobile2<6000000000 || mobile2>10000000000) {
					$('#mobile2').val('');
					$('#mobile2').attr('placeholder',"Please enter a valid phone number");
					$('#mobile2').addClass('error');
					num++;
				}
				else {
					num = 0;
				}
			}
			else if(n>2){
				name3=$("#name3").val();
				mobile3=$("#mobile3").val();
				if(mobile3<6000000000 || mobile3>10000000000) {
					$('#mobile3').val('');
					$('#mobile3').attr('placeholder',"Please enter a valid phone number");
					$('#mobile3').addClass('error');
					num++;
				}
				else {
					num = 0;
				}
			}
			else if(n>3){
				name4=$("#name4").val();
				mobile4=$("#mobile4").val();
				if(mobile4<6000000000 || mobile4>10000000000) {
					$('#mobile4').val('');
					$('#mobile4').attr('placeholder',"Please enter a valid phone number");
					$('#mobile4').addClass('error');
					num++;
				}
				else {
					num = 0;
				}
			}
			else if(n>4){
				name5=$("#name5").val();
				mobile5=$("#mobile5").val();
				if(mobile5<6000000000 || mobile5>10000000000) {
					$('#mobile5').val('');
					$('#mobile5').attr('placeholder',"Please enter a valid phone number");
					$('#mobile5').addClass('error');
					num++;
				}
				else {
					num = 0;
				}
			}
			else if(n>5){
				name6=$("#name6").val();
				mobile6=$("#mobile6").val();
				if(mobile6<6000000000 || mobile6>10000000000) {
					$('#mobile6').val('');
					$('#mobile6').attr('placeholder',"Please enter a valid phone number");
					$('#mobile6').addClass('error');
					num++;
				}
				else {
					num = 0;
				}
			}
			else if(n>6){
				name7=$("#name7").val();
				mobile7=$("#mobile7").val();
				if(mobile7<6000000000 || mobile7>10000000000) {
					$('#mobile7').val('');
					$('#mobile7').attr('placeholder',"Please enter a valid phone number");
					$('#mobile7').addClass('error');
					num++;
				}
				else {
					num = 0;
				}
			}*/
			if (num == 0) {
				$.ajax({
					url: "https://script.google.com/macros/s/AKfycbwN3FLDgSR8gSjVKCMEsPQ07qDCB4gJSoI3M0I7nZalhdJNDKM/exec",
					type: "GET",
					data:{
					   'Name':name,
					   'Mobile':mobile,
					   'Email':email,
					   'Institution':insti,
					   'Year_of_passing':n,
					   'url':url,
					},
					  success:function(){
						  $("#success_msg").text("Successfully registered");
						  $('#reg_submit').removeAttr('disabled','disabled');
						  $('.form-items').val('');
						  $('.form-items').removeClass('error');
						  $('.numbercheck').attr('placeholder', "Mobile");
						  $('#email').attr('placeholder', "Email");
						  $("#size option[value=]").prop("selected", true); 
						  $("#reg_submit").val('Submit');
					  }
					
				});
			}
			else {
				$("#reg_submit").attr('disabled','disabled');
			}
			});

		function isValidEmailAddress(emailAddress) {
			var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
			return pattern.test(emailAddress);
		};
	
		$('#email').focusin(function(){
			$('#email').attr('placeholder',"");
			$('#email').removeClass('error');
		});
		$('#email').focusout(function(){
			var email = $('#email').val();
			if(email=="")
			{
				$('#email').attr('placeholder',"Please enter your email");
				$('#email').addClass('error');
				num++;
			}
			else if(isValidEmailAddress(email)==false){
				$('#email').val('');
				$('#email').attr('placeholder',"Please enter a valid email id");
				$('#email').addClass('error');
				num++;
			}
			else {
				num = 0;
			}
		});
		$('.numbercheck').focusin(function() {
			$('.numbercheck').removeClass('error');
		});
		$('.numbercheck').focusout(function() {
			var phone = $('.numbercheck').val();
			if(phone=="") {
				$('.numbercheck').attr('placeholder',"Please enter your phone number");
				$('.numbercheck').addClass('error');
				num++;
			}
			else if(phone<6000000000 || phone>10000000000) {
				$('.numbercheck').val('');
				$('.numbercheck').attr('placeholder',"Please enter a valid phone number");
				$('.numbercheck').addClass('error');
				num++;
				}
				else {
					num = 0;
				}
		});
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

	function visible(){
		$("#body-main").fadeOut(1000).css('display','none');
		$("#body-area").fadeIn(1000).css('display','block');
	 	//$("#body-area").css('display','block',function(){
	 		//$("#body-area").addClass("animated fadeIn delay-1s")});
	    //$("#body-area").scrollTop(0);
	}

	/*function show_member(a){
		/*$.ajax({
			type: "POST",
			url: "./member.php",
			data: {
				"n" : a
			},
			success: function (data) {
				$("#mem_size").css('display','block');
		        $("#mem_size").html(data);
			}
		})
		$( ".mem_size" ).remove();
		var counter = 1;
		for (counter = 1; counter < a; counter++) {
			var count = counter + 1;
			var newTextBoxDiv = $(document.createElement('div')).attr("class", 'mem_size');       
			newTextBoxDiv.after().html('<input type="text"  id="name'+count+'" name="member'+count+'" class="form-items" placeholder="Member_Name_'+count+'"  required> <br><input type="number" id="mobile'+count+'" name="mobile'+count+'" class="form-items numbercheck"  placeholder="Mobile No." required> <br></br>');   
			newTextBoxDiv.appendTo("#members_box");
		}			
	}*/