import { ɵɵdefineComponent, ɵɵprojectionDef, ɵɵelementStart, ɵɵprojection, ɵɵelementEnd, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';

var _c0 = ["*"];
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
    ButtonComponent.ɵcmp = ɵɵdefineComponent({ type: ButtonComponent, selectors: [["lib-button"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "button--secondary"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "button", 0);
            ɵɵprojection(1);
            ɵɵelementEnd();
        } }, styles: [".button--secondary[_ngcontent-%COMP%]{width:196px;height:40px;color:#d31643;background-color:#ffff;border-radius:7px!important;border:1px solid #d31643!important;cursor:pointer!important;font-weight:700}.button--secondary[_ngcontent-%COMP%]:hover{border-color:#d31643;color:#d31643}.button--secondary[_ngcontent-%COMP%]:focus{border-color:#f15e81;color:#f15e81}"] });
    return ButtonComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'lib-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.scss']
            }]
    }], function () { return []; }, null); })();

var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule.ɵmod = ɵɵdefineNgModule({ type: ButtonModule });
    ButtonModule.ɵinj = ɵɵdefineInjector({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[CommonModule, MatButtonModule]] });
    return ButtonModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ButtonModule, { declarations: [ButtonComponent], imports: [CommonModule, MatButtonModule], exports: [ButtonComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [ButtonComponent],
                imports: [CommonModule, MatButtonModule],
                exports: [ButtonComponent],
            }]
    }], null, null); })();

/*
 * Public API Surface of front-component-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonModule };
//# sourceMappingURL=front-component-ui.js.map
