(function(){var e="abbr,article,aside,audio,bb,canvas,datagrid,datalist,details,dialog,figure,footer,header,mark,menu,meter,nav,output,progress,section,time,video".split(','),i=e.length;while(i--){document.createElement(e[i])}})()
if(!document.createElement("canvas").getContext){(function(){var Y=Math;var q=Y.round;var o=Y.sin;var B=Y.cos;var H=Y.abs;var N=Y.sqrt;var d=10;var f=d/2;function A(){return this.context_||(this.context_=new D(this))}var v=Array.prototype.slice;function g(j,m,p){var i=v.call(arguments,2);return function(){return j.apply(m,i.concat(v.call(arguments)))}}function ad(i){return String(i).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function R(j){if(!j.namespaces.g_vml_){j.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML")}if(!j.namespaces.g_o_){j.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML")}if(!j.styleSheets.ex_canvas_){var i=j.createStyleSheet();i.owningElement.id="ex_canvas_";i.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"}}R(document);var e={init:function(i){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var j=i||document;j.createElement("canvas");j.attachEvent("onreadystatechange",g(this.init_,this,j))}},init_:function(p){var m=p.getElementsByTagName("canvas");for(var j=0;j<m.length;j++){this.initElement(m[j])}},initElement:function(j){if(!j.getContext){j.getContext=A;R(j.ownerDocument);j.innerHTML="";j.attachEvent("onpropertychange",z);j.attachEvent("onresize",V);var i=j.attributes;if(i.width&&i.width.specified){j.style.width=i.width.nodeValue+"px"}else{j.width=j.clientWidth}if(i.height&&i.height.specified){j.style.height=i.height.nodeValue+"px"}else{j.height=j.clientHeight}}return j}};function z(j){var i=j.srcElement;switch(j.propertyName){case"width":i.getContext().clearRect();i.style.width=i.attributes.width.nodeValue+"px";i.firstChild.style.width=i.clientWidth+"px";break;case"height":i.getContext().clearRect();i.style.height=i.attributes.height.nodeValue+"px";i.firstChild.style.height=i.clientHeight+"px";break}}function V(j){var i=j.srcElement;if(i.firstChild){i.firstChild.style.width=i.clientWidth+"px";i.firstChild.style.height=i.clientHeight+"px"}}e.init();var n=[];for(var ac=0;ac<16;ac++){for(var ab=0;ab<16;ab++){n[ac*16+ab]=ac.toString(16)+ab.toString(16)}}function C(){return[[1,0,0],[0,1,0],[0,0,1]]}function J(p,m){var j=C();for(var i=0;i<3;i++){for(var af=0;af<3;af++){var Z=0;for(var ae=0;ae<3;ae++){Z+=p[i][ae]*m[ae][af]}j[i][af]=Z}}return j}function x(j,i){i.fillStyle=j.fillStyle;i.lineCap=j.lineCap;i.lineJoin=j.lineJoin;i.lineWidth=j.lineWidth;i.miterLimit=j.miterLimit;i.shadowBlur=j.shadowBlur;i.shadowColor=j.shadowColor;i.shadowOffsetX=j.shadowOffsetX;i.shadowOffsetY=j.shadowOffsetY;i.strokeStyle=j.strokeStyle;i.globalAlpha=j.globalAlpha;i.font=j.font;i.textAlign=j.textAlign;i.textBaseline=j.textBaseline;i.arcScaleX_=j.arcScaleX_;i.arcScaleY_=j.arcScaleY_;i.lineScale_=j.lineScale_}var b={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"};function M(j){var p=j.indexOf("(",3);var i=j.indexOf(")",p+1);var m=j.substring(p+1,i).split(",");if(m.length==4&&j.substr(3,1)=="a"){alpha=Number(m[3])}else{m[3]=1}return m}function c(i){return parseFloat(i)/100}function u(j,m,i){return Math.min(i,Math.max(m,j))}function I(af){var m,j,i;h=parseFloat(af[0])/360%360;if(h<0){h++}s=u(c(af[1]),0,1);l=u(c(af[2]),0,1);if(s==0){m=j=i=l}else{var Z=l<0.5?l*(1+s):l+s-l*s;var ae=2*l-Z;m=a(ae,Z,h+1/3);j=a(ae,Z,h);i=a(ae,Z,h-1/3)}return"#"+n[Math.floor(m*255)]+n[Math.floor(j*255)]+n[Math.floor(i*255)]}function a(j,i,m){if(m<0){m++}if(m>1){m--}if(6*m<1){return j+(i-j)*6*m}else{if(2*m<1){return i}else{if(3*m<2){return j+(i-j)*(2/3-m)*6}else{return j}}}}function F(j){var ae,Z=1;j=String(j);if(j.charAt(0)=="#"){ae=j}else{if(/^rgb/.test(j)){var p=M(j);var ae="#",af;for(var m=0;m<3;m++){if(p[m].indexOf("%")!=-1){af=Math.floor(c(p[m])*255)}else{af=Number(p[m])}ae+=n[u(af,0,255)]}Z=p[3]}else{if(/^hsl/.test(j)){var p=M(j);ae=I(p);Z=p[3]}else{ae=b[j]||j}}}return{color:ae,alpha:Z}}var r={style:"normal",variant:"normal",weight:"normal",size:10,family:"sans-serif"};var L={};function E(i){if(L[i]){return L[i]}var p=document.createElement("div");var m=p.style;try{m.font=i}catch(j){}return L[i]={style:m.fontStyle||r.style,variant:m.fontVariant||r.variant,weight:m.fontWeight||r.weight,size:m.fontSize||r.size,family:m.fontFamily||r.family}}function w(m,j){var i={};for(var af in m){i[af]=m[af]}var ae=parseFloat(j.currentStyle.fontSize),Z=parseFloat(m.size);if(typeof m.size=="number"){i.size=m.size}else{if(m.size.indexOf("px")!=-1){i.size=Z}else{if(m.size.indexOf("em")!=-1){i.size=ae*Z}else{if(m.size.indexOf("%")!=-1){i.size=(ae/100)*Z}else{if(m.size.indexOf("pt")!=-1){i.size=ae*(4/3)*Z}else{i.size=ae}}}}}i.size*=0.981;return i}function aa(i){return i.style+" "+i.variant+" "+i.weight+" "+i.size+"px "+i.family}function S(i){switch(i){case"butt":return"flat";case"round":return"round";case"square":default:return"square"}}function D(j){this.m_=C();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.strokeStyle="#000";this.fillStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=d*1;this.globalAlpha=1;this.font="10px sans-serif";this.textAlign="left";this.textBaseline="alphabetic";this.canvas=j;var i=j.ownerDocument.createElement("div");i.style.width=j.clientWidth+"px";i.style.height=j.clientHeight+"px";i.style.overflow="hidden";i.style.position="absolute";j.appendChild(i);this.element_=i;this.arcScaleX_=1;this.arcScaleY_=1;this.lineScale_=1}var t=D.prototype;t.clearRect=function(){if(this.textMeasureEl_){this.textMeasureEl_.removeNode(true);this.textMeasureEl_=null}this.element_.innerHTML=""};t.beginPath=function(){this.currentPath_=[]};t.moveTo=function(j,i){var m=this.getCoords_(j,i);this.currentPath_.push({type:"moveTo",x:m.x,y:m.y});this.currentX_=m.x;this.currentY_=m.y};t.lineTo=function(j,i){var m=this.getCoords_(j,i);this.currentPath_.push({type:"lineTo",x:m.x,y:m.y});this.currentX_=m.x;this.currentY_=m.y};t.bezierCurveTo=function(m,j,ai,ah,ag,ae){var i=this.getCoords_(ag,ae);var af=this.getCoords_(m,j);var Z=this.getCoords_(ai,ah);K(this,af,Z,i)};function K(i,Z,m,j){i.currentPath_.push({type:"bezierCurveTo",cp1x:Z.x,cp1y:Z.y,cp2x:m.x,cp2y:m.y,x:j.x,y:j.y});i.currentX_=j.x;i.currentY_=j.y}t.quadraticCurveTo=function(ag,m,j,i){var af=this.getCoords_(ag,m);var ae=this.getCoords_(j,i);var ah={x:this.currentX_+2/3*(af.x-this.currentX_),y:this.currentY_+2/3*(af.y-this.currentY_)};var Z={x:ah.x+(ae.x-this.currentX_)/3,y:ah.y+(ae.y-this.currentY_)/3};K(this,ah,Z,ae)};t.arc=function(aj,ah,ai,ae,j,m){ai*=d;var an=m?"at":"wa";var ak=aj+B(ae)*ai-f;var am=ah+o(ae)*ai-f;var i=aj+B(j)*ai-f;var al=ah+o(j)*ai-f;if(ak==i&&!m){ak+=0.125}var Z=this.getCoords_(aj,ah);var ag=this.getCoords_(ak,am);var af=this.getCoords_(i,al);this.currentPath_.push({type:an,x:Z.x,y:Z.y,radius:ai,xStart:ag.x,yStart:ag.y,xEnd:af.x,yEnd:af.y})};t.rect=function(m,j,i,p){this.moveTo(m,j);this.lineTo(m+i,j);this.lineTo(m+i,j+p);this.lineTo(m,j+p);this.closePath()};t.strokeRect=function(m,j,i,p){var Z=this.currentPath_;this.beginPath();this.moveTo(m,j);this.lineTo(m+i,j);this.lineTo(m+i,j+p);this.lineTo(m,j+p);this.closePath();this.stroke();this.currentPath_=Z};t.fillRect=function(m,j,i,p){var Z=this.currentPath_;this.beginPath();this.moveTo(m,j);this.lineTo(m+i,j);this.lineTo(m+i,j+p);this.lineTo(m,j+p);this.closePath();this.fill();this.currentPath_=Z};t.createLinearGradient=function(j,p,i,m){var Z=new U("gradient");Z.x0_=j;Z.y0_=p;Z.x1_=i;Z.y1_=m;return Z};t.createRadialGradient=function(p,ae,m,j,Z,i){var af=new U("gradientradial");af.x0_=p;af.y0_=ae;af.r0_=m;af.x1_=j;af.y1_=Z;af.r1_=i;return af};t.drawImage=function(ao,m){var ah,af,aj,aw,am,ak,aq,ay;var ai=ao.runtimeStyle.width;var an=ao.runtimeStyle.height;ao.runtimeStyle.width="auto";ao.runtimeStyle.height="auto";var ag=ao.width;var au=ao.height;ao.runtimeStyle.width=ai;ao.runtimeStyle.height=an;if(arguments.length==3){ah=arguments[1];af=arguments[2];am=ak=0;aq=aj=ag;ay=aw=au}else{if(arguments.length==5){ah=arguments[1];af=arguments[2];aj=arguments[3];aw=arguments[4];am=ak=0;aq=ag;ay=au}else{if(arguments.length==9){am=arguments[1];ak=arguments[2];aq=arguments[3];ay=arguments[4];ah=arguments[5];af=arguments[6];aj=arguments[7];aw=arguments[8]}else{throw Error("Invalid number of arguments")}}}var ax=this.getCoords_(ah,af);var p=aq/2;var j=ay/2;var av=[];var i=10;var ae=10;av.push(" <g_vml_:group",' coordsize="',d*i,",",d*ae,'"',' coordorigin="0,0"',' style="width:',i,"px;height:",ae,"px;position:absolute;");if(this.m_[0][0]!=1||this.m_[0][1]||this.m_[1][1]!=1||this.m_[1][0]){var Z=[];Z.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",q(ax.x/d),",","Dy=",q(ax.y/d),"");var at=ax;var ar=this.getCoords_(ah+aj,af);var ap=this.getCoords_(ah,af+aw);var al=this.getCoords_(ah+aj,af+aw);at.x=Y.max(at.x,ar.x,ap.x,al.x);at.y=Y.max(at.y,ar.y,ap.y,al.y);av.push("padding:0 ",q(at.x/d),"px ",q(at.y/d),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",Z.join(""),", sizingmethod='clip');")}else{av.push("top:",q(ax.y/d),"px;left:",q(ax.x/d),"px;")}av.push(' ">','<g_vml_:image src="',ao.src,'"',' style="width:',d*aj,"px;"," height:",d*aw,'px"',' cropleft="',am/ag,'"',' croptop="',ak/au,'"',' cropright="',(ag-am-aq)/ag,'"',' cropbottom="',(au-ak-ay)/au,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",av.join(""))};t.stroke=function(aj){var ah=[];var Z=false;var m=10;var ak=10;ah.push("<g_vml_:shape",' filled="',!!aj,'"',' style="position:absolute;width:',m,"px;height:",ak,'px;"',' coordorigin="0,0"',' coordsize="',d*m,",",d*ak,'"',' stroked="',!aj,'"',' path="');var al=false;var ae={x:null,y:null};var ai={x:null,y:null};for(var af=0;af<this.currentPath_.length;af++){var j=this.currentPath_[af];var ag;switch(j.type){case"moveTo":ag=j;ah.push(" m ",q(j.x),",",q(j.y));break;case"lineTo":ah.push(" l ",q(j.x),",",q(j.y));break;case"close":ah.push(" x ");j=null;break;case"bezierCurveTo":ah.push(" c ",q(j.cp1x),",",q(j.cp1y),",",q(j.cp2x),",",q(j.cp2y),",",q(j.x),",",q(j.y));break;case"at":case"wa":ah.push(" ",j.type," ",q(j.x-this.arcScaleX_*j.radius),",",q(j.y-this.arcScaleY_*j.radius)," ",q(j.x+this.arcScaleX_*j.radius),",",q(j.y+this.arcScaleY_*j.radius)," ",q(j.xStart),",",q(j.yStart)," ",q(j.xEnd),",",q(j.yEnd));break}if(j){if(ae.x==null||j.x<ae.x){ae.x=j.x}if(ai.x==null||j.x>ai.x){ai.x=j.x}if(ae.y==null||j.y<ae.y){ae.y=j.y}if(ai.y==null||j.y>ai.y){ai.y=j.y}}}ah.push(' ">');if(!aj){y(this,ah)}else{G(this,ah,ae,ai)}ah.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",ah.join(""))};function y(m,ae){var j=F(m.strokeStyle);var p=j.color;var Z=j.alpha*m.globalAlpha;var i=m.lineScale_*m.lineWidth;if(i<1){Z*=i}ae.push("<g_vml_:stroke",' opacity="',Z,'"',' joinstyle="',m.lineJoin,'"',' miterlimit="',m.miterLimit,'"',' endcap="',S(m.lineCap),'"',' weight="',i,'px"',' color="',p,'" />')}function G(ao,ag,aI,ap){var ah=ao.fillStyle;var az=ao.arcScaleX_;var ay=ao.arcScaleY_;var j=ap.x-aI.x;var p=ap.y-aI.y;if(ah instanceof U){var al=0;var aD={x:0,y:0};var av=0;var ak=1;if(ah.type_=="gradient"){var aj=ah.x0_/az;var m=ah.y0_/ay;var ai=ah.x1_/az;var aK=ah.y1_/ay;var aH=ao.getCoords_(aj,m);var aG=ao.getCoords_(ai,aK);var ae=aG.x-aH.x;var Z=aG.y-aH.y;al=Math.atan2(ae,Z)*180/Math.PI;if(al<0){al+=360}if(al<0.000001){al=0}}else{var aH=ao.getCoords_(ah.x0_,ah.y0_);aD={x:(aH.x-aI.x)/j,y:(aH.y-aI.y)/p};j/=az*d;p/=ay*d;var aB=Y.max(j,p);av=2*ah.r0_/aB;ak=2*ah.r1_/aB-av}var at=ah.colors_;at.sort(function(aL,i){return aL.offset-i.offset});var an=at.length;var ar=at[0].color;var aq=at[an-1].color;var ax=at[0].alpha*ao.globalAlpha;var aw=at[an-1].alpha*ao.globalAlpha;var aC=[];for(var aF=0;aF<an;aF++){var am=at[aF];aC.push(am.offset*ak+av+" "+am.color)}ag.push('<g_vml_:fill type="',ah.type_,'"',' method="none" focus="100%"',' color="',ar,'"',' color2="',aq,'"',' colors="',aC.join(","),'"',' opacity="',aw,'"',' g_o_:opacity2="',ax,'"',' angle="',al,'"',' focusposition="',aD.x,",",aD.y,'" />')}else{if(ah instanceof T){if(j&&p){var af=-aI.x;var aA=-aI.y;ag.push("<g_vml_:fill",' position="',af/j*az*az,",",aA/p*ay*ay,'"',' type="tile"',' src="',ah.src_,'" />')}}else{var aJ=F(ao.fillStyle);var au=aJ.color;var aE=aJ.alpha*ao.globalAlpha;ag.push('<g_vml_:fill color="',au,'" opacity="',aE,'" />')}}}t.fill=function(){this.stroke(true)};t.closePath=function(){this.currentPath_.push({type:"close"})};t.getCoords_=function(p,j){var i=this.m_;return{x:d*(p*i[0][0]+j*i[1][0]+i[2][0])-f,y:d*(p*i[0][1]+j*i[1][1]+i[2][1])-f}};t.save=function(){var i={};x(this,i);this.aStack_.push(i);this.mStack_.push(this.m_);this.m_=J(C(),this.m_)};t.restore=function(){if(this.aStack_.length){x(this.aStack_.pop(),this);this.m_=this.mStack_.pop()}};function k(i){return isFinite(i[0][0])&&isFinite(i[0][1])&&isFinite(i[1][0])&&isFinite(i[1][1])&&isFinite(i[2][0])&&isFinite(i[2][1])}function X(j,i,p){if(!k(i)){return}j.m_=i;if(p){var Z=i[0][0]*i[1][1]-i[0][1]*i[1][0];j.lineScale_=N(H(Z))}}t.translate=function(m,j){var i=[[1,0,0],[0,1,0],[m,j,1]];X(this,J(i,this.m_),false)};t.rotate=function(j){var p=B(j);var m=o(j);var i=[[p,m,0],[-m,p,0],[0,0,1]];X(this,J(i,this.m_),false)};t.scale=function(m,j){this.arcScaleX_*=m;this.arcScaleY_*=j;var i=[[m,0,0],[0,j,0],[0,0,1]];X(this,J(i,this.m_),true)};t.transform=function(Z,p,af,ae,j,i){var m=[[Z,p,0],[af,ae,0],[j,i,1]];X(this,J(m,this.m_),true)};t.setTransform=function(ae,Z,ag,af,p,j){var i=[[ae,Z,0],[ag,af,0],[p,j,1]];X(this,i,true)};t.drawText_=function(ak,ai,ah,an,ag){var am=this.m_,aq=1000,j=0,ap=aq,af={x:0,y:0},ae=[];var i=w(E(this.font),this.element_);var p=aa(i);var ar=this.element_.currentStyle;var Z=this.textAlign.toLowerCase();switch(Z){case"left":case"center":case"right":break;case"end":Z=ar.direction=="ltr"?"right":"left";break;case"start":Z=ar.direction=="rtl"?"right":"left";break;default:Z="left"}switch(this.textBaseline){case"hanging":case"top":af.y=i.size/1.75;break;case"middle":break;default:case null:case"alphabetic":case"ideographic":case"bottom":af.y=-i.size/2.25;break}switch(Z){case"right":j=aq;ap=0.05;break;case"center":j=ap=aq/2;break}var ao=this.getCoords_(ai+af.x,ah+af.y);ae.push('<g_vml_:line from="',-j,' 0" to="',ap,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!ag,'" stroked="',!!ag,'" style="position:absolute;width:1px;height:1px;">');if(ag){y(this,ae)}else{G(this,ae,{x:-j,y:0},{x:ap,y:i.size})}var al=am[0][0].toFixed(3)+","+am[1][0].toFixed(3)+","+am[0][1].toFixed(3)+","+am[1][1].toFixed(3)+",0,0";var aj=q(ao.x/d)+","+q(ao.y/d);ae.push('<g_vml_:skew on="t" matrix="',al,'" ',' offset="',aj,'" origin="',j,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',ad(ak),'" style="v-text-align:',Z,";font:",ad(p),'" /></g_vml_:line>');this.element_.insertAdjacentHTML("beforeEnd",ae.join(""))};t.fillText=function(m,i,p,j){this.drawText_(m,i,p,j,false)};t.strokeText=function(m,i,p,j){this.drawText_(m,i,p,j,true)};t.measureText=function(m){if(!this.textMeasureEl_){var i='<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>';this.element_.insertAdjacentHTML("beforeEnd",i);this.textMeasureEl_=this.element_.lastChild}var j=this.element_.ownerDocument;this.textMeasureEl_.innerHTML="";this.textMeasureEl_.style.font=this.font;this.textMeasureEl_.appendChild(j.createTextNode(m));return{width:this.textMeasureEl_.offsetWidth}};t.clip=function(){};t.arcTo=function(){};t.createPattern=function(j,i){return new T(j,i)};function U(i){this.type_=i;this.x0_=0;this.y0_=0;this.r0_=0;this.x1_=0;this.y1_=0;this.r1_=0;this.colors_=[]}U.prototype.addColorStop=function(j,i){i=F(i);this.colors_.push({offset:j,color:i.color,alpha:i.alpha})};function T(j,i){Q(j);switch(i){case"repeat":case null:case"":this.repetition_="repeat";break;case"repeat-x":case"repeat-y":case"no-repeat":this.repetition_=i;break;default:O("SYNTAX_ERR")}this.src_=j.src;this.width_=j.width;this.height_=j.height}function O(i){throw new P(i)}function Q(i){if(!i||i.nodeType!=1||i.tagName!="IMG"){O("TYPE_MISMATCH_ERR")}if(i.readyState!="complete"){O("INVALID_STATE_ERR")}}function P(i){this.code=this[i];this.message=i+": DOM Exception "+this.code}var W=P.prototype=new Error;W.INDEX_SIZE_ERR=1;W.DOMSTRING_SIZE_ERR=2;W.HIERARCHY_REQUEST_ERR=3;W.WRONG_DOCUMENT_ERR=4;W.INVALID_CHARACTER_ERR=5;W.NO_DATA_ALLOWED_ERR=6;W.NO_MODIFICATION_ALLOWED_ERR=7;W.NOT_FOUND_ERR=8;W.NOT_SUPPORTED_ERR=9;W.INUSE_ATTRIBUTE_ERR=10;W.INVALID_STATE_ERR=11;W.SYNTAX_ERR=12;W.INVALID_MODIFICATION_ERR=13;W.NAMESPACE_ERR=14;W.INVALID_ACCESS_ERR=15;W.VALIDATION_ERR=16;W.TYPE_MISMATCH_ERR=17;G_vmlCanvasManager=e;CanvasRenderingContext2D=D;CanvasGradient=U;CanvasPattern=T;DOMException=P})()};