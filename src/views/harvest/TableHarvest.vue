<template>
  <div class="az-header">
    <br>
    <h2 class="az-content-title">Harverst Table - Date {{  estateInfo.h_year  }}</h2>
    <div class="az-container pd-y-20 pd-lg-y-30 pd-xl-y-0">
      <div class="container">
        <div class="az-content-body pd-lg-l-0 d-flex flex-column">
          <div class="table-responsive">
            <table class="table table-striped mg-b-10">
              <thead>
                <tr class="bg-danger">
                  <th class="text-white">Item</th>
                  <th class="text-white">Descripcion</th>
                  <th class="text-white">Clase</th>
                  <th class="text-white">Flujo anual (seJ/year ha)</th>
                  <th class="text-white">Transformidad (seJ/unit)</th>
                  <th class="text-white">Emergia (seJ/year ha)</th>
                </tr>
                <tr class="bg-danger">
                  <th></th>
                  <th class="text-white">Cosecha</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>
                    Machinery and equipment (J)
                  </td>
                  <td>
                    F
                  </td>
                  <td>
                    {{  estateInfo.h_maq_man.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.transformidad_f17.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.emergia_p_f17.toExponential(2)  }}
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>
                    Fuel and lubricants (J)
                  </td>
                  <td>
                    F
                  </td>
                  <td>
                    {{  estateInfo.anio_analizado_c1.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.transformidad_f18.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.emergia_p_f18.toExponential(2)  }}
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>
                    Harvest transportation-vehicle (USD)
                  </td>
                  <td>
                    F
                  </td>
                  <td>
                    {{  estateInfo.h_transport.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.transformidad_f19.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.emergia_p_f19.toExponential(2)  }}
                  </td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>
                    Human Labor (USD)
                  </td>
                  <td>
                    10% F
                  </td>
                  <td>
                    {{  estateInfo.l_Pjornal_recole.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.transformidad_c20.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.emergia_p_f20.toExponential(2)  }}
                  </td>
                </tr>
                <tr class="bg-danger text-white">
                  <th>Total Cosecha</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    {{  estateInfo.total_c.toExponential(2)  }}
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th><br><br>
                  <a class="btn btn-dark my-3 mx-2" @click="$router.go(-1)">Back</a>
                  <button type="button" class="btn btn-primary" @click="guardar()">Save</button>
                  <th></th>
                  <th></th>
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
import harvestColl from "../../utlis/firebase4";
import db from "../../utlis/comparation/firebase-1";
import sumatoriaoneColl from "../../utlis/firebase6";
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
  data() {
    return {
      selectedEstate: {},
      infoId: null,
      docRef: null,
      docRefe: null,
      estateInfo: {
        h_year: null,
        h_maq_man: null,
        h_combustible: null,
        h_transport: null,
        total_c: null,
        emergia_p_f17: null,
        emergia_p_f18: null,
        emergia_p_f19: null,
        emergia_p_f20: null,
        transformidad_f17: null,
        transformidad_f18: null,
        transformidad_f19: null,
        transformidad_c20: null,
        anio_analizado_c1: null,
        l_Pjornal_recole: null,
      },
      energia: {
        emergia_p_f1: null,
        emergia_p_f2: null,
        emergia_p_f3: null,
        emergia_p_f4: null,
        emergia_p_f5: null,
        emergia_p_f6: null,
        emergia_p_f7: null,
        emergia_p_f8: null,
        emergia_p_f9: null,
        emergia_p_f10: null,
        emergia_p_f11: null,
        emergia_p_f12: null,
        emergia_p_f13: null,
        emergia_p_f14: null,
        emergia_p_f15: null,
        emergia_p_f16: null,
        emergia_p_f17: null,
        emergia_p_f18: null,
        emergia_p_f19: null,
        emergia_p_f20: null,
        s_year: null
      },
      plants: []
    };
  },
  methods: {
    async getEstate() {
      const transformidad_f17 = 6700000000;
      const transformidad_f18 = 111111;
      const transformidad_f19 = 22500000000000;
      const transformidad_c20 = 22500000000000;

      let estateRef = doc(harvestColl, this.infoId);
      this.docRef = estateRef;
      let estate = await getDoc(this.docRef);
      let estateData = estate.data();
      this.estateInfo.h_year = estateData.h_year;
      this.estateInfo.h_maq_man = estateData.h_maq_man;
      this.estateInfo.h_combustible = estateData.h_combustible;
      this.estateInfo.h_transport = estateData.h_transport;
      this.estateInfo.l_Pjornal_recole = estateData.l_Pjornal_recole;

      ///operaciones
      //COSECHA F17
      let emergia_p_f17 = estateData.h_maq_man * transformidad_f17;
      //COSECHA F18
      var anio_analizado_c1 = estateData.h_combustible * 39500000;
      let emergia_p_f18 = anio_analizado_c1 * transformidad_f18;
      //COSECHA F19
      let emergia_p_f19 = estateData.h_transport * transformidad_f19;
      //COSECHA F20
      let emergia_p_f20 = estateData.l_Pjornal_recole * transformidad_c20;
      //TOTAL COSECHA
      var total_c = emergia_p_f17 + emergia_p_f18 + emergia_p_f19 + emergia_p_f20;

      this.estateInfo.total_c = total_c;

      this.estateInfo.emergia_p_f17 = emergia_p_f17;
      this.estateInfo.emergia_p_f18 = emergia_p_f18;
      this.estateInfo.emergia_p_f19 = emergia_p_f19;
      this.estateInfo.emergia_p_f20 = emergia_p_f20;

      this.estateInfo.transformidad_f17 = transformidad_f17;
      this.estateInfo.transformidad_f18 = transformidad_f18;
      this.estateInfo.transformidad_f19 = transformidad_f19;
      this.estateInfo.transformidad_c20 = transformidad_c20;

      this.estateInfo.anio_analizado_c1 = anio_analizado_c1;

    },
    async guardar() {
      let plantSnapShot = await db.collection('sumatoriaone').where('s_year', '==', this.estateInfo.h_year).get();
      let plants = [];
      plantSnapShot.forEach((plant) => {
        let plantData = plant.data();
        plantData.id = plant.id
        plants.push(plantData);
      });
      this.plants = plants;
      let id = plants[0].id;

      let sumaRef = doc(sumatoriaoneColl, id);
      this.docRefe = sumaRef;
      let suma = await getDoc(this.docRefe);
      let sumaData = suma.data();

      this.energia.emergia_p_f1 = sumaData.emergia_p_f1;
      this.energia.emergia_p_f2 = sumaData.emergia_p_f2;
      this.energia.emergia_p_f3 = sumaData.emergia_p_f3;
      this.energia.emergia_p_f4 = sumaData.emergia_p_f4;
      this.energia.emergia_p_f5 = sumaData.emergia_p_f5;
      this.energia.emergia_p_f6 = sumaData.emergia_p_f6;
      this.energia.emergia_p_f7 = sumaData.emergia_p_f7;
      this.energia.emergia_p_f8 = sumaData.emergia_p_f8;
      this.energia.emergia_p_f9 = sumaData.emergia_p_f9;
      this.energia.emergia_p_f10 = sumaData.emergia_p_f10;
      this.energia.emergia_p_f11 = sumaData.emergia_p_f11;
      this.energia.emergia_p_f12 = sumaData.emergia_p_f12;
      this.energia.emergia_p_f13 = sumaData.emergia_p_f13;
      this.energia.emergia_p_f14 = sumaData.emergia_p_f14;
      this.energia.emergia_p_f15 = sumaData.emergia_p_f15;
      this.energia.emergia_p_f16 = sumaData.emergia_p_f16;

      this.energia.s_year = sumaData.s_year;

      this.energia.emergia_p_f17 = this.estateInfo.emergia_p_f17;
      this.energia.emergia_p_f18 = this.estateInfo.emergia_p_f18;
      this.energia.emergia_p_f19 = this.estateInfo.emergia_p_f19;
      this.energia.emergia_p_f20 = this.estateInfo.emergia_p_f20;

      this.update();
      alert("Saving");

    },
    async update() {
      await setDoc(this.docRefe, this.energia);////comparar codigo con la tabla de plantacion
      this.$router.go(-1);
    }
    /* async update() {
      alert("Saving");
      const addedDoc = await setDoc(sumatoriaoneColl, this.energia);
      console.log(addedDoc);
      this.$router.go(-1);
    } */
  },
  created() {
    let infoId = this.$route.params.infoId;
    this.infoId = infoId;
    this.getEstate();
  },
}
</script>