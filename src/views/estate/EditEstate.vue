<template>
    <div class="az-header">
        <br>
        <h2 class="az-content-title">Update Estate</h2>
        <div class="az-content pd-y-20 pd-lg-y-30 pd-xl-y-0">
            <!-- <div class="container"> -->
            <div class="az-content-body pd-lg-l-0 d-flex flex-column">
                <div class="table-responsive">
                    <form method="post" @submit.prevent="updateEstate">
                        <table class="table table-striped mg-b-10">
                            <thead>
                                <tr>
                                    <th>
                                        Name Estate
                                    </th>
                                    <th>
                                        Year Crop
                                    </th>
                                    <th>
                                        Product Area
                                    </th>
                                    <th>
                                        Total Area
                                    </th>
                                    <th>
                                        Convertion Almendra
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="text" placeholder="Name Estate" v-model="estateInfo.ename" required>
                                    </td>
                                    <td>
                                        <input type="date" placeholder="Year Actuality" v-model="estateInfo.eyear" required>
                                    </td>
                                    <td>
                                        <input type="number" placeholder="Product Area"
                                            v-model="estateInfo.eproductarea" step="any" min="0" required>
                                    </td>
                                    <td>
                                        <input type="number" placeholder="Total Area" v-model="estateInfo.etotalarea"
                                            step="any" min="0" required>
                                    </td>
                                    <td>
                                        <input type="number" placeholder="Convertion Almendra"
                                            v-model="estateInfo.econvertionalmendra" step="any" min="0" required>
                                    </td>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>
                                        Type Crop
                                    </th>
                                    <th></th>
                                    <th>
                                        Dolar-Pesos
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>
                                        <input type="text" placeholder="Type Crop" v-model="estateInfo.etypecrop" required>
                                    </td>
                                    <td></td>
                                    <td>
                                        <input type="number" placeholder="$$" v-model="estateInfo.edolar" step="any"
                                            min="0" required>
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
</template>

<script>
import estateColl from "../../firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
    data() {
        return {
            selectedEstate: {},
            editId: null,
            docRef: null,
            estateInfo: {
                ename: null,
                eyear: null,
                eproductarea: null,
                etotalarea: null,
                econvertionalmendra: null,
                etypecrop: null,
                edolar: null,
            },
        };
    },
    methods: {
        async getEstate() {
            let estateRef = doc(estateColl, this.editId);
            this.docRef = estateRef;
            let estate = await getDoc(this.docRef);
            let estateData = estate.data();
            this.estateInfo.ename = estateData.ename;
            this.estateInfo.eyear = estateData.eyear;
            this.estateInfo.eproductarea = estateData.eproductarea;
            this.estateInfo.etotalarea = estateData.etotalarea;
            this.estateInfo.econvertionalmendra = estateData.econvertionalmendra;
            this.estateInfo.etypecrop = estateData.etypecrop;
            this.estateInfo.edolar = estateData.edolar;
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