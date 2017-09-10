<section id="one-parallax-6" class="parallax" data-stellar-background-ratio="0.6" data-stellar-vertical-offset="20">
	<div class="overlay">
    	<div class="container">
			<div class="testimonial-widget">
				<div id="owl-testimonial" class="owl-carousel">
					<?php $i=1; foreach ($rows as $id => $row): ?>
						<?php print $row; ?>                                
					<?php $i++; endforeach; ?>
				</div>
			</div>             
        </div>
    </div>
</section>