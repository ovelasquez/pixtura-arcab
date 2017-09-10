<div id="<?php print $block_html_id; ?>" class="widget <?php print $classes; ?>" <?php print $attributes; ?>>
	<?php print render($title_prefix); ?>
	<?php if($block->subject): ?>
		<div class="title">
			<h2><?php print $block->subject ?></h2>
		</div>
	<?php endif; ?> 
	<?php print render($title_suffix); ?>
	   
	<?php print $content ?>
</div>
