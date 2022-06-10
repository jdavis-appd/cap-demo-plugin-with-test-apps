export interface DemoPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
