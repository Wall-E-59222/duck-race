function ListWinners(instance, domInstance) {
  var winnersList;
  var _this = this;
  domInstance.hide();
  function show(list) {
    domInstance.html("");
    var newList = "";
    for (var i = 0; i < list.length; i++) {
      newList +=
        '<tr><td width="40%">' +
        cST(i + 1) +
        '</td><td width="60%">' +
        list[i].i +
        "</td></tr>";
    }
    domInstance.html(
      '<div id="resultTableContainer" class="container"><table id="resultsTable" class="niceTable">' +
        newList +
        '</table><div id="SWresultOptions" style="height:70px;margin-top:10px"><div style="width:48%;height: 100%;float:left;"><div id="SWCopyResults" class="resultButtonOption">Copy Results</div></div><div style="width:48%;height: 100%;float:right;"><div id="SWExportResults" class="resultButtonOption">Export Results</div></div></div></div>'
    );
    $(".resultButtonOption")
      .off("click")
      .on("click", function () {
        var buttonText = $(this).text();
        var csvContent = "";
        $("#resultsTable tr").each(function () {
          var rowData = [];
          $(this)
            .find("td")
            .each(function () {
              rowData.push($(this).text());
            });
          csvContent += rowData.join(",") + "\n";
        });
        if (buttonText == "Copy Results") {
          navigator.clipboard
            .writeText(csvContent)
            .then(function () {
              var $button = $("#SWCopyResults");
              $button.text("COPIED");
              setTimeout(function () {
                $button.text("Copy Results");
              }, 1000);
            })
            .catch(function (error) {
              $button.text("Can Not Copy");
            });
        } else if (buttonText == "Export Results") {
          var csvData = new Blob([csvContent], { type: "text/csv" });
          var csvUrl = URL.createObjectURL(csvData);
          var $link = $("<a>");
          $link.attr("href", csvUrl);
          $link.attr("download", "results.csv");
          $link[0].click();
          var $button = $("#SWExportResults");
          $button.text("Exported");
          setTimeout(function () {
            $button.text("Export Results");
          }, 1000);
        }
      });
    function size() {
      var rowHeight = 80;
      if (list.length < 11) {
        var reduction = $("#SWresultOptions").outerHeight() / list.length;
        rowHeight = domInstance.height() / list.length - reduction;
      }
      $("#resultsTable tr").height(rowHeight + "px");
    }
    size();
  }
  this.hideOnlyList = function () {
    instance.popup.visible = false;
    domInstance.hide();
  };
  this.offerWinOrder = function (finishCharacters) {
    winnersList = finishCharacters;
    instance.removeAllEventListeners();
    instance.addEventListener("mousedown", showRaceOrder);
  };
  this.hideWinOrder = function () {
    instance.removeAllEventListeners();
    instance.popup.visible = false;
    instance.visible = false;
    domInstance.hide();
  };
  function showRaceOrder() {
    var event = new createjs.Event("used");
    if (!instance.popup.visible) {
      instance.popup.visible = true;
      var trueOrder = [];
      var character;
      for (var i = 0; i < winnersList.length; i++) {
        character = winnersList[i].instance;
        trueOrder.push({ i: winnersList[i].name });
      }
      show(trueOrder);
      domInstance.show();
      event.data = "show";
      if (_this.dispatchEvent) _this.dispatchEvent(event);
    } else {
      instance.popup.visible = false;
      domInstance.hide();
      event.data = "hide";
      if (_this.dispatchEvent) _this.dispatchEvent(event);
    }
  }
  function cST(i) {
    var j = i % 10,
      k = i % 100;
    if (j === 1 && k !== 11) {
      return i + "st";
    }
    if (j === 2 && k !== 12) {
      return i + "nd";
    }
    if (j === 3 && k !== 13) {
      return i + "rd";
    }
    return i + "th";
  }
}
