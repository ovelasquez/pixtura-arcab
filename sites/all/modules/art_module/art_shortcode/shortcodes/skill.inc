<?php

/**
 * Definition of Skill Shortcode
 */

/**
 * Implements hook_shortcode_info
 */
function _skill_shortcode_info(&$shortcodes) {
	$shortcodes['skill'] = array(
		'title' => t('Skill'),
		'description' => t('Create a Skill of items'),
		'process callback' => 'art_shortcode_skill',
		'tips callback' => 'art_shortcode_skill_tip',
	);
	
	$shortcodes['skill_item'] = array(
		'title' => t('Skill Item'),
		'description' => t('Create a skill item to go inside a skill'),
		'process callback' => 'art_shortcode_skill_item',
		'tips callback' => 'art_shortcode_skill_item_tip',
	);
	
	return $shortcodes;
}

/**
 * Skill Content
 */
function art_shortcode_skill($attrs, $text) {
	$attrs = shortcode_attrs(array(
			'id' => 'skills',
			'class' => 'skills_bar'
		),
		$attrs
	);
	
	$class = shortcode_add_class($attrs['class'],'skills_bar');
	return theme('skill',array('id' => $attrs['id'],'class' => $class,'content' => $text));
}

/**
 * Skill Item
 */
function art_shortcode_skill_item($attrs, $text) {
	$attrs = shortcode_attrs(array(
			'class' => 'progress-bar',
			'percent' => '0',
		),
		$attrs
	);
	
	$class = shortcode_add_class($attrs['class'],'progress-bar');
	return theme('skill_item',array('class' => $class,'percent' => $attrs['percent'],'content' => $text));
}


/**
 * Skill theme
 */
function _skill_theme(&$themes) {
	$themes['skill'] = array(
		'variables' => array(
			'id' => 'skills',
			'class' => 'skills_bar',
			'content' => ''
		)
	);
	
	$themes['skill_item'] = array(
		'variables' => array(
			'class' => 'progress-bar',
			'percent' => '0',
			'content' => ''
		)
	);
	
	return $themes;
}

/**
 * Theme Skill
 */
function theme_skill($vars) {
	$id = $vars['id'];
	$class = $vars['class'];
	$content = $vars['content'];
	
	$output = '<div id="'.$id.'" class="'.$class.'">';
	$output .= $content;
	$output .= '</div>';
	
	return $output;
}

/**
 * Theme Skill Item
 */
function theme_skill_item($vars) {
	$class = $vars['class'];
	$percent = $vars['percent'];
	$content = $vars['content'];
	
	$output = '<small>'.$content.'</small>';
    $output .= '<div class="progress wow slideInLeft">
        <div class="'.$class.'" role="progressbar" aria-valuenow="'.$percent.'" aria-valuemin="0" aria-valuemax="100" style="width: '.$percent.'%;">
        <span class="skill_count">'.$percent.'%</span>
        </div>
    </div>';

	return $output;
}
