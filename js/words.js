$(document).ready(function(){
	
	$('#word').keyup(function(){
		if ($(this).val().length > 0) {
			search($(this).val());
		}
		else {
			$('#indicator').removeClass('yup');
			$('#indicator').removeClass('nope');
		}
	});

	var words = '';

	$.ajax({
		url: 'words.txt',
		success: function(response) {
			words = response;
			$('#loading').hide();
			$('#word').focus();
		}
	});

	function search(q) {
		q = q.toLowerCase();
		var regex = new RegExp('\\b'+q.trim()+'\\b');
		if (words.match(regex)) {
			$('#indicator').removeClass('nope');
			$('#indicator').addClass('yup');
		}
		else {
			$('#indicator').removeClass('yup');
			$('#indicator').addClass('nope');
		}
	}
});