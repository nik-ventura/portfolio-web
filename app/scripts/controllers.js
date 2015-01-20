// - controllers.js

// Controller for getting portfolio items from the PortfolioFactory
app.controller('PortfolioCtrl', ['$scope', 'PortfolioFactory', function($scope, PortfolioFactory) {
    PortfolioFactory.getItemsList(function(data){
        $scope.portfolio = data;
    })

}]);

// Controller for toggling 'active' class in nav menu
app.controller('MenuCtrl', function($scope, $location) {
    $scope.getClass = function(path) {
        if ($location.path().substr(0, path.length) == path) {
            return "active"
        } else {
            return ""
        }
    }
});