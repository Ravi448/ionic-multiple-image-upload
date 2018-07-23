import { NgModule } from '@angular/core';
import { CustomImageUpload } from './providers/CustomImageUpload';
import { IonicModule } from 'ionic-angular';
var IonicAcademyModule = (function () {
    function IonicAcademyModule() {
    }
    IonicAcademyModule.forRoot = function () {
        return {
            ngModule: CustomImageUpload,
            providers: [CustomImageUpload]
        };
    };
    IonicAcademyModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        IonicModule
                    ],
                    declarations: [
                        CustomImageUpload
                    ],
                    exports: [
                        CustomImageUpload
                    ]
                },] },
    ];
    /** @nocollapse */
    IonicAcademyModule.ctorParameters = function () { return []; };
    return IonicAcademyModule;
}());
export { IonicAcademyModule };
//# sourceMappingURL=CustomImageUpload.module.js.map