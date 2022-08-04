import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTdlMzVmZTg4MTBiNTEzMjg2NWI5ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTU2OTM2NCwiZXhwIjoxNjU5ODI4NTY0fQ.bUYPBC32JzDD4H1oOdg235SI7-M1zjTcDz3W2Tiqw9Q"

export const publicRequest = axios.create({
    baseURL:BASE_URL,
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
})