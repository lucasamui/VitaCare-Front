<script setup>
import { useConfirm } from '../composables/useConfirm.js'

const { visible, title, message, answer } = useConfirm()
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="visible" class="modal-backdrop" @click.self="answer(false)">
        <div class="modal-box">
          <div class="modal-icon">!</div>
          <h3 class="modal-title">{{ title }}</h3>
          <p class="modal-msg">{{ message }}</p>
          <div class="modal-actions">
            <button class="btn btn-ghost" @click="answer(false)">Cancelar</button>
            <button class="btn btn-danger" @click="answer(true)">Excluir</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(16, 40, 34, 0.35);
  backdrop-filter: blur(3px);
  z-index: 9000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-box {
  background: var(--surface);
  border-radius: 18px;
  padding: 32px 28px;
  width: 380px;
  max-width: 90vw;
  text-align: center;
  box-shadow: 0 20px 50px rgba(16, 40, 34, 0.18);
}

.modal-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 14px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 800;
  background: rgba(224, 79, 79, 0.10);
  color: var(--danger);
}

.modal-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 8px;
}

.modal-msg {
  font-size: 13px;
  color: var(--text2);
  margin-bottom: 24px;
  line-height: 1.5;
}

.modal-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

/* Transition */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal-box,
.modal-leave-to .modal-box {
  transform: scale(0.95) translateY(-10px);
}
.modal-box {
  transition: transform 0.2s ease;
}
</style>
