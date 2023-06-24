"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const fs = require("fs");
async function bootstrap() {
    const httpsOptions = {
        key: fs.readFileSync('/Users/mediocrity/Documents/NodeJS/sem6/teaStore/teastore/src/https/LAB.key'),
        cert: fs.readFileSync('/Users/mediocrity/Documents/NodeJS/sem6/teaStore/teastore/src/https/LAB.crt')
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { httpsOptions });
    app.enableCors();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map