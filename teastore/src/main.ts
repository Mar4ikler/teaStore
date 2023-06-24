import { NestFactory } from "@nestjs/core";
import { AppModule } from './app.module';
import * as fs from "fs";

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('/Users/mediocrity/Documents/NodeJS/sem6/teaStore/teastore/src/https/LAB.key'),
    cert: fs.readFileSync('/Users/mediocrity/Documents/NodeJS/sem6/teaStore/teastore/src/https/LAB.crt')
  }
  const app = await NestFactory.create(AppModule, {httpsOptions});
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
