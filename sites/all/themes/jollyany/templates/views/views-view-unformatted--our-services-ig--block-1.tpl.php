<?php if (!empty($title)): ?>
<div class="custom-services-title"><h3 class="cat-servprod-sidebar"><?php print $title; ?></h3></div>
<?php endif; ?>

<ul class="nav nav-tabs nav-stacked">
	<?php
    $i = 1;
    foreach ($rows as $id => $row):
        ?>
        <?php print $row; ?>     
        <?php
        $i++;
    endforeach;
    ?>
</ul>