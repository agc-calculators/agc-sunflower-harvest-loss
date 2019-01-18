
// AgcSunflowerHarvestLoss: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './agc-sunflower-harvest-loss.core.js';
import {
  AgcSunflowerHarvestLoss,
  AgcSunflowerHarvestLossInputs,
  AgcSunflowerHarvestLossProgress,
  AgcSunflowerHarvestLossResults,
  AgcSunflowerHarvestLossResultsPlaceholder
} from './agc-sunflower-harvest-loss.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    AgcSunflowerHarvestLoss,
    AgcSunflowerHarvestLossInputs,
    AgcSunflowerHarvestLossProgress,
    AgcSunflowerHarvestLossResults,
    AgcSunflowerHarvestLossResultsPlaceholder
  ], opts);
}
