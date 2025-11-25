import { defineStore } from 'pinia'
import { format } from 'date-fns-tz'

export const useNotesStore = defineStore('notes', {
    state: () => ({
        activeNote: null,
        activeReminderFilter: false,
        notes: {
            "1": {
                id: 1,
                labels: ["Personal", "Work"],
                title: "Brainstorming Session Highlight on all the things i have no idea what i'm writing, this is a long title that should get truncated",
                subtitle: "Capture your team's best ideas here, well if you want to do it.",
                content: "This note contains a summary of our latest brainstorming session, focusing on creative solutions and new approaches.",
                links: {
                    "1": "http://.......com"
                },
                tasks: {
                    "1": { id: 1, description: "Review session notes", completed: true, timer: true, reminderDate: new Date() },
                    "2": { id: 2, description: "Share with team", completed: true, timer: false, reminderDate: null },
                    "3": { id: 3, description: "Schedule follow-up meeting", completed: false, timer: false, reminderDate: null },
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
                title: "Helping a local business",
                subtitle: "Amet minim mollit non deserunt iluminated his shop poorly.",
                content: "Discussed ways to support local shops, including marketing tips and community engagement.",
                links: {
                    "1": "https://stackoverflow.com/questions/70733673/vuejs-how-to-bind-href-within-v-for",
                    "2": "http://.......es"
                },
                tasks: {
                    "1": { id: 1, description: "Create flyer", completed: false, timer: false, reminderDate: null },
                    "2": { id: 2, description: "Contact local shop owners", completed: false, timer: false, reminderDate: null },
                    "3": { id: 3, description: "Organize event", completed: false, timer: false, reminderDate: null },
                },
                img: [
                    "https://bihomes.es/app/uploads/2022/10/diseno-interiores-salon-casa.jpg",
                ],
                last_edited: new Date("2025-11-01T12:34:21")
            },
            "3": {
                id: 3,
                labels: ["Team", "Work", "Personal",],
                title: "Weekly Team Update",
                subtitle: "Document this week's accomplishments, challenges, and next steps. I don't think you want to read what we hadn't done due to time constraints.",
                content: "This week, the team completed the initial project phase and outlined goals for the upcoming sprint.",
                links: {
                },
                tasks: {
                },
                img: [
                    "https://images.unsplash.com/photo-1759818319027-dc631ed9732b",
                ],
                last_edited: new Date("2025-11-17T09:00:00")
            },
            "4": {
                id: 4,
                labels: ["Ideas", "Work"],
                title: "Streamline Your Workflow with These Tips",
                subtitle: "In today's fast-paced environment we are going to do nothing :/",
                content: "Learn how to streamline your workflow, prioritize tasks, and collaborate effectively with your team.",
                links: {
                    "1": "http://.......com"
                },
                tasks: {
                    "1": { id: 1, description: "Read article", completed: true, timer: true, reminderDate: null },
                    "2": { id: 2, description: "Apply one tip", completed: true, timer: true, reminderDate: null },
                    "3": { id: 3, description: "Share feedback", completed: false, timer: true, reminderDate: null },
                },
                img: [
                    "https://images.unsplash.com/photo-1762088776943-28a9fbadcec4",
                    "https://bihomes.es/app/uploads/2022/10/diseno-interiores-salon-casa.jpg",
                ],
                last_edited: new Date("2025-11-17T09:00:00")
            },
            "5": {
                id: 5,
                labels: ["Project"],
                title: "Client Meeting Notes",
                subtitle: "Keep a record of all client interactions in one place so you can easily refer back to them.",
                content: "Notes from the latest client meeting, including action items and follow-up tasks.",
                links: {
                    "1": "https://stackoverflow.com/questions/70733673/vuejs-how-to-bind-href-within-v-for",
                    "2": "http://.......es"
                },
                tasks: {
                    "1": { id: 1, description: "Send thank you email", completed: false, timer: false, reminderDate: null },
                    "2": { id: 2, description: "Update CRM", completed: false, timer: false, reminderDate: null },
                    "3": { id: 3, description: "Prepare proposal", completed: false, timer: false, reminderDate: null },

                },
                img: [
                    "https://bihomes.es/app/uploads/2022/10/diseno-interiores-salon-casa.jpg",
                ],
                last_edited: new Date("2025-11-01T12:34:21")
            },
            "6": {
                id: 6,
                labels: ["Update", "Work", "Personal",],
                title: "Project Kickoff Plan",
                subtitle: "Lay out the initial roadmap for your new project.",
                content: "Outlined the project scope, key milestones, and assigned roles for the kickoff.",
                links: {
                },
                tasks: {
                    "1": { id: 1, description: "Finalize roadmap", completed: false, timer: false, reminderDate: null },
                    "2": { id: 2, description: "Assign tasks", completed: false, timer: false, reminderDate: null },
                    "3": { id: 3, description: "Schedule kickoff meeting", completed: false, timer: false, reminderDate: null },
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
        updateLastEdited() {
            this.notes[this.activeNote].last_edited = new Date();
        },
        newTask(name) {
            const note = this.notes[this.activeNote];
            const newId = Object.keys(note.tasks || {}).length + 1;
            note.tasks[newId] = { id: newId, description: name, completed: false, timer: false, reminderDate: null };
        },
        addReminderToTask(task, date){
            const note = this.notes[this.activeNote];
            note.tasks[task].reminderDate = date;
            note.tasks[task].timer = true;
        },

        setReminderDateToTask(task){
            /*FORMAT = EX. 12 Nov, 8:01 AM*/
            const date = this.notes[this.activeNote].tasks[task].reminderDate;
            return format(date, "d LLL, h:mm a", { timeZone: 'Europe/Madrid' });
        },
        newListNoteItem(newTitle, newSubtitle, newContent, newLabels){
            const newId = (this.notesArray).length + 1;
            this.notes[newId] = { id: Number(newId), labels: newLabels || [], title: newTitle, subtitle: newSubtitle, content: newContent, links: {}, tasks: {}, img: [], last_edited: new Date() };
        }
    },
},
)