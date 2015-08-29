angular.module('waitstaffApp', ['ngRoute', 'ngMessages'])
    .config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : '/home.html',
            controller : 'HomeCtrl'
        })
        .when('/new-meal', {
            templateUrl : '/new-meal.html',
            controller : 'NewMealCtrl'
        })
        .when('/my-earnings', {
            templateUrl : '/my-earnings.html',
            controller : 'MyEarningsCtrl'
        })
        .when('/error', {
            template : '<p>Error Page: Not Found</p>'
        })
        .otherwise({
          redirectTo : '/error'
        });
    })
    .run(function($rootScope) {
        $rootScope.subtotalCC = 0;
        $rootScope.tipCC = 0;
        $rootScope.totalCC = 0;
        $rootScope.tipTotal = 0;
        $rootScope.mealCount = 0;
        $rootScope.averageTip = 0;
    })
    .controller('ParentCtrl', function($scope, $rootScope) {

    })

    .controller('HomeCtrl', function($scope) {
        //empty for now
    })

    .controller('NewMealCtrl', function($scope, $rootScope) {
        
        $scope.submitForm = function() {
      
        if( $scope.mealDetailsForm.$valid ) {
          //console.log('this form is valid');
          console.log($scope.baseMealPrice);
          $rootScope.subtotalCC = (($scope.baseMealPrice * $scope.taxRate)/100) + $scope.baseMealPrice;
          $rootScope.tipCC = (($scope.baseMealPrice * $scope.tipPercentage)/100);
          $rootScope.totalCC = (($scope.baseMealPrice * $scope.taxRate)/100) + (($scope.baseMealPrice * $scope.tipPercentage)/100) + $scope.baseMealPrice;
          
          $rootScope.tipTotal = $rootScope.tipTotal + (($scope.baseMealPrice * $scope.tipPercentage)/100);
          $rootScope.mealCount = $rootScope.mealCount + 1;
          $rootScope.averageTip = $rootScope.tipTotal / $rootScope.mealCount;
          
          $scope.mealDetailsForm.$setPristine();
          $scope.baseMealPrice = '';
          $scope.taxRate = '';
          $scope.tipPercentage = '';
        }
        else {
          console.log('this form is not valid');
        }
    };

        $scope.cancels = function() {
          console.log('cancel');
          $scope.mealDetailsForm.$setPristine();
          $scope.baseMealPrice = '';
          $scope.taxRate = '';
          $scope.tipPercentage = '';
        };

         $rootScope.reset = function() {
          $rootScope.subtotalCC = 0;
          $rootScope.tipCC = 0;
          $rootScope.totalCC = 0;
          $rootScope.tipTotal = 0;
          $rootScope.mealCount = 0;
          $rootScope.averageTip = 0;
         };
    })

    .controller('MyEarningsCtrl', function($scope, $rootScope) {
 
    });