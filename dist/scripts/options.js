"use strict";function shoot(a){$danmuItem=$("<div>"+a+"</div>").addClass("weshoot-item").addClass("default"),$danmuItem.hide().appendTo("body"),$danmuItem.css({"font-size":~~(10*Math.random())+18}),$danmuItem.css({top:Math.max(0,~~(Math.random()*HEIGHT)-$danmuItem.height()),left:WIDTH+$danmuItem.width(),color:"#"+Math.floor(16777215*Math.random()).toString(16),width:$danmuItem.width()}).show(),$danmuItem.animate({left:-$danmuItem.width()},~~(15*Math.random())+15e3,"linear",function(){-$(this).css("left").slice(0,-2)-100<=$danmuItem.width()&&$(this).remove()})}console.log("'Allo 'Allo! Option"),chrome.runtime.onMessage.addListener(function(a,b,c){console.log(a),shoot(a.msg.text?a.msg.text:'<img src="'+a.msg.image+'" />'),c({status:"OK"})});var danmus=["呜呜呜呜","呵呵","约吗","不约，叔叔我们不约","100块钱都不给我","坑爹坑爹的","对对对","到底"],HEIGHT=window.innerHeight,WIDTH=window.innerWidth,danmuTop,danmuRight,danmuWidth,$danmuItem;