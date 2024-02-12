<template>
    <div class="az-header">
    <br>
    <h2 class="az-content-title">Create Drying</h2>
        <div class="az-content pd-y-20 pd-lg-y-30 pd-xl-y-0">
            <div class="container">
                <div class="az-content-body pd-lg-l-0 d-flex flex-column">
                    <div class="table-responsive">
                        <form method="post" @submit.prevent="createDrying">
                            <table class="table table-striped mg-b-10">
                                <thead>
                                    <tr>
                                        <th>
                                            Year Drying
                                        </th>
                                        <th>
                                            Produccion
                                        </th>
                                        <th>
                                            Dias de Secado
                                        </th>
                                        <th>
                                            K(kg/m^3)
                                        </th>
                                        <th>
                                            Numero de Patios
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="date" placeholder="Year Drying" v-model="d_year" step="any" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Produccion" v-model="d_produccion" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Dias de Secado" v-model="d_dias_secado" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="K(kg/m^3)" v-model="d_k" step="any" min="0">
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Numero de Patios" v-model="d_patio_secado" step="any" min="0" required>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>
                                            Valor Maquinaria
                                        </th>
                                        <th>
                                            Valor Combustible
                                        </th>
                                        <th>
                                            Valor Infraestructura
                                        </th>
                                        <th>
                                            Promedio Electrico
                                        </th>
                                        <th>
                                            Area Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="number" placeholder="Valor Maquinaria" v-model="d_val_maq" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Valor Combustible" v-model="d_combustible" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Valor Infraestructura" v-model="d_val_infra" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Promedio Electrico" v-model="d_promedio_electrico" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Area Total" v-model="area_finca" step="any" min="0" required>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>
                                            Transpiracion
                                        </th>
                                        <th>
                                            Densidad (1000Kg/m^3)
                                        </th>
                                        <th>
                                            Energia Libre
                                        </th>
                                        <th>
                                            Dolar
                                        </th>
                                        <th>
                                            Albedo
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="number" placeholder="Transpiracion" v-model="p_transpiracion" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Densidad (1000Kg/m^3)" v-model="p_densidad2" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Energia Libre" v-model="p_enegia_lib" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Dolar" v-model="l_Pdolar" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Albedo" v-model="p_albedo" step="any" min="0" required>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>
                                            Asist Tecnica Papeleria
                                        </th>
                                        <th>
                                            Insolacion
                                        </th>
                                        <th>
                                            Admosfera
                                        </th>
                                        <th>
                                            Densidad del Aire
                                        </th>
                                        <th>
                                            Viento
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="number" placeholder="Gastos Beneficios" v-model="d_gf_Benef" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Insolacion" v-model="p_insolation" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Admosfera" v-model="p_admosfra" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Densidad del Aire" v-model="p_densidadA" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Viento" v-model="p_viento" step="any" min="0" required>
                                        </td>
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
import dryingColl from "../../utlis/firebase3";
import { addDoc } from "firebase/firestore";
export default {
    data(){
        return {
            estateId: this.estateId,
            d_year: null,
            d_produccion: null,
            d_dias_secado: null,
            d_k: null,
            d_patio_secado: null,
            d_val_maq: null,
            d_gf_Benef: null,
            d_combustible: null,
            d_val_infra: null,
            d_promedio_electrico: null,

            area_finca: null,
            p_transpiracion: null,
            p_densidad2: null,
            p_enegia_lib: null,
            l_Pdolar: null,
            p_albedo: null,
            p_insolation: null,
            p_admosfra: null,
            p_densidadA: null,
            p_viento: null,

        }
    },
    methods:{
        async createDrying() {
            if (confirm("Creating Document")) {
                const addedDoc = await addDoc(dryingColl, this.$data);
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