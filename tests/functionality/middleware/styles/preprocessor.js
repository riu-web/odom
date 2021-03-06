import { createComponent } from "/src/main.js";
import logResult from "/tests/functionality/log-result.js";


const preprocessor = async () => {
  const markup = /* html */`<div></div>`;

  const styles = /* css */`
    :scope {
      width: 500px;
    }
  `;

  const _preprocessor = async (css) => css.replace("width", "height");
  const _styles = { preprocessor: _preprocessor };
  const middleware = { styles: _styles };
  const options = { markup, styles, middleware };
  const Preprocessor = await createComponent(options);
  document.body.appendChild(Preprocessor.scope);
  const passed = getComputedStyle(Preprocessor.scope).getPropertyValue("height") === "500px";
  logResult(passed);

  return Preprocessor;
};


export default preprocessor;