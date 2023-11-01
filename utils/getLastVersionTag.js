import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
const url = "https://nodejs.org/en";

export async function getLastVersion() {
  const res = await fetch(url);
  const html = await res.text();
  const doc = new DOMParser().parseFromString(html, "text/html");
  const currentVerionTag = doc
    .getElementsByClassName("home-downloadbutton")[0]
    .firstChild.textContent.slice(0,6);
    // return currentVerionTag;
    return "20.9.0";
}