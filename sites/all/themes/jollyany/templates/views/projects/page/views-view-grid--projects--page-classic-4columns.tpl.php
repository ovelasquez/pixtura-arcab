<?php if (!empty($title)) : ?>
	<h3><?php print $title; ?></h3>
<?php endif; ?>

<div id="boxed-portfolio" class="portfolio_wrapper padding-top">
	<?php foreach ($rows as $row_number => $columns): ?>        
		<?php $i=1; foreach ($columns as $column_number => $item): ?>
			<?php print $item; ?>
		<?php $i++; endforeach; ?>
	<?php endforeach; ?>
</div>



