<?php

/**
 * Definition of Services Carousel Shortcode
 */

/**
 * Implements hook_shortcode_info
 */
function _services_shortcode_info(&$shortcodes) {
	$shortcodes['services'] = array(
		'title' => t('Services Carousel'),
		'description' => t('Create a Services Carousel of items'),
		'process callback' => 'art_shortcode_services',
		'tips callback' => 'art_shortcode_services_tip',
	);
	
	$shortcodes['services_item'] = array(
		'title' => t('Services Carousel Item'),
		'description' => t('Create a services item to go inside a services'),
		'process callback' => 'art_shortcode_services_item',
		'tips callback' => 'art_shortcode_services_item_tip',
	);
	
	return $shortcodes;
}

/**
 * Services Carousel Content
 */
function art_shortcode_services($attrs, $text) {
	$attrs = shortcode_attrs(array(
			'id' => '',
			'class' => ''
		),
		$attrs
	);
	
	$class = shortcode_add_class($attrs['class'],'owl-carousel');
	return theme('services',array('id' => $attrs['id'],'class' => $class,'content' => $text));
}

/**
 * Services Carousel Item
 */
function art_shortcode_services_item($attrs, $text) {
	$attrs = shortcode_attrs(array(
			'class' => '',
		),
		$attrs
	);
	
	$class = shortcode_add_class($attrs['class'],'item');
	return theme('services_item',array('class' => $class,'content' => $text));
}


/**
 * Services Carousel theme
 */
function _services_theme(&$themes) {
	$themes['services'] = array(
		'variables' => array(
			'id' => '',
			'class' => '',
			'content' => ''
		)
	);
	
	$themes['services_item'] = array(
		'variables' => array(
			'class' => 'item',
			'content' => ''
		)
	);
	
	return $themes;
}

/**
 * Theme Services Carousel
 */
function theme_services($vars) {
	$id = $vars['id'];
	$class = $vars['class'];
	$content = $vars['content'];
	
	$output = '<div id="'.$id.'" class="'.$class.'">';
	$output .= $content;
	$output .= '</div>';
	
	return $output;
}

/**
 * Theme Services Carousel Item
 */
function theme_services_item($vars) {
	$class = $vars['class'];
	$content = $vars['content'];
	
	$output = '<div class="'.$class.'">';
	$output .= $content;
	$output .= '</div>';

	return $output;
}

