import { BadRequestException, Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { crearDtoCliente } from './dtos/create.dto';

@Controller('cliente')
export class ClienteController {

    constructor(
        private readonly _clienteService: ClienteService,
    ){}

         /********************************
    **************GETS***************
    *********************************/
    @Get('obtener-cliente')
    async obtenerPropietario() {
        try{            
            return await this._clienteService.buscarCliente();
        }catch(error){
            return new BadRequestException('Error al obtener los clientes')
        }
    }

    @Get('buscar-cliente')
    async obtenerPropietarioxToken(
        @Query() id
    ) {
        try{            
            const dat = JSON.parse(JSON.stringify(id));            
            return await this._clienteService.buscarClientexToken(dat);
        }catch(error){
            return new BadRequestException('Error al obtener los clientes')
        }
    }



      /********************************
    *************POSTS***************
    *********************************/
    @Post('crear-cliente')
    async crearPropietario(
        @Body() data:{
            datosTienda:crearDtoCliente
        }
    ) {
        try{
            return await this._clienteService.crearCliente(JSON.parse(JSON.stringify(data)));
        }catch(error){
            return new BadRequestException('Error al crear cliente')
        }
    }

    /********************************
    *************Put***************
    *********************************/
    @Put('actualizar-cliente')
    async actualizarPropietario(
        @Query() id:string,
        @Body() data:{
            datosPublicacion:crearDtoCliente
        }
    ) {
        try{            
           return await this._clienteService.actualizarCliente(JSON.parse(JSON.stringify(id)).id,JSON.parse(JSON.stringify(data)));
        }catch(error){
            return new BadRequestException('Error al actaulizar cliente')
        }
    }

    /********************************
    **************Delete***************
    *********************************/
    @Delete('eliminar-cliente')
    async borrarPropietario(
        @Query() id:string,
    ) {
        try{                        
            return await this._clienteService.eliminarCliente(id);
        }catch(error){
            return new BadRequestException('Error al eliminar al cliente'+error)
        }
    }
}
