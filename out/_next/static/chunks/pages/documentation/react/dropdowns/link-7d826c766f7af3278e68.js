_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"+QRC":function(e,t,n){"use strict";var o=n("E9nw"),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,c,a,i,l,p,u=!1;t||(t={}),n=t.debug||!1;try{if(a=o(),i=document.createRange(),l=document.getSelection(),(p=document.createElement("span")).textContent=e,p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var c=r[t.format]||r.default;window.clipboardData.setData(c,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(p),i.selectNodeContents(p),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(s){n&&console.error("unable to copy using execCommand: ",s),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(s){n&&console.error("unable to copy using clipboardData: ",s),n&&console.error("falling back to prompt"),c=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(c,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),p&&document.body.removeChild(p),a()}return u}},"7ItQ":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n("q1tI");var o=n("uUdh"),r=n("c2c2"),c=n("P5Jw"),a=n("nKUr"),i=["blue-gray","gray","brown","deep-orange","orange","amber","yellow","lime","light-green","green","teal","cyan","light-blue","blue","indigo","deep-purple","purple","pink","red"],l=["blueGray","gray","brown","deepOrange","orange","amber","yellow","lime","lightGreen","green","teal","cyan","lightBlue","blue","indigo","deepPurple","purple","pink","red"];function p(e){var t=e.children,n=e.activeColor,p=(e.activeFramework,e.onColorClick),u=(e.onFrameworkClick,e.onCopy),s=e.codeToShow,d=e.copyText;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"border border-solid border-gray-200 rounded my-4 p-4 relative",children:[n?Object(a.jsx)("div",{id:"colors",className:"flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto",style:{width:"100%",bottom:"-14px"},children:Object(a.jsx)("div",{className:"flex flew-wrap justify-center items-center bg-white px-2",children:i.map((function(e,t){return Object(a.jsx)("span",{className:"cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-".concat(e).concat(n===l[t]?"".concat("yellow"===e?"-600":"-500"," shadow-md"):"-200"),onClick:function(){p(l[t]),u(!1)}},t)}))})}):null,t,Object(a.jsxs)("div",{className:"relative mt-4",children:[Object(a.jsx)(c.CopyToClipboard,{text:s,onCopy:function(){return u(!0)},children:Object(a.jsx)("button",{className:"text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",type:"button",children:d})}),Object(a.jsx)(o.a,{language:"jsx",style:r.a11yDark,children:s})]})]})})}},"82ZM":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/react/dropdowns/link",function(){return n("ZbCu")}])},E7Xt:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("q1tI");var o=n("nKUr");function r(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"font-serif font-medium text-xl mb-2 text-gray-900",children:e.title}),Object(o.jsx)("p",{className:"text-gray-700 mb-4 font-light",children:e.description})]})}},E9nw:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},P5Jw:function(e,t,n){"use strict";var o=n("rHrb").CopyToClipboard;o.CopyToClipboard=o,e.exports=o},ZbCu:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var o=n("q1tI"),r=n("wEh6"),c=n("Blfr"),a=n("uCv7"),i=n("zQxQ"),l=n("E7Xt"),p=n("pi5Z"),u=n("nKUr");function s(){var e=Object(o.useState)(null),t=e[0],n=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(r.a,{title:"React Dropdowns"}),Object(u.jsx)(a.a,{}),Object(u.jsxs)(c.a,{children:[Object(u.jsx)(i.a,{title:"React Dropdowns",description:"Toggle contextual overlays for displaying lists of links and more with the Material Tailwind dropdown plugin."}),Object(u.jsx)(l.a,{title:"Dropdown"}),Object(u.jsx)(p.a,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},buttonType:"link",placement:"bottom-start",size:"regular",rounded:!1,buttonText:"Dropdown",rippleEffect:'ripple="dark"',ripple:"dark"}),Object(u.jsx)("div",{className:"h-20",children:"\xa0"}),Object(u.jsx)(l.a,{title:"Rounded Dropdown"}),Object(u.jsx)(p.a,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},buttonType:"link",placement:"bottom-start",size:"regular",rounded:!0,buttonText:"Rounded Dropdown",rippleEffect:'ripple="dark"',ripple:"dark"}),Object(u.jsx)("div",{className:"h-20",children:"\xa0"}),Object(u.jsx)(l.a,{title:"Small Dropdown"}),Object(u.jsx)(p.a,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},placement:"bottom-start",buttonType:"link",size:"sm",rounded:!1,buttonText:"Small Dropdown",rippleEffect:'ripple="dark"',ripple:"dark"}),Object(u.jsx)("div",{className:"h-20",children:"\xa0"}),Object(u.jsx)(l.a,{title:"Regular Dropdown"}),Object(u.jsx)(p.a,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},placement:"bottom-start",buttonType:"link",size:"regular",rounded:!1,buttonText:"Regular Dropdown",rippleEffect:'ripple="dark"',ripple:"dark"}),Object(u.jsx)("div",{className:"h-20",children:"\xa0"}),Object(u.jsx)(l.a,{title:"Large Dropdown"}),Object(u.jsx)(p.a,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},placement:"bottom-start",buttonType:"link",size:"lg",rounded:!1,buttonText:"Large Dropdown",rippleEffect:'ripple="dark"',ripple:"dark"})]})]})}},pi5Z:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n("rePB"),r=n("Ff2n"),c=n("q1tI"),a=n("yhu3"),i=n("jgyP"),l=n("7ItQ"),p=n("nKUr");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){e.children;var t=e.copyText,n=e.onCopy,o=e.buttonType,u=e.size,d=e.rounded,f=e.placement,b=e.buttonText,y=e.rippleEffect,m=Object(r.a)(e,["children","copyText","onCopy","buttonType","size","rounded","placement","buttonText","rippleEffect"]),j=Object(c.useState)("lightBlue"),w=j[0],h=j[1],g=Object(c.useState)("react"),O=g[0],x=g[1],C='import React from "react";\nimport Dropdown from "@material-tailwind/react/Dropdown"\nimport DropdownItem from "@material-tailwind/react/DropdownItem"\n\nexport default function Dropdown() {\n  return (\n    <Dropdown\n      color="'.concat(w,'"\n      placement="').concat(f,'"\n      buttonText="').concat(b,'"\n      buttonType="').concat(o,'"\n      size="').concat(u,'"\n      rounded={').concat(d,"}\n      ").concat(y,'\n    >\n      <DropdownItem href="#" onClick={(e) => e.preventDefault()}>Action</DropdownItem>\n      <DropdownItem href="#" onClick={(e) => e.preventDefault()}>Another Action</DropdownItem>\n      <DropdownItem href="#" onClick={(e) => e.preventDefault()}>Something Else</DropdownItem>\n    </Dropdown>\n  )\n}');return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(l.a,{copyText:t,onCopy:n,activeColor:w,activeFramework:O,codeToShow:C,onColorClick:function(e){return h(e)},onFrameworkClick:function(e){return x(e)},children:Object(p.jsx)("div",{className:"flex justify-center",children:Object(p.jsxs)(a.a,s(s({},m),{},{color:w,placement:f,buttonText:b,buttonType:o,size:u,rounded:d,children:[Object(p.jsx)(i.a,{href:"#",onClick:function(e){return e.preventDefault()},children:"Action"}),Object(p.jsx)(i.a,{href:"#",onClick:function(e){return e.preventDefault()},children:"Another Action"}),Object(p.jsx)(i.a,{href:"#",onClick:function(e){return e.preventDefault()},children:"Something Else"})]}))})})})}},rHrb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=c(n("q1tI")),r=c(n("+QRC"));function c(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?f(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(){var e,n;p(this,t);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return y(f(n=s(this,(e=d(t)).call.apply(e,[this].concat(a)))),"onClick",(function(e){var t=n.props,c=t.text,a=t.onCopy,i=t.children,l=t.options,p=o.default.Children.only(i),u=(0,r.default)(c,l);a&&a(c,u),p&&p.props&&"function"===typeof p.props.onClick&&p.props.onClick(e)})),n}var n,c,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(c=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=l(e,["text","onCopy","options","children"]),r=o.default.Children.only(t);return o.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&u(n.prototype,c),a&&u(n,a),t}(o.default.PureComponent);t.CopyToClipboard=m,y(m,"defaultProps",{onCopy:void 0,options:void 0})}},[["82ZM",0,1,2,3,4,5]]]);