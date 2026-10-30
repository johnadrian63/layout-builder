import { ILayoutBuilderStyleVisitor } from "../layout.builder.style.visitor";
import { LayoutBuilderStyleAdapterAbstract } from "./layout.builder.style.adapter.abstract";

export class LayoutBuilderStyleAdapterNoLayout extends LayoutBuilderStyleAdapterAbstract {

    public get layoutClass(): string {
        return "";
    }

    public override accept(visitor: ILayoutBuilderStyleVisitor): void {
        visitor.visitNoLayout(this);
    }
}
