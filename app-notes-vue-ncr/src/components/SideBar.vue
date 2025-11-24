
<script setup>
</script>

<template>
    <div class="div rail">
        <button class="rail-logo" title="Settings"> 
            <i class="bi bi-subtract" style="transform: rotate(90deg);"></i>
        </button>
        <button class="rail-btn" title="Notes" aria-current="page">
            <i class="bi bi-columns-gap"></i>
        </button>
        <button class="rail-btn" title="Pinned">
            <i class="bi bi-folder"></i>
        </button>
        <button class="rail-btn" title="Tasks">
            <i class="bi bi-envelope"></i>
        </button>
        <button class="rail-btn " title="Archive">
            <i class="bi bi-person-circle"></i>
        </button>
        <button class="rail-btn active" title="Settings">
            <i class="bi bi-file-earmark-text"></i>
        </button>
        <button class="rail-btn" title="Notes" aria-current="page">
            <i class="bi bi-layout-sidebar-inset-reverse"></i>
        </button>
        <button class="rail-btn" title="Pinned">
            <i class="bi bi-calendar-event"></i>
        </button>
        <button class="rail-btn" title="Tasks">
            <i class="bi bi-chat-square"></i>
        </button>
    </div>
</template>

<style scoped>
.rail {
    border-right: 1px solid var(--line);
    padding-top: 8px;
    padding-left: 8px;
    padding-right: 8px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: fit-content;
    height: 100%;
    border-top: 1px solid var(--line);
}

.rail-logo {
    width: 48px;
    height: 48px;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    background: transparent;
    display: grid;
    place-items: center;
    transition: .15s background ease;
    margin-bottom: 20px;

    i.bi {
        font-size: 24px;
        display: inline-block;
        vertical-align: middle;
        color: var(--blue);
    }
}

.rail-btn {
    width: 48px;
    height: 48px;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    background: transparent;
    display: grid;
    place-items: center;
    transition: .15s background ease;

    i.bi {
    font-size: 24px;
    display: inline-block;
    vertical-align: middle;
    color: var(--blue);
}
}

.rail-btn:hover {
    background: #e9edf6
}

.rail-btn.active {
    background: var(--blue-weak);
    box-shadow:
        0 0 0 2px var(--blue),
        0 0 0 4px var(--light-blue);
    border: none;
}
</style>