import { CONSTANTS } from "./constants/constants";
import { getActiveEncounters, getActor } from "./control/utilities";
import { log } from "./lib/debugger";
import { NPCModel } from "./models/NPCModel";

/**
 * Parent class which I embed other singleton manager classes to.
 *
 * @class
 */
// eslint-disable-next-line no-unused-vars
export class KnowledgeRecalled extends Application {
   constructor() {
      const moduleData = game.modules.get(CONSTANTS.moduleId);
      if (!moduleData?.public?.knowledgeRecalled) {
         super();
         return this;
      }
      return moduleData.public.knowledgeRecalled;
   }

   populateGMJournal() {
      const activeEncounters = getActiveEncounters();
      log.debug(activeEncounters);
   }

   testNpcModel(actorId) {
      const npc = getActor(actorId);
      const npcModel = new NPCModel(npc);
      log.debug(npcModel);
   }

   // Depricate
   getActors() {
      return this.loadedNPCs;
   }

   // Depricate
   getEncounteredActors() {
      return this.NpcsInEncounters;
   }

   // Depricate
   addToEncounteredActorArray(NPCActor) {
      const isDuplicate = this.checkForDuplicateActor(NPCActor.actorId);
      if (!isDuplicate) {
         this.encounteredNPCActors.push(NPCActor);
      }
   }

   // Depricate
   addToNpcActorsArray(NPCActor) {
      // const isDuplicate = this.checkForDuplicateActor(NPCActor.actorId);
      // if (!isDuplicate)
      // {
      //    this.npcActors.push(NPCActor);
      // }
      this.npcActors.push(NPCActor);
   }

   // Depricate
   checkForDuplicateActor(actorId) {
      return this.documentedActors.some((npcActor) => npcActor.actorId === actorId);
   }
}