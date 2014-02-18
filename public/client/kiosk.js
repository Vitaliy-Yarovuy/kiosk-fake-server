(function(){
    var size,kioskWrapperClient;

    function wndSize(){
        var w = 0;var h = 0;
        //IE
        if(!window.innerWidth){
            if(!(document.documentElement.clientWidth == 0)){
                //strict mode
                w = document.documentElement.clientWidth;h = document.documentElement.clientHeight;
            } else{
                //quirks mode
                w = document.body.clientWidth;h = document.body.clientHeight;
            }
        } else {
            //w3c
            w = window.innerWidth;h = window.innerHeight;
        }
        return {width:w,height:h};
    }

    document.addEventListener("click",function(e){
        var x = e.x,
            y = e.y;
        if(!size){
            size = wndSize();
        }
        if(y < 0.1 * size.height &&  size.width - x  < 0.1 * size.height){
            kioskWrapperClient.openSettings();
        }
    });

    kioskWrapperClient = {
        openSettings:function(){
            parent.window.postMessage("settings:open", "*");
        },
        notificationFire:function(){
            parent.window.postMessage("notification:fire", "*");
        }
    };
    window.kioskWrapperClient = kioskWrapperClient;
})();