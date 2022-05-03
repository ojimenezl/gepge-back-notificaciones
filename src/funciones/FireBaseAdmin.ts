
export const admin = require("firebase-admin");


export function IniciarFirebase(){
    //let serviceAccount = require(__dirname+"/serviceAccountKey.json");    
    const serviceAccount = {
        type: "service_account",
        project_id: "tuweka-44356",
        private_key_id: "bf0b6085db6370884b3427ba024999fccc3e480c",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQClp3PBmVauxmSr\nbWa++p+hNsXoYcRC1o3b9WWf1O7kgLamoeq2MM1EeEbM7dR0awBg7NLddyUkJruA\n6/ii/uF/AnwW59s0HlcRF4FKbCxchNKhv/2Jaq5Zc4YJpqPcTrwqzxE+Q5TpJQaV\nILwUqAKYDU79w70uO+4Hm9+jEgTv8h841uBpkG/9q0YN7wrqSp4ERlnUfPBV38rt\nOgmpXAhoT2Hc+d93/sowg+p4Bw97HvS/nPIFdS9Ue6qlfQbS+HMy0NXl+gBwkOLn\n9P92/AY5dhRcy8c+T3spQr/sXKApVbCFcIiQ/qHmOhWA1a0MazXnHcYLSTxv1PzS\n27bYElQTAgMBAAECggEADpX0dM72GXSBh7Cd0+IIbS7/9Qqqt8HhgsUUOiMLF9aX\nfouSOZGJeWZnwYKNauTDB0XC+VoUzJ6Wcu8UGPH9U+wZlgC7RdcIDoq1ySJGM61E\nSJa5kcBxcpHf8viXw/2wxsotuABGW9L1Res4dE8oz0+YrXJvNWN0fXoFknuzMJdK\nSYOvi6PTIPDg0vSeWpoJ4bEQDpa0iOpesszEZKoDZYeuggm6Njv7SRjeJUdlGtUv\nspdOfUPErosDz7ZT5dkWx5Tn93XopQoaNqRGhvnxr4mRMeQ4VQt8keK0c3VG+A0D\n0AV5QwtIHqrJcaO78NEw3HjNnRDpFFgqTDv4UDoz5QKBgQDWxLYpo74LZTytvYqO\nphBPfYmQg0pwsOwqVkgGKuW5Q+LOFM7fOClo1EftMVwOIfH2EIYE/e8mHsv20o6r\nmhroBZEuFYPllIl3Cg0LrDwh4897dNq6SyLTlopqYEX5OGrIKgYtxWtPQPdfD0l3\nM/jOknaq6MnHB6dW+GR4swZqLQKBgQDFdOfFSZCzZUIhhAjFra9LUmm/ull3boWU\nElJt5y+/BnmpsBFvvJj0zJQKT/uHwoa9s4DoKx0psTU+Rcg+PrMmCtvQKzwYSegW\n5lXsD8IltILUd0i5qu+3U+7z9lnuxflxWaZ/xX7oh7f17ltRb/b/mfarFAMZ36N4\noRHTVKXfPwKBgQCYjASvsuSMB46AAb9m70FqlMqfYQIA5Un6EGr8JoAhhbyVkGYY\nWzXehdnI+mRejXHly3rGFPBG7V0Gpiw8ayttXnbues3CxiyV5we5IM9dawi2shui\nczf7flQ2lsdc69u87UySOkWsd4K9fIg8KSgy4gl0AAFCY4dS2P/UU6TcyQKBgCn6\nka+61R2eoHGZrXfBViwwSDUvvAeNIq75OjcNWHRHPyRZP0u/D9GzkKGkoXgaXiUE\nfZpeWCPd/dDQayL4l4O1+UeHeY48YDBGJew66W60sr/S4E5AzhfuqzWIoVQHGOIF\nSkWNyk5LVEvfseBdamiq5es3JPWiOxHRRIXmUCFnAoGARKL3YwWXQf+oq0Cj2wu2\nZDoVZCz+LcxWEwqOvseyHmQEpVX2SbZ4aQpImNweN3bMH410X2KR6t5scISm3qXG\nr7xIFIPkYmdxr/jSCQZro44LIHY1nlpUQNVcRNshElTdRSYzr45aFtUR97SBzrsc\n1DIFAu3eRd3s+HAD4cMnpj8=\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-75db3@tuweka-44356.iam.gserviceaccount.com",
        client_id: "102043764414055313935",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-75db3%40tuweka-44356.iam.gserviceaccount.com"
      }
      
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
          },
        data:{
        title:notificacion.titulo,
        body:notificacion.mensaje
        }
        
    }
    return await enviarMensaje(mensaje)
}

export async function enviarMensaje(mensaje):Promise<any>{

    let respuesta = {mensaje:"Fallo"};  
    await admin.messaging().send(mensaje)
    .then(response => {
        respuesta.mensaje = "Exito al enviar"
    })
    .catch(error => {
        respuesta.mensaje = "Error el enviar" + error
    })
    return respuesta
}
