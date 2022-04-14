import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TiendaController } from './tienda.controller';
import { Tienda, TiendaSchema } from './tienda.schema';
import { TiendaService } from './tienda.service';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Tienda.name, schema: TiendaSchema }]),
  ],
  controllers: [TiendaController],
  providers: [TiendaService],
  exports: [TiendaService]
})
export class TiendaModule {}
