const model = require('./models');

const data = [
    { name: 'Bus' },
    { name: 'Tram' },
    { name: 'Subway' },
    { name: 'Train' },
    { name: 'Popular' },
    { name: 'My Reviews' },
];

const lineData = [
    {
        lineName: 'M1',
        route: 'Republica - Dristor2',
        lineDescription:
            'Linia M1 de metrou (Direcția: Dristor 2) are 21de stații, prima stație la Republica și ultima stație la Dristor 2. Orarul metroului M1 pentru săptămâna viitoare: începe programul la 5:00 și se termină la 23:10. Zile de funcționare: fiecare zi.',
        transportMethodId: 3,
    },
    {
        lineName: 'M2',
        route: 'Pipera - Berceni',
        lineDescription:
            'Linia M2 de metrou (Direcția: Berceni) are 14de stații, prima stație la Pipera și ultima stație la Berceni. Orarul metroului M2 pentru săptămâna viitoare: începe programul la 5:00 și se termină la 23:10. Zile de funcționare: fiecare zi.',
        transportMethodId: 3,
    },
    {
        lineName: 'M3',
        route: 'Preciziei - Anghel Saligny',
        lineDescription:
            'Linia M3 de metrou (Direcția: Anghel Saligny) are 15de stații, prima stație la Preciziei și ultima stație la Anghel Saligny. Orarul metroului M3 pentru săptămâna viitoare: începe programul la 5:00 și se termină la 23:45. Zile de funcționare: fiecare zi.',
        transportMethodId: 3,
    },
    {
        lineName: 'M4',
        route: 'Străulești - Gara De Nord 2',
        lineDescription:
            'Linia M4 de metrou (Direcția: Gara De Nord 2) are 8de stații, prima stație la Străulești și ultima stație la Gara De Nord 2. Orarul metroului M4 pentru săptămâna viitoare: începe programul la 5:00 și se termină la 23:21. Zile de funcționare în această săptămână: fiecare zi.',
        transportMethodId: 3,
    },
    {
        lineName: 'M5',
        route: 'Râul Doamnei - Eroilor',
        lineDescription:
            'Linia M5 de metrou (Direcția: Eroilor 2) are 9de stații, prima stație la Râul Doamnei și ultima stație la Eroilor. Orarul metroului M5 pentru săptămâna viitoare: începe programul la 5:00 și se termină la 23:27. Zile de funcționare în această săptămână: fiecare zi.',
        transportMethodId: 3,
    },
    {
        lineName: '101',
        route: 'Bucur Obor - Faur Poarta 4',
        lineDescription:
            'Linia 101 de autobuz (Direcția: Bucur Obor - Faur Poarta 4) are 17de opriri, prima stație la Bucur Obor  și ultima stație la Faur Poarta 4. Orarul autobuzului 101 pentru săptămâna viitoare: începe programul la 5:16 și se termină la 23:11. Zile de funcționare în această săptămână: fiecare zi.',
        transportMethodId: 1,
    },
    {
        lineName: '102',
        route: 'Bd. Basarabia - Gara Progresu',
        lineDescription:
            'Linia 102 de autobuz (Direcția: Bd. Basarabia - Gara Progresul) are 30de opriri, prima stație la Bd. Basarabia  și ultima stație la Gara Progresul. Orarul autobuzului 102 pentru săptămâna viitoare: începe programul la 4:25 și se termină la 23:00. Funcționare în această săptămână: fiecare zi.',
        transportMethodId: 1,
    },
    {
        lineName: 'N105',
        route: 'Piata Unirii 4 - Vulcan Berceni',
        lineDescription:
            'Linia N105 de autobuz (Direcția: Piața Unirii 4 - Vulcan Berceni) are 24de opriri, prima stație la Piața Unirii 4 și ultima stație la Vulcan Berceni. Orarul autobuzului N105 pentru săptămâna viitoare: începe programul la 0:10 și se termină la 23:30. Funcționare: fiecare zi.',
        transportMethodId: 1,
    },
    {
        lineName: 'N108',
        route: 'Pasaj Colentina - Piata Unirii 2',
        lineDescription:
            'Linia N108 de autobuz (Direcția: Pasaj Colentina- Piața Unirii 2 ) are 28de opriri, prima stație la Pasaj Colentina și ultima stație la Piața Unirii 2. Orarul autobuzului N108 pentru săptămâna viitoare: începe programul la 0:10 și se termină la 23:25. Funcționare: fiecare zi.',
        transportMethodId: 1,
    },
    {
        lineName: 'IR72',
        route: 'București Nord - Curtici (Budapesta)',
        lineDescription:
            'Linia IR 72 de tren (Direcția: București Nord- Curtici) are 16de stații, prima stație la București Nord și ultima stație la Curtici.Orarul trenului IR 72 pentru săptămâna viitoare: începe programul la 5:46 și se termină la 5:46. Zile de funcționare în această săptămână: fiecare zi.',
        transportMethodId: 4,
    },
    {
        lineName: 'IR1528',
        route: 'Sibiu - București Nord',
        lineDescription:
            'Linia IR 1528 de tren (Direcția: Sibiu- București Nord) are 26de stații, prima stație la Sibiu și ultima stație la București Nord. Orarul trenului IR 1528 pentru săptămâna viitoare: începe programul la 3:50 și se termină la 3:50. Zile de funcționare în această săptămână: fiecare zi.',
        transportMethodId: 4,
    },
    {
        lineName: 'IR1551',
        route: 'București Nord - Ploiești Sud',
        lineDescription:
            'Linia IR 1551 de tren (Direcția: București Nord- Ploiești Sud) are 5de stații, prima stație la București Nord și ultima stație la Ploiești Sud. Orarul trenului IR 1551 pentru săptămâna viitoare: începe programul la 17:00 și se termină la 17:00. Funcționare: zile ale săptămânii.',
        transportMethodId: 4,
    },
    {
        lineName: '7',
        route: 'Cfr Progresul‎ - Piața Unirii',
        lineDescription:
            'Linia 7 de tramvai (Direcția: Cfr Progresul- Piața Unirii) are 18de stații, prima stație la Cfr Progresul și ultima stație la Piața Unirii.Orarul tramvaiului 7 pentru săptămâna viitoare: începe programul la 4:30 și se termină la 22:53. Zile de funcționare în această săptămână: fiecare zi.',
        transportMethodId: 2,
    },
    {
        lineName: '8',
        route: 'Depoul Militari‎ - Zețarilor',
        lineDescription:
            'Linia 8 de tramvai (Direcția: Depoul Militari- Zețarilor) are 30de stații, prima stație la Depoul Militari și ultima stație la Zețarilor.Orarul tramvaiului 8 pentru săptămâna viitoare: începe programul la 4:20 și se termină la 23:05. Zile de funcționare în această săptămână: fiecare zi.',
        transportMethodId: 2,
    },
    {
        lineName: '24',
        route: 'Cartier Dămăroaia‎ - Vasile Pârvan',
        lineDescription:
            'Linia 24 de tramvai (Direcția: Cartier Dămăroaia- Vasile Pârvan) are 17de stații, prima stație la Cartier Dămăroaia și ultima stație la Vasile Pârvan.Orarul tramvaiului 24 pentru săptămâna viitoare: începe programul la 4:49 și se termină la 22:50. Funcționare: fiecare zi.',
        transportMethodId: 2,
    },
];

