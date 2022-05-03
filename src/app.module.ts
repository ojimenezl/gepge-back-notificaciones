import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGODB_CONEXION } from './enviroment/enviroment.dev';
import { MODULOS } from './constantes/MODULOS';

@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_CONEXION),
    ...MODULOS,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
