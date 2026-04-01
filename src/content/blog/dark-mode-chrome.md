---
title: "Dark mode in chrome browser"
description: "A simple way to enable dark mode on any website using CSS filters and the Stylus extension"
date: 2022-04-23
---

Not every website offers a dark mode option. Some sites still stick to bright white backgrounds that hurt your eyes, especially at night. Here's a simple solution that works on almost any website using just CSS and the Stylus browser extension.

## The Problem

Many websites haven't implemented dark mode yet. Whether it's a news site, documentation, or your favorite tool, you're stuck with harsh white backgrounds. You could use a browser extension specifically designed for dark mode, but those often come with bloated features or tracking.

## The Solution

We can use CSS filters to invert colors and apply a hue rotation, creating a dark mode effect without touching the website's original code. This lightweight approach works entirely in your browser.

## Prerequisites

You'll need the [Stylus extension for Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=en). Stylus lets you write custom CSS that overrides any website's styles.

## The CSS Magic

Here's the complete stylesheet:

```css
html {  
  background-color: #fff !important;
  filter: invert(1) hue-rotate(180deg)
}

img, picture, video {
  filter: invert(1) hue-rotate(0)
}
```

**How it works:**

1. `filter: invert(1)` - Flips all colors (white becomes black, black becomes white)
2. `hue-rotate(180deg)` - Shifts the color wheel to make it look more natural
3. The second rule re-inverts images and videos back to normal, so they display correctly

## How to Apply

1. Copy the CSS code above
2. Click the Stylus extension in your browser
3. Click "Write new style"
4. Paste the CSS code
5. Add the domain name where you want this to apply (e.g., `*.example.com`)
6. Click Save

Now any matching website will automatically display in dark mode. You can create multiple styles for different sites or use wildcards to apply it everywhere.

## Use Cases

- Reading documentation at night
- Browsing sites that lack dark mode
- Reducing eye strain during late-night coding sessions

This approach is simple, fast, and doesn't require installing heavy browser extensions. Once set up, it just works.
