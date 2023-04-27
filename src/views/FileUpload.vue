<template>
  <div class="flex items-center justify-center">
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
            class="relative flex min-h-[10px] items-center justify-center rounded-md border border-dashed border-2 border-[#e0e0e0] p-5 text-center px-40"
          >
            <div>
              <span
                class="mb-2 block text-base font-semibold text-[#07074D]"
              >
                Drag & Drop files here
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
</template>

<script>
export default {};
</script>
