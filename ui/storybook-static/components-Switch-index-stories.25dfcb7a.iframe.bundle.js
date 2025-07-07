/*! For license information please see components-Switch-index-stories.25dfcb7a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[499],{"../node_modules/react/cjs/react-jsx-runtime.production.js":(__unused_webpack_module,exports)=>{var REACT_ELEMENT_TYPE=Symbol.for("react.transitional.element"),REACT_FRAGMENT_TYPE=Symbol.for("react.fragment");function jsxProd(type,config,maybeKey){var key=null;if(void 0!==maybeKey&&(key=""+maybeKey),void 0!==config.key&&(key=""+config.key),"key"in config)for(var propName in maybeKey={},config)"key"!==propName&&(maybeKey[propName]=config[propName]);else maybeKey=config;return config=maybeKey.ref,{$$typeof:REACT_ELEMENT_TYPE,type,key,ref:void 0!==config?config:null,props:maybeKey}}exports.Fragment=REACT_FRAGMENT_TYPE,exports.jsx=jsxProd,exports.jsxs=jsxProd},"../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../node_modules/react/cjs/react-jsx-runtime.production.js")},"./src/components/Switch/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("../node_modules/react/index.js"),__webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js"));const SwitchContainer=styled_components_browser_esm.Ay.label`
  display: inline-flex;
  align-items: center;
  cursor: ${({disabled})=>disabled?"not-allowed":"pointer"};
  opacity: ${({disabled})=>disabled?.6:1};
`,SwitchInput=styled_components_browser_esm.Ay.input`
  display: none;
`,SwitchSlider=styled_components_browser_esm.Ay.div`
  position: relative;
  width: ${({size})=>"small"===size?"32px":"large"===size?"48px":"40px"};
  height: ${({size})=>"small"===size?"16px":"large"===size?"24px":"20px"};
  background-color: ${({theme,isChecked})=>isChecked?theme.colors.primary:theme.colors.surface};
  border-radius: 12px;
  transition: background-color 0.2s;

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: ${({size})=>"small"===size?"12px":"large"===size?"20px":"16px"};
    height: ${({size})=>"small"===size?"12px":"large"===size?"20px":"16px"};
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.2s;
    transform: ${({isChecked,size})=>isChecked?`translateX(${"small"===size?"16px":"large"===size?"24px":"20px"})`:"translateX(0)"};
  }
`,Switch=({isChecked,onChange,disabled=!1,size="medium"})=>(0,jsx_runtime.jsxs)(SwitchContainer,{disabled,size,children:[(0,jsx_runtime.jsx)(SwitchInput,{type:"checkbox",checked:isChecked,onChange:event=>{disabled||onChange(event.target.checked)},disabled}),(0,jsx_runtime.jsx)(SwitchSlider,{isChecked,size})]}),components_Switch=Switch;Switch.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{isChecked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(isChecked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isChecked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}}}};const index_stories={title:"UI/Switch",component:components_Switch,tags:["autodocs"],args:{isChecked:!1}},Default={args:{}},Checked={args:{isChecked:!0}},__namedExportsOrder=["Default","Checked"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"{\n  args: {\n    isChecked: true\n  }\n}",...Checked.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Switch-index-stories.25dfcb7a.iframe.bundle.js.map