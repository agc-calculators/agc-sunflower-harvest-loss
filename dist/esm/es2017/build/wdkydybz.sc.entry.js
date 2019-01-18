/*! Built with http://stenciljs.com */
import { h } from '../agc-sunflower-harvest-loss.core.js';

class AgcSunflowerHarvestLossResultsPlaceholder {
    render() {
        const placeholder = () => (h("span", null,
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" })));
        return (h("section", null,
            h("ul", { class: "agc-results-placeholder" },
                h("li", null,
                    h("h2", { "data-i18n": "results.yield-loss" }, "Yield Loss"),
                    placeholder()))));
    }
    static get is() { return "agc-sunflower-harvest-loss-results-placeholder"; }
}

export { AgcSunflowerHarvestLossResultsPlaceholder };
