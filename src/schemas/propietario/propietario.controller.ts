import { BadRequestException, Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { crearDtoPropietario } from './dtos/create.dto';
import { PropietarioService } from './propietario.service';

@Controller('propietario')
export class PropietarioController {
    constructor(
        private readonly _propietarioService: PropietarioService,
    ){}


     /********************************
    **************GETS***************
    *********************************/
    @Get('obtener-propietario')
    async obtenerPropietario() {
        try{            
            return await this._propietarioService.buscarPropietario();
        }catch(error){
            return new BadRequestException('Error al obtener los Usuarios')
        }
    }


    @Get('buscar-propietario')
    async obtenerPropietarioxCedula(
        @Query() data:string
    ) {
        try{       
            const info = JSON.parse(JSON.stringify(data));     
            return await this._propietarioService.buscarPropietarioxCedula(info.cedula);
        }catch(error){
            return new BadRequestException('Error al obtener los Usuarios')
        }
    }


    @Get('logeo-propietario')
    async ingresarPropietario(
        @Query() datos:string
    ){
        try{
            const info = JSON.parse(JSON.stringify(datos));            
            return await this._propietarioService.logearPropietario(info.cedula,info.clave)
        }catch(err){
            return new BadRequestException('No se puede ingresar');
        }
    }


    @Get('enviar-mensaje')
    async enviarMensaje(
        @Query() data:string){
        const info = JSON.parse(JSON.stringify(data));
        return await this._propietarioService.enviarMensaje(info.telefono,info.mensaje);
    }

      /********************************
    *************POSTS***************
    *********************************/
    @Post('crear-propietario')
    async crearPropietario(
        @Body() data:{
            datosTienda:crearDtoPropietario
        }
    ) {
        try{
            return await this._propietarioService.crearPropietario(JSON.parse(JSON.stringify(data)));
        }catch(error){
            return new BadRequestException('Error al crear Publicacion')
        }
    }

    /********************************
    *************Put***************
    *********************************/
    @Put('actualizar-propietario')
    async actualizarPropietario(
        @Query() id:string,
        @Body() data:{
            datosPublicacion:crearDtoPropietario
        }
    ) {
        try{            
           return await this._propietarioService.actrualizarPropietario(JSON.parse(JSON.stringify(id)).id,JSON.parse(JSON.stringify(data)));
        }catch(error){
            return new BadRequestException('Error al actaulizar Publicacion')
        }
    }

    /********************************
    **************Delete***************
    *********************************/
    @Delete('eliminar-propietario')
    async borrarPropietario(
        @Query() id:string,
    ) {
        try{                        
            return await this._propietarioService.eleiminarPropietario(id);
        }catch(error){
            return new BadRequestException('Error al eliminar al propietario'+error)
        }
    }

}
