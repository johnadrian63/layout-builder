import { Injectable } from "@angular/core";
import { ContextBuilderService } from "@org/context-builder";

import { LayoutBuilderContextController } from "./layout.builder.style.context.controller";
import { LayoutBuilderStyleContextDataLoader } from "./layout.builder.style.context.data.loader";

@Injectable({
    providedIn: "root"
})
export class LayoutBuilderContextService extends ContextBuilderService<void> {

    public get sidebarExpanded(): boolean {
        return this._sidebarExpanded;
    }

    private _sidebarExpanded: boolean = true;

    protected override context: LayoutBuilderContextController = new LayoutBuilderContextController();
    protected override loader: LayoutBuilderStyleContextDataLoader = new LayoutBuilderStyleContextDataLoader();

    public async initialize(): Promise<void> {
        await this.load();
    }

    public sidebarExpand(expand: boolean): void {
        this._sidebarExpanded = expand;

        this.context.onSidebarExpand(expand);
    }
}
