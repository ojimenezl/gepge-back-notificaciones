import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { EnviarMensaje, FECHA_ACTUAL } from 'src/funciones/FUNCIONES';
import { crearDtoPropietario } from './dtos/create.dto';
import { Propietario, PropietarioDocument } from './propietario.schema';
import * as bcrypt from 'bcrypt';



@Injectable()
export class PropietarioService {
    constructor(
        @InjectModel(Propietario.name) private PropietarioModel: Model<PropietarioDocument>
        ){}


        async crearPropietario(crearPropietarioDto: crearDtoPropietario): Promise<Propietario>{
            try{

                    crearPropietarioDto.clave = await bcrypt.hash(crearPropietarioDto.clave,10);
                    crearPropietarioDto.fecharegistro = FECHA_ACTUAL;
                    crearPropietarioDto.responsable = "ADMIN";
                    crearPropietarioDto.estado = 1;
                    const crearUsuarios = new this.PropietarioModel(crearPropietarioDto);
                    return await crearUsuarios.save();
                }catch(error){
                    console.error("no se pudo publicar");
                    
                }
                
            }

            async enviarMensaje(telefono:string, mensaje:string){
             return await EnviarMensaje(telefono, mensaje); 
            }


            async logearPropietario(cedula:string,clave:string):Promise<Propietario[]>{
                try{
                    let PROPIETARIO:Propietario[]=[];
                    const infoPropietarios = await this.PropietarioModel.find({cedula:cedula}).exec();                
                    for(let info of JSON.parse(JSON.stringify(infoPropietarios))){
                        if(await bcrypt.compare(clave, info.clave)){
                            PROPIETARIO.push(info);
                        }
                    }
                    return PROPIETARIO;
                }catch(err){
                    console.log("no existio logeo");   
                }
            }


            async buscarPropietarioxCedula(cedula):Promise<Propietario[]>{
                return this.PropietarioModel.find({cedula:cedula}).exec();
            }

            async buscarPropietario():Promise<Propietario[]>{
                return this.PropietarioModel.find({estado:1}).exec();
            }
    
            async actrualizarPropietario(id:string,crearTiendaDto: crearDtoPropietario): Promise<Propietario>{
                return await this.PropietarioModel.findByIdAndUpdate(id,crearTiendaDto);
            }
    
            async eleiminarPropietario(id:string):Promise<Propietario>{
                const datos = JSON.parse(JSON.stringify(id));
                return await this.PropietarioModel.findByIdAndDelete(datos.id);
            }
}
