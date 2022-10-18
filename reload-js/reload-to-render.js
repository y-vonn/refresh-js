ele = document.querySelector("widgets-dynamic-feed").shadowRoot.getElementById("TrafficDelays")
timeout=5;
count=0;
current=location.href;
ele ? null : setTimeout('reload()',1000*timeout);
function reload(){
    setTimeout('reload()',1000*timeout);
    count++;
    console.log('每（'+timeout+'）秒自动刷新,刷新次数：'+count);
    fr4me='<iframe src=\''+current+'\'*\' width="100%" height="100%">';
    fr4me+='</iframe>';
    with(document){write(fr4me);void(close())};
}


// fr4me='<frameset cols=\'*\'>\n<frame src=\''+current+'\'/>';
// fr4me+='</frameset>';
    