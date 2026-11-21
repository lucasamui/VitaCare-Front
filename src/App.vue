<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { CalendarCheck, Microscope, ScrollText, UserRound, BriefcaseMedical, Hash, Tablets, NotebookPen } from 'lucide-vue-next'
import ToastContainer from './components/ToastContainer.vue'

const route = useRoute()
const isActive = (path) => route.path.startsWith(path)
</script>

<template>
  <ToastContainer />

  <header class="topbar">
    <div class="topbar-inner">
      <RouterLink to="/" class="logo">
        <img src="/vitacare.svg" alt="" class="logo-mark" />
        <span>Vita<em>Care</em></span>
      </RouterLink>

      <nav class="nav">
        <RouterLink to="/consults" :class="['nav-item', { active: isActive('/consults') }]"><CalendarCheck :size="15" /> Consultas</RouterLink>
        <RouterLink to="/exams" :class="['nav-item', { active: isActive('/exams') }]"><Microscope :size="15" /> Exames</RouterLink>
        <RouterLink to="/prescriptions" :class="['nav-item', { active: isActive('/prescriptions') }]"><ScrollText :size="15" /> Receitas</RouterLink>

        <span class="nav-divider"></span>

        <RouterLink to="/patients" :class="['nav-item', { active: isActive('/patients') }]"><UserRound :size="15" /> Pacientes</RouterLink>
        <RouterLink to="/doctors" :class="['nav-item', { active: isActive('/doctors') }]"><BriefcaseMedical :size="15" /> Médicos</RouterLink>

        <span class="nav-divider"></span>

        <RouterLink to="/cids" :class="['nav-item', { active: isActive('/cids') }]"><Hash :size="15" /> CIDs</RouterLink>
        <RouterLink to="/medications" :class="['nav-item', { active: isActive('/medications') }]"><Tablets :size="15" /> Medicamentos</RouterLink>
        <RouterLink to="/medicalhistories" :class="['nav-item', { active: isActive('/medicalhistories') }]"><NotebookPen :size="15" /> Históricos</RouterLink>
      </nav>
    </div>
  </header>

  <main class="main">
    <RouterView />
  </main>

  <footer class="footer">VitaCare · Sistema de gestão de clínica médica</footer>
</template>
