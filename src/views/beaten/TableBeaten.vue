<template>
  <div class="az-header">
    <br>
    <h2 class="az-content-title">Pre-processing Table - Date {{  estateInfo.b_year  }}</h2>
    <div class="az-container pd-y-20 pd-lg-y-30 pd-xl-y-0">
      <div class="container">
        <div class="az-content-body pd-lg-l-0 d-flex flex-column">
          <div class="table-responsive">
            <table class="table table-striped mg-b-10">
              <thead>
                <tr class="bg-secondary">
                  <th class="text-white">Item</th>
                  <th class="text-white">Descripcion</th>
                  <th class="text-white">Clase</th>
                  <th class="text-white">Flujo anual (seJ/year ha)</th>
                  <th class="text-white">Transformidad (seJ/unit)</th>
                  <th class="text-white">Emergia (seJ/year ha)</th>
                </tr>
                <tr class="bg-secondary">
                  <th></th>
                  <th class="text-white">Trilla</th>
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
                    Machinery and equipment (USD) (cuadra)**
                  </td>
                  <td>
                    F
                  </td>
                  <td>
                    {{  estateInfo.flujo1.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.transformidad_t1.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.t1.toExponential(2)  }}
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>
                    Human Labor (USD)
                  </td>
                  <td>
                    10% F
                  </td>
                  <td>
                    {{  estateInfo.flujo2.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.transformidad_t2.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.t2.toExponential(2)  }}
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>
                    Buildings (USD)(cuadra)
                  </td>
                  <td>
                    F
                  </td>
                  <td>
                    {{  estateInfo.flujo3.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.transformidad_t1.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.t3.toExponential(2)  }}
                  </td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>
                    Electricity (USD)(cuadra)
                  </td>
                  <td>
                    F
                  </td>
                  <td>
                    {{  estateInfo.flujo4.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.transformidad_t1.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.t4.toExponential(2)  }}
                  </td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>
                    Jute bags
                  </td>
                  <td>
                    F
                  </td>
                  <td>
                    {{  estateInfo.b_num_costales.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.transformidad_t5.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.t5.toExponential(2)  }}
                  </td>
                </tr>
                <tr class="bg-secondary text-white">
                  <th>Total Trilla</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    {{  estateInfo.total.toExponential(2)  }}
                  </td>
                </tr>
                <tr>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>
                    <a class="btn btn-dark my-3 mx-2" @click="$router.go(-1)">Back</a>
                    <button type="button" class="btn btn-primary" @click="guardar()">Save</button>
                  </th>
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
import beatenColl from "../../utlis/firebase2";
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
        b_num_costales: null,
        b_promed_electrico: null,
        b_val_infra: null,
        b_year: null,
        b_val_maq: null,
        b_gf_Benef: null,
        total: null,
        flujo1: null,
        flujo2: null,
        flujo3: null,
        flujo4: null,
        transformidad_t1: null,
        transformidad_t2: null,
        transformidad_t5: null,
        t1: null,
        t2: null,
        t3: null,
        t4: null,
        t5: null,
        b_dolar: null,
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
        emergia_s1: null,
        emergia_s2: null,
        emergia_s3: null,
        emergia_s4: null,
        emergia_s5: null,
        emergia_s6: null,
        emergia_s7: null,
        emergia_s8: null,
        emergia_s9: null,
        emergia_s30: null,
        emergia_t1: null,
        emergia_t2: null,
        emergia_t3: null,
        emergia_t4: null,
        emergia_t5: null,
        s_year: null
      },
      plants: []
    };
  },
  methods: {
    async getEstate() {
      const v_dolar2014 = 2000;
      const transformidad_t1 = 26500000000000;
      const transformidad_t2 = 22500000000000;
      const transformidad_t5 = 23100000000;
      let estateRef = doc(beatenColl, this.infoId);
      this.docRef = estateRef;
      let estate = await getDoc(this.docRef);
      let estateData = estate.data();
      this.estateInfo.b_num_costales = estateData.b_num_costales;
      this.estateInfo.b_promed_electrico = estateData.b_promed_electrico;
      this.estateInfo.b_gf_Benef = estateData.b_gf_Benef;
      this.estateInfo.b_val_infra = estateData.b_val_infra;
      this.estateInfo.b_year = estateData.b_year;
      this.estateInfo.b_val_maq = estateData.b_val_maq;
      this.estateInfo.transformidad_t1 = transformidad_t1;
      this.estateInfo.transformidad_t2 = transformidad_t2;
      this.estateInfo.transformidad_t5 = transformidad_t5;

      let dolar = estateData.b_dolar;

      ///operaciones
      const flujo1 = ((estateData.b_val_maq / v_dolar2014) / 30) / 118;
      let t1 = (flujo1 * transformidad_t1);

      this.estateInfo.flujo1 = flujo1;
      this.estateInfo.t1 = t1;

      //const flujo2 = 14244 / 118;
      const flujo2 = estateData.b_gf_Benef / 118;
      console.log(estateData.b_gf_Benef);
      let t2 = (flujo2 * transformidad_t2);

      this.estateInfo.flujo2 = flujo2;
      this.estateInfo.t2 = t2;

      const flujo3 = ((estateData.b_val_infra / v_dolar2014) / 50) / 118;
      let t3 = (flujo3 * transformidad_t1);

      this.estateInfo.flujo3 = flujo3;
      this.estateInfo.t3 = t3;

      const flujo4 = ((estateData.b_promed_electrico * 12) / dolar) / 118;
      let t4 = (flujo4 * transformidad_t1);

      this.estateInfo.flujo4 = flujo4;
      this.estateInfo.t4 = t4;

      let t5 = (estateData.b_num_costales * transformidad_t5);
      this.estateInfo.t5 = t5;

      const totales = Number.parseInt(t1 + t2 + t3 + t4 + t5);
      this.estateInfo.total = totales;
    },
    async guardar() {
      let plantSnapShot = await db.collection('sumatoriaone').where('s_year', '==', this.estateInfo.b_year).get();
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
      this.energia.emergia_p_f17 = sumaData.emergia_p_f17;
      this.energia.emergia_p_f18 = sumaData.emergia_p_f18;
      this.energia.emergia_p_f19 = sumaData.emergia_p_f19;
      this.energia.emergia_p_f20 = sumaData.emergia_p_f20;
      this.energia.emergia_s1 = sumaData.emergia_s1;
      this.energia.emergia_s2 = sumaData.emergia_s2;
      this.energia.emergia_s3 = sumaData.emergia_s3;
      this.energia.emergia_s4 = sumaData.emergia_s4;
      this.energia.emergia_s5 = sumaData.emergia_s5;
      this.energia.emergia_s6 = sumaData.emergia_s6;
      this.energia.emergia_s7 = sumaData.emergia_s7;
      this.energia.emergia_s8 = sumaData.emergia_s8;
      this.energia.emergia_s9 = sumaData.emergia_s9;
      this.energia.emergia_s30 = sumaData.emergia_s30;

      this.energia.s_year = sumaData.s_year;

      this.energia.emergia_t1 = this.estateInfo.t1;
      this.energia.emergia_t2 = this.estateInfo.t2;
      this.energia.emergia_t3 = this.estateInfo.t3;
      this.energia.emergia_t4 = this.estateInfo.t4;
      this.energia.emergia_t5 = this.estateInfo.t5;

      this.update();
      alert("Saving");
    },
    async update() {
      await setDoc(this.docRefe, this.energia);
      this.$router.go(-1);
    }
  },
  created() {
    let infoId = this.$route.params.infoId;
    this.infoId = infoId;
    this.getEstate();
  },
}
</script>