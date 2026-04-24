# How To Use `ticker-slider` In Webflow

## 1) Add Library Assets

In `Project Settings -> Custom Code`:

Head:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/zen-aperios/ticker-slider@main/ticker-slider.min.css" />
```

Footer (before `</body>`):

```html
<script src="https://cdn.jsdelivr.net/gh/zen-aperios/ticker-slider@main/ticker-slider.min.js"></script>
```

## 2) Build Structure In Designer

- Add a wrapper div with class `ticker-slider`
- Add custom attributes on wrapper:
  - `data-direction="left"` (or `right`)
  - `data-speed="80"`
- Inside wrapper add a div with class `track`
- Inside `track`, add text blocks/spans for each ticker item

Required structure:

```html
<div class="ticker-slider" data-direction="left" data-speed="80">
  <div class="track">
    <span>Item A</span>
    <span>Item B</span>
    <span>Item C</span>
  </div>
</div>
```

## 3) Publish

Publish site and hard refresh.

## 4) If Content Is Injected Later

```html
<script>
  window.TickerSlider && window.TickerSlider.init();
</script>
```
