var app=new Vue({
    el:"#awards",
    data:{
        "certifications":[
            {
                "title":"Cerficaciones",
                "elements":[
                    {
                        "title":"CCNA Routing and Switching: Escalamiento de redes",
                        "description":"Certificación del módulo 3 de CISCO"
                    },
                    {
                        "title":"CCNA Routing and Switching: Principios básicos de routing y switching",
                        "description":"Certificación del módulo 2 de CISCO"
                    },
                    {
                        "title":"CCNA Routing and Switching: Introducción a las redes (Introduction to Networks)",
                        "description":"Certificación del módulo 1 de CISCO"
                    }
                ]
            },
        ],
        "courses":[
            {
                "title":"Cursos tomados (más información en el perfil de ",
                "elements_left":["NodeJS","Kotlin para Android","Java SE Orientado a Objetos","Python","Gestión de Equipos Ágiles","SQL y MySQL","Curso de Administración de Servidores Linux"],
                "elements_right":["JavaScript","PHP","Avanzado de Redes de Internet","Profesional de Scrum","Fundamentos de Gestión de Proyectos","MongoDB"]
            },
        ],
        "extras":[
            {
                "title":"Cerficaciones",
                "elements":[
                    "VII Workshop Internacional en Imagen Médica e Integración de Datos clínicos, A Coruña, España.",
                    "International Workshop: From Cheminformatics to Creativity, A Coruña, España.",
                    "International Workshop: Machine Learning in Bioinformatics and Signal Processing, A Coruña, España.",
                    "Ponente en la conferencia “Inteligencia Artificial”, realizada en el marco de la semana de exposición de proyectos del Verano de Investigación Científica y Tecnológica  del Pacífico, programa Delfín.",
                    "Escuela de Invierno en Inteligencia Artificial del Consorcio IA de CONACYT.",
                    "Propuesta de aplicación para la gestión de trámites del INAH.",
                    "Ponente en la conferencia “Desarrollo de videojuegos serios para combatir la obesidad”, en la  Universidad Tecnológica de Nayarit.",
                ]
            },
        ],
    }
});
