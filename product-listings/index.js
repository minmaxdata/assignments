import "./styles.css";
import data from "./data";

/**
 * Use the `data` variable to programatically construct or navigation menu.
 *
 * Again feel free to pull in any libraries or other code which
 * would make this easier or more expedient.
 * For example, to use jQuery:
 * - Click on the blue "Add Dependency" button below the file tree on the right
 * - Search for jQuery and select the version that works for you.
 * - You can then `import $ from 'jquery'` from any JS file.
 */

const makeList = flag => {
  const list = document.createElement("ul");
  if (flag) {
    list.classList.toggle("visible");
  }
  return list;
};
const makeListItem = () => {
  const item = document.createElement("li");

  return item;
};
const toggleShow = e => {
  e.preventDefault();
  const current = e.currentTarget;
  current.classList.toggle("visible");
};
const makeLink = (name, src) => {
  const link = document.createElement("a");
  link.addEventListener("click", toggleShow);
  if (src.path !== "") {
    link.href = src.path;
  }
  link.text = name;
  return link;
};

const makeMenuList = (menu, flag) => {
  const list = makeList(flag);
  for (let [key, value] of Object.entries(menu)) {
    const listItem = makeListItem(list);
    const link = makeLink(key, value);
    listItem.append(link);
    list.append(listItem);
    if (value.menu) {
      const subMenu = makeMenuList(value.menu, true);
      list.append(subMenu);
    }
  }

  return list;
};
let result = new DocumentFragment();
const menu = makeMenuList(data.menu, false);
result.append(menu);
const body = document.getElementById("app");
body.appendChild(result);
