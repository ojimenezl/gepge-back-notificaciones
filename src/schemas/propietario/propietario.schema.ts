import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PropietarioDocument = Propietario & Document;

@Schema()
export class Propietario{

    @Prop(String)
    nombre: string

    @Prop(String)
    cedula: string

    @Prop(String)
    correo:string
    

    @Prop(String)
    clave:string


    @Prop(String)
    responsable:string

    @Prop(String)
    fecharegistro:string

    @Prop(String)
    estado:string
}

export const PropietarioSchema = SchemaFactory.createForClass(Propietario);