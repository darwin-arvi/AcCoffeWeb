<template>
  <div class="az-header">
    <br>
    <h2 class="az-content-title">Update Pre-processing</h2>
        <div class="az-content pd-y-20 pd-lg-y-30 pd-xl-y-0">
            <div class="container">
                <div class="az-content-body pd-lg-l-0 d-flex flex-column">
                    <div class="table-responsive">
                        <form method="post" @submit.prevent="updateEstate">
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
                                            Beneficios por año
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="date" placeholder="Year Beaten" v-model="estateInfo.b_year" required>
                                        </td>
                                        <td>
                                            <input type="number" step="any" min="0" placeholder="Valor Maquinaria" v-model="estateInfo.b_val_maq" required>
                                        </td>
                                        <td>
                                            <input type="number" step="any" min="0" placeholder="Valor Infraestruccura" v-model="estateInfo.b_val_infra" required>
                                        </td>
                                        <td>
                                            <input type="number" step="any" min="0" placeholder="Valor Promedio Electrico" v-model="estateInfo.b_promed_electrico" required>
                                        </td>
                                        <td>
                                            <input type="number" step="any" min="0" placeholder="Gastos Feneficios" v-model="estateInfo.b_gf_Benef" required>
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
                                            <input type="number" step="any" min="0" placeholder="Valor promedio Dolar" v-model="estateInfo.b_dolar" required>
                                        </td>
                                        <td></td>
                                        <td>
                                            <input type="number" step="any" min="0" placeholder="Numero de Costales" v-model="estateInfo.b_num_costales" required>
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
import beatenColl from "../../utlis/firebase2";
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
    data() {
    return {
      selectedEstate: {},
      editId: null,
      docRef: null,
      estateInfo: {
        estateId:null,
        b_year:null,
        b_val_maq:null,
        b_val_infra:null,
        b_promed_electrico:null,
        b_gf_Benef:null,
        b_num_costales:null,
        b_dolar:null,
      },
    };
  },
  methods: {
    async getEstate() {
      let estateRef = doc(beatenColl, this.editId);
      this.docRef = estateRef;
      let estate = await getDoc(this.docRef);
      let estateData = estate.data();
      this.estateInfo.b_year = estateData.b_year;
      this.estateInfo.b_val_maq = estateData.b_val_maq;
      this.estateInfo.b_val_infra = estateData.b_val_infra;
      this.estateInfo.b_promed_electrico = estateData.b_promed_electrico;
      this.estateInfo.b_gf_Benef = estateData.b_gf_Benef;
      this.estateInfo.b_num_costales = estateData.b_num_costales;
      this.estateInfo.b_dolar = estateData.b_dolar;
      this.estateInfo.estateId = estateData.estateId;
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