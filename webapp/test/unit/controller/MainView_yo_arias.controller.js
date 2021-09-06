/*global QUnit*/

sap.ui.define([
	"logaligroup/sap_fiori_app_yo_arias/controller/MainView_yo_arias.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MainView_yo_arias Controller");

	QUnit.test("I should test the MainView_yo_arias controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
