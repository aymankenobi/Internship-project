<template>
  <aside class="flex flex-col w-64 h-screen px-5 py-1 overflow-y-auto bg-black border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
  <div class="flex items-center mt-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-12 h-12">
      <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"/>
    </svg>
    <div class="flex flex-col ml-2">
      <label class="mr-2 text-white">COMPANY NAME</label>
      <div class="flex items-center mt-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green" class="w-2 h-2">
        <circle cx="10" cy="10" r="10"/>
      </svg>
      <label class="ml-2 text-white text-xs">Account PIC</label>
      </div>
    </div>
  </div>
  
    <div class="flex flex-col justify-between flex-1 mt-6">
      <nav class="-mx-3 space-y-6">
        <div class="space-y-3">
          

          <router-link to="/" exact active-class="active-link">
            <div class="w-full flex items-center group select-none">
              <div
                class="w-1 h-8 bg-transparent transition-colors duration-200 relative overflow-hidden"
              >
                <div
                  class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-0 transition-all duration-300"
                  :class="{
                    'bg-[#44d62c]': $route.path === '/',
                  }"
                ></div>
              </div>
              <div
                class="text-white w-full self-stretch pl-2 flex items-center space-x-2 transition-all duration-200 dark:text-white text-sm"
                :class="{
                  'bg-white/10 group-active:scale-95':
                    $route.path === '/' ,
                  'bg-black': $route.path !== '/',
                }"
              >
                <svg
                  class="h-5 w-5 !fill-red-500 transition-colors duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  :class="{
                    'group-hover:fill-[#44d62c] dark:fill-blue-600':
                      $route.path === '/' && $route.name === null,
                    'fill-blue-400': $route.path !== '/',
                  }"
                ></svg>
                <span class="font-QuicksandMedium">Terminal Application</span>
              </div>
            </div>
          </router-link>

          <router-link to="/about" exact active-class="active-link">
            <div class="w-full flex items-center group select-none">
              <div
                class="w-1 h-8 bg-transparent transition-colors duration-200 relative overflow-hidden"
              >
                <div
                  class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-0 transition-all duration-300"
                  :class="{
                    'bg-[#44d62c]': $route.path === '/about',
                  }"
                ></div>
              </div>
              <div
                class=" text-white w-full self-stretch pl-2 flex items-center space-x-2 transition-all duration-200 dark:text-white text-sm"
                :class="{
                  'bg-white/10 group-active:scale-95': $route.path === '/about',
                  'bg-black': $route.path !== '/about',
                }"
              >
                <svg
                  class="h-5 w- 5 !fill-red-500 group-hover:fill-[#44d62c] dark:fill-gray-600 transition-colors duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                ></svg>
                <span class="font-QuicksandMedium">Job list</span>
              </div>
            </div>
          </router-link>
        </div>
      </nav>
    </div>
  </aside>
</template>
