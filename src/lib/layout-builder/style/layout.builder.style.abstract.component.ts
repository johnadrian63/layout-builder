import {
    Component,
    inject,
    Input,
    OnDestroy,
    OnInit
} from "@angular/core";
import { Data } from "@angular/router";
import { ViewportService, MOBILE_VIEWPORT_TOKEN } from "@org/common";

import { LayoutBuilderContextService } from "./layout.builder.style.context.service";
import { ILayoutBuilderStyleContextBuilderController } from "./layout.builder.style.context.controller";

@Component({
    template: ""
})
export abstract class LayoutBuilderStyleAbstractComponent implements OnInit, OnDestroy, ILayoutBuilderStyleContextBuilderController {
    @Input() public data!: Data;

    public get sidebarExpanded(): boolean {
        return this.layoutStyleContextService.sidebarExpanded;
    }

    public get isMobileViewport(): boolean {
        return this.viewportService.isMobileViewport(this.mobileViewportValue);
    }

    private baseControllerId!: number;

    protected readonly mobileViewportValue: string = inject<string>(MOBILE_VIEWPORT_TOKEN);
    protected readonly layoutStyleContextService: LayoutBuilderContextService = inject<LayoutBuilderContextService>(LayoutBuilderContextService);
    protected readonly viewportService: ViewportService = inject<ViewportService>(ViewportService);

    public ngOnInit(): void {
        this.baseControllerId = this.layoutStyleContextService.registerController(this);

        console.log("layout initialized.");
    }

    public ngOnDestroy(): void {
        this.destroy();
    }

    public destroy(): void {
        this.layoutStyleContextService.unregisterController(this.baseControllerId);

        console.log("layout destroyed.");
    }

    public onSidebarExpand(expand: boolean): void {
        // do nothing
    }

    public contextLoading(): void {
        // do nothing
    }
}
