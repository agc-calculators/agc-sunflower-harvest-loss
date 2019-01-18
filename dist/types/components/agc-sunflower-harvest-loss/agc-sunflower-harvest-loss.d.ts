import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
export declare class AgcSunflowerHarvestLoss {
    socket: string;
    tract: string;
    mode: "full" | "step";
    units: any;
    currentStep: number;
    cache: {};
    submitted: boolean;
    results: {};
    agcCalculated: EventEmitter;
    agcStepChanged: EventEmitter;
    form: HTMLFormElement;
    enterKeyHandler: (e: KeyboardEvent) => void;
    render(): JSX.Element;
    showTab(n: any): void;
    reset(): void;
    validateForm(): boolean;
    nextPrev(n: any, e: any): boolean;
    showResults(): void;
    handleAction(e: CustomEvent): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
}
