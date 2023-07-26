
const nodemailer = require("nodemailer");



const smtp = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"victoralexandreteste123@gmail.com",
        pass: "pass code"
    }
})

const configEmail = {
    from:"victoralexandreteste123@gmail.com",
    to:"victoralexandreteste123@gmail.com",
    subject:"Enviando email pelo node",
    text:"kkkkkkkkkkkkkkkkkkkkkkkkk",
    // html: msg => variavel_com_codigo_html serve para fazer um template de email
    attachments:[{
        filename: 'arquivo.txt',
        path: 'C:/Users/jogos/Desktop/enviar email/arquivo.txt' 
    }]
}


const sendEmail= async () => {
    try{
        console.log("enviando E-mail");
        await smtp.sendMail(configEmail);
        console.log('E-mail enviado');
       
    }
    catch(error){
        console.log(error);
        console.log('deu erro =( ');
    }
}


sendEmail()


