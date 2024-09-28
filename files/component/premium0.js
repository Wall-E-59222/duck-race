(function(cjs, an) {
  var p;
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];
  (lib.AnMovieClip = function() {
      this.actionFrames = [];
      this.ignorePause = false;
      this.gotoAndPlay = function(positionOrLabel) {
          cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
      }
      this.play = function() {
          cjs.MovieClip.prototype.play.call(this);
      }
      this.gotoAndStop = function(positionOrLabel) {
          cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
      }
      this.stop = function() {
          cjs.MovieClip.prototype.stop.call(this);
      }
  }
  ).prototype = p = new cjs.MovieClip();
  function mc_symbol_clone() {
      var clone = this._cloneProps(new this.constructor(this.mode,this.startPosition,this.loop,this.reversed));
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
  (lib.upper = function(mode, startPosition, loop, reversed) {
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
      this.shape.graphics.f("#000000").s().p("AgEAkIAAgKIAJAAIAAAKgAgBASIgEglIAAgQIAKAAIAAAQIgCAlg");
      this.shape.setTransform(192, 162.375);
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#000000").s().p("AgOAXQgFgEgBgIIAJgCQAAAFADADQAEADAEAAQAHAAACgDQADgCAAgDQAAgDgCgCIgJgDIgMgEQgEgBgCgDQgCgEAAgDQAAgEACgDQABgDADgBIAFgDIAIgBQAFAAAFACQAFACACACQACADAAAFIgIABQAAgDgDgCQgDgDgFAAQgFAAgDACQgCACAAADIABADIADADIAGACIAOADQADABACADQACAEAAAEQAAAEgCAEQgDAEgFACQgEACgHAAQgIAAgGgEg");
      this.shape_1.setTransform(188.05, 163.35);
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#000000").s().p("AgQAUQgHgHAAgMQAAgNAHgHQAHgHAKAAQAKAAAHAHQAGAHAAAMIAAADIgmAAQAAAIAFAEQAFAFAFAAQAFAAADgDQADgCACgFIAJABQgBAHgHAFQgFAEgJAAQgKAAgHgHgAgIgOQgFAEgBAGIAcAAQAAgGgCgDQgFgGgGAAQgGAAgDAFg");
      this.shape_2.setTransform(182.8, 163.35);
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#000000").s().p("AgNAbIAAg0IAIAAIAAAJQADgGACgCQACgBADgBQAEAAAFADIgDAIQgDgCgEABQgCgBgCACQgCACgBADIgBAKIAAAbg");
      this.shape_3.setTransform(178.75, 163.3);
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#000000").s().p("AgLAZQgEgCgCgDQgCgCgBgEIAAgIIAAggIAIAAIAAAcIABAJQABAEADACQACACAFAAQADAAADgCQADgCACgEQABgDAAgHIAAgbIAJAAIAAA0IgIAAIAAgIQgGAIgKABQgEgBgEgBg");
      this.shape_4.setTransform(173.9, 163.4);
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#000000").s().p("AgBAiQgCgCgBgCQgCgDAAgHIAAgdIgFAAIAAgHIAFAAIAAgNIAIgFIAAASIAJAAIAAAHIgJAAIAAAdIABAFIACACIADAAIADAAIACAIIgHAAQgFAAgCgBg");
      this.shape_5.setTransform(169.8, 162.475);
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f("#000000").s().p("AgSAXQgFgEAAgGQAAgEACgEQACgDADgBIAGgDIAIgBQAJgBAFgCIAAgCQAAgFgCgDQgEgDgGAAQgGAAgCADQgDABgCAGIgJgBQACgGADgDQACgDAFgCQAGgCAFAAQAGAAAFACQAEABACACQACADAAAEIABAIIAAALIAAAPIADAGIgJAAIgCgGQgFAEgFABQgDACgFAAQgJAAgEgEgAgBAEIgIABIgEADIgBAEQAAAEADACQADACAFABQAEgBAEgCQAEgCACgEIABgJIAAgDQgFACgIACg");
      this.shape_6.setTransform(165.55, 163.35);
      this.shape_7 = new cjs.Shape();
      this.shape_7.graphics.f("#000000").s().p("AgQAUQgHgHAAgMQAAgNAHgHQAHgHAJAAQALAAAGAHQAHAHAAAMIAAADIgmAAQAAAIAFAEQAEAFAGAAQAFAAADgDQAEgCACgFIAJABQgDAHgFAFQgGAEgJAAQgLAAgGgHgAgJgOQgEAEAAAGIAcAAQgBgGgCgDQgFgGgHAAQgEAAgFAFg");
      this.shape_7.setTransform(160, 163.35);
      this.shape_8 = new cjs.Shape();
      this.shape_8.graphics.f("#000000").s().p("AgXAkIAAhHIAvAAIAAAJIgmAAIAAAWIAhAAIAAAHIghAAIAAAhg");
      this.shape_8.setTransform(154.375, 162.375);
      this.shape_9 = new cjs.Shape();
      this.shape_9.graphics.f("#000000").s().p("AAAAiQgDgCgBgCQgBgDgBgHIAAgdIgGAAIAAgHIAGAAIAAgNIAIgFIAAASIAJAAIAAAHIgJAAIAAAdIABAFIABACIAEAAIADAAIABAIIgGAAQgFAAgBgBg");
      this.shape_9.setTransform(147, 162.475);
      this.shape_10 = new cjs.Shape();
      this.shape_10.graphics.f("#000000").s().p("AgTAXQgEgEAAgGQAAgEACgEQABgDAEgBIAFgDIAIgBQAKgBAFgCIAAgCQAAgFgCgDQgEgDgGAAQgGAAgCADQgEABgBAGIgJgBQACgGADgDQACgDAFgCQAGgCAFAAQAHAAAEACQAEABACACQACADABAEIAAAIIAAALIAAAPIADAGIgKAAIgBgGQgFAEgFABQgDACgFAAQgIAAgGgEgAgBAEIgIABIgEADIAAAEQAAAEACACQADACAFABQAEgBAEgCQAEgCACgEIABgJIAAgDQgEACgJACg");
      this.shape_10.setTransform(142.75, 163.35);
      this.shape_11 = new cjs.Shape();
      this.shape_11.graphics.f("#000000").s().p("AgQAUQgHgHAAgMQAAgNAHgHQAGgHALAAQAKAAAHAHQAGAHAAAMIAAADIgmAAQABAIAEAEQAFAFAFAAQAFAAADgDQADgCADgFIAJABQgDAHgFAFQgGAEgJAAQgLAAgGgHgAgIgOQgFAEgBAGIAdAAQgBgGgDgDQgEgGgGAAQgFAAgEAFg");
      this.shape_11.setTransform(137.2, 163.35);
      this.shape_12 = new cjs.Shape();
      this.shape_12.graphics.f("#000000").s().p("AgNAbIAAg0IAIAAIAAAJQADgGACgCQACgBADgBQAEAAAFADIgDAIQgDgCgEABQgCgBgCACQgCACgBADIgBAKIAAAbg");
      this.shape_12.setTransform(133.15, 163.3);
      this.shape_13 = new cjs.Shape();
      this.shape_13.graphics.f("#000000").s().p("AgOAgQgKgEgEgIQgEgJAAgLQAAgJAEgJQAEgJAJgEQAIgFAKAAQAIAAAFADQAHACADAEQAEAFACAIIgIACQgCgFgDgEQgCgDgEgCQgFgBgFgBQgGAAgFACQgFADgCACQgDADgCAFQgCAGAAAHQgBAKAEAGQADAGAGADQAHADAGABQAGgBAGgCIAJgEIAAgOIgVAAIAAgIIAeAAIAAAaQgHAFgIADQgHADgHAAQgKAAgIgFg");
      this.shape_13.setTransform(127.15, 162.35);
      this.shape_14 = new cjs.Shape();
      this.shape_14.graphics.f("#000000").s().p("AgQAUQgHgHAAgMQAAgNAHgHQAHgHAJAAQALAAAGAHQAHAHAAAMIAAADIgmAAQAAAIAFAEQAEAFAGAAQAFAAADgDQAEgCACgFIAJABQgDAHgFAFQgGAEgJAAQgLAAgGgHgAgJgOQgEAEAAAGIAcAAQgBgGgCgDQgFgGgHAAQgEAAgFAFg");
      this.shape_14.setTransform(117.7, 163.35);
      this.shape_15 = new cjs.Shape();
      this.shape_15.graphics.f("#000000").s().p("AgNAbIAAg0IAIAAIAAAJQADgGACgCQACgBADgBQAFAAAEADIgDAIQgDgCgDABQgDgBgCACQgCACgBADIgBAKIAAAbg");
      this.shape_15.setTransform(113.65, 163.3);
      this.shape_16 = new cjs.Shape();
      this.shape_16.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgNAIgIQAGgFAJAAQALAAAGAHQAHAHAAAMQAAAJgDAGQgDAGgGADQgFADgHAAQgKAAgHgHgAgKgOQgEAFAAAJQAAAKAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgKQAAgJgEgFQgFgFgGAAQgGAAgEAFg");
      this.shape_16.setTransform(108.825, 163.35);
      this.shape_17 = new cjs.Shape();
      this.shape_17.graphics.f("#000000").s().p("AAZAkIAAg7IgUA7IgIAAIgVg8IAAA8IgJAAIAAhHIAOAAIARAyIACAKIAFgLIARgxIAMAAIAABHg");
      this.shape_17.setTransform(101.85, 162.375);
      this.shape_18 = new cjs.Shape();
      this.shape_18.graphics.f("#000000").s().p("AgNAXQgGgEgCgIIAJgCQABAFAEADQACADAGAAQAGAAADgDQACgCAAgDQAAgDgCgCIgJgDIgNgEQgDgBgCgDQgCgEAAgDQAAgEACgDQABgDADgBIAGgDIAHgBQAFAAAFACQAFACABACQADADABAFIgJABQAAgDgEgCQgCgDgFAAQgFAAgDACQgDACAAADIABADIAEADIAHACIANADQAEABACADQABAEABAEQgBAEgCAEQgDAEgEACQgFACgGAAQgKAAgEgEg");
      this.shape_18.setTransform(92.35, 163.35);
      this.shape_19 = new cjs.Shape();
      this.shape_19.graphics.f("#000000").s().p("AgLAhQgFgDgDgHQgDgGAAgIQABgHACgGQACgGAGgDQAFgEAGAAQAEAAADACQAFACABADIAAgZIAJAAIAABGIgIAAIAAgGQgFAHgJAAQgFAAgGgDgAgIgFQgFAFAAAJQAAAKAFAFQAEAFAFAAQAFAAAFgEQADgFAAgKQAAgKgDgFQgFgFgGAAQgEAAgEAFg");
      this.shape_19.setTransform(86.95, 162.425);
      this.shape_20 = new cjs.Shape();
      this.shape_20.graphics.f("#000000").s().p("AgTAXQgEgEAAgGQAAgEACgEQABgDAEgBIAFgDIAIgBQAKgBAFgCIAAgCQAAgFgCgDQgEgDgGAAQgGAAgCADQgEABgBAGIgJgBQACgGADgDQACgDAFgCQAFgCAGAAQAHAAAEACQAEABACACQACADABAEIAAAIIAAALIAAAPIADAGIgKAAIgBgGQgFAEgEABQgEACgFAAQgIAAgGgEgAgBAEIgIABIgEADIgBAEQABAEACACQADACAFABQAEgBAEgCQAEgCACgEIABgJIAAgDQgEACgJACg");
      this.shape_20.setTransform(81.55, 163.35);
      this.shape_21 = new cjs.Shape();
      this.shape_21.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgNAIgIQAGgFAJAAQALAAAGAHQAHAHAAAMQAAAJgDAGQgDAGgGADQgFADgHAAQgKAAgHgHgAgKgOQgEAFAAAJQAAAKAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgKQAAgJgEgFQgFgFgGAAQgGAAgEAFg");
      this.shape_21.setTransform(76.025, 163.35);
      this.shape_22 = new cjs.Shape();
      this.shape_22.graphics.f("#000000").s().p("AgVAkIAAhHIAJAAIAAA+IAiAAIAAAJg");
      this.shape_22.setTransform(70.675, 162.375);
      this.shape_23 = new cjs.Shape();
      this.shape_23.graphics.f("#000000").s().p("AgEAkIAAgKIAJAAIAAAKgAgBASIgEglIAAgQIALAAIAAAQIgDAlg");
      this.shape_23.setTransform(63.5, 162.375);
      this.shape_24 = new cjs.Shape();
      this.shape_24.graphics.f("#000000").s().p("AgNAXQgGgEgBgIIAJgCQAAAFADADQADADAFAAQAHAAACgDQADgCABgDQAAgDgDgCIgJgDIgMgEQgEgBgCgDQgCgEAAgDQAAgEABgDQACgDADgBIAFgDIAIgBQAFAAAFACQAEACADACQACADAAAFIgIABQgBgDgDgCQgCgDgFAAQgGAAgCACQgDACABADIABADIADADIAGACIAOADQADABACADQACAEABAEQAAAEgDAEQgCAEgGACQgEACgHAAQgJAAgEgEg");
      this.shape_24.setTransform(59.55, 163.35);
      this.shape_25 = new cjs.Shape();
      this.shape_25.graphics.f("#000000").s().p("AgLAZQgEgCgCgDQgCgCAAgEIgBgIIAAggIAIAAIAAAcIABAJQABAEADACQACACAFAAQADAAADgCQADgCABgEQACgDAAgHIAAgbIAJAAIAAA0IgIAAIAAgIQgGAIgKABQgEgBgEgBg");
      this.shape_25.setTransform(54.3, 163.4);
      this.shape_26 = new cjs.Shape();
      this.shape_26.graphics.f("#000000").s().p("AgDAkIAAhHIAHAAIAABHg");
      this.shape_26.setTransform(50.425, 162.375);
      this.shape_27 = new cjs.Shape();
      this.shape_27.graphics.f("#000000").s().p("AgaAkIAAhHIAaAAIAKABQAGABADACQAEADACAEQACAFABAFQAAAJgHAFQgFAHgPAAIgSAAIAAAdgAgRgBIASAAQAJAAADgDQAFgEAAgGQAAgEgCgEQgDgDgDgBIgJAAIgSAAg");
      this.shape_27.setTransform(46.2, 162.375);
      this.shape_28 = new cjs.Shape();
      this.shape_28.graphics.f("#000000").s().p("AgIBBIAAgSIARAAIAAASgAgEAgIgFhDIAAgcIATAAIAAAcIgFBDg");
      this.shape_28.setTransform(173.825, 146);
      this.shape_29 = new cjs.Shape();
      this.shape_29.graphics.f("#000000").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
      this.shape_29.setTransform(166.25, 147.775);
      this.shape_30 = new cjs.Shape();
      this.shape_30.graphics.f("#000000").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJgBgDgCg");
      this.shape_30.setTransform(158.875, 146.2);
      this.shape_31 = new cjs.Shape();
      this.shape_31.graphics.f("#000000").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
      this.shape_31.setTransform(154.3, 146);
      this.shape_32 = new cjs.Shape();
      this.shape_32.graphics.f("#000000").s().p("AgYA+QgMgFgHgKQgHgLAAgNIAQgCQABAKAEAHQAEAGAJAEQAJADAKAAQAKAAAHgDQAIgCADgGQAEgFAAgGQAAgFgEgFQgDgFgIgDIgWgGQgSgEgHgDQgJgFgFgHQgEgHAAgJQAAgKAFgIQAGgJAKgEQALgFANAAQANAAALAFQALAFAGAIQAGAJABAMIgRABQgBgMgIgGQgHgHgPAAQgPABgHAFQgHAGAAAIQAAAHAFAEQAFAEAUAFQAVAFAHADQAMAFAFAIQAFAIAAAKQAAAKgFAKQgGAIgLAGQgLAEgOAAQgRAAgLgEg");
      this.shape_32.setTransform(146.225, 146);
      this.shape_33 = new cjs.Shape();
      this.shape_33.graphics.f("#000000").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
      this.shape_33.setTransform(130.25, 147.775);
      this.shape_34 = new cjs.Shape();
      this.shape_34.graphics.f("#000000").s().p("AAWBBIAAg8QAAgLgFgFQgFgGgKABQgFAAgHADQgGAEgDAGQgCAFAAALIAAA0IgQAAIAAiAIAQAAIAAAuQALgNAQAAQAKAAAIAEQAHAEAEAHQADAIAAAMIAAA8g");
      this.shape_34.setTransform(120.3, 146);
      this.shape_35 = new cjs.Shape();
      this.shape_35.graphics.f("#000000").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJgBgDgCg");
      this.shape_35.setTransform(112.875, 146.2);
      this.shape_36 = new cjs.Shape();
      this.shape_36.graphics.f("#000000").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJgBgDgCg");
      this.shape_36.setTransform(102.875, 146.2);
      this.shape_37 = new cjs.Shape();
      this.shape_37.graphics.f("#000000").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
      this.shape_37.setTransform(98, 147.675);
      this.shape_38 = new cjs.Shape();
      this.shape_38.graphics.f("#000000").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
      this.shape_38.setTransform(89.275, 147.775);
      this.shape_39 = new cjs.Shape();
      this.shape_39.graphics.f("#000000").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALAAANQAAAPgGAKQgFAMgJAGQgLAGgKAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
      this.shape_39.setTransform(79.55, 149.475);
      this.shape_40 = new cjs.Shape();
      this.shape_40.graphics.f("#000000").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALAAANQAAAPgGAKQgFAMgJAGQgKAGgLAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
      this.shape_40.setTransform(69.55, 149.475);
      this.shape_41 = new cjs.Shape();
      this.shape_41.graphics.f("#000000").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
      this.shape_41.setTransform(59.225, 147.875);
      this.shape_42 = new cjs.Shape();
      this.shape_42.graphics.f("#000000").s().p("AgYA+QgMgFgHgKQgHgLAAgNIAQgCQABAKAEAHQAEAGAJAEQAJADAKAAQAKAAAHgDQAIgCADgGQAEgFAAgGQAAgFgEgFQgDgFgIgDIgWgGQgSgEgHgDQgJgFgFgHQgEgHAAgJQAAgKAFgIQAGgJAKgEQALgFANAAQANAAALAFQALAFAGAIQAGAJABAMIgRABQgBgMgIgGQgHgHgPAAQgPABgHAFQgHAGAAAIQAAAHAFAEQAFAEAUAFQAVAFAHADQAMAFAFAIQAFAIAAAKQAAAKgFAKQgGAIgLAGQgLAEgOAAQgRAAgLgEg");
      this.shape_42.setTransform(48.225, 146);
      this.shape_43 = new cjs.Shape();
      this.shape_43.graphics.f("#000000").s().p("AgEAkIAAgKIAJAAIAAAKgAgCASIgDglIAAgQIAKAAIAAAQIgCAlg");
      this.shape_43.setTransform(131.6, 124.575);
      this.shape_44 = new cjs.Shape();
      this.shape_44.graphics.f("#000000").s().p("AgOAXQgFgEgCgIIAJgCQABAFAEADQACADAGAAQAGAAADgDQACgCAAgDQABgDgDgCIgJgDIgNgEQgDgBgCgDQgCgEAAgDQAAgEACgDQABgDADgBIAGgDIAHgBQAFAAAFACQAFACACACQACADAAAFIgIABQAAgDgDgCQgDgDgFAAQgFAAgDACQgCACAAADIABADIADADIAHACIANADQADABACADQACAEAAAEQABAEgDAEQgDAEgFACQgEACgGAAQgJAAgGgEg");
      this.shape_44.setTransform(127.65, 125.55);
      this.shape_45 = new cjs.Shape();
      this.shape_45.graphics.f("#000000").s().p("AgNAbIAAg0IAIAAIAAAIQADgFACgCQACgBADgBQAFAAAEADIgDAIQgDgCgDAAQgDAAgCACQgCACgBADIgBAKIAAAbg");
      this.shape_45.setTransform(123.9, 125.5);
      this.shape_46 = new cjs.Shape();
      this.shape_46.graphics.f("#000000").s().p("AgQAUQgHgHAAgMQAAgNAHgHQAHgHAJAAQALAAAGAHQAHAHAAAMIAAADIgmAAQAAAIAFAEQAEAFAGAAQAFAAADgDQAEgCACgFIAJABQgDAHgGAFQgFAEgJAAQgLAAgGgHgAgJgOQgEAEAAAGIAcAAQgBgGgCgDQgFgGgHAAQgEAAgFAFg");
      this.shape_46.setTransform(119.05, 125.55);
      this.shape_47 = new cjs.Shape();
      this.shape_47.graphics.f("#000000").s().p("AAaAbIAAggIAAgIQgBgCgDgCQgCgBgDAAQgFAAgEAEQgEADAAAJIAAAdIgHAAIAAghQAAgGgCgDQgDgDgFAAQgDAAgDACQgEACgBAEQgBADAAAHIAAAbIgJAAIAAg0IAIAAIAAAIQACgEAEgCQAEgCAFgBQAGABAEACQADADABADQAGgJAKAAQAIABAEAEQAEAEAAAJIAAAjg");
      this.shape_47.setTransform(112.125, 125.5);
      this.shape_48 = new cjs.Shape();
      this.shape_48.graphics.f("#000000").s().p("AgEAkIAAgzIAIAAIAAAzgAgEgZIAAgKIAIAAIAAAKg");
      this.shape_48.setTransform(106.85, 124.575);
      this.shape_49 = new cjs.Shape();
      this.shape_49.graphics.f("#000000").s().p("AgEAkIAAg+IgXAAIAAgJIA3AAIAAAJIgXAAIAAA+g");
      this.shape_49.setTransform(102.725, 124.575);
      this.shape_50 = new cjs.Shape();
      this.shape_50.graphics.f("#000000").s().p("AgQAUQgHgHAAgMQAAgNAHgHQAHgHAKAAQAKAAAGAHQAHAHAAAMIAAADIgmAAQABAIAEAEQAFAFAFAAQAFAAADgDQADgCACgFIAJABQgBAHgHAFQgFAEgJAAQgKAAgHgHgAgJgOQgEAEAAAGIAbAAQAAgGgCgDQgFgGgGAAQgFAAgFAFg");
      this.shape_50.setTransform(94.05, 125.55);
      this.shape_51 = new cjs.Shape();
      this.shape_51.graphics.f("#000000").s().p("AgPAUQgHgGAAgNQAAgIADgGQADgGAGgEQAGgDAFAAQAJAAAFAEQAFAFABAHIgIABQgBgFgDgCQgDgDgFAAQgGAAgDAFQgFAFAAAJQAAAKAFAFQAEAFAFAAQAFAAAEgDQADgEABgGIAIABQgBAJgFAFQgHAFgIAAQgJAAgHgHg");
      this.shape_51.setTransform(88.95, 125.55);
      this.shape_52 = new cjs.Shape();
      this.shape_52.graphics.f("#000000").s().p("AgTAXQgEgEAAgGQAAgEACgEQABgDADgBIAGgDIAJgBQAJgBAFgCIAAgCQAAgFgCgDQgDgDgHAAQgGAAgDADQgDABgBAGIgIgBQABgGACgDQADgDAFgCQAFgCAGAAQAGAAAFACQAEABACACQACADABAEIAAAIIAAALIABAPIACAGIgJAAIgCgGQgFAEgEABQgEACgFAAQgJAAgFgEgAgBAEIgIABIgDADIgBAEQAAAEACACQADACAFABQAEgBAEgCQAEgCACgEIABgJIAAgDQgFACgIACg");
      this.shape_52.setTransform(83.5, 125.55);
      this.shape_53 = new cjs.Shape();
      this.shape_53.graphics.f("#000000").s().p("AAUAkIgKgPIgHgKIgEgFIgEgCIgFAAIgLAAIAAAgIgKAAIAAhHIAfAAQAKAAAEACQAGACACAFQADAFAAAGQAAAHgEAGQgFAEgLABIAGAEQAFAEADAFIAMAUgAgVgDIAUAAQAFAAAFgCQADgBACgDQACgDAAgDQAAgFgEgEQgEgDgHAAIgWAAg");
      this.shape_53.setTransform(77.5, 124.575);
      this.shape_54 = new cjs.Shape();
      this.shape_54.graphics.f("#000000").s().p("AgDAYIAAgUIgUAAIAAgHIAUAAIAAgUIAHAAIAAAUIAUAAIAAAHIgUAAIAAAUg");
      this.shape_54.setTransform(67.875, 124.625);
      this.shape_55 = new cjs.Shape();
      this.shape_55.graphics.f("#000000").s().p("AgQAdQgGgIgBgVQABgLADgIQACgIAFgEQAFgEAHAAQAGgBAEADQAFADADAEQACAEABAGQADAHAAAJQAAANgEAHQgCAIgFAFQgFADgIABQgJAAgHgIgAgJgXQgFAGAAARQAAASAFAGQAEAFAFAAQAGAAAEgFQAFgGAAgSQAAgQgFgHQgEgFgGAAQgFAAgEAFg");
      this.shape_55.setTransform(62.15, 124.6);
      this.shape_56 = new cjs.Shape();
      this.shape_56.graphics.f("#000000").s().p("AgQAfQgGgGgBgJIAKgBQABAHADADQAEAEAFAAQAGAAAEgFQAFgFAAgIQAAgHgFgEQgEgEgGAAQgEAAgDACQgEACgCACIgIgBIAHgkIAiAAIAAAJIgbAAIgEATQAHgFAGAAQAJAAAGAHQAHAFAAAKQAAAKgGAHQgHAJgLAAQgJAAgHgFg");
      this.shape_56.setTransform(56.625, 124.675);
      this.shape_57 = new cjs.Shape();
      this.shape_57.graphics.f("#000000").s().p("AANAbIAAgfIgBgIIgEgFQgDgBgDAAQgFAAgEADQgEAEAAAKIAAAcIgJAAIAAg0IAIAAIAAAIQAFgIAKgBQAFABAEABQAEACACADQACADABADIAAAIIAAAgg");
      this.shape_57.setTransform(48.25, 125.5);
      this.shape_58 = new cjs.Shape();
      this.shape_58.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
      this.shape_58.setTransform(44.125, 124.575);
      this.shape_59 = new cjs.Shape();
      this.shape_59.graphics.f("#000000").s().p("AgIBBIAAgSIARAAIAAASgAgEAgIgFhDIAAgcIATAAIAAAcIgFBDg");
      this.shape_59.setTransform(167.175, 109.55);
      this.shape_60 = new cjs.Shape();
      this.shape_60.graphics.f("#000000").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
      this.shape_60.setTransform(160.075, 111.325);
      this.shape_61 = new cjs.Shape();
      this.shape_61.graphics.f("#000000").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
      this.shape_61.setTransform(153.35, 111.225);
      this.shape_62 = new cjs.Shape();
      this.shape_62.graphics.f("#000000").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
      this.shape_62.setTransform(144.6, 111.325);
      this.shape_63 = new cjs.Shape();
      this.shape_63.graphics.f("#000000").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMAAQgJAAgDgCg");
      this.shape_63.setTransform(137.225, 109.75);
      this.shape_64 = new cjs.Shape();
      this.shape_64.graphics.f("#000000").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
      this.shape_64.setTransform(130.425, 111.325);
      this.shape_65 = new cjs.Shape();
      this.shape_65.graphics.f("#000000").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
      this.shape_65.setTransform(120.6, 111.325);
      this.shape_66 = new cjs.Shape();
      this.shape_66.graphics.f("#000000").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
      this.shape_66.setTransform(113.35, 111.225);
      this.shape_67 = new cjs.Shape();
      this.shape_67.graphics.f("#000000").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAOgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAEgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
      this.shape_67.setTransform(104.6, 111.325);
      this.shape_68 = new cjs.Shape();
      this.shape_68.graphics.f("#000000").s().p("AAWBBIAAg8QAAgLgFgFQgFgGgKABQgFAAgHADQgGAEgDAGQgCAFAAALIAAA0IgQAAIAAiAIAQAAIAAAuQALgNAQAAQAKAAAIAEQAHAEADAIQAEAHAAAMIAAA8g");
      this.shape_68.setTransform(94.65, 109.55);
      this.shape_69 = new cjs.Shape();
      this.shape_69.graphics.f("#000000").s().p("AgeA6QgMgIgHgRQgHgQAAgRQAAgUAHgPQAJgPANgIQAOgHARgBQATABAOAJQAMAKAGASIgRAEQgFgOgIgGQgJgHgMAAQgOAAgLAHQgKAIgDAMQgFAMAAAMQAAAPAGANQAEAMAKAGQALAGAKAAQAPAAAJgIQAKgJAEgPIARADQgFAWgOALQgPALgTgBQgVABgNgJg");
      this.shape_69.setTransform(83.25, 109.55);
      this.shape_70 = new cjs.Shape();
      this.shape_70.graphics.f("#000000").s().p("AgdA1QgMgQAAglQAAgWAEgOQAGgOAJgHQAJgIANAAQAKAAAIAFQAIAEAFAIQAFAHADAMQADALAAASQAAAXgEAOQgGAOgJAHQgJAIgOAAQgRAAgMgNgAgQgqQgJALAAAfQAAAgAHAKQAIALAKAAQALAAAIgLQAGgKAAggQAAgfgGgKQgIgLgLAAQgKAAgGAKg");
      this.shape_70.setTransform(66.6, 109.625);
      this.shape_71 = new cjs.Shape();
      this.shape_71.graphics.f("#000000").s().p("AgdA1QgMgQAAglQAAgWAEgOQAGgOAJgHQAJgIANAAQAKAAAIAFQAIAEAFAIQAFAHADAMQADALAAASQAAAXgEAOQgGAOgIAHQgKAIgOAAQgRAAgMgNgAgRgqQgIALAAAfQAAAgAHAKQAIALAKAAQALAAAHgLQAIgKgBggQABgfgIgKQgHgLgLAAQgKAAgHAKg");
      this.shape_71.setTransform(56.6, 109.625);
      this.shape_72 = new cjs.Shape();
      this.shape_72.graphics.f("#000000").s().p("AAIBBIAAhkQgGAFgIAGIgRAIIAAgPQAOgHAJgIQAJgJAFgJIAKAAIAACBg");
      this.shape_72.setTransform(45.975, 109.525);
      this.shape_73 = new cjs.Shape();
      this.shape_73.graphics.f("#FFFFFF").s().p("AgKBPIAAgWIAVAAIAAAWgAgFAoIgGhTIAAgjIAXAAIAAAjIgGBTg");
      this.shape_73.setTransform(179.2, 197.275);
      this.shape_74 = new cjs.Shape();
      this.shape_74.graphics.f("#FFFFFF").s().p("AglAsQgPgQAAgbQAAgcAPgQQAPgPAXAAQAXAAAOAPQAOAPAAAcIAAAFIhTAAQABATAJAJQAKAKANAAQAKABAIgGQAIgFAEgMIAUABQgFASgNAKQgMAJgUAAQgYAAgPgPgAgUgiQgKAJAAAPIA/AAQgCgOgGgIQgJgLgPAAQgMAAgJAJg");
      this.shape_74.setTransform(169.9, 199.45);
      this.shape_75 = new cjs.Shape();
      this.shape_75.graphics.f("#FFFFFF").s().p("AgeA6IAAhxIARAAIAAARQAHgMAGgEQAEgDAHAAQAJAAALAGIgHASQgHgEgHAAQgHAAgDADQgGAEgCAHQgDAKAAANIAAA6g");
      this.shape_75.setTransform(161.05, 199.325);
      this.shape_76 = new cjs.Shape();
      this.shape_76.graphics.f("#FFFFFF").s().p("AgmAsQgOgPAAgdQAAgeARgQQAPgMAUAAQAYAAAPAPQAOAPAAAbQAAAWgGAMQgHANgMAGQgNAIgPgBQgXAAgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANgBQAOAAAKgLQAKgKAAgWQAAgVgKgLQgKgLgOABQgNAAgKAKg");
      this.shape_76.setTransform(150.325, 199.45);
      this.shape_77 = new cjs.Shape();
      this.shape_77.graphics.f("#FFFFFF").s().p("AA3BPIAAiDIguCDIgSAAIgtiFIAACFIgUAAIAAidIAfAAIAlBvIAHAXIAIgZIAmhtIAcAAIAACdg");
      this.shape_77.setTransform(135.05, 197.275);
      this.shape_78 = new cjs.Shape();
      this.shape_78.graphics.f("#FFFFFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
      this.shape_78.setTransform(116.875, 197.525);
      this.shape_79 = new cjs.Shape();
      this.shape_79.graphics.f("#FFFFFF").s().p("AgZA2QgJgDgEgGQgEgGgCgJQgBgFAAgNIAAhFIATAAIAAA+QAAAPABAFQACAIAGAEQAGAFAJAAQAHAAAIgFQAIgEADgIQADgIAAgOIAAg8IATAAIAABxIgRAAIAAgRQgNATgWAAQgKAAgJgEg");
      this.shape_79.setTransform(107.475, 199.575);
      this.shape_80 = new cjs.Shape();
      this.shape_80.graphics.f("#FFFFFF").s().p("AgnBHQgRgLgJgSQgJgTAAgVQAAgmAVgWQAVgXAgAAQAWAAASALQARALAJATQAJASAAAWQAAAZgJASQgKATgSAKQgRAJgVAAQgVAAgSgKgAglgvQgQAPAAAiQAAAdAQAQQAPARAWAAQAYAAAPgRQAPgQAAgfQAAgSgGgOQgHgOgMgJQgNgIgQAAQgVAAgQAQg");
      this.shape_80.setTransform(92.925, 197.25);
      this.shape_81 = new cjs.Shape();
      this.shape_81.graphics.f("#FFFFFF").s().p("AgZBJQgLgIgGgNQgHgOABgSQgBgQAGgNQAGgOALgIQALgHAPAAQAJAAAIAEQAIAFAFAGIAAg4IAUAAIAACcIgSAAIAAgOQgLARgVAAQgNAAgMgHgAgUgMQgIALAAAVQgBAXAKALQAJAKALAAQANAAAJgKQAJgKAAgWQAAgWgJgLQgJgLgOAAQgMAAgIAKg");
      this.shape_81.setTransform(71.7, 197.4);
      this.shape_82 = new cjs.Shape();
      this.shape_82.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgMgCgGQgCgGgGgDQgGgEgIAAQgLAAgJAIQgJAIAAAWIAAA9IgTAAIAAhxIARAAIAAAQQANgSAWAAQALAAAIADQAJAEAEAGQAFAGABAIIABATIAABFg");
      this.shape_82.setTransform(59.825, 199.325);
      this.shape_83 = new cjs.Shape();
      this.shape_83.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg3IAAgXIATAAIAAAXg");
      this.shape_83.setTransform(51.275, 197.275);
      this.shape_84 = new cjs.Shape();
      this.shape_84.graphics.f("#FFFFFF").s().p("Ag0BPIAAidIBpAAIAAATIhUAAIAAAxIBJAAIAAARIhJAAIAABIg");
      this.shape_84.setTransform(42.525, 197.275);
      this.shape_85 = new cjs.Shape();
      this.shape_85.graphics.f("#000000").s().p("AgKBPIAAgWIAVAAIAAAWgAgFAoIgGhTIAAgjIAXAAIAAAjIgFBTg");
      this.shape_85.setTransform(193, 33.825);
      this.shape_86 = new cjs.Shape();
      this.shape_86.graphics.f("#000000").s().p("AA6A6IAAhHQAAgLgCgFQgCgFgFgEQgFgDgGAAQgMAAgIAIQgIAIAAASIAABBIgSAAIAAhJQAAgNgFgGQgFgHgLAAQgIAAgHAFQgHAEgDAIQgDAIAAAQIAAA6IgTAAIAAhxIARAAIAAAQQAFgIAJgFQAJgFAMAAQAMAAAIAFQAIAFADAKQANgUAWAAQARAAAJAJQAJAJAAAUIAABNg");
      this.shape_86.setTransform(180.725, 35.875);
      this.shape_87 = new cjs.Shape();
      this.shape_87.graphics.f("#000000").s().p("AgZA2QgJgDgEgGQgEgGgCgJQgBgFAAgNIAAhFIATAAIAAA+QAAAPABAFQACAIAGAEQAGAFAJAAQAHAAAIgFQAIgEADgIQADgIAAgOIAAg8IATAAIAABxIgRAAIAAgRQgNATgWAAQgKAAgJgEg");
      this.shape_87.setTransform(165.325, 36.125);
      this.shape_88 = new cjs.Shape();
      this.shape_88.graphics.f("#000000").s().p("AgJBPIAAhxIATAAIAABxgAgJg3IAAgXIATAAIAAAXg");
      this.shape_88.setTransform(156.825, 33.825);
      this.shape_89 = new cjs.Shape();
      this.shape_89.graphics.f("#000000").s().p("AA6A6IAAhHQAAgLgCgFQgCgFgFgEQgFgDgGAAQgMAAgIAIQgIAIAAASIAABBIgSAAIAAhJQAAgNgFgGQgFgHgLAAQgIAAgHAFQgHAEgDAIQgDAIAAAQIAAA6IgTAAIAAhxIARAAIAAAQQAFgIAJgFQAJgFAMAAQAMAAAIAFQAIAFADAKQANgUAWAAQARAAAJAJQAJAJAAAUIAABNg");
      this.shape_89.setTransform(145.225, 35.875);
      this.shape_90 = new cjs.Shape();
      this.shape_90.graphics.f("#000000").s().p("AglAsQgPgPAAgcQAAgcAPgQQAPgPAXAAQAXAAAOAPQAOAPAAAcIAAAFIhTAAQABASAJAKQAKAKANAAQAKABAIgGQAIgFAEgMIAUACQgFARgNAKQgMAJgUAAQgYAAgPgPgAgUgiQgKAJAAAPIA/AAQgCgPgGgGQgJgMgPAAQgMAAgJAJg");
      this.shape_90.setTransform(129.85, 36);
      this.shape_91 = new cjs.Shape();
      this.shape_91.graphics.f("#000000").s().p("AgeA6IAAhxIARAAIAAARQAHgMAGgEQAEgDAHAAQAJAAALAGIgHASQgHgEgHAAQgHAAgDADQgGAEgBAHQgEAKAAANIAAA6g");
      this.shape_91.setTransform(121, 35.875);
      this.shape_92 = new cjs.Shape();
      this.shape_92.graphics.f("#000000").s().p("Ag7BPIAAidIA7AAQAPAAAJACQALACAIAFQAIAGAEAJQAFAKAAAMQAAAUgNANQgNAOghAAIgnAAIAABAgAgmgDIAnAAQAUAAAJgHQAJgIgBgOQABgJgFgHQgFgHgJgDQgEgBgPAAIgnAAg");
      this.shape_92.setTransform(109.5, 33.825);
      this.shape_93 = new cjs.Shape();
      this.shape_93.graphics.f("#000000").s().p("AAbA6IAAhEQAAgMgCgGQgCgGgGgDQgGgEgIAAQgLAAgJAIQgJAIAAAWIAAA9IgTAAIAAhxIARAAIAAAQQANgSAWAAQALAAAIADQAJAEAEAGQAFAGABAIIABATIAABFg");
      this.shape_93.setTransform(89.525, 35.875);
      this.shape_94 = new cjs.Shape();
      this.shape_94.graphics.f("#000000").s().p("AgJBPIAAhxIATAAIAABxgAgJg3IAAgXIATAAIAAAXg");
      this.shape_94.setTransform(80.975, 33.825);
      this.shape_95 = new cjs.Shape();
      this.shape_95.graphics.f("#000000").s().p("AgmAsQgOgPAAgdQAAgeARgQQAPgMAUAAQAYAAAPAPQAOAPAAAbQAAAWgGAMQgHANgMAGQgNAIgPgBQgXAAgPgPgAgXggQgKALAAAVQAAAWAKALQAKAKANAAQAOAAAKgLQAKgKAAgWQAAgVgKgKQgKgLgOAAQgNAAgKAKg");
      this.shape_95.setTransform(72.375, 36);
      this.shape_96 = new cjs.Shape();
      this.shape_96.graphics.f("#000000").s().p("AggBEQgLgMABgXIASgDQABATAGAGQAGAHALAAQAHAAAFgEQAGgEACgGQACgGAAgNIAAhsIAVAAIAABrQAAATgFALQgEALgLAFQgKAGgNAAQgVAAgLgMg");
      this.shape_96.setTransform(60.2739, 33.95);
      this.shape_97 = new cjs.Shape();
      this.shape_97.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
      this.shape_97.setTransform(203.55, 88.45);
      this.shape_98 = new cjs.Shape();
      this.shape_98.graphics.f("#000000").s().p("AgQAUQgHgHAAgMQAAgMAHgIQAHgHAKAAQAKAAAGAHQAHAHAAAMIAAACIgmAAQABAJAEAFQAFAEAFAAQAFAAADgCQADgDACgGIAJABQgBAJgHAEQgFAEgJAAQgKAAgHgHgAgJgPQgEAFAAAGIAbAAQAAgGgCgEQgFgFgGAAQgFAAgFAEg");
      this.shape_98.setTransform(199.35, 86.35);
      this.shape_99 = new cjs.Shape();
      this.shape_99.graphics.f("#000000").s().p("AgPAhQgFgEAAgJIAJABQAAAFACABQAEADAFAAQAFAAAEgDQADgCACgFIAAgLQgGAHgIAAQgKAAgGgIQgGgIAAgJQAAgIADgGQADgGAFgEQAFgDAGAAQAJAAAGAIIAAgHIAIAAIAAAsQAAAMgDAFQgCAFgFADQgGADgHAAQgJAAgGgEgAgJgYQgDAFAAAJQAAAKADAEQAEAEAFAAQAHAAADgEQAFgEAAgJQAAgKgFgFQgDgFgHAAQgFAAgEAFg");
      this.shape_99.setTransform(193.65, 87.35);
      this.shape_100 = new cjs.Shape();
      this.shape_100.graphics.f("#000000").s().p("AgSAXQgFgEAAgHQAAgDACgDQABgEADgBIAHgCIAIgCQAJgBAFgCIAAgCQAAgFgCgDQgDgDgHAAQgFAAgEACQgDADgBAFIgIgBQABgGACgDQADgDAFgCQAFgCAGAAQAGAAAFABQAEACACADQACACAAADIABAIIAAALIABAQIACAGIgJAAIgCgHQgFAFgEACQgEABgFAAQgJAAgEgEgAgBADIgIACIgDADIgBAEQAAADACADQADADAFgBQAEABAEgDQAEgCACgEIABgJIAAgDQgEACgJABg");
      this.shape_100.setTransform(188.25, 86.35);
      this.shape_101 = new cjs.Shape();
      this.shape_101.graphics.f("#000000").s().p("AgVAlIAAhHIAIAAIAAAGQADgDADgCQAEgCADgBQAHAAAGAEQAFAEACAGQADAGAAAHQAAAIgDAFQgDAHgGADQgFADgGAAQgEAAgDgBQgDgCgCgDIAAAagAgJgXQgFAFABAKQAAAJAEAEQAEAFAFABQAGgBADgFQAFgEAAgKQAAgKgFgEQgEgGgFAAQgFAAgEAGg");
      this.shape_101.setTransform(182.85, 87.3);
      this.shape_102 = new cjs.Shape();
      this.shape_102.graphics.f("#000000").s().p("AgQAUQgHgHAAgMQAAgMAHgIQAHgHAKAAQAKAAAHAHQAGAHAAAMIAAACIgmAAQABAJAEAFQAFAEAFAAQAFAAADgCQAEgDABgGIAJABQgCAJgFAEQgGAEgJAAQgKAAgHgHgAgIgPQgFAFgBAGIAcAAQAAgGgDgEQgEgFgGAAQgGAAgDAEg");
      this.shape_102.setTransform(177.15, 86.35);
      this.shape_103 = new cjs.Shape();
      this.shape_103.graphics.f("#000000").s().p("AAaAaIAAgfIAAgHQgBgDgDgCQgCgBgDAAQgFAAgEAEQgEADAAAIIAAAdIgHAAIAAggQAAgGgCgDQgDgDgFAAQgDAAgDACQgEACgBAEQgBAEAAAGIAAAaIgJAAIAAgyIAIAAIAAAHQACgEAEgCQAEgDAFAAQAGAAAEADQADACABAEQAGgIAKgBQAIAAAEAFQAEAEAAAJIAAAig");
      this.shape_103.setTransform(170.225, 86.3);
      this.shape_104 = new cjs.Shape();
      this.shape_104.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgOAIgGQAGgGAJAAQALAAAGAHQAHAHAAAMQAAAKgDAFQgDAGgGADQgFADgHAAQgKAAgHgHgAgKgOQgEAFAAAJQAAAKAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgKQAAgJgEgFQgFgFgGAAQgGAAgEAFg");
      this.shape_104.setTransform(163.275, 86.35);
      this.shape_105 = new cjs.Shape();
      this.shape_105.graphics.f("#000000").s().p("AATAkIAAgiIgkAAIAAAiIgKAAIAAhHIAKAAIAAAeIAkAAIAAgeIAJAAIAABHg");
      this.shape_105.setTransform(156.9, 85.375);
      this.shape_106 = new cjs.Shape();
      this.shape_106.graphics.f("#000000").s().p("AAaAaIAAgfIAAgHQgBgDgDgCQgCgBgDAAQgFAAgEAEQgEADAAAIIAAAdIgHAAIAAggQAAgGgCgDQgDgDgFAAQgDAAgDACQgEACgBAEQgBAEAAAGIAAAaIgJAAIAAgyIAIAAIAAAHQACgEAEgCQAEgDAFAAQAGAAAEADQADACABAEQAGgIAKgBQAIAAAEAFQAEAEAAAJIAAAig");
      this.shape_106.setTransform(146.325, 86.3);
      this.shape_107 = new cjs.Shape();
      this.shape_107.graphics.f("#000000").s().p("AgLAZQgEgCgCgCQgCgDAAgEIgBgIIAAgfIAIAAIAAAcIABAJQABADADACQACACAFAAQADAAADgCQADgCABgDQACgEAAgGIAAgbIAJAAIAAAyIgIAAIAAgHQgGAJgKgBQgEAAgEgBg");
      this.shape_107.setTransform(139.35, 86.4);
      this.shape_108 = new cjs.Shape();
      this.shape_108.graphics.f("#000000").s().p("AgDAkIAAgzIAIAAIAAAzgAgDgZIAAgKIAIAAIAAAKg");
      this.shape_108.setTransform(135.5, 85.375);
      this.shape_109 = new cjs.Shape();
      this.shape_109.graphics.f("#000000").s().p("AAaAaIAAgfIAAgHQgBgDgDgCQgCgBgDAAQgFAAgEAEQgEADAAAIIAAAdIgHAAIAAggQAAgGgCgDQgDgDgFAAQgDAAgDACQgEACgBAEQgBAEAAAGIAAAaIgJAAIAAgyIAIAAIAAAHQACgEAEgCQAEgDAFAAQAGAAAEADQADACABAEQAGgIAKgBQAIAAAEAFQAEAEAAAJIAAAig");
      this.shape_109.setTransform(130.225, 86.3);
      this.shape_110 = new cjs.Shape();
      this.shape_110.graphics.f("#000000").s().p("AgQAUQgHgHAAgMQAAgMAHgIQAGgHAKAAQALAAAHAHQAGAHAAAMIAAACIgmAAQABAJAEAFQAFAEAFAAQAFAAADgCQADgDADgGIAJABQgDAJgFAEQgGAEgJAAQgLAAgGgHgAgIgPQgFAFgBAGIAdAAQgBgGgDgEQgEgFgHAAQgEAAgEAEg");
      this.shape_110.setTransform(123.25, 86.35);
      this.shape_111 = new cjs.Shape();
      this.shape_111.graphics.f("#000000").s().p("AgNAaIAAgyIAIAAIAAAHQADgFACgCQACgCADAAQAFABAEADIgDAIQgDgCgEgBQgCABgCACQgCABgBADIgBAKIAAAag");
      this.shape_111.setTransform(119.2, 86.3);
      this.shape_112 = new cjs.Shape();
      this.shape_112.graphics.f("#000000").s().p("AgbAkIAAhHIAbAAIAKABQAGABADACQAEADACAEQADAFgBAFQAAAJgFAFQgHAHgPAAIgRAAIAAAdgAgRgBIARAAQAKAAAEgDQADgEAAgGQAAgEgBgEQgDgDgEgBIgJAAIgRAAg");
      this.shape_112.setTransform(114, 85.375);
      this.shape_113 = new cjs.Shape();
      this.shape_113.graphics.f("#000000").s().p("AgEAkIAAgKIAJAAIAAAKgAgCASIgCglIAAgQIAJAAIAAAQIgCAlg");
      this.shape_113.setTransform(106.3, 85.375);
      this.shape_114 = new cjs.Shape();
      this.shape_114.graphics.f("#000000").s().p("AgOAXQgFgEgCgJIAJgBQABAGAEACQACADAGAAQAGAAADgCQACgDAAgEQABgDgDgBIgJgDIgNgEQgDgBgCgDQgCgEAAgDQAAgDACgDQABgEADgCIAGgCIAHgBQAFAAAFABQAEACADAEQACACABAGIgJABQgBgFgCgCQgDgCgFAAQgGAAgCACQgDACAAADIACADIADACIAHACIANAFQAEAAACADQABADAAAFQABAEgDAEQgDAEgEACQgFACgGAAQgKAAgFgEg");
      this.shape_114.setTransform(102.35, 86.35);
      this.shape_115 = new cjs.Shape();
      this.shape_115.graphics.f("#000000").s().p("AgNAaIAAgyIAIAAIAAAHQADgFACgCQACgCADAAQAEABAFADIgDAIQgDgCgDgBQgDABgCACQgCABgBADIgBAKIAAAag");
      this.shape_115.setTransform(98.6, 86.3);
      this.shape_116 = new cjs.Shape();
      this.shape_116.graphics.f("#000000").s().p("AgQAUQgHgHAAgMQAAgMAHgIQAGgHAKAAQALAAAGAHQAHAHAAAMIAAACIgmAAQAAAJAFAFQAEAEAGAAQAFAAADgCQAEgDACgGIAJABQgDAJgFAEQgGAEgJAAQgLAAgGgHgAgJgPQgEAFAAAGIAcAAQgBgGgDgEQgEgFgHAAQgFAAgEAEg");
      this.shape_116.setTransform(93.75, 86.35);
      this.shape_117 = new cjs.Shape();
      this.shape_117.graphics.f("#000000").s().p("AAaAaIAAgfIAAgHQgBgDgDgCQgCgBgDAAQgFAAgEAEQgEADAAAIIAAAdIgHAAIAAggQAAgGgCgDQgDgDgFAAQgDAAgDACQgEACgBAEQgBAEAAAGIAAAaIgJAAIAAgyIAIAAIAAAHQACgEAEgCQAEgDAFAAQAGAAAEADQADACABAEQAGgIAKgBQAIAAAEAFQAEAEAAAJIAAAig");
      this.shape_117.setTransform(86.825, 86.3);
      this.shape_118 = new cjs.Shape();
      this.shape_118.graphics.f("#000000").s().p("AgEAkIAAgzIAIAAIAAAzgAgEgZIAAgKIAIAAIAAAKg");
      this.shape_118.setTransform(81.55, 85.375);
      this.shape_119 = new cjs.Shape();
      this.shape_119.graphics.f("#000000").s().p("AgEAkIAAg+IgXAAIAAgJIA3AAIAAAJIgXAAIAAA+g");
      this.shape_119.setTransform(77.425, 85.375);
      this.shape_120 = new cjs.Shape();
      this.shape_120.graphics.f("#000000").s().p("AgNAaIAAgyIAIAAIAAAHQADgFACgCQACgCADAAQAEABAFADIgDAIQgDgCgDgBQgDABgCACQgCABgBADIgBAKIAAAag");
      this.shape_120.setTransform(70.25, 86.3);
      this.shape_121 = new cjs.Shape();
      this.shape_121.graphics.f("#000000").s().p("AgQAUQgHgHAAgMQAAgMAHgIQAGgHAKAAQALAAAGAHQAHAHAAAMIAAACIgmAAQAAAJAFAFQAEAEAGAAQAFAAADgCQAEgDACgGIAJABQgDAJgFAEQgGAEgJAAQgLAAgGgHgAgJgPQgEAFAAAGIAcAAQgBgGgDgEQgEgFgHAAQgFAAgEAEg");
      this.shape_121.setTransform(65.4, 86.35);
      this.shape_122 = new cjs.Shape();
      this.shape_122.graphics.f("#000000").s().p("AgPAhQgFgEAAgJIAIABQABAFADABQADADAFAAQAFAAAEgDQADgCABgFIABgLQgGAHgIAAQgKAAgGgIQgGgIAAgJQAAgIADgGQACgGAFgEQAGgDAGAAQAJAAAGAIIAAgHIAIAAIAAAsQAAAMgDAFQgCAFgGADQgFADgHAAQgJAAgGgEgAgIgYQgFAFAAAJQAAAKAFAEQADAEAGAAQAFAAAEgEQAEgEAAgJQAAgKgEgFQgEgFgFAAQgGAAgDAFg");
      this.shape_122.setTransform(59.7, 87.35);
      this.shape_123 = new cjs.Shape();
      this.shape_123.graphics.f("#000000").s().p("AgPAhQgFgEAAgJIAJABQAAAFACABQAEADAFAAQAFAAAEgDQADgCACgFIAAgLQgGAHgIAAQgKAAgGgIQgGgIAAgJQAAgIADgGQADgGAFgEQAFgDAGAAQAJAAAGAIIAAgHIAIAAIAAAsQAAAMgDAFQgCAFgFADQgGADgHAAQgJAAgGgEgAgJgYQgDAFAAAJQAAAKADAEQAEAEAFAAQAHAAADgEQAFgEAAgJQAAgKgFgFQgDgFgHAAQgFAAgEAFg");
      this.shape_123.setTransform(54.15, 87.35);
      this.shape_124 = new cjs.Shape();
      this.shape_124.graphics.f("#000000").s().p("AgDAkIAAgzIAIAAIAAAzgAgDgZIAAgKIAIAAIAAAKg");
      this.shape_124.setTransform(50.45, 85.375);
      this.shape_125 = new cjs.Shape();
      this.shape_125.graphics.f("#000000").s().p("AgaAkIAAhHIAaAAQAIAAAFACQAFADADAEQADAFAAAEQgBAFgCAEQgDAEgEADQAGABAEAEQADAFAAAGQAAAFgCAEQgDAFgDACIgHAEIgMABgAgRAbIARAAIAGAAIAGgCIAEgEQABgDAAgDQAAgEgCgDQgCgDgEgBIgJgBIgRAAgAgRgFIAQAAIAIgBQAEgBACgCQABgDAAgDQAAgEgBgDQgCgCgEgBIgJgBIgPAAg");
      this.shape_125.setTransform(46.15, 85.375);
      this.shape_126 = new cjs.Shape();
      this.shape_126.graphics.f("#000000").s().p("AgIBAIAAgSIARAAIAAASgAgEAhIgFhEIAAgdIATAAIAAAdIgFBEg");
      this.shape_126.setTransform(103.825, 71.8);
      this.shape_127 = new cjs.Shape();
      this.shape_127.graphics.f("#000000").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
      this.shape_127.setTransform(96.725, 73.575);
      this.shape_128 = new cjs.Shape();
      this.shape_128.graphics.f("#000000").s().p("AgUA7QgJgFgFgMQgFgLgBgOQAAgOAGgLQAEgLAJgGQAKgGALAAQAIAAAGADQAHAEAEAGIAAgvIAPAAIAACAIgOAAIAAgMQgJAPgRAAQgLgBgJgGgAgQgJQgHAIAAASQAAASAIAIQAHAKAKgBQAKAAAHgIQAHgJAAgRQAAgSgHgJQgIgJgKAAQgKAAgHAJg");
      this.shape_128.setTransform(86.95, 71.9);
      this.shape_129 = new cjs.Shape();
      this.shape_129.graphics.f("#000000").s().p("AApBAIgPgnIg1AAIgOAnIgSAAIAxiAIARAAIA1CAgAgIgZIgOAlIArAAIgOgjIgIgbQgDAMgEANg");
      this.shape_129.setTransform(76.3, 71.8);
      this.shape_130 = new cjs.Shape();
      this.shape_130.graphics.f("#000000").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
      this.shape_130.setTransform(60.275, 73.575);
      this.shape_131 = new cjs.Shape();
      this.shape_131.graphics.f("#000000").s().p("AAhBAIhChkIAABkIgRAAIAAiAIASAAIBDBlIAAhlIAQAAIAACAg");
      this.shape_131.setTransform(48.725, 71.8);
      this.shape_132 = new cjs.Shape();
      this.shape_132.graphics.f("#FFFFFF").s().p("AAWASQgEgFAAgNQAAgHACgFQABgFADgDQAEgCAFAAQADAAADABIAFAEIADAHQABAEAAAGQAAAIgCAFQgCAFgDACQgDADgFAAQgGAAgFgFgAAbgPQgDAFAAAKQAAALADAEQACAEAEAAQAEAAACgEQADgEAAgLQAAgKgDgEQgCgEgEAAQgEAAgCADgAgMASQgEgFAAgNQAAgHACgFQABgFAEgDQADgCAEAAQADAAADABQADACACACIACAHIABAKQABAIgCAFQgCAFgDACQgDADgFAAQgGAAgEgFgAgHgPQgDAFgBAKQABALADAEQABAEAEAAQADAAADgEQACgEAAgLQAAgKgCgEQgDgEgDAAQgEAAgBADgAgkAWIAAgiIgGAEIgFACIAAgFIAIgFQADgDACgDIADAAIAAAsg");
      this.shape_132.setTransform(29.9, 123.025);
      this.timeline.addTween(cjs.Tween.get({}).to({
          state: [{
              t: this.shape_132
          }, {
              t: this.shape_131
          }, {
              t: this.shape_130
          }, {
              t: this.shape_129
          }, {
              t: this.shape_128
          }, {
              t: this.shape_127
          }, {
              t: this.shape_126
          }, {
              t: this.shape_125
          }, {
              t: this.shape_124
          }, {
              t: this.shape_123
          }, {
              t: this.shape_122
          }, {
              t: this.shape_121
          }, {
              t: this.shape_120
          }, {
              t: this.shape_119
          }, {
              t: this.shape_118
          }, {
              t: this.shape_117
          }, {
              t: this.shape_116
          }, {
              t: this.shape_115
          }, {
              t: this.shape_114
          }, {
              t: this.shape_113
          }, {
              t: this.shape_112
          }, {
              t: this.shape_111
          }, {
              t: this.shape_110
          }, {
              t: this.shape_109
          }, {
              t: this.shape_108
          }, {
              t: this.shape_107
          }, {
              t: this.shape_106
          }, {
              t: this.shape_105
          }, {
              t: this.shape_104
          }, {
              t: this.shape_103
          }, {
              t: this.shape_102
          }, {
              t: this.shape_101
          }, {
              t: this.shape_100
          }, {
              t: this.shape_99
          }, {
              t: this.shape_98
          }, {
              t: this.shape_97
          }, {
              t: this.shape_96
          }, {
              t: this.shape_95
          }, {
              t: this.shape_94
          }, {
              t: this.shape_93
          }, {
              t: this.shape_92
          }, {
              t: this.shape_91
          }, {
              t: this.shape_90
          }, {
              t: this.shape_89
          }, {
              t: this.shape_88
          }, {
              t: this.shape_87
          }, {
              t: this.shape_86
          }, {
              t: this.shape_85
          }, {
              t: this.shape_84
          }, {
              t: this.shape_83
          }, {
              t: this.shape_82
          }, {
              t: this.shape_81
          }, {
              t: this.shape_80
          }, {
              t: this.shape_79
          }, {
              t: this.shape_78
          }, {
              t: this.shape_77
          }, {
              t: this.shape_76
          }, {
              t: this.shape_75
          }, {
              t: this.shape_74
          }, {
              t: this.shape_73
          }, {
              t: this.shape_72
          }, {
              t: this.shape_71
          }, {
              t: this.shape_70
          }, {
              t: this.shape_69
          }, {
              t: this.shape_68
          }, {
              t: this.shape_67
          }, {
              t: this.shape_66
          }, {
              t: this.shape_65
          }, {
              t: this.shape_64
          }, {
              t: this.shape_63
          }, {
              t: this.shape_62
          }, {
              t: this.shape_61
          }, {
              t: this.shape_60
          }, {
              t: this.shape_59
          }, {
              t: this.shape_58
          }, {
              t: this.shape_57
          }, {
              t: this.shape_56
          }, {
              t: this.shape_55
          }, {
              t: this.shape_54
          }, {
              t: this.shape_53
          }, {
              t: this.shape_52
          }, {
              t: this.shape_51
          }, {
              t: this.shape_50
          }, {
              t: this.shape_49
          }, {
              t: this.shape_48
          }, {
              t: this.shape_47
          }, {
              t: this.shape_46
          }, {
              t: this.shape_45
          }, {
              t: this.shape_44
          }, {
              t: this.shape_43
          }, {
              t: this.shape_42
          }, {
              t: this.shape_41
          }, {
              t: this.shape_40
          }, {
              t: this.shape_39
          }, {
              t: this.shape_38
          }, {
              t: this.shape_37
          }, {
              t: this.shape_36
          }, {
              t: this.shape_35
          }, {
              t: this.shape_34
          }, {
              t: this.shape_33
          }, {
              t: this.shape_32
          }, {
              t: this.shape_31
          }, {
              t: this.shape_30
          }, {
              t: this.shape_29
          }, {
              t: this.shape_28
          }, {
              t: this.shape_27
          }, {
              t: this.shape_26
          }, {
              t: this.shape_25
          }, {
              t: this.shape_24
          }, {
              t: this.shape_23
          }, {
              t: this.shape_22
          }, {
              t: this.shape_21
          }, {
              t: this.shape_20
          }, {
              t: this.shape_19
          }, {
              t: this.shape_18
          }, {
              t: this.shape_17
          }, {
              t: this.shape_16
          }, {
              t: this.shape_15
          }, {
              t: this.shape_14
          }, {
              t: this.shape_13
          }, {
              t: this.shape_12
          }, {
              t: this.shape_11
          }, {
              t: this.shape_10
          }, {
              t: this.shape_9
          }, {
              t: this.shape_8
          }, {
              t: this.shape_7
          }, {
              t: this.shape_6
          }, {
              t: this.shape_5
          }, {
              t: this.shape_4
          }, {
              t: this.shape_3
          }, {
              t: this.shape_2
          }, {
              t: this.shape_1
          }, {
              t: this.shape
          }]
      }).wait(1));
      this.shape_133 = new cjs.Shape();
      this.shape_133.graphics.rf(["#009900", "#00CC00"], [0, 1], 0, 0, 0, 0, 0, 15.7).s().p("AhtBtQgmgmgFgzIgCgUQAAhAAtgtQAugtA/AAQBAAAAtAtQAuAtAABAIgBAUQgHAzgmAmQgtAuhAAAQg/AAgugugABLBrIgahWIBIg1IhbgDIgdhUIgdBUIhaADIBIA1IgaBWIBJgzg");
      this.shape_133.setTransform(33.25, 32.775);
      this.shape_134 = new cjs.Shape();
      this.shape_134.graphics.f("#000000").s().p("AiCCCQgugugHhAIgBgUQAAhMA2g3QA2g1BMAAQBNAAA2A1QA2A3AABMIgBAUQgGBAgvAuQg2A3hNAAQhMAAg2g3gAh4h4QgyAxAABHQAAAKABAKQAGA6ArAqQAyAyBGAAQBHAAAygyQAqgqAGg6IABgUQAAhHgxgxQgygyhHAAQhGAAgyAyg");
      this.shape_134.setTransform(33.225, 32.7);
      this.shape_135 = new cjs.Shape();
      this.shape_135.graphics.f("#FFFFFF").s().p("Ah4B5QgqgrgGg5QgCgKAAgLQAAhHAygwQAygzBGAAQBHAAAyAzQAyAwAABHIgBAVQgHA5gqArQgyAxhHAAQhGAAgygxgAhshsQgtAuAAA/IABAUQAGA0AmAmQAtAtBAAAQBAAAAtgtQAmgmAHg0IABgUQAAg/guguQgtgthAAAQhAAAgtAtgAACA5IhJAzIAZhVIhHg2IBagDIAdhUIAdBUIBbADIhIA2IAaBVg");
      this.shape_135.setTransform(33.175, 32.65);
      this.shape_136 = new cjs.Shape();
      this.shape_136.graphics.f("#00B100").s().p("AgqArQgOgPgDgTIgBgJIABgIQADgTAOgPQASgSAYAAQAZAAASASQAOAPADATIAAAAIABAIIgBAIIAAABQgDATgOAPQgSASgZAAQgYAAgSgSg");
      this.shape_136.setTransform(30.1, 122.9);
      this.shape_137 = new cjs.Shape();
      this.shape_137.graphics.f("#065E88").s().p("ABrBxIAAgBIAAgHIAAgJIAAAAIABAAQAEAAACADQADACAAADIAAABQAAADgDACQgCADgEAAgAhoBxQgDAAgDgDQgCgCAAgDIAAgBQAAgDACgCQADgDADAAIBcAAIgBAJIABAIgAgVBMIgDgBQgHgEADgJIASgsIgjgZQgFgFgBgFQAAgFADgEIAagoIgSgEIgbARQgCACgDAAQgEABgCgDQgDgDAAgDQAAgEADgCIABgCIAcgRQAEgDAFgBIADAAIAeAHIAUAOIALAcIAaAAIAEACQADACABACQAAAFgBACQgCAEgEABIgdAAQgKgBgEgJIgGgNIgSAfIAYASQAKAIgFALIgXAwQgCADgDABIgDABIgDgBgAhrAZQgIgCgBgJQABgJAKgCIAmAAIALgNQAEAIAMAGIgNAQQgCAFgKAAgAAChRQgEgGAAgHQAAgIAEgFQAFgFAIAAQAHAAAGAFQAFAFAAAIQAAAHgFAGQgGAFgHAAQgIAAgFgFg");
      this.shape_137.setTransform(25.425, 112.45);
      this.shape_138 = new cjs.Shape();
      this.shape_138.graphics.f("#E32118").s().p("AhDGhQgYgUgLgZQgNghAKgcQAPgiAqgBQAdADATAdQATgdAfgDQApABAPAiQAKAcgMAhQgMAZgYAUIhEA7gAhGkyQgegcABgpQgBgqAegdQAcgcAmgBIAEAAIABAAIABAAQAnAAAdAdQAcAdAAAqQAAApgcAcQgeAdgoABQgpgBgdgdgAgmk+QARAMAVAAQAcAAAUgVQAVgUAAgcQAAgXgMgRgAgEm9QgaABgTATQgVAUAAAeQAAAUALARIBfhhQgPgKgTAAIgBAAIgBgBIgEABg");
      this.shape_138.setTransform(25.25, 115.55);
      this.timeline.addTween(cjs.Tween.get({}).to({
          state: [{
              t: this.shape_138
          }, {
              t: this.shape_137
          }, {
              t: this.shape_136
          }, {
              t: this.shape_135
          }, {
              t: this.shape_134
          }, {
              t: this.shape_133
          }]
      }).wait(1));
      this._renderFirstFrame();
  }
  ).prototype = getMCSymbolPrototype(lib.upper, new cjs.Rectangle(12.1,14.2,198.1,197.60000000000002), null);
  (lib.shinePremium = function(mode, startPosition, loop, reversed) {
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
      this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AseGbIM2s2IMHAAIs2M2g");
      this.shape.setTransform(79.875, 41.15);
      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
      this._renderFirstFrame();
  }
  ).prototype = getMCSymbolPrototype(lib.shinePremium, new cjs.Rectangle(0,0,159.8,82.3), null);
  (lib.lower = function(mode, startPosition, loop, reversed) {
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
      this.shape.graphics.f().s("#E7E7E7").ss(3, 1, 0, 3).p("AvBIzIeDAAAvBC3IeDAAAvBjMIeDAAAvBoyIeDAA");
      this.shape.setTransform(108.675, 115.675);
      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.lf(["#66CC00", "#59B300"], [0, 1], 0, -21.3, 0, 21.3).s().p("AukDVQglAAABgkIAAlhQgBgkAlAAIdKAAQAkAAgBAkIAAFhQABAkgkAAg");
      this.shape_1.setTransform(108.7, 197.025);
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.lf(["#F8DA00", "#D2B900"], [0, 1], 0, -21.3, 0, 21.3).s().p("AukDVQgkAAAAghIAAlkQgBgkAlAAIdKAAQAkAAgBAkIAAFkQAAAhgjAAg");
      this.shape_2.setTransform(108.7, 32.675);
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("rgba(0,0,0,0.498)").s().p("AukAbQglgBABgiIAAgRQAAAgAkAAIdKAAQAjAAAAggIAAARQABAigkABg");
      this.shape_3.setTransform(108.7, 53.3);
      this.timeline.addTween(cjs.Tween.get({}).to({
          state: [{
              t: this.shape_3
          }, {
              t: this.shape_2
          }, {
              t: this.shape_1
          }]
      }).wait(1));
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f().s("#000000").ss(4, 1, 1).p("AvDxPIeHAAQA8AAAOAvQAEANAAASMAAAAgDQAABOhOAAI+HAAQgRAAgOgEQgvgOAAg8MAAAggDQAAhOBOAAg");
      this.shape_4.setTransform(108.85, 115.45);
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("rgba(0,0,0,0.349)").s().p("AvFRNQg8ABgNgvQANAEARAAIeIAAQBNAAAAhNMAAAggDQAAgSgEgOQAvAOAAA8MAAAAgDQAABOhOgBg");
      this.shape_5.setTransform(113.3, 119.9);
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f("#FFFFFF").s().p("AvDRQQgRAAgOgFQgvgNAAg8MAAAggDQABhNBNAAIeHAAQA8AAANAuQAFANAAASMAAAAgDQgBBOhNAAg");
      this.shape_6.setTransform(108.85, 115.45);
      this.timeline.addTween(cjs.Tween.get({}).to({
          state: [{
              t: this.shape_6
          }, {
              t: this.shape_5
          }, {
              t: this.shape_4
          }]
      }).wait(1));
      this.shape_7 = new cjs.Shape();
      this.shape_7.graphics.f("rgba(255,255,255,0.498)").s().p("AwBSNQhOgBAAhNMAAAgh9QAAhOBOAAMAgDAAAQBOAAAABOMAAAAh9QAABNhOABg");
      this.shape_7.setTransform(110.375, 116.45);
      this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));
      this._renderFirstFrame();
  }
  ).prototype = getMCSymbolPrototype(lib.lower, new cjs.Rectangle(0,0,220.8,232.9), null);
  (lib.shinyPremium = function(mode, startPosition, loop, reversed) {
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
      var mask = new cjs.Shape();
      mask._off = true;
      mask.graphics.p("A8MGdQhFAAgBhEIAAquQAAhGBGgBMA4ZAAAQBGABAABGIAAKuQgBBEhFAAg");
      mask.setTransform(187.5, 41.25);
      this.instance = new lib.shinePremium();
      this.instance.setTransform(-80.35, 41.1, 1, 1, 0, 0, 0, 79.9, 41.1);
      var maskedShapeInstanceList = [this.instance];
      for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
          maskedShapeInstanceList[shapedInstanceItr].mask = mask;
      }
      this.timeline.addTween(cjs.Tween.get(this.instance).to({
          x: 458.9
      }, 23).wait(13).to({
          x: -80.35
      }, 25).wait(19));
      this._renderFirstFrame();
  }
  ).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0,0,375,82.3);
  (lib.Premium0 = function(mode, startPosition, loop, reversed) {
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
      this.part0 = new lib.upper();
      this.part0.name = "part0";
      this.part0.setTransform(111.1, 113, 1, 1, 0, 0, 0, 111.1, 113);
      this.timeline.addTween(cjs.Tween.get(this.part0).wait(1));
      this.instance = new lib.shinyPremium();
      this.instance.setTransform(52.7, 32.6, 0.517, 0.517, 0, 0, 0, 79.9, 41.2);
      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
      this.part1 = new lib.lower();
      this.part1.name = "part1";
      this.part1.setTransform(110.4, 116.5, 1, 1, 0, 0, 0, 110.4, 116.5);
      this.shape = new cjs.Shape();
      this.shape.graphics.f().s("#E7E7E7").ss(3, 1, 0, 3).p("AvBoyIeDAAAvBjMIeDAAAvBC3IeDAAAvBIzIeDAA");
      this.shape.setTransform(108.675, 115.675);
      this.timeline.addTween(cjs.Tween.get({}).to({
          state: [{
              t: this.shape
          }, {
              t: this.part1
          }]
      }).wait(1));
      this._renderFirstFrame();
  }
  ).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-71.4,0,292.20000000000005,232.9);
  (lib.premium0 = function(mode, startPosition, loop, reversed) {
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
      this.premiumBanner = new lib.Premium0();
      this.premiumBanner.name = "premiumBanner";
      new cjs.ButtonHelper(this.premiumBanner,0,1,1);
      this.timeline.addTween(cjs.Tween.get(this.premiumBanner).wait(1));
      this._renderFirstFrame();
  }
  ).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(39.1,116.5,181.70000000000002,116.4);
  lib.properties = {
      id: '0FE374AEF6761E4CBF0E4792A1297DA6',
      width: 221,
      height: 233,
      fps: 24,
      color: "#FFFFFF",
      opacity: 1.00,
      manifest: [],
      preloads: []
  };
  (lib.Stage = function(canvas) {
      createjs.Stage.call(this, canvas);
  }
  ).prototype = p = new createjs.Stage();
  p.setAutoPlay = function(autoPlay) {
      this.tickEnabled = autoPlay;
  }
  p.play = function() {
      this.tickEnabled = true;
      this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
  }
  p.stop = function(ms) {
      if (ms)
          this.seek(ms);
      this.tickEnabled = false;
  }
  p.seek = function(ms) {
      this.tickEnabled = true;
      this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
  }
  p.getDuration = function() {
      return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
  }
  p.getTimelinePosition = function() {
      return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
  }
  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
      an.bootstrapListeners = [];
  }
  an.bootstrapCallback = function(fnCallback) {
      an.bootstrapListeners.push(fnCallback);
      if (an.bootcompsLoaded.length > 0) {
          for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
              fnCallback(an.bootcompsLoaded[i]);
          }
      }
  }
  ;
  an.compositions = an.compositions || {};
  an.compositions['0FE374AEF6761E4CBF0E4792A1297DA6'] = {
      getStage: function() {
          return exportRoot.stage;
      },
      getLibrary: function() {
          return lib;
      },
      getSpriteSheet: function() {
          return ss;
      },
      getImages: function() {
          return img;
      }
  };
  an.compositionLoaded = function(id) {
      an.bootcompsLoaded.push(id);
      for (var j = 0; j < an.bootstrapListeners.length; j++) {
          an.bootstrapListeners[j](id);
      }
  }
  an.getComposition = function(id) {
      return an.compositions[id];
  }
  an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {
      var lastW, lastH, lastS = 1;
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      function resizeCanvas() {
          var w = lib.properties.width
            , h = lib.properties.height;
          var iw = window.innerWidth
            , ih = window.innerHeight;
          var pRatio = window.devicePixelRatio || 1
            , xRatio = iw / w
            , yRatio = ih / h
            , sRatio = 1;
          if (isResp) {
              if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                  sRatio = lastS;
              } else if (!isScale) {
                  if (iw < w || ih < h)
                      sRatio = Math.min(xRatio, yRatio);
              } else if (scaleType == 1) {
                  sRatio = Math.min(xRatio, yRatio);
              } else if (scaleType == 2) {
                  sRatio = Math.max(xRatio, yRatio);
              }
          }
          domContainers[0].width = w * pRatio * sRatio;
          domContainers[0].height = h * pRatio * sRatio;
          domContainers.forEach(function(container) {
              container.style.width = w * sRatio + 'px';
              container.style.height = h * sRatio + 'px';
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
  }
  an.handleSoundStreamOnTick = function(event) {
      if (!event.paused) {
          var stageChild = stage.getChildAt(0);
          if (!stageChild.paused || stageChild.ignorePause) {
              stageChild.syncStreamSounds();
          }
      }
  }
  an.handleFilterCache = function(event) {
      if (!event.paused) {
          var target = event.target;
          if (target) {
              if (target.filterCacheList) {
                  for (var index = 0; index < target.filterCacheList.length; index++) {
                      var cacheInst = target.filterCacheList[index];
                      if ((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)) {
                          cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
                      }
                  }
              }
          }
      }
  }
}
)(createjs = createjs || {}, AdobeAn0 = AdobeAn0 || {});
