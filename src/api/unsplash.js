import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 4mijJbQ36Ydt-6vbSDiii3f3stq-5qUDV8VK6ZtkAck",
      },
})