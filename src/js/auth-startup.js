// --------------------------------------
// FIREBASE AUTH
// --------------------------------------
var config = {};
var EVO_PRO_AppConfig = {};
var DEV_authAppConfig = {
    apiKey: "AIzaSyBKxpqlUq7Q6Dg3eZuD8wWmnOzYd4Fe1mQ",
    authDomain: "staging-accounts-hub.firebaseapp.com",
    databaseURL: "https://staging-accounts-hub.firebaseio.com",
    projectId: "staging-accounts-hub",
    storageBucket: "staging-accounts-hub.appspot.com",
    messagingSenderId: "446927877851"
};
var DEV_EVO_PRO_AppConfig = {
    apiKey: "AIzaSyCtAlfzYn5dgpd25hWAKQDaEHJBm2vYs2I",
    authDomain: "evo-pro-staging.firebaseapp.com",
    databaseURL: "https://evo-pro-staging.firebaseio.com",
    projectId: "evo-pro-staging",
    storageBucket: "evo-pro-staging.appspot.com",
    messagingSenderId: "877193503160"
}
var PROD_authAppConfig = {
    apiKey: "AIzaSyDXL2A1Swlv0F7DzjgyogNBsrSewzE7iUQ",
    authDomain: "evosus-products.firebaseapp.com",
    databaseURL: "https://evosus-products.firebaseio.com",
    projectId: "evosus-products",
    storageBucket: "evosus-products.appspot.com",
    messagingSenderId: "39894149726"
};
var PROD_EVO_PRO_AppConfig = {
    apiKey: "AIzaSyB-rnSzkxZcRezuk6VtrgoBs_CLimk3jCE",
    authDomain: "ep-production-161100.firebaseapp.com",
    databaseURL: "https://ep-production-161100.firebaseio.com",
    projectId: "ep-production-161100",
    storageBucket: "ep-production-161100.appspot.com",
    messagingSenderId: "565015586701"
}
switch (window.location.host) {
    case 'localhost:8001':
        config = DEV_authAppConfig;
        EVO_PRO_AppConfig = DEV_EVO_PRO_AppConfig;
        RiotControl.trigger('LOG_DEBUG','DEV APP CONFIG!','auth');
        break;
    case 'evosuspro.com':
    default:
        // config = PROD_authAppConfig;
        config = DEV_authAppConfig;
        EVO_PRO_AppConfig = DEV_EVO_PRO_AppConfig;
        // EVO_PRO_AppConfig = PROD_EVO_PRO_AppConfig;
        RiotControl.trigger('LOG_DEBUG','PRODUCTION APP CONFIG!','auth');
}
firebase.initializeApp(config);
var EVO_PRO_APP = firebase.initializeApp(EVO_PRO_AppConfig, "Evosus Pro");
// FB SHORTCUTS
var evoAuth = firebase.auth();
var EVO_PRO_Auth = EVO_PRO_APP.auth();
var userDB = firebase.database();
var authStorage = firebase.storage();
var EVO_PRO_DB = EVO_PRO_APP.database();
var EvoProMessaging = EVO_PRO_APP.messaging();
firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
        RC.trigger('UM_SET_UID', user.uid);
		localStorage.signedIn = true;
	}else {
		localStorage.removeItem('signedIn');
        // localStorage.removeItem('uid');
	}
});
RiotControl.trigger('LOG_DEBUG','AUTH LOADED!','auth');
