# React responsive text
This library generates text that scales automatically depending on the parent container width.
For the moment it only supports single line texts.

### Usage

```javascript
import { ResponsiveText } from 'react-responsive-text'

<div style={{ width: '100%' }}>
    <ResponsiveText>
        Hello world
    </ResponsiveText>
</div>
```

You can pass all `SVGTextElementAttributes<SVGTextElement>` supported props such as `fill` and `fontWeight` to customize the displayed text.
