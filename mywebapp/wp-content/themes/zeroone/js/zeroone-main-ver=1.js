var $ = jQuery.noConflict();
var $window_width = $(window).width();
var stickyNavTop = $('header#header').offset().top;
var zerooneSlider, msnry_blog, msnry_portfolio;
$(document).ready(function() {
    "use strict";

    /* ToolTip Activate */

    if ($('[rel=tooltip]').length > 0) {

        loadDependencies([s_gb.theme_js + 'tooltip.js'], function() {

            $('[rel=tooltip]').tooltip();
        });
    }

    /* PlaceHolder fix for IE */
    if ($('input').attr('placeholder') || $('textarea').attr('placeholder')) {

        loadDependencies([s_gb.theme_js + 'jquery.placeholder.min.js'], function() {

            $('input, textarea').placeholder();

        });

    }



    $('#mc_mv_EMAIL').attr('placeholder', 'Type your email address');


    /*Button with icon padding*/
    $('.btn-bt.default:has(i)').css('padding-right', '50px');
    $('.btn-bt.business:has(i)').css('padding-right', '16px');



    if ($('.animsition').length > 0) {
        //loadDependencies([s_gb.theme_js + 'jquery.animsition.min.js'], function(){
        zeroonePageTransition();


    }

    /* Page Header */
    pageHeader();

    fixWooCommercebtn();

    /* Set Icon for list elements. (1 icon for all list) */
    zerooneSetIconList();



    /* Styling VC section */
    zerooneSectionStyle();



    /* Initialize Navigation JS Part */
    //if(!$('body').hasClass('header_5'))
    zerooneNavigation();

    /* Fullwidth Google Map */
    zerooneFullwidthMap();

    /* IFRAME height in grid blog */
    zerooneIFrameHeight();

    /* Search Button in Header */
    zerooneSearchButton();

    /* Scroll Up Binding */
    scrollUpBinding();

    /* Accordion Toggle Binding */
    accordionBinding();

    /* Top Navigation Widget */
    zerooneTopNavWidget();

    /* LightBox */
    zerooneLightBoxInit();


    if ($('.services_medium').length > 0)
        loadDependencies([s_gb.theme_js + 'pathformer.js']);

    zerooneSVGServices();

    /* Twitter Footer Carousel */
    if ($('#tweet_footer').length > 0) {
        loadDependencies([s_gb.theme_js + 'jquery.carouFredSel-6.1.0-packed.js'], function() {

            twitterFooterCarousel();
        });
    }

    /* Clients Carousel Init */
    if ($('.clients_caro').length > 0) {
        loadDependencies([s_gb.theme_js + 'jquery.carouFredSel-6.1.0-packed.js'], function() {
            clientsCarousel();
        });
    }



    zerooneCountDown();

    /* Testimonials Carousel Init */
    //if($('.testimonial_carousel').length > 0)
    //testimonialsCarousel();

    /* Testimonial Cycle */
    if ($('.testimonial_cycle').length > 0) {
        loadDependencies([s_gb.theme_js + 'jquery.carouFredSel-6.1.0-packed.js'], function() {
            testimonialsCycle();
        });
    }


    /* Flexslider Init */
    if ($('.flexslider').length > 0)
        flexsliderInit();
    /* Blog masonry Isotope Filter */

    if ($('#blogmasonry').length > 0) {

        loadDependencies([s_gb.theme_js + 'jquery.mixitup.js'], function() {
            loadDependencies([s_gb.theme_js + 'masonry.min.js'], function() {
                zeroone_blogmasonry();

            });
        });
    }

    /* 
     Page Isotope Filter */
    if ($('#portfolio-preview-items').length > 0) {
        loadDependencies([s_gb.theme_js + 'jquery.mixitup.js'], function() {
            loadDependencies([s_gb.theme_js + 'masonry.min.js'], function() {
                zeroonePortfolioPageIsotope();

            });
        })

    }

    /* FAQ filter */
    zerooneFaqFilter();

    /* Staff Carousel */
    zerooneStaffCarousel();

    /* Portfolio Carousel */
    if ($('.portfolio_slider').length > 0) {
        loadDependencies([s_gb.theme_js + 'idangerous.swiper.min.js'], function() {
            zeroonePortfolioCarousel();

        });

    }

    /* Blog Latest Post */
    zerooneLatestBlogCarousel();

    /* Related Posts*/
    zerooneRelatedpostsCarousel()

    /* zeroone Slider Init */
    if ($('.zeroone_slider').length > 0) {
        loadDependencies([s_gb.theme_js + 'idangerous.swiper.min.js'], function() {
            $('.zeroone_slider').zerooneSliderInit();
        });
    }

    /* Splited screen portfolio Init */
    if ($('.portfolio-items.split').length > 0) {
        loadDependencies([s_gb.theme_js + 'jquery.easings.min.js'], function() {
            loadDependencies([s_gb.theme_js + 'jquery.multiscroll.extensions.min.js'], function() {
                zeroone_portfolioMultiScroll();
            });
        });
    }


    /* Left Navigation */
    zerooneLeftNavtion();

    /* Smoothscroll */
    if ($("body").hasClass('nicescroll'))
        zeroone_smoothScroll();



    if ($('#fullpage').length > 0) {
        loadDependencies([s_gb.theme_js + 'jquery.fullPage.js'], function() {
            zeroone_fullscreen_section();
        });
    }

    zeroone_backgroundcheck();

    if ($('.fixed_sidebar').length > 0)
        zeroone_single_portfolio_floating();

    zerooneExtraNav();

    if ($('.woocommerce-ordering .orderby').length > 0) {
        loadDependencies([s_gb.theme_js + 'select2.min.js'], function() {
            zerooneCustomSelect();
        });
    }

    zerooneTabsactive();

    zerooneMobileMenu();

    zerooneOverallButton();

    if ($('body').hasClass('header_5'))
        zerooneMenuOverlay();

    zerooneLayoutChanges();

    zerooneOnlineFunctions();

    if ($('body').hasClass('one_page'))
        zerooneOnePage();

    if ($('body').hasClass('sticky_active') && $window_width >= 980)
        zerooneStickyNav();

    if ($('.zeroone_gallery_carousel').length > 0) {
        loadDependencies([s_gb.theme_js + 'idangerous.swiper.min.js'], function() {
            zerooneGalleryCarouselInit();
        });

    }

    zeroonePostShares();

    if ($('.infinite_scroll_pag').length > 0 && $('#posts_container').length > 0) {
        loadDependencies([s_gb.theme_js + 'jquery.infinitescroll.min.js'], function() {
            zerooneBlogInfiniteScroll();
        });
    }

    if ($('.infinite_scroll_pag').length > 0 && $('#portfolio-preview-items').length > 0) {
        loadDependencies([s_gb.theme_js + 'jquery.infinitescroll.min.js'], function() {
            zeroonePortfolioInfiniteScroll();
        });
    }




    if ($('.top_nav_transparency').length > 0)
        $('.header_wrapper').height('auto');


    zerooneVideoPlayer();


    //if ($('.parallax-img-container').lenght > 0) {
    //loadDependencies([s_gb.theme_js + 'parallaxImg.js'], function() {
    zerooneParallaxPortfolio();
    //});
    //}

    /* Disable map zoon on scroll */
    zerooneDisableMapZoom();
    /*Side menu on responsive */
    //zerooneSideMenu();

    zerooneProjectBar();

    zerooneScrollToTop();
    zeroone_headingWithLine();
    zerooneSearchOverlay();


    if ($('#portfolio-preview-items.pinterest').length > 0) {
        $('#portfolio-filter').css('display', 'none');
    }

    //zerooneTestimonialCarousel();

    if ($('.footer_wrapper.fixed_footer').length > 0 && !$('.splited_screen_portfolio').length > 0)
        zerooneFooter_reveal();




});
$(window).focus(function() {
    zerooneProjectBar();
});


$(window).load(function() {
    zerooneInitParallax();
    /*Side menu on responsive */
    //zerooneSideMenu();
    zeroonePortfolioInGrid();
    zerooneProjectBar();
    zeroone404();
    zerooneOverallButton();

    if ($('.fixed_content_margin').length > 0) {
        zerooneheader_7_transparent();
    }

    /* Testimonial Carousel */
    zerooneTestimonialCarousel();
    zerooneStaffCarousel();



});



$(window).scroll(function() {
    "use strict";


});



$(window).resize(function() {
    "use strict";
    /*var width = 1100;
    if($('.swiper_slider').length > 0){
        var slide_per_view = $('.swiper_slider').data('slidenr');

        if ($(".container").css("max-width") == "940px" ){
            slide_per_view = 4;
        }else if ($(".container").css("max-width") == "420px" ){
            slide_per_view = 1;
        }else if ($(".container").css("width") == "724px" ){
            slide_per_view = 2;
        }else if ($(".container").css("max-width") == "300px" ){
            slide_per_view = 1;
        }
        var swiperParent = new Swiper('.swiper_slider',{
            slidesPerView: slide_per_view,
            paginationClickable: true,
            pagination: '.pagination'
        });
        
    }   */
    //zeroonePortfolioPageIsotope();


    zeroone_single_portfolio_floating();
    zerooneLayoutChanges();
    testimonialsCycle();
    zerooneInitParallax();
    /*Side menu on responsive */
    //zerooneSideMenu();
    zerooneProjectBar();
    zeroone404();
    zeroone_headingWithLine();
    if ($('.fixed_content_margin').length > 0) {
        zerooneheader_7_transparent();
    }

});




/*-------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------ FUNCTIONS   --------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------*/

/*------------------------------ Page Header ------------------------- */

function missing_img() {
    "use strict";
    $('img').each(function() {

        if ((!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) && $(this).closest('#logo').length == 0) {
            this.src = 'http://zeroone.ellethemes.com/dummy_data/set_image.png';
        }
    });
}

function pageHeader() {
    "use strict";
    var self = $('.header_page.centered,.header_page.left');
    if (self.length == 0)
        return false;
    var height = self.height();
    self.height(0);

    setTimeout(function() {
        self.animate({
            opacity: 1,
            height: height + 'px'
        }, 800);
    }, 600);

    var top = self.offset().top;
    var bottom = self.offset().top + height;
    var op_test = 1;

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();

        if ($('.fixed_header').length > 0)
            scrollTop += $('.fixed_header').height();
        if (jQuery('#wpadminbar').length > 0)
            scrollTop += 32;
        if ($(window).scrollTop() == 0)
            scrollTop = 0;
        var opacity1 = 1 - (scrollTop / bottom);
        op_test = opacity1;
        var new_height = height;
        if (scrollTop > top) {
            new_height = bottom - scrollTop;
        }
        //self.css({opacity: opacity1});
        if (!self.hasClass('with_subtitle'))
            self.find('h1').css('line-height', new_height + 'px').css('height', new_height + 'px').css('padding-top', (height - new_height) + 'px').css('opacity', opacity1);
        else {
            self.find('.titles').css('opacity', opacity1).css('padding-top', (height - new_height) + 'px');
        }

    });


}

var _loadedDependencies = [],
    _inQueue = {};

