<script setup>
import { useNotesStore } from '../stores/storenotes';
import { computed/*, watch */} from 'vue';

const notesStore = useNotesStore()

const props = defineProps({
    noteId: { type: [String, Number], required: true }
})

//watch(() => props.noteId, val => console.log('noteId changed:', val));

const note = computed(() => {
    if (!props.noteId) return null;
    const key = String(props.noteId);
    return notesStore.notes?.[key] ?? null;
});

const isActive = computed (() => String(notesStore.activeNote) === String(props.noteId));

const showNote = computed(() => {
  if (!note.value) return false // if note == null
  if (!notesStore.activeReminderFilter) return true // if filter it's not active = true
  return note.value.tasks && Object.values(note.value.tasks).some(t => t.timer) // if filter is active then = filter 
});

const tasksDone = computed(() => Object.values(note.value.tasks).filter(t => t.completed).length);
const tasksNum = computed(() => Object.values(note.value.tasks).length);
const linksNum = computed(() => Object.values(note.value.links).length);
const shownLabel = computed(() => note.value.labels[0]);
const labelsLeft = computed(() => note.value.labels.length - 1);
const noteTime = computed(() => notesStore.setNoteTime(note.value.last_edited));

</script>

<template>
    <div v-if="showNote" :class="{ active : isActive} " class="note-item listener-added" @click="notesStore.activeNote = note.id" :data-id="note.id">
        <div class="note-content">
            <div class="note-title" :title="note.title">
                {{ note.title }}
            </div>
            <div class="note-subtitle" :title="note.subtitle">
                {{ note.subtitle }}
            </div>
            <div class="note-meta">
                <span class="meta-tasks">
                    <i class="bi bi-list-check meta-icon"></i>
                    {{ tasksDone }}/{{ tasksNum }}
                </span>

                <span class="meta-link" v-if="note.links">
                    <i class="bi bi-link-45deg meta-icon"></i>
                    {{ linksNum }}
                </span>

                <span v-if="note.labels.length >= 1" :class="['label-' + shownLabel.toLowerCase()]"
                    class="meta-label"><i class="bi bi-tag-fill"></i>
                    {{ shownLabel }}
                </span>
                <span v-if="note.labels.length > 1" class="meta-label meta-label-overflow">
                    + {{ labelsLeft }}
                </span>
            </div>
            <div class="note-footer">
                <span class="note-time">{{ noteTime }}</span>
                <div class="-footer-divider"></div>
                <span class="note-notebook">
                    <i class="bi bi-journal"></i>
                    NoteBook-{{ note.id }}
                </span>
                <span v-if="note.tasks && Object.values(note.tasks).some(t => t.timer)" class="note-timer">
                    <i class="bi bi-alarm"></i>
                </span>
            </div>
        </div>
        <img class="note-image" :src="note.img[0]" alt="Nota">
    </div>
</template>

<style scoped>
.note-item {
    display: flex;
    align-items: flex-start;
    padding: 24px 24px 24px 24px;
    gap: 18px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .03);
    min-width: 0;
    border-bottom: 1px solid var(--line);
    border-left: 4px solid transparent;
    transition: background 0.15s, border-left-color 0.15s;
}

.note-item.active,
.note-item:hover {
    background: var(--blue-weak);
    border-left: 4px solid var(--blue);
}

.note-content {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.note-title {
    font-weight: bold;
    font-size: 16px;
}

.note-subtitle {
    color: var(--muted);
    font-size: 16px;
}

/* TRUNCATE */

.note-title,
.note-subtitle {
    overflow: hidden;
    text-overflow: ellipsis;
    line-clamp: 1;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}

.note-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: nowrap;
    overflow: hidden;
    min-width: 0;
}

.meta-icon,
.note-meta i {
    color: var(--muted);
    font-size: 16px;
    vertical-align: middle;
}

.note-timer .bi-alarm {
    color: var(--blue);
}

.note-notebook {
    color: var(--muted) !important;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 4px;
}

.note-notebook i {
    color: var(--muted);
    font-size: 16px;
}

.note-footer {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    margin-top: 4px;
}

.note-footer-divider {
    border-right: 1px solid var(--line);
    height: 16px;
    margin: 0 8px;
}

.note-image {
    width: 72px;
    height: 72px;
    object-fit: cover;
    border-radius: var(--radius-sm);
    margin-left: 8px;
}

.note-time {
    color: var(--muted);
    font-size: 14px;
}

.note-notebook {
    color: var(--blue);
    font-weight: 500;
}

.note-timer .meta-icon,
.note-timer {
    color: var(--blue);
}

.label-personal {
    background: #e0ffe0;
    color: #52c41a;
}

.label-project {
    background: #ffeee0;
    color: #ff974d;
}

.label-work {
    background: #ADD8E6;
    color: #1976d2;
}

.label-ideas {
    background: #FFD700;
    color: #b8860b;
}

.label-team {
    background: #FFA07A;
    color: #d84315;
}

.label-update {
    background: #20B2AB;
    color: #00695c;
}

.label-more {
    background: transparent;
    color: #888;
}

.label-personal i.bi-tag-fill {
    color: #52c41a;
}

.label-project i.bi-tag-fill {
    color: #ff974d;
}


.label-work i.bi-tag-fill {
    color: #1976d2;
}

.label-ideas i.bi-tag-fill {
    color: #b8860b;
}

.label-team i.bi-tag-fill {
    color: #d84315;
}

.label-update i.bi-tag-fill {
    color: #00695c;
}

.label-more i.bi-tag-fill {
    color: #888;
}
</style>