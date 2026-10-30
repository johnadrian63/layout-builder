import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatMenuModule } from "@angular/material/menu";

import { LayoutBuilderStyleAbstractComponent } from "../layout.builder.style.abstract.component";

@Component({
    selector: "lib-layout-builder-style-responsive-component",
    templateUrl: "./layout.builder.style.responsive.component.html",
    styleUrl: "./layout.builder.style.responsive.component.scss",
    imports: [
        CommonModule,
        RouterModule,
        MatMenuModule
    ]
})
export class LayoutBuilderStyleResponsiveComponent extends LayoutBuilderStyleAbstractComponent {
    public loggedin: boolean = true;
    public toggleNavigate: boolean = false;
}
