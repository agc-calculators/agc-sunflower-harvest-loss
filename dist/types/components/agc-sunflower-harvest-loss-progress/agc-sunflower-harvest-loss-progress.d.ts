import '../../stencil.core';
export declare class AgcSunflowerHarvestLossProgress {
    socket: string;
    currentStep: number;
    progress: HTMLDivElement;
    render(): JSX.Element;
    componentDidLoad(): void;
    agcStepChangedHandler(event: CustomEvent): void;
    agcCalculatedHandler(event: CustomEvent): void;
    componentDidUnload(): void;
}
