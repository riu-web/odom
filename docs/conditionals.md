# Conditionals

**Table of Contents**

- [Conditionals](#conditionals)
  - [Introduction](#introduction)
  - [Conditions](#conditions)
    - [Data](#data)
    - [Media Query](#media-query)
      - [Structure](#structure)
      - [`query`](#query)
      - [`watch`](#watch)
  - [Loading](#loading)
    - [Introduction](#introduction-1)
    - [Placeholders](#placeholders)
    - [Defer](#defer)
      - [JSON Structure](#json-structure)
    - [Lazy](#lazy)
      - [JSON Structure](#json-structure-1)
    - [Example](#example)
  - [Visibility](#visibility)
    - [JSON Structure](#json-structure-2)
      - [Attributes](#attributes)
    - [Example](#example-1)
  - [Display](#display)
    - [JSON Structure](#json-structure-3)
      - [Attributes](#attributes-1)
    - [Example](#example-2)
  - [Presence](#presence)
    - [JSON Structure](#json-structure-4)
      - [Attributes](#attributes-2)
    - [Example](#example-3)

## Introduction

Conditionals are a way for elements to be loaded, included in the DOM or have their visual status changed according to a particular condition. The loading of an element can be delayed. An element can also be loaded lazily. This gives you the freedom to load content only when needed. You can also choose to display, remove or change visibility of an element if certain conditions are met.

## Conditions

A condition can be of `Boolean` value or media query. Some types of conditionals use JSON object in the attribute value that identifies the conditional. In the JSON object, an attribute `conditions` is used to specify the conditions upon which the conditional must be applied. The attribute `conditions` is and array that contains a list of conditions which can be either [data](#data) or a [media query](#media-query). Let us look at each one of these condition types and how they are applied to elements.

### Data

Data can be any value in [`props`](./data.md#props), [`data`](./api/create-component/utils.md#generic-utilities), a calculated value of any method of [`methods`](./api/create-component/utils.md#generic-utilities) or a global value specified in [`$app`](data.md#app). A [data selector](./data.md#data-selectors) is used to select a particular data item.

### Media Query

A media query specifying the media conditions on which an action must be performed. It is a JSON object containing attributes for specifying the media query options.

#### Structure

The media query has the following structure:

```json
{
  "query": string,
  "watch": boolean
}
```

#### `query`

A string containing a CSS media query. Any media query string is valid.

#### `watch`

When set to true, the media changes are watched and if the media matches, the specified action is performed. Setting this value to false means the media query will be checked once and thus the action specified run once if the query matches. The default value is `true`.

> Note: <br />
> You can put any number of boolean conditions in the array, but there can be only one media query. All values used for `props` and `data`, and the value returned by `methods` must must be `boolean`.

## Loading

### Introduction

The loading conditional is used to load an element if a particular condition has been met. To use this conditional, add the attribute `odom-loading` to an element and specify conditions that if met, the element will be loaded. The conditions are specified in the value of this attribute.

The attribute `odom-loading` takes either a string that specifies a type of loading, or a JSON string that specifies the type of loading and other options. The type can have the values `"defer"` or `"lazy"`. The JSON string has a different structure depending on the type of loading.

### Placeholders

[Loading](#loading) uses placeholders to conditionally load elements. Placeholders are elements upon which conditions are specified so that they are added to the DOM only if the conditions are met. Placeholders have the same tag name as the original elements. The placeholder contains only one attribute, `odom-placeholder`, which is set to the value of the attribute `name` of the element (if present) or `""`. When conditions for loading an element are met, the placeholder is replaced with the original element.

### Defer

You use `defer` to load content after a component has been added to the DOM. Use the value `defer` for the value of `odom-loading` or use a JSON string.

#### JSON Structure

```json
{
  "type": string,
  "time": number
}
```

**Attributes**:

- `type`: Set to `"defer"`.
- `time`: The time that must pass before the element can be loaded after a component has been added to the DOM. Measured in milliseconds. The default value is `0`.

### Lazy

This is used to lazy load an element. It uses the [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) API.

#### JSON Structure

```json
{
  "type": string,
  "options": object
}
```

**Attributes**:

- `type`: set to `"lazy"`.
- `options`:

  - Structure;

    ```json
    {
      "root": string,
      "threshold": string,
      "rootMargin": number | array
    }
    ```

    Refer to [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) for a detailed explanation of how these values work.

  - Attributes;
    - `root`: A CSS selector for the element used to check the intersection. The selector is used the same way it is used in [`select`](./api/component/component.md#select). If not set, the root is considered to be the viewport.
    - `rootMargin`: A string indicating the margin around the `root`. It takes values valid for [CSS margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin).
    - `threshold`: A number or array of numbers which specify the percentage of the element's visibility the element should be loaded. The default value is `0`;

### Example

```html
<div>
  <div odom-loading='{"type": "defer", "time": 3000}' class="div-1"></div>
  <div class="div-2"></div>
  <div class="div-3"></div>
  <div class="div-4"></div>
  <div odom-loading='{"type": "lazy"}' class="div-5"></div>
</div>
```

The first `div` (`div.div-1`) will load 3 seconds after the component has been added to the DOM. The last div (`div.div-5`) will be added if it intersects with the viewport.

## Visibility

This is used to make an element visible if certain conditions are met. It uses the attribute `odom-visibility`.

### JSON Structure

```json
{
  "value": string | array,
  "conditions": array
}
```

#### Attributes

- `value`: Specifies what value of visibility the element should have in case the conditions are met. It can be a string or an array containing two strings. If it is a string, the visibility will be set to the value specified if the conditions are met. If it is an array, the visibility will be set to the first value of the array if the conditions are met, otherwise the visibility is set to the second value. The value for visibility can be any valid CSS value for visibility.
- `conditions`: An array containing [conditions](#conditions).

### Example

In this example, the element will have its visibility set to `"hidden"` if `options.utils.data.hide` is true.

```html
<div odom-visibility='{"value": "visible", "conditions": ["@data.hide"]}'></div>
```

## Display

This is used to display an element if certain conditions are met. It uses the attribute `odom-display`.

### JSON Structure

```json
{
  "value": string | array,
  "conditions": array
}
```

#### Attributes

- `value`: Specifies what value of display the element should have in case the conditions are met. It can be a string or an array containing two strings. If it is a string, the display will be set to the value specified if the conditions are met. If it is an array, the display will be set to the first value of the array if the conditions are met, otherwise the display is set to the second value. The value for display can be any valid CSS value for display.
- `conditions`: An array containing [conditions](#conditions).

### Example

In this example, the element will have its display set to `"none"` if `options.utils.data.hide` is true.

```html
<div odom-display='{"value": "none", "conditions": ["@data.hide"]}'></div>
```

## Presence

This is used to add an element to the DOM if certain conditions are met. It uses the attribute `odom-presence`.

### JSON Structure

```json
{
  "action": string | array,
  "conditions": array
}
```

#### Attributes

- `action`: Specifies whether the element should be removed or not in case the conditions are met. It can be set to either `"add"` or `"remove"`. If it is set to `"add"`, the element will be added to the DOM. If it is set to `"remove"`, the element will be removed.
- `conditions`: An array containing [conditions](#conditions).

### Example

In this example, the element will be removed from the DOM if the width of the browser window is at least `"992px"`.

```html
<div odom-presence='{"action": "remove", "conditions": [{ "query": "(min-width: 992px)" }]}'></div>
```

> **Note:** The value `"watch"` of the media query has no effect as the action is performed only once for [Presence](#presence).
