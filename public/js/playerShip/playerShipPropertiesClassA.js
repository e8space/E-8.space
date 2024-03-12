class PlayerShipPropertiesClassA {


  static imageResourceObjects = {
    "initial" : {
      name : "ship01ClassA",
      filename : "SpaceShip3D-2D",
      type : ResourceObject.TYPES.png,
      resourcePath : "/resources/ships/ship_01/images/"
    },

    "eagle" : {
      name : "ship_02",
      filename : "ship_02",
      type : ResourceObject.TYPES.png,
      resourcePath : "/resources/ships/ship_02/images/"
    }
  }

  static generic = {
    maxVelX: 4,
    maxVelY: 4,
    accX: 0.3,
    accY: 0.3
  }

  static cargo = {
    maxTotal: 1000,
    crystals: {
      amount: 50,
      max: 200
    }
  }

  static engineTrail = {
    type: EngineTrailFactory.ENGINE_TRAIL_TYPES.engineTrailA,
    posDX : -20,
    posDY :27
  }

  static propulsion = {
    type : PropulsionFactory.PROPULSION_TYPES.ionA,
    posDX: -15,
    posDY: 25
  }

  static fuel = {
    type: FuelFactory.FUEL_TYPES.xenon,
    amount: 100,
    max: 100
  }

  static shield = {
    type: ShieldFactory.SHIELD_TYPES.classAShield,
    posDX: -70,
    posDY: -115
  }

  static terminationSequence = {
    type: ExplosionFactory.EXPLOSION_TYPES.classAPlayerShipExplosion,
    posDX: -40,
    posDY: -50
  }

  static features = [
    {
      Tractor: {
        controlAssignment: "KeyT",
        type: Tractor
      }
    },
    {
      Probe: {
        controlAssignment: "KeyP",
        type: Probe
      }
    }
  ]

  static weapons = {

    PhotonTorpedo : {
      controlAssignment : "Space",
      type: WeaponFactory.WEAPON_TYPES.photonTorpedo,
      amount: 10,
      posDX: 90,
      posDY: 27
    },

    PhotonTorpedoFireAndForget : {
      controlAssignment : "ControlRight",
      type : WeaponFactory.WEAPON_TYPES.photonTorpedoFireAndForget,
      amount: 10,
      posDX : 60,
      posDY : 27
    },

    Laser : {
      controlAssignment : "KeyL",
      type : WeaponFactory.WEAPON_TYPES.laser,
      amount: 1,
      posDX : 145,
      posDY : 25
    }
  }
}