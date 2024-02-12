<template>
    <div class="az-header">
        <br>
        <h2 class="az-content-title">Update Planting</h2>
        <div class="az-content pd-y-20 pd-lg-y-30 pd-xl-y-0">
            <div class="container">
                <div class="az-content-body pd-lg-l-0 d-flex flex-column">
                    <div class="table-responsive">
                        <form method="post" @submit.prevent="updateEstate">
                            <table class="table table-striped mg-b-10">
                                <thead>
                                    <tr>
                                        <th>
                                            Year
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
                                            <input type="date" placeholder="Year Planting" v-model="estateInfo.p_year"
                                                step="any" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Albedo" v-model="estateInfo.p_albedo"
                                                step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Prom Insolacion"
                                                v-model="estateInfo.p_promedio_inso" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Capa Admosfera"
                                                v-model="estateInfo.p_capa_admos" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="densidad del aire"
                                                v-model="estateInfo.p_densidad_aire" step="any" min="0" required>
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
                                                v-model="estateInfo.p_vel_viento" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Duracion del cultivo"
                                                v-model="estateInfo.p_duracion_cult" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Evaporacion Potencial"
                                                v-model="estateInfo.p_evaporacion_poten" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Coeficiente del cultivo"
                                                v-model="estateInfo.p_coefi_cult" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="energia libre gibbs"
                                                v-model="estateInfo.p_energia_libre_gibbs" step="any" min="0" required>
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
                                            <input type="number" placeholder="Aspecto Hidrico"
                                                v-model="estateInfo.p_aspec_hidrico" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="agua Lluvia, circula libre"
                                                v-model="estateInfo.p_agua" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Promedio de Elevación"
                                                v-model="estateInfo.p_promedio_altura" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="densidad" v-model="estateInfo.p_densidad"
                                                step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Transpiracion"
                                                v-model="estateInfo.p_transpiracion" step="any" min="0" required>
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
                                                v-model="estateInfo.p_perdida_suelo" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="contenido materia organica"
                                                v-model="estateInfo.p_cont_materia_orga" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="fertilizante de nitrogeno"
                                                v-model="estateInfo.p_ferti_nitro" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Fertilizante de fosfato"
                                                v-model="estateInfo.p_ferti_fosfato" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Fertilizante de potacio"
                                                v-model="estateInfo.p_ferti_potacio" step="any" min="0" required>
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
                                            <input type="number" placeholder="Urea" v-model="estateInfo.p_urea"
                                                step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Cal" v-model="estateInfo.p_cal" step="any"
                                                min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="materia Organica"
                                                v-model="estateInfo.p_materia_orga" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="semillas" v-model="estateInfo.p_semillas"
                                                step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Maquinaria y mantenimiento"
                                                v-model="estateInfo.p_maq_man" step="any" min="0" required>
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
                                                v-model="estateInfo.p_pest_fung" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Jornal"
                                                v-model="estateInfo.l_siembra_mante" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Area de Cultivo"
                                                v-model="estateInfo.area_finca" step="any" min="0" required>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <a class="btn btn-dark my-3 mx-2" @click="$router.go(-1)">Back</a>
                                            <button type="submit" class="btn btn-primary">Update</button>
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
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
    data() {
        return {
            selectedEstate: {},
            editId: null,
            docRef: null,
            estateInfo: {
                estateId: null,
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
            },
        };
    },
    methods: {
        async getEstate() {
            let estateRef = doc(plantingColl, this.editId);
            this.docRef = estateRef;
            let estate = await getDoc(this.docRef);
            let estateData = estate.data();
            this.estateInfo.p_year = estateData.p_year;
            this.estateInfo.p_albedo = estateData.p_albedo;
            this.estateInfo.p_promedio_inso = estateData.p_promedio_inso;
            this.estateInfo.p_capa_admos = estateData.p_capa_admos;
            this.estateInfo.p_densidad_aire = estateData.p_densidad_aire;
            this.estateInfo.p_vel_viento = estateData.p_vel_viento;
            this.estateInfo.p_duracion_cult = estateData.p_duracion_cult;
            this.estateInfo.p_evaporacion_poten = estateData.p_evaporacion_poten;
            this.estateInfo.p_coefi_cult = estateData.p_coefi_cult;
            this.estateInfo.p_energia_libre_gibbs = estateData.p_energia_libre_gibbs;
            this.estateInfo.p_aspec_hidrico = estateData.p_aspec_hidrico;
            this.estateInfo.p_agua = estateData.p_agua;
            this.estateInfo.p_promedio_altura = estateData.p_promedio_altura;
            this.estateInfo.p_densidad = estateData.p_densidad;
            this.estateInfo.p_transpiracion = estateData.p_transpiracion;
            this.estateInfo.p_perdida_suelo = estateData.p_perdida_suelo;
            this.estateInfo.p_cont_materia_orga = estateData.p_cont_materia_orga;
            this.estateInfo.p_ferti_nitro = estateData.p_ferti_nitro;
            this.estateInfo.p_ferti_fosfato = estateData.p_ferti_fosfato;
            this.estateInfo.p_ferti_potacio = estateData.p_ferti_potacio;
            this.estateInfo.p_urea = estateData.p_urea;
            this.estateInfo.p_cal = estateData.p_cal;
            this.estateInfo.p_materia_orga = estateData.p_materia_orga;
            this.estateInfo.p_semillas = estateData.p_semillas;
            this.estateInfo.p_maq_man = estateData.p_maq_man;
            this.estateInfo.p_pest_fung = estateData.p_pest_fung;
            this.estateInfo.estateId = estateData.estateId;
            this.estateInfo.area_finca = estateData.area_finca;
            this.estateInfo.l_siembra_mante = estateData.l_siembra_mante;
        },
        async updateEstate() {
            if (confirm("Are you sure to update this record?")) {
                await setDoc(this.docRef, this.estateInfo);
                alert(
                    `The estate with ID of ${this.editId} has been updated successfully!`
                );
                this.$router.go(-1);
            }
        },
    },
    created() {
        let editId = this.$route.params.editId;
        this.editId = editId;
        this.getEstate();
    },
}
</script>

<style>
</style>