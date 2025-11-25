<script setup>
import { useNotesStore } from '../stores/storenotes';
import TaskItem from './TaskItem.vue';
import { computed } from 'vue'
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import { FloatLabel } from 'primevue';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';

const notesStore = useNotesStore()

const note = computed(() => notesStore.currentNote)

const last_edited_time = computed(() => {
    if (!note.value || !note.value.last_edited) return ''
    const d = new Date(note.value.last_edited)
    const pad = (n) => String(n).padStart(2, '0')
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
})

const visible = ref(false)

const editNoteDetailsPopupVisible = ref(false)

</script>

<template>
    <div class="two-thirds">
        <!-- TOOLBAR 1 MAIN CONTAINER -->
        <div class="toolbar toolbar-main" >
            <button id="group-excess-of-length-btn" class="toolbar-btn group-btn d-none">
                <i class="bi bi-list"></i>
            </button>
            <div id="toolbar-dropdown" class="toolbar-dropdown" style="display:none; position:absolute; z-index:100;">
                <button class="toolbar-btn star">
                    <i class="bi bi-star icon-star"></i>
                    <i class="bi bi-star-fill icon-star-fill"></i>
                    Favourite
                </button>
                <button class="toolbar-btn">
                    <i class="bi bi-arrows-move"></i>
                    Move
                </button>
                <button class="toolbar-btn">
                    <i class="bi bi-files"></i>
                    Copy
                </button>
                <button class="toolbar-btn">
                    <i class="bi bi-file-plus"></i>
                    Copy Plus
                </button>
                <button class="toolbar-btn">
                    <i class="bi bi-box-arrow-up"></i>
                    Export
                </button>
                <button class="toolbar-btn">
                    <i class="bi bi-printer"></i>
                    Print
                </button>
                <button class="toolbar-btn" @click="notesStore.deleteActiveNote()">
                    <i class="bi bi-trash"></i>Delete 
                </button>
            </div>

            <button class="toolbar-btn star" title="Favorite">
                <i class="bi bi-star icon-star"></i>
                <i class="bi bi-star-fill icon-star-fill"></i>
            </button>
            <div class="toolbar-group">
                <button class="toolbar-btn" title="Move">
                    <i class="bi bi-arrows-move"></i>
                </button>
                <button class="toolbar-btn" title="Copy">
                    <i class="bi bi-files"></i>
                </button>
                <button class="toolbar-btn" title="Edit" @click="editNoteDetailsPopupVisible = true">
                    <i class="bi bi-pen"></i>
                </button>

                <Dialog v-model:visible="editNoteDetailsPopupVisible" modal header="Edit note" :style="{ width: '25rem' }">
                    <FloatLabel variant="on" class="flex items-center gap-4 mb-4 mt-1">
                        <label for="title" class="font-semibold w-24">Title</label>
                        <InputText type="text" v-model="note.title" fluid/>
                    </FloatLabel>

                    <FloatLabel variant="on" class="flex items-center gap-4 mb-4 mt-1">
                        <label for="subtitle" class="font-semibold w-24">Subtitle</label>
                        <InputText type="text" v-model="note.subtitle" fluid/>
                    </FloatLabel>

                    <div class="flex justify-end gap-2" style="margin-left: 90px">
                        <Button type="button" label="Cancel" severity="secondary" @click="editNoteDetailsPopupVisible = false"
                            style="margin-right: 20px"></Button>
                        <Button type="button" label="Save" @click="editNoteDetailsPopupVisible = false"></Button>
                    </div>
                </Dialog>
            </div>
            <div class="toolbar-sep"></div>
            <div class="toolbar-group">
                <button class="toolbar-btn" title="Export">
                    <i class="bi bi-box-arrow-up"></i>
                </button>
                <button class="toolbar-btn" title="Print" onClick="print()">
                    <i class="bi bi-printer"></i>
                </button>

            </div>
            <div class="toolbar-sep"></div>
            <button class="toolbar-btn" title="Delete" @click="notesStore.deleteActiveNote()">
                <i class="bi bi-trash"></i>
            </button>
            <div class="toolbar-flex"></div>

            <div class="toolbar-flex"></div>
            <div class="toolbar-group">
                <button class="people-btn" type="button">
                    <i class="bi bi-people"></i>
                    <strong>2 People</strong>
                </button>
                <button class="upload-btn share-btn">
                    <i class="bi bi-person-plus"></i>
                    Share
                </button>
            </div>
        </div>

        <!-- TOOLBAR 2 MAIN CONTAINER -->
        <div class="toolbar toolbar-edit"  >
            <!-- Font size -->
            <button class="toolbar-btn" title="Font size">
                <i class="bi bi-type"></i>
            </button>
            <button class="dropdown-btn">
                <i class="bi bi-caret-down-fill" style="font-size: 8px;"></i>
            </button>
            <!-- Bold -->
            <button class="toolbar-btn" title="Bold">
                <i class="bi bi-type-bold"></i>
            </button>
            <!-- Italic -->
            <button class="toolbar-btn" title="Italic">
                <i class="bi bi-type-italic"></i>
            </button>
            <!-- Rayado -->
            <button class="toolbar-btn" title="Strikethrough">
                <i class="bi bi-type-strikethrough"></i>
            </button>
            <!-- Underline -->
            <button class="toolbar-btn" title="Underline">
                <i class="bi bi-type-underline"></i>
            </button>
            <div class="toolbar-sep"></div>
            <!-- Ordered List -->
            <button class="toolbar-btn" title="Numbered list">
                <i class="bi bi-list-ol"></i>
            </button>
            <!-- Unordered List -->
            <button class="toolbar-btn" title="Bulleted list">
                <i class="bi bi-list-ul"></i>
            </button>
            <div class="toolbar-sep"></div>
            <!-- Symbols -->
            <button class="toolbar-btn" title="Insert symbols">
                <i class="bi bi-card-list"></i>
            </button>
            <i class="bi bi-caret-down-fill" style="font-size: 8px; color:var(--muted)"></i>
            <div class="toolbar-sep"></div>
            <!-- Checklist -->
            <button class="toolbar-btn" title="Checklist">
                <i class="bi bi-ui-checks"></i>
            </button>
            <!-- Code -->
            <button class="toolbar-btn" title="Code">
                <i class="bi bi-code-slash"></i>
            </button>
            <!-- Comments -->
            <button class="toolbar-btn" title="Comment">
                <i class="bi bi-chat-left-text"></i>
            </button>
            <!-- Dot Line? -->
            <button class="toolbar-btn" title="Dot">
                <i class="bi bi-type-underline"></i>
            </button>
            <!-- Grid -->
            <button class="toolbar-btn" title="Grid">
                <i class="bi bi-grid-3x3-gap"></i>
            </button>
            <div class="toolbar-sep"></div>
            <!-- Highlight color -->
            <button class="toolbar-btn" title="Highlight color">
                <i class="bi bi-highlighter"></i>
            </button>
            <i class="bi bi-caret-down-fill" style="font-size: 8px; color:var(--muted)"></i>
            <!-- Text Color-->
            <button class="toolbar-btn" title="Text color">
                <i class="bi bi-palette"></i>
            </button>
            <i class="bi bi-caret-down-fill" style="font-size: 8px; color:var(--muted)"></i>

            <div class="toolbar-sep"></div>
            <!-- Insert image -->
            <button class="toolbar-btn" title="Insert image">
                <i class="bi bi-image"></i>
            </button>
            <div class="toolbar-sep"></div>
            <!-- Ctrl+Z (Undo) -->
            <button class="toolbar-btn" title="Undo (Ctrl+Z)">
                <i class="bi bi-arrow-return-right" style="transform: rotate(180deg);"></i>
            </button>
            <!-- Ctrl+Y (Redo) -->
            <button class="toolbar-btn" title="Redo (Ctrl+Y)">
                <i class="bi bi-arrow-return-left" style="transform: rotate(180deg);"></i>
            </button>
        </div>

        <!-- MAIN CONTAINER EDITOR -->
        <div class="editor-header" v-if="notesStore.activeNote">
            <i class="bi bi-journal-medical editor-note-icon"></i>
            <span class="editor-title">NoteBook-{{ note.id }}</span>
            <div class="editor-label">
                <span v-for="label in note.labels" class="meta-label" :class="'label-' + label.toLowerCase()"><i
                        class="bi bi-tag-fill"></i>{{ label }}</span>
            </div>
            <span class="editor-date">Last Edited: <span style="letter-spacing:0.5px">{{
                    last_edited_time}}</span></span>
        </div>
        <div class="editor-container" v-if="notesStore.activeNote"><a>
            </a>
            <div class="editor-main">
                <h1>{{ note.title }}</h1>
                <p>{{ note.subtitle }}</p>
                <div v-for="link in note.links">
                    <a class="editor-link" :href="`${link}`" target="blank">
                        {{ link }}
                    </a>
                </div>
            </div>
            <div class="editor-tasks">
                <TaskItem v-for="task in Object.values(note?.tasks || {})" :key="task.id" :task-id="task.id" />
            </div>
            <div class="add-task-row">
                <button class="add-task-btn" @click="visible = true">
                    <i class="bi bi-plus"></i> Add Task
                </button>

                <Dialog v-model:visible="visible" modal header="Add New Task" :style="{ width: '25rem' }">
                    <FloatLabel variant="on" class="flex items-center gap-4 mb-4 mt-1">
                        <label for="taskName" class="font-semibold w-24">Name</label>
                        <InputText type="text" v-model="taskname" fluid/>
                    </FloatLabel>

                    <div class="flex justify-end gap-2" style="margin-left: 90px">
                        <Button type="button" label="Cancel" severity="secondary" @click="visible = false"
                            style="margin-right: 20px"></Button>
                        <Button type="button" label="Save" @click="visible = false, notesStore.newTask(taskname)"></Button>
                    </div>
                </Dialog>

            </div>
            <div class="editor-images">
                <img v-for="images in note.img" :src="images" alt="Imagen de ejemplo" style="margin-bottom: 50px;">
            </div>
        </div>
    </div>
