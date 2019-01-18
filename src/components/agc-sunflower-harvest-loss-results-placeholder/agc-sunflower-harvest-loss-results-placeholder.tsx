import { Component } from "@stencil/core";

@Component({
  tag: "agc-sunflower-harvest-loss-results-placeholder"
})
export class AgcSunflowerHarvestLossResultsPlaceholder {
  render() {
    const placeholder = () => (
      <span>
        <i class="mark" /> <i class="mark" /> <i class="mark" />{" "}
        <i class="mark" />
      </span>
    );

    return (
      <section>
        <ul class="agc-results-placeholder">
          <li>
            <h2 data-i18n="results.yield-loss">Yield Loss</h2>
            {placeholder()}
          </li>
        </ul>
      </section>
    );
  }
}
