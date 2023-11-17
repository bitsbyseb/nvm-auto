import { DOMParser } from "domParser";
const url = "https://nodejs.org/en";

export async function getLastVersion() {
  const res = await fetch(url);
  const html = await res.text();
  const doc = new DOMParser().parseFromString(html, "text/html");
  const currentVerionTag = doc
    .getElementsByClassName("home-downloadbutton")[1]
    .firstChild.textContent.slice(0, 6);
  return currentVerionTag;
}
