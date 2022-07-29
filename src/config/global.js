export default {
  global: {
    componenteFormativo: 'Fundamentos de seguridad digital',
    descripcionCurso:
      'Los fundamentos necesarios para diagnosticar el estado actual de la ciberseguridad en una organización, adoptando métodos de análisis y valoración de riesgos son fundamentales para definir un plan de tratamiento adecuado.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/icon1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/icon2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/icon3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/icon4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Amenazas cibernéticas en IoT',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Malware en IoT',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Ataques DDoS',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Contraseñas débiles o por defecto',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Comunicaciones sin cifrado',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Vulnerabilidades web',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estándares de la seguridad IoT',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'IBM. (2021). <i>Redes.</i>',
      link: 'https://www.ibm.com/co-es/cloud/learn/networking-a-complete-guide',
    },
    {
      referencia:
        'Oracle Corporation. (2010). <i>Modelo de referencia OSI (Guía de administración del sistema: servicios IP</i>',
      link: 'https://docs.oracle.com/cd/E19957-01/820-2981/ipov-8/index.html',
    },
    {
      referencia:
        'Rueda, R., J. S. (2021). El reto del desarrollo seguro de aplicaciones IoT en un mercado acelerado. <i>Revista Ingenio, 18(1), 54-61</i>',
      link: 'https://doi.org/10.22463/2011642x.2667',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría',
      significado:
        'actividad consistente en la emisión de una opinión profesional sobre si el objeto sometido a análisis representa adecuadamente la realidad que pretende reflejar o cumple con las condiciones que han sido acordadas en el nivel de servicio.',
    },
    {
      termino: 'Auditorías internas de SGSI',
      significado:
        'el objetivo primordial de este tipo de auditoría de SGSI es averiguar si hay algo que se está realizando mal, de manera objetiva. El auditor interno debe ser una persona capacitada y atenta a lo que está ocurriendo en la empresa, debe poder descubrir si algo se hace mal dentro de su empresa de trabajo. Si se realiza un buen trabajo, correctivo o preventivo, entonces la auditoría interna de SGSI mejorará su seguridad.',
    },
    {
      termino: 'Ciberseguridad',
      significado:
        'conjunto de metodologías, medidas y controles destinados a gestionar la seguridad de la información de una organización y/o de la información en general.',
    },
    {
      termino: 'Seguridad informática',
      significado:
        'disciplina que se ocupa de diseñar las normas, procedimientos, métodos y técnicas destinados a conseguir un sistema de información seguro y confiable.',
    },
  ],
  complementario: [
    {
      tema: '1.1 Malware en IoT',
      referencia:
        'CISA. (2021). <i>Rising ransomware threat to operational technology asserts</i>. https://www.cisa.gov/sites/default/files/publications/CISA_Fact_Sheet-Rising_Ransomware_Threat_to_OT_Assets_508C.pdf',
      tipo: 'Artículo',
      link:
        'https://www.cisa.gov/sites/default/files/publications/CISA_Fact_Sheet-Rising_Ransomware_Threat_to_OT_Assets_508C.pdf ',
    },
    {
      tema: '1.2 Ataques DDoS',
      referencia:
        'Incibe. (2017). <i>Dos mejor que uno: doble factor para acceder a servicios críticos</i>. https://www.incibe.es/protege-tu-empresa/blog/dos-mejor-uno-doble-factor-acceder-servicios-criticos',
      tipo: 'Artículo',
      link:
        'https://www.incibe.es/protege-tu-empresa/blog/dos-mejor-uno-doble-factor-acceder-servicios-criticos ',
    },
    {
      tema: '1.4 Comunicaciones sin cifrado',
      referencia:
        'Ramírez, L., D. O., y Espinosa, M., C. C (2018). <i>El cifrado web SSL/TLS</i>. https://revista.seguridad.unam.mx/numero-10/el-cifrado-web-ssltls',
      tipo: 'Artículo',
      link: 'https://revista.seguridad.unam.mx/numero-10/el-cifrado-web-ssltls',
    },
    {
      tema: '2. Estándares de la seguridad IoT',
      referencia:
        'ISO. (2018). <i>ISO/IEC 30141:20189.internet of Things (IoT)-Reference Architecture</i>. https://www.iso.org/standard/65695.html',
      tipo: 'Norma',
      link: 'https://www.iso.org/standard/65695.html',
    },
    {
      tema: '2. Estándares de la seguridad IoT',
      referencia:
        'MinTIC. (2012). <i>Ley estatutaria 181 de 2012. Protección de datos personales</i>. https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
      tipo: 'Ley',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      tema: '2. Estándares de la seguridad IoT',
      referencia:
        'Función pública. (2008). <i>Ley 1266 de 2008 Función pública</i>. https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=34488',
      tipo: 'Ley',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=34488',
    },
    {
      tema: '2. Estándares de la seguridad IoT',
      referencia:
        'Congreso de la República (2009). <i>Ley 1273 de 2009. De la protección de la información y de los datos</i>. http://www.secretariasenado.gov.co/senado/basedoc/ley_1273_2009.html',
      tipo: 'Ley',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1273_2009.html',
    },
    {
      tema: '2. Estándares de la seguridad IoT',
      referencia:
        'ISO. (2018). <i>ISO/IEC 27000. Information technology - Security techniques - Information security management systems - overview and vocabulary</i>. https://www.iso.org/standard/73906.html',
      tipo: 'Normas de seguridad',
      link: 'https://www.iso.org/standard/73906.html',
    },
    {
      tema: '2. Estándares de la seguridad IoT',
      referencia:
        'ISO. (2009). <i>ISO/IEC 15408. Information technology - Security techniques - Evaluation criteria for IT security - part1: INtroduction and general model</i>. https://www.iso.org/standard/50341.html',
      tipo: 'Normas de seguridad',
      link: 'https://www.iso.org/standard/50341.html',
    },
    {
      tema: '2. Estándares de la seguridad IoT',
      referencia:
        'ISO. (2013). <i>ISO/IEC 2002. Information technology - Security techniques - Code of practice for information security controls</i>. https://www.iso.org/standard/54533.html',
      tipo: 'Normas de seguridad',
      link: 'https://www.iso.org/standard/54533.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo Desarrollo Curricular ',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Héctor Henry Jurado Soto',
        cargo: 'Experto Temático - Contratista',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Daniel Mutis', 'Yuly Rey'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Edgar Mauricio Cortés García',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: '--',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: '--',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
