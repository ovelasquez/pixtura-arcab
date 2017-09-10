<?php global $theme_root; ?>
        <?php if (!empty($title)): ?>
        <div class="custom-services-title"><h3 class="cat-servprod"><?php print $title; ?></h3></div>
        <?php endif; ?>
             

        <div class="container our-services-ig">             
            

            <div class="custom-services">
                <?php
                $i = 1;
                foreach ($rows as $id => $row):
                    ?>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 <?php
                         if ($i == 1) {
                             echo 'first';
                         } elseif ($i == 4) {
                             echo 'last';
                         }
                         ?>">
                             <?php print $row; ?>                                
                    </div>
                    <?php
                    $i++;
                endforeach;
                ?>
            </div>
        </div>
   