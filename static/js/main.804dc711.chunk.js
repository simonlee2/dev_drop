(this["webpackJsonpcandy-drop"]=this["webpackJsonpcandy-drop"]||[]).push([[0],{115:function(e,t,n){"use strict";(function(e){var r=n(1),a=n.n(r),c=n(10),i=n(12),s=n(4),o=n(14),u=n(27),l=n(2),d=n(20),b=n(11),p=n(119),f=(n(204),n(30)),m=n(18),x=p.a.metadata,g=x.Metadata,h=x.MetadataProgram,v=new d.d.PublicKey("DJHKAFgzygyxZ7WuKGUVdDLsYconPHW3EX5rmPqE4xsN"),y=d.d.SystemProgram,j="processed";t.a=function(t){var n=t.walletAddress,r=Object(u.useState)(null),p=Object(o.a)(r,2),x=p[0],w=p[1],O=Object(u.useState)([]),k=Object(o.a)(O,2),S=k[0],K=k[1],N=Object(u.useState)(!1),P=Object(o.a)(N,2),A=P[0],E=P[1],T=Object(u.useState)(!1),D=Object(o.a)(T,2),M=D[0],C=D[1];Object(u.useEffect)((function(){L()}),[]);var I=function(){var e=new l.Connection("https://explorer-api.devnet.solana.com");return new d.b(e,window.solana,j)},L=function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r,s,o,u,l,b,p,m,x,g,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=I(),e.next=3,d.a.fetchIdl(f.c,t);case 3:return n=e.sent,r=new d.a(n,f.c,t),e.next=7,r.account.candyMachine.fetch("64prirSe5E6C7679D1JSNVNYpCEkzbo8TUG77bJ4yAjn");case 7:return s=e.sent,o=s.data.itemsAvailable.toNumber(),u=s.itemsRedeemed.toNumber(),l=o-u,b=s.data.goLiveDate.toNumber(),p="".concat(new Date(1e3*b).toGMTString()),w({itemsAvailable:o,itemsRedeemed:u,itemsRemaining:l,goLiveData:b,goLiveDateTimeString:p}),console.log({itemsAvailable:o,itemsRedeemed:u,itemsRemaining:l,goLiveData:b,goLiveDateTimeString:p}),C(!0),e.next=18,W("64prirSe5E6C7679D1JSNVNYpCEkzbo8TUG77bJ4yAjn",!0);case 18:if(0===(m=e.sent).length){e.next=36;break}x=Object(i.a)(m),e.prev=21,h=a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.value,e.next=3,fetch(t.data.uri);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,console.log("Past Minted NFT",t),S.find((function(e){return e===r.image}))||K((function(e){return[].concat(Object(c.a)(e),[r.image])}));case 9:case"end":return e.stop()}}),e)})),x.s();case 24:if((g=x.n()).done){e.next=28;break}return e.delegateYield(h(),"t0",26);case 26:e.next=24;break;case 28:e.next=33;break;case 30:e.prev=30,e.t1=e.catch(21),x.e(e.t1);case 33:return e.prev=33,x.f(),e.finish(33);case 36:C(!1);case 37:case"end":return e.stop()}}),e,null,[[21,30,33,36]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(s.a)(a.a.mark((function e(t,n){var r,c,i,s,o,u,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new d.d.Connection("https://explorer-api.devnet.solana.com"),e.next=3,h.getProgramAccounts(r,{filters:[{memcmp:{offset:326,bytes:t}}]});case 3:c=e.sent,i=[],s=0;case 6:if(!(s<c.length)){e.next=16;break}return o=c[s],e.next=10,r.getParsedAccountInfo(o.pubkey);case 10:u=e.sent,l=new g(t.toString(),u.value),n?i.push(l.data):i.push(l.data.mint);case 13:s++,e.next=6;break;case 16:return e.abrupt("return",i);case 17:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.PublicKey.findProgramAddress([e.from("metadata"),f.b.toBuffer(),n.toBuffer()],f.b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),R=function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.PublicKey.findProgramAddress([e.from("metadata"),f.b.toBuffer(),n.toBuffer(),e.from("edition")],f.b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Y=function(){var e=Object(s.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.d.PublicKey.findProgramAddress([t.toBuffer(),b.e.toBuffer(),n.toBuffer()],f.a);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),J=function(){var e=Object(s.a)(a.a.mark((function e(){var t,r,c,i,o,u,p,m,x,g,h,j,w,O;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(!0),t=d.d.Keypair.generate(),e.next=5,Y(n.publicKey,t.publicKey);case 5:return r=e.sent,e.next=8,B(t.publicKey);case 8:return c=e.sent,e.next=11,R(t.publicKey);case 11:return i=e.sent,"https://explorer-api.devnet.solana.com",o=new l.Connection("https://explorer-api.devnet.solana.com"),e.next=16,o.getMinimumBalanceForRentExemption(b.c.span);case 16:return u=e.sent,p={config:v,candyMachine:"64prirSe5E6C7679D1JSNVNYpCEkzbo8TUG77bJ4yAjn",payer:n.publicKey,wallet:"BYnE7sdZYxCDxofE7yHHYkEorz1RmfHrbwc97DCF8zb8",mint:t.publicKey,metadata:c,masterEdition:i,mintAuthority:n.publicKey,updateAuthority:n.publicKey,tokenMetadataProgram:f.b,tokenProgram:b.e,systemProgram:y.programId,rent:d.d.SYSVAR_RENT_PUBKEY,clock:d.d.SYSVAR_CLOCK_PUBKEY},m=[t],x=[d.d.SystemProgram.createAccount({fromPubkey:n.publicKey,newAccountPubkey:t.publicKey,space:b.c.span,lamports:u,programId:b.e}),b.f.createInitMintInstruction(b.e,t.publicKey,0,n.publicKey,n.publicKey),U(r,n.publicKey,n.publicKey,t.publicKey),b.f.createMintToInstruction(b.e,t.publicKey,r,n.publicKey,[],1)],g=I(),e.next=23,d.a.fetchIdl(f.c,g);case 23:return h=e.sent,j=new d.a(h,f.c,g),e.next=27,j.rpc.mintNft({accounts:p,signers:m,instructions:x});case 27:w=e.sent,console.log("txn:",w),o.onSignatureWithOptions(w,function(){var e=Object(s.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("status"!==t.type){e.next=8;break}if(console.log("Receievd status event"),t.result.err){e.next=8;break}return console.log("NFT Minted!"),E(!1),e.next=8,L();case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),{commitment:"processed"}),e.next=38;break;case 32:e.prev=32,e.t0=e.catch(0),O=e.t0.msg||"Minting failed! Please try again!",E(!1),e.t0.msg?311===e.t0.code?O="SOLD OUT!":312===e.t0.code&&(O="Minting period hasn't started yet."):e.t0.message.indexOf("0x138")||(e.t0.message.indexOf("0x137")?O="SOLD OUT!":e.t0.message.indexOf("0x135")&&(O="Insufficient funds to mint. Please fund your wallet.")),console.warn(O);case 38:case"end":return e.stop()}}),e,null,[[0,32]])})));return function(){return e.apply(this,arguments)}}(),U=function(t,n,r,a){var c=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:d.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:b.e,isSigner:!1,isWritable:!1},{pubkey:d.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new d.d.TransactionInstruction({keys:c,programId:f.a,data:e.from([])})};return x&&Object(m.jsxs)("div",{className:"machine-container",children:[Object(m.jsx)("p",{children:"Drop Date: ".concat(x.goLiveDateTimeString)}),Object(m.jsx)("p",{children:"Items Minted: ".concat(x.itemsRedeemed," / ").concat(x.itemsAvailable)}),Object(m.jsx)("button",{className:"cta-button mint-button",onClick:J,disabled:A,children:"Mint NFT"}),M&&Object(m.jsx)("p",{children:"LOADING MINTS..."}),S.length>0&&Object(m.jsxs)("div",{className:"gif-container",children:[Object(m.jsx)("p",{className:"sub-text",children:"Minted Items \u2728"}),Object(m.jsx)("div",{className:"gif-grid",children:S.map((function(e){return Object(m.jsx)("div",{className:"gif-item",children:Object(m.jsx)("img",{src:e,alt:"Minted NFT ".concat(e)})},e)}))})]})]})}}).call(this,n(9).Buffer)},127:function(e,t,n){},128:function(e,t,n){},131:function(e,t){},132:function(e,t){},160:function(e,t){},161:function(e,t){},204:function(e,t,n){},206:function(e,t,n){"use strict";n.r(t);var r=n(27),a=n.n(r),c=n(114),i=n.n(c),s=(n(127),n(1)),o=n.n(s),u=n(4),l=n(14),d=(n(128),n.p+"static/media/twitter-logo.d89d9a86.svg"),b=n(115),p=n(18),f="simonlee_dev",m="https://twitter.com/".concat(f),x=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],c=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,!(n=t.solana)){e.next=13;break}if(!n.isPhantom){e.next=11;break}return console.log("Phantom wallet found!"),e.next=7,n.connect({onlyIfTrusted:!0});case 7:r=e.sent,c=r.publicKey.toString(),console.log("Connected with Public Key:",c),a(c);case 11:e.next=14;break;case 13:alert("Solana object not found! Get a Phantom Wallet!");case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return window.addEventListener("load",e),function(){return window.removeEventListener("load",e)}}),[]);var i=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,!(n=t.solana)){e.next=8;break}return e.next=4,n.connect();case 4:r=e.sent,c=r.publicKey.toString(),console.log("Connected with Public Key:",c),a(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"header-container",children:[Object(p.jsx)("p",{className:"header",children:"\ud83d\udcbb Dev Drop"}),Object(p.jsx)("p",{className:"sub-text",children:"NFT drop machine with fair mint"}),!n&&Object(p.jsx)("button",{className:"cta-button connect-wallet-button",onClick:i,children:"Connect to Wallet"})]}),n&&Object(p.jsx)(b.a,{walletAddress:window.solana}),Object(p.jsxs)("div",{className:"footer-container",children:[Object(p.jsx)("img",{alt:"Twitter Logo",className:"twitter-logo",src:d}),Object(p.jsx)("a",{className:"footer-text",href:m,target:"_blank",rel:"noreferrer",children:"built on @".concat(f)})]})]})})};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root"))},30:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(20),a=new r.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),c=new r.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),i=new r.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")}},[[206,1,2]]]);
//# sourceMappingURL=main.804dc711.chunk.js.map