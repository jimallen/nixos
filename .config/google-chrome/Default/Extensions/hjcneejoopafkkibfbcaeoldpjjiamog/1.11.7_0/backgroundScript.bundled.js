(()=>{var e,n={"../../client-commons/src/config/api.ts":(e,n,t)=>{"use strict";t.d(n,{$2:()=>c});var i=t("../../client-commons/src/config/devenv.ts"),o=t("../../client-commons/src/config/environment.ts"),c=function(){switch((0,o.zj)()){case"production":return"https://www.getclockwise.com";case"preprod":return"https://www.preprod.getclockwise.com";case"staging":return"https://www.staging.getclockwise.com";default:var e=(0,i.v7)();return e?"https://".concat(e,".dev.getclockwise.com"):"https://localhost:8080"}}},"../../client-commons/src/config/devenv.ts":(e,n,t)=>{"use strict";t.d(n,{v7:()=>c});var i=(self.location.hostname,null),o=void 0,c=function(){return null!=o?o:i}},"../../client-commons/src/config/environment.ts":(e,n,t)=>{"use strict";var i;t.d(n,{zj:()=>s});var o=null!==(i="production")?i:"development",c=void 0,s=function(){return null!=c?c:o}},"../../client-commons/src/constants/site.ts":(e,n,t)=>{"use strict";t.d(n,{Hb:()=>o,Uv:()=>i});var i="https://calendar.google.com",o={login:"/login",signup:"/signup",signout:"/signout",welcomeSignIn:"/welcome-sign-in",m365SignIn:"/m365",logout:"/logout",chromeSlackVerifier:"/chromeslack",terms:"/terms",privacy:"/privacy",careers:"/careers",about:"/about",blog:"https://www.getclockwise.com/blog",copyrightDispute:"/copyright-dispute",communityGuidelines:"/community-guidelines",uninstall:"/uninstall",nonUserDefragSurvey:"/meeting-move-survey",pricing:"/pricing",checkout:"/checkout",googleAuthRedirect:"/google/connect",microsoftAuthRedirect:"/microsoft/connect",slackLanding:"/slack",asana:"/asana",asanaLanding:"/asana-app",unsubscribe:"/unsubscribe",styleGuide:"/styleguide",webApp:"/app",chat:"/app/chat",calendar:"/app/calendar",planner:"/app/planner",redirect:"/redirect",security:"/security",sudo:"/sudo",invite:"/invite",personalInvite:"/invite/link",eventReschedule:"/eventreschedule",welcome:"/welcome",chromeZoomVerifier:"/zoom",admin:"/app/admin",oneOnOnes:"/app/one-on-ones",flexibleMeetings:"/app/flexible-meetings",flexibleHolds:"/app/flexible-holds",focusTime:"/app/focus-time",scheduling:"/scheduling",schedulingLink:"/c/:linkName/:slug",editSchedulingLink:"/app/edit-scheduling-link/:linkName/:slug",createSchedulingLink:"/app/create-scheduling-link",schedulingLinks:"/app/scheduling-links",schedulingLinksCompact:"/app/scheduling-links-compact",cancelBooking:"/booking/:bookingId/cancel",rescheduleBooking:"/booking/:bookingId/reschedule",linksOnboardingLogin:"/welcome-links",zoomSettings:"/app/settings/zoom",flexMeetings:"/flexible-meetings",webSettings:"/web-settings",signupExtension:"/signupextension",onboarding:"/onboarding",mini:"/mini",installExtension:"/install-extension"};o.about,o.careers,o.security,o.terms,o.privacy},"./util/background-script.util.ts":(e,n,t)=>{"use strict";t.d(n,{Qv:()=>u,rn:()=>l,t:()=>s});var i=t("../../client-commons/src/config/api.ts"),o=t("../../client-commons/src/constants/site.ts"),c=t("../../web-commons/src/util/post-message-common.util.ts"),s=function(){chrome.tabs.query({active:!0,currentWindow:!0},(function(e){var n,t=null==e?void 0:e[0];t&&((null===(n=t.url)||void 0===n?void 0:n.includes(o.Uv))||chrome.tabs.create({url:o.Uv+"?"+c.tW.Open}))}))},r=function(){return[new URL((0,i.$2)()).origin+"/*"]},a=function(e,n){if("alert"===e)chrome.browserAction.setBadgeBackgroundColor({color:"#DC6803"},(function(){chrome.browserAction.setBadgeText({text:"!"},n)}));else chrome.browserAction.setBadgeText({text:""},n)},l=function(e){chrome.permissions.contains({origins:r()},(function(n){n?a("none",(function(){chrome.browserAction.setPopup({popup:"popup.html"},(function(){return null==e?void 0:e(!0)}))})):a("alert",(function(){chrome.browserAction.setPopup({popup:""},(function(){return null==e?void 0:e(!1)}))}))}))},u=function(e){chrome.permissions.request({origins:r()},(function(n){n?l(e):null==e||e(!1)}))}},"./util/port.constant.ts":(e,n,t)=>{"use strict";var i,o;t.d(n,{j:()=>o,o:()=>i}),function(e){e.ContentScript="contentScript"}(i||(i={})),function(e){e.InitialConnection="InitialConnection"}(o||(o={}))},"../../web-commons/src/util/post-message-common.util.ts":(e,n,t)=>{"use strict";function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{tW:()=>c});o((function e(n,t){i(this,e),o(this,"type",void 0),o(this,"payload",void 0),o(this,"source",void 0),o(this,"seqId",void 0),this.type=n,this.payload=t,this.source="clockwise",this.seqId=e.seqId++}),"seqId",0);var c={Open:"cwopen",Invite:"cwinvite",Slack:"cwslack",SmartHolds:"cwsmartholds",PersonalCalendar:"cwpersonalcal",ColorCoding:"cwcolors",InstallEvent:"cwinstall",Plans:"cwplans",Lunch:"cwlunch",MeetingBreaks:"cwmeetingbreaks",EventId:"eid",ShareSchedulingLink:"share-scheduling-link"}}},t={};function i(e){var o=t[e];if(void 0!==o)return o.exports;var c=t[e]={exports:{}};return n[e](c,c.exports,i),c.exports}i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(e="undefined"!=typeof window?window:void 0!==i.g?i.g:"undefined"!=typeof self?self:{}).SENTRY_RELEASE={id:"91a801bbb36735e3e704eba0c1c9acf850628ff9"},e.SENTRY_RELEASES=e.SENTRY_RELEASES||{},e.SENTRY_RELEASES["extension@clockwise-inc"]={id:"91a801bbb36735e3e704eba0c1c9acf850628ff9"},(()=>{"use strict";var e,n,t=i("../../client-commons/src/config/api.ts"),o=i("../../client-commons/src/constants/site.ts"),c=i("./util/background-script.util.ts"),s=i("./util/port.constant.ts"),r="".concat((0,t.$2)()).concat(o.Hb.installExtension),a=function(){return chrome.runtime.getURL("").startsWith("chrome-extension://")};function l(e){return"number"==typeof e}chrome.runtime.onConnect.addListener((function(e){e.name===s.o.ContentScript&&(e.postMessage({type:s.j.InitialConnection}),n=e),e.sender&&e.sender.tab&&e.sender.tab.id&&chrome.tabs.insertCSS(e.sender.tab.id,{file:"style.css"})})),chrome.runtime.onInstalled.addListener((function(e){a()&&(0,c.rn)(),e&&e.reason===chrome.runtime.OnInstalledReason.INSTALL&&chrome.tabs.create({url:r,active:!0})})),null===(e=chrome.runtime.onUpdateAvailable)||void 0===e||e.addListener((function(){n&&n.disconnect(),chrome.runtime.reload()})),chrome.tabs.query({url:["https://calendar.google.com/calendar/*"]},(function(e){e.forEach((function(e){l(e.id)&&chrome.tabs.executeScript(e.id,{file:"contentScript.bundled.js"})}))})),chrome.runtime.setUninstallURL((0,t.$2)()+"/uninstall"),chrome.runtime.onMessage.addListener((function(e,n,t){if("getStyleCanary"===e&&n.tab&&l(n.tab.id)&&"number"==typeof n.frameId){var i="_"+crypto.getRandomValues(new Uint32Array(2)).join(""),o="."+i+" { opacity: 0 !important; }";return chrome.tabs.insertCSS(n.tab.id,{code:o,frameId:n.frameId,runAt:"document_start"},(function(){chrome.runtime.lastError?t():t(i)})),!0}})),chrome.browserAction.onClicked.addListener((function(){a()?(0,c.Qv)():(0,c.t)()}))})()})();