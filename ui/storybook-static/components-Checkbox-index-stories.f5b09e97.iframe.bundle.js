/*! For license information please see components-Checkbox-index-stories.f5b09e97.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[652],{"../node_modules/react/cjs/react-jsx-runtime.production.js":(__unused_webpack_module,exports)=>{var REACT_ELEMENT_TYPE=Symbol.for("react.transitional.element"),REACT_FRAGMENT_TYPE=Symbol.for("react.fragment");function jsxProd(type,config,maybeKey){var key=null;if(void 0!==maybeKey&&(key=""+maybeKey),void 0!==config.key&&(key=""+config.key),"key"in config)for(var propName in maybeKey={},config)"key"!==propName&&(maybeKey[propName]=config[propName]);else maybeKey=config;return config=maybeKey.ref,{$$typeof:REACT_ELEMENT_TYPE,type,key,ref:void 0!==config?config:null,props:maybeKey}}exports.Fragment=REACT_FRAGMENT_TYPE,exports.jsx=jsxProd,exports.jsxs=jsxProd},"../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../node_modules/react/cjs/react-jsx-runtime.production.js")},"./src/components/Checkbox/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("../node_modules/react/index.js"),__webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js"));const StyledCheckBoxContainer=styled_components_browser_esm.Ay.label`
  display: inline-flex;
  align-items: center;
  gap: ${({theme})=>theme.spacing.sm};
  cursor: ${({$disabled})=>$disabled?"not-allowed":"pointer"};
  opacity: ${({$disabled})=>$disabled?.6:1};
  user-select: none;
  
  &:hover {
    opacity: ${({$disabled})=>$disabled?.6:.8};
  }
  
  transition: opacity ${({theme})=>theme.transitions.duration} ${({theme})=>theme.transitions.easing};
`,StyledCheckBox=styled_components_browser_esm.Ay.input`
  appearance: none;
  margin: 0;
  border: 2px solid ${({theme})=>theme.colors.onSurface.mediumEmphasis};
  background-color: transparent;
  cursor: ${({$disabled})=>$disabled?"not-allowed":"pointer"};
  position: relative;
  transition: all ${({theme})=>theme.transitions.duration} ${({theme})=>theme.transitions.easing};
  
  ${({$size,theme})=>((size="medium",theme)=>{theme.spacing.sm,theme.spacing.md;const refinedSizeMap={small:"12px",medium:theme.spacing.md,large:"20px"},borderRadiusMap={small:"2px",medium:theme.spacing.xs,large:theme.spacing.xs};return styled_components_browser_esm.AH`
    width: ${refinedSizeMap[size]};
    height: ${refinedSizeMap[size]};
    border-radius: ${borderRadiusMap[size]};
  `})($size,theme)}
  ${({$variant,theme})=>((variant="primary",theme)=>{const variants={primary:theme.colors.primary,secondary:theme.colors.secondary,success:theme.colors.success,error:theme.colors.error};return styled_components_browser_esm.AH`
    accent-color: ${variants[variant]};
    
    &:checked {
      background-color: ${variants[variant]};
      border-color: ${variants[variant]};
    }
    
    &:focus {
      outline: 2px solid ${variants[variant]}33;
      outline-offset: 2px;
    }
  `})($variant,theme)}
  
  &:checked {
    background-color: ${({$variant="primary",theme})=>({primary:theme.colors.primary,secondary:theme.colors.secondary,success:theme.colors.success,error:theme.colors.error}[$variant])};
    border-color: ${({$variant="primary",theme})=>({primary:theme.colors.primary,secondary:theme.colors.secondary,success:theme.colors.success,error:theme.colors.error}[$variant])};
    
    &::after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${({theme})=>theme.colors.onPrimary};
      font-size: ${({$size="medium",theme})=>({small:"8px",medium:"10px",large:"12px"}[$size])};
      font-weight: bold;
      line-height: 1;
    }
  }
  
  &:disabled {
    cursor: not-allowed;
    background-color: ${({theme})=>theme.colors.onSurface.disabled};
    border-color: ${({theme})=>theme.colors.onSurface.disabled};
    
    &:checked {
      background-color: ${({theme})=>theme.colors.onSurface.disabled};
      border-color: ${({theme})=>theme.colors.onSurface.disabled};
      
      &::after {
        color: ${({theme})=>theme.colors.onSurface.mediumEmphasis};
      }
    }
  }
  
  &:hover:not(:disabled) {
    border-color: ${({$variant="primary",theme})=>({primary:theme.colors.primary,secondary:theme.colors.secondary,success:theme.colors.success,error:theme.colors.error}[$variant])};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({$variant="primary",theme})=>({primary:theme.colors.primary,secondary:theme.colors.secondary,success:theme.colors.success,error:theme.colors.error}[$variant])}33;
  }
`;var Label=__webpack_require__("./src/components/Label/index.tsx");const Checkbox=({checked=!1,label,onChange,disabled=!1,size="medium",variant="primary",className,style,"data-testid":dataTestId})=>{return(0,jsx_runtime.jsxs)(StyledCheckBoxContainer,{$size:size,$variant:variant,$disabled:disabled,$checked:checked,className,style,"data-testid":dataTestId,children:[(0,jsx_runtime.jsx)(StyledCheckBox,{type:"checkbox",checked,onChange:event=>{disabled||onChange?.(event.target.checked)},disabled,$size:size,$variant:variant,$disabled:disabled,$checked:checked}),label&&(0,jsx_runtime.jsx)(Label.A,{size:(checkboxSize=size,{small:"small",medium:"medium",large:"medium"}[checkboxSize]),isDisabled:disabled,children:label})]});var checkboxSize};Checkbox.displayName="Checkbox";const components_Checkbox=Checkbox;Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"boolean"},description:"The current checked state of the checkbox.",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"The label text displayed next to the checkbox."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Callback function invoked when the checkbox state changes."},disabled:{required:!1,tsType:{name:"boolean"},description:"If `true`, the checkbox will be disabled and non-interactive.",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size variant of the checkbox",defaultValue:{value:'"medium"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'error'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}]},description:"Color variant of the checkbox",defaultValue:{value:'"primary"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name for the container"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles for the container"},"data-testid":{required:!1,tsType:{name:"string"},description:"Optional test id for testing purposes"}}};const index_stories={title:"UI/Checkbox",component:components_Checkbox,tags:["autodocs"],args:{label:"Checkbox"}},Default={args:{checked:!1}},Checked={args:{checked:!0}},__namedExportsOrder=["Default","Checked"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    checked: false\n  }\n}",...Default.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"{\n  args: {\n    checked: true\n  }\n}",...Checked.parameters?.docs?.source}}}},"./src/components/Label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_Label});var jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("../node_modules/react/index.js"),__webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js"));const StyledLabel=styled_components_browser_esm.Ay.label`
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
//# sourceMappingURL=components-Checkbox-index-stories.f5b09e97.iframe.bundle.js.map