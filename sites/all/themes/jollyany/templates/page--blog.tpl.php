<?php
/**
 * @file
 * Jollyany's theme implementation to display a single Drupal page.
 */
?>
<?php 
	global $theme_root; 
	$projects_fulllayout = theme_get_setting('projects_fulllayout');
	$projects_fulllayout = str_replace(" ","",$projects_fulllayout); 
	$array1 = explode(',', $projects_fulllayout);
	
	$page_only_content = theme_get_setting('page_only_content');
	$page_only_content = str_replace(" ","",$page_only_content); 
	$array2 = explode(',', $page_only_content);
	
	$curr_uri = request_uri();
	$array_curr_uri = explode('/', $curr_uri);
	
	$getPage = array_intersect($array1, $array_curr_uri);
	$getPage2 = array_intersect($array2, $array_curr_uri);
	
	$arrayTypeSettings = array(
	'page_style1', 'page_style2', 'page_onepage', 
	'header_1', 'header_2', 'header_3', 
	'footer_1', 'footer_2', 'footer_3');
	
	$count=1;
	foreach($arrayTypeSettings as $type) {
		$var1 = 'page_style'.$count;
		$var2 = 'arrayPageStyle'.$count;
		$var3 = 'getPageStyle'.$count;
		
		$$var1 = theme_get_setting($type);
		$$var1 = str_replace(" ","", $$var1);
		$$var2 = explode(',', $$var1);
		$count++;
		
		$$var3 = array_intersect($$var2, $array_curr_uri);
	}
	
	if(!isset($_GET['header'])) {$_GET['header'] = NULL;}
	if(!isset($_GET['footer'])) {$_GET['footer'] = NULL;}
	if(!isset($_GET['layout'])) {$_GET['layout'] = NULL;}
?>

<?php if(count($getPageStyle2) > 0 || $_GET['layout'] == 'boxed' || theme_get_setting('layout_option') == 'boxed') : ?>
	<div id="wrapper" class="container">
<?php endif; ?>

<?php if((count($getPageStyle3) == 0 && count($getPageStyle4) == 0 && $_GET['header'] != 'header1')) : ?>
	<?php if(empty($_GET['header']) && theme_get_setting('header_option') == 'header1' && count($getPageStyle5) == 0 && count($getPageStyle6) == 0) :?>
	<?php else :?>
		<?php if ($page['top_bar']) :?>
			<div id="topbar" class="clearfix <?php if(count($getPageStyle5) > 0 || $_GET['header'] == 'header2' || (theme_get_setting('header_option') == 'header2' && empty($_GET['header'])) || count($getPageStyle6) > 0 || $_GET['header'] == 'header3' || (theme_get_setting('header_option') == 'header3' && empty($_GET['header']))) { echo 'dark_header'; } ?>">
				<div class="container">
					<?php print render($page['top_bar']); ?>
				</div>
			</div>
		<?php endif; ?>
	<?php endif; ?>
<?php endif; ?>

<?php if(count($getPageStyle1) > 0) : ?>
	<div id="wrapper" class="container">
<?php endif; ?>

<?php if(count($getPageStyle3) == 0) : ?>
	<header id="header-style-1" <?php if(count($getPageStyle4) > 0 || $_GET['header'] == 'header1' || (empty($_GET['header']) && theme_get_setting('header_option') == 'header1' && count($getPageStyle5) == 0 && count($getPageStyle6) == 0)) { echo 'class="dark_header"'; } elseif(count($getPageStyle6) > 0 || $_GET['header'] == 'header3' || (theme_get_setting('header_option') == 'header3' && empty($_GET['header']))) { echo 'class="header_center"'; } ?>>
		<?php if(count($getPageStyle6) > 0 || $_GET['header'] == 'header3'|| (theme_get_setting('header_option') == 'header3' && empty($_GET['header']))) :?>
			<div class="container">
				<div class="text-center clearfix logo_center">
					<!-- Logo -->  
					<?php if ($logo): ?>
						<a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="logo">
							<img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
						</a>
					<?php elseif ($site_name || $site_slogan): ?>
						<?php if ($site_name): ?>
							<a href="<?php print $front_page; ?>" class="navbar-brand" title="<?php print t('Home'); ?>" rel="home"><?php print $site_name; ?></a>
						<?php endif; ?>
					
						<?php if ($site_slogan): ?>
							<span id="site-slogan"<?php if ($disable_site_slogan) { print ' class="hidden"'; } ?>>
								<?php print $site_slogan; ?>
							</span>
						<?php endif; ?>
					<?php endif; ?>
				</div>
				<div class="navbar yamm navbar-default">
					<div class="navbar-header">
						<button type="button" data-toggle="collapse" data-target="#navbar-collapse-1" class="navbar-toggle">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
					</div>
					
					<div id="navbar-collapse-1" class="navbar-collapse collapse">
							<?php print render($page['menu']); ?>
					</div>
				</div>
			</div>
		<?php else :?>
			<div class="container">
				<div class="navbar yamm navbar-default">
					<div class="navbar-header">
						<button type="button" data-toggle="collapse" data-target="#navbar-collapse-1" class="navbar-toggle">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<!-- Logo -->  
						<?php if ($logo): ?>
							<a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="logo">
								<img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
							</a>
						<?php elseif ($site_name || $site_slogan): ?>
							<?php if ($site_name): ?>
								<a href="<?php print $front_page; ?>" class="navbar-brand" title="<?php print t('Home'); ?>" rel="home"><?php print $site_name; ?></a>
							<?php endif; ?>
						
							<?php if ($site_slogan): ?>
								<span id="site-slogan"<?php if ($disable_site_slogan) { print ' class="hidden"'; } ?>>
									<?php print $site_slogan; ?>
								</span>
							<?php endif; ?>
						<?php endif; ?>
					</div>
					
					<div id="navbar-collapse-1" class="navbar-collapse collapse navbar-right">
							<?php print render($page['menu']); ?>
					</div>
				</div>
			</div>
		<?php endif; ?>
	</header>
