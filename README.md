# IMGIF

Imgif is a simple jQuery plugin that allows you to create gif

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
| `autoStart` | This determines whether your gif will play as soon as imgif is called or wait until it is specifically played. | Boolean | true |
| `delay` | This determines how long after a imgif is called that the gif will be played in milliseconds. | Integer/Float [ms] | 0 |
| `speed` | This determines the gifs animation speed in milliseconds. For example 1000 will be 1 frame per second. | Integer/Float [ms] | 41.7 |
| `loops` | This telled imgif how many times to loop the gif before stopping. -1 will continuously loop the gif until it it stopped or paused. | Integer | -1 |
| `showThumbnail` | This will show the first frame of the gif as a thumbnail when the gif hasn't been started or has been stopped. | Boolean | false |
| `customThumbnail` | This is the path of a custom image to be used as the thumbnail for this gif. Used in conjuction with showThumbnail. Leaving this out will result in the first frame of the gif being used as the thumbnail.  | String | '' |

## Methods

Once imgif has been called there are a few methods you can use.

```javascript
// create a imgif
var imgif = $('.imgif').imgif({options});

// Pause the gif
imgif.pause();

// Stop gif
imgif.stop();

// Play gif
imgif.play();
```

| Method | Description |
|------|-------------|
| `.play()` | Play the gif if it hasn't been started yet, or if it's been stopped or paused. |
| `.pause()` | Pause the gif at the frame it's on. |
| `.stop()` | Stop the gif an hide it or show it's thumbnail if it has one. |
| `.hide()` | Pauses and hides the gif. |
| `.stop()` | unpauses and shows the gif. |