(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('front-component-ui', ['exports', '@angular/core', '@angular/material', '@angular/common'], factory) :
    (global = global || self, factory(global['front-component-ui'] = {}, global.ng.core, global.ng.material, global.ng.common));
}(this, (function (exports, core, material, common) { 'use strict';

    var _c0 = ["*"];
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
        }
        ButtonComponent.prototype.ngOnInit = function () {
        };
        ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
        ButtonComponent.ɵcmp = core.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["lib-button"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "button--secondary"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "button", 0);
                core.ɵɵprojection(1);
                core.ɵɵelementEnd();
            } }, styles: [".button--secondary[_ngcontent-%COMP%]{width:196px;height:40px;color:#d31643;background-color:#ffff;border-radius:7px!important;border:1px solid #d31643!important;cursor:pointer!important;font-weight:700}.button--secondary[_ngcontent-%COMP%]:hover{border-color:#d31643;color:#d31643}.button--secondary[_ngcontent-%COMP%]:focus{border-color:#f15e81;color:#f15e81}"] });
        return ButtonComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ButtonComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-button',
                    templateUrl: './button.component.html',
                    styleUrls: ['./button.component.scss']
                }]
        }], function () { return []; }, null); })();

    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
        ButtonModule.ɵmod = core.ɵɵdefineNgModule({ type: ButtonModule });
        ButtonModule.ɵinj = core.ɵɵdefineInjector({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[common.CommonModule, material.MatButtonModule]] });
        return ButtonModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(ButtonModule, { declarations: [ButtonComponent], imports: [common.CommonModule, material.MatButtonModule], exports: [ButtonComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ButtonModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [ButtonComponent],
                    imports: [common.CommonModule, material.MatButtonModule],
                    exports: [ButtonComponent],
                }]
        }], null, null); })();

    exports.ButtonComponent = ButtonComponent;
    exports.ButtonModule = ButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=front-component-ui.umd.js.map
