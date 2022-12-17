"use strict";(self.webpackChunkcoding_resource_utm=self.webpackChunkcoding_resource_utm||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},l="VS Code setup Tutorial",i={unversionedId:"intro",id:"intro",title:"VS Code setup Tutorial",description:"Let's download and setup Visual Studio code in less than 15 minutes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/utm-code-tutorials/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial - Basics",permalink:"/utm-code-tutorials/docs/category/tutorial---basics"}},s={},u=[{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Getting VS code and MingW",id:"getting-vs-code-and-mingw",level:2},{value:"Help! , I cant make it work",id:"help--i-cant-make-it-work",level:2},{value:"Manually installing VS Code",id:"manually-installing-vs-code",level:2},{value:"Whats next",id:"whats-next",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vs-code-setup-tutorial"},"VS Code setup Tutorial"),(0,r.kt)("p",null,"Let's download and setup ",(0,r.kt)("strong",{parentName:"p"},"Visual Studio code in less than 15 minutes"),"."),(0,r.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Chocolatey")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"you can run the following script to authomatically download and install MinGW. To do so, open powershell on your pc/laptop by navigating to start menu and searching for powershell. After opening it paste the following script and press enter. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))```\n\n## Check installation was successful\n- After the process is done, copy and paste the following command into the the same terminal \n```bash\nchoco --version\n")),(0,r.kt)("p",null,"If you see version information on the screen then you are good to go!."),(0,r.kt)("h2",{id:"getting-vs-code-and-mingw"},"Getting VS code and MingW"),(0,r.kt)("p",null,"Type or copy paste the following command into powershell terminal "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"choco install vscode mingw -y\n")),(0,r.kt)("p",null,"This process might take sometime depending on your internet connection and hardware."),(0,r.kt)("p",null,"-After finishing you have the basic setup to code using C++ on your laptop."),(0,r.kt)("h2",{id:"help--i-cant-make-it-work"},"Help! , I cant make it work"),(0,r.kt)("p",null,"Its alright! ."),(0,r.kt)("h2",{id:"manually-installing-vs-code"},"Manually installing VS Code"),(0,r.kt)("p",null,"If the tutorial didnt help, we can do this in a manual manner."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We start by ",(0,r.kt)("strong",{parentName:"li"},"Downloading VS Code"),".")),(0,r.kt)("p",null,"you can get it here-> ",(0,r.kt)("strong",{parentName:"p"},"Download Visual Studio code here"),"  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://code.visualstudio.com/Download"},"VSCODE Download")),". Note that you will require to download MinGW and change PATH variables on your system.If you are not comfortable with this .Just show up early for Programming clinic venue and we will help you!"),(0,r.kt)("h2",{id:"whats-next"},"Whats next"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In an upcoming tutorial we will discuss about extensions and how they help.")))}p.isMDXComponent=!0}}]);