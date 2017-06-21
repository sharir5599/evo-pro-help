// --------------------------------------
// IMPORTANT: The '/' route MUST be LAST
// --------------------------------------
// ROUTES
// --------------------------------------
// LANDING
// --------------------------------------
function mountLanding() {
    riot.compile(function() {
        riot.mount('#appMount', 'landing-template');
        riot.mount('#globalNavMount', 'landing-template');
    });
}
route('/landing', function() {
    mountLanding();
});
route('/', function() {
    mountLanding();
});