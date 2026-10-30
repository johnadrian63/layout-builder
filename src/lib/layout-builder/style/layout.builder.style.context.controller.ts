import { ContextBuilder, IContextBuilderBaseController } from "@org/context-builder";

export interface ILayoutBuilderStyleContextBuilderController extends IContextBuilderBaseController {
    onSidebarExpand(expand: boolean): void;
}

export class LayoutBuilderContextController extends ContextBuilder<ILayoutBuilderStyleContextBuilderController> implements ILayoutBuilderStyleContextBuilderController {
    public onSidebarExpand(expand: boolean): void {
        for (const controller of this.controllers) {
            controller.onSidebarExpand(expand);
        }
    }
}
