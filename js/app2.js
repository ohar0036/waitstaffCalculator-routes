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
    .controller('HomeCtrl', function($scope) {
        //empty for now
    })

    .controller('NewMealCtrl', function($scope, $rootScope) {
        $scope.subtotalCC = 0;
        $scope.tipCC = 0;
        $scope.totalCC = 0;
        $rootScope.tipTotal = 0;
        $rootScope.mealCount = 0;
        $rootScope.averageTip = 0;
        $rootScope.test = 21;
        $scope.submitForm = function() {
      
        if( $scope.mealDetailsForm.$valid ) {
          //console.log('this form is valid');
          console.log($scope.baseMealPrice);
          $scope.subtotalCC = (($scope.baseMealPrice * $scope.taxRate)/100) + $scope.baseMealPrice;
          $scope.tipCC = (($scope.baseMealPrice * $scope.tipPercentage)/100);
          $scope.totalCC = (($scope.baseMealPrice * $scope.taxRate)/100) + (($scope.baseMealPrice * $scope.tipPercentage)/100) + $scope.baseMealPrice;
          
          $rootScope.tipTotal = $rootScope.tipTotal + (($scope.baseMealPrice * $scope.tipPercentage)/100);
          $rootScope.mealCount = $rootScope.mealCount + 1;
          $rootScope.averageTip = $rootScope.tipTotal / $rootScope.mealCount;
          
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
    })
    .controller('MyEarningsCtrl', function($scope, $rootScope) {
        console.log($rootScope);
                $rootScope.tipTotal = 0;
        $rootScope.mealCount = 0;
        $rootScope.averageTip = 0;
    });