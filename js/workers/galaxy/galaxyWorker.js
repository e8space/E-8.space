
let proceduralPlanet;

onmessage = (evt)=>{
  switch (evt.data.type) {

    case "init" : {
      //console.log(evt.data.payload);
      importScripts('proceduralPlanet.js');
      importScripts('sphereImageLib.js');
      importScripts('noise.js');
      importScripts('/util/util.js');

      proceduralPlanet = new ProceduralPlanet();
      break;
    }

    case "create" : {
      const planetData = evt.data.payload;
      //let planet = galaxyMap[distribution[Math.floor(Math.random()*99)]];
      proceduralPlanet.createPlanet({
        radius: planetData.radius,
        noiseRange : planetData.noiseRange,
        octavesRange : planetData.octavesRange,
        lacunarityRange : 0.5,
        persistenceOffset : 0,
        baseFrequencyOffset : planetData.baseFrequencyOffset,
        r : planetData.r,
        g: planetData.g,
        b : planetData.b,
        q : planetData.q
      }).then((planetImageBlob)=>{
        postMessage({
          imageBlob: planetImageBlob,
          planetData: planetData
        });
      })
      break;
    }
  }
}