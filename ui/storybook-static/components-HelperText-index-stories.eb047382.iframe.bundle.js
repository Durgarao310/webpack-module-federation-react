/*! For license information please see components-HelperText-index-stories.eb047382.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[682],{"../node_modules/react/cjs/react-jsx-runtime.production.js":(__unused_webpack_module,exports)=>{var REACT_ELEMENT_TYPE=Symbol.for("react.transitional.element"),REACT_FRAGMENT_TYPE=Symbol.for("react.fragment");function jsxProd(type,config,maybeKey){var key=null;if(void 0!==maybeKey&&(key=""+maybeKey),void 0!==config.key&&(key=""+config.key),"key"in config)for(var propName in maybeKey={},config)"key"!==propName&&(maybeKey[propName]=config[propName]);else maybeKey=config;return config=maybeKey.ref,{$$typeof:REACT_ELEMENT_TYPE,type,key,ref:void 0!==config?config:null,props:maybeKey}}exports.Fragment=REACT_FRAGMENT_TYPE,exports.jsx=jsxProd,exports.jsxs=jsxProd},"../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../node_modules/react/cjs/react-jsx-runtime.production.js")},"./src/components/HelperText/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithError:()=>WithError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledHelperText=styled_components_browser_esm.Ay.div`
  font-family: ${({theme})=>theme.typography.fontFamily};
  font-weight: 400;
  margin: 0;
  transition: color ${({theme})=>theme.transitions?.duration||"0.2s"} ${({theme})=>theme.transitions?.easing||"ease"};
  
  ${({isSubtle})=>isSubtle&&styled_components_browser_esm.AH`
    opacity: 0.7;
  `}
  
  ${({srOnly})=>srOnly&&styled_components_browser_esm.AH`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  `}
  
  ${props=>(({theme,hasError,color})=>{if(hasError)return styled_components_browser_esm.AH`
      color: ${theme.colors.error};
    `;if(color)switch(color){case"primary":case"info":return styled_components_browser_esm.AH`
          color: ${theme.colors.primary};
        `;case"secondary":return styled_components_browser_esm.AH`
          color: ${theme.colors.secondary};
        `;case"error":return styled_components_browser_esm.AH`
          color: ${theme.colors.error};
        `;case"warning":return styled_components_browser_esm.AH`
          color: ${theme.colors.warning};
        `;case"success":return styled_components_browser_esm.AH`
          color: ${theme.colors.success};
        `;default:return styled_components_browser_esm.AH`
          color: ${theme.colors.onSurface.mediumEmphasis};
        `}return styled_components_browser_esm.AH`
    color: ${theme.colors.onSurface.mediumEmphasis};
  `})(props)}
  ${props=>(({size="medium",theme})=>{switch(size){case"small":return styled_components_browser_esm.AH`
        font-size: ${theme.typography.caption?.fontSize||"12px"};
        line-height: ${theme.typography.caption?.lineHeight||"16px"};
      `;case"large":return styled_components_browser_esm.AH`
        font-size: ${theme.typography.body1.fontSize};
        line-height: ${theme.typography.body1.lineHeight};
      `;default:return styled_components_browser_esm.AH`
        font-size: ${theme.typography.body2.fontSize};
        line-height: ${theme.typography.body2.lineHeight};
      `}})(props)}
`,HelperTextContent=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme})=>theme.spacing.xs};
`,HelperTextIcon=styled_components_browser_esm.Ay.span`
  display: inline-flex;
  align-items: center;
  margin-top: 1px; /* Slight adjustment to align with text */
  flex-shrink: 0;
  
  svg {
    width: 1em;
    height: 1em;
  }
`,HelperText=(0,react.forwardRef)(({children,hasError=!1,size="medium",className,id,srOnly=!1,color,startIcon,isSubtle=!1,...rest},ref)=>{if(!children)return null;const content=startIcon?(0,jsx_runtime.jsxs)(HelperTextContent,{children:[(0,jsx_runtime.jsx)(HelperTextIcon,{children:startIcon}),(0,jsx_runtime.jsx)("span",{children})]}):children;return(0,jsx_runtime.jsx)(StyledHelperText,{ref,id,className,hasError,size,srOnly,color,isSubtle,role:hasError?"alert":void 0,"aria-live":hasError?"polite":void 0,...rest,children:content})});HelperText.displayName="HelperText";const components_HelperText=HelperText;HelperText.__docgenInfo={description:"",methods:[],displayName:"HelperText",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The text content to display."},hasError:{required:!1,tsType:{name:"boolean"},description:"If `true`, displays the helper text in an error state with error styling.",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"The visual size of the helper text.\nDefaults to 'medium'.",defaultValue:{value:"'medium'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name."},id:{required:!1,tsType:{name:"string"},description:"The id attribute for the helper text element.\nUseful for accessibility (aria-describedby)."},srOnly:{required:!1,tsType:{name:"boolean"},description:"If `true`, the helper text will be hidden visually but still accessible to screen readers.",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"}]},description:"Custom color override for the helper text.\nIf not provided, uses theme colors based on hasError state."},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon to display before the text."},isSubtle:{required:!1,tsType:{name:"boolean"},description:"If `true`, the helper text will have reduced opacity to appear more subtle.",defaultValue:{value:"false",computed:!1}}}};const index_stories={title:"UI/HelperText",component:components_HelperText,tags:["autodocs"],args:{children:"This is a helper text"}},Default={args:{}},WithError={args:{hasError:!0,children:"This is an error message"}},__namedExportsOrder=["Default","WithError"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  args: {\n    hasError: true,\n    children: 'This is an error message'\n  }\n}",...WithError.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-HelperText-index-stories.eb047382.iframe.bundle.js.map