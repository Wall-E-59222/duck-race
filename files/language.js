function Language(language) {
  var _this = this;
  this.init = function () {
    return;
    if (!language) return;
    var elements = [
      exportRoot.timer.tStart,
      exportRoot.timer.tClear,
      exportRoot.settings.list.rNumbers,
      exportRoot.settings.list.rNames,
      exportRoot.settings.list.showRaceNumbers,
      exportRoot.settings.list.premium0.info,
      exportRoot.settings.list.premium1.info,
      exportRoot.settings.list.editList,
      exportRoot.settings.list.doneList,
      exportRoot.settings.timer.txt_set,
      exportRoot.settings.timer.txt_clear,
      exportRoot.timer.nextRace.removeOrNot,
      exportRoot.timer.nextRace.raceAgain,
    ];
    var keys = Object.keys(language);
    for (var i = 0; i < elements.length; i++) {
      elements[i].text = this.translate(elements[i].text);
    }
  };
  this.translate = function (sentence) {
    if (!language) return sentence;
    var keys = Object.keys(language);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === sentence) {
        return language[keys[i]];
      }
    }
    return sentence;
  };
}
