// --------------------------------------
// IMPORTANT: The '/' route MUST be LAST
// --------------------------------------
// ROUTES
// --------------------------------------
// LANDING
// --------------------------------------
function mountLanding() {
    riot.compile(function() {
        riot.mount('#appMount', 'landing-app-subscreen-nav');
        // riot.mount('#globalNavMount', 'app-subscreen-nav');
        riot.mount('#landing_subscreenNavMount', 'landing-template');
    });
}
route('/landing', function() {
    mountLanding();
});
route('/', function() {
    mountLanding();
});