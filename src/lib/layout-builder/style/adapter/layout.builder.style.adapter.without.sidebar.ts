import { ILayoutBuilderStyleVisitor } from "../layout.builder.style.visitor";
import { LayoutBuilderStyleAdapterAbstract } from "./layout.builder.style.adapter.abstract";

export class LayoutBuilderStyleAdapterWithoutSidebar extends LayoutBuilderStyleAdapterAbstract {

    public get layoutClass(): string {
        return "";
    }

    public accept(visitor: ILayoutBuilderStyleVisitor): void {
        visitor.visitWithoutSidebar(this);
    }
}
