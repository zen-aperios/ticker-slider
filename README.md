# ticker-slider

Infinite horizontal ticker slider utility for Webflow and plain HTML.

## Files

- `ticker-slider.js`: source library script
- `ticker-slider.min.js`: minified library script
- `ticker-slider.css`: source styles
- `ticker-slider.min.css`: minified styles
- `index.html`: demo page
- `HOW_TO_WEBFLOW.md`: setup walkthrough

## HTML Markup

```html
<section class="ticker-slider" data-direction="left" data-speed="80">
  <div class="track">
    <span>Item One</span>
    <span>Item Two</span>
    <span>Item Three</span>
  </div>
</section>
```

## Options

- `data-direction="left"` or `data-direction="right"`
- `data-speed="80"` pixels per second

## CDN Usage

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/zen-aperios/ticker-slider@main/ticker-slider.min.css" />
<script src="https://cdn.jsdelivr.net/gh/zen-aperios/ticker-slider@main/ticker-slider.min.js"></script>
```

## Re-init

```html
<script>
  window.TickerSlider && window.TickerSlider.init();
</script>
```
