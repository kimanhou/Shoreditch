(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(20).concat([function(e,t,a){e.exports=a(80)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n,c=a(0),l=a.n(c),s=a(16),r=a.n(s),i=a(6),o=a(1),m=(a(25),a(8)),d=function e(t,a,n){Object(m.a)(this,e),this.platform=t,this.link=a,this.name=n};!function(e){e.INSTAGRAM="Instagram",e.WEBSITE="Website"}(n||(n={}));var u,p=function e(t,a,c,l,s,r,i){var o=this;Object(m.a)(this,e),this.getInstagram=function(){var e=o.socialMedia.find(function(e){return e.platform==n.INSTAGRAM});return void 0!==e?e.name:""},this.name=t,this.socialMedia=a,this.tags=c,this.description=l,this.shortName=s,this.photoPlaceUrl=r,this.photoFoodUrl=i};function f(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"===typeof e)return E(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return E(e,t)}(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,c,l=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){s=!0,c=e},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw c}}}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}!function(e){e.CUISINE="Cuisine",e.MOOD="Mood",e.DRINKS="Drinks",e.BUDGET="Budget"}(u||(u={}));var h=function e(t,a,n){var c=this;Object(m.a)(this,e),this.toJSON=function(){return c.label.toLowerCase()},this.equals=function(e){return c.label==e.label},this.isIncluded=function(e){return e.filter(function(e){return e.equals(c)}).length>0},this.label=t,this.description=a,this.tagCategory=n};h.deserialize=function(e){if("string"!=typeof e)throw new Error("Expected type string when deserializing Tag but got something else.");for(var t in h)if(t.toLowerCase()==e.toLowerCase())return h[t];throw new Error("Did not find Tag with label ".concat(e))},h.intersects=function(e,t){var a,n=f(e);try{for(n.s();!(a=n.n()).done;){if(a.value.isIncluded(t))return!0}}catch(c){n.e(c)}finally{n.f()}return!1},h.getAllTags=function(){return[h.LOCALSONLY,h.POPULAR,h.DATE,h.SHARING,h.QUIRKY,h.FAST,h.MARKET,h.INTIMATE,h.TAKEAWAY,h.PIZZA,h.SUSHI,h.INDIAN,h.BURGER,h.ITALIAN,h.FRENCH,h.ASIAN,h.BEER,h.COCKTAIL,h.PUB,h.CHEAP,h.FANCY]},h.getAllTagCategories=function(){return[u.CUISINE,u.MOOD,u.DRINKS,u.BUDGET]},h.getTagsByCategory=function(e){return h.getAllTags().filter(function(t){return t.tagCategory==e})},h.toQueryParam=function(e){return"tags=".concat(JSON.stringify(e))},h.LOCALSONLY=new h("LOCALSONLY","Locals only",u.MOOD),h.POPULAR=new h("POPULAR","Popular",u.MOOD),h.DATE=new h("DATE","Perfect for dates",u.MOOD),h.SHARING=new h("SHARING","Perfect for sharing",u.MOOD),h.QUIRKY=new h("QUIRKY","Quirky",u.MOOD),h.FAST=new h("FAST","Fast",u.MOOD),h.MARKET=new h("MARKET","Market stall",u.MOOD),h.INTIMATE=new h("INTIMATE","Intimate atmosphere",u.MOOD),h.TAKEAWAY=new h("TAKEAWAY","Take away",u.MOOD),h.PIZZA=new h("PIZZA","Great pizza",u.CUISINE),h.SUSHI=new h("SUSHI","Great sushi",u.CUISINE),h.INDIAN=new h("INDIAN","Great Indian food",u.CUISINE),h.BURGER=new h("BURGER","Great burgers",u.CUISINE),h.ITALIAN=new h("ITALIAN","Great Italian food",u.CUISINE),h.FRENCH=new h("FRENCH","Great French food",u.CUISINE),h.ASIAN=new h("ASIAN","Great Asian food",u.CUISINE),h.BEER=new h("BEER","Great beer",u.DRINKS),h.COCKTAIL=new h("COCKTAIL","Great cocktails",u.DRINKS),h.PUB=new h("PUB","Great pub",u.DRINKS),h.CHEAP=new h("CHEAP","Cheap eats",u.BUDGET),h.FANCY=new h("FANCY","Fancy eats",u.BUDGET);a(27);var g=function(e){var t=e.isHeader?"is-header":"";return l.a.createElement("div",{className:"shoreditch-by-maki ".concat(t)},l.a.createElement("div",{className:"shoreditch"},l.a.createElement("span",null,"Sh"),l.a.createElement("span",{className:"o"},"o"),l.a.createElement("span",null,"red\xectch")),l.a.createElement("div",{className:"by-maki"},"By Maki"))},w=(a(29),a(31),function(e){return l.a.createElement("svg",{className:"cross",viewBox:"0 0 8.4666665 8.4666669"},l.a.createElement("g",null,l.a.createElement("path",{className:"bar-1",style:{fill:"none",stroke:"#f9e44a",strokeWidth:"0.52916667",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:4,strokeOpacity:1},d:"M 1.3229167,1.3229167 C 2.7815707,3.6812045 5.1021027,5.3265599 7.14375,7.14375"}),l.a.createElement("path",{className:"bar-2",style:{fill:"none",stroke:"#f9e44a",strokeWidth:"0.52916667",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:4,strokeOpacity:1},d:"M 7.1460906,1.3498509 C 4.7878028,2.8085049 3.1424474,5.129037 1.3252573,7.1706842"})))}),N=(a(33),function(e){return l.a.createElement("div",{className:"footer-social ".concat(e.classname)},l.a.createElement("div",{className:"footer-social-background-hover"}),l.a.createElement(w,null),l.a.createElement("a",{href:e.link,target:"_blank"}))}),v=function(e){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer-copyright"},l.a.createElement(g,null),l.a.createElement("span",{className:"year"}," | 2021 \xa9")),l.a.createElement("div",{className:"footer-social-media"},l.a.createElement(N,{classname:"mail",link:"mailto:mark.kimanh@gmail.com"}),l.a.createElement(N,{classname:"instagram",link:"https://www.instagram.com/kimanhou/"}),l.a.createElement(N,{classname:"website",link:"https://www.instagram.com/kimanhou/"})))},A=(a(35),function(e){var t=e.hasBackground?"has-background":"";return l.a.createElement("div",{className:"header ".concat(t)},l.a.createElement(g,{isHeader:!0}),l.a.createElement("div",{className:"yellow-line left"}),l.a.createElement("div",{className:"yellow-line right"}))}),I=(a(37),function(e){var t="middle"==e.positionY?"middle-y":"",a="left"==e.positionX?"left-x":"",n="right"==e.positionX?"right-x":"",c="middle"==e.positionX?"middle-x":"";return l.a.createElement(i.b,{to:e.link},l.a.createElement("div",{className:"choice ".concat(t," ").concat(a," ").concat(n," ").concat(c),style:{width:e.width}},l.a.createElement("div",{className:"choice-content"},l.a.createElement("div",{className:"line first"},e.firstLine),l.a.createElement("div",{className:"line second"},e.secondLine))))}),b=(a(44),function(e){return l.a.createElement("div",{className:"home"},l.a.createElement(I,{positionX:"left",positionY:"middle",firstLine:"I am looking for",secondLine:"something specific",link:"/questions"}),l.a.createElement(I,{positionX:"right",positionY:"middle",firstLine:"I am open to",secondLine:"suggestions",link:"/places"}))}),y=(a(46),function(e){return l.a.createElement("div",{className:"home-page"},l.a.createElement("div",{className:"header-and-home"},l.a.createElement(A,null),l.a.createElement(b,null)),l.a.createElement(v,null))}),T=a(19),S=(a(48),a(50),function(e){return l.a.createElement("div",{className:"place-details-map"})}),k=(a(52),function(e){return l.a.createElement(i.b,{to:"/places?".concat(h.toQueryParam(e.tags)),className:"arrow-back-place-details"},"< BACK")}),C=(a(54),function(e){var t="small"===e.size?"small":"",a=e.isSelected?"selected":"",n=e.canBeUnselected?"can-be-unselected":"",c=e.cursorPointer?"cursor-pointer":"";return l.a.createElement("div",{className:"place-details-tag ".concat(t," ").concat(a," ").concat(c),onClick:e.onClick},l.a.createElement("div",{className:"place-details-tag-content ".concat(n)},l.a.createElement("div",{className:"place-details-tag-text"},e.tag.description),e.canBeUnselected&&void 0!=e.onRemove&&l.a.createElement("div",{className:"place-details-tag-close",onClick:function(){return e.onRemove(e.tag)}},"X")))}),R=(a(56),function(e){var t=e.tags.filter(function(e,t){return t%2==0}),a=e.tags.filter(function(e,t){return t%2==1});return l.a.createElement("div",{className:"place-details-tags"},l.a.createElement("div",{className:"place-details-tags-column left"},t.map(function(t){return l.a.createElement(C,{tag:t,size:e.size})})),l.a.createElement("div",{className:"place-details-tags-column right"},a.map(function(t){return l.a.createElement(C,{tag:t,size:e.size})})))}),O=(a(58),a(10)),L=(a(60),function(e){var t=Object(c.useState)(null),a=Object(O.a)(t,2),n=a[0],s=a[1];return Object(c.useEffect)(function(){fetch("https://graph.facebook.com/v9.0/instagram_oembed?url=".concat(e.url,"&access_token=857325501713225|f2b27b7ab1af66fad966fe773ffcaaf3")).then(function(e){if(e.ok)return e.json();throw new Error(e.statusText)}).then(function(e){return e.thumbnail_url}).then(s)},[]),l.a.createElement("div",{className:"place-details-photo",style:{backgroundImage:"url('".concat(n,"')")}},l.a.createElement("div",{className:"place-details-photo-background-hover"}),l.a.createElement("div",{className:"place-details-photo-caption"},e.caption),l.a.createElement("div",{className:"place-details-photo-photo-credits"},e.photoCredits))}),P=function(e){var t=null!=e.className?e.className:"";return l.a.createElement("div",{className:"place-details-photos ".concat(t)},null!=e.place&&l.a.createElement(l.a.Fragment,null,l.a.createElement(L,{caption:"The food",photoCredits:e.place.getInstagram(),url:e.place.photoFoodUrl}),l.a.createElement(L,{caption:"The place",photoCredits:e.place.getInstagram(),url:e.place.photoPlaceUrl})))},U=(a(62),a(64),function(e){return l.a.createElement("a",{href:e.social.link,target:"_blank",className:"place-details-social-media-a"},l.a.createElement("div",{className:"place-details-social-media"},l.a.createElement("div",{className:"place-details-social-media-content"},l.a.createElement("div",{className:"place-details-social-media-text"},e.social.platform))),l.a.createElement("div",{className:"place-details-social-media-name"},l.a.createElement("span",{className:"hide"},e.social.name),l.a.createElement("div",{className:"place-details-social-media-name-content"},e.social.name)))}),B=function(e){return l.a.createElement("div",{className:"place-details-social-medias"},e.socialMedias.map(function(e){return l.a.createElement(U,{social:e})}))},M=function(e){var t=null!=e.selectedPlace?"visible":"";return l.a.createElement("div",{className:"place-details ".concat(t)},null!=e.selectedPlace&&l.a.createElement("div",{className:"place-details-content"},l.a.createElement("div",{className:"place-details-left"},l.a.createElement(k,{tags:e.tags}),l.a.createElement("div",{className:"place-details-left-header"},e.selectedPlace.name),l.a.createElement("div",{className:"place-details-left-content"},l.a.createElement(R,{tags:e.selectedPlace.tags}),l.a.createElement("p",null,e.selectedPlace.description),l.a.createElement(B,{socialMedias:e.selectedPlace.socialMedia}))),l.a.createElement(P,{className:"place-details-right",place:e.selectedPlace})))},D=(a(66),a(68),function(e){var t=e.isLast?"last":"";return l.a.createElement("div",{className:"list-of-places-place ".concat(t)},l.a.createElement("div",{className:"list-of-places-place-content"},l.a.createElement("div",{className:"list-of-places-place-name"},l.a.createElement(i.b,{to:"/places/".concat(e.place.shortName,"?").concat(h.toQueryParam(e.tags))},e.place.name)),l.a.createElement("div",{className:"list-of-places-place-tags"},l.a.createElement(R,{tags:e.place.tags,size:"small"}))))}),G=(a(70),function(e){var t=h.getAllTagCategories(),a=e.isVisible?"visible":"hidden";return l.a.createElement("div",{className:"add-tags ".concat(a)},l.a.createElement("div",{className:"all-tags"},t.map(function(t){return l.a.createElement("div",{className:"tag-category"},l.a.createElement("div",{className:"tag-category-header"},t),h.getTagsByCategory(t).map(function(t){return l.a.createElement(C,{tag:t,size:"small",isSelected:t.isIncluded(e.selectedTags),onClick:function(){var a;(a=t).isIncluded(e.selectedTags)?e.onRemove(a):e.onAdd(a)},cursorPointer:!0})}))})))}),Y=(a(72),function(e){return l.a.createElement("div",{className:"selected-tags"},e.tags.map(function(t){return l.a.createElement(C,{tag:t,size:"small",isSelected:!0,canBeUnselected:!0,onRemove:e.onRemove})}))}),z=(a(74),function(e){var t=Object(c.useState)(!1),a=Object(O.a)(t,2),n=a[0],s=a[1];return l.a.createElement("div",{className:"selected-tags-and-add-button"},l.a.createElement("div",{className:"selected-tags-and-add-button-left"},l.a.createElement(Y,{tags:e.selectedTags,onRemove:e.onRemove})),l.a.createElement("div",{className:"selected-tags-and-add-button-right"},l.a.createElement(G,{selectedTags:e.selectedTags,onAdd:e.onAdd,onRemove:e.onRemove,isVisible:n})),l.a.createElement("div",{className:"add-tags-plus",onClick:function(){s(!n)}},"+"))}),H=function(e){var t=null!=e.selectedPlace?"hidden":"";return l.a.createElement("div",{className:"places-list ".concat(t)},l.a.createElement("div",{className:"places-list-content"},l.a.createElement("div",{className:"places-list-header"},"The places",l.a.createElement(z,{selectedTags:e.tags,onAdd:e.onAdd,onRemove:e.onRemove})),l.a.createElement("div",{className:"places-list-places"},e.places.slice(0,e.places.length-1).map(function(t){return l.a.createElement(D,{tags:e.tags,place:t})}),e.places.slice(e.places.length-1,e.places.length).map(function(t){return l.a.createElement(D,{tags:e.tags,place:t,isLast:!0})}))))},K=function(e){return l.a.createElement("div",{className:"results"},l.a.createElement(S,null),l.a.createElement("div",{className:"container"},l.a.createElement(H,{places:e.places,selectedPlace:e.selectedPlace,tags:e.tags,onAdd:e.onAdd,onRemove:e.onRemove}),l.a.createElement(M,{selectedPlace:e.selectedPlace,tags:e.tags})))},j=function(e){var t=function(){var e=Object(o.g)(),t={};return e.search.slice(1).split("&").map(function(e){return e.split("=")}).forEach(function(e){return t[decodeURIComponent(e[0])]=decodeURIComponent(e[1])}),t}(),a=t.tags,n=[];void 0!=a&&(n=JSON.parse(a).map(h.deserialize));var c=e.places.filter(function(e){return h.intersects(e.tags,n)}),s=Object(o.f)(),r=Object(o.g)(),i=function(e){t.tags;var a=Object(T.a)(t,["tags"]),n=Object.keys(a).map(function(e){return"".concat(e,"=").concat(encodeURIComponent(t[e]))});s.push("".concat(r.pathname,"?").concat(h.toQueryParam(e)).concat(n))},m=Object(o.h)().placeShortName,d=e.places.find(function(e){return e.shortName==m});return l.a.createElement("div",{className:"results-page"},l.a.createElement(A,{hasBackground:!0}),l.a.createElement(K,{places:c,selectedPlace:d,tags:n,onAdd:function(e){var t=n.concat(e);i(t)},onRemove:function(e){var t=n.indexOf(e);-1!==t&&n.splice(t,1),i(n)}}),l.a.createElement(v,null))},F=(a(76),function(e){return l.a.createElement("div",{className:"hungry-thirsty"},l.a.createElement(I,{positionX:"left",positionY:"middle",firstLine:"I am",secondLine:"hungry",link:"/places",width:"20vw"}),l.a.createElement(I,{positionX:"middle",positionY:"middle",firstLine:"I am",secondLine:"thirsty",link:"/places",width:"20vw"}),l.a.createElement(I,{positionX:"right",positionY:"middle",firstLine:"Both",secondLine:"",link:"/places",width:"20vw"}))}),W=function(e){return l.a.createElement("div",{className:"home-page"},l.a.createElement(A,null),l.a.createElement(F,null),l.a.createElement(v,null))},x=function(e){var t="Tucked in a hidden back alley between buzzing Liverpool Street and even more buzzing Spitafields Market, Yuzu is a haven of peace. The experience of dining in a minimalist decor with earthy colors and dimmed lights will make you forget you are in a vibrant neighborhood. The food is both traditional and contemporary. Lunch is kaiten, dinner is more sophisticated with a French influence. Always delicious !",a=[new p("Yuzu",[new d(n.WEBSITE,"https://www.yuzulondon.com/","www.yuzulondon.com"),new d(n.INSTAGRAM,"https://www.instagram.com/yuzulondon/","@yuzulondon")],[h.SUSHI,h.INTIMATE,h.DATE,h.LOCALSONLY],t,"yuzu","https://www.instagram.com/p/B5N1yCGnNtB/","https://www.instagram.com/p/CIRJrbrH31A/"),new p("Patty & Bun",[new d(n.WEBSITE,"https://www.pattyandbun.co.uk/","www.pattyandbun.co.uk"),new d(n.INSTAGRAM,"https://www.instagram.com/pattyandbun/","@pattyandbun")],[h.BURGER,h.POPULAR,h.TAKEAWAY,h.FAST],t,"patty-and-bun","https://www.instagram.com/p/CEt7tLehISY/","https://www.instagram.com/p/CIsbqC6h0MC/"),new p("Gloria Trattoria",[new d(n.WEBSITE,"https://www.bigmammagroup.com/en/trattorias/gloria","www.bigmammagroup.com"),new d(n.INSTAGRAM,"https://www.instagram.com/bigmamma.uk/","@bigmamma.uk")],[h.PIZZA,h.POPULAR,h.ITALIAN,h.DATE],t,"gloria","https://www.instagram.com/p/CFB6TPTHwZr/","https://www.instagram.com/p/CClsReyHPie/"),new p("Dishoom",[new d(n.WEBSITE,"https://www.dishoom.com/","www.dishoom.com"),new d(n.INSTAGRAM,"https://www.instagram.com/dishoom/","@dishoom")],[h.INDIAN,h.POPULAR,h.DATE,h.SHARING],t,"dishoom","https://www.instagram.com/p/B4cV9SnB20K/","https://www.instagram.com/p/CGr1RE2BrYt/"),new p("Rosemary Branch",[new d(n.WEBSITE,"https://www.rosemarybranchtheatre.co.uk/","www.rosemarybranchtheatre.co.uk"),new d(n.INSTAGRAM,"https://www.instagram.com/rosiebtheatre/","@rosiebtheatre")],[h.PUB,h.QUIRKY,h.LOCALSONLY],t,"rosemary","https://www.instagram.com/p/CCWIP5Pn4pH/","https://www.instagram.com/p/B9MmDBvHy8N/")];return l.a.createElement("div",{className:"App"},l.a.createElement(i.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/"},l.a.createElement(y,null)),l.a.createElement(o.a,{path:["/places/:placeShortName","/places/"]},l.a.createElement(j,{places:a})),l.a.createElement(o.a,{path:["/questions/:stepNumber","/questions/"]},l.a.createElement(W,null)))))};a(78);r.a.render(l.a.createElement(x,null),document.getElementById("root"))}]),[[20,2,1]]]);
//# sourceMappingURL=main.289bfdb3.chunk.js.map