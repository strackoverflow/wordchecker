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

	/* Queries the search.php script which will read the words.txt file */
	function search(q) {
		$.ajax({
			url: 'search.php?find=' + encodeURIComponent(q),
			success: function(cssClass) {
				$('#indicator').addClass(cssClass);
				var opposite = (cssClass === 'yup') ? 'nope' : 'yup';
				$('#indicator').removeClass(opposite);
			}
		});
	}
});