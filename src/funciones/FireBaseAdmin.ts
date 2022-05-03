
export const admin = require("firebase-admin");


export function IniciarFirebase(){
    let serviceAccount = require(__dirname+"/serviceAccountKey.json");    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });   
}

export async function enviarPushToOneUser(notificacion):Promise<string>{

    const mensaje = {
        token: notificacion.tokenId,
        notification:{
            title:notificacion.titulo,
            body:notificacion.mensaje
          }
    }
    return await enviarMensaje(mensaje)
}

export async function enviarMensaje(mensaje):Promise<string>{

    let respuesta = "Fallo"  
    await admin.messaging().send(mensaje)
    .then(response => {
        respuesta = "Exito al enviar"
    })
    .catch(error => {
        respuesta = "Error el enviar"
    })
    return respuesta
}
