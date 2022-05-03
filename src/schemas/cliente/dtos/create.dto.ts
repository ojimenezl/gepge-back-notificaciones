import { IsInt, IsOptional, IsString, Length } from "class-validator";

export class crearDtoCliente {
 
    @IsOptional()
    @IsString()
    @Length(3,200)
    tokenId:string;

}