<template>
  <div class="az-header">
    <br>
    <h2 class="az-content-title">Work List</h2>
    <div class="az-content pd-y-20 pd-lg-y-30 pd-xl-y-10">
      <div class="container">
        <div class="az-content-body pd-lg-l-0 d-flex flex-column">
          <div class="table-responsive">
            <table class="table table-striped mg-b-10">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Year</th>
                  <th>Jornal Siembra</th>
                  <th>Jornal</th>
                  <th>Jornal Recoleccion</th>
                  <th>Promedio Dolar</th>
                  <th>Recoleccion</th>
                  <th>Total Cosecha</th>
                  <th>Total Siembra</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="estate in estates" :key="estate.id">
                  <th scope="row">{{estate.id}}</th>
                  <td>{{estate.w_year}}</td>
                  <td>{{estate.w_jornal_siembra_manteni}}</td>
                  <td>{{estate.w_precios_jornal}}</td>
                  <td>{{estate.w_precios_jornal_recol}}</td>
                  <td>{{estate.w_promedio_dolar}}</td>
                  <td>{{estate.w_recoleccion}}</td>
                  <td>{{estate.w_tol_cosecha}}</td>
                  <td>{{estate.w_tol_siembra_manteni}}</td>
                  <td>
                    <router-link :to="{path:`/work/${estate.id}`}" class="btn btn-primary">Edit</router-link>
                  </td>
                  <td>
                    <a @click="deleteEstate(estate.id)" class="btn btn-danger">Delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../../utlis/comparation/firebase-1";
import workColl from "../../utlis/firebase5";
import { doc, deleteDoc } from "firebase/firestore";

export default {

  data(){
    return {
      estates:[],
      selectedDoc: null,
    };
  },
  computed:{
    estateId(){
        return this.$route.params.estateId;
    }
  },
  methods:{
    async fetchEstates(){
      let estatesSnapShot = await db.collection('work').where('estateId','==',this.estateId).get();
      let estates = [];
      estatesSnapShot.forEach((estate) => {
        let estateData = estate.data();
        estateData.id = estate.id
        estates.push(estateData);
      });
        this.estates = estates;
    },
    async deleteEstate(estateId){
      if (confirm("!!!!!!!!Esta seguro de borrar este registro!!!!!!!!!")) {
          let estateRef = doc(workColl, estateId);
          await deleteDoc(estateRef);
          alert('Work Deleted Successfully!');
          this.$router.go();
      } else {
          this.$router.go();
      }
    }
  },
  created(){
    this.fetchEstates();
    let estateId = this.$route.params.estateId;
    this.estateId = estateId;
  }
}
</script>
