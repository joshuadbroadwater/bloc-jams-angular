(funtion() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enable: true,
                requireBase: false
        });
 
        $stateProvider
            .state('landing',{
                url: '/',
                templateUrl: '/templates/landing.html'
        });
}

 angular
    .module('blocJams', ['ui.router']);
    .config(config);
})();