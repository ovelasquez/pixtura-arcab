<?php

/**
 * Definition of Accordion Shortcode
 */

/**
 * Implements hook_shortcode_info
 */

global $accordion_item;
function _accordion_shortcode_info(&$shortcodes) {
	$shortcodes['accordion'] = array(
		'title' => t('Accordion'),
		'description' => t('Create an Accordion'),
		'process callback' => 'art_shortcode_accordion',
		'tips callback' => 'art_shortcode_accordion_tip',
	);
	
	$shortcodes['accordion_item'] = array(
		'title' => t('Accordion Item'),
		'description' => t('Create an Accordion Item'),
		'process callback' => 'art_shortcode_accordion_item',
		'tips callback' => 'art_shortcode_accordion_item_tip',
	);
	
	return $shortcodes;
}

/**
 * Accordion Content
 */
function art_shortcode_accordion($attrs, $text) {
	$attrs = shortcode_attrs(array(
			'id' => 'accordion2',
			'class' => '',
		),
		$attrs
	);
	
	$class = shortcode_add_class($attrs['class'],'clearfix');
	return theme('accordion',array('id' => $attrs['id'],'class' => $class,'content' => $text));
}

/**
 * Accordion Item Content
 */
function art_shortcode_accordion_item($attrs,$text) {
	$attrs = shortcode_attrs(array(
			'title' => '',
			'class' => '',
			'icon' => '',
		),
		$attrs
	);
	
	$class = shortcode_add_class($attrs['class'],'accordion-toggle');
	return theme('accordion_item',array('title' => $attrs['title'],'class' => $class,'content' => $text,'icon'=>$attrs['icon']));
}

/**
 * Accordion theme
 */
function _accordion_theme(&$themes) {
	$themes['accordion'] = array(
		'variables' => array(
			'id' => '',
			'class' => '',
			'content' => ''
		)
	);
	
	$themes['accordion_item'] = array(
		'variables' => array(
			'title' => '',
			'class' => '',
			'content' => '',
			'icon' =>'',
		)
	);
	
	return $themes;
}

/**
 * Theme accordion
 */
function theme_accordion($vars) {
	global $accordion_item;
	$accordion_item = 0;
	$id = $vars['id'];
	$class = $vars['class'];
	$content = $vars['content'];
	return '<div id="'.$id.'" class="panel-group">'.str_replace('@accordion_id',$id,$content).'</div>';
}

/**
 * Theme Accordion Item
 */
function theme_accordion_item($vars) {
	global $accordion_item;
	$id = drupal_html_id('collapse');
	$title = $vars['title'];
	$class = $vars['class'];
	$content = $vars['content'];
	$icon = $vars['icon'];
	$icon_html = "";
	if($icon){
		$icon_html = "<i class=\"fa fa-{$icon}\"></i> ";
	}
	$output = '<div class="panel panel-default">';
	if($accordion_item == 0){
		$output .= '<div class="panel-heading active">
			<h4 class="panel-title">
                <a class="accordion-toggle" data-toggle="collapse" data-parent="#@accordion_id" href="#'.$id.'">'. $icon_html . $title .'</a>
            </h4>
        </div>';
        $output .= '<div id="'.$id.'" class="panel-collapse collapse in">
            <div class="panel-body">
                <p>'.$content.'</p>
            </div>
        </div>';
		$accordion_item ++;
	} else {
		$output .= '<div class="panel-heading">
			<h4 class="panel-title">
                <a class="accordion-toggle" data-toggle="collapse" data-parent="#@accordion_id" href="#'.$id.'">'. $icon_html . $title .'</a>
            </h4>
        </div>';
        $output .= '<div id="'.$id.'" class="panel-collapse collapse">
            <div class="panel-body">
                <p>'.$content.'</p>
            </div>
        </div>';
	}
	$output .= '</div>';
	
	return $output;
}