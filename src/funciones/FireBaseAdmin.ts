
export const admin = require("firebase-admin");


export function IniciarFirebase(){
    //let serviceAccount = require(__dirname+"/serviceAccountKey.json");    
    const serviceAccount = {
        type: "service_account",
        project_id: "gepgepro",
        private_key_id: "93d02b5698cc27accf7deaf617cef10ccad37f2c",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC4ho55+UMThxKK\n7oDJo8QQ24kpvz5jtCDYYWdFGoj+C899RUgpx3wHxaE9SOWjjKBP+D0vFmRQsQgB\nfzKtpjND00CpBoz1HjaNNweIuqT7x0ee1GZwP4aupHe99Pf2woPHE3Klj1KJC/qf\ndAJiPfTeIFHKzxwC4za254A1XJR8dNe965sYVxonL5ZeozCdH+ChTcubrrzt3KR/\n7AfJpqWSFQ968gCQGZD6A5oqEo6wGjLCuQCx5tAQTHEjlKIiAdv9dQoa8s3FTL/G\nZ4giYVTonV43Fs6DClhJUJz328zQXyTiY3KofIgOApFPMOva42/tfskUlNo1969x\nUIGPYUpTAgMBAAECggEALWEB5uMy6Ll+COawi2YX0KF8sOSUPkbNEQmbMPZenENh\nSohgP84MJYknpv+nYboyrpf4y/ywvNtcgam7V9MYpmRscWToA1vjxIS0+J4V9slC\nRsArVQ16XLabr/5vgKLDb5DL0AVYIdXtU4tfDrP35SyDkOGwHNGt4fs6n2TeK2DR\nkCCQYNnZpkWGMwqdwiroYNc9LyjZZ7/zlaf9SuM5L7snp5Vd7NkOn3+P3OnsbOau\nxewyh7Afo2FFdlM7SFJtYPDT1Fl5ahFt/HhgpSZsPWee4mgZLABo6VH/3ED7rmWn\n3rfh7bdfw20YDPRCvuOvY1mFTRdk2biB+NOmeU8uUQKBgQDoEYeXSFC5JZdRU5PN\nJewTiUzfRo0Wab/IBER5u1/Wnu6yB995mvBTA3Z9pTz32BmAhGTGLy1db/VG/IE6\nNCu92Ks/M9F2NRsYqeAIV+L9KcoKtQwgSPsv8VGpIQGZZi969q7YqpFwOsjabXZw\nWDfD+5C4E+Z2JsShYMO7dq6/qQKBgQDLjexmxzzOEBP/Vfy2WdqzMPKEIM88bygB\npD6YYdlmNmF6hWbo9SU/amOiB+1YmQWDpYLPBsW4he1VRI+jyVcFGtuJ2w2+wIPd\n4WtyTBa56QwG5lUml8/1Bv1cemEKNL9gZ4IUoy9arvLxuwvcNXvvsGkXpfUfYDON\nXk6t16ynmwKBgQCouC3rJ/FAWnsj7m6ThNGY9oaEAcgLloCPC8M4+ahY4h3KI30u\n7R1yTR81hA/KZTtNO3QEvkHuH7qkjGnrhgiTMtZ10dekaEG18bNmfXcS9fHlTPFu\n+4Bbv8fN/agq/abhcD14WrH4dVSXsWOdlBWfD+OMYTN5jQACD9beERBFWQKBgBnR\n2c+7rAnTXkYAKTsUMLqUFd8OrlrTGrcCl3IKz2G4uiqpa0FXfy8JFrRB3yhi2KE3\nSF1sVX4vdshfFv1Gl8QtAPX+lELC9rcZVeC8qBFS71ScuOZZUWaaSV8GovKBeFkJ\nKCXoASS2llh1Sm7XVe40aVA3m90r/b4L3V0Nw3fLAoGAdKVn3oBnH49mmwwJDKLJ\nv46OjlEL/XWylHrva3qUHTA2F8cfAAe+vcyLNBJzFO+eAMQ7IMVZfgfzGdn4lXip\nEAgYAGIr1eYLkItz0B9hFsBe/l/EWMr1suLJTwFAfVUucOFhym7KftMZw8JrRFHe\n25ZOMuY+jDzoue4zysFq8/A=\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-uh4r5@gepgepro.iam.gserviceaccount.com",
        client_id: "109534816829011106039",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-uh4r5%40gepgepro.iam.gserviceaccount.com"
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