function loadDependencies(dependencies, callback) {
    "use strict";
    var _callback = callback || function() {};
    if (!dependencies)
        return void _callback();

    var newDeps = dependencies.map(function(dep) {
        return -1 === _loadedDependencies.indexOf(dep) ? "undefined" == typeof _inQueue[dep] ? dep : (_inQueue[dep].push(_callback), !0) : !1
    });

    if (newDeps[0] !== !0) {
        if (newDeps[0] === !1)
            return void _callback();
        var queue = newDeps.map(function(script) {
            _inQueue[script] = [_callback];
            return $.getCachedScript(script);
        });

        var onLoad = function() {
            newDeps.map(function(loaded) {
                _inQueue[loaded].forEach(function(callback) {
                    callback()
                });
                delete _inQueue[loaded];
                _loadedDependencies.push(loaded)
            });
        };

        $.when.apply(null, queue).done(onLoad)
    }


}

$.getCachedScript = function(url) {
    "use strict";
    var options = {
        dataType: "script",
        cache: false,
        url: url
    };
    return $.ajax(options)
};


/*------------------------------ Lists ----------------------------- */

function zerooneSetIconList() {
    "use strict";
    if ($('.list').length > 0) {
        $('.list').each(function() {
            var icon = $(this).find('ul').data('icon');
            var bg_color = $(this).find('ul').data('color');

            if (typeof bg_color !== 'undefined' && bg_color.length > 0)
                $('i', $(this)).css('background-color', bg_color);

            $('i', $(this)).addClass(icon);
        });
    }
}

/* Parallax Init */

function zerooneInitParallax() {
    "use strict";
    if ($('.parallax_section').length > 0) {
        loadDependencies([s_gb.theme_js + 'jquery.parallax.js'], function() {
            if ($('.section-style.parallax_section').length || $(".header_page:not('.no_parallax')").length) {
                $(".section-style.parallax_section, .header_page:not('.no_parallax')").each(function() {
                    var self = $(this);

                    $(this).parallax("50%", 0.4);

                });
            }
        });
    }
}

function zerooneCountDown() {
    "use strict";
    if ($('#countdowndiv').length > 0) {

        loadDependencies([s_gb.theme_js + 'jquery.countdown.min.js'], function() {

            $('#countdowndiv').each(function() {
                var $this = $(this);
                var year = $(this).data('year');
                var month = $(this).data('month');
                var day = $(this).data('day');

                $(this).countdown({ until: new Date(year, month - 1, day) })

            });
        })
    }
}


function zerooneFooter_reveal() {
    'use strict';
    var footer_height = $('.footer_wrapper').outerHeight();

    if ($(window).width() > 979) {
        $('.footer_wrapper').css('height', footer_height);
        $('.top_wrapper.fixed_footer').css('margin-bottom', footer_height);
    }
}
/*------------------------------ Sections ----------------------------- */
function zerooneSectionStyle() {
    "use strict";
    $('.section-style').each(function() {
        if ($(this).prev().hasClass('section-style')) {
            $(this).css('margin-top', '0px');
            $(this).prev().css('margin-bottom', '0px');
        }

        if ($(this).is(':last-child') && ($(this).parent().hasClass('composer_content') || $(this).parent().hasClass('content_portfolio'))) {
            $(this).parent().css('padding-bottom', '0px');
        }
        if ($(this).is(':first-child') && ($(this).parent().hasClass('composer_content') || $(this).parent().hasClass('content_portfolio'))) {
            var style = $(this).parent().attr('style');
            if (typeof style == "undefined")
                style = '';
            $(this).parent().attr('style', style + 'padding-top:0px !important');
        }
    });

    $('.transparency_section').each(function() {
        var height = $(this).outerHeight();
        $(this).css('margin-top', '-' + height + 'px');
    });



    if ($window_width > 979) {
        $('.full-width-content.section-style ').each(function() {
            var max_height = 0;
            var full_width_section = $(this);
            if ($('.wpb_column .vc_column-inner:not(.wpb_column .wpb_column)', full_width_section).length > 1) {
                $('.wpb_column .vc_column-inner:not(.wpb_column .wpb_column)', full_width_section).each(function() {
                    var this_ = $(this);
                    if (this_.innerHeight() > max_height)
                        max_height = this_.innerHeight();
                });
                $('.wpb_column .vc_column-inner:not(.wpb_column .wpb_column):not(.vc_column-inner .vc_column-inner)', full_width_section).innerHeight(max_height + 'px');
            }

        });
    } else {
        $('.full-width-content.section-style .wpb_column .vc_column-inner:not(.wpb_column .wpb_column):not(.vc_column-inner .vc_column-inner)').height('auto');
    }

    $('.section-style').each(function() {
        var self = $(this);
        if (self.css('padding-bottom') == '0px') {
            var pad = $('.wpb_column', self).last().css('padding-bottom');
            if ($window_width < 768) {
                $('.wpb_column', self).last().css('padding-bottom', '0px');
            } else {
                $('.wpb_column', self).last().css('padding-bottom', pad);
            }
        }
    });

    if ($('.slider_on_top').length > 0) {
        var pd = parseInt($('#content').css('padding-top'));
        var mn = $('.header_wrapper').height();
        $('#content').css('padding-top', (pd + mn) + 'px');
    }

    $(window).resize(function() {
        $window_width = $(this).width();
        $('.full-width-content.section-style .wpb_column .vc_column-inner:not(.wpb_column .wpb_column)').height('auto');
        if ($window_width > 979) {
            $('.full-width-content.section-style ').each(function() {
                var max_height = 0;
                var full_width_section = $(this);
                if ($('.wpb_column .vc_column-inner:not(.wpb_column .wpb_column)', full_width_section).length > 1) {
                    $('.wpb_column .vc_column-inner:not(.wpb_column .wpb_column)', full_width_section).each(function() {
                        var this_ = $(this);
                        if (this_.innerHeight() > max_height)
                            max_height = this_.innerHeight();
                    });
                    $('.wpb_column .vc_column-inner:not(.wpb_column .wpb_column):not(.vc_column-inner .vc_column-inner)', full_width_section).innerHeight(max_height + 'px');
                }

            });
        } else {
            $('.full-width-content.section-style .wpb_column .vc_column-inner:not(.wpb_column .wpb_column):not(.vc_column-inner .vc_column-inner)').height('auto');
        }

        $('.section-style').each(function() {
            var self = $(this);
            if (self.css('padding-bottom') == '0px') {
                var pad = $('.wpb_column', self).last().css('padding-bottom');

                if ($window_width < 768) {
                    $('.wpb_column', self).last().css('padding-bottom', '0px');
                } else {
                    $('.wpb_column', self).last().css('padding-bottom', pad);
                }
            }
        });

    });


}

/*------------------------------ Navigation -------------------------- */
function zerooneNavigation() {
    "use strict";
    if (!($('nav').parent().hasClass('header_5_fullwrapper'))) {

        $('nav .menu li').each(function() {
            var self = $(this);
            if ($('.zeroone_mega4', self).length > 0) {
                self.css('position', 'static');
            }

            if ($('.zeroone_mega5', self).length > 0) {
                self.css('position', 'static');
            }
        });

        $('nav .menu li .sub-menu').each(function() {
            $(this).parent().first().addClass('hasSubMenu');
        });

        $('nav .menu, .sticky_menu .menu').mouseleave(function(event) {
            $(this).find('.sub-menu').not('.zeroone_custom_menu_mega_menu .sub-menu').stop().fadeOut(400).css('display', 'none');
            $(this).find('.zeroone_custom_menu_mega_menu').stop().fadeOut(400).css('display', 'none');
        });

        $('nav .menu li ul .hasSubMenu, .sticky_menu .menu li ul .hasSubMenu').mouseleave(function(event) {
            $(this).find('.sub-menu').not('.zeroone_custom_menu_mega_menu .sub-menu').stop().fadeOut(400).css('display', 'none');
            $(this).find('.zeroone_custom_menu_mega_menu').stop().fadeOut(400).css('display', 'none');
        });

        $('nav .menu > li, .sticky_menu .menu > li').mouseenter(function() {

            $(this).parent().find('.sub-menu').not('.zeroone_custom_menu_mega_menu .sub-menu').stop().fadeOut(400).css('display', 'none');
            $('header#header .cart .content').stop().fadeOut(400).css('display', 'none');

            $(this).find('.sub-menu').not('.zeroone_custom_menu_mega_menu .sub-menu').first().stop().fadeIn(400).css('display', 'block');

            $(this).parent().find('.zeroone_custom_menu_mega_menu').stop().fadeOut(400).css('display', 'none');
            $(this).find('.zeroone_custom_menu_mega_menu').first().stop().fadeIn(400).css('display', 'block');
        });

        $('nav .menu > li ul > li, .sticky_menu .menu > li ul > li').mouseenter(function() {

            $(this).find('.sub-menu').not('.zeroone_custom_menu_mega_menu .sub-menu').first().stop().fadeIn(400).css('display', 'block');

            $(this).parent().find('.zeroone_custom_menu_mega_menu').stop().fadeOut(400).css('display', 'none');
            $(this).find('.zeroone_custom_menu_mega_menu').first().stop().fadeIn(400).css('display', 'block');
        });

        $('.zeroone_custom_menu_mega_menu').each(function() {
            var bg = $(this).parent('li').data('bg');
            $(this).css('background-image', 'url(' + bg + ')');
        });

        $('header#header .container').live('mouseleave', function(event) {
            $(this).find('.cart .content').stop().fadeOut(400).css('display', 'none');
        });
        $(' .header_tools .cart .content').live('mouseleave', function(event) {
            $(this).stop().fadeOut(400).css('display', 'none');
        });

        $('header#header .cart_icon').live('mouseenter', function() {
            $(this).parents('header#header').first().find('.sub-menu').not('.zeroone_custom_menu_mega_menu .sub-menu').stop().fadeOut(400).css('display', 'none');
            $(this).parent().find('.content').first().stop().fadeIn(400).css('display', 'block');
        });

        $('header#header .vert_mid > a').live('mouseenter', function() {
            $(this).parent().find('.cart .content').first().stop().fadeOut(400).css('display', 'none');
        });


        if ($('.header_10').length > 0) {
            var container_left = $('.full_nav_menu').offset().left;
            var nav = $('.full_nav_menu nav').offset().left;
            $('.zeroone_custom_menu_mega_menu').each(function() {
                var minus = nav - container_left;
                $(this).css('left', '-' + minus + 'px');
            });
        }

        $(window).resize(function() {
            if ($('.header_10').length > 0) {
                var container_left = $('.full_nav_menu').offset().left;
                var nav = $('.full_nav_menu nav').offset().left;
                $('.zeroone_custom_menu_mega_menu').each(function() {
                    var minus = nav - container_left;
                    $(this).css('left', '-' + minus + 'px');
                });
            }
        });

    } else { //fullscreen header

        $('nav .menu li .sub-menu').each(function() {
            $(this).parent().first().addClass('hasSubMenu');
        });

        $('nav .menu').mouseleave(function(event) {
            $(this).find('.sub-menu').not('.zeroone_custom_menu_mega_menu .sub-menu').stop().fadeOut(400).css('display', 'none');
            $(this).find('.zeroone_custom_menu_mega_menu').stop().fadeOut(400).css('display', 'none');
        });
        $('nav .menu li ul .hasSubMenu').mouseleave(function(event) {
            console.log('mouseleave');
            $(this).find('.sub-menu').not('.zeroone_custom_menu_mega_menu .sub-menu').stop().fadeOut(400).css('display', 'none');
            $(this).find('.zeroone_custom_menu_mega_menu').stop().fadeOut(400).css('display', 'none');
        });
        $('nav .menu > li').mouseenter(function() {
            console.log('mouseenter');
            $(this).parent().find('.sub-menu').not('.zeroone_custom_menu_mega_menu .sub-menu').stop().fadeOut(400).css('display', 'none');
            $(this).find('.sub-menu').not('.zeroone_custom_menu_mega_menu .sub-menu').first().stop().fadeIn(400).css('display', 'block');

            $(this).parent().find('.zeroone_custom_menu_mega_menu').stop().fadeOut(400).css('display', 'none');
            $(this).find('.zeroone_custom_menu_mega_menu').first().stop().fadeIn(400).css('display', 'block');
        });
        $('nav .menu > li ul > li').mouseenter(function() {

            $(this).find('.sub-menu').not('.zeroone_custom_menu_mega_menu .sub-menu').first().stop().fadeIn(400).css('display', 'block');
            console.log('this');
            $(this).parent().find('.zeroone_custom_menu_mega_menu').stop().fadeOut(400).css('display', 'none');
            $(this).find('.zeroone_custom_menu_mega_menu').first().stop().fadeIn(400).css('display', 'block');
        });
        $('.zeroone_custom_menu_mega_menu').each(function() {
            var bg = $(this).parent('li').data('bg');
            $(this).css('background-image', 'url(' + bg + ')');
        });


    }
}


