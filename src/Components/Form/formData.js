const formData = {
    Aliados: {
        Casur: {
            config: {
                backgroundImage: require('../../img/logo-casur.png'),
                title: "Casur",
                text: ["Le recuerdo nuestro punto de atención presencial en la <b>cr 7 séptima con calle 12 b 58</b> en la ciudad de Bogotá en los horarios de <b>7:30 am a 4:00 pm.</b> Y Un botón de asesoría que puede encontrar en la página web portal DiBanka.", "Recuerde que hablo con ------ muchas gracias por comunicarse con nosotros.", "Por último, le voy a enviar una breve encuesta para que califique el <b>servicio de atención</b> brindado en la llamada, en la cual la máxima calificación es 5."],
            },
            data: [
                {
                    title: 'Tipo de Gestión',
                    type: 'list',
                    options: ['LLAMADA ENTRANTE', 'LLAMADA SALIENTE', 'LLAMADA WEB', 'VIDEOLLAMADA', 'OPERADORES VIP', 'OPERADORES VIP SALIENTE', 'SALIENTE WEB'],
                },
                {
                    title: 'Nombre del Cliente',
                    type: 'text'
                },
                {
                    title: 'Tipo de Identificación',
                    type: 'text'
                },
                {
                    title: 'Numero de Identificación',
                    type: 'text'
                },
                {
                    title: 'Celular Actualizado',
                    type: 'text'
                },
                {
                    title: 'Correo',
                    type: 'list'
                },
                {
                    title: 'Solución en el primer Contacto',
                    type: 'list',
                    options: ['SI', 'NO']
                },
                {
                    title: 'Motivo Consulta',
                    type: 'list',
                    options: [
                        "1. Usuario y contraseña",
                        "2. Solicitud e información de crédito",
                        "3. Bloqueos",
                        "4. Solicitudes Exclusivas otras pagadurías",
                        "5. Inconsistencia",
                        "6. Olvido de contraseña",
                        "7. Como realizo el pago de mi factura",
                        "8. ¿Cuándo abre y cierra la plataforma?",
                        "9. Como registrar un afiliado en la plataforma",
                        "10. Llamada caída",
                        "11. Devolución de llamada",
                        "12. Que es Dibanka- Link de ingreso",
                        "13. Llamada de asesora de banco",
                        "14. Operador interesado en nuestros productos"
                    ]
                },
                {
                    title: 'Motivo Especifico',
                    type: 'list',
                    options: [
                        "1.1 No me llega usuario y contraseña (Operador nuevo)",
                        "1.2 Documentos para ingreso de la plataforma",
                        "1.3 ¿Con qué usuario ingreso a la plataforma?",
                        "1.4 Asesoría de creación de funcionario",
                        "1.5 Enrolado efectivo",
                        "2.1 Cómo solicita un crédito el afiliado",
                        "2.2 Cómo retiro o modifico un descuento",
                        "2.3 Cómo apruebo o rechazo una solicitud de crédito",
                        "2.4 Información bajo monto",
                        "2.5 Nuevas funcionalidades de la plataforma (pregunta concepto- Recuperación de Cartera)",
                        "2.6 Continuidad de descuento",
                        "2.7 Casos planillas novedades- Cargue masivo",
                        "2.8 Información descuento afiliado",
                        "2.9 Información Factor por millón",
                        "2.10 Cómo descargar informes",
                        "3.1 Bloqueo por pago extemporáneo",
                        "3.2 Bloqueo por documentos",
                        "3.3 Bloqueo sesión abierta en otro dispositivo",
                        "3.4 Operación no aplicada",
                        "3.5 Descuento en cola",
                        "3.6 Bloqueo por un Administrador",
                        "3.7 Bloqueo por Pagaduría",
                        "4.1 Cuál es mi código de descuento",
                        "4.2 Cuando me realizan el pago",
                        "4.3 Actualización de datos",
                        "4.4 Quiero actualizar mis códigos",
                        "5.1 Error al validar información, error 500, error 400 etc.",
                        "5.2 No deja visualizar la Libranza",
                        "5.3 No me llega código de verificación (OTP)",
                        "5.4 No coinciden valores de libranza con el préstamo",
                        "5.5 Inconsistencias validar operaciones"
                    ]
                },
                {
                    title: 'Observaciones',
                    type: 'textarea'
                },
            ]
        },
        FPS: {
            config: {
                backgroundImage: require('../../img/LOGO-FONDO-DE-PASIVO-SOCIAL-768x192.png'),
                title: "FPS",
                text: ["Le recuerdo nuestro punto de atención presencial se encuentra ubicado en la Cll 19 No 14 21 en la ciudad de Bogotá los días martes y jueves en los horarios de 8:00 am a 4:30 pm.", " Recuerde que hablo con ------ muchas gracias por comunicarse con nosotros.", " Por último, le voy a enviar una breve encuesta para que califique el servicio de atención brindado en la llamada."],
            },
            data: [
                {
                    title: 'Tipo de Gestión',
                    type: 'list',
                    options: ['LLAMADA ENTRANTE', 'LLAMADA SALIENTE', 'OPERADOR VIP'],
                },
                {
                    title: 'Nombre de la entidad y el nombre del Funcionario',
                    type: 'text'
                },
                {
                    title: 'Tipo de Identificación',
                    type: 'text'
                },
                {
                    title: 'Numero de Identificación',
                    type: 'text'
                },
                {
                    title: 'Celular Actualizado',
                    type: 'text'
                },
                {
                    title: 'Correo',
                    type: 'list'
                },
                {
                    title: 'Solución en el primer Contacto',
                    type: 'list',
                    options: ['SI', 'NO']
                },
                {
                    title: 'Motivo Consulta',
                    type: 'list',
                    options: [
                        "1. Usuario y contraseña",
                        "2. Solicitud e información de crédito",
                        "3. Bloqueos",
                        "4. Solicitudes Exclusivas otras pagadurías",
                        "5. Inconsistencia",
                        "6. Olvido de contraseña",
                        "7. ¿Cómo realizo el pago de la factura?",
                        "8. ¿Cuándo abre y cierra nuevamente la plataforma?",
                        "9. ¿Cómo registrar un afiliado en la plataforma?",
                        "10. Llamada caída",
                        "11. Devolución de llamada",
                        "12. Que es Dibanka- Link de ingreso",
                        "13. Llamada de asesora de banco",
                        "14. Operador interesado en nuestros productos",
                        "15. Afiliados San Juan de Dios"
                    ]
                },
                {
                    title: 'Motivo Especifico',
                    type: 'list',
                    options: [
                        "1.1 No me llega usuario y contraseña (Operador nuevo)",
                        "1.2 ¿Qué documentos solicitan para registrarse en la plataforma?",
                        "1.3 ¿Con qué usuario ingreso a la plataforma?",
                        "1.4 Asesoría de creación de funcionario",
                        "1.5 Enrolado efectivo",
                        "2.1 ¿Cómo solicita un crédito el afiliado?",
                        "2.2 ¿Cómo retiro o modifico un descuento?",
                        "2.3 ¿Cómo apruebo o rechazo una solicitud de crédito?",
                        "2.4 Información bajo monto",
                        "2.5 Nuevas funcionalidades de la plataforma",
                        "2.6 Continuidad de descuento",
                        "2.7 Casos planillas novedades- Cargue masivo",
                        "2.8 Información descuento afiliado",
                        "2.9 Factor por Millón",
                        "2.10 ¿Cómo descargo los informes?",
                        "2.11 Planilla de novedades",
                        "3.1 Bloqueo por pago extemporáneo",
                        "3.2 Bloqueo por vinculación",
                        "3.3 Bloqueo de cuenta",
                        "3.4 Operación no aplicada",
                        "3.5 Descuento en cola",
                        "3.6 Bloqueo por un Administrador",
                        "3.7 Bloqueo por Pagaduría",
                        "4.1 ¿Cuál es mi código de descuento?",
                        "4.2 Cuando me realizan el pago",
                        "4.3 Actualización de datos",
                        "4.4 Actualización código de descuento",
                        "5.1 Error al validar información, error plataforma, error 403 etc…",
                        "5.2 No deja visualizar la Libranza",
                        "5.3 No me llega código OTP",
                        "5.4 No coinciden valores de libranza con el préstamo",
                        "5.5 Inconsistencias validar operaciones"
                    ]
                },
                {
                    title: 'Observaciones',
                    type: 'textarea'
                },
            ],

        },
        Gobernacion: {
            config: {
                backgroundImage: require('../../img/LOGO-FONDO-DE-PASIVO-SOCIAL-768x192.png'),
                title: "Gobernacion",
                text: ["Le recuerdo nuestro punto de atención presencial se encuentra ubicado en la Cll 19 No 14 21 en la ciudad de Bogotá los días martes y jueves en los horarios de 8:00 am a 4:30 pm.", " Recuerde que hablo con ------ muchas gracias por comunicarse con nosotros.", " Por último, le voy a enviar una breve encuesta para que califique el servicio de atención brindado en la llamada."],
            },
            data: [
                {
                    title: 'Tipo de Gestión',
                    type: 'list',
                    options: ['LLAMADA ENTRANTE', 'LLAMADA SALIENTE', 'LLAMADA WEB', 'VIDEO LLAMADA', 'SALIENTE WEB'],
                },
                {
                    title: 'Nombre del Cliente',
                    type: 'text'
                },
                {
                    title: 'Tipo de Identificación',
                    type: 'text'
                },
                {
                    title: 'Numero de Identificación',
                    type: 'text'
                },
                {
                    title: 'Celular Actualizado',
                    type: 'text'
                },
                {
                    title: 'Correo',
                    type: 'list'
                },
                {
                    title: 'Solución en el primer Contacto',
                    type: 'list',
                    options: ['SI', 'NO']
                },
                {
                    title: 'Pagaduria -v',
                    type: 'list',
                    options: ['GOBERNACIÓN DE CUNDINAMARCA', 'UNIDAD DE PENSIONADOS']
                },
                {
                    title: 'Motivo Consulta',
                    type: 'list',
                    options: [
                        "1. Usuario y contraseña",
                        "2. Solicitud e información de crédito",
                        "3. BLOQUEOS",
                        "4. Solicitudes Exclusivas otras pagadurías",
                        "5. INCONSISTENCIA",
                        "6. Olvido de contraseña",
                        "7. ¿Cómo realizo el pago de la factura?",
                        "8. ¿Cuándo abre y cierra nuevamente la plataforma?",
                        "9. ¿Cómo registrar un afiliado en la plataforma?",
                        "10. Llamada caída",
                        "11. Devolución de llamada",
                        "12. Que es Dibanka- Link de ingreso",
                        "13. Llamada de asesora de banco",
                        "14. Operador interesado en nuestros productos"
                    ]
                },
                {
                    title: 'Motivo Especifico',
                    type: 'list',
                    options: [
                        "1.1 No me llega usuario y contraseña (Operador nuevo)",
                        "1.2 ¿Qué documentos solicitan para registrarse en la plataforma?",
                        "1.3 ¿Con qué usuario ingreso a la plataforma?",
                        "1.4 Asesoría de creación de funcionario",
                        "1.5 Enrolado efectivo",
                        "2.1 ¿Cómo solicita un crédito el afiliado?",
                        "2.2 ¿Cómo retiro o modifico un descuento?",
                        "2.3 ¿Cómo apruebo o rechazo una solicitud de crédito?",
                        "2.4 Información bajo monto",
                        "2.5 Nuevas funcionalidades de la plataforma",
                        "2.6 Continuidad de descuento",
                        "2.7 Casos planillas novedades- Cargue masivo",
                        "2.8 Información descuento afiliado",
                        "2.9 Factor por Millón",
                        "2.10 ¿Cómo descargo los informes?",
                        "2.11 Planilla de novedades",
                        "3.1 Bloqueo por pago extemporáneo",
                        "3.2 Bloqueo por vinculación",
                        "3.3 Bloqueo de cuenta",
                        "3.4 Operación no aplicada",
                        "3.5 Descuento en cola",
                        "3.6 Bloqueo por un Administrador",
                        "3.7 Bloqueo por Pagaduría",
                        "4.1 ¿Cuál es mi código de descuento?",
                        "4.2 Cuando me realizan el pago",
                        "4.3 Actualización de datos",
                        "4.4 Actualización código de descuento",
                        "5.1 Error al validar información, error plataforma, error 403 etc…",
                        "5.2 No deja visualizar la Libranza",
                        "5.3 No me llega código OTP",
                        "5.4 No coinciden valores de libranza con el préstamo",
                        "5.5 Inconsistencias validar operaciones"
                    ]
                },                
                {
                    title: 'Observaciones',
                    type: 'textarea'
                },
            ],

        },
        Educame: {
            config: {
                backgroundImage: require('../../img/LOGO-FONDO-DE-PASIVO-SOCIAL-768x192.png'),
                title: "Educame",
                text: ["Le recuerdo nuestro punto de atención presencial se encuentra ubicado en la Cll 19 No 14 21 en la ciudad de Bogotá los días martes y jueves en los horarios de 8:00 am a 4:30 pm.", " Recuerde que hablo con ------ muchas gracias por comunicarse con nosotros.", " Por último, le voy a enviar una breve encuesta para que califique el servicio de atención brindado en la llamada."],
            },
            data: [
                {
                    title: 'Tipo de Gestión',
                    type: 'list',
                    options: ['LLAMADA ENTRANTE', 'LLAMADA SALIENTE'],
                },
                {
                    title: 'Nombre del Cliente',
                    type: 'text'
                },
                {
                    title: 'Tipo de Identificación',
                    type: 'text'
                },
                {
                    title: 'Numero de Identificación',
                    type: 'text'
                },
                {
                    title: 'Celular Actualizado',
                    type: 'text'
                },
                {
                    title: 'Correo',
                    type: 'list'
                },
                {
                    title: 'Solución en el primer Contacto',
                    type: 'list',
                    options: ['SI', 'NO']
                },
                {
                    title: 'Motivo Consulta',
                    type: 'list',
                    options: [
                        "1. Usuario y contraseña",
                        "2. Solicitud e información de crédito",
                        "3. BLOQUEOS",
                        "4. Solicitudes Exclusivas otras pagadurías",
                        "5. INCONSISTENCIA",
                        "6. Olvido de contraseña",
                        "7. ¿Cómo realizo el pago de la factura?",
                        "8. ¿Cuándo abre y cierra nuevamente la plataforma?",
                        "9. ¿Cómo registrar un afiliado en la plataforma?",
                        "10. Llamada caída",
                        "11. Devolución de llamada",
                        "12. Que es Dibanka- Link de ingreso",
                        "13. Llamada de asesora de banco",
                        "14. Operador interesado en nuestros productos"
                    ]
                },
                {
                    title: 'Motivo Especifico',
                    type: 'list',
                    options: [
                        "1.1 No me llega usuario y contraseña (Operador nuevo)",
                        "1.2 ¿Qué documentos solicitan para registrarse en la plataforma?",
                        "1.3 ¿Con qué usuario ingreso a la plataforma?",
                        "1.4 Asesoría de creación de funcionario",
                        "1.5 Enrolado efectivo",
                        "2.1 ¿Cómo solicita un crédito el afiliado?",
                        "2.2 ¿Cómo retiro o modifico un descuento?",
                        "2.3 ¿Cómo apruebo o rechazo una solicitud de crédito?",
                        "2.4 Información bajo monto",
                        "2.5 Nuevas funcionalidades de la plataforma",
                        "2.6 Continuidad de descuento",
                        "2.7 Casos planillas novedades- Cargue masivo",
                        "2.8 Información descuento afiliado",
                        "2.9 Factor por Millón",
                        "2.10 ¿Cómo descargo los informes?",
                        "2.11 Planilla de novedades",
                        "3.1 Bloqueo por pago extemporáneo",
                        "3.2 Bloqueo por vinculación",
                        "3.3 Bloqueo de cuenta",
                        "3.4 Operación no aplicada",
                        "3.5 Descuento en cola",
                        "3.6 Bloqueo por un Administrador",
                        "3.7 Bloqueo por Pagaduría",
                        "4.1 ¿Cuál es mi código de descuento?",
                        "4.2 Cuando me realizan el pago",
                        "4.3 Actualización de datos",
                        "4.4 Actualización código de descuento",
                        "5.1 Error al validar información, error plataforma, error 403 etc…",
                        "5.2 No deja visualizar la Libranza",
                        "5.3 No me llega código OTP",
                        "5.4 No coinciden valores de libranza con el préstamo",
                        "5.5 Inconsistencias validar operaciones"
                    ]
                },                
                {
                    title: 'Observaciones',
                    type: 'textarea'
                },
            ],

        },
    },
    Afiliados: {
        Casur: {
            config: {
                backgroundImage: require('../../img/logo-casur.png'),
                title: "Casur",
                text: ["Le recuerdo nuestro punto de atención presencial en la cr 7 séptima con calle 12 b 58 en la ciudad de Bogotá en los horarios de 7:30 am a 4:00 pm. Y Un botón de asesoría que puede encontrar en la página web portal DiBanka.", "Recuerde que hablo con ------ muchas gracias por comunicarse con nosotros.", "Por último, le voy a enviar una breve encuesta para que califique el servicio de atención brindado en la llamada, en la cual la máxima calificación es 5."],
            },
            data: [
                {
                    title: 'Tipo de Gestión',
                    type: 'list',
                    options: ['LLAMADA ENTRANTE', 'LLAMADA SALIENTE', 'LLAMADA WEB', 'VIDEOLLAMADA', 'OPERADORES VIP', 'OPERADORES VIP SALIENTE', 'SALIENTE WEB'],
                },
                {
                    title: 'Nombre del Cliente',
                    type: 'text'
                },
                {
                    title: 'Tipo de Identificación',
                    type: 'text'
                },
                {
                    title: 'Numero de Identificación',
                    type: 'text'
                },
                {
                    title: 'Celular Actualizado',
                    type: 'text'
                },
                {
                    title: 'Correo',
                    type: 'list'
                },
                {
                    title: 'Solución en el primer Contacto',
                    type: 'list',
                    options: ['SI', 'NO']
                },
                {
                    title: 'Motivo Consulta',
                    type: 'list',
                    options: [
                        "1. Usuario y Contraseña",
                        "2. Solicitud e Información de Crédito",
                        "3. Bloqueos",
                        "4. Solicitudes exclusivas de las pagadurías",
                        "5. Inconsistencias",
                        "6. Solicitud de documentos",
                        "7. Capacidad de Endeudamiento",
                        "8. Olvido usuario y contraseña",
                        "9. Cuando abre y cierra nuevamente la plataforma",
                        "10. Llamada caída",
                        "11. Llamada errada- llamada prueba",
                        "12. Se contacta un tercero",
                        "13. Llamada de Policía Activo",
                        "14. Desactivar mi cuenta",
                        "15. Afiliado devuelve llamada",
                        "16. Afiliados de Tejen",
                        "17. Que es Dibanka - Link de ingreso",
                        "18. Devolución de llamada. (solo llamadas salientes)",
                        "19. Me llegan códigos de Dibanka no solicitados",
                        "20. Desbloqueado por seguridad (afiliado fue desbloqueado, pero no se enrola en la llamada)",
                        "21. Anuncio (Dibanka no se encuentra sometida)",
                        "22. llamada de pensionado Casur"
                    ]
                },
                {
                    title: 'Motivo Específico',
                    type: 'list',
                    options: [
                        "1.1 Solicitud de Usuario y Contraseña",
                        "1.2 Quiero saber si ya estoy enrolado",
                        "1.3 Enrolado efectivo",
                        "2.1 ¿Cómo solicito un Crédito, qué trámite debo hacer?",
                        "2.2 ¿Quiero saber estado de mi solicitud de Crédito?",
                        "2.3 Mi crédito no aparece en la plataforma",
                        "2.4 Como rechazo o modifico mi crédito",
                        "2.5 Firma electrónica",
                        "2.6 Asesoría para tomarse foto (Solicitud de crédito)",
                        "2.7 Porque no registra el banco que necesito? - Información Entidad",
                        "2.8 Como paso mi crédito a descuento por nomina",
                        "2.9 Cuando quitan mi crédito de plataforma",
                        "2.10 Me están descontando un valor diferente en mi nomina",
                        "2.11 Deseo saber si un aliado se encuentra registrado en la plataforma",
                        "2.12 Casos Continuidad de Descuento",
                        "2.13 ¿Cómo paso mi crédito de nómina a pago por ventanilla?",
                        "2.14 Quiero hacer abono a capital. ¿Qué debo hacer?",
                        "2.15 Banco me está descontando y cobrando dinero adicional.",
                        "2.16 Solicitud de crédito rápido (Bajo Monto)",
                        "2.17 ¿Dónde puedo enviar una queja a operador?",
                        "3.1 Bloqueo por intentos fallidos",
                        "3.2 Bloqueo por inicio de sesión en otro dispositivo",
                        "3.3 Anulación de proceso (Bloqueo de seguridad)",
                        "3.4 Descuento en cola",
                        "3.5 Operación no aplicada",
                        "3.6 Bloqueo menor de edad",
                        "3.7 Nuevo ingreso (cuando me desbloquean por pagaduría en transición)",
                        "4.1 Consulta de línea de Casur",
                        "4.2 ¿Cómo activo el correo institucional?",
                        "4.3 Dónde actualizo mi número celular y datos",
                        "4.4 Donde descargo mi desprendible de nomina",
                        "4.5 Embargos y otros referentes a nomina",
                        "4.6 ¿Quiero saber si mis datos están actualizados?",
                        "5.1 No deja tomar la foto",
                        "5.2 No me llega código OTP",
                        "5.3 Error al validar información, error 500, error 400 etc",
                        "5.4 Libranza Errónea.",
                        "6.1 Solicitud de certificaciones, documentos (paz y salvo, deuda, plan de pago)",
                        "6.2 Como subo mis certificados en la plataforma, documentos etc",
                        "7.1 Me cambió el cupo en plataforma",
                        "7.2 Quiero saber cuál es mi cupo disponible"
                    ]
                }, 
                {
                    title: 'Observaciones',
                    type: 'textarea'
                },
            ]
        },
        FPS: {
            config: {
                backgroundImage: require('../../img/LOGO-FONDO-DE-PASIVO-SOCIAL-768x192.png'),
                title: "FPS",
                text: ["Le recuerdo nuestro punto de atención presencial se encuentra ubicado en la Cll 19 No 14 21 en la ciudad de Bogotá los días martes y jueves en los horarios de 8:00 am a 4:30 pm.", " Recuerde que hablo con ------ muchas gracias por comunicarse con nosotros.", " Por último, le voy a enviar una breve encuesta para que califique el servicio de atención brindado en la llamada."],
            },
            data: [
                {
                    title: 'Tipo de Gestión',
                    type: 'list',
                    options: ['LLAMADA ENTRANTE', 'LLAMADA SALIENTE'],
                },
                {
                    title: 'Nombre del Cliente',
                    type: 'text'
                },
                {
                    title: 'Tipo de Identificación',
                    type: 'text'
                },
                {
                    title: 'Numero de Identificación',
                    type: 'text'
                },
                {
                    title: 'Celular Actualizado',
                    type: 'text'
                },
                {
                    title: 'Tiene Correo Electronico?',
                    type: 'list',
                    options: ['SI', 'NO']
                },
                {
                    title: 'Correo Electronico',
                    type: 'list'
                },
                {
                    title: 'Solución en el primer Contacto',
                    type: 'list',
                    options: ['SI', 'NO']
                },
                {
                    title: 'Motivo Consulta',
                    type: 'list',
                    options: [
                        "1. Usuario y Contraseña",
                        "2. Solicitud e Información de Crédito",
                        "3. Bloqueos",
                        "4. Solicitudes exclusivas de las pagadurías",
                        "5. Inconsistencias",
                        "6. Solicitud de documentos",
                        "7. Capacidad de Endeudamiento",
                        "8. Olvido usuario y contraseña",
                        "9. ¿Cuándo abre y cierra nuevamente la plataforma?",
                        "10. Llamada caída",
                        "11. Llamada errada",
                        "12. Bloqueo de cuenta petición afiliado",
                        "13. ¿Cuál es el link de ingreso para DiBanka? - ¿Qué es DiBanka?",
                        "14. Devolución de llamada. (solo llamadas salientes)",
                        "15. Me llegan códigos de Dibanka no solicitados",
                        "16. Anuncio (Dibanka no se encuentra sometida)",
                        "17. Afiliado devuelve llamada",
                        "18. Afiliados San Juan de Dios"
                    ]
                },
                {
                    title: 'Motivo Específico',
                    type: 'list',
                    options: [
                        "1.1 Solicitud de Usuario y Contraseña",
                        "1.2 Quiero saber si ya estoy enrolado",
                        "1.3 Enrolado efectivo",
                        "2.1 ¿Cómo solicito un Crédito, qué trámite debo hacer?",
                        "2.2 ¿Quiero saber estado de mi solicitud de Crédito?",
                        "2.3 Mi crédito no aparece en la plataforma",
                        "2.4 Como rechazo o modifico mi crédito",
                        "2.5 Firma electrónica",
                        "2.6 Asesoría para tomarse foto (Solicitud de crédito)",
                        "2.7 Porque no registra el banco que necesito? - Información Entidad",
                        "2.8 ¿Cómo paso mi crédito a descuento por nómina?",
                        "2.9 ¿Cuándo me liberan o retiran mi crédito de plataforma?",
                        "2.10 Me están descontando un valor diferente en mi nómina",
                        "2.11 ¿Deseo saber si un aliado se encuentra registrado en la plataforma?",
                        "2.12 Casos Continuidad de Descuento",
                        "2.13 ¿Cómo paso mi crédito de nómina a pago por ventanilla?",
                        "2.14 Quiero hacer abono a capital. ¿Qué debo hacer?",
                        "2.15 Banco me está descontando y cobrando dinero adicional.",
                        "2.16 Solicitud de crédito rápido (Bajo Monto)",
                        "2.17 ¿Dónde puedo enviar una queja a operador?",
                        "3.1 Bloqueo por intentos fallidos",
                        "3.2 Bloqueo por inicio de sesión en otro dispositivo",
                        "3.3 Bloqueo de seguridad",
                        "3.4 Descuento en cola",
                        "3.5 Operación no aplicada",
                        "3.6 Bloqueo Representante legal",
                        "4.1 Consulta de línea de Fondo Pasivo Social",
                        "4.2 ¿Dónde actualizo mis datos y número celular?",
                        "4.3 ¿Dónde descargo mi desprendible de nómina?",
                        "4.4 Embargos y otros referentes a nómina",
                        "4.5 ¿Quiero saber si mis datos están actualizados?",
                        "5.1 No deja tomar la foto",
                        "5.2 No me llega código OTP",
                        "5.3 Error al validar información, error plataforma, error 403 etc.",
                        "5.4 Libranza Errónea.",
                        "6.1 Documentos solicitados a los aliados",
                        "6.2 ¿Cómo subo mis certificados en la plataforma, documentos, etc.?",
                        "7.1 Cambio el cupo en la plataforma",
                        "7.2 Quiero saber cuál es mi cupo disponible"
                    ]
                },
                {
                    title: 'Observaciones',
                    type: 'textarea'
                },
            ],

        },
        Gobernacion: {
            config: {
                backgroundImage: require('../../img/LOGO-FONDO-DE-PASIVO-SOCIAL-768x192.png'),
                title: "Gobernacion",
                text: ["Le recuerdo nuestro punto de atención presencial se encuentra ubicado en la Cll 19 No 14 21 en la ciudad de Bogotá los días martes y jueves en los horarios de 8:00 am a 4:30 pm.", " Recuerde que hablo con ------ muchas gracias por comunicarse con nosotros.", " Por último, le voy a enviar una breve encuesta para que califique el servicio de atención brindado en la llamada."],
            },
            data: [
                {
                    title: 'Tipo de Gestión',
                    type: 'list',
                    options: ['LLAMADA ENTRANTE', 'LLAMADA SALIENTE', 'LLAMADA WEB', 'VIDEO LLAMADA', 'SALIENTE WEB'],
                },
                {
                    title: 'Nombre del Cliente',
                    type: 'text'
                },
                {
                    title: 'Tipo de Identificación',
                    type: 'text'
                },
                {
                    title: 'Numero de Identificación',
                    type: 'text'
                },
                {
                    title: 'Celular Actualizado',
                    type: 'text'
                },
                {
                    title: 'Correo Institucional',
                    type: 'list'
                },
                {
                    title: 'Solución en el primer Contacto',
                    type: 'list',
                    options: ['SI', 'NO']
                },
                {
                    title: 'Pagaduria -v',
                    type: 'list',
                    options: ['GOBERNACIÓN DE CUNDINAMARCA', 'UNIDAD DE PENSIONADOS']
                },
                {
                    title: 'Motivo Consulta',
                    type: 'list',
                    options: [
                        "1. Usuario y Contraseña",
                        "2. Solicitud e Información de Crédito",
                        "3. Bloqueos",
                        "4. Solicitudes exclusivas de las pagadurías",
                        "5. Inconsistencias",
                        "6. Solicitud de documentos",
                        "7. Capacidad de Endeudamiento",
                        "8. Olvido usuario y contraseña",
                        "9. Cuando abre y cierra nuevamente la plataforma",
                        "10. Llamada caída",
                        "11. Desactivar mi cuenta",
                        "12. Que es Dibanka - Link de ingreso",
                        "13. Devolución de llamada. (solo llamadas salientes)",
                        "14. Me llegan códigos de Dibanka no solicitados",
                        "15. Anuncio (Dibanka no se encuentra sometida)"
                    ]
                },
                {
                    title: 'Motivo Específico',
                    type: 'list',
                    options: [
                        "1.1 Solicitud de Usuario y Contraseña",
                        "1.2 Quiero saber si ya estoy enrolado",
                        "1.3 Enrolado efectivo",
                        "2.1 ¿Cómo solicito un Crédito, qué trámite debo hacer?",
                        "2.2 ¿Quiero saber estado de mi solicitud de Crédito?",
                        "2.3 Mi crédito no aparece en la plataforma",
                        "2.4 Como rechazo o modifico mi crédito",
                        "2.5 Firma electrónica",
                        "2.6 Asesoría para tomarse foto (Solicitud de crédito)",
                        "2.7 Porque no registra el banco que necesito? - Información Entidad",
                        "2.8 ¿Cómo paso mi crédito a descuento por nómina?",
                        "2.9 Cuando quitan mi crédito de plataforma",
                        "2.10 Me están descontando un valor diferente en mi nómina",
                        "2.11 Deseo saber si un aliado se encuentra registrado en la plataforma",
                        "2.12 Casos Continuidad de Descuento",
                        "2.13 ¿Cómo paso mi crédito de nómina a pago por ventanilla?",
                        "2.14 Quiero hacer abono a capital. ¿Qué debo hacer?",
                        "2.15 Banco me está descontando y cobrando dinero adicional",
                        "2.16 Solicitud de crédito rápido (Bajo Monto)",
                        "2.17 ¿Dónde puedo enviar una queja a operador?",
                        "3.1 Bloqueo por intentos fallidos",
                        "3.2 Bloqueo por inicio de sesión en otro dispositivo",
                        "3.3 Anulación de proceso (Bloqueo de seguridad)",
                        "3.4 Descuento en cola",
                        "3.5 Operación no aplicada",
                        "4.1 Dónde actualizo mi número celular y datos",
                        "4.2 Donde descargo mi desprendible de nómina",
                        "4.3 Embargos y otros referentes a nómina",
                        "4.4 ¿Quiero saber si mis datos están actualizados?",
                        "5.1 No deja tomar la foto",
                        "5.2 No me llega código OTP",
                        "5.3 Error al validar información, error 500, error 400 etc",
                        "5.4 Libranza Errónea",
                        "6.1 Solicitud de certificaciones, documentos (paz y salvo, deuda, plan de pago)",
                        "6.2 Como subo mis certificados en la plataforma, documentos etc",
                        "7.1 Me cambio el cupo en plataforma",
                        "7.2 Quiero saber cuál es mi cupo disponible"
                    ]
                },                
                {
                    title: 'Observaciones',
                    type: 'textarea'
                },
            ],

        },
        Educame: {
            config: {
                backgroundImage: require('../../img/LOGO-FONDO-DE-PASIVO-SOCIAL-768x192.png'),
                title: "Educame",
                text: ["Le recuerdo nuestro punto de atención presencial se encuentra ubicado en la Cll 19 No 14 21 en la ciudad de Bogotá los días martes y jueves en los horarios de 8:00 am a 4:30 pm.", " Recuerde que hablo con ------ muchas gracias por comunicarse con nosotros.", " Por último, le voy a enviar una breve encuesta para que califique el servicio de atención brindado en la llamada."],
            },
            data: [
                {
                    title: 'Tipo de Gestión',
                    type: 'list',
                    options: ['LLAMADA ENTRANTE', 'LLAMADA SALIENTE', 'LLAMADA WEB', 'VIDEO LLAMADA', 'SALIENTE WEB'],
                },
                {
                    title: 'Nombre del Cliente',
                    type: 'text'
                },
                {
                    title: 'Tipo de Identificación',
                    type: 'text'
                },
                {
                    title: 'Numero de Identificación',
                    type: 'text'
                },
                {
                    title: 'Celular Actualizado',
                    type: 'text'
                },
                {
                    title: 'Correo Institucional',
                    type: 'list'
                },
                {
                    title: 'Solución en el primer Contacto',
                    type: 'list',
                    options: ['SI', 'NO']
                },
                {
                    title: 'Motivo Consulta',
                    type: 'list',
                    options: [
                        "1. Usuario y Contraseña",
                        "2. Solicitud e Información de Crédito",
                        "3. Bloqueos",
                        "4. Solicitudes exclusivas de las pagadurías",
                        "5. Inconsistencias",
                        "6. Solicitud de documentos",
                        "7. Capacidad de Endeudamiento",
                        "8. Olvido usuario y contraseña",
                        "9. Cuando abre y cierra nuevamente la plataforma",
                        "10. Llamada caída",
                        "11. Desactivar mi cuenta",
                        "12. Que es Dibanka - Link de ingreso",
                        "13. Devolución de llamada. (solo llamadas salientes)",
                        "14. Me llegan códigos de Dibanka no solicitados",
                        "15. Anuncio (Dibanka no se encuentra sometida)"
                    ]
                },
                {
                    title: 'Motivo Específico',
                    type: 'list',
                    options: [
                        "1.1 Solicitud de Usuario y Contraseña",
                        "1.2 Quiero saber si ya estoy enrolado",
                        "1.3 Enrolado efectivo",
                        "2.1 ¿Cómo solicito un Crédito, qué trámite debo hacer?",
                        "2.2 ¿Quiero saber estado de mi solicitud de Crédito?",
                        "2.3 Mi crédito no aparece en la plataforma",
                        "2.4 Como rechazo o modifico mi crédito",
                        "2.5 Firma electrónica",
                        "2.6 Asesoría para tomarse foto (Solicitud de crédito)",
                        "2.7 Porque no registra el banco que necesito? - Información Entidad",
                        "2.8 ¿Cómo paso mi crédito a descuento por nómina?",
                        "2.9 Cuando quitan mi crédito de plataforma",
                        "2.10 Me están descontando un valor diferente en mi nómina",
                        "2.11 Deseo saber si un aliado se encuentra registrado en la plataforma",
                        "2.12 Casos Continuidad de Descuento",
                        "2.13 ¿Cómo paso mi crédito de nómina a pago por ventanilla?",
                        "2.14 Quiero hacer abono a capital. ¿Qué debo hacer?",
                        "2.15 Banco me está descontando y cobrando dinero adicional",
                        "2.16 Solicitud de crédito rápido (Bajo Monto)",
                        "2.17 ¿Dónde puedo enviar una queja a operador?",
                        "3.1 Bloqueo por intentos fallidos",
                        "3.2 Bloqueo por inicio de sesión en otro dispositivo",
                        "3.3 Anulación de proceso (Bloqueo de seguridad)",
                        "3.4 Descuento en cola",
                        "3.5 Operación no aplicada",
                        "4.1 Dónde actualizo mi número celular y datos",
                        "4.2 Donde descargo mi desprendible de nómina",
                        "4.3 Embargos y otros referentes a nómina",
                        "4.4 ¿Quiero saber si mis datos están actualizados?",
                        "5.1 No deja tomar la foto",
                        "5.2 No me llega código OTP",
                        "5.3 Error al validar información, error 500, error 400 etc",
                        "5.4 Libranza Errónea",
                        "6.1 Solicitud de certificaciones, documentos (paz y salvo, deuda, plan de pago)",
                        "6.2 Como subo mis certificados en la plataforma, documentos, etc.",
                        "7.1 Me cambio el cupo en plataforma",
                        "7.2 Quiero saber cuál es mi cupo disponible"
                    ]
                },                
                {
                    title: 'Observaciones',
                    type: 'textarea'
                },
            ],

        },
    }
};

export default formData;





