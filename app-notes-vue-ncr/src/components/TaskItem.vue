<script setup>
import { useNotesStore } from '../stores/storenotes';
import { computed } from 'vue';
import { ref } from 'vue';

const props = defineProps({
    taskId: { type: [String, Number], required: true }
})

const notesStore = useNotesStore()

const task = computed(() => {
    const noteKey = notesStore.activeNote != null ? String(notesStore.activeNote) : null
    return notesStore.notes[noteKey].tasks[props.taskId]
})

const isActive = ref(false)

function onFocusIn() {
    isActive.value = true
}

function onFocusOut() {
    isActive.value = false
}

</script>

<template>
    <div class="task-row-wrapper" :class="{ active: isActive }" tabindex="0" @focusin="onFocusIn()"
        @focusout="onFocusOut()">
        <span class="task-drag" draggable="true">
            <i class="bi bi-grip-vertical"></i>
        </span>
        <div class="task-row" :class="{ active: isActive }">
            <div class="task-content">
                <div class="task-row-top">
                    <input type="checkbox" :data-task-id="task.id" v-bind:checked="task.completed"
                        v-model="task.completed">
                    <span class="task-title">{{ task.description }}</span>
                </div>
                <div class="task-row-bottom">
                    <div class="task-row-info">
                        <span class="task-deadline">
                            <i class="bi bi-flag"></i> + Add a Deadline
                        </span>
                        <span class="task-time">
                            <i class="bi bi-alarm"></i> + Add a timer
                        </span>
                    </div>
                    <div class="task-row-actions">
                        <button class="task-btn" title="Temporizador" @mousedown.prevent="onFocusIn()" tabindex="-1">
                            <i class="bi bi-stopwatch"></i>
                        </button>
                        <button class="task-btn" title="Flag" @mousedown.prevent="onFocusIn()" tabindex="-1">
                            <i class="bi bi-flag"></i>
                        </button>
                        <button class="task-btn" title="Breakpoint" @mousedown.prevent="onFocusIn()" tabindex="-1">
                            <i class="bi bi-flag-fill"></i>
                        </button>
                        <button class="task-btn" title="Editar" @mousedown.prevent="onFocusIn()" tabindex="-1">
                            <i class="bi bi-pencil"></i>
                        </button>
                        <button class="task-btn" title="Eliminar" @mousedown.prevent="onFocusIn()" tabindex="-1">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>
.task-row.active .task-drag {
    visibility: visible;
}

/* CONTAINER FOR EACH TASK ROW */
.task-row-wrapper {
    display: flex;
    align-items: stretch;
    gap: 0;
    background: none;
    border: none;
    min-height: 48px;
    cursor: pointer;
}

.task-row-wrapper .task-drag {
    visibility: hidden;
}

.task-row-wrapper.active .task-drag {
    visibility: visible;
}

.task-row-wrapper.active {
    border-radius: 50px;
    padding-left: 19px;
}

.task-row-wrapper {
    transition: background 0.15s, border-left 0.15s;
}

/* GRIP ICON MOVE */
.task-drag {
    color: var(--muted);
    font-size: 20px;
    cursor: grab;
    background: transparent;
    border: none;
    padding: 0;
    margin-right: 2px;
    margin-top: 16px;
    height: 100%;
    outline: none;
    transition: color 0.15s;
    visibility: hidden;
}

.task-row-wrapper.active .task-drag {
    visibility: visible;
    margin-left: -40px;
}

.task-row-wrapper:not(.active) .task-drag {
    visibility: hidden;
    margin-left: -20px;
}

/* CONTAINER FOR EACH TASK ROW */
.task-row {
    flex: 1;
    background: transparent;
    border-radius: 10px;
    transition: background 0.15s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: none;
    border: none;
    padding: 0;
    min-height: 48px;
    border-bottom: 1px solid var(--line);

}

.task-row.active {
    background: var(--rail, #f1f4fa);
    box-shadow: 0 1px 4px rgba(44, 62, 80, 0.04);
    border: 1px solid var(--line);
}

.task-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 16px 12px;
}

.task-row-top {
    display: flex;
    align-items: center;
    gap: 8px;
}

.task-title {
    font-weight: 600;
    font-size: 15px;
    color: var(--text);
}


.task-deadline {
    color: var(--muted);
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 4px;
    margin-right: auto;
}

.task-time {
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

.task-time:hover {
    border-color: var(--blue, #2f78ff);
    background: var(--blue-weak, #f1f6fd);
    color: var(--blue, #2f78ff);
}

.task-btn {
    background: none;
    border: none;
    color: var(--muted);
    cursor: pointer;
    padding: 2px 4px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    font-size: 16px;
    transition: background 0.15s, color 0.15s;
}

.task-btn:hover {
    background: var(--blue-weak, #e9f1ff);
    color: var(--blue, #2f78ff);
}

/* Checkbox base: amarillo */
.task-row input[type="checkbox"] {
    width: 18px;
    height: 18px;
    appearance: none;
    -webkit-appearance: none;
    background: #fff;
    border-radius: 4px;
    border: 2px solid #ffb347;
    margin-right: 4px;
    cursor: pointer;
    position: relative;
    outline: none;
    transition: border-color 0.15s, background 0.15s;
}

/* Checkbox base: amarillo */
.task-row input[type="checkbox"] {
    width: 18px;
    height: 18px;
    appearance: none;
    -webkit-appearance: none;
    background: #fff;
    border-radius: 4px;
    border: 2px solid #ffb347;
    margin-right: 4px;
    cursor: pointer;
    position: relative;
    outline: none;
    transition: border-color 0.15s, background 0.15s;
    vertical-align: middle;
    box-sizing: border-box;
    display: inline-block;
}

.task-row input[type="checkbox"]:checked {
    background-color: #ffb347;
    border-color: #ffb347;
}

.task-row input[type="checkbox"]:checked::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 6px;
    height: 12px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -60%) rotate(45deg);
    pointer-events: none;
}

.task-row-wrapper:nth-child(2) input[type="checkbox"] {
    border-color: #7ed957;
}

.task-row-wrapper:nth-child(2) input[type="checkbox"]:checked {
    background-color: #7ed957;
    border-color: #7ed957;
}

.task-row-wrapper:nth-child(3) input[type="checkbox"] {
    border-color: #3b82f6;
}

.task-row-wrapper:nth-child(3) input[type="checkbox"]:checked {
    background-color: #3b82f6;
    border-color: #3b82f6;
}

.task-row-wrapper.dragging {
    opacity: 0.5;
}

.task-row-wrapper.drag-over {
    border-top: 2px solid var(--blue, #2f78ff);
}

.editor-tasks.dragging-tasks .task-drag {
    visibility: visible !important;
    color: var(--blue, #2f78ff);
}


.task-row-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    margin-left: 34px;
    margin-top: 2px;
    flex-wrap: wrap;
}

.task-row-info {
    display: flex;
    align-items: center;
    gap: 18px;
    min-width: 0;
}

.task-row-actions {
    display: none;
}

.task-row.active .task-row-actions {
    display: flex;
    align-items: center;
    gap: 8px;
}
</style>