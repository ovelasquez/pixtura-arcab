<?php
	/**
	 * @file
	 * jollyany's theme implementation to display a single Portfolio node.
	 */
	global $base_url; 
	global $image_default; 
	
	// Grabs the firsts image path and sets $imagePath.
	$imagePath = $image_default;
	if(isset($node->field_image['und'])) {
		$imagePath = file_create_url($node->field_image['und'][0]['uri']); 
	}
	
	$next = jollyany_pagination($node, 'n');
	$prev = jollyany_pagination($node, 'p');

	if ($next != NULL) { 
	  $next_url = url('node/' . $next, array('absolute' => TRUE));
	}

	if ($prev != NULL) { 
	  $prev_url = url('node/' . $prev, array('absolute' => TRUE));
	}

	$image_slide = "";

	if ($items = field_get_items('node', $node, 'field_gallery')) {
	  if (count($items) == 1) {
		$image_slide = 'false';
	  }
	  elseif (count($items) > 1) {
		$image_slide = 'true';
	  }
	}

	$img_count = 0;
	$counter = count($items);
	
	$termid = arg(2);
?>

<?php if (!$page) : ?>
	<?php if( !empty($termid) ) : ?>
		<div class="col-lg-4">
	<?php endif; ?>
		<div class="portfolio_item">
			<div class="entry">
				<img src="<?php echo $imagePath; ?>" alt="" class="img-responsive">
				<div class="magnifier">
					<div class="buttons">
						<a class="st btn btn-default" rel="bookmark" href="<?php echo $node_url; ?>"><?php print theme_get_setting('project_text_button'); ?></a>
						<h3><?php print $title; ?></h3>
					</div>
				</div>
			</div>
		</div>
	<?php if( !empty($termid) ) : ?>
		</div>
	<?php endif; ?>
