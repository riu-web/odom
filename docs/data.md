# Data

**Table of Contents**

- [Data](#data)
  - [Introduction](#introduction)
  - [Data Access](#data-access)
    - [Data Selectors](#data-selectors)
    - [Data Binding](#data-binding)
      - [Introduction](#introduction-1)
      - [Add Dynamic Data](#add-dynamic-data)
      - [Use Binding on Data Selectors](#use-binding-on-data-selectors)
      - [Updating Data](#updating-data)
      - [Updater](#updater)
      - [Example](#example)
  - [Props](#props)
    - [Introduction](#introduction-2)
    - [Attributes](#attributes)
      - [Description](#description)
      - [**Example**](#example-1)
    - [Slots](#slots)
      - [Description](#description-1)
      - [Example](#example-2)
  - [$app](#app)
    - [Description](#description-2)

## Introduction

Odom provides a number of ways in which data can be shared within a component, across components and within an applications as a whole. Data can be shared using the following methods:

- `props`: Data transferred from one component to another.
- `utils`: An attribute of [`options`](./api/create-component/create-component.md#options).
- `$app`: An object set on the `window` object.

## Data Access

In components, data can be accessed via attributes in markup. For some special attributes, data can be accessed by simply providing the property name of the data provided that the data is stored in the appropriate collection in [generic utilities](./api/create-component/utils.md#generic-utilities). User defined attributes and some special attributes can access data via [data selectors](#data-selectors).

### Data Selectors

A data selector is an attribute value (or part of an attribute value) that is used to access data stored in the data structures mentioned in [Introduction](#introduction). A data selector has the following structure:

`@collection.property`

The structure has the following three parts:

- `@`: Necessary to indicate that the attribute value is a data selector.
- `collection`: The data structure which can be any of these values;
  - [`props`](#props) - props of a component.
  - [`data`](#data) - property of [`utils`](./api/create-component/utils.md).
  - [`methods`](#methods) - property of [`utils`](./api/create-component/utils.md)..
  - [`$app`](#app) - a property set on the `window` object.
  - `datum` - used in [Collections](collections.md).
- `property`: A property of the data collection (you can use dot notation to select nested values).

### Data Binding

#### Introduction

You can bind data to the DOM using dynamic data. When the data changes, the DOM is updated. You can also make the data be updated if the DOM changes. To be able to use data binding, you need to a two things - add dynamic data and add data binding syntax to data selectors. Let us look at how we can achieve this.

#### Add Dynamic Data

To [`options.utils.data`](./api/create-component/utils.md#generic-data), add the property `dynamic`. Inside `dynamic`, you can either add values directly, or specify options that include a way of updating the data. The options have the following structure:

```js
{
  data: any,
  updaters: Array
}
```

**Properties**:

- `data`: Data of any type.
- `updaters`: The functions that update the data. All functions are called when an attempt to change the dynamic data is made. If multiple update functions have been provided, the output of one function is used as the input of the next. Refer to [`Updater`](#updater) for more details.

#### Use Binding on Data Selectors

prefix the data selector with `:` for a single bind and `::` for a double bind. A single bind will update the DOM every time the data is changed. A double bind does what a single bind does, but also updates the data if the DOM updates.

#### Updating Data

The dynamic data will be set as [`Component.dynamicData`](./api/component/component.md#dynamicdata). You can get and set data using the properties specified in `options.utils.data.dynamic`.

#### Updater

An updater is a function that is invoked every time you try to change dynamic data.

**Syntax**:

```js
updater(newData);
```

**Parameters**:

- newData
  - Type: `any`.
  - Required: Yes.
  - Usage: Contains the new value.

**Return Value**:

The updated value of any type. If double binding is used, the returned value is used to update the DOM.

#### Example

Let us use data binding on an input field. First we are going to use a single bind to update the value of the input field. Then well update the data and display it when the user enters some data in the input field.

**Markup**:

```html
<div>
  <h1></h1>
  <input type="text" value=":@data.username" />
</div>
```

**JavaScript**:

```js
// ...

const dynamic = { username: "" };
const data = { dynamic };
const utils = { data }
const options = { utils };
const ExampleComponent = await odom.createComponent(options);
await ExampleComponent.render("#example-component");

setTimeout(() => {
  ExampleComponent.dynamicData.username = "@username";
}, 3000);
```

If you open the HTML file in the browser, you should see no text in the text field initially. After about 3 seconds, you should see the text "@username" in the text field.

Let us use double binding and an update function. Change the data selector on `input` to `::@data.username`

```js
// ...

const dynamic = {
  username: {
    data: "",
    update: (newData) => {
      heading.textContent = newData;
      setTimeout(() => console.log(ExampleComponent.dynamicData.username), 0);
      return newData;
    }
  }
};

// ...

const heading = ExampleComponent.select("h1");

// ...
```

Refresh the page. You should see the same thing as before on the input field. However, the `h1` also updates with the same text as the `input`. Enter some text into the input field. The `h1` should be updated with the text you entered in the text field.

## Props

### Introduction

Data can be passed from a component to an asset (component or not) using `props`. The constructors of components, nodes, markup and text can use `props` to instantiate the assets. Props are derived from attributes of all kinds of assets. Component props may include slots if the target elements have children.

### Attributes

#### Description

One way of using props is by using attributes on target elements. All attributes that are not special (i.e. not used for special purposes, e.g. attributes prefixed with `odom-`) are considered as props. Props are used to construct assets.

#### **Example**

In this example we will import a component and construct it using props.

```html
<div odom-src="/src/components/header.html" page="home"></div>
```

In this example, `page` will be considered as a prop of the component at `/src/components/header.html`. The component will be imported and constructed with an object (`props`) containing `page` as a prop. The object will have the following structure:

```js
{
  page: "home";
}
```

Inside the component being imported, the props can be accessed from the markup using data selectors. For example, the prop `page` can be accessed using `@props.page` in any of the attributes. For this to work, the props must be included in the [`options`](./api/create-component/create-component.md#options) of the component.

### Slots

#### Description

All descendants of the target element that have a name attribute are considered to be slots. All slots are added to props. If there is more than one child, one of the following things will happen

- All elements with unique values for the `name` attribute are put in `props` under property names corresponding to the value of their `name` attributes.
- All elements with the same value for `name` attribute collected into an array and put in `props` under the same property (equal to the value of the `name` attribute).

Slots are used only with components.

#### Example

Let us import a component and pass a slot into it through props.

**Parent Component**

```html
<div odom-src="/src/components/container.js">
  <div name="content">
    <span>Content</span>
  </div>
</div>
```

**Child Component**

Odom inserts slots on all descendant elements in the component that have the same value for the attribute `odom-slot` as the value of the attribute `name` on a slot from the parent component. If the value of the slot in `props` is an array, the slot placeholder is replaced with all the elements in the array.

```html
<div>
  <div odom-slot="content"></slot>
</div>
```

The `div` with the attribute `odom-slot` will be replaced with `props.slots.content`.

## $app

### Description

To share data within a web app as a whole, Odom uses the global object `$app`. You can explicitly add this object to the window object. If you have not added it, Odom will add it automatically when needed. Through `$app`, Odom caches and shares a lot of data between components.