</template>

<style scoped>
.editor-images {
    margin-bottom: 50px;
}

.two-thirds {
    flex: 2;
    background: #fff;
    border-left: 1px solid var(--line);
    min-width: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.bi-journal-medical::before {
    margin-left: 20px;
}

/* MAIN TOOLBAR */
.toolbar {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #fff;
    padding-right: 12px;
    padding-left: 24px;
    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: var(--radius-sm);
    border-bottom: 1px solid var(--line);

}

.toolbar-btn {
    color: var(--muted);
    background: none;
    border: none;
    border-radius: 8px;
    padding: 6px;
    cursor: pointer;
    transition: background 0.15s, color 0.15s;
    display: flex;
    align-items: center;
}

.toolbar-dropdown {
    background: #fff;
    border: 1px solid var(--line);
    border-radius: var(--radius-sm);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.toolbar-btn.star {
    position: relative;
    margin-right: 10px;
}

.toolbar-btn.star .icon-star-fill {
    position: absolute;
    left: 6px;
    top: 6px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.15s;
}

.toolbar-btn.star:hover .icon-star-fill {
    opacity: 1;
}

.toolbar-btn.star:hover .icon-star {
    opacity: 0;
}

.toolbar-main .toolbar-btn.star:hover,
.toolbar-main .toolbar-btn.star.active {
    color: #ffc107;
    background: #fffbe6;
}

.toolbar.toolbar-main .toolbar-btn i.bi {
    font-size: 22px;
    display: inline-block;
    vertical-align: middle;
}

.toolbar-sep {
    width: 1px;
    height: 24px;
    background: var(--line);
    margin: 0 8px;
}

.toolbar-group {
    display: flex;
    align-items: center;
    gap: 6px;
}

.toolbar-flex {
    flex: 1;
}

.people-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    background: transparent;
    border: none;
    color: var(--muted);
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    padding: 6px 18px;
    transition: background 0.15s;
}

.people-btn i {
    color: var(--blue);
    font-size: 18px;
}

.people-btn:focus {
    outline: none;
}

.share-btn {
    background: var(--blue);
    color: #fff;
    border-radius: var(--radius-sm);
    padding: 7px 16px;
    display: flex;
    align-items: center;
    gap: 7px;
    border: none;
    cursor: pointer;
    transition: background 0.15s;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;

}

.share-btn .upload-icon {
    filter: brightness(2);
}

.share-btn:hover {
    background: #1e5ed6;
}

/* EDITOR TOOLBAR */
.toolbar-edit {
    margin-bottom: 20px;
    gap: 9px;
    flex-wrap: wrap;
    overflow-x: auto;
    padding: 6px 8px;
    border-bottom: 1px solid var(--line);
    background-color: var(--rail);
    border-radius: 0;
}

.toolbar-edit .toolbar-btn {
    color: var(--muted);
    background: none;
    border: none;
    border-radius: 8px;
    padding: 6px;
    cursor: pointer;
    transition: background 0.15s, color 0.15s;
    display: flex;
    align-items: center;
}

.toolbar-edit .toolbar-btn i,
.toolbar-edit .toolbar-btn svg {
    font-size: 22px;
}

.toolbar-edit .toolbar-btn:hover {
    background: var(--blue-weak);
    color: var(--blue);
}

.toolbar-edit .toolbar-sep {
    width: 1px;
    height: 20px;
    background: var(--line);
    margin: 0 6px;
}

#close-two-thirds-btn {
    display: none !important;
    font-size: 20px;
    letter-spacing: -9px;
    color: var(--blue);
}

