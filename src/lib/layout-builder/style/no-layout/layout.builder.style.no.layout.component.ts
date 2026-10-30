import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { LayoutBuilderStyleAbstractComponent } from "../layout.builder.style.abstract.component";

@Component({
    selector: "lib-layout-builder-style-no-layout-component",
    templateUrl: "./layout.builder.style.no.layout.component.html",
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class LayoutBuilderStyleNoLayoutComponent extends LayoutBuilderStyleAbstractComponent { }
