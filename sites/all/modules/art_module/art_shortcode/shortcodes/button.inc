<?php

/**
 * Definition of Button Shortcode
 */

/**
 * Implements hook_shortcode_info
 */
function _button_shortcode_info(&$shortcodes) {
	$shortcodes['button'] = array(
		'title' => t('button'),
		'description' => t('Create Button'),
		'process callback' => 'art_shortcode_button',
		'tips callback' => 'art_shortcode_button_tip',
	);
	return $shortcodes;
}

/**
 * Button Content
 */
function art_shortcode_button($attrs, $text) {
	$attrs = shortcode_attrs(array(
			'type' => 'primary',
			'size' => ''
		),
		$attrs
	);
	
	$size = '';
	$type = '';
	if($attrs['size']) { $size = 'btn-'.$attrs['size']; }
	if($attrs['type']) { $type = 'btn-'.$attrs['type']; }
	return '<button type="button" class="btn '.$type.' '.$size.'">'.$text.'</button>';
}