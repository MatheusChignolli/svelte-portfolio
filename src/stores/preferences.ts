import { writable } from 'svelte-local-storage-store'

const preferences = writable('preferences', {
  theme: 'dark'
})

export default preferences
