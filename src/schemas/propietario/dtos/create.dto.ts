import { IsInt, IsOptional, IsString, Length } from "class-validator";

export class crearDtoPropietario {
 
    @IsOptional()
    @IsString()
    @Length(3,200)
    nombre:string;

    @IsOptional()
    @IsString()
    @Length(3,25)
    cedula: string;


    @IsOptional()
    @IsString()
    @Length(3,500)
    correo: string;

    @IsOptional()
    @IsString()
    @Length(3,500)
    clave: string;


    @IsOptional()
    @IsString()
    @Length(3, 50)
    responsable: string;
    
    @IsOptional()
    @IsString()
    fecharegistro: string;

    @IsOptional()
    @IsInt()
    estado: 0 | 1;
}