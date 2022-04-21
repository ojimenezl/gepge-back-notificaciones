import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tienda, TiendaDocument } from './tienda.schema';
import { Model } from "mongoose";
import { FECHA_ACTUAL } from 'src/funciones/FUNCIONES';
import { crearDtoTienda } from './dtos/create.dto';

@Injectable()
export class TiendaService {
    constructor(
        @InjectModel(Tienda.name) private tiendaModel: Model<TiendaDocument>
        ){}


        async crearTienda(crearTiendaDto: crearDtoTienda): Promise<Tienda>{
            try{
                    crearTiendaDto.fecharegistro = FECHA_ACTUAL;
                    crearTiendaDto.responsable = "ADMIN";
                    crearTiendaDto.estado = 1;
                    const crearUsuarios = new this.tiendaModel(crearTiendaDto);
                    return await crearUsuarios.save();
                }catch(error){
                    console.error("no se pudo publicar");
                    
                }
                
            }

            async buscarxId(id:string):Promise<Tienda>{
                return await this.tiendaModel.findById(id).exec();
            }

            async buscarCedula(correo:string):Promise<Tienda[]>{
                return await this.tiendaModel.find({correo:correo}).exec();
            }

            async buscarTienda():Promise<Tienda[]>{
                return await this.tiendaModel.find({estado:1}).exec();
            }
    
            async actrualizarTienda(id:string,crearTiendaDto: crearDtoTienda): Promise<Tienda>{
                return await this.tiendaModel.findByIdAndUpdate(id,crearTiendaDto);
            }
    
            async eleiminarTienda(id:string):Promise<Tienda>{
                const datos = JSON.parse(JSON.stringify(id));
                return await this.tiendaModel.findByIdAndDelete(datos.id);
            }
        
    
}
