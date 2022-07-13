<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Amenazas cibernéticas en IoT
    
    .row.mb-5
      .col-md-3
        figure
          img(src="@/assets/curso/temas/tema1/img1.png" data-aos="zoom-in-up")
      .col-md-9
        p.mt-5(data-aos="fade-in") El IoT brinda un millar de beneficios, sin embargo, es bien importante generar confianza a los usuarios de IoT para que se sientan seguros y puedan controlar y obtener información de sus dispositivos conectados. Los desarrolladores de IoT deben preocuparse por proteger los dispositivos, autorizar y autenticarlos, actualizar los dispositivos en la medida de lo posible, asegurar la comunicación, garantizar la seguridad y privacidad de los datos, proteger las aplicaciones en la nube que se comunicaran con los dispositivos IoT, etc.

    .row.mb-5
      .col-12
        p(data-aos="fade-in") #[strong Dispositivos IoT vulnerables]
        p.mt-2(data-aos="fade-in") Cualquier dispositivo conectado a internet puede ser utilizado para el montaje de ataques contra cualquier tipo de destino y servicio de internet así como a las redes internas. 


    .row(data-aos="zoom-in").mb-5
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span Conexión IoT

        figure.mb-4
          img(src="@/assets/curso/temas/tema1/img2.png", alt="alt")

   
    .row.mb-4
        .col-12
          p(data-aos="fade-in") A continuación, se presentan algunos dispositivos IoT vulnerables a ataques informáticos:

    .row.mb-5.bg-accord-cus(
            :style="{'background-repeat': 'no-repeat','background-image': `url(${require('@/assets/curso/temas/tema1/bg1.svg')})`}"
          )
        .col-8.offset-md-4
              AcordionA.mx-5.my-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
                .row.justify-content-center.align-items-center(titulo="Televisores modernos")
                  .col-2
                    figure
                      img(src='@/assets/curso/temas/tema1/imgA3.png', alt='')          
                  .col-8
                    p.mb-0 Televisores modernos, siempre están conectados, tienen cámara  y sensores de voz. 

                .row.justify-content-center.align-items-center(titulo="Cámaras IP")
                  .col-2
                    figure
                      img(src='@/assets/curso/temas/tema1/imgA4.png', alt='')          
                  .col-8
                    p.mb-0 Cámaras IP, pueden ser usadas por los cibercriminales para generar ataques de denegación de servicios.

                .row.justify-content-center.align-items-center(titulo="Impresoras")
                  .col-2
                    figure
                      img(src='@/assets/curso/temas/tema1/imgA5.png', alt='')          
                  .col-8
                    p.mb-0 Impresoras, son dispositivos vulnerables, porque carecen de la seguridad incorporada necesaria para contrarrestar las amenazas.

                .row.justify-content-center.align-items-center(titulo="Termostatos inteligentes")
                  .col-2
                    figure
                      img(src='@/assets/curso/temas/tema1/imgA6.png', alt='')          
                  .col-8
                    p.mb-0 Termostatos inteligentes, tienen fallos sin corregir y pueden ser la entrada de amenazas que comprometan nuestra red. 

                .row.justify-content-center.align-items-center(titulo="Reproductores de video")
                  .col-2
                    figure
                      img(src='@/assets/curso/temas/tema1/imgA7.png', alt='')          
                  .col-8
                    p.mb-0 Reproductores de video, son muy atacados por los piratas informáticos cuando detectan vulnerabilidades.

                .row.justify-content-center.align-items-center(titulo="Bombillas inteligentes")
                  .col-2
                    figure
                      img(src='@/assets/curso/temas/tema1/imgA8.png', alt='')          
                  .col-8
                    p.mb-0 Bombillas inteligentes, son atacados por ser dispositivos conectados a la red doméstica.
                 
    
    .row.mb-5
      .col-12
        p.mb-4 Muchos dispositivos #[strong IoT ] tienen capacidades limitadas de almacenamiento, memoria y procesamiento y requieren menos energía para funcionar; por ejemplo, cuando funcionan con baterías, luego se debe programar un cifrado y un descifrado en estos dispositivos y así es un poco más complejo para transmitir datos en forma segura.
        p.mb-4 En estos casos es conveniente hacer uso de múltiples capas de seguridad, poniéndolas, por ejemplo, en redes separadas y usar firewalls para balancear estas limitaciones.
        p.mb-5 Un ataque muy común es el ataque de canal lateral, el cual se basa en el hecho de que cuando operan los criptosistemas estos causan efectos físicos como:

    .row.mb-5
      .col-md-3.col-lg.mb-5.mb-lg-0.img-hover-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img10.png' alt='AvatarTop')
          .tarjeta.color-primario
            .p-3.text-center
              p La cantidad de energía que consume una operación.
      .col-md-3.col-lg.mb-5.mb-lg-0.img-hover-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img11.png' alt='AvatarTop')
          .tarjeta.color-primario
            .p-3.text-center
              p La cantidad de tiempo que lleva un proceso.
      .col-md-3.col-lg.mb-5.mb-lg-0.img-hover-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img12.png' alt='AvatarTop')
          .tarjeta.color-primario
            .p-3.text-center
              p El sonido que emite una operación.
      .col-md-3.col-lg.mb-5.mb-lg-0.img-hover-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img13.png' alt='AvatarTop')
          .tarjeta.color-primario
            .p-3.text-center
              p La radiación electromagnética filtrada por una operación.
    
    .row.my-5
      .col-12.my-5
        figure.my-5
          img(src="@/assets/curso/temas/tema1/img14.svg", alt="alt")  


    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-in")
      h2 1.1  Malware en IoT

    .gray--left.mb-4
      .row.justify-content-center.align-items-center.py-4   
        .col-lg-4.col-10
          figure
            img(src="@/assets/curso/temas/tema1/img16.png", alt="alt")
        .col-lg-8(data-aos="fade-in").mb-5.mb-lg-0                    
          p Una de las grandes amenazas de seguridad es el software malicioso o malware en IoT; aunque, y no menos importante entre otros programas de este tipo, están los troyanos, los gusanos y los ransomware. Por eso, el secuestro de computadores y portátiles es habitual para los usuarios y las empresas; sin embargo, los dispositivos IoT no almacenan información sensible, pero al cerrarlos sirve para realizar ataques que los pueden dejar inservibles. 
          p.mt-4 Existe el concepto ransomware de las cosas, cuyo objetivo principal son los dispositivos como hardware de autos o cualquier otro dispositivo conectado a internet, drones y cámaras de seguridad 
          p.mt-4 Es así como los peligros ocasionados por el ransomware pueden ser desastrosos, disruptivos o perjudiciales, propagándose a través de las redes e internet, comunicación inalámbrica como wifi o bluetooth.


    .row.mb-5
      .col-12
        figure.mt-3
          img(src="@/assets/curso/temas/tema1/img15.svg", alt="alt")  


    .row.mb-4
        .col-12
          p(data-aos="fade-in") Sabiendo esto, es momento de conocer algunos tipos de malware:

    .row.mb-5
        .col-12
          AcordionA.mt-2(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.justify-content-center.align-items-center(titulo="Virus informático")
              .col-7
                p.mb-0 Altera el funcionamiento de un dispositivo con la “ayuda e intervención” del usuario y se ejecuta cuando ha ingresado al computador, infectando los ficheros, tomando el control y su propagación daña seriamente el dispositivo. Estos virus o Malware viaja dentro de archivos ejecutables como los .exe de Windows, utilizando nombres de otras aplicaciones para engañar y lograr su cometido.
              .col-4
                figure
                  img(src='@/assets/curso/temas/tema1/img17.png', alt='').pl-20-cus     

            .row.justify-content-center.align-items-center(titulo="Gusano informático")
              .col-7
                p.mb-0 Se replica a sí mismo expandiéndose por las redes a las que están conectadas el equipo. De este modo, el gusano obtiene las direcciones de otros dispositivos a través de las  listas de contactos para enviarles archivos copias e infectarlos también.
              .col-4
                figure
                  img(src='@/assets/curso/temas/tema1/img18.png', alt='').pl-20-cus  
            
            .row.justify-content-center.align-items-center(titulo="Troyano")
              .col-7
                p.mb-0 Este tipo de virus aparenta ser un archivo legítimo para que al momento de ser ejecutado, obtenga las vulnerabilidades del computador o dispositivo y roba información sin que el usuario se entere. Se diferencia del virus o gusano informático por no propagarse a sí mismo.
              .col-4
                figure
                  img(src='@/assets/curso/temas/tema1/img19.png', alt='').pl-20-cus  

            .row.justify-content-center.align-items-center(titulo="Spyware")
              .col-7
                p.mb-0 Recolecta información del usuario en sus dispositivos sin autorización. Tiene la capacidad de instalarse por sí solo o a través de otras aplicaciones, monitorizando y recopilando datos sobre las acciones que se realizan en un equipo, disco duro, las aplicaciones instaladas o del historial de internet; es difícil detectarlo y también puede instalar otras aplicaciones. También es llamado espía.
              .col-4
                figure
                  img(src='@/assets/curso/temas/tema1/img20.png', alt='').pl-20-cus  

            .row.justify-content-center.align-items-center(titulo="Adware")
              .col-7
                p.mb-2 Este malware no daña los dispositivos, pero los invaden de publicidad. Obtiene información de las búsquedas realizadas en internet y se presenta en forma de pop-up (pantalla emergente).
                p  Es considerado un tipo de spyware, porque recolecta y envía datos personales.
              .col-4
                figure
                  img(src='@/assets/curso/temas/tema1/img21.png', alt='').pl-20-cus  

            .row.justify-content-center.align-items-center(titulo="Ransomware")
              .col-7
                p.mb-0 Este malware toma datos cifrándolos, ingresa en los dispositivos con la ayuda de gusanos informáticos o cualquier otro tipo de software malicioso y apenas ingresa bloquea el equipo, mostrando en la pantalla un mensaje #[strong “extorsivo”], informando sobre la presencia del malware y el método de pago que puede ser vía SMS, PayPal o bitcoins para eliminar su presencia y recuperar sus datos.
              .col-4
                figure
                  img(src='@/assets/curso/temas/tema1/img22.png', alt='').pl-20-cus  

    .row.mb-5
      .col-12
        p(data-aos="fade-in") En resumen, los ataques de ransomware son una amenaza muy peligrosa contra la tecnología operacional (OT) y los sistemas de control industrial (ICS), usados en empresas de alto nivel; son tan peligrosos estos ataques que están considerados como tal por la Agencia de Seguridad de Infraestructura y Ciberseguridad de Estados Unidos (CISA).
        p.mt-3.mb-5 Por ejemplo, un ataque con ransomware puede afectar cadenas de suministro afectando la producción o robando información tecnológica.



    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-in")
      h2 1.2 Ataques DDoS
    
    .row.mb-5
      .col-12
        p(data-aos="fade-in") Son aquellos ataques que se realizan en red y sus siglas significan Ataques de #[strong Denegación Distribuida de Servicio (DDoS)]. Este tipo de ataque se aprovecha de la infraestructura que habilita los sitios web y los límites de capacidad específicos que se aplican a cualquier recurso de red, enviando varias solicitudes al recurso web atacado, con la intención de desbordar la capacidad de atención del sitio, obligándolo a administrar varias solicitudes y evitando que este funcione correctamente.
        p.mt-3.mb-5 Los ataques más comunes de #[strong DDoS] a algunos sitios online son: 


    .row.mb-5
      .col-lg-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img25.png' alt='AvatarTop')
          .tarjeta.tarjeta--azul--claro.d-flex
            .d-flex.justify-content-center.align-items-center.mt-3
              p.text-bold Sitios de compra por internet.
      .col-lg-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img26.png' alt='AvatarTop')
          .tarjeta.tarjeta--azul--claro.d-flex
            .d-flex.justify-content-center.align-items-center.mt-3
              p.text-bold  Casinos en línea.
      .col-lg-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img27.png' alt='AvatarTop')
          .tarjeta.tarjeta--azul--claro.d-flex
            .d-flex.justify-content-center.align-items-center.mt-3
              p.text-bold  Cualquier empresa u organización que dependa de la prestación de servicios en línea.



    .gray--left.mb-4
      .row.justify-content-center.align-items-center.py-4   
        .col-lg-4.col-10
          figure
            img(src="@/assets/curso/temas/tema1/img23.png", alt="alt")
        .col-lg-8(data-aos="fade-in").mb-5.mb-lg-0                    
          p En el concepto de DDoS, entra la palabra botnet, que es una red conformada por equipos informáticos que han sido infectados con algún tipo de malware y que tiene el control de la información, obligando a enviar spam, propagando el virus o realizando ataques DDoS, sin el conocimiento o autorización de los usuarios propietarios reales de los dispositivos.
          p.mt-4 El botnet lo que hace es atacar usando DDoS enviando spam a los dispositivos, detecta contraseñas y distribuye ransomware. Este al ser un programa malicioso permite al cirberdelincuente tomar control del equipo afectado y es llamado también bot o programas zombies, dado que cumplen las órdenes de su amo; los bots toman el control del equipo, muchas veces sin que el propietario se dé cuenta de su presencia y realiza muchas tareas automatizadas.

    .row.mb-5
      .col-12
        p(data-aos="fade-in") Existen botnets compuestos por miles de objetos conectados a internet, los cuales tienen gran capacidad de generación de peticiones TCP/UDP suficiente para colapsar los recursos de cómputo de cualquier empresa. Una víctima en particular es sobrecargada con envíos de datos desde múltiples fuentes y como la víctima no es capaz de procesar tal cantidad de datos llegando al mismo tiempo, su sistema sufrirá caídas o parará de funcionar.
        p.mt-3.mb-5 Un ejemplo es un ataque sobre un número telefónico de una víctima, donde esta es bombardeada con llamadas telefónicas por los bots, intentando conectarse a internet.

    .row(data-aos="zoom-in").mb-5
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          span Bot teléfonos

        figure.mb-4
          img(src="@/assets/curso/temas/tema1/img24.png", alt="alt")

    .row.mb-5
      .col-12
        p(data-aos="fade-in") #[strong Funcionamiento de un ataque DDoS]
        p.mt-2(data-aos="fade-in") Cuando un negocio web sobrepasa los límites de capacidad de su infraestructura, debido a la cantidad de solicitudes, es muy probable que el nivel de servicio se vea afectado por alguna de las siguientes maneras:

    .row
      .col-12
        figure
          img(src="@/assets/curso/temas/tema1/img66.svg", alt="alt")
        .btn-hover-cus-1.py-3.px-4 1. Lenta respuesta a las solicitudes.
        .btn-hover-cus-2.py-3.px-4 2. Se ignoran las solicitudes de los usuarios.
        .btn-hover-cus-3.py-3.px-5 3. Se evita el funcionamiento <br>normal del recurso web.
        .btn-hover-cus-4.py-3.px-4 4. Extorsión cibernética.
        .btn-hover-cus-5.py-3.px-4 5. Desacreditación del negocio
        TarjetaAudio.color-adicional-4.btn-hover-cus-6(
          :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )


    .row.mb-2.mt-cus-fixed
      .col-12
        p Algunas formas de contrarrestar ataques con botnets, pueden ser:

    .row.mb-5
      .col-3   
        .py-4.bg-card.mx-1   
            .img-3.px-3.mt-4
              figure
                img(src="@/assets/curso/temas/tema1/img28.png", alt="alt")
            .text-12.px-3                   
              p.mt-3 Examinar las características de los dispositivos IoT antes de comprarlos fijándose que cumplan con estándares y protocolos de seguridad.
      .col-3      
          .py-4.bg-card.mx-1   
            .img-3.px-3.mt-4
              figure
                img(src="@/assets/curso/temas/tema1/img29.png", alt="alt")
            .text-12.px-3                 
              p.mt-3 Mantener inventariado todos los dispositivos IoT y sus ubicaciones.
      .col-3     
        .py-4.bg-card.mx-1   
            .img-3.px-3.mt-4
              figure
                img(src="@/assets/curso/temas/tema1/img30.png", alt="alt")
            .text-12.px-3                   
              p.mt-3 Desarrollar y ejecutar planes de administración y aseguramiento de dispositivos IoT, incluyendo en este plan la vida útil de todos los dispositivos.
      .col-3     
        .py-4.bg-card.mx-1    
            .img-3.px-3.mt-4
              figure
                img(src="@/assets/curso/temas/tema1/img31.png", alt="alt")
            .text-12.px-3                   
              p.mt-3 Realizar segmentación de la red aislando los dispositivos de IoT y evitar que ese dispositivo sea utilizado por piratas informáticos en los sistemas de la empresa.

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-in")
      h2 1.3 Contraseñas débiles o por defecto

    .gray--left.mb-4
      .row.justify-content-center.align-items-center.py-4   
        .col-lg-4.col-10
          figure
            img(src="@/assets/curso/temas/tema1/img32.png", alt="alt")
        .col-lg-8(data-aos="fade-in").mb-5.mb-lg-0                    
          p Muchas de las vulnerabilidades son ocasionadas por malas prácticas al momento de asignar contraseñas a los dispositivos, los fabricantes de dispositivos o sistemas generalmente dejan una contraseña por defecto, la cual es conveniente que los usuarios la cambien voluntariamente o de manera forzada.
          p.mt-4 Los ciberdelincuentes prueban combinaciones de contraseñas hasta acertar, comprometiendo el hardware para futuros ataques.
          p.mt-4 Se debe, entonces, tener políticas de contraseñas robustas considerando longitudes mínimas, varios tipos de caracteres, política de renovación de contraseñas en forma periódica y no usar contraseñas anteriormente definidas.


    .bloque-texto-a.color-secundario.p-2.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-2.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/tema1/img33.png", alt="alt")
        .col-10
          .p-4
            p Se recomienda la #[strong autenticación de dos factores (2FA)], que requiere que el usuario emplee una contraseña y otra forma de autenticación como un código aleatorio generado a través de mensajes de texto SMS. Para las aplicaciones IoT se recomienda el uso de autenticación sensible al contexto (CAA) o autenticación adaptativa, donde se reconoce el dispositivo desde el cual se realizan intentos de acceso a una cuenta o dirección IP, detectando en forma automática cuántos de esos intentos son de riesgo alto usando métodos como <i>machine learning</i>.
            

    .row.mb-2
      .col-12
        p Por lo anterior, es de suma importancia que conozca algunas formas de autenticación:
    

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0.p-5
            p.text-bold Autenticación de dos factores (2FA)
            p Se recomienda la autenticación de dos factores (2FA), que requiere que el usuario emplee una contraseña y otra forma de autenticación  como un código aleatorio generado a través de mensajes de texto SMS. 
        
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema1/img34.png", alt="alt")
        .row
          .col-md-6.mb-4.mb-md-0.p-5
            p.text-bold Autenticación sensible al contexto (CAA)
            p Para las aplicaciones IoT se recomienda el  uso de autenticación sensible al contexto (CAA) o autenticación adaptativa, donde se reconoce el dispositivo desde el cual se realizan intentos de acceso a una cuenta, dirección IP, detectando en forma automática  cuántos de esos intentos son de  riesgo alto usando métodos como  <i><b>Machine Learning</b></i>.
        
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema1/img37.png", alt="alt")
        
        .row
          .col-md-6.mb-4.mb-md-0.p-5
            p.text-bold Autenticación del par/usuario
            p El par usuario/contraseña sigue siendo la forma más extendida de autenticación.
            p.mt-1 El usuario nos identifica y le comunica al sistema quiénes somos.
            p.mt-1 La contraseña nos autentica, con la que se comprueba que realmente somos quienes decimos ser. 
        
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema1/img38.png", alt="alt")

        .row
          .col-md-6.mb-4.mb-md-0.p-5
            p.text-bold Autenticación de doble o triple factor
            p Con este par de datos, nos autenticamos con  #[strong “algo que conozco”] , también podemos autenticarnos con #[strong “algo que tengo”] como un token, USB o una tarjeta de coordenadas o #[strong “con algo que soy” ]como huellas, el iris de los ojos, nuestra voz o rostro; algunas entidades como los bancos lo hacen desde hace mucho tiempo,  esto es lo que se llama autenticación de doble o triple factor.
        
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema1/img39.png", alt="alt")


    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-in")
      h2 1.4 Comunicaciones sin cifrado

    .gray--left.mb-4
      .row.justify-content-center.align-items-center.py-4   
        .col-lg-4.col-10
          figure
            img(src="@/assets/curso/temas/tema1/img40.png", alt="alt")
        .col-lg-8(data-aos="fade-in").mb-5.mb-lg-0                    
          p Una debilidad grande es la transmisión de datos entre dos dispositivos IoT, estos continuamente están transmitiendo información de todo tipo entre ellos y hacia los aplicativos en la nube. La transmisión de datos es una parte primordial de los dispositivos IoT, ya que un atacante puede tener acceso a la red local en donde están los dispositivos y acceder a información, revisar o modificar; es por ello que este tipo de ataque se llama Hombre en el Medio (MitM - Man in the Middle), lo que puede llegar a ser peligroso para las empresas e incluso para la vida de las personas
          p.mt-2 En términos de integridad, protección y encriptación de datos, los dispositivos hardware y software necesitan proveer un nivel de seguridad mínimo; de otra forma no será difícil que un intruso acceda a la información y la intercambie; viendo de esta manera como los atacantes entonces tendrán nuestros datos privados, información de dispositivos y controlarán los mismos.


    .row.mb-5
      .col-12.d-flex.justify-content-center
        .card-basic.text-bold.px-6.py-4 Por un momento imaginemos que los intrusos puedan tomar el control del termostato en nuestro hogar, no pasaremos de un pequeño problema en nuestro confort personal, pero si el intruso toma el control de calefacción en un hospital o centro de salud, entonces los pacientes pueden estar en peligro.



    .row.mb-5
      .col-12
        p En comunicaciones cifradas se habla de protocolos SSL/TLS (Secure Sockets Layer) y (Transport Layer Security), estos protocolos permiten tener confianza al enviar información personal o privada a sitios web ocultando los datos, al usarse métodos de criptografía. Actualmente, esto es ampliamente usado en todos los sectores.
        p.mt-2 Es importante conocer algunos conceptos, como:



    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Cifrado, no encriptado")
        .row.mb-1
          .col-6
            h4 Cifrado, no encriptado
            p Cifrar es el proceso de transformar la información  para que nadie pueda entenderla, se cifra con base en un elemento único  conocido como llave, de este modo, a excepción del dueño de la información puede comprenderla.
          .col-6
            figure
              img(src="@/assets/curso/temas/tema1/img41.png", alt="alt")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Llave pública y llave privada")
        .row.mb-1
          .col-6
            h4 Llave pública y llave privada
            p Son un par de claves digitales asociadas a una persona o entidad  y son generadas por medio de métodos de criptografía.  La #[strong clave pública se usa para cifrar la información de forma sencilla] así como  la llave para asegurar  una puerta y mantener fuera a las personas; por otro lado, #[strong la llave privada  se usa para descifrar], es decir, la llave que abre la puerta y solo la posee la persona autorizada, por lo tanto, esta debe mantenerse en secreto.
          .col-6
            figure
              img(src="@/assets/curso/temas/tema1/img42.png", alt="alt")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Firma digital")
        .row.mb-1
          .col-6
            h4 Firma digital
            p Igual que cualquier firma, esta  nos identifica y nos distingue de otras personas y que cuando firmamos adquirimos derechos y obligaciones.  La firma digital se generará con base a la llave privada de quien firma y por lo tanto es única.
          .col-6
            figure
              img(src="@/assets/curso/temas/tema1/img43.png", alt="alt")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Autoridad Certificadora (AC)")
        .row.mb-1
          .col-6
            h4 Autoridad Certificadora (AC)
            p Una autoridad certificadora es una entidad confiable que se encarga de garantizar  que el dueño de un certificado digital sea quien dice ser, y brindando confianza a las partes que se comunican.
          .col-6
            figure
              img(src="@/assets/curso/temas/tema1/img45.png", alt="alt")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Certificado digital SSL/TLS")
        .row.mb-1
          .col-6
            h4 Certificado digital SSL/TLS
            p Este es un documento digital único que garantiza la relación entre una persona o entidad con su llave pública,  contiene información  del titular, como nombre, dirección, correo electrónico, empresa a la que pertenece y la clave pública del titular, fecha de caducidad, entidad emisora del certificado.
          .col-6
            figure
              img(src="@/assets/curso/temas/tema1/img44.png", alt="alt")
      .tarjeta.color-acento-botones--borde.p-4(titulo="HTTPS")
        .row.mb-1
          .col-6
            h4 HTTPS
            p Combina el protocolo HTTP con el protocolo SSL/TLS para establecer la comunicación cifrada.
          .col-6
            figure
              img(src="@/assets/curso/temas/tema1/img47.png", alt="alt")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Funcionamiento de SSL/TLS")
        .row.mb-1
          .col-6
            h4 Funcionamiento de SSL/TLS
            p Es una tecnología compleja, pero una vez entendidos los conceptos anteriores comprenderás el funcionamiento de este protocolo de forma general.
          .col-6
            figure
              img(src="@/assets/curso/temas/tema1/img46.png", alt="alt")

    .row(data-aos="zoom-in").mb-5
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3
          span Funcionamiento de SSL/TSL

        figure.mb-4
          img(src="@/assets/curso/temas/tema1/img48.svg", alt="alt")

    .row.mb-5
      .col-12
        p Retomando el último concepto expuesto y la imagen descrita, se puede ver que se hace referencia a un navegador que hace una petición al sitio seguro de Facebook; por ejemplo, este sitio envía un mensaje donde indica que va a establecer una conexión segura y sumnistra datos sobre la versión del protocolo SSL/TLS y otros parámetros para la conexión.

    .gray--left.mb-4
      .row.justify-content-center.align-items-center.py-4   
        .col-lg-4.col-10
          figure
            img(src="@/assets/curso/temas/tema1/img49.png", alt="alt")
        .col-lg-8(data-aos="fade-in").mb-5.mb-lg-0                    
          p El servidor web, en este caso el de Facebook, responde con un mensaje informando que está de acuerdo en establecer una comunicación segura con los datos SSL/TLS proporcionados. Una vez que los dos conocen sus datos de conexión el servidor de Facebook envía su certificado digital al navegador web para identificarse como un sitio confiable.
          p.mt-2.bg-cus-2 Cuando tiene el certificado del sitio web de Facebook, realiza varias validaciones antes de confiar en el sitio, revisa la integridad del certificado, verifica que el certificado se encuentre correcto, descifrando la firma digital incluida en él mediante la clave pública de la AC y comparándola con la firma del certificado generado a la hora de consumir el sitio.
          p.mt-2 Además, revisa la vigencia del certificado, fecha de emisión, fecha de expiración y el emisor del certificado, haciendo uso de una lista de certificados raíz almacenados en la computadora y que contienen las claves públicas de las AC conocidas y de confianza. Si el navegador detecta que el certificado tiene inconsistencias presenta una alarma con este mensaje; cuando pasa todo esto entonces se establece una conexión segura entre sitio web y página web de usuario y al mismo tiempo, se traduce en seguridad para enviar datos sensibles.


    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-in")
      h2 1.5 Vulnerabilidades web

    .gray--left.mb-4
      .row.justify-content-center.align-items-center.py-4   
        .col-lg-4.col-10
          figure
            img(src="@/assets/curso/temas/tema1/img50.png", alt="alt")
        .col-lg-8(data-aos="fade-in").mb-5.mb-lg-0                    
          p La forma más común como se interactúa con los dispositivos IoT es a través de aplicaciones web y bueno, es claro que es posible atacar una televisión con una inyección SQL o un XSS, por lo que es importante asegurar las interfaces de los usuarios como se hace con cualquier página web normal.
          p.mt-4 De aquí que es muy necesario seguir unas reglas sencillas pero fundamentales para evitar ataques a través de la web, como límites a intentos fallidos en el inicio de sesión de usuario, no almacenar datos sensibles innecesariamente y evitar fuga masiva de registros haciendo controles en los SQL

    .row.mb-5
      .col-12
        p Entre las vulnerabilidades más comunes tenemos:

    .row.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img51.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center
              figure
                  img(src="@/assets/curso/temas/tema1/img52.svg", alt="alt")
              h3.mt-5 Clickjacking
              p Se trata de engañar a la víctima creando links o botones invisibles detrás de links reales para secuestrar sus clicks. 
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img53.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center
              figure
                  img(src="@/assets/curso/temas/tema1/img54.svg", alt="alt")
              h3.mt-5 Cross Site Scripting (XSS)
              p El atacante crea un código malicioso dentro de las páginas  evitando que el usuario entre al sitio  real y realmente esté entrando a otro sitio (phishing).
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img57.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center
              figure
                  img(src="@/assets/curso/temas/tema1/img55.svg", alt="alt")
              h3.mt-5 Falsificación de solicitudes entre sitios CSRF
              p El atacante roba la identidad y los privilegios que tiene la víctima para poder realizar cosas que no haría el usuario normalmente.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img58.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center
              figure
                  img(src="@/assets/curso/temas/tema1/img56.svg", alt="alt")
              h3.mt-5 Ejecución remota de código
              p El atacante en este caso se aprovecha de los errores que pueda tener un sitio y así implantar un malware,  de esta forma el atacante tiene control absoluto sobre el sitio y, por tanto, sobre la entidad.

    .row.mb-5
      .col-12
        p Ahora bien, ya conociendo lo anterior, en el siguiente gráfico se presentarán algunos ataques cibernéticos registrados a lo largo del tiempo:


    LineaTiempoB.color-secundario.mb-5(:datos="datosLineaTiempoB")




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaFlip: true,
    mostrarIndicadorAudio: true,
    datosLineaTiempoB: [
      {
        titulo: '1982',
        texto:
          'Sucedió un ataque en Siberia a los sistemas computacionales para controlar la industria  y así se explotó el oleoducto, por causa de un software del tipo troyano, instalado en computadores que controlan la presión.',
        icono: require('@/assets/curso/temas/tema1/img60.png'),
      },
      {
        titulo: '2000',
        texto:
          'Un atacante  provoca daños ecológicos derramando aguas servidas e instalando  sistemas de control industrial, como exempleado de la compañía tenía  todas las contraseñas de acceso.',
        icono: require('@/assets/curso/temas/tema1/img61.png'),
      },
      {
        titulo: '2010',
        texto:
          'Se descubre un malware instalado en una planta nuclear en Irán,  este provocaba varias  daños en  centrífugas  nucleares.',
        icono: require('@/assets/curso/temas/tema1/img62.png'),
      },
      {
        titulo: '2015',
        texto:
          'Dos hackers lograron controlar remotamente un automóvil  Cherokee  mientras el dueño lo conducía.',
        icono: require('@/assets/curso/temas/tema1/img63.png'),
      },
      {
        titulo: '2017',
        texto:
          'Unos hackers robaron información de un casino en Las Vegas atacando  sensores de temperatura y calidad del agua en una pecera.',
        icono: require('@/assets/curso/temas/tema1/img64.png'),
      },
      {
        titulo: '2020',
        texto:
          'Un hacker expuso más de 500.000 credenciales de Telnet  y direcciones de IP de servidores, routers caseros y dispositivos inteligentes, usando nombres de usuario y contraseñas por defecto como password, así como también combinaciones de contraseña personalizadas pero fáciles de adivinar.',
        icono: require('@/assets/curso/temas/tema1/img65.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
