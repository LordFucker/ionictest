angular.module('MyApp.directives', [])
    .directive('spriteSheetRunner', function () {
        "use strict";
        return {
            restrict: 'EAC',
            replace: true,
            scope: {
            },
            template: "<canvas width='500' height='300'></canvas>",
            link: function (scope, element, attribute) {
                scope.stage = new createjs.Stage(element[0]);
                //var stage = new createjs.Stage("canvas");
                var circle = new createjs.Shape();
                circle.graphics.beginFill("red").drawCircle(0, 0, 50);
                circle.x = 100;
                circle.y = 100;
                scope.stage.addChild(circle);
                scope.stage.update();
            }
        }
    });