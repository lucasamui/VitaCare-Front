<script setup>
import { CalendarCheck, Microscope, ScrollText, UserRound, BriefcaseMedical, Hash, Tablets, NotebookPen, ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <div class="home">
    <section class="hero">
      <div>
        <p class="hero-tag">Painel da clínica</p>
        <h1>Olá! Bem-vindo(a) ao <span>VitaCare</span></h1>
        <p class="hero-text">Agende consultas, solicite exames e emita receitas em poucos cliques.</p>
      </div>
      <img src="/vitacare.svg" alt="" class="hero-mark" />
    </section>

    <p class="home-section-label">Ações rápidas</p>
    <div class="home-primary-grid">
      <RouterLink to="/consults/add" class="primary-card">
        <div class="primary-card-icon"><CalendarCheck :size="22" /></div>
        <div>
          <div class="primary-card-title">Nova consulta</div>
          <div class="primary-card-desc">Agendar e registrar uma consulta médica</div>
        </div>
        <ArrowRight :size="18" class="primary-card-arrow" />
      </RouterLink>
      <RouterLink to="/exams/add" class="primary-card">
        <div class="primary-card-icon"><Microscope :size="22" /></div>
        <div>
          <div class="primary-card-title">Novo exame</div>
          <div class="primary-card-desc">Solicitar um exame para um paciente</div>
        </div>
        <ArrowRight :size="18" class="primary-card-arrow" />
      </RouterLink>
      <RouterLink to="/prescriptions/add" class="primary-card">
        <div class="primary-card-icon"><ScrollText :size="22" /></div>
        <div>
          <div class="primary-card-title">Nova receita</div>
          <div class="primary-card-desc">Emitir uma receita médica</div>
        </div>
        <ArrowRight :size="18" class="primary-card-arrow" />
      </RouterLink>
    </div>

    <p class="home-section-label" style="margin-top: 40px">Cadastros</p>
    <div class="home-secondary-grid">
      <RouterLink to="/patients" class="secondary-card">
        <UserRound :size="18" class="secondary-card-icon" />
        <span class="secondary-card-title">Pacientes</span>
      </RouterLink>
      <RouterLink to="/doctors" class="secondary-card">
        <BriefcaseMedical :size="18" class="secondary-card-icon" />
        <span class="secondary-card-title">Médicos</span>
      </RouterLink>
      <RouterLink to="/cids" class="secondary-card">
        <Hash :size="18" class="secondary-card-icon" />
        <span class="secondary-card-title">CIDs</span>
      </RouterLink>
      <RouterLink to="/medications" class="secondary-card">
        <Tablets :size="18" class="secondary-card-icon" />
        <span class="secondary-card-title">Medicamentos</span>
      </RouterLink>
      <RouterLink to="/medicalhistories" class="secondary-card">
        <NotebookPen :size="18" class="secondary-card-icon" />
        <span class="secondary-card-title">Históricos</span>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 4px 0;
}

/* Destaque do topo */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 32px 36px;
  margin-bottom: 36px;
  border-radius: 20px;
  background: linear-gradient(120deg, #0f8f74 0%, #13a88a 60%, #2bbf9d 100%);
  color: #fff;
  box-shadow: 0 12px 30px rgba(15, 143, 116, 0.25);
}

.hero-tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 12px;
}

.hero h1 {
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -0.8px;
}

.hero h1 span {
  color: #ffd9cd;
}

.hero-text {
  font-size: 15px;
  margin-top: 8px;
  opacity: 0.9;
}

.hero-mark {
  width: 88px;
  height: 88px;
  flex-shrink: 0;
  filter: drop-shadow(0 6px 16px rgba(0, 0, 0, 0.15));
}

.home-section-label {
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 14px;
}

/* Cards de ação */
.home-primary-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.primary-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.2s;
  cursor: pointer;
  box-shadow: var(--shadow);
}

.primary-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.primary-card-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.primary-card-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
}

.primary-card-desc {
  font-size: 13px;
  color: var(--text2);
  line-height: 1.5;
  margin-top: 2px;
}

.primary-card-arrow {
  margin-left: auto;
  color: var(--text3);
  transition: color 0.2s, transform 0.2s;
}

.primary-card:hover .primary-card-arrow {
  color: var(--coral);
  transform: translateX(3px);
}

/* Cards de cadastro */
.home-secondary-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
}

.secondary-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 18px 16px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  transition: all 0.15s;
}

.secondary-card:hover {
  border-color: var(--coral);
  background: #fff8f5;
}

.secondary-card-icon {
  color: var(--coral);
}

.secondary-card-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
}

@media (max-width: 900px) {
  .home-primary-grid { grid-template-columns: 1fr; }
  .home-secondary-grid { grid-template-columns: repeat(2, 1fr); }
  .hero-mark { display: none; }
}
</style>
