// --------------------------------------
// IMPORTANT: The '/' route MUST be LAST
// --------------------------------------
// ROUTES
// --------------------------------------
// --------------------------------------
// POS
// --------------------------------------
route('/pos', function() {
    riot.compile(function() {;
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'app-module-nav');
        riot.mount('#moduleNavMount', 'pos-template');
    });
});
// --------------------------------------
// POS - LOGGED INTO STATION
// --------------------------------------
route('/pos/*/transaction', function(stationID) {
    localStorage.routeID = stationID;
	RC.trigger('UI_SET_STATE', { route:'/pos/' + stationID, currentStationID:stationID });
	RC.trigger('POS_GET_STATION_DETAIL', stationID);
    riot.compile(function() {
        hashObj = {
            routeID: stationID,
        };
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'app-module-nav');
        riot.mount('#moduleNavMount', 'pos-template', {
            data: {
                hashObj: hashObj
            }
        });
    });
});
var addStationPrompt = function() {
    var r = confirm("No Stations Found.... Click OK to Add a POS Station.");
    if (r == true) {
        route('/pos/stations/add');
    } else {
        history.back();
    }
}
// --------------------------------------
// POS Login
// --------------------------------------
route('/pos/login', function() {
    RC.trigger('POS_GET_STATIONS');
    localStorage.POS_MODULE_stations ? route('/pos/login/' + JSON.parse(localStorage.POS_MODULE_stations)[0].ID) :
        addStationPrompt();
});
// --------------------------------------
// POS OPEN STATION
// --------------------------------------
route('/pos/login/*', function(stationID) {
	localStorage.routeID = stationID;
	RC.trigger('UI_SET_STATE', { route:'/pos/login/' + stationID, currentStationID:stationID });
	RC.trigger('POS_GET_STATION_DETAIL', stationID);
    riot.compile(function() {;
        hashObj = {
            routeID: stationID,
        };
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'pos-login-template');
        riot.mount('#moduleNavMount', 'pos-login-template', {
            data: {
                hashObj: hashObj
            }
        });
    });
});
// --------------------------------------
// POS STATIONS
// --------------------------------------
route('/pos/stations', function() {
    riot.compile(function() {
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'app-module-nav');
        riot.mount('#moduleNavMount', 'pos-stations-template');
    });
});
// --------------------------------------
// POS STATIONS (DETAIL) ADD/UPDATE
// --------------------------------------
route('/pos/stations/*', function() {
    riot.compile(function() {
        hashObj = {
            routeID: window.location.hash.substring(14),
        };
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'app-subscreen-nav');
        riot.mount('#subscreenNavMount', 'pos-stations-detail-template', {
            data: {
                hashObj: hashObj
            }
        });
    });
});
// --------------------------------------
// GLOBAL LIST
// --------------------------------------
route('/list', function() {
    riot.compile(function() {
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'app-module-nav');
        riot.mount('#moduleNavMount', 'global-list-template');
    });
});
// --------------------------------------
// LIST - CUSTOMIZED
// --------------------------------------
route('/list/*', function(routeID) {
    riot.compile(function() {
        var hashObj = {};
        hashObj = {
            routeID: routeID
        };
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'app-subscreen-nav');
        riot.mount('#subscreenNavMount', 'list-type-template', {
            data: {
                hashObj: hashObj
            }
        });
    });
});
// --------------------------------------
// LIST - DETAIL
// --------------------------------------
route('/list/*/*', function(firstHash, secondHash) {
    riot.compile(function() {
        var hashObj = {};
        hashObj = {
            routeID: window.location.hash.substring(6),
            firstHash: firstHash,
            secondHash: secondHash
        };
        RC.trigger('LM_GET_DETAILED_LIST_DATA', hashObj);
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'app-subscreen-nav');
        riot.mount('#subscreenNavMount', 'list-detail-template', {
            data: {
                hashObj: hashObj
            }
        });
        if (localStorage.debug == 'true') {
            console.dir(hashObj);
        }
    });
});
// --------------------------------------
// DASHBOARD - COMPANY
// --------------------------------------
route('/dashboard/company', function() {
    riot.compile(function() {
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'app-module-nav');
        riot.mount('#moduleNavMount', 'dashboard-company-template');
    });
});
// --------------------------------------
// DASHBOARD - COMPANY
// --------------------------------------
route('/dashboard', function() {
    riot.compile(function() {
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'app-module-nav');
        riot.mount('#moduleNavMount', 'dashboard-template');
    });
});
// --------------------------------------
// DASHBOARD - My Account
// --------------------------------------
route('/dashboard/my-account', function() {
    riot.compile(function() {
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'app-subscreen-nav');
        riot.mount('#subscreenNavMount', 'dashboard-myaccount-template');
    });
});
// --------------------------------------
// Manage Users
// --------------------------------------
route('/user/list', function() {
    riot.compile(function() {
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'app-subscreen-nav');
        riot.mount('#subscreenNavMount', 'user-list-template');
    });
});
// --------------------------------------
// Integrations
// --------------------------------------
route('/integrations', function() {
    riot.compile(function() {
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'app-module-nav');
        riot.mount('#moduleNavMount', 'integrations-template');
    });
});
// --------------------------------------
// Slack Integration
// --------------------------------------
route('/integrations/slack', function() {
    riot.compile(function() {
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'app-module-nav');
        riot.mount('#moduleNavMount', 'slack-template');
    });
});
// --------------------------------------
// QBO Integration
// --------------------------------------
route('/integrations/qbo', function() {
    riot.compile(function() {
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'app-module-nav');
        riot.mount('#moduleNavMount', 'qbo-template');
    });
});
// --------------------------------------
// APP/COMPANY SELECTION
// --------------------------------------
route('/auth/choose-app', function() {
    RC.trigger('UM_GET_COMPANY');
    riot.compile(function() {
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'app-module-nav');
        riot.mount('#moduleNavMount', 'choose-app-template');
    });
});
// --------------------------------------
// COMPANY SETUP
// --------------------------------------
route('/company/setup', function() {
    riot.compile(function() {
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'company-setup-template');
    });
});
// --------------------------------------
// Confirm EP Billing
// --------------------------------------
route('/confirm', function() {
    riot.compile(function() {
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'confirm-template');
    });
});
// --------------------------------------
// EP Card On File Payment
// --------------------------------------
route('/payment', function() {
    riot.compile(function() {
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'payment-template');
    });
});
// --------------------------------------
// COMPLETE USER SETUP
// --------------------------------------
route('/user/complete-setup', function() {
    riot.compile(function() {
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'complete-setup-template');
    });
});
// --------------------------------------
// COMPANY EDIT
// --------------------------------------
route('/company/edit', function() {
    riot.compile(function() {
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'app-subscreen-nav');
        riot.mount('#subscreenNavMount', 'company-edit-template');
    });
});
// --------------------------------------
// LOGIN
// --------------------------------------
route('/login', function() {
    riot.compile(function() {
        RC.trigger('UM_GET_COMPANY');
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'login-template');
    });
});
// --------------------------------------
// LOGIN WITH URL PARAMS
// --------------------------------------
route('/login?email=*&password=*', function(email, password) {
    riot.compile(function() {
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'auth-transition-template');
        if (email && password) {
            RC.trigger('AM_LOGIN', decodeURIComponent(email), window.atob(password));
        }
    });
});
// --------------------------------------
// SIGNUP
// --------------------------------------
route('/signup', function() {
    riot.compile(function() {
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'signup-template');
    });
});
// --------------------------------------
// test
// --------------------------------------
route('/test', function() {
    riot.compile(function() {
        riot.mount('#appMount', 'app-global-nav');
        riot.mount('#globalNavMount', 'auth-transition-template');
    });
});
// --------------------------------------
// GUIDE HOME !!! DEFAULT ROUTE !!!
// --------------------------------------
route('/', function() {
    riot.compile(function() {
        // -----------------------------------
        // SUBDOMAIN HANDLER
        // -----------------------------------
        var hostname = window.location.hostname.split('.com')[0];
        if (hostname.includes('.')) {
            RC.trigger('UM_GET_COMPANY');
            // SUBDOMAIN APP REDIRECT
            if (evoAuth.currentUser) {
                riot.mount('#appMount', 'app-global-nav');
                riot.mount('#globalNavMount', 'app-module-nav');
                riot.mount('#moduleNavMount', 'dashboard-company-template');
            } else {
                riot.mount('#appMount', 'app-global-nav');
                riot.mount('#globalNavMount', 'login-template');
                riot.mount('#moduleNavMount', 'login-template');
            }
            RC.trigger('LOG_DEBUG', 'Subdomain Detected!', 'routes');
        } else {
            // DEFAULT APP REDIRECT
            riot.mount('#appMount', 'app-global-nav');
            riot.mount('#globalNavMount', 'landing-template');
        }
    });
});
