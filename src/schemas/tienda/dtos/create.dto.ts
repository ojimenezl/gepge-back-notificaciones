import { IsInt, IsOptional, IsString, Length } from "class-validator";

export class crearDtoTienda {
 
    @IsOptional()
    @IsString()
    @Length(3,200)
    nombre_tienda:string;

    @IsOptional()
    @IsString()
    @Length(3,25)
    descripcion: string;


    @IsOptional()
    @IsString()
    @Length(3,500)
    correo: string;


    @IsOptional()
    @IsString()
    @Length(3,500)
    precio: string;

    @IsOptional()
    @IsString()
    @Length(3,500)
    horario: string;


    @IsOptional()
    @IsString()
    @Length(3,500)
    abierto: string;

    @IsOptional()
    @IsString()
    @Length(3,50)
    ci_propietario: string;



    @IsOptional()
    @IsString()
    @Length(3,500)
    lantitud: string;

    @IsOptional()
    @IsString()
    @Length(3,500)
    longuitud: string;

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