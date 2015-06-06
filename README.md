# IMGIF

Imgif is a simple jQuery plugin that allows you to create a gif from a list of png or jpg images

## Setup

Include jQuery and the Imgif plugin in your webpage (preferably at the bottom of the page, before the closing BODY tag):

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="imgif.min.js"></script>
<script type="text/javascript">
  // To giffify your div of images
  var imgif = $('.imgif').imgif({options});
</script>
```

## Options

| Name | Description | Type | Default |
|------|-------------|------|---------|
| `loadImages` | If this is true it will load all images from 0 to {numFrames} into the div provided | Boolean | false |
| `baseURL` | This is the base url used in conjunction with loadImages. | String | '' |
| 'numFrames' | This is the number of images loaded with loadImages. 0 - {numImages} is appended to {baseURL} | Integer | 0 |
| 'imageType' | Image file type to be used with loadImage. | String | 'jpg' |
| `autoStart` | This determines whether your gif will play as soon as imgif is called/loaded or wait until it is specifically played. | Boolean | true |
| `thumbnail` | This will show the first frame of the gif as a thumbnail when the gif hasn't yet been started or has been stopped. | Boolean | false |
| `delay` | This determines how long after a imgif is called that the gif will be played in milliseconds. | Integer/Float [ms] | 0 |
| `speed` | This determines the gifs animation speed in milliseconds. For example 1000 will be 1 frame per second. | Integer/Float [ms] | 41.7 |
| `loops` | This telled imgif how many times to loop the gif before stopping. -1 will continuously loop the gif until it it stopped or paused. | Integer | -1 |
| `customEventFrame` | If used an event will fire every loop when this frame number is reached | Integer | -1 |

## Events

| Event | Description |
|------|-------------|
| `loaded` | When imgif is called with {loadImages} option this even fires when all images finish loading. |
| `loop` | Fires every time a loop of the gif is completed. |
| `finish` | When {loops} option is used this event fires when the gif has looped the prescribed number of times. |
| `custom` | This event fires at the {customEventFrame} if that option is used. |

```javascript
// images are in /images/ folder with names animation_0.jpg ... animation_49.jpg
// create a imgif
var imgif = $('.imgif').imgif({'loadImages':true, 'baseURL':'/images/animation_', 'numFrames':50, 'loops':5, 'customEventFrame': 20});

// Fired once when all 50 images are loaded inside imgif div
$('.imgif').on("loaded", function(){ });

// fired after completion of each loop
$('.imgif').on("loop", function(){ });

// Fired once after all 5 loops are completed
$('.imgif').on("finish", function(){ });

// Fired on frame 20 of each loop
$('.imgif').on("custom", function(){ });

```


## Methods

| Method | Description |
|------|-------------|
| `.play()` | Play the gif if it hasn't been started yet, or if it's been stopped or paused. |
| `.pause()` | Pause the gif at the frame it's on. |
| `.stop()` | Stop the gif an hide it or show it's thumbnail if it has one. |
| `.hide()` | Pauses and hides the gif. |
| `.stop()` | unpauses and shows the gif. |

```javascript
// create a imgif
var imgif = $('.imgif').imgif({options});

// Pause the gif
imgif.pause();

// Stop gif
imgif.stop();

// Play gif
imgif.play();

// pause and hide gif
imgif.hide();

// play and show gif
imgif.show();
```
