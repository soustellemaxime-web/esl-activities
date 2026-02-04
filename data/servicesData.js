export const servicesData = [
  {
    id: "ambulance",
    label: "Ambulance",
    img: "assets/images/services/main/ambulance.png",
    compounds: [
    { with: "driver", result: "Ambulance driver", img: "assets/images/services/compounds/ambulancedriver.png" },
      { with: "car", result: "Ambulance car", img: "assets/images/services/compounds/ambulancecar.png" },
      { with: "station", result: "Ambulance station", img: "assets/images/services/compounds/ambulancestation.png" }
    ]
  },
  {
    id: "fire",
    label: "Fire",
    img: "assets/images/services/main/fire.png",
    compounds: [
      { with: "fighter", result: "Firefighter", img: "assets/images/services/compounds/firefighter.png" },
      { with: "truck", result: "Fire truck", img: "assets/images/services/compounds/firetruck.png" },
      { with: "station", result: "Fire station", img: "assets/images/services/compounds/firestation.png" },
      { with: "jacket", result: "Fire jacket", img: "assets/images/services/compounds/firejacket.png" }
    ]
  },
  {
    id: "life",
    label: "Life",
    img: "assets/images/services/main/life.png",
    compounds: [
      { with: "boat", result: "Lifeboat", img: "assets/images/services/compounds/lifeboat.png" },
      { with: "jacket", result: "Life jacket", img: "assets/images/services/compounds/lifejacket.png" }
    ]
  },
  {
    id: "police",
    label: "Police",
    img: "assets/images/services/main/police.png",
    compounds: [
      { with: "officer", result: "Police officer", img: "assets/images/services/compounds/policeofficer.png" },
      { with: "station", result: "Police station", img: "assets/images/services/compounds/policestation.png" },
      { with: "car", result: "Police car", img: "assets/images/services/compounds/policecar.png" },
      { with: "man", result: "Policeman", img: "assets/images/services/compounds/policeman.png" },
      { with: "woman", result: "Policewoman", img: "assets/images/services/compounds/policewoman.png" }
    ]
  },
  {
    id: "truck",
    label: "Truck",
    img: "assets/images/services/main/truck.png",
    compounds: [
      { with: "driver", result: "Truck driver", img: "assets/images/services/compounds/truckdriver.png" },
      { with: "station", result: "Truck station", img: "assets/images/services/compounds/truckstation.png" }
    ]
  }
];

export const servicesRelatedWords = [
  { id: "boat", label: "Boat", img: "assets/images/services/related/boat.png" },
  { id: "car", label: "Car", img: "assets/images/services/related/car.png" },
  { id: "driver", label: "Driver", img: "assets/images/services/related/driver.png" },
  { id: "fighter", label: "Fighter", img: "assets/images/services/related/fighter.png" },
  { id: "jacket", label: "Jacket", img: "assets/images/services/related/jacket.png" },
  { id: "man", label: "Man", img: "assets/images/services/related/man.png" },
  { id: "officer", label: "Officer", img: "assets/images/services/related/officer.png" },
  { id: "station", label: "Station", img: "assets/images/services/related/station.png" },
  { id: "truck", label: "Truck", img: "assets/images/services/related/truck.png" },
  { id: "woman", label: "Woman", img: "assets/images/services/related/woman.png" }
];
