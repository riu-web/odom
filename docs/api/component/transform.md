# transform

- [transform](#transform)
  - [Introduction](#introduction)
  - [Structure](#structure)
  - [`display`](#display)
    - [Description](#description)
  - [`insertComponents`](#insertcomponents)
    - [Description](#description-1)
    - [Syntax](#syntax)
    - [Parameters](#parameters)
      - [insertComponent Options](#insertcomponent-options)
    - [Return Value](#return-value)
  - [`insertData`](#insertdata)
    - [Description](#description-2)
    - [Syntax](#syntax-1)
    - [Parameters](#parameters-1)
      - [`options`](#options)
    - [Return Value](#return-value-1)
  - [`insertMarkup`](#insertmarkup)
    - [Description](#description-3)
    - [Syntax](#syntax-2)
    - [Parameters](#parameters-2)
      - [insertMarkup Options](#insertmarkup-options)
    - [Return Value](#return-value-2)
  - [`insertNodes`](#insertnodes)
    - [Description](#description-4)
    - [Syntax](#syntax-3)
    - [Parameters](#parameters-3)
      - [insertNodes Options](#insertnodes-options)
    - [Return Value](#return-value-3)
  - [`insertSlots`](#insertslots)
    - [Description](#description-5)
    - [Syntax](#syntax-4)
    - [Parameters](#parameters-4)
    - [Return Value](#return-value-4)
  - [`insertText`](#inserttext)
    - [Description](#description-6)
    - [Syntax](#syntax-5)
    - [Parameters](#parameters-5)
      - [insertText Options](#inserttext-options)
    - [Return Value](#return-value-5)
  - [`loading`](#loading)
    - [Description](#description-7)
  - [`map`](#map)
    - [Description](#description-8)
    - [Syntax](#syntax-6)
    - [Parameters](#parameters-6)
      - [map Options](#map-options)
    - [Return Value](#return-value-6)
  - [`multiple`](#multiple)
    - [Description](#description-9)
    - [Syntax](#syntax-7)
    - [Parameters](#parameters-7)
      - [multiple Options](#multiple-options)
    - [Return Value](#return-value-7)
  - [`presence`](#presence)
    - [Description](#description-10)
  - [`run`](#run)
    - [Description](#description-11)
    - [Syntax](#syntax-8)
    - [Parameters](#parameters-8)
      - [run Options](#run-options)
    - [Return Value](#return-value-8)
  - [`visibility`](#visibility)
    - [Description](#description-12)

## Introduction

Transformations like inserting components into [`scope`](./component.md#scope) are done via `transform`, a property of [`Component`](component.md). Transformations are some of the functions performed by [`createComponent`](../create-component/create-component.md). Let us take a look at the structure and functionality of `transform`. Every transformations are done on [`scope`](./component.md#scope).

## Structure

```js
{
  display: Function,
  insertData: Function,
  insertSlots: Function,
  insertComponents: Function,
  insertElements: Function,
  insertMarkup: Function,
  insertText: Function,
  loading: Function,
  map: Function,
  multiple: Function,
  presence: Function,
  run: Function,
  visibility: Function
}
```

## `display`

### Description

Sets particular display values of elements based on specified conditions. For more information, refer to [`display`](../../conditionals.md#display).

## `insertComponents`

### Description

This method inserts `components`.

### Syntax

```js
insertComponents(options)
```

### Parameters

- `options`
  - Type: `Object`
  - Required: Yes
  - Usage: Contains utilites for inserting components
  - Reference: [`insertComponents Options`](#insertcomponents-options)

#### insertComponent Options

**Structure**:

```js
{
  components: Object,
  data: Object,
  methods: Object,
  props: Object
}
```

**Properties**:

- `components`: contains components with property names corresponding to values specified via "odom-src" attributes.
- `data`: The data that can be accessed via [data selectors](../create-component/utils.md#data-selectors)
- `methods`: The methods that can be accessed via data selectors
- `props`: The props of the component that can be accessed via data selectors

### Return Value

A promise that resolves to `undefined`.

## `insertData`

### Description

Used for inserting and binding data.

### Syntax

```js
insertData(options)
```

### Parameters

- `options`
  - Type: `Object`
  - Required: Yes
  - Usage: Provides data utilities for inserting
  - Reference: [`options`](#options)

#### `options`

_Structure_

```js
{
  props: Object,
  data: Object,
  methods: Object
}
```

_Properties_

- `props`: The props of a component provided in [`options`](../create-component/create-component.md). For more information, Refer to [`props`](../create-component/create-component.md#props).
- `data`: Generic data in a component. Refer to [`data`](../create-component/create-component.md#data) for more details
- `methods`: Generic methods used in a component. Refer to [`methods`](../create-component/create-component.md#methods) for more details.

### Return Value

A promise that resolves to `undefined`.

## `insertMarkup`

### Description

This method inserts markup into [`scope`](component.md#scope).

### Syntax

```js
insertMarkup(markups)
```

### Parameters

- `options`
  - Type: `Object`
  - Required: Yes
  - Usage: Contains utilites for inserting markup
  - Reference: [`insertMarkup Options`](#insertmarkup-options)

#### insertMarkup Options

**Structure**:

```js
{
  markups: Object,
  data: Object,
  methods: Object,
  props: Object
}
```

**Properties**:

- `markups`: Contains markup with property names corresponding to values specified via "odom-markup" attributes.
- `data`: The data that can be accessed via [data selectors](../create-component/utils.md#data-selectors)
- `methods`: The methods that can be accessed via data selectors
- `props`: The props of the component that can be accessed via data selectors

### Return Value

A promise that resolves to `undefined`.

## `insertNodes`

### Description

This method inserts `nodes` into [`scope`](component.md#scope).

### Syntax

```js
insertNodes(options)
```

### Parameters

- `options`
  - Type: `Object`
  - Required: Yes
  - Usage: Contains utilites for inserting elements
  - Reference: [`insertElements Options`](#insertnodes-options)

#### insertNodes Options

**Structure**:

```js
{
  nodes: Object,
  data: Object,
  methods: Object,
  props: Object
}
```

**Properties**:

- `nodes`: Contains nodes with property names corresponding to values specified via "odom-node" attributes.
- `data`: The data that can be accessed via [data selectors](../create-component/utils.md#data-selectors)
- `methods`: The methods that can be accessed via data selectors
- `props`: The props of the component that can be accessed via data selectors

### Return Value

A promise that resolves to `undefined`.

## `insertSlots`

### Description

This method inserts `slots` into [`scope`](./component.md#scope). For more details, Refer to [Slots](../../data.md#slots).

### Syntax

```js
insertSlots(slots)
```

### Parameters

- `slots`
  - Type: `Object`
  - Required: Yes
  - Usage: Contains slots passed in from parent component

### Return Value

A promise that resolves to `undefined`.

## `insertText`

### Description

This method inserts text into [`scope`](component.md#scope).

### Syntax

```js
insertText(options)
```

### Parameters

- `options`
  - Type: `Object`
  - Required: Yes
  - Usage: Contains utilites for inserting text
  - Reference: [`insertText Options`](#inserttext-options)

#### insertText Options

**Structure**:

```js
{
  texts: Object,
  data: Object,
  methods: Object,
  props: Object
}
```

**Properties**:

- `texts`: Contains text with property names corresponding to values specified via "odom-text" attributes.
- `data`: The data that can be accessed via [data selectors](../create-component/utils.md#data-selectors)
- `methods`: The methods that can be accessed via data selectors
- `props`: The props of the component that can be accessed via data selectors

### Return Value

A promise that resolves to `undefined`.

## `loading`

### Description

Loads elements in the DOM based on particular conditions. Refer to [`loading`](../../conditionals.md#loading) for more information.

## `map`

### Description

This method inserts variants of the same element into `scope` by mapping an array of data to a collection of elements. Refer to [`Map`](../../collections.md#map) for more.

### Syntax

```js
map(options)
```

### Parameters

- `options`
  - Type: `Object`
  - Required: Yes
  - Usage: Contains utilites for inserting a map element
  - Reference: [`map Options`](#map-options)

#### map Options

**Structure**:

```js
{
  data: Object,
  methods: Object,
  props: Object
}
```

**Properties**:

- `data`: The data that can be accessed via [data selectors](../create-component/utils.md#data-selectors)
- `methods`: The methods that can be accessed via data selectors
- `props`: The props of the component that can be accessed via data selectors

### Return Value

A promise that resolves to `undefined`.

## `multiple`

### Description

This method inserts a collection of variants of an element into `scope` using a template. Refer to [`Multiple`](../../collections.md#multiple) for more.

### Syntax

```js
multiple(options)
```

### Parameters

- `options`
  - Type: `Object`
  - Required: Yes
  - Usage: Contains utilites for inserting multiple elements
  - Reference: [`multiple Options`](#multiple-options)

#### multiple Options

**Structure**:

```js
{
  data: Object,
  methods: Object,
  props: Object
}
```

**Properties**:

- `data`: The data that can be accessed via [data selectors](../create-component/utils.md#data-selectors)
- `methods`: The methods that can be accessed via data selectors
- `props`: The props of the component that can be accessed via data selectors

### Return Value

A promise that resolves to `undefined`.

## `presence`

### Description

Adds or removes elements from the DOM based on specified conditons. Refer to [`presence`](../../conditionals.md#presence) for more details.

## `run`

### Description

This method perfom all the transformations.

### Syntax

```js
run(options)
```

### Parameters

- `options`
  - Type: `Object`
  - Required: Yes
  - Usage: Contains utilies for transforming a component
  - Reference: [`run Options`](#run-options)

#### run Options

**Sturcture**:

```js
{
  props: Object,
  utils: Object
}
```

**Properties**:

- `props`: The props of a component. For more information, Refer to [`props`](../../data.md#props).
- `utils`: Contains the utilities used to perform transformations. Refer to [`utils`](../create-component/utils.md) for more details.

### Return Value

A promise that resolves to `undefined`.

## `visibility`

### Description

Sets visibility values to elements according to specified conditions. For details, refer to [`visibility`](../../conditionals.md#visibility).
