angular
.module('cvApp', ['cvService'])
.controller('cvController', function($scope, cv) {
    cv.get().then(function(cv) {
       $scope.cv = cv; 
    });
    
    $scope.filter = function(term) {
        console.log('filter: ' + term);
        cv.filterProjets(term)
    }
})
.controller('projetController', function($scope, cv) {
    cv.getProjets().then(function(projets) {
       $scope.projets = projets; 
    });
})
.filter('formatPeriode', function() {
    return function(projet) {
        var debut = projet.debut ? moment(projet.debut) : null;
        var fin = projet.fin ? moment(projet.fin) : null;
        
        if(!debut) return "";
        
        if(!fin) {
            return "depuis " + debut.format("YYYY");
        }
        
        return debut.format("YYYY") + " - " + fin.format("YYYY");
    }
})
.filter('formatAge', function() {
    return function(date) {
        return moment().diff(moment(date),'years');
    }
})
.filter('join', function() {
    return function(values) {
        return values.join(', ');
        
    }
})
;
