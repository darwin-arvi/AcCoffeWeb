<template>
    <div class="az-header">
        <br>
        <h2 class="az-content-title">Create Estate</h2>
        <div class="az-container pd-y-20 pd-lg-y-30 pd-xl-y-0">
            <div class="container">
                <div class="az-content-body pd-lg-l-0 d-flex flex-column">
                    <div class="table-responsive">
                        <form method="post" @submit.prevent="createdEstate">
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
                                            <input type="text" placeholder="Name Estate" v-model="ename" required>
                                        </td>
                                        <td>
                                            <input type="date" placeholder="Year Actuality" v-model="eyear" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Product Area" v-model="eproductarea"
                                                step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Total Area" v-model="etotalarea"
                                                step="any" min="0" required>
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Convertion Almendra"
                                                v-model="econvertionalmendra" step="any" min="0" required>
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
                                            <input type="text" placeholder="Type Crop" v-model="etypecrop" required>
                                        </td>
                                        <td></td>
                                        <td>
                                            <input type="number" placeholder="$$" v-model="edolar" step="any" min="0" required>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <router-link to="/" class="btn btn-dark my-3 mx-2">Back</router-link>
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
import estateColl from "../../firebase";
import { addDoc } from "firebase/firestore";
export default {
    data() {
        return {
            ename: null,
            eyear: null,
            eproductarea: null,
            etotalarea: null,
            econvertionalmendra: null,
            etypecrop: null,
            edolar: null,
            userId:null,
        }
    },

    methods: {
        async createdEstate() {

            if (confirm("Creating Document")) {
                this.userId=this.$store.state.user.uid;
                const addedDoc = await addDoc(estateColl, this.$data);
                alert("Document Created Successfully!");
                console.log(addedDoc);
                this.$router.go('/');
            }
        }
    }
}
</script>