!function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return t[n].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){var n=r(1),a=n.addons.Label,i=n.spark,o=(n.pie,n.donut,n.bubble,n.bar,function(t,e){document.getElementsByClassName(t)[0].innerHTML=e}),i=n.spark,s=i({mixin:a}),d=[{data:[494,306,350,389,367,295,281,404,256,378,389,127,214,103,425,99,413,320,204,276,307,107,436,485,227,42,439,167,55,33],strokeColor:"#f2ee2",fill:"#424c2d",scattered:{strokeColor:"#38c98f",fill:"white",strokeWidth:2,radius:3}},{data:[282,336,181,329,209,338,16,215,251,270,49,389,216,218,11,485,145,60,33,299,333,126,464,69,329,257,328,282,247,397],strokeColor:"#ab2ab1",fill:"#be514",scattered:{strokeColor:"#ab2ab1",fill:"white",strokeWidth:2,radius:3}}],u=[{label:"Auto Generated 3",data:[187,292,117,391,250,325,358,236,497,125,132,446,267,86,431,186,13,328,258,88,359,293,127,229,137,422,144,95,397,485],strokeColor:"#ac6583"}],l=s.attr({chart:{width:800,height:100},title:"just a test",data:d}),c=[{data:[36,409,109,245,355,410,257,316,179,19],strokeColor:"red",strokeWidth:2,scattered:{strokeColor:"red",fill:"white",strokeWidth:2,radius:2}},{data:[273,354,307,68,483,70,253,507,325,474],strokeColor:"blue",strokeWidth:2,scattered:{strokeColor:"blue",fill:"white",strokeWidth:2,radius:2}}];o("spark-spark",l);var l=s.attr({chart:{width:800,height:100},title:"just a test",data:u});o("spark-line",l);var l=s.attr({chart:{width:800,height:100,line:!1},title:"just a test",data:d});o("spark-area",l);var l=s.attr({chart:{width:800,height:100},title:"just a test",data:c,yAxis:{multi:!0},xAxis:{format:"dateTime",interval:"4h",minUTC:Date.UTC(2013,8,7),dateTimeLabelFormat:"MM/DD hh ap"}});o("spark-multi",l);var l=s.attr({chart:{width:800,height:100,line:!1,fill:!1,scattered:!0},title:"just a test",data:d});o("spark-scattered",l);var l=s.attr({chart:{width:800,height:100,scattered:!0},title:"just a test",data:c,yAxis:!0,xAxis:{format:"dateTime",interval:"1D",minUTC:Date.UTC(2013,8,7),dateTimeLabelFormat:"MM/DD hh ap"}});o("spark-label-scattered",l)},function(t,e,r){var n=r(2);n.addons=r(3),t.exports=n},function(t,e,r){t.exports=r(4)},function(t,e,r){function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(5),i=n(a),o=r(6),s=n(o),d=r(7),u=n(d);e["default"]={Label:i["default"],ReturnAsObject:s["default"],Events:u["default"]},t.exports=e["default"]},function(t,e,r){function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(8),i=n(a),o=r(9),s=n(o),d=r(10),u=n(d),l=r(11),c=n(l),p=r(12),f=n(p),h=r(13),g=n(h),m=r(14),v=n(m),b=r(15),x=n(b),_=r(16),k=n(_),y=function(t,e){return"object"==typeof e?new(e.mixin?g["default"](g["default"](t,e.mixin),e):g["default"](t,e)):new t(e)};e["default"]={name:"yakojs",VERSION:"0.5.0",spark:function(t){return y(i["default"],t)},line:function(t){return y(k["default"],t)},pie:function(t){return y(s["default"],t)},donut:function(t){return y(u["default"],t)},bar:function(t){return y(c["default"],t)},bubble:{point:function(t){return y(v["default"],t)},scatter:function(t){return y(x["default"],t)}},svg:f["default"]},t.exports=e["default"]},function(t){t.exports={preRender:function(t){var e=this,r=e.attributes.opts,n=r.chart,a=n.xAxis||r.xAxis,i=n.yAxis||r.yAxis,o=[];return i&&o.push(e.describeYAxis(t,i)),a&&o.push(e.describeXAxis(t,a)),{prepend:o}},_getExternalProps:function(t,e,r){if(e&&(t.paddingLeft=t.paddingRight=30),r&&(t.paddingTop=t.paddingBottom=20),!t.pHeight&&e&&(t.pHeight=t.height-t.paddingTop-t.paddingBottom),!t.pWidth&&r&&(t.pWidth=t.width-t.paddingLeft-t.paddingRight),"bar"==t.type&&(t.tickSize=t.pWidth/t.len),"bubble-scattered"==t.type){var n=r.labels?r.labels.length:2;t.tickSize=t.pWidth/n,t.prefLen=n,r.labels||console.warn("Attempting to use labels with `bubble graph` type:scattered, without defining custom labels")}},describeYAxis:function(t,e){var r=this,n=[],a=[],i=rows=t.rows,o=t.max,s=t.ySecs;e=e||{},"bubble-scattered"==t.type&&(o=[o[1]]),e.hasOwnProperty("multi")&&e.multi||(i=rows=1,o instanceof Array||o instanceof Object||(o=[o]),s=[s]);for(var d=t.pHeight,u=t.paddingY||t.paddingTop,l=t.paddingX||t.paddingLeft-5;i--;){var c=r.make("g"),p=fSplits=s[i],f=d/p,h=(i+1)%2===0?t.width-i*l:(i+1)*l;for(a=[],p+=1;p--;)a.push(r.make("text",{y:u+f*p,x:h,"font-size":e.fontSize||12,"text-anchor":(i+1)%2===0?"start":"end",fill:e.color||"#333"},null,o[i]/fSplits*(fSplits-p)));h=(i+1)%2===0?h-5:h+5,a.push(r.make("path",{d:"M"+h+" 0L"+h+" "+(d+u),"stroke-width":"1",stroke:e.multi?t.color[i]:"#c0c0c0",fill:"none",opacity:"1","stroke-linecap":"round"})),n.push(r._append(c,a))}return n},describeXAxis:function(t,e){var r=this,n=r.make("g"),a=[],i=t.pHeight,o=t.tickSize,s=t.paddingX||t.paddingLeft,d=t.paddingY?2*t.paddingY-8:t.paddingTop+t.paddingBottom-8,u=i+d,l="dateTime"==e.format?!0:!1;if(l)var c=e.interval,p=r._utcMultiplier(e.interval),f=(/\d+/.test(c)?c.match(/\d+/)[0]:1,e.dateTimeLabelFormat),h=e.minUTC||t.xAxis.minUTC;var g=1;if("bar"!=t.type&&l||(g=0),"timeSeries"==t.type&&l)for(var o=t.tickSize,m=t.xAxis.maxUTC,v=(m-h)/p,b=0;v>b;b++){var x=p*b*o+s;a.push(r.make("text",{y:u,x:x,"font-size":e.fontSize||12,"text-anchor":e.textAnchor||"middle",fill:e.color||"#333"},null,l?r._formatTimeStamp(f,h+p*b):e.labels[b]||0))}else for(var b=g;b<(t.prefLen||t.len)-g;b++)a.push(r.make("text",{y:u,x:o*b+s+("bar"==t.type?o/4:0),"font-size":e.fontSize||12,"text-anchor":e.textAnchor||("bar"==t.type?"start":"middle"),fill:e.color||"#333"},null,l?r._formatTimeStamp(f,h+p*b):e.labels[b]||0));return a.push(r.make("path",{d:"M"+t.paddingLeft+" "+(u-12)+" L"+(t.width-t.paddingRight)+" "+(u-12),"stroke-width":"1",stroke:"#c0c0c0",fill:"none",opacity:"1","stroke-linecap":"round"})),[r._append(n,a)]},_utcMultiplier:function(t){var e=1e3,r=60,n=60,a=24,i=30,o=12,s=0;return/s$/.test(t)?s=e:/m$/.test(t)?s=r*e:/h$/.test(t)?s=r*n*e:/D$/.test(t)?s=r*n*a*e:/M$/.test(t)?s=r*n*a*i*e:/Y$/.test(t)&&(s=r*n*a*i*o*e),s},_formatTimeStamp:function(t,e){var r=new Date(e);return/YYYY/.test(t)?t=t.replace("YYYY",r.getFullYear()):/YY/.test(t)&&(t=t.replace("YY",r.getFullYear().toString().replace(/^\d{1,2}/,""))),t=/hh/.test(t)&&/ap/.test(t)?r.getHours()>11?t.replace(/hh/,r.getHours()-12===0?12:r.getHours()-12).replace(/ap/,"pm"):t.replace(/hh/,0===r.getHours()?12:r.getHours()).replace(/ap/,"am"):t.replace(/hh/,0===r.getHours()?12:r.getHours()),t=t.replace(/MM/,r.getMonth()+1).replace(/DD/,r.getDate()),t=/mm/.test(t)&&/ss/.test(t)?t.replace(/mm/,1==r.getMinutes().toString().length?"0"+r.getMinutes():r.getMinutes()).replace(/ss/,1==r.getSeconds().toString().length?"0"+r.getSeconds():r.getSeconds()):t.replace(/mm/,r.getMinutes()).replace(/ss/,r.getSeconds())}}},function(t){{var e=function(t){return t instanceof Array};t.exports={make:function(t,e,r,n){var a={};return a[t]=e,n&&(a[t].textContent=n),a},append:function(t,r){if(""===t)return r;e(r)||(r=[r]);var n=Object.keys(t)[0];return e(t)?t[n].push(r):t[n]=r,t}}}},function(t,e,r){var n={hover:["onMouseOver","onMouseLeave"],click:["onClick"],mouseMove:["onMouseMove"],mouseEnter:["onMouseEnter"],mouseOver:["onMouseOver"],mouseOut:["onMouseOut"],mouseUp:["onMouseUp"],mouseLeave:["onMouseLeave"],doubleClick:["onDoubleClick"]},a=function(){},i=r(17),o=r(18),s=r(19);t.exports=i.extend({_events:{},setProps:function(t,e){this._props={scale:t,data:e}},_props:{},_toRegister:{},_emit:function(t){this._associateTriggers(t)},listen:function(t){var e=this;e._element=t,e.hydrate();for(var r=e._toRegister,n=Object.keys(r),a=0;a<n.length;a++)t.addEventListener(n[a].replace("on","").toLowerCase(),r[n[a]],!1)},removeListener:function(){for(var t=this,e=t._element,r=t._toRegister,n=Object.keys(r),a=0;a<n.length;a++)e.removeEventListener(n[a].replace("on","").toLowerCase(),r[n[a]],!1)},on:{},hydrate:function(){for(var t=this,e=Object.keys(t.on),r={},a={},i=0;i<e.length;i++)e[i].replace(/(.*):(.*)/,function(e,i,o){if(n[o])for(var s=0;s<n[o].length;s++){var d=n[o][s],u=d.toLowerCase();r[i+":"+u]=r[i+":"+u]||[],r[i+":"+u].push(o),a[d]=function(e){t._emit(e)}}});t._events=r,t._toRegister=a},_associateTriggers:function(t,e){t=t||window.event;{var r=this,n=r._events,a=r._props,i=[];t.target||t.srcElement}i.push("div"==t.target.tagName.toLowerCase()?"container":t.target.tagName.toLowerCase()),i.push("div"==t.currentTarget.tagName.toLowerCase()?"container":t.currentTarget.tagName.toLowerCase());for(var o=0;o<i.length;o++){var s=n[i[o]+":on"+t.type]||0;if(s)for(var d=0;d<s.length;d++)r._trigger(i[o]+":"+s[d],t,a,e)}},_trigger:function(t,e,r,n){var i=this,d=r.scale;e.nativeEvent=e.nativeEvent||e;var u=e.nativeEvent.offsetX,l=e.nativeEvent.offsetY;n=n||a;var c={};o[d.componentName]?c=o[d.componentName](e,r,u,l):s.eventFeedback(d.componentName||""),i.on[t](e,c),n(c)}})},function(t,e,r){{var n=r(20),a=(r(19),r(21)),i=r(22);t.exports=n.extend({componentName:"spark",_startCycle:function(){var t=this,e=t.attributes.data,r=t.attributes.opts,n=r.chart,a=n.xAxis||r.xAxis,i=n.yAxis||r.yAxis,o=t._append,s=[];return t._isArray(e)||(e=[e]),a&&(n.xAxis=a),i&&(n.yAxis=i),t._lifeCycleManager(e,n,function(r){for(var n=0;n<r.rows;n++){i&&i.multi&&(r.heightRatio=r.pHeight/r.max[n]);var a=t.make("g");s.push(o(a,t._describePath(e[n],r.paddingLeft,r.paddingTop,r,n)))}return s})},_getRatio:function(t){var e=this,r=e.attributes.data;if(0!==t.paddingLeft&&0!==t.paddingRight&&(t.innerPadding=5),!t.xAxis&&!t.yAxis)for(var n=0;n<t.len;n++){var a=r[n],i=0;if("object"==typeof a){var o=a.strokeWidth||2;t.innerPaddingBottom=t.innerPaddingTop<o?o:t.innerPaddingTop}if("object"==typeof a&&a.scattered&&t.scattered){var s=a.scattered;i=(s.strokeWidth?s.strokeWidth:2)+(s.radius?s.radius:2),t.innerPadding=t.innerPadding<i+5?i+5:t.innerPadding,t.innerPaddingBottom=t.innerPadding>t.innerPaddingBottom?t.innerPadding:t.innerPaddingBottom,t.innerPaddingTop=t.innerPaddingBottom}}t.pHeight=t.height-t.paddingTop-t.paddingBottom-t.innerPaddingTop-t.innerPaddingBottom,t.pWidth=t.width-t.paddingLeft-t.paddingRight-t.innerPadding,t.heightRatio=t.pHeight/t.max,t.tickSize=e._sigFigs(t.pWidth/(t.len-1),8)},_describeScatteredGraph:i.describeScatter,_describePath:function(t,e,r,n,i){i=i||0;var o=this,s=a.describeAttributeD(t.data,e,r,n,i),d=o.make("path",{d:s,stroke:t.strokeColor||o._randomColor(),"stroke-width":t.strokeWidth||"3","stroke-linejoin":"round","stroke-linecap":"round",fill:"none"},{_ref:i}),u=[];return t.fill&&n.fill&&u.push(o.make("path",{d:s+a.describeCloseAttributeD(t.data,e,r,n,i),stroke:"none","stroke-width":"2","stroke-linejoin":"round","stroke-linecap":"round",fill:t.fill},{_ref:i})),n.line&&u.push(d),n.scattered&&u.push(o._describeScatteredGraph(t,t.data,e,r,n,i)),u}})}},function(t,e,n){{var a=n(23);t.exports=a.extend({componentName:"pie",_describePath:function(t,e,r){if(!e)return"";var n=[],a=0,i=r.fills||0,o=r.strokeColors||0,s=r.width/2,d=r.height/2,u=this;if(0==r.total)return u.make("path",{"stroke-linecap":"round","stroke-linejoin":"round",stroke:o[l]||r.strokeColor||u._randomColor(),fill:"transparent",d:u._describeEmptyPie(s,d,t)});for(var l=0;l<e.length;l++){var c=a+360*e[l];n.push(u.make("path",{"stroke-linecap":"round","stroke-linejoin":"round",stroke:o[l]||r.strokeColor||u._randomColor(),d:u._describePie(s,d,t,a,c),fill:i[l]||u._randomColor()})),a=c}return n},_describeEmptyPie:function(t,e,n){var a=e+n,i=(e+r,"M"+t+" "+a+"A"+n+" "+n+" 0 1 1 "+(t+.001)+" "+a);return i}})}},function(t,e,r){{var n=r(23);t.exports=n.extend({componentName:"donut",_describePath:function(t,e,r){if(!e)return"";var n=[],a=r.outerRadius||t,i=r.innerRadius||a/2,o=0,s=r.fills||0,d=r.strokeColors||0,u=r.height/2,l=r.width/2,c=this;if(0==r.total)return c.make("path",{"stroke-linecap":"round","stroke-linejoin":"round",stroke:d[p]||r.strokeColor||c._randomColor(),fill:"transparent",d:c._describeDonutRing(l,u,i,a)});for(var p=0;p<e.length;p++){var f=o+360*e[p];n.push(c.make("path",{"stroke-linecap":"round","stroke-linejoin":"round",stroke:d[p]||r.strokeColor||c._randomColor(),fill:s[p]||c._randomColor(),d:c._describeDonut(l,u,a,i,o,f)})),o=f}return n},_describeDonutRing:function(t,e,r,n){var a=e+n,i=e+r,o="M"+t+" "+a+"A"+n+" "+n+" 0 1 1 "+(t+.001)+" "+a;return o+="M"+t+" "+i+"A"+r+" "+r+" 0 1 0 "+(t-.001)+" "+i},_describeDonut:function(t,e,r,n,a,i){0==a&&360==i&&(a=1);var o={start:this._polarToCartesian(t,e,r,i),end:this._polarToCartesian(t,e,r,a)},s={start:this._polarToCartesian(t,e,n,i),end:this._polarToCartesian(t,e,n,a)},d=180>=i-a?"0":"1";return["M",o.start.x,o.start.y,"A",r,r,0,d,0,o.end.x,o.end.y,"L",s.end.x,s.end.y,"A",n,n,0,d,1,s.start.x,s.start.y,"L",o.start.x,o.start.y,"Z"].join(" ")}})}},function(t,e,r){{var n=r(20);t.exports=n.extend({componentName:"bar",_startCycle:function(){var t=this.attributes.data,e=this,r=this.attributes.opts.chart;return r.type="bar",e._lifeCycleManager(t,r,function(r){return e._describeBar(t,r)})},_describeBar:function(t,e){if(!t.length)return"";t="object"==typeof t[0]?t:[t];for(var r=e.height-e.paddingTop-e.paddingBottom,n=e.width-e.paddingLeft-e.paddingRight,a=t[0].data.length,i=t.length,o=n/a,s=[],d=0;a>d;d++)if(e.stack)for(var u=r*e.maxSet[d]/e.max,l=r-u+e.paddingTop,c=0;i>c;c++)s.push(this.make("rect",{x:o*d+o/4+e.paddingLeft,y:l,width:o/i,height:t[c].data[d]/e.maxSet[d]*u,fill:t[c].fill||this._randomColor()})),l+=t[c].data[d]/e.maxSet[d]*u;else for(var p=o*d+o/4+e.paddingLeft,c=0;i>c;c++){p+=o/(i+1)*c;var u=r*t[c].data[d]/e.max;s.push(this.make("rect",{x:p,y:r-u+e.paddingTop,width:o/(i+1),height:u,fill:t[c].fill||this._randomColor()}))}return s}})}},function(t,e,r){function n(t){return t&&t.__esModule?t:{"default":t}}var a=r(21),i=n(a),o=r(24),s=n(o),d=r(25),u=n(d),l=r(26),c=n(l),p=r(27),f=n(p);t.exports={path:i["default"],arc:s["default"],rect:u["default"],composer:c["default"],create:function(t){var e=new f["default"];return e.create(t)}}},function(t){t.exports=function(t,e){if(e instanceof Array){for(var r=0;r<e.length;r++)t=t.extend(e[r]);return t}return t.extend(e)}},function(t,e,r){function n(t){return t&&t.__esModule?t:{"default":t}}var a=r(20),i=n(a),o=r(28),s=n(o);t.exports=i["default"].extend({componentName:"bubble.point",_startCycle:function(){var t=this,e=t.attributes.opts.chart,r=t.attributes.data,n="";if(0!=e.autoFit){var a=function(t,e){return t.date-e.date};r.sort(a)}return t._lifeCycleManager(r,e,function(a){return n=t._describeBubble(r,e.height,e.width,a),n.unshift(t._describeXAxis(e.height,e.width,a)),n})},_getRatio:s["default"].getRatioByTimeSeries,_describeXAxis:s["default"].describeXAxisForBubbleLine,_describeBubble:s["default"].describeBubbleLineByObject})},function(t,e,r){function n(t){return t&&t.__esModule?t:{"default":t}}var a=r(20),i=n(a),o=r(28),s=n(o);t.exports=i["default"].extend({componentName:"bubble.scatter",_startCycle:function(){var t=this,e=t.attributes.opts.chart,r=t.attributes.data;return t._lifeCycleManager(r,e,function(e){return t._describeBubbleChart(r,e)})},_getRatio:s["default"].getRatioByObject,_describeBubbleChart:s["default"].describeBubbleByObject})},function(t,e,r){var n=(r(22),r(20));t.exports=n.extend({componentName:"line",_scale:function(t,e){t=t[0],e=e||0;for(var r,n,a,i=e.chart||e,o=0,s=i.yAxis||0,d=i.xAxis||0,u=Number.MAX_VALUE,l=this,c=0,p=l._getSplits,f=[],h=t.data,g=function(t,e){return parseInt(t[a])-parseInt(e[a])},m=Object.keys(t.labels),v=m.length,b=h.length,x=[],_=0;v>_;_++){var f=t.labels[m[_]].strokeColor=t.labels[m[_]].strokeColor||l._randomColor();x.push(f)}s&&(i.paddingLeft=i.paddingRight=30),d&&(i.paddingTop=i.paddingBottom=20);var k,y=i.height-i.paddingTop-i.paddingBottom,C=i.width-i.paddingLeft-i.paddingRight;if(s&&s.multi){u={},o={},c={},k={};for(var P=0;v>P;P++)a=m[P],r=h.slice(0).sort(g),u[P]=r[0][a],n=p(r[b-1][a]),o[P]=n.max,c[P]=n.splits,k[P]=y/o[P],delete r}else{for(var P=0;v>P;P++)a=m[P],r=h.slice(0).sort(g),u=u>parseInt(r[0][a])?r[0][a]:u,o=o<parseInt(r[b-1][a])?r[b-1][a]:o,delete r;s&&(n=p(o),o=n.max,c=n.splits),k=y/o}return{min:u,max:o,len:b,rows:v,ySecs:c,labels:m,pHeight:y,pWidth:C,heightRatio:k,color:x}},_startCycle:function(){var t=this,e=t.attributes.data,r=t.attributes.opts,n=r.chart;return t._isArray(e)||(e=[e]),t._lifeCycleManager(e,n,function(r){return t._describeSeries(e[0],r.paddingLeft,r.paddingTop,r)})},_getRatio:function(t){var e=this;t.type="timeSeries";var r=t._data[0].data[t.len-1].timestamp;t.xAxis.maxUTC=r=new Date(r).getTime();var n=t.xAxis.minUTC||0;n||(n=t._data[0].data[0].timestamp,t.xAxis.minUTC=n=new Date(n).getTime()),t.tickSize=e._sigFigs(t.pWidth/(r-n),8)},_describeCloseAttributeD:function(t,e,r,n,a){return["V",e-a,"H",n,"L",n,e-t*r-a].join(" ")},_describePathAndCircle:function(t,e,r,n,a,i,o,s){for(var d=a.height,u={},l=a.tickSize,c=a.xAxis.minUTC,p={},f=a.rows,h=a.labels,g=this,m=[],v={},b=0;f>b;b++){var x=e[h[b]];p[b]="",u[b]=a.yAxis&&a.yAxis.multi?a.pHeight/a.max[b]:a.heightRatio,x.strokeColor=x.strokeColor||g._randomColor()}for(var _=0;_<t.length;_++)for(var k=new Date(t[_].timestamp).getTime(),y=(k-c)*l,C=0;f>C;C++){var P=t[_][h[C]]||0;P&&o&&(""==p[C]?(s&&(v[C]=P),p[C]="M "+r+" "+(d-P*u[C]-n)):p[C]+=" L "+(y+r)+" "+(d-P*u[C]-n));var x=e[h[C]];if(P&&i&&x.scattered){var S=x.scattered.strokeColor||x.strokeColor;m.push(g.make("circle",{cx:y+r,cy:d-P*u[C]-n,r:x.scattered.radius||"3",stroke:S,"stroke-width":x.scattered.strokeWidth||"3",fill:"white"},{_ref:C}))}}for(var w=0;f>w;w++){var x=e[h[w]];m.unshift(g.make("path",{d:p[w],stroke:x.strokeColor,"stroke-width":x.strokeWidth||"3","stroke-linejoin":"round","stroke-linecap":"round",fill:"none"},{_ref:w})),s&&x.fill&&m.push(g.make("path",{d:p[w]+g._describeCloseAttributeD(v[w],d,u[w],r,n),stroke:x.strokeColor,"stroke-width":x.strokeWidth||"3","stroke-linejoin":"round","stroke-linecap":"round",fill:x.fill},{_ref:w}))}return m},_describeSeries:function(t,e,r,n){var a=this,i=a._describePathAndCircle(t.data,t.labels,e,r,n,n.scattered,n.line,n.fill);return i}})},function(t){function e(t){return"function"==typeof t}function r(t){return/\b_super\b/.test(t)}var n=t.exports=function(){};n.extend=function(t){function n(){this.init&&this.init.apply(this,arguments)}var a=this.prototype,i=this.prototype.init;this.prototype.init=null;var o=new this;this.prototype.init=i;for(var s in t){var d=t[s];o[s]=e(d)&&e(a[s])&&r(d)?function(t,e){return function(){var r=this._super;this._super=a[t];var n=e.apply(this,arguments);return this._super=r,n}}(s,d):d}return n.prototype=o,n.prototype.constructor=n,n.extend=arguments.callee,n}},function(t){t.exports={spark:function(t,e,r){var n=(target.dataset||"")._ref||target.getAttribute("data-_ref")||0,a=[],i=e.scale,o=e.data,s=(r-i.paddingLeft-i.innerPaddingLeft+i.tickSize/2)/(i.tickSize*i.len);s=Math.floor(s*i.len);var d={_scale:i,_segmentXRef:s};n&&o[n]&&(d.exactPoint={label:o[n].label,value:o[n].data[s]},d._data=o[n]);for(var u in o)a.push({label:o[u].label,value:o[u].data[s]});return d.points=a,n||(d._data=o),d},"bubble.point":function(t,e,r,n){var a,i=e.scale,o=e.data,s=t.target,d=(s.dataset||"").c||s.getAttribute("data-c"),u=o[d]||0,l=i.tickSize,c=i.startTick,p=i.minRadius||0,f=(i.maxRadius-p)*u.data/i.max;if(f=f?f+p:0,0==i.autoFit){var d=(s.dataset||"").c||s.getAttribute("data-c");a=d*l+i.paddingLeft+i.innerPaddingLeft}else a=(u.date.getTime()-c)*l+i.paddingLeft+i.innerPaddingLeft;return{scale:i,_segmentXRef:d,exactPoint:{data:{x:u.data,meta:u},eY:n,eX:r,cY:i.height/2,cX:a,r:f}}},"bubble.scatter":function(t,e,r,n){var a=e.scale,i=e.data,o=t.target,s=((o.dataset||"").r||o.getAttribute("data-r"),(o.dataset||"").c||o.getAttribute("data-c")),d=i[s].data,u=a.minRadius||0,l=(a.maxRadius-u)*(d[2]/a.max[2]);return l=l?l+u:0,{_scale:a,exactPoint:{data:{x:d[0],y:d[1],z:d[2],meta:i[s]},eY:n,eX:r,cX:a.hasInverse.x?d[0]*a.widthRatio+a.paddingLeft+a.innerPaddingLeft:a.width-d[0]*a.widthRatio-a.paddingLeft-a.innerPaddingLeft,cY:a.hasInverse.y?a.paddingTop+a.innerPaddingTop+d[1]*a.heightRatio:a.height-d[1]*a.heightRatio-a.paddingTop-a.innerPaddingTop,r:l}}}}},function(t){var e=function(t){console.warn(t)};t.exports={label:function(){e("You're attempting to use labels without the `Label` addons.  Check documentation https://github.com/alfredkam/yakojs/blob/master/doc.md")},eventFeedback:function(t){e("No event feedback associated with chart component "+t)}}},function(t,e,r){{var n=r(29);t.exports=n.extend({init:function(t){var e=this;return e.element="string"==typeof t?"#"===t[0]?e.make("div",{id:t.replace(/^#/,""),width:"100%"}):e.make("div",{"class":t.replace(/^\./,""),width:"100%"}):"",e.token=e._makeToken(),e.attributes={},e},_prepare:function(){var t=this,e={type:"chart",width:"100",height:"100",paddingLeft:0,paddingRight:0,paddingTop:0,paddingBottom:0,innerPadding:0,innerPaddingLeft:0,innerPaddingRight:0,innerPaddingTop:0,innerPaddingBottom:0,invert:[],line:!0,fill:!0,scattered:!1};return t._extend(e,t.attributes.opts.chart),t._extend(t.attributes.opts,e),t.attributes.opts.chart=e,t},attr:function(t){var e=this;return t=t||0,"undefined"==typeof t.chart&&(t={chart:t,data:t.data||t.points},delete t.chart.data,delete t.chart.points),e.props.data=e.attributes.data=t.data||t.points||[],e.props.opts=e.attributes.opts=t,e.postRender(e.finalize(e._prepare()._startCycle()))},_addChartLayoutProps:function(t){var e=t.height,r=t.width,n=t.paddingTop,a=t.paddingLeft,i=t.paddingRight,o=t.paddingBottom;return t.layout={x:a,y:n,height:e-n-o,width:r-a-i,yToPixel:t.heightRatio||null,xToPixel:t.widthRatio||t.tickSize||null},null},finalize:function(t){var e=this,r=e._append,n=prepend="",a=e.props.scale||e.props.opts,i=e.props.opts,o=e.make("svg",{width:a.width,height:a.height,viewBox:"0 0 "+a.width+" "+a.height});if(e._addChartLayoutProps(a),i.prepend||i.append){var s=Object.freeze(e._deepCopy(a));n=e._getUserContent(i.append,t,s)||"",prepend=e._getUserContent(i.prepend,t,s)||""}return r(e.element,r(o,prepend+t+n))},_getUserContent:function(t,e,r){if(!t)return"";var n=t(e,r)||"";return"object"==typeof n&&(n=n.stringify()),n}})}},function(t,e,r){var n=r(30),a=t.exports={getScale:function(t){var e=t.data||0,r=n.scale(e);return r.paddingY=t.paddingY||5,r.tickSize=n.sigFigs(t.width/(r.len-1),8),r.heightRatio=(t.height-2*r.paddingY)/r.max,r.height=t.height,r.width=t.width,r.innerPadding=t.innerPadding||0,r.innerPaddingTop=t.innerPaddingTop||0,r.innerPaddingBottom=t.innerPaddingBottom||0,r},describeAttributeD:function(t,e,r,n,a){var i=n.height,o=n.heightRatio,s=n.tickSize,d=n.hasInverse||{},u="";d.y&&(max="object"==typeof n.max?n.max[a]:n.max);for(var l=0;l<t.length;l++){var c=(d.y?i-(max-t[l])*o:i-t[l]*o)-r-n.innerPaddingTop;u+=0===l?"M "+(e+n.innerPadding)+" "+c:" L "+(s*l+e)+" "+c}return""===u&&(u="M 0 0"),u},describeCloseAttributeD:function(t,e,r,n){var a=n.height,i=n.heightRatio;return["V",a-r,"H",e,"L",e+n.innerPadding,a-t[0]*i-r-n.innerPaddingTop].join(" ")},getOpenPath:function(t,e){return a.describeAttributeD(e,0,t.paddingY,t)},getClosedPath:function(t,e){return a.describeAttributeD(e,0,t.paddingY,t)+a.describeCloseAttributeD(e,0,t.paddingY,t)},beginPath:function(){var t=this,e="";return t.moveTo=function(r,n){return e+="M"+r+" "+n,t},t.lineTo=function(r,n){return e+="L"+r+" "+n,t},t.endPath=function(){return e},t}}},function(t){t.exports={describeScatter:function(t,e,r,n,a,i){var o=a.height,s=a.heightRatio,d=this,u=a.tickSize,l=t.scattered||0,c=l.strokeWidth||2,p=l.strokeColor||d._randomColor(),f=l.radius||2,h=l.fill||"white",g=[];i=i||0;for(var m=0;m<e.length;m++)g.push(d.make("circle",{cx:0===m?m+a.innerPadding+r:u*m+r,cy:o-e[m]*s-n-a.innerPaddingTop,r:f,stroke:p,"stroke-width":c,fill:h},{_ref:i}));return g}}},function(t,e,r){var n=r(20),a=r(24);t.exports=n.extend({_startCycle:function(){var t=this,e=t.attributes.opts.chart,r=t.attributes.data;return t._lifeCycleManager(r,e,function(e){return t._describePath(e.outerRadius,e.relativeDataSet,e)})},_defineBaseScaleProperties:function(t,e){var r=this,n=r._sumOfData(t),a={total:n,relativeDataSet:r._dataSetRelativeToTotal(t,n),outerRadius:e.outerRadius||(e.height<e.width?e.height:e.width)/2};return r._extend(a,e),a},_polarToCartesian:a.polarToCartesian,_describeArc:a.describeArc,_describePie:a.describePie,_describePath:function(){return""}})},function(t){var e=t.exports={polarToCartesian:function(t,e,r,n){var a=(n-90)*Math.PI/180;return{x:t+r*Math.cos(a),y:e+r*Math.sin(a)}},describeArc:function(t,r,n,a,i){0==a&&360==i&&(a=1);var o=e.polarToCartesian(t,r,n,i),s=e.polarToCartesian(t,r,n,a),d=180>=i-a?"0":"1";return["M",o.x,o.y,"A",n,n,0,d,0,s.x,s.y].join(" ")},describePie:function(t,r,n,a,i){return e.describeArc(t,r,n,a,i)+" L"+t+" "+r}}},function(){},function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t instanceof Array},n={makePairs:function(t,e){if(!t)return"";if(arguments.length<2?(e=t,t=""):t+="-",!e)return"";for(var r=Object.keys(e),n=r.length,a="";n--;)a+=" "+t+r[n]+'="'+e[r[n]]+'"';return a},append:function(t,e){return""===t?e:(r(e)||(e=[e]),t.replace(/(.*)(<\/.*>$)/g,function(t,r,n){return r+e.join("")+n}))},make:function(t,e,r,a){var i="<"+t;return"svg"===t&&(i+=' version="1.1" xmlns="http://www.w3.org/2000/svg"'),i+=n.makePairs(e),i+=n.makePairs("data",r),i+=">"+(a||0===a?a:"")+"</"+t+">"}};e["default"]=n,t.exports=e["default"]},function(t,e,r){function n(t){return t&&t.__esModule?t:{"default":t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(26),s=n(o),d=r(31),u=n(d),l=function(){function t(){a(this,t);return this}return i(t,[{key:"getNode",value:function(){var t=void 0===arguments[0]?null:arguments[0],e=null,r=this;return t||(t=r),{node:t,parent:e}}},{key:"create",value:function(t){var e=this;return e.element=t,e}},{key:"append",value:function(e){var r=this,n=r.getNode(),a=n.node;if(a.children=a.children||[],Array.isArray(e))a.children=a.children.concat(e);else{var i=new t;e=i.create(e),a.children.push(e)}return r}},{key:"attr",value:function(t,e){var r=this,n=r.getNode(),a=n.node;return a.attrs=a.attrs||{},"object"==typeof t?u["default"](a.attrs,t):a.attrs[t]=e,r}},{key:"forEach",value:function(t){var e=this,r=e.getNode(),n=r.node,a=n.children||[];return a.forEach(t),e}},{key:"stringify",value:function(){var t=this,e=t.getNode(),r=e.node,n=(r.children||[]).map(function(t){return t.stringify()});return s["default"].make(r.element,r.attrs,{},n.join(""))}}]),t}();t.exports=l},function(t,e,r){function n(t){return t&&t.__esModule?t:{"default":t}}var a=r(26),i=n(a),o=r(32),s=n(o);t.exports={describeXAxisForBubbleLine:function(t,e,r){var n=r.axis||r.xAxis,a=t/2;return i["default"].make("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":n.strokeWidth||2,stroke:n.strokeColor||"transparent",d:"M"+r.paddingLeft+" "+a+" H"+e})},describeBubbleByObject:function(t,e){for(var r,n=e.height,a=e.width,o=e.heightRatio,d=e.widthRatio,u=e.len,l=e.max,c=e.innerPaddingLeft,p=e.paddingLeft,f=e.innerPaddingTop,h=e.paddingTop,g=e.fill||0,m=(e.strokeColor||0,e.strokeWidth||0,[]),v=e.minRadius||0,b=e.hasInverse,x=0;u>x;x++){var _=t[x],k=_.data;e.hasEvents&&(r={c:x});var y=(e.maxRadius-v)*(k[2]/l[2]);y=y?y+v:0,m.push(i["default"].make("circle",{cx:b.x?k[0]*d+c+p:a-k[0]*d-c-p,cy:b.y?h+f+k[1]*o:n-k[1]*o-f-h,r:y,fill:_.fill||g||s["default"]()},r))}return m},describeBubbleLineByObject:function(t,e,r,n){if(!t)return"";for(var a,o,s=n.paddingLeft,d=n.innerPaddingLeft,u=n.autoFit,l=n.strokeColors,c=n.strokeWidths,p=(n.fill,n.tickSize),f=n.startTick,h=n.minRadius,g=n.maxRadius,m=(t.length,[]),v=l||0,b=c||0,x=n.fill||0,_=e/2,h=h||0,k=0;k<t.length;k++){var y=t[k];n.hasEvents&&(a={c:k}),o=0==u?k*p+s+d:(y.date.getTime()-f)*p+s+d;var C=(g-h)*y.data/n.max;C=C?C+h:0,m.push(i["default"].make("circle",{cx:o,cy:_,r:C,fill:y.fill||x,stroke:y.strokeColor||v||"transparent","stroke-width":y.strokeWidth||b||0},a))}return m},getRatioByObject:function(t){var e=(t._data,t.height),r=t.width,n=t.len,a=t.innerPaddingLeft,i=t.innerPaddingTop,o=t.innerPaddingRight,s=t.innerPaddingBottom,d=t.minRadius,u=t.maxRadius=parseInt(t.maxRadius)||Math.sqrt(r*e/n)/2;t.minRadius=d||0,t.innerPaddingLeft=u>a?u:a,t.innerPaddingRight=u>o?u:o,t.innerPaddingTop=u>i?u:i,t.innerPaddingBottom=u>s?u:s,t.widthRatio=(r-t.innerPaddingLeft-t.innerPaddingRight)/t.max[0],t.heightRatio=(e-t.innerPaddingTop-t.innerPaddingBottom)/t.max[1]},getRatioByTimeSeries:function(t){var e=t.autoFit,r=t._data,n=(t.height,t.width),a=t.len,i=(t.paddingTop,t.paddingLeft,t.paddingRight,t.paddingBottom,t.axis),o=r;t.axis=i||{};var s,d,u=t.maxRadius=parseInt(t.maxRadius)||u,l=t.minRadius=t.minRadius||0;0==e?(s=0,d=a-1):(s=(t.startDate||o[0].date||0).getTime(),d=(t.endDate||o[a-1].date).getTime()),t.startTick=s,t.endTick=d;var c=d-s;c=0==c?1e3:c;var p=n/c,f=(u-l)*o[0].data/t.max,h=(u-l)*o[a-1].data/t.max;f=f?f+l:0,h=h?h+l:0;var g=(s-s)*p-f,m=(d-d)*p+h;t.paddingLeft=0>g?Math.abs(g):0,t.paddingRight=m>0?m:0,t.tickSize=(n-t.paddingLeft-t.paddingRight)/c}}},function(t,e,r){r(33);var n=r(32),a=r(17),i=r(19),o=r(30),s=r(26),d=function(t){return t instanceof Array},u={x:"x",y:"y"};t.exports=a.extend({init:function(){return this},props:{},_sumOfData:o.sumOfData,_dataSetRelativeToTotal:o.dataSetRelativeToTotal,_randomColor:n,_append:s.append,make:s.make,_deepCopy:function(t){return JSON.parse(JSON.stringify(t))},postRender:function(t){return t},_isArray:d,_getRatio:function(t){t.heightRatio=t.height-(t.paddingTop+t.paddingBottom)/t.max},_getInvertProps:function(t){var e={};if(t.invert)for(var r in t.invert)u[t.invert[r]]&&(e[u[t.invert[r]]]=!0);t.hasInverse=e},_defineBaseScaleProperties:function(t,e){var r=this,n=this.attributes.opts,e=n.chart,a=e.xAxis||n.xAxis,o=e.yAxis||n.yAxis,s=r._scale(t,e);return r._extend(s,e),s._data=t,r._getInvertProps(s),"bubble-point"!=e.type&&(o||a)&&(r._getExternalProps(s,o,a),r.describeYAxis||i.label()),r._getRatio(s),r.props.scale=s,s},_lifeCycleManager:function(t,e,r){var n=this,a=n._defineBaseScaleProperties(t,e);a.componentName=n.componentName,n._call&&n._call(a);var i=n.preRender?n.preRender(Object.freeze(n._deepCopy(a))):0,o=i.prepend?i.prepend:[];return o=o.concat(r(a)),o=o.concat(i.append?i.append:[])},_makePairs:s.makePairs,_extend:function(t,e){var r=this;if(e&&t){for(var n=Object.keys(e),a=n.length;a--;)"object"!=typeof e[n[a]]||d(e[n[a]])?t[n[a]]=e[n[a]]:(t[n[a]]||(t[n[a]]={}),r._extend(t[n[a]],e[n[a]]));return this}},isFn:function(t){return!!(t&&t.constructor&&t.call&&t.apply)},_makeToken:function(){return Math.random().toString(36).substr(2)},_sigFigs:o.sigFigs,_getSplits:o.getSplits,_scale:o.scale})},function(t){var e=function(t,e){return t-e},r=t.exports={sigFigs:function(t,e){var r=Math.pow(10,e-Math.floor(Math.log(t)/Math.LN10)-1);return Math.round(t*r)/r},sumOfData:function(t){return t.reduce(function(t,e){return t+e})},dataSetRelativeToTotal:function(t,e){return t.map(function(t){return t/e})},getSplits:function(t){if(t=Math.ceil(t,0),0===t)return{max:2,splits:2};var e=[3,2,5],r=t.toString().length,n=splits=0,a=function(t){for(var r=0;3>r;r++)if(t%e[r]===0)return e[r];return 0},i=function(t){var e=parseInt(t.toString()[0]);return 1==e?2:a(e)};return r>2?(n=Math.ceil10(t,r-1),splits=i(n),splits||(n+=Math.pow(10,r-1),splits=i(n))):2==r?(n=t.toString(),n[1]<=5&&(1==n[0]||2==n[0]||5==n[0]||7==n[0])&&0!=n[1]?n=parseInt(n[0]+"5"):(n=Math.ceil10(t,1),n=70==n?75:n),splits=a(n)):(n=t,splits=a(n),(5==n||3==n||2==n)&&(splits=1),splits||(n+=1,splits=i(n))),{max:n,splits:splits}},getScaleForMulti:function(t,n,a){for(var i={},o=[],s=[],d=0;n>d;d++)temp=t[d].slice(0).sort(e),o[d]=temp[0],ans=r.getSplits(temp[a-1]),s[d]=ans.max,i[d]=ans.splits;return{min:o,max:s,ySecs:i}},getStackedScale:function(t,e,n,a,i,o){for(var s=[],d=0,u=0;n>u;u++){for(var l=0,c=0;e>c;c++)l+=t[c][u];
s.push(l),o=l>o?l:o,i=i>l?l:i}return a&&(ans=r.getSplits(o),o=ans.max,d=ans.splits),{min:i,max:o,ySecs:d,maxSet:s}},getBubbleScatterScale:function(t,e,n,a){for(var i=0,o=[],s=[],d=0;3>d;d++)o[d]=Number.MAX_VALUE,s[d]=0;for(var u=0;n>u;u++)for(var l=0;e>l;l++)for(var c=0;3>c;c++)s[c]=s[c]<t[l][u][c]?t[l][u][c]:s[c],o[c]=o[c]>t[l][u][c]?t[l][u][c]:o[c];return a&&(ans=r.getSplits(s[1]),s[1]=ans.max,i=ans.splits),{min:o,max:s,ySecs:i}},getSimpleScale:function(t,n,a,i,o,s){for(var d=0,u=0;n>u;u++)temp=t[u].slice(0).sort(e),o=o>temp[0]?temp[0]:o,s=s<temp[a-1]?temp[a-1]:s;return i&&(ans=r.getSplits(s),s=ans.max,d=ans.splits),{min:o,max:s,ySecs:d}},scale:function(t,e){e=e||0,t="object"==typeof t[0]?t:[t];var n,a=0,i=e.yAxis||(e.chart?e.chart.yAxis:0),o=Number.MAX_VALUE,s=[],d=this,u=0,l=(r.getSplits,[]);if(t[0].data||0==t[0].data){n=[];for(var c=0;c<t.length;c++)n.push(t[c].data),l.push(t[c].strokeColor);t="bubble.point"==this.componentName||"bubble.scatter"==this.componentName?[n]:n}var p=t.length,f=t[0].length;if(i&&i.multi){var h=r.getScaleForMulti(t,p,f);o=h.min,a=h.max,u=h.ySecs}else if(e.stack){var h=r.getStackedScale(t,p,f,i,o,a);o=h.min,a=h.max,u=h.ySecs,s=h.maxSet}else if("bubble.scatter"==d.componentName){var h=r.getBubbleScatterScale(t,p,f,i);o=h.min,a=h.max,u=h.ySecs}else{var h=r.getSimpleScale(t,p,f,i,o,a);o=h.min,a=h.max,u=h.ySecs}return{min:o,max:a,maxSet:s,len:f,rows:p,ySecs:u,color:l}}}},function(t){t.exports=function(t){var e=this;arguments.length>1&&(e=arguments[0],t=arguments[1]);for(var r=Object.keys(t),n=0;n<r.length;n++)e[r[n]]=t[r[n]];return e}},function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(){return"#"+Math.floor(16777215*Math.random()).toString(16)},t.exports=e["default"]},function(){function t(t,e,r){return"undefined"==typeof r||0===+r?Math[t](e):(e=+e,r=+r,isNaN(e)||"number"!=typeof r||r%1!==0?0/0:(e=e.toString().split("e"),e=Math[t](+(e[0]+"e"+(e[1]?+e[1]-r:-r))),e=e.toString().split("e"),+(e[0]+"e"+(e[1]?+e[1]+r:r))))}Math.round10||(Math.round10=function(e,r){return t("round",e,r)}),Math.floor10||(Math.floor10=function(e,r){return t("floor",e,r)}),Math.ceil10||(Math.ceil10=function(e,r){return t("ceil",e,r)})}]);h.max,u=h.ySecs}else{var h=r.getSimpleScale(t,p,f,a,o,i);o=h.min,i=h.max,u=h.ySecs}return{min:o,max:i,maxSet:s,len:f,rows:p,ySecs:u,color:l}}}},function(t){t.exports=function(t){var e=this;arguments.length>1&&(e=arguments[0],t=arguments[1]);for(var r=Object.keys(t),n=0;n<r.length;n++)e[r[n]]=t[r[n]];return e}},function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(){return"#"+Math.floor(16777215*Math.random()).toString(16)},t.exports=e["default"]},function(){function t(t,e,r){return"undefined"==typeof r||0===+r?Math[t](e):(e=+e,r=+r,isNaN(e)||"number"!=typeof r||r%1!==0?0/0:(e=e.toString().split("e"),e=Math[t](+(e[0]+"e"+(e[1]?+e[1]-r:-r))),e=e.toString().split("e"),+(e[0]+"e"+(e[1]?+e[1]+r:r))))}Math.round10||(Math.round10=function(e,r){return t("round",e,r)}),Math.floor10||(Math.floor10=function(e,r){return t("floor",e,r)}),Math.ceil10||(Math.ceil10=function(e,r){return t("ceil",e,r)})}]);