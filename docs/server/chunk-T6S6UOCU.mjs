import './polyfills.server.mjs';
import{D as j,E as R,F as T,G as N,H as B,I as $,J as _,K as b,L as D,M as U,P as H,T as V,W as S,a as h,b as v,c as f,d as w,e as E,f as A,g as k,h as o,i as c,j as O,k as y,l as P,m as a,n as s,o as m,p as L,q as I,r as u,s as z,t as p,u as x,v as F}from"./chunk-35MNK3YN.mjs";var K=[],G=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=f({type:t}),t.\u0275inj=h({imports:[S.forRoot(K),S]});let i=t;return i})();function Q(i,t){if(i&1&&(a(0,"div")(1,"div"),m(2,"img",12),s()()),i&2){let l=t.$implicit;o(1),O(l.style),o(1),c("src",l.img,k)}}function W(i,t){if(i&1&&(a(0,"div",9)(1,"div",10),P(2,Q,3,3,"div",11),s()()),i&2){let l=u().$implicit,e=u();o(2),c("ngForOf",e.getPlayerImg(l))}}function X(i,t){if(i&1&&(a(0,"div",9)(1,"div",10),m(2,"img",13),a(3,"span"),p(4),s()()()),i&2){let l=u().$implicit,e=u();o(2),c("src",e.getSnakeOrLadder(l).img,k),o(1),O(e.getSnakeOrLadder(l).style),o(1),x(e.getSnakeOrLadder(l).value)}}function Z(i,t){if(i&1&&(a(0,"div",7),p(1),P(2,W,3,1,"div",8)(3,X,5,4,"div",8),s()),i&2){let l=t.$implicit,e=u();o(1),F(" ",!e.isExists(l)&&!e.isSnakeorLadderExists(l)?l:""," "),o(1),c("ngIf",e.isExists(l)),o(1),c("ngIf",e.isSnakeorLadderExists(l))}}var Y=(()=>{let t=class t{constructor(){this.rotateState="default",this.cells=Array.from({length:100},(e,n)=>n+1),this.noOfPlayer=4,this.players=["Player-1","Player-2","Player-3","Player-4"],this.playersPos=[],this.currentPlayer=0,this.diceRolled=!1,this.diceNumber=1,this.msg="",this.snakesAndLadderStart=Array.from({length:40},(e,n)=>Math.floor(Math.random()*98)+2),this.snakesAndLadderEnd=Array.from({length:40},(e,n)=>Math.floor(Math.random()*98)+2)}ngOnInit(){for(let e=0;e<this.noOfPlayer;e++)this.playersPos.push(1);for(let e=10;e<100;e+=20)for(let n=0,r=9;n<r;n++,r--){let d=this.cells[e+n];this.cells[e+n]=this.cells[e+r],this.cells[e+r]=d}}rotate(){this.rotateState=this.rotateState==="default"?"rotated":"default",setTimeout(()=>{this.rotateState=this.rotateState==="default"?"rotated":"default"},400)}isExists(e){return this.playersPos.indexOf(e)!=-1}isSnakeorLadderExists(e){return this.snakesAndLadderStart.indexOf(e)!=-1}getPlayerImg(e){let n=["left:-30px;","left:-24px;","left:-18px;","left:-10px;"],r="height: 42px; width: 42px;position:absolute;top:-20px;",d=[];for(let g=0;g<this.noOfPlayer;g++)e==this.playersPos[g]&&d.push({img:"../assets/"+this.players[g]+".png",style:r+n[g]});return d}getSnakeOrLadder(e){let n=this.snakesAndLadderStart.indexOf(e),r=this.snakesAndLadderStart[n],d=this.snakesAndLadderEnd[n];return r>d?{img:"../assets/snake.png",value:d,style:"position: absolute; right:0; bottom:0;font-weight: 700; font-size: 1.5rem;color:red;"}:{img:"../assets/ladder.png",value:d,style:"position: absolute; right:0; bottom:0;font-weight: 700; font-size: 1.5rem;color:green;"}}getCurrentPlayerClass(e){return this.currentPlayer+1==e?"cell Player-"+e+" player":"cell Player-"+e}movePlayer(){let e=this.playersPos[this.currentPlayer],n=this.snakesAndLadderStart.indexOf(e);if(n!=-1&&(e=this.snakesAndLadderEnd[n],this.snakesAndLadderEnd[n]>this.snakesAndLadderStart[n]?(console.log("got a ladder to",this.snakesAndLadderEnd[n]),this.msg+=`${this.players[this.currentPlayer]} got a ladder ${this.snakesAndLadderStart[n]} to ${this.snakesAndLadderEnd[n]} <br>`):(console.log("got a snake to",this.snakesAndLadderEnd[n]),this.msg+=`${this.players[this.currentPlayer]} got a snake ${this.snakesAndLadderStart[n]} to ${this.snakesAndLadderEnd[n]} <br>`),this.playersPos[this.currentPlayer]=e,this.movePlayer()),e>=100){alert(`${this.players[this.currentPlayer]} wins!`),this.resetGame();return}}rollDice(){if(this.diceRolled)return;let e=Math.floor(Math.random()*6)+1;this.msg="",this.diceRolled=!0,setTimeout(()=>{this.playersPos[this.currentPlayer]+=e,this.diceRolled=!1,this.diceNumber=e,this.movePlayer(),this.currentPlayer=(this.currentPlayer+1)%this.noOfPlayer},1e3)}resetGame(){this.playersPos=[];for(let e=0;e<this.noOfPlayer;e++)this.playersPos.push(1);this.currentPlayer=0,this.diceRolled=!1,this.diceNumber=1}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=v({type:t,selectors:[["app-board"]],decls:17,vars:14,consts:[[1,"dice",2,"font-weight","900","font-size","2rem"],[1,"msg",3,"innerHTML"],[1,"board"],["class","cell","style","font-weight: 500; font-size: 1rem;",4,"ngFor","ngForOf"],[1,"rotate",3,"disabled","click"],["src","../assets/dice-sound.mp3"],["ref",""],[1,"cell",2,"font-weight","500","font-size","1rem"],["class","cell",4,"ngIf"],[1,"cell"],[2,"position","absolute"],[4,"ngFor","ngForOf"],["alt","image",2,"height","100%",3,"src"],["alt","image",1,"currentPlayer",2,"height","45px","width","45px",3,"src"]],template:function(n,r){if(n&1){let d=L();a(0,"div",0),p(1),s(),m(2,"div",1),a(3,"div",2),P(4,Z,4,3,"div",3),a(5,"button",4),I("click",function(){w(d);let J=z(16);return r.rollDice(),r.rotate(),E(J.play())}),p(6),s(),a(7,"div"),p(8,"P1"),s(),a(9,"div"),p(10,"P2"),s(),a(11,"div"),p(12,"P3"),s(),a(13,"div"),p(14,"P4"),s(),m(15,"audio",5,6),s()}n&2&&(c("@rotateAnimation",r.rotateState),o(1),x(r.diceNumber),o(1),c("innerHTML",r.msg,A),o(2),c("ngForOf",r.cells),o(1),c("disabled",r.diceRolled),o(1),x(r.diceRolled?"rolling":"Roll Dice"),o(1),y(r.getCurrentPlayerClass(1)),o(2),y(r.getCurrentPlayerClass(2)),o(2),y(r.getCurrentPlayerClass(3)),o(2),y(r.getCurrentPlayerClass(4)))},dependencies:[j,R],styles:[".board[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(10,50px);grid-template-rows:repeat(10,50px)}.cell[_ngcontent-%COMP%]{border:1px solid #ccc;display:flex;align-items:center;justify-content:center}button[_ngcontent-%COMP%]{width:50px;height:50px}.Player-1[_ngcontent-%COMP%]{width:100%;height:100%;opacity:.4;background-color:#2563d6}.Player-2[_ngcontent-%COMP%]{width:100%;height:100%;opacity:.4;background-color:#fd2727}.Player-3[_ngcontent-%COMP%]{width:100%;height:100%;opacity:.4;background-color:#ec27d9}.Player-4[_ngcontent-%COMP%]{width:100%;height:100%;opacity:.4;background-color:#37f11a}.player[_ngcontent-%COMP%]{opacity:1;box-shadow:0 9px 30px #ff95054d}.dice[_ngcontent-%COMP%]{text-align:center;background-color:#ccc;position:absolute;left:20px;top:20px;height:60px;width:60px}.msg[_ngcontent-%COMP%]{position:absolute;left:20px;top:100px}"],data:{animation:[B("rotateAnimation",[b("default",_({transform:"rotateY(0deg)"})),b("rotated",_({transform:"rotateY(180deg)"})),D("default <=> rotated",$("500ms ease-in-out"))])]}});let i=t;return i})();var M=(()=>{let t=class t{constructor(){this.title="snakeAndLadder"}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=v({type:t,selectors:[["app-root"]],decls:4,vars:0,consts:[[1,"main"],[1,"content"]],template:function(n,r){n&1&&(a(0,"main",0)(1,"div",1),m(2,"app-board"),s()(),m(3,"router-outlet"))},dependencies:[V,Y],styles:[`[_nghost-%COMP%] {
    --bright-blue: oklch(51.01% 0.274 263.83);
    --electric-violet: oklch(53.18% 0.28 296.97);
    --french-violet: oklch(47.66% 0.246 305.88);
    --vivid-pink: oklch(69.02% 0.277 332.77);
    --hot-red: oklch(61.42% 0.238 15.34);
    --orange-red: oklch(63.32% 0.24 31.68);

    --gray-900: oklch(19.37% 0.006 300.98);
    --gray-700: oklch(36.98% 0.014 302.71);
    --gray-400: oklch(70.9% 0.015 304.04);

    --red-to-pink-to-purple-vertical-gradient: linear-gradient(
      180deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --red-to-pink-to-purple-horizontal-gradient: linear-gradient(
      90deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --pill-accent: var(--bright-blue);

    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1[_ngcontent-%COMP%] {
    font-size: 3.125rem;
    color: var(--gray-900);
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.125rem;
    margin: 0;
    font-family: "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }

  p[_ngcontent-%COMP%] {
    margin: 0;
    color: var(--gray-700);
  }

  main[_ngcontent-%COMP%] {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    box-sizing: inherit;
    position: relative;
  }

  .angular-logo[_ngcontent-%COMP%] {
    max-width: 9.2rem;
  }

  .content[_ngcontent-%COMP%] {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 700px;
    

  }

  .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
    margin-top: 1.75rem;
  }

  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    margin-top: 1.5rem;
  }

  .divider[_ngcontent-%COMP%] {
    width: 1px;
    background: var(--red-to-pink-to-purple-vertical-gradient);
    margin-inline: 0.5rem;
  }

  .pill-group[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: start;
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  .pill[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    --pill-accent: var(--bright-blue);
    background: color-mix(in srgb, var(--pill-accent) 5%, transparent);
    color: var(--pill-accent);
    padding-inline: 0.75rem;
    padding-block: 0.375rem;
    border-radius: 2.75rem;
    border: 0;
    transition: background 0.3s ease;
    font-family: var(--inter-font);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.4rem;
    letter-spacing: -0.00875rem;
    text-decoration: none;
  }

  .pill[_ngcontent-%COMP%]:hover {
    background: color-mix(in srgb, var(--pill-accent) 15%, transparent);
  }

  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 1) {
    --pill-accent: var(--bright-blue);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 2) {
    --pill-accent: var(--french-violet);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 3), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 4), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 5) {
    --pill-accent: var(--hot-red);
  }

  .pill-group[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
    margin-inline-start: 0.25rem;
  }

  .social-links[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 0.73rem;
    margin-top: 1.5rem;
  }

  .social-links[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    transition: fill 0.3s ease;
    fill: var(--gray-400);
  }

  .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    fill: var(--gray-900);
  }

  @media screen and (max-width: 650px) {
    .content[_ngcontent-%COMP%] {
      flex-direction: column;
      width: max-content;
    }

    .divider[_ngcontent-%COMP%] {
      height: 1px;
      width: 100%;
      background: var(--red-to-pink-to-purple-horizontal-gradient);
      margin-block: 1.5rem;
    }
  }`]});let i=t;return i})();var q=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=f({type:t,bootstrap:[M]}),t.\u0275inj=h({providers:[N()],imports:[T,G,U]});let i=t;return i})();var te=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=f({type:t,bootstrap:[M]}),t.\u0275inj=h({imports:[q,H]});let i=t;return i})();export{te as a};
