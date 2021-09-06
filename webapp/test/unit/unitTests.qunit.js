/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"logaligroup/sap_fiori_app_yo_arias/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
