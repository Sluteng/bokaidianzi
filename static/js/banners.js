  window.onload = function() {
    //传统方式
    function Tab(obj) {
      this.oUl = obj.children[0];
      this.aLi = this.oUl.children;
      this.tabItem = obj.getElementsByClassName('tabItem');
        /*//构造函数内直接调用原型上的方法
        this.init();*/
        this.timer;
        this.n = 0;
    };
    //原型上增加切换功能
    Tab.prototype.init = function() {
      var _this = this;
      for (var i = 0; i < this.aLi.length; i++) {
        this.aLi[i].index = i;

        this.aLi[i].onclick = function() {

          for (var j = 0; j < _this.aLi.length; j++) {
            _this.aLi[j].className = "";
            _this.tabItem[j].style.display = "none";
          };
          this.className = "ac";
          _this.n = this.index;
          _this.tabItem[this.index].style.display = "block";
        };
      };
      return this;
    };
    //自动运行功能
    Tab.prototype.autoPlay = function() {
      var oParent = this.oUl.parentNode;
      var _this = this;

      function run(num) {
        for (var j = 0; j < _this.aLi.length; j++) {
          _this.aLi[j].className = "";
          _this.tabItem[j].style.display = "none";
        };
        _this.aLi[num].className = "ac";
        _this.tabItem[num].style.display = "block";
      };

      this.timer = setInterval(function() {
        _this.n == _this.aLi.length - 1 ? _this.n = 0 : _this.n++;
        run(_this.n);
      }, 2000);

      oParent.onmouseover = function() {
        clearInterval(_this.timer);
      };

      oParent.onmouseout = function() {
        _this.autoPlay();
      };

      return this;

    };

    //面向对象方式----------------------------------

    var oDiv1 = document.getElementById('tab1');
    var tab1 = new Tab(oDiv1);
    tab1.init().autoPlay();
};