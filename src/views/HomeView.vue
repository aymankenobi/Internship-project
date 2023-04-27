

<template>
  <main>
    <div v-if="currentPage === 'page1'">
      <section class="is-title-bar">
        <div
          class="flex flex-col md:flex-row items-center justify-between mt-5"
        >
          <h1 class="ml-5 text-3xl font-semibold text-gray-700">
            BULK ONBOARD
            <span class="text-base font-normal text-gray-500">
              {{
                new Date().toLocaleString("en-US", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  timeZone: "UTC",
                })
              }}
            </span>
          </h1>

          <div class="flex items-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>

            <h1 class="ml-1 text-[10px] font-semibold text-gray-700">
              BULK ONBOARD LIST
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="ml-1 mr-1 w-3 h-3"
            >
              <path
                fill-rule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 class="mr-7 text-[10px] font-semibold text-gray-700">LIST</h1>
          </div>
        </div>
        <br />
        <br />
        <span class="text-3xl ml-6 mt-20">
          Welcome to RazerMS <strong>product_dev</strong>
        </span>
        <p class="text-sm mt-10 ml-6 mb-5">
          Please complete your onboarding form to unlock more features.
        </p>
      </section>
      <section>
        <!--Tabs navigation-->
        <ul class="list-reset flex border-b">
          <li class="-mb-px ml-4">
            <a
              class="bg-white inline-block border-1 border-t border-r border-l rounded-t py-2 px-4 text-blue-dark"
              href="#"
              >Application</a
            >
          </li>
        </ul>

        <!--Tabs content-->
        <div class="py-4 px-3">
          <div class="tab-content">
            <div class="tab-panel" id="tab1">
              <p class="py-4 px-3 font-bold">
                Please upload required document as below.
              </p>
              <a
                href="#"
                download
                class="mb-2 ml-3 text-blue-600 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="w-4 h-4 inline-block mr-1"
                >
                  <path
                    fill="#007aff"
                    d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                  />
                </svg>
                Bulk_onboard_template.xlsx
              </a>

              <p class="py-4 px-3 font-bold">Document Section</p>
              <p class="px-3 font-bold">Section: Merchant Listing</p>
              <!-- This is an example component -->
              <div class="max-w-xs px-2 mt-2">
                <div class="flex items-center justify-center">
                  <!-- Author: FormBold Team -->

                  <div class="bg-white">
                    <div class="mb-1 pt-1">
                      <div class="mb-1">
                        <input
                          type="file"
                          name="file"
                          id="file"
                          class="sr-only"
                        />
                        <label
                          for="file"
                          class="relative flex min-h-[10px] items-center justify-center rounded-md border border-dashed border-2 border-[#e0e0e0] p-5 text-center px-24"
                        >
                          <div>
                            <span
                              class="mb-2 block text-base font-semibold text-[#07074D]"
                            >
                              Drop files here
                            </span>
                            <span
                              class="mb-2 block text-base font-medium text-[#6B7280]"
                            >
                              Or
                            </span>
                            <span
                              class="inline-flex rounded border border-[#e0e0e0] py-1 px-1 text-base font-medium text-[#07074D]"
                            >
                              Choose file
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <p class="">
                  <a
                    class="text-blue-600 hover:underline"
                    href="#"
                    target="_blank"
                  ></a>
                </p>
                <button
                  class="bg-[#44d62c] py-3 px-20 font-semibold rounded mt-5 text-white hover:text-black"
                  @click="goToPage('page2')"
                  :class="hovered ? 'text-black' : ''"
                  @mouseover="hovered = true"
                  @mouseout="hovered = false"
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-else-if="currentPage === 'page2'">
      <section class="is-title-bar">
        <div
          class="flex flex-col md:flex-row items-center justify-between mt-5"
        >
          <h1 class="ml-5 text-3xl font-semibold text-gray-700">
            BULK ONBOARD
            <span class="text-base font-normal text-gray-500">
              {{
                new Date().toLocaleString("en-US", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  timeZone: "UTC",
                })
              }}
            </span>
          </h1>

          <div class="flex items-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>

            <h1 class="ml-1 text-[10px] font-semibold text-gray-700">
              BULK ONBOARD LIST
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="ml-1 mr-1 w-3 h-3"
            >
              <path
                fill-rule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 class="mr-7 text-[10px] font-semibold text-gray-700">LIST</h1>
          </div>
        </div>
        <br />
        <br />
        <span class="text-3xl ml-6 mt-20">
          Welcome to RazerMS <strong>product_dev</strong>
        </span>
        <p class="text-sm mt-10 ml-6 mb-5">
          Please complete your onboarding form to unlock more features.
        </p>
      </section>
      <section>
        <!--Tabs navigation-->
        <ul class="list-reset flex border-b">
          <li class="-mb-px ml-4">
            <a
              class="bg-white inline-block border-1 border-t border-r border-l rounded-t py-2 px-4 text-blue-dark"
              href=""
              >Application</a
            >
          </li>
          <li class="-mb-px ml-4">
            <a
              class="bg-white inline-block border-1 border-t border-r border-l rounded-t py-2 px-4 text-blue-dark"
              href="#"
              >Error</a
            >
          </li>
        </ul>

        <!--Tabs content-->
        <div class="py-4 px-3">
          <div class="tab-content">
            <div class="tab-panel" id="tab1">
              <p class="py-4 px-3 font-black text-2xl">
                There were some errors found on this form:
              </p>
              <p class="py-1 px-3 text-red-500">
                *Please resolve all below errors and re-submit again*
              </p>

              <div class="relative overflow-x-auto">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700">
    <thead class="text-xs text-gray-700 uppercase bg-red-300 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3 border-r border-gray-200 dark:border-gray-700">No.</th>
        <th scope="col" class="px-6 py-3 border-r border-gray-200 dark:border-gray-700">Application Type</th>
        <th scope="col" class="px-6 py-3 border-r border-gray-200 dark:border-gray-700">Device Type</th>
        <th scope="col" class="px-6 py-3 border-r border-gray-200 dark:border-gray-700">Shopify Integration</th>
        <th scope="col" class="px-6 py-3 border-r border-gray-200 dark:border-gray-700">Company Name</th>
        <th scope="col" class="px-6 py-3 border-r border-gray-200 dark:border-gray-700">Trading Name</th>
        <th scope="col" class="px-6 py-3 border-r border-gray-200 dark:border-gray-700">Registration of Company</th>
        <th scope="col" class="px-6 py-3">Incorporation Date</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <td class="px-6 py-4 border-r border-gray-200 dark:border-gray-700">2</td>
          <td class="px-6 py-4 border-r border-gray-200 dark:border-gray-700"></td>
          <td class="px-6 py-4 border-r border-gray-200 dark:border-gray-700"></td>
          <td class="px-6 py-4 border-r border-gray-200 dark:border-gray-700">Yes</td>
          <td class="px-6 py-4 border-r border-gray-200 dark:border-gray-700">Company A</td>
          <td class="px-6 py-4 border-r border-gray-200 dark:border-gray-700">Trading A</td>
          <td class="px-6 py-4 border-r border-gray-200 dark:border-gray-700"></td>
          <td class="px-6 py-4">Must be is YYYY-MM-DD</td>
      </tr>
      <tr class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <td class="px-6 py-4 border-r border-gray-200 dark:border-gray-700">5</td>
          <td class="px-6 py-4 border-r border-gray-200 dark:border-gray-700">Type A</td>
          <td class="px-6 py-4 border-r border-gray-200 dark:border-gray-700">Device X</td>
          <td class="px-6 py-4 border-r border-gray-200 dark:border-gray-700">Yes</td>
          <td class="px-6 py-4 border-r border-gray-200 dark:border-gray-700">Company A</td>
          <td class="px-6 py-4 border-r border-gray-200 dark:border-gray-700"></td>
          <td class="px-6 py-4 border-r border-gray-200 dark:border-gray-700">Registration A</td>
          <td class="px-6 py-4">Must be is YYYY-MM-DD</td>
      </tr>
      <tr class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <td class="px-6 py-4 border-r border-gray-200 dark:border-gray-700">7</td>
          <td class="px-6 py-4 border-r border-gray-200 dark:border-gray-700">Type A</td>
          <td class="px-6 py-4 border-r border-gray-200 dark:border-gray-700"></td>
          <td class="px-6 py-4 border-r border-gray-200 dark:border-gray-700">Yes</td>
          <td class="px-6 py-4 border-r border-gray-200 dark:border-gray-700"></td>
          <td class="px-6 py-4 border-r border-gray-200 dark:border-gray-700">Trading A</td>
          <td class="px-6 py-4 border-r border-gray-200 dark:border-gray-700">Registration A</td>
          <td class="px-6 py-4">Must be is YYYY-MM-DD</td>
      </tr>
      <tr class="bg-white dark:bg-gray-800">
        <!-- Add the remaining columns -->
      </tr>
    </tbody>
  </table>



                <p class="">
                  <a
                    class="text-blue-600 hover:underline"
                    href="#"
                    target="_blank"
                  ></a>
                </p>
                <button
                  class="bg-[#44d62c] py-3 px-20 font-semibold rounded mt-5 text-white hover:text-black"
                  @click="goToPage('page1')"
                  :class="hovered ? 'text-black' : ''"
                  @mouseover="hovered = true"
                  @mouseout="hovered = false"
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      currentPage: "page1",
      hovered: false,
    };
  },
  methods: {
    goToPage(page) {
      this.currentPage = page;
    },
  },
};
</script>