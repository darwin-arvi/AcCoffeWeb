<template>
    <div class="az-header">
    <br>
    <h2 class="az-content-title">Update Work</h2>
        <div class="az-content pd-y-20 pd-lg-y-30 pd-xl-y-0">
            <div class="container">
                <div class="az-content-body pd-lg-l-0 d-flex flex-column">
                    <div class="table-responsive">
                        <form method="post" @submit.prevent="updateEstate">
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
                                            <input type="date" placeholder="Year Work" v-model="estateInfo.w_year" step="any">
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Total Siembra/Manteni" v-model="estateInfo.w_tol_siembra_manteni" step="any">
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Total Cosecha" v-model="estateInfo.w_tol_cosecha" step="any">
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Precios Jornal" v-model="estateInfo.w_precios_jornal" step="any">
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Precios Jornal/Recolect" v-model="estateInfo.w_precios_jornal_recol" step="any">
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
                                            <input type="number" placeholder="Promedio Dolar" v-model="estateInfo.w_promedio_dolar" step="any">
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Precios Jornal/Siembra/Manteni" v-model="estateInfo.w_jornal_siembra_manteni" step="any">
                                        </td>
                                        <td>
                                            <input type="number" placeholder="Recoleccion" v-model="estateInfo.w_recoleccion" step="any">
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <button type="submit" class="btn btn-outline-success">Update</button>
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
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
    data() {
    return {
      selectedEstate: {},
      editId: null,
      docRef: null,
      estateInfo: {
        estateId: null,
        w_year: null,
        w_tol_siembra_manteni: null,
        w_tol_cosecha: null,
        w_precios_jornal: null,
        w_precios_jornal_recol: null,
        w_promedio_dolar: null,
        w_jornal_siembra_manteni: null,
        w_recoleccion: null,
      },
    };
  },
  methods: {
    async getEstate() {
      let estateRef = doc(workColl, this.editId);
      this.docRef = estateRef;
      let estate = await getDoc(this.docRef);
      let estateData = estate.data();
      this.estateInfo.estateId = estateData.estateId;
      this.estateInfo.w_year = estateData.w_year;
      this.estateInfo.w_tol_siembra_manteni = estateData.w_tol_siembra_manteni;
      this.estateInfo.w_tol_cosecha = estateData.w_tol_cosecha;
      this.estateInfo.w_precios_jornal = estateData.w_precios_jornal;
      this.estateInfo.w_precios_jornal_recol = estateData.w_precios_jornal_recol;
      this.estateInfo.w_jornal_siembra_manteni = estateData.w_jornal_siembra_manteni;
      this.estateInfo.w_recoleccion = estateData.w_recoleccion;
      this.estateInfo.w_promedio_dolar = estateData.w_promedio_dolar;
    },
    async updateEstate() {
      await setDoc(this.docRef, this.estateInfo);
      alert(
        `The Work with ID of ${this.editId} has been updated successfully!`
      );
      this.$router.push("/");
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