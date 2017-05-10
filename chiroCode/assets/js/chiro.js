$('#palmSpringsMap').hide();

$("#palmSpringsOffice").on("click", function() {
		$('#carlsbadMap').hide();
		$('#palmSpringsMap').show();
});

$("#sanDiegoOffice").on("click", function() {
		$('#carlsbadMap').show();
		$('#palmSpringsMap').hide();
});