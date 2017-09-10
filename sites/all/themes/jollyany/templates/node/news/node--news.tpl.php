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
		<div class="col-lg-12">
	<?php endif; ?>

		<div class="blog-carousel">
			<?php print render($title_prefix); ?>
			<div class="main-info">
				<?php if(isset($node->field_video['und']) && !empty($node->field_video['und'][0]['value'])) :?>
					<div class="entry">
						<?php print $node->field_video['und'][0]['value']; ?>
						<div class="post-type">
							<i class="fa fa-play"></i>
						</div>
					</div>
				<?php elseif(isset($node->field_audio['und']) && !empty($node->field_audio['und'][0]['value'])) :?>
					<div class="entry">
						<?php print $node->field_audio['und'][0]['value']; ?>
						<div class="post-type">
							<i class="fa fa-music"></i>
						</div>
					</div>
				<?php elseif(isset($node->field_quote['und']) && !empty($node->field_quote['und'][0]['value'])) :?>
					<div class="entry">
						<div class="quote-post">
							<blockquote>
								<?php print $node->field_quote['und'][0]['value']; ?>
							</blockquote>
						</div>
						<div class="post-type">
							<i class="fa fa-quote-right"></i>
						</div>
					</div>
				<?php elseif($image_slide != '') : ?>
					<div class="entry">
						<div class="flexslider">
							<ul class="slides">
								<?php while ($img_count < $counter) { ?>
									<li><img src="<?php echo file_create_url($node->field_gallery['und'][$img_count]['uri']); ?>" class="img-responsive" alt=""></li>
								<?php $img_count++; } ?>	
							</ul> 
						</div>
						<div class="post-type">
							<i class="fa fa-camera"></i>
						</div>
					</div>
					<script type="text/javascript">
						jQuery(window).load(function(){
						  jQuery('#node-<?php print $node->nid; ?> .flexslider').flexslider({
							animation: "fade",
							controlNav: false,
							start: function(slider){
							  jQuery('body').removeClass('loading');
							}
						  });
						});
					</script>
				<?php else :?>
					<div class="entry">
						<?php if(isset($node->field_image['und'])) : ?>
							<img src="<?php echo file_create_url($node->field_image['und'][0]['uri']); ?>" alt="" class="img-responsive">
						<?php else :?>
							<img src="<?php global $image_default; echo $image_default; ?>" alt="" class="img-responsive">
						<?php endif; ?>
						<div class="magnifier">
							<div class="buttons">
								<a class="st" rel="bookmark" href="<?php print $node_url; ?>"><i class="fa fa-link"></i></a>
							</div>
						</div>
						<div class="post-type">
							<i class="fa fa-picture-o"></i>
						</div>
					</div>
				<?php endif; ?>
				
				<div class="blog-carousel-header">
					<h3><a title="<?php print $title; ?>" href="<?php print $node_url; ?>"><?php print $title; ?></a></h3>
					<div class="blog-carousel-meta">
						<span><i class="fa fa-calendar"></i> <?php print format_date($node->created, 'custom', 'd M, Y'); ?></span>
						<span><i class="fa fa-comment"></i> <a href="<?php print $node_url; ?>#comments"><?php print $comment_count; ?> Comment<?php if ($comment_count> 0 && $comment_count != "1" ) { echo "s"; } ?></a></span>
						<span><i class="fa fa-tag"></i> <?php print jollyany_format_comma_field('field_blog_category', $node); ?></span>
					</div>
				</div>
				<div class="blog-carousel-desc">
                    <?php if(isset($node->body['und'])) { print $node->body['und'][0]['summary']; } ?>
				</div>
			</div>
			<?php print render($title_suffix); ?>
        </div>

	<?php if( !empty($termid) ) : ?>
		</div>
	<?php endif; ?>
	
