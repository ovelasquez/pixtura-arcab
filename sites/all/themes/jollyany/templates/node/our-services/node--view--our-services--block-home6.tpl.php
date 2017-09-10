<div class="servicebox">
    <a href="<?php print $node_url; ?>">
        <div class="service-icon-circle border-none">
            <i class="fa <?php print render($content['field_icon']); ?>"></i>
            <div class="arrow-up"></div>
        </div>
    </a>
    <div class="title">
        <h3><?php echo $title; ?></h3>
    </div>
    <?php print $node->body['und'][0]['summary']; ?>
</div>