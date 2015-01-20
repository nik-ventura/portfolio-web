// - services.js

// Factory for getting portfolio items from JSON
app.factory('PortfolioFactory', ['$http', function($http){
    return  {
        getItemsList: function(data) {
            $http.get('views/JSON/portfolio.json')
                .success(data)
                .error(function(data){
                    console.log('Something is wrong with JSON, Bobby!')
                })
        }
    }

}]);