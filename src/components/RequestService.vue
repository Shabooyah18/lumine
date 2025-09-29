<template>
  <Dialog
      class="bg-white"
      v-model:visible="visible"
      header="Request A Service"
      :modal="true"
      :style="{ width: '50vw' }"
      :closable="false"
  >
    <p class="pb-3">Please enter your name and number to request a service.</p>

    <div class="flex flex-col gap-2">
      <InputText v-model="name" placeholder="Name" />
      <InputText v-model="phone" placeholder="Phone Number" />
    </div>

    <template #footer>
      <Button class="bg-gray-500 hover:bg-gray-600" label="Cancel" severity="secondary" @click="close" />
      <Button class="bg-brand submit-btn" :loading="loadingSubmit" label="Submit" @click="submit" />
    </template>
  </Dialog>

<!--- Success Dialog -->
  <Dialog
      class="bg-white"
      v-model:visible="successVisible"
      :header="failed ? 'Error' : 'Thank you!'"
      :modal="true"
      :style="{ width: '30vw' }"
      :closable="false"
  >
    <p class="pb-3" v-if="failed">Something went wrong. Please try again.</p>
    <p class="pb-3">Your request was received. We’ll be in contact soon!</p>

    <template #footer>
      <Button class="bg-brand submit-btn" label="OK" @click="successVisible = false" />
    </template>
  </Dialog>
</template>

<script setup>
import { ref, watch } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const props = defineProps({
  modelValue: { type: Boolean, default: false }
})
const emit = defineEmits(['update:modelValue'])

// Local state
const visible = ref(props.modelValue)
const name = ref('')
const phone = ref('')
const loadingSubmit = ref(false);
const successVisible = ref(false);
const failed = ref(false);

// Sync with parent
watch(() => props.modelValue, (val) => visible.value = val)
watch(visible, (val) => emit('update:modelValue', val))

function close() {
  visible.value = false
}

async function submit() {
  loadingSubmit.value = true;
  try {
    // ✅ form-encoded payload (avoids preflight CORS check)
    const formData = new URLSearchParams()
    formData.append("name", name.value)
    formData.append("number", phone.value)

    await fetch("https://script.google.com/macros/s/AKfycbxq-4AyWAQDG05rhz9ad4Old0AnVV8bbM3Ha023GOLXOJKJQPOCEvHRKWHmpPI8EK-R/exec", {
      method: "POST",
      body: formData,
    })

    console.log("Request saved to Google Sheets ✅")
    close()
    name.value = ''
    phone.value = ''
  } catch (err) {
    console.error("Error saving to Google Sheets ❌", err)
    failed.value = true;
  }
  finally {
    loadingSubmit.value = false;
    successVisible.value = true;
  }
}
</script>
<style scoped>
.submit-btn:hover {
  background-color: #007AC2;
}
</style>