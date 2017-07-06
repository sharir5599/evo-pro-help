// --------------------------------------
// IMPORTANT: The '/' route MUST be LAST
// --------------------------------------
// ROUTES
// --------------------------------------
// HELP
// --------------------------------------
function mountHelp() {
    console.log('route to help');
    riot.compile(function() {
        riot.mount('#appMount', 'help-nav');
        // riot.mount('#globalNavMount', 'app-subscreen-nav');
        riot.mount('#landing_subscreenNavMount', 'help-template');
    });
}
route('/help', function() {
    mountHelp();
});
route('/', function() {
    mountLanding();
});