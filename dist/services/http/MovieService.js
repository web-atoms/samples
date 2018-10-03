var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "web-atoms-core/dist/di/DISingleton", "web-atoms-core/dist/services/http/RestService"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DISingleton_1 = require("web-atoms-core/dist/di/DISingleton");
    var RestService_1 = require("web-atoms-core/dist/services/http/RestService");
    /**
     * It is easy to mock any web service by specifying mock parameter while
     * setting it up as DISingleton.
     *
     * When designMode is true, mock web service will be used, please make sure
     * mock class must be set as default in mock module.
     */
    var MovieService = /** @class */ (function (_super) {
        __extends(MovieService, _super);
        function MovieService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MovieService.prototype.getMovies = function (category, search, start, size) {
            // don't worry about null, it will never execute..
            return null;
        };
        __decorate([
            RestService_1.Get("/api/movies/{category}"),
            __param(0, RestService_1.Path("category")),
            __param(1, RestService_1.Query("search")),
            __param(2, RestService_1.Query("start")),
            __param(3, RestService_1.Query("size")),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String, Number, Number]),
            __metadata("design:returntype", Promise)
        ], MovieService.prototype, "getMovies", null);
        MovieService = __decorate([
            DISingleton_1.default({ mock: "./mocks/MockMovieService" })
        ], MovieService);
        return MovieService;
    }(RestService_1.BaseService));
    exports.default = MovieService;
});
//# sourceMappingURL=MovieService.js.map