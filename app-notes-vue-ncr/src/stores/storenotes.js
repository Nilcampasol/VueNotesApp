import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', {
    state: () => ({
        activeNote: null,
        activeReminderFilter: false,
        notes: {
            "1": {
                id: 1,
                labels: ["Personal", "Work"],
                title: "TITLE 1",
                subtitle: "SUBTITLE 1",
                content: "CONTENT 1",
                links: {
                    "1": "http://.......com"
                },
                tasks: {
                    "1": { id: 1, description: "Finalize roadmap", completed: true, timer: false },
                    "2": { id: 2, description: "Assign tasks", completed: false, timer: false }
                },
                img: [
                    "https://images.unsplash.com/photo-1762088776943-28a9fbadcec4",
                    "https://bihomes.es/app/uploads/2022/10/diseno-interiores-salon-casa.jpg",
                ],
                last_edited: new Date()
            },
            "2": {
                id: 2,
                labels: ["Work"],
                title: "TITLE 2",
                subtitle: "SUBTITLE 2",
                content: "CONTENT 2",
                links: {
                    "1": "https://stackoverflow.com/questions/70733673/vuejs-how-to-bind-href-within-v-for",
                    "2": "http://.......es"
                },
                tasks: {
                    "1": { id: 1, description: "Prepare slides", completed: false, timer: true }
                },
                img: [
                    "https://bihomes.es/app/uploads/2022/10/diseno-interiores-salon-casa.jpg",
                ],
                last_edited: new Date("2025-11-01T12:34:21")
            },
            "3": {
                id: 3,
                labels: ["Ideas", "Work", "Personal",],
                title: "TITLE 3",
                subtitle: "SUBTITLE 3",
                content: "CONTENT 3",
                links: {
                },
                tasks: {
                    "1": { id: 1, description: "Prepare slides", completed: false, timer: true },
                    "2": { id: 2, description: "Slides", completed: false, timer: true },
                    "3": { id: 3, description: "Prepare", completed: false, timer: true },
                    "4": { id: 4, description: "Preslides", completed: false, timer: true },
                },
                img: [
                    "https://images.unsplash.com/photo-1759818319027-dc631ed9732b",
                ],
                last_edited: new Date("2025-11-17T09:00:00")
            },
            "4": {
                id: 4,
                labels: ["Personal", "Work"],
                title: "TITLE 1",
                subtitle: "SUBTITLE 1",
                content: "CONTENT 1",
                links: {
                    "1": "http://.......com"
                },
                tasks: {
                    "1": { id: 1, description: "Finalize roadmap", completed: true, timer: false },
                    "2": { id: 2, description: "Assign tasks", completed: false, timer: false }
                },
                img: [
                    "https://images.unsplash.com/photo-1762088776943-28a9fbadcec4",
                    "https://bihomes.es/app/uploads/2022/10/diseno-interiores-salon-casa.jpg",
                ],
                last_edited: new Date("2025-11-17T09:00:00")
            },
            "5": {
                id: 5,
                labels: ["Work"],
                title: "TITLE 2",
                subtitle: "SUBTITLE 2",
                content: "CONTENT 2",
                links: {
                    "1": "https://stackoverflow.com/questions/70733673/vuejs-how-to-bind-href-within-v-for",
                    "2": "http://.......es"
                },
                tasks: {
                    "1": { id: 1, description: "Prepare slides", completed: false, timer: true }
                },
                img: [
                    "https://bihomes.es/app/uploads/2022/10/diseno-interiores-salon-casa.jpg",
                ],
                last_edited: new Date("2025-11-01T12:34:21")
            },
            "6": {
                id: 6,
                labels: ["Ideas", "Work", "Personal",],
                title: "TITLE 3",
                subtitle: "SUBTITLE 3",
                content: "CONTENT 3",
                links: {
                },
                tasks: {
                    "1": { id: 1, description: "Prepare slides", completed: false, timer: true },
                    "2": { id: 2, description: "Slides", completed: false, timer: true },
                    "3": { id: 3, description: "Prepare", completed: false, timer: true },
                    "4": { id: 4, description: "Preslides", completed: false, timer: true },
                },
                img: [
                    "https://images.unsplash.com/photo-1759818319027-dc631ed9732b",
                ],
                last_edited: new Date("2025-11-19T09:00:00")
            }
        }
    }),
    getters: {
        notesArray: (state) => Object.values(state.notes),
        currentNote: (state) => {
            if (!state.activeNote) return null
            const key = String(state.activeNote)
            return state.notes?.[key] ?? null
        },
    },
    actions: {
        setNoteTime(last_edited) {
            const now = new Date();
            const diffMs = now - last_edited;
            const diffHours = diffMs / (1000 * 60 * 60);

            if (diffHours >= 24) {
                /*FORMAT = EX. 12-01-2025*/
                return last_edited.toLocaleDateString("es-ES", {
                    day: "numeric",
                    month: "numeric",
                    year: "2-digit"
                });
            } else {
                /*FORMAT = EX. 12:01*/
                return String(last_edited.getHours()).padStart(2, "0") + ":" + String(last_edited.getMinutes()).padStart(2, "0")
            }
        },
        newTask(){
            const note = this.notes[this.activeNote];
            const newId = Object.keys(note.tasks || {}).length + 1;
            note.tasks[newId] = { id: newId, description: "New Task", completed: false, timer: false };
        },
        // newListNoteItem(){
            
        // }
    },
},
)