/* CONTENT EDITOR */

.editor-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding-right: 64px;
    padding-left: 64px;
    padding-top: 40px;
    padding-bottom: 40px;
    scrollbar-width: thin;
    scrollbar-color: var(--line) white;
    transition: border-color 0.15s, background 0.15s;
    background-color: white;
}

.editor-header {
    display: flex;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 20px;
}

.editor-note-icon {
    color: var(--muted);
    margin-right: 10px;
}

.editor-title {
    font-size: 14px;
    font-weight: 500;
    flex: 1;
}

.editor-date {
    color: var(--muted);
    font-size: 13px;
    padding-right: 20px;
}

.editor-main {
    margin-bottom: 30px;
}

.editor-main h1 {
    color: var(--text);
    text-decoration: none;
    font-size: 22px;
    margin: 0 0 8px 0;
    margin-bottom: 30px;
}

.editor-main p {
    color: var(--text);
    text-decoration: none;
    margin: 0 0 8px 0;
    margin-bottom: 30px;
}

.editor-main .editor-link {
    color: var(--blue);
    text-decoration: underline;
    font-weight: 500;
    word-break: break-all;
}

.editor-tasks {
    display: flex;
    flex-direction: column;
}

.add-task-btn {
    background: none;
    border: none;
    color: var(--blue, #2f78ff);
    font-weight: 600;
    font-size: 15px;
    padding: 8px 0 0 32px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 10px;
}

.add-task-btn:hover {
    text-decoration: underline;
}

.editor-images {
    margin-top: 90px;
}

.editor-images img {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(44, 62, 80, 0.08);
    object-fit: cover;
}

.deadline-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.15);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.deadline-modal {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
    padding: 32px 24px 24px 24px;
    min-width: 320px;
    min-height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
}

.deadline-modal h3 {
    margin: 0 0 12px 0;
    font-size: 1.2em;
    font-weight: 600;
}

.deadline-modal input[type="date"],
.deadline-modal input[type="time"] {
    font-size: 1em;
    padding: 6px 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-family: inherit;
}

.deadline-modal .modal-btn {
    margin-top: 18px;
    padding: 6px 18px;
    border-radius: 6px;
    border: none;
    background: var(--blue, #2f78ff);
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.15s;
}

.deadline-modal .modal-btn:hover {
    background: #1c4e8a;
}

.breakpoint-btn {
    border: 1px solid var(--line, #e0e4ea);
    border-radius: 12px;
    background: transparent;
    color: var(--muted, #5a6a85);
    padding: 2px 10px;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
    background-color: white;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;

}

.breakpoint-btn:hover {
    border-color: var(--blue, #2f78ff);
    background: var(--blue-weak, #f1f6fd);
    color: var(--blue, #2f78ff);
}

.breakpoint-color {
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin-right: 4px;
    border: 1.5px solid #ccc;
    vertical-align: middle;
}

.dropdown-btn {
    border: 0;
    border-radius: 12px;
    cursor: pointer;
    background: transparent;
    display: grid;
    place-items: center;
}
</style>