import { ILayoutBuilderStyleVisitor } from "../layout.builder.style.visitor";
import { LayoutBuilderStyleAdapterAbstract } from "./layout.builder.style.adapter.abstract";

export class LayoutBuilderStyleAdapterWithSidebar extends LayoutBuilderStyleAdapterAbstract {

    public get layoutClass(): string {
        return "padded";
    }

    public override accept(visitor: ILayoutBuilderStyleVisitor): void {
        visitor.visitWithSidebar(this);
    }
}
