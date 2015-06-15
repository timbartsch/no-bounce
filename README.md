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
noBounce.init({
  animate: true
});
```


If you want to prevent bouncing only on one element and not on the whole page you can do it like:

```js
window.onload = function() {
  noBounce.init({
    animate: true,
    element: document.getElementById("content")
  });
}
```

Be sure to init no-bounce after the dom is loaded.


Settings & Defaults
------------------

```js
settings = {
  animate: true,
  element: document
}
```

- **animate**: does a decelerating scroll animiation after touchend if ``true``
- **element**: if the user touches that element and scrolls at the same time the bounce effect gets prevented. All other elements on the page can be used for normal scrolling but won't disable the bounce effect. The default value is ``document`` which prevents bouncing on the whole page.
