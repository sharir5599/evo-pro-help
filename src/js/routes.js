// --------------------------------------
// IMPORTANT: The '/' route MUST be LAST
// --------------------------------------
// ROUTES
// --------------------------------------
// LANDING
// --------------------------------------
route('/', function() {
    riot.compile(function() {
        riot.mount('#appMount', 'landing-template');
        riot.mount('#globalNavMount', 'landing-template');
    });
});
// --------------------------------------
// test
// --------------------------------------
// route('/test', function() {
//     riot.compile(function() {
//         riot.mount('#appMount', 'app-global-nav');
//         riot.mount('#globalNavMount', 'auth-transition-template');
//     });
// });
// // --------------------------------------
// GUIDE HOME !!! DEFAULT ROUTE !!!
// --------------------------------------
// route('/', function() {
//     riot.compile(function() {
//         // -----------------------------------
//         // SUBDOMAIN HANDLER
//         // -----------------------------------
//         var hostname = window.location.hostname.split('.com')[0];
//         if (hostname.includes('.')) {
//             RC.trigger('UM_GET_COMPANY');
//             // SUBDOMAIN APP REDIRECT
//             if (evoAuth.currentUser) {
//                 // riot.mount('#appMount', 'app-global-nav');
//                 riot.mount('#globalNavMount', 'app-module-nav');
//                 riot.mount('#moduleNavMount', 'dashboard-company-template');
//             } else {
//                 // riot.mount('#appMount', 'app-global-nav');
//                 riot.mount('#globalNavMount', 'login-template');
//                 riot.mount('#moduleNavMount', 'login-template');
//             }
//             RC.trigger('LOG_DEBUG', 'Subdomain Detected!', 'routes');
//         } else {
//             // DEFAULT APP REDIRECT
//             riot.mount('#appMount', 'landing-template');
//             riot.mount('#globalNavMount', 'landing-template');
//         }
//     });
// });
