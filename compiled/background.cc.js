'use strict';var getClass,getId,getTag,GET,POST,fail,log,warn,error,trackEvent,storageDefault,createElement,runInPage,nodeReady;
(function(){getClass=function(d){return document.getElementsByClassName(d)};getId=function(d){return document.getElementById(d)};getTag=function(d){return document.getElementsByTagName(d)};HTMLElement.prototype.getClass=HTMLElement.prototype.getElementsByClassName;HTMLElement.prototype.getId=HTMLElement.prototype.getElementById;HTMLElement.prototype.getTag=HTMLElement.prototype.getElementsByTagName;String.prototype.contains=function(d){return-1<this.indexOf(d)};var d=function(d,a,l,i){var h=new XMLHttpRequest;
h.open(l,d,!0);h.onreadystatechange=function(){4===h.readyState&&a(h.responseText,h)};"POST"===l&&h.setRequestHeader("Content-type","application/x-www-form-urlencoded");h.send(i)};POST=function(m,a,l){d(m,a,"POST",l)};GET=function(m,a){d(m,a,"GET")};fail=function(d){alert(d);throw d;};log=function a(){if("undefined"!==typeof debug&&debug&&"undefined"!==typeof console){var d=arguments;try{d.callee=a.caller}catch(i){}d=[].slice.call(d);"object"===typeof console.log?log.apply.call(console.log,console,
d):console.log.apply(console,d)}};warn=function(a){debug&&console.warn(a);return a};error=function(a){debug&&console.error(a);return a};trackEvent=function(){"undefined"===typeof _kmq&&(window._kmq=[]);var a=[].slice.call(arguments);1===a.length?_kmq.push(["record",a[0].replace(/\s/gi,"_")]):_kmq.push(a)};storageDefault=function(a,d){if("string"===typeof a)null===localStorage.getItem(a)&&localStorage.setItem(a,d);else if("object"===typeof a)for(var i in a)null===localStorage.getItem(i)&&localStorage.setItem(a,
a[i]);else fail("storageDefault expects an object or 2 string arguments")};createElement=function(a,d,i){a=document.createElement(a);if("undefined"!==typeof d){for(var h in d)a[h]=d[h];if("undefined"!==typeof i)for(var f in i)a.setAttribute(f,i[f])}return a};JSON.guardedParse=function(a){var d={};try{0===a.indexOf("{")&&"}"===a.charAt(a.length-1)?d=JSON.parse(a):(console.log("first and last characters are not { and }. returning false"),d=!1)}catch(i){alert("BAD JSON: "+a),console.error("CAUGHT ERROR! ->",
i),d=!1}return d};runInPage=function(){var a=createElement("script"),d;for(d in arguments)"string"===typeof arguments[d]?a.innerHTML+=arguments[d]:"function"===typeof arguments[d]&&(a.innerHTML+="("+arguments[d]+"())");try{document.documentElement.appendChild(a)}catch(i){console.error("CAUGHT ERROR: ",i,"on:",a.innerHTML)}};nodeReady=function l(d,h,f){var b=typeof d;if("string"===b)try{b=eval(d)}catch(n){n instanceof EvalError?console.error("EvalError on call:"+d+" :( try passing in a function like: \nnodeReady(function(){return "+
d+";}, callback);",n):console.error("non-EvalError when executing call:"+d+" :(",n)}else if("function"===b)b=d();else throw b="At this time, nodeReady only accepts a string javascript call or function for the first argument, and the callback for the second argument.",alert(b),b;b?h(b):("undefined"===typeof f&&(f=40),setTimeout(function(){l(d,h)},f))}})();if("undefined"===typeof window||null===window)window={twttr:{}};null==window.twttr&&(window.twttr={});if("undefined"===typeof twttr||null===twttr)twttr={};
(function(){function d(e,g){g=g||"";"string"!==typeof e&&(e.global&&0>g.indexOf("g")&&(g+="g"),e.ignoreCase&&0>g.indexOf("i")&&(g+="i"),e.multiline&&0>g.indexOf("m")&&(g+="m"),e=e.source);return RegExp(e.replace(/#\{(\w+)\}/g,function(e,g){var a=twttr.txt.regexen[g]||"";"string"!==typeof a&&(a=a.source);return a}),g)}function m(e,g){return e.replace(/#\{(\w+)\}/g,function(e,a){return g[a]||""})}function a(e,g,c){var a=String.fromCharCode(g);c!==g&&(a+="-"+String.fromCharCode(c));e.push(a);return e}
function l(e){var g={},c;for(c in e)e.hasOwnProperty(c)&&(g[c]=e[c]);return g}function i(e,g,c){return!c?"string"===typeof e&&e.match(g)&&RegExp["$&"]===e:!e||e.match(g)&&RegExp["$&"]===e}twttr.txt={};twttr.txt.regexen={};var h={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#39;"};twttr.txt.htmlEscape=function(e){return e&&e.replace(/[&"'><]/g,function(e){return h[e]})};twttr.txt.regexSupplant=d;twttr.txt.stringSupplant=m;twttr.txt.addCharsToCharClass=a;var f=String.fromCharCode,b=[f(32),f(133),
f(160),f(5760),f(6158),f(8232),f(8233),f(8239),f(8287),f(12288)];a(b,9,13);a(b,8192,8202);var n=[f(65534),f(65279),f(65535)];a(n,8234,8238);twttr.txt.regexen.spaces_group=d(b.join(""));twttr.txt.regexen.spaces=d("["+b.join("")+"]");twttr.txt.regexen.invalid_chars_group=d(n.join(""));twttr.txt.regexen.punct=/\!'#%&'\(\)*\+,\\\-\.\/:;<=>\?@\[\]\^_{|}~\$/;b=[];a(b,1024,1279);a(b,1280,1319);a(b,11744,11775);a(b,42560,42655);a(b,1425,1471);a(b,1473,1474);a(b,1476,1477);a(b,1479,1479);a(b,1488,1514);a(b,
1520,1524);a(b,64274,64296);a(b,64298,64310);a(b,64312,64316);a(b,64318,64318);a(b,64320,64321);a(b,64323,64324);a(b,64326,64335);a(b,1552,1562);a(b,1568,1631);a(b,1646,1747);a(b,1749,1756);a(b,1758,1768);a(b,1770,1775);a(b,1786,1788);a(b,1791,1791);a(b,1872,1919);a(b,2208,2208);a(b,2210,2220);a(b,2276,2302);a(b,64336,64433);a(b,64467,64829);a(b,64848,64911);a(b,64914,64967);a(b,65008,65019);a(b,65136,65140);a(b,65142,65276);a(b,8204,8204);a(b,3585,3642);a(b,3648,3662);a(b,4352,4607);a(b,12592,12677);
a(b,43360,43391);a(b,44032,55215);a(b,55216,55295);a(b,65441,65500);a(b,12449,12538);a(b,12540,12542);a(b,65382,65439);a(b,65392,65392);a(b,65296,65305);a(b,65313,65338);a(b,65345,65370);a(b,12353,12438);a(b,12441,12446);a(b,13312,19903);a(b,19968,40959);a(b,173824,177983);a(b,177984,178207);a(b,194560,195103);a(b,12291,12291);a(b,12293,12293);a(b,12347,12347);twttr.txt.regexen.nonLatinHashtagChars=d(b.join(""));b=[];a(b,192,214);a(b,216,246);a(b,248,255);a(b,256,591);a(b,595,596);a(b,598,599);a(b,
601,601);a(b,603,603);a(b,611,611);a(b,616,616);a(b,623,623);a(b,626,626);a(b,649,649);a(b,651,651);a(b,699,699);a(b,768,879);a(b,7680,7935);twttr.txt.regexen.latinAccentChars=d(b.join(""));twttr.txt.regexen.hashSigns=/[#\uff03]/;twttr.txt.regexen.hashtagAlpha=d(/[a-z_#{latinAccentChars}#{nonLatinHashtagChars}]/i);twttr.txt.regexen.hashtagAlphaNumeric=d(/[a-z0-9_#{latinAccentChars}#{nonLatinHashtagChars}]/i);twttr.txt.regexen.endHashtagMatch=d(/^(?:#{hashSigns}|:\/\/)/);twttr.txt.regexen.hashtagBoundary=
d(/(?:^|$|[^&a-z0-9_#{latinAccentChars}#{nonLatinHashtagChars}])/);twttr.txt.regexen.validHashtag=d(/(#{hashtagBoundary})(#{hashSigns})(#{hashtagAlphaNumeric}*#{hashtagAlpha}#{hashtagAlphaNumeric}*)/gi);twttr.txt.regexen.validMentionPrecedingChars=/(?:^|[^a-zA-Z0-9_!#$%&*@\uff20]|RT:?)/;twttr.txt.regexen.atSigns=/[@\uff20]/;twttr.txt.regexen.validMentionOrList=d("(#{validMentionPrecedingChars})(#{atSigns})([a-zA-Z0-9_]{1,20})(/[a-zA-Z][a-zA-Z0-9_-]{0,24})?","g");twttr.txt.regexen.validReply=d(/^(?:#{spaces})*#{atSigns}([a-zA-Z0-9_]{1,20})/);
twttr.txt.regexen.endMentionMatch=d(/^(?:#{atSigns}|[#{latinAccentChars}]|:\/\/)/);twttr.txt.regexen.validUrlPrecedingChars=d(/(?:[^A-Za-z0-9@\uff20$#\uff03#{invalid_chars_group}]|^)/);twttr.txt.regexen.invalidUrlWithoutProtocolPrecedingChars=/[-_.\/]$/;twttr.txt.regexen.invalidDomainChars=m("#{punct}#{spaces_group}#{invalid_chars_group}",twttr.txt.regexen);twttr.txt.regexen.validDomainChars=d(/[^#{invalidDomainChars}]/);twttr.txt.regexen.validSubdomain=d(/(?:(?:#{validDomainChars}(?:[_-]|#{validDomainChars})*)?#{validDomainChars}\.)/);
twttr.txt.regexen.validDomainName=d(/(?:(?:#{validDomainChars}(?:-|#{validDomainChars})*)?#{validDomainChars}\.)/);twttr.txt.regexen.validGTLD=d(/(?:(?:aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|xxx)(?=[^0-9a-zA-Z]|$))/);twttr.txt.regexen.validCCTLD=d(/(?:(?:ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)(?=[^0-9a-zA-Z]|$))/);
twttr.txt.regexen.validPunycode=d(/(?:xn--[0-9a-z]+)/);twttr.txt.regexen.validDomain=d(/(?:#{validSubdomain}*#{validDomainName}(?:#{validGTLD}|#{validCCTLD}|#{validPunycode}))/);twttr.txt.regexen.validAsciiDomain=d(/(?:(?:[a-z0-9#{latinAccentChars}]+)\.)+(?:#{validGTLD}|#{validCCTLD}|#{validPunycode})/gi);twttr.txt.regexen.invalidShortDomain=d(/^#{validDomainName}#{validCCTLD}$/);twttr.txt.regexen.validPortNumber=d(/[0-9]+/);twttr.txt.regexen.validGeneralUrlPathChars=d(/[a-z0-9!\*';:=\+,\.\$\/%#\[\]\-_~|&#{latinAccentChars}]/i);
twttr.txt.regexen.validUrlBalancedParens=d(/\(#{validGeneralUrlPathChars}+\)/i);twttr.txt.regexen.validUrlPathEndingChars=d(/[\+\-a-z0-9=_#\/#{latinAccentChars}]|(?:#{validUrlBalancedParens})/i);twttr.txt.regexen.validUrlPath=d("(?:(?:#{validGeneralUrlPathChars}*(?:#{validUrlBalancedParens}#{validGeneralUrlPathChars}*)*#{validUrlPathEndingChars})|(?:@#{validGeneralUrlPathChars}+/))","i");twttr.txt.regexen.validUrlQueryChars=/[a-z0-9!?\*'\(\);:&=\+\$\/%#\[\]\-_\.,~|]/i;twttr.txt.regexen.validUrlQueryEndingChars=
/[a-z0-9_&=#\/]/i;twttr.txt.regexen.extractUrl=d("((#{validUrlPrecedingChars})((https?:\\/\\/)?(#{validDomain})(?::(#{validPortNumber}))?(\\/#{validUrlPath}*)?(\\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?))","gi");twttr.txt.regexen.validTcoUrl=/^https?:\/\/t\.co\/[a-z0-9]+/i;twttr.txt.regexen.cashtag=/[a-z]{1,6}(?:[._][a-z]{1,2})?/i;twttr.txt.regexen.validCashtag=d("(^|#{spaces})(\\$)(#{cashtag})(?=$|\\s|[#{punct}])","gi");twttr.txt.regexen.validateUrlUnreserved=/[a-z0-9\-._~]/i;twttr.txt.regexen.validateUrlPctEncoded=
/(?:%[0-9a-f]{2})/i;twttr.txt.regexen.validateUrlSubDelims=/[!$&'()*+,;=]/i;twttr.txt.regexen.validateUrlPchar=d("(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|[:|@])","i");twttr.txt.regexen.validateUrlScheme=/(?:[a-z][a-z0-9+\-.]*)/i;twttr.txt.regexen.validateUrlUserinfo=d("(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|:)*","i");twttr.txt.regexen.validateUrlDecOctet=/(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9]{2})|(?:2[0-4][0-9])|(?:25[0-5]))/i;
twttr.txt.regexen.validateUrlIpv4=d(/(?:#{validateUrlDecOctet}(?:\.#{validateUrlDecOctet}){3})/i);twttr.txt.regexen.validateUrlIpv6=/(?:\[[a-f0-9:\.]+\])/i;twttr.txt.regexen.validateUrlIp=d("(?:#{validateUrlIpv4}|#{validateUrlIpv6})","i");twttr.txt.regexen.validateUrlSubDomainSegment=/(?:[a-z0-9](?:[a-z0-9_\-]*[a-z0-9])?)/i;twttr.txt.regexen.validateUrlDomainSegment=/(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)/i;twttr.txt.regexen.validateUrlDomainTld=/(?:[a-z](?:[a-z0-9\-]*[a-z0-9])?)/i;twttr.txt.regexen.validateUrlDomain=
d(/(?:(?:#{validateUrlSubDomainSegment]}\.)*(?:#{validateUrlDomainSegment]}\.)#{validateUrlDomainTld})/i);twttr.txt.regexen.validateUrlHost=d("(?:#{validateUrlIp}|#{validateUrlDomain})","i");twttr.txt.regexen.validateUrlUnicodeSubDomainSegment=/(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9_\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;twttr.txt.regexen.validateUrlUnicodeDomainSegment=/(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;
twttr.txt.regexen.validateUrlUnicodeDomainTld=/(?:(?:[a-z]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;twttr.txt.regexen.validateUrlUnicodeDomain=d(/(?:(?:#{validateUrlUnicodeSubDomainSegment}\.)*(?:#{validateUrlUnicodeDomainSegment}\.)#{validateUrlUnicodeDomainTld})/i);twttr.txt.regexen.validateUrlUnicodeHost=d("(?:#{validateUrlIp}|#{validateUrlUnicodeDomain})","i");twttr.txt.regexen.validateUrlPort=/[0-9]{1,5}/;twttr.txt.regexen.validateUrlUnicodeAuthority=
d("(?:(#{validateUrlUserinfo})@)?(#{validateUrlUnicodeHost})(?::(#{validateUrlPort}))?","i");twttr.txt.regexen.validateUrlAuthority=d("(?:(#{validateUrlUserinfo})@)?(#{validateUrlHost})(?::(#{validateUrlPort}))?","i");twttr.txt.regexen.validateUrlPath=d(/(\/#{validateUrlPchar}*)*/i);twttr.txt.regexen.validateUrlQuery=d(/(#{validateUrlPchar}|\/|\?)*/i);twttr.txt.regexen.validateUrlFragment=d(/(#{validateUrlPchar}|\/|\?)*/i);twttr.txt.regexen.validateUrlUnencoded=d("^(?:([^:/?#]+):\\/\\/)?([^/?#]*)([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$",
"i");var q={urlClass:!0,listClass:!0,usernameClass:!0,hashtagClass:!0,cashtagClass:!0,usernameUrlBase:!0,listUrlBase:!0,hashtagUrlBase:!0,cashtagUrlBase:!0,usernameUrlBlock:!0,listUrlBlock:!0,hashtagUrlBlock:!0,linkUrlBlock:!0,usernameIncludeSymbol:!0,suppressLists:!0,suppressNoFollow:!0,suppressDataScreenName:!0,urlEntities:!0,symbolTag:!0,textWithSymbolTag:!0,urlTarget:!0,invisibleTagAttrs:!0,linkAttributeBlock:!0,linkTextBlock:!0},r={disabled:!0,readonly:!0,multiple:!0,checked:!0};twttr.txt.tagAttrs=
function(e){var g="",c;for(c in e){var a=e[c];r[c]&&(a=a?c:null);null!=a&&(g+=" "+twttr.txt.htmlEscape(c)+'="'+twttr.txt.htmlEscape(a.toString())+'"')}return g};twttr.txt.linkToText=function(e,g,c,a){a.suppressNoFollow||(c.rel="nofollow");a.linkAttributeBlock&&a.linkAttributeBlock(e,c);a.linkTextBlock&&(g=a.linkTextBlock(e,g));e={text:g,attr:twttr.txt.tagAttrs(c)};return m("<a#{attr}>#{text}</a>",e)};twttr.txt.linkToTextWithSymbol=function(e,g,c,a,b){var d=b.symbolTag?"<"+b.symbolTag+">"+g+"</"+b.symbolTag+
">":g,c=twttr.txt.htmlEscape(c),c=b.textWithSymbolTag?"<"+b.textWithSymbolTag+">"+c+"</"+b.textWithSymbolTag+">":c;return b.usernameIncludeSymbol||!g.match(twttr.txt.regexen.atSigns)?twttr.txt.linkToText(e,d+c,a,b):d+twttr.txt.linkToText(e,c,a,b)};twttr.txt.linkToHashtag=function(e,g,c){var g=g.substring(e.indices[0],e.indices[0]+1),a=twttr.txt.htmlEscape(e.hashtag),b=l(c.htmlAttrs||{});b.href=c.hashtagUrlBase+a;b.title="#"+a;b["class"]=c.hashtagClass;return twttr.txt.linkToTextWithSymbol(e,g,a,b,
c)};twttr.txt.linkToCashtag=function(e,g,c){var g=twttr.txt.htmlEscape(e.cashtag),a=l(c.htmlAttrs||{});a.href=c.cashtagUrlBase+g;a.title="$"+g;a["class"]=c.cashtagClass;return twttr.txt.linkToTextWithSymbol(e,"$",g,a,c)};twttr.txt.linkToMentionAndList=function(e,a,c){var a=a.substring(e.indices[0],e.indices[0]+1),b=twttr.txt.htmlEscape(e.screenName),d=twttr.txt.htmlEscape(e.listSlug),k=e.listSlug&&!c.suppressLists,j=l(c.htmlAttrs||{});j["class"]=k?c.listClass:c.usernameClass;j.href=k?c.listUrlBase+
b+d:c.usernameUrlBase+b;!k&&!c.suppressDataScreenName&&(j["data-screen-name"]=b);return twttr.txt.linkToTextWithSymbol(e,a,k?b+d:b,j,c)};twttr.txt.linkToUrl=function(e,a,c){var a=e.url,b=twttr.txt.htmlEscape(a),d=c.urlEntities&&c.urlEntities[a]||e;d.display_url&&(b=twttr.txt.linkTextWithEntity(d,c));var k=l(c.htmlAttrs||{});k.href=a;c.urlClass&&(k["class"]=c.urlClass);c.urlTarget&&(k.target=c.urlTarget);!c.title&&d.display_url&&(k.title=d.expanded_url);return twttr.txt.linkToText(e,b,k,c)};twttr.txt.linkTextWithEntity=
function(e,a){var c=e.display_url,b=e.expanded_url,d=c.replace(/\u2026/g,"");if(-1!=b.indexOf(d)){var k=b.indexOf(d),c={displayUrlSansEllipses:d,beforeDisplayUrl:b.substr(0,k),afterDisplayUrl:b.substr(k+d.length),precedingEllipsis:c.match(/^\u2026/)?"\u2026":"",followingEllipsis:c.match(/\u2026$/)?"\u2026":""},j;for(j in c)c.hasOwnProperty(j)&&(c[j]=twttr.txt.htmlEscape(c[j]));c.invisible=a.invisibleTagAttrs;return m("<span class='tco-ellipsis'>#{precedingEllipsis}<span #{invisible}>&nbsp;</span></span><span #{invisible}>#{beforeDisplayUrl}</span><span class='js-display-url'>#{displayUrlSansEllipses}</span><span #{invisible}>#{afterDisplayUrl}</span><span class='tco-ellipsis'><span #{invisible}>&nbsp;</span>#{followingEllipsis}</span>",
c)}return c};twttr.txt.autoLinkEntities=function(e,a,c){c=l(c||{});c.hashtagClass=c.hashtagClass||"tweet-url hashtag";c.hashtagUrlBase=c.hashtagUrlBase||"https://twitter.com/#!/search?q=%23";c.cashtagClass=c.cashtagClass||"tweet-url cashtag";c.cashtagUrlBase=c.cashtagUrlBase||"https://twitter.com/#!/search?q=%24";c.listClass=c.listClass||"tweet-url list-slug";c.usernameClass=c.usernameClass||"tweet-url username";c.usernameUrlBase=c.usernameUrlBase||"https://twitter.com/";c.listUrlBase=c.listUrlBase||
"https://twitter.com/";c.htmlAttrs=twttr.txt.extractHtmlAttrsFromOptions(c);c.invisibleTagAttrs=c.invisibleTagAttrs||"style='position:absolute;left:-9999px;'";var b,d,k;if(c.urlEntities){b={};d=0;for(k=c.urlEntities.length;d<k;d++)b[c.urlEntities[d].url]=c.urlEntities[d];c.urlEntities=b}b="";k=0;a.sort(function(e,c){return e.indices[0]-c.indices[0]});for(d=0;d<a.length;d++){var j=a[d];b+=e.substring(k,j.indices[0]);j.url?b+=twttr.txt.linkToUrl(j,e,c):j.hashtag?b+=twttr.txt.linkToHashtag(j,e,c):j.screenName?
b+=twttr.txt.linkToMentionAndList(j,e,c):j.cashtag&&(b+=twttr.txt.linkToCashtag(j,e,c));k=j.indices[1]}return b+=e.substring(k,e.length)};twttr.txt.autoLinkWithJSON=function(e,a,c){var b=[],d;for(d in a)b=b.concat(a[d]);for(a=0;a<b.length;a++)entity=b[a],entity.screen_name?entity.screenName=entity.screen_name:entity.text&&(entity.hashtag=entity.text);twttr.txt.modifyIndicesFromUnicodeToUTF16(e,b);return twttr.txt.autoLinkEntities(e,b,c)};twttr.txt.extractHtmlAttrsFromOptions=function(e){var a={},
c;for(c in e){var b=e[c];q[c]||(r[c]&&(b=b?c:null),null!=b&&(a[c]=b))}return a};twttr.txt.autoLink=function(e,a){var c=twttr.txt.extractEntitiesWithIndices(e,{extractUrlWithoutProtocol:!1});return twttr.txt.autoLinkEntities(e,c,a)};twttr.txt.autoLinkUsernamesOrLists=function(e,a){var c=twttr.txt.extractMentionsOrListsWithIndices(e);return twttr.txt.autoLinkEntities(e,c,a)};twttr.txt.autoLinkHashtags=function(e,a){var c=twttr.txt.extractHashtagsWithIndices(e);return twttr.txt.autoLinkEntities(e,c,
a)};twttr.txt.autoLinkCashtags=function(e,a){var c=twttr.txt.extractCashtagsWithIndices(e);return twttr.txt.autoLinkEntities(e,c,a)};twttr.txt.autoLinkUrlsCustom=function(a,b){var c=twttr.txt.extractUrlsWithIndices(a,{extractUrlWithoutProtocol:!1});return twttr.txt.autoLinkEntities(a,c,b)};twttr.txt.removeOverlappingEntities=function(a){a.sort(function(a,c){return a.indices[0]-c.indices[0]});for(var b=a[0],c=1;c<a.length;c++)b.indices[1]>a[c].indices[0]?(a.splice(c,1),c--):b=a[c]};twttr.txt.extractEntitiesWithIndices=
function(a,b){var c=twttr.txt.extractUrlsWithIndices(a,b).concat(twttr.txt.extractMentionsOrListsWithIndices(a)).concat(twttr.txt.extractHashtagsWithIndices(a,{checkUrlOverlap:!1})).concat(twttr.txt.extractCashtagsWithIndices(a));if(0==c.length)return[];twttr.txt.removeOverlappingEntities(c);return c};twttr.txt.extractMentions=function(a){for(var b=[],a=twttr.txt.extractMentionsWithIndices(a),c=0;c<a.length;c++)b.push(a[c].screenName);return b};twttr.txt.extractMentionsWithIndices=function(a){for(var b=
[],a=twttr.txt.extractMentionsOrListsWithIndices(a),c=0;c<a.length;c++)mentionOrList=a[c],""==mentionOrList.listSlug&&b.push({screenName:mentionOrList.screenName,indices:mentionOrList.indices});return b};twttr.txt.extractMentionsOrListsWithIndices=function(a){if(!a||!a.match(twttr.txt.regexen.atSigns))return[];var b=[];a.replace(twttr.txt.regexen.validMentionOrList,function(a,e,d,k,j,f,h){h.slice(f+a.length).match(twttr.txt.regexen.endMentionMatch)||(j=j||"",a=f+e.length,b.push({screenName:k,listSlug:j,
indices:[a,a+k.length+j.length+1]}))});return b};twttr.txt.extractReplies=function(a){if(!a)return null;a=a.match(twttr.txt.regexen.validReply);return!a||RegExp.rightContext.match(twttr.txt.regexen.endMentionMatch)?null:a[1]};twttr.txt.extractUrls=function(a,b){for(var c=[],d=twttr.txt.extractUrlsWithIndices(a,b),p=0;p<d.length;p++)c.push(d[p].url);return c};twttr.txt.extractUrlsWithIndices=function(a,b){b||(b={extractUrlsWithoutProtocol:!0});if(!a||(b.extractUrlsWithoutProtocol?!a.match(/\./):!a.match(/:/)))return[];
for(var c=[];twttr.txt.regexen.extractUrl.exec(a);){var d=RegExp.$2,p=RegExp.$3,k=RegExp.$5,j=RegExp.$7,f=twttr.txt.regexen.extractUrl.lastIndex,h=f-p.length;if(RegExp.$4)p.match(twttr.txt.regexen.validTcoUrl)&&(p=RegExp.lastMatch,f=h+p.length),c.push({url:p,indices:[h,f]});else if(b.extractUrlsWithoutProtocol&&!d.match(twttr.txt.regexen.invalidUrlWithoutProtocolPrecedingChars)){var i=null,l=!1,m=0;k.replace(twttr.txt.regexen.validAsciiDomain,function(a){var b=k.indexOf(a,m);m=b+a.length;i={url:a,
indices:[h+b,h+m]};(l=a.match(twttr.txt.regexen.invalidShortDomain))||c.push(i)});null!=i&&j&&(l&&c.push(i),i.url=p.replace(k,i.url),i.indices[1]=f)}}return c};twttr.txt.extractHashtags=function(a){for(var b=[],a=twttr.txt.extractHashtagsWithIndices(a),c=0;c<a.length;c++)b.push(a[c].hashtag);return b};twttr.txt.extractHashtagsWithIndices=function(a,b){b||(b={checkUrlOverlap:!0});if(!a||!a.match(twttr.txt.regexen.hashSigns))return[];var c=[];a.replace(twttr.txt.regexen.validHashtag,function(a,b,e,
d,g,f){f.slice(g+a.length).match(twttr.txt.regexen.endHashtagMatch)||(a=g+b.length,c.push({hashtag:d,indices:[a,a+d.length+1]}))});if(b.checkUrlOverlap){var d=twttr.txt.extractUrlsWithIndices(a);if(0<d.length){d=c.concat(d);twttr.txt.removeOverlappingEntities(d);for(var c=[],f=0;f<d.length;f++)d[f].hashtag&&c.push(d[f])}}return c};twttr.txt.extractCashtags=function(a){for(var b=[],a=twttr.txt.extractCashtagsWithIndices(a),c=0;c<a.length;c++)b.push(a[c].cashtag);return b};twttr.txt.extractCashtagsWithIndices=
function(a){if(!a||-1==a.indexOf("$"))return[];var b=[];a.replace(twttr.txt.regexen.validCashtag,function(a,e,d,f,j){a=j+e.length;b.push({cashtag:f,indices:[a,a+f.length+1]})});return b};twttr.txt.modifyIndicesFromUnicodeToUTF16=function(a,b){twttr.txt.convertUnicodeIndices(a,b,!1)};twttr.txt.modifyIndicesFromUTF16ToUnicode=function(a,b){twttr.txt.convertUnicodeIndices(a,b,!0)};twttr.txt.convertUnicodeIndices=function(a,b,c){if(0!=b.length){var d=0,f=0;b.sort(function(a,b){return a.indices[0]-b.indices[0]});
for(var k=0,j=b[0];d<a.length;){if(j.indices[0]==(c?d:f)){var h=j.indices[1]-j.indices[0];j.indices[0]=c?f:d;j.indices[1]=j.indices[0]+h;k++;if(k==b.length)break;j=b[k]}h=a.charCodeAt(d);55296<=h&&(56319>=h&&d<a.length-1)&&(h=a.charCodeAt(d+1),56320<=h&&57343>=h&&d++);f++;d++}}};twttr.txt.splitTags=function(a){for(var a=a.split("<"),b,c=[],d=0;d<a.length;d+=1)if(b=a[d]){b=b.split(">");for(var f=0;f<b.length;f+=1)c.push(b[f])}else c.push("");return c};twttr.txt.hitHighlight=function(a,b,c){b=b||[];
c=c||{};if(0===b.length)return a;var c=c.tag||"em",c=["<"+c+">","</"+c+">"],a=twttr.txt.splitTags(a),d,f,h="",j=0,i=a[0],m=0,l=0,n=!1,q=i,r=[],s;for(d=0;d<b.length;d+=1)for(f=0;f<b[d].length;f+=1)r.push(b[d][f]);for(b=0;b<r.length;b+=1){f=r[b];d=c[b%2];for(s=!1;null!=i&&f>=m+i.length;)h+=q.slice(l),n&&f===m+q.length&&(h+=d,s=!0),a[j+1]&&(h+="<"+a[j+1]+">"),m+=q.length,l=0,j+=2,q=i=a[j],n=!1;!s&&null!=i?(n=f-m,h+=q.slice(l,n)+d,l=n,n=0===b%2?!0:!1):s||(h+=d)}if(null!=i){l<q.length&&(h+=q.slice(l));
for(b=j+1;b<a.length;b+=1)h+=0===b%2?a[b]:"<"+a[b]+">"}return h};var t=[f(65534),f(65279),f(65535),f(8234),f(8235),f(8236),f(8237),f(8238)];twttr.txt.getTweetLength=function(a,b){b||(b={short_url_length:20,short_url_length_https:21});for(var c=a.length,d=twttr.txt.extractUrlsWithIndices(a),f=0;f<d.length;f++)c+=d[f].indices[0]-d[f].indices[1],c=d[f].url.toLowerCase().match(/^https:\/\//)?c+b.short_url_length_https:c+b.short_url_length;return c};twttr.txt.isInvalidTweet=function(a){if(!a)return"empty";
if(140<twttr.txt.getTweetLength(a))return"too_long";for(var b=0;b<t.length;b++)if(0<=a.indexOf(t[b]))return"invalid_characters";return!1};twttr.txt.isValidTweetText=function(a){return!twttr.txt.isInvalidTweet(a)};twttr.txt.isValidUsername=function(a){if(!a)return!1;var b=twttr.txt.extractMentions(a);return 1===b.length&&b[0]===a.slice(1)};var u=d(/^#{validMentionOrList}$/);twttr.txt.isValidList=function(a){a=a.match(u);return!(!a||!(""==a[1]&&a[4]))};twttr.txt.isValidHashtag=function(a){if(!a)return!1;
var b=twttr.txt.extractHashtags(a);return 1===b.length&&b[0]===a.slice(1)};twttr.txt.isValidUrl=function(a,b,c){null==b&&(b=!0);null==c&&(c=!0);if(!a)return!1;var d=a.match(twttr.txt.regexen.validateUrlUnencoded);if(!d||d[0]!==a)return!1;var a=d[1],f=d[2],h=d[3],j=d[4],d=d[5];return c&&(!i(a,twttr.txt.regexen.validateUrlScheme)||!a.match(/^https?$/i))||!i(h,twttr.txt.regexen.validateUrlPath)||!i(j,twttr.txt.regexen.validateUrlQuery,!0)||!i(d,twttr.txt.regexen.validateUrlFragment,!0)?!1:b&&i(f,twttr.txt.regexen.validateUrlUnicodeAuthority)||
!b&&i(f,twttr.txt.regexen.validateUrlAuthority)};"undefined"!=typeof module&&module.exports&&(module.exports=twttr.txt)})();(function(){try{var d=!1,m,a;chrome.omnibox.onInputEntered.addListener(function(a){twttr.txt.isValidTweetText(a)&&(d=a,m&&l(d,m,"tweetEntered"),console.log("tweet:"+a))});chrome.omnibox.onInputStarted.addListener(function(){var a=new XMLHttpRequest;a.open("GET","https://twitter.com",!0);a.onreadystatechange=function(){var f,b=a.responseText;b&&(f=b.indexOf('name="authenticity_token"'));if(b&&-1<f){f=b.substring(0,f);var b=f.lastIndexOf('value="')+7,i=f.lastIndexOf('"');m=f.substring(b,i);console.log("authToken:"+
m);d&&l(d,m,"xhr");a.abort()}};console.log("onInputStarted, request authToken");a.send()});chrome.omnibox.setDefaultSuggestion({description:"Tweet: %s"});chrome.omnibox.onInputChanged.addListener(function(a){100<a.length?(a=twttr.txt.getTweetLength(a),100<a&&chrome.omnibox.setDefaultSuggestion({description:"Tweet ("+a+"): %s"})):chrome.omnibox.setDefaultSuggestion({description:"Tweet: %s"})});var l=function(d,f,b){a=new XMLHttpRequest;a.open("POST","https://twitter.com/i/tweet/create",!0);a.onreadystatechange=
function(){if(4===a.readyState){var f="xhr"===b?" from xhr!":"";if(200===a.status)alert("Successfully posted tweet"+f);else{f=!0;try{var i=document.createElement("div");i.contentEditable=!0;document.body.appendChild(i);i.innerHTML=d;i.unselectable="off";i.focus();document.execCommand("SelectAll");document.execCommand("Copy",!1,null);document.body.removeChild(i);f=!1;alert("Your tweet failed to post, so we copied it to your clipboard.")}catch(l){}chrome.tabs.create({url:"https://twitter.com/"+(f?"":
"#"+d)})}a.abort();a=null}};a.setRequestHeader("Content-type","application/x-www-form-urlencoded");a.send("status="+d+"&place_id=&authenticity_token="+f);d=!1};chrome.omnibox.onInputCancelled.addListener(function(){d=!1;a&&a.abort()});console.log("loaded")}catch(i){throw alert("lastError:"+(chrome.runtime.lastError?chrome.runtime.lastError.message:"")),console.error("lastError object:",chrome.runtime.lastError),i;}})();