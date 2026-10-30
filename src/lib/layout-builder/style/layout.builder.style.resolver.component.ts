import {
    Component,
    effect,
    inject,
    input,
    InputSignal,
    ViewContainerRef
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
    Data,
    RouterModule
} from "@angular/router";

import { LayoutBuilderStyle } from "./layout.builder.style";
import { layoutBuilderStyleMapper } from "./layout.builder.style.mapper";
import { LayoutBuilderContextService } from "./layout.builder.style.context.service";

@Component({
    selector: "lib-layout-builder-style-resolver-component",
    template: "",
    styles: [
        `
            :host {
                display: none;
            }
        `
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class LayoutBuilderStyleResolverComponent {
    public readonly data: InputSignal<Data | null> = input.required<Data | null>();

    private readonly layoutStyleContextService: LayoutBuilderContextService = inject<LayoutBuilderContextService>(LayoutBuilderContextService);
    private readonly vcr: ViewContainerRef = inject<ViewContainerRef>(ViewContainerRef);

    constructor() {
        effect(() => {
            const data = this.data();

            if (data) {
                this.initialize(data);
            }
        });
    }

    private initialize(data: Data): void {
        let layout = LayoutBuilderStyle.NO_LAYOUT;

        layout = data?.["layout"];

        const component = layoutBuilderStyleMapper.get(layout);

        console.log(`using layout "${layout}"`);

        this.vcr.clear();

        if (component) {
            const componentRef = this.vcr.createComponent(component);
            const componentInstance = componentRef.instance;

            componentInstance.data = data;

            componentRef.changeDetectorRef.detectChanges();
        }

        this.layoutStyleContextService.initialize();
    }
}
