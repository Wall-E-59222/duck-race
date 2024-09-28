function Server() {
  var _this = this;
  this.save = function (dataToSave) {
    callServer("update", dataToSave, function (data) {
      var event = new createjs.Event("serverAnswer");
      event.data = data;
      event.action = "update";
      _this.dispatchEvent(event);
    });
  };
  this.load = function (localData) {
    callServer("load", localData, function (data) {
      if (data.list === "") data.list = Helper.defaultList;
      var event = new createjs.Event("serverAnswer");
      event.data = data;
      event.action = "load";
      _this.dispatchEvent(event);
    });
  };
  this.remove = function (localData) {
    callServer("delete", localData, function (data) {
      var event = new createjs.Event("serverAnswer");
      event.data = data;
      event.action = "delete";
      _this.dispatchEvent(event);
    });
  };
  this.saveas = function (serverData, cookieData) {
    callServer("save", serverData, function (data) {
      var event = new createjs.Event("serverAnswer");
      event.data = data;
      event.cookie = cookieData;
      event.action = "saveas";
      _this.dispatchEvent(event);
    });
  };
  function callServer(action, data, callBack) {
    var typeMessage = {
      load: { type: "r", message: "Loading, please, wait..." },
      save: { type: "s", message: "Saving, please, wait..." },
      update: { type: "u", message: "Updating, please, wait..." },
      delete: { type: "d", message: "Deleting, please, wait..." },
    };
    var type = typeMessage[action].type;
    var message = typeMessage[action].message;
    var serverCall = {};
    serverCall[type] = JSON.stringify(data);
    if (action !== "load") $.blockUI({ message: message });
    // $.post("../js/newracetimer.php", serverCall).done(function (answer) {
    //   var gotData = JSON.parse(answer);
    //   if (gotData.answer === "correct") {
    //     setTimeout($.unblockUI, 500);
    //     callBack(gotData);
    //   } else {
    //     $.unblockUI();
    //   }
    // });
  }
}
