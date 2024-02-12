<template>
    <div class="az-header">
        <br>
        <h2 class="az-content-title">Update Drying</h2>
        <div class="az-content pd-y-20 pd-lg-y-30 pd-xl-y-0">
            <div class="container">
                <div class="az-content-body pd-lg-l-0 d-flex flex-column">
                    <div class="table-responsive">
                        <form method="post" @submit.prevent="updateEstate">
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
                                            <input type="date" placeholder="Year Drying" v-model="estateInfo.d_year"
                                                step="any" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Produccion"
                                                v-model="estateInfo.d_produccion" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Dias de Secado"
                                                v-model="estateInfo.d_dias_secado" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="K(kg/m^3)" v-model="estateInfo.d_k" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Numero de Patios"
                                                v-model="estateInfo.d_patio_secado" step="any" min="0" required>
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
                                            <input type="number" placeholder="Valor Maquinaria"
                                                v-model="estateInfo.d_val_maq" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Valor Combustible"
                                                v-model="estateInfo.d_combustible" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Valor Infraestructura"
                                                v-model="estateInfo.d_val_infra" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Promedio Electrico"
                                                v-model="estateInfo.d_promedio_electrico" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Area Total"
                                                v-model="estateInfo.area_finca" step="any" min="0" required>
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
                                            <input type="number" placeholder="Transpiracion"
                                                v-model="estateInfo.p_transpiracion" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Densidad (1000Kg/m^3)"
                                                v-model="estateInfo.p_densidad2" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Energia Libre"
                                                v-model="estateInfo.p_enegia_lib" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Dolar" v-model="estateInfo.l_Pdolar"
                                                step="any" min="0">
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Albedo" v-model="estateInfo.p_albedo"
                                                step="any" min="0" required>
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
                                            <input type="number" placeholder="Gastos Beneficios"
                                                v-model="estateInfo.d_gf_Benef" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Insolacion"
                                                v-model="estateInfo.p_insolation" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Admosfera" v-model="estateInfo.p_admosfra"
                                                step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Densidad del Aire"
                                                v-model="estateInfo.p_densidadA" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Viento" v-model="estateInfo.p_viento"
                                                step="any" min="0" required>
                                        </td>
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
import dryingColl from "../../utlis/firebase3";
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
    data() {
        return {
            selectedEstate: {},
            editId: null,
            docRef: null,
            estateInfo: {
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
                estateId: null,
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
            },
        };
    },
    methods: {
        async getEstate() {
            let estateRef = doc(dryingColl, this.editId);
            this.docRef = estateRef;
            let estate = await getDoc(this.docRef);
            let estateData = estate.data();
            this.estateInfo.d_year = estateData.d_year;
            this.estateInfo.d_produccion = estateData.d_produccion;
            this.estateInfo.d_dias_secado = estateData.d_dias_secado;
            this.estateInfo.d_k = estateData.d_k;
            this.estateInfo.d_patio_secado = estateData.d_patio_secado;
            this.estateInfo.d_val_maq = estateData.d_val_maq;
            this.estateInfo.d_gf_Benef = estateData.d_gf_Benef;
            this.estateInfo.d_combustible = estateData.d_combustible;
            this.estateInfo.d_val_infra = estateData.d_val_infra;
            this.estateInfo.d_promedio_electrico = estateData.d_promedio_electrico;
            this.estateInfo.estateId = estateData.estateId;
            this.estateInfo.area_finca = estateData.area_finca;
            this.estateInfo.p_transpiracion = estateData.p_transpiracion;
            this.estateInfo.p_densidad2 = estateData.p_densidad2;
            this.estateInfo.p_enegia_lib = estateData.p_enegia_lib;
            this.estateInfo.l_Pdolar = estateData.l_Pdolar;
            this.estateInfo.p_albedo = estateData.p_albedo;
            this.estateInfo.p_insolation = estateData.p_insolation;
            this.estateInfo.p_admosfra = estateData.p_admosfra;
            this.estateInfo.p_densidadA = estateData.p_densidadA;
            this.estateInfo.p_viento = estateData.p_viento;
        },
        /* async updateEstate() {
            await setDoc(this.docRef, this.estateInfo);
            alert(
                `The estate with ID of ${this.editId} has been updated successfully!`
            );
            this.$router.push("/");
        }, */
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