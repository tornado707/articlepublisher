webpackJsonp([1],{

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
__webpack_require__(177);
var Observable_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(161);
var ArticlesService = (function () {
    function ArticlesService(_http) {
        this._http = _http;
        this._baseURL = 'api/articles';
    }
    ArticlesService.prototype.create = function (article) {
        return this._http
            .post(this._baseURL, article)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArticlesService.prototype.read = function (articleId) {
        return this._http
            .get(this._baseURL + "/" + articleId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArticlesService.prototype.update = function (article) {
        return this._http
            .put(this._baseURL + "/" + article._id, article)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArticlesService.prototype.delete = function (articleId) {
        return this._http
            .delete(this._baseURL + "/" + articleId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArticlesService.prototype.list = function () {
        return this._http
            .get(this._baseURL)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArticlesService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error.json().message || 'Server error');
    };
    ArticlesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ArticlesService);
    return ArticlesService;
}());
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var authentication_service_1 = __webpack_require__(87);
var HomeComponent = (function () {
    function HomeComponent(_authenticationService) {
        this._authenticationService = _authenticationService;
        this.user = _authenticationService.user;
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: './app/home/home.template.html',
            styleUrls: ['./home.template.css']
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var AuthenticationComponent = (function () {
    function AuthenticationComponent() {
    }
    AuthenticationComponent = __decorate([
        core_1.Component({
            selector: 'authentication',
            templateUrl: 'app/authentication/authentication.template.html',
        }), 
        __metadata('design:paramtypes', [])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;
//# sourceMappingURL=authentication.component.js.map

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(36);
var authentication_service_1 = __webpack_require__(87);
var SigninComponent = (function () {
    function SigninComponent(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this.credentials = {};
    }
    SigninComponent.prototype.signin = function () {
        var _this = this;
        this._authenticationService.signin(this.credentials)
            .subscribe(function (result) { return _this._router.navigate(['/']); }, function (error) { return _this.errorMessage = error; });
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'signin',
            templateUrl: 'app/authentication/signin/signin.template.html'
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(36);
var authentication_service_1 = __webpack_require__(87);
var SignupComponent = (function () {
    function SignupComponent(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this.user = {};
    }
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this._authenticationService.signup(this.user)
            .subscribe(function (result) { return _this._router.navigate(['/']); }, function (error) { return _this.errorMessage = error; });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'signup',
            templateUrl: 'app/authentication/signup/signup.template.html',
            styleUrls: ['app/authentication/signup/signup.template.css']
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var articles_service_1 = __webpack_require__(128);
var ArticlesComponent = (function () {
    function ArticlesComponent() {
    }
    ArticlesComponent = __decorate([
        core_1.Component({
            selector: 'articles',
            template: '<router-outlet></router-outlet>',
            providers: [articles_service_1.ArticlesService]
        }), 
        __metadata('design:paramtypes', [])
    ], ArticlesComponent);
    return ArticlesComponent;
}());
exports.ArticlesComponent = ArticlesComponent;
//# sourceMappingURL=articles.component.js.map

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(36);
var articles_service_1 = __webpack_require__(128);
var CreateComponent = (function () {
    function CreateComponent(_router, _articlesService) {
        this._router = _router;
        this._articlesService = _articlesService;
        this.article = {};
    }
    CreateComponent.prototype.create = function () {
        var _this = this;
        this._articlesService
            .create(this.article)
            .subscribe(function (createdArticle) { return _this._router.navigate(['/articles', createdArticle._id]); }, function (error) { return _this.errorMessage = error; });
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: 'create',
            templateUrl: 'app/articles/create/create.template.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, articles_service_1.ArticlesService])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var articles_service_1 = __webpack_require__(128);
var ListComponent = (function () {
    function ListComponent(_articlesService) {
        this._articlesService = _articlesService;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._articlesService.list().subscribe(function (articles) { return _this.articles = articles; });
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'list',
            templateUrl: 'app/articles/list/list.template.html'
        }), 
        __metadata('design:paramtypes', [articles_service_1.ArticlesService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(36);
var authentication_service_1 = __webpack_require__(87);
var articles_service_1 = __webpack_require__(128);
var ViewComponent = (function () {
    function ViewComponent(_router, _route, _authenticationService, _articlesService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this._articlesService = _articlesService;
        this.allowEdit = false;
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._authenticationService.user;
        this.routingObserver = this._route.params.subscribe(function (params) {
            var articleId = params['articleId'];
            _this._articlesService
                .read(articleId)
                .subscribe(function (article) {
                _this.article = article;
                _this.allowEdit = (_this.user && _this.user._id === _this.article.creator._id);
            }, function (error) { console.log(error); _this._router.navigate(['/articles']); });
        });
    };
    ViewComponent.prototype.ngOnDestroy = function () {
        this.routingObserver.unsubscribe();
    };
    ViewComponent.prototype.delete = function () {
        var _this = this;
        this._articlesService.delete(this.article._id).subscribe(function (deletedArticle) { return _this._router.navigate(['/articles']); }, function (error) { return _this.errorMessage = error; });
    };
    ViewComponent = __decorate([
        core_1.Component({
            selector: 'view',
            templateUrl: 'app/articles/view/view.template.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, authentication_service_1.AuthenticationService, articles_service_1.ArticlesService])
    ], ViewComponent);
    return ViewComponent;
}());
exports.ViewComponent = ViewComponent;
//# sourceMappingURL=view.component.js.map

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(36);
var articles_service_1 = __webpack_require__(128);
var EditComponent = (function () {
    function EditComponent(_router, _route, _articlesService) {
        this._router = _router;
        this._route = _route;
        this._articlesService = _articlesService;
        this.article = {};
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsObserver = this._route.params.subscribe(function (params) {
            var articleId = params['articleId'];
            _this._articlesService.read(articleId).subscribe(function (article) {
                _this.article = article;
            }, function (error) { return _this._router.navigate(['/articles']); });
        });
    };
    EditComponent.prototype.ngOnDestroy = function () {
        this.paramsObserver.unsubscribe();
    };
    EditComponent.prototype.update = function () {
        var _this = this;
        this._articlesService.update(this.article).subscribe(function (savedArticle) { return _this._router.navigate(['/articles', savedArticle._id]); }, function (error) { return _this.errorMessage = error; });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'edit',
            templateUrl: 'app/articles/edit/edit.template.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, articles_service_1.ArticlesService])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var chat_service_1 = __webpack_require__(432);
var ChatComponent = (function () {
    function ChatComponent(_chatService) {
        this._chatService = _chatService;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messages = new Array();
        this._chatService.on('chatMessage', function (msg) {
            _this.messages.push(msg);
        });
    };
    ChatComponent.prototype.sendMessage = function () {
        var message = {
            text: this.messageText,
        };
        this._chatService.emit('chatMessage', message);
        this.messageText = '';
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        this._chatService.removeListener('chatMessage');
    };
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'chat',
            templateUrl: 'app/chat/chat.template.html',
            providers: [chat_service_1.ChatService]
        }), 
        __metadata('design:paramtypes', [chat_service_1.ChatService])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
__webpack_require__(177);
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(36);
var authentication_service_1 = __webpack_require__(87);
var ChatService = (function () {
    function ChatService(_router, _authenticationService) {
        this._router = _router;
        this._authenticationService = _authenticationService;
        if (this._authenticationService.isLoggedIn()) {
            this.socket = io();
        }
        else {
            this._router.navigate(['Home']);
        }
    }
    ChatService.prototype.on = function (eventName, callback) {
        if (this.socket) {
            this.socket.on(eventName, function (data) {
                callback(data);
            });
        }
    };
    ;
    ChatService.prototype.emit = function (eventName, data) {
        if (this.socket) {
            this.socket.emit(eventName, data);
        }
    };
    ;
    ChatService.prototype.removeListener = function (eventName) {
        if (this.socket) {
            this.socket.removeListener(eventName);
        }
    };
    ;
    ChatService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService])
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
__webpack_require__(177);
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(161);
var Observable_1 = __webpack_require__(0);
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.user = window['user'];
        this._signinURL = 'api/auth/signin';
        this._signupURL = 'api/auth/signup';
    }
    AuthenticationService.prototype.isLoggedIn = function () {
        return (!!this.user);
    };
    AuthenticationService.prototype.signin = function (credentials) {
        var _this = this;
        var body = JSON.stringify(credentials);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._signinURL, body, options)
            .map(function (res) { return _this.user = res.json(); })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.signup = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._signupURL, body, options)
            .map(function (res) { return _this.user = res.json(); })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().message || 'Server error');
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var platform_browser_dynamic_1 = __webpack_require__(353);
var app_module_1 = __webpack_require__(970);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=bootstrap.js.map

/***/ }),

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var platform_browser_1 = __webpack_require__(139);
var forms_1 = __webpack_require__(96);
var router_1 = __webpack_require__(36);
var http_1 = __webpack_require__(161);
var app_component_1 = __webpack_require__(971);
var app_routes_1 = __webpack_require__(972);
var home_module_1 = __webpack_require__(973);
var authentication_service_1 = __webpack_require__(87);
var authentication_module_1 = __webpack_require__(975);
var articles_module_1 = __webpack_require__(977);
var chat_module_1 = __webpack_require__(979);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                authentication_module_1.AuthenticationModule,
                home_module_1.HomeModule,
                articles_module_1.ArticlesModule,
                chat_module_1.ChatModule,
                router_1.RouterModule.forRoot(app_routes_1.AppRoutes, { useHash: true }),
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [
                authentication_service_1.AuthenticationService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var authentication_service_1 = __webpack_require__(87);
var router_1 = __webpack_require__(36);
var AppComponent = (function () {
    function AppComponent(_authenticationService, router) {
        this._authenticationService = _authenticationService;
        this.router = router;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'mean-app',
            template: '<router-outlet></router-outlet>',
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.AppRoutes = [{
        path: '**',
        redirectTo: '/'
    }];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(55);
var forms_1 = __webpack_require__(96);
var router_1 = __webpack_require__(36);
var home_routes_1 = __webpack_require__(974);
var home_component_1 = __webpack_require__(422);
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(home_routes_1.HomeRoutes),
            ],
            declarations: [
                home_component_1.HomeComponent,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var home_component_1 = __webpack_require__(422);
exports.HomeRoutes = [{
        path: '',
        component: home_component_1.HomeComponent,
    }];
//# sourceMappingURL=home.routes.js.map

/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var forms_1 = __webpack_require__(96);
var router_1 = __webpack_require__(36);
var common_1 = __webpack_require__(55);
var authentication_routes_1 = __webpack_require__(976);
var authentication_component_1 = __webpack_require__(423);
var signin_component_1 = __webpack_require__(424);
var signup_component_1 = __webpack_require__(425);
var AuthenticationModule = (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(authentication_routes_1.AuthenticationRoutes),
            ],
            declarations: [
                authentication_component_1.AuthenticationComponent,
                signin_component_1.SigninComponent,
                signup_component_1.SignupComponent,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthenticationModule);
    return AuthenticationModule;
}());
exports.AuthenticationModule = AuthenticationModule;
//# sourceMappingURL=authentication.module.js.map

/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var authentication_component_1 = __webpack_require__(423);
var signin_component_1 = __webpack_require__(424);
var signup_component_1 = __webpack_require__(425);
exports.AuthenticationRoutes = [{
        path: 'authentication',
        component: authentication_component_1.AuthenticationComponent,
        children: [
            { path: 'signin', component: signin_component_1.SigninComponent },
            { path: 'signup', component: signup_component_1.SignupComponent },
        ],
    }];
//# sourceMappingURL=authentication.routes.js.map

/***/ }),

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(55);
var forms_1 = __webpack_require__(96);
var router_1 = __webpack_require__(36);
var articles_routes_1 = __webpack_require__(978);
var articles_component_1 = __webpack_require__(426);
var create_component_1 = __webpack_require__(427);
var list_component_1 = __webpack_require__(428);
var view_component_1 = __webpack_require__(429);
var edit_component_1 = __webpack_require__(430);
var ArticlesModule = (function () {
    function ArticlesModule() {
    }
    ArticlesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(articles_routes_1.ArticlesRoutes),
            ],
            declarations: [
                articles_component_1.ArticlesComponent,
                create_component_1.CreateComponent,
                list_component_1.ListComponent,
                view_component_1.ViewComponent,
                edit_component_1.EditComponent,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ArticlesModule);
    return ArticlesModule;
}());
exports.ArticlesModule = ArticlesModule;
//# sourceMappingURL=articles.module.js.map

/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var articles_component_1 = __webpack_require__(426);
var create_component_1 = __webpack_require__(427);
var list_component_1 = __webpack_require__(428);
var view_component_1 = __webpack_require__(429);
var edit_component_1 = __webpack_require__(430);
exports.ArticlesRoutes = [{
        path: 'articles',
        component: articles_component_1.ArticlesComponent,
        children: [
            { path: '', component: list_component_1.ListComponent },
            { path: 'create', component: create_component_1.CreateComponent },
            { path: ':articleId', component: view_component_1.ViewComponent },
            { path: ':articleId/edit', component: edit_component_1.EditComponent }
        ],
    }];
//# sourceMappingURL=articles.routes.js.map

/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(55);
var forms_1 = __webpack_require__(96);
var router_1 = __webpack_require__(36);
var chat_routes_1 = __webpack_require__(980);
var chat_service_1 = __webpack_require__(432);
var chat_component_1 = __webpack_require__(431);
var ChatModule = (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(chat_routes_1.ChatRoutes),
            ],
            declarations: [
                chat_component_1.ChatComponent,
            ],
            providers: [
                chat_service_1.ChatService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ChatModule);
    return ChatModule;
}());
exports.ChatModule = ChatModule;
//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var chat_component_1 = __webpack_require__(431);
exports.ChatRoutes = [{
        path: 'chat',
        component: chat_component_1.ChatComponent
    }];
//# sourceMappingURL=chat.routes.js.map

/***/ })

},[969]);
//# sourceMappingURL=bootstrap.js.map