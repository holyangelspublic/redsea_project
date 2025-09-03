$(document).ready(function(){
   
        var time = 5000; // slide duration
        var $owl = $('.bannerslider');
        var $progressFills = $('.progress-bar .fill');
        var $progressBars = $('.progress-bar');
        var totalSlides = $progressFills.length;

        var progressAnimation; // to keep reference of current animation
        var currentIndex = 0;
        var startTime, remainingTime = time;

        $owl.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: time,
            autoplayHoverPause: true,
            dots: true
        });
        
         jQuery('.bannerslider.owl-carousel').each(function() {
            jQuery(this).find('.owl-dot').each(function(index) {
                jQuery(this).attr('aria-label', index + 1);
                jQuery(this).attr('type', 'button');
            });
        });

        

        function startProgressBar(index) {
            $progressFills.stop(true, true).css('width', '0%');
            $progressFills.each(function (i) {
                if (i < index) {
                    $(this).css('width', '100%');
                }
            });
            currentIndex = index;
            startTime = Date.now();
            remainingTime = time;

            progressAnimation = $progressFills.eq(index).animate({ width: '100%' }, {
                duration: time,
                easing: 'linear'
            });
        }

        function pauseProgressBar() {
            var elapsed = Date.now() - startTime;
            remainingTime = time - elapsed;
            $progressFills.eq(currentIndex).stop(true);
        }

        function resumeProgressBar() {
            startTime = Date.now();
            $progressFills.eq(currentIndex).animate({ width: '100%' }, {
                duration: remainingTime,
                easing: 'linear'
            });
        }

        // On slide change
        $owl.on('changed.owl.carousel', function (event) {
            var index = event.page.index;
            if (index >= totalSlides) { index = 0; }
            startProgressBar(index);
        });

        // Pause/resume on hover
        $owl.on('mouseenter', function () {
            pauseProgressBar();
        });
        $owl.on('mouseleave', function () {
            resumeProgressBar();
        });

        // Click on progress bar to go to slide
        $progressBars.click(function () {
            var index = $(this).data('index');
            $owl.trigger('to.owl.carousel', [index, 300]);
        });

        // Start first bar on load
        startProgressBar(0);

    });