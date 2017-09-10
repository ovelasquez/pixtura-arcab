<?php
	$category = strtolower(preg_replace('/\s/', '', $fields['field_category']->content));

	global $image_default; 
	if(isset($row->field_field_image[0])) {
		$image = file_create_url($row->field_field_image[0]['rendered']['#item']['uri']);
	} else {
		$image = $image_default;
	}
?>
<div class="item entry item-h2 <?php echo strip_tags(str_replace(',', ' ', $category)); ?>">
    <a href="<?php print base_path().drupal_get_path_alias("node/{$row->nid}") ?>"><img src="<?php print $image; ?>" alt=""></a>
    <div class="magnifier">
        <div class="buttons">
            <a class="st btn btn-default" rel="bookmark" href="<?php print base_path().drupal_get_path_alias("node/{$row->nid}") ?>"><?php print theme_get_setting('project_text_button'); ?></a>
            <h3><?php print $row->node_title; ?></h3>
        </div>
    </div>
</div>