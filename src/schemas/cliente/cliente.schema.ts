import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ClienteDocument = Cliente & Document;

@Schema()
export class Cliente{

    @Prop(String)
    tokenId: string
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);