import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { UiBackdropComponent } from "@org/ui";

import { LayoutBuilderStyleWithSidebarComponent } from "../with-sidebar/layout.builder.style.with.sidebar.component";

@Component({
    selector: "lib-layout-builder-style-two-columns-component",
    templateUrl: "./layout.builder.style.two.columns.component.html",
    styleUrl: "./layout.builder.style.two.columns.component.scss",
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        UiBackdropComponent
    ]
})
export class LayoutBuilderStyleTwoColumnsComponent extends LayoutBuilderStyleWithSidebarComponent { }
