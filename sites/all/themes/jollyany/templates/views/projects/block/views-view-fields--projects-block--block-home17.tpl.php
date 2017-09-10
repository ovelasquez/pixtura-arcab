<?php 
	global $image_default; 
	if(isset($row->field_field_image[0])) {
		$image = file_create_url($row->field_field_image[0]['rendered']['#item']['uri']);
	} else {
		$image = $image_default;
	}
?>
<a class="rsImg" data-rsbigimg="<?php print $image;?>" href="<?php print $image;?>" data-rsw="835" data-rsh="615">
	<img alt="" class="rsTmb" src="<?php print $image;?>" height="75" width="96">
</a>
