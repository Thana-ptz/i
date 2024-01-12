document.addEventListener('DOMContentLoaded', function () {
  const content = document.querySelector('ion-content');
  content.innerHTML += '<!DOCTYPE html>
<!--
Author: Keenthemes
Product Name: Ceres
Product Version: 1.1.5
Purchase: https://keenthemes.com/products/ceres-html-pro
Website: http://www.keenthemes.com
Contact: support@keenthemes.com
Follow: www.twitter.com/keenthemes
Dribbble: www.dribbble.com/keenthemes
Like: www.facebook.com/keenthemes
License: For each use you must have a valid license purchased only from above link in order to legally use the theme for your project.
-->
<html lang="en" >
    <!--begin::Head-->
    <head><base href=""/>
        <title>Ceres HTML Pro- Bootstrap 5 HTML Multipurpose Admin Dashboard Theme - Ceres HTML Pro by KeenThemes</title>
        <meta charset="utf-8"/>
        <meta name="description" content="Ceres admin dashboard live demo. Check out all the features of the admin panel. A large number of settings, additional services and widgets."/>
        <meta name="keywords" content="Ceres theme, bootstrap, bootstrap 5, admin themes, free admin themes, bootstrap admin, bootstrap dashboard"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Ceres HTML Pro- Bootstrap 5 HTML Multipurpose Admin Dashboard Theme - Ceres HTML Pro by KeenThemes" />
        <meta property="og:url" content="https://keenthemes.com/products/ceres-html-pro"/>
        <meta property="og:site_name" content="Ceres HTML Pro by Keenthemes" />
        <link rel="canonical" href="https://preview.keenthemes.com/ceres-html-pro"/>
        <link rel="shortcut icon" href="assets/media/logos/favicon.ico"/>

        <script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
	    
        <!--begin::Fonts(mandatory for all pages)-->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700"/>        <!--end::Fonts-->
                    <!--begin::Vendor Stylesheets(used for this page only)-->
                            <link href="https://preview.keenthemes.com/ceres-html-pro/assets/plugins/custom/fullcalendar/fullcalendar.bundle.css" rel="stylesheet" type="text/css"/>
                            <link href="https://preview.keenthemes.com/ceres-html-pro/assets/plugins/custom/datatables/datatables.bundle.css" rel="stylesheet" type="text/css"/>
                        <!--end::Vendor Stylesheets-->
                    <!--begin::Global Stylesheets Bundle(mandatory for all pages)-->
                            <link href="https://preview.keenthemes.com/ceres-html-pro/assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css"/>
                            <link href="https://preview.keenthemes.com/ceres-html-pro/assets/css/style.bundle.css" rel="stylesheet" type="text/css"/>
                        <!--end::Global Stylesheets Bundle-->
        <script>
            // Frame-busting to prevent site from being loaded within a frame without permission (click-jacking)
            if (window.top != window.self) {
                window.top.location.replace(window.self.location.href);
            }
        </script>
    </head>
    <!--end::Head-->
    <!--begin::Body-->
    <body  id="kt_body" data-kt-app-page-loading-enabled="true" data-kt-app-page-loading="on"  class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled" >
<!--layout-partial:partials/theme-mode/_init.html-->
	    <div class="page-loader flex-column">
		<img alt="Logo" class="theme-light-show max-h-50px" src="https://preview.keenthemes.com/ceres-html-pro/assets/media/logos/keenthemes.svg"/>
		<img alt="Logo" class="theme-dark-show max-h-50px" src="https://preview.keenthemes.com/ceres-html-pro/assets/media/logos/keenthemes-dark.svg"/>
		<div class="d-flex align-items-center mt-5">
			<span class="spinner-border text-primary" role="status"></span>
			<span class="text-muted fs-6 fw-semibold ms-5">Loading...</span>
		</div>
	</div>
<!--layout-partial:partials/_loader.html-->
<!--begin::Main-->
	<!--begin::Root-->
	<div class="d-flex flex-column flex-root">
		<!--begin::Page-->
		<div class="page d-flex flex-row flex-column-fluid">
			<!--begin::Wrapper-->
			<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
<!--layout-partial:layout/header/_base.html-->

				<!--begin::Header-->
<div id="kt_header" class="header  align-items-stretch" 			data-kt-sticky="true"
		data-kt-sticky-name="header"
		data-kt-sticky-offset="{default: '200px', lg: '300px'}"
	>
	<!--begin::Container-->
	<div class=" container-xxl  d-flex align-items-center">
		<!--begin::Heaeder menu toggle-->
		<div class="d-flex align-items-center d-lg-none ms-n2 me-3" title="Show aside menu">
			<div class="btn btn-icon btn-custom w-35px h-35px w-md-40px h-md-40px" id="kt_header_menu_mobile_toggle">
				<i class="ki-solid ki-abstract-14 fs-2"></i>			</div>
		</div>
		<!--end::Heaeder menu toggle-->
		<!--begin::Header Logo-->
		<div class="header-logo me-5 me-md-10 flex-grow-1 flex-lg-grow-0">
			<a href="?page=index">
				<img alt="Logo" src="assets/media/logos/default-dark.svg" class="h-15px h-lg-20px logo-default"/>
				<img alt="Logo" src="assets/media/logos/default.svg" class="h-15px h-lg-20px logo-sticky"/>
			</a>
		</div>
		<!--end::Header Logo-->
		<!--begin::Wrapper-->
		<div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
			<!--begin::Navbar-->
			<div class="d-flex align-items-stretch" id="kt_header_nav">
<!--layout-partial:layout/header/_menu.html-->

<!--begin::Menu wrapper-->
<div class="header-menu align-items-stretch"
    data-kt-drawer="true"
	data-kt-drawer-name="header-menu"
	data-kt-drawer-activate="{default: true, lg: false}"
	data-kt-drawer-overlay="true"
	data-kt-drawer-width="{default:'200px', '300px': '225px'}"
	data-kt-drawer-direction="start"
	data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"
    data-kt-swapper="true"
    data-kt-swapper-mode="prepend"
    data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
>
    <!--begin::Menu-->
    <div class="menu menu-rounded menu-column menu-lg-row menu-active-bg menu-title-gray-700 menu-state-primary menu-arrow-gray-500 fw-semibold my-5 my-lg-0 px-4 px-lg-0 align-items-stretch"
        id="#kt_header_menu"
        data-kt-menu="true"
    >
        <!--begin:Menu item--><div  data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start"  class="menu-item here show menu-lg-down-accordion me-lg-1" ><!--begin:Menu link--><span class="menu-link py-3"  ><span  class="menu-title" >Dashboards</span><span  class="menu-arrow d-lg-none" ></span></span><!--end:Menu link--><!--begin:Menu sub--><div  class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px" ><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link active py-3"  href="?page=index"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Multipurpose</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=dashboards/social"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Social</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=dashboards/crypto"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Crypto</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=dashboards/delivery"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Delivery</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=dashboards/website-analytics"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Website Analytics</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div  data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start"  class="menu-item menu-lg-down-accordion me-lg-1" ><!--begin:Menu link--><span class="menu-link py-3"  ><span  class="menu-title" >Pages</span><span  class="menu-arrow d-lg-none" ></span></span><!--end:Menu link--><!--begin:Menu sub--><div  class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px" ><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=pages/about"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >About Us</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=pages/invoice"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Invoice</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=pages/faq"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >FAQ</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=pages/wizard"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Wizard</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=pages/pricing"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Pricing</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div  data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start"  class="menu-item menu-lg-down-accordion me-lg-1" ><!--begin:Menu link--><span class="menu-link py-3"  ><span  class="menu-title" >Account</span><span  class="menu-arrow d-lg-none" ></span></span><!--end:Menu link--><!--begin:Menu sub--><div  class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px" ><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=account/overview"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Overview</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=account/settings"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Settings</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=account/security"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Security</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=account/activity"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Activity</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=account/billing"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Billing</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=account/statements"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Statements</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=account/referrals"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Referrals</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=account/api-keys"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >API Keys</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=account/logs"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Logs</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div  data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start"  class="menu-item menu-lg-down-accordion me-lg-1" ><!--begin:Menu link--><span class="menu-link py-3"  ><span  class="menu-title" >Authentication</span><span  class="menu-arrow d-lg-none" ></span></span><!--end:Menu link--><!--begin:Menu sub--><div  class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-lg-600px" >
<!--layout-partial:layout/header/_menu-authentication.html-->

		<!--begin:Pages menu-->
<div class="menu-state-bg p-4 p-lg-8">
    <!--begin:Row-->
    <div class="row">
        <!--begin:Col-->
        <div class="col-lg-4 mb-6 mb-lg-0">
            <!--begin:Menu section-->
            <div class="mb-0">
                <!--begin:Menu heading-->
                <h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Login</h4>
                <!--end:Menu heading-->
                                    <!--begin:Menu item-->
                    <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="?page=authentication/sign-in/basic" class="menu-link ">
                            <span class="menu-title">Sign In Basic</span>
                        </a>
                        <!--end:Menu link-->
                    </div>
                    <!--end:Menu item-->
                                    <!--begin:Menu item-->
                    <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="?page=authentication/sign-up/basic" class="menu-link ">
                            <span class="menu-title">Sign Up Basic</span>
                        </a>
                        <!--end:Menu link-->
                    </div>
                    <!--end:Menu item-->
                                    <!--begin:Menu item-->
                    <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="?page=authentication/sign-up/multi-steps" class="menu-link ">
                            <span class="menu-title">Sign Up Multi-steps</span>
                        </a>
                        <!--end:Menu link-->
                    </div>
                    <!--end:Menu item-->
                                    <!--begin:Menu item-->
                    <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="?page=authentication/sign-in/password-reset" class="menu-link ">
                            <span class="menu-title">Password Reset</span>
                        </a>
                        <!--end:Menu link-->
                    </div>
                    <!--end:Menu item-->
                                    <!--begin:Menu item-->
                    <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="?page=authentication/sign-in/new-password" class="menu-link ">
                            <span class="menu-title">New Password</span>
                        </a>
                        <!--end:Menu link-->
                    </div>
                    <!--end:Menu item-->
                                    <!--begin:Menu item-->
                    <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="?page=authentication/sign-up/free-trial" class="menu-link ">
                            <span class="menu-title">Free Trial</span>
                        </a>
                        <!--end:Menu link-->
                    </div>
                    <!--end:Menu item-->
                            </div>
            <!--end:Menu section-->
        </div>
        <!--end:Col-->
        <!--begin:Col-->
        <div class="col-lg-4 mb-6 mb-lg-0">
            <!--begin:Menu section-->
            <div class="mb-0">
                <!--begin:Menu heading-->
                <h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">General</h4>
                <!--end:Menu heading-->
                                    <!--begin:Menu item-->
                    <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="?page=authentication/sign-up/coming-soon" class="menu-link ">
                            <span class="menu-title">Coming Soon</span>
                        </a>
                        <!--end:Menu link-->
                    </div>
                    <!--end:Menu item-->
                                    <!--begin:Menu item-->
                    <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="?page=authentication/general/welcome" class="menu-link ">
                            <span class="menu-title">Welcome Message</span>
                        </a>
                        <!--end:Menu link-->
                    </div>
                    <!--end:Menu item-->
                                    <!--begin:Menu item-->
                    <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="?page=authentication/general/verify-email" class="menu-link ">
                            <span class="menu-title">Verify Email</span>
                        </a>
                        <!--end:Menu link-->
                    </div>
                    <!--end:Menu item-->
                                    <!--begin:Menu item-->
                    <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="?page=authentication/general/password-confirmation" class="menu-link ">
                            <span class="menu-title">Password&nbsp;Confirmation</span>
                        </a>
                        <!--end:Menu link-->
                    </div>
                    <!--end:Menu item-->
                                    <!--begin:Menu item-->
                    <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="?page=authentication/general/deactivation" class="menu-link ">
                            <span class="menu-title">Account Deactivation</span>
                        </a>
                        <!--end:Menu link-->
                    </div>
                    <!--end:Menu item-->
                                    <!--begin:Menu item-->
                    <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="?page=authentication/general/error-404" class="menu-link ">
                            <span class="menu-title">Error 404</span>
                        </a>
                        <!--end:Menu link-->
                    </div>
                    <!--end:Menu item-->
                                    <!--begin:Menu item-->
                    <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="?page=authentication/general/error-500" class="menu-link ">
                            <span class="menu-title">Error 500</span>
                        </a>
                        <!--end:Menu link-->
                    </div>
                    <!--end:Menu item-->
                            </div>
            <!--end:Menu section-->
        </div>
        <!--end:Col-->
        <!--begin:Col-->
        <div class="col-lg-4 mb-6 mb-lg-0">
            <!--begin:Menu section-->
            <div class="mb-0">
                <!--begin:Menu heading-->
                <h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Email Templates</h4>
                <!--end:Menu heading-->
                                    <!--begin:Menu item-->
                    <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="?page=authentication/email/verify-email" class="menu-link ">
                            <span class="menu-title">Verify Email</span>
                        </a>
                        <!--end:Menu link-->
                    </div>
                    <!--end:Menu item-->
                                    <!--begin:Menu item-->
                    <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="?page=authentication/email/invitation" class="menu-link ">
                            <span class="menu-title">Account Invitation</span>
                        </a>
                        <!--end:Menu link-->
                    </div>
                    <!--end:Menu item-->
                                    <!--begin:Menu item-->
                    <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="?page=authentication/email/password-reset" class="menu-link ">
                            <span class="menu-title">Password Reset</span>
                        </a>
                        <!--end:Menu link-->
                    </div>
                    <!--end:Menu item-->
                                    <!--begin:Menu item-->
                    <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="?page=authentication/email/password-change" class="menu-link ">
                            <span class="menu-title">Password Changed</span>
                        </a>
                        <!--end:Menu link-->
                    </div>
                    <!--end:Menu item-->
                            </div>
            <!--end:Menu section-->
        </div>
        <!--end:Col-->
    </div>
    <!--end:Row-->
</div>
<!--end:Pages menu-->

		
</div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div  data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start"  class="menu-item menu-lg-down-accordion me-lg-1" ><!--begin:Menu link--><span class="menu-link py-3"  ><span  class="menu-title" >Apps</span><span  class="menu-arrow d-lg-none" ></span></span><!--end:Menu link--><!--begin:Menu sub--><div  class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px" ><!--begin:Menu item--><div  data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"  class="menu-item menu-lg-down-accordion" ><!--begin:Menu link--><span class="menu-link py-3"  ><span  class="menu-icon" ><i class="ki-solid ki-handcart fs-2"></i></span><span  class="menu-title" >eCommerce</span><span  class="menu-arrow" ></span></span><!--end:Menu link--><!--begin:Menu sub--><div  class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-200px" ><!--begin:Menu item--><div  data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"  class="menu-item menu-lg-down-accordion" ><!--begin:Menu link--><span class="menu-link py-3"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Catalog</span><span  class="menu-arrow" ></span></span><!--end:Menu link--><!--begin:Menu sub--><div  class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px" ><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/ecommerce/catalog/products"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Products</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/ecommerce/catalog/categories"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Categories</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/ecommerce/catalog/add-product"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Add Product</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/ecommerce/catalog/edit-product"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Edit Product</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/ecommerce/catalog/add-category"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Add Category</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/ecommerce/catalog/edit-category"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Edit Category</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div  data-kt-menu-trigger="click"  class="menu-item menu-accordion menu-sub-indention" ><!--begin:Menu link--><span class="menu-link py-3"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Sales</span><span  class="menu-arrow" ></span></span><!--end:Menu link--><!--begin:Menu sub--><div  class="menu-sub menu-sub-accordion" ><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/ecommerce/sales/listing"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Orders Listing</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/ecommerce/sales/details"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Order Details</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/ecommerce/sales/add-order"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Add Order</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/ecommerce/sales/edit-order"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Edit Order</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div  data-kt-menu-trigger="click"  class="menu-item menu-accordion menu-sub-indention" ><!--begin:Menu link--><span class="menu-link py-3"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Customers</span><span  class="menu-arrow" ></span></span><!--end:Menu link--><!--begin:Menu sub--><div  class="menu-sub menu-sub-accordion" ><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/ecommerce/customers/listing"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Customers Listing</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/ecommerce/customers/details"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Customers Details</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div  data-kt-menu-trigger="click"  class="menu-item menu-accordion menu-sub-indention" ><!--begin:Menu link--><span class="menu-link py-3"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Reports</span><span  class="menu-arrow" ></span></span><!--end:Menu link--><!--begin:Menu sub--><div  class="menu-sub menu-sub-accordion" ><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/ecommerce/reports/view"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Products Viewed</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/ecommerce/reports/sales"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Sales</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/ecommerce/reports/returns"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Returns</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/ecommerce/reports/customer-orders"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Customer Orders</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/ecommerce/reports/shipping"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Shipping</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/ecommerce/settings"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Settings</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div  data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"  class="menu-item menu-lg-down-accordion" ><!--begin:Menu link--><span class="menu-link py-3"  ><span  class="menu-icon" ><i class="ki-solid ki-briefcase fs-2"></i></span><span  class="menu-title" >Customers</span><span  class="menu-arrow" ></span></span><!--end:Menu link--><!--begin:Menu sub--><div  class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-200px" ><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/customers/getting-started"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Getting Started</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/customers/list"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Customer Listing</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/customers/view"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Customer Details</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div  data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"  class="menu-item menu-lg-down-accordion" ><!--begin:Menu link--><span class="menu-link py-3"  ><span  class="menu-icon" ><i class="ki-solid ki-shield-tick fs-2"></i></span><span  class="menu-title" >User Management</span><span  class="menu-arrow" ></span></span><!--end:Menu link--><!--begin:Menu sub--><div  class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-200px" ><!--begin:Menu item--><div  data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"  class="menu-item menu-lg-down-accordion" ><!--begin:Menu link--><span class="menu-link py-3"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Users</span><span  class="menu-arrow" ></span></span><!--end:Menu link--><!--begin:Menu sub--><div  class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px" ><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/user-management/users/list"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Users List</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/user-management/users/view"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >View User</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div  data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"  class="menu-item menu-lg-down-accordion" ><!--begin:Menu link--><span class="menu-link py-3"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Roles</span><span  class="menu-arrow" ></span></span><!--end:Menu link--><!--begin:Menu sub--><div  class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px" ><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/user-management/roles/list"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Roles List</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/user-management/roles/view"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >View Roles</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/user-management/permissions"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Permissions</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div  data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"  class="menu-item menu-lg-down-accordion" ><!--begin:Menu link--><span class="menu-link py-3"  ><span  class="menu-icon" ><i class="ki-solid ki-file-added fs-2"></i></span><span  class="menu-title" >File Manager</span><span  class="menu-arrow" ></span></span><!--end:Menu link--><!--begin:Menu sub--><div  class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-200px" ><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/file-manager/folders"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Folders</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/file-manager/files"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Files</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/file-manager/blank"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Blank Directory</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/file-manager/settings"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Settings</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/calendar"  ><span  class="menu-icon" ><i class="ki-solid ki-calendar-8 fs-2"></i></span><span  class="menu-title" >Calendar</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start"  class="menu-item menu-lg-down-accordion" ><!--begin:Menu link--><span class="menu-link py-3"  ><span  class="menu-icon" ><i class="ki-solid ki-message-text-2 fs-2"></i></span><span  class="menu-title" >Chat</span><span  class="menu-arrow" ></span></span><!--end:Menu link--><!--begin:Menu sub--><div  class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-200px" ><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/chat/private"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Private Chat</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/chat/group"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Group Chat</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=apps/chat/drawer"  ><span  class="menu-bullet" ><span class="bullet bullet-dot"></span></span><span  class="menu-title" >Drawer Chat</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item--><!--begin:Menu item--><div  data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start"  class="menu-item menu-lg-down-accordion me-lg-1" ><!--begin:Menu link--><span class="menu-link py-3"  ><span  class="menu-title" >Resources</span><span  class="menu-arrow d-lg-none" ></span></span><!--end:Menu link--><!--begin:Menu sub--><div  class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px" ><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="https://preview.keenthemes.com/html/ceres-html-pro/docs/base/utilities" target="_blank" title="Check out over 200 in-house components, plugins and ready for use solutions" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right"  ><span  class="menu-icon" ><i class="ki-solid ki-element-8 fs-2"></i></span><span  class="menu-title" >Components</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="https://preview.keenthemes.com/html/ceres-html-pro/docs" target="_blank" title="Check out the complete documentation" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right"  ><span  class="menu-icon" ><i class="ki-solid ki-abstract-26 fs-2"></i></span><span  class="menu-title" >Documentation</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="?page=layout-builder" title="Build your layout, preview and export HTML for server side integration" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right"  ><span  class="menu-icon" ><i class="ki-solid ki-switch fs-2"></i></span><span  class="menu-title" >Layout Builder</span></a><!--end:Menu link--></div><!--end:Menu item--><!--begin:Menu item--><div  class="menu-item" ><!--begin:Menu link--><a class="menu-link py-3"  href="https://preview.keenthemes.com/html/ceres-html-pro/docs/getting-started/changelog" target="_blank"  ><span  class="menu-icon" ><i class="ki-solid ki-code fs-2"></i></span><span  class="menu-title" >Changelog v1.1.5</span></a><!--end:Menu link--></div><!--end:Menu item--></div><!--end:Menu sub--></div><!--end:Menu item-->    </div>
    <!--end::Menu-->
</div>
<!--end::Menu wrapper-->
				
			</div>
			<!--end::Navbar-->
			<!--begin::Topbar-->
	        <div class="d-flex align-items-stretch flex-shrink-0">
<!--layout-partial:layout/topbar/_base.html-->
			</div>
			<!--end::Topbar-->
		</div>
		<!--end::Wrapper-->
	</div>
	<!--end::Container-->
</div>
<!--end::Header-->

				
				<!--begin::Header-->
<div id="kt_header" class="header  align-items-stretch" 			data-kt-sticky="true"
		data-kt-sticky-name="header"
		data-kt-sticky-offset="{default: '200px', lg: '300px'}"
	>
	<!--begin::Container-->
	<div class=" container-xxl  d-flex align-items-center">
		<!--begin::Heaeder menu toggle-->
		<div class="d-flex align-items-center d-lg-none ms-n2 me-3" title="Show aside menu">
			<div class="btn btn-icon btn-custom w-35px h-35px w-md-40px h-md-40px" id="kt_header_menu_mobile_toggle">
				<i class="ki-solid ki-abstract-14 fs-2"></i>			</div>
		</div>
		<!--end::Heaeder menu toggle-->
		<!--begin::Header Logo-->
		<div class="header-logo me-5 me-md-10 flex-grow-1 flex-lg-grow-0">
			<a href="?page=index">
				<img alt="Logo" src="assets/media/logos/default-dark.svg" class="h-15px h-lg-20px logo-default"/>
				<img alt="Logo" src="assets/media/logos/default.svg" class="h-15px h-lg-20px logo-sticky"/>
			</a>
		</div>
		<!--end::Header Logo-->
		<!--begin::Wrapper-->
		<div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
			<!--begin::Navbar-->
			<div class="d-flex align-items-stretch" id="kt_header_nav">
<!--layout-partial:layout/header/_menu.html-->
			</div>
			<!--end::Navbar-->
			<!--begin::Topbar-->
	        <div class="d-flex align-items-stretch flex-shrink-0">
<!--layout-partial:layout/topbar/_base.html-->
			</div>
			<!--end::Topbar-->
		</div>
		<!--end::Wrapper-->
	</div>
	<!--end::Container-->
</div>
<!--end::Header-->
<!--layout-partial:layout/_toolbar.html-->
				<!--begin::Container-->
				<div id="kt_content_container" class="d-flex flex-column-fluid align-items-start  container-xxl ">
					<!--begin::Post-->
					<div class="content flex-row-fluid" id="kt_content">
<!--begin::Index-->
<div class="card card-page">
    <!--begin::Card body-->
    <div class="card-body">
        <!--begin::Row-->
        <div class="row gy-5 g-xl-8">
            <!--begin::Col-->
            <div class="col-xxl-6">
<!--layout-partial:partials/widgets-multipurpose/tables/_widget-1.html-->
            </div>
            <!--end::Col-->
            <!--begin::Col-->
            <div class="col-xxl-6">
                <!--begin::Row-->
                <div class="row g-5 g-xl-8">
                    <!--begin::Col-->
                    <div class="col-xxl-6">
<!--layout-partial:partials/widgets-multipurpose/statistics/_widget-1.html-->
<!--layout-partial:partials/widgets-multipurpose/mixed/_widget-1.html-->
                    </div>
                    <!--end::Col-->
                    <!--begin::Col-->
                    <div class="col-xxl-6">
<!--layout-partial:partials/widgets-multipurpose/mixed/_widget-2.html-->
<!--layout-partial:partials/widgets-multipurpose/engage/_widget-1.html-->
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Row-->
            </div>
            <!--end::Col-->
        </div>
        <!--end::Row-->
        <!--begin::Row-->
        <div class="row g-5 g-xl-8">
            <!--begin::Col-->
            <div class="col-xxl-6">
<!--layout-partial:partials/widgets-multipurpose/lists/_widget-1.html-->
            </div>
            <!--end::Col-->
            <!--begin::Col-->
            <div class="col-xxl-6">
<!--layout-partial:partials/widgets-multipurpose/lists/_widget-2.html-->
            </div>
            <!--end::Col-->
        </div>
        <!--end::Row-->
<!--layout-partial:partials/widgets-multipurpose/calendar/_widget-1.html-->
    </div>
    <!--end::Card body-->
</div>
<!--end::Index-->
					</div>
					<!--end::Post-->
				</div>
				<!--end::Container-->
<!--layout-partial:layout/_footer.html-->
			</div>
			<!--end::Wrapper-->
		</div>
		<!--end::Page-->
	</div>
	<!--end::Root-->
<!--layout-partial:partials/_drawers.html-->
<!--end::Main-->
<!--layout-partial:partials/_scrolltop.html-->
                    <!--begin::Modals-->
<!--layout-partial:partials/modals/_upgrade-plan.html-->
<!--layout-partial:partials/modals/_invite-friends.html-->
<!--layout-partial:partials/modals/create-campaign/_main.html-->
<!--layout-partial:partials/modals/_new-target.html-->
<!--layout-partial:partials/modals/users-search/_main.html-->
            <!--end::Modals-->
        <!--begin::Javascript-->
        <script>
            var hostUrl = "assets/";        </script>
                    <!--begin::Global Javascript Bundle(mandatory for all pages)-->
                            <script src="https://preview.keenthemes.com/ceres-html-pro/assets/plugins/global/plugins.bundle.js"></script>
                            <script src="https://preview.keenthemes.com/ceres-html-pro/assets/js/scripts.bundle.js"></script>
                        <!--end::Global Javascript Bundle-->
                    <!--begin::Vendors Javascript(used for this page only)-->
                            <script src="https://preview.keenthemes.com/ceres-html-pro/assets/plugins/custom/fullcalendar/fullcalendar.bundle.js"></script>
                            <script src="https://preview.keenthemes.com/ceres-html-pro/assets/plugins/custom/datatables/datatables.bundle.js"></script>
                        <!--end::Vendors Javascript-->
                    <!--begin::Custom Javascript(used for this page only)-->
                            <script src="https://preview.keenthemes.com/ceres-html-pro/assets/js/widgets.bundle.js"></script>
                            <script src="https://preview.keenthemes.com/ceres-html-pro/assets/js/custom/widgets.js"></script>
                            <script src="https://preview.keenthemes.com/ceres-html-pro/assets/js/custom/apps/chat/chat.js"></script>
                            <script src="https://preview.keenthemes.com/ceres-html-pro/assets/js/custom/utilities/modals/upgrade-plan.js"></script>
                            <script src="https://preview.keenthemes.com/ceres-html-pro/assets/js/custom/utilities/modals/create-campaign.js"></script>
                            <script src="https://preview.keenthemes.com/ceres-html-pro/assets/js/custom/utilities/modals/new-target.js"></script>
                            <script src="https://preview.keenthemes.com/ceres-html-pro/assets/js/custom/utilities/modals/users-search.js"></script>
                        <!--end::Custom Javascript-->
                <!--end::Javascript-->
            </body>
    <!--end::Body-->
</html>';
});
