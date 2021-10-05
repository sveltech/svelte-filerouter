export function exporter({ instance }: {
    instance: RoutifyBuildtime;
}): Promise<void[]>;
export function exportNode(rootNode: RNode, outputDir: string): void;
export function exportInstance(rootNode: RNode, outputDir: string): void;
