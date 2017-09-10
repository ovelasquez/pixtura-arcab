<?php
	/**
	 * @file
	 * jollyany's theme implementation to display a single Portfolio node.
	 */
	global $base_url;
	global $theme_root;
	global $image_default;
	
	$product = commerce_product_load($node->field_product_selection['und'][0]['product_id']);
	$price = commerce_product_calculate_sell_price($product);
	$price_display = commerce_currency_format($price['amount'], $price['currency_code'], $product);

	
	// Grabs the firsts image path and sets $imagePath.
	$imagePath = $image_default;
	if(isset($node->uc_product_image['und'])) {
		$imagePath = file_create_url($node->uc_product_image['und'][0]['uri']); 
	}
	$termid = arg(2);
?>

<?php if (!$page) : ?>
	<?php if( !empty($termid) ) : ?>
		<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
	<?php endif; ?>
		<div class="shop_item">
			<?php print render($title_prefix); ?>
			<div class="entry">
				<img src="<?php print $imagePath; ?>" alt="" class="img-responsive">
				<div class="magnifier">
					<div class="buttons">
						<a href="<?php print $base_url.'/product/add/'.$id; ?>" rel="bookmark" class="st btn btn-default">Add to Cart</a>
					</div>
				</div>
			</div>
			<div class="shop_desc">
				<div class="shop_title pull-left">
					<a href="<?php echo $node_url; ?>"><span><?php print $title ?></span></a>
					<span class="cats"><?php print jollyany_format_comma_field('taxonomy_catalog', $node); ?></span>
				</div>
				
				<div class="price pull-right">
					<?php print render($content['product:commerce_price']);?>
				</div>
			</div>
			<?php print render($title_suffix); ?>
		</div>
		<div class="clearfix"></div>
	<?php if( !empty($termid) ) : ?>
		</div>
	<?php endif; ?>
	