/*------------------------------ Fullwidth Google MAP ----------------------------- */

function zerooneFullwidthMap() {
    "use strict";
    if ($('.googlemap.fullwidth_map').length > 0) {
        $('.googlemap.fullwidth_map').each(function() {
            var $parent = $(this).parents('.row-dynamic-el').first();
            if ($parent.next().hasClass('section-style'))
                $parent.css('margin-bottom', '0px');
        });
        $('.row-google-map').each(function() {
            if ($('.fullwidth_map', $(this)).length > 0) {
                var $parent = $(this).parents('.row-dynamic-el').first();
                $parent.css('margin-top', '0px');
            }

        });
    }
}


/*------------------------------ Change IFRAME GRID height -------------------------- */

function zerooneIFrameHeight() {
    "use strict";
    $('.blog-article.grid .media img').first().imagesLoaded(function() {
        var first_height = $('.blog-article.grid .media img').first().height();

        $('.blog-article.grid iframe').each(function() {
            $(this).css('height', first_height + 'px');
            $(this).parent('.media').css('height', first_height + 'px');
        });
    });
}


/*------------------------------ HEader Search Button ------------------------------ */

function zerooneSearchButton() {
    "use strict";
    $('.open_search_button').click(function() {
        if ($('body').hasClass('open_search')) {
            $('body').removeClass('open_search');
        } else
            $('body').addClass('open_search');

    });


    $(window).scroll(function() {
        if ($('body').hasClass('open_search')) {
            $('body').removeClass('open_search');
        }
    });


    $('html').click(function(e) {
        if ((e.target.id != 's')) {
            $('.right_search_container').hide();
        }
    });
}

/*------------------------------ Side navigation --------------------------- */

function zerooneExtraNav() {
    "use strict";
    $('.extra_navigation_button').click(function() {
        if ($('body').hasClass('open_extra_nav')) {
            $('body').removeClass('open_extra_nav');
        } else
            $('body').addClass('open_extra_nav');

    });

    $('.extra_navigation .close').click(function() {
        $('body').removeClass('open_extra_nav');
    });

    /*$(window).scroll(function() {
        if($('body').hasClass('open_extra_nav')){
            $('body').removeClass('open_extra_nav');
        }
    });*/

}


/*------------------------------ Scroll Up binding ------------------------------ */

function scrollUpBinding() {
    "use strict";
    $('.scrollup').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
}


/*------------------------------ Accordion Toggle Binding ------------------------------ */

function accordionBinding() {
    "use strict";
    $(".accordion-group .accordion-toggle").live('click', function() {
        var $self = $(this).parent().parent();
        if ($self.find('.accordion-heading').hasClass('in_head')) {
            $self.parent().find('.accordion-heading').removeClass('in_head');
        } else {
            $self.parent().find('.accordion-heading').removeClass('in_head');
            $self.find('.accordion-heading').addClass('in_head');
        }
    });
}

/*------------------------------ Top Navtion Widget ------------------------------ */
function zerooneTopNavWidget() {
    "use strict";
    $('.small_widget a').not('.aaaa a').toggle(function(e) {
        $('.small_widget').removeClass('active');
        e.preventDefault();
        var box = $(this).data('box');
        $('.top_nav_sub').hide();
        $('.top_nav_sub.' + box).fadeIn("400");
        $(this).parent().addClass('active');

    }, function(e) {
        e.preventDefault();
        var box = $(this).data('box');
        $('.small_widget').removeClass('active');
        $('.top_nav_sub').fadeOut('400');
        $('.top_nav_sub.' + box).fadeOut('slow');


    });
}


/*------------------------------ LightBox -------------------------------------- */

function zerooneLightBoxInit() {
    "use strict";
    if ($(".lightbox-gallery").length > 0 || $('.show_review_form').length > 0 || $('.lightbox-media').length > 0) {

        loadDependencies([s_gb.theme_fancy + 'jquery.fancybox.js'], function() {
            loadDependencies([s_gb.theme_fancy + 'helpers/jquery.fancybox-media.js'], function() {
                $(".lightbox-gallery").fancybox();
                $('.show_review_form').fancybox();
                $('.lightbox-media').fancybox({
                    openEffect: 'none',
                    closeEffect: 'none',
                    helpers: {
                        media: {}
                    }
                });
            });
        });
    }
}

/*------------------------------ Tweeter Footer Carousel ------------------------ */

function twitterFooterCarousel() {
    "use strict";
    $("#tweet_footer").each(function() {
        var $self = $(this);
        $self.carouFredSel({
            circular: true,
            infinite: true,
            auto: false,
            scroll: {
                items: 1,
                fx: "fade"
            },
            prev: {
                button: $self.parent().parent().find('.back')
            },

            next: {
                button: $self.parent().parent().find('.next')
            }

        });
    });
}


/*------------------------------ Blog Carousel ------------------------ */

function zerooneBlogCarousel() {
    "use strict";
    $(".carousel_blog").each(function() {
        var $self = $(this);
        if ($('li img', $self).size()) {
            $('li img', $self).one("load", function() {
                $self.carouFredSel({
                    circular: true,
                    infinite: true,
                    auto: false,

                    scroll: {
                        items: 1
                    },

                    prev: {
                        button: $self.parents('.latest_blog').find('.prev')
                    },

                    next: {
                        button: $self.parents('.latest_blog').find('.next')
                    }

                });
            }).each(function() {
                if (this.complete) $(this).trigger("load");
            });
        } else {
            $self.carouFredSel({
                circular: true,
                infinite: true,
                auto: false,

                scroll: {
                    items: 1
                },

                prev: {
                    button: $self.parents('.latest_blog').find('.prev')
                },

                next: {
                    button: $self.parents('.latest_blog').find('.next')
                }

            });
        }
    });
}


/*------------------------------ Clients Carousel ------------------------ */

function clientsCarousel() {
    "use strict";
    if ($('.clients_caro').length > 0) {
        loadDependencies([s_gb.theme_js + 'owl.carousel.min.js'], function() {
            var $self = $(".clients_caro");
            var slide_per_view = $('.clients_caro').data('slidenr');


            $(".clients_caro.owl-carousel").owlCarousel({

                nav: false,
                animateIn: 'slideInRight',
                items: 6,
                //navText: ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'],
                pagination: true,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3],
                autoplay: true,
                autoplayTimeout: 2500,
                autoplayHoverPause: true,
                loop: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 3,
                        nav: false
                    },
                    1000: {
                        items: 6,
                        pagination: true,
                        dots: true,
                        loop: true,
                        nav: false
                    }
                }

            });



            var max_height = 0;
            $('.item', $self).each(function() {
                if ($(this).height() > max_height)
                    max_height = $(this).height();
            });
            $self.parents('.clients_caro').first().height(max_height + 'px');

        });

        $('.clients_el').parents('.vc_column-inner').css("padding", "0");


    }




}
/*------------------------------ Parallax Portfolio ------------------------ */

function zerooneParallaxPortfolio() {
    /*"use strict";
    var parallaxSettings = {
        initialOpacity: 1, //from 0 to 1, e.g. 0.34 is a valid value. 0 = transparent, 1 = Opaque
        opacitySpeed: 0.1, //values from 0.01 to 1 -> 0.01: slowly appears on screen; 1: appears as soon as the user scrolls 1px
        pageLoader: true
    };
    parallaxImgScroll(parallaxSettings);*/



}

/*------------------------------ Testimonials Carousel ------------------------ */

function testimonialsCarousel() {
    "use strict";
    $('.testimonial_carousel').each(function() {
        var $self = $(this);
        $(this).carouFredSel({

            auto: true,
            scroll: { items: 1, fx: 'fade' },
            prev: {
                button: $self.parent('.testimonial_carousel_element').find('.prev')
            },

            next: {
                button: $self.parent('.testimonial_carousel_element').find('.next')
            },
            pagination: {

                container: $self.parent('.testimonial_carousel_element').find('.pages_el')
            }

        });
        var max_height = 0;
        $('.item', $self).each(function() {
            if ($(this).height() > max_height)
                max_height = $(this).height();
        });

        $self.parents('.testimonial_carousel_element').first().height(max_height + 'px');

    });


}

/* ---------------------------- Testimonial Cycle ----------------------------- */

function testimonialsCycle() {
    "use strict";

    $('.testimonial_cycle').each(function() {
        var $self = $(this);
        var container_width = $self.parents('.wpb_wrapper').first().width();
        $('.item', $self).width(container_width + 'px');

        $self.carouFredSel({

            auto: true,
            scroll: { items: 1, fx: 'fade' },

        });

    });
}


/*------------------------------ Flexslider Init ------------------------ */
function flexsliderInit() {
    "use strict";
    $('.flexslider').each(function() {
        var $s = $(this);
        loadDependencies([s_gb.theme_js + 'jquery.flexslider-min.js'], function() {
            $s.flexslider({
                slideshowSpeed: 6000,
                animationSpeed: 800,

                controlNav: true,
                pauseOnAction: true,
                pauseOnHover: false,
                start: function(slider) {

                    $s.find(" .slides > li .flex-caption").each(function() {
                        var effect_in = $(this).attr("data-effect-in");
                        var effect_out = $(this).attr("data-effect-out");
                        $(this).addClass("animated " + effect_in);


                    });
                },
                before: function(slider) {
                    var current_slide = $s.find(".slides > li").eq(slider.currentSlide);
                    $s.find(".slides > li .flex-caption").removeClass('animated');
                    $(".flex-caption", current_slide).each(function() {
                        var effect_in = $(this).attr("data-effect-in");
                        var effect_out = $(this).attr("data-effect-out");

                        $(this).removeClass("animated " + effect_in).addClass("animated " + effect_out);
                    });
                },
                after: function(slider) {
                    var current_slide = $s.find(".slides > li").eq(slider.currentSlide);
                    $s.find(".slides > li .flex-caption").removeClass('animated');
                    $(".flex-caption", current_slide).each(function() {
                        var effect_in = $(this).attr("data-effect-in");
                        var effect_out = $(this).attr("data-effect-out");

                        $(this).removeClass("animated " + effect_out).addClass("animated " + effect_in);
                    });
                }
            });
        });

    });
}


