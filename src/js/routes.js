// --------------------------------------
// IMPORTANT: The '/' route MUST be LAST
// --------------------------------------
// ROUTES
// --------------------------------------
// LANDING
// --------------------------------------
function mountLanding() {
    riot.compile(function() {
        riot.mount('#appMount', 'app-subscreen-nav');
        // riot.mount('#globalNavMount', 'app-subscreen-nav');
        riot.mount('#subscreenNavMount', 'landing-template');
    });
}
route('/landing', function() {
    mountLanding();
});
route('/', function() {
    mountLanding();
});