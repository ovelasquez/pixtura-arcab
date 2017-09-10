<?php

/**
 * Definition of Testimonial Carousel Shortcode
 */

/**
 * Implements hook_shortcode_info
 */
function _testimonial_shortcode_info(&$shortcodes) {
	$shortcodes['testimonial'] = array(
		'title' => t('Testimonial Carousel'),
		'description' => t('Create a Testimonial Carousel of items'),
		'process callback' => 'art_shortcode_testimonial',
		'tips callback' => 'art_shortcode_testimonial_tip',
	);
	
	$shortcodes['testimonial_item'] = array(
		'title' => t('Testimonial Carousel Item'),
		'description' => t('Create a testimonial item to go inside a testimonial'),
		'process callback' => 'art_shortcode_testimonial_item',
		'tips callback' => 'art_shortcode_testimonial_item_tip',
	);
	
	return $shortcodes;
}

/**
 * Testimonial Carousel Content
 */
function art_shortcode_testimonial($attrs, $text) {
	$attrs = shortcode_attrs(array(
			'id' => '',
			'class' => ''
		),
		$attrs
	);
	
	$class = shortcode_add_class($attrs['class'],'owl-carousel');
	return theme('testimonial',array('id' => $attrs['id'],'class' => $class,'content' => $text));
}

/**
 * Testimonial Carousel Item
 */
function art_shortcode_testimonial_item($attrs, $text) {
	$attrs = shortcode_attrs(array(
			'class' => '',
		),
		$attrs
	);
	
	$class = shortcode_add_class($attrs['class'],'item');
	return theme('testimonial_item',array('class' => $class,'content' => $text));
}


/**
 * Testimonial Carousel theme
 */
function _testimonial_theme(&$themes) {
	$themes['testimonial'] = array(
		'variables' => array(
			'id' => '',
			'class' => '',
			'content' => ''
		)
	);
	
	$themes['testimonial_item'] = array(
		'variables' => array(
			'class' => 'item',
			'content' => ''
		)
	);
	
	return $themes;
}

/**
 * Theme Testimonial Carousel
 */
function theme_testimonial($vars) {
	$id = $vars['id'];
	$class = $vars['class'];
	$content = $vars['content'];
	
	$output = '<div id="'.$id.'" class="'.$class.'">';
	$output .= $content;
	$output .= '</div>';
	
	return $output;
}

/**
 * Theme Testimonial Carousel Item
 */
function theme_testimonial_item($vars) {
	$class = $vars['class'];
	$content = $vars['content'];
	$output = $content;

	return $output;
}

