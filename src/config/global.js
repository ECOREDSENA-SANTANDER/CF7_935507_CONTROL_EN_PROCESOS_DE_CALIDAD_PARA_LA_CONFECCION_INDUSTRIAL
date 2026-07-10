export default {
  global: {
    Name: 'Clasificación de defectos e informes de calidad',
    Description:
      'En este componente formativo se abordará la clasificación de defectos y la elaboración de informes de calidad como herramientas fundamentales para analizar los resultados de las inspecciones en procesos de confección. A partir del uso de indicadores, planes de muestreo por aceptación, tablas militares y herramientas básicas de control de calidad, se fortalecerá la toma de decisiones orientada a la corrección, mejora y control de la calidad en la producción de prendas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Clasificación de defectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Nivel del defecto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Ubicación del defecto',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Uso de tablas militares',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Informes de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Indicadores de calidad',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de calidad: 7 herramientas de control de calidad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Plan de acciones de calidad',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'AOQ=CPS',
      significado:
        ' Calidad Promedio de Salida. Es la calidad promedio que se obtiene después del proceso de inspección.',
    },
    {
      termino: 'AOQL=LCPS',
      significado:
        ' Límite de Calidad Promedio de Salida. Resultado de la peor calidad promedio que puede obtenerse en el proceso de la inspección.',
    },
    {
      termino: 'AQL=NCA',
      significado:
        'siglas de las palabras en inglés de <em>Level Aceptation Quality</em>, nivel de calidad aceptable, es el porcentaje máximo de unidades aceptable para el proceso, el cual debe estar especificado en la ficha técnica, contrato, órdenes de compra',
    },
    {
      termino: 'Causas asignables',
      significado:
        'llamada también causa especial son las que varían de manera inusual un proceso, debido a que antes no se había presentado, no se había observado ni cuantificado.',
    },
    {
      termino: 'Defecto',
      significado:
        'no cumplimiento de los requisitos de la prenda, desviaciones de los estándares de calidad de la prenda.',
    },
    {
      termino: 'LTPD=NCL',
      significado:
        'traducción de las palabras de las siglas en ingles <em>Lot Tolerance Proportion Defective</em>, proporción defectuosa tolerable en el lote, es el peor nivel de calidad del lote que el cliente puede aceptar. También conocido como el Nivel de Calidad Límite. Nivel de calidad no satisfactorio, por lo tanto, debe ser rechazado el lote.',
    },
    {
      termino: 'Rango',
      significado:
        'Es el intervalo comprendido entre el mayor y menor valor de un número de datos con el fin de medir su variación.',
    },
    {
      termino: '<em>Neps</em>',
      significado:
        'Pequeñas fibras gruesas en forma de puntos que se observan en el textil, es un defecto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Brand Arroyave, C. (2008). Control de calidad para medianas y pequeñas empresas.			',
    },
    {
      referencia:
        'Evans, J., & Lindsay, W. (2015). Administración y control de la calidad [E-book] (9th ed.). Cengage.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez Pulido, H. (2013). Control estadístico de la calidad y seis sigma [E-book] (3rd ed.). McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Jaramillo Zapata, J. (1990). Control de calidad en la confección. Servicio Nacional de Aprendizaje.			',
    },
    {
      referencia:
        'Martínez Aguirre, G. (2012). La ingeniería en la industria de la confección. Editorial Trillas.			',
    },
    {
      referencia:
        'Pérez Marqués, M. (2016). Control de calidad: Técnicas y herramientas (1.ª ed.). Alfaomega Grupo Editor.			',
    },
    {
      referencia:
        'Pola Maceda, Á. (2009). Aplicación de la estadística al control de calidad. Marcombo.			',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (1973). Programa de control de calidad. Unidad 1.5. Variabilidad de la calidad.			',
    },
    {
      referencia:
        'Villamizar Figueroa, J. (1992). Técnicas básicas para el análisis de datos. Servicio Nacional de Aprendizaje.			',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Nelftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Sandra Cecilia Gutiérrez',
          cargo: 'Experta temática',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Vilma Lucía Perilla Méndez',
          cargo: ' Diseñadora instruccional',
          centro: 'Centro de Gestión Empresarial - Regional Distrito Capital',
        },
        {
          nombre: 'Oscar Andrés Fernández Urrego',
          cargo: ' Evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Cenigraf - Regional Bogotá',
        },
        {
          nombre: 'Julieth Paola Vital López',
          cargo: 'Corrección de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        /*{
          nombre: '',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },*/
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
