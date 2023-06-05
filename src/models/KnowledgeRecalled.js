import NPCActor from "./ActorModel.js";

// eslint-disable-next-line no-unused-vars
export default class KnowledgeRecalled extends Application
{
   static NPCActors = [];
   constructor(FoundryActors) 
   {
      super();
      console.log("Storing NPC Actors");

      for (const element of FoundryActors)
      {
         KnowledgeRecalled.NPCActors.push(new NPCActor(element).getData());
      }
      //console.log("Displaying NPCActors: ", KnowledgeRecalled.NPCActors);
     // console.log("Displaying first actor: ", NPCActors[0].getData());
   }


   static _onReady(listOfFoundryActors)
   {
      ui.KnowledgeRecalled = new KnowledgeRecalled(listOfFoundryActors);
   }

   static getActors()
   {
      return this.NPCActors;
   }
}