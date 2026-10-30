export enum LayoutBuilderBodyBackgroundMode {
    WHITE = "WHITE",
    LIGHT = "LIGHT"
}

export const layoutBuilderBodyClassMapper: Map<LayoutBuilderBodyBackgroundMode, string> = new Map<LayoutBuilderBodyBackgroundMode, string>([
    [LayoutBuilderBodyBackgroundMode.WHITE, "body-white"],
    [LayoutBuilderBodyBackgroundMode.LIGHT, "bg-gray-200"]
]);
