(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const o=a(89),{lightningChart:l,MapTypes:s,PalettedFill:d,LUT:n,ColorRGBA:i,formatLongitudeLatitude:r,regularColorSteps:p,Themes:u}=o,h=l().Map({theme:u[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0,type:s.Europe}),m=h.getTheme();h.setTitle("Population by country (2018)").setFillStyle(new d({lut:new n({steps:p(5e6,1e8,m.examples.badGoodColorPalette.reverse(),{formatLabels:e=>`${(e/1e6).toFixed(0)} Million`}),interpolate:!0,color:i(255,255,255)})})).setCursorResultTableFormatter(((e,t,a,o,l)=>(e.addRow(t.name).addRow(r(o,l)),a?e.addRow("Population: ","",`${(a/1e6).toFixed(1)} million`):e.addRow("No population data available"),e))),h.addLegendBox().setAutoDispose({type:"max-width",maxWidth:.3}).add(h),fetch(document.head.baseURI+"examples/assets/1101/population_eu_2018.json").then((e=>e.json())).then((e=>{const t=e.map((e=>({ISO_A3:e["Country Code"],value:e.Value})));h.invalidateRegionValues(t)}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);