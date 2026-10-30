import { Component, DOCUMENT, inject, OnInit, Renderer2, signal, WritableSignal } from "@angular/core";
import { ActivatedRoute, Data, NavigationEnd, Router } from "@angular/router";
import { filter, map, switchMap } from "rxjs";

import { LayoutBuilderStyle } from "./style/layout.builder.style";
import { layoutStyleAdapterMapper, LayoutStyleVisitor } from "./style";

@Component({
    template: "",
})
export abstract class LayoutBuilder implements OnInit {
    public readonly data: WritableSignal<Data | null> = signal<Data | null>(null);

    private readonly document: Document = inject<Document>(DOCUMENT);
    private readonly renderer: Renderer2 = inject<Renderer2>(Renderer2);
    private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    private readonly router: Router = inject(Router);

    public ngOnInit(): void {
        this.router
            .events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map(() => this.activatedRoute),
                map((route: ActivatedRoute) => {
                    while (route.firstChild) {
                        route = route.firstChild;
                    }

                    return route;
                }),
                filter((route: ActivatedRoute) => {
                    return ["primary"].includes(route.outlet);
                }),
                switchMap((route) => route.data)
            )
            .subscribe((data: Data) => {
                const currentData = this.data();

                let layoutStyle = LayoutBuilderStyle.NO_LAYOUT;

                const currentLayout = data["layout"];

                if (currentLayout && currentData && currentData["layout"] != currentLayout) {
                    this.data.set(data);

                    if (layoutStyleAdapterMapper.has(currentLayout)) {
                        layoutStyle = currentLayout;
                    }
                } else {
                    this.data.set({
                        layout: LayoutBuilderStyle.NO_LAYOUT,
                        ...data
                    });
                }

                const layoutAdapterModel = layoutStyleAdapterMapper.get(layoutStyle);

                if (layoutAdapterModel) {
                    const layoutAdapter = new layoutAdapterModel();
                    const layoutVisitor = new LayoutStyleVisitor(this.renderer, this.document, data);

                    layoutAdapter.accept(layoutVisitor);
                }
            });
    }
}
