import { NgModule, ModuleWithProviders } from '@angular/core';
import { CustomImageUpload } from './providers/CustomImageUpload';
import { IonicModule } from 'ionic-angular';
 
@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
        CustomImageUpload
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        CustomImageUpload
    ]
})
export class IonicAcademyModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CustomImageUpload,
            providers: [CustomImageUpload]
        };
    }
}