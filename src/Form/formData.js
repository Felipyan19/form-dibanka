const formData = {
    Casur: [
        {
            title: 'Tipo de Gestión',
            type: 'list',
            options: ['LLAMADA ENTRANTE', 'LLAMADA SALIENTE', 'LLAMADA WEB', 
            'VIDEOLLAMADA', 'SALIENTE WEB']
        },
        {
            title: 'Nombre del Cliente',
            type: 'text'
        },
        {
            title: 'Tipo de Identificación',
            type: 'list',
            options: ['CÉDULA DE IDENTIDAD']
        },
        {
            title: 'Numero de Identificación',
            type: 'text'
        },
        {
            title: 'Telefono del Cliente',
            type: 'text'
        },
        {
            title: 'Celular Actualizado',
            type: 'text'
        },
        {
            title: 'Ya tiene correo Institucional',
            type: 'list',
            options: ['SI', 'NO']
        },
        {
            title: 'Actualmente usa su correo Institucional',
            type: 'list',
            options: ['SI', 'NO']
        },
        {
            title: 'Correo Institucional',
            type: 'text'
        },
        {
            title: 'Solución en el primer Contacto',
            type: 'list',
            options: ['SI', 'NO']
        },
        {
            title: 'Motivo Consulta',
            type: 'list',
            options:  [
                "1. Solicitud de Usuario y Contraseña",
                "2. ¿Cómo activo el correo institucional?",
                "3. Tengo un crédito activo, ¿cómo me hacen el desembolso?",
                "4. ¿Quiero saber estado de mi solicitud de Crédito?",
                "5. ¿Cómo solicito un Crédito, qué trámite debo hacer?",
                "6. No me llega código OTP",
                "7. No funciona la contraseña enviada de acceso a la plataforma",
                "8. No deja tomar la foto",
                "9. Bloqueo de cuenta (intentos fallidos-Inicio sesion otro dispositivo)",
                "10. Términos y Condiciones de la plataforma",
                "11. Dónde actualizo mi número celular y datos",
                "12. Desactivar mi cuenta",
                "13. Mi crédito no aparece en la plataforma",
                "14. Como rechazo o modifico mi crédito",
                "16. Olvido usuario y contraseña",
                "17. Error al validar información, error 500, error 400 etc",
                "18. Porque no registra el banco que necesito?- Informacion Entidad",
                "19. Donde descargo mi desprendible de nomina",
                "20. Anulación de proceso (Bloqueo de seguridad)",
                "21. Firma electrónica",
                "Enrolado efectivo",
                "24. Solicitud de certificaciones, documentos (paz y salvo, deuda, plan de pago)",
                "25. Cuando abre y cierra nuevamente la plataforma",
                "26. Como paso mi crédito a descuento por nomina",
                "27. Llamada caída",
                "28. Me cambió el cupo en plataforma",
                "29. Alivios financieros",
                "30. Cuando quitan mi crédito de plataforma",
                "31. No desea enrolarse (base)- desafiliarse",
                "32. Como subo mis certificados en la plataforma, documentos etc",
                "33. Nuevo ingreso (cuando me desbloquean por pagaduría en transición)",
                "34. Fondo Crecer DiBanka",
                "35. Adelanto de sueldo",
                "36. Aclaración noticias falsas (2.5 por millón, bancos no quieren prestar)",
                "37. Descuento en cola",
                "38. Me están descontando un valor diferente en mi nómina",
                "39. Deseo saber si un aliado se encuentra registrado en la plataforma",
                "40. Embargos y otros referentes a nómina",
                "41. Llamada errada- llamada prueba",
                "43. Afiliado devuelve llamada",
                "44. Información Módulo Bienestar",
                "45. Operación no aplicada",
                "46. Afiliados de Tegen",
                "47. Casos FPS",
                "48. Libranza Erronea",
                "49. Que es DiBanka - Link de ingreso",
                "50. Información de Bingo",
                "52. Casos Continuidad de Descuento",
                "54. Devoluciòn de llamada. (solo llamadas salientes)",
                "55. Transferencia de llamada",
                "56. Se contacta un tercero",
                "57. Nuevas funcionalidades de la plataforma",
                "58. Me llegan códigos de DiBanka no solicitados",
                "59. Bloqueo menor de edad",
                "60. Desbloqueado por seguridad(afiliado fue desbloqueado pero no se enrola en la llamada)",
                "61. Consulta de línea de Casur",
                "62. Asesoría para tomarse foto (Solic de crédito)",
                "63. ¿Cómo paso mi crédito de nómina a pago por ventanilla?",
                "64. Quiero hacer abono a capital. ¿Qué debo hacer?",
                "65. Anuncio (DiBanka no se encuentra sometida)",
                "66. Llamada de Policía Activo",
                "67. ¿Donde puedo enviar una queja a operador.?",
                "68. ¿Quiero saber si mis datos están actualizados?",
                "69. Quiero saber cual es mi cupo disponible",
                "70. Banco me esta descontando y cobrando dinero adicional.",
                "71. Quiero saber si ya estoy enrolado",
                "72. llamada de pensionado casur",
                "73. Solicitud de crédito rápido (Bajo Monto)"
            ]
        },
        {
            title: 'Observaciones',
            type: 'textarea'
        }
    ],
    FPS: [
        {
            title: 'Tipo de Gestión',
            type: 'list',
            options: ['Gestion 1', 'Gestion 2', 'Gestion 3']
        },
        {
            title: 'Nombre del Cliente',
            type: 'text'
        },
        {
            title: 'Tipo de Identificación',
            type: 'list',
            options: ['Campaña 1', 'Campaña 2', 'Campaña 3']
        },
        {
            title: 'Numero de Identificación',
            type: 'text'
        },
        {
            title: 'Telefono del Cliente',
            type: 'text'
        },
        {
            title: 'Celular Actualizado',
            type: 'text'
        },
        {
            title: 'Ya tiene correo Institucional',
            type: 'list'
        },
        {
            title: 'Actualmente usa su correo Institucional',
            type: 'list'
        },
        {
            title: 'Correo Institucional',
            type: 'text'
        },
        {
            title: 'Solución en el primer Contacto',
            type: 'list'
        },
        {
            title: 'Motivo Consulta',
            type: 'list',
            options: ['Campaña 1', 'Campaña 2', 'Campaña 3']
        },
        {
            title: 'Observaciones',
            type: 'textarea'
        }
    ]
};

export default formData;





