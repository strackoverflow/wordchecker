$(document).ready(function(){
	$('#word').keyup(function(){
		if ($(this).val().length > 0) {
			search($(this).val());
		}
		else {
			$('#word').removeClass('yup');
			$('#word').removeClass('nope');
		}
	});

	function search(q) {
		$.ajax({
			url: 'words.txt',
			success: function(words) {
				var regex = new RegExp('\\b'+q+'\\b');
				if (words.match(regex)) {
					$('#word').removeClass('nope');
					$('#word').addClass('yup');
				}
				else {
					$('#word').removeClass('yup');
					$('#word').addClass('nope');
				}
			}
		});	
	}	
});