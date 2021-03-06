import { createComponent } from "/src/main.js";
import logResult from "../../../log-result.js";

const singleBind = async () => {
  const markup = /* html */ `
    <div>
      <h1></h1>
      <input type="text" value=":@data.text">
    </div>
  `;

  const updater = (newData) => {
    h1.textContent = newData;
    return newData;
  };

  const updater2 = (newData) => {
    h1.style.setProperty("color", "red");
    return newData;
  };

  const text = {
    data: "Default",
    updaters: [updater]
  };

  const dynamic = { text };
  const data = { dynamic };
  const utils = { data };
  const options = { markup, utils };
  const SingleBind = await createComponent(options);
  const h1 = SingleBind.select("h1", false);
  const input = SingleBind.select("input", false);
  SingleBind.dynamicData.addUpdater("text", updater2);
  let passed = input.value === "Default" && h1.textContent === "Default";
  SingleBind.dynamicData.text = "New";
  passed = input.value === "New" && h1.textContent === "New" && h1.style.getPropertyValue("color") === "red";
  logResult(passed);
  document.body.appendChild(SingleBind.scope);

  return SingleBind;
};

export default singleBind;
