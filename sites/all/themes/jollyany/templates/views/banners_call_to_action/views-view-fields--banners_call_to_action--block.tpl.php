<div class="testimonial">
    <div><?php echo $fields['body']->content; ?></div>
    <div class="clear"></div>
    <?php
    if (count($row->_field_data["nid"]["entity"]->field_url_detalle)>0):
    ?>
    <div class="" style="position: relative"><a class="btn btn-cta" href="<?php echo $row->_field_data["nid"]["entity"]->field_url_detalle["und"][0]["value"];?>">Ver más</a></div>
    <?php
    endif;
    ?>
    
</div>