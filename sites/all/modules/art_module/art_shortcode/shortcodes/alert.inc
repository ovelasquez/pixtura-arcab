<?php

/**
 * Definition of Alert Shortcode
 */

/**
 * Implements hook_shortcode_info
 */
function _alert_shortcode_info(&$shortcodes) {
	$shortcodes['alert'] = array(
		'title' => t('Alert'),
		'description' => t('Create Alert Messages'),
		'process callback' => 'art_shortcode_alert',
		'tips callback' => 'art_shortcode_alert_tip',
	);
	return $shortcodes;
}

/**
 * Icon Content
 */
function art_shortcode_alert($attrs, $text) {
	$attrs = shortcode_attrs(array(
			'type' => '',
			'close' => '',
		),
		$attrs
	);
	
	return theme('alert',array('type' => $attrs['type'],'close' => $attrs['close'],'content' => $text));
}

/**
 * Icon theme
 */
function _alert_theme(&$themes) {
	$themes['alert'] = array(
		'variables' => array(
			'type' => '',
			'close' => '',
			'content' => ''
		)
	);
	
	return $themes;
}

/**
 * Theme icon
 */
function theme_alert($vars) {
	$type = $vars['type'];
	$content = $vars['content'];
	$output = '<div class="alert alert-'.$type.'">';
	if($vars['close']) {
		$output .= '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>';
	}
	$output .= $content;
	$output .= '</div>';
	return $output;
}