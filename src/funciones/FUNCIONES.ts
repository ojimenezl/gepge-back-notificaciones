import * as moment from 'moment';

const acountSID = "AC86b1cd42a6e6267488b142c79737f770";
const tokeSecurity = "8f3c143c2c374c85aba2bcb721014382"
const client = require('twilio')(acountSID,tokeSecurity);

export const FECHA_ACTUAL = moment().format('YYYY-MM-DD hh:mm:ss');

//iscribirse al sand box
// https://api.whatsapp.com/send?phone=+593961824593&text=Hola%20tu-Weka
export async function EnviarMensaje(telefono:string,mensaje:string){
  let estado = [];
    await  client.messages.create({
      body: mensaje,  
      from: `whatsapp:+14155238886`,      
      to: `whatsapp:+${telefono}`
      }).then(envio => { estado.push(envio) });
    return estado;
}