import GMJournalApplication from "./view/GMJournal/GMJournal.js";
import { createUploadFolder } from "./API/dataManager.js";
import {getConstants, knowledgeRecalledIconLauncher} from "./constants/constants.js";
import {getAllActorsFromEncounters} from "./control/Actor.js";

Hooks.once('ready', getConstants());
Hooks.once('ready', () => new GMJournalApplication().render(true, { focus: true }));
//Hooks.once('ready', () => knowledgeRecalledIconLauncher());
Hooks.once('ready', () => createUploadFolder());
Hooks.once('ready', async () => {
   const knowledgeRecalledActors = await getAllActorsFromEncounters();
   console.log("Knowledge Recalled Actors: ", knowledgeRecalledActors);
   length = knowledgeRecalledActors.length;
   for (let index=0; index < length; index++){
      console.log("Character Info: ", knowledgeRecalledActors[index].getBaseCharacterInfo());
      console.log("Saves: ", knowledgeRecalledActors[index].getSaves())
   }
});
Hooks.once('ready', () => createUploadFolder());
