// - directives.js

// Directive for
app.directive('moreInfo', function() {
    return {
        restrict: 'A',
        link: function($scope, el, attr) {
            $(el).hover(function () {
                $(el).parents('li').toggleClass('inFocus');
            });
        }
    }
});
