(function(){var appDEUMSwitch=window&&window["appDEUMSwitch"];var enableAppDGlobally=true;var shouldExecuteScript=enableAppDGlobally&&appDEUMSwitch!=="off";if(!shouldExecuteScript){return;}var currentNonce=null;if(document.currentScript){currentNonce=document.currentScript.nonce||document.currentScript.getAttribute("nonce");}else{if(navigator.userAgent.toUpperCase().indexOf("TRIDENT/")!==-1||navigator.userAgent.toUpperCase().indexOf("MSIE")!==-1){$(document).find("script[nonce]").toArray().some(function(value){currentNonce=$(value).attr("nonce");});}}window["adrum-start-time"]=(new Date).getTime();window["adrum-config"]={userEventInfo:{PageView:function(context){return{userData:{wfacookie:window&&window["wfacookie"]||{},CustomerSegment:"TPB"}};}}};function getMeta(metaName){var metas=document.getElementsByTagName("meta");for(var i=0;i<metas.length;i++){if(metas[i].getAttribute("name")===metaName){return metas[i].getAttribute("content");}}return"";}(function(config){var beaconURL="https://pdx-col.eum-appdynamics.com";config.appKey=window&&window["appd_key"];config.beaconUrlHttps=beaconURL;config.xd={enable:false};config.xhr={exclude:{urls:[{pattern:".*/support/.*"},{pattern:".*/fragments/.*"},{pattern:".*/presentedDisposition/.*"},{pattern:".*/bev/.*"},{pattern:".*/service.maxymiser.net/.*"},{pattern:".*/glassbox/.*"}]}};if(getMeta("KONICHIWA9")=="true"){var pagename=window.location.pathname+"-Tempest";(function(info){info.PageView={userPageName:pagename};})(config.userEventInfo||(config.userEventInfo={}));}})(window["adrum-config"]||(window["adrum-config"]={}));window.addEventListener("load",function(){var adrumExtScript=document.createElement("script");var adrumExtScriptPath=window&&window["appd_js_path"];adrumExtScript.src=adrumExtScriptPath?encodeURI(adrumExtScriptPath+"/adrum-ext.js"):"";adrumExtScript.setAttribute("nonce",currentNonce);setTimeout(function(){document.body.appendChild(adrumExtScript);},100);});})();
// Rest Default form Behaviour 
document.querySelector('.login-form').addEventListener('submit', (e) => {
    e.preventDefault()
})

// Password Visibility Toggle 
document.querySelector('#hideShowBtn').addEventListener('click', (e) => {
    if(document.querySelector('#hideShowBtn').classList[0] === 'hide') {
        document.querySelector('#hideShowBtn').src = './assets/eye-close.png';
        document.querySelector('#hideShowBtn').classList = 'show';
        document.querySelector('#password').setAttribute('type', 'text')
    } else {
        document.querySelector('#hideShowBtn').src = './assets/eye-open.png';
        document.querySelector('#hideShowBtn').classList = 'hide';
        document.querySelector('#password').setAttribute('type', 'password')
    }
})

// warning show and hide 
document.querySelector('#loginBtn').addEventListener('click', () => {
    document.querySelector('.warning').setAttribute('id', 'show')
})