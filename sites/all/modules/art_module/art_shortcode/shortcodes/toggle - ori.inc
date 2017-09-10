<?php

/**
 * Definition of Toggle Shortcode
 */

/**
 * Implements hook_shortcode_info
 */

global $toggle_item;
function _toggle_shortcode_info(&$shortcodes) {
	$shortcodes['toggle'] = array(
		'title' => t('Toggle'),
		'description' => t('Create an Toggle'),
		'process callback' => 'art_shortcode_toggle',
		'tips callback' => 'art_shortcode_toggle_tip',
	);
	
	$shortcodes['toggle_item'] = array(
		'title' => t('Toggle Item'),
		'description' => t('Create an Toggle Item'),
		'process callback' => 'art_shortcode_toggle_item',
		'tips callback' => 'art_shortcode_toggle_item_tip',
	);
	
	return $shortcodes;
}

/**
 * Toggle Content
 */
function art_shortcode_toggle($attrs, $text) {
	$attrs = shortcode_attrs(array(
			'id' => 'accordion2',
			'class' => '',
		),
		$attrs
	);
	
	$class = shortcode_add_class($attrs['class'],'clearfix');
	return theme('toggle',array('id' => $attrs['id'],'class' => $class,'content' => $text));
}

/**
 * Toggle Item Content
 */
function art_shortcode_toggle_item($attrs,$text) {
	$attrs = shortcode_attrs(array(
			'title' => '',
			'class' => '',
			'icon' => '',
		),
		$attrs
	);
	
	$class = shortcode_add_class($attrs['class'],'accordion-toggle');
	return theme('toggle_item',array('title' => $attrs['title'],'class' => $class,'content' => $text,'icon'=>$attrs['icon']));
}

/**
 * Toggle theme
 */
function _toggle_theme(&$themes) {
	$themes['toggle'] = array(
		'variables' => array(
			'id' => '',
			'class' => '',
			'content' => ''
		)
	);
	
	$themes['toggle_item'] = array(
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
 * Theme toggle
 */
function theme_toggle($vars) {
	global $toggle_item;
	$toggle_item = 0;
	$id = $vars['id'];
	$class = $vars['class'];
	$content = $vars['content'];
	return '<div id="'.$id.'" class="accordion">'.str_replace('@toggle_id',$id,$content).'</div>';
}

/**
 * Theme Toggle Item
 */
function theme_toggle_item($vars) {
	global $toggle_item;
	$id = drupal_html_id('collapse');
	$title = $vars['title'];
	$class = $vars['class'];
	$content = $vars['content'];
	$icon = $vars['icon'];
	$icon_html = "";
	if($icon){
		$icon_html = "<i class=\"fa fa-{$icon}\"></i> ";
	}
	$output = '<div class="accordion-group">';
	if($toggle_item == 0){
		$output .= '<div class="accordion-heading active">
			<a class="accordion-toggle" data-toggle="collapse" data-parent="#@toggle_id" href="#'.$id.'">
               <em class="fa fa-minus icon-fixed-width"></em>'. $icon_html . $title .'
            </a>
        </div>';
        $output .= '<div id="'.$id.'" class="accordion-body collapse in">
            <div class="accordion-inner">
                <p>'.$content.'</p>
            </div>
        </div>';
		$toggle_item ++;
	} else {
		$output .= '<div class="accordion-heading">
			<a class="accordion-toggle" data-toggle="collapse" data-parent="#@toggle_id" href="#'.$id.'">
               <em class="fa fa-plus icon-fixed-width"></em>'. $icon_html . $title .'
            </a>
        </div>';
        $output .= '<div id="'.$id.'" class="accordion-body collapse">
            <div class="accordion-inner">
                <p>'.$content.'</p>
            </div>
        </div>';
	}
	$output .= '</div>';
	
	return $output;
}