export class KnowledgeRecalledActor {
   constructor(data)
   {
      this.actorID = data.id;
      this.img = data.img;
      this.name = data.name;
      this.visibility = false;
      this.level = data.system.details.level.value;
      this.immunities = data.system.traits.di?.value || [];
      this.resistances = data.system.traits.dr?.value || [];
      this.weaknesses = data.weaknesses;
      this.type = data.type;
      this.fortitudeSave = data.saves.fortitude.dc.value;
      this.reflexSave = data.saves.reflex.dc.value;
      this.willSave = data.saves.will.dc.value;
   }




      //this.armorClass.value = data.attributes.ac.value;
     // this.armorClass.beforeDC = data.attributes.dex.mod;
     // this.armorClass.afterDC = armorClass.beforeDC;

     // this.fortitudeSave.beforeDC = data.attributes.con.mod;
     // this.fortitudeSave.afterDC = fortitudeSave.beforeDC;
    //  this.reflexSave.value = data.saves.ref.value;
     // this.reflexSave.beforeDC = data.attributes.dex.mod;
      //this.reflexSave.afterDC = reflexSave.beforeDC;
      //this.willSave.value = data.saves.will.value;
      //this.willSave.beforeDC = data.attributes.wis.mod;
      //this.willSave.afterDC = willSave.beforeDC;


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
   getBaseCharacterInfo()
   {
      return {
         name: this.name,
         actorImg: this.img,
         visibility: false
      }
   };
   getSaves()
   {
      return {
         fortitude: this.fortitudeSave,
         reflex: this.reflexSave,
         will: this.willSave
      }

   }
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