/*------------------------------ Portfolio Page Isotope filter ------------------------ */

function zeroonePortfolioPageIsotope() {
    "use strict";
    if ($('#portfolio-preview-items .filterable').length || $('#portfolio-preview-items .masonry').length) {

        if ($('#portfolio-preview-items .filterable').length)
            var containerEl = $('#portfolio-preview-items .filterable');
        else
        if ($('#portfolio-preview-items .masonry').length)
            var containerEl = $('#portfolio-preview-items .masonry');

        var mixer = mixitup(containerEl, {
            callbacks: {
                onMixEnd: function(state) {
                    if ($('#portfolio-preview-items .masonry').lengh > 0)
                        masonryGrid();

                }
            }
        });
    }
    zerooneProjectBar();

    function masonryGrid() {
        var $container = $('#portfolio-preview-items .masonry');
        // initialize
        $container.masonry({
            "columnWidth": ".grid-size",
            itemSelector: '.portfolio-item',
            isAnimated: true,
        });
        $container.masonry('reloadItems');
        $container.masonry('layout');
    }


    /*
            "use strict";
        if($('#portfolio-preview-items .filterable').length > 0){
            var $container = $('#portfolio-preview-items .filterable');
            
                $container.imagesLoaded(function(){
                    var state = $container.mixItUp();
                    zerooneProjectBar();
                    
                
            });
        }

        if($('.masonry').length > 0){
            $container = $('.masonry');
            imagesLoaded( $container, function() {
                    
                    msnry_portfolio = new Masonry( '.masonry', {
                        "columnWidth": ".grid-size",
                        itemSelector: '.portfolio-item'
                    });

                    $('#portfolio-filter li a').click(function(){
                        var filter = $(this).data('filter');
                        if(filter != 'all'){

                            msnry_portfolio.destroy();

                            $container.mixItUp();
                            $container.removeClass('masonry').addClass('filterable');
                            
                            $container.mixItUp('filter', filter); 
                            
                        }else{
                            $container.removeClass('filterable').addClass('masonry');
                            $container.mixItUp('destroy', false);
                            $('#portfolio-filter li').removeClass('active');
                            $('#portfolio-filter li a').removeClass('active');
                            $(this).addClass('active');
                            $(this).parent().addClass('active');
                            msnry_portfolio = new Masonry( '.masonry', {
                                "columnWidth": ".grid-size",
                                itemSelector: '.portfolio-item'
                            });
                        }
                        
                    });
                    
                    
            });
            
        }*/
}



/*------------------------------ FAQ Isotope filter ------------------------ */

function zerooneFaqFilter() {
    "use strict";
    $('nav#faq-filter li a').click(function(e) {
        e.preventDefault();

        var selector = $(this).attr('data-filter');

        $('.faq .accordion-group').fadeOut();
        $('.faq .accordion-group' + selector).fadeIn();

        $(this).parents('ul').find('li').removeClass('active');
        $(this).parent().addClass('active');
    });
}



/*------------------------------ Portfolio Carousel ------------------------------ */

function zeroonePortfolioCarousel() {
    "use strict";
    if ($('.portfolio_slider').length > 0) {

        var slide_per_view = $('.portfolio_slider').data('slidenr');

        if ($(".container").css("max-width") == "940px") {
            slide_per_view = 4;
        } else if ($(".container").css("max-width") == "420px") {
            slide_per_view = 1;
        } else if ($(".container").css("width") == "724px") {
            slide_per_view = 2;
        } else if ($(".container").css("max-width") == "300px") {
            slide_per_view = 1;
        }

        var portfolio_slider = new Swiper('.portfolio_slider', {
            slidesPerView: slide_per_view,
            paginationAsRange: false,
        });
        var $pag_wrapper = $('.recent_portfolio .portfolio_slider').parents('.wpb_row');
        $pag_wrapper.addClass('kyrow');
        if ($('.portfolio_slider').length > 0) {
            $pag_wrapper.find('.wpb_wrapper .block_title').append('<div class="swiper_pagination nav-fillpath">' + $('.recent_portfolio .swiper_pagination').html() + '</div>');
            $('.recent_portfolio .swiper_pagination').remove();

            /*setTimeout(function() {
                if ($('.recent_portfolio .portfolio-item img').size()) {

                    $('.recent_portfolio .portfolio-item img').on("load", function() {
                        var height = $(this).outerHeight();

                        $('.portfolio_slider .swiper-wrapper').css({ height: height + 'px' });

                        $('.recent_portfolio .portfolio_slider').css({ height: height + 'px' });
                    });
                }
            }, 400);*/





        }


        $('.swiper_pagination .next', $pag_wrapper).live('click', function(e) {
            e.preventDefault();
            portfolio_slider.swipeNext();
        });

        $('.swiper_pagination .prev', $pag_wrapper).live('click', function(e) {
            e.preventDefault();
            portfolio_slider.swipePrev();
        });

    }
}


/*------------------------------ Portfolio Carousel ------------------------------ */

function zerooneLatestBlogCarousel() {
    "use strict";
    if ($('.blog_slider').length > 0) {

        var slide_per_view = $('.blog_slider').data('slidenr');

        loadDependencies([s_gb.theme_js + 'owl.carousel.min.js'], function() {
            $(".blog_slider.owl-carousel").owlCarousel({

                navigation: false,
                navigationText: false,
                pagination: true,

                items: slide_per_view,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3],
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 3,
                        nav: false
                    }
                }

            });
        });


    }

}

/*------------------------------ Related posts Carousel ------------------------------ */

function zerooneRelatedpostsCarousel() {
    "use strict";
    if ($('.related_posts').length > 0) {
        if ($(".span9 > .related .related_posts").length)
            var slide_per_view = 3;
        else
            var slide_per_view = 4;
        //var slide_per_view = $('.related_posts').data('slidenr');

        loadDependencies([s_gb.theme_js + 'owl.carousel.min.js'], function() {
            $(".related_posts.owl-carousel").owlCarousel({

                navigation: false,
                navigationText: false,
                pagination: true,

                items: slide_per_view,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3]

            });
        });


    }

}
/*------------------------------ Testimonial Carousel ------------------------------ */

function zerooneStaffCarousel() {
    "use strict";

    if ($('.staff_carousel').length > 0) {
        var $self = $(".staff_carousel");
        var slide_per_view = $('.staff_carousel').data('slidenr');
        var slider_pagination = $('.staff_carousel').data('carousel');

        loadDependencies([s_gb.theme_js + 'owl.carousel.min.js'], function() {
            $(".staff_carousel.owl-carousel").owlCarousel({

                navigation: false,
                navigationText: false,
                pagination: slider_pagination,

                items: slide_per_view,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3]

            });
        });

    }


}
/*------------------------------ Testimonial Carousel ------------------------------ */

function zerooneTestimonialCarousel() {
    "use strict";

    if ($('.testimonial_carousel').length > 0) {
        loadDependencies([s_gb.theme_js + 'owl.carousel.min.js'], function() {
            var $self = $(".testimonial_carousel");
            var slide_per_view = $('.testimonial_carousel').data('slidenr');


            $(".testimonial_carousel.owl-carousel").owlCarousel({

                navigation: true,
                navigationText: false,
                pagination: true,
                autoWidth: true,
                autoHeight: true,
                items: slide_per_view,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3]

            });



            var max_height = 0;
            $('.item', $self).each(function() {
                if ($(this).height() > max_height)
                    max_height = $(this).height();
            });
            $self.parents('.testimonial_carousel_element').first().height(max_height + 'px');

        });

        $('.testimonial_carousel_element').parents('.vc_column-inner').css("padding", "0");


    }


}

/*------------------------------ zeroone Slider ------------------------------ */

