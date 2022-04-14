import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PropietarioController } from './propietario.controller';
import { Propietario, PropietarioSchema } from './propietario.schema';
import { PropietarioService } from './propietario.service';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Propietario.name, schema: PropietarioSchema }]),
  ],
  controllers: [PropietarioController],
  providers: [PropietarioService],
  exports: [PropietarioService]
})
export class PropietarioModule {}
