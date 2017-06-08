const RC = RiotControl; // Global RiotControl Shortcut
// ----------------------------------------
// FIREBASE INIT
// ----------------------------------------
// Initialize Firebase below...
firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		RC.trigger('UM_GET_USER');
		// const messaging = firebase.messaging();
		// REQUEST PUSH NOTIFICATION PERMISSION
		// messagingModule.requestPermission();
		// SET CURRENT USER UID
		RC.trigger('UM_SET_UID', user.uid);
		localStorage.signedIn = true;
		RC.trigger('UI_SET_STATE', { signedIn:true });
	} else {
		if (!window.location.hash.includes('email=')) {
			localStorage.removeItem('signedIn');
			RC.trigger('AM_SIGN_OUT');
			RC.trigger('UI_SET_STATE', { signedIn:false });
		}
	}
});
RC.trigger('LOG_DEBUG', 'DEBUG MODE ENABLED!');
// ----------------------------------------
// QBO
// ----------------------------------------
oauthQBO = function() {
	if (localStorage.CompanyID) {
		intuit.ipp.anywhere.setup({
			grantUrl: 'http://localhost:8001/requestToken/' + localStorage.CompanyID,
			datasources: {
				quickbooks: true,
				payments: false
			}
		});
		intuit.ipp.anywhere.directConnectToIntuit();
	}else {
		alert('Missing CompanyID from Local Storage!');
	}
}
initRCStores = function() {
	// ----------------------------------------
	// RESET DATA STORES
	// -----------------------------------------
	RC.reset();
	// ----------------------------------------
	// REGISTER DATA STORES
	// ----------------------------------------
	var UI = new UserInterface();
	var UM = new userModule();
	var LM = new listModule();
	var IM = new integrationsModule();
	var CM = new companyModule();
	var QM = new qboModule();
	var SM = new slackModule();
	var AM = new AuthModule();
	var BM = new billingModule();
	var LOGM = new logModule();
	var POSM = new POS_MODULE();
	RC.addStore(UI); // UI State Manager
	RC.addStore(IM); // Integrations Module
	RC.addStore(UM); // User Data Module
	RC.addStore(CM); // Company Data Module
	RC.addStore(LM); // List Data Module
	RC.addStore(QM); // QBO Data Module
	RC.addStore(SM); // Slack Data Module
	RC.addStore(AM); // Auth Data Module
	RC.addStore(BM); // Billing Data Module
	RC.addStore(LOGM); // Log Module
	RC.addStore(POSM); // POS Module
}
// ----------------------------------------
// IO OBSERVABLE
// ----------------------------------------
// Input & Output for UI Events
// ----------------------------------------
var IO = riot.observable();
// ----------------------------------------
// RIOT STARTUP
// ----------------------------------------
riot.compile(function() {
	initRCStores(); // INIT DATA STORES
	// ----------------------------------------
	// REGISTER MIXINS
	// ----------------------------------------
	riot.mixin('GF',GF,true); // Global Functions
	RC.trigger('AM_GET_STATUS');
	appModule().detect();
	if (window.location.hash.includes('integrations')) {
		RC.trigger('IM_GET_INTEGRATIONS_LIST'); // INIT INTEGRATIONS MODULE
	}
	// ----------------------------------------
	// START ROUTER
	// ----------------------------------------
	route.start(true); // Start Router
});
