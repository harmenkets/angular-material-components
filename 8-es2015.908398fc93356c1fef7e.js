(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{QQ8R:function(e,t,n){"use strict";n.r(t),n.d(t,"DemoDatetimeModule",function(){return H});var o=n("ofXK"),a=n("3Pt+"),i=n("bTqV"),b=n("Wp6s"),c=n("bSwM"),r=n("iadO"),d=n("NFeN"),l=n("qFsG"),s=n("QibW"),p=n("d3UM"),u=n("tyNb"),m=n("PiuI"),g=n("fXoL"),h=n("wZkO"),R=n("DScz"),v=n("kmnG"),Q=n("WLxu"),f=n("FBEc"),M=n("FKr1");const x=["picker"];function w(e,t){if(1&e&&(g.Rb(0,"mat-radio-button",26),g.vc(1),g.Qb()),2&e){const e=t.$implicit;g.ic("value",e.value),g.Bb(1),g.xc(" ",e.label,"")}}function C(e,t){if(1&e&&(g.Rb(0,"mat-radio-button",26),g.vc(1),g.Qb()),2&e){const e=t.$implicit;g.ic("value",e.value),g.Bb(1),g.xc(" ",e.label,"")}}function D(e,t){if(1&e&&(g.Rb(0,"mat-radio-button",26),g.vc(1),g.Qb()),2&e){const e=t.$implicit;g.ic("value",e.value),g.Bb(1),g.xc(" ",e.label,"")}}function O(e,t){if(1&e&&(g.Rb(0,"mat-radio-button",26),g.vc(1),g.Qb()),2&e){const e=t.$implicit;g.ic("value",e.value),g.Bb(1),g.xc(" ",e.label,"")}}function k(e,t){if(1&e&&(g.Rb(0,"mat-radio-button",26),g.vc(1),g.Qb()),2&e){const e=t.$implicit;g.ic("value",e.value),g.Bb(1),g.xc(" ",e.label,"")}}function _(e,t){if(1&e&&(g.Rb(0,"mat-radio-button",26),g.vc(1),g.Qb()),2&e){const e=t.$implicit;g.ic("value",e.value),g.Bb(1),g.xc(" ",e.label,"")}}function S(e,t){if(1&e&&(g.Rb(0,"mat-radio-button",26),g.vc(1),g.Qb()),2&e){const e=t.$implicit;g.ic("value",e.value),g.Bb(1),g.xc(" ",e.label,"")}}function y(e,t){if(1&e&&(g.Rb(0,"mat-option",27),g.vc(1),g.Qb()),2&e){const e=t.$implicit;g.ic("value",e),g.Bb(1),g.xc(" ",e," ")}}function P(e,t){if(1&e&&(g.Rb(0,"mat-option",27),g.vc(1),g.Qb()),2&e){const e=t.$implicit;g.ic("value",e),g.Bb(1),g.xc(" ",e," ")}}function B(e,t){if(1&e&&(g.Rb(0,"mat-option",27),g.vc(1),g.Qb()),2&e){const e=t.$implicit;g.ic("value",e),g.Bb(1),g.xc(" ",e," ")}}function T(e,t){if(1&e&&(g.Rb(0,"mat-option",27),g.vc(1),g.Qb()),2&e){const e=t.$implicit;g.ic("value",e),g.Bb(1),g.xc(" ",e," ")}}function N(e,t){1&e&&(g.Rb(0,"span"),g.vc(1,"OK"),g.Qb())}let A=(()=>{class e{constructor(){this.disabled=!1,this.showSpinners=!0,this.showSeconds=!1,this.touchUi=!1,this.enableMeridian=!1,this.stepHour=1,this.stepMinute=1,this.stepSecond=1,this.color="primary",this.disableMinute=!1,this.hideTime=!1,this.dateControl=new a.e(null),this.options=[{value:!0,label:"True"},{value:!1,label:"False"}],this.listColors=["primary","accent","warn"],this.stepHours=[1,2,3,4,5],this.stepMinutes=[1,5,10,15,20,25],this.stepSeconds=[1,5,10,15,20,25],this.code1="npm install --save @angular-material-components/datetime-picker",this.code3='<mat-form-field>\n  <input matInput [ngxMatDatetimePicker]="picker" placeholder="Choose a date" [formControl]="dateControl"\n    [min]="minDate" [max]="maxDate" [disabled]="disabled">\n  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>\n  <ngx-mat-datetime-picker #picker [showSpinners]="showSpinners" [showSeconds]="showSeconds" [stepHour]="stepHour"\n    [stepMinute]="stepMinute" [stepSecond]="stepSecond" [touchUi]="touchUi" [color]="color"\n    [enableMeridian]="enableMeridian" [disableMinute]="disableMinute" [hideTime]="hideTime">\n    \x3c!-- Custom icon or text of Apply icon --\x3e\n    <ng-template>\n      \x3c!-- <mat-icon>star</mat-icon> --\x3e\n      <span>OK</span>\n    </ng-template>\n  </ngx-mat-datetime-picker>\n</mat-form-field>',this.code2="import {\n           NgxMatDatetimePickerModule, \n           NgxMatNativeDateModule, \n           NgxMatTimepickerModule \n  } from '@angular-material-components/datetime-picker';\n  \n@NgModule({\n  imports: [\n    ...\n    NgxMatDatetimePickerModule,\n    NgxMatTimepickerModule,\n    NgxMatNativeDateModule,\n    ...\n  ]\n})\nexport class AppModule { }",this.code4="npm install --save  @angular-material-components/moment-adapter",this.code5="@Injectable()\nexport class CustomDateAdapter extends NgxMatDateAdapter<D> {...}\n// D can be Date, Moment or customized type",this.code6="@NgModule({\n  providers: [\n    {\n      provide: NgxMatDateAdapter,\n      useClass: CustomDateAdapter,\n      deps: [MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS]\n    }\n  ],\n})\nexport class CustomDateModule { }",this.code7='// If using Moment\nconst CUSTOM_DATE_FORMATS: NgxMatDateFormats = {\n  parse: {\n    dateInput: "l, LTS"\n  },\n  display: {\n    dateInput: "l, LTS",\n    monthYearLabel: "MMM YYYY",\n    dateA11yLabel: "LL",\n    monthYearA11yLabel: "MMMM YYYY"\n  }\n};\n\n//and in the module providers \nproviders: [\n    { provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_MOMENT_FORMATS }\n  ]',this.code8='<link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block" rel="stylesheet">',this.code9='<mat-form-field>\n  <input matInput [ngxMatDatetimePicker]="picker" placeholder="Choose a date" [formControl]="dateControl"\n    [min]="minDate" [max]="maxDate" [disabled]="disabled">\n  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>\n  <ngx-mat-datetime-picker #picker [showSpinners]="showSpinners" [showSeconds]="showSeconds" [stepHour]="stepHour"\n    [stepMinute]="stepMinute" [stepSecond]="stepSecond" [touchUi]="touchUi" [color]="color"\n    [enableMeridian]="enableMeridian" [disableMinute]="disableMinute" [hideTime]="hideTime">\n    \x3c!-- Custom icon or text of Apply icon --\x3e\n    <ng-template>\n      \x3c!-- <mat-icon>star</mat-icon> --\x3e\n      <span>OK</span>\n    </ng-template>\n  </ngx-mat-datetime-picker>\n</mat-form-field>'}ngOnInit(){}toggleMinDate(e){e.checked?this._setMinDate():this.minDate=null}toggleMaxDate(e){e.checked?this._setMaxDate():this.maxDate=null}closePicker(){this.picker.cancel()}_setMinDate(){const e=new Date;this.minDate=new Date,this.minDate.setDate(e.getDate()-1)}_setMaxDate(){const e=new Date;this.maxDate=new Date,this.maxDate.setDate(e.getDate()+1)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=g.Gb({type:e,selectors:[["app-demo-datetime"]],viewQuery:function(e,t){if(1&e&&g.yc(x,3),2&e){let e;g.mc(e=g.ac())&&(t.picker=e.first)}},decls:342,vars:67,consts:[["label","API"],["href","https://www.npmjs.com/package/@angular-material-components/datetime-picker","target","_blank"],["src","https://badge.fury.io/js/%40angular-material-components%2Fdatetime-picker.svg"],["ngxMatHighlight","",1,"language-typescript"],[1,"api-table-properties"],["href","https://www.npmjs.com/package/@angular-material-components/moment-adapter"],["ngxMatHighlight","",1,"language-html"],["href","https://material.angular.io/guide/theming#using-a-pre-built-theme"],["ngxMatHighlight","",1,"language-css"],["label","Example"],[1,"zone","zone-value"],[1,"zone","zone-picker"],["matInput","","placeholder","Choose a date",3,"ngxMatDatetimePicker","formControl","min","max","disabled"],["matSuffix","",3,"for"],[3,"showSpinners","showSeconds","stepHour","stepMinute","stepSecond","touchUi","color","enableMeridian","disableMinute","hideTime"],["picker",""],[1,"zone","zone-config"],[1,"config-wrapper"],[1,"label"],["aria-label","Select an option",3,"ngModel","ngModelChange"],["class","example-radio-button",3,"value",4,"ngFor","ngForOf"],[1,"config-wrapper","config-wrapper_step"],[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"change"],["pickerCustomIcon",""],[1,"example-radio-button",3,"value"],[3,"value"]],template:function(e,t){if(1&e&&(g.Rb(0,"mat-tab-group"),g.Rb(1,"mat-tab",0),g.Rb(2,"h1"),g.vc(3,"API reference for @angular-material-components/datetime-picker"),g.Qb(),g.Rb(4,"h2"),g.vc(5,"Getting started"),g.Qb(),g.Rb(6,"a",1),g.Nb(7,"img",2),g.Qb(),g.Rb(8,"pre"),g.Rb(9,"code"),g.vc(10),g.Qb(),g.Qb(),g.Rb(11,"h2"),g.vc(12,"Setup"),g.Qb(),g.Rb(13,"pre"),g.vc(14,"      "),g.Rb(15,"code",3),g.vc(16),g.Qb(),g.vc(17,"\n    "),g.Qb(),g.Rb(18,"h2"),g.vc(19,"Properties @Input"),g.Qb(),g.Rb(20,"table",4),g.Rb(21,"tbody"),g.Rb(22,"tr"),g.Rb(23,"th"),g.vc(24,"Name"),g.Qb(),g.Rb(25,"th"),g.vc(26,"Type"),g.Qb(),g.Rb(27,"th"),g.vc(28,"Default value"),g.Qb(),g.Rb(29,"th"),g.vc(30,"Description"),g.Qb(),g.Qb(),g.Rb(31,"tr"),g.Rb(32,"td"),g.Rb(33,"div"),g.vc(34,"disabled"),g.Qb(),g.Qb(),g.Rb(35,"td"),g.vc(36,"boolean"),g.Qb(),g.Rb(37,"td"),g.vc(38,"null"),g.Qb(),g.Rb(39,"td"),g.Rb(40,"p"),g.vc(41,"If true, the picker is readonly and can't be modified"),g.Qb(),g.Qb(),g.Qb(),g.Rb(42,"tr"),g.Rb(43,"td"),g.Rb(44,"div"),g.vc(45,"showSpinners"),g.Qb(),g.Qb(),g.Rb(46,"td"),g.vc(47,"boolean"),g.Qb(),g.Rb(48,"td"),g.vc(49,"true"),g.Qb(),g.Rb(50,"td"),g.Rb(51,"p"),g.vc(52,"If true, the spinners above and below input are visible "),g.Qb(),g.Qb(),g.Qb(),g.Rb(53,"tr"),g.Rb(54,"td"),g.Rb(55,"div"),g.vc(56,"showSeconds"),g.Qb(),g.Qb(),g.Rb(57,"td"),g.vc(58,"boolean"),g.Qb(),g.Rb(59,"td"),g.vc(60,"true"),g.Qb(),g.Rb(61,"td"),g.Rb(62,"p"),g.vc(63,"If true, it is not possible to select seconds "),g.Qb(),g.Qb(),g.Qb(),g.Rb(64,"tr"),g.Rb(65,"td"),g.Rb(66,"div"),g.vc(67,"disableMinute"),g.Qb(),g.Qb(),g.Rb(68,"td"),g.vc(69,"boolean"),g.Qb(),g.Rb(70,"td"),g.vc(71,"false"),g.Qb(),g.Rb(72,"td"),g.Rb(73,"p"),g.vc(74,"If true, the minute is readonly "),g.Qb(),g.Qb(),g.Qb(),g.Rb(75,"tr"),g.Rb(76,"td"),g.Rb(77,"div"),g.vc(78,"defaultTime"),g.Qb(),g.Qb(),g.Rb(79,"td"),g.vc(80,"Array"),g.Qb(),g.Rb(81,"td"),g.vc(82,"undefined"),g.Qb(),g.Rb(83,"td"),g.Rb(84,"p"),g.vc(85,"An array [hour, minute, second] for default time when the date is not yet defined "),g.Qb(),g.Qb(),g.Qb(),g.Rb(86,"tr"),g.Rb(87,"td"),g.Rb(88,"div"),g.vc(89,"stepHour"),g.Qb(),g.Qb(),g.Rb(90,"td"),g.vc(91,"number"),g.Qb(),g.Rb(92,"td"),g.vc(93,"1"),g.Qb(),g.Rb(94,"td"),g.Rb(95,"p"),g.vc(96,"The number of hours to add/substract when clicking hour spinners "),g.Qb(),g.Qb(),g.Qb(),g.Rb(97,"tr"),g.Rb(98,"td"),g.Rb(99,"div"),g.vc(100,"stepMinute"),g.Qb(),g.Qb(),g.Rb(101,"td"),g.vc(102,"number"),g.Qb(),g.Rb(103,"td"),g.vc(104,"1"),g.Qb(),g.Rb(105,"td"),g.Rb(106,"p"),g.vc(107,"The number of minutes to add/substract when clicking minute spinners "),g.Qb(),g.Qb(),g.Qb(),g.Rb(108,"tr"),g.Rb(109,"td"),g.Rb(110,"div"),g.vc(111,"stepSecond"),g.Qb(),g.Qb(),g.Rb(112,"td"),g.vc(113,"number"),g.Qb(),g.Rb(114,"td"),g.vc(115,"1"),g.Qb(),g.Rb(116,"td"),g.Rb(117,"p"),g.vc(118,"The number of seconds to add/substract when clicking second spinners "),g.Qb(),g.Qb(),g.Qb(),g.Rb(119,"tr"),g.Rb(120,"td"),g.Rb(121,"div"),g.vc(122,"color"),g.Qb(),g.Qb(),g.Rb(123,"td"),g.vc(124,"ThemePalette"),g.Qb(),g.Rb(125,"td"),g.vc(126,"undefined"),g.Qb(),g.Rb(127,"td"),g.Rb(128,"p"),g.vc(129,"Color palette to use on the datepicker's calendar "),g.Qb(),g.Qb(),g.Qb(),g.Rb(130,"tr"),g.Rb(131,"td"),g.Rb(132,"div"),g.vc(133,"enableMeridian"),g.Qb(),g.Qb(),g.Rb(134,"td"),g.vc(135,"boolean"),g.Qb(),g.Rb(136,"td"),g.vc(137,"false"),g.Qb(),g.Rb(138,"td"),g.Rb(139,"p"),g.vc(140,"Whether to display 12H or 24H mode "),g.Qb(),g.Qb(),g.Qb(),g.Rb(141,"tr"),g.Rb(142,"td"),g.Rb(143,"div"),g.vc(144,"hideTime"),g.Qb(),g.Qb(),g.Rb(145,"td"),g.vc(146,"boolean"),g.Qb(),g.Rb(147,"td"),g.vc(148,"false"),g.Qb(),g.Rb(149,"td"),g.Rb(150,"p"),g.vc(151,"If true, the time is hidden "),g.Qb(),g.Qb(),g.Qb(),g.Rb(152,"tr"),g.Rb(153,"td"),g.Rb(154,"div"),g.vc(155,"touchUi"),g.Qb(),g.Qb(),g.Rb(156,"td"),g.vc(157,"boolean"),g.Qb(),g.Rb(158,"td"),g.vc(159,"false"),g.Qb(),g.Rb(160,"td"),g.Rb(161,"p"),g.vc(162,"Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather than a popup and elements have more padding to allow for bigger touch targets. "),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Rb(163,"h2"),g.vc(164,"Choosing a date implementation and date format settings "),g.Qb(),g.Rb(165,"p"),g.vc(166,"The datepicker was built to be date implementation agnostic. This means that it can be made to work with a variety of different date implementations. However it also means that developers need to make sure to provide the appropriate pieces for the datepicker to work with their chosen implementation."),g.Qb(),g.Rb(167,"p"),g.vc(168,"The easiest way to ensure this is to import one of the provided date modules:"),g.Qb(),g.Rb(169,"table",4),g.Rb(170,"tbody"),g.Rb(171,"tr"),g.Nb(172,"th"),g.Rb(173,"th"),g.vc(174,"NgxMatNativeDateModule"),g.Qb(),g.Rb(175,"th"),g.vc(176,"NgxMatMomentModule"),g.Qb(),g.Qb(),g.Rb(177,"tr"),g.Rb(178,"td"),g.vc(179,"Date type "),g.Qb(),g.Rb(180,"td"),g.vc(181,"Date"),g.Qb(),g.Rb(182,"td"),g.vc(183,"Moment"),g.Qb(),g.Qb(),g.Rb(184,"tr"),g.Rb(185,"td"),g.vc(186,"Dependencies"),g.Qb(),g.Rb(187,"td"),g.vc(188,"None"),g.Qb(),g.Rb(189,"td"),g.vc(190,"Moment.js"),g.Qb(),g.Qb(),g.Rb(191,"tr"),g.Rb(192,"td"),g.vc(193,"Import from "),g.Qb(),g.Rb(194,"td"),g.vc(195,"@angular-material-components/datetime-picker"),g.Qb(),g.Rb(196,"td"),g.Rb(197,"a",5),g.vc(198,"@angular-material-components/moment-adapter"),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.vc(199," To use "),g.Rb(200,"strong"),g.vc(201,"NgxMatMomentModule"),g.Qb(),g.vc(202,": "),g.Rb(203,"pre"),g.Rb(204,"code"),g.vc(205),g.Qb(),g.Qb(),g.Rb(206,"p"),g.vc(207,"Please note: "),g.Rb(208,"strong"),g.vc(209,"NgxMatNativeDateModule"),g.Qb(),g.vc(210," is based off the functionality available in JavaScript's native Date object. Thus it is not suitable for many locales. One of the biggest shortcomings of the native Date object is the inability to set the parse format."),g.Qb(),g.Rb(211,"p"),g.vc(212,"We highly recommend using the "),g.Rb(213,"strong"),g.vc(214,"NgxMatMomentModule"),g.Qb(),g.vc(215," or a custom "),g.Rb(216,"strong"),g.vc(217,"NgxMatDateAdapter"),g.Qb(),g.vc(218," that works with the formatting/parsing library of your choice."),g.Qb(),g.vc(219," For example: Creating a custom date adapter "),g.Rb(220,"pre"),g.Rb(221,"code",3),g.vc(222),g.Qb(),g.Qb(),g.vc(223," Creating a custom date adapter module "),g.Rb(224,"pre"),g.Rb(225,"code",3),g.vc(226),g.Qb(),g.Qb(),g.vc(227," You can also customize the date format by providing your custom "),g.Rb(228,"strong"),g.vc(229,"NGX_MAT_DATE_FORMATS"),g.Qb(),g.vc(230," in your module. "),g.Rb(231,"pre"),g.Rb(232,"code",3),g.vc(233),g.Qb(),g.Qb(),g.Rb(234,"h2"),g.vc(235,"Custom icon or text for Apply button"),g.Qb(),g.Rb(236,"pre"),g.Rb(237,"code",6),g.vc(238),g.Qb(),g.Qb(),g.Rb(239,"h2"),g.vc(240,"Theming"),g.Qb(),g.Rb(241,"p"),g.vc(242,"@see @angular/material "),g.Rb(243,"a",7),g.vc(244,"Using a pre-built theme"),g.Qb(),g.Qb(),g.Rb(245,"p"),g.vc(246,"Add the Material Design icon font to your index.html"),g.Qb(),g.Rb(247,"pre"),g.Rb(248,"code",8),g.vc(249),g.Qb(),g.Qb(),g.Qb(),g.Rb(250,"mat-tab",9),g.Rb(251,"mat-card",10),g.vc(252),g.Qb(),g.Rb(253,"mat-card",11),g.Rb(254,"mat-form-field"),g.Nb(255,"input",12),g.Nb(256,"mat-datepicker-toggle",13),g.Nb(257,"ngx-mat-datetime-picker",14,15),g.Qb(),g.Qb(),g.Rb(259,"mat-card",16),g.Rb(260,"div",17),g.Rb(261,"span",18),g.vc(262,"disabled (Default: false) "),g.Qb(),g.Rb(263,"mat-radio-group",19),g.Zb("ngModelChange",function(e){return t.disabled=e}),g.uc(264,w,2,2,"mat-radio-button",20),g.Qb(),g.Qb(),g.Rb(265,"div",17),g.Rb(266,"span",18),g.vc(267,"showSpinners (Default: true) "),g.Qb(),g.Rb(268,"mat-radio-group",19),g.Zb("ngModelChange",function(e){return t.showSpinners=e}),g.uc(269,C,2,2,"mat-radio-button",20),g.Qb(),g.Qb(),g.Rb(270,"div",17),g.Rb(271,"span",18),g.vc(272,"showSeconds (Default: false) "),g.Qb(),g.Rb(273,"mat-radio-group",19),g.Zb("ngModelChange",function(e){return t.showSeconds=e}),g.uc(274,D,2,2,"mat-radio-button",20),g.Qb(),g.Qb(),g.Rb(275,"div",17),g.Rb(276,"span",18),g.vc(277,"disableMinute (Default: false) "),g.Qb(),g.Rb(278,"mat-radio-group",19),g.Zb("ngModelChange",function(e){return t.disableMinute=e}),g.uc(279,O,2,2,"mat-radio-button",20),g.Qb(),g.Qb(),g.Rb(280,"div",17),g.Rb(281,"span",18),g.vc(282,"touchUi (Default: false) "),g.Qb(),g.Rb(283,"mat-radio-group",19),g.Zb("ngModelChange",function(e){return t.touchUi=e}),g.uc(284,k,2,2,"mat-radio-button",20),g.Qb(),g.Qb(),g.Rb(285,"div",17),g.Rb(286,"span",18),g.vc(287,"hideTime (Default: false) "),g.Qb(),g.Rb(288,"mat-radio-group",19),g.Zb("ngModelChange",function(e){return t.hideTime=e}),g.uc(289,_,2,2,"mat-radio-button",20),g.Qb(),g.Qb(),g.Rb(290,"div",17),g.Rb(291,"span",18),g.vc(292,"enableMeridian (Default: false) "),g.Qb(),g.Rb(293,"mat-radio-group",19),g.Zb("ngModelChange",function(e){return t.enableMeridian=e}),g.uc(294,S,2,2,"mat-radio-button",20),g.Qb(),g.Qb(),g.Rb(295,"div",21),g.Rb(296,"span",18),g.vc(297,"steps "),g.Qb(),g.Rb(298,"mat-form-field"),g.Rb(299,"mat-label"),g.vc(300,"hour (default: 1)"),g.Qb(),g.Rb(301,"mat-select",22),g.Zb("ngModelChange",function(e){return t.stepHour=e}),g.uc(302,y,2,2,"mat-option",23),g.Qb(),g.Qb(),g.Rb(303,"mat-form-field"),g.Rb(304,"mat-label"),g.vc(305,"minute (default: 1)"),g.Qb(),g.Rb(306,"mat-select",22),g.Zb("ngModelChange",function(e){return t.stepMinute=e}),g.uc(307,P,2,2,"mat-option",23),g.Qb(),g.Qb(),g.Rb(308,"mat-form-field"),g.Rb(309,"mat-label"),g.vc(310,"second (default: 1)"),g.Qb(),g.Rb(311,"mat-select",22),g.Zb("ngModelChange",function(e){return t.stepSecond=e}),g.uc(312,B,2,2,"mat-option",23),g.Qb(),g.Qb(),g.Qb(),g.Rb(313,"div",17),g.Rb(314,"span",18),g.vc(315,"color (Default: primary) "),g.Qb(),g.Rb(316,"mat-form-field"),g.Rb(317,"mat-label"),g.vc(318,"Select color"),g.Qb(),g.Rb(319,"mat-select",22),g.Zb("ngModelChange",function(e){return t.color=e}),g.uc(320,T,2,2,"mat-option",23),g.Qb(),g.Qb(),g.Qb(),g.Rb(321,"div",17),g.Rb(322,"mat-checkbox",24),g.Zb("change",function(e){return t.toggleMinDate(e)}),g.vc(323),g.Qb(),g.Qb(),g.Rb(324,"div",17),g.Rb(325,"mat-checkbox",24),g.Zb("change",function(e){return t.toggleMaxDate(e)}),g.vc(326),g.Qb(),g.Qb(),g.Qb(),g.Rb(327,"pre"),g.Rb(328,"code",6),g.vc(329),g.Qb(),g.Qb(),g.Rb(330,"h2"),g.vc(331,"Custom icon or text for Apply button"),g.Qb(),g.Rb(332,"pre"),g.Rb(333,"code",6),g.vc(334),g.Qb(),g.Qb(),g.Rb(335,"mat-card",11),g.Rb(336,"mat-form-field"),g.Nb(337,"input",12),g.Nb(338,"mat-datepicker-toggle",13),g.Rb(339,"ngx-mat-datetime-picker",14,25),g.uc(341,N,2,0,"ng-template"),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb()),2&e){const e=g.nc(258),n=g.nc(340);g.Bb(10),g.wc(t.code1),g.Bb(6),g.xc("",t.code2,"\n      "),g.Bb(189),g.wc(t.code4),g.Bb(17),g.wc(t.code5),g.Bb(4),g.wc(t.code6),g.Bb(7),g.wc(t.code7),g.Bb(5),g.wc(t.code9),g.Bb(11),g.wc(t.code8),g.Bb(3),g.xc(" Selected date: ",null==t.dateControl.value?null:t.dateControl.value.toLocaleString()," "),g.Bb(3),g.ic("ngxMatDatetimePicker",e)("formControl",t.dateControl)("min",t.minDate)("max",t.maxDate)("disabled",t.disabled),g.Bb(1),g.ic("for",e),g.Bb(1),g.ic("showSpinners",t.showSpinners)("showSeconds",t.showSeconds)("stepHour",t.stepHour)("stepMinute",t.stepMinute)("stepSecond",t.stepSecond)("touchUi",t.touchUi)("color",t.color)("enableMeridian",t.enableMeridian)("disableMinute",t.disableMinute)("hideTime",t.hideTime),g.Bb(6),g.ic("ngModel",t.disabled),g.Bb(1),g.ic("ngForOf",t.options),g.Bb(4),g.ic("ngModel",t.showSpinners),g.Bb(1),g.ic("ngForOf",t.options),g.Bb(4),g.ic("ngModel",t.showSeconds),g.Bb(1),g.ic("ngForOf",t.options),g.Bb(4),g.ic("ngModel",t.disableMinute),g.Bb(1),g.ic("ngForOf",t.options),g.Bb(4),g.ic("ngModel",t.touchUi),g.Bb(1),g.ic("ngForOf",t.options),g.Bb(4),g.ic("ngModel",t.hideTime),g.Bb(1),g.ic("ngForOf",t.options),g.Bb(4),g.ic("ngModel",t.enableMeridian),g.Bb(1),g.ic("ngForOf",t.options),g.Bb(7),g.ic("ngModel",t.stepHour),g.Bb(1),g.ic("ngForOf",t.stepHours),g.Bb(4),g.ic("ngModel",t.stepMinute),g.Bb(1),g.ic("ngForOf",t.stepMinutes),g.Bb(4),g.ic("ngModel",t.stepSecond),g.Bb(1),g.ic("ngForOf",t.stepSeconds),g.Bb(7),g.ic("ngModel",t.color),g.Bb(1),g.ic("ngForOf",t.listColors),g.Bb(3),g.xc(" Min date (Default: null, Demo: now - 1 day) = ",null==t.minDate?null:t.minDate.toLocaleString()," "),g.Bb(3),g.xc(" Max date (Default: null, Demo: now + 2 days) = ",null==t.maxDate?null:t.maxDate.toLocaleString()," "),g.Bb(3),g.wc(t.code3),g.Bb(5),g.wc(t.code9),g.Bb(3),g.ic("ngxMatDatetimePicker",n)("formControl",t.dateControl)("min",t.minDate)("max",t.maxDate)("disabled",t.disabled),g.Bb(1),g.ic("for",n),g.Bb(1),g.ic("showSpinners",t.showSpinners)("showSeconds",t.showSeconds)("stepHour",t.stepHour)("stepMinute",t.stepMinute)("stepSecond",t.stepSecond)("touchUi",t.touchUi)("color",t.color)("enableMeridian",t.enableMeridian)("disableMinute",t.disableMinute)("hideTime",t.hideTime)}},directives:[h.b,h.a,R.a,b.a,v.c,l.b,Q.a,a.c,a.o,a.f,r.f,v.i,f.a,s.b,a.r,o.j,v.g,p.a,c.a,s.a,M.k],styles:[".config-wrapper[_ngcontent-%COMP%]{margin-bottom:15px}.config-wrapper[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700;margin-right:15px}.config-wrapper[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.config-wrapper_step[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:100px}.zone[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}.zone-value[_ngcontent-%COMP%]{font-weight:700}.zone-config[_ngcontent-%COMP%]{flex-direction:column}pre[_ngcontent-%COMP%]{background:rgba(0,0,0,.01);border:.5px solid rgba(0,0,0,.03);border-radius:5px;display:block;overflow-x:auto;padding:20px;white-space:pre-wrap;font-family:Roboto Mono,monospace}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:transparent;padding:0;font-size:100%}.api-table-properties[_ngcontent-%COMP%]{text-align:left;border-radius:2px;border-spacing:0;margin:0 0 32px;width:100%;box-shadow:0 2px 2px rgba(0,0,0,.24),0 0 2px rgba(0,0,0,.12);border-collapse:collapse;border-spacing:2px;border-color:grey}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{display:table-row-group;vertical-align:middle}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.03);padding:8px 16px}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{font-weight:700}.table[_ngcontent-%COMP%]{border-collapse:collapse;margin-bottom:30px;height:250px}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #ddd;padding:8px}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:12px;padding-bottom:12px;text-align:left;color:#fff}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-of-type{background-color:#268fa7}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-of-type{background-color:#8a178c}"]}),e})();var F=n("M0ag");const I=[{path:"",component:A}];let H=(()=>{class e{}return e.\u0275mod=g.Kb({type:e}),e.\u0275inj=g.Jb({factory:function(t){return new(t||e)},providers:[{provide:v.b,useValue:{appearance:"fill"}}],imports:[[o.b,u.c.forChild(I),r.e,l.c,m.a,m.c,a.j,a.t,i.c,m.b,s.c,p.b,c.b,d.b,b.b,F.a]]}),e})()}}]);