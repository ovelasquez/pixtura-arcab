<?php

/**
 * @file
 * Implementation to display a single Drupal page while offline.
 *
 * All the available variables are mirrored in page.tpl.php.
 *
 * @see template_preprocess()
 * @see template_preprocess_maintenance_page()
 * @see bartik_process_maintenance_page()
 */
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language; ?>" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>">
<head>
	<?php print $head; ?>
	<title><?php print $head_title; ?></title>
	<?php print $styles; ?>
	<script src="http://maps.google.com/maps/api/js?sensor=false"></script>
	<?php print $scripts; ?>
	<?php global $theme_root; ?>
  
	<!-- Support for HTML5 -->
	<!--[if lt IE 9]>
		<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	<!-- Enable media queries on older bgeneral_rowsers -->
	<!--[if lt IE 9]>
		<script src="js/respond.min.js"></script>
	<![endif]-->
  
	<!-- Google Fonts -->
	<link href='http://fonts.googleapis.com/css?family=PT+Sans:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Lato:400,300,400italic,300italic,700,700italic,900' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Exo:400,300,600,500,400italic,700italic,800,900' rel='stylesheet' type='text/css'>

	<?php jollyany_user_css();?> 
	
	<link rel="stylesheet" type="text/css" href="<?php echo $theme_root; ?>/switcher/css/<?php echo theme_get_setting('color_scheme'); ?>.css" media="all" />
	
	<!-- Settings Design Default -->
	<script type="text/javascript">
		jQuery(document).ready(function() {
			switchStylestyle('<?php echo theme_get_setting('color_scheme'); ?>');
			return false;
			
			var c = readCookie('style');
			if (c) switchStylestyle(c);
		});
		
		function switchStylestyle(styleName)
		{
			jQuery('link[rel*=style][title]').each(function(i) 
			{
				this.disabled = true;
				if (this.getAttribute('title') == styleName) this.disabled = false;
			});
			createCookie('style', styleName, 365);
		}
	</script>
</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>
	<?php if(theme_get_setting('maintenance_style') == 1) : ?>
		<div id="maintenance" class="overlay">
			<div class="container">
				<div class="mmode text-center">
					<div class="title">
						<!-- Logo -->  
						<?php if (theme_get_setting('logo_path')): ?>
							<img height="46px" src="<?php print file_create_url(theme_get_setting('logo_path')); ?>" alt="<?php print $site_name; ?>" />
						<?php else: ?>
							<h1><?php print $site_name; ?></h1>
						<?php endif; ?>
						<h1>We Are Working On <span>Jollyany Drupal</span></h1>
						<p class="lead"><?php print $content; ?></p>
					</div>
					
					<div id="countdown">
						<div class="stat f-container">
							<div class="f-element col-lg-3 col-md-3 col-sm-6 col-xs-12">
								<div class="milestone-counter">
									<span class="days stat-count highlight">211</span>
									<div class="milestone-details">Days</div>
								</div>
							</div>
							<div class="f-element col-lg-3 col-md-3 col-sm-6 col-xs-12">
								<div class="milestone-counter">
									<span class="hours stat-count highlight">113</span>
									<div class="milestone-details">Hours</div>
								</div>
							</div>
							<div class="f-element col-lg-3 col-md-3 col-sm-6 col-xs-12">
								<div class="milestone-counter">
									<span class="minutes stat-count highlight">431</span>
									<div class="milestone-details">Minutes</div>
								</div>
							</div>
							<div class="f-element col-lg-3 col-md-3 col-sm-6 col-xs-12">
								<div class="milestone-counter">
									<span class="seconds stat-count highlight">2113</span>
									<div class="milestone-details">Seconds</div>
								</div>
							</div>
						</div><!-- stat -->
					</div><!-- end countdown -->
				</div><!-- mmode -->
			</div><!-- container -->
		</div>
	<?php else :?>
		<div id="maintenance1" class="overlay" style="background: #FFF;">
			<div class="container">
				<div class="mmode text-center">
					<div class="title">
						<!-- Logo -->  
						<?php if (theme_get_setting('logo_path')): ?>
							<img height="46px" src="<?php print file_create_url(theme_get_setting('logo_path')); ?>" alt="<?php print $site_name; ?>" />
						<?php else: ?>
							<h1><?php print $site_name; ?></h1>
						<?php endif; ?>
						<h1>We Are Working On <span>Jollyany Drupal</span></h1>
						<p class="lead"><?php print $content; ?></p>
					</div>
					
					<div id="countdown">
						<div class="stat f-container">
							<div class="f-element col-lg-3 col-md-3 col-sm-6 col-xs-12">
								<div class="milestone-counter">
									<span class="green days stat-count highlight">211</span>
									<div class="green milestone-details">Days</div>
								</div>
							</div>
							<div class="f-element col-lg-3 col-md-3 col-sm-6 col-xs-12">
								<div class="milestone-counter">
									<span class="hours stat-count highlight">113</span>
									<div class="milestone-details">Hours</div>
								</div>
							</div>
							<div class="f-element col-lg-3 col-md-3 col-sm-6 col-xs-12">
								<div class="milestone-counter">
									<span class="red minutes stat-count highlight">431</span>
									<div class="red milestone-details">Minutes</div>
								</div>
							</div>
							<div class="f-element col-lg-3 col-md-3 col-sm-6 col-xs-12">
								<div class="milestone-counter">
									<span class="yellow seconds stat-count highlight">2113</span>
									<div class="yellow milestone-details">Seconds</div>
								</div>
							</div>
						</div><!-- stat -->
					</div><!-- end countdown -->
				</div><!-- mmode -->
			</div><!-- container -->
		</div>
	<?php endif; ?>
	
	<div class="dmtop">Scroll to Top</div>
	
	<script src="<?php echo $theme_root; ?>/js/bootstrap.min.js"></script>
	<script src="<?php echo $theme_root; ?>/js/countdown.js"></script>
	
	<script>
		// countdown script
		jQuery("#countdown").countdown({
			date: "<?php echo theme_get_setting('maintenance_time'); ?> 12:00:00", // add your date here.
				format: "on"
		});	
	</script>
	
</body>
</html>
