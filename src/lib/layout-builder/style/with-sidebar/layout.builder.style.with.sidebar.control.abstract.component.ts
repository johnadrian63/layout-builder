import {
    ChangeDetectorRef,
    Component,
    HostListener,
    inject,
    OnInit
} from "@angular/core";
import {
    NavigationEnd,
    Router
} from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ViewportService, MOBILE_VIEWPORT_TOKEN } from "@org/common";

import { LayoutBuilderContextService } from "../layout.builder.style.context.service";

@Component({
    template: ""
})
export abstract class LayoutBuilderStyleWithSidebarControlAbstractComponent implements OnInit {

    public get isMobileViewport(): boolean {
        return this._viewportService.isMobileViewport(this._mobileViewportValue);
    }

    @HostListener("document:click") public clickout(): void {
        this.handleExpand();
    }

    private readonly _mobileViewportValue: string = inject<string>(MOBILE_VIEWPORT_TOKEN);
    private readonly _viewportService: ViewportService = inject<ViewportService>(ViewportService);
    private readonly _layoutStyleContextService: LayoutBuilderContextService = inject<LayoutBuilderContextService>(LayoutBuilderContextService);
    private readonly _router: Router = inject<Router>(Router);
    private readonly _cdr: ChangeDetectorRef = inject<ChangeDetectorRef>(ChangeDetectorRef);

    public ngOnInit(): void {
        this._router.events
            .pipe(takeUntilDestroyed())
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this.handleExpand();
                }

                this._cdr.detectChanges();
            });
    }

    public toggleSidebarExpand(event: Event): void {
        event.stopPropagation();

        const sidebarExpanded = this._layoutStyleContextService.sidebarExpanded;

        this.sidebarExpand(!sidebarExpanded);
    }

    private sidebarExpand(expanded: boolean): void {
        this._layoutStyleContextService.sidebarExpand(expanded);
    }

    private handleExpand(): void {
        if (this.isMobileViewport === true) {
            this.sidebarExpand(false);
        }
    }
}