$.fn.zerooneSliderInit = function() {
    "use strict";
    var slider = this;
    var parent = this.parents('.zeroone_slider_swiper').first();
    var slide_per_view = slider.data('slidenumber');
    var height = slider.data('height');

    if (height == 'fullscreen')
        height = $(window).height();

    if ($('body').hasClass('outter_padding'))
        height -= 40;

    var $loading = $('.loading', parent);

    if ($('body').hasClass('header_7') && $(window).width() > 970 && $('.zeroone_slider_wrapper', parent).css('position') == 'fixed') {
        var pad = $('.header_wrapper').innerWidth();
        var pos = 'left'
        if ($('.pos--right').length > 0)
            pos = 'right'
        if (!($('body').hasClass('transparent_padding'))) {
            $('.zeroone_slider_wrapper', parent).css('padding-' + pos, pad + 'px');
            $('.zeroone_slider_wrapper', parent).width($('#slider-fullwidth').width() + 'px');
        }
    }

    if ($('body').hasClass('outter_padding')) {
        $('.zeroone_slider_wrapper', parent).width($('#slider-fullwidth').width() + 'px');
    }

    parent.height(height + 'px');
    slider.height(height + 'px');
    $('.zeroone_slider_wrapper', parent).css('min-height', height + 'px');
    parent.css('min-height', height + 'px');


    if ($(window).width() < 767) {
        var window_width = $(window).width();
        var new_height = (window_width * height) / 767;
        $('.zeroone_slider_wrapper', parent).css('min-height', new_height + 'px');
        parent.css('min-height', new_height + 'px');

        parent.height(new_height + 'px');
        slider.height(new_height + 'px');
    }

    $('.zeroone_slider').imagesLoaded(function() {
        $loading.css('display', 'none');
        var c_speed = $('.zeroone_slider').data('speed');
        if (c_speed == 'undefined')
            c_speed = 10000;
        zerooneSlider = new Swiper('.zeroone_slider', {
            slidesPerView: slide_per_view,
            paginationAsRange: false,
            loop: false,
            touchRatio: 0.7,
            autoplay: c_speed,
            speed: 800,
            noSwiping: true,
            updateOnImagesReady: true,
            onSwiperCreated: function(swiper) {
                var $h1 = $(swiper.activeSlide()).find('h1');
                var $p = $(swiper.activeSlide()).find('p');
                var $buttons = $(swiper.activeSlide()).find('.buttons');
                var slide_color = $(swiper.activeSlide()).data('color');
                $h1.removeClass('with_animation').addClass($h1.data('animation'));
                $p.removeClass('with_animation').addClass($p.data('animation'));
                $buttons.removeClass('with_animation').addClass($buttons.data('animation'));
                if (($('body').hasClass('header_transparency')) && !$('.header_wrapper').hasClass('open'))
                    $('.header_wrapper').removeClass('background--light').removeClass('background--dark').addClass('background--' + slide_color);
            },
            onSlideChangeEnd: function(swiper) {
                var $h1 = $(swiper.activeSlide()).find('h1');
                var $p = $(swiper.activeSlide()).find('p');
                var $buttons = $(swiper.activeSlide()).find('.buttons');
                var slide_color = $(swiper.activeSlide()).data('color');
                $h1.removeClass('with_animation').addClass($h1.data('animation'));
                $p.removeClass('with_animation').addClass($p.data('animation'));
                $buttons.removeClass('with_animation').addClass($buttons.data('animation'));


                $h1 = $(swiper.activeSlide()).next().find('h1');
                $p = $(swiper.activeSlide()).next().find('p');
                $buttons = $(swiper.activeSlide()).next().find('.buttons');
                $h1.addClass('with_animation').removeClass($h1.data('animation'));
                $p.addClass('with_animation').removeClass($p.data('animation'));
                $buttons.addClass('with_animation').removeClass($buttons.data('animation'));

                $h1 = $(swiper.activeSlide()).prev().find('h1');
                $p = $(swiper.activeSlide()).prev().find('p');
                $buttons = $(swiper.activeSlide()).prev().find('.buttons');
                $h1.addClass('with_animation').removeClass($h1.data('animation'));
                $p.addClass('with_animation').removeClass($p.data('animation'));
                $buttons.addClass('with_animation').removeClass($buttons.data('animation'));
                if (($('body').hasClass('header_transparency')) && !$('.header_wrapper').hasClass('open'))
                    $('.header_wrapper').removeClass('background--light').removeClass('background--dark').addClass('background--' + slide_color);
            },
            onSlideChangeStart: function(swiper) {
                var $h1 = $(swiper.activeSlide()).find('h1');
                var $p = $(swiper.activeSlide()).find('p');
                var $buttons = $(swiper.activeSlide()).find('.buttons');
                var slide_color = $(swiper.activeSlide()).data('color');
                $h1.addClass('with_animation').removeClass($h1.data('animation'));
                $p.addClass('with_animation').removeClass($p.data('animation'));
                $buttons.addClass('with_animation').removeClass($buttons.data('animation'));
                if (($('body').hasClass('header_transparency')) && !$('.header_wrapper').hasClass('open'))
                    $('.header_wrapper').removeClass('background--light').removeClass('background--dark').addClass('background--' + slide_color);
            }
        });

        $('.nav-slider .next', parent).live('click', function(e) {
            e.preventDefault();
            zerooneSlider.swipeNext();
        });

        $('.nav-slider .prev', parent).live('click', function(e) {
            e.preventDefault();
            zerooneSlider.swipePrev();
        });
    });



    if (parent.hasClass('parallax_slider') && $('.container').width() > 420 && $window_width != 1024) {

        loadDependencies([s_gb.theme_js + 'skrollr.min.js'], function() {

            var skrollr_slider = skrollr.init({
                edgeStrategy: 'set',
                smoothScrolling: true,
                forceHeight: false
            });
            skrollr_slider.refresh()
        });
    }

    var skrollr_slider;
    if (parent.hasClass('parallax_slider') && $('.container').width() > 680 && $window_width != 1024) {
        loadDependencies([s_gb.theme_js + 'skrollr.min.js'], function() {
            skrollr_slider = skrollr.init({
                edgeStrategy: 'set',
                smoothScrolling: true,
                forceHeight: false
            });
            skrollr_slider.refresh()
        });
    }



    if ($('.swiper-slide', slider).length == 1)
        $('.nav-slider', parent).hide();

    $(window).resize(function() {
        if ($('body').hasClass('header_7') && $(window).width() > 970) {
            var pad = $('.header_wrapper').innerWidth();
            var pos = 'left'
            if ($('.pos--right').length > 0)
                pos = 'right'
            if (!($('body').hasClass('transparent_padding'))) {
                $('.zeroone_slider_wrapper', parent).css('padding-' + pos, pad + 'px');
                $('.zeroone_slider_wrapper', parent).width($('#slider-fullwidth').width() + 'px');
            }
        } else {
            var pos = 'left'
            if ($('.pos--right').length > 0)
                pos = 'right'
            if (!($('body').hasClass('transparent_padding'))) {
                $('.zeroone_slider_wrapper', parent).css('padding-' + pos, 0 + 'px');
                $('.zeroone_slider_wrapper', parent).width($('#slider-fullwidth').width() + 'px');
            }
        }

        height = slider.data('height');

        if (height == 'fullscreen') {
            height = $(window).height();
            $('.zeroone_slider_wrapper', parent).css('min-height', height + 'px');
            parent.css('min-height', height + 'px');
        }
        parent.height(height + 'px');
        slider.height(height + 'px');

        if ($(window).width() < 767) {
            var window_width = $(window).width();
            var new_height = (window_width * height) / 767;
            $('.zeroone_slider_wrapper', parent).css('min-height', new_height + 'px');
            parent.css('min-height', new_height + 'px');

            parent.height(new_height + 'px');
            slider.height(new_height + 'px');
        }

        if (parent.hasClass('parallax_slider') && $('.container').width() > 680 && $window_width != 1024) {
            loadDependencies([s_gb.theme_js + 'skrollr.min.js'], function() {
                $('.zeroone_slider_wrapper', parent).addClass('skrollable');
                skrollr_slider = skrollr.init({
                    edgeStrategy: 'set',
                    smoothScrolling: true,
                    forceHeight: false
                });
                skrollr_slider.refresh();
            });


        } else {
            $('.zeroone_slider_wrapper', parent).removeClass('skrollable');
        }

    });


};


/*------------------------------ Woocommerce Functions ------------------------------ */

function zerooneWoocommerceInit() {
    "use strict";
    if ($('.add_to_cart_button').length > 0) {

        $('body').on('adding_to_cart', function(event, param1, param2) {
            var $thisbutton = param1;
            var $product = $thisbutton.parents('.product').first();
            var $load = $product.find('.loading_ef');
            $load.css('opacity', 1);
            $('body').on('added_to_cart', function(event, param1, param2) {

                $load.css('opacity', 0);

                setTimeout(function() {
                    $load.html('<i class="moon-checkmark"></i>');
                    $load.css('opacity', 1);
                }, 500);
                setTimeout(function() { $load.css('opacity', 1); }, 400);
                setTimeout(function() { $load.css('opacity', 0); }, 2000);
                $product.addClass('product_added_to_cart');
            });
        });
    }
}


/*------------------------------ Left Navigation ------------------------------ */

function zerooneLeftNavtion() {
    "use strict";
    $(".page_item_has_children").each(function() {
        $(this).click(function() {
            $(this).find('.children').toggle(400);
            $(this).toggleClass('open-child');

        });
    });

    $('li.current_page_item').parents('.children').css({ display: 'block' });
    $('.current_page_ancestor').addClass('open-child');
}


/*------------------------------ Mobile Menu ---------------------------- */

function zerooneMobileMenu() {
    "use strict";
    var height = $('header#header .row-fluid:first-child .span12, .header_wrapper').height();
    var padding = $('.top_wrapper').css('padding-top');

    $('.mobile_small_menu').click(function() {

        if ($(this).hasClass('open')) {
            $('.header_wrapper').height('auto');
            $('header#header .row-fluid:first-child .span12').css('position', 'relative');

            $('header#header .row-fluid:first-child .span12').height(height);
            $('.menu-small').slideDown(400);
            if (!$('body').hasClass('header_3'))
                $('.top_wrapper').css('float', 'none').css('width', 'inherit').css('display', 'block');

            if ($('body').hasClass('header_4'))
                $('.top_wrapper').css('padding-top', '0');
            $('.tparrows').hide();

            $(this).removeClass('open').addClass('close');
        } else if ($(this).hasClass('close')) {

            $('.menu-small').slideUp(400);
            $('.tparrows').show();
            if (!$('body').hasClass('header_3'))
                $('.top_wrapper').css('float', 'none').css('width', 'inherit').css('display', 'block');

            if ($('body').hasClass('header_4'))
                $('.top_wrapper').css('padding-top', padding);
            $(this).removeClass('close').addClass('open');
            $('.header_wrapper').height('auto');
        }
    });

    $('#mobile-menu li').each(function() {
        var id = $(this).attr('id');
        $(this).attr('id', 'responsive-' + id);
    });

    $(window).resize(function() {
        var height = $('header#header .row-fluid:first-child .span12, .header_wrapper').height();
        var padding = $('.top_wrapper').css('padding-top');
        if ($(window).width() > 980) {
            $('.header_7 .header_wrapper').height('100%');
            $('.menu-small').slideUp(400);
            $('.tparrows').show();
            if (!$('body').hasClass('header_3'))
                $('.top_wrapper').css('float', 'none').css('width', 'inherit').css('display', 'block');

            if ($('body').hasClass('header_4'))
                $('.top_wrapper').css('padding-top', padding);
            $('.mobile_small_menu').removeClass('close').addClass('open');
            $('.header_wrapper').height('auto');
        }
    });
    if ($(window).width() > 980) {
        $('.header_7 .header_wrapper.transparent_padding').height('auto');
    }
    if ($(window).width() < 980) {
        $('.header_7 .header_wrapper').removeClass('transparent_padding');
    }
}




/*-------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------ FUNCTIONS END ----------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------*/





/*------------------------------ Switcher Toggle Button ------------------------ */

function zerooneSwitcherToggle() {
    "use strict";
    $("#switcher-head .button").toggle(function() {
        $("#style-switcher").animate({
            left: 0
        }, 500);
    }, function() {
        $("#style-switcher").animate({
            left: -263
        }, 500);
    });
}


/* ----------------------------- SmoothScroll ---------------------------- */

function zeroone_smoothScroll() {
    "use strict";
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    }
}

/* ----------------------------- End SmoothScroll ------------------------ */


/* ----------------------------- BLOG Masonry ---------------------------- */
function zeroone_blogmasonry() {
    "use strict";

    if ($('#blogmasonry .filterable').length)
        var $containerEl = $('#blogmasonry .filterable');
    $containerEl.imagesLoaded(function() {
        masonryGrid();
        var mixer = mixitup($containerEl, {
            callbacks: {
                onMixEnd: function(state) {
                    masonryGrid();

                }
            },
            animation: {
                "duration": 0,
                "nudge": false,
                "reverseOut": false,
                "effects": "fade "
            }

        });
    });


    function masonryGrid() {
        if ($('#blogmasonry .filterable').length)
            var $container = $('#blogmasonry .filterable');
        // initialize
        $container.masonry({
            "columnWidth": ".grid-size",
            itemSelector: '.blog-article',
            isAnimated: true,
            animationOptions: {
                duration: 500,
                easing: 'fade',
                queue: false
            }
        });
        $container.masonry('reloadItems');
        $container.masonry('layout');
    }


}
/* ----------------------------- End BLOG Masonry ------------------------ */


/* ----------------------------- zeroone Post Share --------------------- */
function zeroonePostShares() {
    "use strict";
    $('.blog-article .share_link').each(function() {
        var link = $(this);
        link.live('mouseover', function() {

            var cont = $(this).parents('.blog-article').find('.shares');
            var parent = $(this).parents('.blog-article').parent();
            if (link.hasClass('opened')) {
                cont.css('opacity', 0).css('visibility', 'hidden');
                link.removeClass('opened');
            } else {
                parent.find('.share_link').removeClass('opened');
                parent.find('.shares').css('opacity', 0).css('visibility', 'hidden');
                link.addClass('opened');
                cont.css('visibility', 'visible').css('opacity', 1);

            }
        });
        $(' .blog-article .shares_container').delegate(link, 'mouseleave', function() {
            var cont = $(this).parents('.blog-article').find('.shares');
            var parent = $(this).parents('.blog-article').parent();
            if (link.hasClass('opened')) {
                cont.css('opacity', 0).css('visibility', 'hidden');
                link.removeClass('opened');

            }
        });


    });





}
/* ----------------------------- End zeroone Post Share ----------------- */


/* ----------------------------- Background Check ------------------------ */

