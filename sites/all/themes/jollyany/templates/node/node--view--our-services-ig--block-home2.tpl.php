
<div class="ch-item">	
    <div class="ch-info-wrap">
        <div class="ch-info">
            <div class="ch-info-front">
            	<?php 
				$icon_name = render($content['field_icon']);
				if (strpos($icon_name,"icon-")===0):				?>
                <i class="<?php print render($content['field_icon']); ?> icon-6x"></i>
                <?php else: ?>
                <i class="fa <?php print render($content['field_icon']); ?> fa-4x"></i>
                <?php endif;?>
                <h3><?php echo $title; ?></h3>
            </div>
            <div class="ch-info-back">
                <!--h3>RESULTS</h3-->
                <?php print $node->body['und'][0]['summary']; ?>
                <a href="<?php print $node_url; ?>" class="btn btn-primary bg-white">Ver más</a>
            </div>
        </div>
    </div>
</div>