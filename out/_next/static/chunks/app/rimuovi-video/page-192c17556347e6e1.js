(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[873],{212:function(e,t,r){Promise.resolve().then(r.bind(r,5027))},5027:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Y}});var n=r(7437),a=r(2265),s=r(3514),i=r(4175),o=r(7440);let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{className:"relative w-full overflow-auto",children:(0,n.jsx)("table",{ref:t,className:(0,o.cn)("w-full caption-bottom text-sm",r),...a})})});l.displayName="Table";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("thead",{ref:t,className:(0,o.cn)("[&_tr]:border-b",r),...a})});d.displayName="TableHeader";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("tbody",{ref:t,className:(0,o.cn)("[&_tr:last-child]:border-0",r),...a})});c.displayName="TableBody",a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("tfoot",{ref:t,className:(0,o.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...a})}).displayName="TableFooter";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("tr",{ref:t,className:(0,o.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...a})});u.displayName="TableRow";let m=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("th",{ref:t,className:(0,o.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...a})});m.displayName="TableHead";let f=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("td",{ref:t,className:(0,o.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",r),...a})});f.displayName="TableCell",a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("caption",{ref:t,className:(0,o.cn)("mt-4 text-sm text-muted-foreground",r),...a})}).displayName="TableCaption";var p=r(3102),h=r(4609),g=r(6669),x=r(495);let v=g.fC,b=g.xz,j=g.h_,w=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(g.aV,{className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...a,ref:t})});w.displayName=g.aV.displayName;let y=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsxs)(j,{children:[(0,n.jsx)(w,{}),(0,n.jsx)(g.VY,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",r),...a})]})});y.displayName=g.VY.displayName;let N=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...r})};N.displayName="AlertDialogHeader";let S=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...r})};S.displayName="AlertDialogFooter";let R=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(g.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold",r),...a})});R.displayName=g.Dx.displayName;let k=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(g.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",r),...a})});k.displayName=g.dk.displayName;let C=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(g.aU,{ref:t,className:(0,o.cn)((0,x.d)(),r),...a})});C.displayName=g.aU.displayName;let I=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(g.$j,{ref:t,className:(0,o.cn)((0,x.d)({variant:"outline"}),"mt-2 sm:mt-0",r),...a})});I.displayName=g.$j.displayName;var E=r(2653),T=r(1014),_=r(9343),z=r(883),Z=r(5657),P=r(6956);function F(e){let{table:t,rowSelection:r,setLogger:s}=e,{toast:i}=(0,Z.pm)(),[o,l]=(0,a.useState)(!1),d=(0,_.cI)({resolver:(0,T.F)(h.yQ),defaultValues:{idx:[]}});(0,a.useEffect)(()=>{d.setValue("idx",Object.keys(r).map(e=>Number(e)))},[r,d]);let c=async()=>{if(l(!1),!(0,P.$8)()){i({title:"Errore",description:"Devi essere loggato per rimuovere un video"});return}let e=t.getSelectedRowModel().rows.map(e=>e.original),r={success:[],error:[]};for(let t of e){let{title:e,author:n}=t,a=new URLSearchParams;a.append("titolo",e),a.append("autore",n);let o=await fetch("./php/deleteVideo.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a.toString()});if(!o.ok){r.error.push(t);continue}let{result:l,error:d}=await o.json();if("effettuare prima il login"===d){s(null),i({title:"Errore",description:"Devi essere loggato per rimuovere un video",variant:"destructive"});return}if("Video not found"===d||"missing id"===d){r.error.push(t);continue}if("success"===l){r.success.push(t);continue}r.error.push(t)}i({title:"Rimozione completata",description:"".concat(r.success.length," video rimossi con successo \n ").concat(r.error.length," video non rimossi")}),s(r)};return(0,n.jsx)(E.l0,{...d,children:(0,n.jsxs)("form",{onSubmit:d.handleSubmit(c),children:[(0,n.jsx)(E.Wi,{control:d.control,name:"idx",render:e=>{let{field:t}=e;return(0,n.jsxs)(E.xJ,{children:[(0,n.jsx)(E.NI,{children:(0,n.jsx)(p.I,{...t,className:"hidden",value:Object.entries(r).map(e=>Number(e[0])).join(", ")})}),(0,n.jsx)(E.zG,{})]})}}),(0,n.jsx)("div",{className:"flex flex-col-reverse justify-between text-sm gap-2  lg:flex-row lg:items-center text-muted-foreground",children:(0,n.jsxs)(v,{open:o,onOpenChange:l,children:[(0,n.jsx)(b,{asChild:!0,children:(0,n.jsxs)(x.z,{children:["Rimuovi i video selezionati ",(0,n.jsx)(z.Z,{className:"w-4 h-4 ms-2"})]})}),0===t.getFilteredSelectedRowModel().rows.length?(0,n.jsxs)(y,{children:[(0,n.jsxs)(N,{children:[(0,n.jsx)(R,{children:"Nessun video selezionato"}),(0,n.jsxs)(k,{children:["Per eliminare un video devi selezionarlo nella tabella."," "]})]}),(0,n.jsx)(S,{children:(0,n.jsx)(I,{children:"Annulla"})})]}):(0,n.jsxs)(y,{children:[(0,n.jsxs)(N,{children:[(0,n.jsx)(R,{children:"Sei sicuro di voler rimuovere i video selezionati?"}),(0,n.jsx)(k,{children:"I video saranno rimossi definitivamente dalla videoteca. Questa azione non \xe8 reversibile."})]}),(0,n.jsxs)(S,{children:[(0,n.jsx)(I,{children:"Annulla"}),(0,n.jsx)(C,{className:"px-0",children:(0,n.jsx)(x.z,{type:"submit",onClick:d.handleSubmit(c),variant:"destructive",className:"w-full",children:"Continua"})})]})]})]})})]})})}function D(e){var t,r;let{table:a,rowSelection:s,logger:i,setLogger:o}=e;return(0,n.jsxs)("div",{className:"flex items-center m-auto justify-between 2xl:w-[1200px] py-4 lg:w-full",children:[(0,n.jsx)(p.I,{placeholder:"Cerca titolo...",value:null!==(r=null===(t=a.getColumn("title"))||void 0===t?void 0:t.getFilterValue())&&void 0!==r?r:"",onChange:e=>{var t;return null===(t=a.getColumn("title"))||void 0===t?void 0:t.setFilterValue(e.target.value)},className:"max-w-sm"}),(0,n.jsx)(F,{table:a,rowSelection:s,setLogger:o})]})}var O=r(3476),V=r(9375),A=r(4344);function M(e){let{table:t,logger:r}=e,[s,i]=a.useState(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center m-auto justify-between 2xl:w-[1200px] py-4 lg:w-full",children:[(0,n.jsxs)(O.Z,{className:"text-sm text-muted-foreground",children:[t.getFilteredSelectedRowModel().rows.length," di"," ",t.getFilteredRowModel().rows.length," ",1===t.getFilteredRowModel().rows.length?"opzione":"opzioni",1===t.getFilteredSelectedRowModel().rows.length?" selezionata":" selezionate","."]}),(0,n.jsxs)("div",{className:"flex items-center justify-end py-4  space-x-2",children:[(0,n.jsx)(x.z,{variant:"outline",size:"sm",onClick:()=>t.previousPage(),disabled:!t.getCanPreviousPage(),children:"Precedente"}),(0,n.jsx)(x.z,{variant:"default",size:"sm",onClick:()=>t.nextPage(),disabled:!t.getCanNextPage(),children:"Prossima"})]})]}),r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x.z,{onClick:()=>i(!s),children:"Mostra il log"}),s&&(0,n.jsxs)("div",{className:"pb-20 m-auto mt-4 w-fit",children:[(0,n.jsxs)(V.Z,{className:"mb-4 text-center",children:["Video rimossi (",r.success.length,")"]}),(0,n.jsx)("ul",{children:r.success.map(e=>(0,n.jsxs)("li",{children:[(0,n.jsx)(O.Z,{children:e.title}),(0,n.jsx)(A.Z,{})]},e.duration))}),(0,n.jsxs)(V.Z,{className:"my-4 text-center",children:["Errori (",r.error.length,")"]}),(0,n.jsx)("ul",{children:r.error.map(e=>(0,n.jsxs)("li",{children:[(0,n.jsx)(O.Z,{children:e.title}),(0,n.jsx)(A.Z,{})]},e.duration))})]})]})]})}function U(e){let{columns:t,data:r}=e,[o,l]=a.useState([]),[d,c]=a.useState([]),[u,m]=a.useState({}),[f,p]=a.useState({}),h=(0,s.b7)({data:r,columns:t,getCoreRowModel:(0,i.sC)(),onRowSelectionChange:m,getSortedRowModel:(0,i.tj)(),onColumnVisibilityChange:p,onColumnFiltersChange:c,getFilteredRowModel:(0,i.vL)(),onSortingChange:l,getPaginationRowModel:(0,i.G_)(),state:{sorting:o,rowSelection:u,columnFilters:d,columnVisibility:f}}),[g,x]=a.useState(null);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"px-4 md:px-10",children:[(0,n.jsx)(D,{table:h,rowSelection:u,logger:g,setLogger:x}),(0,n.jsx)(L,{table:h,columns:t}),(0,n.jsx)(M,{table:h,logger:g})]})})}function L(e){var t;let{table:r,columns:a}=e;return(0,n.jsxs)(l,{className:"md:w-full lg:w-[1200px]  md:overflow-x-hidden m-auto w-[562px] overflow-x-auto",children:[(0,n.jsx)(d,{children:r.getHeaderGroups().map(e=>(0,n.jsx)(u,{className:"hover:bg-transparent",children:e.headers.map(e=>"hide"!==e.column.columnDef.header&&(0,n.jsx)(m,{children:e.isPlaceholder?null:(0,s.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,n.jsx)(c,{children:(null===(t=r.getRowModel().rows)||void 0===t?void 0:t.length)?r.getRowModel().rows.map(e=>(0,n.jsx)(u,{"data-state":e.getIsSelected()&&"selected",className:"border-0 border-b bg-background hover:bg-neutral-200/50 dark:hover:bg-neutral-900",children:e.getVisibleCells().map(e=>"hide"!==e.column.columnDef.header&&(0,n.jsx)(f,{children:(0,s.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,n.jsx)(u,{children:(0,n.jsx)(f,{colSpan:a.length,className:"h-24 text-center",children:"No results."})})})]})}var H=r(6772),G=r(2468);let $=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(H.fC,{ref:t,className:(0,o.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",r),...a,children:(0,n.jsx)(H.z$,{className:(0,o.cn)("flex items-center justify-center text-current"),children:(0,n.jsx)(G.Z,{className:"w-4 h-4"})})})});$.displayName=H.fC.displayName;var K=r(592),Q=r(6900);let W=e=>{let{header:t,column:r}=e;return(0,n.jsxs)(x.z,{role:"button",variant:"ghost",onClick:()=>r.toggleSorting("asc"===r.getIsSorted()),children:[t,(0,n.jsx)(Q.Z,{className:"w-4 h-4 ml-2"})]})},J=[{id:"select",header:e=>{let{table:t}=e;return(0,n.jsx)($,{checked:t.getIsAllRowsSelected(),onCheckedChange:e=>t.toggleAllRowsSelected(!!e),"aria-label":"Select all"})},cell:e=>{let{row:t}=e;return(0,n.jsx)($,{checked:t.getIsSelected(),onCheckedChange:e=>t.toggleSelected(!!e),"aria-label":"Select row"})},enableSorting:!1,enableHiding:!1},{id:"title",accessorKey:"title",header:e=>{let{column:t}=e;return(0,n.jsx)(W,{header:"Titolo",column:t})},cell:e=>e.getValue()},{accessorKey:"author",header:e=>{let{column:t}=e;return(0,n.jsx)(W,{header:"Autore",column:t})},cell:e=>e.getValue()},{accessorKey:"duration",header:e=>{let{column:t}=e;return(0,n.jsx)(W,{header:"Durata",column:t})},cell:e=>e.getValue()},{accessorKey:"language",header:"Lingua",cell:e=>e.getValue()},{accessorKey:"link",header:"Link",cell:e=>(0,n.jsx)(K.Z,{link:e.getValue(),input:!1})}];var X=r(9745),B=r(7114);function Y(){let{data:e,loading:t,error:r}=(0,B.Z)({});return(0,n.jsx)(X.default,{children:(0,n.jsx)("div",{className:"mt-20",children:!t&&e&&(0,n.jsx)(U,{columns:J,data:e})})})}},3476:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7437),a=r(7440);function s(e){let{children:t,className:r}=e;return(0,n.jsx)("p",{className:(0,a.cn)(r,"leading-7 [&:not(:first-child)]:mt-6"),children:t})}},9375:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7437),a=r(7440);function s(e){let{children:t,className:r}=e;return(0,n.jsx)("h3",{className:(0,a.cn)("scroll-m-20 text-2xl font-semibold tracking-tight",r),children:t})}},495:function(e,t,r){"use strict";r.d(t,{d:function(){return l},z:function(){return d}});var n=r(7437),a=r(2265),s=r(1538),i=r(2218),o=r(7440);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:r,variant:a,size:i,asChild:d=!1,...c}=e,u=d?s.g7:"button";return(0,n.jsx)(u,{className:(0,o.cn)(l({variant:a,size:i,className:r})),ref:t,...c})});d.displayName="Button"},2653:function(e,t,r){"use strict";r.d(t,{NI:function(){return g},Wi:function(){return u},l0:function(){return d},lX:function(){return h},pf:function(){return x},xJ:function(){return p},zG:function(){return v}});var n=r(7437),a=r(2265),s=r(1538),i=r(9343),o=r(7440),l=r(7135);let d=i.RV,c=a.createContext({}),u=e=>{let{...t}=e;return(0,n.jsx)(c.Provider,{value:{name:t.name},children:(0,n.jsx)(i.Qr,{...t})})},m=()=>{let e=a.useContext(c),t=a.useContext(f),{getFieldState:r,formState:n}=(0,i.Gc)(),s=r(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=t;return{id:o,name:e.name,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...s}},f=a.createContext({}),p=a.forwardRef((e,t)=>{let{className:r,...s}=e,i=a.useId();return(0,n.jsx)(f.Provider,{value:{id:i},children:(0,n.jsx)("div",{ref:t,className:(0,o.cn)("space-y-2",r),...s})})});p.displayName="FormItem";let h=a.forwardRef((e,t)=>{let{className:r,...a}=e,{error:s,formItemId:i}=m();return(0,n.jsx)(l._,{ref:t,className:(0,o.cn)(s&&"text-destructive",r),htmlFor:i,...a})});h.displayName="FormLabel";let g=a.forwardRef((e,t)=>{let{...r}=e,{error:a,formItemId:i,formDescriptionId:o,formMessageId:l}=m();return(0,n.jsx)(s.g7,{ref:t,id:i,"aria-describedby":a?"".concat(o," ").concat(l):"".concat(o),"aria-invalid":!!a,...r})});g.displayName="FormControl";let x=a.forwardRef((e,t)=>{let{className:r,...a}=e,{formDescriptionId:s}=m();return(0,n.jsx)("p",{ref:t,id:s,className:(0,o.cn)("text-sm text-muted-foreground",r),...a})});x.displayName="FormDescription";let v=a.forwardRef((e,t)=>{let{className:r,children:a,...s}=e,{error:i,formMessageId:l}=m(),d=i?String(null==i?void 0:i.message):a;return d?(0,n.jsx)("p",{ref:t,id:l,className:(0,o.cn)("text-sm font-medium text-destructive",r),...s,children:d}):null});v.displayName="FormMessage"},3102:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var n=r(7437),a=r(2265),s=r(7440);let i=a.forwardRef((e,t)=>{let{className:r,type:a,...i}=e;return(0,n.jsx)("input",{type:a,className:(0,s.cn)("flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});i.displayName="Input"},7135:function(e,t,r){"use strict";r.d(t,{_:function(){return d}});var n=r(7437),a=r(2265),s=r(8364),i=r(2218),o=r(7440);let l=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.f,{ref:t,className:(0,o.cn)(l(),r),...a})});d.displayName=s.f.displayName},4344:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7437),a=r(2265),s=r(8484),i=r(7440);let o=a.forwardRef((e,t)=>{let{className:r,orientation:a="horizontal",decorative:o=!0,...l}=e;return(0,n.jsx)(s.f,{ref:t,decorative:o,orientation:a,className:(0,i.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",r),...l})});o.displayName=s.f.displayName},5657:function(e,t,r){"use strict";r.d(t,{pm:function(){return m}});var n=r(2265);let a=0,s=new Map,i=e=>{if(s.has(e))return;let t=setTimeout(()=>{s.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);s.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?i(r):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],d={toasts:[]};function c(e){d=o(d,e),l.forEach(e=>{e(d)})}function u(e){let{...t}=e,r=(a=(a+1)%Number.MAX_SAFE_INTEGER).toString(),n=()=>c({type:"DISMISS_TOAST",toastId:r});return c({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||n()}}}),{id:r,dismiss:n,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function m(){let[e,t]=n.useState(d);return n.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},592:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7437),a=r(2265),s=r(3102),i=r(495),o=r(6884),l=r(3418),d=r.n(l),c=r(5657);function u(e){let{link:t,input:r=!0}=e,{toast:l}=(0,c.pm)(),[u,m]=(0,a.useState)(!1),f=async()=>{try{await d()(t),m(!0),l({title:"Link copiato negli appunti",description:"Il link del video \xe8 stato copiato con successo"})}catch(e){l({variant:"destructive",title:"Impossibile copiare il link",description:"Impossibile copiare il link del video negli appunti, riprova pi\xf9 tardi"}),console.error("Failed to copy",e)}};return r?(0,n.jsxs)("div",{className:"w-[60%] pb-4 m-auto relative",children:[(0,n.jsx)(s.I,{readOnly:!0,placeholder:"https://youtube.com/...",className:"m-auto",id:"link"}),(0,n.jsx)(i.z,{onClick:f,className:"absolute top-0 right-0 border border-l-0 rounded-s-none",variant:"secondary",children:(0,n.jsx)(o.Z,{})})]}):(0,n.jsx)(i.z,{onClick:f,variant:"outline",children:(0,n.jsx)(o.Z,{className:"w-4 h-4"})})}},6956:function(e,t,r){"use strict";r.d(t,{$8:function(){return l},h8:function(){return i},kS:function(){return o},x4:function(){return a},z2:function(){return s}});var n=r(3375);async function a(e){let{email:t,password:r}=e,n=new URLSearchParams;n.append("email",t),n.append("password",r);let a=await fetch("./php/auth.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n.toString()});if(!a.ok&&403!==a.status)return Error("Impossibile effettuare il login, riprova pi\xf9 tardi");let{sessionID:s,access:i}=await a.json();return"granted"!==i?Error("Credenziali non valide"):"granted"===i?s:void 0}async function s(e){let{name:t,surname:r,email:n,password:a}=e;if(!l())return Error("Impossibile creare un utente senza essere loggato");let s=new URLSearchParams;s.append("nome",t),s.append("cognome",r),s.append("email",n),s.append("password",a);let i=await fetch("./php/createUser.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:s.toString()});if(!i.ok)return Error("Impossibile creare l'utente, riprova pi\xf9 tardi");let{result:o,error:d}=await i.json();return"failure"===o?"effettuare il login prima"===d?Error("Impossibile creare l'utente, effettua il login"):Error("Impossibile creare l'utente, riprova pi\xf9 tardi"):"success"===o?{result:o,error:d}:Error(JSON.stringify({result:o,error:d}))}async function i(e){let{name:t,surname:r}=e;if(!l())return Error("Impossibile rimuovere un utente senza essere loggato");let n=new URLSearchParams;n.append("nome",t),n.append("cognome",r);let a=await fetch("./php/deleteUser.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n.toString()});if(!a.ok)return Error("Errore nella risposta");let{result:s,error:i}=await a.json();return"user not found"===i||"missing id"===i?Error("Utente non trovato"):"effettuare prima il login"===i?Error("Effettua il login"):"success"===s||Error("Errore nella risposta")}function o(){return(0,n.deleteCookie)("PHPSESSID")}function l(){return!!(0,n.getCookie)("PHPSESSID")}},7114:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(2265);function a(e){let{query:t=""}=e,[r,a]=(0,n.useState)(!0),[s,i]=(0,n.useState)(null),[o,l]=(0,n.useState)(null);return(0,n.useEffect)(()=>{(async()=>{a(!0),i(null);try{let e=await fetch("./php/datiHome.php?".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Failed to fetch videos");let r=await e.json();l(r.map(e=>({title:e.titolo,description:e.descrizione,duration:e.durata,author:e.autore,link:e.link,thumbnail:e.image,language:e.lingua}))),i(null)}catch(e){i("".concat(e.message,", please try again"))}a(!1)})()},[t]),{loading:r,error:s,data:o}}},9745:function(e,t,r){"use strict";r.d(t,{default:function(){return f}});var n=r(7437),a=r(6463),s=r(2265),i=r(6956);let o=["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],l=["./php/createVideo.php","./php/createUser.php","./php/deleteVideo.php","./php/deleteUser.php"],d=["./php/auth.php","./php/datiHome.php"],c=["./nuovo-video","./nuovo-utente","./rimuovi-video","./rimuovi-utente"],u=["./accedi"],m=(0,s.createContext)({});function f(e){let{children:t}=e,r=(0,a.useRouter)(),f=(0,a.usePathname)(),[p,h]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{h(!0),function(e){let{pathname:t,router:r}=e,n=(0,i.$8)(),a=l.some(e=>t.match(e)),s=(d.some(e=>t.startsWith(e)),c.some(e=>t.match(e))),m=u.some(e=>t.match(e));!n&&(a||s)?r.push("./accedi"):m&&n?r.push("./"):o.some(e=>t.match(e))}({pathname:f,router:r}),h(!1)},[r,f]),(0,n.jsx)(m.Provider,{value:{waitingRouting:p},children:!p&&t})}},7440:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var n=r(4839),a=r(6164);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}},4609:function(e,t,r){"use strict";r.d(t,{Tx:function(){return i},bt:function(){return s},ph:function(){return l},pj:function(){return a},yQ:function(){return o}});var n=r(9772);let a=n.Ry({email:n.Z_().email({message:"Email non valida"}),password:n.Z_().min(8,{message:"Password non valida"}),code:n.jt(n.Z_())}),s=n.Ry({title:n.jt(n.Z_()),desc:n.jt(n.Z_()),author:n.jt(n.Z_()),duration:n.Z_().min(1,{message:"Inserisci la durata"}).time({message:"Inserisci un tempo valido"}),img:n.Z_().url({message:"Inserisci un url valido"}).optional().or(n.i0("")),url:n.Z_().url({message:"Inserisci un url valido"}),lang:n.Z_().min(1,{message:"Inserisci la lingua"}),subject:n.Z_().min(1,{message:"Inserisci la materia"}),topic:n.Z_().min(1,{message:"Inserisci l'argomento"})}),i=n.Ry({name:n.Z_().min(1,{message:"Inserisci il nome"}),surname:n.Z_().min(1,{message:"Inserisci il cognome"}),email:n.Z_().email({message:"Email non valida"}),password:n.Z_().min(8,{message:"Password non valida"})}),o=n.Ry({idx:n.IX(n.Rx()).min(1,{message:"Seleziona almeno un elemento"})}),l=n.Ry({name:n.Z_().min(1,{message:"Inserisci il nome"}),surname:n.Z_().min(1,{message:"Inserisci il cognome"})})}},function(e){e.O(0,[353,336,631,304,31,971,23,744],function(){return e(e.s=212)}),_N_E=e.O()}]);