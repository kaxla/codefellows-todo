//when the document(html) is ready do something
$(document).ready(function() {
	
	//to make things appear on screen after being entered
	$('#todo-list').submit(function() {
		$("#list").append("<li>('#item').val()</li>");
		//});
	


	//to make thing go away on clicking
	$('#item').click(function() {
		$(this).fadeOut('fast');
	});
});