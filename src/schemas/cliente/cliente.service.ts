import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cliente, ClienteDocument } from './cliente.schema';
import { Model } from "mongoose";
import { crearDtoCliente } from './dtos/create.dto';

@Injectable()
export class ClienteService {
    constructor(
        @InjectModel(Cliente.name) private clienteModel: Model<ClienteDocument>
        ){}


        async crearCliente(crearClienteDto: crearDtoCliente): Promise<Cliente>{
            try{
                    const crearUsuarios = new this.clienteModel(crearClienteDto);
                    return await crearUsuarios.save();
                }catch(error){
                    console.error("no se pudo guardar cliente");
                    
                }
                
            }

        async buscarCliente():Promise<Cliente[]>{
            return this.clienteModel.find().exec();
        }

        async actualizarCliente(id:string,crearClienteDto: crearDtoCliente): Promise<Cliente>{
            return await this.clienteModel.findByIdAndUpdate(id,crearClienteDto);
        }

        async eliminarCliente(id:string):Promise<Cliente>{
            const datos = JSON.parse(JSON.stringify(id));
            return await this.clienteModel.findByIdAndDelete(datos.id);
        }

}
