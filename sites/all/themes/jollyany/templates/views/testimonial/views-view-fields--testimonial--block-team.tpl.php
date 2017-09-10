<?php 
	global $image_default; 
	if(isset($row->field_field_image[0])) {
		$image = file_create_url($row->field_field_image[0]['rendered']['#item']['uri']);
	} else {
		$image = $image_default;
	}
?>
<div class="entry">
    <img class="img-responsive" src="<?php print $image;?>" alt="">
</div>
<h3><?php echo $fields['field_client']->content; ?> <span>|</span> <small><?php echo $fields['field_company']->content; ?></small></h3>
<?php echo $fields['body']->content; ?>
