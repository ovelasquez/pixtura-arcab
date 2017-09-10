	(function ($) {
        var $container = $('.masonry_wrapper'),
            colWidth = function () {
                var w = $container.width(), 
                    columnNum = 1,
                    columnWidth = 0;
                if (w > 1200) {
                    columnNum  = 5;
                } else if (w > 900) {
                    columnNum  = 4;
                } else if (w > 600) {
                    columnNum  = 3;
                } else if (w > 300) {
                    columnNum  = 2;
                }
                columnWidth = Math.floor(w/columnNum);
                $container.find('.item').each(function() {
                    var $item = $(this),
                        multiplier_w = $item.attr('class').match(/item-w(\d)/),
                        multiplier_h = $item.attr('class').match(/item-h(\d)/),
                        width = multiplier_w ? columnWidth*multiplier_w[1]-4 : columnWidth-4,
                        height = multiplier_h ? columnWidth*multiplier_h[1]*0.5-4 : columnWidth*0.5-4;
                    $item.css({
                        width: width,
                        height: height
                    });
                });
                return columnWidth;
            }
                        
            function refreshWaypoints() {
                setTimeout(function() {
                }, 1000);   
            }
                        
            $('nav.portfolio-filter ul a').on('click', function() {
                var selector = $(this).attr('data-filter');
                $container.isotope({ filter: selector }, refreshWaypoints());
                $('nav.portfolio-filter ul a').removeClass('active');
                $(this).addClass('active');
                return false;
            });
                
            function setPortfolio() { 
                setColumns();
                $container.isotope('reLayout');
            }
    
            isotope = function () {
                $container.isotope({
                    resizable: true,
                    itemSelector: '.item',
                    masonry: {
                        columnWidth: colWidth(),
                        gutterWidth: 0
                    }
                });
            };
        isotope();
        $(window).smartresize(isotope);
    }(jQuery));
	
// Portfolio
(function($) {
"use strict";
	var $container = $('#blog-masonry'),
		$items = $container.find('.blog-carousel'),
		portfolioLayout = 'masonry';

	if( $container.hasClass('portfolio-centered') ) {
		portfolioLayout = 'masonry';
	}
		
	$container.isotope({
		filter: '*',
		animationEngine: 'best-available',
		layoutMode: portfolioLayout,
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		},
		masonry: {
			
		}
	}, refreshWaypoints());

	function refreshWaypoints() {
		setTimeout(function() {
		}, 1000);   
	}

	/*function setColumns() {
		var winWidth = $(window).width(), 
			columnNumber = getColumnNumber(), 
			itemWidth = Math.floor(winWidth / columnNumber);
		
		$container.find('.blog-columns').each(function() { 
			$(this).css( { 
				width : itemWidth + 'px' 
			});
		});
	}*/

	function setPortfolio() { 
		//setColumns();
		$container.isotope('reLayout');
	}
	
	$container.imagesLoaded(function () { 
		setPortfolio();
	});

	$(window).on('resize', function () { 
		setPortfolio();          
	});
})(jQuery);
