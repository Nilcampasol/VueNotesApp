<script setup>
import ListNoteItem from './ListNoteItem.vue';
import { ref } from 'vue';
import { useNotesStore } from '../stores/storenotes';
import CreateNoteItemDialog from './CreateNoteItemDialog.vue';

const notesStore = useNotesStore()

function applyFilter() {
    notesStore.activeReminderFilter = true
}

function removeFilter() {
    notesStore.activeReminderFilter = false
}

</script>

<template>
    <div class="one-third test-bg1">
        <!-- Container 1: Header -->
        <div class="notes-header">
            <h2>Notes</h2>
            <div class="notes-header-divider"></div>
            <button id="create-btn" class="create-btn">+ Create New</button>
        </div>

        <!-- Container 2: Filters -->
        <div class="notes-filters">
            <span><strong>24</strong> Notes</span>
            <div class="notes-filters-right">
                <span>Date created:</span>
                <select class="filter-select">
                    <option>Newest first</option>
                    <option>Oldest first</option>
                    <option>By priority</option>
                    <option>By label</option>
                </select>
                <i class="bi bi-funnel upload-icon"></i>
            </div>
        </div>

        <!-- Container 3: Tabs -->
        <div class="notes-tabs">
            <button class="tab-btn" :class="{ active: !notesStore.activeReminderFilter }"
                @click="removeFilter()">All</button>
            <button class="tab-btn" :class="{ active: notesStore.activeReminderFilter }"
                @click="applyFilter()">Reminder</button>
        </div>

        <!-- Container 4: Notes List -->
        <div id="notes-list" class="notes-list">
            <ListNoteItem v-for="note in notesStore.notesArray" :key="note.id" :note-id="note.id" />
        </div>

    </div>
</template>

<style scoped>
.notes-list {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 0;
    scrollbar-width: thin;
    scrollbar-color: var(--line) var(--surface);
    transition: scrollbar-color 0.3s, opacity 0.3s;
    opacity: 1;
    overflow-y: scroll;
}

.one-third {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: var(--radius);
    min-width: 460px;
    flex: 0 0 220px;
    width: 460px;
    margin-bottom: 40px;
    flex-shrink: 1;
}

.main-content2,
.one-third.test-bg1,
.two-thirds {
    max-height: calc(100vh - 56px);
    min-height: 0;
    display: flex;

}

.one-third.test-bg1 {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
}

/* CONTAINER 1 */
.notes-header {
    display: flex;
    align-items: center;
    padding-top: 28px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--line);
    padding-left: 24px;

}

.notes-header h2 {
    font-size: 22px;
    font-weight: bold;
    margin: 0;
    padding-right: 24px;
}

.notes-header-divider {
    border-right: 1px solid var(--line);
    height: 32px;
    margin-right: 24px;
}

.create-btn {
    background: #fff;
    color: var(--blue);
    border: 1px solid var(--line);
    border-radius: var(--radius-sm);
    font-weight: bold;
    padding: 8px 18px;
    cursor: pointer;
    font-size: 15px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .03);
    transition: background 0.15s;
}

.create-btn:hover {
    background: var(--blue-weak);
}

/* CONTAINER 2 */
.notes-filters {
    display: flex;
    align-items: center;
    gap: 18px;
    font-size: 14px;
    border-bottom: 1px solid var(--line);
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 26px;
    padding-right: 26px;
    ;
}

.notes-filters-right {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: auto;
}

.notes-filters-right span {
    color: var(--muted);
    font-weight: 500;
}

.filter-select {
    border: none;
    border-radius: var(--radius-sm);
    padding: 4px 10px;
    font-size: 14px;
    background: #fff;
    color: var(--text);
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
}

.bi-funnel {
    color: var(--muted);
    font-size: 18px;
}

/* CONTAINER 3 */
.notes-tabs {
    display: flex;
    gap: 0;
    border-bottom: 1.5px solid var(--line);
}

.tab-btn {
    flex: 1;
    background: transparent;
    border: none;
    font-size: 15px;
    font-weight: 600;
    color: var(--muted);
    padding: 10px 0;
    cursor: pointer;
    position: relative;
    transition: color 0.15s;
}

.tab-btn.active,
.tab-btn:hover {
    color: var(--blue);
}

.tab-btn.active::after,
.tab-btn:hover::after {
    content: "";
    position: absolute;
    left: 0%;
    right: 0%;
    bottom: -2px;
    height: 3px;
    background: var(--blue);
    border-radius: 2px;
}
</style>