<?php endif; ?>

<?php if ($title) : ?>
	<section class="post-wrapper-top jt-shadow clearfix">
		<div class="container">
			<div class="breadcrumbs">
				<h2><?php print $title; ?></h2>
				<?php if (theme_get_setting('breadcrumbs') == '1' ): ?>
					<?php if ($breadcrumb): ?>
						<?php print $breadcrumb; ?>
					<?php endif; ?>
				<?php endif; ?>
			</div>
		</div>
	</section>
<?php endif; ?>

<?php if (isset($node)) : ?>
<section class="blog-wrapper">
	<div class="container">
		
		<?php if ($messages) :?>
			<div class="doc">
				<?php print $messages; ?>
			</div>
		<?php endif; ?>
		
		<?php if ($tabs = render($tabs)): ?>
			<div class="doc">
				<div class="tabs">
					<?php print render($tabs); ?>
				</div>
			</div>
		<?php endif; ?>
		
		<?php if ($action_links): ?>
			<div class="tabs">
				<ul class="nav nav-tabs">
				  <?php print render($action_links); ?>
				</ul>
			</div>
		<?php endif; ?>
		
		<?php if ($page['content']) :?>
			<?php print render($page['content']); ?>
		<?php endif; ?>
		
	</div>
</section>
<?php else :?>
	<?php if ($page['sidebar_right'] && $page['sidebar_left']) :?>
		<section class="blog-wrapper">
			<div class="container">
				<div id="two-sidebar" class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
					<?php print render($page['sidebar_left']); ?> 
				</div>
				
				<div id="content" class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
					<div class="row">
						<?php if ($messages) :?>
							<div class="doc">
								<?php print $messages; ?>
							</div>
						<?php endif; ?>
						
						<?php if ($tabs = render($tabs)): ?>
							<div class="doc">
								<div class="tabs">
									<?php print render($tabs); ?>
								</div>
							</div>
						<?php endif; ?>
						
						<?php if ($action_links): ?>
							<div class="tabs">
								<ul class="nav nav-tabs">
								  <?php print render($action_links); ?>
								</ul>
							</div>
						<?php endif; ?>
						
						<?php if ($page['content']) :?>
							<?php print render($page['content']); ?>
						<?php endif; ?>
					</div>
				</div>
				
				<div id="sidebar" class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
					<?php print render($page['sidebar_right']); ?> 
				</div>
			</div>
		</section>
	<?php elseif ($page['sidebar_right'] && !$page['sidebar_left']) :?>
		<section class="blog-wrapper">
			<div class="container">
				<div id="content" class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
					<div class="row">
						
						<?php if ($messages) :?>
							<div class="doc">
								<?php print $messages; ?>
							</div>
						<?php endif; ?>
						
						<?php if ($tabs = render($tabs)): ?>
							<div class="doc">
								<div class="tabs">
									<?php print render($tabs); ?>
								</div>
							</div>
						<?php endif; ?>
						
						<?php if ($action_links): ?>
							<div class="tabs">
								<ul class="nav nav-tabs">
								  <?php print render($action_links); ?>
								</ul>
							</div>
						<?php endif; ?>
						
						<?php if ($page['content']) :?>
							<?php print render($page['content']); ?>
						<?php endif; ?>
							
					</div>
				</div>
				
				<div id="sidebar" class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
					<?php print render($page['sidebar_right']); ?> 
				</div>
			</div>
		</section>
	<?php else :?>
		<section class="white-wrapper">
			<div class="container">
				
				<?php if ($messages) :?>
					<div class="doc">
						<?php print $messages; ?>
					</div>
				<?php endif; ?>
				
				<?php if ($tabs = render($tabs)): ?>
					<div class="doc">
						<div class="tabs">
							<?php print render($tabs); ?>
						</div>
					</div>
				<?php endif; ?>
				
				<?php if ($action_links): ?>
					<div class="tabs">
						<ul class="nav nav-tabs">
						  <?php print render($action_links); ?>
						</ul>
					</div>
				<?php endif; ?>
				
				<?php if ($page['content']) :?>
					<?php print render($page['content']); ?>
				<?php endif; ?>
				
			</div>
		</section>
	<?php endif; ?>
