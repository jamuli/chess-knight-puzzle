(this.webpackJsonpknight_move_trainer=this.webpackJsonpknight_move_trainer||[]).push([[0],{67:function(e,t,n){},68:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(26),a=n.n(c),i=(n(67),n(68),n(15)),s=n(5),u=n(81),o=n(47),l=n(1);var d=function(){return Object(l.jsx)("div",{children:"This is the about page"})};function b(){return Object(l.jsx)("a",{className:"header-link",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/jamuli/chess-knight-puzzle",children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"octicon-mark-github",height:"32",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true",children:Object(l.jsx)("path",{class:"github-svg","fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})})}function j(){return Object(l.jsx)(i.c,{className:"header-link",to:"/",children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 384 512","aria-hidden":"true",children:Object(l.jsx)("path",{d:"M19 272.47l40.63 18.06a32 32 0 0 0 24.88.47l12.78-5.12a32 32 0 0 0 18.76-20.5l9.22-30.65a24 24 0 0 1 12.55-15.65L159.94 208v50.33a48 48 0 0 1-26.53 42.94l-57.22 28.65A80 80 0 0 0 32 401.48V416h319.86V224c0-106-85.92-192-191.92-192H12A12 12 0 0 0 0 44a16.9 16.9 0 0 0 1.79 7.58L16 80l-9 9a24 24 0 0 0-7 17v137.21a32 32 0 0 0 19 29.26zM52 128a20 20 0 1 1-20 20 20 20 0 0 1 20-20zm316 320H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z",class:""})})})}var g=function(){return Object(l.jsx)(i.c,{className:"header-link",to:"/about",children:"About"})};var f=function(){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("div",{className:"header-item github-link",children:Object(l.jsx)(j,{})}),Object(l.jsx)("div",{className:"header-item",children:Object(l.jsx)(g,{})}),Object(l.jsx)("div",{className:"header-item github-link",children:Object(l.jsx)(b,{})})]})},O=n(4),h=function(e){return{type:"SELECT_SQUARE",squareIndex:e}},v=function(e,t){return{type:"MOVE_PIECE",squareIndex:e}},m=function(e){return{type:"END_GAME",gameEnding:e}},x="knight",E=[-21,-19,-12,-8,8,12,19,21],p=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,0,0,1,0,0,1,0,-1,-1,0,1,0,1,0,1,0,0,-1,-1,0,0,1,1,1,0,0,0,-1,-1,1,1,1,1,1,1,1,1,-1,-1,0,0,1,1,1,0,0,0,-1,-1,0,1,0,1,0,1,0,0,-1,-1,1,0,0,1,0,0,1,0,-1,-1,0,0,0,1,0,0,0,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],S=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,0,0,1,0,0,1,2,-1,-1,0,1,0,1,0,1,0,0,-1,-1,0,0,1,1,1,0,0,0,-1,-1,1,1,1,1,1,1,1,1,-1,-1,0,0,1,1,1,0,0,0,-1,-1,0,1,0,1,0,1,0,0,-1,-1,1,0,0,1,0,0,1,0,-1,-1,0,0,0,1,0,0,0,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],T="#EEEED2",_="#769656",N="#F6F668",w="#BBCA2B",A=function(e,t){var n=("0"+Math.floor(e%100)).slice(-2),r=("0"+Math.floor(e/100%60)).slice(-2),c=("0"+Math.floor(e/6e3)%50).slice(-2);return t?"".concat(c," : ").concat(r," : ").concat(n):"".concat(c," : ").concat(r)},q=function(e){return(e%10-1+Math.floor((e-20)/10))%2===0};function M(){return Object(l.jsx)("div",{})}var k=n(17),y=n.p+"static/media/knight_b.d714eeb4.svg",R=n(83);function D(e){var t=e.i,n=Object(O.c)((function(e){return e.game.gameStarted})),r=Object(O.c)((function(e){return e.game.gameEnded})),c=Object(R.a)({type:x,collect:function(e){return{isDragging:!!e.isDragging()}}}),a=Object(k.a)(c,2),i=(a[0].isDragging,a[1],Object(O.b)());function s(e){e.preventDefault()}return Object(l.jsx)("div",{className:"chess-piece-container",draggable:"true",onSelect:function(e){return s()},onDragStart:function(e){return function(e){n||r?r||i(h(t)):e.preventDefault()}(e)},onDrag:function(e){return function(e){e.preventDefault()}(e)},style:{width:"100%",height:"100%",cursor:"move"},children:Object(l.jsx)("img",{onSelect:function(e){return s()},className:"chess-piece",src:y,alt:""})})}var I=n.p+"static/media/queen_w.5b678bc3.svg";function C(){return Object(l.jsx)("div",{className:"chess-piece-container",children:Object(l.jsx)("img",{className:"chess-piece",src:I,alt:""})})}var G=n(84);function L(e){var t=e.isWhite,n=e.i,r=e.children,c=Object(O.b)(),a=Object(G.a)({accept:x,drop:function(e,t){return console.log(e)},collect:function(e){return{isOver:!!e.isOver(),canDrop:!!e.canDrop()}}}),i=Object(k.a)(a,2),s=(i[0],i[1],Object(O.c)((function(e){return e.game.gameStarted}))),u=Object(O.c)((function(e){return e.game.gameEnded})),o=Object(O.c)((function(e){return e.board})),d=o.selectedSquare,b=o.pieceSelected,j=o.validKnightMoves,g=o.illegalSquare,f=Object(O.c)((function(e){return e.target})).nextTarget,h=-1!==j.indexOf(n),E=function(e,t){return t?e?N:w:e?T:_}(t,d===n||h&&2===b),p=function(e,t,n,r){var c="none";return e===n&&e===r?(c="none",c=t?"wrong-square-blinker-white 0.5s linear 2, next-square-blinker-white 2s linear infinite":"wrong-square-blinker-black 0.5s linear 2, next-square-blinker-black 2s linear infinite"):e===n?c=t?"wrong-square-blinker-white 0.5s linear 2":"wrong-square-blinker-black 0.5s linear 2":e===r&&(c=t?"next-square-blinker-white 2s linear infinite":"next-square-blinker-black 2s linear infinite"),c}(n,t,g,f);function S(e){e.preventDefault();var t=parseInt(e.target.id);s&&!u&&(c(v(t)),function(e){-1!==j.indexOf(e)&&e===f&&(c({type:"UPDATE_TARGET"}),91===e&&c(m()))}(t))}function A(e){s||u||e.preventDefault(),console.log("drag started",e)}return Object(l.jsx)("div",{className:"square",id:n,onDragStart:function(e){return A},onSelect:function(e){return function(e){e.preventDefault()}(e)},onDrop:function(e){return S(e)},style:{backgroundColor:E,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",animation:p},children:r})}function U(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.game.gameStarted})),n=Object(O.c)((function(e){return e.game.gameEnded})),r=Object(O.c)((function(e){return e.board.board})),c=Object(O.c)((function(e){return e.board.pieceSelected})),a=Object(O.c)((function(e){return e.board.squareIsSelected})),i=Object(O.c)((function(e){return e.board.selectedSquare})),s=Object(O.c)((function(e){return e.board.validKnightMoves})),u=Object(O.c)((function(e){return e.target.nextTarget})),o=function(e,t){switch(e){case 0:return Object(l.jsx)(M,{i:t});case 2:return Object(l.jsx)(D,{i:t});case 4:return Object(l.jsx)(C,{i:t});default:return Object(l.jsx)(M,{i:t})}};function d(r,d){if(-1!==r)return Object(l.jsx)("div",{className:"square",onClick:function(r){return function(r){if(!t)return;a&&0!==c?i===r?e({type:"UNSELECT_SQUARE"}):t&&!n&&(e(v(o=r)),-1!==s.indexOf(o)&&o===u&&(e({type:"UPDATE_TARGET"}),91===o&&e(m()))):n||(e(h(r)),e({type:"RESET_ILLEGAL_SQUARE"}));var o}(d)},children:Object(l.jsx)(L,{i:d,isWhite:q(d),children:Object(l.jsx)("div",{id:"chess-piece",className:"chess-piece",children:o(r,d)})})},d)}return Object(l.jsx)("div",{className:"board-container",children:Object(l.jsx)("div",{className:"board",children:r.map((function(e,t){return d(e,t)}))})})}var z=n(82);function F(){var e=Object(O.c)((function(e){return e.board.illegalMoveCounter}));function t(e,t){var n=e?"illegal-move-icon-big-disabled":"illegal-move-icon-big-enabled";return Object(l.jsx)("div",{className:n,children:Object(l.jsx)(z.a,{name:"x",disabled:e,fitted:!0,color:"red",size:"big"})},t)}return Object(l.jsx)("div",{className:"illegal-move-icon-container",children:function(){for(var n=[],r=0;r<3;r++)r<e?n.push(t(!1,r)):n.push(t(!0,r));return n}()})}var K=n(46);function B(){var e=Object(r.useState)(0),t=Object(k.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),i=Object(k.a)(a,2),s=i[0],u=i[1],o=Object(O.b)(),d=Object(O.c)((function(e){return e.game.gameStarted})),b=Object(O.c)((function(e){return e.game.gameEnded}));Object(r.useEffect)((function(){var e=null;return b&&s&&(clearInterval(e),u(!1)),s?(d||o({type:"START_GAME"}),e=setInterval((function(){c((function(e){return e+1}))}),10)):clearInterval(e),function(){return clearInterval(e)}}),[s,b,d,o]);var j=Object(K.useMediaQuery)({query:"(min-width: 400px)"});return console.log(j),Object(l.jsx)("div",{className:"timer-container",children:d?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{style:{padding:"20px"},children:[" ",A(n,j)]}),Object(l.jsx)(z.a,{className:"timer-button reset",name:"sync alternate",size:"small",link:!0,onClick:function(){return u(!1),c(0),void o({type:"RESET_GAME"})}})]}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("button",{className:"timer-button-start-game",onClick:function(){return u(!0),void o({type:"START_GAME"})},children:"Start Game"})})})}function P(){var e=Object(O.b)(),t=(Object(O.c)((function(e){return e.game.gameStarted})),Object(O.c)((function(e){return e.board.illegalMoveCounter})));return Object(r.useEffect)((function(){3===t&&e(m())})),Object(l.jsxs)("div",{className:"game-container",children:[Object(l.jsx)(B,{}),Object(l.jsx)(U,{}),Object(l.jsx)(F,{})]})}var Q=function(){return Object(l.jsx)(i.b,{children:Object(l.jsx)(u.a,{backend:o.a,children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(f,{}),Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{exact:!0,path:"/about",component:d}),Object(l.jsx)(s.a,{exact:!0,path:"/",component:P})]})]})})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},V=n(16),X=n(48),W={board:Object(X.a)([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,2,-1,-1,0,0,0,0,0,0,0,0,-1,-1,0,0,0,0,0,0,0,0,-1,-1,0,0,0,4,0,0,0,0,-1,-1,0,0,0,0,0,0,0,0,-1,-1,0,0,0,0,0,0,0,0,-1,-1,0,0,0,0,0,0,0,0,-1,-1,0,0,0,0,0,0,0,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),squareIsSelected:!1,selectedSquare:void 0,pieceSelected:void 0,validKnightMoves:[36,47],illegalSquare:void 0,illegalMoveCounter:0,moves:[]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:JSON.parse(JSON.stringify(W)),t=arguments.length>1?arguments[1]:void 0;function n(t){e.squareIsSelected=!0,e.selectedSquare=t,e.pieceSelected=e.board[t]}function r(){e.squareIsSelected=!1,e.selectedSquare=void 0,e.pieceSelected=void 0}function c(t){e.validKnightMoves=[];var n=t;E.forEach((function(t){var r=n+t;-1!==e.board[r]&&e.validKnightMoves.push(r)}))}function a(t){return-1!==e.validKnightMoves.indexOf(t)&&1===p[t]}function i(t,n){return-1!==e.validKnightMoves.indexOf(t)&&1!==p[t]&&2===e.pieceSelected}function s(t,n){i(n)?(e.board[t]=0,e.board[n]=e.pieceSelected,c(n),r(),o()):(a(n)&&e.illegalMoveCounter++,r(),u(n))}function u(t){e.illegalSquare=t}function o(){e.illegalSquare=void 0}switch(t.type){default:return e;case"SELECT_SQUARE":return n(t.squareIndex),e;case"UNSELECT_SQUARE":return r(),e;case"RESET_ILLEGAL_SQUARE":return o(),e;case"MOVE_PIECE":return s(e.selectedSquare,t.squareIndex),e;case"RESET_GAME":return e.board[28]=2,JSON.parse(JSON.stringify(W))}},Y=n(6),Z={gameType:"",gameStarted:!1,gameEnded:!1,playerWon:!1,gameReset:void 0},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(Y.a)({},Z),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_GAME":return Object(Y.a)(Object(Y.a)({},e),{},{gameStarted:!0,gameReset:!1});case"END_GAME":return Object(Y.a)(Object(Y.a)({},e),{},{gameEnded:!0,playerWon:t.gameEnding});case"RESET_GAME":return Object(Y.a)(Object(Y.a)({},Z),{},{gameReset:!0});default:return e}},ee={nextTarget:void 0,goalSquares:te(S)};function te(e){for(var t=[],n=26;n<=98;)0===e[n]&&t.push(n),n%10===1?n+=17:n--;return t}var ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(Y.a)({},ee),t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case"START_GAME":return Object(Y.a)(Object(Y.a)({},e),{},{nextTarget:26});case"UPDATE_TARGET":return 0===e.goalSquares.length?(console.log("an error has been made with NEXT_TARGET in targetReducer.js"),e):(e.goalSquares.shift(),e.nextTarget=e.goalSquares[0],e);case"RESET_GAME":return Object(Y.a)(Object(Y.a)({},e),{},{nextTarget:void 0,goalSquares:te(S)})}},re={isOn:!1,time:0},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case"START_TIMER":return Object(Y.a)(Object(Y.a)({},e),{},{isOn:!0,offset:t.offset,interval:t.interval});case"TICK":return Object(Y.a)(Object(Y.a)({},e),{},{time:e.time+(t.time-e.offset),offset:t.time});case"UNMOUNT_TIMER":return clearInterval(e.interval),Object(Y.a)({},re)}},ae=Object(V.b)({board:H,game:$,target:ne,timer:ce}),ie=(n(74),Object(V.c)(ae,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));a.a.render(Object(l.jsx)(O.a,{store:ie,children:Object(l.jsx)(i.a,{children:Object(l.jsx)(Q,{})})}),document.getElementById("root")),J()}},[[75,1,2]]]);
//# sourceMappingURL=main.8d70ac75.chunk.js.map