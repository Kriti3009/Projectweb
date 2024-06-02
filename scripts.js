$(document).ready(function() {
    $('#contactUsBtn').on('click', function() {
        $('#contactUsModal').modal('show');
    });

    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        
        var form = $(this);
        $.ajax({
            type: "POST",
            url: form.attr('action'),
            data: form.serialize(),
            success: function(response) {
                alert('Form submitted successfully!');
                $('#contactUsModal').modal('hide');
                form[0].reset();
            },
            error: function() {
                alert('There was an error submitting the form. Please try again.');
            }
        });
    });

    $('.read-more-btn').on('click', function() {
        window.open('https://www.fylehq.com', '_blank');
    });

    $('.carousel-item img').hover(
        function() {
            $(this).attr('src', 'hover-image.jpg'); // Replace with the path to your hover image
        }, function() {
            var originalSrc = $(this).data('original-src');
            $(this).attr('src', originalSrc);
        }
    );

    $('.carousel-item img').each(function() {
        $(this).data('original-src', $(this).attr('src'));
    });

    // OUR PROJECT section
    $('.list-group-item').on('click', function() {
        var newImage = $(this).data('image');
        $('#projectImage').fadeOut(300, function() {
            $(this).attr('src', newImage).fadeIn(300);
        });
        $('.list-group-item').removeClass('active');
        $(this).addClass('active');
    });
});
