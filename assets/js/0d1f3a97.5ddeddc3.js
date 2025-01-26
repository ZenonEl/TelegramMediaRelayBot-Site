"use strict";(self.webpackChunktelegram_media_relay_bot_site=self.webpackChunktelegram_media_relay_bot_site||[]).push([[34],{5133:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"id":"accesspolicy","title":"\ud83d\udd10 Access Policy","description":"Access Policy is a feature that allows you to control how the bot interacts with new users. This is especially useful if you want to restrict access to the bot and keep it only for your acquaintances.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/accesspolicy.md","sourceDirName":".","slug":"/accesspolicy","permalink":"/docs/accesspolicy","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"\ud83e\uddc5 Tor Control Management","permalink":"/docs/torcontrol"},"next":{"title":"\ud83d\udcdc Rules and License","permalink":"/docs/rules"}}');var r=n(4848),c=n(8453);const i={},t="\ud83d\udd10 Access Policy",o={},a=[{value:"\ud83d\udee0 Configuring Access Policy",id:"-configuring-access-policy",level:3},{value:"\ud83c\udfaf Key Parameters",id:"-key-parameters",level:3},{value:"1. <strong>Enabling/Disabling Access Policy</strong>",id:"1-enablingdisabling-access-policy",level:4},{value:"2. <strong>Policy for New Users</strong>",id:"2-policy-for-new-users",level:4},{value:"3. <strong>Access Rules</strong>",id:"3-access-rules",level:4},{value:"\u26a0\ufe0f Important Notes",id:"\ufe0f-important-notes",level:3},{value:"\ud83d\udca1 Tips",id:"-tips",level:3}];function d(e){const s={code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"-access-policy",children:"\ud83d\udd10 Access Policy"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Access Policy"})," is a feature that allows you to control how the bot interacts with new users. This is especially useful if you want to restrict access to the bot and keep it only for your acquaintances."]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"-configuring-access-policy",children:"\ud83d\udee0 Configuring Access Policy"}),"\n",(0,r.jsxs)(s.p,{children:["To configure the access policy, open the ",(0,r.jsx)(s.code,{children:"appsettings.json"})," file and find the ",(0,r.jsx)(s.code,{children:"AccessPolicy"})," section. Here is an example configuration:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'"AccessPolicy": {\n  "Enabled": true,\n  "NewUsersPolicy": {\n    "Enabled": true,\n    "AllowNewUsers": true,\n    "AllowRules": {\n      "AllowAll": false,\n      "WhitelistedReferrerIds": [],\n      "BlacklistedReferrerIds": []\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"-key-parameters",children:"\ud83c\udfaf Key Parameters"}),"\n",(0,r.jsxs)(s.h4,{id:"1-enablingdisabling-access-policy",children:["1. ",(0,r.jsx)(s.strong,{children:"Enabling/Disabling Access Policy"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Enabled"}),": Enables or disables the access policy. If ",(0,r.jsx)(s.code,{children:"false"}),", all users will have access to the bot."]}),"\n"]}),"\n",(0,r.jsxs)(s.h4,{id:"2-policy-for-new-users",children:["2. ",(0,r.jsx)(s.strong,{children:"Policy for New Users"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"NewUsersPolicy.Enabled"}),": Enables or disables the policy for new users."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"AllowNewUsers"}),": Allows or denies access to new users.","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["If ",(0,r.jsx)(s.code,{children:"true"}),", new users can use the bot."]}),"\n",(0,r.jsxs)(s.li,{children:["If ",(0,r.jsx)(s.code,{children:"false"}),", access will be restricted to existing users only."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h4,{id:"3-access-rules",children:["3. ",(0,r.jsx)(s.strong,{children:"Access Rules"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"AllowAll"}),": If ",(0,r.jsx)(s.code,{children:"true"}),", all users gain access to the bot."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"WhitelistedReferrerIds"}),": A list of Telegram IDs of users who can always add new users.","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["For example:","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'"WhitelistedReferrerIds": [123456789, 987654321]\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"BlacklistedReferrerIds"}),": A list of Telegram IDs of users who will never be able to add new users.","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["For example:","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'"BlacklistedReferrerIds": [111111111, 222222222]\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"\ufe0f-important-notes",children:"\u26a0\ufe0f Important Notes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"User IDs"}),": Make sure you are using the correct Telegram user IDs."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Testing"}),": After changing the settings, test the bot to ensure the access policy works as expected."]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"-tips",children:"\ud83d\udca1 Tips"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["If you want to fully open access to the bot, set ",(0,r.jsx)(s.code,{children:'"AllowAll": true'}),". Or simply set ",(0,r.jsx)(s.code,{children:'"NewUsersPolicy.Enabled": false"'}),"."]}),"\n",(0,r.jsx)(s.li,{children:"For stricter control, use a Whitelist to ensure only trusted users can add new members."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>t});var l=n(6540);const r={},c=l.createContext(r);function i(e){const s=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(c.Provider,{value:s},e.children)}}}]);