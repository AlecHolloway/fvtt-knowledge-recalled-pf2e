import {KnowledgeRecalledActor} from "../models/ActorModel.js";


//export async function getActorFromID(actorID) {
   //return await game.actors.get(actorID);
//}


export async function getAllActorsFromEncounters() {
   const encounters = await ui.combat.combats;
   const activeEncounter = encounters.find((encounter) => encounter.active === true);

   if (!activeEncounter) {
      console.log("No active encounter found.");
      return [];
   }

   const combatants = activeEncounter.combatants;
   return combatants.map((combatant) =>
   {
      const foundryActor = combatant.actor;
      console.log("Foundry Actor: ", foundryActor)
      return KnowledgeRecalledActorFactory(foundryActor);
   });
}



function KnowledgeRecalledActorFactory(foundryNPC) {
   return new KnowledgeRecalledActor(foundryNPC);
}
/*
   export function getNPCGlobalActor() {

}*/
