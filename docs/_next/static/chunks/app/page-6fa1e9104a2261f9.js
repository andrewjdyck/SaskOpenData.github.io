(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4650:function(e,a,n){Promise.resolve().then(n.bind(n,2230))},2230:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return N}});var t=n(7437),s=n(2265),r=n(5293),i=n(535),o=n(1994),d=n(3335);function l(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];return(0,d.m6)((0,o.W)(a))}let c=(0,i.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),m=s.forwardRef((e,a)=>{let{className:n,variant:s,size:i,asChild:o=!1,...d}=e,m=o?r.g7:"button";return(0,t.jsx)(m,{className:l(c({variant:s,size:i,className:n})),ref:a,...d})});m.displayName="Button";let h=s.forwardRef((e,a)=>{let{className:n,...s}=e;return(0,t.jsx)("div",{ref:a,className:l("rounded-xl border bg-card text-card-foreground shadow",n),...s})});h.displayName="Card";let u=s.forwardRef((e,a)=>{let{className:n,...s}=e;return(0,t.jsx)("div",{ref:a,className:l("flex flex-col space-y-1.5 p-6",n),...s})});u.displayName="CardHeader";let x=s.forwardRef((e,a)=>{let{className:n,...s}=e;return(0,t.jsx)("div",{ref:a,className:l("font-semibold leading-none tracking-tight",n),...s})});x.displayName="CardTitle";let p=s.forwardRef((e,a)=>{let{className:n,...s}=e;return(0,t.jsx)("div",{ref:a,className:l("text-sm text-muted-foreground",n),...s})});p.displayName="CardDescription";let f=s.forwardRef((e,a)=>{let{className:n,...s}=e;return(0,t.jsx)("div",{ref:a,className:l("p-6 pt-0",n),...s})});f.displayName="CardContent";let g=s.forwardRef((e,a)=>{let{className:n,...s}=e;return(0,t.jsx)("div",{ref:a,className:l("flex items-center p-6 pt-0",n),...s})});g.displayName="CardFooter";var b=n(5255),j=n(4376);let v=s.forwardRef((e,a)=>{let{className:n,type:s,...r}=e;return(0,t.jsx)("input",{type:s,className:l("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",n),ref:a,...r})});v.displayName="Input";var y=n(4986);function w(e){let{isOpen:a,onClose:n,onSubmit:r,plan:i}=e,[o,d]=(0,s.useState)("");return a?(0,t.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4",children:(0,t.jsxs)("div",{className:"bg-white rounded-lg p-6 w-full max-w-md",children:[(0,t.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,t.jsxs)("h2",{className:"text-xl font-bold",children:["Sign up for ","free"===i?"Basic":"Pro"," Plan"]}),(0,t.jsx)("button",{onClick:n,className:"text-gray-500 hover:text-gray-700",children:(0,t.jsx)(y.Z,{size:24})})]}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),r(o)},children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),(0,t.jsx)(v,{type:"email",id:"email",value:o,onChange:e=>d(e.target.value),required:!0,placeholder:"you@example.com"})]}),(0,t.jsxs)("div",{className:"flex justify-end space-x-2",children:[(0,t.jsx)(m,{type:"button",variant:"outline",onClick:n,children:"Cancel"}),(0,t.jsx)(m,{type:"submit",children:"Submit"})]})]})]})}):null}function N(){let[e,a]=(0,s.useState)(!1),[n,r]=(0,s.useState)("free"),i=e=>{r(e),a(!0)},o=()=>{a(!1)},d=async e=>{try{if((await fetch("https://y77lgjrk65wuug7mykwoupug7m0upgiq.lambda-url.us-west-2.on.aws/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,planType:n})})).ok)alert("Thank you for signing up!");else throw Error("Failed to submit")}catch(e){alert("An error occurred. Please try again.")}o()};return(0,t.jsxs)("div",{className:"min-h-screen bg-gradient-to-b from-blue-100 to-white",children:[(0,t.jsx)("nav",{className:"container mx-auto p-6",children:(0,t.jsx)("div",{className:"flex justify-between items-center",children:(0,t.jsx)("img",{src:"images/ods-logo.png",alt:"Open Data Saskatchewan Logo"})})}),(0,t.jsx)("section",{className:"container mx-auto px-6 py-16 text-center",children:(0,t.jsx)("h1",{className:"text-5xl font-bold mb-4",children:"Open Data Saskatchewan"})}),(0,t.jsxs)("section",{style:{backgroundImage:"url('/images/cover.jpg')",backgroundSize:"cover",backgroundPosition:"center",padding:"20px"},children:[(0,t.jsxs)("section",{className:"container mx-auto px-6 py-16",children:[(0,t.jsx)("div",{className:"text-content",children:(0,t.jsx)("h2",{className:"text-3xl font-bold text-center mb-12",children:"It's time to ACT open data in the prairies"})}),(0,t.jsxs)("div",{className:"grid md:grid-cols-3 gap-8",children:[(0,t.jsxs)(h,{children:[(0,t.jsx)(u,{children:(0,t.jsx)(x,{children:"Awareness"})}),(0,t.jsx)(f,{children:(0,t.jsx)("p",{children:"Shining a light on open data through highlighting the value of open data - what it is and why it matters."})})]},"Awareness"),(0,t.jsxs)(h,{children:[(0,t.jsx)(u,{children:(0,t.jsx)(x,{children:"Conviction"})}),(0,t.jsx)(f,{children:(0,t.jsx)("p",{children:"Building demand and advocacy means claiming your rights to open data and inspiring action and ownership."})})]},"Conviction"),(0,t.jsxs)(h,{children:[(0,t.jsx)(u,{children:(0,t.jsx)(x,{children:"Tools"})}),(0,t.jsx)(f,{children:(0,t.jsx)("p",{children:"Empowering people to act by guiding others on how to use open data. Building skills and toolsets to create value in the Saskatchewan economy and enhanced public life."})})]},"Tools")]})]}),(0,t.jsx)("section",{className:"section-container",children:(0,t.jsxs)("div",{className:"content-wrapper",children:[(0,t.jsx)("img",{src:"images/handbook.png",alt:"Description of the image",className:"image"}),(0,t.jsxs)("div",{className:"text-column",children:[(0,t.jsx)("h2",{className:"section-heading",children:"The Saskatchewan Open Data Handbook"}),(0,t.jsx)("p",{children:"The Saskatchewan Open Data Handbook is your guide to understanding and accessing open data in the province. In the handbook you will find descriptions of the most useful, and sometimes hard to find, open data in the province and how to access this data and get started using it today."}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:"Download the Saskatchewan Open Data Handbook today when you signup to be a member of Open Data Saskatchewan below."})]})]})}),(0,t.jsxs)("section",{className:"container mx-auto px-6 py-16",children:[(0,t.jsx)("div",{className:"text-content",children:(0,t.jsx)("h2",{className:"text-3xl font-bold text-center mb-12",children:"Get involved and support Open Data Saskatchewan"})}),(0,t.jsx)("div",{className:"grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:[{name:"Basic",price:"$0",features:[{name:"Newsletter",included:!0},{name:"Sask Open Data Handbook",included:!0},{name:"Quarterly Sask Economic Trends Report",included:!1},{name:"Support transformational change",included:!1}]},{name:"Supporting member",price:"$20",features:[{name:"Newsletter",included:!0},{name:"Sask Open Data Handbook",included:!0},{name:"Quarterly Sask Economic Trends Report",included:!0},{name:"Support transformational change",included:!0}]}].map(e=>(0,t.jsxs)(h,{className:"Pro"===e.name?"border-blue-500 border-2":"",children:[(0,t.jsxs)(u,{children:[(0,t.jsx)(x,{children:e.name}),(0,t.jsxs)(p,{children:[(0,t.jsx)("span",{className:"text-3xl font-bold",children:e.price})," / month"]})]}),(0,t.jsx)(f,{children:(0,t.jsx)("ul",{children:e.features.map(e=>(0,t.jsxs)("li",{className:"flex items-center mb-2",children:[e.included?(0,t.jsx)(b.Z,{className:"text-green-500 mr-2"}):(0,t.jsx)(j.Z,{className:"text-red-500 mr-2"}),e.name]},e.name))})}),(0,t.jsx)(g,{children:(0,t.jsxs)(m,{className:"w-full",onClick:()=>i("Basic"===e.name?"free":"pro"),children:["Choose ",e.name]})})]},e.name))})]})]}),(0,t.jsx)("section",{className:"bg-blue-600 text-white py-16",children:(0,t.jsxs)("div",{className:"container mx-auto px-6 text-center",children:[(0,t.jsx)("h2",{className:"text-3xl font-bold mb-4",children:"Looking for more?"}),(0,t.jsx)("p",{className:"mb-8",children:"If you are interested in open data in Saskatchewan, I'd love to hear from you. The project lead, @andrewjdyck, has worked with technology and business leaders across the province to ACT on data transparency and transformation."}),(0,t.jsx)("a",{href:"https://andrewdyck.com",className:"button",children:"Contact Andy"})]})}),(0,t.jsx)("footer",{className:"container mx-auto p-6 text-center text-gray-500",children:(0,t.jsx)("p",{children:"\xa9 2025 Open Data Saskatchewan. All rights reserved."})}),(0,t.jsx)(w,{isOpen:e,onClose:o,onSubmit:d,plan:n})]})}}},function(e){e.O(0,[180,971,117,744],function(){return e(e.s=4650)}),_N_E=e.O()}]);