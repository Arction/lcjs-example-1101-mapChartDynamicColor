(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const o=a(377),{lightningChart:n,MapTypes:l,PalettedFill:s,LUT:i,ColorRGBA:u,formatLongitudeLatitude:r,regularColorSteps:d,Themes:p}=o,h=n({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).Map({theme:p[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0,type:l.Europe}),m=h.getTheme();h.setTitle("Population by country (2018)").setFillStyle(new s({lut:new i({steps:d(5e6,1e8,m.examples.badGoodColorPalette.reverse(),{formatLabels:e=>`${(e/1e6).toFixed(0)} Million`}),interpolate:!0,color:u(255,255,255)})})).setCursorFormatting(((e,t)=>{const a=[[t.region.name],[r(t.longitude,t.latitude)]];return t.value?a.push(["Population","",`${(t.value/1e6).toFixed(1)} million`]):a.push("No population data available"),a})),h.addLegendBox().setAutoDispose({type:"max-width",maxWidth:.3}).add(h),fetch(new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"examples/assets/1101/population_eu_2018.json").then((e=>e.json())).then((e=>{const t=e.map((e=>({ISO_A3:e["Country Code"],value:e.Value})));h.invalidateRegionValues(t)}))}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);