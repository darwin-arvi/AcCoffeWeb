<template>
    <div class="az-header">
    <br>
    <h2 class="az-content-title">Create Pre-processing</h2>
        <div class="az-content pd-y-20 pd-lg-y-30 pd-xl-y-0">
            <div class="container">
                <div class="az-content-body pd-lg-l-0 d-flex flex-column">
                    <div class="table-responsive">
                        <form method="post" @submit.prevent="createBeaten">
                            <table class="table table-striped mg-b-10">
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            Year
                                        </th>
                                        <th scope="col">
                                            Valor Maquinaria
                                        </th>
                                        <th scope="col">
                                            Valor Infraestruccura
                                        </th>
                                        <th scope="col">
                                            Valor Promedio Electrico
                                        </th>
                                        <th scope="col">
                                            Beneficios por Año
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="date" placeholder="Year Beaten" v-model="b_year" required>
                                        </td>
                                        <td>
                                            <input type="number" step="any" min="0" placeholder="Valor Maquinaria" v-model="b_val_maq" required>
                                        </td>
                                        <td>
                                            <input type="number" step="any" min="0" placeholder="Valor Infraestruccura" v-model="b_val_infra" required>
                                        </td>
                                        <td>
                                            <input type="number" step="any" min="0" placeholder="Valor Promedio Electrico" v-model="b_promed_electrico" required>
                                        </td>
                                        <td>
                                            <input type="number" step="any" min="0" placeholder="Gastos Feneficios" v-model="b_gf_Benef" required>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th scope="col">
                                            Valor Promedio dolar
                                        </th>
                                        <th></th>
                                        <th scope="col">
                                            Numero de Costales
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input type="number" step="any" min="0" placeholder="Valor Promedio Dolar" v-model="b_dolar" required>
                                        </td>
                                        <td></td>
                                        <td>
                                            <input type="number" step="any" min="0" placeholder="Numero de Costales" v-model="b_num_costales" required>
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
import beatenColl from "../../utlis/firebase2";
import { addDoc } from "firebase/firestore";
export default {
    data(){
        return {
            estateId: this.estateId,
            b_year:null,
            b_val_maq:null,
            b_val_infra:null,
            b_promed_electrico:null,
            b_num_costales:null,
            b_dolar:null,
            b_gf_Benef:null
        }
    },
    methods:{
        async createBeaten() {
            if (confirm("Creating Document")) {
                const addedDoc = await addDoc(beatenColl, this.$data);
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