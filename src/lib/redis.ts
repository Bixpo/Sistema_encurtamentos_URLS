import { createClient } from "redis";

export const redis = createClient({
    url: 'redis://123456@localhost:6379',
})

redis.connect()