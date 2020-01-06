//公司简介选项卡
$(function() {
    $("#menu li").each(function(index) { //带参数遍历各个选项卡
        $(this).click(function() { //注册每个选卡的单击事件
            $("#menu li.tabFocus").removeClass("tabFocus"); //移除已选中的样式
            $(this).addClass("tabFocus"); //增加当前选中项的样式
            //显示
            //选项卡对应的内容并隐藏未被选中的内容
            $("#content li:eq(" + index + ")").show()
                .siblings().hide();
        });
    });
})

//新闻滚动
var c, _ = Function;
with(o = document.getElementById("div1")) {
        innerHTML += innerHTML;
        onmouseover = _("c=1");
        onmouseout = _("c=0");
    }
    (F = _("if(#%18||!c)#++,#%=o.scrollHeight>>1;setTimeout(F,#%18?10:1300);".replace(/#/g, "o.scrollTop")))();