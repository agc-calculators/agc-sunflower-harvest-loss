/*! Built with http://stenciljs.com */
const{h:s}=window.AgcSunflowerHarvestLoss;class t{constructor(){this.socket="",this.ready=!1}render(){return s("section",{"data-wizard-results":!0,ref:s=>this.section=s},s("div",{style:{display:this.ready?"none":"block"}},s("slot",{name:"empty"})),s("div",{style:{display:this.ready?"block":"none"}},this.data&&s("ul",{class:"agc-results"},s("li",null,s("h2",{"data-i18n":"results.yield-loss"},"Yield Loss"),s("span",{class:"agc-results__value"},this.data.yieldLoss),s("sub",null,this.data.units.yieldLoss)))))}handleResults(s){s.detail.socket===this.socket&&(this.data=Object.assign({},s.detail.results),this.ready=!0)}componentDidLoad(){this.socket&&window.document.addEventListener("agcCalculated",this.handleResults.bind(this))}componentDidUnload(){window.document.removeEventListener("agcCalculated",this.handleResults)}static get is(){return"agc-sunflower-harvest-loss-results"}static get properties(){return{data:{state:!0},ready:{state:!0},socket:{type:String,attr:"socket"}}}}export{t as AgcSunflowerHarvestLossResults};