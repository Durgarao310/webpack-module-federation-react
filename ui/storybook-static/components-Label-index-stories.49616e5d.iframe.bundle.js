/*! For license information please see components-Label-index-stories.49616e5d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[213],{"../node_modules/react/cjs/react-jsx-runtime.production.js":(__unused_webpack_module,exports)=>{var REACT_ELEMENT_TYPE=Symbol.for("react.transitional.element"),REACT_FRAGMENT_TYPE=Symbol.for("react.fragment");function jsxProd(type,config,maybeKey){var key=null;if(void 0!==maybeKey&&(key=""+maybeKey),void 0!==config.key&&(key=""+config.key),"key"in config)for(var propName in maybeKey={},config)"key"!==propName&&(maybeKey[propName]=config[propName]);else maybeKey=config;return config=maybeKey.ref,{$$typeof:REACT_ELEMENT_TYPE,type,key,ref:void 0!==config?config:null,props:maybeKey}}exports.Fragment=REACT_FRAGMENT_TYPE,exports.jsx=jsxProd,exports.jsxs=jsxProd},"../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../node_modules/react/cjs/react-jsx-runtime.production.js")},"./src/components/Label/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithError:()=>WithError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Label",component:__webpack_require__("./src/components/Label/index.tsx").A,tags:["autodocs"],args:{children:"Label"}},Default={args:{}},WithError={args:{isError:!0}},__namedExportsOrder=["Default","WithError"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  args: {\n    isError: true\n  }\n}",...WithError.parameters?.docs?.source}}}},"./src/components/Label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Label});var jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("../node_modules/react/index.js"),__webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js"));const StyledLabel=styled_components_browser_esm.Ay.label`
  display: inline-flex;
  align-items: center;
  gap: ${({theme})=>theme.spacing.sm}; /* Example: theme.spacing.small from your M3 theme */

  /* --- REFINED TYPOGRAPHY APPLICATION --- */
  ${({theme,$size})=>{const typographyTokens=theme.typography.label[$size||"small"];return styled_components_browser_esm.AH`
      font-family: ${typographyTokens.fontFamily};
      font-size: ${typographyTokens.fontSize};
      font-weight: ${typographyTokens.fontWeight};
      line-height: ${typographyTokens.lineHeight};
      letter-spacing: ${typographyTokens.letterSpacing};
    `}}
  /* --- END REFINED TYPOGRAPHY APPLICATION --- */


  color: ${({theme})=>theme.colors.onSurfaceVariant}; /* Default M3 label color */

  /* Apply error state styles */
  ${({$isError,theme})=>$isError&&styled_components_browser_esm.AH`
      color: ${theme.colors.error};
    `}

  /* Apply disabled state styles */
  ${({$isDisabled,theme})=>$isDisabled&&styled_components_browser_esm.AH`
      color: ${theme.colors.onSurface.withOpacity(.38)}; /* M3 disabled opacity */
      cursor: not-allowed;
    `}

  .label-icon {
    display: flex;
    align-items: center;
    /* You might want to size icons consistently here or via icon component props */
    color: inherit; /* Icons inherit label color */
  }
`,Label=({children,startingIcon,endIcon,htmlFor,isError=!1,isDisabled=!1,size="medium"})=>(0,jsx_runtime.jsxs)(StyledLabel,{htmlFor,$isError:isError,$isDisabled:isDisabled,$size:size,children:[startingIcon&&(0,jsx_runtime.jsx)("span",{className:"label-icon",children:startingIcon}),children,endIcon&&(0,jsx_runtime.jsx)("span",{className:"label-icon",children:endIcon})]}),components_Label=Label;Label.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The text content of the label."},startingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional starting icon for the label."},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional ending icon for the label."},htmlFor:{required:!1,tsType:{name:"string"},description:"Associates the label with a form element by its ID."},isError:{required:!1,tsType:{name:"boolean"},description:"Specifies if the label should indicate an error state.\nThis will apply M3 error color to the label text.",defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Specifies if the label should indicate a disabled state.\nThis will apply M3 disabled color to the label text.",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Defines the size of the label typography.\nDefaults to 'small' if not provided.",defaultValue:{value:"'medium'",computed:!1}}}}}}]);
//# sourceMappingURL=components-Label-index-stories.49616e5d.iframe.bundle.js.map