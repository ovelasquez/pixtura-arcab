<?php 
	global $image_default; 
	if(isset($row->field_field_image[0])) {
		$image = file_create_url($row->field_field_image[0]['rendered']['#item']['uri']);
	} else {
		$image = $image_default;
	}
?>
<li>
    <a href="<?php print base_path().drupal_get_path_alias("node/{$row->nid}") ?>">
		<img width="70" height="70" src="<?php print $image;?>" alt="" /><?php print $row->node_title; ?>
	</a>
    <a class="readmore" href="<?php print base_path().drupal_get_path_alias("node/{$row->nid}") ?>"><?php print format_date($row->node_created, 'custom', 'F d, Y'); ?></a>
	<span><i class="fa fa-comment"></i> <a href="<?php print base_path().drupal_get_path_alias("node/{$row->nid}") ?>#comments"><?php print $fields['comment_count']->content; ?> Comment<?php if ($fields['comment_count']->content> 0 && $fields['comment_count']->content != "1" ) { echo "s"; } ?></a></span>
</li>