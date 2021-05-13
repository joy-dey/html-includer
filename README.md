# html-includer

This is a simple library which was inspired by [Programming With Vishal's](https://www.youtube.com/watch?v=uwUGc1D4vf8) video. As the name says, it helps you to include html files inside html like PUG (which was previously Jade).

Use Via CDN
```
<script src="https://cdn.jsdelivr.net/gh/joy-dey/html-includer@latest/include-html-min.js"></script>
```

# How to use

The process is quite simple. Create a partial html file and use `data-include="path/to/file"` to the parent element to render the included file.

For eg. consider this `nav.html` file.
```     
<nav>
  <ul>
    <li>
        <a href="#">Home</a>
     </li>
     <li>
        <a href="#">About</a>
     </li>
     <li>
        <a href="#">Contact</a>
     </li>
  </ul>
</nav>
```

to include this file simply create a less semantic `<div></div>` with `data-include` attribute or a semantic `<header></header>` and you are good to go. For eg.

```
<header data-include="nav.html"></header>
```
