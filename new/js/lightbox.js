var btnZoom = document.getElementById("zoom-button");
var lightBoxParent = (document.getElementsByClassName("main-content-container"))[0];
var lightbox = new LightBox(lightBoxParent);

btnZoom.onclick = function () {
    console.log("clicked");
    lightbox.init();
    return false;
};

function LightBox(lightBoxParent) {
    var that = this;
    this.parent = lightBoxParent;
    this.lightBoxElement;
    this.btnClose;

    this.init = function() {
        that.lightBoxElement = document.createElement("div");
        that.parent.appendChild(that.lightBoxElement);
        that.lightBoxElement.className = "lightbox";

        that.btnClose = document.createElement("div");
        that.lightBoxElement.appendChild(that.btnClose);
        that.btnClose.className = "lightbox-closebutton";
        that.btnClose.onclick = function() {
            that.parent.removeChild(that.lightBoxElement);
        };

        var image = document.createElement("img");
        var src = document.getElementsByClassName("main-right")[0].children[0].getAttribute("src");
        image.setAttribute("src", src);
        that.lightBoxElement.appendChild(image);

    };


}
