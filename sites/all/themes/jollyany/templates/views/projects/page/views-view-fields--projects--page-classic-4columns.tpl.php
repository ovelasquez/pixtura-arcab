<?php
	$category = strtolower(preg_replace('/\s/', '', $fields['field_category']->content));
	global $image_default; 
	$image = $image_default; 
	if(isset($row->field_field_image[0])) {
		$image = file_create_url($row->field_field_image[0]['rendered']['#item']['uri']);
	}
?>

<div class="col-lg-3 col-sm-6 col-md-3 col-xs-12 <?php echo strip_tags(str_replace(',', ' ', $category)); ?>">
    <div class="portfolio_item">
        <div class="entry">
            <img src="<?php echo $image; ?>" alt="" class="img-responsive">
            <div class="magnifier">
                <div class="buttons">
                    <a class="st btn btn-default" rel="bookmark" href="<?php print base_path().drupal_get_path_alias("node/{$row->nid}") ?>"><?php print theme_get_setting('project_text_button'); ?></a>
                    <h3><?php print $row->node_title; ?></h3>
                </div>
            </div>
        </div>
    </div>
</div>