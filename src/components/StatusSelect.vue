<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  modelValue: String,
  options: Array, // [{ value, label, colorClass }]
})
const emit = defineEmits(['update:modelValue'])

const open = ref(false)
const btnRef = ref(null)
const menuPos = ref({ top: 0, left: 0 })

const current = computed(() => props.options.find(o => o.value === props.modelValue))

async function toggle() {
  open.value = !open.value
  if (open.value) {
    await nextTick()
    const rect = btnRef.value.getBoundingClientRect()
    menuPos.value = { top: rect.bottom + 4, left: rect.left }
  }
}

function select(val) {
  emit('update:modelValue', val)
  open.value = false
}

function onClickOutside(e) {
  if (!e.target.closest('.ss-menu') && e.target !== btnRef.value && !btnRef.value?.contains(e.target)) {
    open.value = false
  }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onUnmounted(() => document.removeEventListener('click', onClickOutside))
</script>

<template>
  <div style="display:inline-block">
    <button
      ref="btnRef"
      type="button"
      :class="['ss-btn', current?.colorClass]"
      @click.stop="toggle"
    >
      {{ current?.label }}
      <span class="ss-chevron" :class="{ open }">▾</span>
    </button>

    <Teleport to="body">
      <div
        v-if="open"
        class="ss-menu"
        :style="{ top: menuPos.top + 'px', left: menuPos.left + 'px' }"
      >
        <button
          v-for="o in options"
          :key="o.value"
          type="button"
          :class="['ss-option', o.colorClass]"
          @click="select(o.value)"
        >
          {{ o.label }}
        </button>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.ss-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  font-family: var(--font);
  outline: none;
  white-space: nowrap;
  transition: opacity 0.15s;
}
.ss-btn:hover { opacity: 0.85; }

.ss-chevron {
  font-size: 10px;
  transition: transform 0.15s;
  display: inline-block;
}
.ss-chevron.open { transform: rotate(180deg); }

.color-blue   { background: rgba(37,117,214,0.10);  color: #2575d6; }
.color-yellow { background: rgba(212,138,19,0.12);  color: #b87410; }
.color-green  { background: rgba(21,153,90,0.12);   color: #15995a; }
.color-red    { background: rgba(224,79,79,0.10);   color: #e04f4f; }
</style>

<style>
.ss-menu {
  position: fixed;
  z-index: 8000;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 150px;
  box-shadow: 0 8px 24px rgba(16, 40, 34, 0.15);
}

.ss-option {
  display: block;
  width: 100%;
  padding: 7px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
  transition: opacity 0.1s;
}
.ss-option:hover { opacity: 0.8; }

.ss-menu .color-blue   { background: rgba(37,117,214,0.10);  color: #2575d6; }
.ss-menu .color-yellow { background: rgba(212,138,19,0.12);  color: #b87410; }
.ss-menu .color-green  { background: rgba(21,153,90,0.12);   color: #15995a; }
.ss-menu .color-red    { background: rgba(224,79,79,0.10);   color: #e04f4f; }
</style>
