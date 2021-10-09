import { atom } from "recoil";
import { Themes } from "./functions/theme";

export const dataState = atom({
    key: "dataState",
    default: {name:"",icon:"",tweets:[""]}
})

export const themeState = atom({
    key: "themeState",
    default: Themes.light
})