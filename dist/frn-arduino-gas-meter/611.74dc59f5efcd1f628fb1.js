(self.webpackChunkfrn_arduino_gas_meter=self.webpackChunkfrn_arduino_gas_meter||[]).push([[611],{7611:(t,e,a)=>{"use strict";a.r(e),a.d(e,{MetersModule:()=>v});var s=a(8583),o=a(5256),c=a(6823),r=a(7716),n=a(9853),i=a(2789),l=a(1095);function d(t,e){1&t&&(r.TgZ(0,"th",9),r._uU(1," ID "),r.qZA())}function u(t,e){if(1&t&&(r.TgZ(0,"td",10),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.hij(" ",t.id_mq135," ")}}function h(t,e){1&t&&(r.TgZ(0,"th",9),r._uU(1," Registro "),r.qZA())}function p(t,e){if(1&t&&(r.TgZ(0,"td",10),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.hij(" ",t.data_mq135," ")}}function m(t,e){1&t&&(r.TgZ(0,"th",9),r._uU(1," Fecha "),r.qZA())}function g(t,e){if(1&t&&(r.TgZ(0,"td",10),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.hij(" ",t.date_mq135," ")}}function f(t,e){1&t&&(r.TgZ(0,"th",9),r._uU(1," Actions. "),r.qZA())}const Z=function(t){return["./edit/",t]};function b(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"td",10),r.TgZ(1,"button",11),r._uU(2,"Editar"),r.qZA(),r.TgZ(3,"button",12),r.NdJ("click",function(){const e=r.CHM(t).$implicit;return r.oxw().deleteRecord(e.id)}),r._uU(4,"Eliminar"),r.qZA(),r.qZA()}if(2&t){const t=e.$implicit;r.xp6(1),r.Q6J("routerLink",r.VKq(1,Z,t.id))}}function x(t,e){1&t&&r._UZ(0,"tr",13)}function R(t,e){1&t&&r._UZ(0,"tr",14)}let w=(()=>{class t{constructor(t){this.gasService=t,this.displayedColumns=["id","log","date","actions"]}ngOnInit(){this.fetchAllRecordsGas(),console.log(this.recordsGas)}fetchAllRecordsGas(){this.gasService.getAllRecordsGas().subscribe(t=>{this.recordsGas=t})}fetchLastRecordGas(){this.gasService.getLastRecordGas().subscribe(t=>{this.lastRecordGas=t}),console.log("this.lastRecordGas: "),console.log(this.lastRecordGas)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(n.Q))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-gas-table"]],decls:15,vars:3,consts:[["mat-table","",1,"mat-elevation-z8","products-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","log"],["matColumnDef","date"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-stroked-button","","color","primary",3,"routerLink"],["mat-raised-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(r.TgZ(0,"table",0),r.ynx(1,1),r.YNc(2,d,2,0,"th",2),r.YNc(3,u,2,1,"td",3),r.BQk(),r.ynx(4,4),r.YNc(5,h,2,0,"th",2),r.YNc(6,p,2,1,"td",3),r.BQk(),r.ynx(7,5),r.YNc(8,m,2,0,"th",2),r.YNc(9,g,2,1,"td",3),r.BQk(),r.ynx(10,6),r.YNc(11,f,2,0,"th",2),r.YNc(12,b,5,3,"td",3),r.BQk(),r.YNc(13,x,1,0,"tr",7),r.YNc(14,R,1,0,"tr",8),r.qZA()),2&t&&(r.Q6J("dataSource",e.recordsGas),r.xp6(13),r.Q6J("matHeaderRowDef",e.displayedColumns),r.xp6(1),r.Q6J("matRowDefColumns",e.displayedColumns))},directives:[i.BZ,i.w1,i.fO,i.Dz,i.as,i.nj,i.ge,i.ev,l.lW,o.rH,i.XQ,i.Gk],styles:[".products-table[_ngcontent-%COMP%]{width:800px;max-width:100%;margin:10px auto}"]}),t})();const _=[{path:"gas",component:(()=>{class t{constructor(t){this.gasService=t,this.chart=null,this.intervalUpdate=null,this.chart1=null}ngOnInit(){this.chart=new c("realtime",{type:"line",data:{labels:[],datasets:[{label:"Data",fill:!1,data:[],backgroundColor:"#168ede",borderColor:"#168ede"}]},options:{tooltips:{enabled:!1},legend:{display:!0,position:"bottom",labels:{fontColor:"white"}},scales:{yAxes:[{ticks:{fontColor:"white"}}],xAxes:[{ticks:{fontColor:"white",beginAtZero:!0}}]}}}),console.log(this.lastRecordGas),this.intervalUpdate=setInterval((function(){this.fetchLastRecordGas()}).bind(this),1500)}ngOnDestroy(){clearInterval(this.intervalUpdate)}fetchAllRecordsGas(){this.gasService.getAllRecordsGas().subscribe(t=>{this.recordsGas=t},t=>{console.error("ERROR: Unexpected response")})}fetchLastRecordGas(){this.gasService.getLastRecordGas().subscribe(t=>{let e=new Date;e=e.getHours()+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":"+(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds()),this.chart.data.labels.length>20&&(this.chart.data.labels.shift(),this.chart.data.datasets[0].data.shift()),this.chart.data.labels.push(e),this.chart.data.datasets[0].data.push(t.data_mq135),this.chart.update(),this.lastRecordGas=t},t=>{console.error("ERROR: Unexpected response")}),console.log("this.lastRecordGas: "),console.log(this.lastRecordGas)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(n.Q))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-gas-meter"]],decls:11,vars:1,consts:[[1,"card"],["id","realtime"],[1,"card-content"]],template:function(t,e){1&t&&(r.TgZ(0,"h1"),r._uU(1,"Medidor gas"),r.qZA(),r.TgZ(2,"div",0),r.TgZ(3,"canvas",1),r._uU(4),r.qZA(),r.TgZ(5,"div",2),r.TgZ(6,"h3"),r._uU(7,"Realtime"),r.qZA(),r.TgZ(8,"p"),r._uU(9,"Esta gr\xe1fica muestra informaci\xf3n en tiempo real"),r.qZA(),r.qZA(),r.qZA(),r._UZ(10,"app-gas-table")),2&t&&(r.xp6(4),r.Oqu(e.chart))},directives:[w],styles:["[_nghost-%COMP%]{display:block;width:100%;text-align:center}.card[_ngcontent-%COMP%]{background-color:#424242;margin:10px auto;border-radius:5px;display:block;width:100%;width:800px;padding:12px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}"]}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[o.Bz.forChild(_)],o.Bz]}),t})();var q=a(5209),C=a(7302);let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[s.ez,A,q.m,C.q]]}),t})()}}]);