<template>
    <template v-if="!true">
        <MyNavbar />
    </template>

    <!-- Sidebar -->
    <div
        id="hs-sidebar-content-push"
        :class="[
            'hs-overlay [--body-scroll:true] lg:[--overlay-backdrop:false] [--is-layout-affect:true] [--opened:lg]',
            '[--auto-close:lg] hs-overlay-open:translate-x-0 lg:hs-overlay-layout-open:translate-x-0 lg:block',
            'lg:-translate-x-full lg:end-auto lg:bottom-0 w-64 [--body-scroll:true]',
            'hs-overlay-open:translate-x-0',
            '-translate-x-full transition-all duration-300 transform',
            'h-full',
            'hidden',
            'fixed top-0 start-0 bottom-0 z-60',
            'bg-white border-e border-gray-200 dark:bg-neutral-800 dark:border-neutral-700',
            'outline-hidden',
            {
                minified: true, // !opened
                opened: false, // opened
            },

            'hidden',
            // 'hs-overlay [--body-scroll:true] lg:[--overlay-backdrop:false] [--is-layout-affect:true] [--opened:lg] [--auto-close:lg] hs-overlay-open:translate-x-0 lg:hs-overlay-layout-open:translate-x-0 lg:block lg:-translate-x-full lg:end-auto lg:bottom-0 w-64 -translate-x-full transition-all duration-300 transform h-full fixed top-0 start-0 bottom-0 z-60 bg-white border-e border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 outline-hidden hidden'
        ]"
        :b-class="[
            'hs-overlay [--auto-close:sm] hs-overlay-minified:w-13 sm:block sm:translate-x-0 sm:end-auto sm:bottom-0 w-64 hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform h-full hidden overflow-x-hidden fixed top-0 start-0 bottom-0 z-60 bg-white border-e border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 minified',
        ]"
        :cclass="[
            'hs-overlay [--auto-close:lg] lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 w-64 hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform h-full fixed top-0 start-0 bottom-0 z-60 bg-white border-e border-gray-200 dark:bg-neutral-800 dark:border-neutral-700',
            // 'open opened',
            // 'hs-overlay-minified:w-13 minified',
        ]"
        role="dialog"
        tabindex="-1"
        aria-label="Sidebar"
    >
        <div class="relative flex flex-col h-full max-h-full">
            <!-- Header -->
            <header class="p-4 flex justify-between items-center gap-x-2">
                <NuxtLink
                    class="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white"
                    to="/"
                    aria-label="Brand"
                >
                    Brand
                </NuxtLink>

                <div class="--lg:hidden p-2">
                    <button
                        type="button"
                        class="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="hs-sidebar-content-push"
                        aria-label="Toggle navigation"
                        data-hs-overlay="#hs-sidebar-content-push"
                    >
                        <svg
                            class="sm:hidden shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <rect width="18" height="18" x="3" y="3" rx="2" />
                            <path d="M15 3v18" />
                            <path d="m8 9 3 3-3 3" />
                        </svg>
                        <svg
                            class="hidden sm:block shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <rect width="18" height="18" x="3" y="3" rx="2" />
                            <path d="M15 3v18" />
                            <path d="m10 15-3-3 3-3" />
                        </svg>
                        <span class="sr-only">Navigation Toggle</span>
                    </button>
                </div>

                <div class="lg:hidden -me-2">
                    <!-- Close Button -->
                    <button
                        type="button"
                        class="flex justify-center items-center gap-x-3 size-6 bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                        data-hs-overlay="#hs-sidebar-content-push"
                    >
                        <svg
                            class="shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                        <span class="sr-only">Close</span>
                    </button>
                    <!-- End Close Button -->
                </div>
            </header>
            <!-- End Header -->

            <!-- Header -->
            <div class="mt-auto p-2 border-y border-gray-200 dark:border-neutral-700">
                <!-- Account Dropdown -->
                <div class="hs-dropdown [--strategy:absolute] [--auto-close:inside] relative w-full inline-flex">
                    <button
                        id="hs-sidebar-header-example-with-dropdown"
                        type="button"
                        class="w-full inline-flex shrink-0 items-center gap-x-2 p-2 text-start text-sm text-gray-800 rounded-md hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-label="Dropdown"
                    >
                        <img
                            class="shrink-0 size-5 rounded-full"
                            src="https://images.unsplash.com/photo-1734122415415-88cb1d7d5dc0?q=80&w=320&h=320&auto=format&fit=facearea&facepad=3&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Avatar"
                        />
                        <span class="hidden md:block overflow-hidden">Mia Hudson</span>
                        <svg
                            class="shrink-0 size-3.5 ms-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="m7 15 5 5 5-5" />
                            <path d="m7 9 5-5 5 5" />
                        </svg>
                    </button>

                    <!-- Account Dropdown -->
                    <div
                        class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-neutral-900 dark:border-neutral-700"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="hs-sidebar-header-example-with-dropdown"
                    >
                        <div class="p-1">
                            <a
                                class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                href="#"
                            >
                                My account
                            </a>
                            <a
                                class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                href="#"
                            >
                                Settings
                            </a>
                            <a
                                class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                href="#"
                            >
                                Billing
                            </a>
                            <a
                                class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                href="#"
                            >
                                Sign out
                            </a>
                        </div>
                    </div>
                    <!-- End Account Dropdown -->
                </div>
                <!-- End Account Dropdown -->
            </div>
            <!-- End Header -->

            <!-- Body -->
            <nav
                class="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
            >
                <div class="hs-accordion-group pb-0 px-2 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                    <ul class="space-y-1">
                        <template v-for="(item, itemIndex) of sideBarMenuItems">
                            <template v-if="!Array.isArray(item?.subItems)">
                                <li>
                                    <NuxtLink
                                        :class="[
                                            'w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200',
                                        ]"
                                        :to="item?.to || '#'"
                                    >
                                        <Icons-IconHome v-if="['/', '/home'].includes(item?.to)" />
                                        <Icons-IconCopy v-else />
                                        {{ item?.label }}
                                    </NuxtLink>
                                </li>
                            </template>

                            <template v-if="Array.isArray(item?.subItems)">
                                <li class="hs-accordion" id="users-accordion">
                                    <button
                                        type="button"
                                        class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                        aria-expanded="true"
                                        aria-controls="users-accordion-collapse-1"
                                    >
                                        <svg
                                            class="size-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                        Users

                                        <svg
                                            class="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>

                                        <svg
                                            class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>

                                    <div
                                        id="users-accordion-collapse-1"
                                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                        role="region"
                                        aria-labelledby="users-accordion"
                                    >
                                        <ul
                                            class="hs-accordion-group pt-1 ps-7 space-y-1"
                                            data-hs-accordion-always-open
                                        >
                                            <li class="hs-accordion" id="users-accordion-sub-1">
                                                <button
                                                    type="button"
                                                    class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                                    aria-expanded="true"
                                                    aria-controls="users-accordion-sub-1-collapse-1"
                                                >
                                                    Sub Menu 1

                                                    <svg
                                                        class="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path d="m18 15-6-6-6 6" />
                                                    </svg>

                                                    <svg
                                                        class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path d="m6 9 6 6 6-6" />
                                                    </svg>
                                                </button>

                                                <div
                                                    id="users-accordion-sub-1-collapse-1"
                                                    class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                                    role="region"
                                                    aria-labelledby="users-accordion-sub-1"
                                                >
                                                    <ul class="pt-1 ps-2 space-y-1">
                                                        <li>
                                                            <a
                                                                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                                                href="#"
                                                            >
                                                                Link 1
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                                                href="#"
                                                            >
                                                                Link 2
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                                                href="#"
                                                            >
                                                                Link 3
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li class="hs-accordion" id="users-accordion-sub-2">
                                                <button
                                                    type="button"
                                                    class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                                    aria-expanded="true"
                                                    aria-controls="users-accordion-sub-2-collapse-1"
                                                >
                                                    Sub Menu 2

                                                    <svg
                                                        class="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path d="m18 15-6-6-6 6" />
                                                    </svg>

                                                    <svg
                                                        class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path d="m6 9 6 6 6-6" />
                                                    </svg>
                                                </button>

                                                <div
                                                    id="users-accordion-sub-2-collapse-1"
                                                    class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                                    role="region"
                                                    aria-labelledby="users-accordion-sub-2"
                                                >
                                                    <ul class="pt-1 ps-2 space-y-1">
                                                        <li>
                                                            <a
                                                                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                                                href="#"
                                                            >
                                                                Link 1
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                                                href="#"
                                                            >
                                                                Link 2
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                                                href="#"
                                                            >
                                                                Link 3
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </template>
                        </template>

                        <li>
                            <a
                                class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                href="#"
                            >
                                <svg
                                    class="size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                                Dashboard
                            </a>
                        </li>

                        <li class="hs-accordion" id="users-accordion">
                            <button
                                type="button"
                                class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                aria-expanded="true"
                                aria-controls="users-accordion-collapse-1"
                            >
                                <svg
                                    class="size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                Users

                                <svg
                                    class="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="m18 15-6-6-6 6" />
                                </svg>

                                <svg
                                    class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>

                            <div
                                id="users-accordion-collapse-1"
                                class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                role="region"
                                aria-labelledby="users-accordion"
                            >
                                <ul class="hs-accordion-group pt-1 ps-7 space-y-1" data-hs-accordion-always-open>
                                    <li class="hs-accordion" id="users-accordion-sub-1">
                                        <button
                                            type="button"
                                            class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                            aria-expanded="true"
                                            aria-controls="users-accordion-sub-1-collapse-1"
                                        >
                                            Sub Menu 1

                                            <svg
                                                class="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path d="m18 15-6-6-6 6" />
                                            </svg>

                                            <svg
                                                class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </button>

                                        <div
                                            id="users-accordion-sub-1-collapse-1"
                                            class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                            role="region"
                                            aria-labelledby="users-accordion-sub-1"
                                        >
                                            <ul class="pt-1 ps-2 space-y-1">
                                                <li>
                                                    <a
                                                        class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                                        href="#"
                                                    >
                                                        Link 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                                        href="#"
                                                    >
                                                        Link 2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                                        href="#"
                                                    >
                                                        Link 3
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li class="hs-accordion" id="users-accordion-sub-2">
                                        <button
                                            type="button"
                                            class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                            aria-expanded="true"
                                            aria-controls="users-accordion-sub-2-collapse-1"
                                        >
                                            Sub Menu 2

                                            <svg
                                                class="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path d="m18 15-6-6-6 6" />
                                            </svg>

                                            <svg
                                                class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </button>

                                        <div
                                            id="users-accordion-sub-2-collapse-1"
                                            class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                            role="region"
                                            aria-labelledby="users-accordion-sub-2"
                                        >
                                            <ul class="pt-1 ps-2 space-y-1">
                                                <li>
                                                    <a
                                                        class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                                        href="#"
                                                    >
                                                        Link 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                                        href="#"
                                                    >
                                                        Link 2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                                        href="#"
                                                    >
                                                        Link 3
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="hs-accordion" id="account-accordion">
                            <button
                                type="button"
                                class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                aria-expanded="true"
                                aria-controls="account-accordion-sub-1-collapse-1"
                            >
                                <svg
                                    class="size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <circle cx="18" cy="15" r="3" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                                    <path d="m21.7 16.4-.9-.3" />
                                    <path d="m15.2 13.9-.9-.3" />
                                    <path d="m16.6 18.7.3-.9" />
                                    <path d="m19.1 12.2.3-.9" />
                                    <path d="m19.6 18.7-.4-1" />
                                    <path d="m16.8 12.3-.4-1" />
                                    <path d="m14.3 16.6 1-.4" />
                                    <path d="m20.7 13.8 1-.4" />
                                </svg>
                                Account

                                <svg
                                    class="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="m18 15-6-6-6 6" />
                                </svg>

                                <svg
                                    class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>

                            <div
                                id="account-accordion-sub-1-collapse-1"
                                class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                role="region"
                                aria-labelledby="account-accordion"
                            >
                                <ul class="pt-1 ps-7 space-y-1">
                                    <li>
                                        <a
                                            class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                            href="#"
                                        >
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                            href="#"
                                        >
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                            href="#"
                                        >
                                            Link 3
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="hs-accordion" id="projects-accordion">
                            <button
                                type="button"
                                class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                aria-expanded="true"
                                aria-controls="projects-accordion-sub-1-collapse-1"
                            >
                                <svg
                                    class="size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"
                                    />
                                    <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
                                    <path d="M15 2v5h5" />
                                </svg>
                                Projects

                                <svg
                                    class="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="m18 15-6-6-6 6" />
                                </svg>

                                <svg
                                    class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>

                            <div
                                id="projects-accordion-sub-1-collapse-1"
                                class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                role="region"
                                aria-labelledby="projects-accordion"
                            >
                                <ul class="pt-1 ps-7 space-y-1">
                                    <li>
                                        <a
                                            class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                            href="#"
                                        >
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                            href="#"
                                        >
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                            href="#"
                                        >
                                            Link 3
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a
                                class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                href="#"
                            >
                                <svg
                                    class="size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                                    <line x1="16" x2="16" y1="2" y2="6" />
                                    <line x1="8" x2="8" y1="2" y2="6" />
                                    <line x1="3" x2="21" y1="10" y2="10" />
                                    <path d="M8 14h.01" />
                                    <path d="M12 14h.01" />
                                    <path d="M16 14h.01" />
                                    <path d="M8 18h.01" />
                                    <path d="M12 18h.01" />
                                    <path d="M16 18h.01" />
                                </svg>
                                Calendar
                                <span
                                    class="ms-auto py-0.5 px-1.5 inline-flex items-center gap-x-1.5 text-xs bg-gray-200 text-gray-800 rounded-full dark:bg-neutral-600 dark:text-neutral-200"
                                >
                                    New
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                                href="#"
                            >
                                <svg
                                    class="size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                </svg>
                                Documentation
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <!-- End Body -->

            <footer class="mt-auto p-2">
                <div
                    :class="[
                        'border-t border-gray-200 dark:border-neutral-700 min-h-8',
                        'w-full inline-flex shrink-0 items-center gap-x-2 p-2 text-start text-sm text-gray-800 rounded-md hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700',
                    ]"
                >
                    <span class="text-sm text-gray-600 dark:text-neutral-500">Status</span>
                </div>

                <!-- Account Dropdown -->
                <div
                    class="border-t border-gray-200 dark:border-neutral-700 hs-dropdown [--strategy:absolute] [--auto-close:inside] relative w-full inline-flex"
                >
                    <button
                        id="hs-sidebar-footer-example-with-dropdown"
                        type="button"
                        class="w-full inline-flex shrink-0 items-center gap-x-2 p-2 text-start text-sm text-gray-800 rounded-md hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-label="Dropdown"
                    >
                        <img
                            class="shrink-0 size-5 rounded-full"
                            src="https://images.unsplash.com/photo-1734122415415-88cb1d7d5dc0?q=80&amp;w=320&amp;h=320&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Avatar"
                        />
                        Mia Hudson
                        <svg
                            class="shrink-0 size-3.5 ms-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path>
                        </svg>
                    </button>

                    <!-- Account Dropdown -->
                    <div
                        class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 z-20 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-neutral-900 dark:border-neutral-700 hidden"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="hs-sidebar-footer-example-with-dropdown"
                        tabindex="-1"
                        style="transform: translate3d(0px, -164px, 0px)"
                        data-placement="top-start"
                    >
                        <div class="p-1">
                            <a
                                class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                href="#"
                                target="_parent"
                            >
                                My account
                            </a>
                            <a
                                class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                href="#"
                                target="_parent"
                            >
                                Settings
                            </a>
                            <a
                                class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                href="#"
                                target="_parent"
                            >
                                Billing
                            </a>
                            <a
                                class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                href="#"
                                target="_parent"
                            >
                                Sign out
                            </a>
                        </div>
                    </div>
                    <!-- End Account Dropdown -->
                </div>
                <!-- End Account Dropdown -->

                <div class="border-t border-gray-200 dark:border-neutral-700 min-h-8 px-2">
                    <div class="pt-2 text-gray-500 mb-2 lg:ps-88 xl:ps-0">
                        <p class="text-sm text-gray-600 dark:text-neutral-500 mb-2">
                            &copy; {{ new Date().getFullYear() }} - F2 Sistemas
                        </p>

                        <p class="text-xs italic text-gray-400 dark:text-neutral-400">
                            &copy; {{ new Date().getFullYear() }} - v0.0.1-alfa
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    <!-- End Sidebar -->

    <!-- Content -->
    <div class="sm:hs-overlay-layout-open:ms-64 min-h-160 bg-white transition-all duration-300 dark:bg-neutral-800">
        <!-- Topbar Navigation -->
        <header
            class="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-2 dark:bg-neutral-900 dark:border-neutral-700"
        >
            <!-- Navigation Toggle -->
            <div class="--lg:hidden p-2">
                <button
                    type="button"
                    class="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="hs-sidebar-content-push"
                    aria-label="Toggle navigation"
                    data-hs-overlay="#hs-sidebar-content-push"
                >
                    <svg
                        aclass="sm:hidden shrink-0 size-4"
                        class="hs-overlay-open:hidden block sm:block shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M15 3v18" />
                        <path d="m8 9 3 3-3 3" />
                    </svg>
                    <svg
                        aclass="hidden sm:block shrink-0 size-4"
                        class="hidden hs-overlay-open:block shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M15 3v18" />
                        <path d="m10 15-3-3 3-3" />
                    </svg>
                    <span class="sr-only">Navigation Toggle</span>
                </button>
            </div>
            <!-- End Navigation Toggle -->

            <!-- Top Navigation -->
            <nav class="flex flex-nowrap basis-full items-center w-full lg:max-w-[90rem] mx-auto px-4 md:px-8">
                <NuxtLink class="flex-none rounded-md focus:outline-hidden focus:opacity-80" to="/">
                    <svg
                        class="w-28 h-auto"
                        width="116"
                        height="32"
                        viewBox="0 0 116 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M33.5696 30.2968V10.7968H37.4474V13.1789H37.6229C37.7952 12.7972 38.0445 12.4094 38.3707 12.0155C38.7031 11.6154 39.134 11.283 39.6634 11.0183C40.1989 10.7475 40.8636 10.6121 41.6577 10.6121C42.6918 10.6121 43.6458 10.8829 44.5199 11.4246C45.3939 11.9601 46.0926 12.7695 46.6158 13.8529C47.139 14.93 47.4006 16.2811 47.4006 17.9061C47.4006 19.488 47.1451 20.8237 46.6342 21.9132C46.1295 22.9966 45.4401 23.8183 44.5661 24.3784C43.6982 24.9324 42.7256 25.2094 41.6484 25.2094C40.8852 25.2094 40.2358 25.0832 39.7003 24.8308C39.1709 24.5785 38.737 24.2615 38.3984 23.8799C38.0599 23.4921 37.8014 23.1012 37.6229 22.7073H37.5028V30.2968H33.5696ZM37.4197 17.8877C37.4197 18.7309 37.5367 19.4665 37.7706 20.0943C38.0045 20.7222 38.343 21.2115 38.7862 21.5624C39.2294 21.9071 39.768 22.0794 40.402 22.0794C41.0421 22.0794 41.5838 21.904 42.027 21.5532C42.4702 21.1961 42.8056 20.7037 43.0334 20.0759C43.2673 19.4419 43.3842 18.7125 43.3842 17.8877C43.3842 17.069 43.2704 16.3488 43.0426 15.7272C42.8149 15.1055 42.4794 14.6192 42.0362 14.2683C41.593 13.9175 41.0483 13.7421 40.402 13.7421C39.7618 13.7421 39.2202 13.9113 38.777 14.2499C38.34 14.5884 38.0045 15.0685 37.7706 15.6902C37.5367 16.3119 37.4197 17.0444 37.4197 17.8877ZM49.2427 24.9786V10.7968H53.0559V13.2712H53.2037C53.4622 12.391 53.8961 11.7262 54.5055 11.2769C55.1149 10.8214 55.8166 10.5936 56.6106 10.5936C56.8076 10.5936 57.02 10.6059 57.2477 10.6306C57.4754 10.6552 57.6755 10.689 57.8478 10.7321V14.2222C57.6632 14.1668 57.4077 14.1175 57.0815 14.0745C56.7553 14.0314 56.4567 14.0098 56.1859 14.0098C55.6073 14.0098 55.0903 14.136 54.6348 14.3884C54.1854 14.6346 53.8284 14.9793 53.5638 15.4225C53.3052 15.8657 53.176 16.3765 53.176 16.9551V24.9786H49.2427ZM64.9043 25.2556C63.4455 25.2556 62.1898 24.9601 61.1373 24.3692C60.0909 23.7721 59.2845 22.9289 58.7182 21.8394C58.1519 20.7437 57.8688 19.448 57.8688 17.9523C57.8688 16.4935 58.1519 15.2132 58.7182 14.1114C59.2845 13.0096 60.0816 12.1509 61.1096 11.5354C62.1437 10.9199 63.3563 10.6121 64.7474 10.6121C65.683 10.6121 66.5539 10.7629 67.3603 11.0645C68.1728 11.36 68.8806 11.8062 69.4839 12.4033C70.0932 13.0004 70.5672 13.7513 70.9057 14.6561C71.2443 15.5548 71.4135 16.6074 71.4135 17.8138V18.8941H59.4384V16.4566H67.7111C67.7111 15.8903 67.588 15.3886 67.3418 14.9516C67.0956 14.5146 66.754 14.1729 66.317 13.9267C65.8861 13.6744 65.3844 13.5482 64.812 13.5482C64.2149 13.5482 63.6856 13.6867 63.2239 13.9637C62.7684 14.2345 62.4114 14.6007 62.1529 15.0624C61.8944 15.5179 61.762 16.0257 61.7559 16.5858V18.9033C61.7559 19.605 61.8851 20.2113 62.1437 20.7222C62.4083 21.2331 62.7807 21.627 63.2608 21.904C63.741 22.181 64.3103 22.3195 64.9689 22.3195C65.406 22.3195 65.8061 22.2579 66.1692 22.1348C66.5324 22.0117 66.8432 21.8271 67.1018 21.5808C67.3603 21.3346 67.5572 21.033 67.6927 20.676L71.3304 20.9161C71.1458 21.7901 70.7672 22.5534 70.1948 23.2058C69.6285 23.8522 68.896 24.3569 67.9974 24.7201C67.1048 25.0771 66.0738 25.2556 64.9043 25.2556ZM77.1335 6.06949V24.9786H73.2003V6.06949H77.1335ZM79.5043 24.9786V10.7968H83.4375V24.9786H79.5043ZM81.4801 8.96863C80.8954 8.96863 80.3937 8.77474 79.9752 8.38696C79.5628 7.99302 79.3566 7.52214 79.3566 6.97431C79.3566 6.43265 79.5628 5.96792 79.9752 5.58014C80.3937 5.1862 80.8954 4.98923 81.4801 4.98923C82.0649 4.98923 82.5635 5.1862 82.9759 5.58014C83.3944 5.96792 83.6037 6.43265 83.6037 6.97431C83.6037 7.52214 83.3944 7.99302 82.9759 8.38696C82.5635 8.77474 82.0649 8.96863 81.4801 8.96863ZM89.7415 16.7797V24.9786H85.8083V10.7968H89.5569V13.2989H89.723C90.037 12.4741 90.5632 11.8216 91.3019 11.3415C92.0405 10.8552 92.9361 10.6121 93.9887 10.6121C94.9735 10.6121 95.8322 10.8275 96.5647 11.2584C97.2971 11.6893 97.8665 12.3048 98.2728 13.105C98.679 13.899 98.8821 14.8469 98.8821 15.9487V24.9786H94.9489V16.6505C94.9551 15.7826 94.7335 15.1055 94.2841 14.6192C93.8348 14.1268 93.2162 13.8806 92.4283 13.8806C91.8989 13.8806 91.4311 13.9944 91.0249 14.2222C90.6248 14.4499 90.3109 14.7823 90.0831 15.2193C89.8615 15.6502 89.7477 16.1703 89.7415 16.7797ZM107.665 25.2556C106.206 25.2556 104.951 24.9601 103.898 24.3692C102.852 23.7721 102.045 22.9289 101.479 21.8394C100.913 20.7437 100.63 19.448 100.63 17.9523C100.63 16.4935 100.913 15.2132 101.479 14.1114C102.045 13.0096 102.842 12.1509 103.87 11.5354C104.905 10.9199 106.117 10.6121 107.508 10.6121C108.444 10.6121 109.315 10.7629 110.121 11.0645C110.934 11.36 111.641 11.8062 112.245 12.4033C112.854 13.0004 113.328 13.7513 113.667 14.6561C114.005 15.5548 114.174 16.6074 114.174 17.8138V18.8941H102.199V16.4566H110.472C110.472 15.8903 110.349 15.3886 110.103 14.9516C109.856 14.5146 109.515 14.1729 109.078 13.9267C108.647 13.6744 108.145 13.5482 107.573 13.5482C106.976 13.5482 106.446 13.6867 105.985 13.9637C105.529 14.2345 105.172 14.6007 104.914 15.0624C104.655 15.5179 104.523 16.0257 104.517 16.5858V18.9033C104.517 19.605 104.646 20.2113 104.905 20.7222C105.169 21.2331 105.542 21.627 106.022 21.904C106.502 22.181 107.071 22.3195 107.73 22.3195C108.167 22.3195 108.567 22.2579 108.93 22.1348C109.293 22.0117 109.604 21.8271 109.863 21.5808C110.121 21.3346 110.318 21.033 110.454 20.676L114.091 20.9161C113.907 21.7901 113.528 22.5534 112.956 23.2058C112.389 23.8522 111.657 24.3569 110.758 24.7201C109.866 25.0771 108.835 25.2556 107.665 25.2556Z"
                            fill="currentColor"
                            class="hidden fill-blue-600 dark:fill-white"
                        ></path>
                        <path
                            d="M1 28.9786V15.9786C1 9.35116 6.37258 3.97858 13 3.97858C19.6274 3.97858 25 9.35116 25 15.9786C25 22.606 19.6274 27.9786 13 27.9786H12"
                            class="stroke-blue-600 dark:stroke-white"
                            stroke="currentColor"
                            stroke-width="2"
                        ></path>
                        <path
                            d="M5 28.9786V16.1386C5 11.6319 8.58172 7.97858 13 7.97858C17.4183 7.97858 21 11.6319 21 16.1386C21 20.6452 17.4183 24.2986 13 24.2986H12"
                            class="stroke-blue-600 dark:stroke-white"
                            stroke="currentColor"
                            stroke-width="2"
                        ></path>
                        <circle
                            cx="13"
                            cy="16"
                            r="5"
                            fill="currentColor"
                            class="fill-blue-600 dark:fill-white"
                        ></circle>
                    </svg>
                </NuxtLink>

                <div class="flex items-center ms-auto md:w-full md:gap-x-3 md:order-3 md:ms-0">
                    <!-- Form -->
                    <div class="relative group transition ms-auto">
                        <!-- Navbar links here -->
                        <ul class="lg:ms-1 flex flex-row gap-2 xl:gap-x-1">
                            <template v-for="(item, itemIndex) of topMenuItems">
                                <template v-if="!Array.isArray(item?.subItems)">
                                    <li class="hidden md:inline-block">
                                        <NuxtLink
                                            :class="[
                                                'w-full inline-flex shrink-0 items-center gap-x-2 p-2 text-start text-sm text-gray-800 rounded-md  focus:outline-hidden focus:bg-gray-100 dark:text-gray-200  dark:focus:bg-gray-700',
                                                'border-1 border-gray-200 dark:border-gray-800',
                                                {
                                                    'bg-gray-200/90 hover:bg-gray-300 dark:bg-neutral-800 dark:hover:bg-neutral-700': true, // (!active) curreent route
                                                    'bg-gray-300 dark:bg-neutral-700': false, // (active) curreent route
                                                },
                                                item?.classes,
                                            ]"
                                            :to="item?.to || '#'"
                                        >
                                            <svg
                                                class="size-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                            </svg>
                                            {{ item?.label }}
                                        </NuxtLink>
                                    </li>
                                </template>

                                <template v-if="Array.isArray(item?.subItems) && item?.subItems?.length">
                                    <li class="hidden lg:inline-block">
                                        <div
                                            class="hs-dropdown [--strategy:absolute] [--auto-close:inside] relative w-full inline-flex"
                                        >
                                            <button
                                                id="hs-sidebar-header-example-with-dropdown"
                                                type="button"
                                                :class="[
                                                    'w-full inline-flex shrink-0 items-center gap-x-2 p-2 text-start text-sm text-gray-800 rounded-md  focus:outline-hidden focus:bg-gray-100 dark:text-gray-200  dark:focus:bg-gray-700',
                                                    'border-1 border-gray-200 dark:border-gray-800',
                                                    {
                                                        'bg-gray-200/90 hover:bg-gray-300 dark:bg-neutral-800 dark:hover:bg-neutral-700': true, // (!active) curreent route
                                                        'bg-gray-300 dark:bg-neutral-700': false, // (active) curreent route
                                                    },
                                                ]"
                                                aria-haspopup="menu"
                                                aria-expanded="false"
                                                aria-label="Dropdown"
                                            >
                                                <svg
                                                    class="size-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                                                    <line x1="16" x2="16" y1="2" y2="6"></line>
                                                    <line x1="8" x2="8" y1="2" y2="6"></line>
                                                    <line x1="3" x2="21" y1="10" y2="10"></line>
                                                    <path d="M8 14h.01"></path>
                                                    <path d="M12 14h.01"></path>
                                                    <path d="M16 14h.01"></path>
                                                    <path d="M8 18h.01"></path>
                                                    <path d="M12 18h.01"></path>
                                                    <path d="M16 18h.01"></path>
                                                </svg>
                                                Calendar
                                                <svg
                                                    class="shrink-0 size-3.5 ms-auto"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <path d="m7 15 5 5 5-5" />
                                                    <path d="m7 9 5-5 5 5" />
                                                </svg>
                                            </button>

                                            <!-- Account Dropdown -->
                                            <div
                                                class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-neutral-900 dark:border-neutral-700"
                                                role="menu"
                                                aria-orientation="vertical"
                                                aria-labelledby="hs-sidebar-header-example-with-dropdown"
                                            >
                                                <div class="p-1">
                                                    <a
                                                        class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                                        href="#"
                                                    >
                                                        My account
                                                    </a>
                                                    <a
                                                        class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                                        href="#"
                                                    >
                                                        Settings
                                                    </a>
                                                    <a
                                                        class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                                        href="#"
                                                    >
                                                        Billing
                                                    </a>
                                                    <a
                                                        class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                                        href="#"
                                                    >
                                                        Sign out
                                                    </a>
                                                </div>
                                            </div>
                                            <!-- End Account Dropdown -->
                                        </div>
                                    </li>
                                </template>
                            </template>
                        </ul>
                    </div>
                    <!-- End Form -->

                    <div class="flex items-center relative z-10 ms-auto">
                        <!-- Dark Mode -->
                        <button
                            type="button"
                            class="hs-dark-mode-active:hidden block hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                            data-hs-theme-click-value="dark"
                        >
                            <span class="group inline-flex shrink-0 justify-center items-center size-9">
                                <svg
                                    class="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                </svg>
                            </span>
                        </button>

                        <button
                            type="button"
                            class="hs-dark-mode-active:block hidden hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                            data-hs-theme-click-value="light"
                        >
                            <span class="group inline-flex shrink-0 justify-center items-center size-9">
                                <svg
                                    class="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <circle cx="12" cy="12" r="4"></circle>
                                    <path d="M12 2v2"></path>
                                    <path d="M12 20v2"></path>
                                    <path d="m4.93 4.93 1.41 1.41"></path>
                                    <path d="m17.66 17.66 1.41 1.41"></path>
                                    <path d="M2 12h2"></path>
                                    <path d="M20 12h2"></path>
                                    <path d="m6.34 17.66-1.41 1.41"></path>
                                    <path d="m19.07 4.93-1.41 1.41"></path>
                                </svg>
                            </span>
                        </button>
                        <!-- End Dark Mode -->

                        <div
                            class="border-s border-gray-200 h-full ps-3.5 md:ps-5 ms-1 md:ms-2 dark:border-neutral-700"
                        >
                            <a
                                class="text-black font-medium dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400"
                                href="#divider"
                            >
                                Item
                            </a>
                        </div>

                        <div
                            class="border-s border-gray-200 h-full ps-3.5 md:ps-5 ms-1 md:ms-2 dark:border-neutral-700"
                        >
                            <!-- Account Dropdown -->
                            <div
                                class="hs-dropdown [--strategy:absolute] [--auto-close:inside] relative w-full inline-flex"
                            >
                                <button
                                    id="hs-sidebar-header-example-with-dropdown"
                                    type="button"
                                    class="w-full inline-flex shrink-0 items-center gap-x-2 p-2 text-start text-sm text-gray-800 rounded-md hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    aria-label="Dropdown"
                                >
                                    <img
                                        class="shrink-0 size-5 rounded-full"
                                        src="https://images.unsplash.com/photo-1734122415415-88cb1d7d5dc0?q=80&w=320&h=320&auto=format&fit=facearea&facepad=3&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Avatar"
                                    />
                                    <span class="hidden md:block overflow-hidden">Mia Hudson</span>
                                    <svg
                                        class="shrink-0 size-3.5 ms-auto"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="m7 15 5 5 5-5" />
                                        <path d="m7 9 5-5 5 5" />
                                    </svg>
                                </button>

                                <!-- Account Dropdown -->
                                <div
                                    class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-neutral-900 dark:border-neutral-700"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="hs-sidebar-header-example-with-dropdown"
                                >
                                    <div class="p-1">
                                        <a
                                            class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                            href="#"
                                        >
                                            My account
                                        </a>
                                        <a
                                            class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                            href="#"
                                        >
                                            Settings
                                        </a>
                                        <a
                                            class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                            href="#"
                                        >
                                            Billing
                                        </a>
                                        <a
                                            class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                            href="#"
                                        >
                                            Sign out
                                        </a>
                                    </div>
                                </div>
                                <!-- End Account Dropdown -->
                            </div>
                            <!-- End Account Dropdown -->
                        </div>
                    </div>
                </div>
            </nav>
            <!-- End Top Navigation -->
        </header>
        <!-- End Topbar Navigation -->

        <div data-el-id="template-content-container" :class="[]">
            <div data-el-id="template-slot-container" :class="['p-2 h-screen', 'text-gray-800 dark:text-gray-100']">
                <slot />
            </div>
        </div>
    </div>

    <!-- End Content -->
</template>

<script setup lang="ts">
const sideBarMenuItems = [
    { to: '/', label: 'Home' },
    { to: '/totp/', label: 'TOTP' },
    { to: '/notes/', label: 'Notes' },
    { to: '/notes/add', label: 'Add note' },
    { to: '/notes/abc-123/edit', label: "Edit 'abc-123'" },
];

const topMenuItems = [
    { to: '/', label: 'Home' },
    { to: '/totp/', label: 'TOTP' },
    { to: '/notes/', label: 'Notes' },
    { to: '/notes/add', label: 'Add note' },
    { to: '/notes/abc-123/edit', label: "Edit 'abc-123'" },
];
</script>
