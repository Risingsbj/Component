
obj.timer=setInterval(function () {
       var flg =true;  //像这样吗  ？感觉也不对，flag变false后，还是不会再变回true呀？
       for (var attr in json) {
           //获取当前值
           var icur = 0;
           if (attr == 'opacity') {
               icur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
           }
           else {
               icur = parseInt(getStyle(obj, attr));
           }
           //算速度
           var speed = 0;
           speed = (json[attr] - icur) / 8;
           speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
           //检测停止
           if (icur != json[attr]) {
               flg=false;
           }
           if (attr == 'opacity') {
                   //针对IE浏览器
                   obj.style.filter = 'alpha(opacity:' + (icur + speed) + ')';
                   //针对其他
                   obj.style.opacity = (icur + speed) / 100;
               }
               else {
                   obj.style[attr] = icur + speed + 'px';
               }
            }
       if (flg){
           clearInterval(obj.timer);
           if (fn){
               fn()
           }
       }
   },30)
}
像这样吗  ？感觉也不对，flag变false后，还是不会再变回true呀？郁闷呀，这逻辑不对呀