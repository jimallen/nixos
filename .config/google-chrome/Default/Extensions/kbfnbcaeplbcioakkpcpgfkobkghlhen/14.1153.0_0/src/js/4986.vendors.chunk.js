(self.webpackChunk=self.webpackChunk||[]).push([[4986],{55826:(e,t,n)=>{n.d(t,{A:()=>E});var r=n(57050),i=n(84966),o=n(80358),a=n(74660),s=n(70996),u=n(4390),c=n(9922),l=n(16118),f=n(77176),d=n(85985),h=n(8125),p=n(5114),v=n(92843),m=n(71249),y=n(81531),g=n(46680),b=n(78929),_=n(12054),w=n(21038),I=n(24055),A=n(4477);function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||F(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||F(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}var E=function(){function e(t,n,O){var C=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new A.J,j=this;S(this,e),k(this,"_getByRawAlertId",void 0),k(this,"popoverManager",void 0),k(this,"state",void 0),k(this,"_sduiManager",void 0),k(this,"_subs",void 0),k(this,"_log",void 0),k(this,"alertIdResolver",void 0),k(this,"findFirstCardWithContent",void 0),k(this,"onSessionStarted",void 0),k(this,"onFirstCheckingFinished",void 0),k(this,"notifyAlertsChanged",void 0),k(this,"loadItems",void 0),k(this,"_toRemovedAlertIdsByClient",void 0),this._getByRawAlertId=O,this.popoverManager=C,this._subs=new c.w.Keeper,this._log=y.C8.Logging.getLogger("SDUIManager",g.i.TRACE,g.T.Manager.getColor()),this.findFirstCardWithContent=function(e){return j._sduiManager.findFirstCardWithContent(e)},this.onSessionStarted=function(){return j._sduiManager.onSessionStarted()},this.onFirstCheckingFinished=function(){return j._sduiManager.onFirstCheckingFinished()},this.notifyAlertsChanged=function(){return j._sduiManager.notifyAlertsChanged()},this.loadItems=function(e){return j._sduiManager.loadItems(e)},this._toRemovedAlertIdsByClient=function(e){var t=function(e,t,n){return(0,h.Kg)(a.bZ.isRemovedByTextChange,a.bZ.isDuplicated)(t.alert)?(0,r.zG)(n,p.fromNullable,p.chain((function(e){return e.alert.rawId})),p.alt((function(){return t.alert.rawId})),p.fold((function(){return e}),(function(n){var r,i=a.bZ.isRemovedByTextChange(t.alert)?_.i5.TextChange:_.i5.RemoveDuplicate;return j._log.debug("[Optimistic update] alert ".concat(a.bZ.State.Type.REMOVED," by ").concat(i," ").concat(s.h.show.show(t))),e.set(i,P(null!==(r=e.get(i))&&void 0!==r?r:[]).concat([w.j.AlertId.from(n)]))}))):e};return e.pipe(l.G(),f.U((0,r.og)(u.p.diff)),f.U((function(e){return v.v.reduce(new Map,(function(e,n){return t(e,n)}),(function(e,n,r){return t(e,r,n)}),r.yR)(e)})),d.h((function(e){return(0,r.zG)(Array.from(e.values()),m.xH,(0,h.ff)(m.xb))})))};var F=n.pipe(d.h(I.e.isSduiEvent),f.U(_.al.fromSource(_.i5.CAPI))),E=(0,r.ls)(i.wQ.Id.create,this._getByRawAlertId,p.map((function(e){return w.j.AlertId.from(e.id)})));this._sduiManager=new b.G(F,E,C),this.alertIdResolver=E,this.state=this._sduiManager.state,this._subs.push(t.subscribe((function(e){return j._sduiManager.notifyAlertsChanged()})),this._toRemovedAlertIdsByClient(t).subscribe((function(e){return e.forEach((function(e,t){return j.pushRemovedAlerts([e,t])}))})),n.pipe(d.h(o.h.is("session_started")),d.h((function(e){return e.isNewSession}))).subscribe((function(e){return j._sduiManager.onSessionStarted()})),n.pipe(d.h(o.h.is("finish")),d.h((function(e){return 0===e.revision}))).subscribe((function(e){return j._sduiManager.onFirstCheckingFinished()})))}var t,n,O;return t=e,(n=[{key:"onAlertsRefEmpty",get:function(){return this._sduiManager.onAlertsRefEmpty}},{key:"pushRemovedRoot",value:function(e){this._sduiManager.pushRemovedRoot(e)}},{key:"pushRemovedAlerts",value:function(e){var t=j(e,2),n=t[0],r=t[1];this._sduiManager.pushRemovedAlerts([n,r])}},{key:"pushRemovedDenaliAlerts",value:function(e){var t=j(e,2),n=t[0],r=t[1];this._sduiManager.pushRemovedAlerts([n.map(w.j.AlertId.from),r])}},{key:"pushSwitchView",value:function(e){this._sduiManager.pushSwitchView(e)}},{key:"resolveStrongAlertRefAlerts",value:function(e){return this._sduiManager.resolveStrongAlertRefAlerts(e)}},{key:"flush",value:function(){this._sduiManager.flush()}},{key:"dispose",value:function(){this._subs.dispose(),this._sduiManager.dispose()}}])&&C(t.prototype,n),O&&C(t,O),e}()},31442:(e,t,n)=>{n.d(t,{_:()=>W});var r=n(35214),i=n(57050),o=n(23239),a=n(32952),s=n(16782),u=n(95300),c=n(9922),l=n(24209),f=n(77176),d=n(60797),h=n(40649),p=n(41398),v=n(85985),m=n(93508),y=n(16118),g=n(24713),b=n(95195),_=n(95574),w=n(19429),I=n(81670),A=n(5114),O=n(92843),S=n(8125),C=n(45701),k=n(22232),j=n(83078),P=n(93756),F=n(48044),E=n(81531),M=n(46680),R=n(21038),T=n(28811),D=n(31539),L=n(79880),x=n(26393);function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){z(e,t,n[t])}))}return e}function B(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var W=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),z(this,"onFeedRemove",new a.xQ),z(this,"onFeedEmpty",new a.xQ),z(this,"_header",new s.t(1)),z(this,"_footer",new s.t(1)),z(this,"_feeds",new Map),z(this,"_currentCards",o.h.create(D.l.empty)),z(this,"_feed",new u.X(void 0)),z(this,"_feedStack",new u.X([])),z(this,"_cardIdToFocus",new a.xQ),z(this,"_subs",new c.w.Keeper),z(this,"_log",E.C8.Logging.getLogger("SDUIFeedManager",M.i.TRACE,M.T.Manager.getColor())),z(this,"_forceFeedInternalInfo",new a.xQ),z(this,"_getFeedContent",(0,i.ls)(this._getFeed,b.map((function(e){return e.content})),_.MH)),z(this,"_changeFeed",(function(e){n._feed.next(e),(0,i.zG)(e.cards,D.l.applyDiff,w.UI(I.T.recover((function(e){return n._log.error("conflicts on diff apply",e)}))),(function(t){var r=n._currentCards.get(),i=t(r);if(r.entries.size>0&&0===i.entries.size){var o=n._feeds.get(e.feedId);void 0!==o&&n.onFeedEmpty.next(o)}n._currentCards.modify(t)}))}));var r=l.T(this._feedStack.pipe(f.U((function(e){return A.fromNullable(e[e.length-1])})),d.oA,f.U((function(e){return n._getFeedInternalInfo(e.feedId,e.focusedCardId)}))),this._forceFeedInternalInfo),S=l.T(this._feedStack.pipe(h.g("length"),f.U((function(e){return A.fromNullable(e[e.length-1])})),d.oA,f.U((function(e){return n._getFeedInternalInfo(e.feedId,e.focusedCardId)}))),this._forceFeedInternalInfo),C=this._cardIdToFocus.pipe(p.M(this._feedStack.pipe(f.U((function(e){var t;return null===(t=e[e.length-1])||void 0===t?void 0:t.focusedCardId})))),v.h((function(e){var t=V(e,2);return t[0]!==t[1]})),f.U((function(e){return V(e,1)[0]})),p.M(this.feed),f.U((function(e){var t=V(e,2),r=t[0],i=t[1];return n._getFeedInternalInfo(i.feedId,R.j.Item.Id.from(r))}))),k=t.pipe(m.O(T.a.empty),y.G(),f.U((function(e){var t=V(e,2),n=t[0],r=t[1];return T.a.diff(n,r)})),f.U((function(e){return n._processSDUIItems(e)})),p.M(r),f.U((function(e){var t=V(e,2),n=t[0],r=t[1],o=r.feedOrd,a=r.feedFilter;return{feedId:r.feedId,cards:(0,i.zG)(n,O.v.filter(a,(function(e,t){return a(t)}),a)),feedOrd:o,itemIdToSelect:A.none}}))),j=l.T(S,C).pipe(p.M(t,this._currentCards),f.U((function(e){var t=V(e,3),n=t[0],r=n.feedOrd,o=n.feedFilter,a=n.feedId,s=n.itemIdToSelect,u=t[1],c=t[2],l=(0,i.zG)(u,D.l.iso.unwrap,(function(e){return(0,i.zG)(e.entries,F.hX(o))}));return{feedId:a,cards:D.l.diffFromEntries(c.entries,l),feedOrd:r,itemIdToSelect:s}})));this._subs.push(l.T(k,j).subscribe(this._changeFeed)),this._subs.push(S.pipe(g.j("header")).subscribe((function(e){return n._header.next(e)}))),this._subs.push(S.pipe(g.j("footer")).subscribe((function(e){return n._footer.next(e)})))}var t,n,x;return t=e,n=[{key:"header",get:function(){return this._header.asObservable()}},{key:"footer",get:function(){return this._footer.asObservable()}},{key:"feed",get:function(){return this._feed.pipe(v.h(S.$K))}},{key:"currentFeed",get:function(){return A.fromNullable(this._feed.getValue())}},{key:"_getFeed",value:function(e){var t=this._feeds.get(e);return void 0===t?b.left("Cannot switch to feed. Feed with id '".concat(e,"' not found.")):b.right(t)}},{key:"_getFeedInternalInfo",value:function(e,t){var n=this._getFeedContent(e);return{feedId:e,feedFilter:function(e){var t=$(e.content);return!A.isNone(t)&&n.filtering.reduce((function(e,n){return!1===e?e:(0,i.zG)(t,A.chain((function(e){return A.fromNullable(e[n.property])})),A.fold((function(){return n.condition===L.j2.NotEqualTo}),(function(e){return n.condition===L.j2.EqualTo?e===n.value:e!==n.value})))}),!0)},feedOrd:(0,r.fold)(C.getMonoid())(n.ordering.map((function(e){return(0,i.zG)(C.ordNumber,C.contramap((0,i.ls)($,A.chain((function(t){return A.fromNullable(t[e.orderBy])})),A.fold((function(){return Number.MAX_VALUE}),(function(t){return e.direction===L.di.Asc?t:-1*t})))))}))),itemIdToSelect:A.some(t),header:n.header,footer:A.fromNullable(n.footer)}}},{key:"pushFeed",value:function(e,t){var n=this;return(0,i.zG)(this._getFeed(e),b.map((function(){var r=n._feedStack.getValue();return r=r.concat({feedId:e,focusedCardId:t?R.j.Item.Id.from(t):void 0}),n._feedStack.next(r),null})))}},{key:"popFeed",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.none,t=this,n=this._feedStack.getValue();if(n.length>1)return n=n.slice(0,n.length-1),void this._feedStack.next(n);(0,i.zG)(e,A.fold((function(){return t._log.warn("Invoked `popFeed()` when there are less than 2 feeds in the feed stack, this is a no-op. No fallback feed provided.")}),(function(e){t.pushFeed(R.j.Item.Id.from(e.feedId),e.cardId),t._log.debug("Invoked 'popFeed()' when there are less than 2 feeds in the feed stack. Switching to the provided fallback feed. ".concat(JSON.stringify(e)))})))}},{key:"focusCard",value:function(e){var t=this;return(0,i.zG)(this.currentFeed,b.fromOption((function(){return"Cannot focus card when there is no active feed."})),b.map((function(){return t._cardIdToFocus.next(e),null})))}},{key:"notifyCardFocused",value:function(e){var t=this._feedStack.getValue(),n=t[t.length-1];(0,k.kG)(void 0!==n,"notifyCardFocused: Feed stack cannot be empty."),t=t.slice(0,t.length-1).concat(B(N({},n),{focusedCardId:e})),this._feedStack.next(t)}},{key:"_processSDUIItems",value:function(e){var t=this;return O.v.fromMutation((function(n){(0,i.zG)(e,O.v.forEach((function(e){void 0!==t._feeds.get(e.id)?(t._feeds.delete(e.id),(0,i.zG)(t.currentFeed,A.filter((function(t){return t.feedId.toString()===e.id.toString()})),j.bw((function(){return t.onFeedRemove.next(e)})))):n.set(e.id,P.t$(e))}),(function(e,r){if("assistantFeed"===r.content.type){var o=r.content;void 0!==t._feeds.get(e.id)?(t._feeds.set(e.id,B(N({},r),{content:o})),(0,i.zG)(t.currentFeed,A.filter((function(t){return t.feedId===e.id})),A.map((function(e){t._header.next(o.header),t._footer.next(A.fromNullable(o.footer))})))):t._log.warn("Feed with id '".concat(e.id,"' not found for update"))}else n.set(e.id,P.Hk(e,r))}),(function(e){if("assistantFeed"===e.content.type){var r=e.content;t._feeds.set(e.id,B(N({},e),{content:r}))}else n.set(e.id,P.F2(e))})))}))}},{key:"dispose",value:function(){this._subs.dispose()}}],n&&U(t.prototype,n),x&&U(t,x),e}();function $(e){var t=!0,n=!1,r=void 0;try{for(var i,o=x.ab.traverse(e)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;if("longFormCard"===a.type)return A.some(a.feedProperties);if("assistantCard"===a.type&&a.properties)return A.some(a.properties)}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}return A.none}},64998:(e,t,n)=>{n.d(t,{i:()=>r});var r,i=n(57050),o=n(8125),a=n(95195),s=n(5114),u=n(83078),c=n(81531),l=n(35416),f=n(98182),d=n(26393),h=n(79880);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}function y(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}!function(e){var t=(0,o.HP)(c.C8.Logging.getLogger);!function(e){e.create=function(e){var n=t("SingleCardAssistant.Transformers.disablePrevNextButtons");return function(t){var r=t.state,o=t.metadata;if(!l.nL.hasItems(r))return n.trace("state has no feed items, returning original state"),a.left({state:r,metadata:o});var c=r;return(0,i.zG)(c.currentLens.cardIndex,s.chain((function(e){return(0,i.zG)(l.In.getActiveItem(r.currentLens),s.map((function(t){return(0,i.bc)(t,e)})))})),s.map((function(t){var n=g(t,2),i=n[0],o=n[1];return l.nL.Prism.getLensWithItems().modify((function(t){if(!f.e.isSDUIItem(i)||!s.isSome(i.cardDSL))return t;var n=e.clone(i),a=u.MH(n.cardDSL),c=!1,l=d.ab.map(a,(function(e){if("button"===e.type&&e.name.value===h.MU.ButtonPrev){var t=0===o?h.BN.Disabled:h.BN.Enabled;return c=c||t!==e.state,y(m({},e),{state:t})}if("button"===e.type&&e.name.value===h.MU.ButtonNext){var n=o===r.currentLens.items.size-1?h.BN.Disabled:h.BN.Enabled;return c=c||n!==e.state,y(m({},e),{state:n})}return e}));return s.isSome(l)&&c?(n=Object.assign(n,{cardDSL:l}),y(m({},t),{items:t.items.add(n)})):t}),c)})),s.getOrElse((function(){return r})),(function(e){return a.left({state:e,metadata:o})}))}}}(e.DisablePrevNextButtons||(e.DisablePrevNextButtons={}))}(r||(r={}))},84174:(e,t,n)=>{n.d(t,{q:()=>W});var r=n(57050),i=n(5114),o=n(95195),a=n(83078),s=n(22232),u=n(71249),c=n(8125),l=n(64015),f=n(81531),d=n(46680),h=n(33678),p=n(74660),v=n(66896),m=n(66268),y=n(14454),g=n(35416),b=n(76201),_=n(9922),w=n(32952),I=n(28043),A=n(77176),O=n(98403),S=n(85985),C=n(19751),k=n(40151),j=n(16892),P=n(21038),F=n(17594),E=n(98182),M=n(52976),R=n(72812),T=n(23239);function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||B(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||B(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}var V,W=function(){function e(t,n,o,a,s,u,c,p){var v,m=arguments.length>8&&void 0!==arguments[8]?arguments[8]:new h.A,y=this;L(this,e),G(this,"_checksFeedCapabilities",void 0),G(this,"_lensState",void 0),G(this,"_alertReader",void 0),G(this,"_capiClient",void 0),G(this,"_platformEnvironment",void 0),G(this,"_sduiViewModel",void 0),G(this,"sduiActionEvents",void 0),G(this,"_sduiAlertIdResolver",void 0),G(this,"_log",void 0),G(this,"_subs",void 0),G(this,"actionEvents",void 0),G(this,"_focusedItem",void 0),G(this,"_mapToDenaliAlerts",void 0),this._checksFeedCapabilities=n,this._lensState=o,this._alertReader=u,this._capiClient=c,this._platformEnvironment=m,this._log=f.C8.Logging.getLogger("SDUICardsViewModelImpl",d.i.DEBUG),this._subs=new _.w.Keeper,this.actionEvents=new w.xQ,this._focusedItem=this._lensState.view((function(e){return g.nL.hasItems(e)?(0,r.zG)(e.currentLens.cardIndex,i.chain((function(t){return e.currentLens.items.getAt(t)}))):i.none})),this._mapToDenaliAlerts=function(e){return(0,r.zG)(e,l.fw(i.option)((function(e){return y._alertReader.getById(y._mapToDenaliAlertId(e))})),i.filter(l.Od))},this._sduiAlertIdResolver=(0,R.X)(a.alertIdResolver,this._log);var b=T.h.create(i.none);this._sduiViewModel=new R.x(t,a,s,c,b,m),this.sduiActionEvents=this._sduiViewModel.sduiActionEvents,(v=this._subs).push.apply(v,N(this._integrateCardsViewModel(p)).concat([(0,r.zG)(this._focusedItem,I.x((function(e,t){return i.getEq(j.s.eqById).equals(e,t)})),A.U(i.chain(i.fromPredicate(E.e.isSDUIItem))),A.U(i.map((function(e){return P.j.Item.Id.from(e.id)})))).subscribe(O.wW(b)),this._sduiViewModel]))}var t,n,c;return t=e,n=[{key:"_integrateCardsViewModel",value:function(e){return[this.actionEvents.subscribe(e.actionEvents),e.actionEvents.pipe(S.h(y.t.isSduiCardAction)).subscribe(this.sduiActionEvents)]}},{key:"_sduiActionsHandler",value:function(){var e=this;return this.sduiActionEvents.pipe(C.skipBy(y.t.eq),A.U((function(t){var n=t.cardId,u=t.actions,c=t.scope;return function(t){return e._log.info("sdui card action:",{cardId:n,actions:u}),(0,r.zG)(u,l.u4(t,(function(t,u){switch(u.type){case"notify":case"nextCard":case"prevCard":case"openSettings":case"openToneDetector":case"openFeedback":case"upgradeToPremium":case"openLearnMore":case"transition":case"openCreateSnippetModal":case"nativeOpenAssistant":case"showHighlights":case"hideHighlights":case"selectAlternative":case"openLink":case"copyToClipboard":case"pushAssistantFeed":case"popAssistantFeed":case"focusAssistantCard":case"switchView":case"newRevision":case"stopApplyingAlerts":case"closePopover":case"interactPopover":case"openGrammarlyGo":case"enablePlagiarismCheck":case"disablePlagiarismCheck":case"openPerformanceScore":case"nativeOpenUserSatisfactionFeedback":return t;case"removeRoot":return(0,r.zG)(t.currentLens.items.get(n),i.map((function(e){return e.value})),i.map(e._checksFeedCapabilities.remove(r.W8,r.W8)),i.map((function(e){return g.nL.Prism.getLens().compose(b.v.Prism.items).set(t.currentLens.items.modifyWith([[e.id,e]],(function(){return e})),t)})),i.getOrElse((0,r.a9)(t)));case"applyAlerts":return(0,r.zG)(t.currentLens.items.get(n),i.map((function(e){return e.value})),o.fromOption((function(){return new Error("unknown cardId: ".concat(n))})),o.bimap((function(t){return e._log.error("error in processing applyAlerts action",t)}),(function(t){(0,r.zG)(e._sduiAlertIdResolver(c.alertRefs),a.bw((function(n){requestAnimationFrame((function(){(0,r.zG)(n,e._mapToDenaliAlerts,i.map(l.UI((function(n){return e.actionEvents.next({type:m.lY.Type.alertApply,id:t.id,eligibleForSurvey:n.acceptSurvey,eligibleForGbPrompt:n.gbPrompt,alertId:n.id,alternativeIndex:u.alternativeIndex,cardType:m.lY.getCardType({activeAlert:F.$.fromModel(n)})})}))))}))})))})),(function(){return t.patch({alertSource:p.l$.sidebar})}));case"closeCard":return t.patch({currentLens:g.nL.hasItems(t)?e._checksFeedCapabilities.unselectItem()(t.currentLens):t.currentLens,switchOrder:"lensOrder",alertSource:p.l$.sidebar});case"removeAlerts":return(0,r.zG)(e._sduiAlertIdResolver(c.alertRefs),a.bw((function(t){requestAnimationFrame((function(){(0,r.zG)(t,e._mapToDenaliAlerts,i.map(l.UI((function(t){return e.actionEvents.next({type:m.lY.Type.alertIgnore,id:n,alertId:t.id,eligibleForSurvey:t.dismissSurvey})}))))}))}))),t.patch({alertSource:p.l$.sidebar});case"highlightAlert":return(0,r.zG)(e._sduiAlertIdResolver(c.alertRefs),i.chain(e._mapToDenaliAlerts),i.map((function(e){if(!g.nL.hasItems(t))return t;var n=function(e,t){return function(n){return(0,r.zG)(n.items.update(e,(function(e){return(0,r.zG)(e,i.fromPredicate(M.P.isAlertRefSDUIItem),i.chain(M.P.Capabilities.setActiveAlertId(t)),i.chain(M.P.Capabilities.setActiveHighlightIndex(u.highlightIndex)),i.getOrElse((0,r.a9)(e)))})),o.fold((function(){return n}),(function(e){return U(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){G(e,t,n[t])}))}return e}({},n),{items:e})})))}},a=e[0];return(0,r.zG)(g.In.getActiveItem(t.currentLens),i.map((function(e){return g.nL.Prism.getLensWithItems().modify(n(e.id,a.id),t)})),i.map((function(e){return e.patch({alertSource:p.l$.sidebar})})),i.getOrElse((0,r.a9)(t)))})),i.getOrElse((0,r.a9)(t)));default:(0,s.L0)(u)}})))}})))}},{key:"getApplicatorEffects",value:function(){return(0,r.zG)([[this._sduiActionsHandler(),"sduiActions"]],u.UI((function(e){var t=z(e,2),n=t[0],r=t[1];return{id:"cardsViewModel.effects.".concat(r),when:v.R.isWithAlertsId,what:g.nL.Effect.Applicator.create(n)}})))}},{key:"onAssistantClose",value:function(){this._sduiViewModel.onAssistantClose()}},{key:"dispose",value:function(){this._subs.dispose()}},{key:"_mapToDenaliAlertId",value:function(e){return"".concat(e)}}],n&&x(t.prototype,n),c&&x(t,c),e}();!function(e){e.itemsLens=g.nL.Prism.getLens().compose(b.v.Prism.items),e.createLegacy=function(e,t,n,s,u,c,l){var f=arguments.length>7&&void 0!==arguments[7]?arguments[7]:new h.A,d={enablePlagiarismSearch:function(){return Promise.resolve(o.right(void 0))},disablePlagiarismSearch:function(){return Promise.resolve(o.right(void 0))}};return(0,r.zG)(a.gz(e,s,u),i.fold((function(){return new V.Mock}),(function(e){var r=z(e,3),i=r[0],o=r[1],a=r[2];return new W(i,t,n,o,a,c,d,l,f)})))};e.Mock=function e(){L(this,e),G(this,"actionEvents",new w.xQ),G(this,"sduiActionEvents",new w.xQ),G(this,"sideEffect",{id:"cardsViewModelMock",when:v.R.isWithAlertsId,what:g.nL.Effect.Applicator.create(k.E)}),G(this,"getApplicatorEffects",(function(){return[{id:"cardsViewModelMock",when:v.R.isWithAlertsId,what:g.nL.Effect.Applicator.create(k.E)}]})),G(this,"onAssistantClose",c.Q1),G(this,"dispose",c.Q1)}}(V||(V={}))}}]);