

        <?php if (!empty($title)): ?>
        <div class="custom-services-title"><h3 class="cat-servprod"><?php print $title; ?></h3></div>
        <?php endif; ?>
             

            <div class="custom-services custom-services-home">
                <?php
                $i = 1;
                $cat="";
                foreach ($rows as $id => $row):
                    
                    ?>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-item <?php
                         if ($i == 1) {
                             echo 'first';
                         } elseif ($i % 3===0) {
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
        
        <div class="clear"></div>
        