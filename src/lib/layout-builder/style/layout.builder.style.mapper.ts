import { Type } from "@angular/core";

import { LayoutBuilderStyle } from "./layout.builder.style";
import { LayoutBuilderStyleAbstractComponent } from "./layout.builder.style.abstract.component";
import { LayoutBuilderStyleWithoutSidebarComponent } from "./without-sidebar/layout.builder.style.without.sidebar.component";
import { LayoutBuilderStyleNoLayoutComponent } from "./no-layout/layout.builder.style.no.layout.component";
import { LayoutBuilderStyleTwoColumnsComponent } from "./two-columns/layout.builder.style.two.columns.component";
import { LayoutBuilderStyleWithSidebarComponent } from "./with-sidebar/layout.builder.style.with.sidebar.component";

export const layoutBuilderStyleMapper: Map<keyof typeof LayoutBuilderStyle, Type<LayoutBuilderStyleAbstractComponent>> = new Map<keyof typeof LayoutBuilderStyle, Type<LayoutBuilderStyleAbstractComponent>>([
    [LayoutBuilderStyle.NO_LAYOUT, LayoutBuilderStyleNoLayoutComponent],
    [LayoutBuilderStyle.WITH_SIDEBAR, LayoutBuilderStyleWithSidebarComponent],
    [LayoutBuilderStyle.WITHOUT_SIDEBAR, LayoutBuilderStyleWithoutSidebarComponent],
    [LayoutBuilderStyle.TWO_COLUMNS, LayoutBuilderStyleTwoColumnsComponent]
]);
