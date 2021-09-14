
const sl__dxmint = document.querySelector.bind(document);
const sl__dxmint__s = document.querySelectorAll.bind(document);

const sl__dxmint__tabs = sl__dxmint__s(".select__list-item");
const sl__dxmint__panes = sl__dxmint__s(".DxDrop__body-box-item");

const sl__dxmint__tabActive = sl__dxmint(".select__list-item.active");
// const sl__dxmint__line = sl__dxmint(".DxMint__body-nav .line");

// sl__dxmint__line.style.left = sl__dxmint__tabActive.offsetLeft + "px";
// sl__dxmint__line.style.width = sl__dxmint__tabActive.offsetWidth + "px";

sl__dxmint__tabs.forEach((sl__dxmint__tab, index) => {
  const sl__dxmint__pane = sl__dxmint__panes[index];

  sl__dxmint__tab.onclick = function () {
    sl__dxmint(".select__list-item.active").classList.remove("active");
    sl__dxmint(".DxDrop__body-box-item.active").classList.remove("active");

    // sl__dxmint__line.style.left = this.offsetLeft + "px";
    // sl__dxmint__line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    sl__dxmint__pane.classList.add("active");
  };
});


$('select').each(function () {

  // Cache the number of options
  var $this = $(this),
      numberOfOptions = $(this).children('option').length;

  // Hides the select element
  $this.addClass('s-hidden');

  // Wrap the select element in a div
  $this.wrap('<div class="select"></div>');

  // Insert a styled div to sit over the top of the hidden select element
  $this.after('<div class="styledSelect"></div>');

  // Cache the styled div
  var $styledSelect = $this.next('div.styledSelect');

  // Show the first select option in the styled div
  $styledSelect.text($this.children('option').eq(0).text());

  // Insert an unordered list after the styled div and also cache the list
  var $list = $('<ul />', {
      'class': 'options'
  }).insertAfter($styledSelect);

  // Insert a list item into the unordered list for each select option
  for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
      }).appendTo($list);
  }

  // Cache the list items
  var $listItems = $list.children('li');

  // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
  $styledSelect.click(function (e) {
      // var drop__select__bb = document.getElementById('drop__select__bb');
      // select__contro.css('backgroud','red');
      // drop__select__bb.css('border-bottom','1px solid red');
      e.stopPropagation();
      $('div.styledSelect.active').each(function () {
          $(this).removeClass('active').next('ul.options').hide();
      });
      $(this).toggleClass('active').next('ul.options').toggle();
  });

  // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
  // Updates the select element to have the value of the equivalent option
  $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
      var tab__show__1 = $('#tab__show__1');
      var tab__show__2 = $('#tab__show__2');
      if ($this.val() == 1 ) {
        tab__show__1.css('display', 'block');
        tab__show__2.css('display', 'none');
      } else {
        tab__show__2.css('display', 'block');
        tab__show__1.css('display', 'none');
        
      }
      /* alert($this.val()); Uncomment this for demonstration! */
  });

  // Hides the unordered list when clicking outside of it
  $(document).click(function () {
      $styledSelect.removeClass('active');
      $list.hide();
  });

});