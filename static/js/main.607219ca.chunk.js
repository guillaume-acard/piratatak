(this.webpackJsonppiratatak=this.webpackJsonppiratatak||[]).push([[0],{18:function(e,t,a){e.exports=a(46)},23:function(e,t,a){},24:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),i=a(16),l=a.n(i),o=(a(23),a(3)),u=(a(24),a(11)),s=a(2),d=a(1),m=a(10),f=a(6),p=a.n(f),h=a(4),b=a(5);!function(e){e.PIRATE="pirate",e.CANNON="cannon",e.GOLD_COIN="gold coin",e.BOAT="boat",e.EMPTY="empty",e.DECK="deck"}(n||(n={}));var y,v=function e(t){Object(d.a)(this,e),this.type=void 0,this.type=t};!function(e){e.RED="red",e.BLUE="blue",e.YELLOW="yellow",e.GREEN="green"}(y||(y={}));var g=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e,r){var c;return Object(d.a)(this,a),(c=t.call(this,n.BOAT)).color=void 0,c.piece=void 0,c.color=e,c.piece=r,c}return a}(v),E=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.call(this,n.CANNON)}return a}(v),O=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.call(this,n.GOLD_COIN)}return a}(v),C=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,n.PIRATE)).id=void 0,r.id=e,r}return a}(v),k=a(7),j=a.n(k),T=function(){function e(t){var a=this;Object(d.a)(this,e),this.name=void 0,this.cards=[],this.boatColor=void 0,this.selectedCards=[],this.getBoatCards=function(){return a.boatColor?a.cards.filter((function(e){return e.type===n.BOAT})).map((function(e){return e})).filter((function(e){return e.color===a.boatColor})):[]},this.name=t}return Object(m.a)(e,[{key:"hasWon",value:function(){return 6===this.getBoatCards().length}},{key:"lastCard",value:function(){return j()(this.cards)}},{key:"lastCardIsPirate",value:function(){return j()(this.cards)instanceof C}}]),e}(),w=function e(t,a){Object(d.a)(this,e),this.players=void 0,this.playerTurn=void 0,this.turnCount=0,this.winningPlayer=void 0,this.deck=void 0,this.usedDeck=[],this.lastCard=void 0,this.players=t.map((function(e){return new T(e)})),this.playerTurn=this.players[0],this.deck=a},N=function e(){Object(d.a)(this,e)},S=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return a}(N),P=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return a}(N),A=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this)).targetCard=void 0,n.targetCard=e,n}return a}(N),I=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this)).cards=void 0,n.cards=e,n}return a}(N),D=function(e){for(var t=e.length;t;){var a=Math.floor(Math.random()*t--),n=e[t];e[t]=e[a],e[a]=n}return e},B=function(){function e(t){Object(d.a)(this,e),this.game=void 0,this.listeners=[];var a=[].concat(Object(s.a)(p()(1,21).map((function(e){return new O}))),Object(s.a)(p()(1,4).map((function(e){return new E}))),Object(s.a)(p()(1,9).map((function(e){return new C(e)}))),Object(s.a)(p()(1,7).map((function(e){return new g(y.BLUE,e)}))),Object(s.a)(p()(1,7).map((function(e){return new g(y.GREEN,e)}))),Object(s.a)(p()(1,7).map((function(e){return new g(y.RED,e)}))),Object(s.a)(p()(1,7).map((function(e){return new g(y.YELLOW,e)}))));D(a),this.game=new w(t,a)}return Object(m.a)(e,[{key:"subscribe",value:function(e){this.listeners.push(e)}},{key:"dispatch",value:function(e){if(e instanceof S){var t=this.game.deck.pop();if(this.game.lastCard=t,t&&(this.game.playerTurn.cards.push(t),!this.game.playerTurn.boatColor&&t.type===n.BOAT)){var a=t;this.game.players.some((function(e){return e.boatColor===a.color}))||(this.game.playerTurn.boatColor=a.color)}0===this.game.deck.length&&(D(this.game.usedDeck),this.game.deck=this.game.usedDeck,this.game.usedDeck=[])}if(e instanceof A){var r=e,c=this.game.players.find((function(e){return e.cards.includes(r.targetCard)})),i=[];this.game.playerTurn.cards=[].concat(Object(s.a)(this.game.playerTurn.cards.filter((function(e){return!(e.type===n.GOLD_COIN&&i.length<3)||(i.push(e),!1)}))),[r.targetCard]),c&&(c.cards=[].concat(Object(s.a)(c.cards.filter((function(e){return e!==r.targetCard}))),i))}if(e instanceof I){var l=e,o=this.game.playerTurn.cards.filter((function(e){return e.type===n.PIRATE}));this.game.playerTurn.cards=this.game.playerTurn.cards.filter((function(e){return!l.cards.includes(e)&&e.type!==n.PIRATE})),this.game.usedDeck=[].concat(Object(s.a)(this.game.usedDeck),Object(s.a)(o),Object(s.a)(l.cards)),this.game.playerTurn.cards.some((d=this.game.playerTurn,function(e){return!(!d.boatColor||e.type!==n.BOAT)&&e.color===d.boatColor}))||(this.game.playerTurn.boatColor=void 0)}var d;(e instanceof P||e instanceof I||e instanceof A)&&(this.game.turnCount+=1,this.game.playerTurn=this.game.players[this.game.turnCount%this.game.players.length]),this.game.winningPlayer=this.game.players.find((function(e){return e.hasWon()}));var m=Object(u.a)({},this.game);this.listeners.forEach((function(e){return e(m)}))}}]),e}(),L=(a(42),a(43),function(e){if(e.type===n.CANNON)return"".concat("/piratatak-build","/img/cannon.png");if(e.type===n.GOLD_COIN)return"".concat("/piratatak-build","/img/gold_coin.png");if(e.type===n.DECK)return"".concat("/piratatak-build","/img/card_back.png");if(e.type===n.EMPTY)return"".concat("/piratatak-build","/img/card_empty.jpg");if(e.type===n.PIRATE){var t=e;return"".concat("/piratatak-build","/img/pirate_").concat(t.id,".png")}if(e.type===n.BOAT){var a=e;return"".concat("/piratatak-build","/img/boat_").concat(a.color,"_").concat(a.piece,".jpg")}return"".concat("/piratatak-build","/img/card_back.png")}),_=function(e){var t=e.card,a=e.isSelected,r=void 0!==a&&a,i=e.onClick,l=e.size,o=void 0===l?"small":l,s=e.orientation,d=void 0===s?"vertical":s,m=e.style,f=e.className;return t?c.a.createElement("div",{className:"card ".concat(r&&"selected"," ").concat(i?"selectable":""," ").concat(o," ").concat(d," ").concat(f),onClick:function(e){e.preventDefault(),i&&i(t)},style:Object(u.a)({backgroundImage:"url(".concat(L(t),")"),opacity:t.type===n.EMPTY?.5:1},m)}):null},G=(a(44),function(e){var t=e.cards,a=e.selectedCards,n=e.setSelected,r=e.canSelect,i=e.orientation,l=void 0===i?"horizontal":i,o=e.cardOrientation,u=void 0===o?"vertical":o,s=e.cardSize,d=void 0===s?"small":s,m=e.onKeyPress;return c.a.createElement("div",{className:"card-list ".concat(l),onKeyPress:m},t.map((function(e,t){return c.a.createElement(_,{key:t,className:"fade-in",card:e,isSelected:a.includes(e),onClick:r&&r(e)?n:void 0,orientation:u,size:d,style:"vertical"===l?{top:"".concat(t,"px")}:null})})))}),z=a(17),M=a.n(z),R=new v(n.DECK),x=function(e){var t=e.card,a=e.enabled,n=e.style,i=e.onClick,l=e.clicked,u=Object(r.useState)(0),s=Object(o.a)(u,2),d=s[0],m=s[1];return Object(r.useEffect)((function(){a&&l&&m(1),1===d&&setTimeout((function(){m(2),i&&i()}),600)}),[d,i,l,a]),2===d?null:c.a.createElement(M.a,{isFlipped:d>0,containerStyle:n},c.a.createElement(_,{card:R,onClick:a?function(){return m(1)}:void 0,size:"normal"}),c.a.createElement(_,{card:t,size:"normal"}))};var Y=function(e){var t=e.game,a=e.dispatch,i=e.className,l=Object(r.useState)(),u=Object(o.a)(l,2),s=u[0],d=u[1];return function(e,t){function a(a){a.code===e&&t()}Object(r.useEffect)((function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}}),[])}("Space",(function(){return!s&&!t.playerTurn.lastCardIsPirate()&&d(j()(t.deck))})),c.a.createElement("div",{className:"game-deck surface ".concat(i)},c.a.createElement("div",null,c.a.createElement("h4",null,"Deck"),c.a.createElement("div",{className:"card-list vertical fixed"},t.deck.map((function(e,n){return c.a.createElement(x,{key:n,card:e,enabled:!t.playerTurn.lastCardIsPirate()&&n===t.deck.length-1,onClick:function(){a(new S),d(void 0)},style:{position:"absolute",top:"".concat(n,"px"),width:100},clicked:s===e})})))),c.a.createElement("div",null,c.a.createElement("h4",null,"Used Deck"),c.a.createElement(G,{cards:t.usedDeck.map((function(e){return new v(n.DECK)})),selectedCards:[],canSelect:function(){return!1},setSelected:void 0,orientation:"vertical",cardSize:"normal"})))},K=(new Audio("".concat("/piratatak-build","/sounds/pirate-1.m4a")),new Audio("".concat("/piratatak-build","/sounds/pirate-2.m4a"))),W=0,U=new Audio("".concat("/piratatak-build","/sounds/cannon-1.m4a")),F=new Audio("".concat("/piratatak-build","/sounds/cannon-2.m4a")),J=new Audio("".concat("/piratatak-build","/sounds/ho_no.m4a")),X=new Audio("".concat("/piratatak-build","/sounds/gold.m4a")),q=(a(45),function(e){var t=e.cards,a=e.selectedCards,r=e.setSelected,i=e.canSelect,l=[1,2,3,4,5,6].map((function(e){var a;return null!==(a=t.find((function(t){return t.piece===e})))&&void 0!==a?a:new v(n.EMPTY)}));return c.a.createElement("div",{className:"shipyard"},c.a.createElement("div",{className:"row"},l.slice(0,3).map((function(e,t){return c.a.createElement(_,{key:t,card:e,isSelected:a.includes(e),onClick:e.type!==n.EMPTY&&i(e)?r:void 0,size:"small"})}))),c.a.createElement("div",{className:"row"},l.slice(3,6).map((function(e,t){return c.a.createElement(_,{key:t,card:e,isSelected:a.includes(e),onClick:e.type!==n.EMPTY&&i(e)?r:void 0,size:"small"})}))))}),H=function(e){var t=e.player,a=e.playerTurn,r=e.selectedCards,i=e.setSelectedCards,l=e.dispatch,o=e.style,u=function(e){r.includes(e)?i(r.filter((function(t){return t!==e}))):i([].concat(Object(s.a)(r),[e]))},d=1===r.length&&r[0].type===n.BOAT?r[0]:null,m=r.filter((function(e){return e.type===n.CANNON}));return c.a.createElement("div",{key:t.name,className:"player ".concat(a===t?"active":"inactive"),style:o},c.a.createElement("h2",null,t.name),c.a.createElement("div",{className:"split"},c.a.createElement("div",null,c.a.createElement("h4",null,"Shipyard"),c.a.createElement(q,{cards:t.cards.filter((function(e){return e.type===n.BOAT&&e.color===t.boatColor})).map((function(e){return e})),selectedCards:r,setSelected:u,canSelect:function(){return t===a}})),c.a.createElement("div",null,c.a.createElement("h4",null,"Cannons"),c.a.createElement(G,{cards:t.cards.filter((function(e){return e.type===n.CANNON})),selectedCards:r,setSelected:u,canSelect:function(e){return a===t},cardOrientation:"horizontal"}))),c.a.createElement("h4",null,"Treasure"),c.a.createElement(G,{cards:t.cards.filter((function(e){return e.type===n.GOLD_COIN})),selectedCards:r,setSelected:u,canSelect:function(e){return a===t&&a.lastCardIsPirate()}}),c.a.createElement(G,{cards:t.cards.filter((function(e){return e.type===n.BOAT&&e.color!==t.boatColor})),selectedCards:r,setSelected:u,canSelect:function(e){return a===t&&a.lastCardIsPirate()||e.color===a.boatColor}}),t===a&&c.a.createElement("div",null,!t.lastCardIsPirate()&&c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:function(){return l(new P)}},"End Turn"),c.a.createElement("button",{disabled:!(d&&d.color===t.boatColor&&!t.cards.includes(d)&&t.cards.filter((function(e){return e.type===n.GOLD_COIN})).length>=3),onClick:function(){l(new A(r[0])),i([])}},"Buy Boat")),t.lastCardIsPirate()&&c.a.createElement(c.a.Fragment,null,0===m.length&&c.a.createElement("button",{disabled:r.length<Math.min(3,t.cards.length-1)||r.length>3,onClick:function(){l(new I(r)),i([]),J.play()}},Math.min(3,t.cards.length-1)>0?"Give Cards":"End Turn"),m.length>0&&c.a.createElement("button",{onClick:function(){l(new I([m[0]])),i([]),W%2===0&&U.play(),W%2===1&&F.play(),W++}},"Use Cannon!"))))},Q=function(e,t){var a=e.players.indexOf(e.playerTurn),n=e.players.indexOf(t)-a;return n<0&&(n=e.players.length+n),n-1},V=function(e){var t=e.game,a=e.selectedCards,n=e.setSelectedCards,r=e.dispatch;return c.a.createElement("div",{className:"players"},t.players.map((function(e,i){return c.a.createElement(H,{key:i,player:e,playerTurn:t.playerTurn,selectedCards:a,setSelectedCards:n,dispatch:r,style:{left:t.playerTurn===e?"20px":"calc(var(--player-width) + ".concat(Q(t,e)," * var(--player-shift))"),marginTop:t.playerTurn===e?0:40*Q(t,e)-55,zIndex:t.playerTurn===e?0:1e3-100*Q(t,e)}})})))},Z=function(e){var t=e.gameEngine,a=Object(r.useState)(t.game),n=Object(o.a)(a,2),i=n[0],l=n[1],u=Object(r.useState)([]),s=Object(o.a)(u,2),d=s[0],m=s[1];return Object(r.useEffect)((function(){l(t.game),t.subscribe((function(e){return l(e)}))}),[t]),Object(r.useEffect)((function(){var e=i.playerTurn.lastCard();e instanceof C?(i.playerTurn.lastCard().id,K.play()):e instanceof O&&X.play()}),[i]),c.a.createElement("div",{className:"game-board"},i.winningPlayer&&c.a.createElement("div",{className:"winning-player surface"},c.a.createElement("img",{src:"".concat("/piratatak-build","/img/win-captain.png")}),i.winningPlayer.name," WIN!!!"),c.a.createElement(V,{game:i,selectedCards:d,setSelectedCards:m,dispatch:function(e){return t.dispatch(e)}}),i.playerTurn.lastCardIsPirate()&&c.a.createElement("div",{className:"surface event-card"},c.a.createElement("h2",null,"PIRATE!"),c.a.createElement(_,{className:"shake",card:j()(i.playerTurn.cards),size:"large"})),!i.winningPlayer&&c.a.createElement(Y,{game:i,dispatch:function(e){return t.dispatch(e)}}))},$=function(e){var t=e.name,a=e.setName,n=e.remove;return c.a.createElement("div",null,c.a.createElement("input",{type:"text",value:t,onChange:function(e){return a(e.target.value)},placeholder:"Player name..."}),c.a.createElement("button",{onClick:n},"X"))},ee=function(e){var t=e.createGame,a=Object(r.useState)([{name:""},{name:""}]),n=Object(o.a)(a,2),i=n[0],l=n[1];return c.a.createElement("div",null,i.map((function(e,t){return c.a.createElement($,{key:t,name:e.name,setName:function(t){l(i.map((function(a){return a===e?{name:t}:a})))},remove:function(){return l(i.filter((function(t){return t!==e})))}})})),c.a.createElement("button",{disabled:4===i.length,onClick:function(){return l([].concat(Object(s.a)(i),[{name:""}]))}},"Add player"),c.a.createElement("button",{onClick:function(){return t(i.map((function(e){return e.name})))},disabled:0===i.length||i.length>4},"Start Game!"))};var te=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),a=t[0],n=t[1];return c.a.createElement("div",{className:"app"},c.a.createElement("h1",null,"Piratatak! ",c.a.createElement("button",{onClick:function(){return n(null)}},"New Game")),!a&&c.a.createElement(ee,{createGame:function(e){return n(new B(e))}}),a&&c.a.createElement(Z,{gameEngine:a}))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(te,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.607219ca.chunk.js.map