<template>
    <div class="az-header">
        <br>
        <h2 class="az-content-title">Update Harvest</h2>
        <div class="az-content pd-y-20 pd-lg-y-30 pd-xl-y-0">
            <div class="container">
                <div class="az-content-body pd-lg-l-0 d-flex flex-column">
                    <div class="table-responsive">
                        <form method="post" @submit.prevent="updateEstate">
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
                                            <input type="date" placeholder="Year Harvest" v-model="estateInfo.h_year"
                                                step="any" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Valor Maquinaria y Mantenimiento"
                                                v-model="estateInfo.h_maq_man" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Valor Combustible"
                                                v-model="estateInfo.h_combustible" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Valor transporte"
                                                v-model="estateInfo.h_transport" step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Jornaal"
                                                v-model="estateInfo.l_Pjornal_recole" step="any" min="0" required>
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
import harvestColl from "../../utlis/firebase4";
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
    data() {
        return {
            selectedEstate: {},
            editId: null,
            docRef: null,
            estateInfo: {
                estateId: null,
                h_year: null,
                h_maq_man: null,
                h_combustible: null,
                h_transport: null,
                l_Pjornal_recole: null,
            },
        };
    },
    methods: {
        async getEstate() {
            let estateRef = doc(harvestColl, this.editId);
            this.docRef = estateRef;
            let estate = await getDoc(this.docRef);
            let estateData = estate.data();
            this.estateInfo.estateId = estateData.estateId;
            this.estateInfo.h_year = estateData.h_year;
            this.estateInfo.h_maq_man = estateData.h_maq_man;
            this.estateInfo.h_combustible = estateData.h_combustible;
            this.estateInfo.h_transport = estateData.h_transport;
            this.estateInfo.l_Pjornal_recole = estateData.l_Pjornal_recole;
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