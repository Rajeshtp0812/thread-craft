import { NestApplication, NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { jwtAuth } from './auth/jwtAuth.guard';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { ResponseFormatInterceptor } from './middlewares/response-format.middleware';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
 
async function bootstrap() {

  const app = await NestFactory.create<NestApplication>(AppModule);

  await app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: "*",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new jwtAuth(reflector));
  app.useGlobalInterceptors(new ResponseFormatInterceptor());
  const configService = app.get(ConfigService);
  app.useStaticAssets(join(__dirname + '/src/uploads'));

  
  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Thread Craft')
    .setDescription('')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use('/api', (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader || !authHeader.startsWith('Basic ')) {
      return res.status(401).send('Unauthorized');
    }

    const credentials = Buffer.from(authHeader.split(' ')[1], 'base64').toString();
    const [username, password] = credentials.split(':');

    // Perform your authentication logic here
    if (username === 'YOUR_USERNAME' && password === 'YOUR_PASSWORD') {
      next();
    } else {
      return res.status(401).send('Unauthorized');
    }
  });

  const port = configService.get('port');
  await app.listen(port);
}
bootstrap();
