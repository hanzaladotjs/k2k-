import { Hono } from 'hono'
import db from './utils/db' 

const app = new Hono()



app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
