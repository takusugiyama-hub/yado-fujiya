/* Rollover Script */

if(navigator.appVersion.charAt(0) >=3){
var rolimg = new Array();
for( i = 0 ; i < 10 ; i++ ){
rolimg[i] = new Image();
}

// ロールオーバー前のイメージのパス
rolimg[0].src= "fujiyatop.gif"
// クリッカブルマップでロールオーバーさせるイメージ1のパス
rolimg[1].src= "topen.gif"
// クリッカブルマップでロールオーバーさせるイメージ2のパス  
rolimg[2].src= "topjp.gif"
// クリッカブルマップでロールオーバーさせるイメージ3のパス  
rolimg[3].src= "topblog.gif"
}

function paintRol(dim,cnt){
if(navigator.appVersion.charAt(0) >= 3 ){
document.images[dim].src=rolimg[cnt].src;
}
}