import { Component } from "./component/component.js";
import { createComponent } from "./create-component.js";
import { importComponent } from "./import-component/import-component.js";
import { render } from "./dom/render.js";
import { assetManager } from "./asset-manager/asset-manager.js";
import { replaceNode } from "./dom/replace-node.js";

const $create = createComponent,
  $C = Component;

export { createComponent, $create, Component, $C, importComponent, render, replaceNode, assetManager };
