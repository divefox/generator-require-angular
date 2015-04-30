/**
 *  Defines the Footer Module.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    define(['angular', 'jquery', 'tpl!common/ui/Footer.html', 'tpl!etc/config.json'], function(angular, $, tpl, config) {

        var Feature = function() {
            this.export = 'FooterModule';
            this.config = JSON.parse(config());
            this.$body = $('body');
            this.mod = angular.module(this.export, []);
        };

        Feature.prototype.beforeStart = function() {
            this.$body.append(tpl());
        };

        Feature.prototype.run = function() {
            var self = this;
            this.mod.controller('FooterCtrl', ['$scope', function($scope) {
                $scope.config = self.config;
            }]);
        };

        return Feature;

    });

})(define);
