import GMJournalApplication from "./view/GMJournal/GMJournal.js";
import { createUploadFolder } from "./API/dataManager.js";
import {getConstants, knowledgeRecalledIconLauncher} from "./constants/constants.js";
import {getAllActorsFromEncounters} from "./control/Actor.js";

Hooks.once('ready', getConstants());
Hooks.once('ready', () => new GMJournalApplication().render(true, { focus: true }));
Hooks.once('ready', () => knowledgeRecalledIconLauncher());
Hooks.once('ready', () => createUploadFolder());
Hooks.once('ready', async () => {
   const npcActors = await getAllActorsFromEncounters();
   console.log("Array of npcActors that will go in GM Journal: ", npcActors);
});
Hooks.once('ready', () => createUploadFolder());
