<template>
    <div class="az-header">
    <br>
    <h2 class="az-content-title">Create Work</h2>
        <div class="az-content pd-y-20 pd-lg-y-30 pd-xl-y-0">
            <div class="container">
                <div class="az-content-body pd-lg-l-0 d-flex flex-column">
                    <div class="table-responsive">
                        <form method="post" @submit.prevent="createWork">
                            <table class="table table-striped mg-b-10">
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            Year Work
                                        </th>
                                        <th scope="col">
                                            Total Siembra/Manteni
                                        </th>
                                        <th scope="col">
                                            Total Cosecha
                                        </th>
                                        <th scope="col">
                                            Precios Jornal
                                        </th>
                                        <th scope="col">
                                            Precios Jornal/Recolect
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="date" placeholder="Year Work" v-model="w_year" step="any">
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Total Siembra/Manteni" v-model="w_tol_siembra_manteni" step="any">
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Total Cosecha" v-model="w_tol_cosecha" step="any">
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Precios Jornal" v-model="w_precios_jornal" step="any">
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Precios Jornal/Recolect" v-model="w_precios_jornal_recol" step="any">
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th scope="col">
                                            Promedio Dolar
                                        </th>
                                        <th scope="col">
                                            Precios Jornal/Siembra/Manteni
                                        </th>
                                        <th scope="col">
                                            Recoleccion
                                        </th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input type="number" placeholder="Promedio Dolar" v-model="w_promedio_dolar" step="any">
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Precios Jornal/Siembra/Manteni" v-model="w_jornal_siembra_manteni" step="any">
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Recoleccion" v-model="w_recoleccion" step="any">
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <button type="submit" class="btn btn-outline-success">Save</button>
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
import workColl from "../../utlis/firebase5";
import { addDoc } from "firebase/firestore";
export default {
    data(){
        return {
            estateId: this.estateId,
            w_year: null,
            w_tol_siembra_manteni: null,
            w_tol_cosecha: null,
            w_precios_jornal: null,
            w_precios_jornal_recol: null,
            w_promedio_dolar: null,
            w_jornal_siembra_manteni: null,
            w_recoleccion: null,
        }
    },
    methods:{
        async createWork(){
            console.log("Creating Document");
            const addedDoc = await addDoc(workColl, this.$data);
            alert("Document Created Successfully!");
            console.log(addedDoc);
            this.$router.push(`/estate/info/${this.estateId}`);
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