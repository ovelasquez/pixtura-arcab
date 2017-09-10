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


	<div class="row">
       <div class="blog-masonry">
            <div class="col-lg-12">
                <div class="blog-carousel">
                    <div class="blog-carousel-header">
                        <h1><?php echo $title; ?></h1>
						<div class="blog-carousel-meta clearfix">
							<div class="col-md-8 padding-left-0">
								<span><i class="fa fa-calendar"></i> <?php print format_date($node->created, 'custom', 'M d, Y'); ?></span>
								<span><i class="fa fa-comment"></i> <a href="<?php print $node_url; ?>#comments"><?php print $comment_count; ?> Comment<?php if ($comment_count> 0 && $comment_count != "1" ) { echo "s"; } ?></a></span>
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
						  // We hide the comments and links now so that we can render them later.
						  hide($content['taxonomy_forums']);
						  hide($content['comments']);
						  hide($content['links']);
						  print render($content);
						?>
                    </div>
                </div>
				
				<div class="clearfix"></div>
                <div id="comments" class="padding-top">
                    <?php if ($comment == COMMENT_NODE_OPEN) : ?>
						<?php print render($content['comments']); ?>
					<?php endif; ?>
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
		</div>
    </div>
