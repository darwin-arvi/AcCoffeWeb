<template>
  <div class="az-header">
    <br>
    <h2 class="az-content-title">Estate List</h2>
    <div class="az-container pd-y-19 pd-lg-y-30 pd-xl-y-10">
      <div class="container">
        <div class="az-content-body pd-lg-l-40 d-flex flex-column">
          <div class="table-responsive">
            <table class="table table-striped mg-b-0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name Estate</th>
                  <th>Year</th>
                  <th>Info</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="estate in estates" :key="estate.id">
                  <th scope="row">{{ estate.id }}</th>
                  <td>{{ estate.ename }}</td>
                  <td>{{ estate.eyear }}</td>
                  <td>
                    <router-link :to="{ path: `/estate/info/${estate.id}` }" class="btn btn-info">Info</router-link>
                  </td>
                  <td>
                    <router-link :to="{ path: `/estate/${estate.id}` }" class="btn btn-primary">Edit</router-link>
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
import estateColl from "../firebase";
import { getDocs, doc, deleteDoc,where,query } from "firebase/firestore";

export default {

  data() {
    return {
      estates: [],
      selectedDoc: null,
    };
  },
  methods: {
    async fetchEstates() {

      try {
        // Obtén el userId del store
        let userId = this.$store.state.user.uid;
        console.log(userId);
        // Construye la consulta con el filtro por userId
        let q = query(estateColl, where('userId', '==', userId));

        // Realiza la consulta y obtén los documentos
        let estatesSnapShot = await getDocs(q);

        // Procesa los documentos obtenidos
        let estates = [];
        estatesSnapShot.forEach((estate) => {
          let estateData = estate.data();
          estateData.id = estate.id;
          estates.push(estateData);
        });

        // Asigna los resultados a la propiedad 'estates'
        this.estates = estates;

      } catch (error) {
        console.error("Error al obtener estates por userId:", error);
      }

      // console.log(this.$store.state.user.uid);
      // let estatesSnapShot = await getDocs(estateColl);
      // let estates = [];
      // estatesSnapShot.forEach((estate) => {
      //   let estateData = estate.data();
      //   estateData.id = estate.id
      //   estates.push(estateData);
      // });
      // this.estates = estates;
    },
    async deleteEstate(estateId) {
      if (confirm("Are you sure to delete this record?")) {
        let estateRef = doc(estateColl, estateId);
        await deleteDoc(estateRef);
        alert('Estate Deleted Successfully!');
        this.$router.go("/");
      }
    }
  },
  created() {
    this.fetchEstates();
  }
}
</script>
<style>
</style>