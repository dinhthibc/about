(function(IndexPage, $) {
    IndexPage.init = function() {
        IndexPage.checkVisibleSections();
    };

    IndexPage.checkVisibleSections = function() {
        var sections = $('.animated-section');

        $(window).scroll(function() {
            window.requestAnimationFrame(function() {
                var visibleItems = [];

                sections.each(function(index, section) {
                    var rect = section.getBoundingClientRect();

                    section = $(section);
                    if (section.hasClass('visible')) {
                        return;
                    }

                    if (Math.abs(rect.y) < window.innerHeight) {
                        visibleItems.push(section);
                    }
                });

                var delay = 0;
                visibleItems.forEach(function(visibleItem) {
                    visibleItem.addClass('visible')
                        .css('-webkit-transition-delay', delay + 'ms')
                        .css('-moz-transition-delay', delay + 'ms')
                        .css('-ms-transition-delay', delay + 'ms')
                        .css('-o-transition-delay', delay + 'ms')
                        .css('transition-delay', delay + 'ms');
                    delay += 150;

                    visibleItem.bind('transitionend', function() {
                        var childDelay = 0;
                        visibleItem.find('.animated-item').each(function(i, item) {
                            $(item)
                                .css('-webkit-transition-delay', childDelay + 'ms')
                                .css('-moz-transition-delay', childDelay + 'ms')
                                .css('-ms-transition-delay', childDelay + 'ms')
                                .css('-o-transition-delay', childDelay + 'ms')
                                .css('transition-delay', childDelay + 'ms');
                            childDelay += 100;
                        });

                        visibleItem.addClass('show-child');
                    });
                });
            });
        }).trigger('scroll');
    };
})(window.IndexPage = window.IndexPage || {}, jQuery);