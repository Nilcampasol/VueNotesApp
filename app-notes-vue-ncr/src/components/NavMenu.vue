<script setup>

</script>

<template>
<div class="sidebar-overlay"></div>
            <aside class="sidebar">
                <button class="close-sidebar d-none" title="Close Sidebar">
                    <i class="bi bi-x-lg"></i>
                </button>
                <button class="upload-btn">
                    <i class="bi bi-upload"></i>
                    Upload
                </button>
                <div class="sidebar-section">
                    <div class="sidebar-title">QUICK LINKS</div>
                    <ul class="sidebar-list">
                        <li>
                            <span class="dropdown-arrow" style="visibility:hidden">
                                <i class="bi bi-caret-down-fill"></i>
                            </span>
                            <button class="sidebar-icon-btn" tabindex="-1">
                                <i class="bi bi-journal-text"></i>
                            </button>
                            All Notes
                        </li>
                        <li>
                            <span class="dropdown-arrow" style="visibility:hidden">&#9660;</span>
                            <button class="sidebar-icon-btn" tabindex="-1">
                                <i class="bi bi-pin-angle-fill"></i>
                            </button>
                            Pinned
                        </li>
                        <li>
                            <span class="dropdown-arrow" style="visibility:hidden">&#9660;</span>
                            <button class="sidebar-icon-btn" tabindex="-1">
                                <i class="bi bi-check2-square"></i>
                            </button>
                            Task
                        </li>
                    </ul>
                </div>
                <div class="div straight-line"></div>
                <div class="sidebar-section">
                    <div class="sidebar-title">NOTES</div>
                    <ul class="sidebar-list">
                        <li>
                            <span class="dropdown-arrow" style="visibility:hidden">&#9660;</span>
                            <button class="sidebar-icon-btn" tabindex="-1">
                                <i class="bi bi-sticky"></i>
                            </button>
                            Sticky Notes
                        </li>
                        <li class="active">
                            <span class="dropdown-arrow" style="visibility:hidden">&#9660;</span>
                            <button class="sidebar-icon-btn" tabindex="-1">
                                <i class="bi bi-journal-text"></i>
                            </button>
                            Notes
                        </li>
                        <li>
                            <span class="dropdown-arrow" style="visibility:hidden">&#9660;</span>
                            <button class="sidebar-icon-btn" tabindex="-1">
                                <i class="bi bi-star"></i>
                            </button>
                            Starred
                        </li>
                        <li>
                            <span class="dropdown-arrow" style="visibility:hidden">&#9660;</span>
                            <button class="sidebar-icon-btn" tabindex="-1">
                                <i class="bi bi-sticky"></i>
                            </button>
                            Shared with Me
                        </li>
                        <li>
                            <span class="dropdown-arrow" style="visibility:hidden">
                                <i class="bi bi-caret-down-fill"></i>
                            </span>
                            <button class="sidebar-icon-btn" tabindex="-1">
                                <i class="bi bi-file-earmark-arrow-down"></i>
                            </button>
                            Archive
                        </li>
                        <li>
                            <span class="dropdown-arrow">
                                <i class="bi bi-caret-down-fill"></i>
                            </span>
                            <button class="sidebar-icon-btn" tabindex="-1">
                                <i class="bi bi-journal-bookmark"></i>
                            </button>
                            Notebooks
                        </li>
                    </ul>
                    <div class="sidebar-separator"></div>
                    <ul class="sidebar-list">
                        <li>
                            <span class="dropdown-arrow">
                                <i class="bi bi-caret-down-fill"></i>
                            </span>
                            <button class="sidebar-icon-btn" tabindex="-1">
                                <i class="bi bi-tag" style="transform:rotate(135deg)"></i>
                            </button>
                            Label
                        </li>
                    </ul>
                </div>

            </aside>
</template>

<style scoped>
.main-wrapper {
    display: flex;
    height: 100%;
}

.sidebar {
    width: 250px;
    background: #f8fafc;
    display: flex;
    flex-direction: column;
    gap: 14px;
    border-right: 1px solid var(--line);
    height: 100%;
}

.sidebar:first-child {
    gap: 0px;
}

.upload-icon {
    width: 18px;
    height: 18px;
}

.sidebar-title {
    font-size: 12px;
    padding-left: 18px;
    margin-top: 20px;
    font-weight: 300;
    color: var(--muted);
    margin-bottom: 16px;
}

.sidebar-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sidebar-list li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 0;
    font-weight: 500;
    color: var(--text);
    font-size: 15px;
    cursor: pointer;
    transition: background 0.12s;
    position: relative;
    padding-left: 10px;
}

.sidebar-list li.active,
.sidebar-list li:hover {
    background: var(--blue-weak);
    border-radius: 8px;
}

.sidebar .bi-x-lg {
    font-size: 22px;
    display: none;
}

.close-sidebar {
    position: absolute;
    right: -50px;
    top: 45%;
    background: rgb(255, 255, 255);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    border: 0;
    padding-left: 7px;
    padding-top: 2px;
    box-shadow: 0 0px 10px rgb(143, 143, 143);

}

.sidebar-icon-btn {
    background: none;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--muted);
    font-size: 20px;
    cursor: pointer;
    transition: color 0.15s;
    height: 24px;
}

.sidebar-list li.active .sidebar-icon-btn,
.sidebar-list li:hover .sidebar-icon-btn {
    color: var(--blue);
}

.sidebar-list li span,
.sidebar-list li {
    color: var(--text);
}

.dropdown-arrow .bi-caret-down-fill {
    transform: rotate(270deg);
    color: var(--muted);
    display: inline-block;
}

.dropdown-btn .bi-caret-down-fill {
    color: var(--muted);
}

.sidebar-list li:hover,
.sidebar-list li.active {
    background: var(--blue-weak);
}

.sidebar-list li:hover::before,
.sidebar-list li.active::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background: var(--blue);
    border-radius: 3px;
}

.sidebar-list li .icon {
    width: 18px;
    height: 18px;
}

.sidebar-separator {
    height: 16px;
}

.dropdown-arrow {
    font-size: 12px;
    margin-right: 4px;
    color: var(--muted);
}

.main-content2 {
    display: flex;
    flex-grow: 1;
    flex: 1;
    height: 100%;
}

</style>
