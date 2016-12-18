/*global angular */

/**
 * The main app module
 *
 * @type {angular.Module}
 */

angular = require('angular');
require('angular-route');
require('../dist/templateCachePartials');

angular.module('tweetdeck', ['ngRoute','tweetdeckPartials'])
	.config(function ($routeProvider) {
		'use strict';

		var routeConfig = {
			controller: 'TweetdeckCtrl',
			templateUrl: '/partials/tweetdeck-index.html',
			resolve: {
				store: ['tweetdeckStorage', function (tweetdeckStorage) {
					// Get the correct module (API or localStorage).
					return todoStorage;
				}]
			}
		};

		$routeProvider
			.when('/', routeConfig)
			.when('/:status', routeConfig)
			.otherwise({
				redirectTo: '/'
			});
	});
