import { PropietarioModule } from "src/schemas/propietario/propietario.module";
import { TiendaModule } from "src/schemas/tienda/tienda.module";
import { HttpClientModule } from '@tresdoce/nestjs-httpclient';

export const MODULOS = [
    TiendaModule,
    PropietarioModule,
    HttpClientModule
]