import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CidsList from '../views/cids/CidsList.vue'
import CidsForm from '../views/cids/CidsForm.vue'
import MedicationsList from '../views/medications/MedicationsList.vue'
import MedicationsForm from '../views/medications/MedicationsForm.vue'
import MedicalHistoriesList from '../views/medicalhistories/MedicalHistoriesList.vue'
import MedicalHistoriesForm from '../views/medicalhistories/MedicalHistoriesForm.vue'
import PatientsList from '../views/patients/PatientsList.vue'
import PatientsForm from '../views/patients/PatientsForm.vue'
import PatientsDetail from '../views/patients/PatientsDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },

    { path: '/cids', component: CidsList },
    { path: '/cids/add', component: CidsForm },
    { path: '/cids/:id/edit', component: CidsForm },

    { path: '/medications', component: MedicationsList },
    { path: '/medications/add', component: MedicationsForm },
    { path: '/medications/:id/edit', component: MedicationsForm },

    { path: '/medicalhistories', component: MedicalHistoriesList },
    { path: '/medicalhistories/add', component: MedicalHistoriesForm },
    { path: '/medicalhistories/:id/edit', component: MedicalHistoriesForm },

    { path: '/patients', component: PatientsList },
    { path: '/patients/add', component: PatientsForm },
    { path: '/patients/:id', component: PatientsDetail },
    { path: '/patients/:id/edit', component: PatientsForm },

  ],
})

export default router
