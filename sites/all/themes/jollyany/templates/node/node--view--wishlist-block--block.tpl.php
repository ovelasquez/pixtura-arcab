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
				
				<span class="price pull-right">
					<?php print render($content['product:commerce_price']);?>
				</span>
			</div>
			<?php print render($title_suffix); ?>
		</div>
		<div class="clearfix"></div>
	<?php if( !empty($termid) ) : ?>
		</div>
	<?php endif; ?>
	