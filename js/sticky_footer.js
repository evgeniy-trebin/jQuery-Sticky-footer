$(function () {
    // sticky footer
    (function () {
        var
            $window = $(window),
            $body   = $(document.body),
            $footer = $("#footer"),
            condition = false,
            resizing  = false,
            interval  = 500
            ;

        function positionFooter() {
            if (resizing) {
                setTimeout(function(){
                    if(resizing == false) {
                        positionFooter();
                    }
                }, interval);
                return true;
            }
            var
                footer_position = $footer.css('position'),
                body_height   = $body.height(),
                window_height = $window.height(),
                footer_height = $footer.outerHeight();

            if (footer_position == 'absolute') {
                condition = body_height + footer_height < window_height
            }
            else {
                condition = body_height < window_height
            }

            if (condition) {
                $footer.css('position', 'absolute').css('bottom', 0);
            }
            else {
                $footer.css('position', 'relative');
            }

            resizing = setTimeout(function () {
                resizing = false;
            }, interval);

            return true;
        }

        $window.bind("load", function () {
            positionFooter()
        });

        $window.resize(positionFooter);

    }());
});