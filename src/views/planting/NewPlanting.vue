<template>
    <div class="az-header">
        <br>
        <h2 class="az-content-title">Create Planting</h2>
        <div class="az-content pd-y-20 pd-lg-y-30 pd-xl-y-0">
            <div class="container">
                <div class="az-content-body pd-lg-l-0 d-flex flex-column">
                    <div class="table-responsive">
                        <form method="post" @submit.prevent="createPlanting">
                            <table class="table table-striped mg-b-10">
                                <thead>
                                    <tr>
                                        <th>
                                            Year Planting
                                        </th>
                                        <th>
                                            Albedo
                                        </th>
                                        <th>
                                            Prom Insolacion
                                        </th>
                                        <th>
                                            Capa Admosfera
                                        </th>
                                        <th>
                                            densidad del aire
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="date" placeholder="Year Planting" v-model="p_year" step="any" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Albedo" v-model="p_albedo" step="any"
                                                min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Prom Insolacion" v-model="p_promedio_inso"
                                                step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Capa Admosfera" v-model="p_capa_admos"
                                                step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="densidad del aire"
                                                v-model="p_densidad_aire" step="any" min="0" required>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>
                                            velocidad del viento
                                        </th>
                                        <th>
                                            Duracion del cultivo
                                        </th>
                                        <th>
                                            Evaporacion Potencial
                                        </th>
                                        <th>
                                            Coeficiente del cultivo
                                        </th>
                                        <th>
                                            energia libre gibbs
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="number" placeholder="velocidad del viento"
                                                v-model="p_vel_viento" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Duracion del cultivo"
                                                v-model="p_duracion_cult" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Evaporacion Potencial"
                                                v-model="p_evaporacion_poten" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Coeficiente del cultivo"
                                                v-model="p_coefi_cult" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="energia libre gibbs"
                                                v-model="p_energia_libre_gibbs" step="any" min="0" required>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>
                                            Aspecto Hidrico
                                        </th>
                                        <th>
                                            agua Lluvia, circula libre
                                        </th>
                                        <th>
                                            Promedio de Elevación
                                        </th>
                                        <th>
                                            densidad
                                        </th>
                                        <th>
                                            Transpiracion
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="number" placeholder="Aspecto Hidrico" v-model="p_aspec_hidrico"
                                                step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="agua Lluvia, circula libre"
                                                v-model="p_agua" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Promedio de Elevación"
                                                v-model="p_promedio_altura" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="densidad" v-model="p_densidad" step="any"
                                                min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Transpiracion" v-model="p_transpiracion"
                                                step="any" min="0" required>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>
                                            perdida del suelo
                                        </th>
                                        <th>
                                            contenido materia organica
                                        </th>
                                        <th>
                                            fertilizante de nitrogeno
                                        </th>
                                        <th>
                                            Fertilizante de fosfato
                                        </th>
                                        <th>
                                            Fertilizante de potacio
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="number" placeholder="perdida del suelo"
                                                v-model="p_perdida_suelo" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="contenido materia organica"
                                                v-model="p_cont_materia_orga" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="fertilizante de nitrogeno"
                                                v-model="p_ferti_nitro" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Fertilizante de fosfato"
                                                v-model="p_ferti_fosfato" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Fertilizante de potacio"
                                                v-model="p_ferti_potacio" step="any" min="0" required>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>
                                            Urea
                                        </th>
                                        <th>
                                            Cal
                                        </th>
                                        <th>
                                            materia Organica
                                        </th>
                                        <th>
                                            semillas
                                        </th>
                                        <th>
                                            Maquinaria y mantenimiento
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="number" placeholder="Urea" v-model="p_urea" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Cal" v-model="p_cal" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="materia Organica" v-model="p_materia_orga"
                                                step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="semillas" v-model="p_semillas" step="any"
                                                min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Maquinaria y mantenimiento"
                                                v-model="p_maq_man" step="any" min="0" required>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>
                                            pesticidas y fungicidas
                                        </th>
                                        <th>
                                            Jornal Siembra/Mante
                                        </th>
                                        <th>
                                            Area de Cultivo
                                        </th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input type="number" placeholder="pesticidas y fungicidas"
                                                v-model="p_pest_fung" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Jornal" v-model="l_siembra_mante"
                                                step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Area de Cultivo" v-model="area_finca"
                                                step="any" min="0" required>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <a class="btn btn-dark my-3 mx-2" @click="$router.go(-1)">Back</a>
                                            <button type="submit" class="btn btn-primary">Save</button>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import plantingColl from "../../utlis/firebase1";
import { addDoc } from "firebase/firestore";
export default {
    data() {
        return {
            estateId: this.estateId,
            p_year: null,
            p_albedo: null,
            p_promedio_inso: null,
            p_capa_admos: null,
            p_densidad_aire: null,
            p_vel_viento: null,
            p_duracion_cult: null,
            p_evaporacion_poten: null,
            p_coefi_cult: null,
            p_energia_libre_gibbs: null,
            p_aspec_hidrico: null,
            p_agua: null,
            p_promedio_altura: null,
            p_densidad: null,
            p_transpiracion: null,
            p_perdida_suelo: null,
            p_cont_materia_orga: null,
            p_ferti_nitro: null,
            p_ferti_fosfato: null,
            p_ferti_potacio: null,
            p_urea: null,
            p_cal: null,
            p_materia_orga: null,
            p_semillas: null,
            p_maq_man: null,
            p_pest_fung: null,
            area_finca: null,
            l_siembra_mante: null
        }
    },
    methods: {
        async createPlanting() {
            if (confirm("Creating Document")) {
                const addedDoc = await addDoc(plantingColl, this.$data);
                alert("Document Created Successfully!");
                console.log(addedDoc);
                this.$router.go(-1);
            }
        }
    },
    created() {
        let estateId = this.$route.params.estateId;
        this.estateId = estateId;
        console.log(estateId);
    },
}
</script>

<style>
</style>