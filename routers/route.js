var express = require('express');
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });
var validator = require('express-validator');

module.exports = function (app) {

      function isUserAllowed(req, res, next) {
            sess = req.session;
            if (sess.user) {
                  return next();
            }
            else { res.redirect('/login'); }
      }

      app.get('/', isUserAllowed, function (req, res) {
            res.locals = { title: 'Dashboard' };
            res.render('Dashboard/index');
      });

      // Layouts 
      app.get('/layouts-light-sidebar', isUserAllowed, function (req, res) {
            res.locals = { title: 'Light Sidebar' };
            res.render('Dashboard/index', { layout: 'layoutsLightSidebar' });
      });
      app.get('/layouts-compact-sidebar', isUserAllowed, function (req, res) {
            res.locals = { title: 'Compact Sidebar' };
            res.render('Dashboard/index', { layout: 'layoutsCompactSidebar' });
      });
      app.get('/layouts-icon-sidebar', isUserAllowed, function (req, res) {
            res.locals = { title: 'Icon Sidebar' };
            res.render('Dashboard/index', { layout: 'layoutsIconSidebar' });
      });
      app.get('/layouts-boxed', isUserAllowed, function (req, res) {
            res.locals = { title: 'Boxed Width' };
            res.render('Dashboard/index', { layout: 'layoutsBoxed' });
      });
      app.get('/layouts-preloader', isUserAllowed, function (req, res) {
            res.locals = { title: 'Preloader' };
            res.render('Dashboard/index', { layout: 'layoutsPreloader' });
      });
      app.get('/layouts-colored-sidebar', isUserAllowed, function (req, res) {
            res.locals = { title: 'Colored Sidebar' };
            res.render('Dashboard/index', { layout: 'layoutsColoredSidebar' });
      });


      app.get('/layouts-horizontal', isUserAllowed, function (req, res) {
            res.locals = { title: 'Horizontal' };
            res.render('Dashboard/index', { layout: 'layoutsHorizontal' });
      });
      app.get('/layouts-hori-topbar-light', isUserAllowed, function (req, res) {
            res.locals = { title: 'Topbar Light' };
            res.render('Dashboard/index', { layout: 'layoutsHTopbarLight' });
      });
      app.get('/layouts-hori-boxed-width', isUserAllowed, function (req, res) {
            res.locals = { title: 'Boxed Width' };
            res.render('Dashboard/index', { layout: 'layoutsHBoxed' });
      });
      app.get('/layouts-hori-preloader', isUserAllowed, function (req, res) {
            res.locals = { title: 'Preloader' };
            res.render('Dashboard/index', { layout: 'layoutsHPreloader' });
      });
      app.get('/layouts-hori-colored-header', isUserAllowed, function (req, res) {
            res.locals = { title: 'Colored Header' };
            res.render('Dashboard/index', { layout: 'layoutsHColoredHeader' });
      });

      // Dark and RTL Mode Vertical
      app.get("/vertical-dark", isUserAllowed, function (req, res) {
            res.locals = { title: 'Vertical Dark' };
            res.render("Dashboard/index", { layout: "vertical-dark-layout" });
      });

      app.get("/vertical-rtl", isUserAllowed, function (req, res) {
            res.locals = { title: 'Vertical Rtl' };
            res.render("Dashboard/index", { layout: "vertical-rtl-layout" });
      });

      // Dark and RTL Mode Horizontal
      app.get("/horizontal-dark", isUserAllowed, function (req, res) {
            res.locals = { title: 'Horizontal Dark' };
            res.render("Dashboard/index", { layout: "horizontal-dark-layout" });
      });

      app.get("/horizontal-rtl", isUserAllowed, function (req, res) {
            res.locals = { title: 'Horizontal Rtl' };
            res.render("Dashboard/index", { layout: "horizontal-rtl-layout" });
      });

      // Calendar
      app.get('/calendar', isUserAllowed, function (req, res) {
            res.locals = { title: 'Calendar' };
            res.render('Calendar/calendar');
      });

      // Chat
      app.get('/apps-chat', isUserAllowed, function (req, res) {
            res.locals = { title: 'Chat' };
            res.render('Chat/apps-chat');
      });

      //Ecommerce
      app.get('/ecommerce-products', isUserAllowed, function (req, res) {
            res.locals = { title: 'Products' };
            res.render('Ecommerce/ecommerce-products');
      });

      app.get('/ecommerce-product-detail', isUserAllowed, function (req, res) {
            res.locals = { title: 'Product Detail' };
            res.render('Ecommerce/ecommerce-product-detail');
      });

      app.get('/ecommerce-orders', isUserAllowed, function (req, res) {
            res.locals = { title: 'Orders' };
            res.render('Ecommerce/ecommerce-orders');
      });

      app.get('/ecommerce-customers', isUserAllowed, function (req, res) {
            res.locals = { title: 'Customers' };
            res.render('Ecommerce/ecommerce-customers');
      });

      app.get('/ecommerce-cart', isUserAllowed, function (req, res) {
            res.locals = { title: 'Cart' };
            res.render('Ecommerce/ecommerce-cart');
      });

      app.get('/ecommerce-checkout', isUserAllowed, function (req, res) {
            res.locals = { title: 'Checkout' };
            res.render('Ecommerce/ecommerce-checkout');
      });

      app.get('/ecommerce-shops', isUserAllowed, function (req, res) {
            res.locals = { title: 'Shops' };
            res.render('Ecommerce/ecommerce-shops');
      });

      app.get('/ecommerce-add-product', isUserAllowed, function (req, res) {
            res.locals = { title: 'Add Product' };
            res.render('Ecommerce/ecommerce-add-product');
      });

      // Email
      app.get('/email-inbox', isUserAllowed, function (req, res) {
            res.locals = { title: 'Inbox' };
            res.render('Email/email-inbox');
      });
      app.get('/email-read', isUserAllowed, function (req, res) {
            res.locals = { title: 'Email Read' };
            res.render('Email/email-read');
      });

      //kanban board
      app.get('/apps-kanban-board', isUserAllowed, function (req, res) {
            res.locals = { title: 'Kanban Board' };
            res.render('KanbanBoard/apps-kanban-board');
      });

      // Utility
      app.get('/pages-starter', isUserAllowed, function (req, res) {
            res.locals = { title: 'Starter page' };
            res.render('Pages/pages-starter');
      });
      app.get('/pages-maintenance', isUserAllowed, function (req, res) {
            res.locals = { title: 'Maintenance' };
            res.render('Pages/pages-maintenance');
      });
      app.get('/pages-comingsoon', isUserAllowed, function (req, res) {
            res.locals = { title: 'Coming Soon' };
            res.render('Pages/pages-comingsoon');
      });
      app.get('/pages-timeline', isUserAllowed, function (req, res) {
            res.locals = { title: 'Timeline' };
            res.render('Pages/pages-timeline');
      });
      app.get('/pages-faqs', isUserAllowed, function (req, res) {
            res.locals = { title: 'FAQs' };
            res.render('Pages/pages-faqs');
      });
      app.get('/pages-pricing', isUserAllowed, function (req, res) {
            res.locals = { title: 'Pricing' };
            res.render('Pages/pages-pricing');
      });
      app.get('/pages-404', isUserAllowed, function (req, res) {
            res.locals = { title: '404 Error' };
            res.render('Pages/pages-404');
      });
      app.get('/pages-500', isUserAllowed, function (req, res) {
            res.locals = { title: '500 Error' };
            res.render('Pages/pages-500');
      });


      // // UI Elements
      app.get('/ui-alerts', isUserAllowed, function (req, res) {
            res.locals = { title: 'Alerts' };
            res.render('Ui/ui-alerts');
      });
      app.get('/ui-buttons', isUserAllowed, function (req, res) {
            res.locals = { title: 'Buttons' };
            res.render('Ui/ui-buttons');
      });
      app.get('/ui-cards', isUserAllowed, function (req, res) {
            res.locals = { title: 'Cards' };
            res.render('Ui/ui-cards');
      });
      app.get('/ui-carousel', isUserAllowed, function (req, res) {
            res.locals = { title: 'Carousel' };
            res.render('Ui/ui-carousel');
      });
      app.get('/ui-dropdowns', isUserAllowed, function (req, res) {
            res.locals = { title: 'Dropdowns' };
            res.render('Ui/ui-dropdowns');
      });
      app.get('/ui-grid', isUserAllowed, function (req, res) {
            res.locals = { title: 'Grid' };
            res.render('Ui/ui-grid');
      });
      app.get('/ui-images', isUserAllowed, function (req, res) {
            res.locals = { title: 'Images' };
            res.render('Ui/ui-images');
      });
      app.get('/ui-lightbox', isUserAllowed, function (req, res) {
            res.locals = { title: 'Lightbox' };
            res.render('Ui/ui-lightbox');
      });
      app.get('/ui-modals', isUserAllowed, function (req, res) {
            res.locals = { title: 'Modals' };
            res.render('Ui/ui-modals');
      });
      app.get('/ui-rangeslider', isUserAllowed, function (req, res) {
            res.locals = { title: 'Range Slider' };
            res.render('Ui/ui-rangeslider');
      });
      app.get('/ui-roundslider', isUserAllowed, function (req, res) {
            res.locals = { title: 'Round slider' };
            res.render('Ui/ui-roundslider');
      });
      app.get('/ui-session-timeout', isUserAllowed, function (req, res) {
            res.locals = { title: 'Session Timeout' };
            res.render('Ui/ui-session-timeout');
      });
      app.get('/ui-progressbars', isUserAllowed, function (req, res) {
            res.locals = { title: 'Progress Bars' };
            res.render('Ui/ui-progressbars');
      });
      app.get('/ui-sweet-alert', isUserAllowed, function (req, res) {
            res.locals = { title: 'SweetAlert 2' };
            res.render('Ui/ui-sweet-alert');
      });
      app.get('/ui-tabs-accordions', isUserAllowed, function (req, res) {
            res.locals = { title: 'Tabs & Accordions' };
            res.render('Ui/ui-tabs-accordions');
      });
      app.get('/ui-typography', isUserAllowed, function (req, res) {
            res.locals = { title: 'Typography' };
            res.render('Ui/ui-typography');
      });
      app.get('/ui-video', isUserAllowed, function (req, res) {
            res.locals = { title: 'Video' };
            res.render('Ui/ui-video');
      });
      app.get('/ui-general', isUserAllowed, function (req, res) {
            res.locals = { title: 'General' };
            res.render('Ui/ui-general');
      });
      app.get('/ui-rating', isUserAllowed, function (req, res) {
            res.locals = { title: 'Rating' };
            res.render('Ui/ui-rating');
      });
      app.get('/ui-notifications', isUserAllowed, function (req, res) {
            res.locals = { title: 'Notifications' };
            res.render('Ui/ui-notifications');
      });

      // Forms
      app.get('/form-elements', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form Elements' };
            res.render('Form/form-elements');
      });
      app.get('/form-validation', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form Validation' };
            res.render('Form/form-validation');
      });
      app.get('/form-advanced', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form Advanced' };
            res.render('Form/form-advanced');
      });
      app.get('/form-editors', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form Editor' };
            res.render('Form/form-editors');
      });
      app.get('/form-uploads', isUserAllowed, function (req, res) {
            res.locals = { title: 'File Upload' };
            res.render('Form/form-uploads');
      });
      app.get('/form-xeditable', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form Xeditable' };
            res.render('Form/form-xeditable');
      });
      app.get('/form-wizard', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form Wizard' };
            res.render('Form/form-wizard');
      });
      app.get('/form-mask', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form Mask' };
            res.render('Form/form-mask');
      });

      // Tables
      app.get('/tables-basic', isUserAllowed, function (req, res) {
            res.locals = { title: 'Basic Tables' };
            res.render('Tables/tables-basic');
      });
      app.get('/tables-datatable', isUserAllowed, function (req, res) {
            res.locals = { title: 'Data Tables' };
            res.render('Tables/tables-datatable');
      });
      app.get('/tables-responsive', isUserAllowed, function (req, res) {
            res.locals = { title: 'Responsive Table' };
            res.render('Tables/tables-responsive');
      });
      app.get('/tables-editable', isUserAllowed, function (req, res) {
            res.locals = { title: 'Editable Table' };
            res.render('Tables/tables-editable');
      });


      // Charts
      app.get('/charts-apex', isUserAllowed, function (req, res) {
            res.locals = { title: 'Apex charts' };
            res.render('Charts/charts-apex');
      });
      app.get('/charts-chartjs', isUserAllowed, function (req, res) {
            res.locals = { title: 'Chartjs' };
            res.render('Charts/charts-chartjs');
      });
      app.get('/charts-flot', isUserAllowed, function (req, res) {
            res.locals = { title: 'Flot Chart' };
            res.render('Charts/charts-flot');
      });
      app.get('/charts-knob', isUserAllowed, function (req, res) {
            res.locals = { title: 'Jquery Knob' };
            res.render('Charts/charts-knob');
      });
      app.get('/charts-sparkline', isUserAllowed, function (req, res) {
            res.locals = { title: 'Sparkline Chart' };
            res.render('Charts/charts-sparkline');
      });


      // Icons
      app.get('/icons-remix', isUserAllowed, function (req, res) {
            res.locals = { title: 'Remix Icons' };
            res.render('Icons/icons-remix');
      });
      app.get('/icons-materialdesign', isUserAllowed, function (req, res) {
            res.locals = { title: 'Material Design Icons' };
            res.render('Icons/icons-materialdesign');
      });
      app.get('/icons-dripicons', isUserAllowed, function (req, res) {
            res.locals = { title: 'Dripicons' };
            res.render('Icons/icons-dripicons');
      });
      app.get('/icons-fontawesome', isUserAllowed, function (req, res) {
            res.locals = { title: 'Font Awesome 5' };
            res.render('Icons/icons-fontawesome');
      });

      // Maps
      app.get('/maps-google', isUserAllowed, function (req, res) {
            res.locals = { title: 'Google Maps' };
            res.render('Maps/maps-google');
      });
      app.get('/maps-vector', isUserAllowed, function (req, res) {
            res.locals = { title: 'Vector Maps' };
            res.render('Maps/maps-vector');
      });
      
      // Wp-Monitor

      app.get('/dashboardwp', isUserAllowed, function (req, res) {
            res.locals = { title: 'Dashboard' };
            res.render('dashboardwp');
      });

}