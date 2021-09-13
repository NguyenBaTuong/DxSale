
const sl__dxmint = document.querySelector.bind(document);
const sl__dxmintsl__dxmint = document.querySelectorAll.bind(document);

const tabs = sl__dxmintsl__dxmint(".DxMint__body-nav-item");
const panes = sl__dxmintsl__dxmint(".DxMint__body-pane");

const tabActive = sl__dxmint(".DxMint__body-nav-item.active");
const line = sl__dxmint(".DxMint__body-nav .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    sl__dxmint(".DxMint__body-nav-item.active").classList.remove("active");
    sl__dxmint(".DxMint__body-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});
