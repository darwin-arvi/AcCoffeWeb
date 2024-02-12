<template>
    <div class="az-header">
    <br>
    <h2 class="az-content-title">Create Harvest</h2>
        <div class="az-content pd-y-20 pd-lg-y-30 pd-xl-y-0">
            <div class="container">
                <div class="az-content-body pd-lg-l-0 d-flex flex-column">
                    <div class="table-responsive">
                        <form method="post" @submit.prevent="createHarvest">
                            <table class="table table-striped mg-b-10">
                                <thead>
                                    <tr>
                                        <th>
                                            Year Harvest
                                        </th>
                                        <th>
                                            Valor Maquinaria y Mantenimiento
                                        </th>
                                        <th>
                                            Valor Combustible
                                        </th>
                                        <th>
                                            Valor transporte
                                        </th>
                                        <th>
                                            Jornal Recolección
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="date" placeholder="Year Harvest" v-model="h_year" step="any" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Valor Maquinaria y Mantenimiento" v-model="h_maq_man" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Valor Combustible" v-model="h_combustible" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Valor transporte" v-model="h_transport" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Jornaal" v-model="l_Pjornal_recole" step="any" min="0" required>
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
import harvestColl from "../../utlis/firebase4";
import { addDoc } from "firebase/firestore";
export default {
    data(){
        return {
            estateId: this.estateId,
            h_year: null,
            h_maq_man: null,
            h_combustible: null,
            h_transport: null,
            l_Pjornal_recole: null,
        }
    },
    methods:{
        async createHarvest() {
            if (confirm("Creating Document")) {
                const addedDoc = await addDoc(harvestColl, this.$data);
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