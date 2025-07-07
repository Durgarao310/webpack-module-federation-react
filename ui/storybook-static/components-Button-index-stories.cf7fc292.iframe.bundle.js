/*! For license information please see components-Button-index-stories.cf7fc292.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[819],{"../node_modules/react/cjs/react-jsx-runtime.production.js":(__unused_webpack_module,exports)=>{var REACT_ELEMENT_TYPE=Symbol.for("react.transitional.element"),REACT_FRAGMENT_TYPE=Symbol.for("react.fragment");function jsxProd(type,config,maybeKey){var key=null;if(void 0!==maybeKey&&(key=""+maybeKey),void 0!==config.key&&(key=""+config.key),"key"in config)for(var propName in maybeKey={},config)"key"!==propName&&(maybeKey[propName]=config[propName]);else maybeKey=config;return config=maybeKey.ref,{$$typeof:REACT_ELEMENT_TYPE,type,key,ref:void 0!==config?config:null,props:maybeKey}}exports.Fragment=REACT_FRAGMENT_TYPE,exports.jsx=jsxProd,exports.jsxs=jsxProd},"../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../node_modules/react/cjs/react-jsx-runtime.production.js")},"./src/components/Button/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Filled:()=>Filled,Outlined:()=>Outlined,Text:()=>Text,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Button",component:__webpack_require__("./src/components/Button/index.tsx").A,tags:["autodocs"],args:{children:"Button"}},Filled={args:{variant:"filled",color:"primary"}},Outlined={args:{variant:"outlined",color:"primary"}},Text={args:{variant:"text",color:"primary"}},__namedExportsOrder=["Filled","Outlined","Text"];Filled.parameters={...Filled.parameters,docs:{...Filled.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'filled',\n    color: 'primary'\n  }\n}",...Filled.parameters?.docs?.source}}},Outlined.parameters={...Outlined.parameters,docs:{...Outlined.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'outlined',\n    color: 'primary'\n  }\n}",...Outlined.parameters?.docs?.source}}},Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'text',\n    color: 'primary'\n  }\n}",...Text.parameters?.docs?.source}}}},"./src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Button});var jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledButton=styled_components_browser_esm.Ay.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({theme})=>theme.componentSizes.borderRadius};
  font-weight: ${({theme})=>theme.typography.button.fontWeight};
  font-family: ${({theme})=>theme.typography.button.fontFamily};
  transition: all ${({theme})=>theme.transitions.duration} ${({theme})=>theme.transitions.easing};
  cursor: pointer;
  width: ${({isFullWidth})=>isFullWidth?"100%":"auto"};
  position: relative;
  text-decoration: none;
  outline: none;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({theme})=>theme.colors.primary};
    outline-offset: 2px;
  }

  ${props=>(({theme,variant="filled",color="primary"})=>{const colorValue=theme.colors[color];switch(variant){case"outlined":return styled_components_browser_esm.AH`
        background-color: transparent;
        border: 1px solid ${colorValue};
        color: ${colorValue};

        &:hover:not(:disabled) {
          background-color: ${theme.colors.onSurface.withOpacity(.1)};
        }
      `;case"text":return styled_components_browser_esm.AH`
        background-color: transparent;
        border: 1px solid transparent;
        color: ${colorValue};

        &:hover:not(:disabled) {
          background-color: ${theme.colors.onSurface.withOpacity(.1)};
        }
      `;default:return styled_components_browser_esm.AH`
        background-color: ${colorValue};
        color: ${theme.colors.onPrimary};
        border: 1px solid ${colorValue};

        &:hover:not(:disabled) {
          opacity: 0.9;
        }
      `}})(props)}
  ${props=>(({size="medium",theme})=>{const buttonHeight=theme.componentSizes.buttonHeight;switch(size){case"small":return styled_components_browser_esm.AH`
        font-size: ${theme.typography.label.small.fontSize};
        height: ${buttonHeight.small};
        padding: 0 ${theme.spacing.md};
      `;case"large":return styled_components_browser_esm.AH`
        font-size: ${theme.typography.label.large.fontSize};
        height: ${buttonHeight.large};
        padding: 0 ${theme.spacing.xl};
      `;default:return styled_components_browser_esm.AH`
        font-size: ${theme.typography.label.medium.fontSize};
        height: ${buttonHeight.medium};
        padding: 0 ${theme.spacing.lg};
      `}})(props)}
`,ButtonIcon=styled_components_browser_esm.Ay.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  ${({position})=>"start"===position&&styled_components_browser_esm.AH`
    margin-right: 0.5rem;
  `}
  
  ${({position})=>"end"===position&&styled_components_browser_esm.AH`
    margin-left: 0.5rem;
  `}
`,LoadingSpinner=styled_components_browser_esm.Ay.div`
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 2px solid currentColor;
  border-right: 2px solid currentColor;
  width: 1em;
  height: 1em;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,ButtonContent=styled_components_browser_esm.Ay.span`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({isLoading})=>isLoading?0:1};
  transition: opacity 0.2s ease-in-out;
`,LoadingWrapper=styled_components_browser_esm.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`,Button=(0,react.forwardRef)(({children,startIcon,endIcon,isDisabled=!1,size="medium",isLoading=!1,isFullWidth=!1,type="button",variant="filled",color="primary",onClick,className,...rest},ref)=>(0,jsx_runtime.jsxs)(StyledButton,{ref,type,disabled:isDisabled||isLoading,onClick:event=>{isDisabled||isLoading?event.preventDefault():onClick?.(event)},className,size,variant,color,isFullWidth,isLoading,...rest,children:[isLoading&&(0,jsx_runtime.jsx)(LoadingWrapper,{children:(0,jsx_runtime.jsx)(LoadingSpinner,{})}),(0,jsx_runtime.jsxs)(ButtonContent,{isLoading,children:[startIcon&&(0,jsx_runtime.jsx)(ButtonIcon,{position:"start",children:startIcon}),children,endIcon&&(0,jsx_runtime.jsx)(ButtonIcon,{position:"end",children:endIcon})]})]}));Button.displayName="Button";const components_Button=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the button. This can be text,\nan icon, or any other valid React node."},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon displayed at the beginning of the button's content."},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon displayed at the end of the button's content."},isDisabled:{required:!1,tsType:{name:"boolean"},description:"If `true`, the button will be disabled and non-interactive.",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"The visual size of the button's typography and padding.\nDefaults to 'medium'.",defaultValue:{value:"'medium'",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"If `true`, the button will display a loading indicator and\ntypically become non-interactive.",defaultValue:{value:"false",computed:!1}},isFullWidth:{required:!1,tsType:{name:"boolean"},description:"If `true`, the button will take up the full width of its parent container.",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"button" | "submit" | "reset"',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"submit"'},{name:"literal",value:'"reset"'}]},description:"The native HTML `type` attribute for the button.\nDefaults to 'button'.",defaultValue:{value:"'button'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"filled" | "outlined" | "text"',elements:[{name:"literal",value:'"filled"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"text"'}]},description:"The visual variant of the button, dictating its overall style.\nDefaults to 'filled'.",defaultValue:{value:"'filled'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"The color theme of the button.\nDefaults to 'primary'.",defaultValue:{value:"'primary'",computed:!1}},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Callback function invoked when the button is clicked."},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names to apply to the button element."}}}}}]);
//# sourceMappingURL=components-Button-index-stories.cf7fc292.iframe.bundle.js.map