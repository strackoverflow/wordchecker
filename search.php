<?php
	$file = 'words.txt';
	$handle = fopen($file, 'r');
	$words = fread($handle, filesize($file));
	fclose($handle);
	
	$q = urldecode($_GET['find']);
	$pattern = '/\\b'.trim(strtolower($q)).'\\b/';
	
	// echo the css class that should be used
	echo (preg_match($pattern, $words)) ? 'yup' : 'nope';
	exit;
?>