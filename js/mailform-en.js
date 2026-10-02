
$(function(){
	
	var mailform_dt = $('#mail_form dl dt');
	
	
	for(var i=0; i<mailform_dt.length-1; i++){
		if( mailform_dt.eq(i).next('dd').attr('class') == 'required' ){
			$('<span/>')
				.text('required')
				.addClass('required')
				.prependTo($(mailform_dt.eq(i)));
			
			$('<span/>')
				.appendTo(mailform_dt.eq(i).next('dd'));
		}else{
			$('<span/>')
				.text('optional')
				.addClass('optional')
				.prependTo($(mailform_dt.eq(i)));
		}
	}
	
	
	
	
	$('input').on('keydown', function(e){
		if( (e.which && e.which === 13) || (e.keyCode && e.keyCode === 13) ){
			return false;
		}else{
			return true;
		}
	});
	
	
	
	
	$('#mail_submit_button').click(required_check);
	
	
	
	
	function slice_method(dt){
		var span_start = dt.html().indexOf('</span>');
		var span_end = dt.html().lastIndexOf('<span');
		var dt_name = dt.html().slice(span_start+7, span_end);
		return dt_name;
	}
	
	
	
	
	function compare_method(s, e){
		if( s>e ){
			return e;
		}else{
			return s;
		}
	}
	
	
	
	
	function required_check(){
		
		var error = 0;
		var scroll_point = $('body').height();
		
		
		if( $('form#mail_form dd.required').length ){
			
			if( $('.required').children('input#name').length ){
				var element = $('.required').children('input#name');
				if( element.val() == '' && element_2.val() == '' ){
					var dt = element.parents('dd').prev('dt');
					var dt_name = slice_method(dt);
					element.nextAll('span').text(dt_name +'is not input.');
					error++;
					scroll_point = compare_method(scroll_point, element.offset().top);
				}else{
					element.nextAll('span').text('');
				}
			}
			
			
			if( $('.required').children('input#read_1').length ){
				var element = $('.required').children('input#read_1');
				var element_2 = $('.required').children('input#read_2');
				if( element.val() == '' && element_2.val() == '' ){
					var dt = element.parents('dd').prev('dt');
					var dt_name = slice_method(dt);
					element.nextAll('span').text(dt_name +'is not input.');
					error++;
					scroll_point = compare_method(scroll_point, element.offset().top);
				}else{
					element.nextAll('span').text('');
				}
			}
			
			
			if( $('.required').children('input#mail_address').length ){
				var element = $('.required').children('input#mail_address');
				if( element.val() == '' ){
					element.nextAll('span').text('Please enter your email address.');
					error++;
					scroll_point = compare_method(scroll_point, element.offset().top);
				}else{
					if( !(element.val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) ){
						element.nextAll('span').text('Invalid e-mail address format.');
						error++;
					scroll_point = compare_method(scroll_point, element.offset().top);
					}else{
						element.nextAll('span').text('');
					}
				}
			}
			
			
			if( $('.required').children('input#mail_address_confirm').length ){
				var element = $('.required').children('input#mail_address_confirm');
				var element_2 = $('input#mail_address');
				if( element.val() == '' ){
					element.nextAll('span').text('Please enter your email address confirm.');
					error++;
					scroll_point = compare_method(scroll_point, element.offset().top);
				}else{
					if( element.val() !== element_2.val() ){
						element.nextAll('span').text('The email entered does not match the original email provided. ');
						error++;
					scroll_point = compare_method(scroll_point, element.offset().top);
					}else{
						if( !(element.val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) ){
							element.nextAll('span').text('Invalid e-mail address format.');
							error++;
					scroll_point = compare_method(scroll_point, element.offset().top);
						}else{
							element.nextAll('span').text('');
						}
					}
				}
			}
			
			
			if( $('.required').find('input#gender_1').length ){
				var gender_error = 0;
				var element = $('.required').find('input#gender_1');
				var gender_li = element.parents('ul').children('li');
				
				for(var i=1; i<gender_li.length+1; i++){
					eval("var gender_element_"+ i +" = gender_li.find('input#gender_"+ i +"');");
					
					if(eval("gender_element_"+ i +".is(':checked') == ''")){
						gender_error++;
					}
				}
				
				if(gender_error == gender_li.length){
					var dt_name = slice_method(element.parents('dd').prev('dt'));
					element.parents('dd').find('span').text(dt_name +'is not selected.');
					error++;
					scroll_point = compare_method(scroll_point, element.offset().top);
				}else{
					element.parents('dd').find('span').text('');
				}
			}
			
			
			if( $('.required').children('input#postal').length ){
				var element = $('.required').children('input#postal');
				if( element.val() == '' ){
					var dt = element.parents('dd').prev('dt');
					var dt_name = slice_method(dt);
					element.nextAll('span').text(dt_name +'is not input.');
					error++;
					scroll_point = compare_method(scroll_point, element.offset().top);
				}else{
					element.nextAll('span').text('');
				}
			}
			
			
			if( $('.required').children('input#address_1').length ){
				var element = $('.required').children('input#address_1');
				var element_2 = $('.required').children('input#address_2');
				if( element.val() == '' && element_2.val() == '' ){
					var dt = element.parents('dd').prev('dt');
					var dt_name = slice_method(dt);
					element.nextAll('span').text(dt_name +'is not input.');
					error++;
					scroll_point = compare_method(scroll_point, element.offset().top);
				}else{
					element.nextAll('span').text('');
				}
			}
			
			
			if( $('.required').children('input#phone').length ){
				var element = $('.required').children('input#phone');
				if( element.val() == '' ){
					var dt = element.parents('dd').prev('dt');
					var dt_name = slice_method(dt);
					element.nextAll('span').text(dt_name +'is not input.');
					error++;
					scroll_point = compare_method(scroll_point, element.offset().top);
				}else{
					element.nextAll('span').text('');
				}
			}
			
			
			if( $('.required').children('input#day').length ){
				var element = $('.required').children('input#day');
				if( element.val() == '' ){
					var dt = element.parents('dd').prev('dt');
					var dt_name = slice_method(dt);
					element.nextAll('span').text(dt_name +'is not input.');
					error++;
					scroll_point = compare_method(scroll_point, element.offset().top);
				}else{
					element.nextAll('span').text('');
				}
			}
			
			
			if( $('.required').children('select#product').length ){
				var element = $('.required').children('select#product');
				if( element.val() == '' ){
					var dt = element.parents('dd').prev('dt');
					var dt_name = slice_method(dt);
					element.nextAll('span').text(dt_name +'is not selected.');
					error++;
					scroll_point = compare_method(scroll_point, element.offset().top);
				}else{
					element.nextAll('span').text('');
				}
			}
			
			
			if( $('.required').find('input#kind_1').length ){
				var kind_error = 0;
				var element = $('.required').find('input#kind_1');
				var kind_li = element.parents('ul').children('li');
				
				for(var i=1; i<kind_li.length+1; i++){
					eval("var kind_element_"+ i +" = kind_li.find('input#kind_"+ i +"');");
					
					if(eval("kind_element_"+ i +".is(':checked') == ''")){
						kind_error++;
					}
				}
				
				if(kind_error == kind_li.length){
					var dt = element.parents('dd').prev('dt');
					var dt_name = slice_method(dt);
					element.parents('dd').find('span').text(dt_name +'is not selected.');
					error++;
					scroll_point = compare_method(scroll_point, element.offset().top);
				}else{
					element.parents('dd').find('span').text('');
				}
				
			}
			
			
			if( $('.required').children('textarea#mail_contents').length ){
				var element = $('.required').children('textarea#mail_contents');
				if( element.val() == '' ){
					var dt = element.parents('dd').prev('dt');
					var dt_name = slice_method(dt);
					element.nextAll('span').text(dt_name +'is not selected.');
					error++;
					scroll_point = compare_method(scroll_point, element.offset().top);
				}else{
					element.nextAll('span').text('');
				}
			}
			
		}
		
		
		
		
		if(error == 0){
			if(window.confirm('Is it O.K. to send this form?')){
				
				$('<input />')
					.attr({
						type : 'hidden',
						name : 'javascript_action',
						value : true
					})
					.appendTo(mailform_dt.eq(mailform_dt.length-1).next('dd'));
				
				var now_url = encodeURI(document.URL);
				$('<input />')
					.attr({
						type : 'hidden',
						name : 'now_url',
						value : now_url
					})
					.appendTo(mailform_dt.eq(mailform_dt.length-1).next('dd'));
				
				var before_url = encodeURI(document.referrer);
				$('<input />')
					.attr({
						type : 'hidden',
						name : 'before_url',
						value : before_url
					})
					.appendTo(mailform_dt.eq(mailform_dt.length-1).next('dd'));
				
				return true;
			}else{
				return false;
			}
		}else{
			$('html,body').animate({
				scrollTop : scroll_point-50
			}, 500);
			return false;
		}
	
	}
	
});
