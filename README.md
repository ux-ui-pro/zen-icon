<div align="center">

<br>

<img alt="zen-icon" src="./images/logo.svg" width="60">

<h1>zen-icon</h1>

[![npm](https://img.shields.io/npm/v/zen-icon.svg?colorB=brightgreen)](https://www.npmjs.com/package/zen-icon)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/zen-icon.svg)](https://github.com/ux-ui-pro/zen-icon)
[![NPM Downloads](https://img.shields.io/npm/dm/zen-icon.svg?style=flat)](https://www.npmjs.org/package/zen-icon)

<sup>0.5Kb gzipped</sup>
<h3><a href="https://ux-ui-pro.github.io/zen-icon/dist/">Demo</a></h3>

</div>
<br>

### Import
```javascript
import { ZenIcon } from 'zen-icon'
```

```javascript
new ZenIcon({
    file: './img/icons.svg',
    revision: '77'
})
```

### Create an icon sprite
```HTML
<svg aria-hidden="true" focusable="false" style="width: 0; height: 0; position: absolute;">
	<symbol id="icon-name" viewBox="0 0 100 100">
		<path ... />
	</symbol>
	...
</svg>
```

### Build your icon
```HTML
<svg>
	<use xlink:href="#icon-name"></use>
</svg>
```

<br>

### License
<sup>zen-icon is released under MIT license.</sup>