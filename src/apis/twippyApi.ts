import axios from "axios";
import camelcaseKeys from "camelcase-keys";

const twippyAxios = axios.create({
    baseURL: "https://twippy-api.herokuapp.com"
})

export const twippyApi = {
    fetchTweets: async (name: string) => {
        const { data } = await twippyAxios.get(`/tweets?name=${name}`)
        const cameledData = camelcaseKeys(data, { deep: true })
        return cameledData
    },
    filterdTimeline: async (name: string) => {
        const {data} = await twippyAxios.get(`/molddatas?name=${name}`)
        const cameledData = camelcaseKeys(data, { deep: true })
        return cameledData
    },
}