function zeroone_backgroundcheck() {
    "use strict";
    if ($('.header_1').length > 0 || $('.header_4').length > 0) {
        if ($('.page_header_centered').length > 0 && $('.auto_color_check').length > 0) {
            $('.header_wrapper').addClass('background--dark');
            BackgroundCheck.init({
                targets: '.header_wrapper',
                images: '.header_page',
                classes: { dark: 'background--dark', light: 'background--light', complex: 'background--dark' }
            });
            setTimeout(function() { BackgroundCheck.refresh(); }, 400);
        }

        if ($('#fullpage').length > 0 && $('.auto_color_check').length > 0) {
            $('.header_wrapper').addClass('background--dark');
            BackgroundCheck.init({
                targets: '.header_wrapper',
                images: '.section'
            });
            setTimeout(function() {
                if ($('.header_wrapper').hasClass('background--light'))
                    $('.section:first-child .content').addClass('background--light');
                else if ($('.header_wrapper').hasClass('background--dark'))
                    $('.section:first-child .content').addClass('background--dark');
            }, 800);
        }

        if ($('.fullscreen-single').length > 0 && $('.auto_color_check').length > 0) {
            $('.header_wrapper').addClass('background--dark');
            var ca = Array.prototype.slice.call(document.querySelectorAll(".header_wrapper")).concat(Array.prototype.slice.call(document.querySelectorAll(".fullscreen-single")));
            BackgroundCheck.init({
                targets: ca,
                images: '.header_fullscreen_single img',
                windowEvents: false
            });
        }

        /*if($('.creative-single').length > 0 && $('.auto_color_check').length > 0){
            $('.header_wrapper').addClass('background--dark');
            var ca = Array.prototype.slice.call(document.querySelectorAll(".header_wrapper")).concat(Array.prototype.slice.call(document.querySelectorAll(".fullscreen-single")));
            BackgroundCheck.init({
                targets: '.header_wrapper', 
                images: '.header_creative_single .bg-img'
                //windowEvents: false,
                        
            });
            setTimeout(function(){
                if($('.header_wrapper').hasClass('background--light')){
                    $('article.creative-single').addClass('background--light');
                    //$('.header_wrapper').removeClass('background--dark');
                }
                else if($('.header_wrapper').hasClass('background--dark'))
                    $('article.creative-single').addClass('background--dark');
            }, 400);
        }*/


    }
}

/* ----------------------------- End Background Check -------------------- */

/* ----------------------------- Fullscreen Section ---------------------- */

function zeroone_fullscreen_section() {
    if ($(window).width() > 960) {
        "use strict";
        if ($('.fullscreen-blog-article').length > 0) {
            $('#fullpage .section .content').each(function() {
                var height = $(this).height();
                $(this).css('margin-top', '-' + (height / 2) + 'px');
            });
        }
        $('#fullpage').fullpage({
            verticalCentered: false,
            navigation: true,
            navigationPosition: 'right',
            resize: false,

            afterLoad: function(anchorLink, index) {
                if ($('.auto_color_check').length > 0) {
                    BackgroundCheck.refresh();
                    if ($('.header_wrapper').hasClass('background--light'))
                        $('.section:nth-child(' + index + ') .content').addClass('background--light');
                    else if ($('.header_wrapper').hasClass('background--dark'))
                        $('.section:nth-child(' + index + ') .content').addClass('background--dark');
                }
                $('#fullpage .section .with_animation').animate_on_appear();



            },
            afterRender: function() {
                $('#fullpage .section .with_animation').animate_on_appear();
            }
            /*onLeave: function(index, nextIndex){
                var current = $('#fullpage .section:nth-child('+index+') .content') ;
                var next = $('#fullpage .section:nth-child('+nextIndex+') .content');
                current.removeClass('with_animation').removeClass(current.data('animation'));
                next.addClass('with_animation').delay(current.data('delay')).queue( function() {
                    $(this).addClass(current.data('animation'));
                });
            }*/

        });

    } //endif
}

/* ----------------------------- End Fullscreen Section ------------------- */

/* ----------------------------- SINGLE PORTFOLIO FLOATING----------------- */

function zeroone_single_portfolio_floating() {
    "use strict";
    var $sidebar = $(".fixed_sidebar"),
        $window = $(window),
        offset = $sidebar.offset(),
        topPadding = 15;

    if ($('.container').width() > 420 && $sidebar.length > 0) {
        $window.scroll(function() {
            if ($window.scrollTop() > offset.top) {
                $sidebar.stop().animate({
                    marginTop: $window.scrollTop() - offset.top + topPadding
                });
            } else {
                $sidebar.stop().animate({
                    marginTop: 0
                });
            }
        });
    } else {
        $(window).unbind('scroll');
    }
}


/* ----------------------------- END SINGLE PORTFOLIO FLOATING------------ */

/* ----------------------------- Custom Select --------------------------- */

function zerooneCustomSelect() {
    "use strict";
    $('.woocommerce-ordering .orderby').select2();

}

/* ----------------------------- End Custom Select ----------------------- */

/* ----------------------------- zeroone gallery carousel --------------- */

function zerooneGalleryCarouselInit() {
    "use strict";
    var gallery = $('.zeroone_gallery_carousel');

    var slider = gallery.find('.zeroone_swiper_gallery');
    slider.hide();
    if (gallery.length > 0) {

        var height = gallery.data('height');

        if (height == 'fullscreen')
            height = $(window).height();

        var $loading = $('.loading', gallery);

        gallery.height(height + 'px');
        slider.height(height + 'px');

        $('.zeroone_swiper_gallery').imagesLoaded(function() {
            $loading.css('display', 'none');
            var centered = false;
            var VslidesPerView = 'auto';
            if ($('.zeroone_gallery_carousel').hasClass('zeroone'))
                centered = false;
            else {
                centered = true;
            }

            if ($(window).width() > 979) {
                zerooneSlider = new Swiper('.zeroone_swiper_gallery', {
                    slidesPerView: 'auto',
                    paginationAsRange: false,
                    loop: centered,
                    initialSlide: -1,
                    centeredSlides: centered,
                    touchRatio: 0.7,
                    autoplay: 5000,
                    speed: 800,
                    noSwiping: true,
                    updateOnImagesReady: true
                });


            } else {

                zerooneSlider = new Swiper('.zeroone_swiper_gallery', {
                    slidesPerView: 1,
                    paginationAsRange: false,
                    touchRatio: 0.7,
                    autoplay: 5000,
                    speed: 800,
                    noSwiping: true,
                    updateOnImagesReady: true
                });

                gallery.addClass('mobile_gallery');

            }

            slider.fadeIn('slow');
            $('.nav-slider .next', gallery).live('click', function(e) {
                e.preventDefault();
                zerooneSlider.swipeNext();
            });

            $('.nav-slider .prev', gallery).live('click', function(e) {
                e.preventDefault();
                zerooneSlider.swipePrev();
            });
            zerooneSlider.resizeFix();


        });

        if ($('.swiper-slide', slider).length == 1)
            $('.nav-slider', gallery).hide();

        $(window).resize(function() {

            if ($('body').hasClass('header_7') && $(window).width() > 970) {
                var pad = $('.header_wrapper').innerWidth();
                var pos = 'left'
                if ($('.pos--right').length > 0)
                    pos = 'right'
                $('.zeroone_slider_wrapper', gallery).css('padding-' + pos, pad + 'px');
                $('.zeroone_slider_wrapper', gallery).width($('#slider-fullwidth').width() + 'px');
            } else {
                var pos = 'left'
                if ($('.pos--right').length > 0)
                    pos = 'right'
                $('.zeroone_slider_wrapper', gallery).css('padding-' + pos, 0 + 'px');
                $('.zeroone_slider_wrapper', gallery).width($('#slider-fullwidth').width() + 'px');

            }

            if ($(window).width() < 970) {
                zerooneSlider = new Swiper('.zeroone_swiper_gallery', {
                    slidesPerView: 1,
                    paginationAsRange: false,
                    touchRatio: 0.7,
                    autoplay: 5000,
                    speed: 800,
                    noSwiping: true,
                    updateOnImagesReady: true
                });

                gallery.addClass('mobile_gallery');
            }
        });



    }
}

/* ----------------------------- End zeroone gallery carousel ----------- */

/* ----------------------------- Splited screen portfolio ------------------------------------ */

function zeroone_portfolioMultiScroll() {
    "use strict";
    $('#myContainer').multiscroll({
        navigation: true,
        sectionSelector: '.section',
        leftSelector: '.left',
        rightSelector: '.right',
        responsiveWidth: 900,
        responsiveExpand: true,
        verticalCentered: true,
        scrollingSpeed: 700,
        easing: 'easeInQuart',
        css3: true,
    });
}

/* ----------------------------- Tabs ------------------------------------ */

function zerooneTabsactive() {
    "use strict";
    if ($('.tabbable').length > 0) {
        $('.tabbable').each(function() {
            var id = $(this).find('.nav-tabs li.active a').attr('href');
            $(this).find(id).addClass('active');
        });
    }
}

/* ----------------------------- End Tabs -------------------------------- */

/* ----------------------------- Buttons Style --------------------------- */

function zerooneOverallButton() {
    "use strict";
    var extra = zeroone_global.button_style;

    if ($('.wpcf7-form p input[type="submit"]').length > 0) {
        $('.wpcf7-form p input[type="submit"]').addClass('btn-bt').addClass(extra);
    }
    if ($('#respond input[type="submit"]').length > 0) {
        $('#respond input[type="submit"]').addClass('btn-bt').addClass(extra);
    }

    if ($('.woocommerce .button, #woocommerce .button').length > 0) {
        $('.woocommerce .button, #woocommerce .button').not('.wpb_content_element.button').addClass('btn-bt').addClass(extra);
    }

    if ($('.not_found .search_field').length > 0) {
        $('.not_found .search_field button').addClass('btn-bt').addClass(extra);
    }

    if ($('.post-password-form input[type="submit"]').length > 0) {
        $('.post-password-form input[type="submit"]').addClass('btn-bt').addClass(extra);
    }

    if ($('.mc_signup_submit input').length > 0) {
        $('.mc_signup_submit input').addClass('btn-bt').addClass(extra);
    }

    if ($('.mc4wp-form input[type="submit"]').length > 0) {
        $('.mc4wp-form input[type="submit"]').addClass('btn-bt').addClass(extra);
    }

    $("body").bind("added_to_cart", function() {
        $('.added_to_cart').addClass('btn-bt').addClass(extra);
    });
    if ($('#place_order.button').length > 0) {
        $('#place_order.button').addClass('btn-bt').addClass(extra);
    }
}

/* ----------------------------- End Buttons Style ----------------------- */

/* ----------------------------- Header5 Overlay ------------------------- */

function zerooneMenuOverlay() {
    "use strict";
    var wrapperMenu = document.querySelector('.wrapper-menu');
    var wrapperoverlay = document.querySelector('.overlay-hugeinc');

    wrapperMenu.addEventListener('click', function() {
        wrapperMenu.classList.toggle('open');
        wrapperoverlay.classList.toggle('open');

    });



    /*

        var triggerBttn = document.getElementById('trigger-overlay1'),
            overlay = document.querySelector('#trigger-overlay1'),
            closeBttn = overlay.querySelector('#trigger-overlay1.open');
        transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            },
            transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
            support = { transitions: Modernizr.csstransitions };

        triggerBttn.addEventListener('click', toggleOverlay);
        closeBttn.addEventListener('click', toggleOverlay);

        function toggleOverlay() {
            if (classie.has(overlay, 'open')) {
                classie.remove(overlay, 'open');
                classie.add(overlay, 'close');

                var onEndTransitionFn = function(ev) {
                    if (support.transitions) {
                        if (ev.propertyName !== 'visibility') return;
                        this.removeEventListener(transEndEventName, onEndTransitionFn);
                    }
                    classie.remove(overlay, 'close');
                };
                if (support.transitions) {
                    overlay.addEventListener(transEndEventName, onEndTransitionFn);
                } else {
                    onEndTransitionFn();
                }
            } else if (!classie.has(overlay, 'close')) {
                classie.add(overlay, 'open');
            }
        }

    */
    $('.overlay_menu .menu-item-has-children').hover(function() {

        var height = $(this).find('.sub-menu li').height();
        height *= $(this).find('.sub-menu li').length;
        //$(this).find('.sub-menu').height(height+'px');

    }, function() {
        //$(this).find('.sub-menu').height(0);
    });

}


