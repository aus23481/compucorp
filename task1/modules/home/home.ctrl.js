/*
 * Company: Compucorp
 * Test Assignment
 * Author: Abbas Uddin Sheikh
 * Date: 2017-03
 * Endpoint-url: 
 * 
**/

'use strict';
angular
    .module('app.core')
    .controller('HomeController', function($scope,$http, PageValues) {
        //Set page title and description
 /**
 * Header Define
 */
        PageValues.title = "HOME";
        PageValues.description = "";
        $scope.test = 123;
        $scope.artists = [];
        $scope.searchtype = "artist";
        $scope.searchresult = "";
  /**
 * assign search type
 * param : q
 * return: result trigger 
 */	
        
        $scope.initsearchType = function(val){
            $scope.searchtype = val;
             $scope.showList();
          
        }
/**
 * Get artists while ng-change
 * param : q
 * return: result trigger 
 */	    
        $scope.getArtists = function() {
           $("#loading").show(); 
            $http({
                         method: 'GET',
                         headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                         url: 'https://api.spotify.com/v1/search?'+"q="+ $scope.search+"&type="+$scope.searchtype+"&limit=5",
                         data: "q="+ $scope.search+"&type=artist"
                     }).
                     success(function(data) {
                         $( "#loading" ).hide(); 
                          $scope.artists = data.artists.items;
                          $scope.showList();
                      }).
                     error(function(data, response) {
                         console.log(response + " " + data);
                     });
              
        };
 /**
 * show artists
 * param : q
 * return: result trigger 
 */	       
        $scope.showList = function(){
	         
                  $("#loading").show();  
                    $http({
                         method: 'GET',
                         headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                         url: 'https://api.spotify.com/v1/search?'+"q="+ $scope.search+"&type="+$scope.searchtype,
                         data: "q="+ $scope.query+"&type="+$scope.searchtype
                     }).
                     success(function(data) {
                         //assign event list to scope var 
                       
                        if($scope.searchtype=="artist")
                         $scope.searchresult = data.artists;
                         if($scope.searchtype=="album")
                         $scope.searchresult = data.albums;
                         $("#loading").hide(); 
    
                     }).
                     error(function(data, response) {
                         console.log(response + " " + data);
                     });

      
		}
                
  	/**
 * show album while artist is clicked
 * param : q
 * return: result trigger of detail
 * 
 */	
       $scope.searchResultItemDetail = function(item){
           
                   if($scope.searchtype=="artist"){ 
                       $scope.search = item.name;
                       $scope.searchtype = "album";
                       $scope.searchresult.items.length = 0;
					   document.getElementsByName("searchtype")[1].click();
                       $scope.showList();
                   }   
	}
 	
		
           
    })
    .filter('capitalize', function() {
        return function(input) {
          return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
        }
    });       

