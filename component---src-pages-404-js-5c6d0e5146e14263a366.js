(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+dVi":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"gatsby":"https://www.gatsbyjs.org/","bulma":"https://bulma.io/","twitter":"https://twitter.com/amanhimself","medium":"https://medium.com/@amanhimself","github":"https://github.com/amandeepmittal"}}}}')},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var a=n("q1tI"),i=r(a),o=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function f(){l=e(u.map((function(e){return e.props}))),d.canUseDOM?t(l):n&&(l=n(l))}var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var c=a.prototype;return c.shouldComponentUpdate=function(e){return!o(e,this.props)},c.componentWillMount=function(){u.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),f()},c.render=function(){return i.createElement(r,this.props)},a}(a.Component);return c(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(d,"canUseDOM",s),d}}},BYvN:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Rolando Gonzalez","author":"Rolando Gonzalez","imageUrl":"https://imgur.com/QrHi3GH","description":"A place for sharing my favorite personal projects.","keywords":"Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter"}}}}')},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=(n("v31m"),n("BYvN")),o=n("Wbzz"),c=n("TJpk"),s=n.n(c),l=function(){return a.a.createElement(o.StaticQuery,{query:"2025819073",render:function(e){return a.a.createElement(s.a,null,a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"}),a.a.createElement("meta",{name:"description",content:e.site.siteMetadata.description}),a.a.createElement("meta",{name:"keywords",content:e.site.siteMetadata.keywords}),a.a.createElement("title",null,e.site.siteMetadata.title),a.a.createElement("html",{lang:"en"}),a.a.createElement("meta",{itemprop:"name",content:e.site.siteMetadata.author})," />",a.a.createElement("meta",{itemprop:"description",content:e.site.siteMetadata.description}),a.a.createElement("meta",{itemprop:"image",content:e.site.siteMetadata.imageUrl})," />")},data:i})},u=n("ma3e"),f=function(){return a.a.createElement("div",{className:"hero-head is-hidden-mobile"},a.a.createElement("nav",{className:"navbar"}))},d=function(e){e.siteTitle;return a.a.createElement("section",{className:"hero gradientBg is-fullheight-with-navbar"},a.a.createElement(f,null),a.a.createElement("div",{className:"hero-body"},a.a.createElement("div",{className:"container center"},a.a.createElement("article",{className:"media"},a.a.createElement("div",{className:"media-content"},a.a.createElement("div",{className:"content"},a.a.createElement("h1",{className:"is-size-1 has-text-white"},"Rolando Gonzalez"),a.a.createElement("p",{className:"subtitle has-text-white is-size-3"},"Systems Engineer @ University of Miami"," "),a.a.createElement("p",null,a.a.createElement("a",{className:"button is-info is-inverted",href:"https://www.linkedin.com/in/rolandoglez/"},a.a.createElement("span",{className:"icon"},a.a.createElement(u.b,{size:"fa-2x"})),a.a.createElement("span",null," Contact me")))))))))},T=n("iNdW"),E=n("tjd4"),m=function(){return a.a.createElement("div",null,a.a.createElement("section",{className:"section"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"columns is-multiline"},a.a.createElement("div",{className:"column is-one-third"},a.a.createElement("article",{className:"media"},a.a.createElement("figure",{className:"media-left"},a.a.createElement("span",{className:"icon is-medium"},a.a.createElement(T.a,{size:"fa-2x",color:"#d22780"}))),a.a.createElement("div",{className:"media-content"},a.a.createElement("div",{className:"content"},a.a.createElement("h1",{className:"title is-size-4"},"Unmanned Aircaft Systems (UAS)"),a.a.createElement("p",{className:"subtitle is-size-5"},"Design, build, and integrate remote-controlled industrial quadcopters for scientific research using Pixhawk and Ardupilot"))))),a.a.createElement("div",{className:"column is-one-third"},a.a.createElement("article",{className:"media"},a.a.createElement("figure",{className:"media-left"},a.a.createElement("span",{className:"icon is-medium"},a.a.createElement(E.a,{size:"fa-2x",className:"has-text-primary"}))),a.a.createElement("div",{className:"media-content"},a.a.createElement("div",{className:"content"},a.a.createElement("h1",{className:"title is-size-4"},"Licensed FAA Part 107 Pilot"),a.a.createElement("p",{className:"subtitle is-size-5"},"Over 200+ hours flown as a flight test engineer and drone mapping pilot"))))),a.a.createElement("div",{className:"column is-one-third"},a.a.createElement("article",{className:"media"},a.a.createElement("figure",{className:"media-left"},a.a.createElement("span",{className:"icon is-medium"},a.a.createElement(u.a,{size:"fa-2x",className:"has-text-danger"}))),a.a.createElement("div",{className:"media-content"},a.a.createElement("div",{className:"content"},a.a.createElement("h1",{className:"title is-size-4"},"Software Engineer"),a.a.createElement("p",{className:"subtitle is-size-5"},"Experienced in Java, C++, Python, HTML, CSS, JS, PHP, Node.js, git to create internal website tools and applications for Arduino and Raspberry Pi")))))))))},p=n("+dVi"),h=function(){return a.a.createElement(o.StaticQuery,{query:"1876951429",render:function(e){return a.a.createElement("footer",{className:"footer center has-background-light"},a.a.createElement("div",{className:"content has-text-centered"},a.a.createElement("p",{className:"is-size-12"},"using"," ",a.a.createElement("a",{href:e.site.siteMetadata.gatsby},"Gatsby")," +"," ",a.a.createElement("a",{href:e.site.siteMetadata.bulma},"Bulma"))))},data:p})};t.a=function(e){e.children;return a.a.createElement("div",null,a.a.createElement(l,null),a.a.createElement(d,null),a.a.createElement(m,null),a.a.createElement(h,null))}},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var l=i[s];if(!c(l))return!1;var u=e[l],f=t[l];if(!1===(a=n?n.call(r,u,f,l):void 0)||void 0===a&&u!==f)return!1}return!0}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("bWfx"),n("ioFf"),n("V+eJ"),n("91GP");var r=n("q1tI"),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function s(e){return function(t){return r.createElement(l,o({attr:o({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,o({key:n},t.attr),e(t.child))}))}(e.child))}}function l(e){var t=function(t){var n,a=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var i=e.attr,s=e.title,l=c(e,["attr","title"]);return r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,l,{className:n,style:o({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),i=n("hswa").f,o=n("kJMx").f,c=n("quPj"),s=n("C/va"),l=r.RegExp,u=l,f=l.prototype,d=/a/g,T=/a/g,E=new l(d)!==d;if(n("nh4g")&&(!E||n("eeVq")((function(){return T[n("K0xU")("match")]=!1,l(d)!=d||l(T)==T||"/a/i"!=l(d,"i")})))){l=function(e,t){var n=this instanceof l,r=c(e),i=void 0===t;return!n&&r&&e.constructor===l&&i?e:a(E?new u(r&&!i?e.source:e,t):u((r=e instanceof l)?e.source:e,r&&i?s.call(e):t),n?this:f,l)};for(var m=function(e){e in l||i(l,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},p=o(u),h=0;p.length>h;)m(p[h++]);f.constructor=l,l.prototype=f,n("KroJ")(r,"RegExp",l)}n("elZq")("RegExp")},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n("q1tI")),o=f(n("17x9")),c=f(n("8+s/")),s=f(n("bmMU")),l=n("v1p5"),u=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,p,h,A=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),y=(m=A,h=p=function(e){function t(){return T(this,t),E(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,i=e.newProps,o=e.newChildProps,c=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return r({},i,((t={})[a.type]=c,t.titleAttributes=r({},o),t));case u.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},o)});case u.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},o)})}return r({},i,((n={})[a.type]=r({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=d(a,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(o);switch(n.warnOnInvalidChildren(e,i),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=d(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(m,a)},a(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(i.default.Component),p.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},p.defaultProps={defer:!0,encodeSpecialCharacters:!0},p.peek=m.peek,p.rewind=function(){var e=m.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,s,l,u=r(t),f=r(n);if(u&&f){if((s=t.length)!=n.length)return!1;for(c=s;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(u!=f)return!1;var d=t instanceof Date,T=n instanceof Date;if(d!=T)return!1;if(d&&T)return t.getTime()==n.getTime();var E=t instanceof RegExp,m=n instanceof RegExp;if(E!=m)return!1;if(E&&m)return t.toString()==n.toString();var p=a(t);if((s=p.length)!==a(n).length)return!1;for(c=s;0!=c--;)if(!i.call(n,p[c]))return!1;if(o&&t instanceof Element&&n instanceof Element)return t===n;for(c=s;0!=c--;)if(!("_owner"===(l=p[c])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},h7Nl:function(e,t,n){var r=Date.prototype,a=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=i.call(this);return e==e?a.call(this):"Invalid Date"}))},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=s(n("q1tI")),o=s(n("MgzW")),c=n("hFT/");function s(e){return e&&e.__esModule?e:{default:e}}var l,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=p(e,c.TAG_NAMES.TITLE),n=p(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=p(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return p(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},m=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],l=s.toLowerCase();-1===t.indexOf(l)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(s)||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),s=0;s<i.length;s++){var l=i[s],u=(0,o.default)({},a[l],r[l]);a[l]=u}return e}),[]).reverse()},p=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){h(e)}),0)}),A=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},b=null,g=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,f=e.styleTags,d=e.title,T=e.titleAttributes;O(c.TAG_NAMES.BODY,r),O(c.TAG_NAMES.HTML,a),_(d,T);var E={baseTag:P(c.TAG_NAMES.BASE,n),linkTags:P(c.TAG_NAMES.LINK,i),metaTags:P(c.TAG_NAMES.META,o),noscriptTags:P(c.TAG_NAMES.NOSCRIPT,s),scriptTags:P(c.TAG_NAMES.SCRIPT,u),styleTags:P(c.TAG_NAMES.STYLE,f)},m={},p={};Object.keys(E).forEach((function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(p[e]=E[e].oldTags)})),t&&t(),l(e,m,p)},N=function(e){return Array.isArray(e)?e.join(""):e},_=function(e,t){void 0!==e&&document.title!==e&&(document.title=N(e)),O(c.TAG_NAMES.TITLE,t)},O=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var l=o[s],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var f=i.indexOf(l);-1!==f&&i.splice(f,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);a.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==o.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,o.join(","))}},P=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},R=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},w=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,a=M(n,r),[i.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=R(n),i=N(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+u(i,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+u(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return R(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+u(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){b&&S(b),e.defer?b=y((function(){g(e,(function(){b=null}))})):(g(e),b=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,f=e.title,d=void 0===f?"":f,T=e.titleAttributes;return{base:w(c.TAG_NAMES.BASE,t,r),bodyAttributes:w(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:w(c.ATTRIBUTE_NAMES.HTML,a,r),link:w(c.TAG_NAMES.LINK,i,r),meta:w(c.TAG_NAMES.META,o,r),noscript:w(c.TAG_NAMES.NOSCRIPT,s,r),script:w(c.TAG_NAMES.SCRIPT,l,r),style:w(c.TAG_NAMES.STYLE,u,r),title:w(c.TAG_NAMES.TITLE,{title:d,titleAttributes:T},r)}},t.reducePropsToState=function(e){return{baseTag:E([c.TAG_PROPERTIES.HREF],e),bodyAttributes:T(c.ATTRIBUTE_NAMES.BODY,e),defer:p(e,c.HELMET_PROPS.DEFER),encode:p(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(c.ATTRIBUTE_NAMES.HTML,e),linkTags:m(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:m(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:m(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:T(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=v}).call(this,n("yLpj"))},v31m:function(e,t,n){},w2l6:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("Bl7J");t.default=function(){return a.a.createElement(i.a,null,a.a.createElement("h1",null,"NOT FOUND"),a.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-404-js-5c6d0e5146e14263a366.js.map