/* ----------------------------- End Header 5 Overlay -------------------- */

/* ----------------------------- Search overlay ------------------------- */

function zerooneSearchOverlay() {

    if ($('.open_search_button').length > 0) {
        var triggerBttn = document.getElementById('trigger-overlay'),
            overlay = document.querySelector('div.search_bar'),
            closeBttn = overlay.querySelector('div.overlay-close');
        transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            },
            transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
            support = { transitions: Modernizr.csstransitions };

        triggerBttn.addEventListener('click', toggleOverlay);
        closeBttn.addEventListener('click', toggleOverlay);

        function toggleOverlay() {

            if (classie.has(overlay, 'open')) {
                classie.remove(overlay, 'open');
                classie.add(overlay, 'close');

                var onEndTransitionFn = function(ev) {
                    if (support.transitions) {
                        if (ev.propertyName !== 'visibility') return;
                        this.removeEventListener(transEndEventName, onEndTransitionFn);
                    }
                    classie.remove(overlay, 'close');
                };
                if (support.transitions) {
                    overlay.addEventListener(transEndEventName, onEndTransitionFn);
                } else {
                    onEndTransitionFn();
                }
            } else if (!classie.has(overlay, 'close')) {
                classie.add(overlay, 'open');
            }
        }



    }

}


/* ----------------------------- End Search overlay -------------------- */

/* ----------------------------- Layout Changes -------------------------- */

function zerooneLayoutChanges() {
    "use strict";
    var container = $('.container').width();
    $('.testimonial_carousel .item').each(function() {

        var self = $(this);
        var wpb_column = self.parents('.wpb_column').first().width();
        self.innerWidth(wpb_column + 'px');
        self.height(self.height() + 'px');
        self.parents('.caroufredsel_wrapper').first().height(self.height() + 'px');
        self.parents('.testimonial_carousel').first().height(self.height() + 'px');

    });

    $('.clients_caro .item').each(function() {
        var self = $(this);
        var wpb_column = self.parents('.vc_column-inner').width();

        if (container > 420 && container <= 724) {
            self.innerWidth((wpb_column / 3) + 'px');
        }
        if (container > 724 && container < 940) {
            self.innerWidth((wpb_column / 4) + 'px');
        }
        if (container > 940) {
            self.innerWidth((wpb_column / 6) + 'px');
        }
    });

    clientsCarousel();
}

/* ----------------------------- End Layout Changes ---------------------- */


/* ----------------------------- One Page -------------------------------- */

function zerooneOnePage() {
    "use strict";
    $('nav .menu').onePageNav({
        currentClass: 'current-menu-item',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
    });
}

/* ----------------------------- End One Page ---------------------------- */


function fixWooCommercebtn() {

    if ($('.woocommerce .added_to_cart').length > 0) {
        var extra = zeroone_global.button_style;
        $('.woocommerce .added_to_cart').addClass('btn-bt').addClass(extra);
    }
    jQuery(document.body).on('updated_cart_totals', function() {
        var extra = zeroone_global.button_style;

        if ($('.woocommerce .button, #woocommerce .button, .woocommerce .added_to_cart').length > 0) {
            $('.woocommerce .button, #woocommerce .button').addClass('btn-bt').addClass(extra);
            $('.woocommerce .added_to_cart').addClass('btn-bt').addClass(extra);

        }

    });
}

/* ----------------------------- Sticky Nav ------------------------------ */

function zerooneStickyNav() {
    "use strict";
    var opened = false;
    var position = $('.header_wrapper').css('position');
    var bool_test = false;
    $('.logo_only_sticky .header_wrapper #logo').css('opacity', 0).css('visibility', 'hidden');
    $(window).scroll(function() {
        var top = $(this).scrollTop();

        if (top > stickyNavTop + 300 && !opened) {

            $('body').addClass('sticky_header');

            setTimeout(function() {
                if ($('.header_wrapper').hasClass('background--dark')) {
                    $('.header_wrapper').removeClass('background--dark');
                    bool_test = true;
                }
                $('.header_wrapper').css('position', 'fixed').css('visibility', 'visible').addClass('open');
                opened = true;

            }, 200);

            $('.logo_only_sticky .header_wrapper #logo').css('visibility', 'visible').css('opacity', 1);

        } else if (top == 0) {
            if (($('body').hasClass('header_transparency')) && bool_test) {
                $('.header_wrapper').addClass('background--dark');
            }



            $('body').removeClass('sticky_header');
            $('.header_wrapper').removeClass('open').css('position', position);

            if (zerooneSlider) {
                var slide_color = zerooneSlider.activeSlide().data('color');
                if (($('.header_wrapper').hasClass('header_1') || $('.header_wrapper').hasClass('header_11')) && !$('.header_wrapper').hasClass('open'))
                    $('.header_wrapper').removeClass('background--light').removeClass('background--dark').addClass('background--' + slide_color);
            }
            opened = false;
            $('.logo_only_sticky .header_wrapper #logo').css('opacity', 0).css('visibility', 'hidden');

        }




    });

    $(window).resize(function() {
        $window_width = $(this).width();
        if ($window_width < 980) {
            $('body').removeClass('sticky_header');
            $('.header_wrapper').removeClass('open').css('position', position);
            opened = false;
        }
    });
}

/* ----------------------------- End Sticky Nav -------------------------- */



/* ----------------------------- Blog Infinite Scroll -------------------- */
function zerooneBlogInfiniteScroll() {
    "use strict";
    var container = '#posts_container';
    var behavior = '';
    if ($('#blogmasonry').length > 0) {
        container = '#blogmasonry .masonry';
        behavior = 'masonry_blog';
    } else
        container = '#posts_container';

    $(container).infinitescroll({

        navSelector: "div.p_pagination",
        // selector for the paged navigation (it will be hidden)
        nextSelector: "div.p_pagination a.next_link",
        // selector for the NEXT link (to page 2)
        itemSelector: "#posts_container article.post",
        // selector for all items you'll retrieve
        animate: true,

        loading: {
            img: '',
            msgText: ''
        },

        behavior: behavior
    });
    if ($('#blogmasonry').length > 0) {
        zeroone_blogmasonry();
    }


}
/* ----------------------------- End Blog Infinite Scroll ---------------- */

/* ----------------------------- Portfolio Infinite Scroll -------------------- */
function zeroonePortfolioInfiniteScroll() {
    "use strict";
    var container = '#portfolio-preview-items>.row';
    var behavior = '';


    $(container).infinitescroll({

        navSelector: "div.p_pagination",
        // selector for the paged navigation (it will be hidden)
        nextSelector: "div.p_pagination a.next_link",
        // selector for the NEXT link (to page 2)
        itemSelector: "#portfolio-preview-items .portfolio-item",
        // selector for all items you'll retrieve
        animate: true,

        loading: {
            img: '',
            msgText: ''
        },

        behavior: behavior
    });

    zeroonePortfolioPageIsotope();


}
/* ----------------------------- End Portfolio Infinite Scroll ---------------- */


function zerooneVideoPlayer() {

    'use strict';
    plyr.setup();
}

/* ----------------------------- Page transition --------------------------*/
function zeroonePageTransition() {
    "use strict";

    $(".animsition").animsition({
        inClass: $(this).data('animsition-in-class'),
        outClass: $(this).data('animsition-out-class'),
        inDuration: $(this).data('animsition-in-duration'),
        outDuration: $(this).data('animsition-out-duration'),
        linkElement: 'a:not([target="_blank"]):not([href^="#"]):not(.lightbox-gallery):not(.zoom)'



    });
}
/*------------------------------ Side menu Responsive Init ------------------------ */
$(window).on('load resize', function() {
    "use strict";
    $window_width = $(window).width();
    if ($window_width <= 979) {
        $("#snapcontent").addClass('snap-content');
    }
    if ($window_width > 979) {
        $("#snapcontent").removeClass('snap-content');
    }


    if ($(window).width() <= 979) {

        loadDependencies([s_gb.theme_js + 'snap.min.js'], function() {
            var snapper = new Snap({
                element: document.getElementById('snapcontent'),
                disable: 'right',
                maxPosition: 240,
            });

            var myToggleButton = document.getElementById('open-left');
            myToggleButton.addEventListener('click', function() {

                if (snapper.state().state == "left") {
                    snapper.close();
                } else {
                    snapper.open('left');
                }
            });
            $(".close-sidebar").on('click', function() {
                if (snapper.state().state == "left")
                    snapper.close();
            });
        });
    }
    $('.snap_left_content .menu-small ul li:not(.menu-item-has-children), .snap_left_content .menu-small ul li ul li').on('click', function() {
        return true;
    });

    $('.snap_left_content .menu-small > ul > li.menu-item-has-children > a').on('click', function() {

        $('.snap_left_content .menu-small > ul > li.menu-item-has-children > a').not($(this)).parent().find(".sub-menu").removeClass('open');
        //$('.snap_left_content .menu-small ul li.menu-item-has-children').not(this).removeClass('open');
        $(this).parent().find('.sub-menu').toggleClass('open');

        return false;
    });

});

/*------------------------------ Online Functions ------------------------ */
function zerooneOnlineFunctions() {
    "use strict";

    if ($('.sidebar_right #blogmasonry').hasClass('cols3'))
        $('.sidebar_right #blogmasonry').removeClass('cols3').addClass('cols2');

    if ($window_width <= 768) {

        $('.wpb_column.vc_col-sm-12').each(function() {
            var classList = $(this).attr('class').split(/\s+/);
            $(this).removeClass(classList[classList.length - 1]);
        });

    }
}


function zerooneSVGServices() {
    if ($('.services_medium .icon-svg').length > 0) {
        $('.services_medium .icon-svg').each(function() {
            var $this = $(this);

            loadDependencies([s_gb.theme_js + 'vivus.js'], function() {
                var link = $this.data('link');
                var color = $this.data('color')
                var id = $this.attr('id');

                new Vivus(id, {
                    duration: 50,
                    file: link,
                    onReady: function(mySVG) {
                        mySVG.el.setAttribute('stroke', color);
                    }
                });
            });
        });
    }

}

/*-----------------------Google map disable zoom on scroll----------------------*/
function zerooneDisableMapZoom() {
    "use strict";
    // Disable scroll zooming and bind back the click event
    var onMapMouseleaveHandler = function(event) {
        var that = $(this);

        that.on('click', onMapClickHandler);
        that.off('mouseleave', onMapMouseleaveHandler);
        that.find('iframe.googlemap').css("pointer-events", "none");
    }

    var onMapClickHandler = function(event) {
        var that = $(this);

        // Disable the click handler until the user leaves the map area
        that.off('click', onMapClickHandler);

        // Enable scrolling zoom
        that.find('iframe.googlemap').css("pointer-events", "auto");

        // Handle the mouse leave event
        that.on('mouseleave', onMapMouseleaveHandler);
    }

    // Enable map zooming with mouse scroll when the user clicks the map
    $('.row-google-map').on('click', onMapClickHandler);
}

