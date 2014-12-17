/* File Created: December 16, 2014 */
var t1 = new Tabs();
t1.selectTab();

function Tabs() {
    this.listofTab = document.getElementById("main-content-tabUL");

    this.tabCollection = [];
    this.ContentdivCollection = [];
    this.selectedTabIndex = 0;
    this.child;
    var that = this;

    this.selectTab = function () {
        for (var i = 0; i < that.listofTab.childElementCount; i++) {
            that.currenttab = that.listofTab.children[i];
            that.tabCollection.push(that.currenttab);

            /*event handiling*/
            that.currenttab.onclick = (function (i) {
                return function () {
                    that.selectedTabIndex = i;
                    for (var j = 0; j < that.tabCollection.length; j++) {
                        that.tabCollection[j].className = "";
                        document.getElementById("main-content-tabs-body" +j).style.display = 'none';
                    }
                    that.tabCollection[that.selectedTabIndex].className = "active";
                    document.getElementById("main-content-tabs-body" + that.selectedTabIndex).style.display = 'block';
                 
                    //alert(that.selectedTabIndex);
                };

            })(i);

        }
    };

}
//        for (var i = 0; i < that.parent.childElementCount; i++) {
//            var child = that.parent.children[i];
//            that.tabArray.push(child);
//            child.onclick = (function (i) {
//                return function () {
//                    that.tabArray[that.selectedI].className = "";
//                    var content = document.getElementById("content-tab" + (that.selectedI + 1));
//                    content.style.display = "none";

//                    that.selectedI = i;

//                    that.tabArray[that.selectedI].className = "active";
//                    var content = document.getElementById("content-tab" + (that.selectedI + 1));
//                    content.style.display = "block";
//                }
//            })(i);
//        }
//        that.tabArray[that.selectedI].className = "active";
//        var content = document.getElementById("content-tab" + (that.selectedI + 1));
//        content.style.display = "block";
//    } ();

//}