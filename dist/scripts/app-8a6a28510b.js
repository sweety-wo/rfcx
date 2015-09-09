!function(){"use strict";angular.module("rfcx",["ngAnimate","ngCookies","ngTouch","ngSanitize","ui.router","ui.bootstrap"])}(),function(){"use strict";function t(){function t(){return n}var n=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"}];this.getTec=t}angular.module("rfcx").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var n=this;n.relativeDate=t(n.creationDate).fromNow()}var n={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return t.$inject=["moment"],n}angular.module("rfcx").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function n(n,a,r,e){var o,i=t(a[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});a.addClass("acme-malarkey"),angular.forEach(n.extraValues,function(t){i.type(t).pause()["delete"]()}),o=n.$watch("vm.contributors",function(){angular.forEach(e.contributors,function(t){i.type(t.login).pause()["delete"]()})}),n.$on("$destroy",function(){o()})}function a(t,n){function a(){return r().then(function(){t.info("Activated Contributors View")})}function r(){return n.getContributors(10).then(function(t){return e.contributors=t,e.contributors})}var e=this;e.contributors=[],a()}var r={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:n,controller:a,controllerAs:"vm"};return a.$inject=["$log","githubContributor"],r}angular.module("rfcx").directive("acmeMalarkey",t),t.$inject=["malarkey"]}(),function(){"use strict";function t(t,n){function a(a){function e(t){return t.data}function o(n){t.error("XHR Failed for getContributors.\n"+angular.toJson(n.data,!0))}return a||(a=30),n.get(r+"/contributors?per_page="+a).then(e)["catch"](o)}var r="https://api.github.com/repos/Swiip/generator-gulp-angular",e={apiHost:r,getContributors:a};return e}angular.module("rfcx").factory("githubContributor",t),t.$inject=["$log","$http"]}(),function(){"use strict";function t(t,n,a){function r(){o(),t(function(){i.classAnimation="rubberBand"},4e3)}function e(){a.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),i.classAnimation=""}function o(){i.awesomeThings=n.getTec(),angular.forEach(i.awesomeThings,function(t){t.rank=Math.random()})}var i=this;i.awesomeThings=[],i.classAnimation="",i.creationDate=1441816609287,i.showToastr=e,r()}angular.module("rfcx").controller("MainController",t),t.$inject=["$timeout","webDevTec","toastr"]}(),function(){"use strict";function t(t){t.debug("runBlock end")}angular.module("rfcx").run(t),t.$inject=["$log"]}(),function(){"use strict";function t(t,n){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),n.otherwise("/")}angular.module("rfcx").config(t),t.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("rfcx").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function t(t,n){t.debugEnabled(!0),n.options.timeOut=3e3,n.options.positionClass="toast-top-right",n.options.preventDuplicates=!0,n.options.progressBar=!0}angular.module("rfcx").config(t),t.$inject=["$logProvider","toastr"]}(),angular.module("rfcx").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);