noBounce.js
===========

noBounce is a little javascript helper that disables the bounce effect in iOS safari (and potentially all other browsers).


Usage
------
Import noBounce.js to your html file:

```html
<script src="js/noBounce.js" type="text/javascript"></script>
```

Initialize noBounce wherever you want. It is not dependent from any other library or the DOM.

```js
noBounce.init({preventDefault: true, animate: true}); //default settings
```


Settings & Defaults
------------------

```js
settings = {
  preventDefault: true,
  animate: true
}
```

- **preventDefault**: calls event.preventDefault() in touchstart handler if ``true``
- **animate**: does a decelerating scroll animiation after touchend if ``true``
