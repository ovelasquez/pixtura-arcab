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
		<img width="81" height="69" class="img-rounded" src="<?php print $image; ?>" alt="">
	</a>
</li>