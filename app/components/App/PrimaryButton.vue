<template>
     <a class="py-4 px-7 inline-flex justify-center items-center gap-x-2 text-base font-medium rounded-full border border-transparent bg-[#dc2626] text-white hover:bg-red-700 focus:outline-hidden focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
          <slot />
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
</template>