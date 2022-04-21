import { BadRequestException, Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { crearDtoTienda } from './dtos/create.dto';
import { TiendaService } from './tienda.service';

@Controller('tienda')
export class TiendaController {
    constructor(
        private readonly _tiendaService: TiendaService,
    ){}


     /********************************
    **************GETS***************
    *********************************/
    @Get('obtener-tienda')
    async obtenerTienda() {
        try{            
            return await this._tiendaService.buscarTienda();
        }catch(error){
            return new BadRequestException('Error al obtener los Usuarios')
        }
    }


    @Get('buscar-tienda')
    async obtenerTiendaxIde(
        @Query() data:string
    ) {
        try{            
            const info = JSON.parse(JSON.stringify(data));
            return await this._tiendaService.buscarxId(info.id);
        }catch(error){
            return new BadRequestException('Error al obtener los Usuarios')
        }
    }

    @Get('propietario-tienda')
    async obtenerConsultarTiendasPropietario(
        @Query() data:string
    ) {
        try{            
            const info = JSON.parse(JSON.stringify(data));
            return await this._tiendaService.buscarCedula(info.cedula);
        }catch(error){
            return new BadRequestException('Error al obtener los Usuarios')
        }
    }




      /********************************
    *************POSTS***************
    *********************************/
    @Post('crear-tienda')
    async crearTienda(
        @Body() data:{
            datosTienda:crearDtoTienda
        }
    ) {
        try{
            return await this._tiendaService.crearTienda(JSON.parse(JSON.stringify(data)));
        }catch(error){
            return new BadRequestException('Error al crear Publicacion')
        }
    }

    /********************************
    *************Put***************
    *********************************/
    @Put('actualizar-tienda')
    async actualizarTienda(
        @Query() id:string,
        @Body() data:{
            datosPublicacion:crearDtoTienda
        }
    ) {
        try{            
           return await this._tiendaService.actrualizarTienda(JSON.parse(JSON.stringify(id)).id,JSON.parse(JSON.stringify(data)));
        }catch(error){
            return new BadRequestException('Error al actaulizar Publicacion')
        }
    }

    /********************************
    **************Delete***************
    *********************************/
    @Delete('eliminar-tienda')
    async borrarTienda(
        @Query() id:string,
    ) {
        try{                        
            return await this._tiendaService.eleiminarTienda(id);
        }catch(error){
            return new BadRequestException('Error al eliminar la publicacion'+error)
        }
    }

}
