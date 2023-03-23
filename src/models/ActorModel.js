export class NPCActor extends Actor {
   constructor(data)
   {
      super(data);
      // There are a few good places to query data. The first is on the main actor and then under system.
      // under items there are a lot of things as well. Spells, melee, weapons, etc.
     // this.name = data.actor.name;
      this.actorID = data.actorID;
      this.img = data.img;
      this.name = data.name;
   }

      //this.actorID = data.actorID;
     // this.level = data.data.details.level.value;
     // this.description.value = data.actor.system.details.publicNotese;
     // this.actorImg = data.actor.img;
     // this.traits.value = data.data.details.race.value;
      //this.armorClass.value = data.attributes.ac.value;
     // this.armorClass.beforeDC = data.attributes.dex.mod;
     // this.armorClass.afterDC = armorClass.beforeDC;
      //this.fortitudeSave.value = data.actor.system.saves.fortitude;
     // this.fortitudeSave.beforeDC = data.attributes.con.mod;
     // this.fortitudeSave.afterDC = fortitudeSave.beforeDC;
    //  this.reflexSave.value = data.saves.ref.value;
     // this.reflexSave.beforeDC = data.attributes.dex.mod;
      //this.reflexSave.afterDC = reflexSave.beforeDC;
      //this.willSave.value = data.saves.will.value;
      //this.willSave.beforeDC = data.attributes.wis.mod;
      //this.willSave.afterDC = willSave.beforeDC;
      //this.immunities.value = data.traits.di.value;
      //this.resistances.value = data.traits.dr.value;
     //this.weaknesses.value = data.traits.dv.value;




   // baseCharacterInfo = {
   //    name: "",
   //    actorImg: "",
   //    visibility: false
   // }
   // rarity = {
   //    value: "",
   //    visibility: false
   // }
   // //traits = new Map(String, Boolean)
   //
   // armorClass = {
   //    value: 0,
   //    visibility: false
   // }
   // fortitudeSave = {
   //    value: 0,
   //    visibility: false
   // }
   // reflexSave = {
   //    value: 0,
   //    visibility: false
   // }
   // willSave = {
   //    value: 0,
   //    visibility: false
   // }
   //immunities = new Map(String, Boolean)
   //resistances = new Map(String, Boolean)
  // weaknesses = new Map(String, Boolean)
  //  abilities = {
  //     ability: [
  //        {
  //           name: "",
  //           description: "",
  //           visibility: false
  //        }
  //     ]
  //  }
  //  attacks = [
  //        {
  //           name: "",
  //           description: "",
  //           type: "",
  //           visibility: false
  //        }
  //  ]
  //  passiveAbilities = {
  //     passiveAbility: [
  //        {
  //           name: "",
  //           description: "",
  //           visibility: false
  //        }
  //     ]
  //  }
  //  spells = {
  //     spell: [
  //        {
  //           name: "",
  //           description: "",
  //           visibility: false
  //        }
  //     ]
  //  }
  //
  //  getBaseCharacterInfo()
  //  {
  //     // designed to read the characters queried from game.actors.get(actorID)
  //     this.name = this.data.name;
  //     this.baseCharacterInfo.actorImg = this.data.img;
  //     this.rarity.value = this.data.system.traits.rarity;
  //     this.armorClass.value = this.data.system.attributes.ac;
  //  }
  //  getSaves()
  //  {
  //     this.fortitudeSave.value = this.data.saves.fortitude;
  //     this.reflexSave.value = this.data.saves.reflex;
  //     this.willSave.value = this.data.saves.will;
  //  }
  //  getAttacks()
  //  {
  //     let actionsLength = this.data.system.actions.length;
  //     for (let i = 0; i < actionsLength; i++)
  //     {
  //        let action = this.data.system.actions[i];
  //        if (action.attackRollType === "PF2E.NPCAttackMelee")
  //        {
  //           this.attacks.push({
  //              name: action.label,
  //              description: action.description,
  //              type: "range",
  //              visibility: false
  //           })
  //        }
  //        else if (action.attackRolltype === "PF2E.NPCAttackRanged")
  //        {
  //           this.attacks.push({
  //              name: action.label,
  //              description: action.description,
  //              type: "range",
  //              visibility: false
  //           })
  //        }
  //        else
  //        {
  //           this.attacks.push({
  //              name: action.label,
  //              description: action.description,
  //              type: "no-match; debug",
  //              visibility: true
  //           })
  //           console.log("DEBUG FLAG, DETERMINE attack type and create a rule")
  //        }
  //
  //     }
  //  }
}

// export class KnowledgeRecalledActor extends NPCActor {
//    // to eliminate unnecessary data, we can provide an override function that will override DC when the GM chooses to do so,
//    // and if defaults are requested, we can simply recalculate or recall from foundry.
//    description = "";
//    difficultyAdjustment = [
//       {
//          adjustment: "normal",
//          playerID: ""
//       }
//    ];
//    notes = {
//       GMNotes: {
//          notes: "",
//          visibility: false
//       },
//       playerNotes: [
//          {
//             playerID: "",
//             description: ""
//          },
//       ]
//    };
// }


