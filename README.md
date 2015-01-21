noBounce.js
===========

noBounce is a little javascript helper that disables the bounce effect in iOS safari.

Check out an [example](http://timbartsch.github.io/examples/no-bounce/).


If you develop an iOS app and have direct access to the webview you should disable the bounce effect like this: 
    
    webView.scrollView.bounces = NO;

(More infos on this [here](http://stackoverflow.com/questions/500761/stop-uiwebview-from-bouncing-vertically).)

Usage
------
Import noBounce.js to your html file:

```html
<script src="js/noBounce.js" type="text/javascript"></script>
```

Initialize noBounce wherever you want. It is not dependent from any other library or the DOM.

```js
noBounce.init({animate: true}); //default settings
```


Settings & Defaults
------------------

```js
settings = {
  animate: true
}
```

- **animate**: does a decelerating scroll animiation after touchend if ``true``