<?php else :?>
	<div class="row">
	<?php if(isset($node->field_layout['und']) && $node->field_layout['und'][0]['taxonomy_term']->name == 'Sidebar') :?>
			<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 single-portfolio">
				<div class="col-sm-7 padding-left-0">
					<?php if(isset($node->field_video['und']) && !empty($node->field_video['und'][0]['value'])) :?>
						<div class="portfolio_item">
							<div class="entry">
								<?php print $node->field_video['und'][0]['value']; ?>
								<div class="post-type">
									<i class="fa fa-play"></i>
								</div>
							</div>
						</div>
					<?php elseif(isset($node->field_audio['und']) && !empty($node->field_audio['und'][0]['value'])) :?>
						<div class="portfolio_item">
							<div class="entry">
								<?php print $node->field_audio['und'][0]['value']; ?>
								<div class="post-type">
									<i class="fa fa-music"></i>
								</div>
							</div>
						</div>
					<?php elseif($image_slide != '') : ?>
						<div id="aboutslider" class="flexslider clearfix">
							<ul class="slides">
								<?php while ($img_count < $counter) { ?>
									<li><img src="<?php echo file_create_url($node->field_gallery['und'][$img_count]['uri']); ?>" class="img-responsive" alt=""></li>
								<?php $img_count++; } ?>	
							</ul>
						</div>
						<div class="aboutslider-shadow">
							<span class="s1"></span>
						</div>
					<?php else :?>
						<div class="portfolio_item">
							<div class="entry">
								<img src="<?php echo $imagePath; ?>" alt="" class="img-responsive">
								<div class="magnifier">
									<div class="buttons">
										<a href="<?php echo $imagePath; ?>" class="sf" title="" data-gal="prettyPhoto[product-gallery]"><span class="fa fa-search"></span></a>
										<a class="st" rel="bookmark" target="_blank" href="http://themeforest.net/user/ArrowHiTech"><span class="fa fa-heart"></span></a>
										<a class="sg" rel="bookmark" target="_blank" href="http://themeforest.net/item/jollyany-corporate-multi-purpose-drupal-theme/8566351"><span class="fa fa-eye"></span></a>
									</div>
								</div>
							</div>
						</div>
					<?php endif; ?>
				</div>
				<div class="col-sm-5 padding-right-0">
					<div class="title">
						<h2><?php echo $title; ?></h2>
					</div>

					<?php
						// Hide comments, tags, and links now so that we can render them later.
						hide($content['field_live_demo']);
						hide($content['field_tags']);
						hide($content['field_category']);
						hide($content['field_skill']);
						hide($content['field_image']);
						hide($content['field_gallery']);
						hide($content['field_audio']);
						hide($content['field_video']);
						hide($content['field_layout']);
						hide($content['links']);
						hide($content['comments']);
						print render($content);
					?>
					<?php if(theme_get_setting('showsocial')): ?>
					<div class="clearfix">
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
					<div class="product_details">
						<h3><?php print t('Project Details'); ?></h3>
						<ul>
                            <li><strong><?php print t('Customer'); ?>:</strong> <?php print strip_tags($name); ?></li>
							<?php if(isset($node->field_live_demo['und'])) : ?>
								<li><strong><?php print t('Live demo'); ?>:</strong> <a href="<?php print $node->field_live_demo['und'][0]['value']; ?>"><?php print $node->field_live_demo['und'][0]['value']; ?></a></li>
							<?php endif; ?>
							<?php if(isset($node->field_category['und'])) : ?>
								<li><strong><?php print t('Category'); ?>:</strong> <?php print jollyany_format_comma_field('field_category', $node); ?></li>
							<?php endif; ?>
							<?php if(isset($node->field_skill['und'])) : ?>
								<li><strong><?php print t('Skill'); ?>:</strong> <?php print jollyany_format_comma_field('field_skill', $node); ?></li>
							<?php endif; ?>
							<li><strong><?php print t('Date post'); ?>:</strong> <?php print format_date($node->created, 'custom', 'd M, Y'); ?></li>
							<?php if(isset($node->field_tags['und'])) : ?>
								<li><strong><?php print t('Tags'); ?>:</strong> <?php print jollyany_format_comma_field('field_tags', $node); ?></li>
							<?php endif; ?>
						</ul>				
					</div>
				</div>
			
				<div class="clearfix"></div>
				<?php if($page && module_exists('prev_next')): ?>	
					<div class="next_prev text-center">
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
					</div>
				<?php endif; ?>			
			
			</div>
   
	<?php else :?>
		
			<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 single-portfolio">
				<div class="full_portfolio">
					<?php if(isset($node->field_video['und']) && !empty($node->field_video['und'][0]['value'])) :?>
						<div class="portfolio_item">
							<div class="entry">
								<?php print $node->field_video['und'][0]['value']; ?>
								<div class="post-type">
									<i class="fa fa-play"></i>
								</div>
							</div>
						</div>
					<?php elseif(isset($node->field_audio['und']) && !empty($node->field_audio['und'][0]['value'])) :?>
						<div class="portfolio_item">
							<div class="entry">
								<?php print $node->field_audio['und'][0]['value']; ?>
								<div class="post-type">
									<i class="fa fa-music"></i>
								</div>
							</div>
						</div>
					<?php elseif($image_slide != '') : ?>
						<div id="aboutslider" class="flexslider clearfix">
							<ul class="slides">
								<?php while ($img_count < $counter) { ?>
									<li><img src="<?php echo file_create_url($node->field_gallery['und'][$img_count]['uri']); ?>" class="img-responsive" alt=""></li>
								<?php $img_count++; } ?>	
							</ul>
						</div>
						<div class="slider-shadow"></div>
					<?php else :?>
						<div class="portfolio_item">
							<div class="entry">
								<img src="<?php echo $imagePath; ?>" alt="" class="img-responsive">
								<div class="magnifier">
									<div class="buttons">
										<a href="<?php echo $imagePath; ?>" class="sf" title="" data-gal="prettyPhoto[product-gallery]"><span class="fa fa-search"></span></a>
										<a class="st" rel="bookmark" target="_blank" href="http://themeforest.net/user/ArrowHiTech"><span class="fa fa-heart"></span></a>
										<a class="sg" rel="bookmark" target="_blank" href="http://themeforest.net/item/jollyany-corporate-multi-purpose-drupal-theme/8566351"><span class="fa fa-eye"></span></a>
									</div>
								</div>
							</div>
						</div>
					<?php endif; ?>
				</div>
	   
				<div class="col-sm-5">
					<div class="title">
						<h1><?php echo $title; ?></h1>
					</div>	
					<?php
						// Hide comments, tags, and links now so that we can render them later.
						hide($content['field_live_demo']);
						hide($content['field_tags']);
						hide($content['field_category']);
						hide($content['field_skill']);
						hide($content['field_image']);
						hide($content['field_gallery']);
						hide($content['field_audio']);
						hide($content['field_video']);
						hide($content['field_layout']);
						hide($content['links']);
						hide($content['comments']);
						print render($content);
					?>
					<?php if(theme_get_setting('showsocial')): ?>
					<div class="clearfix">
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
					<div class="product_details">
						<h3><?php print t('Project Details'); ?></h3>
						<ul>
							<li><strong><?php print t('Customer'); ?>:</strong> <?php print strip_tags($name); ?></li>
							<?php if(isset($node->field_live_demo['und'])) : ?>
								<li><strong><?php print t('Live demo'); ?>:</strong> <a href="<?php print $node->field_live_demo['und'][0]['value']; ?>"><?php print $node->field_live_demo['und'][0]['value']; ?></a></li>
							<?php endif; ?>
							<?php if(isset($node->field_category['und'])) : ?>
								<li><strong><?php print t('Category'); ?>:</strong> <?php print jollyany_format_comma_field('field_category', $node); ?></li>
							<?php endif; ?>
							<?php if(isset($node->field_skill['und'])) : ?>
								<li><strong><?php print t('Skill'); ?>:</strong> <?php print jollyany_format_comma_field('field_skill', $node); ?></li>
							<?php endif; ?>
							<li><strong><?php print t('Date post'); ?>:</strong> <?php print format_date($node->created, 'custom', 'd M, Y'); ?></li>
							<?php if(isset($node->field_tags['und'])) : ?>
								<li><strong><?php print t('Tags'); ?>:</strong> <?php print jollyany_format_comma_field('field_tags', $node); ?></li>
							<?php endif; ?>
						</ul>				
					</div>
				</div>
		 
				<div class="col-sm-7">
					<?php 
						$sidebar_node = block_get_blocks_by_region('sidebar_node'); 
						print render($sidebar_node); 
					?>
				</div>
				
				<div class="clearfix"></div>
				
				<?php if($page && module_exists('prev_next')): ?>	
					<div class="next_prev text-center">
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
					</div>
				<?php endif; ?>						
			
			</div>
		 
	<?php endif; ?>
	</div>
<?php endif; ?>
