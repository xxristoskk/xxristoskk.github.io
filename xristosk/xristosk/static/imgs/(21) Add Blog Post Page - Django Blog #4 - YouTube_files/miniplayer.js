(function(g){var window=this;'use strict';var X3=function(a){g.V.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.Qg=!1;this.player=a;this.N(a,"minimized",this.Sh);this.N(a,"onStateChange",this.YC)},Y3=function(a){g.RL.call(this,a);
this.i=new X3(this.player);this.i.hide();g.HL(this.player,this.i.element,4);a.jf()&&(this.load(),g.L(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(X3,g.V);g.k=X3.prototype;
g.k.sB=function(){this.tooltip=new g.kP(this.player,this);g.H(this,this.tooltip);g.HL(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.lc=new g.HM(this.player);g.H(this,this.lc);this.Zg=new g.V({D:"div",K:"ytp-miniplayer-scrim"});g.H(this,this.Zg);this.Zg.xa(this.element);this.N(this.Zg.element,"click",this.Dx);var a=new g.V({D:"button",Ba:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.OJ()]});g.H(this,a);a.xa(this.Zg.element);this.N(a.element,"click",this.Di);
a=new g.y_(this.player,this);g.H(this,a);a.xa(this.Zg.element);this.Mo=new g.V({D:"div",K:"ytp-miniplayer-controls"});g.H(this,this.Mo);this.Mo.xa(this.Zg.element);this.N(this.Mo.element,"click",this.Dx);var b=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.H(this,b);b.xa(this.Mo.element);a=new g.V({D:"div",K:"ytp-miniplayer-play-button-container"});g.H(this,a);a.xa(this.Mo.element);var c=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.H(this,c);c.xa(this.Mo.element);this.mJ=new g.hO(this.player,
this,!1);g.H(this,this.mJ);this.mJ.xa(b.element);b=new g.eO(this.player,this);g.H(this,b);b.xa(a.element);this.nextButton=new g.hO(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.xa(c.element);this.dh=new g.YO(this.player,this);g.H(this,this.dh);this.dh.xa(this.Zg.element);this.Dc=new g.mO(this.player,this);g.H(this,this.Dc);g.HL(this.player,this.Dc.element,4);this.qx=new g.V({D:"div",K:"ytp-miniplayer-buttons"});g.H(this,this.qx);g.HL(this.player,this.qx.element,4);a=new g.V({D:"button",
Ba:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.OJ()]});g.H(this,a);a.xa(this.qx.element);this.N(a.element,"click",this.Di);a=new g.V({D:"button",Ba:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Close"},S:[g.TJ()]});g.H(this,a);a.xa(this.qx.element);this.N(a.element,"click",this.DR);this.N(this.player,"presentingplayerstatechange",this.wc);this.N(this.player,"appresize",this.kb);this.N(this.player,"fullscreentoggled",this.kb);this.kb()};
g.k.show=function(){this.Ed=new g.$m(this.wp,null,this);this.Ed.start();this.Qg||(this.sB(),this.Qg=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Dc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Ed&&(this.Ed.dispose(),this.Ed=void 0);g.V.prototype.hide.call(this);this.player.jf()||(this.Qg&&this.Dc.hide(),this.player.loadModule("annotations_module"))};
g.k.oa=function(){this.Ed&&(this.Ed.dispose(),this.Ed=void 0);g.V.prototype.oa.call(this)};
g.k.Di=function(){this.player.stopVideo();this.player.La("onCloseMiniplayer")};
g.k.DR=function(){this.player.playVideo()};
g.k.Dx=function(a){if(a.target===this.Zg.element||a.target===this.Mo.element)g.S(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.RI(this.player.rb())?this.player.pauseVideo():this.player.playVideo():this.player.La("onExpandMiniplayer")};
g.k.Sh=function(){g.L(this.player.getRootNode(),"ytp-player-minimized",this.player.jf())};
g.k.He=function(){this.Dc.Sb();this.dh.Sb()};
g.k.wp=function(){this.He();this.Ed&&this.Ed.start()};
g.k.wc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.kb=function(){g.xO(this.Dc,0,this.player.Wa().getPlayerSize().width,!1);g.oO(this.Dc)};
g.k.YC=function(a){this.player.jf()&&(0===a?this.hide():this.show())};
g.k.ac=function(){return this.tooltip};
g.k.Ve=function(){return!1};
g.k.lf=function(){return!1};
g.k.zi=function(){return!1};
g.k.Zx=function(){};
g.k.Mm=function(){};
g.k.Qq=function(){};
g.k.Ym=function(){return null};
g.k.ij=function(){return new g.Xf(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Ep=function(a,b,c,d,e){var f=0,h=d=0,l=g.sg(a);if(b){c=g.jn(b,"ytp-prev-button")||g.jn(b,"ytp-next-button");var m=g.jn(b,"ytp-play-button"),n=g.jn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.qg(b,this.element),h=b.x,f=b.y-12):n&&(h=g.jn(b,"ytp-miniplayer-button-top-left"),f=g.qg(b,this.element),b=g.sg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Wa().getPlayerSize().width;e=f+(e||0);l=g.be(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Xk=function(){};
g.k.zk=function(){return!1};g.v(Y3,g.RL);Y3.prototype.create=function(){};
Y3.prototype.Pi=function(){return!1};
Y3.prototype.load=function(){this.player.hideControls();this.i.show()};
Y3.prototype.unload=function(){this.player.showControls();this.i.hide()};g.XL.miniplayer=Y3;})(_yt_player);
