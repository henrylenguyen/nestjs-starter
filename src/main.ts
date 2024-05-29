import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import AppModule from 'src/app.module'
const port = 1812

const startApp = async () => {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
  })
}

startApp()
