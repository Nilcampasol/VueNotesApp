<script setup>

</script>

<template>
    <header class="topbar">
        <div class="topbar-main">
            <div class="page">
                <span class="chevron-double-custom">
                    <i class="bi bi-chevron-left"></i>
                    <i class="bi bi-chevron-left"></i>
                </span>
                <span class="app-title">Note</span>
            </div>

            <button id="close-two-thirds-btn" class="toolbar-btn close-btn d-none" title="Cerrar">
                <i class="bi bi-chevron-left"></i>
                <i class="bi bi-chevron-left"></i>
            </button>

            <button id="open-sidebar-btn" class="toolbar-btn d-none">
                <i class="bi bi-list"></i>
            </button>

            <div class="search">
                <i class="bi bi-search"></i>
                <input id="search" type="search" onkeyup="searchFunction()" placeholder="Search for anything…" />
                <button class="topbar-btn">
                    <i class="bi bi-journal-check"></i>
                </button>
                <button class="topbar-btn">
                    <i class="bi bi-bell"></i>
                </button>
            </div>
        </div>
        <div class="actions">
            <div class="avatar avatar--with-badge">
                EH
                <button class="avatar-badge" type="button" aria-label="status"></button>
            </div>
            <div class="div name">
                <a>Esther Howard</a>
                <a class="mail">estherH@gmail.com</a>
            </div>
            <button class="dropdown-btn">
                <i class="bi bi-caret-down-fill"></i>
            </button>
        </div>
    </header>
</template>

<style scoped>
.topbar {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    background: var(--surface);
    border-bottom: 1px solid var(--line);
    border-top: 1px solid var(--line);
}

.topbar-main {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 28px;
    padding: 8px;
}

.chevron-double-custom,
.bi-search {
    display: inline-flex;
    align-items: center;
    margin-left: 8px;
    color: var(--muted);

}

.chevron-double-custom .bi-chevron-left:first-child {
    margin-right: -10px;
}

.actions {
    border-left: 1px solid var(--line);
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 4px;
    margin-right: 16px;
}


.topbar-btn i {
    color: var(--muted);
    font-size: 20px;
}

.topbar-btn:hover i {
    color: var(--blue);
}

.header {
    width: calc(100% - 64px);
}

.page {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 200px;
    font-weight: 600;
}

.page span {
    font-size: 20px;
}

.header .bi-list {
    font-size: 22px;
}

.search {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 30px 8px 20px;
    margin-right: auto;
    width: 100%;

}

.search .bi-search {
    font-size: 22px;
    width: 22px;
    height: 22px;
    padding-right: 4px;
}

.search input {
    border: 0;
    outline: 0;
    width: 100%;
    background: transparent;
    font-size: 14px;
    color: var(--text);
}

.topbar-btn {
    border: 0;
    border-radius: 12px;
    cursor: pointer;
    background: transparent;
    display: grid;
    place-items: center;
}

.avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #f2b632;
    color: #ffffff;
    display: grid;
    place-items: center;
    font-weight: 700;
    margin-left: 10px;
}

.avatar--with-badge {
    position: relative;
    width: 38px;
    height: 38px;
}

.avatar-badge {
    position: absolute;
    top: -4px;
    right: -4px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #16a34a;
    border: 2px solid #fff;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .06);
    padding: 0;
    cursor: pointer;
    z-index: 2;
}

.topbar .name {
    display: flex;
    flex-direction: column;
    margin-left: 4px;
}

.name a:first-child {
    font-weight: 700;
    font-size: 14px;
}


.name a {
    line-height: 16px;
    font-size: 12px;
}

.name .mail {
    color: var(--muted);
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