import { atom } from "recoil";

export const dataState = atom({
    key: "dataState",
    default: {name:"",screenName:"",icon:"",tweets:[""]}
})