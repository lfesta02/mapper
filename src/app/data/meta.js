const meta = {
    bellingham: {
        title: "Bellingham Overnighter",
        description: <><p>My first trip. The original idea was to go all the way Seattle but at some point I decided to shorten it.</p></>,
        date: "August 2022",
        distance: "228 km",
        color: '#14b8a6',
        points: [
            {
                lat: 49.23206785528046, 
                lng: -123.16004630865756,
                icon: "start"
            },
            {
                lat: 48.75387953494118, 
                lng: -122.47960477566188,
                icon: "hotel"     
            },
            {
                lat: 49.23232914857621, 
                lng: -123.16002145599997,
                icon: "end"
            },

        ]
    },
    vanisland: {
        title: "Vancouver Island Loop",
        description: <><p>Not too long after Bellingham I set out again. This time I stayed on home turf.</p></>,
        date: "August 2022",
        distance: "170 km",
        color: '#eab308',
        points: [
            {
                title: "Day 1",
                lat: 48.68962,
                lng: -123.41219,
                icon: "start"
            },
            {
                title: "Day 2",
                lat: 48.50140706981972, 
                lng: -123.3620959869348,
                dist: "88.0",
                icon: "hotel"
            },
            {
                lat: 48.59442,
                lng: -123.49768,
                icon: "boat",
                ignore: true
            },
            {
                title: "Day 3",
                lat: 49.02759182225817, 
                lng: -123.84730179996765,
                dist: "56.5"
            },
            {
                lat: 49.28788,
                lng: -123.53438,
                icon: "boat",
                ignore: true
            },            
            {
                lat: 49.23279,
                lng: -123.15997,
                icon: "end"      
            }
        ]
    },
    sunshinecoast: {
        title: "Sunshine Coast",
        description: <><p>My parents live on the Sunshine Coast and so it made sense as a trip. My dad joined me for this one.</p></>,
        date: "September 2022",
        distance: "112 km",
        color: '#f97316',
        points: [
            {
                lat: 49.23279,
                lng: -123.15997,
                icon: "start",
                ignore: true
            },
            {
                lat: 49.42478, 
                lng: -123.37811,
                icon: "boat",
                ignore: true    
            },
            {
                lat: 49.64423, 
                lng: -124.05933,
                icon: "end"
            }
        ]
    },
    alagna: {
        title: "London to Alagna",
        description: <><p className="route-desc">A <i>big</i> step up… and one I was eager to make. In fact, I bought my plane ticket almost a year in advance. From that point on, 
                        there was nothing I was more excited about. <br/><br/> I planned, planned, and planned some more. When the time finally came to leave, I felt ready. But honestly,
                        for something of this scale, you can never be fully prepared.</p></>,
        date: "May - June 2023",
        distance: "2500 km",
        color: '#6366f1',
        points: [
            {
                title: "Day 1",
                lat: 51.239081751303075, 
                lng: -0.16882234239498928,
                desc: 0,
                icon: "start"
            },
            {
                title: "Day 2",
                lat: 51.09653945085432, 
                lng: 0.21812898452988486,
                desc: 1,
                dist: "62.3",
                icon: "hotel"
            },
            {
                lat: 50.38221207559826, 
                lng: 0.5322062982862638,
                icon: "boat",
                ignore: true
            },
            {
                title: "Day 3",
                lat: 49.927272714176205, 
                lng: 1.0858811791600764,
                desc: 2,
                icon: "hotel"
            },
            {
                title: "Day 4",
                lat: 50.06838015972234,  
                lng: 1.3853128233151208,
                desc: 3,
                icon: "hotel"
            },
            {
                title: "Day 5",
                lat: 50.11218455476339, 
                lng: 1.8048713796013893,
                desc: 4,
            },
            {
                title: "Day 6",
                lat: 49.88445746160407,
                lng: 2.4215068243252094,
                desc: 5,
            },
            {
                title: "Day 7",
                lat: 50.19047057353628, 
                lng: 2.596878739071918,
                desc: 6,
            },
            {
                title: "Day 8",
                lat: 50.430122516453935, 
                lng: 2.813192202152257,
                desc: 7,
                icon: "hotel"
            },
            {
                title: "Day 9",
                lat: 50.716511129608136, 
                lng: 3.356250585474496,
                desc: 8
            },
            {
                title: "Day 10",
                lat: 50.79002656718208, 
                lng: 4.293366017713379,
                desc: 9,
            },
            {
                title: "Day 11",
                lat: 50.84951083327847, 
                lng: 4.348953955721278,
                desc: 10,
                icon: "hotel"
            },
            {
                title: "Day 12",
                lat: 50.514147224346225, 
                lng: 4.8612607255106335,
                desc: 11
            },
            {
                title: "Day 13",
                lat: 50.21293907088838, 
                lng: 5.3254267081583615,
                desc: 12,
            },
            {
                title: "Day 14",
                lat: 49.89242046110007, 
                lng: 5.67598049924675,
                desc: 13,
            },
            {
                title: "Day 15",
                lat: 49.68097723499682, 
                lng: 6.267375939843586,
                desc: 14,
            },
            {
                title: "Day 16",
                lat: 49.3459712626795, 
                lng: 6.702817806633595,
                desc: 15,
            },
            {
                title: "Day 17",
                lat: 49.233327523060396, 
                lng: 6.992028636641892,
                desc: 16,
                icon: "hotel"
            },
            {
                title: "Day 18",
                lat: 48.937707541098916, 
                lng: 7.029960418838833,
                desc: 17,
                icon: "hotel"
            },
            {
                title: "Days 19-21",
                lat: 48.72053683067199, 
                lng: 7.685254395077061,
                desc: 18,
            },
            {
                title: "Day 22",
                lat: 48.579807023982276, 
                lng: 7.666554227888356,
                desc: 19,
                icon: "hotel"
            },
            {
                title: "Day 23",
                lat: 48.06792191803117, 
                lng: 7.344136832700349,
                desc: 20,
            },
            {
                title: "Day 24",
                lat: 47.68681180177342, 
                lng: 7.507565194308928,
                desc: 21,
            },
            {
                title: "Day 25",
                lat: 47.58489514240848, 
                lng: 8.299263797536884,
                desc: 22,
            },
            {
                title: "Day 26",
                lat: 47.642805, 
                lng: 8.910832,
                desc: 23
            },
            {
                title: "Day 27",
                lat: 47.2641053253831, 
                lng: 9.532058870218552,
                desc: 24,
            },
            {
                title: "Day 28",
                lat: 46.788341581119425, 
                lng: 9.297942708032396,
                desc: 25,
            },
            {
                title: "Day 29",
                lat: 46.720402811496804, 
                lng: 8.922600342996562,
                desc: 26,
                icon: "hotel"
            },
            {
                title: "Day 30",
                lat: 46.63179704178122, 
                lng: 8.59121837449489,
                desc: 27,
            },
            {
                title: "Day 31",
                lat: 46.459833529671556,  
                lng: 8.235637358130667,
                desc: 28,
                icon: "hotel"
            },
            {
                title: "Day 32",
                lat: 46.16072480651734,   
                lng: 7.1894435113036,
                desc: 29,
            },
            {
                title: "Day 33",
                lat: 46.3574881017828, 
                lng: 6.35089740153643 ,
                desc: 30,
            },
            {
                title: "Day 34",
                lat: 46.076304311847764,  
                lng: 5.901065353906387,
                desc: 31,
            },
            {
                title: "Day 35",
                lat: 45.72403200953698, 
                lng: 5.7026306895815635,
                desc: 32,
            },
            {
                title: "Days 36-43",
                lat: 45.187995782668274, 
                lng: 5.726549695184494 ,
                desc: 33,
                dist: "0.0",
                icon: "injury"
            },
            {
                lat: 45.12679567454877, 
                lng: 6.765137186395531,
                desc: "flixbus",
                icon: "autobus",
                ignore: true
            },
            {
                title: "Day 44",
                lat: 45.08788389783395, 
                lng: 7.676486168478809,
                desc: 34,
                icon: "hotel"
            },
            {
                title: "Day 45",
                lat: 45.49911841869956, 
                lng: 8.118007157638136,
                desc: 35,
                icon: "hotel"
            },
            {
                title: "Day 46",
                lat: 45.824264261979835,  
                lng: 8.211651515921652,
                desc: 36,
            },
            {
                lat: 45.850542760085624, 
                lng: 7.938083936285204,
                icon: "end",
                
            },
        ]
    },
    italfrance: {
        title: "Mission to Paris (fail)",
        description: <><p className="route-desc">The plan was to meet my friend Michael in Alagna, and together we would cycle to Paris by way of southern France.<br/><br/> Unfortunately, things got derailed pretty quickly. </p></>,
        date: "May 2024",
        distance: "300 km",
        color: '#4d7c0f',
        points: [
            {
                title: "Day 1",
                lat: 45.85412,
                lng: 7.93737,
                desc: 0,
                icon: "start"
            },
            {
                title: "Day 2",
                lat: 45.30574, 
                lng: 8.12029,
                desc: 1,
                dist: "54.0",
                icon: "hotel"
            },
            {
                lat: 44.49262, 
                lng: 7.85797,
                icon: "autobus",
                ignore: true
            },
            {
                title: "Day 3",
                lat: 43.88780, 
                lng: 8.03598,
                desc: 2,
            },
            {
                title: "Day 4",
                lat: 43.69835, 
                lng: 7.28392,
                desc: 3,
                icon: "hotel"
            },
            {
                lat: 43.5508,
                lng: 7.01221,
                icon: "end"
            }
        ]
    }
}

const defaults = {
    title: "Luca's Map",
    description: "A collection of my bike tours"
}

module.exports = { meta, defaults }