import { createComponent } from "/src/main.js";


const classes = async () => {
  const markup = /* html */`<div class="class-0"></div>`;
  const _classes = ["class-1", "class-2"];
  const options = { markup, classes: _classes };
  const Classes = await createComponent(options);
  const scope = Classes.scope;
  let passed = true;
  if (!scope.classList.contains("class-0")) passed = false;

  for (const className of _classes) {
    if (!scope.classList.contains(className)) passed = false;
  };

  if (passed) console.info("Passed");
  else console.error("Failed");

  return Classes;
};


export default classes;