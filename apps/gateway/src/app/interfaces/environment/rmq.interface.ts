export interface RmqEnvironment {
    getRmqUri(): string;
    getRmqQueue(name: string): string;
}