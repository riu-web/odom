import { createComponent } from "/src/main.js";

const multiple = async () => {
  const markup = /* html */ `
    <table>
      <thead>
          <tr>
            <td>Username</td>
            <td>Name</td>
          </tr>
      </thead>
      <tbody odom-map="@data.users">
        <tr title="@datum.username">
          <td>
            <span odom-text="@datum.username"></span>
          </td>
          <td>
            <span odom-text="@datum.name"></span>
          </td>
        </tr>
      </tbody>
    </table>
  `;

  const users = [
    {
      name: "First User",
      username: "@user-1"
    },
    {
      name: "Second User",
      username: "@user-2"
    },
    {
      name: "Third User",
      username: "user-3"
    }
  ];

  const data = { users };
  const utils = { data };
  const options = { markup, utils };
  const MultipleComponent = await createComponent(options);
  const firstUserTR = MultipleComponent.select("tbody tr", false);
  const firstUserTD = MultipleComponent.select("tbody td", false);
  let passed = firstUserTR.getAttribute("title").includes("@") && firstUserTD.textContent.includes("@");

  if (passed) console.info("Passed");
  else console.error("Failed");

  return MultipleComponent;
};

export default multiple;
