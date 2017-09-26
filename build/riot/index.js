!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("riot"));else if("function"==typeof define&&define.amd)define(["riot"],n);else{var e=n("object"==typeof exports?require("riot"):t.riot);for(var r in e)("object"==typeof exports?exports:t)[r]=e[r]}}(this,function(t){return function(t){function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=8)}([function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(9);Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){return r[t]}})});var i=e(10);Object.keys(i).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){return i[t]}})});var o=e(11);Object.keys(o).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){return o[t]}})})},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(3);e.d(n,"array",function(){return r.a});var i=e(14);e.d(n,"tree",function(){return i.a});var o=e(15);e.d(n,"string",function(){return o.a});var s=e(16);e.d(n,"deepMix",function(){return s.a});var a=e(17);e.d(n,"css",function(){return a.a});var u=e(18);e.d(n,"printer",function(){return u.a});var c=e(19);e.d(n,"object",function(){return c.a})},function(n,e){n.exports=t},function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(t){return{last:function(){return t.length>0?t[t.length-1]:null},in:function(n,e){return t.filter(function(t){return n.indexOf(t)>=0&&(!e||e(t))})},notIn:function(n,e){return t.filter(function(t){return n.indexOf(t)<0&&(!e||e(t))})},is:function(n,e){var r=n.isIn,i=void 0===r?[]:r,o=n.notIn,s=void 0===o?[]:o;return t.filter(function(t){return i.reduce(function(n,e){return e.indexOf(t)>=0&&n},!0)&&s.reduce(function(n,e){return e.indexOf(t)<0&&n},!0)&&(!e||e(t))})},contains:function(n){return t.indexOf(n)>=0},allIn:function(n){return t.every(function(t){return n.indexOf(t)>=0})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(20);e.d(n,"TreeNode",function(){return r.b}),e.d(n,"RootNode",function(){return r.a});var i=e(6);e.d(n,"selectionStrategies",function(){return i.c}),e.d(n,"clickStrategies",function(){return i.a}),e.d(n,"foldStrategies",function(){return i.b});var o=e(7);e.d(n,"defaults",function(){return o.a});var s=e(5);e.d(n,"dragndrop",function(){return s.a}),e.d(n,"utils",function(){return s.c}),e.d(n,"nodeEvents",function(){return s.b}),e.d(n,"wrapEvents",function(){return s.d})},function(t,n,e){"use strict";function r(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}e.d(n,"a",function(){return s}),e.d(n,"c",function(){return u}),e.d(n,"b",function(){return f}),e.d(n,"d",function(){return d});var i=e(1),o=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},s={selection:function(t,n){return{draggable:!0,droppable:!0,drag:function(t,n,e){n.dataTransfer&&n.dataTransfer.setData("application/json",JSON.stringify(e.selection))},guard:function(t,n,e){if(n&&n.dataTransfer&&n.dataTransfer.types.indexOf("application/json")<0)return!1;return function(){return t&&Object(i.array)(e.selection).contains(t)}()||function(){return e.ancestors&&e.ancestors.reduce(function(t,n){return t||Object(i.array)(e.selection).contains(n)},!1)}()},drop:function(e,o,s){var a=Object(i.tree)(t(),s.category).filter(function(t){return s.selection.indexOf(t)<0}),u=e?e[s.category]&&e[s.category]instanceof Array?e:Object(i.array)(s.ancestors).last():null;u?u[s.category]=[].concat(r(u[s.category]),r(s.selection)):a=[].concat(r(a),r(s.selection)),n(a)}}},pluck:function(t,n){return{draggable:!0,backup:[],drag:function(e,r,o){a=JSON.stringify(t()),r.dataTransfer&&r.dataTransfer.setData("application/json",JSON.stringify(e)),setTimeout(function(){return n(Object(i.tree)(t(),o.category).filter(function(t){return t!==e}))},20)},cancel:function(){n(JSON.parse(a))}}},paste:function(t,n){return{droppable:!0,drop:function(e,o,s){if(o.dataTransfer&&o.dataTransfer.types.indexOf("application/json")>-1){var a=JSON.parse(o.dataTransfer.getData("application/json")),u=[].concat(r(t())),c=e?e[s.category]&&e[s.category]instanceof Array?e:Object(i.array)(s.ancestors).last():null;c?c[s.category]=[].concat(r(c[s.category]),[a]):u=[].concat(r(u),[a]),n(u)}}}}},a="[]",u={filesystem:function(t){var n=t.dataTransfer?t.dataTransfer.items:null;if(n&&n.length>0&&"file"===n[0].kind){for(var e=[],r=0;r<n.length;r++){var i=n[r].webkitGetAsEntry()||n[r].getAsFile();i&&e.push(i)}return e}return null}},c={itemRef:void 0,guardCheck:!1},f={onDragStart:function(t){return function(n){n.stopPropagation(),this.inputs.get().dragndrop.onDrag(t,n,this.inputs.get())}},onDragOver:function(t){return function(n){n.preventDefault(),n.stopPropagation();var e=c.itemRef===t?c.guardCheck:this.inputs.get().dragndrop.guard&&this.inputs.get().dragndrop.guard(t,n,this.inputs.get());e?(n.dataTransfer&&(n.dataTransfer.dropEffect="none"),i.css.addClass(n.currentTarget,this.mixCss("nodrop"))):(n.dataTransfer&&(n.dataTransfer.dropEffect="copy"),i.css.addClass(n.currentTarget,this.mixCss("dragover"))),c.itemRef=t,c.guardCheck=e,this.inputs.get().dragndrop.onOver(t,n,this.inputs.get())}},onDragEnter:function(t){return function(n){if(n.preventDefault(),n.stopPropagation(),t&&(this.hasChildren(t)||this.isAsync(t))&&i.css.hasClass(n.target,this.mixCss("opener"))){var e=this.state.get().unfolded.filter(function(n){return n!==t});e.push(t),this.state.set({unfolded:e})}this.inputs.get().dragndrop.onEnter(t,n,this.inputs.get())}},onDragLeave:function(t){return function(n){n.stopPropagation(),i.css.removeClass(n.currentTarget,this.mixCss("dragover")),i.css.removeClass(n.currentTarget,this.mixCss("nodrop")),this.inputs.get().dragndrop.onLeave(t,n,this.inputs.get())}},onDrop:function(t){return function(n){n.stopPropagation(),i.css.removeClass(n.currentTarget,this.mixCss("dragover")),i.css.removeClass(n.currentTarget,this.mixCss("nodrop")),this.inputs.get().dragndrop.guard&&this.inputs.get().dragndrop.guard(t,n,this.inputs.get())||this.inputs.get().dragndrop.onDrop(t,n,this.inputs.get())}},onDragEnd:function(t){return function(n){n.stopPropagation(),n.dataTransfer&&"none"===n.dataTransfer.dropEffect&&this.inputs.get().dragndrop.onCancel(t,n,this.inputs.get())}}},d=function(){var t=this;return o({},this.inputs.get().dragndrop,{onDrag:function(n,e,r){Object(i.array)(t.inputs.get().selection).contains(n)||t.onSelect(n,r.ancestors,r.neighbours),t.outputs.onDrag&&t.outputs.onDrag(n,e,r)},onOver:function(n,e,r){t.outputs.onOver&&t.outputs.onOver(n,e,r)},onEnter:function(n,e,r){t.outputs.onEnter&&t.outputs.onEnter(n,e,r)},onLeave:function(n,e,r){t.outputs.onLeave&&t.outputs.onLeave(n,e,r)},onDrop:function(n,e,r){e.preventDefault(),t.outputs.onDrop&&t.outputs.onDrop(n,e,r)},onCancel:function(n,e,r){e.preventDefault(),e.dataTransfer&&"none"===e.dataTransfer.dropEffect&&t.outputs.onCancel&&t.outputs.onCancel(n,e,r)}})}},function(t,n,e){"use strict";function r(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}e.d(n,"c",function(){return u}),e.d(n,"a",function(){return c}),e.d(n,"b",function(){return f});var i=e(1),o=function(){function t(t,n){var e=[],r=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done)&&(e.push(s.value),!n||e.length!==n);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&a.return&&a.return()}finally{if(i)throw o}}return e}return function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return t(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(t,n,e,r){return Object(i.array)(n).contains(t)?[]:[t]},a=function(t,n,e,r){var o=!1,s=n.filter(function(n){return o||(o=n===t),n!==t&&r.indexOf(n)<0});return!o&&t[this.inputs.get().category]&&t[this.inputs.get().category]instanceof Array&&Object(i.tree)(t[this.inputs.get().category],this.inputs.get().category).visit(function(t){s=Object(i.array)(s).notIn(t)}),o||s.push(t),s},u={single:s,multiple:a,modifiers:function(t,n,e,u){var c=this;if(this.modifiers.control||this.modifiers.meta)return this.lastSelection=t,delete this.lastIndex,delete this.lastPivot,a.bind(this)(t,n,e,u);if(this.modifiers.shift){if(!this.lastSelection)return n;var f=e.indexOf(this.lastSelection);if(f<0)return n;var d=n.slice(),l=e.indexOf(t);if(f>=0){var p;if(this.lastPivot){var g=e.indexOf(this.lastPivot),h=f>g?[g,f]:[f,g],v=o(h,2),y=v[0],b=v[1],m=e.slice(y,b+1);d=Object(i.array)(d).notIn(m)}this.lastPivot=t;var O=f>l?[l,f]:[f,l],x=o(O,2),j=x[0],D=x[1],w=this.inputs.get().disabled?e.slice(j,D+1).filter(function(t){return!c.inputs.get().disabled(t)}):e.slice(j,D+1);d=Object(i.array)(d).notIn(w),(p=d).push.apply(p,r(w))}return d}return this.lastSelection=t,delete this.lastIndex,delete this.lastPivot,s.bind(this)(t,n.length>1?[]:n,e,u)},ancestors:function(t){function n(n,e,r,i){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}(function(t,n,e,o){return 0===n.length?[t]:Object(i.array)(n).contains(t)?[].concat(r(o)):[].concat(r(o),[t])})},c={"unfold-on-selection":function(t){if(!this.isSelected(t)){var n=this.state.get().unfolded.filter(function(n){return n!==t});n.push(t),this.state.set({unfolded:n})}},"toggle-fold":function(t){var n=this.state.get().unfolded.filter(function(n){return n!==t});n.length===this.state.get().unfolded.length&&n.push(t),this.state.set({unfolded:n})}},f={"opener-control":function(t){return!Object(i.array)(this.state.get().unfolded).contains(t)},"not-selected":function(t){return!this.isSelected(t)},"no-child-selection":function(t){var n=this;return!function t(e){return n.isSelected(e)||e[n.inputs.get().category]&&e[n.inputs.get().category]instanceof Array&&e[n.inputs.get().category].some(t)}(t)},"max-depth":function(){return!(!this.inputs.get().maxDepth||isNaN(parseInt(this.inputs.get().maxDepth,10)))&&this.inputs.get().depth>=parseInt(this.inputs.get().maxDepth,10)}}},function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r={labels:{"search.placeholder":"Search ..."},css:{TreeView:"TreeView",opener:"opener",depth:"depth",selected:"selected",category:"category",folded:"folded",disabled:"disabled",async:"async",loading:"loading",nodrop:"nodrop",dragover:"dragover",search:"search",item:"item"},strategies:{selection:["single"],click:[],fold:["not-selected","no-child-selection"]},display:function(t){return t.toString()},async:function(t){return t()},noOpener:!1,dragndrop:{draggable:!1,droppable:!1}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(0);Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){return r[t]}})}),e(12)},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.optsMixin=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"opts";return{init:function(){this.on("update",this.updateOpts),this._originalOpts=Object.keys(this.opts),this.updateOpts()},updateOpts:function(){if(this.opts)for(var n in this.opts[t])~this._originalOpts.indexOf(n)||(this.opts[n]=this.opts[t][n])}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.transitionMixin=function(t){return{init:function(){var n=this;if(this.opts.transition){var e=this.opts.transition.name,r=this.unmount,i=function(){var r=(t||function(){return n.root})();r&&(r.classList.add(e),r.classList.add(e+"-mount"),setTimeout(function(){r.classList.remove(e+"-mount")},10))},o=!1,s=function(){if(!o){o=!0;var i=(t||function(){return n.root})();if(!i)return r.call(n);i.addEventListener("transitionend",function(){r.call(n)}),i.classList.add(e+"-unmount")}};this.one("mount",i),Object.defineProperty(this,"unmount",{value:s})}}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.listenerMixin=function(t){var n=t.eventType,e=void 0===n?"click":n,r=t.callback,i=t.regulate,o=void 0!==i&&i;return{init:function(){var t=!1,n=function(n){r&&(o?(t||window.requestAnimationFrame(function(){return r(n,function(){return t=!1})}),t=!0):r(n))};this.one("mount",function(){document.addEventListener(e,n)}),this.one("unmount",function(){document.removeEventListener(e,n)})}}}},function(t,n,e){"use strict";e(13),e(21),e(22)},function(t,n,e){e(2).tag2("treeview",'<div class="{rootNode.mixCss(⁗TreeView⁗)}"> <input type="search" class="{rootNode.mixCss(⁗search⁗)}" if="{inputs.get().search}" placeholder="{inputs.get().labels[⁗search.placeholder⁗]}" oninput="{onSearch}"> <treeviewnode opts="{inputs.get()}" selection="{opts.selection}" model="{inputs.get().sort ? inputs.get().model.sort(inputs.get().sort) : inputs.get().model}" filteredmodel="{filtered}" onselection="{rootNode.onSelect}" dragndrop="{rootNode.wrapDragNDrop()}" ancestors="{[]}" searched="{search.trim()}" depth="{0}"> </TreeViewNode> </div>',"","",function(t){"use strict";var n=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},r=this,i=e(1),o=e(4),s=e(0);this.mixin((0,s.optsMixin)()),this.mixin((0,s.listenerMixin)({eventType:"keyup",callback:function(t){return r.rootNode.onKey(t)}})),this.mixin((0,s.listenerMixin)({eventType:"keydown",callback:function(t){return r.rootNode.onKey(t)}})),this.filtered=null,this.search="",this.onSearch=function(t){var n=t.currentTarget.value;r.search=n,r.filtered=n.trim()?(0,i.tree)(r.inputs.get().model,r.inputs.get().category).treeFilter(r.inputs.get().search(n.trim())):null},this.inputs={get:function(){return n({},o.defaults,r.opts,{onSelect:r.opts.onselection})}},this.outputs={onSelect:this.inputs.get().onselection,onDrag:this.inputs.get().dragndrop&&this.inputs.get().dragndrop.drag,onOver:this.inputs.get().dragndrop&&this.inputs.get().dragndrop.over,onEnter:this.inputs.get().dragndrop&&this.inputs.get().dragndrop.enter,onLeave:this.inputs.get().dragndrop&&this.inputs.get().dragndrop.leave,onDrop:this.inputs.get().dragndrop&&this.inputs.get().dragndrop.drop,onCancel:this.inputs.get().dragndrop&&this.inputs.get().dragndrop.cancel},this.state={get:function(){return n({},r)},set:function(t){for(var n in t)n in r&&(r[n]=t[n])}},this.rootNode=new o.RootNode(this.inputs,this.outputs,this.state,this.update)})},function(t,n,e){"use strict";function r(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}e.d(n,"a",function(){return o});var i=e(3),o=function(t,n){return{flatten:function(){for(var e=[],o=[t];o.length>0;){var s=o.pop();s instanceof Array&&(e=[].concat(r(Object(i.a)(e).notIn(s)),r(s)),o=[].concat(r(o),r(s.filter(function(t){return t[n]}).map(function(t){return t[n]}))))}return e},filter:function(e){var r=t.filter(e);return function t(r){r.forEach(function(r){r[n]&&r[n]instanceof Array&&(r[n]=r[n].filter(e),t(r[n]))})}(r),r},treeFilter:function(e){var r=new Map;return function t(r,i){r.forEach(function(r){if(r[n]&&r[n]instanceof Array){var o=new Map;t(r[n],o),o.size>0?i.set(r,o):e(r)&&i.set(r,new Map)}else e(r)&&i.set(r,null)})}(t,r),r},add:function(e,i){for(var o=[t];o.length>0;){var s=o.pop(),a=s.indexOf(e);if(a>=0&&s[a][n])return s[a][n]=s[a][n].slice(),s[a][n].push(i),t;o=[].concat(r(o),r(s.filter(function(t){return t[n]}).map(function(t){return t[n]})))}return t},visit:function(e){for(var r=[t];r.length>0;){var i=r.pop();e(i),i.forEach(function(t){return t[n]&&t[n]instanceof Array?r.push(t[n]):null})}}}}},function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(t){return{contains:function(n){return!!t&&!!t.match(new RegExp(".*"+n+".*","gi"))}}}},function(t,n,e){"use strict";function r(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}e.d(n,"a",function(){return s});var i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function t(n,e){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!n||!e||"object"!==(void 0===n?"undefined":o(n))||"object"!==(void 0===e?"undefined":o(e)))return n;var a=i({},n,e);for(var u in e)e.hasOwnProperty(u)&&(e[u]instanceof Array&&n[u]instanceof Array?a[u]=s?[].concat(r(n[u]),r(e[u])):a[u]=e[u]:"object"===o(e[u])&&"object"===o(n[u])&&(a[u]=t(n[u],e[u],s)));return a}},function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r={classes:function(t){var n=[];for(var e in t)t[e]&&n.push(e);return n.join(" ")},addClass:function(t,n){t instanceof HTMLElement&&(t.className=t.className.split(" ").filter(function(t){return t!==n}).join(" ")+" "+n)},removeClass:function(t,n){t instanceof HTMLElement&&(t.className=t.className.split(" ").filter(function(t){return t!==n}).join(" "))},hasClass:function(t,n){return t instanceof HTMLElement&&t.className.indexOf(n)>=0}}},function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r={debug:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:console.log;e("%cDEBUG%c "+t,"background-color: red; color: white; font-size: 1.1em; font-weight: bold; padding: 3px 10px; border-radius: 5px","color: #444; font-weight: bold; font-size: 1.1em"),e("%c"+n,"color: #222; font-weight: bold")}}},function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",function(){return o});var i=function(){function t(t,n){var e=[],r=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done)&&(e.push(s.value),!n||e.length!==n);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&a.return&&a.return()}finally{if(i)throw o}}return e}return function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return t(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(t){if(!(t&&t instanceof Object))throw new Error("Bad object format");return{shallowCompare:function(n,e){var r=!0;for(var i in t)if(t.hasOwnProperty(i)&&!(e&&e.indexOf(i)>=0)&&n[i]!==t[i])return void(r=!1);return r},filter:function(n){var e={};for(var r in t)t.hasOwnProperty(r)&&n(t[r])&&(e[r]=t[r]);return e},map:function(n){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=n(t[r]));return e},fullMap:function(n){var e={};for(var r in t)if(t.hasOwnProperty(r)){var o=n(r,t[r]),s=i(o,2),a=s[0],u=s[1];e[a]=u}return e},nestPrefix:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return t},i=r({},n,{});for(var o in t)t.hasOwnProperty(o)&&o.startsWith(n)?i[n][e(o.substring(n.length))]=t[o]:i[o]=t[o];return i}}}},function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function o(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}function s(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"b",function(){return p}),e.d(n,"a",function(){return g});var a=e(1),u=e(5),c=e(6),f=e(7),d=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}(),l=function t(n,e,r,i){s(this,t),this.inputs=n,this.outputs=e,this.state=r,this.refresh=i},p=function(t){function n(){var t,e,o,d;s(this,n);for(var l=arguments.length,p=Array(l),g=0;g<l;g++)p[g]=arguments[g];return e=o=i(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(p))),o.isSelected=function(t){return Object(a.array)(o.inputs.get().selection).contains(t)},o.isFolded=function(t){var n=o.inputs.get().strategies;return(!o.inputs.get().searched||o.isAsync(t))&&(n&&n.fold||[]).map(function(t){return(c.b[t]||t).bind(o)}).reduce(function(n,e){return n&&e(t,n)},!0)},o.hasChildren=function(t){return t[o.inputs.get().category]&&t[o.inputs.get().category]instanceof Array},o.isAsync=function(t){return!!t&&[o.inputs.get().category]&&"function"==typeof t[o.inputs.get().category]},o.isDisabled=function(t){var n=o.inputs.get().disabled;return!!n&&n(t)},o.isDraggable=function(t){return t&&o.inputs.get().dragndrop.draggable&&("function"!=typeof o.inputs.get().dragndrop.draggable||o.inputs.get().dragndrop.draggable(t))},o.isDroppable=function(t){return o.inputs.get().dragndrop.droppable&&("function"!=typeof o.inputs.get().dragndrop.droppable||o.inputs.get().dragndrop.droppable(t))},o.mixCss=function(t){return o.inputs.get().css[t]||f.a.css[t]},o.ulCss=function(){return a.css.classes(r({},o.mixCss("depth")+"-"+(o.inputs.get().depth||0),!0))},o.liCss=function(t){var n;return a.css.classes((n={},r(n,o.mixCss("selected"),o.isSelected(t)),r(n,o.mixCss("category"),o.hasChildren(t)||o.isAsync(t)),r(n,o.mixCss("folded"),o.hasChildren(t)||o.isAsync(t)?o.isFolded(t):null),r(n,o.mixCss("disabled"),o.isDisabled(t)),r(n,o.mixCss("async"),o.isAsync(t)&&o.isFolded(t)),r(n,o.mixCss("loading"),o.isAsync(t)&&!o.isFolded(t)),n))},o.pending=[],o.unwrapPromise=function(t){o.pending.push(t);var n=o.inputs.get().async;return n?n(t[o.inputs.get().category]).then(function(n){t[o.inputs.get().category]=n,o.refresh()}).catch(function(t){throw t}).then(function(){return o.pending=o.pending.filter(function(n){return n!==t})}):Promise.reject(new Error("Missing async function."))},o.onClick=function(t){return function(n){if(!o.isDisabled(t)){var e=o.inputs.get().strategies;(e&&e.click||[]).map(function(t){return(c.a[t]||t).bind(o)}).forEach(function(e){return e(t,n,o.inputs.get().ancestors,o.inputs.get().model)}),o.inputs.get().onSelect(t,o.inputs.get().ancestors,o.inputs.get().model),n.stopPropagation()}}},o.getDragEvents=function(t){if(arguments.length>1&&void 0!==arguments[1]&&!arguments[1])return{};var n={draggable:o.isDraggable(t),onDragStart:o.isDraggable(t)&&u.b.onDragStart(t).bind(o),onDragOver:o.isDroppable(t)&&u.b.onDragOver(t).bind(o),onDragEnter:o.isDroppable(t)&&u.b.onDragEnter(t).bind(o),onDragLeave:o.isDroppable(t)&&u.b.onDragLeave(t).bind(o),onDrop:o.isDroppable(t)&&u.b.onDrop(t).bind(o),onDragEnd:o.isDraggable(t)&&u.b.onDragEnd(t).bind(o)};for(var e in n)n[e]||delete n[e];return n},d=e,i(o,d)}return o(n,t),d(n,[{key:"onOpener",value:function(t){var n=this;return function(e){var r=n.state.get().unfolded.filter(function(n){return n!==t});r.length===n.state.get().unfolded.length&&r.push(t),n.state.set({unfolded:r}),e.stopPropagation()}}}]),n}(l),g=function(t){function n(){var t,e,r,o;s(this,n);for(var d=arguments.length,l=Array(d),p=0;p<d;p++)l[p]=arguments[p];return e=r=i(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(l))),r.modifiers={},r.onKey=function(t){r.modifiers={control:t.getModifierState("Control"),meta:t.getModifierState("Meta"),shift:t.getModifierState("Shift")}},r.onSelect=function(t,n,e){var i=r.inputs.get().strategies.selection||[],o=i.map(function(t){return(c.c[t]||t).bind(r)}).reduce(function(r,i){return i(t,r,e,n)},r.inputs.get().selection);return r.outputs.onSelect(o,t,n,e),o},r.wrapDragNDrop=u.d.bind(r),r.mixCss=function(t){return r.inputs.get().css[t]||f.a.css[t]},r.filterTree=function(t){var n=r.inputs.get().search;return n&&t.trim()?Object(a.tree)(r.inputs.get().model,r.inputs.get().category).treeFilter(n(t.trim())):null},o=e,i(r,o)}return o(n,t),n}(l)},function(t,n,e){e(2).tag2("treeviewnode",'<ul if="{!opts.folded && !opts.loading}" data-is="with-transition" transition="{opts.transition}" class="{node.ulCss()}" ondragover="{!opts.depth ? rootEvents.onDragOver : null}" ondragenter="{!opts.depth ? rootEvents.onDragEnter : null}" ondragleave="{!opts.depth ? rootEvents.onDragLeave : null}" ondrop="{!opts.depth ? rootEvents.onDrop : null}"> <li each="{item in getModel()}" class="{node.liCss(item)}" draggable="{node.getDragEvents(item).draggable}" ondragstart="{node.getDragEvents(item).onDragStart}" ondragover="{node.getDragEvents(item).onDragOver}" ondragenter="{node.getDragEvents(item).onDragEnter}" ondragleave="{node.getDragEvents(item).onDragLeave}" ondragend="{node.getDragEvents(item).onDragEnd}" ondrop="{node.getDragEvents(item).onDrop}"> <span class="{parent.node.mixCss(⁗item⁗)}" onclick="{parent.node.onClick(item)}"> <virtual if="{!parent.opts.displaytag}"> {parent.opts.display(item, parent.opts)} </virtual> <virtual if="{parent.opts.displaytag}" data-is="{parent.opts.displaytag(item, parent.opts)}" item="{item}" inputs="{inputs.get()}"></virtual> <span if="{node.hasChildren(item) || node.isAsync(item) && !parent.opts.noopener}" class="{node.mixCss(⁗opener⁗)}" onclick="{node.onOpener(item)}"></span> </span> <treeviewnode if="{node.hasChildren(item) || node.isAsync(item)}" opts="{parent.opts}" selection="{parent.opts.selection}" model="{getChildModel(item)}" filteredmodel="{getChildFiltered(item)}" ancestors="{getAncestors(item)}" depth="{parent.opts.depth + 1}" folded="{node.isFolded(item)}" loading="{node.isAsync(item) && !node.isFolded(item)}"> </TreeViewNode> </li> </ul> <span if="{opts.loading}"></span>',"","",function(t){"use strict";var n=this,r=e(4),i=e(0);this.mixin((0,i.optsMixin)()),this.unfolded=[],this.getModel=function(){return n.opts.searched?n.opts.model.filter(function(t){return n.opts.filteredmodel.has(t)}):n.opts.model},this.getChildModel=function(t){var e=t[n.opts.category];return n.node.isAsync(t)&&!n.node.isFolded(t)&&n.node.pending.indexOf(t)<0&&n.node.unwrapPromise(t),n.node.isAsync(t)||(e=n.opts.sort?e.sort(n.opts.sort):e),e},this.getChildFiltered=function(t){return n.opts.searched?n.opts.filteredmodel.get(t):null},this.getAncestors=function(t){return[].concat(n.opts.ancestors,[t])};var o=function(){n.opts.onSelect=n.opts.onselection,n.opts.disabled=n.opts.disable};this.on("update",o),o(),this.inputs={get:function(){return n.opts}},this.state={get:function(){return n},set:function(t){for(var e in t)e in n&&(n[e]=t[e])}},this.node=new r.TreeNode(this.inputs,null,this.state,this.update),this.rootEvents=this.node.getDragEvents()})},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(2),i=function(t){return t&&t.__esModule?t:{default:t}}(r),o=e(0);n.default=i.default.tag("with-transition",!1,function(t){var n=this;this.mixin((0,o.transitionMixin)());var e=function(){for(var t in n.parent)n.parent.hasOwnProperty(t)&&(n[t]=n.parent[t])};e(),this.on("update",e)})}])});
//# sourceMappingURL=index.js.map