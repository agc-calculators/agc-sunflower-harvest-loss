/*! Built with http://stenciljs.com */
import { h } from '../agc-sunflower-harvest-loss.core.js';

class AgcSunflowerHarvestLossProgress {
    constructor() {
        this.socket = "";
        this.currentStep = -1;
    }
    render() {
        return (h("div", { ref: c => (this.progress = c), class: "wizard__progress" },
            h("span", { class: `step${this.currentStep > 0 ? " finish" : ""}${this.currentStep === 0 ? " active" : ""}` }),
            h("span", { class: `step${this.currentStep > 1 ? " finish" : ""}${this.currentStep === 1 ? " active" : ""}` })));
    }
    componentDidLoad() {
        window.document.addEventListener("agcStepChanged", this.agcStepChangedHandler.bind(this));
        window.document.addEventListener("agcCalculated", this.agcCalculatedHandler.bind(this));
    }
    agcStepChangedHandler(event) {
        if (event.detail["socket"] !== this.socket) {
            return;
        }
        this.currentStep = parseInt(event.detail["step"]);
        this.progress.classList.remove("complete");
    }
    agcCalculatedHandler(event) {
        if (event.detail["socket"] !== this.socket) {
            return;
        }
        this.currentStep = 2;
        this.progress.classList.add("complete");
    }
    componentDidUnload() {
        window.document.removeEventListener("agcCalculated", this.agcCalculatedHandler);
        window.document.removeEventListener("agcStepChanged", this.agcStepChangedHandler);
    }
    static get is() { return "agc-sunflower-harvest-loss-progress"; }
    static get properties() { return {
        "currentStep": {
            "state": true
        },
        "socket": {
            "type": String,
            "attr": "socket"
        }
    }; }
}

export { AgcSunflowerHarvestLossProgress };
