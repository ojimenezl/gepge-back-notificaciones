import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TiendaDocument = Tienda & Document;

@Schema()
export class Tienda{

    @Prop(String)
    nombre_tienda: string

    @Prop(String)
    descripcion: string

    @Prop(String)
    correo: string

    @Prop(String)
    precio: string

    @Prop(String)
    horario: string

    @Prop(String)
    abierto: string

    @Prop(String)
    lantitud: string

    @Prop(String)
    longuitud: string

    @Prop(String)
    responsable:string

    @Prop(String)
    fecharegistro:string

    @Prop(String)
    estado:string
}

export const TiendaSchema = SchemaFactory.createForClass(Tienda);