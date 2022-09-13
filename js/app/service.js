angular
    .module('cvService', [])
    .factory('cv', function ($q) {
        var _cv = {
            "nom": "Ying LI",
            "dateNaissance": "1988-09-29+01:00",
            "adresse": {
                "ville": "Cergy"
            },
            "nationalite": "Chinoise",
            "tel": "06.69.43.94.11",
            "email": "ying.li.paris@gmail.com",
            "permis": "B2",
            "position": "Dev Lead / Tech Lead",
            "formations": [
                { "annee": 2011, "nom": "Diplomée en Master 2 à UTC", "description": "Etudes Master 2 dans la spécialité «Systèmes Intelligents pour les Transports»" },
                { "annee": 2008, "nom": "Université de Technologie de Compiègne (UTC)", "description": "Etudes d’ingénieur en Génie Informatique, dans le cadre des conventions d’échange avec l'Université de Xi’an Jiaotong (XJTU)" },
                { "annee": 2006, "nom": "Université de Xi’an Jiaotong (XJTU)", "description": "Etudes en Génie Electrique" },
            ],
            "competences": {
                "programmation": [
                    {
                        "nom": "C#",
                        "frameworks": [".Net5", "AspNet", "REST API", "WCF", "EntityFramework", "WPF"]
                    },
                    {
                        "nom": "Angular2+, TypeScript, AngularJs"
                    },
                    {
                        "nom": "C++"
                    }
                ],
                "rdbms": ["SQL Server", "MySQL"],
                "servers": ["Windows server", "GeoServer", "IIS"],
                "outils": ["Visual Studio", "Visual Studio Code", "Azure DevOps", "Git", "TFS", "Moq", "StyleCop", "FxCop", "CodeContracts"],
                "langues": [
                    { "nom": "Français", "niveau": "bilingue", "code": "French" },
                    { "nom": "Chinois", "niveau": "maternelle", "code": "Chinese" },
                    { "nom": "Anglais", "niveau": "courant", "code": "English" }
                ],
                "permis": "B2",
                "méthodologies": "ScrumAgile"
            },
            "interets": [
                "Natation", "Badminton", "Danses de salon"
            ],
            "resume":[
                "Avec mes années d'expérience en développement dans les technologies de Microsoft .Net et Angular, j'ai acquis des compétences techniques et métiers solides.",
                "Responsable technique d'une équipe de 4 personnes, j'accompagne l'équipe sur les aspects techniques, management, intégration, support et déploiement.",
                "Habituée à travailler en équipe, j'ai un bon relationnel avec les différents interlocuteurs.",
                "Je suis motivée, rigoureuse !"]
        };

        var _projets = [
            {
                "nom": "SUEZ Smart Solutions",
                "debut": "2011-02-01",
                "description": "Au sein d'un service d'édition logicielle proposant des solutions sur le cycle de l'eau, je suis intervenue sur les projets suivants :",
                "hiddentechs": "",
                "projets": [
                    {
                        "nom": "Aquadvanced Production & Transport",
                        "debut": "2019-04-01",
                        "description": "Aquadvanced P&T est un logiciel qui optimise la consommation d’énergie pendant la production et le transport de l’eau potable. Il est composé de :",
                        "desc": [
                            "Un back office qui permet de collecter des données, calculer des indicateurs ainsi que de prévoir les commandes à envoyer afin de piloter les automates du réseau à l'aide de modèles d’optimisations et de modèles hydrauliques",
                            "Un front office qui offre une vision cartographique des ouvrages, des indicateurs, ainsi que la possibilité de faire des simulations ayant pour objectif de faire des études d’optimisation"
                        ],
                        "postes": [
                            {
                                "nom": "Dev Lead / Tech Lead",
                                "type": "poste",
                                "taille": 4,
                                "roles": [
                                    "Gestion et recrutement des développeurs",
                                    "Analyse des besoins et des spécifications fonctionnelles",
                                    "Organisation des releases (découpage, définition des besoins en ressources)",
                                    "Gestion du reporting des coûts",
                                    "Revue du code, test fonctionnels",
                                    "Migration de .Net Framework 4.5 vers .Net5",
                                    "Rédaction de la documentation technique",
                                    "Support technique et développement de fonctionnalités complexes",
                                    "Gestion des pipelines Azure DevOps"
                                ],
                                "techniques": [
                                    "C#, Angular2+, .Net5, AngularJs",
                                    "Entity Framework, Sql Server, Windows Server, GeoServer",
                                    "HighChart, OpenLayer",
                                    "Azure DevOps, Git, Moq"
                                ]
                            }
                        ]
                    },
                    {
                        "nom": "Aquaviz",
                        "debut": "2017-06-01",
                        "fin": "2018-08-01",
                        "description": "Aquaviz est une librairie de composants UI et de modules utilisée par l'ensemble des logiciels Suez Smart Solutions permettant de gérer les données liées à la surveillance de l’environnement.",
                        "desc": [
                        ],
                        "postes": [
                            {
                                "nom": "Dev Lead / Développeur Front End",
                                "type": "poste",
                                "taille": 6,
                                "roles": [
                                    "Analyse des besoins et des spécifications fonctionnelles",
                                    "Organisation des releases (découpage, définition des besoins en ressources)",
                                    "Suivis de l’avancement du projet et des coûts",
                                    "Revue du code, tests fonctionnels",
                                    "Développement de fonctionnalités (Form, Chart, Dashboard)",
                                    "Rédaction de la documentation technique",
                                    "Support technique"
                                ],
                                "techniques": [
                                    "Angular 2+, HightCharts, Bootstrap, ngx-bootstrap, ag-grid",
                                    "Visual Studio Code"
                                ]
                            }
                        ]
                    },
                    {
                        "nom": "Aquadvanced WaterNetwork Distribution",
                        "debut": "2013-06-01",
                        "fin": "2017-06-01",
                        "description": "Aquadvanced est une solution de suivi et d'optimisation du fonctionnement des réseaux d'eau potable. La solution est composée par :",
                        "desc": [
                            "Un back office qui permet la collecte des données, ainsi que les calculs d'indicateurs et la détection de fuite à l'aide de modèles hydrauliques",
                            "Un front office qui offre une vision cartographique du réseau de distribution, des indicateurs et de la localisation des fuites"
                        ],
                        "postes": [
                            {
                                "nom": "Ingénieur développement / Responsable de maintenance",
                                "type": "poste",
                                "taille": 6,
                                "roles": [
                                    "Analyse, conception et développement de la partie back office",
                                    "Coordination technique avec l'équipe front office en Espagne",
                                    "Analyse et qualification des anomalies",
                                    "Assurer la cohérence entre différents besoins fonctionnels",
                                    "Gestion de release et test d'intégration",
                                    "Support technique",
                                ],
                                "techniques": [
                                    "C#, WCF, TypeScript, AngularJs",
                                    "Entity Framework 6, Sql Server, Windows Server, GeoServer",
                                    "Visual Studio, TFS, Moq, CodeContracts"
                                ]
                            }
                        ]
                    },
                    {
                        "nom": "Em2s",
                        "debut": "2011-02-01",
                        "fin": "2017-06-01",
                        "description": "Em2s est un framework métier modulaire mettant à disposition un moteur de calcul d'indicateurs, de gestion d’événements, d'authentification à destination des applications internes.",
                        "postes": [
                            {
                                "nom": "Ingénieur développement / Responsable de maintenance",
                                "type": "poste",
                                "taille": 4,
                                "roles": [
                                    "Analyse, conception et développement des fonctionnalités",
                                    "Analyse, qualification et suivi des anomalies",
                                    "Assurer la cohérence entre différents besoins fonctionnels",
                                    "Gestion de release et test d'intégration",
                                    "Support technique"
                                ],
                                "techniques": [
                                    "C#, WCF",
                                    "Entity Framework 6, Sql Server, Windows Server",
                                    "Visual Studio, TFS, Moq, CodeContracts"
                                ]
                            }
                        ]

                    }
                ]
            },
            {
                "nom": "Veolia (MERCUR)",
                "debut": "2010-02-01",
                "fin": "2010-08-15",
                "description": "Participer au développement d'un outil de calcul informatique permettant une diminution des émissions de GES en élaborant des scenarii alternatifs à partir d’une situation initiale décrite par l’utilisateur",
                "hiddentechs": "",
                "projets": [{
                    "nom": "Stage",
                    "description": "Réalisation de l'interaction entre l’interface graphique et la base de données",
                    "roles": [
                        "Réalisation"
                    ],
                    "techniques": [
                        "C++",
                        "MySQL",
                        "Visual Studio 2008 C++, Microsoft Visio 2007"
                    ],
                    "hiddentechs": "Subversion Visual Studio Anglais EntityFramework JavaScript",
                }]
            }
        ];

        return {
            'get': function () {
                var deferred = $q.defer();

                deferred.resolve(_cv);

                return deferred.promise;
            },
            'getProjets': function () {
                var deferred = $q.defer();

                deferred.resolve(_projets);

                return deferred.promise;
            },
            'filterProjets': function (term) {
                var deferred = $q.defer();

                filterProjets(_projets, term);
                deferred.resolve(1);

                return deferred.promise;
            }
        };
    })
    ;