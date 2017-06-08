// --------------------------------------
// app MODULE
// --------------------------------------
var appModule = function() {
    // --------------------------------------
    // app MODEL
    // --------------------------------------
    var model = {};
    model = {
        AppName: localStorage.AppName || null
    }
    // -------------------------------------
    // SET USER MODEL
    // -------------------------------------
    var setModel = function(m) {
        if (m) {
            model = m;
        }
    }
    var setAppName = function(name) {
        if (name) {
            model.AppName = name;
            localStorage.AppName = name;
            RC.trigger('UI_SET_STATE', { AppName:name });
        }
    }
    var detect = function() {
        // -----------------------------------
        // SUBDOMAIN HANDLER
        // -----------------------------------
        var appName;
        if (window.location.hostname.includes('.com')) {
            appName = window.location.hostname.substring(0,window.location.hostname.length-4);
        }else {
            appName = window.location.hostname;
        }
        if (localStorage.debug == 'true') {
            console.log(appName);
        }
        if (appName.includes('.')) {
            var AppName = appName.substring(0,appName.length-10);
            setAppName(AppName);
            // console.log(AppName);
            if (localStorage.debug == 'true') {
                console.log('SUBDOMAIN DETECTED!');
                console.log(AppName);
            }
            // if (AppName != model.AppName) {
                RC.trigger('CM_GET_COMPANY_BY_APPNAME', AppName);
                // console.log(localStorage.AppName);
            // }
        }
    }
	// --------------------------------------
	// PUBLIC METHOD(S)
	// --------------------------------------
	return {
        setModel: function(model) { return setModel(model); },
        setAppName: function(name) { return setAppName(name); },
        model: function() { return model; },
        detect: function() { return detect(); }
	}
}
