(function($) {
    "use strict";

    var cube = cube || {};

    /**
     * Returns true if user is on a mobile device
     *
     * @returns {boolean}
     */
    var isMobile = function() {
        var check = false;
        (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };

    /**
     * Initiates all the animation used on the site
     */
    cube.animated = function() {
        // for piecharts
        function piechart(target){
            if(target === undefined)
                target = $('.piechart');
            if ( $().easyPieChart ) {
                target.easyPieChart({
                    animate: 2000,
                    barColor: '#3498db',
                    trackColor: false,
                    easing: 'easeOutBounce',
                    size: 160,
                    lineWidth: 20,
                    lineCap: 'square',
                    scaleColor: false,
                    onStep: function(from, to, percent) {
                        $(this.el).find('span').text(Math.round(percent));
                    }
                });
            }
        }

        // use data-animated=* to animate any html5 element
        if (!isMobile() && $().appear ) {
            $('*[data-animated]').addClass('animated');

            $('.animated').appear(function(i) {
                var $this    = $(this),
                    animated = $(this).data('animated');

                setTimeout(function () {
                    $this.addClass(animated);
                }, 50 * $this.index('.animated'));
            });

            $('.stat-counter').appear(function() {
                counter($(this));
            });

            $('.piechart').appear(function() {
                piechart($(this));
            });
        }
        else{
            piechart();
        }

    };

    /**
     * Allows you to data attributes to build multiple sliders
     *
     * @param target
     */
    cube.bxslider = function(target){
        target.each(function(){
            var $this = $(this);
            $this.bxSlider({
                mode 			: 	$this.data('mode') != 'undefined' ? $this.data('mode') : "horizontal",
                speed			:	$this.data('speed') != 'undefined' ? $this.data('speed') : 2000,
                controls		:	$this.data('controls') != 'undefined' != 'undefined' ? $this.data('controls') : true,
                nextSelector 	: 	$this.data('nextselector') != 'undefined' ? $this.data('nextselector') : '',
                prevSelector	: 	$this.data('prevselector') != 'undefined' ? $this.data('prevselector') : '',
                pager			:	$this.data('pager') != 'undefined' ? $this.data('pager') : true,
                pagerSelector	: 	$this.data('pagerselector') != 'undefined' ? $this.data('pagerselector') : '',
                pagerCustom		: 	$this.data('pagercustom') != 'undefined' ? $this.data('pagercustom') : '',
                auto			:	$this.data('auto') != 'undefined' ? $this.data('auto') : false,
                autoHover		: 	$this.data('autoHover') != 'undefined' ? $this.data('autoHover') : true,
                adaptiveHeight	: 	$this.data('adaptiveheight') != 'undefined' ? $this.data('adaptiveheight') : true,
                useCSS			: 	false,
                captions		: 	$this.data('caption') != 'undefined' ? $this.data('captions') : false,
                nextText		: 	'<i class="fa fa-chevron-right fa-3x">',
                prevText		: 	'<i class="fa fa-chevron-left fa-3x">',
                preloadImages 	: 	'all',
                responsive 		: 	true
            });
        })
    }

    /**
     * Builds the parallax effect using the .parallax & .bg-parallax selectors
     */
    cube.parallax = function() {
        function parallax(){
            if ( $().parallax ) {
                $('.parallax .bg-parallax').each(function(){
                    $(this).parallax("50%", 0.3);
                })
            }
        }

        if(!isMobile())
        {
            parallax();
            $(window).resize(function(){
                parallax();
            });
        }
    };

    /**
     * Init function
     */
    $(document).ready(function() {
        cube.animated();
        cube.bxslider($('.bxslider'));
        cube.parallax();


    });

    /**
     * Pre Loader
     */
    //<![CDATA[
    $(window).load(function() {
        //$('body.onepage').css({'overflow': 'visible'});
        //$('#preloader').delay(2000).animate({ height: 0}, 1000, 'easeOutCirc');
    });
    //]]>
})(jQuery);

$.fn.countTo = function(options) {
    // merge the default plugin settings with the custom options
    options = $.extend({}, $.fn.countTo.defaults, options || {});

    // how many times to update the value, and how much to increment the value on each update
    var loops = Math.ceil(options.speed / options.refreshInterval),
        increment = (options.to - options.from) / loops;

    return $(this).delay(1000).each(function() {
        var _this = this,
            loopCount = 0,
            value = options.from,
            interval = setInterval(updateTimer, options.refreshInterval);

        function updateTimer() {
            value += increment;
            loopCount++;
            $(_this).html(value.toFixed(options.decimals));

            if (typeof(options.onUpdate) == 'function') {
                options.onUpdate.call(_this, value);
            }

            if (loopCount >= loops) {
                clearInterval(interval);
                value = options.to;

                if (typeof(options.onComplete) == 'function') {
                    options.onComplete.call(_this, value);
                }
            }
        }
    });
};

$.fn.countTo.defaults = {
    from: 0,  // the number the element should start at
    to: 100,  // the number the element should end at
    speed: 1000,  // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,  // the number of decimal places to show
    onUpdate: null,  // callback method for every time the element is updated,
    onComplete: null,  // callback method for when the element finishes updating
};
