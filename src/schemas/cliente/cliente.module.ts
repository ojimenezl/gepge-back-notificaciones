import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteController } from './cliente.controller';
import { Cliente, ClienteSchema } from './cliente.schema';
import { ClienteService } from './cliente.service';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Cliente.name, schema: ClienteSchema }]),
  ],
  controllers: [ClienteController],
  providers: [ClienteService],
  exports: [ClienteService]
})
export class ClienteModule {}