<?php elseif ($page) : ?>
	<?php if(isset($node->field_layout['und']) && $node->field_layout['und'][0]['taxonomy_term']->name == 'Sidebar') :?>
		<div class="shop_wrapper col-lg-9 col-md-9 col-sm-12 col-xs-12 padding-left-0">
	<?php else: ?>
		<div class="shop_wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12 padding-left-0">
	<?php endif; ?>
    <div class="general_row">
        <div class="shop-left shop_item col-lg-6 padding-left-0">
        	<div class="entry">
            	<img src="<?php print $imagePath; ?>" alt="" class="img-responsive">
				<div class="magnifier">
					<div class="buttons">
						<a href="<?php print $imagePath; ?>" class="sf" title="" data-gal="prettyPhoto[product-gallery]"><span class="fa fa-search"></span></a>
					</div>
				</div>
            </div>
            
			<?php if(isset($node->uc_product_image['und']) && count($node->uc_product_image['und']) > 1) : ?>
				<div class="thumbnails clearfix">
					<?php $i=1; foreach($node->uc_product_image['und'] as $key=>$product_images) :?>
					<?php if($key==0) { continue; } ?>
					<div class="entry <?php if($i==1) { echo 'first'; } elseif($i == count($node->uc_product_image['und']) -1) { echo 'last'; } ?>">
						<img class="img-responsive" src="<?php print file_create_url($product_images['uri']); ?>" alt="" />
						<div class="magnifier">
							<div class="buttons">
								<a href="<?php print file_create_url($product_images['uri']); ?>" class="sf" title="" data-gal="prettyPhoto[product-gallery]"><span class="fa fa-search"></span></a>
							</div>
						</div>
					</div>
					<?php $i++; endforeach; ?>  
				</div> 
			<?php endif; ?>  
        </div>
        
        <div class="shop-right col-lg-6">
        
        	<div class="title">
            	<h2><?php print $title ?></h2>
                
				<?php if(!empty($content['product:field_regular_price'])) :?>
					<div class="regular-price" style="text-decoration: line-through; font-weight: bold;">
						<?php print render($content['product:field_regular_price']);?>
					</div>
				<?php endif; ?>
				<div class="price">
					<?php print render($content['product:commerce_price']);?>
				</div>          
            </div>
            
            <div class="shop_desc">
            <?php if(isset($node->body['und'])) { print $node->body['und'][0]['summary']; }  ?>
            </div>
			
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
            
            <div class="shop_item_details">
            	<div class="title">
                	<h2>Product Details</h2>
            	</div>
                <ul>
					<?php if(isset($node->field_size['und'])) : ?>
						<li><strong>Size:</strong> <?php print jollyany_format_comma_field('field_size', $node); ?></li>
                	<?php endif; ?>
					<?php if(isset($node->taxonomy_catalog['und'])) : ?>
						<li><strong>Category:</strong> <?php print jollyany_format_comma_field('taxonomy_catalog', $node); ?></li>
                	<?php endif; ?>
					<?php if(isset($node->field_product_tags['und'])) : ?>
						<li><strong>Tags:</strong> <?php print jollyany_format_comma_field('field_product_tags', $node); ?></li>
                	<?php endif; ?>
					<?php if(isset($node->field_brands['und'])) : ?>
						<li><strong>Brands:</strong> <?php print jollyany_format_comma_field('field_brands', $node); ?></li>
					<?php endif; ?>
				</ul>
            </div>
            
            <div class="shop_meta">
                
                <div class="pull-left">
                	<div class="btn-shop">
                        <?php if( module_exists('flag')): ?>
							<?php print flag_create_link('shop', $node->nid); ?>
						<?php endif; ?>
                        <a class="btn woo_btn btn-primary" href="<?php print $base_url.'/product/add/'.$id; ?>">Add to cart</a>
						<div class="cart-icon"><a href="<?php echo $base_url ?>/cart"><span><i class="fa fa-shopping-cart"></i></span></a></div>
                    </div>
                </div>
			</div>
            
        </div>
		<script>jQuery('input.node-add-to-cart').addClass('btn woo_btn btn-primary');</script>
    </div>
    
    <div class="clearfix"></div>
    
    <div class="general_row">
        <div id="shop_features" class="tabbable">
            <ul class="nav nav-tabs">
                <li class="active dm-icon-effect-1"><a href="#tab1" data-toggle="tab">DESCRIPTION</a></li>
                <li class="dm-icon-effect-1"><a href="#tab2" data-toggle="tab">Additional Information</a></li>
                <li class="dm-icon-effect-1"><a href="#tab3" data-toggle="tab">REVIEWS(<?php print $comment_count; ?>)</a></li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="tab1">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="about_section">
                            <div class="entry padding-top">
                                <a href="<?php print $imagePath; ?>" title="" rel="prettyPhoto[product-gallery]"><img class="img-top img-responsive" src="<?php print $imagePath; ?>" alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                        <div class="title"><h3><?php print $title ?></h3></div>
                        <?php
							// Hide comments, tags, and links now so that we can render them later.
							hide($content['field_additional_information']);
							hide($content['uc_product_image']);
							hide($content['taxonomy_catalog']);
							hide($content['field_size']);
							hide($content['field_brands']);
							hide($content['field_product_tags']);
							hide($content['field_layout']);
							hide($content['links']);
							hide($content['comments']);
							print render($content);
						?>
                    </div>
                </div>
                <div class="tab-pane" id="tab2">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="about_section">
                            <div class="entry padding-top">
                                <a href="<?php print $imagePath; ?>" title="" rel="prettyPhoto[product-gallery]"><img class="img-top img-responsive" src="<?php print $imagePath; ?>" alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                        <?php if(isset($node->field_additional_information['und'])) { print $node->field_additional_information['und'][0]['value']; }  ?>
                    </div>
                </div>
                <div class="tab-pane" id="tab3">
					<div id="comments" class="padding-top">
						<?php if ($comment == COMMENT_NODE_OPEN) : ?>
							<?php print render($content['comments']); ?>
						<?php endif; ?>
					</div>
                </div>
            </div>
        </div>
    </div>

	</div>
	<?php if(isset($node->field_layout['und']) && $node->field_layout['und'][0]['taxonomy_term']->name == 'Sidebar') :?>
		<div id="sidebar" class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <?php 
				$sidebar_right = block_get_blocks_by_region('sidebar_right'); 
				print render($sidebar_right); 
			?>
        </div>
	<?php endif; ?>
<?php endif; ?>


