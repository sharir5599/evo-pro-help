// --------------------------------------
// UI MODULE
// --------------------------------------
var UserInterface = function() {
	riot.observable(this);
	var self = this;
	// CHECK LOCALSTORAGE
	var companyModule = {};
	localStorage.companyModule ? companyModule = JSON.parse(localStorage.companyModule) : companyModule = {};
	var userModule = {};
	localStorage.userModule ? userModule = JSON.parse(localStorage.userModule) : userModule = {};
	var appModule = {};
	localStorage.appModule ? appModule = JSON.parse(localStorage.appModule) : appModule = {};
	var listModule = {};
	localStorage.listModule ? listModule = JSON.parse(localStorage.listModule) : listModule = {};
	var billingModule = {};
	localStorage.billingModule ? billingModule = JSON.parse(localStorage.billingModule) : billingModule = {};
	var integrationsModule = {};
	localStorage.integrationsModule ? integrationsModule = JSON.parse(localStorage.integrationsModule) : integrationsModule = {};
	var qboModule = {};
	localStorage.qboModule ? qboModule = JSON.parse(localStorage.qboModule) : qboModule = {};
	var slackModule = {};
	localStorage.slackModule ? slackModule = JSON.parse(localStorage.slackModule) : slackModule = {};
	var securityModule = {};
	localStorage.securityModule ? securityModule = JSON.parse(localStorage.securityModule) : securityModule = {};
	var userList = [];
	localStorage.userModule_list ? userList = JSON.parse(localStorage.userModule_list) : userList = [];
    var companyList = [];
    localStorage.userModule_companyList ? companyList = JSON.parse(localStorage.userModule_companyList) : companyList = [];
	var AuthModule = [];
    localStorage.AuthModule ? AuthModule = JSON.parse(localStorage.AuthModule) : AuthModule = [];
	var listModule_detail;
    localStorage.listModule_detail ? listModule_detail = JSON.parse(localStorage.listModule_detail) : listModule_detail = [];
	var logModule;
    localStorage.logModule ? logModule = JSON.parse(localStorage.logModule) : logModule = [];
	var logModule_list;
    localStorage.logModule_list ? logModule_list = JSON.parse(localStorage.logModule_list) : logModule_list = [];
	var POS_MODULE;
	localStorage.POS_MODULE ? POS_MODULE = JSON.parse(localStorage.POS_MODULE) : POS_MODULE = {};
	var POS_MODULE_stations;
	localStorage.POS_MODULE_stations ? POS_MODULE_stations = JSON.parse(localStorage.POS_MODULE_stations) : POS_MODULE_stations = {};
	var POS_MODULE_stations_details;
	localStorage.POS_MODULE_station_details ? POS_MODULE_stations_details = JSON.parse(localStorage.POS_MODULE_station_details) : POS_MODULE_station_details = {};
	// -------------------
	// STATE OBJECT MODEL
	// -------------------
	var state = {};
	localStorage.UI_STATE ? state = JSON.parse(localStorage.UI_STATE) : state = {
		banner:"",
		iconBar:"",
		mdicon:"",
		modal:"",
		navMenu:"",
		route:"",
		tab:"",
		title:"",
		toast:"",
		hideMenuIcon: "",
		showLoginIcon: "",
		spinner:"",
		spinner_msg:"",
		showPOSModal:false,
		signedIn: localStorage.signedIn || false,
		companyModule:companyModule,
		companyID: localStorage.CompanyID || companyModule.ID || null,
		companyName: localStorage.CompanyName || companyModule.Name || null,
		slackModule: slackModule,
		billingModule: billingModule,
		userModule:userModule,
		userCompanyList:companyList,
		userList:userList,
		appModule:appModule,
		AuthModule:AuthModule,
		listModule:listModule,
		integrationsModule:integrationsModule,
		qboModule:qboModule,
		securityModule:securityModule,
		listModule_detail:listModule_detail,
		logModule:logModule,
		logModule_list:logModule_list,
		POS_MODULE:POS_MODULE,
		POS_MODULE_stations:POS_MODULE_stations,
		POS_MODULE_station_details:POS_MODULE_station_details
	}
	localStorage.UI_STATE = JSON.stringify(state);
	// --------------------------------------
	// STATE CHANGED
	// --------------------------------------
	stateChanged = function() {
		self.trigger('UI_STATE_CHANGED',state);
		localStorage.UI_STATE = JSON.stringify(state);
	}
	// --------------------------------------
	// TOGGLES
	// --------------------------------------
	self.on('UI_TOGGLE_NAV_MENU',function() {
		state.navMenu ? state.navMenu = false : state.navMenu = true ;
		stateChanged();
	});
	// --------------------------------------
	// SETTERS
	// --------------------------------------
	self.on('UI_SET_BANNER',function(banner) {
		state.banner = banner;
		stateChanged();
	});
	self.on('UI_SET_ICON_BAR',function(iconBar) {
		state.iconBar = iconBar;
		stateChanged();
	});
	self.on('UI_SET_MODAL',function(modal) {
		state.modal = modal;
		stateChanged();
	});
	self.on('UI_SET_TAB',function(tab) {
		state.tab = tab;
		stateChanged();
	});
	self.on('UI_SET_TITLE',function(title) {
		state.title = title;
		stateChanged();
	});
	self.on('UI_SET_TOAST',function(toast) {
		state.toast = toast;
		stateChanged();
	});
	self.on('UI_SET_SPINNER',function(boolean,msg) {
		if (boolean == true || boolean == 'true') {
			state.spinner = true;
			msg ? state.spinner_msg = msg : state.spinner_msg = '...';
			spinner = true;
		}else {
			state.spinner = false;
			state.spinner_msg = '...';
			spinner = false;
		}
		riot.update(state,spinner)
		stateChanged();
	});
	self.on('UI_SET_STATE',function(newState) {
		for(var key in newState) {
			state[key] = newState[key];
		}
		stateChanged();
	});
};
