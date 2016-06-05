angular
    .module('cvService', [])
    .factory('cv', function ($q) {
        var _cv = {
            "nom": "Ying LI",
            "dateNaissance": "1988-09-29+01:00",
            "adresse": {
                "rue": "2, rond point de l'aube",
                "cp": "95800",
                "ville": "Cergy"
            },
            "nationalite": "Chinoise",
            "tel": "06.69.43.94.11",
            "email": "ying.li.paris@gmail.com",
            "position": "Ingénieur développement",
            "formations": [
                { "annee": 2011, "nom": "Diplomée en Master 2 à UTC", "description": "Etudes Master 2 dans la spécialité «Systèmes Intelligents pour les Transports »" },
                { "annee": 2008, "nom": "Université de Technologie de Compiègne (UTC)", "description": "Etudes d’ingénieur en Génie Informatique, dans le cadre des conventions d’échange avec l'Université de Xi’an Jiaotong(XJTU)" },
                { "annee": 2006, "nom": "Université de Xi’an Jiaotong (XJTU)", "description": "Etudes en Génie Electrique" },
            ],
            "competences": {
                "programmation": [
                    {
                        "nom": "C#",
                        "frameworks": ["WCF", "EntityFramework", "WPF"]
                    },
                    {
                        "nom": "TypeScript, AngularJs"
                    },
                    {
                        "nom": "C++"
                    }
                ],
                "rdbms": ["SQL Server", "MySQL"],
                "servers": ["IIS", "Windows server", "GeoServer"],
                "outils": ["Visual Studio", "Microsoft Visio 2007", "TFS", "Moq", "StyleCop", "FxCop", "CodeContracts"],
                "langues": [
                    { "nom": "Français", "niveau": "bilingue", "code": "French" },
                    { "nom": "Chinois", "niveau": "maternelle", "code": "Chinese" },
                    { "nom": "Anglais", "niveau": "couramment", "code": "English" }
                ]
            },
            "interets": [
                "Natation", "Danses de salon", "Couture", "Jeux de plateaux"
            ]
        };


        var _projets = [
            {
                "nom": "SUEZ (Ondeo Systems)",
                "debut": "2011-02-01",
                "description": "Au sein d'un service d'édition logicielle proposant des solutions temps réel pour la surveillance et le pilotage des réseaux de distribution et d'assainissement de l'eau, je suis intervenue sur les projets suivants :",
                "hiddentechs": "",
                "projets": [
                    {
                        "nom": "Aquadvanced",
                        "debut": "2013-06-01",
                        "description": "Aquadvanced est une solution temps réel de suivi et d'optimisation du fonctionnement des réseaux d'eau potable. La solution est composée par :",
                        "desc": [
                            "Un back office qui permet la collecte des données, ainsi que les calculs d'indicateurs et la détection de fuite à l'aide de modèles statistiques et hydrauliques",
                            "Un front office qui offre une vision cartographique du réseau de distribution, des indicateurs et de la localisation des fuites"
                        ],
                        "hiddentechs": "Subversion Visual Studio Anglais EntityFramework JavaScript",
                    },
                    {
                        "nom": "Em2s",
                        "debut": "2011-02-01",
                        "description": "Em2s est un framework métier modulaire mettant à disposition un moteur de calcul d'indicateurs, de gestion d’événements, d'authentification à destination des applications internes, telle que Aquadvanced, et externes.",
                        "hiddentechs": "Subversion Netbeans JavaScript"
                    }
                ],
                "postes": [
                    {
                        "nom": "Responsable de la maintenance applicative",
                        "description": "Gestion de la maintenace corrective et réalisation des tests d'intégration sur les nouvelles fonctionnalités des applications Aquadvanced et Em2s",
                        "debut": "2014-06-01",
                        "roles": [
                            "Analyse et qualification des anomalies",
                            "Planification et suivi de la résolution des anomalies ",
                            "Assurer la cohérence entre différents besoins fonctionnels",
                            "Réalisation des tests d'intégration"
                        ],
                        "hiddentechs": "Subversion Visual Studio Anglais EntityFramework JavaScript",
                    },
                    {
                        "nom": "Ingénieur développement sur l'application Aquadvanced",
                        "debut": "2013-06-01",
                        "taille": 6,
                        "roles": [
                            "Analyse, conception et développement de la partie back office",
                            "Coordination technique avec l'équipe front office en Espagne",
                            "Gestion de release et test d'intégration",
                            "Support technique"
                        ],
                        "techniques": [
                            "C#, WCF",
                            "TypeScript, AngularJs",
                            "Entity Framework 6, MS Sql Server",
                            "Windows Server 2012, GeoServer",
                            "Visual Studio, TFS, Moq, CodeContracts"
                        ],
                        "hiddentechs": "Subversion Visual Studio Anglais EntityFramework JavaScript",
                    },
                    {
                        "nom": "Ingénieur développement sur framework métier Em2s",
                        "debut": "2011-02-01",
                        "taille": 4,
                        "roles": [
                            "Analyse, conception et développement",
                            "Gestion de release et test d'intégration",
                            "Support technique"
                        ],
                        "techniques": [
                            "C#, WCF",
                            "Entity Framework 6, MS Sql Server",
                            "Windows Server 2012",
                            "Visual Studio, TFS, Moq, CodeContracts"
                        ],
                        "hiddentechs": "Subversion Visual Studio Anglais EntityFramework JavaScript",
                    }
                ]
            },
            {
                "nom": "Veolia (MERCUR)",
                "debut": "2010-02-01",
                "fin": "2010-08-15",
                "description": "Participer aux développement d'un outil de calcul informatique permettant une diminution des émissions de GES en élaborant des scenarii alternatifs à partir d’une situation initiale décrite par l’utilisateur",
                "hiddentechs": "",
                "projets": [{
                    "nom": "Stage",
                    "description": "Réalisation l'interaction entre l’interface graphique et la base de données",
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