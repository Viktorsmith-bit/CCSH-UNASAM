export const listaTesis = [
    {
        id:1,
        titulo: "Aplicación de Redes Neuronales Profundas para la detección de la cobertura glaciar en imágenes satelitales óptica y radar de apertura sintética en la Cordillera Blanca, Perú - 2022",
        ruta:'redes-neuronales-profundas',
        descrip:{
            descrip1:'Global Land Ice Measurements from Space (GLIMS) es la comunidad científica internacional en glaciología con iniciativa de monitorear e inventariar los glaciares del mundo, principalmente, utilizando datos de instrumentos ópticos por satélite, vale decir, que este comenzó como un proyecto del equipo científico ASTER y, que a través del tiempo, se ha convertido en una herramienta de monitoreo de los glaciares del mundo, quienes a su vez, han creado una red de colaboradores internacionales que analizan imágenes satelitales de glaciares en sus regiones de especialización usando el método índice Normalizado de Diferenciación de Nieve (NDSI).',
            descrip2:'En el Perú, la entidad responsable de monitorear e inventariar los glaciares de los Andes peruanos es el Instituto Nacional de Investigación en Glaciares y Ecosistemas de Montaña (INAIGEM), “el cual representa el 70% de glaciares tropicales del mundo, con 20 cordilleras nevadas, que, si bien son fuentes hídricas fundamentales, también, son fuentes de catástrofes permanentes” (INAIGEM, 2014). Así mismo, el INAIGEM hizo público un manual metodológico para el mapeo de glaciares mediante el método NDSI.',
            descrip3:'El método NDSI es actualmente el más usado para mapear la cobertura glaciar con un umbral radiométrico igual a 0.4, no obstante, muchas veces, es habitual tomar un umbral mayor o menor a 0.4 con la finalidad de obtener mejores resultados de coincidencia de los frentes glaciares y los límites del contorno glaciar, y es que, generalmente se confunden las coberturas circundantes al hielo glaciar por la similitud espectral de las mismas, principalmente, con los cuerpos de agua. Si bien el método NDSI es muy usado en la actualidad, sus limitaciones basadas en su simplicidad de cálculo, el cual consiste en la diferencia normalizada entre las bandas espectrales verde (G) y el infrarrojo de onda corta (SWIR), lo hace susceptible a errores de clasificación, por ende, se tiene que eliminar manualmente los polígonos clasificados erróneamente como cobertura glaciar, resultando en un proceso lento, tedioso y muy costoso, especialmente si se trata de mapear e inventariar muchos glaciares. Además, si las imágenes satelitales no poseen las bandas del infrarrojo medio o infrarrojo de onda corta, no será posible aplicar el método NDSI.',
            descrip4:'En este contexto, el objetivo de esta investigación es proponer el uso de redes neuronales profundas como una alternativa de cartografiado glaciar al método NDSI. Las redes neuronales profundas son un tipo de Inteligencia Artificial (IA) y paradigma de programación que permite desarrollar algoritmos en el procesamiento de imágenes y reconocimiento de patrones visuales. El modelo de red neuronal profunda estará desarrollado con el lenguaje de programación Python y la librería de Aprendizaje Profundo TensorFlow o PyTorch, para el entrenamiento de la red neuronal se usará la Unidad de Procesamiento Gráfico (GPU) en el entorno de programación de Google Colaboratory o Colab. Para terminar, se exportarán las imágenes segmentadas en formato GeoTIFF o TFRecord para su visualización en la plataforma de Google Earth Engine, de donde, se monitoreará el cambio de la cobertura glaciar de forma automatizada, en consecuencia, tener mapeado e inventariado de forma rápida y precisa los glaciares ayudarán a la gestión de los recursos hídricos en la formulación de soluciones que permitan afrontar la escasez de agua en el futuro.',
        },
        temas:{
            tema1:'Inteligencia Artificial',
            tema2:'Redes Neuronales Artificiales',
            tema3:'Machine Learning',
            tema4:'Teledetección'
        },
        estado:"En desarrollo",
        tipo:'pregrado',
        universidad:'UNASAM',
        tesista:{
            user:'victor-smith-medina-cotrina',
            foto:'/section/Clima.jpg',
            name:'Víctor Smith Medina Cotrina',
            nameUser:'Víctor Medina',
            cargo:'Tesista de pregrado',
            profesion:'Bachiller en Ingeniería Ambiental',
        },
        asesor:{
            user:'edwin-anibal-loarte-cadenas',
            foto:'/section/Clima.jpg',
            name:'Edwin Anibal Loarte Cadenas',
            nameUser:'Edwin Anibal',
            cargo:'Asesor e investigador principal',
            profesion:'Ingeniero Ambiental',
        },
        co_asesor:{
            user:'rolando-cesai-cruz-encarnacion',
            foto:'/section/Clima.jpg',
            name:'Rolando Cesai Cruz Encarnación',
            nameUser:'Rolando Cruz',
            cargo:'Co-Asesor',
            profesion:'Ingeniera Ambiental',
        },
        asis_inves:{
            user:'francisco-nemecio-castillo-vergara',
            foto:'/section/Clima.jpg',
            name:'Francisco Nemecio Castillo Vergara',
            nameUser:'Francisco Castillo',
            cargo:'Asistente de investigación',
            profesion:'Ingeniero Ambiental'
        }
    },
    {
        id:2,
        titulo:"Influencia de El Niño Oscilación del Sur (ENOS) en las velocidades superficiales de los glaciares en la cuenca del río Santa, periodo 2015-2022",
        ruta:'Influencia-de-El-Niño-Oscilación-del-Sur-(ENOS)',
        descrip:{
            descrip1:'En América Latina existe manifestaciones de la variabilidad interanual del clima en El Niño Oscilación del Sur (ENOS), por ello, diversas regiones del mundo estudian los impactos a una escala local, ENOS es responsables de muchos patrones de circulación atmosférica, como son las variables de viento, temperatura y precipitación en América y Europa (Capel, 1999). Así mismo, se observa que, en las últimas décadas, el retroceso de los glaciares a nivel mundial se ha acelerado, debido a los efectos del cambio climático y las intervenciones directas e indirectas de las actividades generadas en las zonas de influencia, este hecho ha suscitado la preocupación científica y ciudadana por el futuro de los glaciares (Useros, 2013).',
            descrip2:'El territorio peruano cuenta con más de 8 mil lagunas distribuidas en 14 departamentos del país formadas como consecuencia del retroceso de los glaciares y el cambio climático (ANA, 2020). El Perú siendo frontera con el océano pacifico donde inicia los eventos de ENOS debido a las variaciones del mar, no es ajeno a sus influencias (Capel, 1999). Dentro del territorio encontramos los glaciares tropicales y debido a las crecientes temperaturas vinculadas al calentamiento global se han reducido hasta un 40% las masas glaciares, lo que genera un incremento del nivel de las aguas en las lagunas. Cada vez que los glaciares se retiran, el hielo es más débil, cayendo en pedazos lo que provoca peligros de avalanchas (ANA, 2022).',
            descrip3:'El Perú cuenta con 20 cordilleras glaciares, de los cuales 18 albergan glaciares blancos y las otras 2 cordilleras están cubiertas por glaciares rocosos. Dentro de las 18 cordilleras, la cordillera Blanca tiene mayor área y volumen aportando 13.8 MMC, entre las unidades hidrográficas a nivel nacional se encuentra la cuenca del río Santa con mayor cobertura glaciar (ANA, 2020).',
            descrip4:'Los glaciares Artesonraju, Shallap y Gueshgue pertenecen a la cuenca del río Santa (Villanueva, 2011), se encuentran en diversos cambios relacionados a los parámetros y condiciones físicas, como desplazamiento y velocidad. Por su ubicación geográfica de cada uno de ellos, es de difícil acceso para realizar mediciones superiores a los 5000 m s.n.m. en este escenario la teledetección es muy importante, ya que ofrece la posibilidad de cuantificar el flujo glaciar en términos de la velocidad superficial, para así poder determinar la influencia de ENOS en la dinámica glaciar, ya que la información obtenida permitirá evaluar la situación actual.',
            descrip5:'La escasa investigación que existe sobre las variaciones y cambios que sufre los glaciares influenciados por ENOS, no nos permite reconocer la situación actual de estos, por lo tanto, puede existir escasez de recursos hídricos, generación de avalanchas, reducción de la producción agrícola y la disminución de la actividad turística, y por ende, la economía del país podría verse afectada.',
            descrip6:'Bajo este contexto, esta investigación tiene como objetivo generar mayor información sobre la velocidad del glaciar influenciado por ENOS, así mismo, reconocer la variación de las velocidades en un período de 7 años.',
        },
        temas:{
            tema1:'Variabilidad climática y fenómenos climáticos ENOS',
            tema2:'Interferometría SAR (InSAR) ',
            tema3:'Interferometría Diferencial SAR (DInSar).',
            tema4:'Teledetección'
        },
        estado:"En desarrollo",
        tipo:'pregrado',
        universidad:'UNASAM',
        tesista:{
            user:'emely-consuelo-barreto-jamanca',
            foto:'/section/Clima.jpg',
            name:'Emely Consuelo Barrreto Jamanca',
            nameUser:'Emely Barreto',
            cargo:'Tesista de pregrado',
            profesion:'Ingeniera Ambiental',
        },
        asesor:{
            user:'edwin-anibal-loarte-cadenas',
            foto:'/section/Clima.jpg',
            name:'Edwin Anibal Loarte Cadenas',
            nameUser:'Edwin Anibal',
            cargo:'Asesor e investigador principal',
            profesion:'Ingeniero Ambiental',
        },
        co_asesor:{
            user:'rolando-cesai-cruz-encarnacion',
            foto:'/section/Clima.jpg',
            name:'Rolando Cesai Cruz Encarnación',
            nameUser:'Rolando Cruz',
            cargo:'Co-Asesor',
            profesion:'Ingeniera Ambiental',
        },
        asis_inves:{
            user:'francisco-nemecio-castillo-vergara',
            foto:'/section/Clima.jpg',
            name:'Francisco Nemecio Castillo Vergara',
            nameUser:'Francisco Castillo',
            cargo:'Asistente de investigación',
            profesion:'Ingeniero Ambiental'
        }
    },
    {
        id:3,
        titulo:"Determinación del nivel de influencia de la temperatura en la variación de los espesores de los frentes glaciares en la Cordillera Blanca, periodo 2015-2022",
        ruta:'Determinación-del-nivel-de-influencia-de-la-temperatura-en-la-variación-de-los-espesores-de-los-frentes-glaciares-en-la-Cordillera-Blanca',
        descrip:{
            descrip1:'En América Latina existe manifestaciones de la variabilidad interanual del clima en El Niño Oscilación del Sur (ENOS), por ello, diversas regiones del mundo estudian los impactos a una escala local, ENOS es responsables de muchos patrones de circulación atmosférica, como son las variables de viento, temperatura y precipitación en América y Europa (Capel, 1999). Así mismo, se observa que, en las últimas décadas, el retroceso de los glaciares a nivel mundial se ha acelerado, debido a los efectos del cambio climático y las intervenciones directas e indirectas de las actividades generadas en las zonas de influencia, este hecho ha suscitado la preocupación científica y ciudadana por el futuro de los glaciares (Useros, 2013).',
            descrip2:'El territorio peruano cuenta con más de 8 mil lagunas distribuidas en 14 departamentos del país formadas como consecuencia del retroceso de los glaciares y el cambio climático (ANA, 2020). El Perú siendo frontera con el océano pacifico donde inicia los eventos de ENOS debido a las variaciones del mar, no es ajeno a sus influencias (Capel, 1999). Dentro del territorio encontramos los glaciares tropicales y debido a las crecientes temperaturas vinculadas al calentamiento global se han reducido hasta un 40% las masas glaciares, lo que genera un incremento del nivel de las aguas en las lagunas. Cada vez que los glaciares se retiran, el hielo es más débil, cayendo en pedazos lo que provoca peligros de avalanchas (ANA, 2022).',
            descrip3:'El Perú cuenta con 20 cordilleras glaciares, de los cuales 18 albergan glaciares blancos y las otras 2 cordilleras están cubiertas por glaciares rocosos. Dentro de las 18 cordilleras, la cordillera Blanca tiene mayor área y volumen aportando 13.8 MMC, entre las unidades hidrográficas a nivel nacional se encuentra la cuenca del río Santa con mayor cobertura glaciar (ANA, 2020).',
            descrip4:'Los glaciares Artesonraju, Shallap y Gueshgue pertenecen a la cuenca del río Santa (Villanueva, 2011), se encuentran en diversos cambios relacionados a los parámetros y condiciones físicas, como desplazamiento y velocidad. Por su ubicación geográfica de cada uno de ellos, es de difícil acceso para realizar mediciones superiores a los 5000 m s.n.m. en este escenario la teledetección es muy importante, ya que ofrece la posibilidad de cuantificar el flujo glaciar en términos de la velocidad superficial, para así poder determinar la influencia de ENOS en la dinámica glaciar, ya que la información obtenida permitirá evaluar la situación actual.',
            descrip5:'La escasa investigación que existe sobre las variaciones y cambios que sufre los glaciares influenciados por ENOS, no nos permite reconocer la situación actual de estos, por lo tanto, puede existir escasez de recursos hídricos, generación de avalanchas, reducción de la producción agrícola y la disminución de la actividad turística, y por ende, la economía del país podría verse afectada.',
            descrip6:'Bajo este contexto, esta investigación tiene como objetivo generar mayor información sobre la velocidad del glaciar influenciado por ENOS, así mismo, reconocer la variación de las velocidades en un período de 7 años.',
        },
        temas:{
            tema1:'Variabilidad climática y fenómenos climáticos ENOS',
            tema2:'Interferometría SAR (InSAR) ',
            tema3:'Interferometría Diferencial SAR (DInSar).',
            tema4:'Teledetección'
        },
        estado:"En desarrollo",
        tipo:'pregrado',
        universidad:'UNASAM',
        tesista:{
            user:'thalia-yanina-calixto-lopez',
            foto:'/section/Clima.jpg',
            name:'Thalía Yanina Calixto Lopez',
            nameUser:'Thalía Calixto',
            cargo:'Tesista de pregrado',
            profesion:'Ingeniera Ambiental',
        },
        asesor:{
            user:'edwin-anibal-loarte-cadenas',
            foto:'/section/Clima.jpg',
            name:'Edwin Anibal Loarte Cadenas',
            nameUser:'Edwin Anibal',
            cargo:'Asesor e investigador principal',
            profesion:'Ingeniero Ambiental',
        },
        co_asesor:{
            user:'rolando-cesai-cruz-encarnacion',
            foto:'/section/Clima.jpg',
            name:'Rolando Cesai Cruz Encarnación',
            nameUser:'Rolando Cruz',
            cargo:'Co-Asesor',
            profesion:'Ingeniera Ambiental',
        },
        asis_inves:{
            user:'francisco-nemecio-castillo-vergara',
            foto:'/section/Clima.jpg',
            name:'Francisco Nemecio Castillo Vergara',
            nameUser:'Francisco Castillo',
            cargo:'Asistente de investigación',
            profesion:'Ingeniero Ambiental'
        }
    } 
]