<?php elseif ($page) : ?>

	<?php if(isset($node->field_layout['und']) && $node->field_layout['und'][0]['taxonomy_term']->name == 'Sidebar') :?>
		<div id="content" class="col-lg-8 col-md-8 col-sm-12 col-xs-12 padding-left-0">
            <div class="row">
               <div class="blog-masonry">
                    <div class="col-lg-12">
                        <div class="blog-carousel">
							<?php if(isset($node->field_video['und']) && !empty($node->field_video['und'][0]['value'])) :?>
								<div class="entry">
									<?php print $node->field_video['und'][0]['value']; ?>
									<div class="post-type">
										<i class="fa fa-play"></i>
									</div>
								</div>
							<?php elseif(isset($node->field_audio['und']) && !empty($node->field_audio['und'][0]['value'])) :?>
								<div class="entry">
									<?php print $node->field_audio['und'][0]['value']; ?>
									<div class="post-type">
										<i class="fa fa-music"></i>
									</div>
								</div>
							<?php elseif(isset($node->field_quote['und']) && !empty($node->field_quote['und'][0]['value'])) :?>
								<div class="entry">
									<div class="quote-post">
                                        <blockquote>
                                            <?php print $node->field_quote['und'][0]['value']; ?>
                                        </blockquote>
                                    </div>
                                    <div class="post-type">
                                        <i class="fa fa-quote-right"></i>
                                    </div>
                                </div>
							<?php elseif($image_slide != '') : ?>
								<div class="entry">
									<div class="flexslider">
										<ul class="slides">
											<?php while ($img_count < $counter) { ?>
												<li><img src="<?php echo file_create_url($node->field_gallery['und'][$img_count]['uri']); ?>" class="img-responsive" alt=""></li>
											<?php $img_count++; } ?>	
										</ul>  
									</div> 
									<div class="post-type">
										<i class="fa fa-camera"></i>
									</div>
								</div>
								<script type="text/javascript">
									jQuery(window).load(function(){
									  jQuery('#node-<?php print $node->nid; ?> .flexslider').flexslider({
										animation: "fade",
										controlNav: false,
										start: function(slider){
										  jQuery('body').removeClass('loading');
										}
									  });
									});
								</script>
							<?php else :?>
								<div class="entry">
									<?php if(isset($node->field_image['und'])) : ?>
										<img src="<?php echo file_create_url($node->field_image['und'][0]['uri']); ?>" alt="" class="img-responsive">
									<?php else :?>
										<img src="<?php global $image_default; echo $image_default; ?>" alt="" class="img-responsive">
									<?php endif; ?>
									<div class="magnifier">
										<div class="buttons">
											<a class="st" rel="bookmark" href="<?php print $node_url; ?>"><i class="fa fa-link"></i></a>
										</div>
									</div>
									<div class="post-type">
										<i class="fa fa-picture-o"></i>
									</div>
								</div>
							<?php endif; ?>
							
							<div class="blog-carousel-header clearfix">
								<h1><?php print $title; ?></h1>
								<div class="blog-carousel-meta">
									<div class="col-md-8 padding-left-0">
										<span><i class="fa fa-calendar"></i> <?php print format_date($node->created, 'custom', 'M d, Y'); ?></span>
										<span><i class="fa fa-comment"></i> <a href="<?php print $node_url; ?>#comments"><?php print $comment_count; ?> Comment<?php if ($comment_count> 0 && $comment_count != "1" ) { echo "s"; } ?></a></span>
										<span><i class="fa fa-tag"></i> <?php print jollyany_format_comma_field('field_blog_category', $node); ?></span>
										<span><i class="fa fa-user"></i> <?php print strip_tags($name); ?></span>
									</div>
								
									<?php if(theme_get_setting('showsocial')): ?>
									<div class="col-md-4 padding-right-0">
										<div class="social-2 f-right a2a_kit">
											<a class="a2a_dd" href="http://www.addtoany.com/share_save"><i class="fa fa-plus-square"></i></a>
											<a class="a2a_button_linkedin"><i class="fa fa-linkedin"></i></a>
											<a class="a2a_button_pinterest"><i class="fa fa-pinterest"></i></a>
											<a class="a2a_button_google_plus"><i class="fa fa-google-plus"></i></a>
											<a class="a2a_button_twitter"><i class="fa fa-twitter"></i></a>
											<a class="a2a_button_facebook"><i class="fa fa-facebook"></i></a>
										</div>
									</div>
									<?php endif; ?>
								</div>
							</div>
							<div class="blog-carousel-desc">
                                <?php
									// Hide comments, tags, and links now so that we can render them later.
									hide($content['field_blog_category']);
									hide($content['field_image']);
									hide($content['field_gallery']);
									hide($content['field_audio']);
									hide($content['field_video']);
									hide($content['field_quote']);
									hide($content['field_layout']);
									hide($content['links']);
									hide($content['comments']);
									print render($content);
								?>
							</div>
                        </div>
                    </div>
				</div>
                
                <div class="clearfix"></div>
                
                <div id="comments" class="padding-top">
                    <?php if ($comment == COMMENT_NODE_OPEN) : ?>
						<?php print render($content['comments']); ?>
					<?php endif; ?>
                </div>
                
                <div class="clearfix"></div>
				
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
        	</div>
        </div>
        
        <div id="sidebar" class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <?php 
				$sidebar_right = block_get_blocks_by_region('sidebar_right'); 
				print render($sidebar_right); 
			?>
        </div>
		
	<?php else :?>
	
		<div id="content" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="row">
               <div class="blog-masonry">
                    <div class="clearfix">
                        <div class="blog-carousel">
							<?php if(isset($node->field_video['und']) && !empty($node->field_video['und'][0]['value'])) :?>
								<div class="entry">
									<?php print $node->field_video['und'][0]['value']; ?>
									<div class="post-type">
										<i class="fa fa-play"></i>
									</div>
								</div>
							<?php elseif(isset($node->field_audio['und']) && !empty($node->field_audio['und'][0]['value'])) :?>
								<div class="entry">
									<?php print $node->field_audio['und'][0]['value']; ?>
									<div class="post-type">
										<i class="fa fa-music"></i>
									</div>
								</div>
							<?php elseif($image_slide != '') : ?>
								<div class="entry">
									<div class="flexslider">
										<ul class="slides">
											<?php while ($img_count < $counter) { ?>
												<li><img src="<?php echo file_create_url($node->field_gallery['und'][$img_count]['uri']); ?>" class="img-responsive" alt=""></li>
											<?php $img_count++; } ?>	
										</ul>  
									</div>
									<div class="post-type">
										<i class="fa fa-camera"></i>
									</div>
								</div>
								<script type="text/javascript">
									jQuery(window).load(function(){
									  jQuery('#node-<?php print $node->nid; ?> .flexslider').flexslider({
										animation: "fade",
										controlNav: false,
										start: function(slider){
										  jQuery('body').removeClass('loading');
										}
									  });
									});
								</script>
							<?php else :?>
								<div class="entry">
									<?php if(isset($node->field_image['und'])) : ?>
										<img src="<?php echo file_create_url($node->field_image['und'][0]['uri']); ?>" alt="" class="img-responsive">
									<?php else :?>
										<img src="<?php global $image_default; echo $image_default; ?>" alt="" class="img-responsive">
									<?php endif; ?>
									<div class="magnifier">
										<div class="buttons">
											<a class="st" rel="bookmark" href="<?php print $node_url; ?>"><i class="fa fa-link"></i></a>
										</div>
									</div>
									<div class="post-type">
										<i class="fa fa-picture-o"></i>
									</div>
								</div>
							<?php endif; ?>
							
							<div class="blog-carousel-header">
								<h1><?php print $title; ?></h1>
								<div class="blog-carousel-meta clearfix">
									<div class="col-md-8 padding-left-0">
										<span><i class="fa fa-calendar"></i> <?php print format_date($node->created, 'custom', 'M d, Y'); ?></span>
										<span><i class="fa fa-comment"></i> <a href="<?php print $node_url; ?>#comments"><?php print $comment_count; ?> Comment<?php if ($comment_count> 0 && $comment_count != "1" ) { echo "s"; } ?></a></span>
										<span><i class="fa fa-tag"></i> <?php print jollyany_format_comma_field('field_blog_category', $node); ?></span>
										<span><i class="fa fa-user"></i> <?php print strip_tags($name); ?></span>
									</div>
								
									<?php if(theme_get_setting('showsocial')): ?>
									<div class="col-md-4 padding-right-0">
										<div class="social-2 f-right a2a_kit">
											<a class="a2a_dd" href="http://www.addtoany.com/share_save"><i class="fa fa-plus-square"></i></a>
											<a class="a2a_button_linkedin"><i class="fa fa-linkedin"></i></a>
											<a class="a2a_button_pinterest"><i class="fa fa-pinterest"></i></a>
											<a class="a2a_button_google_plus"><i class="fa fa-google-plus"></i></a>
											<a class="a2a_button_twitter"><i class="fa fa-twitter"></i></a>
											<a class="a2a_button_facebook"><i class="fa fa-facebook"></i></a>
										</div>
									</div>
									<?php endif; ?>
								</div>
							</div>
							<div class="blog-carousel-desc">
                                <?php
									// Hide comments, tags, and links now so that we can render them later.
									hide($content['field_blog_category']);
									hide($content['field_image']);
									hide($content['field_gallery']);
									hide($content['field_audio']);
									hide($content['field_video']);
									hide($content['field_quote']);
									hide($content['field_layout']);
									hide($content['links']);
									hide($content['comments']);
									print render($content);
								?>
							</div>
                        </div>
                    </div>
				</div>
                
                <div class="clearfix"></div>
                
                <div id="comments" class="padding-top">
                    <?php if ($comment == COMMENT_NODE_OPEN) : ?>
						<?php print render($content['comments']); ?>
					<?php endif; ?>
                </div> 
                
                <div class="clearfix"></div>
				
                <div class="clearfix">
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
        	</div>
        </div>
	 
	<?php endif; ?>
<?php endif; ?>


