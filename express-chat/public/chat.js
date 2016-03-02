$(document).ready(function() {
	function updateMessages() {
		$.ajax({
			type: "GET",
			url: "/messages",
			success: function(messages) {
				$('#messages').html("");
				messages.forEach(function(message) {
					$('#messages').append("<p>" + message.name + " says " + message.message + "</p>")
				});
			}
		})
	}

	$('#send-button').click(function() {
		var data = {
			name: $('#name-field').val(),
			message: $('#message-field').val()
		}

		$.ajax({
			type: "POST",
			url: "/messages",
			data: JSON.stringify(data),
			contentType: "application/json",
			success: function() {
				$('#message-field').val("");
			}
		})
	});

	setInterval(updateMessages, 2000);
});