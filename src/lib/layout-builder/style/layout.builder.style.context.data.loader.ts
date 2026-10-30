import { ContextBuilderDataLoader } from "@org/context-builder";

export class LayoutBuilderStyleContextDataLoader extends ContextBuilderDataLoader<void> {
    public async load(): Promise<void> {
        return Promise.resolve();
    }
}
