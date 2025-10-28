import { ref } from 'vue'

export const isChecking = ref(false)

export function setChecking(v: boolean) {
  isChecking.value = v
}
