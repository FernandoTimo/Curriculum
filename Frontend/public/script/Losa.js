import { MovieClip, Shape, Tween, Rectangle } from 'createjs-module';
export default function (an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];

  (lib.AnMovieClip = function () {
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function (positionOrLabel) {
      MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    };
    this.play = function () {
      MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (positionOrLabel) {
      MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    };
    this.stop = function () {
      MovieClip.prototype.stop.call(this);
    };
  }).prototype = p = new MovieClip();
  // symbols:

  // stage content:
  (lib.Sintítulo1 = function (mode, startPosition, loop, reversed) {
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
    MovieClip.apply(this, [props]);

    // Capa_1
    this.shape = new Shape();
    this.shape.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AiLCdQAAgeAogwIA/hFIBbhhQArguAMgQIAFgHQAGgNAMAJQANAIgKAMQgeAhhABBIgvAvQgdAdgSAUIgzA9IABgCQgLAOgKAVIgBAFIAAAEQAAAHgIAAQgHAAAAgHg'
      );
    this.shape.setTransform(79.3346, 314.253);

    this.shape_1 = new Shape();
    this.shape_1.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AhUDQQgKAAAAgKQAAgJAIgCIACAAIABgBQAFgFAJgMQAKgNAJgTIAQgiQALgdAPgrIAYhHIAYhLQAOguAMgcIAEgKQAFgMAMAGQALAHgFAMIgCAEQgLAbgPAuIgZBJIgaBIQgPAtgMAdQgQAogKATQgXAngVAAg'
      );
    this.shape_1.setTransform(106.5128, 275.2608);

    this.shape_2 = new Shape();
    this.shape_2.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AgpCOQgKglARhDQAWhJAIgdQALgnADgVIABgJQACgQARgBQARAAgBARQgEAlgRA5IgbBbQgKAkgDAYIAAABIgBADIABgCIgBANQgBAKgBAFQgDAJgJAAQgJAAgCgJg'
      );
    this.shape_2.setTransform(121.0825, 235.125);

    this.shape_3 = new Shape();
    this.shape_3.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'Ah5CtQgFgKADgLQACgKAPghIAYgsQAZguARgbQAxhSAIgMQAog3AogTIANgFQAKgDAEAKQAEAKgJAGIgQALQgXARgnAwQgdAshBBuQgYAmgQAkIgEAMQAGAGgDAFQgFAOgJAAQgHAAgGgKg'
      );
    this.shape_3.setTransform(142.6949, 193.4313);

    this.shape_4 = new Shape();
    this.shape_4.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'Ai/BaQAAgOALgDIACgBQBGghB0g+QBPgsBBgcIAPgGQAOgGAIANQAIAOgOAHQgNAGgfANQgjAQg/AkQhCAlgfAPIg7AfQglATgXADIgDABQgMAAgBgOg'
      );
    this.shape_4.setTransform(177.6694, 163.2803);

    this.shape_5 = new Shape();
    this.shape_5.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AC0AfQgEgFgFgDQgJgHgVgJQgagKgtgHQgVgCgaABIgvAEIhRAJIgrAIQgaAGgQAAQgKAAAAgLQAAgJAKAAIAOgBIA8gLQAmgGAXgDQBPgMAwADQBKAFAsAkIAIAHQAFAGgDAIQgEAHgHAAQgFAAgEgEg'
      );
    this.shape_5.setTransform(218.1181, 148.52);

    this.shape_6 = new Shape();
    this.shape_6.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AAuB2Qgrh1gUgzQgFgJgGgJQgLgNgTgQIgKgHIACAAIABAAIgDAAIAAgBQgJgEABgJQABgKALgBQAfgEAdAwQAMAWAWA2QAdBDAGAQQAKAXACANQACAJgFAGQgFAFgIAAQgLAAgEgMg'
      );
    this.shape_6.setTransform(252.4967, 165.763);

    this.shape_7 = new Shape();
    this.shape_7.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AgFBhIgDgRIgBgEIgLhhQgJg4AJgXQADgIAIAAQAIAAACAIQADAKABATIAAAbIAAABIAAAAIAAABIAKBHIAHAhQAEASgBANQAAAHgFAFQgFAEgHAAQgKAAgDgMg'
      );
    this.shape_7.setTransform(264.0225, 195.9);

    this.shape_8 = new Shape();
    this.shape_8.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AgSBDQgFgGABgIIAHgeIAAAFIAKg+QACgMAAgNQABgMALAAQANAAABAMQABAYgFAjQgGAtgFAQQgEALgKAAQgHAAgFgFg'
      );
    this.shape_8.setTransform(264.0673, 222.025);

    this.shape_9 = new Shape();
    this.shape_9.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AgeAxQgEgHAEgHIAHgLQAKgNAFgLIAJgYIAJgXQAEgKAKAFQALAFgDAKQgIAhgGAOQgKAagQAPQgEAEgGAAQgHAAgFgGg'
      );
    this.shape_9.setTransform(258.9615, 242.2302);

    this.shape_10 = new Shape();
    this.shape_10.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AjQCxQgEgJAHgHQAMgLATgOIAhgXIBMg5QAagVAngcQAxgnAcgaQAqgmAcgjIAKgMQAWgeAIgHQAHgHAJAFQAJAFgDAJQgRAqgqAvQgcAggxAqQgeAag3ApIhTBBQgxAjgnAUIgFACQgDABgDAAQgJAAgFgIg'
      );
    this.shape_10.setTransform(231.3513, 273.2913);

    this.shape_11 = new Shape();
    this.shape_11.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AjGBfQgEgIAGgGQAhgkA1geQAlgTA/gaQBUgiBpgkQAQgFAFARQAEAQgQAFIg4AUQgZAMgoAPIhCAYQgjAQg2AeQhDAlgWALIgEACIgGACQgIAAgDgHg'
      );
    this.shape_11.setTransform(179.6349, 307.4169);

    this.shape_12 = new Shape();
    this.shape_12.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AhUDCQABgpAPg1IAchcQAWhEA9hmIAUgiQAGgJAKAGQAKAFgGAKIgiA2QgTAggLAYIAAAAIAAABIAAgBIAAABIgBABIAAAAIgVA0QgJAagiBwIgUBOQgCAHgHAAQgJAAAAgJg'
      );
    this.shape_12.setTransform(137.6726, 349.0839);

    this.shape_13 = new Shape();
    this.shape_13.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'ACVC5QhZgThrhUIADACQhBgxgcg+Qg0h6ArggQAHgFAGAGQAGAHgEAGIgCACIAAAAIgBAHQgDAXACASQAEAaASAqIABADQANAeAPATIABABQAPASAqAmIAbAVIgCgCQAiAbBMAiQAeAKAUAKQAKAFgEAKQgDAKgKAAg'
      );
    this.shape_13.setTransform(144.134, 395.3413);

    this.shape_14 = new Shape();
    this.shape_14.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AjLgGQgHgHAHgGQAGgHAHAHIABABIANAHQAqAQAxAHQA8AHAvgGIgDAAIAhgEQAfgEApgOIBFgaQAJgDAFAKQAEAKgJAEQhjAqhfAHQgSABgZAAQh9AAgrgqg'
      );
    this.shape_14.setTransform(187.799, 415.3546);

    this.shape_15 = new Shape();
    this.shape_15.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AizB5QAAgKAJgCQAJgDAFAHIACAAIAKgDQAkgQBCgtIBEg0IABgBIACgBQAagVAmgoIA/hBQAJgJAKAJQAKAKgJAKQhmBshGAyIgCACIgBAAIgNALIAAAAIAAAAIAAAAIABAAIgBAAIgCACIgGAEIAAABIgDACIABgBIgCACIABgBIgDACIAAAAIgBABQgWAQgmAVQg0AbgXAAQgRAAAAgPg'
      );
    this.shape_15.setTransform(233.7189, 395.9125);

    this.shape_16 = new Shape();
    this.shape_16.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AhbCFQgGgCgCgFIAAAAQgCgFAFgFQAkgkAQgUQAtg8AzhVIAXgpQAGgLAMAHQALAHgGALQggBDg5BKIgXAgQgcAjgnAjQgEADgEAAg'
      );
    this.shape_16.setTransform(266.0109, 363.6293);

    this.shape_17 = new Shape();
    this.shape_17.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AhECoQgEgFACgHIAghkQAUg/ANgkQAWhEAWgzQAHgPAQAJQAPAJgHAPIgWAvQgYA/grB+IgaBHQgDAJgKAAQgGAAgEgEg'
      );
    this.shape_17.setTransform(287.889, 329.0097);

    this.shape_18 = new Shape();
    this.shape_18.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AAuChIgDgbQgHgqgXg5QgIgSgWgqQgVgngJgXIgYg5QgHgOAPgJQAOgJAIAPIARAlIAYA6QAPAjAlBKQAdBDgJAzQgCAKgLAAQgMAAgBgKg'
      );
    this.shape_18.setTransform(290.1191, 287.2179);

    this.shape_19 = new Shape();
    this.shape_19.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AClBvQgpgWg6giIhhg5QhUgyg+geQgNgHAHgNQAGgNANADQAtAHA8AjQAeASBAAtQAvAgBhA9QAKAGgEALQgDAKgKAAIgHgCg'
      );
    this.shape_19.setTransform(268.7638, 255.1548);

    this.shape_20 = new Shape();
    this.shape_20.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AjIA+QgFgKAHgJQBFhUBkgWQBegVBrAlIAKADIAHAAQAOABAAAOQAAAPgOAAQgVABgjgJQgugMgKgBQgsgGggAEQgPACgUAIQgzAWg6ArQgNALgRASQgGAFgGAAQgKAAgFgKg'
      );
    this.shape_20.setTransform(217.125, 245.0448);

    this.shape_21 = new Shape();
    this.shape_21.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'Ag5ChQgXgmAUhVQAQhGAagtIAWgnQAOgWAQgMIgBABIACgCIAIgHQAGgFAFgDQAJgEAFAJQAFAIgJAFIgEADQgMALgHAKQgWAdgWA1QgSArgKBLIgBAEQgDAkACAPIADAXQABAGgFAEQgEAEgGAAQgJAAgEgHg'
      );
    this.shape_21.setTransform(178.0669, 277.811);

    this.shape_22 = new Shape();
    this.shape_22.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AArDiQgXgagUgwQgVg4gLgZIACADQgZg5gGg0QgGg1AMg6IAAgDQAJgrADgVIACgNQACgDAEAAQAFAAACADQADAIgCAOIgFAXQgBAggEAXIAAABQgHA5AEAjIADAVQADAMAHAUQAOAgAYBCQAZA6AVAcIAEAEQAGAIgEAHQgEAIgHAAQgFAAgEgFg'
      );
    this.shape_22.setTransform(171.587, 327.3);

    this.shape_23 = new Shape();
    this.shape_23.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'ADmExQgcgGg1gQQhmgdg0gYQhQglg4g3QgigigsgxIhMhUIgYggQgigqgPgkQgshcAAhKQAAgLAMAAQALAAAAALIABAWQAGAiAUAzQAaA+AUAbIAiArIgCgEQBIBZBMBJQAuAqAeAYQAZATAfAOIACABIACABIgBgBQBfAnCRAbIAzAKIAkADQAUABAPgCIADAAIAbgHQAOgEAGAOQAGAOgNAJQggAVg0AAQgnAAgzgMg'
      );
    this.shape_23.setTransform(222.134, 391.575);

    this.shape_24 = new Shape();
    this.shape_24.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AqbIcQABgIAJgBQAJgBADAHIAEABQBNAJBigNQAkgFAtgQQAegKAwgUQB9g3B1hFIA6ghQAigVAWgQQBchJBkhxQAXgaBThmQBPhuBUiWQAdgzAfhFIAkhUQAHgPACgPIAAgOIgBgEQgHgYAZgGQAYgHAIAYQALAdgRArQgJAZgXAtQgtBqhHB1QhaCShZBvQhaBxhMBBQiABviAA7Ig1AXIiaBLQhaAohIAJQgXADguAAQiPAAAFgeg'
      );
    this.shape_24.setTransform(339.6723, 362.7296);

    this.shape_25 = new Shape();
    this.shape_25.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AhlJQQgBgKAKgBIABgBIAAAAIAogyIgCABQALgOALgWIARgmQAbhJAVheQAIgkAPhdIAIhaQAFg0ABglQADhAgLhhIgKhFQgOhHgmhhQgJgagQg4QgQg2gLgcQgFgMAOgHQAPgGAFANQAUArAUBBIAiBuQAcBWAJBGQAOBnAABMQgBAmgEAwIgIBXQgEAngJAyIgRBZQgRBVgqBaQgJAWgRAXIggApIgPATQgJAKgKAAQgKAAAAgKg'
      );
    this.shape_25.setTransform(414.2496, 233.8777);

    this.shape_26 = new Shape();
    this.shape_26.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AJeDiIgVgaIACABQgHgIgIgOIgOgWQgigngWgeQhAhQg6guQgjgZhCgfQiEg0hYgOIglgHQh6gJg9gHQg/gIiAgBQgpAAgUACIgDABQg5AIgmAPIgfAOQgeAOgJAGIgSAPQgKAKgKgKQgJgKAJgKQAcgfAwgVQA3gaBFgIQAtgGBUABQAnAAA4AFIBeAIQBSAGBvASQBkASB3A4QAxAWAuAmQAlAeAsAuQAcAeAhA2QArBFAOASIAJAOIAHAHQAGAGgEAGQgDAGgHAAQgDAAgEgDg'
      );
    this.shape_26.setTransform(338.6241, 139.1729);

    this.shape_27 = new Shape();
    this.shape_27.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AAAFDQgYgDgYhZQgWhggFgSQgSg6AGhGQAFg1AThKQARhCAegsQAlg4A3gRQAKgDADAKQADALgKAEIgKADIgQAKQgXATgVAaQgMAQgNAhQgXA4gNBaQgGBIAEAkQAOBgAxB9IAAABIAIANQAGAKgGAIQgGAIgLAAg'
      );
    this.shape_27.setTransform(260.1484, 166.1917);

    this.shape_28 = new Shape();
    this.shape_28.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'ACaC1QhcgmhLg5QhXhAgrhKQgOgYgJghQgJggAAgbQAAgNANAAQAOAAAAANIAAASQAEAVAUAxQAHAQAbAjQAeAlAqAhQAZAUBHAhQBAAgAdAZQAIAIgEAMQgFALgLAAIgFgBg'
      );
    this.shape_28.setTransform(278.2779, 226);

    this.shape_29 = new Shape();
    this.shape_29.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AgeArQjEgXAVg6QAEgLAKAAQALAAAEALIAAACIAEADQANAJAHADQAhANA4AKQAiADAqAHQA+AFAcgDIArgLQAagGARAAQAQAAADARQACASgQACIgIACIABgBIhIAKQgnAFgeAAQgmAAgmgHg'
      );
    this.shape_29.setTransform(322.1694, 245.575);

    this.shape_30 = new Shape();
    this.shape_30.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AiHBYQgLgCAAgMQAAgNALgCIANgBQANgDAQgHIACgBQBRgiAigaIAugmQAbgXAVgLQAQgJAJAQQAJAPgPAJIgNAJIgsAhQgrAkgwAcQhCAmgrAAQgIAAgHgCg'
      );
    this.shape_30.setTransform(366.2153, 235.6995);

    this.shape_31 = new Shape();
    this.shape_31.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AhrCIQgKAAgCgJQgDgJAIgFIAGgEIgBAAQAHgFAMgQQAMgQAQghQARgjAKgNQANgSAWgXIAoglQALgLAZgTIAUgPQAOgJAIAPQAIAOgNAJIgHAEIADgDIggAZQgxAnghArQgZAwgRAdQgfA2gbAAg'
      );
    this.shape_31.setTransform(399.8844, 209.6679);

    this.shape_32 = new Shape();
    this.shape_32.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AjCAyQgEgJAHgGQAngfBAgWQAegKBRgWQAqgLArADQAvAEAiAUQALAHgHAMQgHAMgMgGIgHgEQgXgJgigFQgNgBgRABIgeADQhbAShIAdQgJAEgTANQgSAMgKAEIgGACIgHACQgIAAgEgKg'
      );
    this.shape_32.setTransform(442.7097, 188.5429);

    this.shape_33 = new Shape();
    this.shape_33.graphics
      .f('#9BD9B6')
      .s()
      .p(
        'AgVBrQgGgHADgKIAFgbQAJhKgHhGIgBgIIgDgFQgCgIAGgGQAGgHAIADQAcAJABBeQABBXgRAbQgGAJgKAAQgJAAgGgHg'
      );
    this.shape_33.setTransform(467.7554, 206.9653);

    this.timeline.addTween(
      Tween.get({})
        .to({ state: [{ t: this.shape }] })
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .to({ state: [{ t: this.shape_2 }] }, 1)
        .to({ state: [{ t: this.shape_3 }] }, 1)
        .to({ state: [{ t: this.shape_4 }] }, 1)
        .to({ state: [{ t: this.shape_5 }] }, 1)
        .to({ state: [{ t: this.shape_6 }] }, 1)
        .to({ state: [{ t: this.shape_7 }] }, 1)
        .to({ state: [{ t: this.shape_8 }] }, 1)
        .to({ state: [{ t: this.shape_9 }] }, 1)
        .to({ state: [{ t: this.shape_10 }] }, 1)
        .to({ state: [{ t: this.shape_11 }] }, 1)
        .to({ state: [{ t: this.shape_12 }] }, 1)
        .to({ state: [{ t: this.shape_13 }] }, 1)
        .to({ state: [{ t: this.shape_14 }] }, 1)
        .to({ state: [{ t: this.shape_15 }] }, 1)
        .to({ state: [{ t: this.shape_16 }] }, 1)
        .to({ state: [{ t: this.shape_17 }] }, 1)
        .to({ state: [{ t: this.shape_18 }] }, 1)
        .to({ state: [{ t: this.shape_19 }] }, 1)
        .to({ state: [{ t: this.shape_20 }] }, 1)
        .to({ state: [{ t: this.shape_21 }] }, 1)
        .to({ state: [{ t: this.shape_22 }] }, 1)
        .to({ state: [{ t: this.shape_23 }] }, 1)
        .to({ state: [{ t: this.shape_24 }] }, 1)
        .to({ state: [{ t: this.shape_25 }] }, 1)
        .to({ state: [{ t: this.shape_26 }] }, 1)
        .to({ state: [{ t: this.shape_27 }] }, 1)
        .to({ state: [{ t: this.shape_28 }] }, 1)
        .to({ state: [{ t: this.shape_29 }] }, 1)
        .to({ state: [{ t: this.shape_30 }] }, 1)
        .to({ state: [{ t: this.shape_31 }] }, 1)
        .to({ state: [{ t: this.shape_32 }] }, 1)
        .to({ state: [{ t: this.shape_33 }] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new Rectangle(315.3, 366.3, 155.09999999999997, 57);
  // library properties:
  lib.properties = {
    id: '2367616E571929429CB3B8A1959D9915',
    width: 500,
    height: 500,
    fps: 30,
    color: '#FFFFFF',
    opacity: 1.0,
    manifest: [],
    preloads: [],
  };

  // bootstrap callback support:

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
  an.compositions['2367616E571929429CB3B8A1959D9915'] = {
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
    window.addEventListener('resize', resizeCanvas);
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
          (respDim == 'width' && lastW == iw) ||
          (respDim == 'height' && lastH == ih)
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
      console.log(domContainers[0]);
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {
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
  };
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0);
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds();
      }
    }
  };
  return an;
}
