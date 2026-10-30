import { ILayoutBuilderStyleVisitor } from "../layout.builder.style.visitor";
import { LayoutBuilderStyleAdapterAbstract } from "./layout.builder.style.adapter.abstract";

export class LayoutBuilderStyleAdapterTwoColumns extends LayoutBuilderStyleAdapterAbstract {

    public override get layoutClass(): string {
        return "";
    }

    public override accept(visitor: ILayoutBuilderStyleVisitor): void {
        visitor.visitTwoColumns(this);
    }
}
