<?php
	/**
	 * @file
	 * jollyany's theme implementation to display a single Portfolio node.
	 */
	global $base_url; 
	$next = jollyany_pagination($node, 'n');
	$prev = jollyany_pagination($node, 'p');

	if ($next != NULL) { 
	  $next_url = url('node/' . $next, array('absolute' => TRUE));
	}

	if ($prev != NULL) { 
	  $prev_url = url('node/' . $prev, array('absolute' => TRUE));
	}
?>

<?php if (!$page) : ?>
	<div class="service_vertical_box">
		<a href="<?php print $node_url; ?>">
			<div class="service-icon">
				<i class="fa <?php print render($content['field_icon']); ?> fa-4x"></i>
			</div>
		</a>
		<h3><?php echo $title; ?></h3>
		<?php print $node->body['und'][0]['summary']; ?>
		<a href="<?php echo $node_url; ?>" class="readmore"><?php print t('Read More...'); ?></a>
	</div>
<?php else :?>
	<div class="row">
       <div class="blog-masonry">
            <div class="col-lg-12">
                <div class="blog-carousel">
                    <div class="blog-carousel-header">
                        <h1><?php echo $title; ?></h1>
                    </div>
					
					<?php if(theme_get_setting('showsocial')): ?>
					<div class="clearfix padding-bottom-20">
						<div class="social-2 f-left a2a_kit">
							<a class="a2a_dd" href="http://www.addtoany.com/share_save"><i class="fa fa-plus-square"></i></a>
							<a class="a2a_button_linkedin"><i class="fa fa-linkedin"></i></a>
							<a class="a2a_button_pinterest"><i class="fa fa-pinterest"></i></a>
							<a class="a2a_button_google_plus"><i class="fa fa-google-plus"></i></a>
							<a class="a2a_button_twitter"><i class="fa fa-twitter"></i></a>
							<a class="a2a_button_facebook"><i class="fa fa-facebook"></i></a>
						</div>
					</div>
					<?php endif; ?>
					
                    <div class="blog-carousel-desc">
                        <?php
							// Hide comments, tags, and links now so that we can render them later.
							hide($content['field_icon']);
							hide($content['links']);
							hide($content['comments']);
							print render($content);
						?>
                    </div>
                </div>
				
				<div class="clearfix"></div>
				<?php if($page && module_exists('prev_next')): ?>	
					<!--div class="next_prev text-center">
						<ul class="pager">
							<?php if(isset($prev_url)) : ?>
								<li class="previous">
									<a href="<?php echo $prev_url; ?>">← Older</a>
								</li>
							<?php endif; ?>
							<?php if(isset($next_url)) : ?>
								<li class="next">
									<a href="<?php echo $next_url; ?>">Newer →</a>
								</li>
							<?php endif; ?>
						</ul>
					</div-->
				<?php endif; ?>	
            </div>
		</div>
    </div>
<?php endif; ?>
