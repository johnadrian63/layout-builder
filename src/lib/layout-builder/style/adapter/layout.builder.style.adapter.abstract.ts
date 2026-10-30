import { ILayoutBuilderStyleVisitor } from "../layout.builder.style.visitor";

export abstract class LayoutBuilderStyleAdapterAbstract {
    public abstract get layoutClass(): string;

    public abstract accept(visitor: ILayoutBuilderStyleVisitor): void;
}