const users = [ 
  {
    first_name: 'Farand',
    last_name: 'Dodswell',
    username: 'fdodswell0',
    password: 'P0zL9vz',
    email: 'fdodswell0@yellowpages.com'
  },
  {
    first_name: 'Frazer',
    last_name: 'Burmaster',
    username: 'fburmaster1',
    password: 'TPC5xWUFFv1',
    email: 'fburmaster1@sfgate.com'
  },
  {
    first_name: 'Bone',
    last_name: 'Aldwich',
    username: 'baldwich2',
    password: 'mSkNCOjY4Ur',
    email: 'baldwich2@linkedin.com'
  },
  {
    first_name: 'Tally',
    last_name: 'Littefair',
    username: 'tlittefair3',
    password: '15O5AD7b',
    email: 'tlittefair3@reverbnation.com'
  },
  {
    first_name: 'Eugen',
    last_name: 'Obern',
    username: 'eobern4',
    password: 'hwR0OipUf',
    email: 'eobern4@bloomberg.com'
  }
];

// const reviewMock = [
//     {start_point:'Piata Victoriei', end_point:'Aurel Vlaicu', leaving_hour:'14:30',duration:30,congestion_level:5,observations:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",satisfaction_level:3, transportLineId:3, userId:2},
//     {start_point:'Piata Presei', end_point:'Arcul de Triumf', leaving_hour:'14:30',duration:20,congestion_level:2,observations:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",satisfaction_level:5, transportLineId:4, userId:1}
// ];

//insert methods
(async () => {
    await model.User.bulkCreate(users);
})();

// This is for inserting data
// (async () => {
//     await model.TransportLine.bulkCreate(lineData);
// })();

// (async () => {
//     await model.TransportLine.bulkCreate(lineData);
// })();

// (async () =>  {
//     await model.Review.bulkCreate(reviewMock);
// })();

//This is for deleting tables
// (async () => {
//     await model.transportMethod.drop()
// })()

//This is for deleting data
// (async () => {
//     await model.TransportLine.destroy({where: {
//         id:[4,6,8,9]
//     }});
// })()
