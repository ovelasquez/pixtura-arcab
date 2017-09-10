<div id="aboutslider" class="flexslider clearfix">
	<ul class="slides">
		<?php $i=1; foreach ($rows as $id => $row): ?>
			<?php print $row; ?>                                
		<?php $i++; endforeach; ?>
	</ul>
</div>
<div class="aboutslider-shadow">
    <span class="s1"></span>
</div>
