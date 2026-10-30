import { Data } from "@angular/router";
import {
    Renderer2,
    Type
} from "@angular/core";

import { LayoutBuilderStyle } from "./layout.builder.style";
import { LayoutBuilderStyleAdapterNoLayout } from "./adapter/layout.builder.style.adapter.no.layout";
import { LayoutBuilderStyleAdapterTwoColumns } from "./adapter/layout.builder.style.adapter.two.columns";
import { LayoutBuilderStyleAdapterWithSidebar } from "./adapter/layout.builder.style.adapter.with.sidebar";
import { LayoutBuilderStyleAdapterWithoutSidebar } from "./adapter/layout.builder.style.adapter.without.sidebar";
import { LayoutBuilderStyleAdapterAbstract } from "./adapter/layout.builder.style.adapter.abstract";
import {
    LayoutBuilderBodyBackgroundMode,
    layoutBuilderBodyClassMapper
} from "./layout.builder.body.class.mapper";

export const layoutStyleAdapterMapper: Map<keyof typeof LayoutBuilderStyle, Type<LayoutBuilderStyleAdapterAbstract>> = new Map<keyof typeof LayoutBuilderStyle, Type<LayoutBuilderStyleAdapterAbstract>>([
    [LayoutBuilderStyle.NO_LAYOUT, LayoutBuilderStyleAdapterNoLayout],
    [LayoutBuilderStyle.WITH_SIDEBAR, LayoutBuilderStyleAdapterWithSidebar],
    [LayoutBuilderStyle.WITHOUT_SIDEBAR, LayoutBuilderStyleAdapterWithoutSidebar],
    [LayoutBuilderStyle.TWO_COLUMNS, LayoutBuilderStyleAdapterTwoColumns]
]);

export interface ILayoutBuilderStyleVisitor {
    visitNoLayout(adapter: LayoutBuilderStyleAdapterNoLayout): void;
    visitWithSidebar(adapter: LayoutBuilderStyleAdapterWithSidebar): void;
    visitWithSidebarV2(adapter: LayoutBuilderStyleAdapterWithSidebar): void;
    visitWithoutSidebar(adapter: LayoutBuilderStyleAdapterWithoutSidebar): void;
    visitTwoColumns(adapter: LayoutBuilderStyleAdapterTwoColumns): void;
}

export class LayoutStyleVisitor implements ILayoutBuilderStyleVisitor {
    constructor(
        private readonly renderer: Renderer2,
        private readonly document: Document,
        data: Data
    ) {
        const backgroundMode = this.getBackgroundMode(data["bodyBackgroundMode"])

        if (backgroundMode) {
            this.renderer.addClass(this.document.body, backgroundMode);
        }

        console.log("layout data:", data);
        console.log("background mode:", backgroundMode);
    }

    public visitNoLayout(adapter: LayoutBuilderStyleAdapterNoLayout): void {
        // do nothing
    }

    public visitWithSidebar(adapter: LayoutBuilderStyleAdapterWithSidebar): void {
        this.renderer.addClass(this.document.body, adapter.layoutClass);
    }

    public visitWithSidebarV2(adapter: LayoutBuilderStyleAdapterWithSidebar): void {
        this.renderer.addClass(this.document.body, adapter.layoutClass);
    }

    public visitWithoutSidebar(adapter: LayoutBuilderStyleAdapterWithoutSidebar): void {
        // do nothing
    }

    public visitTwoColumns(adapter: LayoutBuilderStyleAdapterTwoColumns): void {
        // do nothing
    }

    private getBackgroundMode(backgroundMode: LayoutBuilderBodyBackgroundMode): string {
        const layoutBodyClass = layoutBuilderBodyClassMapper.get(backgroundMode);

        return layoutBodyClass ?? "";
    }
}
