<template>
  <div class="az-header">
    <br>
    <h2 class="az-content-title">Drying List</h2>
    <div class="az-content pd-y-20 pd-lg-y-30 pd-xl-y-10">
      <div class="container">
        <div class="az-content-body pd-lg-l-40 d-flex flex-column">
          <div class="table-responsive">
            <table class="table table-striped mg-b-10">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Year</th>
                  <th>Info</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="estate in estates" :key="estate.id">
                  <th scope="row">{{estate.id}}</th>
                  <td>{{estate.d_year}}</td>
                  <td>
                    <router-link :to="{path:`/drying/table/${estate.id}`}" class="btn btn-info">Info</router-link>
                  </td>
                  <td>
                    <router-link :to="{path:`/drying/${estate.id}`}" class="btn btn-primary">Edit</router-link>
                  </td>
                  <td>
                    <a @click="deleteEstate(estate.id)" class="btn btn-danger">Delete</a>
                  </td>
                </tr>
              </tbody>
              <tr>
              <td></td>
              <td></td>
              <td><br><br><br><br><br><br><br><br>
                <a class="btn btn-dark my-3 mx-2" @click="$router.go(-1)">Back</a>
              </td>
              <td></td>
              <td></td>
            </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../../utlis/comparation/firebase-1";
import dryingColl from "../../utlis/firebase3";
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
      let estatesSnapShot = await db.collection('drying').where('estateId','==',this.estateId).get();
      let estates = [];
      estatesSnapShot.forEach((estate) => {
        let estateData = estate.data();
        estateData.id = estate.id
        estates.push(estateData);
      });
        this.estates = estates;
    },
    async deleteEstate(estateId){
      if (confirm("Are you sure to delete this record?")) {
          let estateRef = doc(dryingColl, estateId);
          await deleteDoc(estateRef);
          alert('Drying Deleted Successfully!');
          this.$router.go(-1);
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
