<template>
  <main>
    <div v-if="currentPage === 'page1'">
      <section class="is-title-bar">
        <div
          class="flex flex-col md:flex-row items-center justify-between mt-5"
        >
          <h1 class="ml-5 text-2xl font-semibold text-gray-700">
            BULK ONBOARD LIST
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
      </section>
      <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 mt-10">
        <div class="mb-4 flex justify-end">
          <router-link
            to="/"
            class="bg-[#44d62c] text-white py-3 px-20 rounded mt-10 hover:text-black"
          >
            Import Bulk Application
          </router-link>
        </div>
        <div class="w-full">
          <table
            id="tbl_bulk_onboard_list"
            aria-describedby="tbl_bulk_onboard_list_info"
            class="table-auto w-full border-collapse border"
            role="grid"
          >
            <thead>
              <tr class="bg-gray-200 text-left">
                <th
                  scope="col"
                  class="py-2 px-4 font-semibold border-b border-gray-300"
                >
                  Batch ID
                  <button
                    class="ml-2 text-gray-400 hover:text-gray-800"
                    @click="sort('id')"
                  >
                    <font-awesome-icon
                      v-if="sortColumn === 'id' && sortDirection === 'asc'"
                      :icon="['fas', 'sort-up']"
                    />
                    <font-awesome-icon
                      v-else-if="
                        sortColumn === 'id' && sortDirection === 'desc'
                      "
                      :icon="['fas', 'sort-down']"
                    />
                    <font-awesome-icon v-else :icon="['fas', 'sort']" />
                  </button>
                </th>
                <th
                  scope="col"
                  class="py-2 px-4 font-semibold border-b border-gray-300"
                >
                  Date
                  <button
                    class="ml-2 text-gray-400 hover:text-gray-800"
                    @click="sort('date')"
                  >
                    <font-awesome-icon
                      v-if="sortColumn === 'date' && sortDirection === 'asc'"
                      :icon="['fas', 'sort-up']"
                    />
                    <font-awesome-icon
                      v-else-if="
                        sortColumn === 'date' && sortDirection === 'desc'
                      "
                      :icon="['fas', 'sort-down']"
                    />
                    <font-awesome-icon v-else :icon="['fas', 'sort']" />
                  </button>
                </th>
                <th
                  scope="col"
                  class="py-2 px-4 font-semibold border-b border-gray-300"
                >
                  File Name
                  <button
                    class="ml-2 text-gray-400 hover:text-gray-800"
                    @click="sort('fileName')"
                  >
                    <font-awesome-icon
                      v-if="
                        sortColumn === 'fileName' && sortDirection === 'asc'
                      "
                      :icon="['fas', 'sort-up']"
                    />
                    <font-awesome-icon
                      v-else-if="
                        sortColumn === 'fileName' && sortDirection === 'desc'
                      "
                      :icon="['fas', 'sort-down']"
                    />
                    <font-awesome-icon v-else :icon="['fas', 'sort']" />
                  </button>
                </th>
                <th
                  scope="col"
                  class="py-2 px-4 font-semibold border-b border-gray-300"
                >
                  Status
                  <button
                    class="ml-2 text-gray-400 hover:text-gray-800"
                    @click="sort('status')"
                  >
                    <font-awesome-icon
                      v-if="sortColumn === 'status' && sortDirection === 'asc'"
                      :icon="['fas', 'sort-up']"
                    />
                    <font-awesome-icon
                      v-else-if="
                        sortColumn === 'status' && sortDirection === 'desc'
                      "
                      :icon="['fas', 'sort-down']"
                    />
                    <font-awesome-icon v-else :icon="['fas', 'sort']" />
                  </button>
                </th>
                <th
                  scope="col"
                  class="py-2 px-4 font-semibold border-b border-gray-300"
                >
                  Total Applications
                  <button
                    class="ml-2 text-gray-400 hover:text-gray-800"
                    @click="sort('totalApplications')"
                  >
                    <font-awesome-icon
                      v-if="
                        sortColumn === 'totalApplications' &&
                        sortDirection === 'asc'
                      "
                      :icon="['fas', 'sort-up']"
                    />
                    <font-awesome-icon
                      v-else-if="
                        sortColumn === 'totalApplications' &&
                        sortDirection === 'desc'
                      "
                      :icon="['fas', 'sort-down']"
                    />
                    <font-awesome-icon v-else :icon="['fas', 'sort']" />
                  </button>
                </th>
                <th
                  scope="col"
                  class="py-2 px-4 font-semibold border-b border-gray-300"
                >
                  Action
                  <button
                    class="ml-2 text-gray-400 hover:text-gray-800"
                    @click="sort('action')"
                  >
                    <font-awesome-icon
                      v-if="sortColumn === 'action' && sortDirection === 'asc'"
                      :icon="['fas', 'sort-up']"
                    />
                    <font-awesome-icon
                      v-else-if="
                        sortColumn === 'action' && sortDirection === 'desc'
                      "
                      :icon="['fas', 'sort-down']"
                    />
                    <font-awesome-icon v-else :icon="['fas', 'sort']" />
                  </button>
                </th>
              </tr>
            </thead>

            <tbody class="bg-gray-100 divide-y divide-gray-200">
              <tr
                class="bg-white divide-x divide-gray-200"
                v-for="row in rows"
                :key="row.id"
              >
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 sorting_1"
                >
                  {{ row.id }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ row.date }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <a class="text-blue-500 hover:underline">{{
                    row.fileName
                  }}</a>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-green-500">
                  {{ row.status }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-green-500">
                  {{ row.totalApplications }} ({{ row.status }})
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm">
                  <a
                    v-if="row.status === 'Document required'"
                    class="bg-[#44d62c] text-white py-1 px-3 rounded hover:text-black font-semibold"
                    @click="goToPage('page2')"
                    >Upload</a
                  >
                  <a
                    v-else
                    class="bg-[#44d62c] text-white py-1 px-3 rounded hover:text-black font-semibold"
                    >View</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mb-4 flex justify-end mt-5">
          <button
            class="hover:bg-white text-gray-700 font-bold py-1 px-4 ring-gray-400 ring-opacity-50 ring-1"
          >
            First
          </button>
          <button
            class="hover:bg-white text-gray-700 font-bold py-1 px-4 ring-gray-400 ring-opacity-50 ring-1"
          >
            Previous
          </button>
          <button
            class="hover:bg-white text-gray-700 font-bold py-1 px-4 border ring-gray-400 ring-opacity-50 ring-1"
          >
            Next
          </button>
          <button
            class="hover:bg-white text-gray-700 font-bold py-1 px-4 border ring-gray-400 ring-opacity-50 ring-1"
          >
            Last
          </button>
        </div>
      </div>
    </div>

    <div v-else-if="currentPage === 'page2'">
      <section class="is-title-bar">
        <div
          class="flex flex-col md:flex-row items-center justify-between mt-5"
        >
          <h1 class="ml-5 text-2xl font-semibold text-gray-700">
            BULK ONBOARD LIST
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

        <span class="text-3xl ml-6 mt-20">
          Welcome to RazerMS <strong>product_dev</strong>
        </span>
        <p class="text-sm mt-5 ml-6 mb-5">
          Please complete your onboarding form to unlock more features.
        </p>
      </section>
      <div class="mt-10 flex flex-col md:flex-row">
        <!-- Left column -->
        <div class="w-full md:w-2/5 p-4 ml-10">
          <h2 class="text-xl font-bold mb-4">Batch Details</h2>
          <div class="flex flex-col space-y-4">
            <div class="flex flex-row items-center">
              <div class="font-bold w-40">Batch ID</div>
              <div>:</div>
              <div class="w-80 ml-2">1234</div>
            </div>

            <div class="flex flex-row items-start">
              <div class="font-bold w-40">File Name</div>
              <div>:</div>
              <div class="w-80 ml-2 break-all text-left">
                New_Sub_Merchant_Listing_Template_for_general_MRA_version_april
              </div>
            </div>

            <div class="flex flex-row items-center">
              <div class="font-bold w-40">Total Application</div>
              <div>:</div>
              <div class="w-80 ml-2">50</div>
            </div>
            <div class="flex flex-row items-center">
              <div class="font-bold w-40">Total Files Required</div>
              <div>:</div>
              <div class="w-80 ml-2">100</div>
            </div>
          </div>
        </div>

        <!-- Right column -->

        <div class="w-[full] md:w-3/5 p-4">
          <h2 class="text-xl font-bold mb-2">Merchant List</h2>
          <h2 class="text-sm font-medium mb-4 text-gray-500">
            This section containing the listed merchant records. You can click
            on the merchant name to edit information.
          </h2>
          <div class="">
            <table
              class="w-full text-sm rounded-lg overflow-hidden ring-1 ring-gray-300"
            >
              <tr>
                <td
                  class="border border-gray-300 shadow-inner bg-gray-100 py-2 px-3 font-bold relative"
                  colspan="2"
                >
                  File upload:
                  <span class="text-[#44d62c]">4/8 Applications</span>
                  <button
                    @click="toggleTable"
                    class="absolute right-2 top-2 text-gray-500 hover:text-gray-800 transition-colors flex items-center z-10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                      v-show="isExpanded"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                      v-show="!isExpanded"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr v-show="isExpanded">
                <td class="border border-gray-300 shadow-inner py-3 px-3">
                  <div class="flex justify-left">
                    <!-- Change here -->
                    <div class="pt-2 relative text-gray-600 mb-5">
                      <input
                        class="border border-gray-300 bg-gray-100 shadow-inner h-8 px-5 pr-16 text-sm focus:outline-none"
                        type="search"
                        name="search"
                        placeholder="Search by Name/ROC.."
                      />

                      <button
                        type="submit"
                        class="absolute right-0 top-0 mt-5 mr-4"
                      >
                        <svg
                          class="text-gray-600 h-3 w-3 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Capa_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 56.966 56.966"
                          style="enable-background: new 0 0 56.966 56.966"
                          xml:space="preserve"
                          width="512px"
                          height="512px"
                        >
                          <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <table class="w-full">
                    <thead>
                      <tr>
                        <th
                          class="border border-gray-300 bg-gray-100 py-2 px-1 text-left font-bold"
                        >
                          Merchant Name
                        </th>
                        <th
                          class="border border-gray-300 bg-gray-100 py-2 px-1 text-left font-bold"
                        >
                          Registrar of Companies (ROC)/CRN
                        </th>
                        <th
                          class="border border-gray-300 bg-gray-100 py-2 px-1 text-left font-bold"
                        >
                          Records
                        </th>
                        <th
                          class="border border-gray-300 bg-gray-100 py-2 px-1 text-left font-bold"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border border-gray-300">
                        <td class="border border-gray-300 py-2 px-1">
                          ABC SDN BHD aaaaaaaaaaaaaaaaaaaa
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          abc1234
                        </td>
                        <td
                          class="border border-gray-300 py-2 px-1 text-[#44d62c]"
                        >
                          File uploaded
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          <button
                            class="bg-gray-300 text-white py-1 px-2 rounded-none"
                            @click="showPopup2 = true"
                          >
                            Reupload
                          </button>
                        </td>
                      </tr>
                      <tr class="border border-gray-300">
                        <td class="border border-gray-300 py-2 px-1">
                          ABCD SDN BHD
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          abc1234
                        </td>
                        <td
                          class="border border-gray-300 py-2 px-1 text-[#44d62c]"
                        >
                          File uploaded
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          <button
                            class="bg-gray-300 text-white py-1 px-2 rounded-none"
                          >
                            Reupload
                          </button>
                        </td>
                      </tr>
                      <tr class="border border-gray-300">
                        <td class="border border-gray-300 py-2 px-1">
                          ABCD SDN BHD
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          abc1234
                        </td>
                        <td
                          class="border border-gray-300 py-2 px-1 text-[#44d62c]"
                        >
                          File uploaded
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          <button
                            class="bg-gray-300 text-white py-1 px-2 rounded-none"
                          >
                            Reupload
                          </button>
                        </td>
                      </tr>
                      <tr class="border border-gray-300">
                        <td class="border border-gray-300 py-2 px-1">
                          ABCD SDN BHD
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          abc1234
                        </td>
                        <td
                          class="border border-gray-300 py-2 px-1 text-[#44d62c]"
                        >
                          File uploaded
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          <button
                            class="bg-gray-300 text-white py-1 px-2 rounded-none"
                          >
                            Reupload
                          </button>
                        </td>
                      </tr>
                      <tr class="border border-gray-300">
                        <td class="border border-gray-300 py-2 px-1">
                          ABCD SDN BHD
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          abc1234
                        </td>
                        <td
                          class="border border-gray-300 py-2 px-1 text-orange-400"
                        >
                          File required
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          <button
                            class="bg-[#44d62c] text-white py-1 px-4 rounded-none"
                          >
                            Upload
                          </button>
                        </td>
                      </tr>
                      <tr class="border border-gray-300">
                        <td class="border border-gray-300 py-2 px-1">
                          ABCD SDN BHD
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          abc1234
                        </td>
                        <td
                          class="border border-gray-300 py-2 px-1 text-orange-400"
                        >
                          File required
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          <button
                            class="bg-[#44d62c] text-white py-1 px-4 rounded-none"
                          >
                            Upload
                          </button>
                        </td>
                      </tr>
                      <tr class="border border-gray-300">
                        <td class="border border-gray-300 py-2 px-1">
                          ABCD SDN BHD
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          abc1234
                        </td>
                        <td
                          class="border border-gray-300 py-2 px-1 text-orange-400"
                        >
                          File required
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          <button
                            class="bg-[#44d62c] text-white py-1 px-4 rounded-none"
                          >
                            Upload
                          </button>
                        </td>
                      </tr>
                      <tr class="border border-gray-300">
                        <td class="border border-gray-300 py-2 px-1">
                          ABCD SDN BHD
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          abc1234
                        </td>
                        <td
                          class="border border-gray-300 py-2 px-1 text-orange-400"
                        >
                          File required
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          <button
                            class="bg-[#44d62c] text-white py-1 px-4 rounded-none"
                            @click="showPopup = true"
                          >
                            Upload
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="flex justify-end mt-1">
                    <button
                      class="bg-gray-500 py-3 px-10 font-semibold rounded mt-2 text-white hover:text-black"
                      @click="goToPage('page1')"
                      :class="hovered ? 'text-black' : ''"
                      @mouseover="hovered = true"
                      @mouseout="hovered = false"
                    >
                      Back
                    </button>
                    <button
                      class="ml-2 bg-[#44d62c] py-3 px-10 font-semibold rounded mt-2 text-white hover:text-black"
                      @click="showPopup1 = true"
                      :class="hovered ? 'text-black' : ''"
                      @mouseover="hovered = true"
                      @mouseout="hovered = false"
                    >
                      Proceed
                    </button>
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <div
            v-show="showPopup"
            class="fixed inset-0 z-50"
            @click.self="showPopup = false"
          >
            <div
              class="absolute inset-0 bg-black opacity-50"
              @click="closePopup"
            ></div>

            <!-- Pop-up content container -->
            <div class="fixed inset-0 flex items-center justify-center">
              <div class="bg-white p-6 w-full max-w-xl rounded-md relative">
                <!-- Add the title with an underline -->
                <h2
                  class="text-xl font-bold mb-4 border-b border-gray-200 pb-2"
                >
                  Upload Section
                </h2>

                <!-- Add the close button -->
                <button
                  class="absolute top-3 right-3"
                  @click.stop="showPopup = false"
                >
                  <font-awesome-icon
                    :icon="['fas', 'square-xmark']"
                    style="color: #ff0000"
                    size="2x"
                  />
                </button>

                <div class="flex flex-row items-center">
                  <div class="font-bold w-60 ml-6">Merchant Name</div>
                  <div>:</div>
                  <div class="w-80 ml-10">ABCD SDN BHD</div>
                </div>

                <div class="flex flex-row items-start">
                  <div class="font-bold w-60 ml-6">Registrar of company</div>
                  <div>:</div>
                  <div class="w-80 ml-10 break-all text-left">abcd1234</div>
                </div>

                <div class="mt-4">
                  <div class="flex justify-between">
                    <h3 class="text-sm font-semibold mb-2 ml-6">
                      Section: SSM Report
                    </h3>
                    <h3 class="text-sm font-semibold mb-2 text-red-500 mr-6">
                      Files required
                    </h3>
                  </div>
                  <file-upload></file-upload>
                </div>

                <div>
                  <div class="mt-4">
                    <div class="flex justify-between">
                      <h3 class="text-sm font-semibold mb-2 ml-6">
                        Section: Bank Statement
                      </h3>
                      <h3 class="text-sm font-semibold mb-2 text-red-500 mr-6">
                        Files required
                      </h3>
                    </div>
                    <file-upload></file-upload>
                  </div>
                  <div class="flex justify-end items-center mt-2">
                    <button
                      class="bg-[#44d62c] mt-6 mr-6 py-2 px-12 font-semibold rounded text-white hover:text-black"
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-show="showPopup2"
            class="fixed inset-0 z-50"
            @click.self="showPopup2 = false"
          >
            <div
              class="absolute inset-0 bg-black opacity-50"
              @click="closePopup2"
            ></div>

            <!-- Pop-up content container -->
            <div class="fixed inset-0 flex items-center justify-center">
              <div class="bg-white p-6 w-full max-w-xl rounded-md relative">
                <!-- Add the title with an underline -->
                <h2
                  class="text-xl font-bold mb-4 border-b border-gray-200 pb-2"
                >
                  Upload Section
                </h2>

                <!-- Add the close button -->
                <button
                  class="absolute top-3 right-3"
                  @click.stop="showPopup2 = false"
                >
                  <font-awesome-icon
                    :icon="['fas', 'square-xmark']"
                    style="color: #ff0000"
                    size="2x"
                  />
                </button>

                <div class="flex flex-row items-center">
                  <div class="font-bold w-60 ml-6">Merchant Name</div>
                  <div>:</div>
                  <div class="w-80 ml-10">ABCD SDN BHD</div>
                </div>

                <div class="flex flex-row items-start">
                  <div class="font-bold w-60 ml-6">Registrar of company</div>
                  <div>:</div>
                  <div class="w-80 ml-10 break-all text-left">abcd1234</div>
                </div>

                <div class="mt-4">
                  <div class="flex justify-between">
                    <h3 class="text-sm font-semibold mb-2 ml-6">
                      Section: SSM Report
                    </h3>
                    <h3 class="text-sm font-semibold mb-2 text-red-500 mr-6">
                      Files required
                    </h3>
                  </div>
                  <file-upload></file-upload>
                </div>

                <div>
                  <div class="mt-4">
                    <div class="flex justify-between">
                      <h3 class="text-sm font-semibold mb-2 ml-6">
                        Section: Bank Statement
                      </h3>
                      <h3 class="text-sm font-semibold mb-2 text-red-500 mr-6">
                        Files required
                      </h3>
                    </div>
                    <file-upload></file-upload>
                  </div>
                  <div class="flex justify-end items-center mt-2">
                    <button
                      class="bg-[#44d62c] mt-6 mr-6 py-2 px-12 font-semibold rounded text-white hover:text-black"
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-show="showPopup1"
            class="fixed inset-0 z-50"
            @click.self="showPopup1 = false"
          >
            <div
              class="absolute inset-0 bg-black opacity-50"
              @click="closePopup1"
            ></div>

            <!-- Pop-up content container -->
            <div class="fixed inset-0 flex items-center justify-center">
              <div class="bg-white p-6 w-full max-w-xl rounded-md relative">
                <!-- Add the title with an underline -->
                <h2
                  class="text-xl font-bold mb-4 border-b border-gray-200 pb-2"
                >
                  Upload Section
                </h2>

                <!-- Add the close button -->
                <button
                  class="absolute top-3 right-3"
                  @click.stop="showPopup1 = false"
                >
                  <font-awesome-icon
                    :icon="['fas', 'square-xmark']"
                    style="color: #ff0000"
                    size="2x"
                  />
                </button>

                <div class="mt-4">
                  <div class="border border-gray-300 p-4">
                    <h3 class="mb-4 text-left">
                      <span class="font-bold">You are submitting</span>
                      <span class="font-bold text-[#44d62c]">
                        4 applications</span
                      >
                      <span class="font-bold"> in this batch.</span>
                    </h3>

                    <h3 class="mb-4 text-left">
                      <span class="font-bold">There are still</span>
                      <span class="font-bold text-orange-500">
                        4 applications</span
                      >
                      <span class="font-bold"> pending upload documents.</span>
                    </h3>

                    <h3 class="text-gray-500 mb-4 text-left">
                      *However, you have the option to upload when you return.
                    </h3>
                  </div>
                  <div>
                    <h3 class="font-bold ml-4 mt-6 text-left">
                      Confirm to submit batch?
                    </h3>
                  </div>
                </div>

                <div>
                  <div class="mt-4">
                    <div class="flex justify-center">
                      <button
                        class="bg-gray-300 mt-6 mr-2 py-2 px-12 font-semibold rounded text-white hover:text-black"
                        
                      >
                        Cancel
                      </button>
                      <button
                        class="bg-green-500 mt-6 ml-2 py-2 px-12 font-semibold rounded text-white hover:text-black"
                        @click="goToPage('page3')"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="currentPage === 'page3'">
      <section class="is-title-bar">
        <div
          class="flex flex-col md:flex-row items-center justify-between mt-5"
        >
          <h1 class="ml-5 text-2xl font-semibold text-gray-700">
            BULK ONBOARD LIST
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

        <span class="text-3xl ml-6 mt-20">
          Welcome to RazerMS <strong>product_dev</strong>
        </span>
        <p class="text-sm mt-5 ml-6 mb-5">
          Please complete your onboarding form to unlock more features.
        </p>
      </section>
      <div class="mt-10 flex flex-col md:flex-row">
        <!-- Left column -->
        <div class="w-full md:w-2/5 p-4 ml-10">
          <h2 class="text-xl font-bold mb-4">Batch Details</h2>
          <div class="flex flex-col space-y-4">
            <div class="flex flex-row items-center">
              <div class="font-bold w-40">Batch ID</div>
              <div>:</div>
              <div class="w-80 ml-2">1234</div>
            </div>

            <div class="flex flex-row items-start">
              <div class="font-bold w-40">File Name</div>
              <div>:</div>
              <div class="w-80 ml-2 break-all text-left">
                New_Sub_Merchant_Listing_Template_for_general_MRA_version_april
              </div>
            </div>

            <div class="flex flex-row items-center">
              <div class="font-bold w-40">Total Application</div>
              <div>:</div>
              <div class="w-80 ml-2">50</div>
            </div>
            <div class="flex flex-row items-center">
              <div class="font-bold w-40">Total Files Required</div>
              <div>:</div>
              <div class="w-80 ml-2">100</div>
            </div>
          </div>
        </div>

        <!-- Right column -->

        <div class="w-[full] md:w-3/5 p-4">
          <h2 class="text-xl font-bold mb-2">Merchant List</h2>
          <h2 class="text-sm font-medium mb-4 text-gray-500">
            This section containing the listed merchant records. You can click
            on the merchant name to edit information.
          </h2>
          <div class="">
            <table
              class="w-full text-sm rounded-lg overflow-hidden ring-1 ring-gray-300"
            >
              <tr>
                <td
                  class="border border-gray-300 shadow-inner bg-gray-100 py-2 px-3 font-bold relative"
                  colspan="2"
                >
                  File upload:
                  <span class="text-green-500">4/4 Applications</span>
                </td>
              </tr>

              <td class="border border-gray-300 shadow-inner py-3 px-3">
                <div class="flex justify-left">
                  <!-- Change here -->
                  <div class="pt-2 relative text-gray-600 mb-5">
                    <input
                      class="border border-gray-300 bg-gray-100 shadow-inner h-8 px-5 pr-16 text-sm focus:outline-none"
                      type="search"
                      name="search"
                      placeholder="Search by Name/ROC.."
                    />

                    <button
                      type="submit"
                      class="absolute right-0 top-0 mt-5 mr-4"
                    >
                      <svg
                        class="text-gray-600 h-3 w-3 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 56.966 56.966"
                        style="enable-background: new 0 0 56.966 56.966"
                        xml:space="preserve"
                        width="512px"
                        height="512px"
                      >
                        <path
                          d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <table class="w-full">
                  <thead>
                    <tr>
                      <th
                        class="border border-gray-300 bg-gray-100 py-2 px-1 text-left font-bold"
                      >
                        Merchant Name
                      </th>
                      <th
                        class="border border-gray-300 bg-gray-100 py-2 px-1 text-left font-bold"
                      >
                        Registrar of Companies (ROC)/CRN
                      </th>
                      <th
                        class="border border-gray-300 bg-gray-100 py-2 px-1 text-left font-bold"
                      >
                        Records
                      </th>
                      <th
                        class="border border-gray-300 bg-gray-100 py-2 px-1 text-left font-bold"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border border-gray-300">
                      <td class="border border-gray-300 py-2 px-1">
                        ABCD SDN BHD
                      </td>
                      <td class="border border-gray-300 py-2 px-1">abc1234</td>
                      <td class="border border-gray-300 py-2 px-1">
                        File required
                      </td>
                      <td class="border border-gray-300 py-2 px-1">
                        <button
                          class="bg-[#44d62c] text-white py-1 px-4 rounded-none"
                        >
                          Upload
                        </button>
                      </td>
                    </tr>
                    <tr class="border border-gray-300">
                      <td class="border border-gray-300 py-2 px-1">
                        ABCD SDN BHD
                      </td>
                      <td class="border border-gray-300 py-2 px-1">abc1234</td>
                      <td class="border border-gray-300 py-2 px-1">
                        File required
                      </td>
                      <td class="border border-gray-300 py-2 px-1">
                        <button
                          class="bg-[#44d62c] text-white py-1 px-4 rounded-none"
                        >
                          Upload
                        </button>
                      </td>
                    </tr>
                    <tr class="border border-gray-300">
                      <td class="border border-gray-300 py-2 px-1">
                        ABCD SDN BHD
                      </td>
                      <td class="border border-gray-300 py-2 px-1">abc1234</td>
                      <td class="border border-gray-300 py-2 px-1">
                        File required
                      </td>
                      <td class="border border-gray-300 py-2 px-1">
                        <button
                          class="bg-[#44d62c] text-white py-1 px-4 rounded-none"
                        >
                          Upload
                        </button>
                      </td>
                    </tr>
                    <tr class="border border-gray-300">
                      <td class="border border-gray-300 py-2 px-1">
                        ABCD SDN BHD
                      </td>
                      <td class="border border-gray-300 py-2 px-1">abc1234</td>
                      <td class="border border-gray-300 py-2 px-1">
                        File required
                      </td>
                      <td class="border border-gray-300 py-2 px-1">
                        <button
                          class="bg-[#44d62c] text-white py-1 px-4 rounded-none"
                        >
                          Upload
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </table>
          </div>

          <div class="">
            <table
              class="w-full text-sm rounded-lg overflow-hidden ring-1 ring-gray-300"
            >
              <tr>
                <td
                  class="border border-gray-300 shadow-inner bg-gray-100 py-2 px-3 font-bold relative"
                  colspan="2"
                >
                  Submitted:
                  <span class="text-green-500">4/4 Applications</span>
                  <button
                    @click="toggleTable"
                    class="absolute right-2 top-2 text-gray-500 hover:text-gray-800 transition-colors flex items-center z-10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                      v-show="isExpanded"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                      v-show="!isExpanded"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr v-show="isExpanded">
                <td class="border border-gray-300 shadow-inner py-3 px-3">
                  <div class="flex justify-left">
                    <!-- Change here -->
                    <div class="pt-2 relative text-gray-600 mb-5">
                      <input
                        class="border border-gray-300 bg-gray-100 shadow-inner h-8 px-5 pr-16 text-sm focus:outline-none"
                        type="search"
                        name="search"
                        placeholder="Search by Name/ROC.."
                      />

                      <button
                        type="submit"
                        class="absolute right-0 top-0 mt-5 mr-4"
                      >
                        <svg
                          class="text-gray-600 h-3 w-3 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Capa_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 56.966 56.966"
                          style="enable-background: new 0 0 56.966 56.966"
                          xml:space="preserve"
                          width="512px"
                          height="512px"
                        >
                          <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <table class="w-full">
                    <thead>
                      <tr>
                        <th
                          class="border border-gray-300 bg-gray-100 py-2 px-1 text-left font-bold"
                        >
                          Merchant Name
                        </th>
                        <th
                          class="border border-gray-300 bg-gray-100 py-2 px-1 text-left font-bold"
                        >
                          Registrar of Companies (ROC)/CRN
                        </th>
                        <th
                          class="border border-gray-300 bg-gray-100 py-2 px-1 text-left font-bold"
                        >
                          Records
                        </th>
                        <th
                          class="border border-gray-300 bg-gray-100 py-2 px-1 text-left font-bold"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border border-gray-300">
                        <td class="border border-gray-300 py-2 px-1">
                          ABC SDN BHD aaaaaaaaaaaaaaaaaaaa
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          abc1234
                        </td>
                        <td
                          class="border border-gray-300 text-[#44d62c] py-2 px-1"
                        >
                          Submitted
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          <button
                            class="bg-gray-300 text-white py-1 px-2 rounded-none"
                          >
                            Reupload
                          </button>
                        </td>
                      </tr>
                      <tr class="border border-gray-300">
                        <td class="border border-gray-300 py-2 px-1">
                          ABCD SDN BHD
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          abc1234
                        </td>
                        <td
                          class="border border-gray-300 text-[#44d62c] py-2 px-1"
                        >
                          Submitted
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          <button
                            class="bg-gray-300 text-white py-1 px-2 rounded-none"
                          >
                            Reupload
                          </button>
                        </td>
                      </tr>
                      <tr class="border border-gray-300">
                        <td class="border border-gray-300 py-2 px-1">
                          ABCD SDN BHD
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          abc1234
                        </td>
                        <td
                          class="border border-gray-300 text-[#44d62c] py-2 px-1"
                        >
                          Submitted
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          <button
                            class="bg-gray-300 text-white py-1 px-2 rounded-none"
                          >
                            Reupload
                          </button>
                        </td>
                      </tr>
                      <tr class="border border-gray-300">
                        <td class="border border-gray-300 py-2 px-1">
                          ABCD SDN BHD
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          abc1234
                        </td>
                        <td
                          class="border border-gray-300 text-[#44d62c] py-2 px-1"
                        >
                          Submitted
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          <button
                            class="bg-gray-300 text-white py-1 px-2 rounded-none"
                          >
                            Reupload
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="flex justify-end mt-1">
                    <button
                      class="bg-gray-500 py-3 px-10 font-semibold rounded mt-2 text-white hover:text-black"
                      :class="hovered ? 'text-black' : ''"
                      @click="goToPage('page2')"
                      @mouseover="hovered = true"
                      @mouseout="hovered = false"
                    >
                      Back
                    </button>
                    <button
                      class="ml-2 bg-[#44d62c] py-3 px-10 font-semibold rounded mt-2 text-white hover:text-black"
                      :class="hovered ? 'text-black' : ''"
                      @click="goToPage('page4')"
                      @mouseover="hovered = true"
                      @mouseout="hovered = false"
                    >
                      Submit
                    </button>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="currentPage === 'page4'">
      <section class="is-title-bar">
        <div
          class="flex flex-col md:flex-row items-center justify-between mt-5"
        >
          <h1 class="ml-5 text-2xl font-semibold text-gray-700">
            BULK ONBOARD LIST
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

        <span class="text-3xl ml-6 mt-20">
          Welcome to RazerMS <strong>product_dev</strong>
        </span>
        <p class="text-sm mt-5 ml-6 mb-5">
          Please complete your onboarding form to unlock more features.
        </p>
      </section>
      <div class="mt-10 flex flex-col md:flex-row">
        <!-- Left column -->
        <div class="w-full md:w-2/5 p-4 ml-10">
          <h2 class="text-xl font-bold mb-4">Batch Details</h2>
          <div class="flex flex-col space-y-4">
            <div class="flex flex-row items-center">
              <div class="font-bold w-40">Batch ID</div>
              <div>:</div>
              <div class="w-80 ml-2">1234</div>
            </div>

            <div class="flex flex-row items-start">
              <div class="font-bold w-40">File Name</div>
              <div>:</div>
              <div class="w-80 ml-2 break-all text-left">
                New_Sub_Merchant_Listing_Template_for_general_MRA_version_april
              </div>
            </div>

            <div class="flex flex-row items-center">
              <div class="font-bold w-40">Total Application</div>
              <div>:</div>
              <div class="w-80 ml-2">50</div>
            </div>
            <div class="flex flex-row items-center">
              <div class="font-bold w-40">Total Files Required</div>
              <div>:</div>
              <div class="w-80 ml-2">100</div>
            </div>
          </div>
        </div>

        <!-- Right column -->

        <div class="w-[full] md:w-3/5 p-4">
          <h2 class="text-xl font-bold mb-2">Merchant List</h2>
          <h2 class="text-sm font-medium mb-4 text-gray-500">
            This section containing the listed merchant records. You can click
            on the merchant name to edit information.
          </h2>
          <div class="">
            <table
              class="w-full text-sm rounded-lg overflow-hidden ring-1 ring-gray-300"
            >
              <tr>
                <td
                  class="border border-gray-300 shadow-inner bg-gray-100 py-2 px-3 font-bold relative"
                  colspan="2"
                >
                  File upload:
                  <span class="text-green-500">4/8 Applications</span>
                  <button
                    @click="toggleTable"
                    class="absolute right-2 top-2 text-gray-500 hover:text-gray-800 transition-colors flex items-center z-10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                      v-show="isExpanded"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                      v-show="!isExpanded"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr v-show="isExpanded">
                <td class="border border-gray-300 shadow-inner py-3 px-3">
                  <div class="flex justify-left">
                    <!-- Change here -->
                    <div class="pt-2 relative text-gray-600 mb-5">
                      <input
                        class="border border-gray-300 bg-gray-100 shadow-inner h-8 px-5 pr-16 text-sm focus:outline-none"
                        type="search"
                        name="search"
                        placeholder="Search by Name/ROC.."
                      />

                      <button
                        type="submit"
                        class="absolute right-0 top-0 mt-5 mr-4"
                      >
                        <svg
                          class="text-gray-600 h-3 w-3 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Capa_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 56.966 56.966"
                          style="enable-background: new 0 0 56.966 56.966"
                          xml:space="preserve"
                          width="512px"
                          height="512px"
                        >
                          <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <table class="w-full">
                    <thead>
                      <tr>
                        <th
                          class="border border-gray-300 bg-gray-100 py-2 px-1 text-left font-bold"
                        >
                          Merchant Name
                        </th>
                        <th
                          class="border border-gray-300 bg-gray-100 py-2 px-1 text-left font-bold"
                        >
                          Registrar of Companies (ROC)/CRN
                        </th>
                        <th
                          class="border border-gray-300 bg-gray-100 py-2 px-1 text-left font-bold"
                        >
                          Records
                        </th>
                        <th
                          class="border border-gray-300 bg-gray-100 py-2 px-1 text-left font-bold"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border border-gray-300">
                        <td class="border border-gray-300 py-2 px-1">
                          ABC SDN BHD aaaaaaaaaaaaaaaaaaaa
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          abc1234
                        </td>
                        <td
                          class="border border-gray-300 text-[#44d62c] py-2 px-1"
                        >
                          Submitted
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          <button
                            class="bg-gray-300 text-white py-1 px-2 rounded-none"
                          >
                            Reupload
                          </button>
                        </td>
                      </tr>
                      <tr class="border border-gray-300">
                        <td class="border border-gray-300 py-2 px-1">
                          ABCD SDN BHD
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          abc1234
                        </td>
                        <td
                          class="border border-gray-300 text-[#44d62c] py-2 px-1"
                        >
                          Submitted
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          <button
                            class="bg-gray-300 text-white py-1 px-2 rounded-none"
                          >
                            Reupload
                          </button>
                        </td>
                      </tr>
                      <tr class="border border-gray-300">
                        <td class="border border-gray-300 py-2 px-1">
                          ABCD SDN BHD
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          abc1234
                        </td>
                        <td
                          class="border border-gray-300 text-[#44d62c] py-2 px-1"
                        >
                          Submitted
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          <button
                            class="bg-gray-300 text-white py-1 px-2 rounded-none"
                          >
                            Reupload
                          </button>
                        </td>
                      </tr>
                      <tr class="border border-gray-300">
                        <td class="border border-gray-300 py-2 px-1">
                          ABCD SDN BHD
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          abc1234
                        </td>
                        <td
                          class="border border-gray-300 text-[#44d62c] py-2 px-1"
                        >
                          Submitted
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          <button
                            class="bg-gray-300 text-white py-1 px-2 rounded-none"
                          >
                            Reupload
                          </button>
                        </td>
                      </tr>
                      <tr class="border border-gray-300">
                        <td class="border border-gray-300 py-2 px-1">
                          ABCD SDN BHD
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          abc1234
                        </td>
                        <td
                          class="border border-gray-300 text-[#44d62c] py-2 px-1"
                        >
                          Submitted
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          <button
                            class="bg-gray-300 text-white py-1 px-2 rounded-none"
                          >
                            Reupload
                          </button>
                        </td>
                      </tr>
                      <tr class="border border-gray-300">
                        <td class="border border-gray-300 py-2 px-1">
                          ABCD SDN BHD
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          abc1234
                        </td>
                        <td
                          class="border border-gray-300 text-[#44d62c] py-2 px-1"
                        >
                          Submitted
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          <button
                            class="bg-gray-300 text-white py-1 px-2 rounded-none"
                          >
                            Reupload
                          </button>
                        </td>
                      </tr>
                      <tr class="border border-gray-300">
                        <td class="border border-gray-300 py-2 px-1">
                          ABCD SDN BHD
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          abc1234
                        </td>
                        <td
                          class="border border-gray-300 text-[#44d62c] py-2 px-1"
                        >
                          Submitted
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          <button
                            class="bg-gray-300 text-white py-1 px-2 rounded-none"
                          >
                            Reupload
                          </button>
                        </td>
                      </tr>
                      <tr class="border border-gray-300">
                        <td class="border border-gray-300 py-2 px-1">
                          ABCD SDN BHD
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          abc1234
                        </td>
                        <td
                          class="border border-gray-300 text-[#44d62c] py-2 px-1"
                        >
                          Submitted
                        </td>
                        <td class="border border-gray-300 py-2 px-1">
                          <button
                            class="bg-gray-300 text-white py-1 px-2 rounded-none"
                          >
                            Reupload
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="flex justify-end mt-1">
                    <button
                      class="bg-gray-500 py-3 px-10 font-semibold rounded mt-2 text-white hover:text-black"
                      @click="goToPage('page3')"
                      :class="hovered ? 'text-black' : ''"
                      @mouseover="hovered = true"
                      @mouseout="hovered = false"
                    >
                      Back
                    </button>
                    <button
                      class="ml-2 bg-[#44d62c] py-3 px-10 font-semibold rounded mt-2 text-white hover:text-black"
                      @click="goToPage('page5')"
                      :class="hovered ? 'text-black' : ''"
                      @mouseover="hovered = true"
                      @mouseout="hovered = false"
                    >
                      Proceed
                    </button>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="currentPage === 'page5'">
      <section class="is-title-bar">
        <div
          class="flex flex-col md:flex-row items-center justify-between mt-5"
        >
          <h1 class="ml-5 text-2xl font-semibold text-gray-700">
            BULK ONBOARD LIST
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

        <span class="text-3xl ml-6 mt-20">
          Welcome to RazerMS <strong>product_dev</strong>
        </span>
      </section>
      <div class="mt-10 flex flex-col md:flex-row">
        <!-- Left column -->
        <div class="w-full md:w-3/5 p-4 ml-10">
          <img src="src\assets\success.png" alt="Your Image" class="w-120" />
          <div class="flex flex-col space-y-4">
            <div class="flex flex-row items-center font-bold">
              <p class="text-3xl mt-4">
                Great Job! Application has submitted successfully.
              </p>
            </div>

            <div class="flex flex-row items-center">
              <p class="text-sm">
                Reminder: Status of application can be view in dashboard.
              </p>
            </div>
            <div class="flex mt-1">
              <button
                class="bg-gray-500 py-2 px-16 font-semibold rounded mt-2 text-white hover:text-black"
                @click="goToPage('page4')"
                :class="hovered ? 'text-black' : ''"
                @mouseover="hovered = true"
                @mouseout="hovered = false"
              >
                Back to Home
              </button>
              <button
                class="ml-2 bg-[#44d62c] py-2 px-4 font-semibold rounded mt-2 text-white hover:text-black"
                @click="goToPage('page6')"
                :class="hovered ? 'text-black' : ''"
                @mouseover="hovered = true"
                @mouseout="hovered = false"
              >
                View Sub-Merchant Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import FileUpload from "./FileUpload.vue";

export default {
  components: {
    FileUpload,
  },
  data() {
    return {
      currentPage: "page1",
      isExpanded: false,
      showPopup2: false,
      showPopup: false,
      showPopup1: false,
      hovered: false,

      rows: [
        {
          id: 643,
          date: "2023-03-16 17:24:41",
          fileName: "MRA Offline.xlsx",
          status: "Completed",
          totalApplications: "2/2 (Completed)",
        },
        {
          id: 641,
          date: "2023-03-16 17:13:15",
          fileName: "MRA Offline.xlsx",
          status: "Completed",
          totalApplications: "2/2 (Completed)",
        },
        {
          id: 640,
          date: "2023-03-16 17:11:12",
          fileName: "MRA Offline.xlsx",
          status: "Document required",
          totalApplications: "4/8 (Document Required)",
        },
      ],
      sortColumn: "",
      sortDirection: "",
    };
  },

  methods: {
    closePopup() {
      this.showPopup = false;
      this.showPopup2 = false;
      this.showPopup1 = false;
    },
    goToPage(page) {
      this.currentPage = page;
      
    },
    toggleTable() {
      this.isExpanded = !this.isExpanded;
    },
    sort(column) {
      if (column === this.sortColumn) {
        this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
      } else {
        this.sortColumn = column;
        this.sortDirection = "asc";
      }

      this.rows.sort((a, b) => {
        let comparison = 0;

        if (typeof a[column] === "number") {
          comparison = a[column] - b[column];
        } else {
          const columnA = a[column].toString().toLowerCase();
          const columnB = b[column].toString().toLowerCase();

          if (columnA > columnB) {
            comparison = 1;
          } else if (columnA < columnB) {
            comparison = -1;
          }
        }

        return this.sortDirection === "desc" ? comparison * -1 : comparison;
      });
    },
  },
};
</script>
