<script setup>
import { useToast } from '../composables/useToast.js'

const { toasts } = useToast()
</script>

<template>
  <TransitionGroup name="toast" tag="div" class="toast-container">
    <div
      v-for="t in toasts"
      :key="t.id"
      :class="['toast', `toast-${t.type}`]"
    >
      <span class="toast-icon">{{ t.type === 'success' ? '✓' : '✕' }}</span>
      {{ t.message }}
    </div>
  </TransitionGroup>
</template>

<style scoped>
.toast-container {
  position: fixed;
  top: 80px;
  right: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
  pointer-events: none;
}

.toast {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 500;
  box-shadow: 0 8px 24px rgba(16, 40, 34, 0.15);
  pointer-events: all;
  border-left: 3px solid transparent;
  min-width: 240px;
  max-width: 360px;
}

.toast-success {
  background: var(--surface);
  border: 1px solid rgba(21, 153, 90, 0.25);
  border-left-color: var(--accent2);
  color: var(--text);
}

.toast-error {
  background: var(--surface);
  border: 1px solid rgba(224, 79, 79, 0.25);
  border-left-color: var(--danger);
  color: var(--text);
}

.toast-icon {
  font-size: 12px;
  font-weight: 700;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.toast-success .toast-icon {
  background: rgba(21, 153, 90, 0.15);
  color: var(--accent2);
}

.toast-error .toast-icon {
  background: rgba(224, 79, 79, 0.12);
  color: var(--danger);
}

/* Transitions */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from {
  opacity: 0;
  transform: translateY(12px) scale(0.95);
}
.toast-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
