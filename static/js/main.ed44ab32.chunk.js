(this.webpackJsonpknight_move_trainer=this.webpackJsonpknight_move_trainer||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(23),a=n.n(c),i=(n(64),n(65),n(78)),s=n(44),u=n(30),o=n(4),l=function(e){return{type:"SELECT_SQUARE",squareIndex:e}},d=function(e,t){return{type:"MOVE_PIECE",squareIndex:e}},b=function(e){return{type:"END_GAME",gameEnding:e}},j="knight",f=[-21,-19,-12,-8,8,12,19,21],g=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,0,0,1,0,0,1,0,-1,-1,0,1,0,1,0,1,0,0,-1,-1,0,0,1,1,1,0,0,0,-1,-1,1,1,1,1,1,1,1,1,-1,-1,0,0,1,1,1,0,0,0,-1,-1,0,1,0,1,0,1,0,0,-1,-1,1,0,0,1,0,0,1,0,-1,-1,0,0,0,1,0,0,0,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],O=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,0,0,1,0,0,1,2,-1,-1,0,1,0,1,0,1,0,0,-1,-1,0,0,1,1,1,0,0,0,-1,-1,1,1,1,1,1,1,1,1,-1,-1,0,0,1,1,1,0,0,0,-1,-1,0,1,0,1,0,1,0,0,-1,-1,1,0,0,1,0,0,1,0,-1,-1,0,0,0,1,0,0,0,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],v="#EEEED2",h="#769656",m="#F6F668",E="#BBCA2B",x=function(e){var t=("0"+Math.floor(e%100)).slice(-2),n=("0"+Math.floor(e/100%60)).slice(-2),r=("0"+Math.floor(e/6e3)%50).slice(-2);return"".concat(r," : ").concat(n," : ").concat(t)},p=function(e){return(e%10-1+Math.floor((e-20)/10))%2===0},S=n(1);function T(){return Object(S.jsx)("div",{})}var _=n(13),w=n.p+"static/media/knight_b.d714eeb4.svg",N=n(80);function q(e){var t=e.i,n=Object(o.c)((function(e){return e.game.gameStarted})),r=Object(o.c)((function(e){return e.game.gameEnded})),c=Object(N.a)({type:j,collect:function(e){return{isDragging:!!e.isDragging()}}}),a=Object(_.a)(c,2),i=(a[0].isDragging,a[1],Object(o.b)());function s(e){e.preventDefault()}return Object(S.jsx)("div",{className:"chess-piece-container",draggable:"true",onSelect:function(e){return s()},onDragStart:function(e){return function(e){n||r?r||i(l(t)):e.preventDefault()}(e)},onDrag:function(e){return function(e){e.preventDefault()}(e)},style:{width:"100%",height:"100%",cursor:"move"},children:Object(S.jsx)("img",{onSelect:function(e){return s()},className:"chess-piece",src:w,alt:""})})}var A=n.p+"static/media/queen_w.5b678bc3.svg";function M(){return Object(S.jsx)("div",{className:"chess-piece-container",children:Object(S.jsx)("img",{className:"chess-piece",src:A,alt:""})})}var y=n(81);function k(e){var t=e.isWhite,n=e.i,r=e.children,c=Object(o.b)(),a=Object(y.a)({accept:j,drop:function(e,t){return console.log(e)},collect:function(e){return{isOver:!!e.isOver(),canDrop:!!e.canDrop()}}}),i=Object(_.a)(a,2),s=(i[0],i[1],Object(o.c)((function(e){return e.game.gameStarted}))),u=Object(o.c)((function(e){return e.game.gameEnded})),l=Object(o.c)((function(e){return e.board})),f=l.selectedSquare,g=l.pieceSelected,O=l.validKnightMoves,x=l.illegalSquare,p=Object(o.c)((function(e){return e.target})).nextTarget,T=-1!==O.indexOf(n),w=function(e,t){return t?e?m:E:e?v:h}(t,f===n||T&&2===g),N=function(e,t,n,r){var c="none";return e===n&&e===r?(c="none",c=t?"wrong-square-blinker-white 0.5s linear 2, next-square-blinker-white 2s linear infinite":"wrong-square-blinker-black 0.5s linear 2, next-square-blinker-black 2s linear infinite"):e===n?c=t?"wrong-square-blinker-white 0.5s linear 2":"wrong-square-blinker-black 0.5s linear 2":e===r&&(c=t?"next-square-blinker-white 2s linear infinite":"next-square-blinker-black 2s linear infinite"),c}(n,t,x,p);function q(e){e.preventDefault();var t=parseInt(e.target.id);s&&!u&&(c(d(t)),function(e){-1!==O.indexOf(e)&&e===p&&(c({type:"UPDATE_TARGET"}),91===e&&c(b()))}(t))}function A(e){s||u||e.preventDefault(),console.log("drag started",e)}return Object(S.jsx)("div",{className:"square",id:n,onDragStart:function(e){return A},onSelect:function(e){return function(e){e.preventDefault()}(e)},onDrop:function(e){return q(e)},style:{backgroundColor:w,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",animation:N},children:r})}function R(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.game.gameStarted})),n=Object(o.c)((function(e){return e.game.gameEnded})),r=Object(o.c)((function(e){return e.board.board})),c=Object(o.c)((function(e){return e.board.pieceSelected})),a=Object(o.c)((function(e){return e.board.squareIsSelected})),i=Object(o.c)((function(e){return e.board.selectedSquare})),s=Object(o.c)((function(e){return e.board.validKnightMoves})),u=Object(o.c)((function(e){return e.target.nextTarget})),j=function(e,t){switch(e){case 0:return Object(S.jsx)(T,{i:t});case 2:return Object(S.jsx)(q,{i:t});case 4:return Object(S.jsx)(M,{i:t});default:return Object(S.jsx)(T,{i:t})}};function f(r,o){if(-1!==r)return Object(S.jsx)("div",{className:"square",onClick:function(r){return function(r){if(!t)return;a&&0!==c?i===r?e({type:"UNSELECT_SQUARE"}):t&&!n&&(e(d(o=r)),-1!==s.indexOf(o)&&o===u&&(e({type:"UPDATE_TARGET"}),91===o&&e(b()))):n||(e(l(r)),e({type:"RESET_ILLEGAL_SQUARE"}));var o}(o)},children:Object(S.jsx)(k,{i:o,isWhite:p(o),children:Object(S.jsx)("div",{id:"chess-piece",className:"chess-piece",children:j(r,o)})})},o)}return Object(S.jsx)("div",{className:"board-container",children:Object(S.jsx)("div",{className:"board",children:r.map((function(e,t){return f(e,t)}))})})}var D=n(79);function I(){var e=Object(o.c)((function(e){return e.board.illegalMoveCounter}));function t(e,t){var n=e?"illegal-move-icon-big-disabled":"illegal-move-icon-big-enabled";return Object(S.jsx)("div",{className:n,children:Object(S.jsx)(D.a,{name:"x",disabled:e,fitted:!0,color:"red",size:"big"})},t)}return Object(S.jsx)("div",{className:"illegal-move-icon-container",children:function(){for(var n=[],r=0;r<3;r++)r<e?n.push(t(!1,r)):n.push(t(!0,r));return n}()})}function C(){var e=Object(r.useState)(0),t=Object(_.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),i=Object(_.a)(a,2),s=i[0],u=i[1],l=Object(o.b)(),d=Object(o.c)((function(e){return e.game.gameStarted})),b=Object(o.c)((function(e){return e.game.gameEnded}));return Object(r.useEffect)((function(){var e=null;return b&&s&&(clearInterval(e),u(!1)),s?(d||l({type:"START_GAME"}),e=setInterval((function(){c((function(e){return e+1}))}),10)):clearInterval(e),function(){return clearInterval(e)}}),[s,b,d,l]),Object(S.jsx)("div",{className:"timer-container",children:d?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{style:{padding:"20px"},children:[" ",x(n)]}),Object(S.jsx)(D.a,{className:"timer-button reset",name:"sync alternate",size:"small",link:!0,onClick:function(){return u(!1),c(0),void l({type:"RESET_GAME"})}})]}):Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("button",{className:"timer-button-start-game",onClick:function(){return u(!0),void l({type:"START_GAME"})},children:"Start Game"})})})}function G(){var e=Object(o.b)(),t=(Object(o.c)((function(e){return e.game.gameStarted})),Object(o.c)((function(e){return e.board.illegalMoveCounter})));return Object(r.useEffect)((function(){3===t&&e(b())})),Object(S.jsxs)("div",{className:"game-container",children:[Object(S.jsx)(C,{}),Object(S.jsx)(R,{}),Object(S.jsx)(I,{})]})}function L(){return Object(S.jsx)("a",{className:"header-link",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/jamuli/chess-knight-puzzle",children:Object(S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"octicon-mark-github",height:"32",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true",children:Object(S.jsx)("path",{class:"github-svg","fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})})}var U=n(14);function Q(){return Object(S.jsx)(U.b,{className:"header-link",to:"/",children:Object(S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 384 512","aria-hidden":"true",children:Object(S.jsx)("path",{d:"M19 272.47l40.63 18.06a32 32 0 0 0 24.88.47l12.78-5.12a32 32 0 0 0 18.76-20.5l9.22-30.65a24 24 0 0 1 12.55-15.65L159.94 208v50.33a48 48 0 0 1-26.53 42.94l-57.22 28.65A80 80 0 0 0 32 401.48V416h319.86V224c0-106-85.92-192-191.92-192H12A12 12 0 0 0 0 44a16.9 16.9 0 0 0 1.79 7.58L16 80l-9 9a24 24 0 0 0-7 17v137.21a32 32 0 0 0 19 29.26zM52 128a20 20 0 1 1-20 20 20 20 0 0 1 20-20zm316 320H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z",class:""})})})}var z=function(){return Object(S.jsx)(U.b,{className:"header-link",to:"/about",children:"About"})};var F=function(){return Object(S.jsxs)("div",{className:"header",children:[Object(S.jsx)("div",{className:"header-item github-link",children:Object(S.jsx)(Q,{})}),Object(S.jsx)("div",{className:"header-item",children:Object(S.jsx)(z,{})}),Object(S.jsx)("div",{className:"header-item github-link",children:Object(S.jsx)(L,{})})]})};var K=function(){return Object(u.useMediaQuery)({query:"(min-width: 700px)"}),Object(u.useMediaQuery)({query:"(min-width: 400px)"}),Object(u.useMediaQuery)({query:"(min-width: 200px)"}),Object(S.jsx)(i.a,{backend:s.a,children:Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(F,{}),Object(S.jsx)(G,{})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},P=n(12),J=n(45),V={board:Object(J.a)([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,2,-1,-1,0,0,0,0,0,0,0,0,-1,-1,0,0,0,0,0,0,0,0,-1,-1,0,0,0,4,0,0,0,0,-1,-1,0,0,0,0,0,0,0,0,-1,-1,0,0,0,0,0,0,0,0,-1,-1,0,0,0,0,0,0,0,0,-1,-1,0,0,0,0,0,0,0,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),squareIsSelected:!1,selectedSquare:void 0,pieceSelected:void 0,validKnightMoves:[36,47],illegalSquare:void 0,illegalMoveCounter:0,moves:[]},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:JSON.parse(JSON.stringify(V)),t=arguments.length>1?arguments[1]:void 0;function n(t){e.squareIsSelected=!0,e.selectedSquare=t,e.pieceSelected=e.board[t]}function r(){e.squareIsSelected=!1,e.selectedSquare=void 0,e.pieceSelected=void 0}function c(t){e.validKnightMoves=[];var n=t;f.forEach((function(t){var r=n+t;-1!==e.board[r]&&e.validKnightMoves.push(r)}))}function a(t){return-1!==e.validKnightMoves.indexOf(t)&&1===g[t]}function i(t,n){return-1!==e.validKnightMoves.indexOf(t)&&1!==g[t]&&2===e.pieceSelected}function s(t,n){i(n)?(e.board[t]=0,e.board[n]=e.pieceSelected,c(n),r(),o()):(a(n)&&e.illegalMoveCounter++,r(),u(n))}function u(t){e.illegalSquare=t}function o(){e.illegalSquare=void 0}switch(t.type){default:return e;case"SELECT_SQUARE":return n(t.squareIndex),e;case"UNSELECT_SQUARE":return r(),e;case"RESET_ILLEGAL_SQUARE":return o(),e;case"MOVE_PIECE":return s(e.selectedSquare,t.squareIndex),e;case"RESET_GAME":return e.board[28]=2,JSON.parse(JSON.stringify(V))}},W=n(5),H={gameType:"",gameStarted:!1,gameEnded:!1,playerWon:!1,gameReset:void 0},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(W.a)({},H),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_GAME":return Object(W.a)(Object(W.a)({},e),{},{gameStarted:!0,gameReset:!1});case"END_GAME":return Object(W.a)(Object(W.a)({},e),{},{gameEnded:!0,playerWon:t.gameEnding});case"RESET_GAME":return Object(W.a)(Object(W.a)({},H),{},{gameReset:!0});default:return e}},Z={nextTarget:void 0,goalSquares:$(O)};function $(e){for(var t=[],n=26;n<=98;)0===e[n]&&t.push(n),n%10===1?n+=17:n--;return t}var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(W.a)({},Z),t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case"START_GAME":return Object(W.a)(Object(W.a)({},e),{},{nextTarget:26});case"UPDATE_TARGET":return 0===e.goalSquares.length?(console.log("an error has been made with NEXT_TARGET in targetReducer.js"),e):(e.goalSquares.shift(),e.nextTarget=e.goalSquares[0],e);case"RESET_GAME":return Object(W.a)(Object(W.a)({},e),{},{nextTarget:void 0,goalSquares:$(O)})}},te={isOn:!1,time:0},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case"START_TIMER":return Object(W.a)(Object(W.a)({},e),{},{isOn:!0,offset:t.offset,interval:t.interval});case"TICK":return Object(W.a)(Object(W.a)({},e),{},{time:e.time+(t.time-e.offset),offset:t.time});case"UNMOUNT_TIMER":return clearInterval(e.interval),Object(W.a)({},te)}},re=Object(P.b)({board:X,game:Y,target:ee,timer:ne}),ce=(n(71),Object(P.c)(re,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));a.a.render(Object(S.jsx)(o.a,{store:ce,children:Object(S.jsx)(U.a,{children:Object(S.jsx)(K,{})})}),document.getElementById("root")),B()}},[[72,1,2]]]);
//# sourceMappingURL=main.ed44ab32.chunk.js.map