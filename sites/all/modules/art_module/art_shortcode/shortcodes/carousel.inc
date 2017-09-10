<?php

/**
 * Definition of Carousel Shortcode
 */

/**
 * Implements hook_shortcode_info
 */
function _carousel_shortcode_info(&$shortcodes) {
	$shortcodes['carousel'] = array(
		'title' => t('Carousel'),
		'description' => t('Create a Carousel of items with captions'),
		'process callback' => 'art_shortcode_carousel',
		'tips callback' => 'art_shortcode_carousel_tip',
	);
	
	$shortcodes['carousel_item'] = array(
		'title' => t('Carousel Item'),
		'description' => t('Create a carousel item to go inside a carousel'),
		'process callback' => 'art_shortcode_carousel_item',
		'tips callback' => 'art_shortcode_carousel_item_tip',
	);
	
	$shortcodes['caption'] = array(
		'title' => t('Caption'),
		'description' => t('Create a carousel item caption'),
		'process callback' => 'art_shortcode_caption',
		'tips callback' => 'art_shortcode_caption_tip',
	);
	
	return $shortcodes;
}

/**
 * Carousel Content
 */
function art_shortcode_carousel($attrs, $text) {
	$attrs = shortcode_attrs(array(
			'id' => '',
			'class' => ''
		),
		$attrs
	);
	
	$class = shortcode_add_class($attrs['class'],'owl-carousel');
	return theme('carousel',array('id' => $attrs['id'],'class' => $class,'content' => $text));
}

/**
 * Carousel Item
 */
function art_shortcode_carousel_item($attrs, $text) {
	$attrs = shortcode_attrs(array(
			'class' => '',
		),
		$attrs
	);
	
	$class = shortcode_add_class($attrs['class'],'item');
	return theme('carousel_item',array('class' => $class,'content' => $text));
}

/**
 * Carousel Caption
 */
function art_shortcode_caption($attrs, $text) {
	$attrs = shortcode_attrs(array(
			'class' => '',
		),
		$attrs
	);
	
	$class = shortcode_add_class($attrs['class'],'carousel-caption');
	return theme('caption',array('class' => $class,'content' => $text));
}


/**
 * Carousel theme
 */
function _carousel_theme(&$themes) {
	$themes['carousel'] = array(
		'variables' => array(
			'id' => '',
			'class' => '',
			'content' => ''
		)
	);
	
	$themes['carousel_item'] = array(
		'variables' => array(
			'class' => 'item',
			'content' => ''
		)
	);
	
	$themes['caption'] = array(
		'variables' => array(
			'class' => '',
			'content' => ''
		)
	);
	
	return $themes;
}

/**
 * Theme Carousel
 */
function theme_carousel($vars) {
	$id = $vars['id'];
	$class = $vars['class'];
	$content = $vars['content'];
	
	$output = '<div id="'.$id.'" class="flexslider">';
	$output .= '<ul class="slides">';
	$output .= $content;
	$output .= '</ul>';
	$output .= '</div>';
	
	return $output;
}

/**
 * Theme Carousel Item
 */
function theme_carousel_item($vars) {
	$class = $vars['class'];
	$content = $vars['content'];
	
	$output = '<li class="'.$class.'">';
	$output .= $content;
	$output .= '</li>';

	return $output;
}

/**
 * Theme Carousel caption
 */
function theme_caption($vars) {
	$class = $vars['class'];
	$content = $vars['content'];
	
	$output = '<div class="'.$class.'">';
	$output .= $content;
	$output .= '</div>';

	return $output;
}