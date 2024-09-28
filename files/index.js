(function (cjs, an) {
  var p;
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];
  (lib.AnMovieClip = function () {
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    };
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    };
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this);
    };
  }).prototype = p = new cjs.MovieClip();
  function mc_symbol_clone() {
    var clone = this._cloneProps(
      new this.constructor(
        this.mode,
        this.startPosition,
        this.loop,
        this.reversed
      )
    );
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }
  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }
  (lib.zorro = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "ADTh7IhJh9IgnAWIBEB2IgyAgIAeA5QAbgRAZgTIA6BiIAwgbIhDhiQAogIBEg2IA1ACIhAhjIgaA3QgsAbg1AkgABUg3IgbgsADuhSIAAgBIgbgoACnhsIAgA1ACTgTIAZAtACUAyIgfgyIghg3IniEwQEchoDniRABghxIAVAl"
      );
    this.shape.setTransform(35.275, 73.675);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#999999")
      .s()
      .p("AC4h9IAhA3QjnCRkcBogADZiSIAyggIAgA1QgZATgbARg");
    this.shape_1.setTransform(25.275, 80.675);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#990000")
      .s()
      .p("AhCBPIgbgpIABAAQA1gkArgaIAag2IBABhIg1gCQhDA2goAJg");
    this.shape_2.setTransform(65.775, 57.45);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#E0BD14").s().p("AgRACIgbgrIAngOIAUAlIAeA3IgeATg");
    this.shape_3.setTransform(45.475, 67.9);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p("AgCAwIgfg1IhFh2IAogWIBHB9IAcAoIAAABIBCBiIgvAbg");
    this.shape_4.setTransform(55.45, 63.35);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AEBgxQAhAkgrAtQgsAthIhAQAhhJBdALgADvh9IoOBzQgyA5ASBPIIjgVQBQAYARiXQgMgwhKg3g"
      );
    this.shape_5.setTransform(34.135, -2.05);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AkfgKIIOhzQBKA3AMAwQgRCXhQgZIojAXQgShQAyg5gACDANQBIA/AsgsQArgtghgkIgYgBQhKAAgcA/g"
      );
    this.shape_6.setTransform(34.135, -2.05);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.zorro,
    new cjs.Rectangle(-5.6, -15.7, 81.8, 115.3),
    null
  );
  (lib.witch = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p("AhcgxIB0AAAg6AyIBogyAhgAAIDBgr");
    this.shape.setTransform(13.425, 126.425);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AjkmWIgUkcQgDh0BWBSIC5DYIAcAgQiGBfiMARgAjaJzILBkTIgZglIqgEIgAAUn8QAcgIAagGQBOgPAIATQAIAThDAsQhCArhlAqQhlAphOAQQhNAPgIgTQgIgUBCgrQAUgNAYgNAjSJDIgNAFIj2gTQg4BtB9BVIC2iE"
      );
    this.shape_1.setTransform(48.7337, 60.977);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#660099")
      .s()
      .p("AiACbIgTkbQgDh0BWBSIC4DXIAcAgQiGBfiLARg");
    this.shape_2.setTransform(38.6699, 4.777);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "Aj0BkQgIgTBCgrQAUgNAXgNIADApQCMgQCFhfIgcggQAdgIAagFQBNgQAIAUQAIAThCArQhCArhmApQhlAqhNAPQgiAHgVAAQgaAAgEgLg"
      );
    this.shape_3.setTransform(40.1747, 19.1127);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#666600")
      .s()
      .p(
        "AnVAcID2ATIANgFIgIAwIAIgwIKgkHIAZAlIrBESIi2CEQh9hVA4htgAmbCnIBpgzgAnBB1IDCgrgAlIBEIh1AAg"
      );
    this.shape_4.setTransform(48.7337, 114.65);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.witch,
    new cjs.Rectangle(-1, -15.9, 99.5, 153.8),
    null
  );
  (lib.winterhat = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "Ai1CvQgGgHgEgIQgrhJAWhSQAJghATgcIgFgPIgQAFIgBgRIgRACIACgRIgQgDIAEgQIgPgFIAIgPIgPgIIALgNIgNgLIANgKIgJgOIAPgHIgJgPIARgFIgEgQIARgBIgCgRIARACIACgRIAQAFIAFgPIAPAIIAIgPIANALIALgNIAKAOIAOgLIAHAQIAPgIIAFAQIAQgFIABARIARgBIgCARIARACIgFAQIAQAFIgJAPIAQAIIgLANIANALIgOALIAAABQAjgEAnAJQBRAXAqBIQAFAIAEAIQABgCADAAQAWgFAOAYIAfAzQAOAYgQARIgMAHIABACIlKC/IgLAIQggASgSggIgfg1QgOgYARgQg"
      );
    this.shape.setTransform(21.8197, 34.6523);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#FFFFFF")
      .ss(1, 1, 1)
      .p(
        "AiXAZIgQgBAiWAZIgBAAIgJgLAiHAqIgPgRIABgRAiNA9IgBgBIAGgTIABABIAMAOIgSAFIgXAGIAAAAIAAABIgEAOAgagbIAAAAIgKgLAgagbIABgRAgagbIgRAAAhvAKIABABIgBgBIAEgLAhvAKIAAAAIgHAbIANANIAXgGAh4AAIAJAKAhuBGIAFgTIAAgBIgSAGIANAOIgSAEIAAAAIgNgNAhSAsIAAAAIADgPAhfAJIgPACAgoAOIAAABIAXgHIAAAAIAFgSIABAAIAMANIAEgRIgQAEIgPgRAgoAOIAAABIAAAAAg1ABIANANAgoAPIgEAOAg4AUIAQgGAhCAoIgQAEAhGA3IgMgLAApgIIAAAAIADgPAA5gLIgQADAANgpIAAgBIAAABgAAcgrIgPACAANgqIADgLAANgpIgIAbIANANIgRAEIANAOIAFgRIgBgBAADg0IAKAKAgDAWIgBAAIgNgOAgDAWIAEgTIgSAFAgJAqIAAAAIAKAMAgMA0IADgKIgPAEAAWAwIAGgPIgBgBIgNgPIgRAFIgGAUAArAfIgQABAAcAhIAJAMAApgIIgXAHAA1ADIgMgLABhhPIAAAAIgRgBABhhPIABgRABhhPIgKgLACJheIAAAAIgIAbIANANIAXgGACYhfIgPACIAAgBACJhdIAAgBIADgMAB/hpIAKALACxgxIgMgLACKgiIAFgTIgBgBIgRAGIgTAEIAAAAIAFgTIgOgQACYgTIAAAAIgOgPIgSAEIAFgSIANAOACngUIgPABACYgTIAKAMABwg+IgBgBABwg+IANAOIAEgTgABTglIAAABIAAgBIAXgHIANAOIABAAIgGAVIgPADABTglIAAAAABygJIALALABwAAIACgJACSgDIAGgQAC1hAIgQAEIAEgPABDggIAQgFABGgzIANAOABTgkIgEAOAh2AlIgRAFAhmBlIAHgQIAJAMAhRBUIgPABIABAAAhgBVIgOgPAiABKIAFgSIAFgTAikBDIAAABAiIBoIADgJIAAAAIALAMAiFBfIAFgVAiUBiIAPgDAi0BIIAQgFIgNgO"
      );
    this.shape_1.setTransform(15.85, 34.3, 0.9, 0.9, -7.2144, 0, 0, -1.7, -0.1);
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#4FD9FE")
      .s()
      .p(
        "AgFBoIgOANIgKgRIgQAJIgGgRIgRAGIgEgTIgSAEIACgTIgUgBIAFgSIgSgFIAIgRIgRgIIALgPIgQgKIAOgNIgEgFIAHgCIADATIASgGIAFARIARgJIAJAPIAOgMIAKAKIgIACQgMAIADAGQABADAGAEIAKgCIALgJIgCgHIgEgEIAJgMIAPAKIAJgQIAQAJIAEgTIASAFIAAgTIATABIgDgTIATgCIgGgSIASgGIgKgQIAQgKIgHgIIALgCIgCATIAUABIgFATIASAEIgIARIARAIIgLAPIAQALIgPANIANANIgQAKIAKAPIgSAGIAGATIgTACIADATIgSgCIgCATIgSgEIgEASIgRgIIgIARIgPgLIgMAPgAAZBBIgHAEQAAABADAHQACAHAKgBIAIgHIgCgIQgGgEgFAAIgDABgAg1AzIgHAEQgBABACAHQADAHALgBIAHgHIgDgIQgGgEgDAAIgDABgAA0AoQgHAEgBABQgBACACAGQABAEAGADIAIgBIAJgIIgCgIQgGgEgEAAIgFABgAASAQIgHAEQgBACADAGQACAHALgBQAFgGACAAIgCgJQgGgEgEAAIgDABgAhnAWQAFAKALgCQAEgHACgBQgFgLgNgGQgHAHADAKgABEgIIgIADQAAACACAGQAEAHAKgBIAIgHIgEgHQgFgEgEAAIgDABgABYhBIgIAEQgBACAEAHQACAHAKgCIAIgGIgDgIQgFgEgEAAIgDAAgAhcgjQgDgGAFgEIAHgEIAMgDQABADAEADIACAIIgLAHIgJACQgGgDgCgDgAgSgtQgCgFAHgHQAHAAAGADIADAJQgDABgEAFIgDAAQgIAAgDgGgAg1g4QgCgFAIgHQAGgBAGAEIADAJIgHAGIgDAAQgIAAgDgGgAAZhVQgDgGAJgGQAFgBAHAEIADAJIgIAGIgBAAQgJAAgDgGgAhThXQgDgFAIgHQAHAAAGAEIADAIIgIAHIgBAAQgJAAgDgHgAgYhaQgCgFAHgHQAHAAAGADIADAJIgIAGIgCAAQgIAAgDgGg"
      );
    this.shape_2.setTransform(8.4317, 19.5507, 0.9, 0.9, -7.2144);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#12AED7")
      .s()
      .p(
        "AAkBvQgDgGAAgCIAIgEQAFgCAIAGIACAIIgHAHIgCAAQgJAAgCgHgAgsBhQgCgGABgCIAHgEQAFgCAHAGIAEAIIgIAHIgBAAQgKAAgDgHgAA8BYQgCgGABgCQABgCAIgDQAGgDAIAGIADAIIgJAHIgJABQgFgDgCgDgAAcA/QgDgHABgCIAHgEQAFgCAIAGIADAIQgCABgGAGIgCAAQgJAAgCgGgAhXA4QgEgKAIgHQANAGAFAMQgCAAgFAIIgDAAQgIAAgEgJgAgsA3QgDgGAMgIIAIgCIgKgLIgNANIgKgRIgQAJIgGgRIgSAGIgDgTIgHACIgIgHIAQgKIgJgQIASgGIgHgSIATgCIgCgTIASABIABgTIASAFIAFgTIARAIIAIgQIAPALIAKgPIAMAOIAOgNIAKAQIAQgKIAGATIASgHIADATIAHgBIAIAIIgRAKIAKAPIgSAGIAHATIgTACIADATIgTgCIgBASIgSgEIgEASIgRgIIgJARIgOgLIgJAMIAEAFIACAHIgLAIIgKACQgGgDgBgDgAhDgPIgHAFQgFADACAGQACADAGADIAJgCIAMgHIgDgHQgDgDgCgDgAgDgKQADAHAKgBQAGgGACAAIgDgJQgHgEgGAAQgHAHACAGgAgggiQgIAHACAGQADAHALgBIAHgHIgDgJQgFgDgFAAIgCAAgAAug/QgIAHACAFQADAHAKAAIAIgHIgDgIQgGgEgFAAIgBAAgAg/hAQgHAGACAGQADAHAKgBIAIgGIgDgJQgGgDgFAAIgCAAgAgJg3QADAHAKgBIAHgHIgDgIQgGgEgFAAQgIAHACAGgABOAlQgDgHAAgBIAIgEQAFgCAIAFIADAJIgIAGIgDABQgIAAgCgHgABigSQgDgHAAgBIAIgEQAFgCAHAFIAEAJIgIAGIgEAAQgHAAgCgGg"
      );
    this.shape_3.setTransform(6.6775, 16.6219, 0.9, 0.9, -7.2144);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }] })
        .wait(1)
    );
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#4FD9FE")
      .s()
      .p(
        "Ai6CQIgfg1QgOgZARgPQAEgFAGgEIBEBzQgMAHgKAAQgRAAgLgUgAi/AiIASgKIBDBzIgTAKgAigAQIASgLIBEB0IgTALgAiBgBIASgLIBEBzIgTALgAhigTIASgLIBEByIgTALgAhDglIATgLIBCBzIgSALgAgkg3IATgLIBCBzIgSALgAgFhJIASgKIBDBxIgTALgAAahbIASgLIBDByIgSALgAA5htIASgLIBEBzIgTAKgABYh/IASgLIBEBzIgTALgAB3iRIASgLIBDBxIABACIgTALgACXiiQAWgFAOAYIAfA1QAOAYgQAQg"
      );
    this.shape_4.setTransform(25.1359, 47.1342);
    this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#12AED7")
      .s()
      .p(
        "AjRBgQgrhJAWhRQAQg9AtgnQARgRAXgNQAagQAdgGQAygOA2AOQBSAXArBLIAmAvQAlAvAIAXIlnDVQhUhygEgIg"
      );
    this.shape_5.setTransform(23.6248, 41.075);
    this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#12AED7")
      .s()
      .p("AgHAEIgDgGIAHgEQADgDAHAEIAEAGIgGAHIgFAAQgEAAgDgEg");
    this.shape_6.setTransform(3.4, 24.1326);
    this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.winterhat,
    new cjs.Rectangle(-4.9, 4.8, 53.5, 59.7),
    null
  );
  (lib.wig = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("AhQgXIAxg2IBwBmIgyA1g");
    this.shape.setTransform(-6.55, 43.675);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AhZg9IDAAaQAVADAMAQQANAQgDAUQgDAUgQANQgRANgVgDIjAgaQgUgDgNgRQgMgRADgTQADgUAPgNQASgMAUADg"
      );
    this.shape_1.setTransform(13.118, 30.2801, 1.3263, 1.3263);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABZA/IjAgaQgUgDgNgRQgMgRADgTQADgUAPgNQASgMAUADIDAAaQAVADAMAQQANAQgDAUQgDAUgQANQgOAKgQAAIgIAAg"
      );
    this.shape_2.setTransform(13.118, 30.2801, 1.3263, 1.3263);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "Ahag9IDBAaQAUADANAPQANARgCAUQgEAVgRALQgQAOgUgDIjBgaQgTgDgOgRQgMgQADgUQADgUAQgNQARgMATADg"
      );
    this.shape_3.setTransform(14.8525, 17.0836, 1.3263, 1.3263);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABaA/IjBgaQgTgDgOgRQgMgQADgUQADgUAQgNQARgMATADIDBAaQAUADANAPQANARgCAUQgEAVgRALQgNALgQAAIgHAAg"
      );
    this.shape_4.setTransform(14.8525, 17.0836, 1.3263, 1.3263);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AhZg9IDBAaQAUADAMAQQANAQgDAUQgDAVgQAMQgRANgUgDIjBgaQgTgDgNgRQgNgRADgTQADgUAQgNQARgNAUAEg"
      );
    this.shape_5.setTransform(14.8532, 17.074, 1.3263, 1.3263);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABaA/IjBgaQgTgDgNgRQgNgRADgTQADgUAQgNQARgNAUAEIDBAaQAUADAMAQQANAQgDAUQgDAVgQAMQgOAKgQAAIgHAAg"
      );
    this.shape_6.setTransform(14.8532, 17.074, 1.3263, 1.3263);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AhZg9IDBAaQATADANAQQANAQgDAUQgDAVgRAMQgQANgUgDIjBgaQgUgDgNgRQgMgQADgUQADgUAQgNQARgNAUAEg"
      );
    this.shape_7.setTransform(16.6094, 3.9449, 1.3263, 1.3263);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABaA/IjBgaQgUgDgNgRQgMgQADgUQADgUAQgNQARgNAUAEIDBAaQATADANAQQANAQgDAUQgDAVgRAMQgNAKgQAAIgHAAg"
      );
    this.shape_8.setTransform(16.6094, 3.9449, 1.3263, 1.3263);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ACjhWQiQAjAIBZQAHBaiuBeQivBfBihKQBihJgjhiQgkhhAzh7QAzh7BwgEQBxgDBVBOQBUBPiPAjg"
      );
    this.shape_9.setTransform(19.8039, 12.3781, 1.3263, 1.3263);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AjZDzQBihJgjhiQgkhhAzh6QAzh8BwgEQBxgDBVBOQBUBPiPAjQiQAjAIBZQAHBaiuBeQhiA2gMAAQgKAAArghg"
      );
    this.shape_10.setTransform(19.8039, 12.3781, 1.3263, 1.3263);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.wig,
    new cjs.Rectangle(-14.7, -25.1, 69.1, 76.6),
    null
  );
  (lib.waterMove = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(["#4597B2", "#337185"], [0, 1], 0, -67.3, 0, 439.5)
      .s()
      .p(
        "EhNBAA/IAAhrIAsACQATABAYAGQAbAGASgJQAPgGAXAJQAbALANgIQALgHAZgIQAWgHAPAKQARANAYABIAqAEIAIABIAFAAQAPgBALgEQAPgGAUAAQAUgBAWgJIgBABQAUgIAQABIAoAEIAlAEQAOACAcgBQAcgBAWgIQAUgIAYAGQAcAGAUgEQARgDAJAMIAAABQAJAJAKgBQAKAAANgJQARgNAKAKIAAABQANARAcgEQAXgDAVAEQAXAEAVgJQATgIAUgBQASAAAMAFQAOAHAdAAQAbAAAVgHQATgIAaAEQAeAFAOgJQAKgGAKAFQAOAGAbADQAaADAbgDQAbgDAHgDIgBAAQAHgCAkACIAyADQAMABAUgBQAVgBAcgEQAZgDAJADIABAAQAJAEAXABQAWACAYgCQAbgBAQgKQANgIANAAQAOACAXAKQAaALAZgJQAVgIARAHQATAHAdgDQAbgCAQADQATADAQgBQAPgCAQABQATABAUgCQAVgBAfgIQAdgHAPAGIAAAAQASAGAQgDQANgDAVAEIAvAKIAAAAIAwALQAXAFAWgJQAVgIAKgCQAKgBASADIgBAAQAVAFATgFQATgEAUgJQAQgHASANQAWAQAegHQAcgHAQgJQAMgHAOAJQARALAXgGQAVgEAVAIQAYAIAXAGQASAEAOABIAKAAQARgBAbgOQAXgMANAEQAPAFAbAAQAbgBANgIQAJgFAKAJQAQANAcgNQAWgLAXANQAZAOAbgBQAcAAAHgGQAHgEAYgCQAagCAPACQAPABAdgBQAcAAAQABIAeACQANACAcACQAdACARgFIAAAAQAQgFAfACQAeABALAGQANAHAXgHQAUgHAXACQAZADAMgCIABAAQANgCAcAAIAtACIAlAEQAWACAMgMQAKgIAaAIQAeAJASgCQARgCALgDQAKgDAgAHIAAAAQAiAJATgIIABAAQAPgHAQADQASADAQAEQARAFAdABQAfACAVgEQAUgEAPgCIAkgCQAXgBAYgIQAUgIASABQARAAAVAHIgBAAQAXAIAcgGQAYgFAJACIAfAMIAAAAQAcAMALgPQAIgJAYAKQAaAJARgFIAGgDIAAAAQAQgIAVgBQAWAAAUADQAXADAWgCIAogEIABAAQAQgCAMABIAAAAQAMACAUgFIgBAAQASgFAkAHQAmAHAMgEQAKgDAbAFQAeAGAOgBQANgCAVgIQASgHAVAGQAYAHAbABQAbACAJgBIAAAAIAkgCQAbAAAOABIAiAGQAUAEAZgFQAXgEAKAAQAJgBAbADQAcACAPgEIgBAAQAPgEAaAAIAkABQAMACAWgDQAUgDATADQATAEAaAAQAaABARgBIAogCQAWAAAWAIIgBAAQAYAHAYgCQAXgCAQACQARACAXgIQAVgIAQABIAqACQAcACAKgMQAJgIASAFQAXAHAYAFIAAAAQAaAGAVgDQAUgDAQABQARABAQgFQAOgEAZADIAxAGQAXADAVgGQARgFANACIAgAGQAUAEAagBQAcgBAVgFQAUgEAVAEQAUAFAUAAIApACQAVACAXgNQAQgKAIAJQALAPAeACIApACIABAAQANAAAWgEQAVgDAYgJQAWgIARAFQASAGAfAGQAfAGAZgGQAagGADgEQABgBAaABIAqAEQANABAfgBQAggCAKgDQAKgDARAEIAAAAQATAEAWAJQAYALAWgLIAlgSQASgHAgAIQAjAIAKAFIAAAAQANAGAcgPQAXgMAUAIQAWAIAQABIAJAAIAhgBQAagBAPgFQAPgFANgCQAOgBAVAGQAXAHAPABQAQABARAAIAAAAIA1AAQAggBAEAEQAFAKAjgKQAggIANABQAOACAXgBQAWAAATAFQAUAFAOACQANABAcgEQAdgDANAAIApACQAZABAZgKQAWgJAVADIAsAHQAXAEAVAAIAeAAIAaAAIAnACQAXABAdgGQAbgGAOADQAPAEATAEIAqAHQAXADAVgGQAQgGAUAHIAAAAQAWAIAWgJQATgIATAAQAUAAAVgKQAPgHAIAIIABAAQALANAeAAQAZAAAPAGQAQAGAdgGQAbgFAYAAQAaABAQgGQAOgFAKACQANADAdgDQAbgDASAJQAVAMAWgIQAUgHASACQATADAOAHQAPAJAfgLQAYgJAHAEQAJAKAXgOIAAASIG2AAIAABYg"
      );
    this.shape.setTransform(492.95, -9.9764);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#05293B")
      .s()
      .p(
        "A9UAXQgNAAgSgFQgYgGgXgIQgWgGgUADQgXAFgSgKQgNgIgMAHQgQAHgcAHQgfAHgVgQQgSgLgRAHQgTAIgTAEQgTAEgWgEIABAAQgSgEgKABQgKACgUAIQgXAJgWgFIgwgKIAAAAIgwgKQgVgEgMADQgRADgRgGIAAAAQgQgFgcAHQggAGgVACQgUABgSgBQgRAAgPABQgQACgSgEQgRgDgaADQgdACgUgGQgRgGgVAHQgYAJgbgLQgXgKgOgBQgNgBgNAJQgPAJgbABQgZABgWgBQgWgBgKgEIAAAAQgJgDgaADQgbAEgVABQgVABgMgBIgxgDQgkgCgHACIABAAQgIACgbADQgbAEgagDQgagDgOgGQgLgFgKAGQgNAJgegFQgagEgTAHQgVAIgcgBQgcAAgOgGQgMgGgTABQgTAAgTAIQgVAJgXgEQgVgEgYADQgbAEgOgRIAAAAQgJgJgSALQgMAKgKAAQgLAAgIgJIAAAAQgKgLgQADQgUADgcgGQgYgGgUAIQgXAHgcABQgbACgPgCIglgEIgngDQgRgCgTAHIAAAAQgVAJgVAAQgTABgPAGQgMAEgOAAIgFAAIgJAAIgqgEQgXgCgRgNQgPgJgWAHQgZAIgLAGQgNAIgcgLQgXgJgPAHQgRAJgcgHQgYgGgTgBIgrgBIAAgJIAsABQATABAZAGQAYAFAPgHIABAAQASgIAbAKQAWAIAKgEQAMgHAZgIQAcgJASANIABAAQAPAKATACIABAAIAqAEQAVACAOgGQARgGAUgBQAUAAAUgHQAVgJASACIAoAEIAlAEQAOACAbgCQAagBAVgHQAXgJAcAHQAZAGASgEQAWgEAOAQIAAAAQAFAFAFAAQAIgBAJgGQAbgTAOATIAAAAQALALAVgDIABAAQAYgDAWAEQAVAEASgIQAUgIAWAAQAVgBAOAGQAMAFAaAAQAZABAUgGQAVgIAdAEQAZAEAMgHQAOgJAQAHQANAGAYADQAaACAZgDIAAAAQAagDAGgCIABAAQAHgCAnACIAxADQAMABAUgBQATgBAcgEQAdgEAKAEIABABQAJADAUABQAVABAZgBQAWgBAPgJQARgKAPABIAAAAQAPABAaALQAWAKAVgIQAYgJAVAIQASAGAagCQAcgDASADIAAAAQAQAEAPgCQAQgBASAAQARABAUgBQAUgCAegHIABAAQAfgHASAGQAPAFANgDQAPgDAXAEIAwALIAAAAIAvAJQAUAEAUgHQAWgIAKgCQAMgBAUAEIAAAAQASADASgDIAAAAQARgEATgIQAWgKAXAQQARAMAagFQAbgGAOgIQASgKASAMQAOAIAUgEIAAAAQAXgFAYAJIAuANQAYAFAPgBQAPAAAZgNQAcgPAQAHQAOAFAYgBQAYAAALgHQAOgKARAPQAMAIAVgKQAbgMAbAOIAAABQAXAMAYgBIAAAAQAXgBAGgEQAIgFAcgCQAcgBAPABQAOACAdgBIAAAAQAdgBAQABIAeADQANACAcAAQAbACAQgDQARgFAgABQAhACANAFIAAAAQALAGASgGIgBAAQAWgHAZADQAXACAMgCQAOgCAdABQAdAAARACIAlACQASACAIgHQAMgMAhAJIABAAQAdAIAPgCIAAAAQARgCAJgCQANgEAiAIIAAAAQAgAGAQgFQASgHAUACQARADARAEIABAAQAQAFAcABQAcABAUgEIAkgFIAlgCQAWgBAVgHIABAAQAXgIATAAQATABAVAHQAUAHAZgFQAcgGAJADIABAAQAJACAXAJIABAAQATAIAHgIQALgOAhANQAZAIAOgHIACAAQARgJAYAAQAXAAAVADQAVADAVgCIAngFIAAAAQATgCAMACQALACASgFQASgGAoAHQAjAHAKgDIAAAAQALgFAgAHQAcAGAMgCQAMgBAUgIQAUgIAaAHQAXAGAZACQAaABAIgBIAlgBIAAAAQAdgBAOACIAiAEIABAAQASAEAWgEQAYgDAKgBQALAAAbACQAZACAPgDQAPgFAbAAIAmACQAKABAVgDQAVgDAVAEIAAAAQATAEAZAAQAaAAAPgBIAqgBQAYAAAWAHQAVAHAXgDQAXgCARACQAQACAUgHQAXgHASABIAqACQAWABAJgIIAAgBQALgMAZAHIABAAIAuAMIAAAAQAXAFAUgCQAVgDARAAQAQABAOgEQAQgFAbAEIAxAGQAVACASgFQAVgFAOACIAhAFQASADAZAAQAbgBAVgEQAWgFAWAFQAUAEATABIAoABQAUABAUgKQAZgPAMAQQAJAKAZACIAoACQANABAUgEQAVgEAXgHQAZgKAVAHQARAFAeAFQAdAHAXgGQAVgEACgCIABgBQACgEAhACIAqADQAOACAegCQAdgBAKgDQALgEAVAEIAAABQAUAEAXAJQATAIASgIIAmgRQATgKAlAKQAkAJALADQAKAEAWgLQAbgPAYAKQAUAIAQAAIAIABIAggBQAYgBAPgFQAQgFAOgCIAAAAQAPgCAYAHQAWAGANABIABAAQAPACARAAIA0gBIABAAQAmAAAFAHIAAAAQAEADAbgGQAhgJAOACQAPABAVAAIAAAAQAXAAAVAFQATAEANABQAMACAcgEIAAAAQAdgDAPABIAnAAQAYABAXgIQAZgJAXADIArAHQAYAEATAAIAfAAIAaAAIAnABQAVABAcgFQAfgHAOAEIAiAHIABAAIAqAGQAUADASgFQAUgGAXAHQASAGATgHQAVgHAVAAQARAAATgJIAAAAQAXgLANAOIAAAAQAJAKAYAAQAbAAARAFQAPAFAZgFQAbgFAZAAQAYAAAPgEQASgHAMAEQAMADAbgEQAegEAUAMIAAAAQARAJASgHIABAAQAVgGAVACQAVACAPAHIAAABQAMAGAagJQAggLAJAIIAAAAQAGAEAQgJIADgBIAAAKQgWANgJgJQgHgFgZAJQgeALgQgJQgNgHgTgCQgTgCgUAHQgWAIgVgMQgSgJgaACQgeAEgMgDQgLgCgOAEQgQAGgaAAQgYgBgaAGQgdAGgQgHQgPgFgaAAQgdAAgLgMIgBAAQgIgIgQAHQgVAJgTAAQgTAAgUAIQgVAIgXgIIAAAAQgTgGgRAFQgUAGgXgDIgqgHQgUgDgPgEQgNgDgbAFQgeAHgWgCIgngBIgaAAIgfAAQgVAAgXgEIgsgGQgUgDgWAIQgZAJgagBIgogBQgOgBgcAEQgdAEgNgCQgOgBgUgFQgTgFgWAAQgXAAgNgBQgOgCgfAJQgjAJgGgJQgEgEgfAAIg1ABIAAAAQgSAAgPgCQgQgBgWgFQgWgHgNACQgOACgOAFQgQAEgaABIggABIgJgBQgRAAgWgIQgUgIgXAMQgcAPgMgHIAAABQgLgFgigIQghgIgSAIIglARQgWAKgYgKQgWgKgSgEIAAAAQgSgCgJACQgLADgfABQgfACgNgCIgrgDQgZgBgCAAQgDAEgaAHQgYAGgfgHQgfgGgTgFQgQgFgXAHQgYAJgVAEQgVAEgOgBIgBAAIgogCQgegCgLgOQgJgJgQAKQgWAMgWgBIgogCQgUgBgVgEQgUgEgUAEQgWAEgbABQgbABgUgEIgfgFQgNgBgSAEQgUAFgXgCIgygGQgYgDgOAEQgQAEgSgBQgPAAgVADQgUADgagGIAAAAQgZgFgWgGQgSgFgJAHQgLALgcgBIgpgCQgRgBgUAHQgXAIgSgCQgQgCgWACQgZADgXgIIABAAQgWgHgWAAIgpABQgQABgaAAQgaAAgUgEQgTgDgUACQgWADgLgBIglgCQgaAAgOAEIAAAAQgPAFgcgDQgagCgKAAQgKABgWAEQgZAEgUgEIgigFQgOgCgcABIgkABIAAAAQgJABgbgBQgagCgYgFQgVgGgTAHQgVAHgNABQgNACgegGQgbgFgLACQgLAFgngHQgkgHgSAFIABAAQgUAFgNgBIAAAAQgLgCgRACIgBAAIgnAEQgWACgXgDQgUgDgWAAQgVAAgPAIIAAAAIgHADQgRAFgagJQgYgIgHAHQgLAPgcgMIAAABIgggLQgIgCgZAEQgcAGgWgHIABAAQgVgHgRgBQgSAAgVAHQgXAHgYABIgkADQgOABgVAEQgVAEgegBQgdgBgSgFQgPgFgSgDQgQgCgQAGIgBABQgSAHgjgIIAAAAQgfgHgLACQgKADgSACQgRADgfgJQgagHgKAHQgMALgWgCIglgDIgtgCQgbgBgNACIgBAAQgNADgZgDQgXgDgTAHQgXAIgNgIQgMgFgegCQgfgBgPAEIAAAAQgRAFgdgCQgdgBgNgCIgdgDQgQgBgdABQgdABgPgCQgPgBgZABQgZACgHAEQgHAGgcABQgaABgagPQgWgLgXAJQgcAOgPgOQgLgIgJAGQgMAHgcAAQgaABgQgGQgMgDgYALQgaAPgSAAg"
      );
    this.shape_1.setTransform(471, -14.9293);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#479FBB")
      .s()
      .p(
        "AWEC+QhygJjFhIQjEhHmRA/QixA6lHhpQlGBpixg6QmQg/jGBHQjFBIhwAJQhxAKhxgtQhygthLATQilAwiRg1Qkuhxk7BqQkjA0kshSQjDg6kBAhQg+AIhBAMQi3Afh1goQhXgfhAADQgWABgTAEQijAviEg/IAAhCQCFhACkAvQATAFAVABQBBADBXggQB1goC3AfQBCAMA9AIQEBAhDDg6QEshTEjA1QE7BqEuhxQCRg0CkAuQBNATBwgsQBxgtBxAKQByAKDFBIQDEBGGRg/QCyg8FDBrQFEhrCyA8QGQA/DGhGQDFhIBwgKQBxgKByAtQBwAsBNgTQCkguCRA0QEuBxE6hqQEkg1EsBTQDDA6EBghQA9gIBCgMQC3gfB2AoQBWAgBBgDQAVgBATgFQClgvCEBAIAABCQiEA/ijgvQgTgFgVAAQhBgDhXAfQh1Aoi3gfQhBgMg+gIQkBghjDA6QksBSkjg0Qk7hqkuBxQiRA1ikgwQhNgThwAtQhdAlhcAAQgVAAgUgCg"
      );
    this.shape_2.setTransform(471, 163.65);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#3F8DA6")
      .s()
      .p(
        "EgziAUIQhxgMjEhSQjGhQmQBIQiyBDlGh6IAAh7QFEh6CyBEQGQBIDGhRQDEhSBxgLQBxgLBxAzQByAzBLgVQClg2CRA8QEuCBE6h5QEkg8EsBeQDDBDEBgmQA9gJBCgOQC3gkB2AuQBzAxBMgWQClg2CDBKQCEhKClA2QBMAWBzgxQB2guC3AkQBCAOA9AJQEBAmDDhDQEsheEkA8QE6B5EuiBQCRg8CkA2QBNAVBwgzQBxgzByALQBwALDFBSQDGBRGQhIQCyhEFEB6IAAB7QlHB6ixhDQmRhIjEBQQjFBShyAMQhwALhyg0QhwgyhNAVQikA2iRg8QkuiCk7B6QkjA8ksheQjDhDkBAmQg+AJhBAOQi3Akh1guQh0gxhMAWQijA2iEhJQiCBJikg2QhMgWhzAxQh2Aui3gkQhCgOg9gJQkBgmjDBDQksBekkg8Qk6h6kuCCQiRA8ilg2QhLgVhyAyQhcArhdAAQgUAAgVgCgEAwAAA+QhwgZhNALQikAaiRgdQkug+k7A6QkjAdksguQjDgfkBARQg+AFhBAHQi3ARh1gWQh0gXhMAKQijAaiEgiQiCAiikgaQhMgKhzAXQh2AWi3gRQhCgHg9gFQkBgRjDAfQksAukkgdQk6g6kuA+QiRAdilgaQhLgLhyAZQhwAZhygGQhxgFjEgoQjGgmmQAiQiyAglGg6IAAg7QFEg6CyAgQGQAjDGgnQDEgnBxgGQBxgFBxAZQByAYBLgKQClgaCRAdQEuA+E6g6QEkgdEsAtQDDAgEBgSQA9gEBCgHQC3gRB2AWQBzAXBMgKQClgaCDAjQCEgjClAaQBMAKBzgXQB2gWC3ARQBCAHA9AEQEBASDDggQEsgtEkAdQE6A6Eug+QCRgdCkAaQBNAKBwgYQBxgZByAFQBwAGDFAnQDGAnGQgjQCyggFEA6IAAA7QlHA6ixggQmRgijEAmQjFAohyAFIgoABQhdAAhdgUgEAwAgRJQhwgZhNALQikAaiRgdQkug/k7A7QkjAdksguQjDggkBASQg+AFhBAHQi3ARh1gWQh0gYhMALQijAaiEgjQiCAjikgaQhMgLhzAYQh2AWi3gRQhCgHg9gFQkBgSjDAgQksAukkgdQk6g7kuA/QiRAdilgaQhLgLhyAZQhwAZhygGQhxgFjEgoQjGgnmQAjQiyAglGg6IAAg8QFEg6CyAgQGQAjDGgnQDEgnBxgGQBxgFBxAZQByAYBLgKQClgaCRAdQEuA+E6g6QEkgdEsAtQDDAgEBgSQA9gEBCgHQC3gRB2AWQBzAXBMgKQClgaCDAjQCEgjClAaQBMAKBzgXQB2gWC3ARQBCAHA9AEQEBASDDggQEsgtEkAdQE6A6Eug+QCRgdCkAaQBNAKBwgYQBxgZByAFQBwAGDFAnQDGAnGQgjQCyggFEA6IAAA8QlHA6ixggQmRgjjEAnQjFAohyAFIgoABQhdAAhdgUg"
      );
    this.shape_3.setTransform(471, 207.5295);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#397E95")
      .s()
      .p(
        "AWEBpQhygGjFgnQjEgnmRAjQixAglHg6QlGA6ixggQmQgjjGAnQjFAnhwAGQhxAGhxgZQhygZhLAKQilAaiRgcQkug/k7A6QkjAeksguQjDggkBASQg+AFhBAGQi3ASh1gWQh0gYhMAKQijAbiEgkIAAgjQCFgkCkAaQBMALB0gXQB1gXC3ARQBCAIA9AEQEBASDDggQEsgtEjAcQE7A7Eug+QCRgdCkAZQBNALBwgYQBxgZBxAFQByAGDFAnQDEAnGRgjQCyghFDA7QFEg7CyAhQGQAjDGgnQDFgnBwgGQBxgFByAZQBwAYBNgLQCkgZCRAdQEuA+E6g7QEkgcEsAtQDDAgEBgSQA9gEBCgIQC3gRB2AXQBzAXBMgLQClgaCEAkIAAAjQiEAkijgbQhMgKh0AYQh1AWi3gSQhBgGg+gFQkBgSjDAgQksAukjgeQk7g6kuA/QiRAcikgaQhNgKhwAZQhdAUhdAAIgogBg"
      );
    this.shape_4.setTransform(471, 10.6);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.waterMove,
    new cjs.Rectangle(0, -17.2, 985.9, 353.7),
    null
  );
  (lib.waterlineani = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#4597B2")
      .s()
      .p(
        "AAHA3IhzACQhEABgwgEIhogKQhAgHgpAAQgZAAgUgCQgUgCgdgJQgdgJAAgPQADgNAagLIAAgFQACgIALgDQAIgCAJABIAjACIAOgBIABAAIAIgBQAOgCAdgJQAogKAhAKQAPAEAZAMQAyATBRgMIBCgMQAngGAbgBQAmgCA6AJIBfAPQBFAKA3gKQASgDAkgJQAkgJASgDQAtgIBKAEQAWACAEALQAAADAAADQALAJgCARQgQASgSAIQgTAHgRAEQgKABgXABQgcAAgqAHQguAJgXADQg/AJhaAAQhogDgzAAg"
      );
    this.shape.setTransform(55.696, 6.4397, 1, 1.4526);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.waterlineani,
    new cjs.Rectangle(0, -1.9, 111.4, 16.8),
    null
  );
  (lib.volumeLine__vol_bar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AkMAUIAAgnIIZAAIAAAng");
    this.shape.setTransform(26.925, 0);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.volumeLine__vol_bar,
    new cjs.Rectangle(0, -2, 53.9, 4),
    null
  );
  (lib.volumeBall__vol_bar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFCC00")
      .s()
      .p(
        "AgzA0QgWgVAAgfQAAgeAWgVQAVgWAeAAQAfAAAVAWQAVAVAAAeQAAAfgVAVQgVAVgfAAQgeAAgVgVg"
      );
    this.shape.setTransform(-0.0001, -0.0001, 1.0884, 1.0884);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.volumeBall__vol_bar,
    new cjs.Rectangle(-8, -8, 16, 16),
    null
  );
  (lib.viking = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ACThaQBlAbAWBcQj1BBinCZQgdhEAHg+ACThaQAAhRhJhLQAVBLgXBGQAqACAhAJgAiJAfQAmhEBXg+QAtgEAnACAiJAfQApARAzAIQARA/hMAWQghgKgbgOQh1g/ANiRQAqBVBZAlg"
      );
    this.shape.setTransform(27.0052, 24.675);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhnCqQh1hAAOiQQApBUBaAlQApASAyAIQAQA/hKAWQgigKgbgOgACGgwQAWhGgUhLQBIBLAABRQghgKgpgBg"
      );
    this.shape_1.setTransform(20.8552, 19.4);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#663300")
      .s()
      .p(
        "AjYAtQAbAOAiAKQBLgWgQg+QgzgIgpgRQAlhFBXg+QAvgEAmACQApACAhAJQBmAbAVBdQjzBAioCZQgehEAHg+g"
      );
    this.shape_2.setTransform(32.1829, 31.8667);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.viking,
    new cjs.Rectangle(-1, -1, 56, 51.4),
    null
  );
  (lib.vampire = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("AgbArQgBgBAHgpQAHgogBgCQgEgDAYAFIAYAEQgDACgZAkQgaAogCAAIAAAAg");
    this.shape.setTransform(102.6187, 24.8664, 1.3757, 1.3757);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(1.5, 1, 1)
      .p(
        "ADgAZQAOAMAFADQgQAEgRAEADgAZIAEgHAB9A5QgbABgcAAQhggDhYg3QgIgHgzg2Qgyg2gSgbIE8AsIANACQABAABHBAQAqAmAWATABLhiIAyCbIAcBWIA5hfIAOgX"
      );
    this.shape_1.setTransform(63.283, 42.4162, 1.3757, 1.3757);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#990000")
      .s()
      .p("ACBBkQhhgChXg3Ig7g9Qgzg2gRgbIE8AsIAxCbIgjAAIgTAAg");
    this.shape_2.setTransform(55.1666, 36.5467, 1.3757, 1.3757);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FF0000")
      .s()
      .p(
        "AghAjIgyibIANACIBHBAIBAA5IgOAWIg4BggAAzAZIAOgWIATAPIghAHgABBADIAAAAg"
      );
    this.shape_3.setTransform(85.0872, 45.477, 1.3757, 1.3757);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#000000")
      .ss(1.5, 1, 1)
      .p(
        "ABvlsQAAACAAABQgBAYgMARQgNARgTAAQgTAAgNgRQgNgSAAgaQAAgBAAgBQAAgYANgRQANgSATAAQATAAANASQANASAAAZgAjjhSIAKABQCwBoC0g/QABAAACgBIAIABACegiQCUEEimCzQgCACgCACACGgkQCCELj9DD"
      );
    this.shape_4.setTransform(78.4845, 53.2495, 1.3757, 1.3757);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AFMhZQgCgBgBgBQg3gegEg4QgCgdASgMQAJgHAOgBQAXgEAOgdQARgggBgbAFMhZICehGQAlgRgpgYQgEgDgDgCIAAgBQgGgGABgHIAAgBQAAgEACgEIAXgyQAHgOgOgLQgOgKguASQgtATgZgrQAAABAAAAAgfgbQANgDACgIQACgMgUgWQhAhEAAheQAAhjBGhFQBEhGBjAAQBiAABGBGQAmAmARAuAFnAHIAAABQApAQAiAiQBEBEAABhQAAA4gYAvQgiBXhnAjQgLADgLAEQgYADgTADQguAGgSACQjXAOjKgkQiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATQABABAaAkQAVAcAaAGQAHABAIAAQB7gOBtADQATACAMgCQA4BEAHBtQACBghkALQhjAOhzgOQhggOAChTQAIhtA5hEAFMhZQgkA1A3AmAE1HJQAMgCARgDQgKABgJACQgFABgFABQgQAEgRAA"
      );
    this.shape_5.setTransform(50.7826, 47.3426, 1.3757, 1.3757);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FF0000")
      .s()
      .p(
        "AAPgkQATgBAEACIAAABQCVEEinCzIgVAHIAVgHIgDAEIgSADIgrAGIhAAIQD9jDiCkLgAhUlAQgOgSAAgaIAAgCQABgYANgRQANgSASAAQAUAAAMASQANASAAAZIAAADQAAAYgNARQgMARgUAAQgSAAgNgRgAhImGQgHAKgBAPIAAABQAAAQAIAKQAIALALAAQAMAAAHgLQAIgKAAgOIAAgCQAAgPgIgLQgHgKgMAAQgLAAgIAKg"
      );
    this.shape_6.setTransform(94.9236, 53.2495, 1.3757, 1.3757);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ACeAUQAoARAiAiQBEBEAABgQAAA5gXAvQgiBXhnAiQCmiyiUkGgAjZgaQACgLgVgXQg/hEAAheQAAhiBFhGQBGhFBiAAQBiAABFBFQAmAmARAvQABAagQAgQgPAdgXAEQgOACgJAGQgRAMACAdQADA4A3AfIAEACQglA1A4AmIgIgBIgDABQhEAYhEAAQhuAAhuhBgAAilgQgNARAAAYIAAADQAAAZANASQANASATAAQATAAANgSQAMgRABgYIAAgCQAAgagNgSQgNgRgTAAQgTAAgNARg"
      );
    this.shape_7.setTransform(78.5184, 45.6146, 1.3757, 1.3757);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AjNFyQiggehei/QgbhBgPhPQgLg8AKguQAJguASgSQATgTAbAAQAbAAATATIAbAmQAVAbAaAGQg5BFgIBtQgCBTBgANQBzAOBjgNQBkgLgChgQgHhtg4hFQANgCACgJQCwBpC0g/IgEAEQCCEKj+DDQg9AEg8AAQiXAAiRgagAFJinQg3gfgEg4QgCgdASgMQAJgGAOgCQAXgEAOgdQARgggBgaIAAgBQAZAqAtgSQAugTAOALQAOAKgHAOIgXAzQgCAEAAAEIAAAAQgBAIAGAGIAAAAIAHAFQApAZglAQIieBHIgDgCg"
      );
    this.shape_8.setTransform(50.7826, 57.8663, 1.3757, 1.3757);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.vampire,
    new cjs.Rectangle(-20, -18.7, 141.6, 132.1),
    null
  );
  (lib.unicorn = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ACFhGIAAAAQABAAABABQAZg5gdg4Qggg6hMgEQhMgDguAsQgvAsABBKQABBLA0AxQA0AxAGA0QAFAzgdAJQgbAHgHgFQABACACACQAPAOAQAJQAQAJAHACQAbAIAXgFQADAAADgBQAigHAKgbQAMgbgUgwQgFgOgJgaQgIgXgJgSQgMghAAgaQgBgqAUgWQAUgWAhAFQAhAGAMANQABABABABIAAgBQAAAAAAgBQgSgNgKgLQgMgNghgGQghgFgUAWQgTAWABAgQAAAgAgA0QACAEADAFACFhGQgEgQgOgjQgUgvg5gEQg3gFggAhQgfAhABAyQAAAyAzBTQAIAOAYA1QAZA0hAAxACFhFIAAgB"
      );
    this.shape.setTransform(1.1595, 68.0014, 1.4077, 1.4077);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FF6600")
      .s()
      .p(
        "AgmBKQghg1AAgfQgBggAUgWQAUgWAgAFQAhAGAMANQAKALASANIAAABIAAABIgCgCQgMgNghgGQgggFgUAWQgUAWABApQAAAbAMAhIgFgJg"
      );
    this.shape_1.setTransform(9.6191, 63.666, 1.4077, 1.4077);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FF6699")
      .s()
      .p(
        "Ag6DnQgQgJgPgOIgDgDQAHAFAbgIQAdgJgFgzQgGgzg0gyQg0gxgBhKQgBhLAvgsQAugrBMADQBMADAgA7QAdA4gZA4IgCAAIAAAAQgEgQgOgjQgUgvg5gFQg3gFggAiQgfAhABAyQAAAyAzBTQAIAOAYA0QAZA1hAAxQgHgDgQgJg"
      );
    this.shape_2.setTransform(1.1595, 67.6715, 1.4077, 1.4077);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#6699CC")
      .s()
      .p(
        "Ag9DNQBAgxgYg1QgZg0gIgOQgzhTAAgyQgBgyAfghQAggiA3AFQA5AFAUAvQAOAjAEAQIAAAAQgSgMgKgMQgMgMghgGQghgGgTAWQgUAWABAgQAAAgAhA1IAEAJQAJASAIAXIAOAoQAUAwgMAbQgKAaghAIIgGABQgJABgKAAQgPAAgRgEg"
      );
    this.shape_3.setTransform(4.8314, 73.002, 1.4077, 1.4077);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAyANQACgHAAgHQAAgUgPgOQgPgPgWAAQgVAAgPAPQgPAPAAAUQAAAVAPAPQAPAPAVAAQAMAAAKgEQADgCADgCQAFgDAEgEQALgKACgNg"
      );
    this.shape_4.setTransform(-7.6202, 90.6393, 1.4083, 1.4083);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#6699CC")
      .s()
      .p(
        "AgjAkQgQgPAAgVQAAgUAQgPQAPgPAUAAQAWAAAPAPQAPAOAAAUQAAAHgCAHQgDANgKAKIgJAHIgGAEQgKAEgMAAQgUAAgPgPg"
      );
    this.shape_5.setTransform(-7.6202, 90.6393, 1.4083, 1.4083);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAugaQgCAegHAIQAEAVgPARQAFAXgPASQgyAJgdg0QAHgaAWgFQAIgVAUgJQAGgPATgOIAtgxIgSBBQgOgEgNgMAAlAMQgZgEgSgVAAaAyQgkACgYgj"
      );
    this.shape_6.setTransform(108.7843, -6.6781, 1.4083, 1.4083);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FF6699")
      .s()
      .p(
        "Ag/AwQAHgaAWgFQAIgVAUgJQAGgPATgOIAtgxIgSBBQgOgEgNgMQANAMAOAEQgCAegHAIQAEAVgPARQAFAXgPASIgPABQgnAAgZgsgAAWAyIADAAIABAAIgBAAIgDAAIAAAAIAAAAQggAAgWgeIgBgBIAAAAIgBgCIABACIAAAAIABABQAWAeAgAAIAAAAIAAAAgAAlAMQgZgEgSgVQASAVAZAEg"
      );
    this.shape_7.setTransform(108.7843, -6.6781, 1.4083, 1.4083);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_7 }, { t: this.shape_6 }] })
        .wait(1)
    );
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AACgSQAYAKgHATQgBAHABAFQgdgFgFgIQgFgHABgJQACgKAHgFQABgBAAAAQAEABAHADg"
      );
    this.shape_8.setTransform(62.4044, 26.5259, 1.4083, 1.4083);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FFCC33")
      .s()
      .p("AgPAKQgFgGABgKQACgJAHgGIABgBIALAEQAYAJgHAVQgBAGABAFQgdgFgFgIg");
    this.shape_9.setTransform(62.4044, 26.5259, 1.4083, 1.4083);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AANgWQAVAYgTATQgGAHgCAGQgdgXgBgLQgBgLAHgKQAIgJAJgDQACAAABAAQADAEAHAHg"
      );
    this.shape_10.setTransform(63.7719, 21.104, 1.4083, 1.4083);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#66FF99")
      .s()
      .p("AgXAAQgBgKAHgLQAIgJAJgDIADAAIAKALQAVAYgTATQgGAHgCAGQgdgXgBgLg");
    this.shape_11.setTransform(63.7719, 21.104, 1.4083, 1.4083);
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AAWgYQASAjgcASQgKAHgCAGQgeglACgNQACgOAMgKQAMgJAMAAQACAAACAAQADAHAFAKg"
      );
    this.shape_12.setTransform(67.3909, 14.6239, 1.4083, 1.4083);
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#FF6600")
      .s()
      .p("AgcgIQACgOAMgKQAMgJAMAAIAEAAIAIARQASAjgcASQgKAHgCAGQgeglACgNg");
    this.shape_13.setTransform(67.3909, 14.6239, 1.4083, 1.4083);
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AAggYQANAwgnAOQgNAGgFAHQgbg0AGgRQAGgRARgJQAPgIARAEQADABACAAQABAJAEAOg"
      );
    this.shape_14.setTransform(73.9875, 8.2843, 1.4083, 1.4083);
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#FF6699")
      .s()
      .p("AghgSQAGgRARgJQAPgIARAEIAFABIAFAXQANAwgnAOQgNAGgFAHQgbg0AGgRg");
    this.shape_15.setTransform(73.9875, 8.2843, 1.4083, 1.4083);
    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AAugEQgQA/g1gHQgTgCgLAFQAChMASgRQASgQAXABQAZAAARAQQACACACACQgDALgFASg"
      );
    this.shape_16.setTransform(83.5052, 4.7665, 1.4083, 1.4083);
    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#6699CC")
      .s()
      .p("AghgmQASgQAXABQAZAAARAQIAEAEIgIAdQgQA/g1gHQgTgCgLAFQAChMASgRg");
    this.shape_17.setTransform(83.5052, 4.7665, 1.4083, 1.4083);
    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AAtASQgpAwgqgeQgPgKgLgBQAjhAAWgGQAVgFAVALQAVALAHAVQABADABACQgIAHgMANg"
      );
    this.shape_18.setTransform(93.0817, 5.4343, 1.4083, 1.4083);
    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#66FFFF")
      .s()
      .p(
        "AgmAkQgPgKgLgBQAjhAAWgGQAVgFAVALQAVALAHAVIACAFIgUAUQgZAegZAAQgQAAgRgMg"
      );
    this.shape_19.setTransform(93.0817, 5.4343, 1.4083, 1.4083);
    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AC0iXQAHABAHADQAEABAEABQAHABAJABQAAgBABABAheDJQAGgVgIgcQgVhIgMhBQgMhAA2g9QA3g+BCgIQBDgJAtAXQARAIARAHAiUD2QgUATgugDQAFgEAFgFQANgMAEgRQACgHAAgJQAAgBAAgBQACgggKgeQgOgqgThmQgThlBZhYQBZhZBuAVQBuAUAiApQAZAeAOAXQACAEACADQAAABABABQgDgDgJgGAiUD2QAYgWgPg0QgahggQhRQgPhRBIhHQBHhHBfAPQBfAPAsAeQAZAQANAJAheDJQApgUgPgyQgRg6gKg0QgJgzAugvQAugwBBgWQA8gVBDARAiUD2QAugQAIgd"
      );
    this.shape_20.setTransform(78.9403, 27.7893, 1.4083, 1.4083);
    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#FF6699")
      .s()
      .p(
        "AjWEGIAKgJQANgMAEgRQACgHAAgJIAAgCQACgggKgeQgOgqgThmQgThlBZhYQBZhZBuAVQBuAUAiApQAZAeAOAXIAEAHIABACIgMgJIgmgZQgsgehfgPQhfgPhHBHQhIBHAPBRQAQBRAaBgQAPA0gYAWQgRAQgnAAIgKAAg"
      );
    this.shape_21.setTransform(78.9403, 27.7893, 1.4083, 1.4083);
    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#6699CC")
      .s()
      .p(
        "Ah3CPQgVhHgNhBQgMhBA3g9QA2g9BCgJQBDgJAuAXQARAJAQAGQhDgQg7AUQhBAXguAvQgvAvAKA0QAKA0ARA5QAOAygoAVQAGgVgIgdg"
      );
    this.shape_22.setTransform(82.2612, 28.9883, 1.4083, 1.4083);
    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#FFCC33")
      .s()
      .p(
        "AicCdQgahggQhRQgPhRBIhHQBHhHBfAPQBfAPAsAeIAmAZIgBAAIgQgCIgIgCIgOgEQgRgHgRgIQgtgXhDAJQhCAIg3A+Qg2A9AMBAQAMBBAVBIQAIAcgGAVQgIAdguAQQAYgWgPg0g"
      );
    this.shape_23.setTransform(81.3504, 29.8614, 1.4083, 1.4083);
    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AA/AQQACgJAAgIQAAgZgTgTQgTgSgbAAQgaAAgTASQgTAUAAAZQAAAaATATQATATAaAAQAPAAANgFQADgDAFgCQAFgEAFgFQANgMAEgRg"
      );
    this.shape_24.setTransform(49.6705, 55.8188, 1.4083, 1.4083);
    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#6699CC")
      .s()
      .p(
        "AgtAtQgTgTAAgaQAAgaATgSQATgTAaAAQAbAAATATQASASABAZIgCARQgEAQgNANIgLAJIgIAEQgMAGgPAAQgaAAgTgTg"
      );
    this.shape_25.setTransform(49.6705, 55.8188, 1.4083, 1.4083);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.unicorn,
    new cjs.Rectangle(-20.4, -20.6, 139.2, 124.1),
    null
  );
  (lib.timerclockbg = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(3, 1, 1)
      .p(
        "An8AhIAAhBQAChhBiAAIMxAAQBiAAACBhAH9gdIAAA+QAAADAAADQgFBbhfAAIsxAAQhfAAgEhbQAAgDgBgDAn8AnIAAgG"
      );
    this.shape.setTransform(60.5326, 13, 1.1904, 1);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#E6E9FF")
      .s()
      .p(
        "AmYCCQhfAAgEhcIgBgFIAAhBQAChhBiAAIMxAAQBiAAABBhIAAADIAAA+IAAAFQgEBchfAAgAn8AmIAAgFIABAFg"
      );
    this.shape_1.setTransform(60.5326, 13, 1.1904, 1);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.timerclockbg,
    new cjs.Rectangle(-1.5, -1.5, 124.1, 29),
    null
  );
  (lib.timerclock = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AApBWQgDgBgCgDIgFgIQgOAGgRAAQgPAAgOgGIgFAIQgCADgEABQgEAAgDgCQgDgCgBgEQgBgEACgDIAFgHIgHgGQgWgXAAgfQAAgfAWgVQAVgWAegBIAAgEIgKAAIAAgKIAZAAIAAAKIgJAAIAAAEQAdACAUAVQAWAVAAAfQAAAfgWAXIgHAGIAFAHQABADAAAEQgBAEgDACQgDACgDAAIgCAAgAgngjQgRARAAAWQAAAYARAQIAMAKIAAAAQANAHAOAAQAQAAANgHQAGgEAGgGQAQgQAAgYQAAgWgQgRQgRgRgYAAQgWAAgRARgAgDAQIgCgCQgCgCAAgEIgdgcQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAIAcAcIAAAAIACAAIAOgNQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABABAAQAAAAABABIABADIgBAEIgQAPIgDAFIgBACIgFABIgDgBgAhLg9QABgKAIgFIAGgEQAIgGAJACQAKABAFAIIAAAAIgsAfQgFgIACgJgAAdhLQAFgIAKgCQAJgBAIAFIAGAEQAIAGABAKQACAJgGAHIAAABg"
      );
    this.shape.setTransform(15.3467, 17.1762, 2, 2);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.timerclock,
    new cjs.Rectangle(0, 0, 30.7, 34.4),
    null
  );
  (lib.timdf = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#9FA0B0")
      .s()
      .p(
        "ABbC7QgJgCgEgHIgLgQQgeANgkAAQgiAAgegNIgLAQQgFAHgJACQgIABgHgEQgHgFgCgJQgBgIAEgHIAKgOIgQgOQgwgxAAhFQAAhDAwgwQAvgvBBgCIAAgJIgVAAIAAgWIA2AAIAAAWIgSAAIAAAJQA9AEAtAtQAwAwAABDQAABFgwAxIgQAOIAKAOQAFAHgCAIQgCAJgHAFQgFADgGAAIgEAAgAhVhNQglAkAAAyQAAA0AlAkQALAMAOAJIABAAQAbAQAhAAQAiAAAcgQIAAAAQAOgJAMgMQAkgkAAg0QAAgygkgkQglglgzAAQgyAAgkAlgAgHAiIgEgDQgFgFAAgIIg/g+QgEgEAAgFQAAgFAEgDQADgEAFAAQAFAAAEAEIA+A9IABAAIAEAAIAfgeQADgEAFAAQAFAAAEAEQAEADAAAFQAAAFgEAEIghAhQgBAGgFAFIgDADQgFADgFAAQgEAAgEgDgAiliGQADgVARgMIANgJQARgMAVAEQAVADAMARIAAAAIhgBEQgMgRAEgVgAA/ilQAMgRAUgDQAVgEARAMIANAJQARAMADAVQAFAVgNARIAAAAg"
      );
    this.shape.setTransform(24.1346, 28.6792);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#DFE2F8")
      .s()
      .p(
        "AjKEXQgzAAAAgzIAAnHQAAgzAzAAIGWAAQAxAAAAAzIAAHHQAAAzgxAAgABBC7QAFAGAJACQAIABAHgEQAHgFACgIQABgIgEgIIgKgOIAQgOQAwgxAAhEQAAhEgwgwQgtgtg9gDIAAgKIARAAIAAgWIg1AAIAAAWIAUAAIAAAJQhAACgvAvQgwAwAABEQAABEAwAxIAQAOIgKAOQgEAIABAIQACAIAGAFQAIAEAIgBQAJgCAEgGIAMgQQAeAMAjAAQAjAAAdgMgAiQioIgNAJQgRAMgEAWQgEAUAMARIBhhDIAAgBQgMgRgWgDIgKgBQgPAAgMAJgABTixQgVADgLARIBfBEIAAAAQAMgRgEgUQgDgWgRgMIgNgJQgNgJgQAAIgJABgAhHB+IgBAAQgOgJgMgLQglglAAgzQAAgzAlgkQAlglAzAAQAyAAAlAlQAkAkAAAzQAAAzgkAlQgNALgNAJIAAAAQgcAQghAAQgiAAgbgQgAhbg1QgEAEAAAFQAAAEAEAEIA/A/QAAAHAFAFIAEAEQAEACAFAAQAFAAAEgCIADgEQAFgFABgGIAhghQADgDAAgGQAAgFgDgDQgEgEgFAAQgFAAgDAEIgfAeIgDAAIgCAAIg+g9QgEgEgFAAQgFAAgDAEg"
      );
    this.shape_1.setTransform(25.35, 27.85);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.timdf,
    new cjs.Rectangle(0, 0, 50.7, 55.7),
    null
  );
  (lib.tick = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#66CC00").s().p("AhWAAIAjgiIAjAiIBEhEIAjAiIhoBng");
    this.shape.setTransform(8.4777, 7.0133, 0.9798, 1.0108);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.tick,
    new cjs.Rectangle(0, 0, 17, 14),
    null
  );
  (lib.an_TextInput = function (options) {
    this.initialize();
    this._element = new $.an.TextInput(options);
    this._el = this._element.create();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 100, 22);
  p._tick = _tick;
  p._handleDrawEnd = _handleDrawEnd;
  p._updateVisibility = _updateVisibility;
  p.draw = _componentDraw;
  (lib.an_TextArea = function (options) {
    this.initialize();
    this._element = new $.an.TextArea(options);
    this._el = this._element.create();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 100, 22);
  p._tick = _tick;
  p._handleDrawEnd = _handleDrawEnd;
  p._updateVisibility = _updateVisibility;
  p.draw = _componentDraw;
  (lib.Symbol69 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#303030")
      .ss(4, 1, 1)
      .p("A4wnHMAxhAAAQCWAAAACWIAAJjQAACWiWAAMgxhAAAQiWAAAAiWIAApjQAAiWCWAAg");
    this.shape.setTransform(173.5, 45.6);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#E6E9FF")
      .s()
      .p("A4wHIQiWAAAAiWIAApjQAAiWCWAAMAxhAAAQCWAAAACWIAAJjQAACWiWAAg");
    this.shape_1.setTransform(173.5, 45.6);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol69,
    new cjs.Rectangle(-2, -2, 351, 95.2),
    null
  );
  (lib.Symbol68 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#479FBB")
      .s()
      .p(
        "AXFC+Qh2gKjOhHQjOhHmjBAQi6A5lWhqQlVBqi5g5QmjhAjPBHQjOBHh3AKQh2AKh2gtQh2gthQAUQisAuiXg0Qk9hxlJBqQkxA1k6hTQjMg6kNAgQhAAJhFANQjAAeh7gnQhbghhDADQgXACgTAEQirAviKhAIAAhAQCKhBCtAvQAUAFAXABQBDADBaghQB7gnDAAeQBFANBAAJQENAgDMg6QE6hTExA1QFJBqE8hxQCYg0CsAuQBQAUB2gtQB3gtB1AKQB3AKDOBHQDOBHGkhAQC6g6FSBpQFThpC7A6QGiBADPhHQDOhHB2gKQB2gKB3AtQB2AtBQgUQCsguCXA0QE9BxFJhqQExg1E6BTQDNA6ENggQA/gJBFgNQC/geB7AnQBbAhBEgDQAXgBATgFQCsgvCLBBIAABAQiKBAiqgvQgVgFgWgBQhDgDhbAhQh7Ani/geQhGgNg/gJQkNggjNA6Qk6BTkxg1QlJhqk8BxQiYA0isguQhQgUh2AtQhhAlhgAAQgWAAgWgCg"
      );
    this.shape.setTransform(493, 190.35);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#3F8DA6")
      .s()
      .p(
        "EAyQAb/Qh2gyhQAVQisA2iXg8Qk9iClJB6QkxA8k6heQjNhDkMAmQhBAJhEAOQjAAkh6guQh5gxhQAWQisA2iJhJQiIBJisg2QhQgWh4AxQh7Aui/gkQhFgOhAgJQkOgmjMBDQk6Bekxg8QlJh6k8CCQiYA8isg2QhPgVh3AyQh2A0h2gLQh3gMjOhSQjOhQmkBIQi5BDlWh6IAAh7QFTh6C7BEQGjBIDOhRQDOhSB2gLQB2gLB3AzQB2AzBQgVQCsg2CYA8QE8CBFJh5QExg8E6BeQDNBDENgmQA/gJBFgOQC/gkB7AuQB5AxBQgWQCtg2CJBKQCLhKCsA2QBPAWB5gxQB7guDAAkQBFAOBAAJQENAmDMhDQE6heExA8QFJB5E9iBQCXg8CtA2QBPAVB2gzQB2gzB2ALQB3ALDOBSQDPBRGjhIQC6hEFTB6IAAB7QlWB6i6hDQmihIjPBQQjOBSh2AMQgWACgVAAQhhAAhhgrgEAyQAJeQh2gZhQALQisAaiXgdQk9g/lJA7QkxAdk6guQjNggkMASQhBAFhEAHQjAARh6gWQh5gYhQALQisAaiJgjQiIAjisgaQhQgLh4AYQh7AWi/gRQhFgHhAgFQkOgSjMAgQk6AukxgdQlJg7k8A/QiYAdisgaQhPgLh3AZQh2AZh2gGQh3gFjOgoQjOgnmkAjQi5AglWg6IAAg8QFTg6C7AgQGjAjDOgnQDOgnB2gGQB2gFB3AZQB2AYBQgKQCsgaCYAdQE8A+FJg6QExgdE6AtQDNAgENgSQA/gEBFgHQC/gRB7AWQB5AXBQgKQCtgaCJAjQCLgjCsAaQBPAKB5gXQB7gWDAARQBFAHBAAEQENASDMggQE6gtExAdQFJA6E9g+QCXgdCtAaQBPAKB2gYQB2gZB2AFQB3AGDOAnQDPAnGjgjQC6ggFTA6IAAA8QlWA6i6ggQmigjjPAnQjOAoh2AFIgrABQhhAAhhgUgEAyQgIpQh2gZhQALQisAaiXgdQk9g/lJA7QkxAdk6guQjNggkMASQhBAFhEAHQjAARh6gWQh5gYhQALQisAaiJgjQiIAjisgaQhQgLh4AYQh7AWi/gRQhFgHhAgFQkOgSjMAgQk6AukxgdQlJg7k8A/QiYAdisgaQhPgLh3AZQh2AZh2gGQh3gFjOgoQjOgnmkAjQi5AglWg6IAAg8QFTg6C7AgQGjAjDOgnQDOgnB2gGQB2gFB3AZQB2AYBQgKQCsgaCYAdQE8A+FJg6QExgdE6AtQDNAgENgSQA/gEBFgHQC/gRB7AWQB5AXBQgKQCtgaCJAjQCLgjCsAaQBPAKB5gXQB7gWDAARQBFAHBAAEQENASDMggQE6gtExAdQFJA6E9g+QCXgdCtAaQBPAKB2gYQB2gZB2AFQB3AGDOAnQDPAnGjgjQC6ggFTA6IAAA8QlWA6i6ggQmigjjPAnQjOAoh2AFIgrABQhhAAhhgUgEAyQgYZQh2gZhQALQisAaiXgdQk9g/lJA7QkxAdk6guQjNggkMASQhBAFhEAHQjAARh6gWQh5gYhQALQisAaiJgjQiIAjisgaQhQgLh4AYQh7AWi/gRQhFgHhAgFQkOgSjMAgQk6AukxgdQlJg7k8A/QiYAdisgaQhPgLh3AZQh2AZh2gGQh3gFjOgoQjOgnmkAjQi5AglWg6IAAiMQFTg6C7AgQGjAjDOgnQDOgnB2gGQB2gFB3AZQB2AYBQgKQCsgaCYAdQE8A+FJg6QExgdE6AtQDNAgENgSQA/gEBFgHQC/gRB7AWQB5AXBQgKQCtgaCJAjQCLgjCsAaQBPAKB5gXQB7gWDAARQBFAHBAAEQENASDMggQE6gtExAdQFJA6E9g+QCXgdCtAaQBPAKB2gYQB2gZB2AFQB3AGDOAnQDPAnGjgjQC6ggFTA6IAACMQlWA6i6ggQmigjjPAnQjOAoh2AFIgrABQhhAAhhgUg"
      );
    this.shape_1.setTransform(493, 179.8295);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#397E95")
      .s()
      .p(
        "AXFBpQh2gGjOgnQjOgnmjAjQi6AglWg6QlVA6i5ggQmjgjjPAnQjOAnh3AGQh2AFh2gZQh2gYhQALQisAZiXgdQk9g+lJA7QkxAdk6guQjMggkNASQhAAEhFAIQjAARh7gXQh5gXhPALQirAZiKgiIAAgkQCKgkCtAbQBPAKB5gYQB7gWDAASQBFAGBAAFQENASDMggQE6guExAdQFJA7E8g+QCYgdCsAaQBQAKB2gZQB3gZB1AGQB3AGDOAnQDOAnGkgjQC6ghFSA7QFTg7C7AhQGiAjDPgnQDOgnB2gGQB2gGB3AZQB2AZBQgKQCsgaCXAdQE9A+FJg7QExgdE6AuQDNAgENgSQA/gFBFgGQC/gSB7AWQB5AYBQgKQCsgbCLAkIAAAkQiKAiiqgZQhQgLh5AXQh7AXi/gRQhGgIg/gEQkNgSjNAgQk6AukxgdQlJg7k8A+QiYAdisgZQhQgLh2AYQhhAVhhAAIgrgBg"
      );
    this.shape_2.setTransform(493, 61.3);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol68,
    new cjs.Rectangle(0, -3.5, 986, 366.7),
    null
  );
  (lib.Symbol66 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(["#4597B2", "#337185"], [0, 1], 0, -266.8, 0, 240)
      .s()
      .p("EhNBAeMMAAAg8YMCaDAAAMAAAA8Yg");
    this.shape.setTransform(493, 193.25);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol66,
    new cjs.Rectangle(0, 0, 986, 386.5),
    null
  );
  (lib.Symbol63 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(5, 1, 1)
      .p(
        "EA1FgH6QAsABAoAIQCVAbBwBxQCVCUAADRQAADRiVCVQiQCQjJAEMhqJAAAQjJgEiQiQQiViVAAjRQAAgUACgUQAMi3CHiGQCQiQDJgFg"
      );
    this.shape.setTransform(459.4, 260.6);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Eg1EAH6QjJgEiQiQQiUiVAAjRQAAgUABgTQANi4CGiGQCQiQDJgEMBqJAAAQAsABAoAHQCVAbBwBxQCUCUAADRQAADRiUCVQiPCQjKAEg"
      );
    this.shape_1.setTransform(459.4, 260.6);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("rgba(0,0,0,0.498)")
      .s()
      .p(
        "Eg1EAH6QjJgEiQiQQiUiUAAjSQgBgTACgVQAMi3CHiGQCQiQDJgEMBqKAAAQAqABApAHQCUAbBxBxQCUCVAADQQAADSiUCUQiQCQjIAEg"
      );
    this.shape_2.setTransform(462.2, 270.4);
    this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("rgba(0,0,0,0.698)")
      .s()
      .p("EhKSAqMMAAAhUXMCUlAAAMAAABUXg");
    this.shape_3.setTransform(471.5, 266);
    this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol63,
    new cjs.Rectangle(-4, -4, 951, 540),
    null
  );
  (lib.Symbol62 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#CCCCCC").s().p("Eg2rADWIAAmrMBtXAAAIAAGrg");
    this.shape.setTransform(350, 21.375);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol62,
    new cjs.Rectangle(0, 0, 700, 42.8),
    null
  );
  (lib.Symbol61 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "EgzbAGBQifAAhwhwQhzh0ABibIAAgCIAAAAIAAAAQAAiaBshuIAEgEIADgDIAFgEQBuhtCbABMBm3AAAIABAAQCegBByByIABABIAAABQBuBvABCdIAAAAIAAABQABCahuByIAAAAIgIAHIAAABQhwBricABgEg1bgCCIgDADQg2A1AABKQAABMA3A3QA2A2BMAAMBm3AAAQBMAAA2g1IACgCQA1g3AAhLQAAhKg1g2IgBAAQg3g4hMABMhm3AAAIgCgBQhKAAg0A2g"
      );
    this.shape.setTransform(367.675, 38.4495);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol61,
    new cjs.Rectangle(0, 0, 735.4, 76.9),
    null
  );
  (lib.Symbol44 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(5, 0, 1).p("AL88jMgX3A5H");
    this.shape.setTransform(-2.65, -0.2, 1, 1, 0, 0, 0, -79, -183);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol44,
    new cjs.Rectangle(-2.5, -2.5, 157.8, 370.6),
    null
  );
  (lib.Symbol17 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(4, 1, 1)
      .p("AxXsmQAAhkBkAAIfuAAQBdADAABhIAAZNQAABhhdADI/uAAQhkAAAAhkg");
    this.shape.setTransform(111.225, 90.675);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p("AvzOLQhkAAAAhkIAA5NQAAhkBkAAIfuAAQBdADAABhIAAZNQAABhhdADg");
    this.shape_1.setTransform(111.225, 90.675);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("rgba(0,0,0,0.498)")
      .s()
      .p("AvzOLQhkAAAAhkIAA5NQAAhkBkAAIfuAAQBdADAABhIAAZNQAABhhdADg");
    this.shape_2.setTransform(116.725, 95.775);
    this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol17,
    new cjs.Rectangle(-2, -2, 230, 188.5),
    null
  );
  (lib.Symbol13__vol_bar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#FFFFFF")
      .ss(3, 1, 1)
      .p(
        "AgUhUQAdAlAAAwQAAAxgcAkAg9g1QATAYAAAdQAAAfgTAXAAWh1QAoAyAABDQAABEgpAy"
      );
    this.shape.setTransform(6.175, 11.8);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol13__vol_bar,
    new cjs.Rectangle(-1.5, -1.5, 15.4, 26.6),
    null
  );
  (lib.Symbol12__vol_bar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#FFFFFF")
      .ss(3, 1, 1)
      .p("Agjg1QATAXAAAeQAAAfgTAXAAFhVQAfAlAAAxQAAAwgdAl");
    this.shape.setTransform(3.55, 11.875);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#333333")
      .ss(3, 1, 1)
      .p("AgTh1QAnAyAABDQAABEgoAy");
    this.shape_1.setTransform(10.3, 11.8);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol12__vol_bar,
    new cjs.Rectangle(-1.5, -1.5, 15.4, 26.6),
    null
  );
  (lib.Symbol11__vol_bar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#FFFFFF")
      .ss(3, 1, 1)
      .p("AgIg1QARAYAAAdQAAAfgRAX");
    this.shape.setTransform(0.925, 11.85);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#333333")
      .ss(3, 1, 1)
      .p("AgohUQAeAlAAAwQAAAxgdAkAABh1QAoAyAABDQAABEgpAy");
    this.shape_1.setTransform(8.225, 11.8);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol11__vol_bar,
    new cjs.Rectangle(-1.5, -1.5, 15.4, 26.6),
    null
  );
  (lib.Symbol10__vol_bar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#FFFFFF")
      .ss(3, 1, 1)
      .p(
        "AgUhUQAdAlAAAwQAAAxgcAkAAWh1QAoAyAABDQAABEgpAyAg9g1QATAYAAAdQAAAfgTAX"
      );
    this.shape.setTransform(6.175, 11.8);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol10__vol_bar,
    new cjs.Rectangle(-1.5, -1.5, 15.4, 26.6),
    null
  );
  (lib.Symbol9__vol_bar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("AqiDXIAAmtIVFAAIAAGtg");
    this.shape.setTransform(67.5, 21.475);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol9__vol_bar,
    new cjs.Rectangle(0, 0, 135, 43),
    null
  );
  (lib.Symbol8__vol_bar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(250,250,250,0.98)")
      .s()
      .p("AAAgDIhbBaIgqgpICFiFIApArIAAAAIBdBaIgrApg");
    this.shape.setTransform(13.35, 8.75);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol8__vol_bar,
    new cjs.Rectangle(0, 0, 26.7, 17.5),
    null
  );
  (lib.Symbol7 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(["#4597B2", "#337185"], [0, 1], 0, -263.6, 0, 243.2)
      .s()
      .p("EhNBAdtMAAAg7ZMCaCAAAMAAAA7Zg");
    this.shape.setTransform(492.95, 198.975);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol7,
    new cjs.Rectangle(0, 8.9, 985.9, 380.20000000000005),
    null
  );
  (lib.Symbol6 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FF691E")
      .s()
      .p(
        "AhTCeQhNgrgFhOQgCgnAYgRQANgJATgCQAggGAVgpQAXgsgCglIAAgCQAjA8A/gaQBAgaATAPQAUAOgKAUIggBGQgDAGAAAGIgBABIABgBQgBALAJAIIAAABIAJAGQA5Aig0AXIjbBjIgFgDg"
      );
    this.shape.setTransform(16.5788, 16.075);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol6,
    new cjs.Rectangle(0, 0, 33.2, 32.2),
    null
  );
  (lib.Symbol5 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AiYDDQiGgTACh0QALiYBQhhQAKACALAAQCsgUCXAEQAbADAQgDQBQBhAKCYQADCGiNAPQhFAKhJAAQhLAAhRgKg"
      );
    this.shape.setTransform(28.4508, 47.0848);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#B11B04")
      .s()
      .p(
        "AhXAiQghgXgJgUIgMgXQAFgIAIgGQAkBLBQgKQA3gHBQgzIALgHQgBAKAJAIIAAAAQhlA9g9ALQgMADgLAAQgbAAgRgNg"
      );
    this.shape_1.setTransform(105.25, 4.6521);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol5,
    new cjs.Rectangle(0, 0, 119.4, 67.6),
    null
  );
  (lib.Symbol3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AHRh8IDchjQA0gXg5giQgGgEgEgDIAAgBQgIgIAAgLIAAAAQAAgGADgGIAghGQAKgUgTgOQgUgPhAAaQg/Aagjg8QAAABAAABAHRh8QgDgCgCgBQhNgrgFhOQgDgoAZgRQAMgJAUgCQAggGAUgpQAXgsgBglAgsgmQAtgJgxg2QhZhfAAiEQAAgTACgTQAMhxBThTQBThUBzgMQARgCATAAQCKAABhBiQA1A1AYBBAHRh8QhABdBlApQA5AYAwAwQBfBfAACHQAABPghBBQg+CdjdAjQldAjlDg6QjggqiEkMQgmhagUhvQgQhVAOhAQANhAAYgZQAbgaAmAAQAmAAAaAaQABACAmAzQAcAmAlAJQAKACALgBQCsgTCYAEQAbADAQgDQBPBfAKCZQADCGiMAQQiLATiggUQiGgTACh0QALiZBQhf"
      );
    this.shape.setTransform(70.9761, 66.0953);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol3,
    new cjs.Rectangle(-1, -1, 144, 134.2),
    null
  );
  (lib.Symbol1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FF0000").s().p("AnaCbIAAk1IO1AAIAAE1g");
    this.shape.setTransform(47.5, 15.5);
    this.shape._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.shape).wait(3).to({ _off: false }, 0).wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 95, 31);
  (lib.Symb143232 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AhjhnIDHBnIjHBog");
    this.shape.setTransform(21.925, 20.375);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#7FCC37")
      .s()
      .p("AjHDIIAAmPIGPAAIAAGPgAhQBsIDIhpIjIhmg");
    this.shape_1.setTransform(20, 20);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symb143232,
    new cjs.Rectangle(0, 0, 40, 40),
    null
  );
  (lib.Symb15212 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AhGBHIAAiNICNAAIAACNg");
    this.shape.setTransform(19.975, 20.525);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#588F26")
      .s()
      .p("AjHDIIAAmPIGPAAIAAGPgAhGBMICNAAIAAiNIiNAAg");
    this.shape_1.setTransform(20, 20);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symb15212,
    new cjs.Rectangle(0, 0, 40, 40),
    null
  );
  (lib.surgeon = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AkNj4QA/giBWgTQCVggA5BlQhIBrh0AwIB6B9QCHASAniEQB7hcBJBdQBIBbgPBUQjnCnhngaQi0Bhj/hCQgtgGAEgsQGBAqAMgvQgygmgJgXQgKgXACgdQABgWAHgZIh6hzIiuilQAXgUAdgPgAhmhNIinirAiTgwQiEBLinAbQgVh7B4h6QAMgMAOgK"
      );
    this.shape.setTransform(32.7652, 23.3512);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#66CCFF")
      .s()
      .p(
        "AlCEaQgtgGAEgsQGBAqAMgvQgygmgJgXQgKgXACgdQABgWAHgZIh6hzIiuilICuClQiEBLinAbQgVh7B4h6QAMgMAOgKQAXgUAdgPQA/giBWgTQCVggA5BlQhIBrh0AwIB6B9QCHASAniEQB7hcBJBdQBIBbgPBUQjnCnhngaQhsA6iFAAQhbAAhngbgAhmhNIinirg"
      );
    this.shape_1.setTransform(32.7652, 23.3512);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.surgeon,
    new cjs.Rectangle(-13.2, -8.5, 92, 63.8),
    null
  );
  (lib.superman = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "Aj5DeQgLg7AAgyQgIhTAfhFQAvhsBogyQBlgyBdAeQBHAXAzA2QASAPAPAUQgqgGgdACQgvACgQAXQgbAjAIAOQAHANAVAIQAWAHAVgKQAGgDAFgEQALgKAFgPQACgHAAgGQAKAYgJAaQgGASgNAMQgJAJgMAFQgdAPgfgKQgfgKgOgdQgGgMgCgLIhIAdQiJA5hdChIgEAHIgBgHg"
      );
    this.shape.setTransform(61.0929, -3.0375);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ABfAvQAAACgBACQgFAhgHAUQgLAMgJAJIiLifQgCgBgCgCQgQgTACgVQACgXAmgMQABAAABAAQABgBABAAQAzgKAtgCQAIALAIALQAPAYAJAaQAIAaADAeQAAAIAAAKQAAACAAACQAAALgBALg"
      );
    this.shape_1.setTransform(107.8028, 76.3814, 1.3985, 1.3978);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#F9B236")
      .s()
      .p(
        "AALA9QAjAEAlgHIAHgCIgJALIgfAkgAAmAbQgMgIgKgCQgKgCgHADQgJACgCAGIgEADIgZgeIB1AJIAIABIAAATIAAAEIgbAEIgKABIgJgKgAhNgnIgKgLQgGgHALgRQAMgRAPgFQAQgFAIAAQgkAagEApIgGgFgAAugxIgogCQgWgBADgTQADgRASgEQARgDAUgBIAEAAQAPAYAJAag"
      );
    this.shape_2.setTransform(109.5068, 75.4029, 1.3985, 1.3978);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#D31F3A")
      .s()
      .p(
        "AhNgiIgEgDQgQgTACgVQACgXAmgMIACAAIACgBQAzgJAtgDIAQAWIgEAAQgUABgRADQgTAEgCARQgDATAWABIAoACIAbADQAIAaADAdIgIgBIh1gJIAZAeIAEgDQABgGAJgCQAIgDAKACQAKACAMAIIAJAKIAKgBIAbgEQAAANgBANQglAHgjgEIAnAqIAfgkQgDAXgIAVIgUAWgAgrhnQgPAFgMARQgLARAGAHIAKALIAGAFQAEgpAkgaQgIAAgQAFg"
      );
    this.shape_3.setTransform(107.8028, 76.3814, 1.3985, 1.3978);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
          ],
        })
        .wait(1)
    );
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AgTk2QCLBiFGhWQAHAZAfATQAKAFAMAFQA5AYAvAvQBgBgAACFQAABPghBCQg+CdjeAjQlcAjlEg6QjggqiEkMQgQgngNgqQgSg4gLg/QgPhWANhAQANhAAZgZQAagaAmAAQAmAAAaAaQACACAlAzQAdAmAkAJQAKACAMgBQCsgUCXAFQAcACAQgCQAUgFABgMgAgXk6QACACACACAArhlQAEAbACAeQADCFiNAQQiLATiggUQh3gRgLhcQg4gChegOAgoklQA/BNAUBzAHkj+QjaCAjfAZAoGgFQgBgMAAgNQAKiZBQhg"
      );
    this.shape_4.setTransform(50.7108, 73.6703);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#2B6FBA")
      .s()
      .p(
        "AktEmQjggqiEkLQgQgngOgqQBfAOA4ACQALBcB3AQQCgAUCLgTQCMgPgCiFQgDgegEgcQDggYDZiBIAXALQA4AXAwAwQBgBfAACHQAABOgiBCQg9CcjeAjQiEAOiAAAQjSAAjKglg"
      );
    this.shape_5.setTransform(52.55, 81.2203);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#D31F3A")
      .s()
      .p(
        "AotC4QgSg4gLg/QgPhVANhAQANhAAZgZQAagaAmAAQAmAAAaAaIAnA1QAdAmAkAJQhQBfgKCZQAAANABAMQg4gChegOgABGhXQAUgFABgMQCMBiFGhWQAHAZAfATQjaB/jfAZQgUhyhAhNg"
      );
    this.shape_6.setTransform(39.6108, 53.075);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.superman,
    new cjs.Rectangle(-20.9, -25.9, 143.2, 141.2),
    null
  );
  (lib.summer = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AkwggQALhiB6hIQB/hNCIBgQAjAYAjAlQCnAChZBRQgUASggAVQg/AqhPAgQB8DvCEhuQBthchHh3QgJgOgKgPQgCgBgBgBQgIgLgJgLIg9AWAksAiQgIgiAEggQDPA1C9jMAgiBmIkPBpIAAgwIAQgGQgBAAgBAAQheANAWgvQAXgwAoglQB0AhBzgoQBzgmB0hvABkA/IBygxIBDgbIANgGQAKANAIAMQA0BahUBEQgRAKgPAGQgkALgfgOQgvgYgihagAgiBmQgFACgGACQhuAgiGAPAAuBKQgmAPgqAN"
      );
    this.shape.setTransform(26.8748, 17.3949);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#6633CC")
      .s()
      .p("AjkBmQgIgjAEggQDPA2C9jNQAjAZAjAkQh0Buh0AnQg+AXhAAAQg0AAg0gPg");
    this.shape_1.setTransform(19.6583, 10.6034);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#83FFE6")
      .s()
      .p("AgxBcIAhijIBCgcIghDBQgQAGgPAAQgSAAgRgIg");
    this.shape_2.setTransform(49.975, 25.9093);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FF6600")
      .s()
      .p(
        "Ak6CfQAWgvAoglQB0AgB0goQBzgnB0huQCmAChZBRQgTARggAWQg/AqhPAhQgnAPgqANIgMADQhsAgiHAQIgBAAQgUADgPAAQg3AAASgmgAkAAIQALhhB6hJQB/hNCIBgQiVCiihAAQgrAAgrgLg"
      );
    this.shape_3.setTransform(22.0088, 13.3011);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#00FFCC")
      .s()
      .p("ABBhdIANgGQALAOAHAMQA0BahTBDQgSAKgPAGgAhzgQIBzgxIghCiQgvgYgjhZg");
    this.shape_4.setTransform(48.4478, 25.35);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#00CC00")
      .s()
      .p(
        "AAPgNQBPggA/grQAggVAUgSIA9gWIARAWIADACIATAdQBHB3htBcQgpAjgpAAQhZAAhVijgAD6hlIhDAcIhyAxQAiBZAvAYQAfAOAkgLQAPgGARgKQBUhEg0hZQgIgNgKgNgAlQBHIAQgGQCGgPBuggIALgEIkPBpg"
      );
    this.shape_5.setTransform(29.9661, 26.1585);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.summer,
    new cjs.Rectangle(-10.9, -7.4, 75.60000000000001, 49.6),
    null
  );
  (lib.strawberryhat = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAOgIQAIALABALQABALgGAEQgGAEgJgGQgIgGgIgMQgHgLgCgLQgCgLAHgFQAGgDAJAGQAJAGAHAMg"
      );
    this.shape.setTransform(6.7509, 33.0021);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("rgba(255,255,255,0.976)")
      .s()
      .p(
        "AADAbQgIgGgIgMQgHgLgCgLQgCgLAHgFQAGgDAJAGQAJAGAHAMQAIALABALQABALgGAEQgCACgDAAQgEAAgGgEg"
      );
    this.shape_1.setTransform(6.7509, 33.0021);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAOgIQAIALABALQACAMgGADQgGAEgKgGQgIgGgIgMQgHgLgCgLQgBgLAGgEQAGgEAJAGQAJAHAHALg"
      );
    this.shape_2.setTransform(16.7829, 22.5714);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("rgba(255,255,255,0.976)")
      .s()
      .p(
        "AADAbQgIgGgIgMQgHgLgCgLQgBgLAGgEQAGgEAJAGQAJAHAHALQAIALABALQACAMgGADIgFACQgFAAgGgEg"
      );
    this.shape_3.setTransform(16.7829, 22.5714);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAVAAQAAASgGAMQgGANgJAAQgHAAgHgNQgGgMAAgSQAAgRAGgMQAHgNAHAAQAJAAAGANQAGAMAAARg"
      );
    this.shape_4.setTransform(5.2, 18.775);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("rgba(255,255,255,0.976)")
      .s()
      .p(
        "AgOAeQgGgMAAgSQAAgRAGgMQAHgNAHAAQAJAAAGANQAGAMAAARQAAASgGAMQgGANgJAAQgHAAgHgNg"
      );
    this.shape_5.setTransform(5.2, 18.775);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAOgIQAIALABALQACALgGAEQgGAEgKgGQgIgGgIgMQgHgLgCgLQgBgLAGgFQAGgDAJAGQAJAGAHAMg"
      );
    this.shape_6.setTransform(30.5829, 15.7021);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("rgba(255,255,255,0.976)")
      .s()
      .p(
        "AADAbQgIgGgIgMQgHgLgCgLQgBgLAGgFQAGgDAJAGQAJAGAHAMQAIALABALQACALgGAEQgDACgDAAQgEAAgGgEg"
      );
    this.shape_7.setTransform(30.5829, 15.7021);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAOgIQAIALABALQABALgFAEQgHAEgJgGQgJgGgHgMQgHgLgCgLQgCgLAHgEQAFgEAKAGQAJAGAHAMg"
      );
    this.shape_8.setTransform(46.452, 11.6619);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("rgba(255,255,255,0.976)")
      .s()
      .p(
        "AADAbQgJgGgHgMQgHgLgCgLQgCgLAHgEQAFgEAKAGQAJAGAHAMQAIALABALQABALgFAEQgDABgDAAQgEAAgGgDg"
      );
    this.shape_9.setTransform(46.452, 11.6619);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AASgKQAJAOACAOQACAOgIAEQgHAFgMgHQgLgIgKgOQgJgOgCgOQgBgOAHgFQAIgFALAIQALAHAKAPg"
      );
    this.shape_10.setTransform(35.8336, 6.4906);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("rgba(255,255,255,0.976)")
      .s()
      .p(
        "AAEAiQgLgIgKgOQgJgOgCgOQgBgOAHgFQAIgFALAIQALAHAKAPQAJAOACAOQACAOgIAEQgDACgEAAQgFAAgHgEg"
      );
    this.shape_11.setTransform(35.8336, 6.4906);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AgphWQgLAcgGAeQgLA7AiATIBGAlQAZglACgpQADhRhqgOg");
    this.shape_12.setTransform(19.3852, 5.8);
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("rgba(102,204,0,0.976)")
      .s()
      .p("AgjAyQgigSALg9QAGgdALgcQBqAOgDBRQgCApgZAlg");
    this.shape_13.setTransform(19.3852, 5.8);
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "Ah+AjQAAgXAKgVQAUguAzAKQBIAUAbAGQAsALASgRQALgLAAAFQABAFgJANQgbAjgwAQQgtAPhDgIQghgFgZgFg"
      );
    this.shape_14.setTransform(31.8798, -5.2679);
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("rgba(102,204,0,0.976)")
      .s()
      .p(
        "AhEAtIg6gKQAAgXAKgVQAUguAzAKIBjAaQAsALASgRQALgLAAAFQABAFgJANQgbAjgwAQQgeAKgmAAQgUAAgYgDg"
      );
    this.shape_15.setTransform(31.8798, -5.2679);
    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AB7ghQgNgTgVgMQgrgZgkAlQgvA6gSAVQgeAigZgEQgOgCACAEQACAEAPAFQArAPAxgPQAtgOAxguQAZgWARgTg"
      );
    this.shape_16.setTransform(0.8129, 4.2273);
    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("rgba(102,204,0,0.976)")
      .s()
      .p(
        "AhpBEQgPgFgCgEQgCgEAOACQAZAEAegiQASgVAvg6QAkglArAZQAVAMANATQgRATgZAWQgxAugtAOQgZAHgXAAQgWAAgWgHg"
      );
    this.shape_17.setTransform(0.8129, 4.2273);
    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AgzhCIAvgQQBEA9gPBjIgeAFQgEhihCgzg");
    this.shape_18.setTransform(11.5509, -9.975);
    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("rgba(102,204,0,0.976)")
      .s()
      .p("AgzhCIAvgQQBEA9gPBjIgeAFQgEhihCgzg");
    this.shape_19.setTransform(11.5509, -9.975);
    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AjpCpQhIhWAThoQARhoBdhAQBag/CBgDQCBgDBDBLQBEBMgWA1QgrgCg4AHQhgAOhcBAQheBBgbA1QgbA1gMA4QgVgegyg5g"
      );
    this.shape_20.setTransform(25.8113, 23.6193);
    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("rgba(255,0,0,0.976)")
      .s()
      .p(
        "AjpCpQhIhWAThoQARhoBdhAQBag/CBgDQCBgDBDBLQBEBMgWA1QgrgCg4AHQhgAOhcBAQheBBgbA1QgbA1gMA4QgVgegyg5g"
      );
    this.shape_21.setTransform(25.8113, 23.6193);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.strawberryhat,
    new cjs.Rectangle(-12.5, -19.3, 68.4, 69.6),
    null
  );
  (lib.strawberry = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AGWihQAAAWgIAPQgHAQgKAAQgJAAgIgQQgHgPAAgWQAAgVAHgQQAIgPAJAAQAKAAAHAPQAIAQAAAVgAJMCaQAAATgIANQgHANgKAAQgKAAgHgNQgHgNAAgTQAAgTAHgNQAHgNAKAAQAKAAAHANQAIANAAATgAFzB0QAAARgIAMQgHAMgKAAQgJAAgIgMQgHgMAAgRQAAgSAHgMQAIgMAJAAQAKAAAHAMQAIAMAAASgAGkGWQAAAQgIALQgHALgKAAQgJAAgIgLQgHgLAAgQQAAgRAHgKQAIgMAJAAQAKAAAHAMQAIAKAAARgADnlCQAAATgIAOQgHANgJAAQgKAAgIgNQgHgOAAgTQAAgSAHgOQAIgNAKAAQAJAAAHANQAIAOAAASgAA/mWQAAATgGAOQgGANgJAAQgIAAgGgNQgHgOAAgTQAAgSAHgOQAGgNAIAAQAJAAAGANQAGAOAAASgAChg7QAAAUgGAOQgGAPgJAAQgIAAgHgPQgGgOAAgUQAAgVAGgOQAHgOAIAAQAJAAAGAOQAGAOAAAVgAlkF2QAAAPgHAKQgIAKgJAAQgKAAgHgKQgIgKAAgPQAAgPAIgKQAHgKAKAAQAJAAAIAKQAHAKAAAPgAhaGSQAAAUgIAPQgIAPgMAAQgMAAgIgPQgIgPAAgUQAAgUAIgPQAIgNAMAAQAMAAAIANQAIAPAAAUgAC9EcQAAAUgIANQgHAPgJAAQgKAAgIgPQgHgNAAgUQAAgVAHgOQAIgPAKAAQAJAAAHAPQAIAOAAAVgAoTgHQAAASgIANQgIAPgMAAQgMAAgIgPQgIgNAAgSQAAgSAIgPQAIgNAMAAQAMAAAIANQAIAPAAASg"
      );
    this.shape.setTransform(46.3, 55.85);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AiKG1QgIgOAAgUQAAgVAIgOQAIgPAMAAQAMAAAIAPQAIAOAAAVQAAAUgIAOQgIAPgMgBQgMABgIgPgAF6GxQgIgLAAgQQAAgRAIgLQAHgLAKABQAKgBAHALQAIALAAARQAAAQgIALQgHAMgKgBQgKABgHgMgAmNGPQgIgKABgOQgBgPAIgLQAHgJAKAAQAKAAAGAJQAIALAAAPQAAAOgIAKQgGALgKAAQgKAAgHgLgACTE9QgHgOAAgTQAAgVAHgOQAHgOAKgBQAKABAHAOQAIAOAAAVQAAATgIAOQgHAPgKAAQgKAAgHgPgAIiC6QgIgNABgTQgBgTAIgNQAHgOAKAAQAKAAAHAOQAHANAAATQAAATgHANQgHANgKAAQgKAAgHgNgAFICRQgGgMAAgRQAAgSAGgMQAIgMAKgBQAKABAHAMQAHAMAAASQAAARgHAMQgHANgKAAQgKAAgIgNgApDAZQgIgNABgTQgBgSAIgOQAJgNAMgBQAMABAHANQAJAOAAASQAAATgJANQgHANgMAAQgMAAgJgNgAB9gZQgGgOAAgUQAAgVAGgOQAGgOAJAAQAJAAAFAOQAHAOAAAVQAAAUgHAOQgFAPgJAAQgJAAgGgPgAFrh8QgGgPAAgWQAAgVAGgQQAJgPAJAAQAKAAAHAPQAHAQAAAVQAAAWgHAPQgHAQgKAAQgJAAgJgQgAC9khQgHgNAAgUQAAgSAHgNQAHgOALAAQAJAAAHAOQAIANAAASQAAAUgIANQgHANgJAAQgLAAgHgNgAAbl1QgGgOAAgSQAAgTAGgOQAGgNAJABQAJgBAFANQAHAOAAATQAAASgHAOQgFANgJAAQgJAAgGgNg"
      );
    this.shape_1.setTransform(46.3, 55.85);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AgphWQgLAcgGAeQgLA7AiATIBGAlQAZglACgpQADhRhqgOg");
    this.shape_2.setTransform(63.5058, -6.2899, 1.3983, 1.3983);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("rgba(102,204,0,0.976)")
      .s()
      .p("AgjAyQgigSALg8QAGgeALgcQBqAOgDBRQgCApgZAlg");
    this.shape_3.setTransform(63.5058, -6.2899, 1.3983, 1.3983);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "Ah+AjQAAgXAKgVQAUguAzAKQBIAUAbAGQAsALASgRQALgLAAAFQABAFgJANQgbAjgwAQQgtAPhDgIQghgFgZgFg"
      );
    this.shape_4.setTransform(80.9765, -21.7661, 1.3983, 1.3983);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("rgba(102,204,0,0.976)")
      .s()
      .p(
        "AhEAtIg6gKQAAgXAKgVQAUguAzAKIBjAaQAsALASgRQALgLAAAFQABAFgJANQgbAjgwAQQgeAKgmAAQgUAAgYgDg"
      );
    this.shape_5.setTransform(80.9765, -21.7661, 1.3983, 1.3983);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AB7ghQgNgTgVgMQgrgZgkAlQgvA6gSAVQgeAigZgEQgOgCACAEQACAEAPAFQArAPAxgPQAtgOAxguQAZgWARgTg"
      );
    this.shape_6.setTransform(37.5366, -8.4889, 1.3983, 1.3983);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("rgba(102,204,0,0.976)")
      .s()
      .p(
        "AhpBEQgPgFgCgEQgCgEAOACQAZAEAegiQASgVAvg6QAkglArAZQAVAMANATQgRATgZAWQgxAugtAOQgZAHgXAAQgWAAgWgHg"
      );
    this.shape_7.setTransform(37.5366, -8.4889, 1.3983, 1.3983);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AgzhCIAvgQQBEA9gPBjIgeAFQgEhihCgzg");
    this.shape_8.setTransform(52.5513, -28.348, 1.3983, 1.3983);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("rgba(102,204,0,0.976)")
      .s()
      .p("AgzhCIAvgQQBEA9gPBjIgeAFQgEhihCgzg");
    this.shape_9.setTransform(52.5513, -28.348, 1.3983, 1.3983);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f()
      .s("#000000")
      .ss(1.5, 1, 1)
      .p(
        "AAtg9IAAABQASAZAAAjQAAACAAABQAAAhgSAYIAAABQgTAYgaAAQgZAAgSgYQgTgZAAgkQAAgBAAgCQABghASgYQASgYAZAAQAaAAATAXg"
      );
    this.shape_10.setTransform(88.4, 2.425);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AmtgYQgkgJgdgmQglgzgCgCQgagagmAAQgmAAgaAaQgZAZgNBAQgNA/APBWQAUBvAmBaQCEEMDgAqQFEA7FdgkQDdgjA+idQAhhBAAhPQAAiHhfhfQgwgwg5gYQgngQgPgYQgWgmAng4QgDgCgCgBQhNgrgFhOQgDgpAZgRQAMgJAUgCQAggFAUgpQAXgtgBglQgYhBg1g1QhhhhiKAAQiKAAhgBhQhhBhAACKQAACDBZBgQAKALAGAJQAYAkgkAHAmtgYQAKACAMgBQCsgUCXAFQAcACAQgCQBPBfAKCZQADCHiMAPQiMATiggUQiGgTADh0QAKiZBQhfg"
      );
    this.shape_11.setTransform(50.6108, 47.4453);
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#FF0000")
      .s()
      .p(
        "AkbJxQjggqiEkMQgmhagUhvQgPhWANg/QANhAAZgZQAagaAmAAQAmAAAaAaIAnA1QAdAmAkAJQhQBfgKCZQgDB0CGATQCgAUCMgTQCMgPgDiHQgKiZhPhfQAkgHgYgkQgGgJgKgLQhZhgAAiDQAAiKBhhhQBghhCKAAQCKAABhBhQA1A1AYBBQABAlgXAtQgUApggAFQgUACgMAJQgZARADApQAFBOBNArIAFADQgnA4AWAmQAPAYAnAQQA5AYAwAwQBfBfAACHQAABPghBBQg+CdjdAjQiEANiAAAQjTAAjKgkgAFOn+QgSAYgBAhIAAAEQAAAkATAZQASAYAaAAQAaAAATgYIAAgBQARgYABghIAAgDQAAgkgSgZIAAgBQgTgXgaAAQgaAAgSAYg"
      );
    this.shape_12.setTransform(50.6108, 47.4453);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.strawberry,
    new cjs.Rectangle(-21, -41, 143.2, 155.6),
    null
  );
  (lib.statueofliberty = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AhrgtQBrArBsgrIAABKQhnAihwgig");
    this.shape.setTransform(57.9113, 96.6497, 0.7987, 0.7987, 47.4018);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#6CBEA4")
      .s()
      .p("AhrAdIAAhKQBrArBsgrIAABKQg0ARg2AAQg0AAg5gRg");
    this.shape_1.setTransform(57.9113, 96.6497, 0.7987, 0.7987, 47.4018);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("ABMiHIBGBSIkPC9IgUgYg");
    this.shape_2.setTransform(45.425, 107.475);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#6CBEA4").s().p("AiRBwIDdj3IBGBSIkPC9g");
    this.shape_3.setTransform(45.425, 107.475);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AhfAeQgCgXAOgZQAOgaAWgMQAFgCBCglQgGAigDAQQARgBA/gDQgVAjgJAMQAKAAAVAEQgyA3gDADQgQAUgfAKQggALgUgLQgVgMgIgNQgIgNgCgWg"
      );
    this.shape_4.setTransform(67.1625, 88.2564);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FF6600")
      .s()
      .p(
        "Ag4BaQgVgMgIgNQgIgNgCgWQgCgXAOgZQAOgaAWgMIBHgnIgJAyIBQgEIgeAvQAKAAAVAEIg1A6QgQAUgfAKQgQAGgMAAQgOAAgKgGg"
      );
    this.shape_5.setTransform(67.1625, 88.2564);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("ABchHIAGAnAhhAsIAEAcAglgCIAEAfAAaglIAGAk");
    this.shape_6.setTransform(23.55, 1.7);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("Ai8CLQBfiyEaiLQgNBkAMAqQjiBIh8CPg");
    this.shape_7.setTransform(19.7, 4.425);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#6CBEA4")
      .s()
      .p("Ai8CLQBfiyEaiLQgNBkAMAqQjiBIh8CPg");
    this.shape_8.setTransform(19.7, 4.425);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("Ah+DxIhThVIB9AFIgUiHIBrAlIAhiaIA5BWIB2jrIgDDg");
    this.shape_9.setTransform(14.95, -9.625);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#6CBEA4")
      .s()
      .p("AjSCcIB9AFIgTiHIBrAlIAhiaIA5BWIB2jrIgDDgIkcC+IABAAIgzBDg");
    this.shape_10.setTransform(14.95, -9.625);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.statueofliberty,
    new cjs.Rectangle(-7.1, -34.7, 84.89999999999999, 156.8),
    null
  );
  (lib.starfish = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ABHgZIAoAaQAHAFgBAFQgBAGgIADIgtAPQgDABgDACIADgBIgHAFQgFADgBABQgIAIgCAJIgNAtQgCAIgGACQgFAAgGgGIgbgmQgBgDgCgCQgFgEgHgDQgKgFgJAAIgvACQgJABgDgGQgDgFAGgHIAbgmQAFgHABgLQACgKgDgIQAAAAAAgBIgQgtQgDgIAEgEQADgEAJADIAtAOQAIADALgDQALgCAHgFIAkgdQAIgGAEACQAFADABAJIAAAvQAAAJAGAKQAFAKAHAEg"
      );
    this.shape.setTransform(11.6987, 11.8001);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFCC00")
      .s()
      .p(
        "AAFBwIgbgmIgDgFIgMgHQgKgFgJAAIgvACQgJABgDgFQgDgGAGgHIAbgmQAFgHABgLQACgKgDgIIAAgBIgQgtQgDgIAEgDQADgFAJADIAtAOQAIADALgDQALgCAHgFIAkgdQAIgGAEADQAFADABAIIAAAvQAAAJAGAKQAFAKAHAFIAoAZQAHAFgBAFQgBAGgIADIgtAPIgGADIADgBIgHAFIgGAEQgIAIgCAJIgNAuQgCAHgGACIgBAAQgFAAgFgGg"
      );
    this.shape_1.setTransform(11.6987, 11.8001);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.starfish,
    new cjs.Rectangle(-1, -1, 25.4, 25.6),
    null
  );
  (lib.spiderman = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AAKBWQgFgSgEgVQgCgTgCgWIgBgJIgBgKQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIABgCIAEgDIAHgHIAFgHIAAABIgCAAIgEABQgHACgFAHIgGAHQgGAHAAACIgKAJQgGAHgEADIgMALQAAABABAAQAAABABAAQAAABAAAAQABAAAAABIgBADIAAAPIAEAQQADAKAGAOIAMAYIAGAKIAFALIgCgBQgbgjgPgtQgGgQgCgNIAAgHIABgCIABAAIABACIABgBIADACIACgCIAIgFIAIgHQAIgGAHgKIANgRIADgEIAFgCIAHgCIAIgCIAAAAIgBgBQgKgGgLAGIgfAPIgBABIgCgCIgOgGIgCgBIAAgCQABgEgBgHIABgUIADgUIAFgSQACgJADgIIADgHIABgBIABgBIAAABQgDAKgCANIgCAXIgBAUIACAUIAAACIABACIABACIACAAIAHgDIAkgPIABgBIACACIAKAGIgCgCIgCgDIgDgEIgEgBIgKgDIgLABIgDABIgBACIgBABQAAABAAgBIgNgFIgBgCQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgGIAAgFQABgZAJgXIACgEIABgCQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIgBABQgIAWABAVIAAAIIADAIIABACIADgBQAIgBAIACIAQAEIADABIACACQACAFAFADIABgDIADgDIAEgBIgCAFQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAIABAAIABgBIACgBIAAABQAAAAABABQAAAAAAAAQABAAAAAAQAAAAABAAIACgCIABAAIABgBIACACIABAAIgBgEIgEgFIAFAAIAEAGIACgCIAAAAIACgGIADgDIAEAMIgBADIABgCIADAJIgBABIAAABIABAAIACAIIACAOIgBgBIgEgEIgFgCQAAACABADIAEAEIABABIAAABQADAlgKAgIAAABIAAAAIgCAAIgBgBIAAgBIgCAAIgDAAIABABIgBACIgBAAIAAAAIgCAAIgFgMQgHgMgEgOIgHgbIAAgBIABgCIACgFIABgGQgHAFgEAHIgCAEIgDAEIAAACIAAABIABAGIAAADIACAiIAFAgQAGAkANAcIgBAEQgOgYgJgbg"
      );
    this.shape.setTransform(111.7924, 77.1226, 1.399, 1.399);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AgsHTQCdANCmgRQCegZAshwQAYgvAAg4QAAhhhEhEQgigigpgRQhIgdAthDQgCgBgBgBQg3gegEg4QgCgdASgMQAJgHAOgBQAXgEAOgdQARgggBgbQgRgugmgmQhGhGhiAAQhjAAhEBGQhGBFAABjQAABeBABEQAiAmgfAHQA4BEAHBtQACBehfANgAE5krQgaAbgkAAQgkAAgagbQgZgbAAgmQAAgVAIgRICbBVQgGAKgIAIgAkygRQAHABAIAAQB7gOBtADQATACAMgCAkygRQgagGgVgcQgagkgBgBQgTgTgbAAQgbAAgTATQgSARgJAuQgKAtALA9QAPBQAbBAQBeDACgAeQBOAOBQAGAg6EBQgCAAgDAAQhjAOhzgOQhggOAChTQAIhtA5hE"
      );
    this.shape_1.setTransform(50.5222, 47.2957, 1.399, 1.399);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#464980")
      .s()
      .p(
        "ABIELQifgehei/QgbhAgPhPQgLg9AKguQAJguASgSQATgTAbAAQAbAAATATIAbAmQAVAbAaAGQg5BFgIBuQgCBSBgANQByAOBjgNIAFgBIAODTQhQgHhOgOg"
      );
    this.shape_2.setTransform(12.0667, 72.4009, 1.399, 1.399);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#F52F30")
      .s()
      .p(
        "Aj5HTIgNjSQBggNgCheQgIhtg5hEQAhgHgkgmQg/hEAAheQAAhjBFhFQBGhGBiAAQBiAABFBGQAmAmARAuQABAbgQAgQgPAdgXAEQgOABgJAHQgRAMACAdQADA4A3AeIAEACQguBDBIAdQApARAiAiQBEBEAABhQAAA4gXAvQgsBwifAZQhdAKhbAAQhGAAhFgGgAgolsQAAAmAaAbQAZAbAkAAQAkAAAZgbQAIgIAGgKIiahVQgIARAAAVg"
      );
    this.shape_3.setTransform(79.1253, 47.2957, 1.399, 1.399);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.spiderman,
    new cjs.Rectangle(-21.1, -19.8, 143.3, 134.3),
    null
  );
  (lib.spa = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(1.5, 1, 1)
      .p(
        "AC9iSQgaAUhABEQhABCgEBSQgFBShEAHQhGAHgkgtQgkgsgHhKQgIhJBOhGQBNhFCBALQCCAMgaAUg"
      );
    this.shape.setTransform(50.9667, 16.2451, 1.3542, 1.3561);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AiUCNQgkgsgHhKQgIhJBOhGQBNhFCBALQCCAMgaAUQgaAUhABEQhABCgEBSQgFBShEAHIgSABQg5AAgfgng"
      );
    this.shape_1.setTransform(50.9667, 16.2451, 1.3542, 1.3561);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(1.5, 1, 1)
      .p(
        "AjICHQgMgIgIgsQgIgtAwhDQAvhEBYgdQBWgdBLAVQBNAVATA6QAJAZABALQgfgIgrgNQhLgUhXAdQhXAdgxA9QgZAggZAsgAjNCQQADgFACgE"
      );
    this.shape_2.setTransform(53.228, 0.2484, 1.3542, 1.3561);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AjcBXQgIgtAwhCQAvhEBYgdQBWgeBLAVQBNAVATA7QAJAZABALIhKgVQhLgVhXAeQhXAcgxA9QgZAhgZArQgMgHgIgtg"
      );
    this.shape_3.setTransform(53.228, -0.3618, 1.3542, 1.3561);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAAAHQgDgBgBgGIgCgGIABAAQALADABADQAAADgCACQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgCAAg"
      );
    this.shape_4.setTransform(
      85.35,
      16.55,
      1.3533,
      1.3555,
      0,
      0,
      0,
      -0.6,
      -0.3
    );
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p("AAAAFQgFgBgBgEQgBgCADgCQACgCACAAQAEABADALIAAABQgCgBgFgBg");
    this.shape_5.setTransform(79.9, 10.7, 1.3533, 1.3555, 0, 0, 0, -0.3, -0.3);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgEAFQgCgCAAgDQABgDALgDIABAAIgCAGQgBAGgEABIgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg"
      );
    this.shape_6.setTransform(
      79.95,
      16.55,
      1.3533,
      1.3555,
      0,
      0,
      0,
      -0.3,
      -0.3
    );
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p("AgGAGQADgLADgBQADAAACACQADACgBACQgBAEgGABQgEABgCABg");
    this.shape_7.setTransform(85.6, 10.7, 1.3533, 1.3555, 0, 0, 0, -0.4, -0.3);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p("AgEAGQgCgDAGgKIAAgBIADAHQAEAEgCADQgCADgDAAQgCAAgCgDg");
    this.shape_8.setTransform(83.2822, 18.0187, 1.3533, 1.3555);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p("AAAAIQgGgKACgDQACgDACAAQADAAACADQACADgEAEIgDAHg");
    this.shape_9.setTransform(83.2822, 10.0889, 1.3533, 1.3555);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f()
      .s("#336600")
      .ss(1.5, 1, 1)
      .p(
        "AAtAAQAAACAAABQAAAXgNASQgNARgTAAQgRAAgOgRQgNgSAAgaQAAgBAAgBQAAgYANgRQAOgRARAAQATAAANARQANASAAAZg"
      );
    this.shape_10.setTransform(83.0657, 14.13, 1.3542, 1.3561);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ABDiSQAmAmARAuQABAbgRAgQgOAcgXAEQgOABgJAHQgSAMACAdQAEA4A3AeQABABACABQgTAcACAWQhKgMg3hCQhDhPAAhwQAAhcAshGQBTAIA9A9g"
      );
    this.shape_11.setTransform(79.7178, 22.8427, 1.3542, 1.3561);
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#9DE37E")
      .s()
      .p(
        "AgfAsQgNgTAAgZIAAgBQAAgZANgRQANgRASAAQATAAANARQANATAAAYIAAACQgBAZgMARQgNARgTAAQgSAAgNgRg"
      );
    this.shape_12.setTransform(83.0657, 14.13, 1.3542, 1.3561);
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#66CCCC")
      .s()
      .p(
        "Ag2CKQhDhPAAhwQAAhcAshGQBTAIA9A9QAmAmARAuQABAbgRAgQgOAcgXAEQgOABgJAHQgSAMACAdQAEA4A3AeIADACQgTAcACAWQhKgMg3hCgAgGhrQgNARAAAYIAAADQAAAZANASQAMASATAAQATAAANgSQAMgRABgYIAAgCQAAgagNgSQgNgRgTAAQgTAAgMARg"
      );
    this.shape_13.setTransform(79.7178, 22.8427, 1.3542, 1.3561);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.spa,
    new cjs.Rectangle(22.2, -20.2, 75, 73.3),
    null
  );
  (lib.something2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#DADADA").ss(3, 1, 1).p("AAAjHIAAGP");
    this.shape.setTransform(437.15, 30.225);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(4, 1, 1)
      .p(
        "EArpgErQB3ADBVBVQBYBYAAB7QAAB8hYBYQhVBWh3ACMhXRAAAQh3gChVhWQhYhYAAh8QAAh7BYhYQBVhVB3gDg"
      );
    this.shape_1.setTransform(308.525, 30);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "EgroAEsQh3gDhVhVQhYhYAAh8QAAh7BYhYQBVhVB3gDMBXRAAAQB3ADBVBVQBYBYAAB7QAAB8hYBYQhVBVh3ADg"
      );
    this.shape_2.setTransform(308.525, 30);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.something2,
    new cjs.Rectangle(-2, -2, 621.1, 64),
    null
  );
  (lib.snowman = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAhgWIAHAcQADANgHAKQgGALgMACIgPAEQgLACgLgHQgKgGgDgMIgHgcQgCgMAGgLQAHgLAMgCIAPgEQALgCAKAGQALAHACAMg"
      );
    this.shape.setTransform(80.9722, 52.5926, 1.3976, 1.3975);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FF6666")
      .s()
      .p(
        "AgTApQgKgGgDgMIgHgcQgCgMAGgLQAHgLAMgCIAPgEQALgCAKAGQALAHACAMIAHAcQADANgHAKQgGALgMACIgPAEIgGAAQgIAAgIgFg"
      );
    this.shape_1.setTransform(80.9722, 52.5926, 1.3976, 1.3975);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AAah6IAeAEIAFDxIh5gCg");
    this.shape_2.setTransform(72.0096, 69.4346, 1.3976, 1.3975);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FF6666").s().p("Ag8B5IBWjzIAeAEIAFDxg");
    this.shape_3.setTransform(72.0096, 69.4346, 1.3976, 1.3975);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("Agrh7IgeAHIAfDwIBzgeg");
    this.shape_4.setTransform(91.8212, 69.3647, 1.3976, 1.3975);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#FF6666").s().p("AhIh0IAdgHIB0DZIhzAeg");
    this.shape_5.setTransform(91.8212, 69.3647, 1.3976, 1.3975);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AizhAQBYBCBPAAQBbAABMg/QgEAiApAUQh3BKhRgDQhUgDg9gnQgBgBAAgBQgPgggWgbQAIgJAEgQg"
      );
    this.shape_6.setTransform(73.0927, 48.865, 1.3976, 1.3975);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FF6666")
      .s()
      .p(
        "AgIBAQhUgDg9gnIgBgCQgPgggWgbQAJgJADgQQBYBCBPAAQBbAABMg/QgEAiApAUQhzBIhPAAIgGgBg"
      );
    this.shape_7.setTransform(73.0927, 48.865, 1.3976, 1.3975);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f()
      .s("#FFFFFF")
      .ss(1, 1, 1)
      .p(
        "AhBgHIAAABIABAAgAhagJIAZACIgJgbAhBgGIgOARAAvg4IAAABIAAgBIgHgVAAvg4IAAAAABFgxIgWgGAAvg4IAMgPAgTg7IAIAWIANAmIAMAiIgMAHIgWgMIgQgKIAAgXIAAgUIAZgOIANgIIAZAOIANAIIAAAdIAbADIANgTAgHhSIgMAXIAAAAIgIgWAgTg7IgXgLAguA/IAJgMIgXgFAglAzIABAAIAHAYAglAzIABAAAglAzIAAAAAAXA8IAHAXAAFBPIASgTIAAAAIgJgZIAagPIAAgOIgmgFIAZggIAUgZAgkgDIAmAEIgWAdIgRAVABcANIgYgEIgBAAABNAgIgJgXAAXA8IAWAHAhAgGIAcAD"
      );
    this.shape_8.setTransform(52.562, -32.1141, 1.3976, 1.3975);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "Ai2hLQBnhoC0gJQAbAFAJAkIAwDcQAFAYgYAUQhBAxiLAXQgZgCgKgWIhljKQgRghAJgFg"
      );
    this.shape_9.setTransform(50.2772, -34.2221, 1.3976, 1.3975);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#6699FF")
      .s()
      .p(
        "AhJClIhljKQgRghAJgEQBnhpC0gJQAbAFAJAlIAwDbQAFAYgYAUQhBAxiLAWQgZgCgKgVg"
      );
    this.shape_10.setTransform(50.2772, -34.2221, 1.3976, 1.3975);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AEMhZQAGAThJAoQhKAohvAmQhuAlhTAMQhUANgGgTQgHgUBKgoQBKgoBvglQBugmBTgMQBUgNAGAUg"
      );
    this.shape_11.setTransform(59.6055, -9.919, 1.3976, 1.3975);
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#6699FF")
      .s()
      .p(
        "AkLBbQgGgUBJgoQBKgoBvglQBugmBTgMQBUgNAGAUQAHAThKAoQhKAohvAmQhuAlhTAMQghAFgVAAQggAAgEgLg"
      );
    this.shape_12.setTransform(59.6055, -9.919, 1.3976, 1.3975);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
          ],
        })
        .wait(1)
    );
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "Ah+huQgHgHCSADQCTADADACQACACAaAAQAaAFAKAdQAKAcjpBgIivBEQACgCADgHQgBgBgBAAQg3gfgEg4QgCgcASgMQAJgGAOgCQAXgEAOgdQARgggBgaQAAgBAAAAQADAEADAFQABgCACABg"
      );
    this.shape_13.setTransform(120.3448, 19.1959, 1.3976, 1.3975);
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#FF6600")
      .s()
      .p(
        "AimBuIgCgBQg3gfgEg4QgCgcASgMQAJgGAOgCQAXgEAOgdQARgggBgaIAAgBIAGAJQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQgHgHCSADQCTADADACQACACAaAAQAaAFAKAdQAKAcjpBgIivBEIAFgJg"
      );
    this.shape_14.setTransform(120.3448, 19.1959, 1.3976, 1.3975);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_14 }, { t: this.shape_13 }] })
        .wait(1)
    );
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#000000")
      .s()
      .p(
        "AgTAUQgHgIgBgMQABgKAHgJQAJgHAKgBQAMABAHAHQAIAJAAAKQAAAMgIAIQgHAHgMAAQgKAAgJgHg"
      );
    this.shape_15.setTransform(106.453, 87.6794, 1.3976, 1.3975);
    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#000000")
      .s()
      .p(
        "AgTAUQgHgJgBgLQABgLAHgHQAJgIAKAAQALAAAJAIQAHAHABALQgBALgHAJQgJAHgLABQgKgBgJgHg"
      );
    this.shape_16.setTransform(106.1036, 73.3561, 1.3976, 1.3975);
    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#000000")
      .s()
      .p(
        "AgTATQgHgIgBgLQABgLAHgHQAJgJAKAAQAMAAAHAJQAIAHAAALQAAALgIAIQgHAJgMgBQgKABgJgJg"
      );
    this.shape_17.setTransform(100.1636, 59.0116, 1.3976, 1.3975);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
          ],
        })
        .wait(1)
    );
    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AAVArQAHA1AXAvQA+CcDdAjAiclNQjICQAZDI");
    this.shape_18.setTransform(21.0611, 79.925);
    this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1));
    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f()
      .s("#000000")
      .ss(1.5, 1, 1)
      .p(
        "AA/AAQAAACAAABQgBAigRAYQgSAYgbAAQgZAAgSgYQgTgaAAgjQAAgBAAgCQAAghATgYQASgYAZAAQAbAAASAYQASAZAAAjg"
      );
    this.shape_19.setTransform(87.85, 1.925);
    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AgsgnQAsgJgwg1QhZhfAAiEQAAiKBhhhQBghhCKAAQCJAABiBhQA1A1AYBBAHQh9IDchiQA0gXg4giQgGgEgEgDIAAgBQgJgIABgLIAAgBQAAgFADgGIAghGQAKgUgUgPQgTgOhAAaQhAAZgig7QAAABAAAAAHQh9QgDgBgCgBQhMgrgFhOQgDgpAYgQQANgKATgCQAhgFAUgpQAXgtgBglAHQh9Qg/BdBkAqQA6AYAvAvQBfBfAACHQAABPghBCQg9CcjeAjQlcAklEg7QjfgqiEkLQgmhagUhwQgQhVAOg/QANhAAYgZQAbgaAmAAQAlAAAbAaQABACAlAzQAdAmAkAIQALACALAAQCsgUCYAEQAbADAQgDQBOBgALCZQADCGiMAPQiLATiggTQiHgTADh0QALiZBPhg"
      );
    this.shape_20.setTransform(50.7569, 47.2203);
    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#C0FFFF")
      .s()
      .p(
        "AkbJwQjfgqiEkLQgmhagUhwQgQhVAOg/QANhAAYgZQAbgaAmAAQAlAAAbAaIAmA1QAdAmAkAIQhPBggLCZQgDB0CHATQCgATCLgTQCMgPgDiGQgLiZhOhgQAsgJgwg1QhZhfAAiEQAAiKBhhhQBghhCKAAQCJAABiBhQA1A1AYBBQABAlgXAtQgUApghAFQgTACgNAKQgYAQADApQAFBOBMArIAFACQg/BdBkAqQA6AYAvAvQBfBfAACHQAABPghBCQg9CcjeAjQiDAOiAAAQjTAAjKglgAFLoBQgTAYAAAhIAAAEQAAAjATAaQASAYAaAAQAaAAASgYQASgYABgiIAAgDQAAgkgTgZQgSgYgaAAQgaAAgSAYg"
      );
    this.shape_21.setTransform(50.3608, 47.2203);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.snowman,
    new cjs.Rectangle(-21.2, -61.5, 174.39999999999998, 175.9),
    null
  );
  (lib.slowWarning = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgbBKIAAgaIAnAAIAAAagAgZAjIAAghIANgDQAFgBAGgFQAGgEACgFQAEgFAAgHQAAgKgHgEQgFgEgLAAQgHAAgJADQgJADgHAFIgEAAIAAgeIATgFQANgDANAAQAXAAAOAKQAPALAAARQAAAKgDAIQgDAHgFAGQgFAFgIAEQgHAEgJAEIAAAWg"
      );
    this.shape.setTransform(16.3, 15.975);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhKBLQgggfAAgsQAAgrAggfQAfgfArAAQAsAAAfAfQAfAfAAArQAAAsgfAfQgfAggsgBQgrABgfggg"
      );
    this.shape_1.setTransform(15.9, 16.1);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this.info = new cjs.Text("Running Slow?", "22px 'Verdana'", "#FFFFFF");
    this.info.name = "info";
    this.info.textAlign = "center";
    this.info.lineHeight = 29;
    this.info.lineWidth = 204;
    this.info.parent = this;
    this.info.setTransform(124.3, 2);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AvZCWQg9gBgqgrQgsgsAAg+QAAg9AsgsQAqgqA9gCIe0AAQA8ACAqAqQAsAsAAA9QAAA+gsAsQgqArg8ABg"
      );
    this.shape_2.setTransform(113.3, 16.35);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_2 }, { t: this.info }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.slowWarning,
    new cjs.Rectangle(0, 0, 228.1, 31.4),
    null
  );
  (lib.shuffle_button_graphic = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#FFFFFF")
      .ss(2.5, 0, 1)
      .p(
        "ABkg3IgZAAIgJAAQAAAAgBAAQgBAAgCAAQgIABgHACQgJADgIAHQgIAIgJANQgDAFgEAFQgCAEgDAFQgBABAAABABkA4IgZAAIgJAAQAAAAgBAAQgBAAgCgBQgIAAgHgCQgJgDgIgHQgIgIgJgNQgDgFgEgGQgCgEgDgEQgBgCAAgBQAAAAAAgBQgHgKgFgIQgJgOgIgHQgJgHgIgDQgHgDgIAAQgCAAgBAAIgjAAAhjA2IAjAAQABAAACAAQAIAAAHgDQAIgDAJgHQAIgHAJgOQAFgIAHgLQAAAAAAgB"
      );
    this.shape.setTransform(9.95, 8.45);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#FFFFFF")
      .ss(2, 1, 1)
      .p("AAZg3IgxAdIAAgdIAAgdgAAZA4IgxgdIAAAdIAAAdg");
    this.shape_1.setTransform(19.95, 8.475);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgYA4IAYAAIgYAAIAAgdIAxAdIgxAdgAgYA4gAgYg3IAAgdIAxAdIgxAdgAAAg3IgYAAg"
      );
    this.shape_2.setTransform(19.95, 8.475);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.shuffle_button_graphic,
    new cjs.Rectangle(-1.2, -1, 24.7, 19),
    null
  );
  (lib.showWinners = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AhqDLQgGAAgFgFQgFgFAAgHIAAgNQAAgIAFgEQAFgFAGAAIAUAAQAYAAALgNQARgRgCgcQgigJgbgbQgbgcgKgiQgjgBgZgZQgbgaAAgmIAAhAQAAgHAGgEQAFgGAGAAIBCAAIAAgOQAAgGAEgFQAGgGAHAAID0AAQAHAAAGAGQAEAFAAAGIAAAOIBBAAQAHAAAEAGQAGAEAAAHIAABAQgBAmgaAaQgZAZgiABQgKAigbAcQgbAbgjAJQgBAcARARQALANAYAAIATAAQAIAAAEAFQAFAEAAAIIAAANQAAAHgFAFQgEAFgIAAgAA4ARIgUhBIA3grIhFgBIgWhCIgXBCIhGABIA3ArIgTBBIA5gmgACMglQARgCANgNQAPgPABgXIAAgsIguAAgAi4haQABAXAOAPQAOANARACIAAhhIguAAg"
      );
    this.shape.setTransform(38.925, 41.125);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(5, 1, 1)
      .p(
        "AGBAAQAACghxBxQhwBwigAAQifAAhxhwQhwhxAAigQAAifBwhxQBxhwCfAAQCgAABwBwQBxBxAACfg"
      );
    this.shape_1.setTransform(38.525, 38.5);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AkQERQhwhxAAigQAAifBwhxQBxhwCfAAQCgAABwBwQBxBxAACfQAACghxBxQhwBwigAAQifAAhxhwg"
      );
    this.shape_2.setTransform(38.525, 38.5);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }] })
        .wait(1)
    );
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("rgba(0,0,0,0.498)")
      .s()
      .p(
        "AkQEQQhwhwAAigQAAieBwhxQBxhxCfAAQCgAABwBxQBxBxAACeQAACghxBwQhwBxigAAQifAAhxhxg"
      );
    this.shape_3.setTransform(42.275, 44.05);
    this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.showWinners,
    new cjs.Rectangle(-2.5, -2.5, 83.3, 85.1),
    null
  );
  (lib.showWinnerPopup = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(5, 1, 1)
      .p(
        "ASezjMAAAAv7QAACWiWAAMggPAAAQiWAAAAiWMAAAg4vQAAiWCWAAMAgPAAAQAuAAAgAOQBIAgAABoIAAIc"
      );
    this.shape.setTransform(165.55, 198.2);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AwHeuQiWAAAAiWMAAAg4vQAAiWCWAAMAgPAAAQAuAAAgAPQBIAfAABoIAAIdIAAAYMAAAAv6QAACWiWAAg"
      );
    this.shape_1.setTransform(165.55, 198.2);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("rgba(0,0,0,0.498)")
      .s()
      .p(
        "AwHeuQiWAAAAiWMAAAg4vQAAiWCWAAMAgPAAAQAuAAAgAPQBIAfAABoMAAAA4vQAACWiWAAg"
      );
    this.shape_2.setTransform(171.15, 204.2);
    this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.showWinnerPopup,
    new cjs.Rectangle(44.9, -0.9, 244.49999999999997, 401.7),
    null
  );
  (lib.showNos = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.frame_0 = function () {
      this.stop();
    };
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AraZBICSlhQgqAUg+ASQhAAUgwAKIAXg2QBXgWBJgfQBGgeAkgdIA8AAIi6HDgAorKIQAGgUAVgSQAgggA3gcQA3gdBggnQCVg8A7gjIAJgEQA0ghAMgeQANgggdgVQgWgTgsgEQgOgBgOAAQhDgBg0AZQgyAXgSArIhegGQAmg/BOghQBOgiBtAAIABAAQBrgBAwAlQAwAjgWA2QgMAagdAbQgfAbg2AbIgZANQg3AbhiAoQhmApgeAQQgeAOgXAPIF1AAIgXA1gAiJjyQgwgiAUg4IBigIQgIAvAaAVQAcAUA2AAQBCAAA9gaQA6gbAWgnQAUgogdgXQgcgahBAAQgagBgqAIIAkgxIAOAAQA8ABA5gTQA6gSAUgmQAQgfgYgTQgYgVg3AAQg2ABgvAUQgvAUghAoIhXgJQAug4BOgeQBMgfBaAAQA+AAAsAQQAsAQAOAbQANAbgRAfQgPAegoAXQgnAXg7APQA+AJAWAdQAWAdgXAsQggA5hfApQheAphuAAQhkABgugkgAH8x/IAwhqIlJAAIAVg0IHdkjIBMAAIiCEjIBmAAIgVA0IhmAAIgxBqgAFU0dIDuAAIBbjJg"
      );
    this.shape.setTransform(84.075, 198.5);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AqqYNICRlhQgqAUg+ATQhAATgvAKIAWg1QBXgXBJgfQBHgeAjgdIA9AAIi7HDgAmLEWQAGgUAVgSQAfgfA4gcQA3geBfgnQCVg8A7gjIAIgEQA1ggALgeQAPgfgfgWQgVgTgsgEQgOgBgPAAQhBAAg0AYQgzAYgRAqIhegGQAmg/BOghQBNgiBsAAIABAAQBsAAAxAkQAwAjgWA2QgMAageAaQgfAbg2AbIgZANQg4AbhgAoQhmAqgeAPQgeAOgXAPIF0AAIgXA1gADDxlQgwgiAVg4IBhgIQgIAuAbAWQAcAUA3AAQBBAAA9gbQA7gaAWgoQAUgngdgYQgdgahAAAQgbAAgqAHIAlgwIAOAAQA8AAA5gSQA5gSAVgnQAQgegYgTQgYgVg3AAQg3AAguAVQgvATgiApIhXgKQAug3BOgeQBNgfBZAAQA/AAAsAPQAsARANAbQAOAagRAfQgQAegnAYQgnAXg8APQA/AJAWAdQAVAcgXAtQggA5heApQheAphvAAQhkAAgvgjg"
      );
    this.shape_1.setTransform(91.6738, 192.275);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "An4P9ICSlhQgqATg+ATQhAATgwAKIAXg1QBXgXBJgfQBGgeAkgdIA8AAIi6HEgAhIo4QAGgUAVgSQAfgfA3gdQA3geBfgmQCWg9A7giIAIgEQA1ghALgeQAPgggfgVQgVgTgsgEQgOgBgPgBQhCABg0AYQgzAYgRAqIhegGQAmg/BOghQBNgiBtgBIABAAQBsAAAxAkQAwAkgWA1QgMAbgeAbQgfAag2AcIgZANQg4AbhhAoQhmAqgeAPQgeAOgXAPIF1AAIgXA1g"
      );
    this.shape_2.setTransform(97.4707, 185.4);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape }] })
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .to({ state: [{ t: this.shape_2 }] }, 1)
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(4, 37.4, 163, 321.20000000000005);
  (lib.santa = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ADphuQASgFASgDQA2AMgOAuQjfBIi8CNQgigIgFgcQgDgQAHgYQAQgOAQgOQgdhBAwhLAiNB1QgkAcgaAQAkZBoQAIgEAKgBQAWgCARANQASAOADAWQABAIgBAHQgCAOgKALQgNASgWADQgXACgSgOQgRgNgDgXQgCgWANgSQAIgKALgFQAHgmAVg6QA6ijCngpQCkgpBhB/AhpAxQCMhxDGgu"
      );
    this.shape.setTransform(31.2089, 20.6921);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#CC0000")
      .s()
      .p(
        "AizCpQgCgWgSgOQgRgNgWACQgKABgIAEQAGgmAVg6QA7ijCmgpQClgpBgB/QjFAuiMBxQgLgZAAgaQgBgqAegvQgeAvABAqQAAAaALAZIggAcQgHAYADAQQgkAcgbAQQABgHgBgIg"
      );
    this.shape_1.setTransform(28.775, 18.3732);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AkjCXQgRgNgDgXQgCgWANgSQAIgKALgFQAIgEAKgBQAWgCARANQASAOADAWQABAIgBAHQgCAOgKALQgNASgWADIgHAAQgSAAgQgMgAiNBJQgDgQAHgYIAggcQCMhxDGguIAkgIQA2AMgOAuQjfBJi8CMQgigIgFgcg"
      );
    this.shape_2.setTransform(31.2089, 25.0689);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.santa,
    new cjs.Rectangle(-1, -1, 64.4, 43.4),
    null
  );
  (lib.redalien = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "Ai0E1QABAEhVhGQhHg6gKgHQAMACBTgGQBhgHAAADQg5k3ACAHQABADBLBaQBMBaABADQABAEAhi4QAhi4ABAEIBTEkQACADBEhaQBFhaAAADQACADgJBpQgHBnAAADQACAEA9gVQA+gUAAAEQACADhKBLQhKBNABADQAAACgbAMQgggHgjAAQgTAAgRACQhxALhUBUQgXAXgSAaQgNAGAAABg"
      );
    this.shape.setTransform(59.5265, -33.8699);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#CC33CC")
      .s()
      .p(
        "AkIDzQhHg6gKgHQAMACBTgGQBhgHAAADIg3kwQABADBLBaQBMBaABADQABAEAhi4QAhi4ABAEIBTEkQACADBEhaQBFhaAAADQACADgJBpIgHBqQACAEA9gVQA+gUAAAEQACADhKBLQhKBNABADQAAACgbAMQgggHgjAAQgTAAgRACQhxALhUBUQgXAXgSAaQgNAGAAABIAAAAQgDAAhRhCg"
      );
    this.shape_1.setTransform(59.5265, -33.8699);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#CC33CC")
      .s()
      .p(
        "AgwBDQgVgXABggQgBgfAVgWQAUgXAcAAQAcAAAVAXQAUAWAAAfQAAAggUAXQgVAVgcAAQgcAAgUgVgACOgWQgKgLAAgQQAAgRAKgKQAKgMAPAAQANAAALAMQALAKAAARQAAAQgLALQgLALgNAAQgPAAgKgLgAi/gWQgJgLAAgQQAAgRAJgKQAKgMAPAAQAOAAAKAMQALAKAAARQAAAQgLALQgKALgOAAQgPAAgKgLg"
      );
    this.shape_2.setTransform(88, 83.4);
    this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgBAMQgFAAgDgEQgDgFAAgEQABgFAEgDQAFgEAEABQAFABADAFQADAEAAAEQgBAFgFADQgDADgDAAIgCgBg"
      );
    this.shape_3.setTransform(97.2605, -14.9144, 1.3891, 1.389);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AAAAoQgOgFgLgPQgKgMgBgNIgBgGQABgQALgJQALgIAOAGQARAFALAPQALAPgBAPQABARgLAIQgHAFgJAAQgFAAgHgCg"
      );
    this.shape_4.setTransform(96.7107, -13.1161, 1.3891, 1.389);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("#000000")
      .ss(1.5, 1, 1)
      .p(
        "ABBgmQABABAAABQARAYgEAhQgEAigSAOQgSANgegVQgcgVgLgKQgKgKgIgIQgJgIgQgXQgQgYAdgSQAdgRAmAIQAnAHATAZg"
      );
    this.shape_5.setTransform(92.4049, -10.0921, 1.3891, 1.389);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAJA9QgcgVgLgKIgSgSQgJgIgQgXQgQgYAdgSQAdgRAmAIQAnAHATAZIABACQARAYgEAhQgEAigSAOQgHAFgJAAQgOAAgSgNg"
      );
    this.shape_6.setTransform(92.4049, -10.0921, 1.3891, 1.389);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
          ],
        })
        .wait(1)
    );
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AgogmQAsgJgwg2QhYheAAiDQAAgTACgTQAMhxBShSQBThUBygLQARgCATAAQCJAABgBhQA1A1AYBAQABAlgXAsQgUApggAFQgTACgNAJQgYARACAoQAFBOBNAqQACACADABQhABdBkApQA5AYAwAvQBeBeAACGQAABPghBBQg9CcjcAiQlaAklCg7QjegpiDkKQgmhagUhuQgPhVANg/QANhAAZgYQAagaAlAAQAmAAAaAaQACABAlAzQAcAmAkAJQALACALgBQCqgTCXAEQAbACAQgCQBOBfALCYQADCFiMAPQiKATifgTQiFgTADhzQAKiZBPhe"
      );
    this.shape_7.setTransform(50.5358, 47.4203);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FF0000")
      .s()
      .p(
        "AkZJsQjegpiDkKQgmhagUhuQgPhVANg/QANhAAZgYQAagaAlAAQAmAAAaAaIAnA0QAcAmAkAJQhPBegKCZQgDBzCFATQCfATCKgTQCMgPgDiFQgLiYhOhfQAsgJgwg2QhYheAAiDQAAgTACgTQAMhxBShSQBThUBygLQARgCATAAQCJAABgBhQA1A1AYBAQABAlgXAsQgUApggAFQgTACgNAJQgYARACAoQAFBOBNAqIAFADQhABdBkApQA5AYAwAvQBeBeAACGQAABPghBBQg9CcjcAiQiDAOh/AAQjRAAjJglg"
      );
    this.shape_8.setTransform(50.5358, 47.4203);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_8 }, { t: this.shape_7 }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.redalien,
    new cjs.Rectangle(-20.6, -65.8, 142.3, 179.89999999999998),
    null
  );
  (lib.punk = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p("AARAfIgziDAhuBvIhGhDAiFCIIg3glAC8iHIghB/");
    this.shape.setTransform(22.6434, 16.4244, 1.2079, 1.2079);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("ADQgKIAdjNQnIgegRFzIBgBcQADhMAkgtQCPidCmAyg");
    this.shape_1.setTransform(23.0963, 22.1517, 1.2079, 1.2079);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#33CC00")
      .s()
      .p(
        "AjsB+QARlzHIAeIgdDNQimgyiPCdQgkAtgDBMgAiJBZIg2gmgAhxBAIhHhDgAANgPIgziFgACXg3IAiiAg"
      );
    this.shape_2.setTransform(23.0963, 22.1517, 1.2079, 1.2079);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.punk,
    new cjs.Rectangle(-6.5, -5.2, 59.2, 54.7),
    null
  );
  (lib.princess = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AATAMQAYhDAHgUQAGgVgTgMQgTgMgtASQgDAngIAwQgEAUgTAyIAAACQAWAQAVApQAbgFAggSQAkgVgZgXQgagYgHgLgAg9A5QAygLAegi"
      );
    this.shape.setTransform(62.6325, 54.468);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#CC0000")
      .s()
      .p(
        "Ag9A5QAygLAegiQAHALAaAYQAZAXgkAVQggASgbAFQgVgpgWgQgAg9A3QATgyAEgUQAIgwADgnQAtgSATAMQATAMgGAVIgfBXQgeAigyALg"
      );
    this.shape_1.setTransform(62.6325, 54.468);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AAlg4QgcgKgBgdAAQgTQghAOgTgmAATAbQgZASgbgSAAaA/QgKAogcgJ");
    this.shape_2.setTransform(25.6, 39.7818);
    this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAhgoIgfgrQADgDABgFQABgGgDgEQgEgFgFgBQgFgBgEAEQgFADgBAFQgBAGAEAFQADAEAFABQACAAABAAIgHAzIg3gVQACgDABgEQABgFgEgFQgDgEgFgBQgGgBgFADQgEAEgBAFQgBAGAEAEQADAFAGAAQAEABAEgCQAsBOABBJQA8AOAtgiQgNhRAMhMQAGABAFgEQAEgDABgGQABgFgEgFQgDgEgGgBQgFgBgFAEQgEADgBAGQgBAFADAEQABACACABg"
      );
    this.shape_3.setTransform(8.1598, 10.4828, 1.4059, 1.4059);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFD13B")
      .s()
      .p(
        "AgbBoQgBhJgshOQgEACgEgBQgGAAgDgFQgEgEABgGQABgFAEgEQAFgDAGABQAFABADAEQAEAFgBAFIgDAHIA3AVIAHgzIgDAAQgFgBgDgEQgEgFABgGQABgFAFgDQAEgEAFABQAFABAEAFQADAEgBAGQgBAFgDADIAfArIAmgkIgDgDQgDgEABgFQABgGAEgDQAFgEAFABQAGABADAEQAEAFgBAFQgBAGgEADQgFAEgGgBQgMBMANBRQggAYgpAAQgPAAgRgEg"
      );
    this.shape_4.setTransform(8.1598, 10.4828, 1.4059, 1.4059);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.princess,
    new cjs.Rectangle(-5.9, -5.7, 75.80000000000001, 72.60000000000001),
    null
  );
  (lib.police = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#999999")
      .s()
      .p(
        "AgPASQgGgIAAgKQAAgKAGgHQAGgHAJAAQAJAAAHAHQAGAHABAKQgBAKgGAIQgHAHgJAAQgJAAgGgHg"
      );
    this.shape.setTransform(-6.545, 114.1346, 1.362, 1.362);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#999999")
      .s()
      .p(
        "AgPASQgGgIAAgKQAAgJAGgIQAGgHAJAAQAJAAAHAHQAGAIABAJQgBAKgGAIQgHAHgJAAQgJAAgGgHg"
      );
    this.shape_1.setTransform(-5.895, 126.3386, 1.362, 1.362);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#999999")
      .s()
      .p(
        "AgPARQgGgGAAgLQAAgJAGgIQAHgHAIAAQAKAAAGAHQAGAIABAJQgBALgGAGQgGAIgKAAQgIAAgHgIg"
      );
    this.shape_2.setTransform(-13.701, 103.5416, 1.362, 1.362);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#999999").s().p("Ag+AoIBIhPIA1AAIhIBPg");
    this.shape_3.setTransform(-55.9485, 97.7826, 1.362, 1.362);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AlHA8QAAAAABAAQCKgPgDiCQgKiVhOheQAZgFgFgTIHRAoQAPASAgAOQA4AXAuAvQBdBcAACDQAABNggBAQg8CYjYAiQjaAXjQgQQhKgFhIgLIgPkHQA+AAA6gIIApEf"
      );
    this.shape_4.setTransform(-42.55, 123.4325);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AlaFbIgpkfIACAAQCJgPgDiCQgKiVhNheQAZgFgFgTIHQAoQAPASAgAOQA4AXAuAvQBdBcAACDQAABNggBAQg8CYjYAiQh/ANh8AAQhYAAhXgGg"
      );
    this.shape_5.setTransform(-36.575, 123.4325);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#999999")
      .s()
      .p("AhBCAIgOkGQA9gBA5gHIApEdQhKgFhHgKg");
    this.shape_6.setTransform(-79.275, 143.775);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
          ],
        })
        .wait(1)
    );
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAdAAQAAAMgJAJQgIAIgMAAQgLAAgJgIQgIgJAAgMQAAgLAIgIQAJgJALAAQAMAAAIAJQAJAIAAALg"
      );
    this.shape_7.setTransform(-70.0042, -1.1197, 1.362, 1.362);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#999999")
      .s()
      .p(
        "AgUAUQgIgIAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAIQgJAJgMAAQgLAAgJgJg"
      );
    this.shape_8.setTransform(-70.0042, -1.1197, 1.362, 1.362);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AjgBCQAAgCAAgDQAAhsBChOQBChNBcAAQBdAABCBNQBCBOAABsQAAAFAAAEQgBAXgDAWAjcBxQDcAbDbgbIACACIA/BLQkTAbkkgdIA1hLIAKAAQgEgXAAgYQDhAVDggR"
      );
    this.shape_9.setTransform(-61.2017, 26.2628, 1.362, 1.362, -20.9075);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AkbC8IA1hLIAKAAQDcAbDbgbIACACIA/BLQiDANiIAAQiTAAiZgPgAjgBCIAAgFQAAhsBChOQBChNBcAAQBdAABCBNQBCBOAABsIAAAJQhkAIhlAAQh7AAh9gMg"
      );
    this.shape_10.setTransform(-61.2017, 26.2628, 1.362, 1.362, -20.9075);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#999999")
      .s()
      .p("AjcAQQgDgVgBgYQDhAVDggRQgBAXgDAUIgCgCQhuAOhtAAQhuAAhugOg");
    this.shape_11.setTransform(-56.5591, 38.5112, 1.362, 1.362, -20.9075);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.police,
    new cjs.Rectangle(-90.7, -6, 93.9, 165.8),
    null
  );
  (lib.pirate = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAEAhQgEgBgDgEIgBgDIgIABQgOgBgFgJQgFgKAFgKQAGgNAMgIQANgIANABQANABAGAJQAFAKgFAMIgEAFIABADQADAEgCAFQgBAFgEADIgLAGQgDACgEAAIgDAAgAgLAAQgDACAAACQAAABAAAAQgBABABAAQAAABAAAAQAAABABABQAAAAAAAAQABABAAAAQABABAAAAQABAAAAABQADAAADgBIACgEQABgCgCgDQAAgBAAAAQgBgBAAAAQAAAAgBAAQgBAAAAAAIgFAAgAAIgLIgDADQAAADABADIAEACIAFAAQADgCAAgCQABgDgCgCIgEgDIgBgBIgEACg"
      );
    this.shape.setTransform(28.5, 20.9, 1, 1, 0, 0, 0, 0.2, 0.3);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgKAcQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAIgBgBQAAAAgBABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABIARggQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIABgEIACgCQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAIAAABIABAAIAEAAIADADQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABIgDACIgDAAIgSAhQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAIgCAAg"
      );
    this.shape_1.setTransform(31.6, 26.1292);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgbAIQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIAAgBIAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgEIAEgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIACAEIAlgBQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIACAEIgCAEIgBAAIABAAIACADQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgEgBIgBgCIglAAIgCADQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAg"
      );
    this.shape_2.setTransform(31.625, 26.1688);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "Aj2CaIgWgKIAJgDQARgIAPgMQAugrgBhPQgBhRAkgzQAKgQAQgMQAHgGAXgPQABAAACgBQAAAAABgBQAHgCAHgEQASgHAUgCQA9gGBGAnQBHAoA7gUQARgHAQgLIAKgKIgDAZAEKiPIgQBzQgDAAgEABQhYAVhrA+QhpA+g+BEQgHAIgFAHIhugt"
      );
    this.shape_3.setTransform(31.1, 26.4, 1, 1, 0, 0, 0, -0.2, -2);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "Aj0CWQAKgGAJgIQAtgqAAhRQAAhQAjgyQAKgQAQgNQAHgHAJgFIASgIQASgIAUgBQA8gHBHAoQBGAnA7gTQASgHAOgKIgKBDIgaAFQhZAVhrA+QhpA/g9BEIgZAfg"
      );
    this.shape_4.setTransform(33.175, 29.6479);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FBBF07")
      .s()
      .p(
        "AiiC+IAagfQA9hEBpg/QBqg+BZgVIAbgFIgEAgIgHABQhYAVhrA+QhpA+g9BEIgNAPgAj9CbIAEgCIgVgIIAJgEQARgIAPgNQAugqgBhPQAAhRAjgzQALgQAPgNQAHgFAXgOIADgCIABgBIAPgGQARgGAUgDQA8gHBHAoQBHAnA7gTQASgHAPgLIAKgKIgDAWIAHgGIgDAZIgFAFIgCABQgOAKgRAHQg8AThGgnQhGgog9AHQgTABgSAIIgTAIQgIAFgHAHQgQANgLAQQgjAyAABQQABBRguAqQgIAIgKAGIgCACg"
      );
    this.shape_5.setTransform(31.525, 28.4229);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAjAzQAWAXgCAhQgCAfgXAXQgIAAgIgBQhDgDgxgsQAAgDAAgDQACghAYgXQAZgXAgAAQANAAAKAEQAJgKABgHQAEgTgDgOQgFgOgPgbQgRgbALghQALghAXgGQAWgGAVAJQAVAIALAZQAIAQgDAPQgRAcgQgcQABgEAAgDQABgLgHgJQgIgJgKgEQgLgEgKAIQgKAJgBANQgCANARAbQADAEACAFQACAEACADQAIASACARQADAWgJARQgIASgDAFIAAAAQABACACABg"
      );
    this.shape_6.setTransform(73.0309, 120.6326, 1, 1, 33.2303);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#2E4573")
      .s()
      .p(
        "Ag8BfIAOgNIAJgIQAIgJACgIQAEgUgEgNQgEgOgRgaQgRgbAMgiQAMghAWgFQAVgGAWAIQAUAJAMAYQAHAQgDAPQgQAdgRgdIACgHQAAgLgHgIQgHgKgKgEQgKgEgKAIQgLAJgBANQgBAOAQAaIAGAKIAEAHQAHAQACARQACAXgIASIgKAWIAAABQgEAGgRAVIgGABQgUAAgEgYg"
      );
    this.shape_7.setTransform(78.883, 119.4097, 1, 1, 33.2303);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#E9F1F8")
      .s()
      .p(
        "AgUATQgEgEADgJQADgIAJgIQAIgIAIgDQAJgCAFAEQAEAFgDAJQgDAIgJAIQgIAIgIACIgGACQgFAAgDgEg"
      );
    this.shape_8.setTransform(64.1999, 124.0055, 1, 1, 33.2303);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#4D6B7D")
      .s()
      .p(
        "AAmBCQhDgDgxgsIAAgGQACggAYgXQAZgXAfgBQANABALADIgIAIIgPANQAFAbAZgEQASgVADgGIADADQAWAXgCAgQgCAegXAYIgQgBgAgXgnQgJAEgIAHQgJAJgDAIQgDAJAEAEQAFAEAJgCQAJgDAIgHQAJgIADgJQADgIgEgGQgDgCgFAAIgGAAg"
      );
    this.shape_9.setTransform(65.8163, 127.2024, 1, 1, 33.2303);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.pirate,
    new cjs.Rectangle(3.4, 7.3, 85.69999999999999, 129.39999999999998),
    null
  );
  (lib.parrot = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AjBAHQALACALgBQCrgSCXAEQAbADAPgD");
    this.shape.setTransform(26.7, 43.946);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AFyALQgEgCgEgCQhIgdAthDQgCgBgBgBQg3gegEg4QgCgdASgMQAJgHAOgBQAXgEAOgdQARgggBgbQgRgugmgmQhGhGhiAAQgOAAgMACQhSAIg7A8Qg8A7gIBRQgCAOAAAOQAABeBABEQAiAmgfAHQAIAJAGAKQABgHABgHAFyALQAAAAAAABQgEAigTAGQgSAGgXgaQgBgBAAgBQABAPgBAOQgEAigTAGQgSAGgXgaQgIgKgHgMQgDATgHAQQgOAfgTAAQgUAAgNgfQgJgUgDgYQgJARgLAOQgXAagSgGQgTgGgEgiQgBgQACgTQgDAEgDAEQgSAUgPABQANAjAFArAHhB2QgRgggbgcQgfgegkgRAHhB2QAFAMAFAeQAEAegYARQgYARghgYQgCgBgFgPQgBATgDAJQgPAngYABQgXABgSglQgBgCAAgBQgEATgFAQQgPAmgYABQgXABgSglQgHgOgEgQQgKAUgMARQgaAggXgGQgWgGgGgpQgEgZAEgdQgQARgSANQgiAXgTgNQgJgFgDgKQgXAqhAAHQhjAOhzgOQhggOAChTQAIhtA5hEQgagGgVgcQgagkgBgBQgTgTgbAAQgbAAgTATQgSARgJAuQgKAtALA9QAPBQAbBAQBeDACgAeQDnAqD6gaQCegZAshwQAYgvAAg4QAAg6gYgvgAAiCDQAAAAAAgBQAAAAAAABIAAAAQABAKAAAJQABAigMAYAgOgIQASAbAMAi"
      );
    this.shape_1.setTransform(50.3232, 47.1425, 1.3911, 1.3936);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(1.5, 1, 1)
      .p(
        "AAtAAQAAACAAABQAAAYgNARQgNARgTAAQgSAAgNgRQgNgTAAgZQAAgBAAgBQAAgYANgRQANgRASAAQATAAANARQANATAAAYg"
      );
    this.shape_2.setTransform(87.8417, 2.2936, 1.3911, 1.3936);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("rgba(0,51,204,0.976)")
      .s()
      .p(
        "AjKEIQiggehei/QgbhAgPhPQgLg9AKguQAJguASgSQATgTAbAAQAbAAATATIAbAmQAVAbAaAGQg5BFgIBuQgCBSBgANQBzAOBjgNQBAgHAXgrQADAKAJAGQATAMAigXQASgNAQgRQgEAeAEAZQAGApAWAGQAXAGAaghQAMgQAKgUQAEAQAHAOQASAlAXgCQAYgBAPgmQAFgQAEgSIABADQASAlAXgCQAYgBAPgmQADgKABgSQAFAPACABQAhAYAYgRQAYgRgEgdQgFgegFgNQAYAwAAA4QAAA5gYAvQgsBwieAZQhfAKhbAAQiWAAiRgbg"
      );
    this.shape_3.setTransform(50.3232, 72.5411, 1.3911, 1.3936);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("rgba(255,204,0,0.976)")
      .s()
      .p(
        "AgUBmQgHgOgEgQQgKAUgMARQgaAggXgGQgWgGgGgpQgEgZAEgdQgQARgSANQgiAXgTgNQgJgFgDgKQAMgYgBgiIgBgSIAAgBIAAABQgFgrgNgjQAPgBASgUIAGgIQgCATABAQQAEAiATAGQASAGAXgaQALgOAJgRQADAYAJAUQANAfAUAAQATAAAOgfQAHgQADgTQAHAMAIAKQAWAaASgGQATgGAEgiQABgOgBgPIABACQAXAaASgGQATgGAEgiIAAgBQAkARAfAeQAbAcARAgQAFAMAFAdQAEAegYARQgYARghgYQgCgBgFgPQgBATgDAJQgPAngYABQgXABgSglIgBgDQgEATgFAQQgPAmgYABIgBAAQgWAAgRgkg"
      );
    this.shape_4.setTransform(85.6216, 67.8673, 1.3911, 1.3936);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("rgba(255,0,0,0.976)")
      .s()
      .p(
        "AhmEuIAAgCIAAACgAANEGQgJgTgDgZQgIASgLAOQgXAagSgGQgTgGgEgiQgBgQACgTIgGAIQgSAUgPABQgMgigTgcIACgOIgCAOQgGgKgIgJQAggHgjgmQhAhEAAhdQAAgPACgNQAIhRA8g8QA8g8BSgHQAMgCANAAQBiAABGBFQAmAnARAuQABAbgRAfQgOAdgXAFQgOABgJAHQgSAMACAcQAEA3A3AfIADACQgtBCBIAfIAIADIAAABQgEAigTAHQgSAFgXgZIgBgDQABAQgBAOQgEAigTAGQgSAGgXgaQgIgKgHgMQgDASgHAQQgOAggTAAQgUAAgNgggABljCQgNASAAAXIAAADQAAAaANARQANASATAAQATAAANgSQAMgRABgXIAAgDQAAgZgNgTQgNgRgTAAQgTAAgNARg"
      );
    this.shape_5.setTransform(69.3747, 23.3372, 1.3911, 1.3936);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
          ],
        })
        .wait(1)
    );
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AgIBKQA/gRAngdQApgcAdgrQAdgqgyAAQgzAAhRBJQhRBIg2gKQg2gKAEATQADATAyAGQAxAGBAgQg"
      );
    this.shape_6.setTransform(
      38.9076,
      11.9536,
      1.392,
      1.3925,
      0,
      -38.8892,
      -38.9886
    );
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("rgba(6,55,202,0.976)")
      .s()
      .p(
        "Ah4BUQgzgGgCgTQgFgTA2AKQA2AKBRhIQBShJAyAAQAyAAgdAqQgdArgpAcQgnAdg/ARQguAMgnAAQgOAAgNgCg"
      );
    this.shape_7.setTransform(
      38.9076,
      11.9536,
      1.392,
      1.3925,
      0,
      -38.8892,
      -38.9886
    );
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ABKAdQgsAwgsAVQgtAWgzAGQgzAGAYgsQAXgtBngmQBmglARg0QARg0AOAMQAPAMgSAvQgSAugsAwg"
      );
    this.shape_8.setTransform(
      31.7075,
      5.3869,
      1.3933,
      1.3912,
      0,
      -76.6855,
      103.2695
    );
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("rgba(6,55,202,0.976)")
      .s()
      .p(
        "AiJBYQAXgtBngmQBmglARg0QARg0AOAMQAPAMgSAvQgSAugsAwQgsAwgsAVQgtAWgzAGIgKABQgmAAAVgng"
      );
    this.shape_9.setTransform(
      31.7075,
      5.3869,
      1.3933,
      1.3912,
      0,
      -76.6855,
      103.2695
    );
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ABKAdQgsAwgsAVQgtAWgzAGQgzAGAYgsQAXgtBngmQBmglARg0QARg0AOAMQAPAMgSAvQgSAugsAwg"
      );
    this.shape_10.setTransform(
      32.3135,
      -8.1652,
      1.3929,
      1.3916,
      0,
      -60.1162,
      119.7963
    );
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("rgba(6,55,202,0.976)")
      .s()
      .p(
        "AiJBYQAXgtBngmQBmglARg0QARg0AOAMQAPAMgSAvQgSAugsAwQgsAwgsAVQgtAWgzAGIgKABQgmAAAVgng"
      );
    this.shape_11.setTransform(
      32.3135,
      -8.1652,
      1.3929,
      1.3916,
      0,
      -60.1162,
      119.7963
    );
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.parrot,
    new cjs.Rectangle(-20.9, -19.8, 142.5, 133.9),
    null
  );
  (lib.panda = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgeBOQgpgsADguQADgvAigfQAggeAeABQAeABAGAkQAGAlgVAzQgVA0APAfQAPAggaAAQgaAAgngrg"
      );
    this.shape.setTransform(57.2365, -14.4667, 1.4161, 1.4161);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(1.5, 1, 1)
      .p(
        "ABLA6IAAABQgSAYgbAAQgbAAgRgYQgTgaAAgjQAAgCAAgBQABgiASgZQARgYAbAAQAbAAASAYIAAAAQASAaAAAkQAAACAAABQAAAhgSAYQAAAOgMAQQgbAjgmAAQgkAAgbgjQgbgkAAgzQAAgDAAgCQAAgwAbgkQAbgiAkAAQAmAAAbAiQAJAMADAM"
      );
    this.shape_1.setTransform(86, 2.325);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AHKgfQgWgmAng5QgDgCgCgBQhOgrgFhQQgDgpAZgRQANgJAUgCQAggGAVgpQAXgtgBgmQgZhCg1g1QhjhjiLAAQiMAAhhBjQhjBiAACMQAACFBaBgQALALAGAKQDXDIEPiVQAPAZAnAQQA6AYAxAwQBgBgAACJQAABQghBDQg/CejgAkQliAklHg8QjjgqiFkPQgnhcgUhwQgQhXAOhAQANhBAZgZQAbgbAmAAQAmAAAbAbQACACAlAzQAdAnAlAJQALACALgBQCugUCaAFQAbADARgDQBPBgALCbQADCIiOAQQiNATiigUQiIgTADh1QAKibBRhhAgognQAkgHgYgk"
      );
    this.shape_2.setTransform(50.6858, 47.6035);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AkeJKQjjgriFkPQgnhbgUhxQgQhVAOhBQANhBAZgZQAbgbAmAAQAmAAAbAbIAnA1QAdAnAlAIQhRBhgKCbQgDB2CIATQCiAUCNgTQCOgQgDiIQgLibhPhhQAkgHgYgkQDXDJEPiVQAPAYAnARQA6AZAxAvQBgBgAACJQAABQghBCQg/CfjgAjQiGAOiBAAQjWAAjMglgAEfmaQgbglAAgzIAAgGQABgwAagjQAbgjAlAAQAmAAAbAjQAJAMADALQgSgYgbAAQgaAAgTAZQgSAYgBAiIAAAEQAAAkATAZQATAZAaAAQAbAAASgZIABgBQgBAPgMAQQgbAjgmAAQglAAgbgjg"
      );
    this.shape_3.setTransform(50.6858, 52.2785);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AjaDrQgHgJgKgMQhahgAAiEQAAiLBihjQBjhiCKAAQCMAABiBiQA2A2AYBCQABAlgXAuQgUApghAFQgUADgNAIQgYARACApQAFBPBOArIAFADQgnA5AWAnQhzBAhqAAQiNAAh7h0gABhjeQgbAjAAAwIAAAGQAAAzAbAlQAbAjAkAAQAnAAAbgjQAMgQAAgPQARgYABghIAAgDQAAglgSgZIAAgBQgEgLgIgMQgbgjgnAAQgkAAgbAjg"
      );
    this.shape_4.setTransform(69.7271, 15.7506);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
          ],
        })
        .wait(1)
    );
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AgeBOQgpgsADguQADgvAigfQAggeAeABQAeABAGAkQAGAlgVAzQgVA0APAfQAPAggaAAQgaAAgngrg"
      );
    this.shape_5.setTransform(71.4365, -14.4667, 1.4161, 1.4161);
    this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.panda,
    new cjs.Rectangle(-21.8, -31.5, 145, 147.1),
    null
  );
  (lib.otherbg = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(4, 1, 1)
      .p(
        "Ac8krQB2ADBWBVQBYBYAAB7QAAB8hYBYQhWBWh2ACMg52AAAQh3gChWhWQhYhYAAh8QAAh7BYhYQBWhVB3gDg"
      );
    this.shape.setTransform(214.35, 30);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "A86EsQh3gDhVhVQhZhYAAh8QAAh7BZhYQBVhVB3gDMA52AAAQB2ADBWBVQBXBYAAB7QAAB8hXBYQhWBVh2ADg"
      );
    this.shape_1.setTransform(214.35, 30);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.otherbg,
    new cjs.Rectangle(-2, -2, 432.7, 64),
    null
  );
  (lib.os_ticklock = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#999999").s().p("AhUAAIAhgiIAjAiIBDhFIAiAjIhmBog");
    this.shape.setTransform(8.5, 7);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_ticklock,
    new cjs.Rectangle(0, 0, 17, 14),
    null
  );
  (lib.os_tick = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#66CC00").s().p("AhWAAIAjgiIAjAiIBEhEIAjAiIhoBng");
    this.shape.setTransform(8.4777, 7.0133, 0.9798, 1.0108);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_tick,
    new cjs.Rectangle(0, 0, 17, 14),
    null
  );
  (lib.os_Symbol59 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FF3333")
      .s()
      .p(
        "ApfEQQivAAgBivIAAjBQABivCvAAITAAAQAgAAAaAGQB0AaAACPIAADBQAACPh0AaQgaAGggAAgABHCPIBIhIIhIhHIBIhHIhHhHIhIBHIhGhHIhIBIIBHBGIhHBHIBHBIIBHhIg"
      );
    this.shape.setTransform(91.15, 230.325);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#33CC66")
      .s()
      .p(
        "ApiEQQgfAAgZgFQh3gaAAiQIAAjBQAAiQB3gaQAZgFAfAAITFAAQCvAAAACvIAADBQAACvivAAgAiKAAICOCOIDVjVIhHhHIiOCOIhGhHg"
      );
    this.shape_1.setTransform(258.025, 230.325);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#CCCCCC")
      .s()
      .p(
        "AtCREIhIBIIhHhIIBHhHIhHhHIBIhIIBHBHIBIhHIBHBHIhIBIIBIBHIhIBIgAK3P8IBHhHIBHBHICOiOIBHBHIjVDWgAyNpqIhQAAIjGAAQivAAAAivIAAjDQAAivCvAAIDGAAIAAABIBQgBMAoxAAAQCvAAAACvIAADDQAACvivAAg"
      );
    this.shape_2.setTransform(174.7, 128.225);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#CCCCCC")
      .s()
      .p(
        "A3yVHQjdAAAAjdMAAAgjTQAAjdDdAAMAvmAAAQDcAAAADdMAAAAjTQAADdjcAAgACpKuQh3AZAACQIAADDQAACQB3AZQAZAGAfAAITGAAQCvAAAAivIAAjDQAAivivAAIzGAAQgfAAgZAGgA5PNXIAADDQAACvCvAAITBAAQAgAAAbgGQB0gbAAiOIAAjDQAAiOh0gbQgbgGggAAIzBAAQivAAAACvgA5PwgIAADCQAACvCvAAIDGAAIBQAAMAoxAAAQCvAAAAivIAAjCQAAivivAAMgoxAAAIhQAAIAAAAIjGAAQivAAAACvg"
      );
    this.shape_3.setTransform(174.425, 135.075);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_Symbol59,
    new cjs.Rectangle(0, 0, 348.9, 270.2),
    null
  );
  (lib.os_Symbol58__vol_bar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#868686")
      .s()
      .p("ADXDhIAAnBIAUAAIAAHBgAjqDhIAAnBIAUAAIAAHBg");
    this.shape.setTransform(67.5, 22.5);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p("ADrDhIAAnBIG4AAIAAHBgAjWDhIAAnBIGtAAIAAHBgAqiDhIAAnBIG4AAIAAHBg");
    this.shape_1.setTransform(67.5, 22.5);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_Symbol58__vol_bar,
    new cjs.Rectangle(0, 0, 135, 45),
    null
  );
  (lib.os_Symbol57__vol_bar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(255,255,255,0.988)")
      .s()
      .p(
        "AgQCeIgDAAIgEgFQgFgHgMgfIgNgFQglARgGAAIgCAAIgbgaIgCgEQgBgCACgDQACgJANgeIgFgNQgfgLgIgEQgEgCgBgCIgBgDIAAghIABgEIAFgDQAHgFAfgMIAGgNQgOgdgDgIIAAgHIACgCIAagaIADAAQAGAAAlAPIAOgFQALgeAFgIIAEgFIADgBIAhAAIADABIAFAFQAEAIAMAeIAOAFQAkgQAGAAIADAAIAbAZIACAEQAAABgBAEQgCAJgOAeIAGAMQAfAMAIAEIAFAEIABAEIAAAgIgBAEIgFADQgIAFgfAMIgFANQAOAdACAJIABAFIgCAEIgaAZIgEABQgGAAglgQIgNAFQgMAegEAIIgEAFIgEAAgAgngmQgRAQAAAWQAAAXARAQQARARAWAAQAXAAARgRQAQgQAAgXQAAgWgQgQQgRgQgXgBQgWABgRAQg"
      );
    this.shape.setTransform(16.175, 15.85);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_Symbol57__vol_bar,
    new cjs.Rectangle(0, 0, 32.4, 31.7),
    null
  );
  (lib.os_Symbol56__vol_bar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(250,250,250,0.98)")
      .s()
      .p("AAAAUIgtAuIgUgUIAtguIgtgtIAUgUIAtAtIAtgtIAVAUIguAtIAuAuIgVAUg");
    this.shape.setTransform(6.625, 6.6);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_Symbol56__vol_bar,
    new cjs.Rectangle(0, 0, 13.3, 13.2),
    null
  );
  (lib.os_Symbol54__vol_bar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgYBrQgHgHgCgJIBCAAQgCAJgHAHQgKAKgOAAQgNAAgLgKgABABSIh+AAQgLABgHgGIgFgEQgFgLAJgPQATgeAAglQAAgSAOgTIAJgKIAIgFIAAgNQAAgMAJgKQAKgJAMAAQANAAAJAJQAJAJABANIgBAMIAJAGQAFAFAEAFQAOATAAASQAAAlAUAeQAJAPgGALIgEAEQgHAFgKAAIgBAAgAARhOIAAgEIAAgCIAAgBQAAgGgFgFQgFgFgHAAQgGAAgFAFQgFAFAAAHIAAAGQAIgCAIAAQAJAAAIACg"
      );
    this.shape.setTransform(8.7907, 11.725);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_Symbol54__vol_bar,
    new cjs.Rectangle(0, 0, 17.6, 23.5),
    null
  );
  (lib.os_Symbol53__vol_bar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(250,250,250,0.98)")
      .s()
      .p("AAAAUIgtAuIgUgUIAtguIgtgtIAUgUIAtAtIAtgtIAVAUIguAtIAuAuIgVAUg");
    this.shape.setTransform(6.625, 6.6);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_Symbol53__vol_bar,
    new cjs.Rectangle(0, 0, 13.3, 13.2),
    null
  );
  (lib.os_Symbol51__vol_bar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAiBdQgMgJAAgNQAAgNAMgJQALgKARAAQAJAAAIAEIAAhgIhkAAIAAB8QAAANgMAJQgLAKgRAAQgQAAgMgKQgMgJAAgNQAAgNAMgJQAMgKAQAAQAJAAAIAEIAAiRICSAAIAACtQAAANgMAJQgMAKgQAAQgRAAgLgKgAgVhAIBkAAIAAgSIhkAAg"
      );
    this.shape.setTransform(10.2, 10.3);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_Symbol51__vol_bar,
    new cjs.Rectangle(0, 0, 20.4, 20.6),
    null
  );
  (lib.os_Symbol50 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(4, 0, 1)
      .p(
        "AlhlOILEAAQCRAAAACSIAAADIAAD4QAACSiRAAIjmAAIgyAyIhLBMIhKhMIgygyIjlAAQh4AAgWhjQgEgVAAgaIAAj7QAAiSCSAAg"
      );
    this.shape.setTransform(50, 33.45);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhKEDIgygyIjlAAQh4ABgWhkQgEgVAAgaIAAj7QAAiRCSgBILDAAQCSABAACRIAAADIAAD4QAACSiSAAIjlAAIgyAyIhLBLg"
      );
    this.shape_1.setTransform(50, 33.45);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("rgba(0,0,0,0.498)")
      .s()
      .p(
        "ABHDfIAxgyIDmAAQCRAAAAiSIAAj5QAFAWAAAZIAAD8QAACSiSAAgAlhDfQiSAAAAiSIAAgDQAVBjB4AAIDmAAIAxAyg"
      );
    this.shape_2.setTransform(50.45, 37.0875);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_Symbol50,
    new cjs.Rectangle(-2, -2, 104, 70.9),
    null
  );
  (lib.os_Symbol49 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#66CC00")
      .s()
      .p(
        "AiuCyIgCgBQhJhKAAhnQAAhaA4hDIARgTQBKhJBmAAQBnAABKBJIARATQA4BDAABaQAABnhJBKIgCABQhJBIhmAAQhmAAhIhIg"
      );
    this.shape.setTransform(25, 25);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_Symbol49,
    new cjs.Rectangle(0, 0, 50, 50),
    null
  );
  (lib.os_Symbol47 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "Ah7ErQgEAAgCgDIhHhMIgxAAIAAgeIA3AAIAFABQADACADACIBBBEIBEhFQAEgEAHAAICEAAQB8gEADh8IAAjFQAAiDiDgDIgEAAIlOAAIAAgeIFWAAQCZAEAECZIAADNQgDCbieACIgEAAIh3AAIhLBMQgDADgDAAIgEABIgEgBg"
      );
    this.shape.setTransform(25, 30);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AiyDWQgNgOgWgBIgaAAIAAnfIFOAAIAEAAQCNACAACOIAADGQgDCFiGAEIh3AAQgKABgLALIhHBGg"
      );
    this.shape_1.setTransform(24, 30.1);
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_Symbol47,
    new cjs.Rectangle(0, 0, 50, 60),
    null
  );
  (lib.os_Symbol46 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p("AhFEEIAAgeICLAAIAAAegAhFjlIAAgeICLAAIAAAeg");
    this.shape.setTransform(7, 26);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AhFDwIAAnfICLAAIAAHfg");
    this.shape_1.setTransform(7, 25.975);
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_Symbol46,
    new cjs.Rectangle(0, 0, 14, 52),
    null
  );
  (lib.os_Symbol45 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "ABREEQiigCgDibIAAjNQADiZCfgEIAHAAIAAAeIgEAAQiGADAACDIAADFQADB8CAAEIAHAAIAAAeIgEAAg"
      );
    this.shape.setTransform(8.5, 26);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p("ABCDwQiKgDgDiHIAAjFQAAiOCRgCIAEAAIACAAIAAHfg");
    this.shape_1.setTransform(9.425, 25.95);
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_Symbol45,
    new cjs.Rectangle(0, 0, 17, 52),
    null
  );
  (lib.os_saveListCover = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(249,249,249,0.949)")
      .s()
      .p("EhKTAqUMAAAhUnMCUnAAAMAAABUng");
    this.shape.setTransform(475.6, 270.75);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 951.2, 541.5);
  (lib.os_premiumBlock = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.info = new cjs.Text("Premium Users Only!", "17px 'Arial'", "#FFFFFF");
    this.info.name = "info";
    this.info.textAlign = "center";
    this.info.lineHeight = 21;
    this.info.lineWidth = 254;
    this.info.parent = this;
    this.info.setTransform(128.85, 15.65);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag0BSQgDAAgDgDQgCgCAAgEIAAhIQAAgCACgDQADgDADAAIAHAAIAAgfQABgRANgNQAOgNARAAQATAAANANQAMANABARIAAAfIAHAAQAFAAACADQACADAAACIAABIQAAAEgCACQgCADgFAAgAgIAVQgEAEAAAFQAAAGAEADIACACIAAAAIABAAIAAACIAAAAIgDAPIAAABIABACIACABIAKAAIADgBIAAgCIAAgBIgDgPIAAAAIABgCIAAAAIADgCQADgDABgGQgBgFgDgEQgEgEgFAAQgFAAgDAEgAgSg2QgIAHAAALIAAAdIA0AAIAAgaIAAgCIAAgDQAAgJgHgHQgIgIgLAAQgKAAgIAIg"
      );
    this.shape.setTransform(19.7, 23.775);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape }, { t: this.info }] })
        .wait(1)
    );
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#7FCC37")
      .s()
      .p(
        "Aw6CWQg8gBgqgrQgsgsAAg+QAAg9AsgsQAqgqA8gCMAh2AAAQA7ACAqAqQAsAsAAA9QAAA+gsAsQgqArg7ABg"
      );
    this.shape_1.setTransform(126.9, 24.45);
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_premiumBlock,
    new cjs.Rectangle(0, 9.5, 257.7, 30),
    null
  );
  (lib.os_mn4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#303030")
      .ss(3, 1, 1)
      .p("AHeCvIAAldQAAgygyAAItXAAQgyAAAAAyIAAFdQAAAyAyAAINXAAQAyAAAAgyg");
    this.shape.setTransform(47.8, 22.525);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#66CC00")
      .s()
      .p("AmrDhQgyAAAAgyIAAldQAAgyAyAAINXAAQAyAAAAAyIAAFdQAAAygyAAg");
    this.shape_1.setTransform(47.8, 22.525);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#303030")
      .ss(3, 1, 1)
      .p("AndCvIAAldQAAgyAyAAINXAAQAyAAAAAyIAAFdQAAAygyAAItXAAQgyAAAAgyg");
    this.shape_2.setTransform(47.8, 22.525);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#60C000")
      .s()
      .p("AmrDhQgyAAAAgyIAAldQAAgyAyAAINXAAQAyAAAAAyIAAFdQAAAygyAAg");
    this.shape_3.setTransform(47.8, 22.525);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }] }, 1)
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1.5, -1.5, 98.6, 48.1);
  (lib.os_mn3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#303030")
      .ss(3, 1, 1)
      .p("AHeCvIAAldQAAgygyAAItXAAQgyAAAAAyIAAFdQAAAyAyAAINXAAQAyAAAAgyg");
    this.shape.setTransform(47.8, 22.525);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#B6B6B6")
      .s()
      .p("AmrDhQgyAAAAgyIAAldQAAgyAyAAINXAAQAyAAAAAyIAAFdQAAAygyAAg");
    this.shape_1.setTransform(47.8, 22.525);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#A9A9A9")
      .s()
      .p("AmrDhQgyAAAAgyIAAldQAAgyAyAAINXAAQAyAAAAAyIAAFdQAAAygyAAg");
    this.shape_2.setTransform(47.8, 22.525);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .to({ state: [{ t: this.shape_2 }, { t: this.shape }] }, 1)
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1.5, -1.5, 98.6, 48.1);
  (lib.os_mn2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#303030")
      .ss(3, 1, 1)
      .p("AkkjgIJJAAQA5AAAAA5IAAFPQAAA5g5AAIpJAAQg5AAAAg5IAAlPQAAg5A5AAg");
    this.shape.setTransform(34.95, 22.525);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#66CC00")
      .s()
      .p("AkkDhQg5AAAAg5IAAlPQAAg5A5AAIJJAAQA5AAAAA5IAAFPQAAA5g5AAg");
    this.shape_1.setTransform(34.95, 22.525);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#60C000")
      .s()
      .p("AkkDhQg5AAAAg5IAAlPQAAg5A5AAIJJAAQA5AAAAA5IAAFPQAAA5g5AAg");
    this.shape_2.setTransform(34.95, 22.5);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_1 }, { t: this.shape, p: { y: 22.525 } }],
        })
        .to(
          { state: [{ t: this.shape_2 }, { t: this.shape, p: { y: 22.5 } }] },
          1
        )
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1.5, -1.5, 73, 48.1);
  (lib.os_mc_update = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#7FCC37").s().p("Ar7C7IAAl1IX3AAIAAF1g");
    this.shape.setTransform(76.425, 18.675);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_mc_update,
    new cjs.Rectangle(0, 0, 152.9, 37.4),
    null
  );
  (lib.os_mc_save = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#7FCC37")
      .s()
      .p(
        "ArtC7IAAl1IU6AAIANABQA6AHAqAvQAQATAMAXQAUAoAAAxQAAAzgUAoQgMAWgQATQgbAfghANQgYALgdAAg"
      );
    this.shape.setTransform(75, 18.625);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_mc_save,
    new cjs.Rectangle(0, -0.1, 150, 37.5),
    null
  );
  (lib.os_mc_delete = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#CC3B3B")
      .s()
      .p(
        "AkyC7QgcAAgZgLQghgNgagfQgRgTgLgWQgVgoAAgzQAAgxAVgpQALgWARgTQAvg1BBgCIMFAAIAAF1g"
      );
    this.shape.setTransform(44.7, 19.725);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_mc_delete,
    new cjs.Rectangle(-2, 1, 93.5, 37.5),
    null
  );
  (lib.os_lock = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhOB6QgEAAgEgEQgEgDAAgGIAAhrQAAgEAEgFQAEgDAEAAIAMAAIAAguQABgaATgTQAUgUAaAAQAcAAAUAUQASATACAaIAAAuIAKAAQAGAAADADQAEAFAAAEIAABrQAAAGgEADQgDAEgGAAgAgMAgQgGAFAAAIQAAAIAGAEIACADIABAAIAAABIABACIAAABIgEAWIAAACIABADQAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAIARAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAIABgDIAAgCIgFgWIAAgBIABgCIABgBIADgDQAGgEAAgIQAAgIgGgFQgGgGgHAAQgIAAgEAGgAgahRQgNALAAAQIAAAsIBOAAIAAgoIAAgDIAAgDQAAgPgLgKQgLgMgRAAQgPAAgLAMg"
      );
    this.shape.setTransform(9.125, 12.225);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_lock,
    new cjs.Rectangle(0, 0, 18.3, 24.5),
    null
  );
  (lib.os_editListButton = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#303030")
      .ss(3, 1, 1)
      .p(
        "EAi9AAAQAABohKBJQAAABgBAAQhGBGhjACMg+RAAAQhigChHhGQgBAAgBgBQhJhJAAhoQAAhaA4hDQAIgKAJgJQBIhHBkgCMA+QAAAQBkACBGBHQAKAJAIAKQA4BDAABag"
      );
    this.shape.setTransform(223.675, 25);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#66CC00")
      .s()
      .p(
        "A/ID6QhigChHhGIgCgBQhJhKAAhnQAAhaA4hDIARgTQBIhHBkgCMA+QAAAQBkACBGBHIASATQA4BDAABaQAABnhKBKIgBABQhGBGhjACg"
      );
    this.shape_1.setTransform(223.675, 25);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_editListButton,
    new cjs.Rectangle(-1.5, -1.5, 450.4, 53),
    null
  );
  (lib.os_dragBarCover = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AyQHGQh/AAgDh8IAAi4IrJAAQh3gDhVhVQhYhXAAh8QAAh8BYhYQBVhVB3gDMA+3AAAQB3ADBVBVQBYBYAAB8QAAB8hYBXQhVBVh3ADIrQAAIAACyQAACCiCAAg"
      );
    this.shape.setTransform(230.425, 45.4);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_dragBarCover,
    new cjs.Rectangle(0, 0, 460.9, 90.8),
    null
  );
  (lib.os_dragBarBG3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#B3B3B3")
      .s()
      .p(
        "Az1AyQgUAAgPgPQgPgOAAgVQAAgUAPgOQAPgPAUAAMAnrAAAQAUAAAPAPQAPAOAAAUQAAAVgPAOQgPAPgUAAg"
      );
    this.shape.setTransform(131.975, 0);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_dragBarBG3,
    new cjs.Rectangle(0, -5, 264, 10),
    null
  );
  (lib.os_dragBarBG2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#B3B3B3")
      .s()
      .p("At5AyIAAhjIbCAAQAUAAAPAPQAOAOAAAUQAAAVgOAOQgPAPgUAAg");
    this.shape.setTransform(172.9, 0);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#B3B3B3")
      .s()
      .p("Ap9AyQgVAAgOgPQgPgOAAgVQAAgUAPgOQAOgPAVAAIUtAAIAABjg");
    this.shape_1.setTransform(68.8, 0);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_dragBarBG2,
    new cjs.Rectangle(0, -5, 262, 10),
    null
  );
  (lib.os_dragBarBG = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#B3B3B3")
      .s()
      .p(
        "A+dAyQgVAAgOgPQgPgOAAgVQAAgUAPgOQAOgPAVAAMA87AAAQAUAAAPAPQAPAOAAAUQAAAVgPAOQgPAPgUAAg"
      );
    this.shape.setTransform(200, 0);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_dragBarBG,
    new cjs.Rectangle(0, -5, 400, 10),
    null
  );
  (lib.os_cross = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#CA0000")
      .s()
      .p("AAAA1Ig0A0Ig0g0IA0g1Ig0g0IA0g0IA0A0IA1g0IA0A0Ig0A0IA0A0Ig0A1g");
    this.shape.setTransform(7.9999, 7.9999, 0.7601, 0.7601);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_cross,
    new cjs.Rectangle(0, 0, 16, 16),
    null
  );
  (lib.os_additional_controls = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#9FA0B0")
      .s()
      .p(
        "ABUGaIAHgHQAjgjAAgwQAAgxgjgiIgJgIIAQgTIAMAKQAqAqAAA7QAAA7gqAqIgJAIgAhYGkQgHgHgCgJIBDAAQgCAJgHAHQgKAKgOAAQgOAAgLgKgAAAGLIh+AAQgLABgHgGIgFgEQgFgLAJgPQATgeAAgmQAAgSAOgTIAJgKIAIgFIAAgNQAAgMAJgKQAKgJANAAQANAAAJAJQAJAJABANIgBAMIAJAGQAFAFAEAFQAOATAAASQAAAmATAeQAJAPgGALIgEAEQgHAFgJAAIgCAAgAguDqIAAgEIAAgCIAAgBQAAgGgFgFQgFgFgHAAQgHAAgFAFQgFAFAAAHIAAAGQAIgCAJAAQAJAAAIACgAAzFxIADgDQAUgUAAgbQAAgcgUgTIgEgEIAQgUIAHAGQAaAbAAAmQAAAmgaAbIgGAFgAAahyQgGgEgEgFQgDgGAAgGQAAgDACgCQACgCADAAQADAAACACIADAFIAEAHIAFAEQAEACAFAAQAIAAAFgEQAFgDAAgGQAAgEgDgDQgCgCgFgCIgLgDQgJgCgGgDQgGgDgEgFQgEgFAAgHQAAgHAEgGQAEgFAHgDQAIgDAKAAQAHAAAGACQAGACAEADQAEADABAEQACADAAAEQAAADgCACQgCADgEAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgDgEQgDgFgDgDQgDgDgIAAQgGAAgEADQgFADAAAEQAAABAAAAQAAABABABQAAAAAAABQAAAAABABIAEADIAFACIAIACIANAEQAGACAEADQAEADADAFQACAEAAAGQAAAIgEAGQgEAHgIADQgIAEgKAAQgNAAgIgFgAg1hyQgGgEgEgFQgDgGAAgGQAAgDACgCQACgCADAAQADAAACACIADAFIAEAHIAFAEQAEACAFAAQAIAAAFgEQAFgDAAgGQAAgEgDgDQgCgCgFgCIgLgDQgJgCgGgDQgGgDgEgFQgEgFAAgHQAAgHAEgGQAEgFAHgDQAIgDAKAAQAHAAAGACQAGACAEADQAEADABAEQACADAAAEQAAADgCACQgCADgEAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgDgEQgDgFgDgDQgDgDgIAAQgGAAgEADQgFADAAAEQAAABAAAAQAAABABABQAAAAAAABQAAAAABABIAEADIAFACIAIACIANAEQAGACAEADQAEADADAFQABAEAAAGQAAAIgDAGQgEAHgIADQgIAEgKAAQgNAAgIgFgABUjiQgCgCAAgFIAAg7IgOA2IgCAIIgDAFQgDACgEAAQgDAAgCgCIgDgDIgCgEIgBgGIgOg2IAAA7QAAAFgCACQgDADgDAAQgEAAgCgDQgCgCAAgFIAAhEQAAgGADgCQADgCAFAAIAFAAIAHABIADADIADAIIAMAvIANgvIACgIIADgDIAHgBIAGAAQAFAAADACQADACAAAGIAABEQAAAFgCACQgDADgDAAQgEAAgCgDgAgPjiQgCgCAAgFIAAg7IgOA2IgCAIIgDAFQgDACgEAAQgDAAgCgCIgDgDIgCgEIgBgGIgOg2IAAA7QAAAFgCACQgDADgDAAQgEAAgCgDQgCgCAAgFIAAhEQAAgGADgCQADgCAFAAIAFAAIAHABIADADIADAIIAMAvIANgvIACgIIADgDIAHgBIAGAAQAFAAADACQADACAAAGIAABEQAAAFgCACQgDADgDAAQgEAAgCgDgABJlXQgCgDAAgFIAAgdIgmAAIAAAdQAAAFgCADQgDADgEAAQgEAAgCgDQgCgDAAgFIAAhEQAAgFACgCQACgDAEAAQAEAAADADQACACAAAFIAAAZIAmAAIAAgZQAAgFACgCQACgDAEAAQAEAAADADQACACAAAFIAABEQAAAFgCADQgDADgEAAQgEAAgCgDgAgRlXQgCgDAAgFIAAgdIgmAAIAAAdQAAAFgCADQgDADgEAAQgEAAgCgDQgCgDAAgFIAAhEQAAgFACgCQACgDAEAAQAEAAADADQACACAAAFIAAAZIAmAAIAAgZQAAgFACgCQACgDAEAAQAEAAADADQACACAAAFIAABEQAAAFgCADQgDADgEAAQgEAAgCgDg"
      );
    this.shape.setTransform(25.8207, 54.375);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#DFE2F8")
      .s()
      .p(
        "AjKI7QgzAAAAgyIAAnJQAAgyAzAAIGWAAQAxAAAAAyIAAHJQAAAygxAAgAjKgNQgzAAAAgyIAAnJQAAgyAzAAIGWAAQAxAAAAAyIAAHJQAAAygxAAg"
      );
    this.shape_1.setTransform(25.35, 57.075);
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_additional_controls,
    new cjs.Rectangle(0, 0, 50.7, 114.2),
    null
  );
  (lib.nsloop1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAWBNQgFgBgBgFQgBgEADgDQADgEADgBQAEAAAEACQAFAEAGAAQAHAAAEgFIAEgDQABgEAAgEQAAgGgDgEIgCgCIAAAAQgEgFgHAAQgFAAgDACIgBAAIgDAEIgxAqIgBAAQgIAFgLAAIgBAAQgKAAgJgFIgGgGQgIgJgBgMIgBgEQABgJADgHQACgGAEgFIAGgEQAIgGALAAIABAAQALAAAMAHQACACABAEQABADgCAEQgCAEgFABQgDABgEgDQgGgDgFAAIAAAAQgHAAgEAFIgBACQgEAEAAAGQAAAEADAEIACADQAEAFAHAAQAFAAADgCIAvgpIAGgEIABAAQAIgGALAAQAPAAAKAKIABAAIAHAIQAEAJAAAKIAAABQAAAOgLAKIgBAAQgKALgPAAQgLAAgKgIgAhZAoQgRgQAAgXIABgGQABgTAPgOQAPgQAVgBIAAAAIADAAIAaAAIgMgNQgCgDAAgEQAAgEADgCQAEgDADABQAEAAADADIAXAcQACACAAADIAAABIAAADIgEAEIgVAbQgDADgEAAQgEAAgDgCQgDgDAAgDQAAgEACgCIAMgOIgbAAQgPABgKALIAAgBQgKAKgBANIAAAAIgBAEQAAAQAMALIAAAAQgDAEgCAFQgCAEgBAFIgFgGgABUAcIgDgEQAIgKAAgNQAAgOgKgLIgCgCQgKgKgOgBIgCAAIAAAAIgBAAIgLAAIAAAWIgSAAIAAg+IASAAIAAAWIALAAIABAAIAAAAIACAAIACAAQAUABAOAPIABABQARAQAAAXQAAAXgRAQIgCADQgBgIgDgHg"
      );
    this.shape.setTransform(10.7, 8.4458);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nsloop1,
    new cjs.Rectangle(0, 0, 21.4, 16.9),
    null
  );
  (lib.nsloop0 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAABPIAAgqQgGAGgIACIAAgKQAFgCAFgEQAEgEACgFIAJAAIAAA7gAA2A+IgBAAIgOAAIAAgSIAOAAQAJAAAIgEIAAgBIAHgGQAMgLAAgQQAAgOgKgLIgCgBQgKgKgOgCIgCAAIAAAAIgBAAIgLAAIAAAWIgSAAIAAg9IASAAIAAAVIALAAIABAAIAAAAIACAAIACAAQAUACAOAOIABABQARARAAAWQAAAYgRAQQgFAGgGADIAAAAQgLAGgNABgAg3A+QgNgBgKgGQgGgDgFgGQgRgQAAgYIABgGQABgTAPgOQAPgPAVgCIAAAAIADAAIAaAAIgMgNQgCgDAAgDIAAgBQABgEACgCQAEgCADAAQAEAAADAEIAXAcQACACAAADIAAABIAAACIgEAEIgVAcQgDACgEAAQgEABgDgDQgDgCAAgEQAAgEACgCIAMgOIgbAAQgPACgKAKIAAAAQgKAJgBAMIAAABIgBAEQAAAQAMALIAIAHIAAgBQAGAFALAAIASAAIAAASg"
      );
    this.shape.setTransform(10.7, 7.8958);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nsloop0,
    new cjs.Rectangle(0, 0, 21.4, 15.8),
    null
  );
  (lib.nscircle = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#00CC00")
      .s()
      .p(
        "AhJBKQgegfgBgrQABgrAegeQAegeArgBQArABAfAeQAfAegBArQABArgfAfQgfAfgrgBQgrABgegfg"
      );
    this.shape.setTransform(10.45, 10.45);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nscircle,
    new cjs.Rectangle(0, 0, 20.9, 20.9),
    null
  );
  (lib.nsbgr = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#666666")
      .s()
      .p(
        "ACBB6IgMAAIjpAAIgIAAIgEAAQgzAAgkgkQgjgkAAgyQAAgyAjgkQAhggAtgCIAFgBIECAAIADAAQAyAAAkAjQAkAkAAAyQAAAygkAkQggAhgsADIgKAAg"
      );
    this.shape.setTransform(25.1, 12.2);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nsbgr,
    new cjs.Rectangle(0, 0, 50.2, 24.4),
    null
  );
  (lib.no_hit_button = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#F3F4FF").s().p("EgthAJPIAAydMBbCAAAIAASdg");
    this.shape.setTransform(291.35, 59.075);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.no_hit_button,
    new cjs.Rectangle(0, 0, 582.7, 118.2),
    null
  );
  (lib.nnn19 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#663399")
      .s()
      .p(
        "AkcJ0QjigqiEkOQgnhagUhwQgPhWANg/QANhBAZgZQAbgbAmAAQAmAAAbAbIAmA1QAdAnAkAIQALACAMAAQCsgUCZAEQAbADARgDQAsgJgxg2QhZhgAAiEQAAiLBihhQBhhiCKAAQCLAABiBiQA1A1AYBBQABAmgXAtQgUAoghAGQgTACgNAKQgZAQADApQAFBPBOArIAFACQhABeBlAqQAzAVAsApIAKAKIAJAIQBXBdAACCQAABPghBCQg+CejfAjQiFAOiBAAQjTAAjLglg"
      );
    this.shape.setTransform(71.0108, 66.5071);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nnn19,
    new cjs.Rectangle(0, 0, 142, 133),
    null
  );
  (lib.nnn18 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#663399")
      .s()
      .p(
        "AjKG/QiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATIAbAlQAVAcAaAGQAHABAIAAQB7gOBtADQATACAMgCQAfgHgigmQhAhEAAheQAAhjBGhFQBEhGBjAAQBiAABGBGQAmAmARAuQABAbgRAgQgOAdgXAEQgOABgJAHQgSAMACAdQAEA4A3AeIADACQgtBDBIAdQApARAiAiQBEBEAABhQAAA4gYAvQgsBwieAZQhfAKhbAAQiWAAiRgag"
      );
    this.shape.setTransform(50.4799, 47.2817);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nnn18,
    new cjs.Rectangle(0, 0, 101, 94.6),
    null
  );
  (lib.nnn17 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FF99CC")
      .s()
      .p(
        "AkcJ0QjigqiEkOQgnhagUhwQgPhWANg/QANhBAZgZQAbgbAmAAQAmAAAbAbIAmA1QAdAnAkAIQALACAMAAQCsgUCZAEQAbADARgDQAsgJgxg2QhZhgAAiEQAAiLBihhQBhhiCKAAQCLAABiBiQA1A1AYBBQABAmgXAtQgUAoghAGQgTACgNAKQgZAQADApQAFBPBOArIAFACQhABeBlAqQAzAVAsApIAKAKIAJAIQBXBdAACCQAABPghBCQg+CejfAjQiFAOiBAAQjTAAjLglg"
      );
    this.shape.setTransform(71.0108, 66.5071);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nnn17,
    new cjs.Rectangle(0, 0, 142, 133),
    null
  );
  (lib.nnn16 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FF99CC")
      .s()
      .p(
        "AjKG/QiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATIAbAlQAVAcAaAGQAHABAIAAQB7gOBtADQATACAMgCQAfgHgigmQhAhEAAheQAAhjBGhFQBEhGBjAAQBiAABGBGQAmAmARAuQABAbgRAgQgOAdgXAEQgOABgJAHQgSAMACAdQAEA4A3AeIADACQgtBDBIAdQApARAiAiQBEBEAABhQAAA4gYAvQgsBwieAZQhfAKhbAAQiWAAiRgag"
      );
    this.shape.setTransform(50.4799, 47.2817);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nnn16,
    new cjs.Rectangle(0, 0, 101, 94.6),
    null
  );
  (lib.nnn15 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#D720E0")
      .s()
      .p(
        "AkcJ0QjigqiEkOQgnhagUhwQgPhWANg/QANhBAZgZQAbgbAmAAQAmAAAbAbIAmA1QAdAnAkAIQALACAMAAQCsgUCZAEQAbADARgDQAsgJgxg2QhZhgAAiEQAAiLBihhQBhhiCKAAQCLAABiBiQA1A1AYBBQABAmgXAtQgUAoghAGQgTACgNAKQgZAQADApQAFBPBOArIAFACQhABeBlAqQAzAVAsApIAKAKIAJAIQBXBdAACCQAABPghBCQg+CejfAjQiFAOiBAAQjTAAjLglg"
      );
    this.shape.setTransform(71.0108, 66.5071);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nnn15,
    new cjs.Rectangle(0, 0, 142, 133),
    null
  );
  (lib.nnn14 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#D720E0")
      .s()
      .p(
        "AjKG/QiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATIAbAlQAVAcAaAGQAHABAIAAQB7gOBtADQATACAMgCQAfgHgigmQhAhEAAheQAAhjBGhFQBEhGBjAAQBiAABGBGQAmAmARAuQABAbgRAgQgOAdgXAEQgOABgJAHQgSAMACAdQAEA4A3AeIADACQgtBDBIAdQApARAiAiQBEBEAABhQAAA4gYAvQgsBwieAZQhfAKhbAAQiWAAiRgag"
      );
    this.shape.setTransform(50.4799, 47.2817);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nnn14,
    new cjs.Rectangle(0, 0, 101, 94.6),
    null
  );
  (lib.nnn13 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#1CE018")
      .s()
      .p(
        "AkcJ0QjigqiEkOQgnhagUhwQgPhWANg/QANhBAZgZQAbgbAmAAQAmAAAbAbIAmA1QAdAnAkAIQALACAMAAQCsgUCZAEQAbADARgDQAsgJgxg2QhZhgAAiEQAAiLBihhQBhhiCKAAQCLAABiBiQA1A1AYBBQABAmgXAtQgUAoghAGQgTACgNAKQgZAQADApQAFBPBOArIAFACQhABeBlAqQAzAVAsApIAKAKIAJAIQBXBdAACCQAABPghBCQg+CejfAjQiFAOiBAAQjTAAjLglg"
      );
    this.shape.setTransform(71.0108, 66.5071);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nnn13,
    new cjs.Rectangle(0, 0, 142, 133),
    null
  );
  (lib.nnn12 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#1CE018")
      .s()
      .p(
        "AjKG/QiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATIAbAlQAVAcAaAGQAHABAIAAQB7gOBtADQATACAMgCQAfgHgigmQhAhEAAheQAAhjBGhFQBEhGBjAAQBiAABGBGQAmAmARAuQABAbgRAgQgOAdgXAEQgOABgJAHQgSAMACAdQAEA4A3AeIADACQgtBDBIAdQApARAiAiQBEBEAABhQAAA4gYAvQgsBwieAZQhfAKhbAAQiWAAiRgag"
      );
    this.shape.setTransform(50.4799, 47.2817);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nnn12,
    new cjs.Rectangle(0, 0, 101, 94.6),
    null
  );
  (lib.nnn11 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#E01414")
      .s()
      .p(
        "AkcJ0QjigqiEkOQgnhagUhwQgPhWANg/QANhBAZgZQAbgbAmAAQAmAAAbAbIAmA1QAdAnAkAIQALACAMAAQCsgUCZAEQAbADARgDQAsgJgxg2QhZhgAAiEQAAiLBihhQBhhiCKAAQCLAABiBiQA1A1AYBBQABAmgXAtQgUAoghAGQgTACgNAKQgZAQADApQAFBPBOArIAFACQhABeBlAqQAzAVAsApIAKAKIAJAIQBXBdAACCQAABPghBCQg+CejfAjQiFAOiBAAQjTAAjLglg"
      );
    this.shape.setTransform(71.0108, 66.5071);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nnn11,
    new cjs.Rectangle(0, 0, 142, 133),
    null
  );
  (lib.nnn10 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#E01414")
      .s()
      .p(
        "AjKG/QiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATIAbAlQAVAcAaAGQAHABAIAAQB7gOBtADQATACAMgCQAfgHgigmQhAhEAAheQAAhjBGhFQBEhGBjAAQBiAABGBGQAmAmARAuQABAbgRAgQgOAdgXAEQgOABgJAHQgSAMACAdQAEA4A3AeIADACQgtBDBIAdQApARAiAiQBEBEAABhQAAA4gYAvQgsBwieAZQhfAKhbAAQiWAAiRgag"
      );
    this.shape.setTransform(50.4799, 47.2817);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nnn10,
    new cjs.Rectangle(0, 0, 101, 94.6),
    null
  );
  (lib.nnn9 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#E0BD14")
      .s()
      .p(
        "AkaJwQjggqiDkMQgmhagUhvQgQhVAOg/QANhAAYgYQAbgbAlAAQAmAAAbAbIAmA0QAdAmAkAJQAKACAMgBQCrgUCYAFQAbACAQgCQAsgJgwg2QhZhfAAiDQAAiKBhhhQBghhCKAAQCJAABhBhQA1A1AYBBQABAlgXAtQgUAoggAGQgUACgMAJQgZARADAoQAFBOBNArIAFADQhABdBlApQAzAVArApIAKAJIAJAJQBWBcAACBQAABPghBBQg9CdjdAjQiEANiAAAQjRAAjKgkg"
      );
    this.shape.setTransform(71.0199, 66.5089, 1.0079, 1.0078);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nnn9,
    new cjs.Rectangle(0, 0, 142, 133),
    null
  );
  (lib.nnn8 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#E0BD14")
      .s()
      .p(
        "AjKG/QiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATIAbAlQAVAcAaAGQAHABAIAAQB7gOBtADQATACAMgCQAfgHgigmQhAhEAAheQAAhjBGhFQBEhGBjAAQBiAABGBGQAmAmARAuQABAbgRAgQgOAdgXAEQgOABgJAHQgSAMACAdQAEA4A3AeIADACQgtBDBIAdQAkAPAfAdIAIAHIAFAGQA/BCAABdQAAA4gYAvQgsBwieAZQhfAKhbAAQiWAAiRgag"
      );
    this.shape.setTransform(50.4799, 47.2817);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nnn8,
    new cjs.Rectangle(0, 0, 101, 94.6),
    null
  );
  (lib.nnn7 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(0,0,0,0.298)")
      .s()
      .p(
        "ABmJ1IAygBIARguIAPAuIAyABIgeAXIhFABgAgdKJIgagUIAxgBIAQguIAQAuIAyABIgeAYIhLgEgAEFJ1IAxgBIARguIAQAuIAyABIgPALQgvAFgtADgAjVJ2IgBgBIAzgBIAQguIAQAuIAyABIgTAPQg5gGg4gIgAGiJ1IAQAAIgMADgAHlJGIAKAbIgXAJgAk7JjIAKgdIALAiIgVgFgAHlIVIgpAcIAOgvIgogeIAzgBIAQgvIAQAvIAxABIgmAeIANAvgAFHIVIgpAcIAOgvIgngeIAxgBIARgvIAQAvIAyABIgoAeIAOAvgACpIVIgpAcIAOgvIgogeIAygBIARgvIAPAvIAyABIgnAeIANAvgAAKIVIgnAcIANgvIgngeIAxgBIAQgvIAQAvIAyABIgoAeIAPAvgAiTIVIgpAcIAOgvIgogeIAzgBIAQgvIAQAvIAyABIgoAeIAOAvgAkxIVIgpAcIAOgvIgngeIAxgBIARgvIAQAvIAxABIgnAeIAOAvgAnQIVIgCACIgZgUQgFgEgEgFQgMgKgKgMIAqgBIAQgvIAQAvIAyABIgnAeIAOAvgAJoICIgngeIAygBIAQgvIAKAbQgQAkgYAcgAJoFxIgngeIAygBIAQgvIAQAvIAeAAIgCASQgDAWgGAUIgDAMIgggWIgoAcgAHlGEIgpAcIAOgvIgogeIAzgBIAQgvIAQAvIAxABIgmAeIANAvgAFHGEIgpAcIAOgvIgngeIAxgBIARgvIAQAvIAyABIgoAeIAOAvgACpGEIgpAcIAOgvIgogeIAygBIARgvIAPAvIAyABIgnAeIANAvgAAKGEIgnAcIANgvIgngeIAxgBIAQgvIAQAvIAyABIgoAeIAPAvgAiTGEIgpAcIAOgvIgogeIAzgBIAQgvIAQAvIAyABIgoAeIAOAvgAkxGEIgpAcIAOgvIgngeIAxgBIARgvIAQAvIAxABIgnAeIAOAvgAnQGEIgoAcIANgvIgngeIAygBIAQgvIAQAvIAyABIgnAeIAOAvgAp4FCIALgfIAPAvIAyABIgnAeIALAkQgagmgWgtgAKDDzIgoAcIANgvIgngeIAygBIAQgvIAQAvIALAAIAIAYIgJAHIAPAvgAHlDzIgpAcIAOgvIgogeIAzgBIAQgvIAQAvIAxABIgmAeIANAvgAFHDzIgpAcIAOgvIgngeIAxgBIARgvIAQAvIAyABIgoAeIAOAvgACpDzIgpAcIAOgvIgogeIAygBIARgvIAPAvIAyABIgnAeIANAvgAAKDzIgnAcIANgvIgngeIAxgBIAQgvIAQAvIAyABIgoAeIAPAvgAiTDzIgpAcIAOgvIgogeIAzgBIAQgvIAQAvIAyABIgoAeIAOAvgAkxDzIgpAcIAOgvIgngeIAxgBIARgvIAQAvIAxABIgnAeIAOAvgAnQDzIgoAcIANgvIgngeIAygBIAQgvIAQAvIAyABIgnAeIAOAvgAptDzIgjAXIgCgJQgJgagIgbIgCgKIAngBIARgvIAPAvIAyABIgnAeIANAvgAJkBgIAMAQIgVAOgAHlBiIgpAcIAOgvIgogeIAzgCIAPgpIAEACIANAnIAxACIgmAeIANAvgAFHBiIgpAcIAOgvIgngeIAxgCIARguIAQAuIAyACIgoAeIAOAvgACpBiIgpAcIAOgvIgogeIAygCIARguIAPAuIAyACIgnAeIANAvgAAKBiIgnAcIANgvIgngeIAxgCIAQguIAQAuIAyACIgoAeIAPAvgAiTBiIgpAcIAOgvIgogeIAzgCIAQguIAQAuIAyACIgoAeIAOAvgAkxBiIgpAcIAOgvIgngeIAxgCIARguIAQAuIAxACIgnAeIAOAvgAnQBiIgoAcIANgvIgngeIAygCIAQguIAQAuIAyACIgnAeIAOAvgAptBiIgqAcIAPgvIgogeIAygCIARguIAPAuIAyACIgnAeIANAvgAG9gVIACABIgDABgAFHguIgpAbIAOgvIgngdIAxgCIARguIAQAuIAyACIgoAdIAOAvgACpguIgpAbIAOgvIgogdIAygCIARguIAPAuIAyACIgnAdIANAvgAAKguIgnAbIANgvIgTgNQgEgIgIgIIApgCIAQguIAQAuIAyACIgoAdIAPAvgAiIgnIAXABIAGATgAi1gmIAXgBIgeAUgAkfgiIARAAIAFAPgAlWgeIAOgBIgSAMgAmvgYIAAAAIAHABIABAEgAnrhAQALAMAMAJIgkAYgAptguIgqAbIAPgvIghgYIACgFIApgCIARguIAPAuIAyACIgnAdIANAvgAoShfIARAAQAGAKAMAPIACACgAGihfIAXgBIgGANgAFHi/IgpAbIAOgvIgngdIAxgCIARguIAQAuIAcABIACAQIgUAOIAOAvgACpi/IgpAbIAOgvIgogdIAygCIARguIAPAuIAyACIgnAdIANAvgAAKi/IgnAbIANgvIgngdIAxgCIAQguIAQAuIAyACIgoAdIAPAvgAiBjyIAwACIgmAdQgGgPgEgQgAFHlQIgpAbIAOgvIgngeIAxgBIARguIAQAuIAyABIgoAeIAOAvgACplQIgpAbIAOgvIgogeIAygBIARguIAPAuIAyABIgnAeIANAvgAAKlQIgnAbIANgvIgngeIAxgBIAQguIAQAuIAyABIgoAeIAPAvgAiLlKQABggAFgcIACADIAyABIgoAeIAOAvgAHKlkIgogeIAzgBIAQguIAJAZQgFAYgNAZQgMAXgPAMgAHKn1IgogeIAZAAQAWAZAOAdIgjAXgAFHniIgpAcIAOgvIgngeIAxgBIARguIAQAuIAyABIgoAeIAOAvgACpniIgpAcIAOgvIgogeIAygBIARguIAPAuIAyABIgnAeIANAvgAAKniIgnAcIANgvIgngeIAxgBIAQguIAQAuIAyABIgoAeIAPAvgAhwnJIADgFIACAIgAFepjIAQALIABABgAEpp7QANAFAOAGIgmAZgACppzIgpAcIAOgvIgEgDQAZgDAaAAIAOAAIgIAGIANAvgAAeplQAHgEAHgDIAHAVg"
      );
    this.shape.setTransform(49.9, 47.325);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nnn7,
    new cjs.Rectangle(-19, -18, 137.8, 130.7),
    null
  );
  (lib.nnn6 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(0,0,0,0.098)")
      .s()
      .p(
        "ABwKQIAA0TQAsgNAzAAQAXAAAVADIAAUbQg6ADg6AAIgXgBgAj6JwIAAqUQBHgEBEABIAAKqQhGgIhFgLgAHcgLQAOALAWAKQA3AXAvAuIAAHWQg1AyhVAbgAplFPIAAngQAOgFAQAAQAmAAAaAbIAmA0IAHAIIAAJGQhOhGg9hyg"
      );
    this.shape.setTransform(44.05, 47.3042);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("rgba(240,240,240,0.2)")
      .s()
      .p(
        "ACvqNIANACIAAUYIgNABgAi7KCIAAqqIAMAAIAAKsIgMgCgAIbBOIACADIAKAKIAAG9IgMANgAolIGIAApFIALANIAAJDIgLgLg"
      );
    this.shape_1.setTransform(51.6, 47.35);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nnn6,
    new cjs.Rectangle(-17.3, -18.3, 124, 131.3),
    null
  );
  (lib.nnn5 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(0,0,0,0.098)")
      .s()
      .p(
        "Ag9KJIJipkQAdASAZAaIAZAbIojIjQhIgBhGgFgAKqDMQAQAxAAA4IgBAeIkuEuIgLABQhNAIhLADgAkaJrQgVgEgTgFILxrxQAMAJAPAIIAFADQgtBBAlAoIqLKLQgrgGgrgIgAn8HxIPbvcQAPAYAJAaQACAlgXAsQgUApggAFQgTACgNAJQgYARADAoIAAAGIsjMjQgrgbgngngAp3FAIFjliQBPgFBLAAInGHFQgdgrgagzgAq1BxIgEgbIC5i4IAUAbQAaAjAgAKIjsDrQgOgugJgygAqRh7QATgTAZgFIhHBHQAMgfAPgQgAhujIIGtmvQAyAUAqAmInQHRQglgqgUgygAgmouQBfhgCIAAIlHFIQABiIBfhgg"
      );
    this.shape.setTransform(50.375, 47.275);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nnn5,
    new cjs.Rectangle(-19.4, -18.2, 139.6, 131),
    null
  );
  (lib.nnn4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(0,0,0,0.2)")
      .s()
      .p(
        "ACKJ9QAQgPAUAAQAVAAAOAPQAJAIAEALIhgABQAEgLAIgJgAhkKGQAEgGAGgHQAbgbAnAAQAmAAAbAbQAKALAHAMQhPgDhPgHgAkLJwIgBgGQAAgUAPgPQAPgOAUAAQAUAAAPAOQAPAPgBAUQABAKgFAJQgvgGgvgHgAiUJsQgGgGAAgKQAAgKAGgHQAHgGAKAAQAKAAAGAGQAGAHABAKQgBAKgGAGQgGAHgKAAQgKAAgHgHgAFfJfQgTgUAAgbQAAgcATgUQAUgTAbAAQAdAAATATQATAUAAAcQAAAbgTAUQgTATgdAAQgbAAgUgTgADpJjQgKgKAAgOQAAgPAKgKQAKgKAPAAQAOAAAKAKQAKAKAAAPQAAAOgKAKQgKALgOAAQgPAAgKgLgAHtJeQAAgVAOgQQAPgOAVAAQAXAAAOAOIABABQgmAcgxATIgBgLgAAmJTQgRgRAAgZQAAgYARgRQASgSAYAAQAZAAARASQARARABAYQgBAZgRARQgRARgZAAQgYAAgSgRgAnOIZIADgEQAWgVAeAAQAeAAAUAVQAWAVAAAeQAAAMgDAKQhDgXg5gugAk7IwQgMgNAAgSQAAgSAMgMQANgNASAAQASAAANANQAMAMAAASQAAASgMANQgNAMgSAAQgSAAgNgMgAhdInQgRgRAAgYQAAgZARgRQARgRAYAAQAZAAASARQAPARABAZQgBAYgPARQgSASgZAAQgYAAgRgSgAjhINQgRgRAAgYQAAgYARgSQAQgQAZAAQAYAAARAQQASASgBAYQABAYgSARQgRARgYAAQgZAAgQgRgApWF7QACgEAFgEQAcgcAoAAQAnAAAbAcQAcAcAAAnQAAAogcAbQgLAMgMAHQhCg5g0hYgAIcH7QgPgPAAgVQAAgUAPgPQAPgPAVAAQAVAAAOAPQAPAPAAAUQAAAVgPAPQgOAOgVAAQgVAAgPgOgACKHqQgdgeAAgrQAAgrAdgfQAfgeAsAAQArAAAeAeQAeAfAAArQAAArgeAeQgeAegrAAQgsAAgfgegAHGHvQgFgFAAgHQAAgHAFgFQAFgFAIAAQAGAAAFAFQAGAFAAAHQAAAHgGAFQgFAGgGAAQgIAAgFgGgAmDHTQgQgQAAgWQAAgWAQgQQAPgPAWAAQAXAAAPAPQAQAQAAAWQAAAWgQAQQgPAQgXAAQgWAAgPgQgAAIG+QgJgJABgNQgBgOAJgJQAJgJANAAQANAAAKAJQAKAJAAAOQAAANgKAJQgKAJgNAAQgNAAgJgJgAF7G1QgQgQAAgWQAAgXAQgQQAQgQAWAAQAWAAARAQQAPAQAAAXQAAAWgPAQQgRAQgWAAQgWAAgQgQgAkGGxQgGgGAAgJQAAgJAGgHQAHgGAJAAQAJAAAGAGQAIAHgBAJQABAJgIAGQgGAHgJAAQgJAAgHgHgAh+GoQgPgQgBgVQABgWAPgQQAPgPAWAAQAWAAAPAPQAQAQAAAWQAAAVgQAQQgPAQgWAAQgWAAgPgQgAJtGeQgQgPAAgYQAAgYAQgQQARgQAYAAQAXAAAQAPQgEAygRAsQgJADgJAAQgYAAgRgRgAjVGLQgGgGAAgIQAAgIAGgGQAGgGAJAAQAHAAAGAGQAHAGgBAIQABAIgHAGQgGAGgHAAQgJAAgGgGgAH0FnQgLgLAAgQQAAgQALgLQALgLAQAAQAQAAALALQAMALAAAQQAAAQgMALQgLALgQAAQgQAAgLgLgAlcFWQgWgWAAgfQAAggAWgWQAWgWAfAAQAgAAAWAWQAWAWAAAgQAAAfgWAWQgWAWggAAQgfAAgWgWgAgdFKQgbgbABglQgBgmAbgaQAbgaAkAAQAlAAAbAaQAaAaAAAmQAAAlgaAbQgbAaglAAQgkAAgbgagAnSE0QgNgOABgTQgBgUANgNQAOgOAUAAQAUAAANAOQAOANgBAUQABATgOAOQgNANgUAAQgUAAgOgNgAp6E5QgVgxgOg3QAOgJARAAQAaAAARARQASASAAAZQAAAZgSASQgPAPgUADIgEgIgAooE4QgGgGAAgKQAAgJAGgHQAHgHAJAAQAKAAAGAHQAIAHgBAJQABAKgIAGQgGAHgKAAQgJAAgHgHgAFlElQgTgUAAgbQAAgcATgUQAUgUAcAAQAbAAAUAUQAUAUAAAcQAAAbgUAUQgUAUgbAAQgcAAgUgUgADFEGQgSgSAAgbQAAgcASgTQAUgTAaAAQAcAAASATQAUATAAAcQAAAbgUASQgSAUgcAAQgaAAgUgUgAImD3QgegeAAgsQAAgsAegfQAVgUAagHIAKAKQBJBJAQBgQgeAcgpAAQgsAAgfgfgAowDLQgGgHAAgJQAAgJAGgHQAHgGAJAAQAJAAAGAGQAIAHgBAJQABAJgIAHQgGAHgJAAQgJAAgHgHgAqoCsQgGgcgGgfIgEgdQAKgHAOAAQAVAAANAOQAOAOAAAUQAAAUgOAOQgNAOgVAAIgIgBgAGqCVQgPgOABgWQgBgWAPgPQAQgOAVAAQAVAAAQAOQAPAPgBAWQABAWgPAOQgQAPgVAAQgVAAgQgPgAn6CHQgbgcAAgmQAAgmAbgbQAbgaAmAAQAmAAAbAaQAcAbgBAmQABAmgcAcQgbAbgmAAQgmAAgbgbgABqCCQgWgWAAggQAAggAWgXQAXgVAgAAQAgAAAWAVQAXAXAAAgQAAAggXAWQgWAXggAAQggAAgXgXgAgGCEQgJgJAAgLQAAgMAJgJQAHgIAMAAQAMAAAIAIQAJAJAAAMQAAALgJAJQgIAIgMAAQgMAAgHgIgAk7BSQgagZAAglQAAgcAQgXQBIgGBDgBQAXAZAAAhQAAAlgaAZQgaAbglAAQglAAgagbgAFFBRQgHgHAAgKQAAgJAHgHQAHgHAJAAQALAAAGAHQAHAHAAAJQAAAKgHAHQgGAHgLAAQgJAAgHgHgApaA7QgIgHAAgLQAAgKAIgIQAHgHALAAQAKAAAIAHQAHAIABAKQgBALgHAHQgIAIgKAAQgLAAgHgIgAgVAgQgNgMAAgSQAAgRANgNQAMgMARAAQASAAAMAMQANANAAARQAAASgNAMQgMANgSAAQgRAAgMgNgAq8AWQABgeAFgbIAHgYQAJgFAMAAQAVAAAPAPQAOAOAAAVQAAAUgOAPQgPAOgVAAQgUAAgOgNgAF2ACQgNgMAAgTQAAgTANgNQANgNATAAQATAAANANIADAEQACAQAIAPQgBAQgMAMQgNANgTAAQgTAAgNgNgADggGQgUgUAAgeQAAgdAUgVQAVgUAdAAQAeAAATAUQAWAVgBAdQABAegWAUQgTAUgeAAQgdAAgVgUgAiPgBQgNgOAAgUIAAgEIBKABIAUABIAAACQAAAUgNAOQgOANgUAAQgTAAgPgNgApOhCQgOgOABgUQgBgUAOgPQAKgIALgEQAWAGASASIAXAeQgDAPgMAMQgOAPgUAAQgUAAgPgPgABWhDQgLgLAAgOQAAgPALgKQALgLAOAAQAPAAAKALQAKAKAAAPQAAAOgKALQgKAKgPAAQgOAAgLgKgAgshlQgggigUgmIAHgIQATgTAbAAQAcAAARATQAUATAAAbQAAAbgUATQgJAMgPAFQgGgNgQgQgAFAiZQgRgQABgXQgBgXARgRQAQgQAXAAQALAAAKAEQADArAbAgQgFAJgHAHQgQAQgXAAQgXAAgQgQgAA+jAQgSgSAAgZQAAgZASgTQARgSAaAAQAZAAARASQATATAAAZQAAAZgTASQgRASgZAAQgaAAgRgSgADYi3QgHgHAAgLQAAgMAHgHQAIgIALAAQALAAAIAIQAHAHAAAMQAAALgHAHQgIAIgLAAQgLAAgIgIgAgkkLQgHgIgBgLQABgLAHgJQAIgHALAAQALAAAHAHQAIAJAAALQAAALgIAIQgHAIgLAAQgLAAgIgIgADEknQgVgUAAgeQAAgeAVgVQAUgVAeAAQAfAAAUAVQAVAVAAAeQAAAegVAUQgUAVgfAAQgeAAgUgVgAG8lBQgVgVAAgeQAAgeAVgWQAWgVAeAAIAKAAIABADQACAlgXAtQgQAfgXAKIgDgCgAiDlcQAFhhA4hLQAJAGAHAIQAbAbABAnQgBAngbAbQgaAbgnAAIgMgBgAAVloQgKgKAAgPQAAgOAKgLQAKgKAPAAQAPAAAKAKQALALgBAOQABAPgLAKQgKALgPAAQgPAAgKgLgACMnEQgIgIAAgKQAAgLAIgHQAHgIALAAQAKAAAIAIQAHAHAAALQAAAKgHAIQgIAHgKAAQgLAAgHgHgAD9nYQgQgQAAgXQAAgYAQgRQARgQAYAAQAXAAAQAQQARARAAAYQAAAXgRAQQgQARgXAAQgYAAgRgRgAAqn7QgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQARARAAAYQAAAZgRARQgRARgZAAQgYAAgRgRgACXpiQgRgRABgXQAdgGAhAAQAaAAAaAEIAAACQAAAXgRARQgRARgYAAQgXAAgRgRg"
      );
    this.shape.setTransform(50.45, 47.275);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nnn4,
    new cjs.Rectangle(-19.6, -18.4, 140.1, 131.4),
    null
  );
  (lib.nnn3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(0,0,0,0.2)")
      .s()
      .p(
        "ADFJuIAfAfIg+ABgAhQKFIAXgXIAbAbIgygEgADFH6Ih/CAIh/iAIh+B/IgDAAIh/h/IhLBMIgZgNIBkhmICACAICAiAIB/CAIB/iAICACAIB/iAIBwBwIgZAOIhXhXIh/CAgAHEFgIh/CAIiAiAIh/CAIh/iAIiACAIiAiAIh/CAIiAiAIgdAcIgOgYIArgrICACAIB/iAICACAICAiAIB/CAIB/iAICACAIB/iAICACAIB6h6IgEArIh2B2gAHEDFIh/CAIiAiAIh/CAIh/iAIiACAIiAiAIh/CAIiAiAIhQBRIgKgdIBahbICACAIB/iAICACAICAiAIB/CAIB/iAICACAIB/iAICACAIBlhkQAFAOAEAPIhuBugAHEArIh/CAIiAiAIh/CAIh/iAIiACAIiAiAIh/CAIiAiAIhzB0IgHghIB6h6ICACAIB/iAICACAICAiAIB/CAIB/iAICACAIB/iAICACAIApgoQAKAJAIALIg7A7gAq6gWICCiAIBVBWIAOANIAdAdIAIgIIAFACQAKACAMgBIALgBIguAsIiAh/IiFCCQAAgVADgUgADFhvIh/B/IhchbQgHgNgPgRQgOgPgMgQIANgOIB/CAIB/iAICACAIB4h3IAQAKIAFADIgMATIgCgCIh/B/gAjzgoIAmgCIAUAUIAWgVIAnAAIg9A7gADFkJIh/CAIh/iAIg2A2QgGgOgEgPIBAhAIB/CAIB/iAICACAIA5g5QADAPAGAPIhCBCgADFmkIh/CAIh/iAIhLBMQABgXADgVIBHhHIB/CAIB/iAICACAIB/iAIAzAzIgKAdIgpgpIh/CAgADFo+Ih/CAIhvhwIAFgGIAOgOIBcBdIB/iAICACAIBchdIAOAOIAGAGIhwBwgAERqNQAoAJAkATIgYAYgAAtpxQAkgTApgJIg0A0g"
      );
    this.shape.setTransform(50.475, 46.975);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nnn3,
    new cjs.Rectangle(-19.7, -18.4, 140.4, 130.8),
    null
  );
  (lib.nnn2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(0,0,0,0.2)")
      .s()
      .p(
        "ABDJvIgGgEQgmgZgDgiIAAgHQAAgRAMgNQAMgMATAAQARAAANAMQAMANAAARQABgSAMgMQANgMARAAQASAAANAMQANANAAARIgBAHQgFAiglAZIgHAFIhLgBgAEfItQgZgQgDgXIAAgEQAAgMAIgJQAJgJAMABQALgBAKAJQAIAIAAAMQAAgMAIgIQAJgJALABQAMgBAIAJQAJAJAAAMIAAAEQgDAXgZAQQgTANgKALQgKgLgUgNgAiDItQgYgQgDgXIAAgEQAAgMAIgJQAIgJAMABQAMgBAJAJQAIAIAAAMQAAgMAIgIQAJgJAMABQAMgBAIAJQAJAJAAAMIAAAEQgEAXgYAQQgTANgLALQgKgLgUgNgAmbIVIgBgCIAAgFQAAgMAJgIQAHgJANAAQAMAAAIAJQAIAIAAAMQABgMAIgIQAIgJAMAAQAMAAAJAJQAIAIAAAMIAAAFQgDAWgZAQIgEADQgrgPgngYgAHTIDQgmgZgDghIAAgHQAAgRAMgOQAMgNATABQARgBANANQAMAOAAAQQABgRAMgNQANgNARABQARgBAOANQAMAOABARIgBAHQgEAhgmAZQgcASgQASQgPgSgdgSgAkhHFQgmgZgDghIAAgHQAAgRAMgNQAMgNATgBQARABANANQAMANAAAQQABgRAMgMQANgNARgBQARABAOANQANANAAARIgBAHQgFAhglAZQgcATgQARQgPgRgdgTgAgdHBQgmgZgEgiIAAgHQAAgQANgOQAMgMASAAQASAAAMAMQAMAOAAAQQABgSAMgMQANgMARAAQASAAAMAMQANAOAAAQIAAAHQgFAiglAZQgcASgQASQgOgSgdgSgAnpGxQgYgRgEgWIAAgGQAAgLAJgIQAIgJAMAAQAMAAAJAJQAIAIAAALQAAgLAIgIQAJgJAMAAQAMAAAIAJQAJAIAAALIAAAGQgDAWgZARQgUAMgKAMQgKgMgUgMgADDGZQgYgRgEgWIAAgFQAAgMAJgJQAJgHALgBQAMABAJAHQAIAJABAMQAAgMAIgJQAIgHAMgBQAMABAIAHQAJAJAAAMIAAAFQgDAWgZARQgTANgKALQgLgLgUgNgAJVFyQgYgRgEgWIAAgFQAAgMAIgIQAJgJAMABQAMgBAIAJQAIAIAAAMQABgMAIgIQAIgJAMABQAMgBAJAJQAIAIAAAMIAAAFQgDAWgZARQgTAMgLAMQgKgMgTgMgAFbFgQglgagEggIAAgHQAAgSAMgNQANgNASABQARgBANANQANANgBARQABgRAMgNQANgNASABQARgBANANQANANAAASIgBAHQgEAgglAaQgdASgQASQgPgSgdgSgAl6FAQgZgQgDgXIAAgEQAAgMAIgJQAJgIAMAAQALAAAKAIQAIAIAAAMQAAgMAJgIQAHgIANAAQAMAAAHAIQAJAJAAAMIAAAEQgDAXgZAQQgTANgKALQgKgLgUgNgAhuEfQgYgRgEgWIAAgFQABgMAHgIQAJgJAMABQAMgBAJAJQAIAIAAAMQAAgMAJgIQAIgJAMABQAMgBAIAJQAIAIAAAMIAAAFQgCAWgZARQgUANgKALQgLgLgTgNgAorEUQglgagFghIAAgHQAAgRANgNQANgNARAAQASAAAMANQANANAAAQQAAgRAMgMQAOgNARAAQARAAAOANQAMANAAARIgBAHQgEAhgkAaQgdASgQARQgQgRgcgSgABfEMQgmgagDghIAAgHQAAgSAMgMQAMgNASAAQASAAANANQAMANAAAQQABgRALgMQAOgNASAAQARAAANANQANAMAAASIgBAHQgEAhglAaQgdASgQARQgPgRgdgSgAIIDzQgmgbgDggIAAgHQAAgRAMgOQAMgMATAAQARAAANAMQAMAOAAAQQABgRAMgNQANgMARAAQARAAAOAMQANAOAAARIgBAHQgFAgglAbQgcARgQASQgPgSgdgRgAkhDQQgmgZgDgiIAAgGQAAgRAMgOQAMgMATAAQARAAANAMQAMAOAAAQQABgRAMgNQANgMARAAQARAAAOAMQANAOAAARIgBAGQgFAiglAZQgcATgQARQgPgRgdgTgAEfCoQgZgRgDgWIAAgFQAAgMAIgIQAJgJAMAAQALAAAKAJQAIAIAAAMQAAgMAIgIQAJgJALAAQAMAAAIAJQAJAIAAAMIAAAFQgDAWgZARQgTANgKALQgKgLgUgNgAqWCDIgKgHIgJgtIgCgJIACgDQAHgIAMAAQANAAAIAIQAJAJAAALQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAAMIAAAEQgDAXgZAQQgSANgLAMQgKgMgUgNgAhLB3QgmgbgEggIAAgHQAAgSANgNQANgNARABQASgBANANQAMANAAARQABgRALgNQANgNARABQASgBAMANQANANAAASIAAAHQgFAgglAbQgbARgQASQgQgSgcgRgAnnBYQglgagEghIAAgHQAAgRAMgMQANgNASAAQARAAANANQAMAMAAAQQABgRAMgLQANgNARAAQASAAANANQANAMAAARIgBAHQgFAhgkAaQgcASgRASQgPgSgdgSgAG8BSQgYgQgDgXIAAgFQgBgMAJgIQAIgIAMAAQALAAAKAIQAIAIAAAMQAAgMAIgIQAJgIALAAQANAAAIAIQAJAIAAAMIAAAFQgEAXgYAQQgTAMgLANQgKgNgUgMgACsBSQgZgQgDgXIAAgFQAAgMAJgIQAIgIAMAAQALAAAJAIQAJAIAAAMQAAgMAIgIQAIgIAMAAQAMAAAIAIQAJAIAAAMIAAAFQgDAXgZAQQgTAMgKANQgKgNgUgMgAj2AjQgYgRgEgVIAAgFQAAgMAJgIQAIgIAMAAQAMAAAJAIQAIAIABAMQAAgMAHgIQAJgIAMAAQAMAAAIAIQAJAIAAAMIAAAFQgDAVgZARQgUAMgJAMQgLgMgUgMgAEeguQgmgagDghIAAgHQAAgRAMgNQAMgNATAAQARAAANANQAMANAAAQQABgRAMgMQANgNARAAQASAAANANQANANAAARIgBAHQgFAhglAaQgcASgQARQgPgRgdgSgAA5gjQgYgRgEgWIAAgFQAAgMAJgIQAIgJALABQANgBAIAJQAJAIAAAMQAAgMAIgIQAJgJALABQAMgBAJAJQAIAIAAAMIAAAFQgCAWgaARQgSAMgLAMQgKgMgUgMgApmg5QgXgRgEgWIAAgEQAAgNAIgIQAJgIALAAQAMAAAJAIQAIAIABAMQAAgMAIgIQAIgIAMAAQAMAAAIAIQAJAIgBANIAAAEQgCAWgZARQgTAMgKAMQgLgMgUgMgACsizQgZgRgDgXIAAgEQAAgMAJgIQAIgJAMAAQALAAAJAJQAJAIAAALQAAgLAIgIQAIgJAMAAQAMAAAIAJQAJAIAAAMIAAAEQgDAXgZARQgTAMgKAMQgKgMgUgMgAgYjPQgmgagEghIAAgHQAAgRANgOQAMgMASAAQASAAALAMQANAOAAAQQABgRALgNQAOgMARAAQARAAAOAMQAMAOAAARIgBAHQgEAhgkAaQgdASgQASQgPgSgcgSgADhlOQgmgagEghIAAgHQAAgRAMgNQANgMASAAQASAAAMAMQAMANAAARQACgSALgMQANgMASAAQASAAANAMQAMANAAARIgBAHQgEAhglAaQgcASgRASQgPgSgcgSgAh5lgIAAgJQABgjAGggIAFAEQAIAIAAAMQAAgMAIgIQAJgIAMAAQAMAAAIAIQAJAJAAAMIAAAEQgEAXgYAQQgTANgLALQgIgHgMgJgAG8loQgYgQgDgXIAAgEQgBgMAJgJQAIgIAMAAQALAAAKAIQAIAIAAAMQAAgMAIgIQAJgIALAAQAHAAAEACQgFAQgJASQgSAjgaAJIgLgIgAAvmWQgYgRgDgXIAAgEQgBgMAJgJQAIgIAMAAQAMAAAJAIQAIAJAAALQAAgLAIgJQAJgIALAAQAMAAAJAIQAJAJAAAMIAAAEQgEAXgZARQgTAMgKAMQgKgMgUgMgAFfnsQgZgQgDgWIAAgGQAAgLAIgJQAJgIAMAAQALAAAKAIQAIAJAAALQAAgLAIgJQAIgIAMAAQAMAAAIAIQAJAJAAALIAAAGQgDAWgZAQQgTANgKAMQgKgMgUgNgACZoCQgmgagEghIAAgHQAAgRAMgNQANgNASAAQARAAANANQAMANAAAQQABgRAMgMQANgNARAAQASAAANANQANANAAARIgBAHQgEAhglAaQgcASgRARQgPgRgcgSgAgQocQgVgPgFgTIATgVIARgQQAGACAFAFQAIAIAAAMQAAgMAIgIQAJgJALABQAMgBAJAJQAIAIAAAMIAAAFQgCAWgaARQgTAMgKAMQgKgMgTgMg"
      );
    this.shape.setTransform(49.15, 44.85);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nnn2,
    new cjs.Rectangle(-19.2, -17.5, 136.79999999999998, 124.8),
    null
  );
  (lib.nextRaceButton = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(5, 1, 1)
      .p(
        "APlB2QAAAggXAXQgXAXggAAI8uAAQgfAAgXgXQgXgXAAggIAAjrQAAggAXgXQAXgXAfAAIcuAAQAgAAAXAXQAXAXAAAgg"
      );
    this.shape.setTransform(99.675, 19.575);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#66CC00")
      .s()
      .p(
        "AuXDEQgfAAgXgXQgXgXAAggIAAjrQAAggAXgXQAXgXAfAAIcuAAQAgAAAXAXQAXAXAAAgIAADrQAAAggXAXQgXAXggAAg"
      );
    this.shape_1.setTransform(99.675, 19.575);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nextRaceButton,
    new cjs.Rectangle(-2.5, -2.5, 204.4, 44.2),
    null
  );
  (lib.mn12 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFF900")
      .s()
      .p("Am2HBIAAuaIM7AAQAyB5AACNQAAEbjJDJQjJDJkbAAQhlAAhbgZg");
    this.shape.setTransform(43.925, 47.425);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("rgba(230,253,0,0.2)")
      .s()
      .p(
        "A2kPDIqm30ITxX0gEghKgIxMAn+AUZIqgDFgEghKAOJIAA26IGJW6gAVkNUMg1zgWEIg7gBIAtgDIgIgDIglAGIAbgJIgsgNIAAgXIBdAUIPAl4ITDAAMghgAGAIAkAIMA25AAAIAAFDMg14gE1MA/SATZQj/CtlwAAQhCAAhHgGgEghKgIxg"
      );
    this.shape_1.setTransform(229.775, 95.3);
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.mn12,
    new cjs.Rectangle(0, -1, 443.8, 192.6),
    null
  );
  (lib.king = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ADggEQgfAjhXAyQhYAyivA3IhCjmQAhgMAXgEIAPAwQAagFAagGIgPgxQAggIAggMIAOAyQAkgMAjgQIgWgvQAYgLAYgMIAUAwQAVgLAUgMIgTgwQAIgFAJgGQAJgFAJgGIAAAAgABIAaQAAAPgKAKQgKAKgPAAQgOAAgLgKQgKgKAAgPQAAgPAKgKQALgJAOAAQAPAAAKAJQAKAKAAAPgAChADIgpgaIAUg3IAlAigAhnB8IgogeIAbg/IAnAig"
      );
    this.shape.setTransform(22.375, 18.55);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#CC0000")
      .s()
      .p("AigBHIAcg+IAnAhIgaA7gABogtIAUg3IAkAiIgQAvg");
    this.shape_1.setTransform(24, 20.825);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#66CCCC")
      .s()
      .p(
        "AgYAYQgKgKAAgOQAAgNAKgLQALgKANAAQAOAAAKAKQALALAAANQAAAOgLAKQgKALgOAAQgNAAgLgLg"
      );
    this.shape_2.setTransform(26.1, 21.15);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#666600")
      .s()
      .p(
        "AjfgsQAhgMAXgEIAPAwQAagEAagHIgPgwQAggJAggMIAOAzQAkgNAjgPIgWgvIAwgYIAUAwIApgWIgTgxIARgLIASgLIAAAAIBXC1QgfAjhXAzQhYAxivA2gAiPBeIAoAeIAag7IgngigAAMABQgKALAAAOQAAAOAKAKQALALAOAAQAPAAAKgLQAKgKAAgOQAAgOgKgLQgKgJgPAAQgOAAgLAJgAB4gXIApAaIAQguIglgig"
      );
    this.shape_3.setTransform(22.375, 18.55);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.king,
    new cjs.Rectangle(-1, -1, 46.8, 39.1),
    null
  );
  (lib.holmes = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AghhOQAIANAFANQAGANAHAeQAHAdAkgFQAjgEgCAZQgDAWAIAWQAJAWgoADQgpACgMgfQgNgfgJgrQgIgqgNgWQgJgNgNgXIAYgFQACgDAEAHQAEAIAIANg"
      );
    this.shape.setTransform(76.3318, 69.8885);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#663300")
      .s()
      .p(
        "AgKBMQgNgfgJgrQgIgqgNgWIgWgkIAYgFQACgDAEAHIAMAVQAIANAFANQAGANAHAeQAHAdAkgFQAjgEgCAZQgDAWAIAWQAJAWgoADIgGAAQgkAAgLgdg"
      );
    this.shape_1.setTransform(76.3318, 69.8885);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAGAGQghAHgUAAQgUABALgTQALgUAWAJQAWAJAHgHQAJgcARgKQAQgKAKAPQAJAQgQAPQgJAJgaARQgBgCgBgCQgCAAgEABQgCAAgCABQgIAMgYAlAA8AaQghgLABgDQABgIgNAGAAOAGQgBgCgBgBQgBACgFABQgBABgBABQgEABAGgDAAGgOQAJANgDAE"
      );
    this.shape_2.setTransform(12.6771, 0.1);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AB7gdQAxBPgYAZQhwBDhtAnQgmg/gYhJQgYhJAFgvQAFgvA0gnQA1goA6AuQA7AuAyBQg"
      );
    this.shape_3.setTransform(22.32, 16.8993);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#663300")
      .s()
      .p(
        "AiHAtQgYhJAFgvQAFgvA0gnQA1goA6AuQA7AuAyBQQAxBPgYAZQhwBDhtAnQgmg/gYhJg"
      );
    this.shape_4.setTransform(22.32, 16.8993);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AhwBeQgjAQhPAOADjh7QhKBRgrAf");
    this.shape_5.setTransform(26.2, 25.575);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AjQC9QgPgZgJgdQgbhYAmhRQAFgKAFgKQA0hbBmgfQBlggBeAwQAkASAbAaQAaAaARAhIAAAAQi3DIkNAvg"
      );
    this.shape_6.setTransform(24.4306, 18.985);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#666600")
      .s()
      .p(
        "AjQC9QgPgZgJgdQgbhYAmhRIAKgUQA0hbBmgfQBlggBeAwQAkASAbAaQAaAaARAhIAAAAQi3DIkNAvg"
      );
    this.shape_7.setTransform(24.4306, 18.985);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AEhhsQALAShLAtQhLAsh4AsQh3AuhdASQhdAUgMgSQgNgTBMgsQBLguB4grQB3guBdgSQBdgTANASg"
      );
    this.shape_8.setTransform(31.682, 24.3632);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#666600")
      .s()
      .p(
        "AkfBtQgNgTBMgsQBLguB4grQB3guBdgSQBdgTANASQALAShLAtQhLAsh4AsQh3AuhdASQgxALgaAAQgZAAgFgJg"
      );
    this.shape_9.setTransform(31.682, 24.3632);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ADNiUQAMAMgzAzQgzA0hVA8QhUA/hFAiQhEAkgMgLQgNgMA0g0QAyg0BVg8QBUg+BFgjQBFgjAMALg"
      );
    this.shape_10.setTransform(21.7352, 28.8827);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#666600")
      .s()
      .p(
        "AjLCVQgNgMA0g0QAyg0BVg8QBUg+BFgjQBFgjAMALQAMAMgzAzQgzA0hVA8QhUA/hFAiQg0AbgTAAQgGAAgDgCg"
      );
    this.shape_11.setTransform(21.7352, 28.8827);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.holmes,
    new cjs.Rectangle(-1, -6.5, 85.9, 87.9),
    null
  );
  (lib.hat = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AirCKIhDAYQhlAlB8AFQEJgoDPh/QBHg4hyAOIg+AWIhwjcIkxB4gACYARIlDB5");
    this.shape.setTransform(28.4161, 20.425);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AjuCiIBDgYIFDh5IA+gWQBygOhHA4QjPB/kJAoQh8gFBlglgAkJhTIExh4IBwDcIlDB5gACYARg"
      );
    this.shape_1.setTransform(28.4161, 20.425);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.hat,
    new cjs.Rectangle(-1, -1, 58.9, 42.9),
    null
  );
  (lib.grassbit = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#007400")
      .ss(1, 1, 1)
      .p(
        "AATAoQgIgSAAgTQgBgiAegjQgoARgVAgAA2BDQgTgxA/g2QgqgHgtAuAhIA0QAgg+g5guQA1gBAXAoAgoAUQAHgUAMgR"
      );
    this.shape.setTransform(9.75, 6.65);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.grassbit,
    new cjs.Rectangle(-1, -1, 21.5, 15.3),
    null
  );
  (lib.grandpa = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AgFgaQAjBPAAAAIBWAhIgahEQgBAAhegsgAh0hTIBJgCIAkA2g");
    this.shape.setTransform(102.4292, 58.0706, 1.3905, 1.3908);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FF0000")
      .s()
      .p("AAeA1IgjhPIBfAsIAaBEgAh0hTIBJgCIAkA2g");
    this.shape_1.setTransform(102.4292, 58.0706, 1.3905, 1.3908);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("ABqh8Qg9BWA4AxQgwBRhVAsQgDgGgHgHQg/hEAAhdQAAg1AUgsQBRBEBug5g");
    this.shape_2.setTransform(51.8133, 20.2058, 1.3905, 1.3908);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p("AgqB7Qg/hEAAhdQAAg1AUgrQBSBEBtg6Qg9BWA4AxQgxBRhUAsIgKgNg");
    this.shape_3.setTransform(51.8133, 20.2058, 1.3905, 1.3908);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }] })
        .wait(1)
    );
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("ABTg0IAbgHAhbA8QgPgEgDgLQgEgQAfgVQAdgSAugM");
    this.shape_4.setTransform(82.3564, 5.359, 1.3905, 1.3908);
    this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ABFgmIAAAeQAAAUgPAOQgPAPgUAAIglAAQgUAAgPgPQgPgOAAgUIAAgeQAAgBAAgBICJAAQAAABAAABg"
      );
    this.shape_5.setTransform(78.2055, 96.7677, 1.3905, 1.3908);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AFQgoQkPhlj1h3QDEApCcAAQAKAJAQAHQApARAiAiQAxAwAOBAQAFAZAAAaQAAA5gXAvQgsBwifAZQjhAXjUggIgSi/QA7ABA3gHQBlgLgChfQgIhug5hFQASgDgCgN"
      );
    this.shape_6.setTransform(73.1234, 76.9243, 1.3905, 1.3908);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#333399")
      .s()
      .p(
        "AlCDzIgSi/QA7ABA3gHQBlgLgChfQgIhug5hFQASgDgCgNQAbAOgfgTQD1B3EPBlQAFAZAAAaQAAA5gXAvQgsBwifAZQheAJhcAAQiAAAh7gSg"
      );
    this.shape_7.setTransform(73.1234, 76.9243, 1.3905, 1.3908);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p("AkBhtQDFApCaAAQAKAJARAHQApARAiAiQAwAwAOA/QkNhkj2h3g");
    this.shape_8.setTransform(83.9002, 55.8801, 1.3905, 1.3908);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.grandpa,
    new cjs.Rectangle(24.7, -4, 96.89999999999999, 118.3),
    null
  );
  (lib.grandma = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ABagpQALAYgTAbQgSAdglASQgkARgigEQgigEgLgXQgLgYASgcQATgdAlgRQAkgSAiAEQAiAFALAXg"
      );
    this.shape.setTransform(35.0848, -23.6535, 1.4037, 1.4024, -19.4863);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgrBGQgjgEgKgXQgLgYASgcQATgdAlgRQAkgSAiAEQAhAFAMAXQALAYgTAbQgSAdglASQgdAOgbAAIgOgBg"
      );
    this.shape_1.setTransform(35.0848, -23.6535, 1.4037, 1.4024, -19.4863);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ACojRQBEAygTA+QgTA+gWAYQgPgGgSAAQgkAAgaAZQgZAbAAAmQAAAmAZAbQAEAEAFAEQhABHhKAVQhTAXgyg2Qgxg2ANhiQANhiBFhWQBEhWBSgWQBUgXBFAzg"
      );
    this.shape_2.setTransform(52.9211, -0.5547, 1.4039, 1.4022);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ai1DPQgxg2ANhiQANhiBFhWQBEhWBSgWQBUgXBFAzQBEAygTA+QgTA+gWAYQgPgGgSAAQgkAAgaAZQgZAbAAAmQAAAmAZAbIAJAIQhABHhKAVQgZAHgVAAQg0AAgjgmg"
      );
    this.shape_3.setTransform(52.9211, -0.5547, 1.4039, 1.4022);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("ABTg0IAbgHAhbA8QgPgEgDgLQgEgQAfgVQAdgSAugM");
    this.shape_4.setTransform(81.8856, 4.6527, 1.4039, 1.4022);
    this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ABFgmIAAAeQAAAUgPAOQgPAPgUAAIglAAQgUAAgPgPQgPgOAAgUIAAgeQAAgBAAgBICJAAQAAABAAABg"
      );
    this.shape_5.setTransform(78.092, 97.0591, 1.4039, 1.4022);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ACzAvIAUg1QgLAAgGAEQgEACgCAEQgDADAAAEQgDAFgEADQgIAFgKgBQgKgCgFgHQgDgFgCgEQAAgEAAgDQgBgFgEgEQgFgHgKgCQgKgBgIAFQgEAEgDAEQgCADgBAFQgCACgEADQgIAGgKgBQgKgBgGgIQgCgEgCgEQgBgDABgEQgBgFgDgFQgHgIgJgBQgBAAAAAAAAPghQgBABgBAAQgJgBgHAGQgEAEgDAEQAAAEgCAEQgCADgEAEQgHAGgKgBQgKgBgGgHQgEgEgBgEQAAgEgBgEQgCgFgDgEQgGgHgKgBQgKgBgIAGQgEAEgCAEQAAAEgCAEQgCADgEAEQgIAGgKAAQgJgBgHgIQgEgEgBgEQAAgEgBgEQgBgFgEgEQgEgFgogBIAhAz"
      );
    this.shape_6.setTransform(71.277, 38.8092, 1.4033, 1.4017);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAPAmIAAAAQhRABhkgmIgggzQAnABAFAFQADAEABAFQACAEgBAEQACAEADAEQAHAIAKABQAJAAAIgGIAGgHQACgEAAgEQACgEAEgEQAIgGAKABQAKABAGAHQAEAEABAFQABAEAAAEQABAEAEAEQAGAIAKABQAKABAIgHIAGgHQACgEAAgEQACgEAEgEQAHgGAJABIACgBIAAAAIABAAQAJABAHAIQADAFABAFQgBAEABADQABAEADAFQAHAHAJABQAKABAIgGQAFgCACgDQAAgFACgDQADgEAEgEQAIgFAKABQAKACAGAHQADAEABAFQgBAEABADIAFAJQAFAHAKACQAKABAIgFQAEgDADgFQABgEACgDQACgDAEgDQAGgEALAAIgUA1QgZAIgiAAQgtAAg8gNg"
      );
    this.shape_7.setTransform(71.277, 39.3219, 1.4033, 1.4017);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ACsjbQAKAJAQAHQApARAiAiQAxAwAOBAQAFAZAAAaQAAA5gXAvQgsBwifAZQjhAXjUggIgSi/QA7ABA3gHQBlgLgChfQgIhug5hFQASgDgCgNAFQgoQkPhlj1h3"
      );
    this.shape_8.setTransform(72.9677, 76.8053, 1.4039, 1.4022);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FF99FF")
      .s()
      .p(
        "AlCDzIgSi/QA7ABA3gHQBlgLgChfQgIhug5hFQASgDgCgNQAbAOgfgTQD1B3EPBlQAFAZAAAaQAAA5gXAvQgsBwifAZQheAJhcAAQiAAAh7gSg"
      );
    this.shape_9.setTransform(72.9677, 76.8053, 1.4039, 1.4022);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p("AkBhtQDFApCaAAQAKAJARAHQApARAiAiQAwAwAOA/QkNhkj2h3g");
    this.shape_10.setTransform(83.8481, 55.5884, 1.4039, 1.4022);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.grandma,
    new cjs.Rectangle(20.9, -36.2, 101, 150.7),
    null
  );
  (lib.grad = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ADNguIADAdQg3BcieACIDSh7IB2hFIkShFIlzCVIA8AkIAhAUIAHgnAjvBOIgQgNIgfBFIArAzIAlhPIghgcIAKg5ICbBgIBFgoAj/BBIAGA/IAKgyAkGABIAHBA"
      );
    this.shape.setTransform(32.25, 18.5);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#CC0000")
      .s()
      .p("Aj2BBIAfhFIAGA/IAKgyIAhAbIglBQgAD0hzIADAdQg3BbifADg");
    this.shape_1.setTransform(28.275, 25.425);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AjlA3IAHgoIgHAoIgggUIg9gkIFziVIESBFIh2BGIjTB6IhEAogAj/BiIgGg/IAgAUIgKA5gAjlA3g"
      );
    this.shape_2.setTransform(32.25, 15.1);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.grad,
    new cjs.Rectangle(-1, -1, 66.5, 39),
    null
  );
  (lib.gladiator = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AiVDkQgOAHgMAJQgnAggLA9QhNhsAAiKQAAgZADgZQAIhJAfhAQAfg+A1g1QBshsCSgOQAFgBAGAAQARgCATAAQA/AAA5AQQgRAJgOAJQg5AlAAAkIAABAAiVDkQgmhEAAhTQAAgSACgSQALhoBNhNQBOhOBqgLQAQgCASAAQASAAASACAhJDQQgtg8AAhPQAAgOABgOQAJhQA7g7QA7g8BSgIQANgCANAAQAUAAATADQAcAEAYAJQAWgLAVgNQAdgRARgRQAOArgaA2QgFACgGADQADACACADQgIABgIABQgEABgEAAQgCABgCABQgyAVg+APQgyAcgnAuIAvBLIAiAIIgQBEIhGgQIAHghIgjg4QgTAhgRAnQgXA4gSApQgJgMgFgHIhMAU"
      );
    this.shape.setTransform(30.2781, 33.6875);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FF0000")
      .s()
      .p(
        "AkRBbQAAgZADgZQAIhJAfhAQAfg+A0g1QBshsCTgOIAKgBQASgCASAAQBAAAA5AQQgRAJgPAJQg5AlABAkQgSgCgTAAQgRAAgRACQhqALhNBOQhOBNgLBoQgCASAAASQAABTAnBEQgOAHgMAJQgnAggLA9QhNhsAAiKg"
      );
    this.shape_1.setTransform(27.4125, 33.6875);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#CCCCCC")
      .s()
      .p(
        "AilDIQgtg9AAhPQAAgOABgNQAJhQA7g8QA8g8BRgIQANgBANAAQAVAAASADQAcAEAYAJQAXgMAUgMQAdgSARgQQAOArgaA1IgLAGIAFAFIgQACIgIABIgEABQgxAWg/AOQgxAcgnAuIAuBMIAiAHIgQBFIhFgQIAHgiIgjg3QgUAggRAoIgoBhIgPgTg"
      );
    this.shape_2.setTransform(39.4531, 34.5125);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AisBOQAAgSACgRQALhpBOhNQBOhOBpgKQARgCARAAQATAAASACIAABAQgTgDgUAAQgOAAgMABQhSAIg7A9Qg8A7gIBQQgCAOAAAOQAABPAtA8IhLAUQgnhEAAhUg"
      );
    this.shape_3.setTransform(28.725, 33.5);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.gladiator,
    new cjs.Rectangle(-1, -1, 62.6, 69.4),
    null
  );
  (lib.freud = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#000000").s().p("AgsgjIBZAmIhYAhg");
    this.shape.setTransform(
      106.3477,
      62.0465,
      1.3959,
      1.3959,
      0,
      -14.2108,
      165.7892
    );
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#000000").s().p("AgsgjIBZAmIhYAhg");
    this.shape_1.setTransform(108.1345, 61.4838, 1.3959, 1.3959, -14.2108);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AgZA2QAAgBAAgCIAAhmQAAgKAHgIQAIgIAKAAIAAAAQALAAAHAIQAIAIAAAKIAABmQAAACAAABAgZA2QABgKAGgGQAIgIAKAAIAAAAQALAAAHAIQAHAGABAKQgBAJgHAHQgHAIgLAAIAAAAQgKAAgIgIQgGgHgBgJg"
      );
    this.shape_2.setTransform(97.2167, 34.9869, 1.397, 1.397, 19.9855);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#663300")
      .s()
      .p(
        "AAABOQgKAAgIgJQgGgGgBgJQABgKAGgGQAIgIAKAAIAAAAQALAAAHAIQAHAGABAKQgBgKgHgGQgHgIgLAAIAAAAQgKAAgIAIQgGAGgBAKIAAgDIAAhlQAAgLAHgIQAIgHAKAAIAAAAQALAAAHAHQAIAIAAALIAABlIAAADQgBAJgHAGQgHAJgLAAg"
      );
    this.shape_3.setTransform(97.2167, 34.9869, 1.397, 1.397, 19.9855);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ACPgRQgWAJgoAPQhWAhgogHQhPgPgqhQQgrhQAThkQANhGAogzQhCAGhYBDQhXBDADCoQACCnB3BxQB2BwEAAWQEBAXAAhGQAAhHhqg/QhphAgQgpQBkg1AcgXQAcgYAQgSQAQgSAOg4IhDglQACAnglAjQgjAhhBAdQAKgEAFgCIgkAQQgqAQA4gXg"
      );
    this.shape_4.setTransform(73.545, 18.3986);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#CCCCCC")
      .s()
      .p(
        "AB4FnQkAgWh2hwQh3hxgCinQgDioBXhDQBYhDBCgGQgoAzgNBGQgTBkArBQQAqBQBPAPQAoAHBWghIA+gYQg4AXAqgQIAkgQIgPAGQBBgdAjghQAlgjgCgnIBDAlQgOA4gQASQgQASgcAYQgcAXhkA1QAQApBpBAQBqA/AABHQAAA0iUAAQgvAAg+gFg"
      );
    this.shape_5.setTransform(73.545, 18.3986);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#CCCCCC").s().p("AAFgBIAWgJIgjAOIgSAHIAfgMg");
    this.shape_6.setTransform(87.325, 16.844);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
          ],
        })
        .wait(1)
    );
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("ABagjIAbgHAhsArQgLgLADgKQAFgQAlgEQAigBAtAL");
    this.shape_7.setTransform(81.1856, 2.3888, 1.397, 1.397);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AGnhcQgGgCgFgCQhkgrA/hdQgDgBgCgBQhNgrgEhOQgDgpAYgRQANgJATgCQAhgFAUgpQAXgtgCglAGnhcQAzAYArArQBfBeAACHQAAAGAAAGQgBAEAAADQgDBDgdA6Qg9CdjeAjQlbAjlEg6QgXgEgWgHIgYj6QgSgDgSgCQiGgTADhzQAKiYBQhhQAKACALAAQCsgUCYAEQAbADAQgDQAPgDAFgIICPDDICBgRIgDB3IHHBTAhxidQACgEAAgFQAAgEgCgCIIYBQAiFiSQBQBhAKCYQADCGiNAPQh7ARiMgNAhvimILTF+"
      );
    this.shape_8.setTransform(59.7717, 57.8453);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p("Alpi8QAAgDgBgDIIYBQQAzAYArAsQBfBeAACGIAAANg");
    this.shape_9.setTransform(84.7, 59.975);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#663300")
      .s()
      .p(
        "AnLFEQgXgEgWgHIgXj6QCLANB7gRQCNgPgCiFQgLiZhPhhQAOgDAGgIICQDEIB/gRIgDB3IHHBSQgDBDgcA6Qg+CdjeAjQiDANh/AAQjTAAjKgkgAIPAeInHhSIADh3Ih/ARIiQjEQABgEAAgFILTF+IgBAHg"
      );
    this.shape_10.setTransform(68.15, 77.1203);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.freud,
    new cjs.Rectangle(-2.4, -19, 124.4, 133.2),
    null
  );
  (lib.empty1000 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 0, 0);
  (lib.os_stopwatchLogo = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgdA5IAAhYIAMAAIAAAHQAEgEAGgCQAFgDAFAAQAMAAAGAJQAHAJAAAPQAAAIgDAGQgBAHgFAEQgDAFgGACQgFADgFAAQgFAAgEgCQgEAAgEgDIAAAbgAgIgUIgJAFIAAAkIAHADIAIABQAIAAAGgGQAEgGAAgMQAAgMgDgFQgEgHgJAAQgDABgFACgAH+AaQgJgJAAgQQAAgPAJgJQAIgKAOAAQANAAAJAKQAIAJAAAPQAAAQgIAJQgJAKgNAAQgOAAgIgKgAIGgRQgFAGAAAMQAAAMAFAHQAFAGAJAAQAIAAAGgGQAFgHAAgMQAAgMgFgGQgFgGgJAAQgJAAgFAGgACRAeQgHgHAAgJQABgHADgEQADgEAGgDQAGgDAIAAIASgBIAAgDIgBgFIgEgFIgFgCIgIAAIgJABIgLADIAAAAIAAgLIAJgCIALAAIANAAQAFACADACQAFADACAEQABAFAAAGIAAArIgLAAIAAgGIgDADIgGACIgGACIgJACQgIgBgGgFgACsAAIgMACQgEABgDADQgDADAAAFQAAAFAEADQADADAHAAQAGAAAEgCIAJgFIAAgSIgLAAgAhiAaQgJgJABgQQgBgPAJgJQAIgKAOAAQANAAAJAKQAIAJAAAPQAAAQgIAJQgJAKgNAAQgOAAgIgKgAhagRQgFAGAAAMQAAAMAFAHQAFAGAJAAQAIAAAGgGQAFgHAAgMQAAgMgFgGQgFgGgJAAQgJAAgFAGgAqKAgQgHgDgGgGQgFgFgDgJQgDgJAAgJQAAgLADgIQADgJAGgFQAEgHAIgCQAHgDAJgBQAKABAHADQAIACAFAHQAGAFACAIQAEAJAAALQAAAJgEAJQgCAJgGAFQgFAHgIACQgHADgKABQgJgBgHgDgAqOgjQgHAJgBARQABAQAHAJQAIAKANgBQANABAHgKQAIgJAAgQQAAgRgIgJQgHgJgNAAQgNAAgIAJgAHLAhQgGgCgFgEQgEgFgCgGQgDgHAAgIQABgPAIgJQAJgKAPABQAFgBAGACIAJAEIAAAMIAAAAIgKgGQgGgCgEAAQgKAAgGAHQgFAFAAAMQAAAMAFAGQAGAHAKgBIAGgBIAGgCIAFgCIADgCIAAAAIAAAMIgKADQgEACgGAAQgHAAgGgCgAEVAhQgGgCgEgEQgEgFgCgGQgDgHAAgIQAAgPAJgJQAJgKAPABQAFgBAFACIAKAEIAAAMIgBAAIgKgGQgFgCgFAAQgJAAgGAHQgGAFABAMQgBAMAGAGQAFAHAKgBIAHgBIAGgCIAFgCIACgCIABAAIAAAMIgKADQgFACgFAAQgIAAgGgCgADdAeQgGgGABgMIAAgiIgIAAIAAgJIAIAAIAAgTIALAAIAAATIAWAAIAAAJIgWAAIAAAdIAAAIQAAADABADIAEADIAHABIAGgBIADgBIABAAIAAAKIgGABIgHABQgKAAgFgFgAiPAeQgGgGAAgMIAAgiIgIAAIAAgJIAIAAIAAgTIALAAIAAATIAXAAIAAAJIgXAAIAAAdIAAAIQABADABADIAEADIAHABIAFgBIAEgBIABAAIAAAKIgHABIgHABQgKAAgEgFgAjbAhIgPgFIAAgPIABAAQAGAGAJADQAJADAHAAQALAAAGgEQAGgEAAgHQAAgFgDgDQgCgCgHgCIgJgCIgLgBQgMgDgFgGQgGgGABgKQAAgLAJgHQAJgGAOgBQAJABAIACQAHABAHADIAAAOIgBAAQgFgFgJgCQgIgDgIAAQgJAAgGAEQgFAEAAAFQAAAGACADQADADAHACIALACIAMACQAKADAEAFQAFAFAAAJQAAAEgCAGQgCAFgFADQgEAEgHACQgGACgJAAQgKAAgHgCgAlhAaQgJgJAAgQQAAgPAJgJQAIgKAPAAQAOAAAGAIQAIAIAAAOIAAAFIgwAAQAAAGABAEQACAFADADQADADAEABQAEABAFAAQAIAAAGgCIAKgFIABAAIAAAMIgMADIgMACQgRAAgJgJgAlZgTQgFAFAAAJIAlAAQAAgJgFgFQgEgEgIAAQgJAAgGAEgAKYAhIAAgkIgBgIIgBgGIgEgEQgDgBgEgBQgFABgEACIgKAGIABADIAAAEIAAAoIgLAAIAAgkIgBgIQAAgEgCgCQgBgDgDgBQgCgBgFgBQgEABgFACIgJAGIAAAvIgLAAIAAhAIALAAIAAAIQAGgFAEgDQAGgCAGAAQAGAAAFADQAFADACAFQAHgGAFgCQAFgDAHAAQALAAAFAHQAFAHAAALIAAApgAGVAhIAAgQIAOAAIAAAQgAFxAhIAAgkIgBgIIgCgGQgBgDgDgBQgDgBgFgBQgEABgFACQgEACgFAEIAAAvIgLAAIAAhaIALAAIAAAiQAFgFAFgDQAGgCAGAAQAKAAAGAHQAFAGABAMIAAApgABlAhIgRgxIgRAxIgKAAIgShAIAMAAIAMAyIAQgyIAJAAIARAyIAMgyIALAAIgRBAgAmGAhIAAgkIAAgIIgCgGQgCgDgCgBQgDgBgEgBQgFABgEACQgGACgEAEIAAAvIgLAAIAAhAIALAAIAAAIQAFgFAGgDQAFgCAGAAQAKAAAGAHQAGAGgBAMIAAApgAnSAhIAAhAIALAAIAABAgAnzAhIAAhaIALAAIAABagAoUAhIAAgkIAAgIIgCgGQgCgDgCgBQgDgBgEgBQgFABgEACQgFACgFAEIAAAvIgLAAIAAhAIALAAIAAAIQAFgFAGgDQAFgCAGAAQALAAAFAHQAGAGAAAMIAAApgAkfABIAAgKIAkAAIAAAKgAnSgqIAAgLIALAAIAAALg"
      );
    this.shape.setTransform(94.15, 12.7);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AAcg1QgEAAgCADQgDADAAADIAJA5IgRAAQgDAAgCADQgDACAAAFQAAADADACIApA1QADAEAEAAQAFAAACgEIArg1QABgCAAgDQAAgFgCgCQgCgDgDAAIgRAAIAIg5QAAgDgDgDQgBgDgEAAgAgaA2QADAAACgDQADgCAAgFIgJg4IARAAQADAAACgDQADgCAAgEQAAgDgCgDIgqg2QgDgDgFAAQgEAAgCADIgrA2QgBADAAADQAAAEACACQACADADAAIARAAIgIA4QAAAFACACQADADADAAg"
      );
    this.shape_1.setTransform(11.5, 11.5);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#3EFC64")
      .s()
      .p(
        "AgaBGQgDAAgCgEQgDgCAAgEIAJg6IgRAAQgDAAgCgCQgDgCAAgEQAAgDACgCIAqg2QADgEADAAQAEAAADAEIAqA2QACACAAADQAAAEgDACQgCACgCAAIgRAAIAIA6QAAAEgDACQgCAEgDAAg"
      );
    this.shape_2.setTransform(6.075, 9.95);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FE3535")
      .s()
      .p(
        "AgGBCIgqg1QgCgDAAgDQAAgEADgCQACgCADAAIAQAAIgIg6QAAgEADgDQACgCADAAIA1AAQADAAACACQADADAAAEIgIA6IAQAAQADAAADACQACACAAAEQAAADgCADIgqA1QgCAEgFgBQgDABgDgEg"
      );
    this.shape_3.setTransform(16.925, 13.05);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
          ],
        })
        .wait(1)
    );
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AqSBcIgBgBIgBAAIgog0IABADIAAABIAAABQAAALgHAGIAAABIAAgBQgIAKgJgCIg1AAQgJABgHgIIAAgBQgGgGgBgKIAAgCIAAgBIAGgoQgJAAgHgHIABABIAAAAIgBgBQgGgIAAgIQAAgGADgGIABgCIABgBIAqg2IAAABQAHgKAMAAIAAAAQALAAAHAIIABABIAAAAIAoA0IAAgDIAAgBIAAgCIAAAAQAAgJAGgHIAAABQAHgKAKABIA1AAQALAAAGAIQAGAHAAAJIAAAAIAAACIAAABIgGApQAJAAAHAGIAAgBIAAABIABABQAFAGAAAKQAAAHgEAGIgBABIgpA2IAAgBQgHAKgMAAIAAAAQgLAAgHgIgArAALIAFgGIAAABQAHgHAIABIgCgKIgDAFIAAAAQgHAHgJAAgABlBQQgEgBgDgCQgDgDAAgEIAAgnQgCAIgGAGQgLAMgSABQgTAAgKgNQAAAEgDADQgCACgEABIgFABIgCABIgIAAQgOAAgHgJIAAABQgGgGgCgMIgBADIAAABQgEAHgGAFQgGAFgIACIAAAAQgHADgLAAQgLAAgIgCIgBAAQgIgCgIgEQgDgBgCgDQgBgCAAgDIAAgOQAAgFADgDQADgCAEAAIAAAAQAEAAADACQAFAEAHADQAHACAGAAQAHAAAEgCQABgBAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAIAAgBIgEgCIgBAAIgHgCIgBAAIgLgCIAAAAQgPgDgIgIQgIgIAAgOQAAgPANgLIAAAAQAMgIASgBQALAAAIADIAAAAQAJABAHAEQACABACADQABACAAADIAAAIIACgBIAAgJQAAgEADgDQADgDAEAAIALAAQAEAAADADQACADAAAEIAAAJIANAAQAEAAADADQADADAAAEIAAAAQAKgMATAAQASAAALANIAAAAQAGAGACAIIAAgPQAAgEADgDQADgDAEAAIALAAQADAAADACIABAAQAGgEAJAAQARAAAJANIABgEQABgDACgCQADgCADAAIAMAAQADAAADACQADACAAAEIAEAQIAGgRQABgDADgCQACgCADAAIAJAAQADAAADACQADACABADIAFAQIADgPQABgEADgCQADgCADAAIALAAQADAAADACIADAEIAAAAQACgDADgBIAKgCIABAAIANgBIAOABIABAAQAHACAFADIAGAGIAAgBQAAgEADgDIAEgDIAAgJQAAgEADgDQADgDAEAAIALAAQAEAAADADQADADAAAEIAAAJIANAAQAEAAADADQADADAAAEIAAABIAAAAIABAAQALgMATAAQAHgBAHACIAAABIALAEIAAgVQAAgEADgDQADgCAEAAIALAAQAEAAADACQADADAAAEIAAAQQAGgCAGAAQAPAAAJAKQAHAJAAAPIAAAqQAAAFgDADQgDACgEAAIgLAAQgEAAgDgCQgDgDAAgFIAAglIAAgHIAAAAIgBgBIgDAAIgEAAIgBAAIgDACIAAArQAAAFgDADQgDACgEAAIgLAAQgEAAgDgCIgCgDIgBABIgLAEIgBAAQgGACgHAAQgJAAgHgDIAAAAQgIgCgGgHIgBAAQAAAEgCADQgDACgDABIgGABIgBABIgIAAQgPAAgIgJIABABQgJgIAAgRIAAgYIgBAAIAAABIAAAsQAAAFgDADQgDACgEAAIgLAAQgDAAgDgBIgHACQgEABgHABQgMAAgJgJIgBAAQgJgJAAgOQAAgLAGgHIgBABQADgEAEgDIgDgCQgDgCAAgEIgOA2QgBADgDACQgCADgEgBIgKAAQgDAAgCgCQgDgBgBgDIgIgWIgHAWQgBADgDABQgCACgDAAIgKAAQgEABgCgDQgDgCgBgDIgJgjQAAAJgDAIQgDAIgGAGIABAAQgFAGgIADIAAAAQgHAEgIAAIgIgBIAAAOQAAAEgDADQgDACgEABgAAwAAIgBAAQgCAFAAAIQAAAIADAFQACACAEAAQAEAAACgDQADgEAAgIQAAgIgDgFIAAAAQgCgCgEABIAAAAQgEAAgCABgAGpAbIAEgBIAEgDIABAAIAAAAQADgDAEgBIABAAIAEABIAAgPIgEABIgBAAQgDAAgDgCIgHgEIgHgBQgFAAgCACIgBAAQgDAEAAAIQAAAHAEAFIAAAAQACADAFgBIAEAAgAF0AbIADgBIAEgBIABAAIgBgMQAAgHABgGIgNAAIAAATIABAGIAAACIACAAIACAAgAAHAbIAAAAIACgBIAFgBIAAAAIgBgMQAAgHACgGIgNAAIAAATIAAAGIAAACIACAAIADAAgACDAAIgFAAIgBAAIgDACIAAAYIABAAIAFABQAEAAACgCIABgBQACgEAAgHQAAgJgCgEQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAAAgAEvAWIgJABIgDACIAAABIAAAAIADABIAGgBIABAAIAAAAIAAAAIAAAAIADgCIAEgCIgEAAIgBAAIAAAAgAgcAIIAAgIIgFgCQgDgDAAgEIAAgEIgEABIAAAAQgEgBgCgCQgEgDgHgCIAAAAQgHgDgGABQgGgBgDADIgCACIAAABIABAAIADACIAMACIgBAAIAMACIABABQANADAGAHIAAAAQAEADACAFgAJ5AsIAAABIAAgBIgBADQgCACgCACIgMAEIAAAAQgGACgHAAQgKAAgHgDIABAAQgJgCgGgHQgFgFgEgIQgDgIAAgLQAAgTAMgMIAAAAQAMgMATAAQAHgBAGACIAAABIAMAEIAEAEIABACIAAAAQALgNATAAQASAAALANIABAAQAFAGACAIIAAgPQAAgEADgDQADgDAEAAIALAAQADAAADACIAAAAQAIgEAHAAQAKAAAHAEIAAABIADACIAHgDIgBAAQAIgEAJAAQAPAAAJALIAAAAQAHAJAAAOIAAAqQAAAFgDADQgDACgEAAIgLAAQgEAAgDgCQgDgDAAgFIAAglIgBgHIAAgBIAAAAIgDAAIgEAAIgEACIAAACIAAApQAAAFgDADQgDACgEAAIgLAAQgEAAgDgCQgDgDAAgFIAAglIAAgHIAAgBIAAAAIgBAAIAAAAIgCAAIgEAAIgBAAIgDACIAAArQAAAFgDADQgDACgEAAIgLAAQgEAAgDgCQgDgDAAgFIAAgOQgCAIgGAGQgLAMgSABIAAAAQgTAAgLgOgAKRAAIAAAAQgDAFAAAIQAAAIADAFQACACAEAAQAEAAACgDQADgEAAgIQAAgIgDgFIAAAAQgCgCgEABIAAAAQgEAAgCABgAJeAbIAFgBIADgDIABAAIABAAQADgDAEgBIgBgGIABgHQgDAAgDgCIgIgEIgHgBQgEAAgDACIAAAAQgDAEAAAIQAAAHADAFIAAAAQADADAEgBIAEAAgAoLA2IAAgBQgKgEgGgGIgBgBQgGgHgEgLQgDgKAAgMQAAgMAEgJIgBAAQAEgLAHgHIAAAAQAGgIAKgEQAJgDALgBQAMABAJADQAKAEAHAIIAAAAQAGAHAEAKIABADIAAgCQAAgEADgDQADgDAEAAIALAAQADAAACACIABAAQAIgEAIAAQAPAAAJAKQAHAJAAAPIAAAqQAAAFgDADQgDACgEAAIgLAAQgEAAgDgCQgDgDAAgFIAAglIAAgHIAAAAIgBgBIgDAAIgEAAIgBAAIgDACIAAArQAAAFgDADQgDACgEAAIgLAAQgEAAgDgCQgDgDAAgFIAAgYIgBADQgEALgGAHIAAAAQgHAIgKAEQgJADgMABQgLgBgJgDgAnqAWIAAAAQAGgHAAgNQAAgMgGgHIAAAAQgEgFgIAAQgJAAgFAFIAAAAQgFAHAAAMQAAANAFAHQAGAGAIgBQAIABAEgGgAjEA5QgVAAgMgMIAAAAQgGgFgDgHIAAAMQAAAFgDADQgDACgEAAIgLAAQgEAAgDgCQgDgDAAgFIAAglIAAgHIAAAAIgBgBIgDAAIgEAAIgBAAIgDACIAAArQAAAFgDADQgDACgEAAIgLAAQgEAAgDgCQgDgDAAgFIAAhAQAAgEADgDQADgDAEAAIALAAQADAAACACIABAAQAIgEAIAAQAPAAAIAKQAGAGACALQADgIAFgGIAAAAQAMgNATAAQASAAAKALIAAABQAFAFADAKQACgDAEAAIAlAAQAEAAADADQADADAAADIAAALQAAAEgDACQgDADgEABIglAAQgEgBgCgCIgCABIgBABIAAABQADACAAAFIAAAMQAAACgBADQgCACgCACIgOAEQgHACgHAAIAAAAgAjLAaIABABIAFAAQAFABAFgCIAAAAIADgCIgXAAIABABIgBgBIAEACgAIYA3QgEAAgDgCQgDgDAAgFIAAgQQAAgEADgDQADgDAEAAIAOAAQAEAAADADQADADAAAEIAAAQQAAAFgDADQgDACgEAAgAlPA3QgEAAgDgCQgDgDAAgFIAAhAQAAgDABgCQgCgDAAgDIAAgLQAAgFADgCQADgDAEgBIAMAAQAEABADADQADACAAAFIAAALQAAADgCADQACACAAADIAABAQAAAFgDADQgDACgEAAgAlwA3QgEAAgDgCQgDgDAAgFIAAhaQAAgEADgDQADgCAEAAIALAAQAEAAADACQADADAAAEIAABaQAAAFgDADQgDACgEAAg"
      );
    this.shape_4.setTransform(81.0749, 11.4998);
    this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_stopwatchLogo,
    new cjs.Rectangle(-0.5, 1.5, 163.2, 20),
    null
  );
  (lib.duckEye = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgTAaQgIgLAAgPQAAgMAGgKIACgEQAIgLALAAQALAAAJALQAIAMAAAOQAAAPgIALQgJAMgLAAQgLAAgIgMgAgNgVQgDADAAAFQAAAEADADQADADAFAAQAEAAACgDQADgDAAgEQAAgFgDgDQgCgDgEAAQgFAAgDADg"
      );
    this.shape.setTransform(6.6857, 8.9627, 1.4611, 1.4611);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(1.5, 1, 1)
      .p(
        "AAtAAQAAACAAABQAAAYgNARQgNARgTAAQgSAAgNgRQgNgTAAgZQAAgBAAgBQAAgYANgRQANgRASAAQATAAANARQANATAAAYg"
      );
    this.shape_1.setTransform(6.6126, 8.9627, 1.4611, 1.4611);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgeArQgOgRAAgaIAAgCQABgXANgSQAMgRASAAQATAAANARQANATAAAYIAAADQAAAXgNARQgNASgTAAQgSAAgMgSg"
      );
    this.shape_2.setTransform(6.6126, 8.9627, 1.4611, 1.4611);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.duckEye,
    new cjs.Rectangle(-0.9, -0.9, 15.1, 19.799999999999997),
    null
  );
  (lib.duckColourb = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#1850E0")
      .s()
      .p(
        "AlhE4QgbhBgPhPQgLg9AKguQAJguASgRQATgSAbAAQAbAAATASIAbAlQAVAcAaAGQAHABAIgBQBtgMBgABIlHFIQgXghgUgpgAAHiTQAAhjBGhGQBFhFBjAAQBWAABAA2IAHAFIlQFOQg7hBAAhag"
      );
    this.shape.setTransform(40.1799, 38.6);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#E01414")
      .s()
      .p(
        "AkhDdIHCnCQAdAPAZAXIAHAHIAGAGQA+BCAABdQAAA3gXAvQgsBwifAZQhdAKhcAAQhVAAhTgJg"
      );
    this.shape_1.setTransform(71.9375, 71.5932);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#E0BD14")
      .s()
      .p(
        "Ai2GlQgagEgYgJQhegkhEhiIFIlHIAaAAQAUACALgCQAggGgjgnIgEgFIFOlPIALAKQAmAmARAvQABAagUApQgVAogQgBQgRgBgKADQgKADACAdQADA4A3AfIAEACQguBCBIAfIAOAGInCHCQhAgGg/gMg"
      );
    this.shape_2.setTransform(48.5375, 49.8125);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.duckColourb,
    new cjs.Rectangle(0, 0, 101, 94.6),
    null
  );
  (lib.dsd = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#9FA0B0").s().p("Ah4AAICgigIBQBQIhQBQIBQBQIhQBQg");
    this.shape.setTransform(23.75, 27.5);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#DFE2F8")
      .s()
      .p("AjKEXQgzAAAAgzIAAnHQAAgzAzAAIGWAAQAxAAAAAzIAAHHQAAAzgxAAg");
    this.shape_1.setTransform(25.35, 27.85);
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.dsd,
    new cjs.Rectangle(0, 0, 50.7, 55.7),
    null
  );
  (lib.dot2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#66CC00")
      .s()
      .p(
        "AiuCyIgCgBQhJhKAAhnQAAhaA4hDIARgTQBKhJBmAAQBnAABKBJIARATQA4BDAABaQAABnhJBKIgCABQhJBIhmAAQhmAAhIhIg"
      );
    this.shape.setTransform(25, 25);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.dot2,
    new cjs.Rectangle(0, 0, 50, 50),
    null
  );
  (lib.dot1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#B3B3B3")
      .s()
      .p(
        "AiuCyIgCgBQhJhKAAhnQAAhaA4hDIARgTQBKhJBmAAQBnAABKBJIARATQA4BDAABaQAABnhJBKIgCABQhJBIhmAAQhmAAhIhIg"
      );
    this.shape.setTransform(25, 25);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.dot1,
    new cjs.Rectangle(0, 0, 50, 50),
    null
  );
  (lib.doctor = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAbAAQAAAPgIAMQgIALgLAAQgKAAgIgLQgIgMAAgPQAAgPAIgLQAIgLAKAAQALAAAIALQAIALAAAPg"
      );
    this.shape.setTransform(86.9378, -16.7328, 1.4021, 1.4021, -12.6983);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#999999")
      .s()
      .p(
        "AgSAaQgIgKAAgQQAAgOAIgMQAIgKAKgBQALABAIAKQAIAMAAAOQAAAQgIAKQgIAMgLAAQgKAAgIgMg"
      );
    this.shape_1.setTransform(86.9378, -16.7328, 1.4021, 1.4021, -12.6983);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p("AirAsQCGhqCygkQAcALAOAQQjFAvioB7QACgdAJgag");
    this.shape_2.setTransform(62.7777, -2.2912, 1.4021, 1.4021);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(1)
    );
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAnAAQAAAPgLALQgMAMgQAAQgPAAgMgMQgLgLAAgPQAAgPALgLQAMgLAPAAQAQAAAMALQALALAAAPg"
      );
    this.shape_3.setTransform(101.8415, 67.6597, 1.6825, 1.6825);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#999999")
      .s()
      .p(
        "AgbAaQgLgLAAgPQAAgOALgMQAMgKAPgBQAQABALAKQAMAMAAAOQAAAPgMALQgLALgQAAQgPAAgMgLg"
      );
    this.shape_4.setTransform(101.8415, 67.6597, 1.6825, 1.6825);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AishXQABABAaAaQAuArBNAkQBNAkB2Ah");
    this.shape_5.setTransform(73.4685, 55.8246, 1.4021, 1.4021);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
          ],
        })
        .wait(1)
    );
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AB0hJIAngLAh/BVQgWgHgEgPQgFgWArgeQApgZBAgS");
    this.shape_6.setTransform(82.1941, 5.35);
    this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AA9gOIAAAxQAAAegeAAIg9AAQgeAAAAgeIAAgwIAAgsAg8g/IB5gBIAAAyAg8gNIB5gB"
      );
    this.shape_7.setTransform(79.271, 81.4814, 1.4021, 1.4021);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p("AgeAnQgeAAAAgdIAAgvIB5gCIAAAxQAAAdgeAAg");
    this.shape_8.setTransform(79.271, 84.9866, 1.4021, 1.4021);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_8 }, { t: this.shape_7 }] })
        .wait(1)
    );
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AhVljIHDAlQAQATAgAOQA6AYAvAvQAIAIAIAIQBQBbAAB7QAABPghBCQg+CdjeAjQldAklFg7QhWgQhIgxIgEjXQhNghAChYQAKiZBQhhQALACALgBQCsgTCYAEQAcADAQgDQBQBhAKCZQADCGiNAPQiMATiggTQgggFgZgJAiFlPQAdgGgKgZIAdALIJsCd"
      );
    this.shape_9.setTransform(59.6975, 77.4668);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#66CCCC")
      .s()
      .p("Ak2hOIHEAmQAQASAgAOQA6AXAvAwIAPAQg");
    this.shape_10.setTransform(82.1, 49.725);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AmeFKQhWgQhIgxIgEjXQAZAJAgAFQCgATCMgTQCNgPgDiGQgKiZhQhhQAdgGgKgZIAdALIJsCdQBQBbAAB7QAABPghBCQg+CdjeAjQiEAOiAAAQjTAAjLglg"
      );
    this.shape_11.setTransform(63.475, 77.4668);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.doctor,
    new cjs.Rectangle(-2.7, -22.9, 124.9, 138.1),
    null
  );
  (lib.an_Div = function (options) {
    this.initialize();
    this._element = new $.an.Div(options);
    this._el = this._element.create();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 100, 22);
  p._tick = _tick;
  p._handleDrawEnd = _handleDrawEnd;
  p._updateVisibility = _updateVisibility;
  p.draw = _componentDraw;
  (lib.dinosaur = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgWAZQgKgKAAgPQAAgOAKgKQAJgKANAAQANAAAKAKQAJAKAAAOQAAAPgJAKQgKAKgNAAQgNAAgJgKg"
      );
    this.shape.setTransform(55.2723, -30.5493, 1.4108, 1.4108);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ABQAAQAAAigYAYQgXAZghAAQggAAgYgZQgXgYAAgiQAAghAXgZQAYgYAgAAQAhAAAXAYQAYAZAAAhg"
      );
    this.shape_1.setTransform(50.734, -29.5249, 1.4108, 1.4108);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag4A6QgXgYAAgiQAAghAXgYQAYgZAgAAQAhAAAYAZQAXAYAAAhQAAAigXAYQgYAZghAAQggAAgYgZg"
      );
    this.shape_2.setTransform(50.734, -29.5249, 1.4108, 1.4108);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(1)
    );
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AiUg3QCShBAXAJQBOAFAcBeQAWAzAAAgQAAAhgqAJQgrAFgrhDQgRgniYA3");
    this.shape_3.setTransform(133.5, 82.1683);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#669900")
      .s()
      .p(
        "AAVAzQgRgniYA3IAAh6QCShBAWAJQBPAFAcBeQAWAzAAAgQAAAhgqAJIgGAAQgoAAgog+g"
      );
    this.shape_4.setTransform(133.5, 82.1683);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }] })
        .wait(1)
    );
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AC/CVQAjABh8gtQh7gtg7iTQgBgCgBgCQg4iPAPjoQARkNClhIQClhJCdAnQCbAnAyBgQAyBfgmB2QiIA0g2BDQg3BCgrCNQgJAbgCAcQABAMACAMQACAMAEAMQATBFA6BHQB1CQD6hkQADAxAhAaQAhAaA+BJQA9BJAACIQAABQghBCQg+CejgAjQlgAklGg7Qjigqi4jrQhKhXg3h8Qg3h9i0ElQi0EmBinIQBinHDOAKQDNAJBMBWQBNBVAaAsQAaAtgGACQhQBhgLCbQgDB1CIATQCgAUCNgTQCOgQgCiHQgLibhQhhg"
      );
    this.shape_5.setTransform(46.7727, 44.2781);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#669900")
      .s()
      .p(
        "Ag1MzQjigqi4jrQhKhXg3h8Qg3h9i0ElQi0EmBinIQBinHDOAKQDNAJBMBWQBNBVAaAsQAaAtgGACQhQBhgLCbQgDB1CIATQCgAUCNgTQCOgQgCiHQgLibhQhhQAjABh8gtQh7gtg7iTIgCgEQg4iPAPjoQARkNClhIQClhJCdAnQCbAnAyBgQAyBfgmB2QiIA0g2BDQg3BCgrCNQgJAbgCAcIADAYIAGAYQATBFA6BHQB1CQD6hkQADAxAhAaQAhAaA+BJQA9BJAACIQAABQghBCQg+CejgAjQiFAOiCAAQjVAAjKglg"
      );
    this.shape_6.setTransform(46.7727, 44.2781);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_6 }, { t: this.shape_5 }] })
        .wait(1)
    );
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AAPgQQAAgCAAgFQgEgJgIAEQgKACgFAYQgIAYgCACQADgBATADQAWACABACg");
    this.shape_7.setTransform(115.8104, 53.896, 1.4113, 1.4113, -23.7448);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p("AgBAaQgSgDgDABIAJgaQAHgYAJgCQAIgEAEAJIAAAHIAIAuQgBgCgXgCg");
    this.shape_8.setTransform(115.8104, 53.896, 1.4113, 1.4113, -23.7448);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AAVAAQACgBAFgBQAGgIgGgGQgGgJgYAEQgZACgDgBQACACAEASQAHAWgCACg");
    this.shape_9.setTransform(98.9104, 56.0093, 1.4113, 1.4113, -67.9865);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQgEgSgCgCQADABAZgCQAYgEAGAJQAGAGgGAIIgHACIgoAYQACgCgHgWg");
    this.shape_10.setTransform(98.9104, 56.0093, 1.4113, 1.4113, -67.9865);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AAVAAQACgBAFgBQAGgIgGgGQgGgJgYAEQgZACgDgBQACACAEASQAHAWgCACg");
    this.shape_11.setTransform(83.0216, 45.4148, 1.4113, 1.4113);
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p("AgYAAQgEgSgCgCQADABAZgCQAYgEAGAJQAGAGgGAIIgHACIgoAYQACgCgHgWg");
    this.shape_12.setTransform(83.0216, 45.4148, 1.4113, 1.4113);
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AAMAZQACABAEADQAKABACgJQADgJgPgSQgQgUgBgCQgBACgMAOQgPAQgCAAg");
    this.shape_13.setTransform(80.918, 27.9525, 1.4113, 1.4113, -23.438);
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p("AASAdIgGgEIgpgVQACAAAPgQQAMgOABgCQABACAQAUQAPASgDAJQgCAIgJAAIgBAAg");
    this.shape_14.setTransform(80.918, 27.9525, 1.4113, 1.4113, -23.438);
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AAIAZQABABADAEQAKADAFgIQAFgJgLgVQgLgXAAgCQgCACgPALQgTANgBgBg");
    this.shape_15.setTransform(89.7984, 9.1666, 1.4113, 1.4113, -13.1926);
    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#FFFFFF")
      .s()
      .p("AAMAeIgEgFIgjgeQABABATgNIARgNQAAACALAXQALAVgFAJQgEAGgFAAIgGgBg");
    this.shape_16.setTransform(89.7984, 9.1666, 1.4113, 1.4113, -13.1926);
    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AAOAYQACAAAEADQAKgBABgKQABgKgTgOQgUgQgBgCQAAADgKARQgLASgCAAg");
    this.shape_17.setTransform(104.9523, -0.7748, 1.4113, 1.4113, 25.9902);
    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#FFFFFF")
      .s()
      .p("AAOAYIgtgMQACAAALgSQAKgRAAgDQABACAUAQQATAOgBAKQgBAKgKABIgGgDg");
    this.shape_18.setTransform(104.9523, -0.7748, 1.4113, 1.4113, 25.9902);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.dinosaur,
    new cjs.Rectangle(-48.6, -42.3, 198, 173.2),
    null
  );
  (lib.deer = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAOAnQgWgFgNgSQgOgTAFgWQACgHACgGQAHAAAGAAQAWAFANASQANATgEAWQgBAHgDAGQgGAAgHAAg"
      );
    this.shape.setTransform(28.4135, -28.6819, 1.3931, 1.3921);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FF9900")
      .s()
      .p("AAOAnQgWgEgNgUQgOgRAFgYIAEgMIANAAQAWAEANAUQANASgEAWIgEANIgNAAg");
    this.shape_1.setTransform(28.4135, -28.6819, 1.3931, 1.3921);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AgdAcQgFgWAMgTQAMgUAWgFQAGgBAHAAQADAGABAGQAGAWgMATQgMAUgWAFQgGABgHAAQgDgGgCgGg"
      );
    this.shape_2.setTransform(57.9415, -32.0313, 1.3922, 1.3928, -65.1919);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FF0000")
      .s()
      .p("AgdAcQgFgWAMgTQAMgUAWgFIANgBIAEAMQAGAWgMATQgMAUgWAFIgNABIgFgMg");
    this.shape_3.setTransform(57.9415, -32.0313, 1.3922, 1.3928, -65.1919);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AgKAoQgQgRAAgXQAAgWAQgQQAFgFAFgDQAGADAFAFQAQAQAAAWQAAAXgQARQgFAEgGAEQgFgEgFgEg"
      );
    this.shape_4.setTransform(8.6172, -12.3538, 1.3928, 1.3923, 31.7425);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FF0000")
      .s()
      .p("AgKAoQgQgRAAgXQAAgWAQgQIAKgIIALAIQAQAQAAAWQAAAXgQARIgLAHIgKgHg");
    this.shape_5.setTransform(8.6172, -12.3538, 1.3928, 1.3923, 31.7425);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AgJAnQgRgQAAgXQAAgWARgQQAFgFAEgEQAGAEAFAFQAQAQAAAWQAAAXgQAQQgFAFgGAEQgEgEgFgFg"
      );
    this.shape_6.setTransform(-2.296, -36.3213, 1.3927, 1.3924, 34.9999);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#66CC00")
      .s()
      .p("AgKAnQgQgQAAgXQAAgWAQgQIAKgIIALAIQAQAQAAAWQAAAXgQAQIgLAIIgKgIg");
    this.shape_7.setTransform(-2.296, -36.3213, 1.3927, 1.3924, 34.9999);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AgJAoQgRgRAAgXQAAgWARgQQAFgFAEgDQAGADAFAFQAQAQAAAWQAAAXgQARQgFAEgGAEQgEgEgFgEg"
      );
    this.shape_8.setTransform(58.3245, -52.3612, 1.3927, 1.3924, -34.7361);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FF9900")
      .s()
      .p("AgJAoQgRgRAAgXQAAgWARgQIAJgJIALAJQAQAQAAAWQAAAXgQARIgLAIIgJgIg");
    this.shape_9.setTransform(58.3245, -52.3612, 1.3927, 1.3924, -34.7361);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AgJAnQgRgQAAgXQAAgWARgRQAFgEAEgEQAGAEAFAEQAQARAAAWQAAAXgQAQQgFAFgGAEQgEgEgFgFg"
      );
    this.shape_10.setTransform(31.8511, -43.6457, 1.3925, 1.3926, 46.7573);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#003399")
      .s()
      .p("AgKAoQgQgRAAgXQAAgWAQgRIAKgIIALAIQAQARAAAWQAAAXgQARIgLAIIgKgIg");
    this.shape_11.setTransform(31.8511, -43.6457, 1.3925, 1.3926, 46.7573);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ABtAsQgtAghAAAQhAAAguggQgcgUgKgYQAKgXAcgTQAughBAAAQBAAAAtAhQAcATAMAXQgMAYgcAUgAA8AeQgbAIghAAQggAAgXgRQgOgJgFgMQAFgMAOgJQAXgQAgAAQAgAAAWAJQAXAHA+AVQg0AVgbAJg"
      );
    this.shape_12.setTransform(39.3964, 2.7614, 1.3931, 1.3921);
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#FF6633")
      .s()
      .p(
        "AhXAWQgOgKgFgMQAFgMAOgJQAXgQAgAAQAgAAAWAJIBVAcQg0AVgbAJQgbAIggAAQghAAgXgQg"
      );
    this.shape_13.setTransform(43.889, 2.7614, 1.3931, 1.3921);
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#8D3300")
      .s()
      .p(
        "AhuAsQgcgUgJgYQAJgXAcgTQAuggBAAAQBBAAAsAgQAcATAMAXQgMAYgcAUQgsAghBAAQhAAAgugggAg3gVQgOAJgEAMQAEAMAOAKQAXAQAgAAQAhAAAbgIQAbgJA0gVIhVgcQgWgJggAAQggAAgXAQg"
      );
    this.shape_14.setTransform(39.3964, 2.7614, 1.3931, 1.3921);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
          ],
        })
        .wait(1)
    );
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ADHBNQgTAVgdARQhGAohYgNQhZgNg4g7Qg3g8AGhFQAAgJABgFQAEgXATgaQASgbAlAFQAkAFAOAnQANAogYAPQgYAPgIAFQgJAGgCABQACAEADAFQATAcAWAWQgKgXAbgcQAbgdAjATQAhATgBAVQgBAWgNARQgOASgOAIQAlAMArgEQgCgCgCgCQgKgPADgSQADgSAOgMQAOgLASACQARADAKAPQAKAPgCATQgBAFgCAGQAfgKAhgEg"
      );
    this.shape_15.setTransform(28.4893, -25.0241, 1.3931, 1.3921);
    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#8D3300")
      .s()
      .p(
        "AgHCOQhZgNg4g7Qg3g8AGhFQAAgJABgFQAEgXATgaQASgbAlAFQAkAFAOAnQANAogYAPIggAUIgLAHIAFAJQATAcAWAWQgKgXAbgcQAbgdAjATQAhATgBAVQgBAWgNARQgOASgOAIQAlAMArgEIgEgEQgKgPADgSQADgSAOgMQAOgLASACQARADAKAPQAKAPgCATIgDALQAfgKAhgEIgEALQgTAVgdARQg1Aeg/AAQgVAAgVgDg"
      );
    this.shape_16.setTransform(28.4893, -25.0241, 1.3931, 1.3921);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_16 }, { t: this.shape_15 }] })
        .wait(1)
    );
    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgLAMQgFgFABgHQgBgGAFgGQAFgEAGgBQAHABAFAEQAEAGAAAGQAAAHgEAFQgFAGgHgBQgGABgFgGg"
      );
    this.shape_17.setTransform(113.0798, 2.269, 1.3924, 1.3914);
    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AA6AAQAAAXgRARQgRAQgYAAQgXAAgRgQQgRgRAAgXQAAgXARgQQARgRAXAAQAYAAARARQARAQAAAXg"
      );
    this.shape_18.setTransform(117.3344, 4.1368, 1.3924, 1.3914);
    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#FF0000")
      .s()
      .p(
        "AgoAoQgRgQAAgYQAAgWARgRQARgQAXAAQAYAAARAQQAQARABAWQgBAYgQAQQgRAQgYAAQgXAAgRgQg"
      );
    this.shape_19.setTransform(117.3344, 4.1368, 1.3924, 1.3914);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
          ],
        })
        .wait(1)
    );
    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AjBAHQALACALgBQCrgSCWAEQAcADAQgD");
    this.shape_20.setTransform(27, 44.096);
    this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));
    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AgzA7QCLiLglhyQgCAAAAAAQgmAAgZAaQgZAYgNBBQgNA8AOBOQAAAFABAEQANBDASA8"
      );
    this.shape_21.setTransform(-13.6989, 52);
    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("rgba(255,204,102,0.976)")
      .s()
      .p("Ag0gLQANhBAZgYQAZgaAmAAIACAAQAlByiLCLQgOhPANg7g");
    this.shape_22.setTransform(-13.6989, 45.175);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_22 }, { t: this.shape_21 }] })
        .wait(1)
    );
    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("rgba(255,102,102,0.447)")
      .s()
      .p(
        "AghAhQgNgNAAgUQAAgSANgOQAOgPATAAQAUAAAOAPQAOAOgBASQABAUgOANQgOAOgUABQgTgBgOgOg"
      );
    this.shape_23.setTransform(73.4237, 19.0207, 1.3931, 1.3921);
    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AnIDhQBeDACgAeQDnAqD6gaQCegZAshwQAYgvAAg4QAAhhhEhEQgigigpgRQhIgdAthDQgCgBgBgBQgbgPgPgVQgPgWgCgcQgCgdASgMQAJgHAOgBQAXgEAOgdQARgggBgbQgRgugmgmQgzgzhCgOQgZgFgaAAQgOAAgMACQgNABgMACQhCAOgyAzQg8A7gIBRQgCAOAAAOQAAA7AZAwQAPAdAYAaQAiAmgfAHQA4BEAHBtQACBghkALQhjAOhzgOQhggOAChTQAIhtA5hEQgagGgVgcQgagkgBgBQgTgTgbAAQgbAAgTATQgSARgJAuQgKAtALA9QAPBQAbBAg"
      );
    this.shape_24.setTransform(50.7218, 47.5203, 1.3931, 1.3921);
    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f()
      .s("#000000")
      .ss(1.5, 1, 1)
      .p(
        "AAtAAQAAACAAABQAAAYgNARQgNARgTAAQgSAAgNgRQgNgTAAgZQAAgBAAgBQAAgYANgRQANgRASAAQATAAANARQANATAAAYg"
      );
    this.shape_25.setTransform(88.293, 2.7206, 1.3931, 1.3921);
    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#663300")
      .s()
      .p(
        "AjKG/QiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATIAbAlQAVAcAaAGQg5BEgIBtQgCBTBgAOQBzAOBjgOQBkgLgChgQgHhtg4hEQAfgHgigmQgYgagPgdQgZgwAAg7QAAgOACgOQAIhRA8g7QAygzBCgOQAMgCANgBQAMgCAOAAQAaAAAZAFQBCAOAzAzQAmAmARAuQABAbgRAgQgOAdgXAEQgOABgJAHQgSAMACAdQACAcAPAWQAPAVAbAPIADACQgtBDBIAdQApARAiAiQBEBEAABhQAAA4gYAvQgsBwieAZQhfAKhbAAQiWAAiRgagADulsQgNARAAAYIAAACQAAAaANASQANARATAAQATAAANgRQAMgRABgYIAAgDQAAgZgNgSQgNgSgTAAQgTAAgNASg"
      );
    this.shape_26.setTransform(50.7218, 47.5203, 1.3931, 1.3921);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
          ],
        })
        .wait(1)
    );
    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ACeCoQgaALghADQhRAGhKgzQhKgygZhNQgZhMAjg9QAEgJAEgEQANgTAdgQQAbgPAgAUQAeAUgEApQgGAqgcADQgcADgKACQgJABgDAAQABAFAAAFQAEAjALAcQAAgYAlgPQAlgPAWAgQAXAfgKAUQgKAUgUAKQgTAKgQAAQAcAbAoAQQgBgDAAgDQgEgSAKgPQALgPASgEQASgEAOAKQAPAJADASQADASgLAPQgDAFgFAFQAhAEAfAKg"
      );
    this.shape_27.setTransform(54.5616, -37.7443, 1.393, 1.3921, -4.2595);
    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#8D3300")
      .s()
      .p(
        "Ag4CJQhKgygZhNQgZhMAjg9QAEgJAEgEQANgTAdgQQAbgPAgAUQAeAUgEApQgGAqgcADIgmAFIgMABIABAKQAEAjALAcQAAgYAlgPQAlgPAWAgQAXAfgKAUQgKAUgUAKQgTAKgQAAQAcAbAoAQIgBgGQgEgSAKgPQALgPASgEQASgEAOAKQAPAJADASQADASgLAPQgDAFgFAFQAhAEAfAKIgIAJQgaALghADIgRAAQhIAAhCgtg"
      );
    this.shape_28.setTransform(54.5616, -37.7443, 1.393, 1.3921, -4.2595);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_28 }, { t: this.shape_27 }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.deer,
    new cjs.Rectangle(-20.6, -63.3, 147, 177.7),
    null
  );
  (lib.crown = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAjAAQAAAOgKAJQgKAKgPAAQgNAAgLgKQgKgJAAgOQAAgMAKgKQALgJANAAQAPAAAKAJQAKAKAAAMg"
      );
    this.shape.setTransform(0.7384, 2.6421, 1.2963, 1.2963, -18.6841);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#66CC99")
      .s()
      .p(
        "AgYAXQgKgKAAgNQAAgNAKgJQAKgKAOAAQAPAAAKAKQAKAJAAANQAAANgKAKQgKAJgPAAQgOAAgKgJg"
      );
    this.shape_1.setTransform(0.7384, 2.6421, 1.2963, 1.2963, -18.6841);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AhFgTICLAAIAAAnIiLAAg");
    this.shape_2.setTransform(3.4243, 7.5495, 1.2963, 1.2963, -18.6841);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#E0BD14").s().p("AhFAUIAAgnICLAAIAAAng");
    this.shape_3.setTransform(3.4243, 7.5495, 1.2963, 1.2963, -18.6841);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AiXgOQB8gzC0AzIAAA2QiPgzihAzg");
    this.shape_4.setTransform(12.9777, 39.8463, 1.2963, 1.2963, -18.6841);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#E0BD14")
      .s()
      .p("AiYAoIAAg2QB9gzCzAzIAAA2QiOgziiAzg");
    this.shape_5.setTransform(12.9777, 39.8463, 1.2963, 1.2963, -18.6841);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAQBMQANggAAgsQAAgsgNgfQgOgggRAAQgHAAgFAEQAAABACADQAHASAEBhQADA/gDAdQARgCANgeg"
      );
    this.shape_6.setTransform(15.2697, 21.3331, 1.2963, 1.2963, -18.6841);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#E0BD14")
      .s()
      .p(
        "AgOAQQgEhhgHgSIgDgEQAGgEAHAAQARAAANAgQANAfABAsQgBAtgNAfQgMAegRABQADgcgDg/g"
      );
    this.shape_7.setTransform(15.2697, 21.3331, 1.2963, 1.2963, -18.6841);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AgOBMQgOggAAgsQAAgsAOgfQANggARAAQAHAAAGAEQgBABgCADQgHASgEBhQgDA/ADAdQgRgCgMgeg"
      );
    this.shape_8.setTransform(1.2093, 26.088, 1.2963, 1.2963, -18.6841);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#E0BD14")
      .s()
      .p(
        "AgOBMQgNgfgBgtQABgsANgfQANggARAAQAHAAAGAEIgDAEQgHASgEBhQgDA/ADAcQgRgBgMgeg"
      );
    this.shape_9.setTransform(1.2093, 26.088, 1.2963, 1.2963, -18.6841);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AgtB4QAxAAAkgjQAkgkAAgxQAAgwgkgkQgkgjgxAAQgQAAgOADQAfAIAZAYQAjAkAAAwQAAAxgjAkQgZAYgfAHQAOAEAQAAg"
      );
    this.shape_10.setTransform(26.2908, 17.6061, 1.2963, 1.2963, -18.6841);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#E0BD14")
      .s()
      .p(
        "AhLB0QAfgHAZgYQAjgkAAgxQAAgxgjgjQgZgYgfgIQAOgDAQAAQAxAAAkAjQAkAjAAAxQAAAxgkAkQgkAjgxAAQgQAAgOgEg"
      );
    this.shape_11.setTransform(26.2908, 17.6061, 1.2963, 1.2963, -18.6841);
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAuB4QgxAAgkgjQgkgkAAgxQAAgwAkgkQAkgjAxAAQAQAAAOADQgfAIgZAYQgjAkAAAwQAAAxAjAkQAZAYAfAHQgOAEgQAAg"
      );
    this.shape_12.setTransform(-10.4258, 30.0226, 1.2963, 1.2963, -18.6841);
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#E0BD14")
      .s()
      .p(
        "AgnBVQgkgkAAgxQAAgxAkgjQAkgjAxAAQAQAAAOADQgfAIgZAYQgjAjAAAxQAAAxAjAkQAZAYAfAHQgOAEgQAAQgxAAgkgjg"
      );
    this.shape_13.setTransform(-10.4258, 30.0226, 1.2963, 1.2963, -18.6841);
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ADeAAQAAAthBAgQhBAhhcAAQhbAAhBghQhBggAAgtQAAgtBBggQBBggBbAAQBcAABBAgQBBAgAAAtg"
      );
    this.shape_14.setTransform(7.472, 23.9701, 1.2963, 1.2963, -18.6841);
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#FF0000")
      .s()
      .p(
        "AicBOQhBggAAguQAAgtBBggQBBggBbAAQBcAABAAgQBCAgAAAtQAAAuhCAgQhAAghcAAQhbAAhBggg"
      );
    this.shape_15.setTransform(7.472, 23.9701, 1.2963, 1.2963, -18.6841);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.crown,
    new cjs.Rectangle(-21.6, -2.6, 59.1, 54.7),
    null
  );
  (lib.crossLine = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(3, 1, 1)
      .p("AIg8jMgX3A5HIG4AAMAX3g5Hg");
    this.shape.setTransform(98.375, 182.8);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AsGckICAkzIjWAAIgFgCIB1kYIACABIDZAAIh1EZIDcAAIiAEzgAoRTYIB1kYIjcAAIBqj9IDcAAIBqj+IDbAAIhpD+IjcAAIhqD9IDcAAIh1EYgAoRTYgAmkHFIBqj9IDcAAIhqD9gAheDIIBpj8IjcAAIBqj+IAOAAIDNAAIBqj+IDcAAIhqD+IjcAAIhpD+IDbAAIhpD8gAheDIgAACowIBqj9IDcAAIhqD9gAFIstIBqj+IjcAAIBqj9IDcAAIhqD9IDcAAIhqD+gAFIstgAIc0oIBqj9IjcAAIBqj+IDcAAIhqD+IDcAAIhqD9gAIc0og"
      );
    this.shape_1.setTransform(99.5375, 182.8);
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("AvXckMAX3g5HIG4AAMgX3A5Hg");
    this.shape_2.setTransform(98.375, 182.8);
    this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.crossLine,
    new cjs.Rectangle(-1.5, -1.5, 199.8, 368.6),
    null
  );
  (lib.cross = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#CA0000")
      .s()
      .p("AAAA1Ig0A0Ig0g0IA0g1Ig0g0IA0g0IA0A0IA1g0IA0A0Ig0A0IA0A0Ig0A1g");
    this.shape.setTransform(7.9999, 7.9999, 0.7601, 0.7601);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.cross,
    new cjs.Rectangle(0, 0, 16, 16),
    null
  );
  (lib.an_ComboBox = function (options) {
    this.initialize();
    this._element = new $.an.ComboBox(options);
    this._el = this._element.create();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 100, 22);
  p._tick = _tick;
  p._handleDrawEnd = _handleDrawEnd;
  p._updateVisibility = _updateVisibility;
  p.draw = _componentDraw;
  (lib.clown = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FF0000")
      .s()
      .p(
        "AgHAlIgMAOIABgSIgQAKIAHgSIgSAFIALgPIgSgBIAPgKIgRgGIASgFIgOgMIASABIgJgQIARAHIgFgSIAPALIABgSIAKAPIAGgRIAFASIAMgOIgBASIAQgJIgHARIASgFIgLAPIASABIgPAKIARAGIgSAFIAOAMIgSgBIAKAQIgSgHIAFASIgPgLIgBASIgKgPIgGARg"
      );
    this.shape.setTransform(-61.1404, -61.0578, 1.4042, 1.4042);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(1.5, 1, 1)
      .p(
        "AArAjIgSgHIAFASIgPgLIgBASIgKgPIgGARIgFgSIgMAOIABgSIgQAKIAHgSIgSAFIALgPIgSgBIAPgKIgRgGIASgFIgOgMIASABIgJgQIARAHIgFgSIAPALIABgSIAKAPIAGgRIAFASIAMgOIgBASIAQgJIgHARIASgFIgLAPIASABIgPAKIARAGIgSAFIAOAMIgSgBg"
      );
    this.shape_1.setTransform(-61.1214, -61.0548, 1.4047, 1.4047);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(1.5, 1, 1)
      .p("AhIh7IACAAIAqAyIAhApIAmAtIAtA1QhMA5hdABQgDAAgDAAIAFhNIAFhSg");
    this.shape_2.setTransform(-49.4985, -42.0217, 1.4047, 1.4047);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFCC00")
      .s()
      .p("AhAB8IAEhNQA0gfAjgwIAmAtQgtBKhPAlIgFAAgAgyh7IACAAIAqAyQgWAWgbAQg");
    this.shape_3.setTransform(-52.6239, -42.0217, 1.4047, 1.4047);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FF0000")
      .s()
      .p("AApgMIAtA1QhMA5hdABQBPglAthKgAhQg8QAcgQAWgWIAhApQgjAxg0Adg");
    this.shape_4.setTransform(-49.1825, -38.4749, 1.4047, 1.4047);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AA2AEQAEAUgPARQgPATgYAEQgOAEgNgDQAEAXgQAUQgOAUgZAHQAAADABABQADALgFAIQgCAFgEADQACALAAAJQABAAACAAQAIgCAHAFQAHAFACAIQACAJgFAHQgEAHgJACQgBAAgBABQALANADATQAFAVgFATQATAGADAOQABAEgBAEQAGAEABAGQABAHgEAJQAGABAGADQANAHADAMQACAOgIANQgIALgOADQgOADgNgHQgNgHgDgOQgBgGABgHQgGADgIACQAAABAAACQAAAEAAAFQgCAFgCAFQgBABgBABQAAABAAABIgBABQgBABgBAAQgCADgDACQgDADgDABQgFADgFAAQgCAAgDAAQAAAAgBAAQgLAAgIgGQgDgDgCgCQgBgBAAAAQgEgFgBgEQgBgDgBgDQgCgFAAgFQAAgFACgEQgHgFgBgGQgBgDABgDQgFAFgHACIgBAAQAAABgBABQAAAAgBABIgBACQAAADgCADQgDAHgHABQgGACgEgDQgCAAgDAAQgBAAAAAAQgLgBgIgGQgDgDgCgCQgBAAAAgBQgEgEgBgFQgCgDgBgDQgBgEAAgFQAAgLAFgJQACgDADgEQABgBABgBQADgCACgCQADgCADgBQAAAAABAAIgBgBQgKADgLgDQgPgFgIgNQgJgPADgPQADgHADgGIgNgLQgMgCgIgJQgCACgCAAQgFABgFgGQgEgFgCgIQgDgIADgGQADgHAEgBQABAAABAAQAAgBAAgBQgFAAgEgBQgCAAgCACQgEACgFABQgCAAgDAAQgBAAAAAAQgGAAgDgCQgFgCgGgEQgCgBgCgCQgBgBgBgBQgDgEgCgFQgBgDgBgDQgBgFAAgFQAAgEABgFQABgGADgDQABgDACgCQgJgDgHgHQAAgBgBgBQgFgGgCgIQgCgFAAgFQAAgQAKgLQABgBABAAQgGgCgFgDQgDgDgCgBQAAgBgBgBQgEgEgBgFQgCgDAAgCQgCgGAAgFQAAgEACgFQAAgFADgFQACgEADgDQABgCACAAQACgCACgCQABgBAAAAQAAgBgBgCQgDgOAEgNQgCgCgDgCQAAgBgBgBQgFgGgCgIQgBgFAAgFQAAgQAJgLQACgBABgBQACgCADgCQADgCADgBQAFgBAFAAQgBgBAAgBQgEgUAMgRQAIgMAMgGQgBgDgBgCQgCgFAAgFQAAgQALgLQABgBABgBQAAgCgBgDQgDgMAFgKQAGgKAKgDQAFAAAEAAQACgBABgCQACgDADgBQAIgHAMAAQALAAAIAGQABAAACACQgFgHgBgHQgCgFAAgFQAAgPAKgLQABgCACAAQACgDACgBQAJgFAKAAQAHAAAHAEQACgCADgBQgCgEAAgFQAAgCAAgBQAAgBABAAQAAgDABgCQABgHAEgHQABgCACgCQACgCADgBQABgBAAAAQAIgGALAAQAGAAAFACQABAAABAAQABgHAEgFQABgDABgBQADgCACgCQABgBABAAQAHgGAMAAQAFAAAGACQAEACADACQABAAACACQACABABACQADACACADQABgDACgBQABgDABgCQACgCADgBQABgBABAAQAIgHALAAQAFAAAGACQACgEADgEQALgLAPAAQAAAAABAAQABgHAFgHQABgBACgCQABgDADgBQABgBABAAQAHgGALAAQAKAAAIAFQACABACACQABABABACQAFAFADAGQACAGABAGQANgKARgEQAegGAZAQQAIAGAIAIQgBgMADgKQAFgQALgCQALgDAMANQAFAHAFAJQAZgBAWAMQAIAEAGAFQACgCACgBQAIgFAKAAQAPAAAKALQALALAAAPQAAAEgBAFQgCAHgEAFQAAABgBABIAAAAQADAAAFAAQAOAAAKAKQAKALAAAQQAAAMgGAJQAGAJAAALQAAAGgBAEQACgBADAAQATAAANAOQAOAPAAATQAAAUgOAOQgNAOgTAAQgEAAgEgBQACAFAAAFQAAAMgKAIQgFAHgIACQgBAHgFAGQAAAAAAABIAAABIgBAAQgCABAAACQgLALgOAAQgPAAgKgLQgHgIgCgJQgTADgNgNQgGgGgCgKIgBAAQgDAGgFAGQgOAOgUgBQgMAAgKgFQAAABgBAAQgXANgagFQgYgEgLgTQgIAHgJAFIgBAAQAJAHAFAJQAJASgDATQgFATgRAJQgGAFgHABQAPAKAEAPg"
      );
    this.shape_5.setTransform(-48.875, 3.475);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FF6600")
      .s()
      .p(
        "Ah6GpIgBAAQgLAAgIgGIgFgFIgBgBQgEgFgBgEIgCgGIgCgKQAAgFACgEQgHgFgBgGIAAgGQgFAFgHACIgBAAIgBACIgBABIgBACQAAADgCADQgDAHgHABQgGACgEgDIgFAAIgBAAQgLgBgIgGIgFgFIgBgBQgEgEgBgFIgDgGQgBgEAAgFQAAgLAFgJIAFgHIACgCIAFgEQADgCADgBIABAAIgBgBQgKADgLgDQgPgFgIgNQgJgPADgPIAGgNIgNgLQgMgCgIgJIgEACQgFABgFgGQgEgFgCgIQgDgIADgGQADgHAEgBIACAAIAAgCQgFAAgEgBIgEACIgJADIgFAAIgBAAQgGAAgDgCQgFgCgGgEIgEgDIgCgCQgDgEgCgFIgCgGIgBgKIABgJQABgGADgDIADgFQgJgDgHgHIgBgCQgFgGgCgIIgCgKQAAgQAKgLIACgBQgGgCgFgDIgFgEIgBgCQgEgEgBgFIgCgFIgCgLIACgJQAAgFADgFIAFgHIADgCIAEgEIABgBIgBgDQgDgOAEgNIgFgEIgBgCQgFgGgCgIIgBgKQAAgQAJgLIADgCIAFgEIAGgDIAKgBIgBgCQgEgUAMgRQAIgMAMgGIgCgFIgCgKQAAgQALgLIACgCIgBgFQgDgMAFgKQAGgKAKgDIAJAAIADgDIAFgEQAIgHAMAAQALAAAIAGIADACQgFgHgBgHIgCgKQAAgPAKgLIADgCIAEgEQAJgFAKAAQAHAAAHAEQACgCADgBQgCgEAAgFIAAgDIABgBIABgFQABgHAEgHIADgEQACgCADgBIABgBQAIgGALAAQAGAAAFACIACAAQABgHAEgFIACgEIAFgEIACgBQAHgGAMAAQAFAAAGACIAHAEIADACIADADIAFAFIADgEIACgFQACgCADgBIACgBQAIgHALAAQAFAAAGACQACgEADgEQALgLAPAAIABAAQABgHAFgHIADgDQABgDADgBIACgBQAHgGALAAQAKAAAIAFIAEADIACADQAFAFADAGIADAMQANgKARgEQAegGAZAQQAIAGAIAIQgBgMADgKQAFgQALgCQALgDAMANQAFAHAFAJQAZgBAWAMQAIAEAGAFIAEgDQAIgFAKAAQAPAAAKALQALALAAAPIgBAJQgCAHgEAFIgBACIAAAAIAIAAQAOAAAKAKQAKALAAAQQAAAMgGAJQAGAJAAALQAAAGgBAEIAFgBQATAAANAOQAOAPAAATQAAAUgOAOQgNAOgTAAIgIgBQACAFAAAFQAAAMgKAIQgFAHgIACQgBAHgFAGIAAABIAAABIgBAAIgCADQgLALgOAAQgPAAgKgLQgHgIgCgJQgTADgNgNQgGgGgCgKIgBAAQgDAGgFAGQgOAOgUgBQgMAAgKgFIgBABQgXANgagFQgYgEgLgTQgIAHgJAFIgBAAQAJAHAFAJQAJASgDATQgFATgRAJQgGAFgHABQAPAKAEAPQAEAUgPARQgPATgYAEQgOAEgNgDQAEAXgQAUQgOAUgZAHIABAEQADALgFAIQgCAFgEADQACALAAAJIADAAQAIgCAHAFQAHAFACAIQACAJgFAHQgEAHgJACIgCABQALANADATQAFAVgFATQATAGADAOIAAAIQAGAEABAGQABAHgEAJQAGABAGADQANAHADAMQACAOgIANQgIALgOADQgOADgNgHQgNgHgDgOQgBgGABgHIgOAFIAAADIAAAJIgEAKIgCACIAAACIgBABIgCABIgFAFIgGAEQgFADgFAAIgFAAgAiBE2IADgCIgBAAIgCACg"
      );
    this.shape_6.setTransform(-48.875, 3.475);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_6 }, { t: this.shape_5 }] })
        .wait(1)
    );
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg"
      );
    this.shape_7.setTransform(15.2734, 3.9371, 1.4047, 1.4047);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ABGAAQAAAdgUAUQgVAVgdAAQgcAAgVgVQgUgUAAgdQAAgcAUgUQAVgVAcAAQAdAAAVAVQAUAUAAAcg"
      );
    this.shape_8.setTransform(12.2702, 6.0106, 1.4047, 1.4047);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FF0000")
      .s()
      .p(
        "AgwAxQgVgUAAgdQAAgcAVgVQAUgUAcAAQAdAAAVAUQAUAVAAAcQAAAdgUAUQgVAVgdAAQgcAAgUgVg"
      );
    this.shape_9.setTransform(12.2702, 6.0106, 1.4047, 1.4047);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
          ],
        })
        .wait(1)
    );
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FF0000")
      .s()
      .p(
        "AggAfQgNgNAAgSQAAgRANgOQAOgNASAAQAUAAANANQANAOAAARQAAASgNANQgNAOgUAAQgSAAgOgOg"
      );
    this.shape_10.setTransform(
      -36.3,
      24.35,
      1.6855,
      1.6855,
      0,
      0,
      0,
      -1.3,
      -0.1
    );
    this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f()
      .s("#000000")
      .ss(1.5, 1, 1)
      .p(
        "ACZiNQAAACAAABQAAAYgNARQgNARgTAAQgSAAgNgRQgOgSAAgaQAAgBAAgBQABgYANgRQANgSASAAQATAAANASQANASAAAZgAisCIQCaByDAhP"
      );
    this.shape_11.setTransform(-35.2763, 29.0779, 1.4047, 1.4047);
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ADHDnQgggdAigyQgCgBgCgBQg3gfgDg4QgCgdARgMQAJgGAOgCQAXgEAPgcQAQgggBgaQgRgvgmgmQhFhFhjAAQhhAAhGBFQhFBGAABhQAABeA/BEQAQASADAK"
      );
    this.shape_12.setTransform(-38.8191, 20.556, 1.4047, 1.4047);
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AiTC0QgDgKgQgSQg/hEAAhdQAAhiBFhGQBGhFBhAAQBjAABFBFQAmAmARAvQABAagQAgQgPAdgXAEQgOABgJAGQgRAMACAdQADA4A3AfIAEACQgiAyAgAdQhPAghJAAQhnAAhbhDgABmiMQgNARgBAYIAAADQAAAZAOASQANASASAAQATAAANgSQANgRAAgYIAAgCQAAgagNgSQgNgRgTAAQgSAAgNARg"
      );
    this.shape_13.setTransform(-38.8191, 22.8271, 1.4047, 1.4047);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
          ],
        })
        .wait(1)
    );
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#FF0000")
      .s()
      .p(
        "AggAeQgOgNAAgRQAAgRAOgMQAOgMASAAQAUAAANAMQAOAMAAARQAAARgOANQgNAMgUABQgSgBgOgMg"
      );
    this.shape_14.setTransform(-7.5342, 100.7974, 1.4047, 1.4047);
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#FF0000")
      .s()
      .p(
        "AggAeQgNgNAAgRQAAgRANgMQANgNATAAQATAAAOANQANAMAAARQAAARgNANQgOANgTAAQgTAAgNgNg"
      );
    this.shape_15.setTransform(-5.0761, 75.8646, 1.4047, 1.4047);
    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#FF0000")
      .s()
      .p(
        "AggAeQgOgMAAgSQAAgRAOgMQAOgNASAAQATAAAOANQAOAMAAARQAAASgOAMQgOANgTAAQgSAAgOgNg"
      );
    this.shape_16.setTransform(-40.5438, 106.0649, 1.4047, 1.4047);
    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#FF0000")
      .s()
      .p(
        "AggAeQgNgMAAgSQAAgQANgNQAOgNASAAQAUAAANANQANANAAAQQAAASgNAMQgNAMgUAAQgSAAgOgMg"
      );
    this.shape_17.setTransform(-23.6878, 87.4531, 1.4047, 1.4047);
    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#FF0000")
      .s()
      .p(
        "AggAeQgOgMAAgSQAAgRAOgMQANgNATAAQATAAAOANQAOAMAAARQAAASgOAMQgOANgTAAQgTAAgNgNg"
      );
    this.shape_18.setTransform(-38.788, 68.139, 1.4047, 1.4047);
    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f().s("#000000").ss(1.5, 1, 1).p("AgPiRIAgEj");
    this.shape_19.setTransform(-67.05, 105.475);
    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ACpk6QAOAOAaALQA5AYAwAvQBgBgAACGQAABQghBCQg+CdjfAjQjwAZjkgUAk+lrQADATgZAFQBQBhALCaQACCFiNAQQgLABgKAC"
      );
    this.shape_20.setTransform(-27.75, 84.5071);
    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#66CC00")
      .s()
      .p(
        "Al4FjIggkjIAUgDQCOgQgDiFQgKiahRhhQAZgFgDgTQDYCgEPhvQAOAOAZALQA6AYAwAvQBgBgAACGQgBBQghBCQg+CdjeAjQiFAOiCAAQhnAAhmgJg"
      );
    this.shape_21.setTransform(-27.75, 84.5071);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.clown,
    new cjs.Rectangle(-89.9, -69.7, 113, 191.60000000000002),
    null
  );
  (lib.cloud1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ApUGWQhHgPg3gzQhQhJAAhnQAAhoBQhIQBOhJBxAAIATABQAXgcAegZQBchJB6gNQAbgyA0gqQBvhaCdAAQCeAABvBaQBeBMAOBoQCEgRBgBPQBfBNAACFQAACFhlBLQg5AqhEATg"
      );
    this.shape.setTransform(80.25, 40.625);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.cloud1,
    new cjs.Rectangle(0, 0, 160.5, 81.3),
    null
  );
  (lib.clockset = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgDBlQgIgEgDgIQgEgHAAgXIAAhZIgTAAIAAgVIATAAIAAgmIAagQIAAA2IAaAAIAAAVIgaAAIAABaQAAALABADQABAEAEACQADABAGAAIALAAIAEAXQgLACgJAAQgOAAgHgFg"
      );
    this.shape.setTransform(105.675, 30.2);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgzA8QgUgVAAgmQAAgmAUgWQAVgVAfAAQAfAAAUAVQAUAVAAAmIgBAHIhzAAQACAZANAOQANAOATAAQAOAAAKgIQALgIAGgQIAbADQgHAYgRANQgSANgbAAQghAAgUgVgAgcguQgNAMgBAUIBWAAQgCgUgIgJQgNgQgUAAQgRAAgMANg"
      );
    this.shape_1.setTransform(92.925, 32.825);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AgqBnQgUgJgKgRQgMgRgBgWIAbgCQACAQAHAKQAHALAPAGQAOAGARABQARAAANgFQAMgFAGgIQAGgJAAgKQAAgKgGgHQgFgIgOgFQgJgDgdgIQgdgGgMgGQgPgIgIgMQgHgMgBgPQAAgQAKgOQAJgPASgGQARgIAXAAQAWAAASAIQATAIAJAOQAKAQABASIgbACQgDgUgMgKQgNgLgYAAQgZAAgMAKQgMAJAAANQAAAMAIAHQAIAIAiAIQAjAHANAHQATAHAIANQAJAOAAARQAAARgKAPQgJAQgTAIQgSAIgXAAQgcAAgUgIg"
      );
    this.shape_2.setTransform(74.55, 29.85);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(1)
    );
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#66CC00")
      .s()
      .p(
        "ApLDwQhfgChEhEQhGhHAAhjQAAhiBGhGQBEhEBegDISYAAQBfADBEBEQBGBGAABiQAABjhGBHIgDADQhCBBhdACg"
      );
    this.shape_3.setTransform(88.15, 30);
    this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#000000")
      .ss(4, 1, 1)
      .p(
        "AJNkrQB4ADBVBVQBYBYAAB7QAAB8hYBYQhVBWh4ACIyZAAQh3gChWhWQhYhYAAh8QAAh7BYhYQBWhVB3gDg"
      );
    this.shape_4.setTransform(88.15, 30);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ApMEsQh3gDhVhVQhZhYAAh8QAAh7BZhYQBVhVB3gDISZAAQB4ADBUBVQBZBYAAB7QAAB8hZBYQhUBVh4ADg"
      );
    this.shape_5.setTransform(88.15, 30);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.clockset,
    new cjs.Rectangle(-2, -2, 180.3, 64),
    null
  );
  (lib.clockicon = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#9FA0B0")
      .s()
      .p(
        "AA6B3QgFgBgDgFIgHgKQgTAIgXAAQgWAAgTgIIgHAKQgDAFgFABQgGABgEgDQgFgDgBgGQgBgFADgEIAHgJIgLgJQgeggAAgrQAAgrAegeQAegeApgCIAAgFIgNAAIAAgOIAiAAIAAAOIgLAAIAAAGQAnACAcAdQAfAeAAArQAAArgfAgIgKAJIAHAJQACAEgBAFQgBAGgEADQgEACgEAAIgCAAgAg2gxQgXAXAAAgQAAAhAXAXQAIAHAIAGIABAAQARAKAVAAQAVAAASgKQAJgGAIgHQAXgXAAghQAAgggXgXQgYgXggAAQggAAgXAXgAgEAWIgCgCQgEgEAAgEIgogoQgCgCAAgDQAAgDACgDQACgCADAAQAEAAACACIAnAnIABAAIACAAIAUgTQACgCADAAQADAAADACQACACAAADQAAAEgCACIgVAVQgBADgDAEIgCACQgDABgDAAIgFgBgAhphVQACgOALgHIAIgGQALgIANADQAOACAHALIAAAAIg9ArQgHgLACgNgAAohpQAIgKANgDQANgCALAIIAIAGQALAHACAOQADANgIAKIAAABg"
      );
    this.shape.setTransform(10.6347, 11.9164);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.clockicon,
    new cjs.Rectangle(0, 0, 21.3, 23.8),
    null
  );
  (lib.chef = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(1.5, 1, 1)
      .p(
        "ABphQQAsgpA1gbQApgWgHhBQg/gFgVAqQgcA3grAsIAYATIAhAbABAgiIArAdABAgiQgfAlgYAxQACARgEATQgKAygqAqQgrArgyALQgxAJgcgcQgdgcAKgxQALgyAqgrQArgqAygKQAWgEASACQAsgVAkgbAgehlIA+AsIAgAXAAkiHIAtAk"
      );
    this.shape.setTransform(57.0206, 111.8135);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AEMADQCDh0iNgeQgJiuibB+QiCgmhrBQQhHAtgIBbQjGAyClBMQAXBxB7g4AEMADIA8BTQjbACjBCdIgZhLIgZhNAEMADIg7hR"
      );
    this.shape_1.setTransform(23.3796, 3.9418);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#999999")
      .s()
      .p("ABWgcIgTACQg9AGgqAYQgdAQgTAYQA8h8BuA0g");
    this.shape_2.setTransform(44.8, 120.209);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#E0BD14").s().p("AgkAKQAbgTAVgXIAZAUQgWAUgSAYg");
    this.shape_3.setTransform(63.9, 105.05);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#CCCCCC")
      .s()
      .p(
        "AjXDXQgdgcAKgxQALgyAqgrQArgqAygKQAWgEASACQAsgVAkgbIAgAXQgfAlgYAxQACARgEATQgKAygqAqQgrArgyALQgMACgLAAQghAAgVgVgAjPCAQAUgYAdgQQArgZA8gGIATgCQgggPgdAAQhDAAgrBYgABRhjQArgsAcg3QAVgqA/AFQAHBBgpAWQg1AbgsApg"
      );
    this.shape_4.setTransform(57.0206, 111.8135);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#F0F0F0").s().p("ACWgeQi0gWh3CAQBdjrDOCBg");
    this.shape_5.setTransform(25.575, 0.3099);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhtCqIgZhNIAZBNQh7A4gXhxQilhMDGgyQAIhbBHgtQBrhQCCAmQCbh+AJCuQCNAeiDB0Ig7hRIA7BRIA8BTQjbACjBCdgAh/AoQB3iAC0AWQhJgug7AAQhrAAg8CYgAhtCqg"
      );
    this.shape_6.setTransform(23.3796, 3.9418);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.chef,
    new cjs.Rectangle(-10.7, -21.5, 92.5, 158),
    null
  );
  (lib.bush = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#007400")
      .ss(1, 1, 1)
      .p(
        "AC+iCQgPgHgVABABTiSQAEgYAvgHQAvgHAJA2ADXhiQAqgFALAmQALAmgbAkQADAQgGAOQgHAQgRANADXhiQgGgXgTgJADxgRQAJAOACAMADahIQAAgPgDgLADvBpQAJANAEAMQAKAiglAbAD5AnQAjAtggAuAgxicQAXglAfADQAiAGAKAdABlh+QgJgNgJgHQgPgLgTACAg2iVQACgDADgEAA1iMQgBgJgDgGAhRiSQgFgYgvgHQgugHgJA2QAOgHAWABAhjh+QAIgNAKgHQAOgLASABAjZhIQAAgPADgLQAGgXAUgJAjwgRQgJAOgCAMQgDAQAHAOQAGAQARANAjWhiQgqgFgLAmQgLAmAbAkAjtBpQgKANgEAMQgKAiAmAbAj3AnQgkAtAgAu"
      );
    this.shape.setTransform(27.1, 19.0888);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#0BA20B")
      .s()
      .p(
        "AhCCwQhSAohLgvQgmgbALgiQADgMAJgNQgJANgDAMQghguAkgtQAGAQARANQgRgNgGgQQgGgOACgPQgbglALgmQALgmAqAFQAGgXAUgJIABgBIABAAQAMgFARAAIABAAIABAAIABAAIACAAIgCAAIgBAAIgBAAIgBAAQgRAAgMAFIgBAAIgBABQAIg2AvAHQAvAHAEAYQAPgLARABIgEAHIAEgHQAYglAeADQAjAGAKAdQADAGABAJQgBgJgDgGQASgCAQALQAEgYAvgHQAugHAKA2IgCgBIgBAAQgNgFgRAAIAAAAIgBAAIgBAAIgBAAIABAAIABAAIABAAIAAAAQARAAANAFIABAAIACABQATAJAGAXQApgFAMAmQALAmgbAlQADAPgHAOQgGAQgRANQARgNAGgQQAkAtggAuQAJAigkAbQguAtgugXQguAWgsAAQg4AAg1glgAD8BsQgEgMgKgNQAKANAEAMgAD8gMQgCgNgJgOQAJAOACANgAj7gMQADgNAIgOQgIAOgDANgADaheIAAgEQAAgNgDgJQADAJAAANIAAAEgAjZheIAAgEQAAgNADgJQgDAJAAANIAAAEgABliUQgJgNgJgHQAJAHAJANgAhkiUQAJgNAJgHQgJAHgJANg"
      );
    this.shape_1.setTransform(27.1, 21.2757);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.bush,
    new cjs.Rectangle(-1, -1, 56.2, 43.6),
    null
  );
  (lib.builder = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AhUA1QgJgOAEgQQAEgRAOgIIBlg/QAOgJAQAEQAQAEAJAOQAJAOgEAQQgEAQgOAIIhlA/QgOAJgQgDQgQgEgJgOg"
      );
    this.shape.setTransform(77.465, 106.5125);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FF6600")
      .s()
      .p(
        "Ag7BHQgQgEgJgOQgJgOAEgQQAEgRAOgIIBlg/QAOgJAQAEQAQAEAJAOQAJAOgEAQQgEAQgOAIIhlA/QgKAHgLAAIgJgBg"
      );
    this.shape_1.setTransform(77.465, 106.5125);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ACGArQAWAjguASQgcANg2ADIiKAKQgQACgJgOQgBgBAAgBQgIgNAJgOIBGh4QAbguAYgUQAjghAWAkg"
      );
    this.shape_2.setTransform(56.2703, 117.243);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#CCCCCC")
      .s()
      .p(
        "AiHBuIgBgCQgIgNAJgOIBGh4QAbguAYgUQAjghAWAkIBbCRQAWAjguASQgcANg2ADIiKAKIgEAAQgNAAgIgMg"
      );
    this.shape_3.setTransform(56.2703, 117.243);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#000000").ss(2, 1, 1).p("AgqAeIBVg7");
    this.shape_4.setTransform(68.325, 112.15);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AiYBrQgLg3AXgyQADgGAEgHQAkhABIgVQBGgXBCAiQAZAMATATQABABABAB");
    this.shape_5.setTransform(28.2941, 18.248);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AgzgzIA0gUIAzBxIgmAeg");
    this.shape_6.setTransform(50.225, 10.65);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#FF6600").s().p("AgzgyIA0gVIAzBwIgmAfg");
    this.shape_7.setTransform(50.225, 10.65);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AjQC9QgPgZgJgdQgbhYAmhRQAFgKAFgKQA0hbBmgfQBlggBeAwQAkASAbAaQAaAaARAhIAAAAQi3DIkNAvg"
      );
    this.shape_8.setTransform(29.7306, 20.885);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FF6600")
      .s()
      .p(
        "AjQC9QgPgZgJgdQgbhYAmhRIAKgUQA0hbBmgfQBlggBeAwQAkASAbAaQAaAaARAhIAAAAQi3DIkNAvg"
      );
    this.shape_9.setTransform(29.7306, 20.885);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AE0iWQAPAThPA5QhOA5iAA+Qh/A/hlAeQhlAfgPgSQgRgUBQg5QBOg6CAg9QB/g/BlgeQBlgeAQASg"
      );
    this.shape_10.setTransform(36.4793, 27.7582);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FF6600")
      .s()
      .p(
        "AkyCXQgRgUBQg5QBOg6CAg9QB/g/BlgeQBlgeAQASQAPAThPA5QhOA5iAA+Qh/A/hlAeQhAAUgdAAQgSAAgFgHg"
      );
    this.shape_11.setTransform(36.4793, 27.7582);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.builder,
    new cjs.Rectangle(4.3, 0.9, 83.3, 129.6),
    null
  );
  (lib.btns__vol_bar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FF93FC").s().p("AkMDKIAAmTIIZAAIAAGTg");
    this.shape.setTransform(26.925, 20.2);
    this.shape._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.shape).wait(3).to({ _off: false }, 0).wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 53.9, 40.4);
  (lib.btn__vol_bar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AxKF6IAArzMAiUAAAIAALzg");
    this.shape.setTransform(109.85, 37.775);
    this.shape._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.shape).wait(3).to({ _off: false }, 0).wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 219.7, 75.6);
  (lib.btn = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AxKF6IAArzMAiUAAAIAALzg");
    this.shape.setTransform(109.85, 37.775);
    this.shape._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.shape).wait(3).to({ _off: false }, 0).wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 219.7, 75.6);
  (lib.blackwhitehat = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AiIgVIAxgNIAwgNIAvgMIAxgNIAwgNIAzgOIAOA4IAPA0IgzANIgwANIgxANIgOg0IgPg3AB3geIgOg3ABHgRIgOg3AB3geIAzgNABHgRIAwgNAgKA9IgwANIgPg1IAwgNIAwgMIAwgNAgKA9IgPg1IgOg3AhrBXIgwANIgOg1IAwgNIgPg3AhrBXIgOg1IAwgNIgOg3Ag6BKIgxANAAlAwIgvANAipAvIgPg3IAwgNACGAWIgPg0ABWAjIgPg0"
      );
    this.shape.setTransform(33.2551, 20.2331, 1.2591, 1.2591);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhyAoIAwgNIAPA1IgxANgAgSAOIAwgMIAOA1IgvAMgAiwgBIAvgNIAPA2IgwANgABOgKIAxgNIgPg4IAzgNIAOA3IgyAOIAOA0IgwANgAhQgbIAwgNIAOA2IgwANgAgSAOgAAeACIgPg3IAxgNIAOA4IgwAMg"
      );
    this.shape_1.setTransform(32.3422, 19.4147, 1.2591, 1.2591);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AiwAoIAvgNIgOg3IAxgMIAOA2IAwgNIgPg3IAwgMIAOA3IgvAMIAPA1IgxANIgOg1IgxANIAPA1IgwANgAAPgLIAxgMIAOA0IgwAMgABwglIAzgNIAOA0IgyANgAAxhPIAwgNIAPA3IgwAOgABwglg"
      );
    this.shape_2.setTransform(34.1679, 21.083, 1.2591, 1.2591);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ADWgvIgDAAIgOgCQhNgGhxAJQhxAKhRAUQhRAVgEATQgCATBNAGQBNAIBxgLQBxgKBSgUQBSgTACgTQAAgBABAAQAAgBAAAAIAAgBQgBAAAAgBIAAgBQAAAAAAgBIgwgSQgCAAgCAAQgBgBgBAAQgCAAgCAAQgIgBgJgBAEQgWIAAgDQAAAAAAgBAEQgcQgGgMgqgG"
      );
    this.shape_3.setTransform(46.8023, 22.689, 1.2591, 1.2591);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#0033CC").s().p("AgXgIQAqAFAFAMg");
    this.shape_4.setTransform(78.0021, 17.9529, 1.2591, 1.2591);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#FFFFFF").s().p("AAAAAIAAgBIAAABIAAAAIAAABIAAABg");
    this.shape_5.setTransform(81.1184, 19.5583, 1.2591, 1.2591);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AjFAxQhNgGADgTQADgTBSgVQBRgUBwgKQBxgJBOAGIANACIADAAIAEAAIACABIAEAAIAwASIABABIAAABIAAABIAAADQgDAThRATQhTAUhwAKQhCAGg2AAQgnAAgggDg"
      );
    this.shape_6.setTransform(46.7708, 22.689, 1.2591, 1.2591);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AkHA1QD6iCEVgTIgzBlIlYBcg");
    this.shape_7.setTransform(26.4558, 5.6273, 1.2591, 1.2591);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#000000").s().p("AkHA1QD6iCEVgTIgzBlIlYBcg");
    this.shape_8.setTransform(26.4558, 5.6273, 1.2591, 1.2591);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.blackwhitehat,
    new cjs.Rectangle(-7.7, -7.6, 89.9, 41.4),
    null
  );
  (lib.blackhat = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAZAAQAAAKgHAHQgIAHgKAAQgJAAgIgHQgHgHAAgKQAAgJAHgHQAIgHAJAAQAKAAAIAHQAHAHAAAJg"
      );
    this.shape.setTransform(110.3245, 41.4732, 1.3941, 1.3941);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgRARQgHgHAAgKQAAgJAHgHQAHgHAKAAQALAAAGAHQAIAHAAAJQAAAKgIAHQgGAHgLAAQgKAAgHgHg"
      );
    this.shape_1.setTransform(110.3245, 41.4732, 1.3941, 1.3941);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAZAAQAAAKgHAHQgIAHgKAAQgJAAgIgHQgHgHAAgKQAAgJAHgHQAIgHAJAAQAKAAAIAHQAHAHAAAJg"
      );
    this.shape_2.setTransform(108.2615, 25.1221, 1.3941, 1.3941);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgRARQgHgHAAgKQAAgJAHgHQAIgHAJAAQAKAAAIAHQAHAHAAAJQAAAKgHAHQgIAHgKAAQgJAAgIgHg"
      );
    this.shape_3.setTransform(108.2615, 25.1221, 1.3941, 1.3941);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAZAAQAAAKgHAHQgIAHgKAAQgJAAgIgHQgHgHAAgKQAAgJAHgHQAIgHAJAAQAKAAAIAHQAHAHAAAJg"
      );
    this.shape_4.setTransform(99.5248, 13.5644, 1.3941, 1.3941);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgRARQgHgHAAgKQAAgJAHgHQAIgHAJAAQAKAAAIAHQAHAHAAAJQAAAKgHAHQgIAHgKAAQgJAAgIgHg"
      );
    this.shape_5.setTransform(99.5248, 13.5644, 1.3941, 1.3941);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AkIkHQB+iCBvAMQgagOB+AhQB9AgBECvIBKDcQgpgIgvAFQiMAOiDBoQh5BagwB0QgbgigRgyIhXjwQgSgxgBgjQgKiDBUhug"
      );
    this.shape_6.setTransform(55.6917, -63.8858);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AjoEuIhXjwQgSgxgBgjQgKiDBUhuQB+iCBvAMQgagOB+AhQB9AgBECvIBKDcQgpgIgvAFQiMAOiDBoQh5BagwB0QgbgigRgyg"
      );
    this.shape_7.setTransform(55.6917, -63.8858);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_7 }, { t: this.shape_6 }] })
        .wait(1)
    );
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AgoklQAjgHgVggQDkA+Dyg5QgEAWAJARQANAbAqASQA5AXAwAwQBfBfAACFQAABPghBBQg+CdjcAiQlcAklDg7QjfgpiEkLQglhZgUhvQgQhVAOhAQANhAAYgZQAbgaAlAAQAmAAAaAaQACACAlAzQAcAmAlAIQAKACALAAQCsgUCXAEQAbADAQgDQACACACADQBLBgAKCUQADCFiMAPQiLATifgTQiGgTADhzQAKiZBQhgAgkkgQESBUDThU"
      );
    this.shape_8.setTransform(50.2858, 28.8071);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#3333FF")
      .s()
      .p("AjwABIgEgEQAigHgUggQDkA9Dyg4QgEAWAJAQQhqAqh5AAQh5AAiJgqg");
    this.shape_9.setTransform(70.7, -0.175);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FF0000")
      .s()
      .p(
        "AkaFwQjfgpiEkLQglhZgUhvQgQhVAOhAQANhAAYgZQAbgaAlAAQAmAAAaAaIAnA1QAcAmAlAIQhQBggKCZQgDBzCGATQCfATCLgTQCMgPgDiFQgKiUhLhgQESBUDThUQANAbAqASQA5AXAwAwQBfBfAACFQAABPghBBQg+CdjcAiQiEAOiBAAQjRAAjJglg"
      );
    this.shape_10.setTransform(50.2858, 28.8071);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.blackhat,
    new cjs.Rectangle(-21.1, -103.4, 142.8, 173.7),
    null
  );
  (lib.bgforclockm = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(4, 1, 1)
      .p("EAyKgMkIAAWzQAACWiWAAMhfnAAAQiWAAAAiWIAA2z");
    this.shape.setTransform(320.975, 80.5);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#F3F4FF")
      .s()
      .p("EgvzAMlQiWAAAAiWIAA2zMBkTAAAIAAWzQAACWiWAAg");
    this.shape_1.setTransform(320.975, 80.5);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.bgforclockm,
    new cjs.Rectangle(-2, -2, 646, 165),
    null
  );
  (lib.bee = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AiEkIQATizBNhMQBghhCJAAQBXAABnA4QlDgDjEErgAAxD8QAAAIAAAIQABAAADAAQFXAADyg9QAPgDAOgEQgSgfgYgcQjuA6lOAAQgFAAgEAAQADAaACAbgALAFhQAAAFAAAFQgeAKgkAJQjyA9lXAAQlXAAjyg9Qg+gQgugSQgQgmgMgqQA2AXBSAVQAKADALACQAXBGBlANQCgAUCLgTQA1gFAggXQAbAAAdAAQFXAADyg9QAhgJAcgIQAFAcAAAegAKfHxQgMAggTAbQgBAAgBAAQjyA9lXAAQk0AAjjgxQgrgngngzQAQAEAQAEQDyA+FXAAQFXAADyg+QAXgFAVgGQgFALgGALgAoUDPQhogbg8geQgHgnAAgjQA8AiBvAcQARAEATAFQgKAegGAkQgKgDgKgDg"
      );
    this.shape.setTransform(50.1, 42.5);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AnhI4QgsgngngzIAgAIQDzA+FVAAQFXAADzg+IAsgLIgLAWQgMAggUAaIgBAAQjzA+lXAAQkzAAjigxgAoUF9Qg+gPgugSQgPgmgNgrQA2AYBSAUIAVAGQAYBGBkANQCgATCLgSQA1gGAhgWIA2AAQFXAADzg+QAhgHAcgJQAEAcAAAeIAAAKQgeAJgjAJQjzA+lXAAQlVAAjzg+gAAxENIAAgRQgCgbgDgaIAIAAQFOgBDvg5QAYAcARAfIgcAHQjzA+lXAAIgDAAgAoUDPQhogbg7geQgIgnAAgjQA8AiBvAcIAkAIQgJAfgHAjIgUgFgAgkoHQBghhCJAAQBYAABmA4QlCgDjFErQATiyBNhNg"
      );
    this.shape_1.setTransform(50.1, 42.5);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAiAAQAAAOgKAKQgKAKgOAAQgNAAgKgKQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANg"
      );
    this.shape_2.setTransform(56.7116, -40.6657, 1.3939, 1.3939);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg"
      );
    this.shape_3.setTransform(56.7116, -40.6657, 1.3939, 1.3939);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AAGBjQgTgSgHggQgLgvAWgxQANgfAVgU");
    this.shape_4.setTransform(52.6616, -27.5981, 1.3939, 1.3939);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAeAQQgHANgOADQgMAFgNgHQgMgHgEgOQgDgMAGgNQAHgMANgEQANgDAMAGQANAHADANQAFANgHAMg"
      );
    this.shape_5.setTransform(76.9601, -37.8406, 1.3939, 1.3939);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgQAeQgMgHgEgOQgDgMAGgNQAHgMANgEQANgDAMAGQANAHADANQAFANgHAMQgHANgOADQgFACgEAAQgIAAgIgEg"
      );
    this.shape_6.setTransform(76.9601, -37.8406, 1.3939, 1.3939);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("Ag1BSQgJgZAKggQANgtAqghQAbgUAdgI");
    this.shape_7.setTransform(68.6203, -27.3193, 1.3939, 1.3939);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
          ],
        })
        .wait(1)
    );
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ABOAAQAAAUgXAOQgXAOggAAQgfAAgXgOQgXgOAAgUQAAgTAXgOQAXgOAfAAQAgAAAXAOQAXAOAAATg"
      );
    this.shape_8.setTransform(11.172, 35.6724, 1.3943, 1.3943, -138.6301);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#B1FFCC")
      .s()
      .p(
        "Ag2AiQgXgOAAgUQAAgTAXgOQAXgNAfAAQAgAAAXANQAWAOAAATQAAAUgWAOQgXAOgggBQgfABgXgOg"
      );
    this.shape_9.setTransform(11.172, 35.6724, 1.3943, 1.3943, -138.6301);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ABOAAQAAAUgXAOQgXAOggAAQgfAAgXgOQgXgOAAgUQAAgTAXgOQAXgOAfAAQAgAAAXAOQAXAOAAATg"
      );
    this.shape_10.setTransform(27.6019, 34.0315, 1.3943, 1.3943, -53.1702);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#B1FFCC")
      .s()
      .p(
        "Ag2AiQgXgOAAgUQAAgTAXgOQAXgNAfAAQAgAAAXANQAWAOAAATQAAAUgWAOQgXAOgggBQgfABgXgOg"
      );
    this.shape_11.setTransform(27.6019, 34.0315, 1.3943, 1.3943, -53.1702);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.bee,
    new cjs.Rectangle(-21.2, -46.4, 142.7, 151.6),
    null
  );
  (lib.bear = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAqBMQgngrADgtQADgvAigfQAIgIAJgFQAFAIACANQAGAlgVAzQgQApAGAdQABAHADAGQAPAggaAAQgaAAgngrQgpgsADguQADgvAigfQAggeAeABQATAAAKAQ"
      );
    this.shape.setTransform(56.7945, -11.3351, 1.3818, 1.3818);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#663300")
      .s()
      .p(
        "AgeBOQgpgsADguQADgvAigfQAggeAeABQATAAAKAQQgJAFgIAIQgiAfgDAvIAAAGQAAAqAkAoQABAHADAGQAPAggaAAQgaAAgngrgAAqBMIAAAAgAAGgGIAAgGQADgvAigfQAIgIAJgFQAFAIACANQAGAlgVAzQgQApAGAdQgkgoAAgqgAA8hnIAAAAg"
      );
    this.shape_1.setTransform(56.7945, -11.3351, 1.3818, 1.3818);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(1.5, 1, 1)
      .p(
        "AAsg8IAAABQASAZAAAiQAAACAAABQAAAhgRAXIgBABQgSAYgaAAQgYAAgSgYQgTgZAAgjQAAgBAAgCQABghASgXQASgYAYAAQAaAAASAXg"
      );
    this.shape_2.setTransform(87.725, 4.775);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AG+geQgVglAmg4QgDgBgCgCQhMgqgFhNQgCgoAYgRQAMgJATgCQAggGAUgoQAXgsgBgkQgYhBg0g0QhghgiIAAQiJAAhfBgQhgBgAACIQAACCBYBeQALALAGAJQDRDEEIiSQAPAYAnAQQA4AXAvAvQBeBeAACGQAABOggBBQg9CbjbAiQlZAjk/g6QjegpiCkJQglhZgUhuQgQhUANg/QAOg/AYgYQAagbAlAAQAmAAAaAbQABABAlAyQAcAmAkAJQALACALgBQCqgTCVAEQAbADAQgDQBOBeAKCYQADCEiKAPQiKATiegTQiFgTADhzQAKiXBPheAgogmQAkgHgXgj"
      );
    this.shape_3.setTransform(50.4035, 49.2336);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#663300")
      .s()
      .p(
        "AkXJpQjegpiCkJQglhZgUhuQgQhUANg/QAOg/AYgYQAagbAlAAQAmAAAaAbIAmAzQAcAmAkAJQhPBegKCXQgDBzCFATQCeATCKgTQCKgPgDiEQgKiYhOheQAkgHgXgjQgGgJgLgLQhYheAAiCQAAiIBghgQBfhgCJAAQCIAABgBgQA0A0AYBBQABAkgXAsQgUAoggAGQgTACgMAJQgYARACAoQAFBNBMAqIAFADQgmA4AVAlQhwA+hnAAIAAAAIgBAAQiIAAh1htIgDgCIgBgBIABABIADACQB1BtCIAAIABAAIAAAAQBnAABwg+QAPAYAnAQQA4AXAvAvQBeBeAACGQAABOggBBQg9CbjbAiQiCANh+AAQjQAAjIgkgAFKn4QgSAYgBAhIAAADQAAAkATAZQASAYAZAAQAaAAASgYIABgBQARgYAAggIAAgEQAAgjgSgZIAAAAQgSgYgaAAQgZAAgSAYg"
      );
    this.shape_4.setTransform(50.4035, 49.2336);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
          ],
        })
        .wait(1)
    );
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAqBMQgngrADgtQADgvAigfQAIgIAJgFQAFAIACANQAGAlgVAzQgQApAGAdQABAHADAGQAPAggaAAQgaAAgngrQgpgsADguQADgvAigfQAggeAeABQATAAAKAQ"
      );
    this.shape_5.setTransform(70.6123, -11.3351, 1.3818, 1.3818);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#663300")
      .s()
      .p(
        "AgeBOQgpgsADguQADgvAigfQAggeAeABQATAAAKAQQgJAFgIAIQgiAfgDAvIAAAGQAAAqAkAoQABAHADAGQAPAggaAAQgaAAgngrgAAqBMIAAAAgAAGgGIAAgGQADgvAigfQAIgIAJgFQAFAIACANQAGAlgVAzQgQApAGAdQgkgoAAgqgAA8hnIAAAAg"
      );
    this.shape_6.setTransform(70.6123, -11.3351, 1.3818, 1.3818);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_6 }, { t: this.shape_5 }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.bear,
    new cjs.Rectangle(-20.3, -29, 141.5, 144.6),
    null
  );
  (lib.batman = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AAeAwQgKgEgLAAQgKgBgHAFIgBABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABIAAgEQgCgGgJgEIgDgBQgHgBgHACQgIADgFAFIAAgBQADgFgCgGQgCgHgGgDQgFgDgHACQgGACgEAFIgBAEQgDgaAegaQAPgPAUgLQAIAMAOAGQAPAHALgBQgDgGAAgKQgCgMABgGIAAgGQAGAIADACQAEAEAEgBQAEgCACgDQAcAoAIAvQgIgBgJADQgOAEgIALIgDAHQgCgHgJgFg"
      );
    this.shape.setTransform(102.2094, 67.2283, 1.3876, 1.3876);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#E0BD14")
      .s()
      .p(
        "AgdBPQgvgLgKghQgKghAigiQAfgiA0gRIAAABQAQAQAMARQAcAoAJAvQACAPABAQIgNAEQgkALggAAQgTAAgSgFg"
      );
    this.shape_1.setTransform(101.861, 66.9514, 1.3876, 1.3876);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AgOCLQh9AIB/kdQAfCTAuA9QAtA8h8AJg");
    this.shape_2.setTransform(57.5857, -27.0141);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p("AgMiKQAfCTAuA9QAtA8h8AJIgGAAQhzAAB7kVg");
    this.shape_3.setTransform(57.5857, -27.0141);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }] })
        .wait(1)
    );
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AmqgYQgkgJgcgmQglgygBgCQgbgaglAAQgmAAgaAaQgYAZgOA/QgNA/AQBVQAUBuAlBaQCDEKDfApQFBA7FagkQDcgiA9icQAhhBAAhPQAAiGhfheQgvgvg5gYQhkgpBAhcQgDgCgCgBQhNgrgFhNQgCgpAYgQQAMgJAUgCQAggGAUgoQAXgtgCgkQgXhBg1g1QhghgiJAAQiJAAhfBgQhhBhAACJQAACCBYBeQAxA2gtAJAGimFQgpACgwgZQgugXgYgkQgRgWACgUQAOgLAdgBQAqAAAvAXQAvAYAYAiQAQAZAAATQgQAMgdgBgAmqgYQALACALgBQCrgTCWAEQAbADAQgDQBPBfAKCYQADCFiLAPQiLATifgTQiFgTADhzQAKiYBPhfg"
      );
    this.shape_4.setTransform(44.4785, 47.3953);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AkYJsQjfgpiDkKQglhagUhuQgQhVANg/QAOg/AYgZQAagaAmAAQAlAAAbAaIAmA0QAcAmAkAJQhPBfgKCYQgDBzCFATQCfATCLgTQCLgPgDiFQgKiYhPhfQAtgJgxg2QhYheAAiCQAAiJBhhhQBfhgCJAAQCJAABgBgQA1A1AXBBQACAkgXAtQgUAoggAGQgUACgMAJQgYAQACApQAFBNBNArIAFADQhABcBkApQA5AYAvAvQBfBeAACGQAABPghBBQg9CcjcAiQiDANh/AAQjRAAjIgkgAD0oBQgCAUARAWQAYAkAuAXQAwAZApgCQAdABAQgMQAAgTgQgZQgYgigvgYQgvgXgqAAQgdABgOALg"
      );
    this.shape_5.setTransform(44.4785, 47.3953);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.batman,
    new cjs.Rectangle(-26.6, -41.9, 142.2, 156),
    null
  );
  (lib.bar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#66CC00").s().p("Eg2rADWIAAmrMBtXAAAIAAGrg");
    this.shape.setTransform(350, 21.375);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.bar,
    new cjs.Rectangle(0, 0, 700, 42.8),
    null
  );
  (lib.bandana = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ABSjtQgCgjAPgoQA7gPAxAHQBMALA2A8QhPgOhFAGQAAgeASghAgKkLQATgMAVgMQAigOAfgHAC5kBQg2AEgxAQQg4ARgxAgQg8Ang0A9QglArggA1AFNj5QAXAaAUAjQhLADhFAPQg1AMgzATQgwARgsAYQgygsgJguQgIgnAVgoQhHArgvAyQhMBSgMBjQAAAEAAAEAhOgYQgsgbgNglQgMgmATgwAihAyQgUgQgRgUQgDgDgCgDIgBAAQgCgDgCgCQgBgCgBgBQgBACgBADQgCAFgCAGQgMApAbAgQADADACADQAbAaA2AUQBPAXglBoIBYgpQAViAhZgMQg6gBgugiQgDgBgBgBgAjaAOQgXADgPALQgyAhAPBsQASBNhmAYIBKA1QBygxgghRQgZgzAHg5QAEgiAPglgAAkhiQg7Agg3AqQgrAhgoApADoiqQgwgoABgvACAiLQgsgrgCg3"
      );
    this.shape.setTransform(27.3, 23.461);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#CC3300")
      .s()
      .p(
        "AlhENQBlgYgRhNQgPhsAyghQAPgLAWgDQgPAlgEAiQgGA5AZAzQAfBRhyAxgAheCMQg2gUgagaIgFgGQgcggANgpIgBgBIABgIQALhjBMhSQgTAwAMAmQglArgfA1IgFgFIgBgCIgCAEIgEALIAEgLIACgEIABACIAFAFIABAAIAEAGQASAUATAQIAEACQAuAiA6ABQBaAMgWCAIhYApQAlhohPgXgAhyhZQA0g9A9gnQAHAuAzAsQg7Agg2AqQgtgbgNglgABnjuQg4ARgwAgQgIgnATgoIAqgYQAhgOAfgHQgOAoABAjQAxgQA2gEQAAgeATghQBMALA1A8QhPgOhFAGQAAAvAvAoQg1AMgyATQgtgrgCg3g"
      );
    this.shape_1.setTransform(25.15, 23.575);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AkmDNIAFAGIgDADIgCgJgAkXB7IgEgGIgBAAQAfg2AlgrQgMglATgwQAvgyBHgrQgUAoAIAnQg9Ang0A8QANAlAtAbQgsAigoApQgTgQgSgUgAhnhPQAxggA3gRQACA3AtArQgwARgsAXQgzgrgIgugABoiUQBFgGBPAOQAYAaATAjQhLADhFAPQgvgoAAgvgAhnhPIAAAAgAAOjLQA7gPAyAHQgTAhAAAeQg2AEgxAQQgBgjAOgog"
      );
    this.shape_2.setTransform(35.35, 12.586);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.bandana,
    new cjs.Rectangle(-11.2, -9.8, 77.10000000000001, 66.6),
    null
  );
  (lib.backArrow = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(255,255,255,0.988)")
      .s()
      .p("AhqAAICOiOIBHBIIhHBGIBHBHIhHBIg");
    this.shape.setTransform(19.9441, 22.6305, 1.1539, 1.1539);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#000000").s().p("AjbDhIAAnBIG3AAIAAHBg");
    this.shape_1.setTransform(22, 22.5);
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.backArrow,
    new cjs.Rectangle(0, 0, 44, 45),
    null
  );
  (lib.baceballhat = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ACyikQhRgghjAEQh+AMhVBnQhVBmAPCoQFHgtDyj1QgRgPgUgNIhLA2QgJgEgGgJQgNgRAIgZQAGgVASgRQAmAQAhAX"
      );
    this.shape.setTransform(20.1781, 22.4529);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#0033CC")
      .s()
      .p(
        "AjVhNQBVhnB+gMQBjgEBRAgQgSARgGAVQgIAZANARQAGAJAJAEIBLg2QAUANARAPQjyD1lHAtQgPioBVhmg"
      );
    this.shape_1.setTransform(20.1781, 22.4529);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "Ai4DKQALAPA+gvQA9gvBMhUQBNhTAuhHQAvhGgLgPQgMgSg9AxQg+AvhMBUQhNBTguBGQgtBHAKAQg"
      );
    this.shape_2.setTransform(11.3103, 34.6027, 1.2191, 1.2191, 13.1665);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#0033CC")
      .s()
      .p(
        "Ai4DKQgKgQAthHQAuhGBNhTQBMhUA+gvQA9gxAMASQALAPgvBGQguBHhNBTQhMBUg9AvQguAkgSAAQgGAAgDgEg"
      );
    this.shape_3.setTransform(11.3103, 34.6027, 1.2191, 1.2191, 13.1665);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.baceballhat,
    new cjs.Rectangle(-17.3, 2.1, 67.1, 53.1),
    null
  );
  (lib.astro = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AFhkSQBwB4AACjQAAC1iEBXQgOAJgOAIQgdAPgeANQhoAniFgEQi/gGiNhQQgQgJgOgKQhvhTAAigQAAizCIiAQCJiAC/AAQDAAACJCAQAMAMAMAMgAD2FCIA7BMQkdBAkPhNQgqhUhiAKQA/gNgZguAExEmQlwgrhJlgQDQATEZjA"
      );
    this.shape.setTransform(34.3, 31.9951);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FBFBFB")
      .s()
      .p(
        "ABBGIQi/gGiNhRQgQgJgOgKQhvhSAAigQAAi0CIiAQCJh/C/AAQDAAACJB/IAYAZQkZDAjQgUQBJFgFwArQgdAQgeAMQhfAkh2AAIgYAAgAAvkFIgvAWIAyANIAHA0IAcgtIA0AKIgigoIAaguIgyAUIgjgng"
      );
    this.shape_1.setTransform(28.675, 28.5184);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AjPFaQgrhUhhALQA/gOgZguQANAKAQAJQCNBQC/AGQCFAEBognIA7BMQiCAdh/AAQiWAAiUgqgAAlksIgxgNIAugWIgDg0IAkAnIAxgUIgaAtIAiApIg0gKIgcAtg"
      );
    this.shape_2.setTransform(29.95, 35.8701);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.astro,
    new cjs.Rectangle(-13.2, -11.7, 95, 87.4),
    null
  );
  (lib.alien = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AjBAGQAKADALgBQCsgTCXAEQAcADAQgD");
    this.shape.setTransform(26.85, 44.1552);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AAyDOIhSkIQgQgBgOgHQgdgOgIgdQgJgcAPgcQAPgaAegKQAfgKAcAOQAbAPAJAcQAIAdgOAbQgJAOgMAJIBTEI"
      );
    this.shape_1.setTransform(58.8597, -26.5583);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#66CC66")
      .s()
      .p(
        "Aggg6QgQgBgOgHQgdgOgIgdQgJgcAPgcQAPgaAegKQAfgKAcAOQAbAPAJAcQAIAdgOAbQgJAOgMAJIBTEIIg1ARg"
      );
    this.shape_2.setTransform(58.8597, -26.5583);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }] })
        .wait(1)
    );
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AGhmKQgqABgwgYQgvgYgYgkQgRgWACgUQAOgLAdgCQArAAAvAYQAwAYAXAjQARAYAAATQgQAMgdAAgAHVh8QgCgCgDgBQhNgrgEhOQgDgoAYgRQANgJATgCQAhgFAUgpQAXgsgBglQgYhBg1g1QhhhhiLAAQgSAAgSACQhzAMhTBTQhTBTgMBxQgCATAAATQAACDBZBfQAxA1gtAKQBPBeAKCZQADCGiMAPQiLATihgUQiGgTADhzQAKiZBQheQglgJgcgmQglgzgCgCQgagagmAAQgmAAgaAaQgZAZgNBAQgOA/AQBVQAUBuAmBbQCEEKDgAqQFEA7FdgkQDegjA+icQAhhBAAhPQAAiHhgheQgvgvg5gYQhlgpA/hdg"
      );
    this.shape_3.setTransform(50.4358, 47.5107);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#66CC66")
      .s()
      .p(
        "AkbJuQjggqiEkKQgmhbgUhuQgQhVAOg/QANhAAZgZQAagaAmAAQAmAAAaAaIAnA1QAcAmAlAJQhQBegKCZQgDBzCGATQChAUCLgTQCMgPgDiGQgKiZhPheQAtgKgxg1QhZhfAAiDQAAgTACgTQAMhxBThTQBThTBzgMQASgCASAAQCLAABhBhQA1A1AYBBQABAlgXAsQgUApghAFQgTACgNAJQgYARADAoQAEBOBNArIAFADQg/BdBlApQA5AYAvAvQBgBeAACHQAABPghBBQg+CcjeAjQiFAOiCAAQjRAAjJglgADxoHQgCAUARAWQAYAkAvAYQAwAYAqgBQAdAAAQgMQAAgTgRgYQgXgjgwgYQgvgYgrAAQgdACgOALg"
      );
    this.shape_4.setTransform(50.4358, 47.5107);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }] })
        .wait(1)
    );
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AgJhKQgLgMgHgOQgLgdALgcQAMgbAcgLQAdgLAeANQAeAMAMAdQAMAcgMAcQgMAbgdAMQgQAFgPAAIhtD9Ig0gWg"
      );
    this.shape_5.setTransform(73.9375, -27.8949);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#66CC66")
      .s()
      .p(
        "Ah3CzIBuj9QgLgMgHgOQgLgdALgcQAMgbAcgLQAdgLAeANQAeAMAMAdQAMAcgMAcQgMAbgdAMQgQAFgPAAIhtD9g"
      );
    this.shape_6.setTransform(73.9375, -27.8949);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_6 }, { t: this.shape_5 }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.alien,
    new cjs.Rectangle(-21.2, -49, 143.29999999999998, 163.4),
    null
  );
  (lib.timerclockbgNoStop = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p("AgEAgIAAgJIAIAAIAAAJgAgBAQIgDghIAAgOIAJAAIAAAOIgDAhg");
    this.shape.setTransform(85.8, 29.875);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgNAdQgFgDAAgIIAHABQABAEADABQADADAEAAQAFAAADgDQADgCABgEIABgKQgFAGgIAAQgJAAgFgHQgGgHAAgIQABgHACgGQACgFAFgDQAEgDAGAAQAIAAAFAGIAAgFIAIAAIAAAnQAAALgCAEQgDAFgEADQgGACgGAAQgIAAgFgEgAgIgWQgDAFgBAIQABAJADADQAEAFAFAAQAFAAAEgEQADgEAAgJQAAgIgDgFQgFgEgFAAQgEAAgEAEg"
      );
    this.shape_1.setTransform(81.9, 31.675);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgDADQgEADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAAEACQADABACADIADAFIAAAIIAAAcg"
      );
    this.shape_2.setTransform(77.05, 30.725);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
    this.shape_3.setTransform(73.55, 29.875);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AALAYIAAgcIgBgHIgDgEQgCgBgEAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIADAFIAAAIIAAAcg"
      );
    this.shape_4.setTransform(70.05, 30.725);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AgLAYIAAguIAHAAIAAAHQACgFACgBIAFgCQADAAAFADIgDAHIgGgCQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgCABAAADIgBAJIAAAYg"
      );
    this.shape_5.setTransform(66.4, 30.725);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg"
      );
    this.shape_6.setTransform(62.025, 30.775);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AAQAgIgOgwIgCgHIgBAHIgOAwIgJAAIgRg/IAJAAIAKApIADANIADgMIAMgqIAKAAIAJAfQADANABAKIAEgOIAKgoIAJAAIgSA/g"
      );
    this.shape_7.setTransform(55.3, 29.875);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AgPASQgFgGAAgMQAAgKAFgHQAHgGAIAAQAJAAAHAGQAFAGABALIAAACIgiAAQAAAIAEAEQAEAEAEAAQAFAAADgCQADgDACgFIAIABQgCAHgFAEQgFAEgJAAQgJAAgGgGgAgIgNQgEADAAAGIAZAAQgBgFgCgDQgEgFgGAAQgFAAgDAEg"
      );
    this.shape_8.setTransform(46.05, 30.775);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AAAAfIgDgEQgCgCAAgHIAAgaIgFAAIAAgGIAFAAIAAgMIAHgFIAAARIAIAAIAAAGIgIAAIAAAaIAAAEIACACIADAAIADAAIABAHIgFABIgGgBg"
      );
    this.shape_9.setTransform(42.35, 29.975);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AgKAWQgDgBgCgDIgDgGIAAgHIAAgcIAIAAIAAAZIAAAIQABADADACQACACAEAAQACAAADgCQADgCACgDIABgJIAAgYIAIAAIAAAuIgHAAIAAgHQgGAIgIAAQgEAAgEgCg"
      );
    this.shape_10.setTransform(38.525, 30.825);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p(
        "AALAYIAAgcIgBgHIgDgEQgDgBgDAAQgEAAgEADQgDADAAAJIAAAZIgIAAIAAguIAHAAIAAAHQAFgIAJAAQAEAAADACQAEABACADIACAFIABAIIAAAcg"
      );
    this.shape_11.setTransform(33.55, 30.725);
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
    this.shape_12.setTransform(30.05, 29.875);
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p(
        "AAXAgIAAg1IgTA1IgHAAIgSg2IAAA2IgJAAIAAg/IANAAIAQAsIACAKIADgKIAPgsIAMAAIAAA/g"
      );
    this.shape_13.setTransform(25.275, 29.875);
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#000000")
      .s()
      .p("AAEAgIAAgxQgDADgEACIgIAEIAAgHQAHgDAEgFQAFgEACgEIAFAAIAAA/g");
    this.shape_14.setTransform(16.225, 29.875);
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#000000")
      .s()
      .p("AgFAfIAAgMIALAAIAAAMgAgFgSIAAgMIALAAIAAAMg");
    this.shape_15.setTransform(90.7, 13.15);
    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#000000")
      .s()
      .p("AANArIgUggIgHAHIAAAZIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
    this.shape_16.setTransform(86.375, 11.95);
    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#000000")
      .s()
      .p(
        "AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGABAEgEQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMAAgHgIg"
      );
    this.shape_17.setTransform(80.175, 13.15);
    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#000000")
      .s()
      .p(
        "AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANABAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg"
      );
    this.shape_18.setTransform(73.675, 13.15);
    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
    this.shape_19.setTransform(68.975, 11.95);
    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#000000")
      .s()
      .p(
        "AgTAnQgJgGgEgKQgFgMAAgLQAAgNAFgKQAFgKAJgFQAKgGALAAQANAAAIAHQAJAHAEALIgMADQgCgJgHgEQgFgEgIgBQgJAAgHAFQgHAFgCAIQgDAIAAAIQAAALADAHQADAIAHAFQAGADAIAAQAJAAAGgFQAHgFACgLIAMADQgEAOgJAHQgJAHgNAAQgOABgIgGg"
      );
    this.shape_20.setTransform(63.45, 11.95);
    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#000000")
      .s()
      .p(
        "AAfAgIAAgmIgBgKQAAgCgDgCQgDgCgEAAQgGAAgEAFQgFAEAAAKIAAAjIgJAAIAAgoQAAgHgCgDQgDgEgGAAQgFAAgEADQgDACgCAEQgCAFAAAIIAAAgIgKAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg"
      );
    this.shape_21.setTransform(50.7, 13.075);
    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#000000")
      .s()
      .p(
        "AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg"
      );
    this.shape_22.setTransform(44.175, 13.075);
    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#000000")
      .s()
      .p(
        "AgWAcQgGgGAAgIQABgEACgEQACgEADgCIAHgDIAKgBQAMgCAFgBIAAgDQAAgGgCgEQgEgDgIAAQgGAAgFACQgDADgBAHIgLgCQABgGAEgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIAAAKIAAANIABASQABAFACADIgLAAIgDgIQgGAGgFABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgDABgBADQgBACAAACQgBAFAEADQADACAGAAQAFAAAFgCQAEgDADgFQACgEgBgGIAAgEIgQAEg"
      );
    this.shape_23.setTransform(38.35, 13.15);
    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
    this.shape_24.setTransform(33.675, 11.95);
    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#000000")
      .s()
      .p(
        "AAbArIgKgaIgjAAIgJAaIgMAAIAhhVIALAAIAjBVgAgFgRIgKAYIAdAAIgJgWIgFgSQgCAJgDAHg"
      );
    this.shape_25.setTransform(28.4, 11.95);
    this.instance = new lib.timerclock();
    this.instance.setTransform(4.15, 3.7, 0.5, 0.5, 0, 0, 0, 0.1, 0.1);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f()
      .s("#000000")
      .ss(3, 1, 1)
      .p(
        "An8BsIAAjUQAChiBiAAIMxAAQBiAAACBiAH9hmIAADPQAAADAAADQgFBchfAAIsxAAQhfAAgEhcQAAgCgBgBAn8BvIAAgD"
      );
    this.shape_26.setTransform(50.85, 20.275);
    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#FF4E4E")
      .s()
      .p(
        "AmYDLQhfAAgEhcIgBgDIAAjUQAChiBiAAIMxAAQBiAAABBiIAAACIAADPIAAAGQgEBchfAAg"
      );
    this.shape_27.setTransform(50.85, 20.275);
    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics.f("#E6E9FF").s().p("AAAACIAAgCIAAACg");
    this.shape_28.setTransform(0.025, 31.25);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.timerclockbgNoStop,
    new cjs.Rectangle(-1.5, -1.5, 104.7, 43.6),
    null
  );
  (lib.Symbol65 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.Symbol68();
    this.instance.setTransform(493, 175.8, 1, 1, 0, 0, 0, 493, 181.6);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this.instance_1 = new lib.Symbol66();
    this.instance_1.setTransform(493, 190.1, 1, 1, 0, 0, 0, 493, 190.1);
    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol65,
    new cjs.Rectangle(0, -9.3, 986, 395.8),
    null
  );
  (lib.Symbol4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.part0 = new lib.Symbol65();
    this.part0.name = "part0";
    this.part0.setTransform(1970, -0.9, 1, 1, 0, 0, 180, 0, -5.8);
    this.part0_1 = new lib.Symbol65();
    this.part0_1.name = "part0_1";
    this.part0_1.setTransform(0, -0.9, 1, 1, 0, 0, 0, 0, -5.8);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.part0_1 }, { t: this.part0 }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol4,
    new cjs.Rectangle(0, -4.4, 1970, 395.79999999999995),
    null
  );
  (lib.Symbol2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.grassbit();
    this.instance.setTransform(342.9, 56.35, 1, 1, 0, 0, 0, 9.8, 6.7);
    this.instance_1 = new lib.bush();
    this.instance_1.setTransform(633.65, 88.2, 1, 1, 0, 0, 0, 27.1, 21);
    this.instance_2 = new lib.grassbit();
    this.instance_2.setTransform(198.2, 150.25, 1, 1, 0, 0, 0, 9.8, 6.7);
    this.instance_3 = new lib.grassbit();
    this.instance_3.setTransform(480.55, 150.25, 1, 1, 0, 0, 0, 9.8, 6.7);
    this.instance_4 = new lib.grassbit();
    this.instance_4.setTransform(735.35, 145.7, 1, 1, 0, 0, 0, 9.8, 6.7);
    this.instance_5 = new lib.bush();
    this.instance_5.setTransform(61.1, 135.7, 1, 1, 0, 0, 0, 27.1, 21);
    this.instance_6 = new lib.grassbit();
    this.instance_6.setTransform(881.35, 83.35, 1, 1, 0, 0, 0, 9.8, 6.7);
    this.instance_7 = new lib.bush();
    this.instance_7.setTransform(886.9, 135.7, 1, 1, 0, 0, 0, 27.1, 21);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_7 },
            { t: this.instance_6 },
            { t: this.instance_5 },
            { t: this.instance_4 },
            { t: this.instance_3 },
            { t: this.instance_2 },
            { t: this.instance_1 },
            { t: this.instance },
          ],
        })
        .wait(1)
    );
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(["#834900", "#593100"], [0, 1], 0, -15.4, 0, 12.8)
      .s()
      .p(
        "EhJlACbIAAkiQAWAOAJgKQAHgEAYAJQAgALAPgJQANgHATgDQATgCATAHQAXAIAVgMQASgJAaADQAeADAMgDQALgCAOAFQAPAGAagBQAZAAAaAFQAdAGARgGQAOgGAaAAQAdAAAMgNIAAAAQAJgIAPAHQAVAKATAAQATAAATAIQAWAJAXgIIgBAAQAUgHARAGQAUAGAXgDIAqgHQAUgEAPgEQANgDAbAGQAdAGAYgBIAmgCIAaAAIAeAAQAVAAAYgEIAsgHQAUgDAWAJQAZAKAagBIAogCQAOAAAcADQAdAEANgBQANgCAVgFQATgFAWAAQAWABAPgCQANgBAfAIQAjAKAGgKQAEgEAfABIA1AAIAAAAQASAAAPgBQAPgBAYgHQAVgGANABQANACAPAFQAQAFAaABQAYACARgBQAQgBAXgIQAUgIAXAMQAbAPANgGIAAAAQALgFAjgIQAggIARAHIAmASQAWALAYgLQAWgJASgEIAAAAQASgEAJADQALADAfACQAfABAOgBIApgEQAagBACABQADAEAaAGQAYAGAggGQAfgGARgGQARgFAXAIQAYAJAVADQAWAEANAAIABAAIAogCQAfgCALgPQAHgJAQAKQAXANAWgCIAogCQAUAAAVgFQAUgEAUAEQAWAFAbABQAbABATgEIAhgGQAMgCASAFQAUAGAXgDIAygGQAYgDAOAEQAQAFASgBQAPgBAVADQAUADAbgGIgBAAQAZgFAWgHQATgFAIAIQAKAMAcgCIArgCQAQgBAUAIQAXAIARgCQARgCAXACQAYACAXgHIgBAAQAWgIAXAAIAoACQARABAZgBQAaAAAUgEQATgDAUADQAWADALgCIAlgBQAaAAAOAEIAAAAQAPAEAcgCQAagDAKABQAJAAAXAEQAZAFAUgEIAigGQAOgBAbAAIAkACIABAAQAJABAagCQAbgBAYgHQAWgGASAHQAUAIANACQAOABAegGQAcgFAKADQAMAEAngHQAkgHARAFIAAAAQATAFAMgCIABAAQALgBARACIABAAIAOACIAZACQAXACAWgDQAUgDAWAAQAVABAQAIIgBAAQASAKAfgLQAZgKAIAJQAKAPAcgMIAAAAIAggMQAJgCAYAFQAcAGAWgIIAAAAQAUgHASAAQARgBAVAIQAXAIAXABIAlACQAPACATAEQAWAEAegCQAegBAQgFQAQgEASgDQARgDAPAHIABAAQASAIAjgJIgBAAQAhgHAKADQAKADARACQASACAfgJQAagIAKAIQALAMAWgCIAlgEIAugCQAbAAAOACIAAAAQANACAZgDQAXgCATAHQAXAHAOgHQALgGAegBQAegCARAFIgBAAQARAFAegCQAcgCAMgCIAegCQAQgBAdAAQAdABAPgBQAOgCAaACQAZACAHAEQAHAGAbAAQAbABAagOQAWgNAXALQAcANAPgNQALgJAJAFQAMAIAcABQAaAAAPgFQANgEAXAMQAbAOARABQARABAZgGQAYgGAXgIQAWgIAUAEQAXAGASgLQANgJAMAHQAQAJAdAHQAdAHAXgQQARgNARAHQAUAJASAEQAUAFAUgFIAAAAQASgDAJABQALACAVAIQAWAJAXgFIAvgLIAAAAIAwgKQAUgEANADQARADASgGIgBAAQAPgGAeAHQAfAIAVABQAUACASgBQARgBAPACQAQABASgDQARgDAbACQAcADAUgHQARgHAUAIIABAAQAYAJAagLQAYgKANgCQAOAAANAIQAPAKAbABQAZACAWgCQAWgBAKgEIABAAQAIgDAaADQAcAEAUABQAVABAMgBIAxgDQAkgCAHACIAAAAQAGADAcADQAaADAagDQAbgDAOgGQALgFAKAGQAOAJAdgFQAbgEASAIQAWAHAbAAQAdAAANgHQAMgFATAAQAUABASAIQAWAJAXgEQAUgEAYADQAbAEANgRIAAgBQAKgKASANQANAJAKAAQAKABAIgJIAAgBQAKgMAQADQAVAEAbgGQAYgGAVAIQAWAIAcABQAcABAOgCIAkgEIApgEQAQgBATAIIAAgBQAVAJAVABQATAAAPAGQARAGAXgCIAqgEQAXgBASgNQAOgKAXAHQAYAIALAHQANAIAcgLQAWgJAQAGQARAJAcgGQAYgGASgBIAsgCIAAEjg"
      );
    this.shape.setTransform(471, 177.2736);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#3B3B00")
      .s()
      .p(
        "AdKAXQgRAAgbgPQgXgLgNADQgPAGgagBQgcAAgMgHQgJgGgLAIQgPAOgcgOQgXgJgWALQgaAPgbgBQgbgBgHgGQgHgEgZgCQgagBgOABQgPACgdgBQgdgBgQABIgeADQgMACgcABQgeACgRgFIABAAQgRgEgeABQgeACgLAFQgOAIgXgIQgTgHgXADQgZADgNgDIAAAAQgOgCgbABIguACIglADQgWACgLgLQgKgHgaAHQgfAJgSgDQgRgCgKgDQgKgCghAHIABAAQgjAIgSgHIgBgBQgPgGgRACQgSADgQAFQgQAFgeABQgeABgWgEQgTgEgPgBIglgDQgXgBgXgHQgVgHgRAAQgSABgUAHIAAAAQgWAHgcgGQgYgEgJACIggALIAAgBQgcAMgKgPQgIgHgZAIQgfALgSgKIABAAQgQgIgVAAQgWAAgUADQgWADgXgCIgZgDIgOgBIgBAAQgRgCgLACIgBAAQgMABgTgFIAAAAQgRgFgkAHQgnAHgMgFQgKgCgcAFQgeAGgOgCQgNgBgUgHQgSgHgWAGQgYAFgbACQgaABgJgBIgBAAIgkgBQgbgBgOACIgiAFQgUAEgZgEQgXgEgJgBQgKAAgaACQgcADgPgFIAAAAQgOgEgaAAIglACQgLABgWgDQgUgCgTADQgUAEgaAAQgZAAgRgBIgogBQgXAAgWAHIABAAQgXAIgYgDQgXgCgRACQgRACgXgIQgUgHgQABIgrACQgcABgKgLQgIgHgTAFQgWAGgZAFIABAAQgbAGgUgDQgVgDgPAAQgSABgQgEQgOgEgYADIgyAGQgXACgUgFQgSgEgMABIghAFQgTAEgbgBQgbgBgWgEQgUgEgUAEQgVAEgUABIgoACQgWABgXgMQgQgKgHAJQgLAOgfACIgoACIgBAAQgNABgWgEQgVgEgYgJQgXgHgRAFQgRAFgfAGQggAHgYgGQgagHgDgEQgCAAgaABIgpADQgOACgfgCQgfgBgLgDQgJgCgSACIAAAAQgSAEgWAKQgYAKgWgKIgmgRQgRgIggAIQgjAIgLAFIAAgBQgNAHgbgPQgXgMgUAIQgXAIgQAAQgRABgYgBQgagBgQgEQgPgFgNgCQgNgCgVAHQgYAFgPABQgPACgSAAIAAAAIg1gBQgfAAgEAEQgGAJgjgJQgfgJgNACQgPABgWAAQgWAAgTAFQgVAFgNABQgNACgdgEQgcgEgOABIgoABQgaABgZgJQgWgIgUADIgsAGQgYAEgVAAIgeAAIgaAAIgmABQgYACgdgHQgbgFgNADQgPAEgUADIgqAHQgXADgUgGQgRgFgUAGIABAAQgXAIgWgIQgTgIgTAAQgTAAgVgJQgPgHgJAIIAAAAQgMAMgdAAQgaAAgOAFQgRAHgdgGQgagGgZABQgaAAgPgGQgOgEgLACQgMADgegEQgagCgSAJQgVAMgXgIQgTgHgTACQgTACgNAHQgPAJgggLQgYgJgHAFQgJAJgWgNIAAgKIADABQAQAJAFgEIABAAQAJgIAgALQAaAJAMgGIAAgBQAPgHAVgCQAVgCAWAGIAAAAQASAHARgJIAAAAQAUgMAeAEQAbAEAMgDQANgEARAHQAPAEAXAAQAaAAAbAFQAZAFAPgFQAQgFAcAAQAYAAAJgKIAAAAQANgOAXALIAAAAQASAJASAAQAVAAAVAHQASAHAUgGQAWgHAUAGQASAFAVgDIApgGIABAAIAhgHQAPgEAeAHQAdAFAVgBIAngBIAaAAIAeAAQAVAAAWgEIAsgHQAXgDAZAJQAXAIAYgBIAnAAQAPgBAdADIABAAQAbAEAMgCQAMgBAVgEQAUgFAXAAIAAAAQAWAAAOgBQAOgCAhAJQAcAGADgDIAAAAQAEgHAnAAIAAAAIA1ABQASAAAOgCIABAAQAOgBAWgGQAXgHAPACIAAAAQAPACAPAFQAOAFAZABQAZABAPgBQAQAAAUgIQAZgKAbAPQAVALAKgEQALgDAkgJQAlgKAUAKIAmARQARAIATgIQAYgJATgEIAAgBQAVgEALAEQAKADAeABQAdACAOgCIAqgDQAggCADAEIAAABQADACAVAEQAXAGAdgHQAegFASgFQAUgHAZAKQAXAHAVAEQAUAEANgBIApgCQAYgCAKgKQAMgQAZAPQATAKATgBIApgBQATgBAUgEQAWgFAWAFQAVAEAaABQAaAAASgDIAhgFQAOgCAVAFQASAFAVgCIAxgGQAbgEAQAFQAOAEAQgBQARAAAVADQAUACAXgFIAAAAIAugMIABAAQAagHALAMIAAABQAIAIAWgBIAqgCQASgBAXAHQAUAHAPgCQASgCAYACQAWADAVgHQAWgHAZAAIAoABQARABAZAAQAZAAATgEIABAAQAUgEAWADQATADALgBIAmgCQAcAAAOAFQAPADAZgCQAbgCALAAQAKABAXADQAXAEATgEIAAAAIAigEQAOgCAcABIABAAIAlABQAIABAagBQAagCAXgGQAYgHAWAIQASAIAMABQANACAcgGQAggHALAFIABAAQAJADAkgHQAngHASAGQARAFALgCQANgCATACIAAAAIANACIAaADQAVACAWgDQAUgDAXAAQAXAAASAJQAPAHAagIQAhgNALAOQAHAIATgIIABAAQAXgJAJgCIAAAAQAKgDAcAGQAZAFATgHQAWgHATgBQATAAAXAIIABAAQAVAHAWABIAlACIAkAFQAUAEAcgBQAdgBAQgFIAAAAQAQgEATgDQASgCATAHQAQAFAfgGIAAAAQAkgIALAEQAKACAQACIABAAQAQACAcgIIAAAAQAigJALAMQAKAHAQgCIAlgCIAvgCQAdgBANACQANACAXgCQAZgDAVAHIAAAAQASAGAKgGIABAAQANgFAhgCQAfgBASAFQAQADAbgCQAcAAAMgCIAfgDQAQgBAdABIAAAAQAcABAPgCQAPgBAbABQAdACAHAFQAHAEAWABIABAAQAXABAYgMIABgBQAbgOAbAMQAUAKAMgIQARgPAPAKQAKAHAYAAQAYABAOgFQAQgHAcAPQAZANAPAAQAPABAYgFIAugNQAYgJAXAFIABAAQASAEAPgIQASgMASAKQAOAIAbAGQAaAFARgMQAYgQAVAKQASAIASAEIAAAAQARADATgDIAAAAQAUgEAMABQAKACAWAIQAUAHAUgEIAvgJIAAAAIAwgLQAWgEAPADQANADAQgFQASgGAgAHIAAAAQAeAHAUACQAUABASgBQARAAAQABQAPACAQgEIABAAQARgDAcADQAbACASgGQASgIAWAIIAFABQAUAIAXgKQAZgLAOgBIABAAQAQgBARAKQANAJAXABQAZABAVgBQAUgBAJgDIABgBQAKgEAeAEQAbAEAUABQATABAMgBIAxgDQAngCAHACIABAAQAGACAaADIAAAAQAZADAZgCQAZgDANgGQAQgHAPAJQALAHAZgEQAdgEAVAIQATAGAagBQAZAAANgFQAOgGAVABQAVAAAVAIQASAIAVgEQAVgEAaADIAAAAQAVADAKgLIABAAQAOgTAbATQAKAGAHABQAGAAAEgFIAAAAQAOgQAWAEQATAEAZgGQAbgHAXAJQAVAHAbABQAaACAOgCIAkgEIApgEQASgCAVAJQAUAHATAAQAVABARAGQAPAGATgCIArgEIAAAAQAUgCAPgKIABAAQASgNAbAJQAaAIAMAHQAKAEAXgIQAbgKASAIIAAAAQAQAHAWgFQAagGATgBIAsgBIAAAJIgsABQgSABgYAGQgcAHgRgJQgQgHgWAJQgcALgNgIQgLgGgYgIQgXgHgOAJQgSANgXACIgqAEQgXACgRgGQgPgGgTgBQgVAAgVgJIAAAAQgTgHgQACIgpADIgkAEQgOACgcgCQgcgBgWgHQgVgIgYAGQgbAGgVgDQgQgDgKALIAAAAQgIAJgKAAQgKAAgNgKQgSgLgKAJIAAAAQgNARgbgEQgYgDgUAEQgXAEgWgJQgSgIgUAAQgTgBgMAGQgNAGgdAAQgbABgWgIQgSgHgbAEQgdAFgOgJQgKgGgLAFQgOAGgbADQgaADgagEQgcgDgGgCIAAAAQgHgCgkACIgxADQgMABgVgBQgUgBgcgEQgagDgIADIgBAAQgKAEgWABQgWABgZgBQgbgBgPgJQgNgJgOABQgNABgYAKQgaALgYgJIgBgBQgUgGgRAGQgUAGgcgCQgbgDgRADQgSAEgQgCQgPgBgRAAQgSABgUgBQgVgCgfgGQgegHgPAFIABAAQgTAGgQgDQgNgDgUAEIgwAKIAAAAIgvAKQgXAFgWgJQgVgIgLgCQgJgBgSAEIAAAAQgUAEgUgEQgSgEgUgIQgRgHgRALQgXAQgdgHQgdgHgQgHQgMgHgNAIQgSAKgXgFQgUgDgWAGQgXAIgYAGQgVAFgQAAIgFAAg"
      );
    this.shape_1.setTransform(471, 163.1278);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol2,
    new cjs.Rectangle(0, 49.2, 942, 143.60000000000002),
    null
  );
  (lib.startLine = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.showNos = new lib.showNos();
    this.showNos.name = "showNos";
    this.showNos.setTransform(162.05, 182.9, 1, 1, 0, 0, 0, 90.5, 182.9);
    this.showNos.visible = false;
    this.timeline.addTween(cjs.Tween.get(this.showNos).wait(1));
    this.crossline = new lib.crossLine();
    this.crossline.name = "crossline";
    this.timeline.addTween(cjs.Tween.get(this.crossline).wait(1));
    this.mainLine = new lib.Symbol44();
    this.mainLine.name = "mainLine";
    this.timeline.addTween(cjs.Tween.get(this.mainLine).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.startLine,
    new cjs.Rectangle(-2.5, -2.5, 238.2, 370.6),
    null
  );
  (lib.shuffle_button = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.shuffle_button_graphic();
    this.instance.setTransform(
      12.45,
      10.55,
      0.6258,
      0.6258,
      0,
      0,
      0,
      11.1,
      8.4
    );
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this.text = new cjs.Text("Shuffle Characters", "12px 'Arial'", "#FFFFFF");
    this.text.textAlign = "center";
    this.text.lineHeight = 15;
    this.text.lineWidth = 111;
    this.text.parent = this;
    this.text.setTransform(77.5003, 3.9);
    this.timeline.addTween(cjs.Tween.get(this.text).wait(1));
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(0,0,0,0.298)")
      .s()
      .p("ApXBnQhJgCgChIIAAg5QAChIBJgDISvAAQBJADACBIIAAA5QgCBIhJACg");
    this.shape.setTransform(67.5, 10.35);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.shuffle_button,
    new cjs.Rectangle(0, 0, 135, 20.7),
    null
  );
  (lib.showWinOrder = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.clicker = new lib.showWinners();
    this.clicker.name = "clicker";
    this.clicker.setTransform(34.9, 21.25);
    this.timeline.addTween(cjs.Tween.get(this.clicker).wait(1));
    this.popup = new lib.showWinnerPopup();
    this.popup.name = "popup";
    this.popup.setTransform(-50.15, -181.8, 1, 1, 0, 0, 0, 121, 201.3);
    this.popup.visible = false;
    this.timeline.addTween(cjs.Tween.get(this.popup).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.showWinOrder,
    new cjs.Rectangle(-126.3, -384, 244.5, 487.8),
    null
  );
  (lib.previewSound = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.frame_0 = function () {
      this.stop();
    };
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));
    this.instance = new lib.Symb143232();
    this.instance.setTransform(20, 20, 1, 1, 0, 0, 0, 20, 20);
    this.instance_1 = new lib.Symb15212();
    this.instance_1.setTransform(20, 20, 1, 1, 0, 0, 0, 20, 20);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 40, 40);
  (lib.os_tickcross = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(255,255,255,0.008)")
      .s()
      .p("AyTCYIAAhwIh8AAIAAi/MAofAAAIAADiIhJAAIAABNg");
    this.shape.setTransform(129.575, 11);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.cross = new lib.os_cross();
    this.cross.name = "cross";
    this.cross.setTransform(235, 3);
    this.timeline.addTween(cjs.Tween.get(this.cross).wait(1));
    this.tick = new lib.os_tick();
    this.tick.name = "tick";
    this.tick.setTransform(235, 5);
    this.timeline.addTween(cjs.Tween.get(this.tick).wait(1));
    this.tickLock = new lib.os_ticklock();
    this.tickLock.name = "tickLock";
    this.tickLock.setTransform(235, 5);
    this.tickLock.visible = false;
    this.timeline.addTween(cjs.Tween.get(this.tickLock).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AB4ABQAAAygjAiQgkAjgwAAQgxAAgkgjQgjgiAAgyQAAgyAjgjQAkgjAxAAQAwAAAkAjQAjAjAAAyg"
      );
    this.shape_1.setTransform(243, 11);
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_tickcross,
    new cjs.Rectangle(0, -4.2, 259.2, 30.4),
    null
  );
  (lib.os_Symbol52__vol_bar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.frame_0 = function () {
      this.stop();
    };
    this.frame_3 = function () {
      this.stop();
    };
    this.timeline.addTween(
      cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(1)
    );
    this.instance = new lib.Symbol11__vol_bar();
    this.instance.setTransform(8.1, 10.75, 1, 1, 0, 0, 0, 6.2, 11.8);
    this.instance._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(2)
    );
    this.instance_1 = new lib.Symbol12__vol_bar();
    this.instance_1.setTransform(8.1, 10.75, 1, 1, 0, 0, 0, 6.2, 11.8);
    this.instance_1._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(2)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(1)
    );
    this.instance_2 = new lib.Symbol13__vol_bar();
    this.instance_2.setTransform(8.1, 10.75, 1, 1, 0, 0, 0, 6.2, 11.8);
    this.instance_2._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2).wait(3).to({ _off: false }, 0).wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -2.5, 15.8, 26.6);
  (lib.os_showNumbers = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.txt = new cjs.Text("1y", "40px 'Arial'");
    this.txt.name = "txt";
    this.txt.textAlign = "center";
    this.txt.lineHeight = 47;
    this.txt.lineWidth = 77;
    this.txt.parent = this;
    this.txt.setTransform(40.4, 1.8);
    this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));
    this.center = new lib.os_Symbol46();
    this.center.name = "center";
    this.center.setTransform(18, 22.5, 1, 1, 0, 0, 0, 0, 22.5);
    this.timeline.addTween(cjs.Tween.get(this.center).wait(1));
    this.left = new lib.os_Symbol45();
    this.left.name = "left";
    this.left.setTransform(2, 22.5, 1, 1, 0, 0, 0, 0, 22.5);
    this.timeline.addTween(cjs.Tween.get(this.left).wait(1));
    this.instance = new lib.os_Symbol47();
    this.instance.setTransform(31, 26.5, 1, 1, 0, 0, 0, 0, 26.5);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_showNumbers,
    new cjs.Rectangle(-0.2, -0.2, 81.2, 64.8),
    null
  );
  (lib.os_premiumBlockoo = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.os_lock();
    this.instance.setTransform(87.9, 19.25, 0.7062, 0.7062, 0, 0, 0, 9.2, 12.3);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this.info = new cjs.Text("Premium Users Only!", "12px 'Arial'", "#FFFFFF");
    this.info.name = "info";
    this.info.textAlign = "center";
    this.info.lineHeight = 15;
    this.info.lineWidth = 255;
    this.info.parent = this;
    this.info.setTransform(191.3239, 9.7, 1.4837, 1.4837);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#7FCC37")
      .s()
      .p(
        "AxuCdQg+gBgtgtQguguAAhBQAAhAAuguQAtgsA+gCMAjeAAAQA+ACAtAsQAtAuAABAQAABBgtAuQgtAtg+ABg"
      );
    this.shape.setTransform(192.625, 19.975);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape }, { t: this.info }] })
        .wait(1)
    );
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("rgba(0,0,0,0.698)")
      .s()
      .p(
        "A8dC7QhBgBgug2Qgxg2AAhOQAAhMAxg3QAug1BBgCMA47AAAQBBACAwA1QAvA3AABMQAABOgvA2QgwA2hBABg"
      );
    this.shape_1.setTransform(191.45, 19.925);
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_premiumBlockoo,
    new cjs.Rectangle(-6.7, 1.2, 396.4, 37.5),
    null
  );
  (lib.os_hasMusicShow__vol_bar = function (
    mode,
    startPosition,
    loop,
    reversed
  ) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.frame_0 = function () {
      this.stop();
    };
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));
    this.volumeBall = new lib.volumeBall__vol_bar();
    this.volumeBall.name = "volumeBall";
    this.volumeBall.setTransform(31.55, 53.95);
    this.volumeBall._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.volumeBall).wait(2).to({ _off: false }, 0).wait(1)
    );
    this.volumeLine = new lib.volumeLine__vol_bar();
    this.volumeLine.name = "volumeLine";
    this.volumeLine.setTransform(-22.95, 53.95);
    this.showVolume = new cjs.Text("100", "14px 'Arial'", "#FFFFFF");
    this.showVolume.name = "showVolume";
    this.showVolume.textAlign = "center";
    this.showVolume.lineHeight = 18;
    this.showVolume.lineWidth = 29;
    this.showVolume.parent = this;
    this.showVolume.setTransform(66.85, 47.25);
    this.vol1_mc = new lib.os_Symbol52__vol_bar();
    this.vol1_mc.name = "vol1_mc";
    this.vol1_mc.setTransform(44.5, 54.3, 0.5917, 0.5917, 0, 0, 0, 5, 11.1);
    this.instance = new lib.os_Symbol53__vol_bar();
    this.instance.setTransform(-40.5, 54.5, 0.6202, 0.6202, 0, 0, 0, 6.9, 7);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to(
          {
            state: [
              { t: this.instance },
              { t: this.vol1_mc },
              { t: this.showVolume },
              { t: this.volumeLine },
            ],
          },
          2
        )
        .wait(1)
    );
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#FFFFFF").ss(4, 1, 1).p("Ak/AAIJ/AA");
    this.shape.setTransform(3.625, 53.95);
    this.shape._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.shape).wait(2).to({ _off: false }, 0).wait(1)
    );
    this.jump_pos = new lib.btns__vol_bar();
    this.jump_pos.name = "jump_pos";
    this.jump_pos.setTransform(-31.05, 34.9, 1.3062, 1, 0, 0, 0, -0.2, -0.2);
    new cjs.ButtonHelper(
      this.jump_pos,
      0,
      1,
      2,
      false,
      new lib.btns__vol_bar(),
      3
    );
    this.jump_up = new lib.btn__vol_bar();
    this.jump_up.name = "jump_up";
    this.jump_up.setTransform(42.55, 35, 0.196, 0.5419, 0, 0, 0, 0.5, -0.2);
    new cjs.ButtonHelper(
      this.jump_up,
      0,
      1,
      2,
      false,
      new lib.btn__vol_bar(),
      3
    );
    this.jump_down = new lib.btn__vol_bar();
    this.jump_down.name = "jump_down";
    this.jump_down.setTransform(-49.45, 34.95, 0.0786, 0.542, 0, 0, 0, 0, -0.2);
    new cjs.ButtonHelper(
      this.jump_down,
      0,
      1,
      2,
      false,
      new lib.btn__vol_bar(),
      3
    );
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to(
          {
            state: [
              { t: this.jump_down },
              { t: this.jump_up },
              { t: this.jump_pos },
            ],
          },
          2
        )
        .wait(1)
    );
    this.instance_1 = new lib.Symbol8__vol_bar();
    this.instance_1.setTransform(18.45, 10.95, 1, 1, 0, 0, 0, 13.3, 8.8);
    this.instance_1._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1).wait(2).to({ _off: false }, 0).wait(1)
    );
    this.instance_2 = new lib.os_Symbol53__vol_bar();
    this.instance_2.setTransform(29.65, 10.85, 1, 1, 0, 0, 0, 6.6, 6.6);
    this.instance_2._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(1)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(1)
    );
    this.vol0_mc = new lib.os_Symbol52__vol_bar();
    this.vol0_mc.name = "vol0_mc";
    this.vol0_mc.setTransform(26.4, 11, 1, 1, 0, 0, 0, 5, 11);
    this.timeline.addTween(
      cjs.Tween.get(this.vol0_mc).to({ _off: true }, 1).wait(2)
    );
    this.instance_3 = new lib.os_Symbol51__vol_bar();
    this.instance_3.setTransform(8.8, 10.3, 1, 1, 0, 0, 0, 10.2, 10.3);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_3).to({ _off: true }, 2).wait(1)
    );
    this.instance_4 = new lib.Symbol9__vol_bar();
    this.instance_4.setTransform(18.05, 54.5, 1, 1, 0, 0, 0, 67.5, 21.4);
    this.instance_4._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_4).wait(2).to({ _off: false }, 0).wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-49.4, 0, 135, 76.1);
  (lib.os_hasAlarmShow__vol_bar = function (
    mode,
    startPosition,
    loop,
    reversed
  ) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.frame_0 = function () {
      this.stop();
    };
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));
    this.instance = new lib.Symbol10__vol_bar();
    this.instance.setTransform(28.55, 11.95, 1, 1, 0, 0, 0, 6.2, 11.8);
    this.timeline.addTween(
      cjs.Tween.get(this.instance).to({ _off: true }, 1).wait(1)
    );
    this.instance_1 = new lib.os_Symbol56__vol_bar();
    this.instance_1.setTransform(27.9, 11.8, 1, 1, 0, 0, 0, 6.6, 6.6);
    this.instance_1._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1).wait(1).to({ _off: false }, 0).wait(1)
    );
    this.instance_2 = new lib.os_Symbol54__vol_bar();
    this.instance_2.setTransform(8.8, 11.7, 1, 1, 0, 0, 0, 8.8, 11.7);
    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -1.3, 36.2, 26.6);
  (lib.os_dragBarAll = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("AyMClQh/AAgDh8IAAjNMAodAAAIAADHQAACCiCAAg");
    this.shape.setTransform(234.075, 105.725);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AyMCmQisAAgDinIAAifQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAMAptAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABIAACYQAACuivAAg"
      );
    this.shape_1.setTransform(234.075, 109.8);
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    this.instance = new lib.os_dragBarBG();
    this.instance.setTransform(234.6, 61.65, 1, 1, 0, 0, 0, 200, 0);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#B3B3B3")
      .s()
      .p(
        "AivCyIgBgCQhJhIAAhoQAAhaA4hDIARgTQBKhJBmAAQBoAABIBJIASATQA4BDAABaQAABohKBIIgBACQhJBIhmAAQhlAAhKhIg"
      );
    this.shape_2.setTransform(432.75, 61.75);
    this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "A/bEsQh3gChVhWQhYhYAAh8QAAh7BYhYQBVhVB3gDMA+3AAAQB3ADBVBVQBYBYAAB7QAAB8hYBYQhVBWh3ACg"
      );
    this.shape_3.setTransform(234.425, 61.45);
    this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "A/cFUQiHgDhhhhIAAABQhjhkAAiNQAAiLBhhiIADgCIACgDIACgCQBfhcCEgDMA+5AAAQCHADBhBhIAAAAQBjBjAACMQAACLhhBkIgCABIgCACIgCACQhfBdiEADg"
      );
    this.shape_4.setTransform(234.425, 61.45);
    this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("rgba(0,0,0,0.498)")
      .s()
      .p(
        "A/cFUQiHgChhhiIAAABQhjhkAAiNQAAiKBhhkIADgCIACgCIACgBQBfhcCEgEMA+5AAAQCHADBhBgIAAAAQBjBkAACMQAACMhhBjIgCABIgCADIgCABQhfBdiEADg"
      );
    this.shape_5.setTransform(237.875, 65.9);
    this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_dragBarAll,
    new cjs.Rectangle(0, 27.5, 472.3, 98.9),
    null
  );
  (lib.os_cogandeye__vol_bar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.sfx = new lib.os_hasAlarmShow__vol_bar();
    this.sfx.name = "sfx";
    this.sfx.setTransform(96.55, 10.6);
    this.music = new lib.os_hasMusicShow__vol_bar();
    this.music.name = "music";
    this.music.setTransform(49.45, 11.85);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.music }, { t: this.sfx }] })
        .wait(1)
    );
    this.instance = new lib.os_Symbol57__vol_bar();
    this.instance.setTransform(22.35, 22.55, 1, 1, 0, 0, 0, 16.1, 15.8);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this.instance_1 = new lib.os_Symbol58__vol_bar();
    this.instance_1.setTransform(67.5, 22.5, 1, 1, 0, 0, 0, 67.5, 22.5);
    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_cogandeye__vol_bar,
    new cjs.Rectangle(0, 0, 135, 45),
    null
  );
  (lib.os_bigDragShow = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.txt = new cjs.Text("", "45px 'Arial'");
    this.txt.name = "txt";
    this.txt.textAlign = "center";
    this.txt.lineHeight = 52;
    this.txt.lineWidth = 92;
    this.txt.parent = this;
    this.txt.setTransform(49.8, 2);
    this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));
    this.bubble = new lib.os_Symbol50();
    this.bubble.name = "bubble";
    this.bubble.setTransform(50, 33.5, 1, 1, 0, 0, 0, 50, 33.5);
    this.timeline.addTween(cjs.Tween.get(this.bubble).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_bigDragShow,
    new cjs.Rectangle(-2, -2, 104, 70.9),
    null
  );
  (lib.old = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.timdf();
    this.instance.setTransform(28.4, 101.35, 1, 1, 0, 0, 0, 25.4, 27.9);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this.txt_clear = new cjs.Text("Clear", "22px 'Arial'");
    this.txt_clear.name = "txt_clear";
    this.txt_clear.textAlign = "center";
    this.txt_clear.lineHeight = 25;
    this.txt_clear.lineWidth = 87;
    this.txt_clear.parent = this;
    this.txt_clear.setTransform(580.2, 230.45, 1.2769, 1.2769);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AAYCJIAAhBIh2AAIAAggIB8iwIAcAAIAACwIAlAAIAAAgIglAAIAABBgAg9AoIBVAAIAAh6g"
      );
    this.shape.setTransform(461.475, 246.35);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "Ag9B3QgYgWgEgiIAigFQAGAdAOANQAOAMAUAAQAWAAARgQQAQgRAAgYQAAgXgPgPQgPgPgYAAQgIAAgOADIADgcIAGAAQAUAAASgLQARgLAAgYQAAgSgNgMQgMgMgTAAQgUAAgNAMQgNAMgEAZIghgGQAGgiAWgSQAWgTAgAAQAWAAATAKQASAJALARQAJAQAAATQAAASgJAPQgKAOgSAJQAYAFANARQAOASAAAaQAAAkgaAZQgaAZgoAAQgkAAgXgVg"
      );
    this.shape_1.setTransform(357.125, 246.525);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AhaCKQAAgMAEgMQAHgSAQgSQAPgSAcgYQAsgkAQgVQAQgVAAgTQAAgUgPgOQgOgOgXAAQgXAAgPAPQgPAOAAAaIgigDQADgnAXgUQAYgVAmAAQAnAAAXAWQAXAWAAAhQAAAQgHAQQgGAQgQAQQgPASglAfQgdAZgJAJQgIAJgGAJICGAAIAAAhg"
      );
    this.shape_2.setTransform(253.0225, 246.275);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p("AARCKIAAjWQgMAMgTALQgTAMgQAGIAAghQAcgNAVgTQAUgTAJgSIAWAAIAAETg");
    this.shape_3.setTransform(146.95, 246.275);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "Ag9BwQgbgjAAhNQAAgvAKgeQAKgdATgQQAUgRAdAAQAWAAARAJQAQAJALARQALAQAGAYQAGAYAAAoQAAAxgJAdQgKAegUAQQgUAQgeAAQgnAAgWgcgAgkhcQgSAaAABCQAABEAQAWQAQAXAWAAQAXAAAQgXQAQgXAAhDQAAhDgQgWQgQgWgXAAQgXAAgNATg"
      );
    this.shape_4.setTransform(44.175, 246.5);
    this.txt_set = new cjs.Text("Set", "30px 'Arial'");
    this.txt_set.name = "txt_set";
    this.txt_set.textAlign = "center";
    this.txt_set.lineHeight = 34;
    this.txt_set.lineWidth = 87;
    this.txt_set.parent = this;
    this.txt_set.setTransform(580.2, 154.45, 1.2769, 1.2769);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "Ag8B6QgUgRgEghIAggDQAEAXAMAKQALAKATAAQAPABALgIQAMgGAHgNQAHgMAGgTQAEgVAAgVIAAgHQgKARgRAJQgSAKgTAAQgiAAgXgYQgYgYAAgoQAAgqAZgZQAYgaAlAAQAaAAAWAPQAWAOAMAaQALAcAAAyQAAAzgLAfQgMAggWAQQgWAQgeAAQggAAgVgSgAgmhdQgQATAAAdQgBAaARAQQAPAQAXAAQAXAAAPgQQAPgQAAgdQAAgdgQgRQgPgRgWAAQgVAAgRASg"
      );
    this.shape_5.setTransform(462.1, 177.5);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AhAB0QgZgYAAgkQAAgbANgSQAOgQAZgHQgVgIgKgOQgKgPAAgTQAAgeAVgVQAWgUAjAAQAjAAAWAVQAWAVAAAeQAAATgKAOQgKAOgUAIQAZAIANARQANATAAAZQAAAjgYAYQgZAYgpAAQgnAAgZgYgAgnARQgQAQAAAXQAAAPAHANQAHANANAIQAOAHAOAAQAZAAAPgPQAQgPAAgZQAAgYgQgPQgQgRgYABQgXAAgQAPgAgfhjQgNAMAAASQAAATANAMQAMANATAAQAUAAAMgNQANgLAAgTQAAgSgNgMQgNgNgTAAQgSAAgNAMg"
      );
    this.shape_6.setTransform(357.875, 177.5);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AgxCHQAAggAMguQANguAWgpQAWgrAagdIiGAAIAAggICxAAIAAAaQgaAcgaAuQgaAtgNAxQgKAigDApg"
      );
    this.shape_7.setTransform(252.625, 177.525);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "Ag/BuQgagfAAhIQAAhPAdgjQAZggArAAQAgAAAVASQAVATADAgIghACQgEgUgJgIQgNgPgVAAQgPAAgMAJQgPALgKAXQgIAWgBApQAMgTASgJQARgJATAAQAhAAAYAaQAXAXABAoQgBAagKAVQgMAXgUALQgSAMgaAAQgpAAgagegAgjAEQgQAQAAAbQAAARAIAQQAHAQANAIQAOAJANgBQAVABAPgSQAQgRAAgeQAAgcgPgQQgPgQgXAAQgWAAgQAQg"
      );
    this.shape_8.setTransform(148.25, 177.5);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "Ag/B0QgXgUgEgjIAjgDQAEAaAPANQAOANAUAAQAYAAAQgSQARgTAAgeQAAgdgQgQQgQgQgZAAQgRAAgNAHQgNAHgHALIgggDIAbiNICHAAIAAAhIhsAAIgPBJQAZgRAaAAQAkAAAYAZQAZAYAAAnQAAAlgWAbQgaAigtAAQglAAgYgWg"
      );
    this.shape_9.setTransform(43.875, 177.75);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.txt_set },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
            { t: this.txt_clear },
          ],
        })
        .wait(1)
    );
    this.display = new cjs.Text("00:00:00", "90px 'Arial'");
    this.display.name = "display";
    this.display.textAlign = "center";
    this.display.lineHeight = 101;
    this.display.lineWidth = 495;
    this.display.parent = this;
    this.display.setTransform(321.2288, 2.55, 1.2769, 1.2769);
    this.btnset = new lib.os_mn4();
    this.btnset.name = "btnset";
    this.btnset.setTransform(519.8, 147.75, 1.2769, 1.2769);
    new cjs.ButtonHelper(this.btnset, 0, 1, 1);
    this.btnclear = new lib.os_mn3();
    this.btnclear.name = "btnclear";
    this.btnclear.setTransform(519.8, 218.05, 1.2769, 1.2769);
    new cjs.ButtonHelper(this.btnclear, 0, 1, 1);
    this.btn4 = new lib.os_mn2();
    this.btn4.name = "btn4";
    this.btn4.setTransform(417.3, 218.05, 1.2769, 1.2769, 0, 0, 0, 0.1, 0);
    new cjs.ButtonHelper(this.btn4, 0, 1, 1);
    this.btn3 = new lib.os_mn2();
    this.btn3.name = "btn3";
    this.btn3.setTransform(312.85, 218.05, 1.2769, 1.2769);
    new cjs.ButtonHelper(this.btn3, 0, 1, 1);
    this.btn2 = new lib.os_mn2();
    this.btn2.name = "btn2";
    this.btn2.setTransform(208.6, 218.05, 1.2769, 1.2769);
    new cjs.ButtonHelper(this.btn2, 0, 1, 1);
    this.btn1 = new lib.os_mn2();
    this.btn1.name = "btn1";
    this.btn1.setTransform(104.35, 218.05, 1.2769, 1.2769);
    new cjs.ButtonHelper(this.btn1, 0, 1, 1);
    this.btn0 = new lib.os_mn2();
    this.btn0.name = "btn0";
    this.btn0.setTransform(0.05, 218.05, 1.2769, 1.2769);
    new cjs.ButtonHelper(this.btn0, 0, 1, 1);
    this.btn9 = new lib.os_mn2();
    this.btn9.name = "btn9";
    this.btn9.setTransform(417.3, 147.75, 1.2769, 1.2769, 0, 0, 0, 0.1, 0);
    new cjs.ButtonHelper(this.btn9, 0, 1, 1);
    this.btn8 = new lib.os_mn2();
    this.btn8.name = "btn8";
    this.btn8.setTransform(312.85, 147.75, 1.2769, 1.2769);
    new cjs.ButtonHelper(this.btn8, 0, 1, 1);
    this.btn7 = new lib.os_mn2();
    this.btn7.name = "btn7";
    this.btn7.setTransform(208.6, 147.75, 1.2769, 1.2769);
    new cjs.ButtonHelper(this.btn7, 0, 1, 1);
    this.btn6 = new lib.os_mn2();
    this.btn6.name = "btn6";
    this.btn6.setTransform(104.35, 147.75, 1.2769, 1.2769);
    new cjs.ButtonHelper(this.btn6, 0, 1, 1);
    this.btn5 = new lib.os_mn2();
    this.btn5.name = "btn5";
    this.btn5.setTransform(0.05, 147.75, 1.2769, 1.2769);
    new cjs.ButtonHelper(this.btn5, 0, 1, 1);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.btn5 },
            { t: this.btn6 },
            { t: this.btn7 },
            { t: this.btn8 },
            { t: this.btn9 },
            { t: this.btn0 },
            { t: this.btn1 },
            { t: this.btn2 },
            { t: this.btn3 },
            { t: this.btn4 },
            { t: this.btnclear },
            { t: this.btnset },
            { t: this.display },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.old,
    new cjs.Rectangle(-1.9, 0, 645.6999999999999, 277.5),
    null
  );
  (lib.nslenLoop = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.frame_0 = function () {
      this.stop();
    };
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p("AgJA0IAAgUIATAAIAAAUgAgJgfIAAgUIATAAIAAAUg");
    this.shape.setTransform(-5.2, 13.775);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgCBEQgFgDgCgFQgCgFAAgQIAAg7IgNAAIAAgNIANAAIAAgaIAQgLIAAAlIASAAIAAANIgSAAIAAA8IABAKQAAAAABABQAAAAAAAAQABABAAAAQABAAAAABQACABAEAAIAIAAIACAPIgNACQgJAAgFgDg"
      );
    this.shape_1.setTransform(-10.675, 12.025);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AglAuQgKgJAAgNQAAgHAEgGQADgHAGgEQAGgCAHgCIAPgDQAVgDAKgDIAAgFQAAgKgFgFQgHgGgNAAQgMAAgGAFQgFAEgDALIgRgCQACgLAFgHQAGgHAKgEQAKgDAMAAQAOAAAIADQAIADAEAFQAEAEACAIIAAAQIAAAWQAAAZACAGQABAHADAGIgSAAQgDgGgBgHQgKAIgJAEQgIADgKAAQgRAAgJgIgAgDAGQgLACgEACQgFACgCAEQgDADAAAFQAAAHAGAFQAFAEAKAAQAJAAAIgEQAIgFAEgHQADgGAAgMIAAgGQgKAEgSACg"
      );
    this.shape_2.setTransform(-19.175, 13.775);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg"
      );
    this.shape_3.setTransform(-30.225, 13.775);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AgsBJIAAiOIAQAAIAAANQAGgIAHgEQAHgEAKAAQAMAAAKAHQALAHAFAMQAFANAAAPQAAAQgFALQgGANgLAHQgLAHgMAAQgIAAgGgEQgIgEgEgFIAAAygAgTgvQgJAKAAAUQAAATAIAKQAIAJAMAAQAKAAAJgKQAJgKgBgTQABgUgJgKQgIgKgLAAQgKAAgJALg"
      );
    this.shape_4.setTransform(-41.05, 15.625);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg"
      );
    this.shape_5.setTransform(-52.425, 13.775);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AAnBIIgTgfIgNgTQgGgHgDgCQgEgDgFgBIgKgBIgWAAIAABAIgTAAIAAiOIA+AAQAUgBAKAEQAKAEAFAKQAGAKAAAMQAAAPgJAKQgKAKgVACQAIAEAEADQAIAIAHALIAZAogAgrgHIApAAQAMAAAHgDQAHgDAEgGQAEgFAAgHQAAgLgHgHQgIgGgQAAIgsAAg"
      );
    this.shape_6.setTransform(-64.525, 11.8);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(2)
    );
    this.instance = new lib.nsloop0();
    this.instance.setTransform(14.25, 12.1, 1, 1, 0, 0, 0, 10.7, 7.9);
    this.instance_1 = new lib.nsloop1();
    this.instance_1.setTransform(35.65, 12.05, 1, 1, 0, 0, 0, 10.7, 8.4);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .wait(1)
    );
    this.instance_2 = new lib.nscircle();
    this.instance_2.setTransform(38.2, 12.2, 1, 1, 0, 0, 0, 10.5, 10.5);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2).to({ x: 13 }, 1).wait(1)
    );
    this.instance_3 = new lib.nsbgr();
    this.instance_3.setTransform(25.1, 12.2, 1, 1, 0, 0, 0, 25.1, 12.2);
    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-74.4, -1.1, 124.60000000000001, 26.3);
  (lib.nnn1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.frame_0 = function () {
      this.stop();
    };
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));
    this.color0 = new lib.nnn9();
    this.color0.name = "color0";
    this.color0.setTransform(50.5, 47.2, 1, 1, 0, 0, 0, 50.5, 47.2);
    this.timeline.addTween(
      cjs.Tween.get(this.color0).to({ _off: true }, 1).wait(5)
    );
    this.color1 = new lib.nnn17();
    this.color1.name = "color1";
    this.color1.setTransform(50.5, 47.2, 1, 1, 0, 0, 0, 50.5, 47.2);
    this.color1._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.color1)
        .wait(1)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(4)
    );
    this.color2 = new lib.nnn15();
    this.color2.name = "color2";
    this.color2.setTransform(50.5, 47.2, 1, 1, 0, 0, 0, 50.5, 47.2);
    this.color2._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.color2)
        .wait(2)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(3)
    );
    this.color3 = new lib.nnn13();
    this.color3.name = "color3";
    this.color3.setTransform(50.5, 47.2, 1, 1, 0, 0, 0, 50.5, 47.2);
    this.color3._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.color3)
        .wait(3)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(2)
    );
    this.color4 = new lib.nnn11();
    this.color4.name = "color4";
    this.color4.setTransform(50.5, 47.2, 1, 1, 0, 0, 0, 50.5, 47.2);
    this.color4._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.color4)
        .wait(4)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(1)
    );
    this.color5 = new lib.nnn19();
    this.color5.name = "color5";
    this.color5.setTransform(50.5, 47.2, 1, 1, 0, 0, 0, 50.5, 47.2);
    this.color5._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.color5).wait(5).to({ _off: false }, 0).wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 142, 133);
  (lib.nextRace = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.raceAgain = new cjs.Text("Race Again?", "20px 'Arial'", "#FFFFFF");
    this.raceAgain.name = "raceAgain";
    this.raceAgain.textAlign = "center";
    this.raceAgain.lineHeight = 24;
    this.raceAgain.lineWidth = 190;
    this.raceAgain.parent = this;
    this.raceAgain.setTransform(109.55, 55.75);
    this.timeline.addTween(cjs.Tween.get(this.raceAgain).wait(1));
    this.removeWinner = new lib.btn();
    this.removeWinner.name = "removeWinner";
    this.removeWinner.setTransform(-0.5, -1.05, 1, 0.5416, 0, 0, 0, -0.1, -0.1);
    new cjs.ButtonHelper(this.removeWinner, 0, 1, 2, false, new lib.btn(), 3);
    this.race = new lib.btn();
    this.race.name = "race";
    this.race.setTransform(-0.4, 43.45, 1, 0.6942);
    new cjs.ButtonHelper(this.race, 0, 1, 2, false, new lib.btn(), 3);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.race }, { t: this.removeWinner }] })
        .wait(1)
    );
    this.cross = new lib.cross();
    this.cross.name = "cross";
    this.cross.setTransform(198.1, 24.1, 1, 1, 0, 0, 0, 8.1, 8.1);
    this.timeline.addTween(cjs.Tween.get(this.cross).wait(1));
    this.removeOrNot = new cjs.Text(
      "Remove winner from next race?",
      "12px 'Arial'"
    );
    this.removeOrNot.name = "removeOrNot";
    this.removeOrNot.lineHeight = 15;
    this.removeOrNot.lineWidth = 190;
    this.removeOrNot.parent = this;
    this.removeOrNot.setTransform(10, 18);
    this.timeline.addTween(cjs.Tween.get(this.removeOrNot).wait(1));
    this.tick = new lib.tick();
    this.tick.name = "tick";
    this.tick.setTransform(199.8, 25.2, 1, 1, 0, 0, 0, 9.8, 8.2);
    this.tick.visible = false;
    this.timeline.addTween(cjs.Tween.get(this.tick).wait(1));
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(3, 0, 0, 3)
      .p(
        "ACQAAQAAA7gqAqQgqArg8AAQg6AAgrgrQgqgqAAg7QAAg7AqgqQArgqA6AAQA8AAAqAqQAqAqAAA7g"
      );
    this.shape.setTransform(198.1, 23.6);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.raceAgain_1 = new lib.nextRaceButton();
    this.raceAgain_1.name = "raceAgain_1";
    this.raceAgain_1.setTransform(109.7, 66.35, 1, 1, 0, 0, 0, 99.7, 19.6);
    this.timeline.addTween(cjs.Tween.get(this.raceAgain_1).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(5, 0, 0, 3)
      .p("ARJEuIAAsNMgiRAAAIAAMNQAABKA0A0QA0A0BJAAIcuAAQBKAAA0g0QA0g0AAhKg");
    this.shape_1.setTransform(109.675, 47.95);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p("AuXHgQhJAAg0g0Qg0g0AAhKIAAsNMAiRAAAIAAMNQAABKg0A0Qg0A0hKAAg");
    this.shape_2.setTransform(109.675, 47.95);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.nextRace,
    new cjs.Rectangle(-2.5, -2.5, 224.4, 100.9),
    null
  );
  (lib.moreRace3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.frame_0 = function () {
      this.stop();
    };
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));
    this.btn = new lib.btn();
    this.btn.name = "btn";
    this.btn.setTransform(15.45, -28.3, 1, 3.1773, 0, 0, 0, 0, 0.4);
    new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btn(), 3);
    this.timeline.addTween(
      cjs.Tween.get(this.btn).to({ _off: true }, 1).wait(1)
    );
    this.empty1000 = new lib.empty1000();
    this.empty1000.name = "empty1000";
    this.empty1000.setTransform(12.1, -14.35);
    this.timeline.addTween(
      cjs.Tween.get(this.empty1000).to({ _off: true }, 1).wait(1)
    );
    this.instance = new lib.Symbol17();
    this.instance.setTransform(124.1, 98.95, 1, 1, 0, 0, 0, 111.2, 113.3);
    this.timeline.addTween(
      cjs.Tween.get(this.instance).to({ _off: true }, 1).wait(1)
    );
    this.countInput = new lib.an_TextInput({
      id: "countInput",
      value: "500",
      disabled: false,
      visible: true,
      class: "ui-textinput",
    });
    this.countInput.name = "countInput";
    this.countInput.setTransform(
      36.85,
      36.75,
      0.6983,
      1.4749,
      0,
      0,
      0,
      0.1,
      0.1
    );
    this.countInput._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.countInput).wait(1).to({ _off: false }, 0).wait(1)
    );
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#CCCCCC")
      .s()
      .p(
        "AgeB3QgFAAgDgEQgEgDAAgFQAAgFAEgDQADgDAFAAIAUAAIAAi/IgUAAQgFAAgDgDQgEgDAAgFQAAgFAEgDQADgEAFAAIA9AAQAFAAADAEQAEADAAAFQAAAFgEADQgDADgFAAIgUAAIAAC/IAUAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAg"
      );
    this.shape.setTransform(29.425, 52.975);
    this.shape._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.shape).wait(1).to({ _off: false }, 0).wait(1)
    );
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(4, 1, 1)
      .p(
        "AFqjTIgQAAIALgBQADAAACABQABAAAAAAQBRAEA6A5IAAAAQA+A/AABXQAABYg+A+Qg4A4hMAGAE6DUIA4AAQgDAAgEAAQgCABgDAAIgsgBIpyAAIg4AAQACAAAEAAQACABADAAIAtgBAlpjTQgBAAAAAAQhQAEg7A5IAAAAQg+A/AABXQAABYA+A+QA4A4BNAGAlpjTIAQAAIgLgBQgCAAgDABgAlZjTIKzAA"
      );
    this.shape_1.setTransform(68.8, 52.325);
    this.shape_1._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.shape_1).wait(1).to({ _off: false }, 0).wait(1)
    );
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#999999")
      .s()
      .p(
        "AncC+Qg0g/AAhUQAAhfBEhFIADgDQA/g8BWgEIABAAIAGgBIACAAILFAAIACAAIAHABIAAAAQA9ADAxAfIgBAAIAAAmIgOAAQgrgeg2gCIgOAAIgEAAIqvAAIgDAAIgPAAQhJADg1A0IgCADQg2A4AABNQAABPA5A5IAMALg"
      );
    this.shape_2.setTransform(65.05, 49.549);
    this.shape_2._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.shape_2).wait(1).to({ _off: false }, 0).wait(1)
    );
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f()
      .s("#000000")
      .ss(4, 1, 1)
      .p(
        "ACbk+IALAAIGFAAQAFAAAEAAQB5AGBYBXIAAAAQBdBeAACDQAACEhdBeQhYBXh5AGQgDABgFAAIwVgCIl4ACACbk+IALAAAsGk+IOhAA"
      );
    this.shape_3.setTransform(49.45, 52.3);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AoXE+IA2gBIk1AAQEUhuAKiWQAGhUgqhcQhOiVjKgyIOhAAIAMAAIgMAAIAMgBIAAABIGEgBIAJABQB5AGBYBXIAAAAQBeBeAACDQAACEheBeQhYBXh5AGIgHAAg"
      );
    this.shape_4.setTransform(54, 52.3);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }] }, 1)
        .wait(1)
    );
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("rgba(0,0,0,0.498)")
      .s()
      .p(
        "AozE+IA1gBIkZAAQB9gKBUhXQBVhYAAiEQAAhLgfg/IB+AAIAAi0INzAAIAJAAQB5AGBYBXIAAAAQBdBeAACDQAACEhdBeQhYBXh5AGIgHABg"
      );
    this.shape_5.setTransform(63.15, 59.1);
    this.shape_5._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.shape_5).wait(1).to({ _off: false }, 0).wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-39.1, -29.5, 280, 240);
  (lib.mn9 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(["#02CA02", "#01A301"], [0, 1], 0.3, -74.6, -0.3, 103.5)
      .s()
      .p("EhJlANhIAA4JUAiigEQAVaACBQVaCBN9grQN+gqUXgmQOKApHZAhIAAZIg");
    this.shape.setTransform(471, 220.8154);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.instance = new lib.cloud1();
    this.instance.setTransform(
      84.05,
      122.65,
      0.6847,
      0.6847,
      0,
      0,
      0,
      80.2,
      40.6
    );
    this.instance.alpha = 0.5;
    this.instance_1 = new lib.cloud1();
    this.instance_1.setTransform(
      873.5,
      44.25,
      0.6847,
      0.6847,
      0,
      0,
      0,
      80.2,
      40.6
    );
    this.instance_1.alpha = 0.5;
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    );
    this.instance_2 = new lib.mn12();
    this.instance_2.setTransform(43.9, 47.4, 1, 1, 0, 0, 0, 43.9, 47.4);
    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#C6E9FD").s().p("EhJlApaMAAAhSzMCTLAAAMAAABSzg");
    this.shape_1.setTransform(471, 265);
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.mn9,
    new cjs.Rectangle(0, -1, 942, 531),
    null
  );
  (lib.mermaid = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.starfish();
    this.instance.setTransform(
      60.25,
      -9.75,
      0.7014,
      0.7014,
      123.4218,
      0,
      0,
      12,
      11.6
    );
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AjAERQhJgJgJgTQgJgUADgJQAXAUARgMQARgNALgLQAHgEgiACQgiACgcgiQgdgjAKgcQAKgcAIgMIAIgLIgBAIQgBAIACAKQAGAeAcAYQARAPAkgOQAAgBgBgBQgQgzgBhdQgBheAshEQAshFBdAHQAfgpBcgEQBdgEA/AyQA+AxAPAjQAOAigCAaQgCAagQAhIgog5IgVAeIg2g7QgZAxgzAVQAIgugYgRIgCgBQgOBnhrA2QAZhAgLgZQgsAcgLAuQgIAlBTBAQgfANgugmIACAHQAFAMAFANQAiBbgPAcQgPAbgwAAQgwgBgMgDQgNgEgUgB"
      );
    this.shape.setTransform(61.098, 4.7224, 1.4034, 1.4034);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FF3300")
      .s()
      .p(
        "AhkEbQgwgBgMgDQgNgEgUgBIABgBQhJgJgJgTQgJgUADgJQAXAUARgMQARgNALgLQAHgEgiACQgiACgcgiQgdgjAKgcQAKgcAIgMIAIgLIgBAIQgBAIACAKQAGAeAcAYQARAPAkgOIgBgCQgQgzgBhdQgBheAshEQAshFBdAHQAfgpBcgEQBdgEA/AyQA+AxAPAjQAOAigCAaQgCAagQAhIgog5IgVAeIg2g7QgZAxgzAVQAIgugYgRIgCgBQgOBnhrA2QAZhAgLgZQgsAcgLAuQgIAlBTBAQgfANgugmIACAHIAKAZQAiBbgPAcQgOAbgvAAIgCAAg"
      );
    this.shape_1.setTransform(61.098, 4.7224, 1.4034, 1.4034);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_1 }, { t: this.shape }, { t: this.instance }],
        })
        .wait(1)
    );
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AgtgmQACgXAPgHQAQgIARANQAJAFAIALQAAgQAEgLQAGgYAPgFQARgFAPAQQAQARAIAOQAFAPAIAOQAFAOgCAdQABAbgQAaQgQAWgeAKQgdALgZgCQgaAAgZgNQgWgOgMgPQgMgNgCgEQgSgWgFgYQgCgTAPgJQANgJAXAIQANAGANALQgCgMAAgOg"
      );
    this.shape_2.setTransform(94.0338, 74.2097, 1.4034, 1.4034);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FF3366")
      .s()
      .p(
        "AAEBpQgaAAgZgNQgWgOgMgPIgOgRQgSgWgFgYQgCgTAPgJQANgJAXAIQANAGANALQgCgMAAgOQACgXAPgHQAQgIARANQAJAFAIALQAAgQAEgLQAGgYAPgFQARgFAPAQQAQARAIAOQAFAPAIAOQAFAOgCAdQABAbgQAaQgQAWgeAKQgaAJgWAAIgGAAg"
      );
    this.shape_3.setTransform(94.0338, 74.2097, 1.4034, 1.4034);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }] })
        .wait(1)
    );
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "ADXi4QAQAYAWA3QAWA3gXBIQgWBIhcA4IgxAWQhyAlhGgGQhOgGgkgwQgjgwgLgbIgIgVQA+A1B3g5QBMgnA7BEQgbhWBLgsQBvhFgLhRg"
      );
    this.shape_4.setTransform(-26.5394, 17.5377, 1.4034, 1.4034);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#669999")
      .s()
      .p(
        "AhfDLQhOgGgkgwQgjgwgLgbIgIgVQA+A1B3g5QBMgnA7BEQgbhWBLgsQBvhFgLhRIAOASQAQAYAWA3QAWA3gXBIQgWBIhcA4IgxAWQhiAfhBAAIgVAAg"
      );
    this.shape_5.setTransform(-26.5394, 17.5377, 1.4034, 1.4034);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AhIjHQAIABAIAAQB6gOBsADQAUACALgCQA5BFAIBtQACBUhPATQACB2BJBkQh5gEhzgVQifgehfjAQgbg/gOhQQgLg9AJguQAKguARgRQATgTAbAAQAbAAATATQABABAbAkQAUAcAaAGgADBBIQgKACgMABQhkAOhxgOQhggOAChSQAHhtA5hF"
      );
    this.shape_6.setTransform(17.5016, 72.7013, 1.4034, 1.4034);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#66CCCC")
      .s()
      .p(
        "AAhEJQifgehfi/QgbhAgOhPQgLg+AJgtQAKgvARgRQATgTAbAAQAbAAATATIAcAmQAUAbAaAGQg5BFgHBtQgCBSBgAOQBxAOBkgOIAWgDQACB2BJBkQh5gEhzgVg"
      );
    this.shape_7.setTransform(17.3578, 72.7013, 1.4034, 1.4034);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.mermaid,
    new cjs.Rectangle(-64.5, -36, 176.3, 150.4),
    null
  );
  (lib.loadBar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.Symbol61();
    this.instance.setTransform(347.7, 18.5, 1, 1, 0, 0, 0, 367.7, 38.5);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this.resizable = new lib.bar();
    this.resizable.name = "resizable";
    this.resizable.setTransform(-1.45, 18.8, 0.05, 1, 0, 0, 0, -1, 21.4);
    this.timeline.addTween(cjs.Tween.get(this.resizable).wait(1));
    this.instance_1 = new lib.Symbol62();
    this.instance_1.setTransform(348.55, 18.8, 1, 1, 0, 0, 0, 350, 21.4);
    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.loadBar,
    new cjs.Rectangle(-20, -20, 735.4, 76.9),
    null
  );
  (lib.facemask = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.duckEye();
    this.instance.setTransform(44.4, 21.25, 1, 1, 0, 0, 0, 6.6, 9);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AAcAbIhvlcIgrAbIBpFIIkSAsQgVAYAVAXIEeg1IAwgKIAkgHAAcAbIALAjIAxCZQAsBCA0gTQA5gLAYhIAA8AVIggAGIgxAHIAMAmAEzDGQgTBUhcAhQhsAggthrIg0io"
      );
    this.shape.setTransform(22.025, 23.6433);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AA7iBQhuACg6AyQg7AxAbBCQAGARAJARQALARANARQD3BPAFi4Qgdhhg+ghg");
    this.shape_1.setTransform(42.2119, 21.9115);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AArDwIg0ioIAwgKIgwAKIgMgmIAxgHIALAjIgLgjIAggGQAGARAJARIgkAHIAxCZQAsBCA0gTQA5gLAYhIIAqATQgTBUhcAhQgZAHgVAAQhIAAgjhSgAknBOIESgsIhplIIArgbIBvFcIgxAHIAMAmIkeA1QgVgXAVgYgAAcAbg"
      );
    this.shape_2.setTransform(22.025, 23.6433);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#70C1CB")
      .s()
      .p(
        "AhmBqQgNgRgLgRQgJgRgGgRQgbhCA7gxQA6gyBugCQA+AhAdBhQgDCBh7AAQgzAAhLgYg"
      );
    this.shape_3.setTransform(42.2119, 21.9115);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
            { t: this.instance },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.facemask,
    new cjs.Rectangle(-9.6, -9.5, 67.89999999999999, 66.4),
    null
  );
  (lib.duckPattern = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.frame_0 = function () {
      this.stop();
    };
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));
    this.pattern0 = new lib.nnn7();
    this.pattern0.name = "pattern0";
    this.pattern0.setTransform(51.05, 47.2, 1, 1, 0, 0, 0, 49.9, 47.2);
    this.pattern0._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.pattern0)
        .wait(1)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(5)
    );
    this.pattern1 = new lib.nnn6();
    this.pattern1.name = "pattern1";
    this.pattern1.setTransform(50.15, 47.2, 1, 1, 0, 0, 0, 44.6, 47.2);
    this.pattern1._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.pattern1)
        .wait(2)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(4)
    );
    this.pattern2 = new lib.nnn5();
    this.pattern2.name = "pattern2";
    this.pattern2.setTransform(50.6, 47.2, 1, 1, 0, 0, 0, 50.3, 47.2);
    this.pattern2._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.pattern2)
        .wait(3)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(3)
    );
    this.pattern3 = new lib.nnn4();
    this.pattern3.name = "pattern3";
    this.pattern3.setTransform(50.45, 47.2, 1, 1, 0, 0, 0, 50.4, 47.2);
    this.pattern3._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.pattern3)
        .wait(4)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(2)
    );
    this.pattern4 = new lib.nnn3();
    this.pattern4.name = "pattern4";
    this.pattern4.setTransform(50.55, 47.6, 1, 1, 0, 0, 0, 50.5, 47);
    this.pattern4._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.pattern4)
        .wait(5)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(1)
    );
    this.pattern5 = new lib.nnn2();
    this.pattern5.name = "pattern5";
    this.pattern5.setTransform(49.6, 49.75, 1, 1, 0, 0, 0, 49.1, 44.8);
    this.pattern5._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.pattern5).wait(6).to({ _off: false }, 0).wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-19.7, -18.4, 140.5, 131.4);
  (lib.duckColoura = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.color4 = new lib.nnn10();
    this.color4.name = "color4";
    this.color4.setTransform(50.5, 47.2, 1, 1, 0, 0, 0, 50.5, 47.2);
    this.timeline.addTween(cjs.Tween.get(this.color4).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.duckColoura,
    new cjs.Rectangle(0, 0, 101, 94.6),
    null
  );
  (lib.duckColour = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.color0 = new lib.nnn8();
    this.color0.name = "color0";
    this.color0.setTransform(50.5, 47.2, 1, 1, 0, 0, 0, 50.5, 47.2);
    this.timeline.addTween(cjs.Tween.get(this.color0).wait(1));
    this.color1 = new lib.nnn16();
    this.color1.name = "color1";
    this.color1.setTransform(50.5, 47.2, 1, 1, 0, 0, 0, 50.5, 47.2);
    this.timeline.addTween(cjs.Tween.get(this.color1).wait(1));
    this.color2 = new lib.nnn14();
    this.color2.name = "color2";
    this.color2.setTransform(50.5, 47.2, 1, 1, 0, 0, 0, 50.5, 47.2);
    this.timeline.addTween(cjs.Tween.get(this.color2).wait(1));
    this.color3 = new lib.nnn12();
    this.color3.name = "color3";
    this.color3.setTransform(50.5, 47.2, 1, 1, 0, 0, 0, 50.5, 47.2);
    this.timeline.addTween(cjs.Tween.get(this.color3).wait(1));
    this.color4 = new lib.nnn10();
    this.color4.name = "color4";
    this.color4.setTransform(50.5, 47.2, 1, 1, 0, 0, 0, 50.5, 47.2);
    this.timeline.addTween(cjs.Tween.get(this.color4).wait(1));
    this.color5 = new lib.nnn18();
    this.color5.name = "color5";
    this.color5.setTransform(50.5, 47.2, 1, 1, 0, 0, 0, 50.5, 47.2);
    this.timeline.addTween(cjs.Tween.get(this.color5).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.duckColour,
    new cjs.Rectangle(0, 0, 101, 94.6),
    null
  );
  (lib.dotForClock = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.frame_0 = function () {
      this.stop();
    };
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));
    this.instance = new lib.dot2();
    this.instance.setTransform(25, 25, 1, 1, 0, 0, 0, 25, 25);
    this.instance._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance).wait(1).to({ _off: false }, 0).wait(1)
    );
    this.instance_1 = new lib.dot1();
    this.instance_1.setTransform(25, 25, 1, 1, 0, 0, 0, 25, 25);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1).to({ _off: true }, 1).wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 50, 50);
  (lib.clockfortimer = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.info = new cjs.Text("11:30am", "15px 'Arial'");
    this.info.name = "info";
    this.info.lineHeight = 17;
    this.info.lineWidth = 86;
    this.info.parent = this;
    this.info.setTransform(21.45, 2);
    this.timeline.addTween(cjs.Tween.get(this.info).wait(1));
    this.instance = new lib.timerclock();
    this.instance.setTransform(1.15, 1.35, 0.5, 0.5, 0, 0, 0, 0.1, 0.1);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this.instance_1 = new lib.timerclockbg();
    this.instance_1.setTransform(46.25, 10.15, 1, 1, 0, 0, 0, 50.9, 13);
    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.clockfortimer,
    new cjs.Rectangle(-6.1, -4.3, 124, 29),
    null
  );
  (lib.choice3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.duckEye();
    this.instance.setTransform(77.45, 15.1, 1, 1, 0, 0, 0, 4.5, 6.1);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AFMhZQgCgBgBgBQg3gegEg4QgCgdASgMQAJgHAOgBQAXgEAOgdQARgggBgbAgfgbQAfgHgigmQhAhEAAheQAAgOACgOQAIhRA8g7QA7g8BSgIQAMgCAOAAQBiAABGBGQAmAmARAuQAAAAAAgBQAZArAtgTQAugSAOAKQAOALgHAOIgXAyQgCAEAAAEIAAABQAAAAAAABQAAAHAFAFIAAABQADACAEADQApAYglARIieBGQgtBDBIAdQApARAiAiQBEBEAABhQAAA4gYAvQgsBwieAZQj6AajngqQiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATQABABAaAkQAVAcAaAGQAHABAIAAQB7gOBtADQATACAMgCQA4BEAHBtQACBghkALQhjAOhzgOQhggOAChTQAIhtA5hE"
      );
    this.shape.setTransform(50.7631, 47.2817);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhtCLQhfgNAChTQAHhtA5hFQAIACAIgBQB6gOBsADQATACAMgCQA5BFAIBtQABBghkALQgxAGg1AAQg1AAg7gHg"
      );
    this.shape_1.setTransform(33.6499, 59.0299);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#B11B04")
      .s()
      .p(
        "Ag+AZQgXgRgHgOIgIgRQADgFAGgEQAaA1A5gHQAngFA5glIAIgEQAAAHAFAFIAAABQhIArgrAIIgRABQgSAAgNgIg"
      );
    this.shape_2.setTransform(88.575, 28.6735);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FF691E")
      .s()
      .p(
        "Ag7BxQg3gfgDg4QgCgbARgMQgFAEgEAFIAJAQQAGAPAYAQQARAMAfgEQArgJBIgrIAHAFQAoAYglAQIicBHIgEgCgAhmgNQAJgHAOgBQAXgFAPgdQAQgfgBgbIAAgBQAZAqAtgSQAtgTAOALQAOALgHAOIgXAyQgCAEAAAEIgBABIABAAIAAABIgIAEQg4AkgoAGIgNAAQgvAAgXgug"
      );
    this.shape_3.setTransform(89.648, 26.8);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
            { t: this.instance },
          ],
        })
        .wait(1)
    );
    this.duckColour = new lib.duckColourb();
    this.duckColour.name = "duckColour";
    this.duckColour.setTransform(50.5, 47.2, 1, 1, 0, 0, 0, 50.5, 47.2);
    this.timeline.addTween(cjs.Tween.get(this.duckColour).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.choice3,
    new cjs.Rectangle(-1, -1, 103.5, 96.6),
    null
  );
  (lib.choice1a = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(0,0,0,0.498)")
      .s()
      .p(
        "AHnCGQARApAAAwQAAAQgCAPIjPDPIgRADQhCAGhAACgAhrHOIHKnLIAKAFQAmAQAhAfImgGhQg+gDg9gHgAk7GRICIiJQA8ABA3gHQARgCAOgEIi/C+QgxgMgqgdgAm3EEIBGhHQALAyA8AOIhWBWQgegigZgtgAAiCXQgDgvgMgnID9j8IAAAKQADAxAqAdIkfEfQAFgRgBgUgAnzBSIgEgaICEiCIARAYQAVAbAaAGQgPARgMAVIiRCRQgMgogIgsgAgdgbQAfgGgignQgTgUgNgWIFElGQAaAPAXAXIATAWIg9ACIgoAzIAAA4Ij7D7IgFgHgAhgjqQAAgOACgNQAIhRA8g8QA7g8BSgIQAMgBAOAAIAQAAIj8D+IgBgRg"
      );
    this.shape.setTransform(50.5875, 47.2375);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this.instance = new lib.duckEye();
    this.instance.setTransform(77.45, 15.1, 1, 1, 0, 0, 0, 4.5, 6.1);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AFMhZQgCgBgBgBQg3gegEg4QgCgdASgMQAJgHAOgBQAXgEAOgdQARgggBgbAgfgbQAfgHgigmQhAhEAAheQAAgOACgOQAIhRA8g7QA7g8BSgIQAMgCAOAAQBiAABGBGQAmAmARAuQAAAAAAgBQAZArAtgTQAugSAOAKQAOALgHAOIgXAyQgCAEAAAEIAAABQAAAAAAABQAAAHAFAFIAAABQADACAEADQApAYglARIieBGQgtBDBIAdQApARAiAiQBEBEAABhQAAA4gYAvQgsBwieAZQj6AajngqQiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATQABABAaAkQAVAcAaAGQAHABAIAAQB7gOBtADQATACAMgCQA4BEAHBtQACBghkALQhjAOhzgOQhggOAChTQAIhtA5hE"
      );
    this.shape_1.setTransform(50.7631, 47.2817);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhtCLQhfgNAChTQAHhtA5hFQAIACAIgBQB6gOBsADQATACAMgCQA5BFAIBtQABBghkALQgxAGg1AAQg1AAg7gHg"
      );
    this.shape_2.setTransform(33.6499, 59.0299);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#B11B04")
      .s()
      .p(
        "Ag+AZQgXgRgHgOIgIgRQADgFAGgEQAaA1A5gHQAngFA5glIAIgEQAAAHAFAFIAAABQhIArgrAIIgRABQgSAAgNgIg"
      );
    this.shape_3.setTransform(88.575, 28.6735);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FF691E")
      .s()
      .p(
        "Ag7BxQg3gfgDg4QgCgbARgMQgFAEgEAFIAJAQQAGAPAYAQQARAMAfgEQArgJBIgrIAHAFQAoAYglAQIicBHIgEgCgAhmgNQAJgHAOgBQAXgFAPgdQAQgfgBgbIAAgBQAZAqAtgSQAtgTAOALQAOALgHAOIgXAyQgCAEAAAEIgBABIABAAIAAABIgIAEQg4AkgoAGIgNAAQgvAAgXgug"
      );
    this.shape_4.setTransform(89.648, 26.8);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.instance },
          ],
        })
        .wait(1)
    );
    this.duckColour = new lib.duckColoura();
    this.duckColour.name = "duckColour";
    this.duckColour.setTransform(50.5, 47.2, 1, 1, 0, 0, 0, 50.5, 47.2);
    this.timeline.addTween(cjs.Tween.get(this.duckColour).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.choice1a,
    new cjs.Rectangle(-1, -1, 103.5, 96.6),
    null
  );
  (lib.choice1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.duckEye();
    this.instance.setTransform(77.45, 15.1, 1, 1, 0, 0, 0, 4.5, 6.1);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AFMhZQgCgBgBgBQg3gegEg4QgCgdASgMQAJgHAOgBQAXgEAOgdQARgggBgbAgfgbQAfgHgigmQhAhEAAheQAAgOACgOQAIhRA8g7QA7g8BSgIQAMgCAOAAQBiAABGBGQAmAmARAuQAAAAAAgBQAZArAtgTQAugSAOAKQAOALgHAOIgXAyQgCAEAAAEIAAABQAAAAAAABQAAAHAFAFIAAABQADACAEADQApAYglARIieBGQgtBDBIAdQApARAiAiQBEBEAABhQAAA4gYAvQgsBwieAZQj6AajngqQiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATQABABAaAkQAVAcAaAGQAHABAIAAQB7gOBtADQATACAMgCQA4BEAHBtQACBghkALQhjAOhzgOQhggOAChTQAIhtA5hE"
      );
    this.shape.setTransform(50.7631, 47.2817);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhtCLQhfgNAChTQAHhtA5hFQAIACAIgBQB6gOBsADQATACAMgCQA5BFAIBtQABBghkALQgxAGg1AAQg1AAg7gHg"
      );
    this.shape_1.setTransform(33.6499, 59.0299);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#B11B04")
      .s()
      .p(
        "Ag+AZQgXgRgHgOIgIgRQADgFAGgEQAaA1A5gHQAngFA5glIAIgEQAAAHAFAFIAAABQhIArgrAIIgRABQgSAAgNgIg"
      );
    this.shape_2.setTransform(88.575, 28.6735);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FF691E")
      .s()
      .p(
        "Ag7BxQg3gfgDg4QgCgbARgMQgFAEgEAFIAJAQQAGAPAYAQQARAMAfgEQArgJBIgrIAHAFQAoAYglAQIicBHIgEgCgAhmgNQAJgHAOgBQAXgFAPgdQAQgfgBgbIAAgBQAZAqAtgSQAtgTAOALQAOALgHAOIgXAyQgCAEAAAEIgBABIABAAIAAABIgIAEQg4AkgoAGIgNAAQgvAAgXgug"
      );
    this.shape_3.setTransform(89.648, 26.8);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
            { t: this.instance },
          ],
        })
        .wait(1)
    );
    this.duckColour = new lib.duckColour();
    this.duckColour.name = "duckColour";
    this.duckColour.setTransform(50.5, 47.2, 1, 1, 0, 0, 0, 50.5, 47.2);
    this.timeline.addTween(cjs.Tween.get(this.duckColour).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.choice1,
    new cjs.Rectangle(-1, -1, 103.5, 96.6),
    null
  );
  (lib.characterLoader = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.bar = new lib.loadBar();
    this.bar.name = "bar";
    this.bar.setTransform(459.65, 260.85, 1, 1, 0, 0, 0, 347.7, 18.4);
    this.timeline.addTween(cjs.Tween.get(this.bar).wait(1));
    this.instance = new lib.Symbol63();
    this.instance.setTransform(471, 265, 1, 1, 0, 0, 0, 471, 265);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.characterLoader,
    new cjs.Rectangle(-4, -4, 951, 540),
    null
  );
  (lib.businessman = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.duckEye();
    this.instance.setTransform(46.2, 19.75, 1, 1, 0, 0, 0, 6.6, 9);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AiHjAQgHgQgNgLQhUhAA5hQQgpg9AHhJQACg7Awg3QAxg4BJgMQBJgLA6gBQA7gBA+APQA+AOBGAzQBEAzAfg7QAeg7gagzQgagzA0ArQA0ArgNBGQgNBFhaBLQgCAAgBACAG8AJQAGgOAMgRQgDgBgCgBQhMgrgFhNQgDgpAYgQQANgJATgDQAggFAUgoQAXgtgBglQgYhAg1g1QgLgMgNgKQiFBQilghQgOgDgMgBQgyAAg4BAQg7BAAPBEQAOBFgNAtQgIAZgXAZQgKAJgLAKQgeAWgogDQgXgJgDgSQBVALAJhTQAAgDAAgCQAAgdgKgVAgsA/QAEgBADAAIg7hcIAYACQgRgXgNgZAmuBNQALACALgBQCrgTCWAEQAcADAPgDQBPBgAKCYQADCFiLAQQiLASifgTQiFgTADhzQAKiYBPhggAEnBVIlLgXIgBAAAIRB7IASgUIhDhbIhTBQIhmgHAIRB7QAsAWAlAlQBfBfAACGQAABOghBCQg9CbjcAjAIMCAIAFgFAHBB6Ig0geAG8AJIAkADAHBB6IA0AeIAXgYIBjETIhICTIhvifgAhIgcIIEAlAF8LqQAAAAABAAIAFAAQgBAAgCAAQgBAAgBAAAGCLqIAFgBIAAgBQAsldiMk2AF8LqQhyAMhxABgAh9iJQgHgbgDgcACZL3QjgADjWgnQjegqiDkKQgmhagUhuQgPhVANhAQANg/AZgYQAagaAmAAQAlAAAaAaQACACAlAxQAcAmAkAJ"
      );
    this.shape.setTransform(8.7608, 54.6898);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FF9900")
      .s()
      .p(
        "AkQDPQgRgYgNgZQAXgZAIgYQANgtgOhEQgPhFA7hAQA5hAAyAAIAaAFQCkAgCFhQIAYAWQA1A1AYBBQABAlgXAsQgUAnggAGQgTACgNAJQgYARADAoQAFBOBMAqIAFADQgMARgGAPg"
      );
    this.shape_1.setTransform(28.7796, 31.125);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FF0000")
      .s()
      .p("AhEBuIAIkMIA0AeIAXgYIgXAYIg0geIg0geIBThQIBDBbIgSAUIgFAFIBiESIhHCTg");
    this.shape_2.setTransform(59.75, 82.775);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#3366FF")
      .s()
      .p(
        "AiFFvQjegpiDkKQgmhZgUhuQgPhVANhAQANhAAZgYQAagbAmAAQAlAAAaAbIAnA0QAcAmAkAIQhPBggKCYQgDBzCFASQCfAUCKgTQCMgPgDiFQgKiYhQhgIAHgBIABABIFMAXQCME0gsFeIAAAAIgFABIgDAAIgDABIgBAAIjiAMIggABQjQAAjGglg"
      );
    this.shape_3.setTransform(-6.4026, 90.2107);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFF00")
      .s()
      .p(
        "AlSFnQgXgJgDgRQBVAKAJhSIAAgGQAAgcgKgVQgHgQgNgMQhUg/A5hQQgpg9AHhIQACg7Awg4QAxg3BJgMQBKgMA6gBQA6AAA+AOQA+AOBGA0QBEAyAfg6QAeg7gagzQgag0A0AsQA0ArgNBFQgNBFhaBLIgDACQiFBQikggIgagFQgyAAg5A/Qg7BAAPBFQAOBFgNAtQgIAYgXAZIgVAUQgaATghAAIgLgBg"
      );
    this.shape_4.setTransform(23.2961, 14.8031);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AErGDQAsldiMk1IBmAHIhmgHIlLgXIgBAAIg7hdIAYACIIEAmIAkADIhTBQIA0AeIgJEMIBvCfIBIiTIhjkSIAFgFQAsAWAlAlQBfBfAACFQAABOghBCQg9CbjcAjgAnhBmQiFgTADhyQAKiYBPhgQALACALgBQCrgTCWAEQAcADAPgDQBQBgAKCYQADCEiMAQQhEAJhIAAQhMAAhSgKg"
      );
    this.shape_5.setTransform(17.9967, 90.375);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
            { t: this.instance },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.businessman,
    new cjs.Rectangle(-62.7, -22.2, 143, 153.79999999999998),
    null
  );
  (lib.alarmclockmode = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.clockicon();
    this.instance.setTransform(10.7, 11.9, 1, 1, 0, 0, 0, 10.7, 11.9);
    this.text = new cjs.Text("Alarm Clock Mode!", "12px 'Arial'", "#5E5F68");
    this.text.lineHeight = 14;
    this.text.lineWidth = 104;
    this.text.parent = this;
    this.text.setTransform(25.05, 5.45);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.text }, { t: this.instance }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.alarmclockmode,
    new cjs.Rectangle(0, 0, 130.8, 23.8),
    null
  );
  (lib.Symbol64 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.Symbol2();
    this.instance.setTransform(471, 54.25, 1, 1, 0, 0, 0, 471, 86.7);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this.instance_1 = new lib.Symbol2();
    this.instance_1.setTransform(471, 54.25, 1, 1, 0, 0, 0, 471, 86.7);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(["#02CA02", "#01A301"], [0, 1], 0.3, -89.1, -0.4, 89.2)
      .s()
      .p("EhJlALSIAA2jMCTLAAAIAAWjg");
    this.shape.setTransform(471, 72.175);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape }, { t: this.instance_1 }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol64,
    new cjs.Rectangle(0, 0, 942, 160.3),
    null
  );
  (lib.sky = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.part1 = new lib.Symbol64();
    this.part1.name = "part1";
    this.part1.setTransform(1411, 112.65, 1, 1, 0, 0, 0, 471, 80.2);
    this.part0 = new lib.Symbol64();
    this.part0.name = "part0";
    this.part0.setTransform(471, 112.65, 1, 1, 0, 0, 0, 471, 80.2);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.part0 }, { t: this.part1 }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.sky,
    new cjs.Rectangle(0, 32.5, 1882, 160.3),
    null
  );
  (lib.ownLogoPromo = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.tickcross = new lib.os_tickcross();
    this.tickcross.name = "tickcross";
    this.tickcross.setTransform(4.35, 16.3);
    this.timeline.addTween(cjs.Tween.get(this.tickcross).wait(1));
    this.showRaceNumbers = new cjs.Text("Show Custom Logo:", "20px 'Arial'");
    this.showRaceNumbers.name = "showRaceNumbers";
    this.showRaceNumbers.textAlign = "center";
    this.showRaceNumbers.lineHeight = 24;
    this.showRaceNumbers.lineWidth = 216;
    this.showRaceNumbers.parent = this;
    this.showRaceNumbers.setTransform(119.95, 16.45);
    this.timeline.addTween(cjs.Tween.get(this.showRaceNumbers).wait(1));
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AyMDfQh/gBgDh8IAAk/IApAAIAABTIA3A3MAlhAAAIBLhLIAAg/IARAAIAAE6QAACBiCABg"
      );
    this.shape.setTransform(134.025, 20.5);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AyMDzQisAAgDioIAAk9IAtAAIAAFAQADB8B/AAMAkZAAAQCCAAAAiCIAAk6IAtAAIAAE2QAACvivAAg"
      );
    this.shape_1.setTransform(134.025, 22.575);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AyMDzQisAAgDioIAAk9IAtAAIAAB7IAxAxMAnAAAAIAsgsIAAiAIAtAAIAAE2QAACvivAAg"
      );
    this.shape_2.setTransform(134.025, 22.575);
    this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.ownLogoPromo,
    new cjs.Rectangle(0, -1.7, 268.1, 48.6),
    null
  );
  (lib.os_saveList = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.previewSound = new lib.previewSound();
    this.previewSound.name = "previewSound";
    this.previewSound.setTransform(595.45, 165.2, 1, 1, 0, 0, 0, 20, 20);
    this.previewSound.visible = false;
    this.timeline.addTween(cjs.Tween.get(this.previewSound).wait(1));
    this.nsLenLoop = new lib.nslenLoop();
    this.nsLenLoop.name = "nsLenLoop";
    this.nsLenLoop.setTransform(599.75, 208.85, 1, 1, 0, 0, 0, 25.1, 12.2);
    this.timeline.addTween(cjs.Tween.get(this.nsLenLoop).wait(1));
    this.info = new cjs.Text("", "25px 'Arial'");
    this.info.name = "info";
    this.info.textAlign = "center";
    this.info.lineHeight = 30;
    this.info.lineWidth = 320;
    this.info.parent = this;
    this.info.setTransform(465.55, 226.05);
    this.timeline.addTween(cjs.Tween.get(this.info).wait(1));
    this.titleInputText = new cjs.Text("1st:", "40px 'Arial'");
    this.titleInputText.name = "titleInputText";
    this.titleInputText.textAlign = "center";
    this.titleInputText.lineHeight = 24;
    this.titleInputText.lineWidth = 216;
    this.titleInputText.parent = this;
    this.titleInputText.setTransform(338.75, 144.05);
    this.timeline.addTween(cjs.Tween.get(this.titleInputText).wait(1));
    this.titleInput = new lib.an_TextInput({
      id: "titleInput",
      value: "",
      disabled: false,
      visible: true,
      class: "ui-textinput",
    });
    this.titleInput.name = "titleInput";
    this.titleInput.setTransform(
      385.75,
      140.05,
      2.3354,
      2.2432,
      0,
      0,
      0,
      0,
      0.1
    );
    this.timeline.addTween(cjs.Tween.get(this.titleInput).wait(1));
    this.titleInputText1 = new cjs.Text("2nd:", "40px 'Arial'");
    this.titleInputText1.name = "titleInputText1";
    this.titleInputText1.textAlign = "center";
    this.titleInputText1.lineHeight = 24;
    this.titleInputText1.lineWidth = 216;
    this.titleInputText1.parent = this;
    this.titleInputText1.setTransform(338.75, 204.05);
    this.timeline.addTween(cjs.Tween.get(this.titleInputText1).wait(1));
    this.titleInput1 = new lib.an_TextInput({
      id: "titleInput1",
      value: "",
      disabled: false,
      visible: true,
      class: "ui-textinput",
    });
    this.titleInput1.name = "titleInput1";
    this.titleInput1.setTransform(
      385.75,
      200.05,
      2.3354,
      2.2432,
      0,
      0,
      0,
      0,
      0.1
    );
    this.timeline.addTween(cjs.Tween.get(this.titleInput1).wait(1));
    this.titleInputText2 = new cjs.Text("3rd:", "40px 'Arial'");
    this.titleInputText2.name = "titleInputText2";
    this.titleInputText2.textAlign = "center";
    this.titleInputText2.lineHeight = 24;
    this.titleInputText2.lineWidth = 216;
    this.titleInputText2.parent = this;
    this.titleInputText2.setTransform(338.75, 264.05);
    this.timeline.addTween(cjs.Tween.get(this.titleInputText2).wait(1));
    this.titleInput2 = new lib.an_TextInput({
      id: "titleInput2",
      value: "",
      disabled: false,
      visible: true,
      class: "ui-textinput",
    });
    this.titleInput2.name = "titleInput2";
    this.titleInput2.setTransform(
      385.75,
      260.05,
      2.3354,
      2.2432,
      0,
      0,
      0,
      0,
      0.1
    );
    this.timeline.addTween(cjs.Tween.get(this.titleInput2).wait(1));
    this.selectDrop = new lib.an_ComboBox({
      id: "selectDrop",
      label: "",
      items: "dummy, dummy, items, 2, label, 0, , , data, 0, , , 0",
      value: "0",
      disabled: false,
      visible: true,
      class: "ui-textinput",
    });
    this.selectDrop.name = "selectDrop";
    this.selectDrop.setTransform(463.5, 164.5, 3.0355, 2.2432, 0, 0, 0, 50, 11);
    this.timeline.addTween(cjs.Tween.get(this.selectDrop).wait(1));
    this.grc_set = new lib.btn();
    this.grc_set.name = "grc_set";
    this.grc_set.setTransform(469.7, 329.5, 0.7114, 0.7209, 0, 0, 0, 1.6, 0.1);
    new cjs.ButtonHelper(this.grc_set, 0, 1, 2, false, new lib.btn(), 3);
    this.grc_cancel = new lib.btn();
    this.grc_cancel.name = "grc_cancel";
    this.grc_cancel.setTransform(
      303.2,
      329.5,
      0.7114,
      0.7209,
      0,
      0,
      0,
      1.6,
      0.1
    );
    new cjs.ButtonHelper(this.grc_cancel, 0, 1, 2, false, new lib.btn(), 3);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.grc_cancel }, { t: this.grc_set }] })
        .wait(1)
    );
    this.instance = new lib.os_Symbol59();
    this.instance.setTransform(463.3, 261.45, 1, 1, 0, 0, 0, 174.4, 135.1);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this.saveCover = new lib.os_saveListCover();
    this.saveCover.name = "saveCover";
    this.saveCover.setTransform(470.6, 268.8, 1, 1, 0, 0, 0, 475.6, 270.8);
    new cjs.ButtonHelper(this.saveCover, 0, 1, 1);
    this.timeline.addTween(cjs.Tween.get(this.saveCover).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_saveList,
    new cjs.Rectangle(-5, -2, 951.2, 541.5),
    null
  );
  (lib.os_dragBarButton = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.txt = new cjs.Text("", "25px 'Arial'", "#FFFFFF");
    this.txt.name = "txt";
    this.txt.textAlign = "center";
    this.txt.lineHeight = 30;
    this.txt.lineWidth = 46;
    this.txt.parent = this;
    this.txt.setTransform(24.8, 11.45);
    this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));
    this.circle = new lib.os_Symbol49();
    this.circle.name = "circle";
    this.circle.setTransform(25.1, 25, 1, 1, 0, 0, 0, 25, 25);
    this.timeline.addTween(cjs.Tween.get(this.circle).wait(1));
    this.bigShow = new lib.os_bigDragShow();
    this.bigShow.name = "bigShow";
    this.bigShow.setTransform(25, -36.85, 1, 1, 0, 0, 0, 50, 33.5);
    this.bigShow.visible = false;
    this.timeline.addTween(cjs.Tween.get(this.bigShow).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_dragBarButton,
    new cjs.Rectangle(-27, -72.3, 104, 122.3),
    null
  );
  (lib.inner = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.waterlineani();
    this.instance.setTransform(-108.55, -6.65, 1, 1, 0, 0, 0, 40.1, 3.5);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(53));
    this.alien = new lib.alien();
    this.alien.name = "alien";
    this.alien.setTransform(-101.9, -69.25, 1, 1, 0, 0, 0, 50.4, 47.2);
    this.alien._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.alien)
        .wait(1)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(51)
    );
    this.astro = new lib.astro();
    this.astro.name = "astro";
    this.astro.setTransform(-74.3, -104.1, 1, 1, 0, 0, 0, 35.1, 32.3);
    this.astro._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.astro)
        .wait(2)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(50)
    );
    this.baceballhat = new lib.baceballhat();
    this.baceballhat.name = "baceballhat";
    this.baceballhat.setTransform(-81.45, -120.5, 1, 1, 0, 0, 0, 31.1, 20.8);
    this.baceballhat._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.baceballhat)
        .wait(3)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(49)
    );
    this.bandana = new lib.bandana();
    this.bandana.name = "bandana";
    this.bandana.setTransform(-99.7, -109.8, 1, 1, 0, 0, 0, 27.2, 23.4);
    this.bandana._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.bandana)
        .wait(4)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(48)
    );
    this.batman = new lib.batman();
    this.batman.name = "batman";
    this.batman.setTransform(-81.05, -69.25, 1, 1, 0, 0, 0, 65.3, 47.2);
    this.batman._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.batman)
        .wait(5)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(47)
    );
    this.bear = new lib.bear();
    this.bear.name = "bear";
    this.bear.setTransform(-101.55, -74.85, 1, 1, 0, 0, 0, 50.6, 43.4);
    this.bear._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.bear)
        .wait(6)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(46)
    );
    this.bee = new lib.bee();
    this.bee.name = "bee";
    this.bee.setTransform(-101.6, -69.25, 1, 1, 0, 0, 0, 50.6, 47.2);
    this.bee._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.bee)
        .wait(7)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(45)
    );
    this.blackhat = new lib.blackhat();
    this.blackhat.name = "blackhat";
    this.blackhat.setTransform(-101.9, -43.75, 1, 1, 0, 0, 0, 50.4, 29);
    this.blackhat._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.blackhat)
        .wait(8)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(44)
    );
    this.blackwhitehat = new lib.blackwhitehat();
    this.blackwhitehat.name = "blackwhitehat";
    this.blackwhitehat.setTransform(-89.45, -138.55, 1, 1, 0, 0, 0, 34.9, 15.7);
    this.blackwhitehat._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.blackwhitehat)
        .wait(9)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(43)
    );
    this.builder = new lib.builder();
    this.builder.name = "builder";
    this.builder.setTransform(-125.75, -151.25, 1, 1, 0, 0, 0, 0, -0.1);
    this.builder._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.builder)
        .wait(10)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(42)
    );
    this.businessman = new lib.businessman();
    this.businessman.name = "businessman";
    this.businessman.setTransform(-77.25, -79.4, 1, 1, 0, 0, 0, 33.2, 54.6);
    this.businessman._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.businessman)
        .wait(11)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(41)
    );
    this.chef = new lib.chef();
    this.chef.name = "chef";
    this.chef.setTransform(-95.7, -89.25, 1, 1, 0, 0, 0, 30.8, 56.2);
    this.chef._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.chef)
        .wait(12)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(40)
    );
    this.clown = new lib.clown();
    this.clown.name = "clown";
    this.clown.setTransform(-37.4, -117.1, 1, 1, 0, 0, 0, 7, 7);
    this.clown._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.clown)
        .wait(13)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(39)
    );
    this.crown = new lib.crown();
    this.crown.name = "crown";
    this.crown.setTransform(-83.15, -153.8, 1, 1, 0, 0, 0, 22.6, 18.7);
    this.crown._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.crown)
        .wait(14)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(38)
    );
    this.deer = new lib.deer();
    this.deer.name = "deer";
    this.deer.setTransform(-101.9, -69.25, 1, 1, 0, 0, 0, 50.4, 47.2);
    this.deer._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.deer)
        .wait(15)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(37)
    );
    this.dinosaur = new lib.dinosaur();
    this.dinosaur.name = "dinosaur";
    this.dinosaur.setTransform(-112.9, -78.35, 1, 1, 0, 0, 0, 58.4, 53.7);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p("AjBAHQAKACALgBQCsgSCXAEQAbADAQgD");
    this.shape.setTransform(-125.375, -72.404);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.shape }, { t: this.dinosaur }] }, 16)
        .to({ state: [] }, 1)
        .wait(36)
    );
    this.doctor = new lib.doctor();
    this.doctor.name = "doctor";
    this.doctor.setTransform(-101.6, -69.25, 1, 1, 0, 0, 0, 50.6, 47.2);
    this.doctor._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.doctor)
        .wait(17)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(35)
    );
    this.facemask = new lib.facemask();
    this.facemask.name = "facemask";
    this.facemask.setTransform(-84.4, -112.1, 1, 1, 0, 0, 0, 24.4, 23.6);
    this.facemask._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.facemask)
        .wait(18)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(34)
    );
    this.grad = new lib.grad();
    this.grad.name = "grad";
    this.grad.setTransform(-97.75, -130.3, 1, 1, 0, 0, 0, 32.2, 18.4);
    this.grad._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.grad)
        .wait(19)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(33)
    );
    this.grandma = new lib.grandma();
    this.grandma.name = "grandma";
    this.grandma.setTransform(-101.6, -69.25, 1, 1, 0, 0, 0, 50.6, 47.2);
    this.grandma._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.grandma)
        .wait(20)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(32)
    );
    this.grandpa = new lib.grandpa();
    this.grandpa.name = "grandpa";
    this.grandpa.setTransform(-101.6, -69.25, 1, 1, 0, 0, 0, 50.6, 47.2);
    this.grandpa._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.grandpa)
        .wait(21)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(31)
    );
    this.hat = new lib.hat();
    this.hat.name = "hat";
    this.hat.setTransform(-91.6, -138.1, 1, 1, 0, 0, 0, 28.3, 20.4);
    this.hat._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.hat)
        .wait(22)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(30)
    );
    this.king = new lib.king();
    this.king.name = "king";
    this.king.setTransform(-96.25, -133.95, 1, 1, 0, 0, 0, 22.2, 18.5);
    this.king._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.king)
        .wait(23)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(29)
    );
    this.mermaid = new lib.mermaid();
    this.mermaid.name = "mermaid";
    this.mermaid.setTransform(-101.6, -69.25, 1, 1, 0, 0, 0, 50.6, 47.2);
    this.mermaid._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.mermaid)
        .wait(24)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(28)
    );
    this.spiderman = new lib.spiderman();
    this.spiderman.name = "spiderman";
    this.spiderman.setTransform(-101.9, -69.25, 1, 1, 0, 0, 0, 50.4, 47.2);
    this.spiderman._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.spiderman)
        .wait(25)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(27)
    );
    this.priprincessncess = new lib.princess();
    this.priprincessncess.name = "priprincessncess";
    this.priprincessncess.setTransform(
      -89.95,
      -144.75,
      1,
      1,
      0,
      0,
      0,
      9.2,
      10.7
    );
    this.priprincessncess._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.priprincessncess)
        .wait(26)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(26)
    );
    this.freud = new lib.freud();
    this.freud.name = "freud";
    this.freud.setTransform(-101.6, -69.25, 1, 1, 0, 0, 0, 50.6, 47.2);
    this.freud._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.freud)
        .wait(27)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(25)
    );
    this.holmes = new lib.holmes();
    this.holmes.name = "holmes";
    this.holmes.setTransform(-120.15, -150.95);
    this.holmes._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.holmes)
        .wait(28)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(24)
    );
    this.gladiator = new lib.gladiator();
    this.gladiator.name = "gladiator";
    this.gladiator.setTransform(-85.15, -117.95, 1, 1, 0, 0, 0, 41.4, 37.8);
    this.gladiator._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.gladiator)
        .wait(29)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(23)
    );
    this.police = new lib.police();
    this.police.name = "police";
    this.police.setTransform(-11.65, -136.5, 1, 1, 0, 0, 0, 22.4, 26.3);
    this.police._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.police)
        .wait(30)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(22)
    );
    this.punk = new lib.punk();
    this.punk.name = "punk";
    this.punk.setTransform(-97.6, -133.35, 1, 1, 0, 0, 0, 23.6, 21.8);
    this.punk._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.punk)
        .wait(31)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(21)
    );
    this.panda = new lib.panda();
    this.panda.name = "panda";
    this.panda.setTransform(-101.6, -69.25, 1, 1, 0, 0, 0, 50.6, 47.2);
    this.panda._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.panda)
        .wait(32)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(20)
    );
    this.pirate = new lib.pirate();
    this.pirate.name = "pirate";
    this.pirate.setTransform(-94.85, -137.85, 1, 1, 0, 0, 0, 37, 22.6);
    this.pirate._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.pirate)
        .wait(33)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(19)
    );
    this.parrot = new lib.parrot();
    this.parrot.name = "parrot";
    this.parrot.setTransform(-101.9, -69.25, 1, 1, 0, 0, 0, 50.4, 47.2);
    this.parrot._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.parrot)
        .wait(34)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(18)
    );
    this.redalien = new lib.redalien();
    this.redalien.name = "redalien";
    this.redalien.setTransform(-101.6, -69.25, 1, 1, 0, 0, 0, 50.6, 47.2);
    this.redalien._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.redalien)
        .wait(35)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(17)
    );
    this.superman = new lib.superman();
    this.superman.name = "superman";
    this.superman.setTransform(-101.6, -69.25, 1, 1, 0, 0, 0, 50.6, 47.2);
    this.superman._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.superman)
        .wait(36)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(16)
    );
    this.surgeon = new lib.surgeon();
    this.surgeon.name = "surgeon";
    this.surgeon.setTransform(-71, -106.75, 1, 1, 0, 0, 0, 33.5, 23);
    this.surgeon._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.surgeon)
        .wait(37)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(15)
    );
    this.spa = new lib.spa();
    this.spa.name = "spa";
    this.spa.setTransform(-95.65, -80.35, 1, 1, 0, 0, 0, 50.6, 47.2);
    this.spa._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.spa)
        .wait(38)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(14)
    );
    this.strawberry = new lib.strawberry();
    this.strawberry.name = "strawberry";
    this.strawberry.setTransform(-101.6, -69.25, 1, 1, 0, 0, 0, 50.6, 47.2);
    this.strawberry._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.strawberry)
        .wait(39)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(13)
    );
    this.santa = new lib.santa();
    this.santa.name = "santa";
    this.santa.setTransform(-102.9, -127.5, 1, 1, 0, 0, 0, 31.2, 20.6);
    this.santa._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.santa)
        .wait(40)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(12)
    );
    this.summer = new lib.summer();
    this.summer.name = "summer";
    this.summer.setTransform(-85.6, -122.1, 1, 1, 0, 0, 0, 26.8, 17.3);
    this.summer._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.summer)
        .wait(41)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(11)
    );
    this.snowman = new lib.snowman();
    this.snowman.name = "snowman";
    this.snowman.setTransform(-101.6, -69.25, 1, 1, 0, 0, 0, 50.6, 47.2);
    this.snowman._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.snowman)
        .wait(42)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(10)
    );
    this.statueofliberty = new lib.statueofliberty();
    this.statueofliberty.name = "statueofliberty";
    this.statueofliberty.setTransform(
      -93.85,
      -122.6,
      1,
      1,
      0,
      0,
      0,
      22.7,
      13.5
    );
    this.statueofliberty._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.statueofliberty)
        .wait(43)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(9)
    );
    this.strawberryhat = new lib.strawberryhat();
    this.strawberryhat.name = "strawberryhat";
    this.strawberryhat.setTransform(
      -99.7,
      -127.75,
      0.9998,
      0.9998,
      -1.5147,
      0,
      0,
      25.7,
      22.4
    );
    this.strawberryhat._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.strawberryhat)
        .wait(44)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(8)
    );
    this.unicorn = new lib.unicorn();
    this.unicorn.name = "unicorn";
    this.unicorn.setTransform(-124.95, -95.6, 1, 1, 0, 0, 0, 48.8, 42.3);
    this.unicorn._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.unicorn)
        .wait(45)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(7)
    );
    this.viking = new lib.viking();
    this.viking.name = "viking";
    this.viking.setTransform(-100.1, -136.6, 1, 1, 0, 0, 0, 27, 24.6);
    this.viking._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.viking)
        .wait(46)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(6)
    );
    this.vampire = new lib.vampire();
    this.vampire.name = "vampire";
    this.vampire.setTransform(-101.6, -69.25, 1, 1, 0, 0, 0, 50.6, 47.2);
    this.vampire._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.vampire)
        .wait(47)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(5)
    );
    this.wig = new lib.wig();
    this.wig.name = "wig";
    this.wig.setTransform(-100.3, -110.75, 1, 1, 0, 0, 0, 15.9, 16.2);
    this.wig._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.wig)
        .wait(48)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(4)
    );
    this.winterhat = new lib.winterhat();
    this.winterhat.name = "winterhat";
    this.winterhat.setTransform(-95.1, -143.25, 1, 1, 0, 0, 0, 26.8, 31.9);
    this.winterhat._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.winterhat)
        .wait(49)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(3)
    );
    this.witch = new lib.witch();
    this.witch.name = "witch";
    this.witch.setTransform(-86.7, -85.8, 1, 1, 0, 0, 0, 48.7, 60.2);
    this.witch._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.witch)
        .wait(50)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(2)
    );
    this.zorro = new lib.zorro();
    this.zorro.name = "zorro";
    this.zorro.setTransform(-88.35, -69.8, 1, 1, 0, 0, 0, 29.4, 41);
    this.zorro._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.zorro)
        .wait(51)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(1)
    );
    this.instance_1 = new lib.duckEye();
    this.instance_1.setTransform(-66.35, -117.05, 1, 1, 0, 0, 0, 4.5, 6.1);
    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53));
    this.instance_2 = new lib.Symbol3();
    this.instance_2.setTransform(-101.45, -69.2, 1, 1, 0, 0, 0, 71, 66.1);
    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(53));
    this.instance_3 = new lib.Symbol5();
    this.instance_3.setTransform(-94.15, -66.05, 1, 1, 0, 0, 0, 59.7, 33.8);
    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(53));
    this.duckPattern = new lib.duckPattern();
    this.duckPattern.name = "duckPattern";
    this.duckPattern.setTransform(-101.9, -69.25, 1, 1, 0, 0, 0, 50.4, 47.2);
    this.timeline.addTween(cjs.Tween.get(this.duckPattern).wait(53));
    this.instance_4 = new lib.Symbol6();
    this.instance_4.setTransform(-47.1, -97.8, 1, 1, 0, 0, 0, 16.6, 16.1);
    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(53));
    this.duckColour = new lib.nnn1();
    this.duckColour.name = "duckColour";
    this.duckColour.setTransform(-122.35, -88.4, 1, 1, 0, 0, 0, 50.4, 47.2);
    this.timeline.addTween(cjs.Tween.get(this.duckColour).wait(53));
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(
    -219.9,
    -193.6,
    220.9,
    198.29999999999998
  );
  (lib.ingametimer1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.clock = new lib.clockfortimer();
    this.clock.name = "clock";
    this.clock.setTransform(-47.5, 126.65, 1, 1, 0, 0, 0, 17.7, 19.8);
    this.timeline.addTween(cjs.Tween.get(this.clock).wait(1));
    this.mls = new cjs.Text("000 ", "20px 'Arial'");
    this.mls.name = "mls";
    this.mls.textAlign = "right";
    this.mls.lineHeight = 23;
    this.mls.lineWidth = 42;
    this.mls.parent = this;
    this.mls.setTransform(225.95, 92.05);
    this.timeline.addTween(cjs.Tween.get(this.mls).wait(1));
    this.nextRace = new lib.nextRace();
    this.nextRace.name = "nextRace";
    this.nextRace.setTransform(-334.45, 20.05);
    this.nextRace.visible = false;
    this.timeline.addTween(cjs.Tween.get(this.nextRace).wait(1));
    this.info = new cjs.Text("00:00:00", "74px 'Arial'");
    this.info.name = "info";
    this.info.lineHeight = 83;
    this.info.lineWidth = 317;
    this.info.parent = this;
    this.info.setTransform(-55.85, 24);
    this.timeline.addTween(cjs.Tween.get(this.info).wait(1));
    this.tClear = new cjs.Text("Clear", "22px 'Arial'", "#FFFFFF");
    this.tClear.name = "tClear";
    this.tClear.textAlign = "center";
    this.tClear.lineHeight = 25;
    this.tClear.lineWidth = 85;
    this.tClear.parent = this;
    this.tClear.setTransform(-137.5, 78);
    this.tStart = new cjs.Text("Start", "22px 'Arial'", "#FFFFFF");
    this.tStart.name = "tStart";
    this.tStart.textAlign = "center";
    this.tStart.lineHeight = 25;
    this.tStart.lineWidth = 88;
    this.tStart.parent = this;
    this.tStart.setTransform(-137, 37.5);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.tStart }, { t: this.tClear }] })
        .wait(1)
    );
    this.alarmWarning_mc = new lib.timerclockbgNoStop();
    this.alarmWarning_mc.name = "alarmWarning_mc";
    this.alarmWarning_mc.setTransform(-140.45, 39.5, 1, 1, 0, 0, 0, 50.9, 13);
    this.alarmWarning_mc.visible = false;
    this.timeline.addTween(cjs.Tween.get(this.alarmWarning_mc).wait(1));
    this.bClear = new lib.Symbol1();
    this.bClear.name = "bClear";
    this.bClear.setTransform(-137.5, 90.5, 1, 1, 0, 0, 0, 47.5, 15.5);
    new cjs.ButtonHelper(this.bClear, 0, 1, 2, false, new lib.Symbol1(), 3);
    this.bStart = new lib.Symbol1();
    this.bStart.name = "bStart";
    this.bStart.setTransform(-136.5, 51.55, 1, 1, 0, 0, 0, 47.5, 15.5);
    new cjs.ButtonHelper(this.bStart, 0, 1, 2, false, new lib.Symbol1(), 3);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.bStart }, { t: this.bClear }] })
        .wait(1)
    );
    this.bg2 = new lib.Symbol69();
    this.bg2.name = "bg2";
    this.bg2.setTransform(89.5, 71.65, 1, 1, 0, 0, 0, 173.5, 45.6);
    this.timeline.addTween(cjs.Tween.get(this.bg2).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.ingametimer1,
    new cjs.Rectangle(-336.9, 17.6, 601.9, 113.9),
    null
  );
  (lib.duckyshowInner = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.waterlineani();
    this.instance.setTransform(40.45, 93.1, 1, 1, 0, 0, 0, 37.6, 3.9);
    this.instance_1 = new lib.duckEye();
    this.instance_1.setTransform(77.45, 15.1, 1, 1, 0, 0, 0, 4.5, 6.1);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(2, 1, 1)
      .p(
        "AFMhZQgCgBgBgBQg3gegEg4QgCgdASgMQAJgHAOgBQAXgEAOgdQARgggBgbAgfgbQAfgHgigmQhAhEAAheQAAgOACgOQAIhRA8g7QA7g8BSgIQAMgCAOAAQBiAABGBGQAmAmARAuQAAAAAAgBQAZArAtgTQAugSAOAKQAOALgHAOIgXAyQgCAEAAAEIAAABQAAAAAAABQAAAHAFAFIAAABQADACAEADQApAYglARIieBGQgtBDBIAdQApARAiAiQBEBEAABhQAAA4gYAvQgsBwieAZQj6AajngqQiggehejAQgbhAgPhQQgLg9AKgtQAJguASgRQATgTAbAAQAbAAATATQABABAaAkQAVAcAaAGQAHABAIAAQB7gOBtADQATACAMgCQA4BEAHBtQACBghkALQhjAOhzgOQhggOAChTQAIhtA5hE"
      );
    this.shape.setTransform(50.7631, 47.2817);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhtCLQhfgNAChTQAHhtA5hFQAIACAIgBQB6gOBsADQATACAMgCQA5BFAIBtQABBghkALQgxAGg1AAQg1AAg7gHg"
      );
    this.shape_1.setTransform(33.6499, 59.0299);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#B11B04")
      .s()
      .p(
        "Ag+AZQgXgRgHgOIgIgRQADgFAGgEQAaA1A5gHQAngFA5glIAIgEQAAAHAFAFIAAABQhIArgrAIIgRABQgSAAgNgIg"
      );
    this.shape_2.setTransform(88.575, 28.6735);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FF691E")
      .s()
      .p(
        "Ag7BxQg3gfgDg4QgCgbARgMQgFAEgEAFIAJAQQAGAPAYAQQARAMAfgEQArgJBIgrIAHAFQAoAYglAQIicBHIgEgCgAhmgNQAJgHAOgBQAXgFAPgdQAQgfgBgbIAAgBQAZAqAtgSQAtgTAOALQAOALgHAOIgXAyQgCAEAAAEIgBABIABAAIAAABIgIAEQg4AkgoAGIgNAAQgvAAgXgug"
      );
    this.shape_3.setTransform(89.648, 26.8);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
            { t: this.instance_1 },
            { t: this.instance },
          ],
        })
        .wait(1)
    );
    this.duckColour = new lib.duckColour();
    this.duckColour.name = "duckColour";
    this.duckColour.setTransform(50.5, 47.2, 1, 1, 0, 0, 0, 50.5, 47.2);
    this.timeline.addTween(cjs.Tween.get(this.duckColour).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.duckyshowInner,
    new cjs.Rectangle(-1, -1, 115.3, 105.1),
    null
  );
  (lib.duckyshow = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AggA+QgMgMgCgRIASgCQADAOAHAHQAHAGALABQALAAAJgJQAIgIAAgOQAAgLgIgJQgIgHgMAAIgLACIACgOIADAAQAKAAAJgHQAJgFAAgNQAAgJgHgHQgGgGgKAAQgKAAgHAGQgHAHgCANIgRgDQADgSAMgKQALgJARAAQALAAAKAFQAJAFAGAIQAFAJAAAKQAAAJgFAIQgFAHgKAFQANADAHAIQAHAKAAANQAAATgOANQgNANgUAAQgTAAgNgLg"
      );
    this.shape.setTransform(-37.225, 217.5);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p("AAJBIIAAhvQgHAGgJAGQgKAGgIADIAAgRQAOgHALgKQAKgKAFgJIALAAIAACPg");
    this.shape_1.setTransform(3.875, -29.875);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this.instance = new lib.duckyshowInner();
    this.instance.setTransform(-20.15, 206.25, 1, 1, 0, 0, 0, 50.8, 48);
    this.instance_1 = new lib.duckyshowInner();
    this.instance_1.setTransform(21.6, -42.35, 1, 1, 0, 0, 0, 50.8, 48);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.duckyshow,
    new cjs.Rectangle(-71.9, -91.3, 157, 353.6),
    null
  );
  (lib.clockitems = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.alarmclockmode();
    this.instance.setTransform(6.2, 3);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this.thumb_mn = new lib.os_dragBarButton();
    this.thumb_mn.name = "thumb_mn";
    this.thumb_mn.setTransform(227.55, 204.85);
    this.timeline.addTween(cjs.Tween.get(this.thumb_mn).wait(1));
    this.thumb_hr = new lib.os_dragBarButton();
    this.thumb_hr.name = "thumb_hr";
    this.thumb_hr.setTransform(127.1, 131.2);
    this.timeline.addTween(cjs.Tween.get(this.thumb_hr).wait(1));
    this.hr_txt = new cjs.Text("12", "25px 'Arial'", "#FFFFFF");
    this.hr_txt.name = "hr_txt";
    this.hr_txt.textAlign = "center";
    this.hr_txt.lineHeight = 28;
    this.hr_txt.lineWidth = 45;
    this.hr_txt.parent = this;
    this.hr_txt.setTransform(410.05, 142.2);
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgoBJQgRgXAAgyQAAgfAGgTQAHgTANgLQAMgKATAAQAOAAALAFQALAGAHALQAHALAEAQQAEAPAAAaQAAAfgGAUQgHATgMALQgNAKgUAAQgZAAgPgSgAgXg7QgMAQAAArQAAAsALAPQAKAOAOAAQAPAAAKgOQALgPAAgsQAAgrgLgPQgKgOgPAAQgOAAgJANg"
      );
    this.shape.setTransform(157.925, 230.425);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgoBJQgRgXAAgyQAAgfAGgTQAHgTANgLQAMgKATAAQAOAAALAFQALAGAHALQAHALAEAQQAEAPAAAaQAAAfgGAUQgHATgMALQgNAKgUAAQgZAAgPgSgAgXg7QgMAQAAArQAAAsALAPQAKAOAOAAQAPAAAKgOQALgPAAgsQAAgrgLgPQgKgOgPAAQgOAAgJANg"
      );
    this.shape_1.setTransform(144.025, 230.425);
    this.mn_txt = new cjs.Text("01", "25px 'Arial'", "#FFFFFF");
    this.mn_txt.name = "mn_txt";
    this.mn_txt.textAlign = "center";
    this.mn_txt.lineHeight = 28;
    this.mn_txt.lineWidth = 45;
    this.mn_txt.parent = this;
    this.mn_txt.setTransform(151.05, 142.2);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgbA1IAAhmIAQAAIAAAPQAGgLAFgDQAEgEAGAAQAJAAAJAGIgGAQQgGgEgHAAQgGAAgDAEQgFADgCAGQgDAJAAALIAAA2g"
      );
    this.shape_2.setTransform(617.075, 157.3);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAZBIIAAhCQAAgMgGgHQgGgFgKAAQgHAAgHADQgHAFgDAGQgCAHAAAMIAAA5IgSAAIAAiOIASAAIAAAyQAMgOASABQALAAAJAEQAIAEAEAJQADAHAAAPIAABCg"
      );
    this.shape_3.setTransform(607.375, 155.45);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AANBIIAAgjIg9AAIAAgQIBAhbIAOAAIAABbIAUAAIAAAQIgUAAIAAAjgAgfAVIAsAAIAAg/g"
      );
    this.shape_4.setTransform(595.95, 155.45);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AguBIQAAgHACgFQADgKAIgJQAIgKAPgMQAXgTAIgKQAIgMAAgKQAAgKgHgHQgIgHgMAAQgLAAgIAHQgIAIAAANIgSgCQACgUAMgKQAMgLAUAAQAUAAAMALQAMAMAAARQAAAIgDAJQgEAIgIAIQgIAJgTAQIgTASIgIAKIBFAAIAAARg"
      );
    this.shape_5.setTransform(584.975, 155.425);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABCBCIAAhQQAAgOgCgFQgCgGgGgEQgFgDgIAAQgOAAgJAJQgJAJAAAUIAABKIgVAAIAAhTQAAgPgFgHQgFgHgNAAQgJAAgIAFQgIAEgDAKQgEAJAAASIAABCIgWAAIAAiAIAUAAIAAASQAGgKAKgFQAKgGANAAQAPAAAJAGQAIAGAEAKQAPgWAZAAQATAAALAKQAKALAAAWIAABYg"
      );
    this.shape_6.setTransform(551.575, 156.525);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "Ag3BbIAAiyIAUAAIAAAQQAHgJAJgFQAJgFALAAQARAAANAIQAMAJAHAQQAGAPAAASQAAAVgHAOQgHARgOAIQgNAIgPAAQgKAAgJgEQgJgFgFgHIAAA/gAgZg8QgKANAAAaQAAAYAKAMQAKAMAOgBQAOAAAKgMQALgNAAgZQAAgYgKgNQgLgMgNAAQgOAAgLANg"
      );
    this.shape_7.setTransform(534.525, 159);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ABCBCIAAhQQAAgOgCgFQgCgGgGgEQgFgDgIAAQgOAAgJAJQgJAJAAAUIAABKIgVAAIAAhTQAAgPgFgHQgFgHgNAAQgJAAgIAFQgIAEgDAKQgEAJAAASIAABCIgWAAIAAiAIAUAAIAAASQAGgKAKgFQAKgGANAAQAPAAAJAGQAIAGAEAKQAPgWAZAAQATAAALAKQAKALAAAWIAABYg"
      );
    this.shape_8.setTransform(497.575, 156.525);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgvA5QgMgKAAgQQAAgKAFgIQAEgIAHgEQAHgEAJgDIATgDQAagDAMgFIABgFQAAgOgHgFQgIgIgQAAQgPAAgHAGQgIAFgDAOIgWgDQADgOAHgIQAGgJANgEQANgFAQAAQAQAAALAEQAKAEAFAGQAFAGACAJIABAUIAAAcQAAAfABAIQACAIAEAIIgXAAQgEgHgBgJQgMAKgLAEQgKAFgNAAQgWAAgLgLgAgEAIQgOACgGACQgFADgDAFQgDAEAAAGQAAAJAGAGQAHAFANAAQAMAAAJgFQAKgGAFgJQADgIAAgOIAAgIQgLAFgXADg"
      );
    this.shape_9.setTransform(480.125, 156.675);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgnBQQgNgMgDgVIAWgCQACAPAIAHQAHAGAMAAQAJAAAIgEQAIgFAEgIQAFgIAEgNQADgNAAgOIAAgEQgHALgLAGQgMAHgMAAQgWAAgPgRQgQgPAAgaQAAgbAQgRQAQgQAYAAQARAAAOAJQAPAJAHASQAIARAAAhQAAAhgIAVQgHAUgPALQgPAKgSAAQgVAAgOgLgAgYg8QgLAMAAATQAAARAKALQAKAJAPAAQAPAAAKgJQAJgLAAgTQAAgTgKgLQgKgLgOAAQgOAAgKAMg"
      );
    this.shape_10.setTransform(416.975, 230.425);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgpBMQgPgOgCgWIAXgCQACARAKAIQAJAJANAAQAPAAALgMQALgMAAgUQAAgTgLgKQgKgKgQAAQgLAAgIAEQgJAFgFAHIgUgDIARhbIBYAAIAAAVIhHAAIgJAwQAQgLARAAQAXAAAQAQQAQAQAAAZQAAAYgOASQgRAWgdAAQgYAAgQgOg"
      );
    this.shape_11.setTransform(403.125, 230.575);
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p("AgMBBIAAgZIAYAAIAAAZgAgMgnIAAgZIAYAAIAAAZg");
    this.shape_12.setTransform(113.05, 231.075);
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p(
        "AgkA5QgNgKgEgVIAWgDQACANAIAHQAJAHANAAQAPAAAIgGQAIgHAAgIQAAgHgHgFQgEgDgTgEQgXgGgJgEQgJgEgGgIQgEgIAAgJQAAgJAEgHQAEgIAGgFQAGgEAJgCQAIgDALAAQAOAAAMAFQALAEAGAIQAFAHACANIgWACQgBgKgHgFQgHgGgMAAQgPAAgGAFQgHAFAAAHQAAAEADAEQACADAGADIASAFQAYAGAJAEQAJADAGAIQAFAHAAAMQAAALgHAJQgGAKgMAFQgMAGgQAAQgYAAgNgLg"
      );
    this.shape_13.setTransform(103.2, 231.075);
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#000000")
      .s()
      .p(
        "AgqAyQgRgRAAggQAAggARgSQARgSAaAAQAaAAAQASQARASAAAfIAAAGIhgAAQABAVALALQALAMAPAAQAMAAAJgHQAIgGAFgOIAXADQgFAUgPALQgOALgXAAQgbAAgRgSgAgXgnQgLALgBAQIBIAAQgCgQgHgIQgKgNgRAAQgOAAgKAKg"
      );
    this.shape_14.setTransform(90.025, 231.075);
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#000000")
      .s()
      .p(
        "AgCBVQgHgEgDgGQgDgGAAgUIAAhKIgPAAIAAgRIAPAAIAAggIAWgNIAAAtIAVAAIAAARIgVAAIAABLIAAAMQABADADABQADACAFAAIAJgBIAEAUIgRABQgMAAgFgDg"
      );
    this.shape_15.setTransform(79.8, 228.875);
    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#000000")
      .s()
      .p(
        "AgcA+QgLgFgEgGQgFgHgCgKQgBgGAAgOIAAhPIAVAAIAABHQAAARACAGQACAIAHAFQAGAFAKAAQAJAAAJgFQAJgFADgJQAEgIgBgRIAAhEIAXAAIAACAIgUAAIAAgTQgPAWgZAAQgLAAgKgEg"
      );
    this.shape_16.setTransform(69.15, 231.225);
    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#000000")
      .s()
      .p(
        "AAfBCIAAhOQAAgNgDgHQgDgGgGgEQgHgEgIAAQgNAAgLAJQgKAJAAAYIAABGIgWAAIAAiAIAUAAIAAASQAOgVAaAAQAMAAAKAEQAKAEAFAHQAEAHACAJQACAGAAAQIAABOg"
      );
    this.shape_17.setTransform(55.325, 230.925);
    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#000000")
      .s()
      .p("AgKBZIAAiAIAVAAIAACAgAgKg/IAAgZIAVAAIAAAZg");
    this.shape_18.setTransform(45.6, 228.6);
    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#000000")
      .s()
      .p(
        "AA+BZIAAiUIgzCUIgVAAIgziXIAACXIgXAAIAAixIAjAAIArB+IAHAaIAKgdIAqh7IAhAAIAACxg"
      );
    this.shape_19.setTransform(32.4, 228.6);
    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#000000")
      .s()
      .p("AgLBBIAAgZIAXAAIAAAZgAgLgnIAAgZIAXAAIAAAZg");
    this.shape_20.setTransform(92.2, 156.675);
    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#000000")
      .s()
      .p(
        "AgkA5QgNgKgEgVIAWgDQACANAIAHQAIAHAPAAQAOAAAIgGQAHgHABgIQgBgHgGgFQgFgDgRgEQgYgGgJgEQgJgEgGgIQgEgIAAgJQAAgJAEgHQAEgIAHgFQAFgEAIgCQAJgDAKAAQAPAAALAFQAMAEAFAIQAGAHACANIgVACQgCgKgHgFQgHgGgMAAQgPAAgHAFQgGAFAAAHQAAAEADAEQADADAFADIATAFQAXAGAJAEQAJADAGAIQAFAHAAAMQAAALgGAJQgHAKgMAFQgMAGgPAAQgYAAgOgLg"
      );
    this.shape_21.setTransform(82.35, 156.675);
    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#000000")
      .s()
      .p(
        "AgiBCIAAiAIAUAAIAAATQAHgOAHgEQAFgEAIAAQALAAALAHIgHAUQgIgFgIAAQgHAAgFAFQgGAEgCAIQgEALAAAOIAABDg"
      );
    this.shape_22.setTransform(72.975, 156.525);
    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#000000")
      .s()
      .p(
        "AgcA+QgLgFgFgGQgEgHgCgKQgBgGgBgOIAAhPIAXAAIAABHQAAARABAGQACAIAHAFQAGAFAKAAQAJAAAJgFQAIgFAEgJQADgIAAgRIAAhEIAXAAIAACAIgUAAIAAgTQgPAWgZAAQgLAAgKgEg"
      );
    this.shape_23.setTransform(60.8, 156.825);
    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#000000")
      .s()
      .p(
        "AgrAyQgRgRAAghQAAgjAUgRQARgPAXAAQAbAAARASQARARAAAfQAAAYgIAPQgIAOgOAIQgOAIgRAAQgaAAgRgSgAgbgkQgKAMAAAYQAAAZAKAMQALANAQAAQAQAAALgNQALgMAAgZQAAgYgLgMQgLgNgQAAQgQAAgLANg"
      );
    this.shape_24.setTransform(46.975, 156.675);
    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#000000")
      .s()
      .p("AAuBaIAAhVIhcAAIAABVIgXAAIAAiyIAXAAIAABJIBcAAIAAhJIAYAAIAACyg");
    this.shape_25.setTransform(31.025, 154.2);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.mn_txt },
            { t: this.shape_1 },
            { t: this.shape },
            { t: this.hr_txt },
          ],
        })
        .wait(1)
    );
    this.bg_hr = new lib.os_dragBarBG3();
    this.bg_hr.name = "bg_hr";
    this.bg_hr.setTransform(351.05, 155.9, 1, 1, 0, 0, 0, 200, 0);
    this.timeline.addTween(cjs.Tween.get(this.bg_hr).wait(1));
    this.clock = new cjs.Text("00:00", "80px 'Arial'");
    this.clock.name = "clock";
    this.clock.textAlign = "center";
    this.clock.lineHeight = 90;
    this.clock.lineWidth = 522;
    this.clock.parent = this;
    this.clock.setTransform(319.55, -5.15);
    this.timeline.addTween(cjs.Tween.get(this.clock).wait(1));
    this.ampm = new cjs.Text("pm", "30px 'Arial'");
    this.ampm.name = "ampm";
    this.ampm.textAlign = "center";
    this.ampm.lineHeight = 34;
    this.ampm.lineWidth = 59;
    this.ampm.parent = this;
    this.ampm.setTransform(464.35, 35.65);
    this.timeline.addTween(cjs.Tween.get(this.ampm).wait(1));
    this.text = new cjs.Text("Countdown Time:", "12px 'Arial'", "#9FA0B0");
    this.text.textAlign = "center";
    this.text.lineHeight = 14;
    this.text.lineWidth = 521;
    this.text.parent = this;
    this.text.setTransform(319, 76.8);
    this.timeline.addTween(cjs.Tween.get(this.text).wait(1));
    this.display = new cjs.Text("00:00:00", "25px 'Arial'");
    this.display.name = "display";
    this.display.textAlign = "center";
    this.display.lineHeight = 28;
    this.display.lineWidth = 521;
    this.display.parent = this;
    this.display.setTransform(319, 90.45);
    this.timeline.addTween(cjs.Tween.get(this.display).wait(1));
    this.instance_1 = new lib.dsd();
    this.instance_1.setTransform(30, 88.35, 1, 1, 0, 0, 0, 25.4, 27.9);
    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
    this.bg_mn = new lib.os_dragBarBG2();
    this.bg_mn.name = "bg_mn";
    this.bg_mn.setTransform(351.05, 230.3, 1, 1, 0, 0, 0, 200, 0);
    this.am_btn = new lib.dotForClock();
    this.am_btn.name = "am_btn";
    this.am_btn.setTransform(491.15, 156, 1, 1, 0, 0, 0, 25, 25);
    this.instance_2 = new lib.dotForClock();
    this.instance_2.setTransform(410.55, 229.85, 1, 1, 0, 0, 0, 25, 25);
    this.instance_3 = new lib.dotForClock();
    this.instance_3.setTransform(151.55, 229.85, 1, 1, 0, 0, 0, 25, 25);
    this.full_btn = new lib.dotForClock();
    this.full_btn.name = "full_btn";
    this.full_btn.setTransform(599.2, 156, 1, 1, 0, 0, 0, 25, 25);
    this.pm_btn = new lib.dotForClock();
    this.pm_btn.name = "pm_btn";
    this.pm_btn.setTransform(545.15, 156, 1, 1, 0, 0, 0, 25, 25);
    this.instance_4 = new lib.dotForClock();
    this.instance_4.setTransform(410.55, 156, 1, 1, 0, 0, 0, 25, 25);
    this.instance_5 = new lib.dotForClock();
    this.instance_5.setTransform(151.55, 156.2, 1, 1, 0, 0, 0, 25, 25);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_5 },
            { t: this.instance_4 },
            { t: this.pm_btn },
            { t: this.full_btn },
            { t: this.instance_3 },
            { t: this.instance_2 },
            { t: this.am_btn },
            { t: this.bg_mn },
          ],
        })
        .wait(1)
    );
    this.set_btn = new lib.clockset();
    this.set_btn.name = "set_btn";
    this.set_btn.setTransform(453.45, 199.3);
    this.timeline.addTween(cjs.Tween.get(this.set_btn).wait(1));
    this.instance_6 = new lib.otherbg();
    this.instance_6.setTransform(321.75, 229.3, 1, 1, 0, 0, 0, 308.5, 30);
    this.instance_7 = new lib.something2();
    this.instance_7.setTransform(321.75, 155.7, 1, 1, 0, 0, 0, 308.5, 30);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_7 }, { t: this.instance_6 }] })
        .wait(1)
    );
    this.instance_8 = new lib.no_hit_button();
    this.instance_8.setTransform(294.1, 59.15, 1, 1, 0, 0, 0, 291.4, 59.1);
    new cjs.ButtonHelper(this.instance_8, 0, 1, 1);
    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));
    this.instance_9 = new lib.bgforclockm();
    this.instance_9.setTransform(320.9, 193.65, 1, 1, 0, 0, 0, 320.9, 80.5);
    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.clockitems,
    new cjs.Rectangle(-2, -7.1, 646, 283.3),
    null
  );
  (lib.choice2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.builder();
    this.instance.setTransform(67.8, 47.35, 0.7417, 0.7417, 0, 0, 0, 46, 65.7);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this.instance_1 = new lib.choice1a();
    this.instance_1.setTransform(50.8, 56.55, 1, 1, 0, 0, 0, 50.8, 48);
    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.choice2,
    new cjs.Rectangle(-1, -0.7, 103.5, 104.8),
    null
  );
  (lib.Character = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.isSingleFrame = false;
    this.frame_0 = function () {
      if (this.isSingleFrame) {
        return;
      }
      if (this.totalFrames == 1) {
        this.isSingleFrame = true;
      }
      this.stop();
    };
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
    this.no = new lib.os_showNumbers();
    this.no.name = "no";
    this.no.setTransform(-205.55, -151.5);
    this.timeline.addTween(cjs.Tween.get(this.no).wait(1));
    this.myNum = new cjs.Text("5", "23px 'Arial'");
    this.myNum.name = "myNum";
    this.myNum.textAlign = "center";
    this.myNum.lineHeight = 28;
    this.myNum.lineWidth = 57;
    this.myNum.parent = this;
    this.myNum.setTransform(-126.5, -63.65);
    this.timeline.addTween(cjs.Tween.get(this.myNum).wait(1));
    this.inner = new lib.inner();
    this.inner.name = "inner";
    this.inner.setTransform(-101.8, -69.05, 1, 1, 0, 0, 0, -101.5, -69.2);
    this.timeline.addTween(cjs.Tween.get(this.inner).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Character,
    new cjs.Rectangle(-205.7, -151.7, 175.89999999999998, 156.6),
    null
  );
  (lib.os_Symbol48 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.btn_clock = new lib.btn();
    this.btn_clock.name = "btn_clock";
    this.btn_clock.setTransform(2.55, 73.9, 0.2316, 0.7551, 0, 0, 0, 0, 0.1);
    new cjs.ButtonHelper(this.btn_clock, 0, 1, 2, false, new lib.btn(), 3);
    this.btn_changesound = new lib.btn();
    this.btn_changesound.name = "btn_changesound";
    this.btn_changesound.setTransform(
      586.55,
      74.3,
      0.2316,
      0.7551,
      0,
      0,
      0,
      0,
      0.1
    );
    new cjs.ButtonHelper(
      this.btn_changesound,
      0,
      1,
      2,
      false,
      new lib.btn(),
      3
    );
    this.btn_hhmmss = new lib.btn();
    this.btn_hhmmss.name = "btn_hhmmss";
    this.btn_hhmmss.setTransform(586.45, 16.2, 0.2316, 0.7551, 0, 0, 0, 0, 0.1);
    new cjs.ButtonHelper(this.btn_hhmmss, 0, 1, 2, false, new lib.btn(), 3);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.btn_hhmmss },
            { t: this.btn_changesound },
            { t: this.btn_clock },
          ],
        })
        .wait(1)
    );
    this.newWay = new lib.clockitems();
    this.newWay.name = "newWay";
    this.newWay.setTransform(319.35, 151.2, 1, 1, 0, 0, 0, 320.9, 138.1);
    this.newWay.visible = false;
    this.timeline.addTween(cjs.Tween.get(this.newWay).wait(1));
    this.instance = new lib.os_additional_controls();
    this.instance.setTransform(610.6, 71.1, 1, 1, 0, 0, 0, 25.4, 57.1);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this.oldWay = new lib.old();
    this.oldWay.name = "oldWay";
    this.oldWay.setTransform(320.9, 138.8, 1, 1, 0, 0, 0, 320.9, 138.8);
    this.timeline.addTween(cjs.Tween.get(this.oldWay).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.os_Symbol48,
    new cjs.Rectangle(-3.5, 0, 647.3, 289.3),
    null
  );
  (lib.mn8 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.instance = new lib.duckyshow();
    this.instance.setTransform(93.4, 353.2, 1, 1, 0, 0, 0, 50.8, 48);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#303030")
      .ss(4, 1, 1)
      .p(
        "EAnJgJnIKFAAQA6AAAAA5IAARdQAAA5g6AAMhibAAAQg6AAAAg5IAAxdQAAg5A6AAMBYGAAA"
      );
    this.shape.setTransform(475.85, 71.825);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#E6E9FF")
      .s()
      .p(
        "EgxNAJoQg6AAAAg5IAAxdQAAg5A6AAMBYGAAAIAQAAIKGAAQA4AAAAA5IAARdQAAA5g4AAg"
      );
    this.shape_1.setTransform(475.85, 71.825);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this.instance_1 = new lib.waterMove();
    this.instance_1.setTransform(449.55, 457.55, 1, 1, 0, 0, 0, 471, 168.2);
    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
    this.instance_2 = new lib.Symbol2();
    this.instance_2.setTransform(471, 177.25, 1, 1, 0, 0, 0, 471, 86.7);
    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("rgba(102,102,102,0.298)")
      .s()
      .p("EgwuAW0Qj9AAgpjVMAAAgqSMBqpAAAMAAAAo6QAAEmkhAHg");
    this.shape_2.setTransform(474.725, 146.075);
    this.instance_3 = new lib.Symbol7();
    this.instance_3.setTransform(
      471.45,
      401.75,
      1,
      0.7206,
      0,
      0,
      0,
      492.9,
      188.8
    );
    this.instance_4 = new lib.mn9();
    this.instance_4.setTransform(471, 262.1, 1, 1, 0, 0, 0, 471, 263.3);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_4 },
            { t: this.instance_3 },
            { t: this.shape_2 },
          ],
        })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.mn8,
    new cjs.Rectangle(-29.3, -2.2, 993.8, 628.1),
    null
  );
  (lib.choiceToggle = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.frame_0 = function () {
      this.stop();
    };
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));
    this.instance = new lib.choice2();
    this.instance.setTransform(
      59.85,
      57.2,
      0.6429,
      0.6429,
      0,
      0,
      0,
      50.9,
      51.8
    );
    this.instance_1 = new lib.choice1();
    this.instance_1.setTransform(
      59.85,
      62.8,
      0.6429,
      0.6429,
      0,
      0,
      0,
      50.9,
      51.8
    );
    this.instance_2 = new lib.choice3();
    this.instance_2.setTransform(
      59.85,
      62.8,
      0.6429,
      0.6429,
      0,
      0,
      0,
      50.9,
      51.8
    );
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .wait(1)
    );
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgPAZQgGgEgCgKIAKgBQABAFADAEQAEADAFAAQAHAAADgDQAEgDAAgDQAAgDgDgCIgKgEIgOgEQgEgBgCgEQgCgDAAgFQAAgDACgDIAEgGIAGgCQAEgCAFAAQAFAAAGACQAFACACADQACADABAGIgJACQgBgFgDgCQgDgDgFAAQgGAAgDADQgDABAAADIABAEIAEACIAIADIAOAFQAEAAACADQADAEAAAEQAAAFgDAFQgDAEgFADQgGACgGAAQgLAAgFgFg"
      );
    this.shape.setTransform(104.425, 101.65);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgSAWQgHgIAAgOQAAgNAHgIQAIgIAKAAQAMAAAHAIQAHAIAAANIAAACIgpAAQAAAKAFAFQAFAFAGAAQAFAAAEgDQAEgDACgGIAKABQgCAJgHAFQgGAFgKAAQgMAAgHgIgAgKgQQgEAEgBAHIAfAAQAAgHgDgEQgFgFgHAAQgGAAgFAFg"
      );
    this.shape_1.setTransform(98.625, 101.65);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AAdAdIAAgjIgBgIQgBgDgCgBQgDgCgDAAQgGAAgEAEQgEAEAAAJIAAAgIgJAAIAAgkQAAgGgCgDQgDgEgFAAQgEAAgDACQgEADgCAEQgBAEAAAHIAAAdIgJAAIAAg4IAIAAIAAAIQADgEAEgDQAEgCAGAAQAHAAAEADQACACADAFQAGgKALAAQAJAAAEAFQAFAEgBAKIAAAmg"
      );
    this.shape_2.setTransform(91.05, 101.575);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgMAbQgFgCgCgDIgDgHIAAgJIAAgiIAJAAIAAAeIABALQABADADADQADACAEAAQAEAAADgCQAEgDACgEQABgDAAgIIAAgdIAKAAIAAA4IgJAAIAAgJQgGAKgLAAQgFAAgEgCg"
      );
    this.shape_3.setTransform(83.375, 101.725);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AgBAlQgCgCgCgDQgBgCAAgIIAAghIgHAAIAAgHIAHAAIAAgOIAIgGIAAAUIALAAIAAAHIgLAAIAAAhIABAFIACACIADABIAFAAIABAIIgHABQgGAAgCgCg"
      );
    this.shape_4.setTransform(78.9, 100.7);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AgPAZQgGgEgCgKIAKgBQABAFADAEQAEADAFAAQAHAAADgDQAEgDAAgDQAAgDgDgCIgKgEIgOgEQgEgBgCgEQgCgDAAgFQAAgDACgDIAEgGIAGgCQAEgCAFAAQAFAAAGACQAFACACADQACADABAGIgJACQgBgFgDgCQgDgDgFAAQgGAAgDADQgDABAAADIABAEIAEACIAIADIAOAFQAEAAACADQADAEAAAEQAAAFgDAFQgDAEgFADQgGACgGAAQgLAAgFgFg"
      );
    this.shape_5.setTransform(74.525, 101.65);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgSAWQgIgHAAgPQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAIAAANQAAAKgDAHQgEAGgGAEQgGADgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg"
      );
    this.shape_6.setTransform(68.725, 101.65);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AgRAjQgIgFgFgKQgEgJAAgLQAAgMAFgJQAFgJAIgFQAJgFAJAAQAMAAAIAGQAIAGADALIgKADQgDgJgFgEQgFgEgIAAQgIAAgGAEQgGAFgDAHQgCAHAAAIQAAAJADAIQADAHAGAEQAGAEAGAAQAJAAAGgFQAGgFACgKIALACQgDANgJAHQgIAHgNAAQgLAAgIgGg"
      );
    this.shape_7.setTransform(61.775, 100.575);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AAPAeQgFAFgGACQgFAEgGAAQgMAAgHgJQgGgGAAgJQAAgHAFgGQAEgFAKgEQgGgGgBgEQgCgEAAgDQAAgIAFgFQAGgFAIAAQAHAAAGAFQAFAFAAAHQAAALgPAIIAOARIAEgLIAKACQgDALgEAGQAFAIAHAEIgGAIQgGgEgGgHgAgTAJQgDAEAAADQAAAFAEAFQAEAGAHAAQAEAAAEgDQAFgCACgFIgQgWQgIAFgDAEgAgKgdQgCACAAAEIABADIADAEIAEAFQAFgDACgDQACgDAAgDQAAgEgDgCQgCgDgDAAQgEAAgDADg"
      );
    this.shape_8.setTransform(51.125, 100.6);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AgPAZQgGgEgCgKIAKgBQABAFADAEQAEADAFAAQAHAAADgDQAEgDAAgDQAAgDgDgCIgKgEIgOgEQgEgBgCgEQgCgDAAgFQAAgDACgDIAEgGIAGgCQAEgCAFAAQAFAAAGACQAFACACADQACADABAGIgJACQgBgFgDgCQgDgDgFAAQgGAAgDADQgDABAAADIABAEIAEACIAIADIAOAFQAEAAACADQADAEAAAEQAAAFgDAFQgDAEgFADQgGACgGAAQgLAAgFgFg"
      );
    this.shape_9.setTransform(41.525, 101.65);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AgPAdIAAg4IAJAAIAAAJQAEgGACgCQACgCAEAAQAEAAAGADIgEAJQgDgCgEAAQgDAAgCACQgCACgBADQgCAFAAAGIAAAdg"
      );
    this.shape_10.setTransform(37.4, 101.575);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p(
        "AgSAWQgIgHAAgPQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAIAAANQAAAKgDAHQgEAGgGAEQgGADgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg"
      );
    this.shape_11.setTransform(32.075, 101.65);
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#000000").s().p("AgEAnIAAhNIAJAAIAABNg");
    this.shape_12.setTransform(27.775, 100.575);
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p(
        "AgSAWQgIgHAAgPQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAIAAANQAAAKgDAHQgEAGgGAEQgGADgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg"
      );
    this.shape_13.setTransform(23.525, 101.65);
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#000000")
      .s()
      .p(
        "AgRAjQgIgFgFgKQgEgJAAgLQAAgMAFgJQAFgJAIgFQAJgFAJAAQAMAAAIAGQAIAGADALIgKADQgDgJgFgEQgFgEgIAAQgIAAgGAEQgGAFgDAHQgCAHAAAIQAAAJADAIQADAHAGAEQAGAEAGAAQAJAAAGgFQAGgFACgKIALACQgDANgJAHQgIAHgNAAQgLAAgIgGg"
      );
    this.shape_14.setTransform(16.575, 100.575);
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#000000")
      .s()
      .p(
        "AgUAnIgBgJIAFABQAEAAABgBIADgDIAEgHIABgDIgWg4IAKAAIAMAhIADAMIAEgMIAMghIAKAAIgVA5IgFANQgDAEgDADQgEACgEAAIgGgBg"
      );
    this.shape_15.setTransform(86.2, 102.8);
    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#000000")
      .s()
      .p(
        "AAOAdIAAghIgCgJQgBgDgDgCQgCgCgFAAQgEAAgFAEQgFAEABALIAAAeIgKAAIAAg4IAIAAIAAAIQAHgJAKAAQAGAAAEACQAEACACADIAEAHIAAAJIAAAig"
      );
    this.shape_16.setTransform(77.9, 101.575);
    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#000000")
      .s()
      .p(
        "AgTAjQgIgFgFgJQgFgKABgKQAAgTAKgLQAKgLAQAAQALAAAIAFQAKAGAEAJQAEAJAAALQAAAMgEAJQgFAKgJAFQgJAFgKAAQgKAAgJgGgAgSgXQgIAHAAARQAAAOAIAJQAIAIAKAAQAMAAAHgJQAIgIAAgPQAAgJgDgHQgEgHgGgEQgGgEgIAAQgKAAgIAIg"
      );
    this.shape_17.setTransform(70.6, 100.575);
    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#000000")
      .s()
      .p(
        "AALAcIgJghIgCgKIgKArIgLAAIgRg3IAKAAIAJAfIADANIADgMIAJggIAJAAIAJAfIADAMIADgMIAJgfIAKAAIgSA3g"
      );
    this.shape_18.setTransform(59.25, 101.65);
    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f("#000000").s().p("AgEAnIAAhNIAJAAIAABNg");
    this.shape_19.setTransform(47.925, 100.575);
    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f("#000000").s().p("AgEAnIAAhNIAJAAIAABNg");
    this.shape_20.setTransform(45.475, 100.575);
    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#000000")
      .s()
      .p("AgFAnIAAghIgegsIAMAAIAQAXIAHAOIAJgOIAPgXIAMAAIggAsIAAAhg");
    this.shape_21.setTransform(34.5, 100.575);
    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#000000")
      .s()
      .p(
        "AgUAnIgCgJIAGABQAEAAACgBIACgDIADgHIABgDIgVg4IAKAAIAMAhIADAMIAEgMIANghIAJAAIgWA5IgEANQgDAEgDADQgEACgEAAIgGgBg"
      );
    this.shape_22.setTransform(85.9, 102.8);
    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#000000")
      .s()
      .p(
        "AANAdIAAghIgBgJQgBgDgCgCQgEgCgDAAQgFAAgFAEQgEAEgBALIAAAeIgJAAIAAg4IAIAAIAAAIQAHgJAKAAQAGAAAEACQAFACACADIACAHIABAJIAAAig"
      );
    this.shape_23.setTransform(77.6, 101.575);
    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#000000")
      .s()
      .p(
        "AgTAjQgIgFgFgJQgFgKAAgKQAAgTALgLQALgLAPAAQALAAAJAFQAIAGAFAJQAEAJABALQgBAMgEAJQgFAKgJAFQgJAFgKAAQgKAAgJgGgAgSgXQgIAHAAARQAAAOAHAJQAIAIALAAQALAAAJgJQAHgIAAgPQAAgJgEgHQgDgHgGgEQgGgEgIAAQgKAAgIAIg"
      );
    this.shape_24.setTransform(70.3, 100.575);
    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#000000")
      .s()
      .p(
        "AgOAdIAAg4IAJAAIAAAJQADgGACgCQACgCAEAAQAFAAAEADIgCAJQgEgCgEAAQgDAAgCACQgCACgBADQgBAFAAAGIAAAdg"
      );
    this.shape_25.setTransform(56.05, 101.575);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12, p: { x: 27.775 } },
            { t: this.shape_11, p: { x: 32.075 } },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7, p: { x: 61.775 } },
            { t: this.shape_6, p: { x: 68.725 } },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1, p: { x: 98.625 } },
            { t: this.shape, p: { x: 104.425 } },
          ],
        })
        .to(
          {
            state: [
              { t: this.shape_21 },
              { t: this.shape_1, p: { x: 41.225 } },
              { t: this.shape_20 },
              { t: this.shape_19, p: { x: 47.925 } },
              { t: this.shape_6, p: { x: 52.225 } },
              { t: this.shape_18 },
              { t: this.shape_17 },
              { t: this.shape_16 },
              { t: this.shape_12, p: { x: 82.125 } },
              { t: this.shape_15 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_7, p: { x: 35.225 } },
              { t: this.shape_11, p: { x: 42.175 } },
              { t: this.shape_19, p: { x: 46.425 } },
              { t: this.shape_6, p: { x: 50.725 } },
              { t: this.shape_25 },
              { t: this.shape, p: { x: 60.175 } },
              { t: this.shape_24 },
              { t: this.shape_23 },
              { t: this.shape_12, p: { x: 81.825 } },
              { t: this.shape_22 },
            ],
          },
          1
        )
        .wait(1)
    );
    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#404040")
      .s()
      .p(
        "AgYAZQgKgLAAgOQAAgNAKgLQAKgKAOAAQAOAAALAKQAKALAAANQAAAOgKALQgLAKgOAAQgOAAgKgKg"
      );
    this.shape_26.setTransform(42.475, 119.6);
    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#404040")
      .s()
      .p(
        "AgYAZQgKgLAAgOQAAgNAKgLQALgKANAAQAPAAAKAKQAKALAAANQAAAOgKALQgKAKgPAAQgNAAgLgKg"
      );
    this.shape_27.setTransform(60.025, 119.6);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_26, p: { x: 42.475 } }] })
        .to({ state: [{ t: this.shape_27 }] }, 1)
        .to({ state: [{ t: this.shape_26, p: { x: 77.6 } }] }, 1)
        .wait(1)
    );
    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f()
      .s("#CCCCCC")
      .ss(2, 1, 1)
      .p(
        "ADpAAQAAAYgRARQgQAQgZAAQgXAAgRgQQgRgRAAgYQAAgXARgQQARgRAXAAQAZAAAQARQARAQAAAXgAA6AAQAAAYgSARQgRAQgXAAQgXAAgRgQQgQgRAAgYQAAgXAQgQQARgRAXAAQAXAAARARQASAQAAAXgAh2AAQAAAYgQARQgRAQgYAAQgYAAgQgQQgRgRAAgYQAAgXARgQQAQgRAYAAQAYAAARARQAQAQAAAXg"
      );
    this.shape_28.setTransform(59.95, 119.525);
    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#DEDEDE")
      .s()
      .p("AHmAjIAWgjIgWgiIAWgiIArBEIgrBFgAomAAIArhEIAVAiIgVAiIAVAjIgVAig");
    this.shape_29.setTransform(59.575, 70.6);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_29 }, { t: this.shape_28 }] })
        .wait(3)
    );
    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f()
      .s("#000000")
      .ss(3, 1, 1)
      .p(
        "AIOHUIAAwAQAAgEAAgFIAAgIQgCgigTgZQgUgagagCIAAgBIgKAAQgbADgTAaQgUAagBAlAHDnUIADAAQAAAAABAAQABAAAAAAIACAAQAHgBAGgDQAGgEAEgHQAMgPAAgVQAAgVgMgPQgKgOgPAAQAAAAgBAAIhJAAQAAACAAACQAAApAVAcQAUAbAcABgAqdoxQABAmAUAbQAVAcAdAAIQZAAAHBqVIwbAAQgaADgUAaQgUAagBAlQAAACAAACIAAAEIAARpQABAlAUAcQAVAbAdAAISjAAQACABACAAIAAAAQACABADAAQACAAACgBAJeKUQAZgDASgYQATgbACgkQAAgCAAgEQAAgngVgdQgVgbgcgBIgDAAQgBAAgBAAIgBAAQgHABgGAEQgGAEgFAGQgLAPAAAVQAAAWALAOQALAOAOAAIABABIhGAAQAAACAAACQACAiATAZQARAYAZADgAJRKVIAJAAQACAAACgBAIOHUIAABgQAAADAAADAJSHUIhEAA"
      );
    this.shape_30.setTransform(66.975, 66.15);
    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#E3E3E3")
      .s()
      .p(
        "AA/JnQgYgDgSgYQgTgZgCgjIAAgDIBGAAIAAgBQgPAAgKgOQgLgPAAgVQAAgVALgPQAEgGAGgEQAGgEAHgBIACAAIABAAIADAAQAcABAVAbQAVAdAAAnIAAAGQgCAkgTAbQgSAYgZADgAhFoBIgBAAIgBAAIgCAAQgdgBgUgbQgVgcAAgpIAAgEIBKAAIAAAAQAPAAALAOQALAPAAAVQAAAVgLAPQgFAHgGAEQgGADgHABg"
      );
    this.shape_31.setTransform(119.55, 70.675);
    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AoxKVQgdAAgVgcQgUgbgBgmIAAxoIAAgEIAAgEQABglAUgaQAUgbAagCIQbAAQgbACgTAbQgUAagBAlQABglAUgaQATgbAbgCIAKAAIAAABQAaACAUAaQATAZACAiIAAAIIAAAJIAAQAIAABgIAAAFIAAAEQACAiATAZQARAZAZADgAHonTIADAAIABAAIABAAIACAAQAHgBAGgEQAGgEAEgGQAMgPAAgVQAAgVgMgPQgKgOgPAAIgBAAIhJAAIAAAEQAAApAVAcQAUAaAcACIwZAAQgdgBgVgbQgUgbgBgmQABAmAUAbQAVAbAdABIQZAAgAIzI6IAAgFIAAhgIBEAAQgHABgGAEQgGAEgFAGQgLAPAAAVQAAAVALAPQALAOAOAAIABAAgAIzI6IAAAAgAHonTg"
      );
    this.shape_32.setTransform(63.275, 66.1);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
          ],
        })
        .wait(3)
    );
    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("rgba(0,0,0,0.498)")
      .s()
      .p(
        "ApWKVQgdgBgVgcQgUgbgBglIAAxsIAAgFQABglAUgaQAUgaAagCIQlAAQAaACAUAaQASAaADAhIAAAJIAAAJIAAQAIBFAAIABAAIAEAAQAcABAUAbQAWAcAAAoIgBAFQgBAlgUAaQgSAZgYADgAINI1IABAJIAAgSIgBAJg"
      );
    this.shape_33.setTransform(75.275, 73.3);
    this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(3));
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1.5, -1.5, 143.8, 140.9);
  (lib.dragBar = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.frame_0 = function () {
      this.stop();
    };
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));
    this.namesList = new lib.an_TextArea({
      id: "namesList",
      textarea: "",
      disabled: false,
      visible: true,
      class: "ui-textarea",
    });
    this.namesList.name = "namesList";
    this.namesList.setTransform(288, 49.65, 3.7498, 12.4284, 0, 0, 0, 0, -0.7);
    this.timeline.addTween(cjs.Tween.get(this.namesList).wait(3));
    this.premium1 = new lib.os_premiumBlockoo();
    this.premium1.name = "premium1";
    this.premium1.setTransform(475.45, 500.95, 1, 1, 0, 0, 0, 191.2, 22.2);
    this.timeline.addTween(cjs.Tween.get(this.premium1).wait(3));
    this.thumb = new lib.os_dragBarButton();
    this.thumb.name = "thumb";
    this.thumb.setTransform(251.45, 343.6);
    this.timeline.addTween(
      cjs.Tween.get(this.thumb).to({ _off: true }, 1).wait(2)
    );
    this.tab1 = new lib.btn();
    this.tab1.name = "tab1";
    this.tab1.setTransform(480.75, 303.35, 0.8738, 0.3825, 0, 0, 0, 0.1, 0);
    new cjs.ButtonHelper(this.tab1, 0, 1, 2, false, new lib.btn(), 3);
    this.tab0 = new lib.btn();
    this.tab0.name = "tab0";
    this.tab0.setTransform(280.4, 303.35, 0.8929, 0.3825, 0, 0, 0, 0.2, 0);
    new cjs.ButtonHelper(this.tab0, 0, 1, 2, false, new lib.btn(), 3);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.tab0 }, { t: this.tab1 }] })
        .to({ state: [] }, 2)
        .wait(1)
    );
    this.rNames = new cjs.Text("Names", "22px 'Arial'");
    this.rNames.name = "rNames";
    this.rNames.textAlign = "center";
    this.rNames.lineHeight = 27;
    this.rNames.lineWidth = 189;
    this.rNames.parent = this;
    this.rNames.setTransform(576.3, 308.5);
    this.rNumbers = new cjs.Text("Numbers", "22px 'Arial'");
    this.rNumbers.name = "rNumbers";
    this.rNumbers.textAlign = "center";
    this.rNumbers.lineHeight = 27;
    this.rNumbers.lineWidth = 192;
    this.rNumbers.parent = this;
    this.rNumbers.setTransform(378.25, 308.5);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.rNumbers }, { t: this.rNames }] })
        .to({ state: [] }, 2)
        .wait(1)
    );
    this.btn_new = new lib.btn();
    this.btn_new.name = "btn_new";
    this.btn_new.setTransform(513.75, 479.8, 0.695, 0.5103, 0, 0, 0, 0.1, -0.3);
    new cjs.ButtonHelper(this.btn_new, 0, 1, 2, false, new lib.btn(), 3);
    this.btn_winner = new lib.btn();
    this.btn_winner.name = "btn_winner";
    this.btn_winner.setTransform(
      361.05,
      479.8,
      0.695,
      0.5103,
      0,
      0,
      0,
      0.1,
      -0.3
    );
    new cjs.ButtonHelper(this.btn_winner, 0, 1, 2, false, new lib.btn(), 3);
    this.btn_delete = new lib.btn();
    this.btn_delete.name = "btn_delete";
    this.btn_delete.setTransform(
      284.75,
      479.85,
      0.3473,
      0.5103,
      0,
      0,
      0,
      0,
      -0.2
    );
    new cjs.ButtonHelper(this.btn_delete, 0, 1, 2, false, new lib.btn(), 3);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.btn_delete },
            { t: this.btn_winner },
            { t: this.btn_new },
          ],
        })
        .wait(3)
    );
    this.btn_editList = new lib.btn();
    this.btn_editList.name = "btn_editList";
    this.btn_editList.setTransform(
      254.05,
      341.75,
      2.0214,
      0.6619,
      0,
      0,
      0,
      0.1,
      -0.2
    );
    new cjs.ButtonHelper(this.btn_editList, 0, 1, 2, false, new lib.btn(), 3);
    this.btn_done = new lib.btn();
    this.btn_done.name = "btn_done";
    this.btn_done.setTransform(252, 341.75, 2.0214, 0.6619, 0, 0, 0, 0.1, -0.2);
    new cjs.ButtonHelper(this.btn_done, 0, 1, 2, false, new lib.btn(), 3);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.btn_editList }] }, 1)
        .to({ state: [{ t: this.btn_done }] }, 1)
        .wait(1)
    );
    this.btn_clearList = new lib.btn();
    this.btn_clearList.name = "btn_clearList";
    this.btn_clearList.setTransform(
      541.6,
      17.3,
      0.5714,
      0.394,
      0,
      0,
      0,
      0,
      -0.1
    );
    this.btn_clearList._off = true;
    new cjs.ButtonHelper(this.btn_clearList, 0, 1, 2, false, new lib.btn(), 3);
    this.timeline.addTween(
      cjs.Tween.get(this.btn_clearList).wait(2).to({ _off: false }, 0).wait(1)
    );
    this.clearList = new cjs.Text("Clear List", "19px 'Arial'");
    this.clearList.name = "clearList";
    this.clearList.textAlign = "right";
    this.clearList.lineHeight = 23;
    this.clearList.lineWidth = 121;
    this.clearList.parent = this;
    this.clearList.setTransform(665.15, 21.1);
    this.whatsPossible = new cjs.Text(
      "Enter up to 1000 Names:",
      "19px 'Arial'"
    );
    this.whatsPossible.name = "whatsPossible";
    this.whatsPossible.lineHeight = 23;
    this.whatsPossible.lineWidth = 249;
    this.whatsPossible.parent = this;
    this.whatsPossible.setTransform(287.55, 21.85);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.whatsPossible }, { t: this.clearList }] }, 2)
        .wait(1)
    );
    this.tNew = new cjs.Text("Save as...", "20px 'Arial'");
    this.tNew.name = "tNew";
    this.tNew.textAlign = "center";
    this.tNew.lineHeight = 24;
    this.tNew.lineWidth = 145;
    this.tNew.parent = this;
    this.tNew.setTransform(599.3, 486.95);
    this.tSave = new cjs.Text("Update / Save", "20px 'Arial'");
    this.tSave.name = "tSave";
    this.tSave.textAlign = "center";
    this.tSave.lineHeight = 24;
    this.tSave.lineWidth = 144;
    this.tSave.parent = this;
    this.tSave.setTransform(446.95, 486.95);
    this.tDelete = new cjs.Text("Delete", "20px 'Arial'");
    this.tDelete.name = "tDelete";
    this.tDelete.textAlign = "center";
    this.tDelete.lineHeight = 24;
    this.tDelete.lineWidth = 86;
    this.tDelete.parent = this;
    this.tDelete.setTransform(323.9, 486.95);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.tDelete }, { t: this.tSave }, { t: this.tNew }],
        })
        .wait(3)
    );
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#303030")
      .ss(3, 2, 0, 3)
      .p("Ad3WUMg7tAAAMAAAgqqQADh5B3gEMA35AAAQB3AEADB5IAAAAQAAAxAAA9g");
    this.shape.setTransform(475.825, 192.825);
    this.shape._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.shape).wait(2).to({ _off: false }, 0).wait(1)
    );
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#303030")
      .ss(3, 2, 0, 3)
      .p(
        "AHai6IVEAAQBBACAwA1QAvA3AABMQAABOgvA2QgwA2hBABI1EAAI3wAAIsGAAQhCgBgug2Qgxg2AAhOQAAhMAxg3QAug1BCgCIMGAAIAAF1AHai6IAAF1AwWi6IXwAA"
      );
    this.shape_1.setTransform(475.65, 498.325);
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3));
    this.mc_delete = new lib.os_mc_delete();
    this.mc_delete.name = "mc_delete";
    this.mc_delete.setTransform(317, 497.05, 1, 1, 0, 0, 0, 38.2, 18.7);
    this.mc_save = new lib.os_mc_save();
    this.mc_save.name = "mc_save";
    this.mc_save.setTransform(600.25, 498.35, 1, 1, 0, 0, 0, 76.4, 18.7);
    this.mc_update = new lib.os_mc_update();
    this.mc_update.name = "mc_update";
    this.mc_update.setTransform(447.05, 498.1, 1, 1, 0, 0, 0, 76.4, 18.7);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.mc_update },
            { t: this.mc_save },
            { t: this.mc_delete },
          ],
        })
        .wait(3)
    );
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AvSAUIAAgnIelAAIAAAng");
    this.shape_2.setTransform(574.575, 336.1);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#000000").s().p("Av+AUIAAgnIf9AAIAAAng");
    this.shape_3.setTransform(378.375, 335.05);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p("A+pY9MAAAgv8QADh9B/ABMA5PAAAQB/gBADB+IAAAAIAABuMAAAAuNg");
    this.shape_4.setTransform(476.2, 177);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AeqZRMAAAguNIAAhuIAAAAQgDh+h/ABMg5PAAAQh/gBgDB9MAAAAv8IgoAAMAAAgv9QADikCnAAMA5PAAAQCnAAADCmIAAAAIAABuMAAAAuNg"
      );
    this.shape_5.setTransform(476.2, 175);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_2 }] })
        .to({ state: [{ t: this.shape_3 }] }, 1)
        .to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }] }, 1)
        .wait(1)
    );
    this.doneList = new cjs.Text("Done", "25px 'Arial'", "#FFFFFF");
    this.doneList.name = "doneList";
    this.doneList.textAlign = "center";
    this.doneList.lineHeight = 30;
    this.doneList.lineWidth = 440;
    this.doneList.parent = this;
    this.doneList.setTransform(475.85, 351.6);
    this.doneList._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.doneList).wait(2).to({ _off: false }, 0).wait(1)
    );
    this.editList = new cjs.Text("Edit List", "25px 'Arial'", "#FFFFFF");
    this.editList.name = "editList";
    this.editList.textAlign = "center";
    this.editList.lineHeight = 30;
    this.editList.lineWidth = 440;
    this.editList.parent = this;
    this.editList.setTransform(475.85, 353.2);
    this.editList._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.editList)
        .wait(1)
        .to({ _off: false }, 0)
        .to({ _off: true }, 1)
        .wait(1)
    );
    this.instance = new lib.os_editListButton();
    this.instance.setTransform(475.5, 366.9, 1, 1, 0, 0, 0, 223.7, 25);
    this.instance._off = true;
    new cjs.ButtonHelper(this.instance, 0, 1, 1);
    this.timeline.addTween(
      cjs.Tween.get(this.instance).wait(1).to({ _off: false }, 0).wait(2)
    );
    this.namesInList = new cjs.Text("Names in List: 0", "22px 'Arial'");
    this.namesInList.name = "namesInList";
    this.namesInList.textAlign = "center";
    this.namesInList.lineHeight = 27;
    this.namesInList.lineWidth = 254;
    this.namesInList.parent = this;
    this.namesInList.setTransform(474.65, 399.65);
    this.namesInList._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.namesInList).wait(1).to({ _off: false }, 0).wait(2)
    );
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p("AgKBTQAMgoAAgsQAAgqgLgnIAUAAIAAClg");
    this.shape_6.setTransform(700.1, 368.1);
    this.shape_6._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.shape_6).wait(1).to({ _off: false }, 0).wait(2)
    );
    this.premiumOver = new lib.moreRace3();
    this.premiumOver.name = "premiumOver";
    this.premiumOver.setTransform(829.7, 365.85, 1, 1, 0, 0, 0, 131.8, 50.1);
    this.timeline.addTween(cjs.Tween.get(this.premiumOver).wait(3));
    this.dragBarCover = new lib.os_dragBarCover();
    this.dragBarCover.name = "dragBarCover";
    this.dragBarCover.setTransform(475.4, 382.45, 1, 1, 0, 0, 0, 230.4, 45.4);
    this.dragBarCover._off = true;
    new cjs.ButtonHelper(this.dragBarCover, 0, 1, 1);
    this.timeline.addTween(
      cjs.Tween.get(this.dragBarCover).wait(1).to({ _off: false }, 0).wait(2)
    );
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAtCjIAAhIIAAiAQADh8B+AAIGogBIAAABITSAAQCCAAAACCIAAB6IAABIgA+pCjIAAhIIAAiAQADh8B/AAITqAAIAAgBICbAAIAAABIEmAAQB9AAADB7IAACBIAABIg"
      );
    this.shape_7.setTransform(476.2, 325.625);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AeqCTIAAh8QAAiAiCAAIzSAAIAAgBImoABQh+gBgDB8IAACBIgpAAIAAiCQgDh6h9AAIkmAAIAAgBIibAAIAAABIzqAAQh/gBgDB8IAACBIgoAAIAAiCQADijCnAAIarAAQBvABAlBJQAnhJBvgBIZ6AAQCqABAACoIAAB8g"
      );
    this.shape_8.setTransform(476.2, 320.05);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_8 }, { t: this.shape_7 }] })
        .wait(3)
    );
    this.premium0 = new lib.os_premiumBlock();
    this.premium0.name = "premium0";
    this.premium0.setTransform(524.05, 368.6, 1, 1, 0, 0, 0, 175.8, 25);
    this.premium0.visible = false;
    this.timeline.addTween(
      cjs.Tween.get(this.premium0).to({ _off: true }, 1).wait(2)
    );
    this.showMax = new cjs.Text("100", "20px 'Arial'", "#FFFFFF");
    this.showMax.name = "showMax";
    this.showMax.textAlign = "center";
    this.showMax.lineHeight = 24;
    this.showMax.lineWidth = 59;
    this.showMax.parent = this;
    this.showMax.setTransform(672.15, 357.1);
    this.timeline.addTween(
      cjs.Tween.get(this.showMax).to({ _off: true }, 1).wait(2)
    );
    this.ownLogoPromo = new lib.ownLogoPromo();
    this.ownLogoPromo.name = "ownLogoPromo";
    this.ownLogoPromo.setTransform(474.9, 433.6, 1, 1, 0, 0, 0, 134, 18.6);
    this.ownLogoPromo.visible = false;
    this.timeline.addTween(
      cjs.Tween.get(this.ownLogoPromo).to({ _off: true }, 2).wait(1)
    );
    this.tickcross = new lib.os_tickcross();
    this.tickcross.name = "tickcross";
    this.tickcross.setTransform(345.35, 403.1);
    this.timeline.addTween(
      cjs.Tween.get(this.tickcross).to({ _off: true }, 1).wait(2)
    );
    this.showRaceNumbers = new cjs.Text("Show Race Numbers:", "20px 'Arial'");
    this.showRaceNumbers.name = "showRaceNumbers";
    this.showRaceNumbers.textAlign = "center";
    this.showRaceNumbers.lineHeight = 24;
    this.showRaceNumbers.lineWidth = 216;
    this.showRaceNumbers.parent = this;
    this.showRaceNumbers.setTransform(460.95, 401.9);
    this.timeline.addTween(cjs.Tween.get(this.showRaceNumbers).wait(3));
    this.bg = new lib.os_dragBarAll();
    this.bg.name = "bg";
    this.bg.setTransform(477.05, 356.7, 1, 1, 0, 0, 0, 236.2, 50);
    this.timeline.addTween(cjs.Tween.get(this.bg).wait(3));
    this.listCover = new lib.os_saveListCover();
    this.listCover.name = "listCover";
    this.listCover.setTransform(470.6, 264.8, 1, 1, 0, 0, 0, 475.6, 270.8);
    this.listCover._off = true;
    new cjs.ButtonHelper(this.listCover, 0, 1, 1);
    this.timeline.addTween(
      cjs.Tween.get(this.listCover).wait(2).to({ _off: false }, 0).wait(1)
    );
    this.choiceToggle = new lib.choiceToggle();
    this.choiceToggle.name = "choiceToggle";
    this.choiceToggle.setTransform(148.7, 417.5, 1, 1, 0, 0, 0, 87.7, 95.1);
    this.timeline.addTween(
      cjs.Tween.get(this.choiceToggle).to({ _off: true }, 2).wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-5, -6, 951.2, 541.5);
  (lib.duck_race_flascr_set_18 = function (
    mode,
    startPosition,
    loop,
    reversed
  ) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.lightbox = new lib.os_saveList();
    this.lightbox.name = "lightbox";
    this.lightbox.setTransform(475.6, 265.8, 1, 1, 0, 0, 0, 475.6, 270.8);
    this.lightbox.visible = false;
    this.timeline.addTween(cjs.Tween.get(this.lightbox).wait(1));
    this.loader = new lib.characterLoader();
    this.loader.name = "loader";
    this.loader.setTransform(471, 265, 1, 1, 0, 0, 0, 471, 265);
    this.loader.visible = false;
    this.timeline.addTween(cjs.Tween.get(this.loader).wait(1));
    this.back = new lib.backArrow();
    this.back.name = "back";
    this.back.setTransform(45, 22.5, 1, 1, 0, 0, 0, 45, 22.5);
    this.back.visible = false;
    this.timeline.addTween(cjs.Tween.get(this.back).wait(1));
    this.list = new lib.dragBar();
    this.list.name = "list";
    this.timeline.addTween(cjs.Tween.get(this.list).wait(1));
    this.timer = new lib.os_Symbol48();
    this.timer.name = "timer";
    this.timer.setTransform(156.5, 0);
    this.timeline.addTween(cjs.Tween.get(this.timer).wait(1));
    this.bg = new lib.mn8();
    this.bg.name = "bg";
    this.bg.setTransform(471, 268.1, 1, 1, 0, 0, 0, 471, 268.1);
    this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.duck_race_flascr_set_18,
    new cjs.Rectangle(-29.3, -7, 993.8, 632.9),
    null
  );
  (lib.index = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.listwinners = new lib.an_Div({
      id: "listwinners",
      div: "sdfsdfsdf",
      disabled: false,
      visible: true,
      class: "ui-div",
    });
    this.listwinners.name = "listwinners";
    this.listwinners.setTransform(
      705.3,
      52.05,
      2.2266,
      17.1567,
      0,
      0,
      0,
      0.2,
      0.3
    );
    this.timeline.addTween(cjs.Tween.get(this.listwinners).wait(1));
    this.settings = new lib.duck_race_flascr_set_18();
    this.settings.name = "settings";
    this.timeline.addTween(cjs.Tween.get(this.settings).wait(1));
    this.slowWarning = new lib.slowWarning();
    this.slowWarning.name = "slowWarning";
    this.slowWarning.setTransform(827.15, 16.65, 1, 1, 0, 0, 0, 114, 15.7);
    this.slowWarning.visible = false;
    this.timeline.addTween(cjs.Tween.get(this.slowWarning).wait(1));
    this.shuffle = new lib.shuffle_button();
    this.shuffle.name = "shuffle";
    this.shuffle.setTransform(67.85, 57.4, 1, 1, 0, 0, 0, 67.5, 10.3);
    new cjs.ButtonHelper(this.shuffle, 0, 1, 1);
    this.timeline.addTween(cjs.Tween.get(this.shuffle).wait(1));
    this.sfx = new lib.btn();
    this.sfx.name = "sfx";
    this.sfx.setTransform(92.9, 0.05, 0.1854, 0.5957, 0, 0, 0, 0.2, 0);
    new cjs.ButtonHelper(this.sfx, 0, 1, 2, false, new lib.btn(), 3);
    this.music = new lib.btn();
    this.music.name = "music";
    this.music.setTransform(47.55, 0.05, 0.1854, 0.5957, 0, 0, 0, 0.2, 0);
    new cjs.ButtonHelper(this.music, 0, 1, 2, false, new lib.btn(), 3);
    this.back = new lib.btn();
    this.back.name = "back";
    this.back.setTransform(2.55, 0.05, 0.1854, 0.5957, 0, 0, 0, 0.2, 0);
    new cjs.ButtonHelper(this.back, 0, 1, 2, false, new lib.btn(), 3);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.back }, { t: this.music }, { t: this.sfx }] })
        .wait(1)
    );
    this.winOrder = new lib.showWinOrder();
    this.winOrder.name = "winOrder";
    this.winOrder.setTransform(787.2, 343.15, 1, 1, 0, 0, 0, -34.4, -78);
    this.winOrder.visible = false;
    this.timeline.addTween(cjs.Tween.get(this.winOrder).wait(1));
    this.siteLogo = new lib.os_stopwatchLogo();
    this.siteLogo.name = "siteLogo";
    this.siteLogo.setTransform(774, 5.5, 1, 1, 0, 0, 0, 1, 2);
    this.timeline.addTween(cjs.Tween.get(this.siteLogo).wait(1));
    this.cog = new lib.os_cogandeye__vol_bar();
    this.cog.name = "cog";
    this.cog.setTransform(22.85, 22.55, 1, 1, 0, 0, 0, 22.5, 22.5);
    this.timeline.addTween(cjs.Tween.get(this.cog).wait(1));
    this.character = new lib.Character();
    this.character.name = "character";
    this.character.setTransform(-215.7, 96.8, 1, 1, 0, 0, 0, -68.2, -90.2);
    this.timeline.addTween(cjs.Tween.get(this.character).wait(1));
    this.winLine = new lib.startLine();
    this.winLine.name = "winLine";
    this.winLine.setTransform(983, 343.4, 1, 1, 0, 0, 0, 0, 183.7);
    this.trackStart = new lib.startLine();
    this.trackStart.name = "trackStart";
    this.trackStart.setTransform(221, 159.7);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.trackStart }, { t: this.winLine }] })
        .wait(1)
    );
    this.timer = new lib.ingametimer1();
    this.timer.name = "timer";
    this.timer.setTransform(101.2, -0.35, 1, 1, 0, 0, 0, -280.9, 17.1);
    this.timeline.addTween(cjs.Tween.get(this.timer).wait(1));
    this.water = new lib.Symbol4();
    this.water.name = "water";
    this.water.setTransform(0, 143.85);
    this.timeline.addTween(cjs.Tween.get(this.water).wait(1));
    this.hills = new lib.sky();
    this.hills.name = "hills";
    this.hills.setTransform(-4.85, 1.8, 1, 1, 0, 0, 0, 0, 33.9);
    this.timeline.addTween(cjs.Tween.get(this.hills).wait(1));
    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(117.8, 258, 1852.2, 367.9);
  lib.properties = {
    id: "82FF19653FF5584EBED3897B2F75DA5A",
    width: 942,
    height: 530,
    fps: 30,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [
      {
        src: "https://code.jquery.com/jquery-3.4.1.min.js",
        id: "lib/jquery-3.4.1.min.js",
      },
      { src: "component/anwidget.js", id: "sdk/anwidget.js" },
      { src: "component/textinput.js", id: "an.TextInput" },
      { src: "component/textarea.js", id: "an.TextArea" },
      { src: "component/div.js", id: "an.Div" },
      { src: "component/combobox.js", id: "an.ComboBox" },
    ],
    preloads: [],
  };
  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();
  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };
  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };
  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }
  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };
  an.compositions = an.compositions || {};
  an.compositions["82FF19653FF5584EBED3897B2F75DA5A"] = {
    getStage: function () {
      return exportRoot.stage;
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };
  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };
  an.getComposition = function (id) {
    return an.compositions[id];
  };
  an.makeResponsive = function (
    isResp,
    respDim,
    isScale,
    scaleType,
    domContainers
  ) {
    var lastW,
      lastH,
      lastS = 1;
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height;
      var iw = window.innerWidth,
        ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1;
      if (isResp) {
        if (
          (respDim == "width" && lastW == iw) ||
          (respDim == "height" && lastH == ih)
        ) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + "px";
        container.style.height = h * sRatio + "px";
      });
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };
  function _updateVisibility(evt) {
    var parent = this.parent;
    var detach = this.stage == null || this._off || !parent;
    while (parent) {
      if (parent.visible) {
        parent = parent.parent;
      } else {
        detach = true;
        break;
      }
    }
    detach = detach && this._element && this._element._attached;
    if (detach) {
      this._element.detach();
      this.dispatchEvent("detached");
      stage.removeEventListener("drawstart", this._updateVisibilityCbk);
      this._updateVisibilityCbk = false;
    }
  }
  function _handleDrawEnd(evt) {
    if (this._element && this._element._attached) {
      var props = this.getConcatenatedDisplayProps(this._props),
        mat = props.matrix;
      var tx1 = mat.decompose();
      var sx = tx1.scaleX;
      var sy = tx1.scaleY;
      var dp = window.devicePixelRatio || 1;
      var w = this.nominalBounds.width * sx;
      var h = this.nominalBounds.height * sy;
      mat.tx /= dp;
      mat.ty /= dp;
      mat.a /= dp * sx;
      mat.b /= dp * sx;
      mat.c /= dp * sy;
      mat.d /= dp * sy;
      this._element.setProperty(
        "transform-origin",
        this.regX + "px " + this.regY + "px"
      );
      var x = mat.tx + this.regX * mat.a + this.regY * mat.c - this.regX;
      var y = mat.ty + this.regX * mat.b + this.regY * mat.d - this.regY;
      var tx =
        "matrix(" +
        mat.a +
        "," +
        mat.b +
        "," +
        mat.c +
        "," +
        mat.d +
        "," +
        x +
        "," +
        y +
        ")";
      this._element.setProperty("transform", tx);
      this._element.setProperty("width", w);
      this._element.setProperty("height", h);
      this._element.update();
    }
  }
  function _tick(evt) {
    var stage = this.stage;
    stage && stage.on("drawend", this._handleDrawEnd, this, true);
    if (!this._updateVisibilityCbk) {
      this._updateVisibilityCbk = stage.on(
        "drawstart",
        this._updateVisibility,
        this,
        false
      );
    }
  }
  function _componentDraw(ctx) {
    if (this._element && !this._element._attached) {
      this._element.attach($("#dom_overlay_container"));
      this.dispatchEvent("attached");
    }
  }
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0);
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds();
      }
    }
  };
  an.handleFilterCache = function (event) {
    if (!event.paused) {
      var target = event.target;
      if (target) {
        if (target.filterCacheList) {
          for (var index = 0; index < target.filterCacheList.length; index++) {
            var cacheInst = target.filterCacheList[index];
            if (
              cacheInst.startFrame <= target.currentFrame &&
              target.currentFrame <= cacheInst.endFrame
            ) {
              cacheInst.instance.cache(
                cacheInst.x,
                cacheInst.y,
                cacheInst.w,
                cacheInst.h
              );
            }
          }
        }
      }
    }
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