<?php endif; ?>

<?php if(count($getPageStyle3) > 0) : ?>
	<header id="header-style-1">
		<div class="container">
			<div class="navbar yamm navbar-default">
				<div class="navbar-header">
					<button type="button" data-toggle="collapse" data-target="#navbar-collapse-1" class="navbar-toggle">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<!-- Logo -->  
					<?php if ($logo): ?>
						<a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="logo">
							<img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
						</a>
					<?php elseif ($site_name || $site_slogan): ?>
						<?php if ($site_name): ?>
							<a href="<?php print $front_page; ?>" class="navbar-brand" title="<?php print t('Home'); ?>" rel="home"><?php print $site_name; ?></a>
						<?php endif; ?>
					
						<?php if ($site_slogan): ?>
							<span id="site-slogan"<?php if ($disable_site_slogan) { print ' class="hidden"'; } ?>>
								<?php print $site_slogan; ?>
							</span>
						<?php endif; ?>
					<?php endif; ?>
				</div>
				
				<div id="navbar-collapse-1" class="navbar-collapse collapse navbar-right">
						<?php print render($page['menu']); ?>
				</div>
			</div>
		</div>
	</header>
<?php endif; ?>

<?php if(count($getPageStyle1) > 0 || count($getPageStyle2) > 0 || $_GET['layout'] == 'boxed' || theme_get_setting('layout_option') == 'boxed') : ?>
	</div>
<?php endif; ?>

<?php if ($page['after_content_no_wrap']) :?>
	<section class="grey-wrapper jt-shadow">
		<?php print render($page['after_content_no_wrap']); ?>
	</section>
<?php endif; ?>

<footer id="footer-style-1">
	<div class="container">
		<?php if(count($getPageStyle7) > 0 || $_GET['footer'] == 'footer1' || (theme_get_setting('footer_option') == 'footer1' && empty($_GET['footer']) && count($getPageStyle8) == 0 && count($getPageStyle9) == 0)) : ?>
			<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<?php if ($page['footer_1']) : ?>
					<?php print render($page['footer_1']); ?>
				<?php endif; ?>
			</div>
			<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<?php if ($page['footer_4']) : ?>
					<?php print render($page['footer_4']); ?>
				<?php endif; ?>
			</div>
			<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<?php if ($page['footer_3']) : ?>
					<?php print render($page['footer_3']); ?>
				<?php endif; ?>
			</div>
			<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<?php if ($page['footer_2']) : ?>
					<?php print render($page['footer_2']); ?>
				<?php endif; ?>
			</div>
		<?php elseif(count($getPageStyle8) > 0 || $_GET['footer'] == 'footer2' || (theme_get_setting('footer_option') == 'footer2' && empty($_GET['footer']) && count($getPageStyle7) == 0 && count($getPageStyle9) == 0)) : ?>
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
				<?php if ($page['footer_1']) : ?>
					<?php print render($page['footer_1']); ?>
				<?php endif; ?>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
				<?php if ($page['footer_2']) : ?>
					<?php print render($page['footer_2']); ?>
				<?php endif; ?>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
				<?php if ($page['footer_4']) : ?>
					<?php print render($page['footer_4']); ?>
				<?php endif; ?>
			</div>
		<?php elseif(count($getPageStyle9) > 0 || $_GET['footer'] == 'footer3' || (theme_get_setting('footer_option') == 'footer3' && empty($_GET['footer']) && count($getPageStyle7) == 0 && count($getPageStyle8) == 0)) : ?>
			<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<?php if ($page['footer_4']) : ?>
					<?php print render($page['footer_4']); ?>
				<?php endif; ?>
			</div>
			<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<?php if ($page['footer_2']) : ?>
					<?php print render($page['footer_2']); ?>
				<?php endif; ?>
			</div>
			<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<?php if ($page['footer_3']) : ?>
					<?php print render($page['footer_3']); ?>
				<?php endif; ?>
			</div>
			<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<?php if ($page['footer_1']) : ?>
					<?php print render($page['footer_1']); ?>
				<?php endif; ?>
			</div>
		<?php else :?>
			<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<?php if ($page['footer_1']) : ?>
					<?php print render($page['footer_1']); ?>
				<?php endif; ?>
			</div>
			<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<?php if ($page['footer_2']) : ?>
					<?php print render($page['footer_2']); ?>
				<?php endif; ?>
			</div>
			<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<?php if ($page['footer_3']) : ?>
					<?php print render($page['footer_3']); ?>
				<?php endif; ?>
			</div>
			<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<?php if ($page['footer_4']) : ?>
					<?php print render($page['footer_4']); ?>
				<?php endif; ?>
			</div>
		<?php endif; ?>
	</div>
</footer>

<div id="copyrights">
	<div class="container">
		<?php if ($page['footer_bottom']) : ?>
			<?php print render($page['footer_bottom']); ?>
		<?php endif; ?>
    </div>
</div>
    
	