/*------------------------------ In Grid portfolio filter ------------------------ */


function zeroonePortfolioInGrid() {
    "use strict";
    //$('#portfolio-preview-items .portfolio-item  img').on("load", function(){
    if ($('.page-template-portfolio .portfolio-item .filter-row').hasClass('in_grid')) {
        var height_filter = $('.portfolio-item:nth-child(2)').innerHeight();
        $('.filter-row.in_grid').css('height', height_filter - 1 + 'px');
        $('.filter-row.in_grid').closest('.portfolio-item').css('height', height_filter - 1 + 'px');
    }
    //});


}

/* ----------------------------- Portfolio Project Bar -------------------------- */

function zerooneProjectBar() {
    "use strict";
    setTimeout(function() {


        $('.content_portfolio .normal .grayscale, .content_portfolio .no_space .grayscale, .recent_portfolio .grayscale').find('.project').each(function() {

            var box_width = parseFloat($(this).prev().innerWidth());

            var project_box = box_width - 20;
            $(this).css('width', parseInt(project_box));
        });


        $('.content_portfolio .no_space .grayscale').find('.project').each(function() {

            var box_width = parseFloat($(this).prev().innerWidth());

            var project_box = box_width;
            $(this).css('width', parseInt(project_box));
        });

    }, 500);


}

function zerooneScrollToTop() {
    "use strict";
    $(window).scroll(function() {
        var top = $(this).scrollTop();
        if (top > 600) {
            $('.scrollup').css('display', 'block');
        } else {
            $('.scrollup').css('display', 'none');
        }
    });
}

function zeroone404() {
    "use strict";
    var height = $(window).height();
    $('.error404 section').css('height', height + 'px');

}

/* ----------------------------- SINGLE PORTFOLIO FLOATING----------------- */

function zeroone_headingWithLine() {
    "use strict";
    var $heading = $(".block_title.section_title.inner-square, .block_title.column_title.inner-inline_border_circle"),
        $window = $(window),
        offset = $heading.offset();
    var topPadding = 150;


    $heading.each(function() {
        var $thisheading = $(this);

        var offset = $thisheading.offset();
        $window.scroll(function() {
            if ($window.scrollTop() + 450 > offset.top) {
                $thisheading.find('.divider .line').addClass('appeared');
            }

        });

    });
}


function zerooneheader_7_transparent() {
    "use strict";
    var scr = $(window).width();
    if ($('#slider-fullwidth').length > 0) {

        //var $margin = $('.swiper-slide ').outerHeight();
        var $margin = scr;

        $('#slider-fullwidth').css('position', 'fixed');
        $('#slider-fullwidth').css('top', '0');


    } else

    if ($('.page_header_centered').length > 0 || $('.page_header_left').length > 0) {

        $('.header_page').css('position', 'fixed');
        $('.header_page').css('top', '0');

        var $margin = scr;
    }

    $('#content').css('margin-top', $margin);

    if ($('.header_wrapper.pos--left').length > 0) {
        var $margin_left = $('.header_wrapper').outerWidth();
        $('#content').css('margin-left', $margin_left);
        $('.footer_wrapper').css('margin-left', $margin_left);

        $('#content').css('width', scr - $margin_left);
        $('.footer_wrapper').css('width', scr - $margin_left);

        if ($('.header_page.normal').length > 0) {
            $('.header_page.normal').css('margin-left', $margin_left);
            $('.header_page.normal').css('width', scr - $margin_left);
        }
    }
    if ($('.header_wrapper.pos--right').length > 0) {
        var $margin_left = $('.header_wrapper').outerWidth();
        $('#content').css('margin-right', $margin_right);
        $('.footer_wrapper').css('margin-right', $margin_right);

        $('#content').css('width', scr - $margin_right);
        $('.footer_wrapper').css('width', scr - $margin_right);

        if ($('.header_page.normal').length > 0) {
            $('.header_page.normal').css('margin-right', $margin_right);
            $('.header_page.normal').css('width', scr - $margin_right);
        }
    }

    zerooneTestimonialCarousel();
    zerooneStaffCarousel();


}
/*--------------------zeroone Hoverex -------------------------------------*/

/*
 *  jQuery HoverEx Script
 *  by hkeyjun
 *   http://codecanyon.net/user/hkeyjun 
 */
;
(function($) {
    var HoverEx = {
        fn: {
            moveZoom: function(obj, e) {
                var h = obj.height(),
                    w = obj.width(),
                    t = e.pageY - obj.offset().top,
                    l = e.pageX - obj.offset().left;
                var $largeImg = obj.find("img");
                var dataZoom = obj.data("zoom");
                if (dataZoom && dataZoom != "auto") {
                    var zoomNum = parseFloat(dataZoom);
                    $largeImg.css({ "width": w * zoomNum + "px", "height": h * zoomNum + "px", "top": -t * (zoomNum - 1) + "px", "left": -l * (zoomNum - 1) + "px" });
                } else {
                    var zoomNum = $largeImg.width() / w;
                    $largeImg.css({ "top": -t * (zoomNum - 1) + "px", "left": -l * (zoomNum - 1) + "px" });
                }
            },
            changeZoom: function(obj, e, delta, deltaX, deltaY) {
                var $largeImg = obj.find("img");
                var currentZoom = obj.data("zoom");
                currentZoom = currentZoom == "auto" ? $largeImg.width() / obj.width() : parseFloat(currentZoom);
                var zoomStep = obj.data("zoomstep");
                zoomStep = zoomStep ? parseFloat(zoomStep) : 0.5;
                var zoomRange = obj.data("zoomrange");
                zoomRange = zoomRange ? zoomRange.split(",") : "1,4";
                var zoomMin = parseFloat(zoomRange[0]),
                    zoomMax = parseFloat(zoomRange[1]) > currentZoom ? parseFloat(zoomRange[1]) : currentZoom;
                var op = deltaY > 0 ? 1 : -1;
                var nextZoom = Math.round((currentZoom + zoomStep * op) * 10) / 10.0;
                if (nextZoom >= zoomMin && nextZoom <= zoomMax) {
                    obj.data("zoom", nextZoom);
                    HoverEx.fn.showZoomState(obj, nextZoom);
                    HoverEx.fn.moveZoom(obj, e);
                }

            },
            showZoomState: function(obj, state) {
                var $zoomState = obj.find(".he-zoomstate");
                if ($zoomState.length == 0) {
                    $zoomState = $('<span class="he-zoomstate">' + state + 'X</span>').appendTo(obj);
                }
                $zoomState.text(state + "X").stop(true, true).fadeIn(300).delay(200).fadeOut(300);
            },
            switchImg: function(slider, type) {
                var animation = slider.data("animate");
                animation = animation ? animation : "random";
                if (animation == "random") {
                    var animations = ["fadeIn", "fadeInLeft", "fadeInRight", "fadeInUp", "fadeInDown", "rotateIn", "rotateInLeft", "rotateInRight", "rotateInUp", "rotateInDown", "bounce", "bounceInLeft", "bounceInRight", "bounceInUp", "bounceInDown", "elasticInLeft", "elasticInRight", "elasticInUp", "elasticInDown", "zoomIn", "zoomInLeft", "zoomInRight", "zoomInUp", "zoomInDown", "jellyInLeft", "jellyInRight", "jellyInDown", "jellyInUp", "flipInLeft", "flipInRight", "flipInUp", "flipInDown", "flipInV", "flipInH"];
                    animation = animations[Math.floor(Math.random() * animations.length)];
                }
                var $imgs = slider.find("img");
                if ($imgs.length > 1) {
                    if (type > 0) {
                        $imgs.eq(0).attr("class", "a0").appendTo(slider);
                        $imgs.eq(1).attr("class", "a0 " + animation);
                    } else {
                        $imgs.eq($imgs.length - 1).attr("class", "a0 " + animation).prependTo(slider);
                        $imgs.eq(0).attr("class", "a0");
                    }
                }
            }
        }
    };

    $(function() {
        $(".he-wrap").live({
            mouseenter: function() {
                var $view = $(this).find(".he-view").addClass("he-view-show");
                $("[data-animate]", $view).each(function() {
                    var animate = $(this).data("animate");
                    $(this).addClass(animate);
                });
                $(this).find(".he-zoom").addClass("he-view-show");
            },
            mouseleave: function() {
                var $view = $(this).find(".he-view").removeClass("he-view-show");
                $("[data-animate]", $view).each(function() {
                    var animate = $(this).data("animate");
                    $(this).removeClass(animate);
                });
                $(this).find(".he-zoom").removeClass("he-view-show");
            },
            mousewheel: function(e, delta, deltaX, deltaY) {
                if ($(this).find(".he-sliders").length == 1) {
                    var $slider = $(this).find(".he-sliders");
                    var op = deltaY > 0 ? 1 : -1;
                    HoverEx.fn.switchImg($slider, op);
                    e.preventDefault();
                } else if ($(this).find(".he-zoom").length == 1) {
                    var $zoom = $(this).find(".he-zoom");
                    HoverEx.fn.changeZoom($zoom, e, delta, deltaX, deltaY);
                    e.preventDefault();
                }
            }
        });
        $(".he-zoom").live({
            mousemove: function(e) {
                HoverEx.fn.moveZoom($(this), e);
            }
        });
        $(".he-pre").live("click", function() {
            var $slider = $(this).parents(".he-wrap").find(".he-sliders");
            HoverEx.fn.switchImg($slider, -1);
        });
        $(".he-next").live("click", function() {
            var $slider = $(this).parents(".he-wrap").find(".he-sliders");
            HoverEx.fn.switchImg($slider, 1);
        });

    });
})(jQuery);

/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

    var types = ['DOMMouseScroll'];

    if ($.event.fixHooks) {
        for (var i = types.length; i;) {
            $.event.fixHooks[types[--i]] = $.event.mouseHooks;
        }
    }

    $.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) {
                for (var i = types.length; i;) {
                    this.addEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
        },

        teardown: function() {
            if (this.removeEventListener) {
                for (var i = types.length; i;) {
                    this.removeEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },

        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn);
        }
    });


    function handler(event) {
        var orgEvent = event || window.event,
            args = [].slice.call(arguments, 1),
            delta = 0,
            returnValue = true,
            deltaX = 0,
            deltaY = 0;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";

        // Old school scrollwheel delta
        if (orgEvent.wheelDelta) { delta = orgEvent.wheelDelta / 120; }
        if (orgEvent.detail) { delta = -orgEvent.detail / 3; }

        // New school multidimensional scroll (touchpads) deltas
        deltaY = delta;

        // Gecko
        if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaY = 0;
            deltaX = -1 * delta;
        }

        // Webkit
        if (orgEvent.wheelDeltaY !== undefined) { deltaY = orgEvent.wheelDeltaY / 120; }
        if (orgEvent.wheelDeltaX !== undefined) { deltaX = -1 * orgEvent.wheelDeltaX / 120; }

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

})(jQuery);

/*--------------------------------------------------------------------------------------------------------------------------*/