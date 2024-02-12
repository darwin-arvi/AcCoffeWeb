<template>
  <div class="az-header">
    <br>
    <h2 class="az-content-title">Drying Table - Date {{  estateInfo.d_year  }}</h2>
    <div class="az-container pd-y-20 pd-lg-y-30 pd-xl-y-0">
      <div class="container">
        <div class="az-content-body pd-lg-l-0 d-flex flex-column">
          <div class="table-responsive">
            <table class="table table-striped mg-b-10">
              <thead>
                <tr class="bg-warning">
                  <th class="text-white">Item</th>
                  <th class="text-white">Descripcion</th>
                  <th class="text-white">Clase</th>
                  <th class="text-white">Flujo anual (seJ/year ha)</th>
                  <th class="text-white">Transformidad (seJ/unit)</th>
                  <th class="text-white">Emergia (seJ/year ha)</th>
                </tr>
                <tr class="bg-warning">
                  <th></th>
                  <th class="text-white">Beneficios</th>
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
                    Solar Insolation (J)
                  </td>
                  <td>
                    F
                  </td>
                  <td>
                    {{  estateInfo.flujo_anual_s1.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.transformidad.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.emergia_s1.toExponential(2)  }}
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>
                    Wind, kinetic energy (J)
                  </td>
                  <td>
                    F
                  </td>
                  <td>
                    {{  estateInfo.flujo_anual_s2.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.transformidad_f2.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.emergia_s2.toExponential(2)  }}
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>
                    Evaporation (G)
                  </td>
                  <td>
                    F
                  </td>
                  <td>
                    {{  estateInfo.flujo_anual_s3.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.transformidad_s3.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.emergia_s3.toExponential(2)  }}
                  </td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>
                    Water (cuadra)
                  </td>
                  <td>
                    F
                  </td>
                  <td>
                    {{  estateInfo.flujo_anual_s4.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.transformidad_s4.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.emergia_s4.toExponential(2)  }}
                  </td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>
                    Drying yard or “paseras” (g)
                  </td>
                  <td>
                    F
                  </td>
                  <td>
                    {{  estateInfo.flujo_anual_s5.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.transformidad_s5.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.emergia_s5.toExponential(2)  }}
                  </td>
                </tr>
                <tr>
                  <th>6</th>
                  <td>
                    Machinery and equipment (USD) (cuadra)**
                  </td>
                  <td>
                    F
                  </td>
                  <td>
                    {{  estateInfo.flujo_anual_s6.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.transformidad_s6.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.emergia_s6.toExponential(2)  }}
                  </td>
                </tr>
                <tr>
                  <th>7</th>
                  <td>
                    Human Labor (USD)
                  </td>
                  <td>
                    F
                  </td>
                  <td>
                    {{  estateInfo.flujo_anual_s7.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.transformidad_s7.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.emergia_s7.toExponential(2)  }}
                  </td>
                </tr>
                <tr>
                  <th>8</th>
                  <td>
                    Fuel (J)
                  </td>
                  <td>
                    F
                  </td>
                  <td>
                    {{  estateInfo.flujo_anual_s8.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.transformidad_s8.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.emergia_s8.toExponential(2)  }}
                  </td>
                </tr>
                <tr>
                  <th>9</th>
                  <td>
                    Buildings (USD)(cuadra)
                  </td>
                  <td>
                    F
                  </td>
                  <td>
                    {{  estateInfo.flujo_anual_s9.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.transformidad_s9.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.emergia_s9.toExponential(2)  }}
                  </td>
                </tr>
                <tr>
                  <th>10</th>
                  <td>
                    Electricity (USD)(cuadra)
                  </td>
                  <td>
                    F
                  </td>
                  <td>
                    {{  estateInfo.flujo_anual_s30.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.transformidad_s30.toExponential(2)  }}
                  </td>
                  <td>
                    {{  estateInfo.emergia_s30.toExponential(2)  }}
                  </td>
                </tr>
                <tr class="bg-warning text-white">
                  <th>Total secado</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{{  estateInfo.total_s.toExponential(2)  }}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <a class="btn btn-dark my-3 mx-2" @click="$router.go(-1)">Back</a>
                    <button type="button" class="btn btn-primary" @click="guardar()">Save</button>
                  </td>
                  <td></td>
                  <td></td>
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
import dryingColl from "../../utlis/firebase3";
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
        d_year: null,
        d_produccion: null,
        d_dias_secado: null,
        d_k: null,
        d_patio_secado: null,
        d_val_maq: null,
        d_gf_Benef: null,
        d_combustible: null,
        d_val_infra: null,
        d_promedio_electrico: null,
        flujo_anual_s1: null,
        flujo_anual_s2: null,
        flujo_anual_s3: null,
        flujo_anual_s4: null,
        flujo_anual_s5: null,
        flujo_anual_s6: null,
        flujo_anual_s7: null,
        flujo_anual_s8: null,
        flujo_anual_s9: null,
        flujo_anual_s30: null,
        transformidad: null,
        transformidad_f2: null,
        transformidad_s3: null,
        transformidad_s4: null,
        transformidad_s5: null,
        transformidad_s6: null,
        transformidad_s7: null,
        transformidad_s8: null,
        transformidad_s9: null,
        transformidad_s30: null,
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
        total_s: null,
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
        s_year: null
      },
      plants: []
    };
  },
  methods: {
    async getEstate() {
      const transformidad = 1;
      const transformidad_f2 = 2520;
      const transformidad_s3 = 145000;
      const transformidad_s4 = 86000;
      const transformidad_s5 = 2420000000;
      const transformidad_s6 = 26500000000000;
      const transformidad_s7 = 22500000000000;
      const transformidad_s8 = 111111;
      const transformidad_s9 = 26500000000000;
      const transformidad_s30 = 26500000000000;
      const v_dolar2014 = 2000;

      let estateRef = doc(dryingColl, this.infoId);
      this.docRef = estateRef;
      let estate = await getDoc(this.docRef);
      let estateData = estate.data();
      this.estateInfo.d_year = estateData.d_year;
      this.estateInfo.d_produccion = estateData.d_produccion;
      this.estateInfo.d_dias_secado = estateData.d_dias_secado;
      this.estateInfo.d_k = estateData.d_k;
      this.estateInfo.d_patio_secado = estateData.d_patio_secado;
      this.estateInfo.d_val_maq = estateData.d_val_maq;
      this.estateInfo.d_gf_Benef = estateData.d_gf_Benef;
      this.estateInfo.d_combustible = estateData.d_combustible;
      this.estateInfo.d_val_infra = estateData.d_val_infra;
      this.estateInfo.d_promedio_electrico = estateData.d_promedio_electrico;

      ///operaciones

      //FILA21
      const insolacion_s = estateData.p_insolation * 3600000;
      const insolacion_diez = insolacion_s * 10;
      const flujo_anual_s1 = insolacion_diez * (1 - estateData.p_albedo) * estateData.area_finca;

      let emergia_s1 = flujo_anual_s1 * transformidad;

      //FILA22
      const flujo_anual_s2 = estateData.area_finca * estateData.p_admosfra * estateData.p_densidadA *
        estateData.p_viento;
      let emergia_s2 = flujo_anual_s2 * transformidad_f2;

      //FILA23
      const area_finca_1 = 10;//////estateData.area_finca
      const evapo_energ = area_finca_1 * estateData.p_transpiracion * estateData.p_densidad2 *
        estateData.p_enegia_lib;
      const flujo_anual_s3 = (evapo_energ / 365) * 10;
      let emergia_s3 = flujo_anual_s3 * transformidad_s3;

      //FILA24
      const prod_perg = estateData.d_produccion / 5;
      const prod_anio = (prod_perg * 2) / 1000;
      //const water_cons = prod_anio / 1000;
      const flujo_anual_s4 = prod_anio * estateData.d_k * estateData.p_enegia_lib;
      let emergia_s4 = flujo_anual_s4 * transformidad_s4;

      //FILA25
      const flujo_anual_s5 = estateData.d_patio_secado * 1000;
      let emergia_s5 = flujo_anual_s5 * transformidad_s5;

      //FILA26
      const flujo_anual_s6 = ((estateData.d_val_maq / v_dolar2014) / 30) / 118;
      let emergia_s6 = flujo_anual_s6 * transformidad_s6;
      //FILA27
      //const gastos_benef_lh = 16683.73;
      const flujo_anual_s7 = estateData.d_gf_Benef / 118;
      let emergia_s7 = flujo_anual_s7 * transformidad_s7;

      //FILA28
      const flujo_anual_s8 = estateData.d_combustible * 39500000;
      let emergia_s8 = flujo_anual_s8 * transformidad_s8;
      //FILA29
      const flujo_anual_s9 = ((estateData.d_val_infra / v_dolar2014) / 50) / 118;
      let emergia_s9 = flujo_anual_s9 * transformidad_s9;

      //FILA30
      const flujo_anual_s30 = ((estateData.d_promedio_electrico * 12) / estateData.l_Pdolar) / 118;
      let emergia_s30 = flujo_anual_s30 * transformidad_s30;

      //TOTAL
      var total_s = emergia_s1 + emergia_s2 + emergia_s3 + emergia_s4 + emergia_s5 + emergia_s6 +
        emergia_s7 + emergia_s8 + emergia_s9 + emergia_s30;

      this.estateInfo.flujo_anual_s1 = flujo_anual_s1;
      this.estateInfo.flujo_anual_s2 = flujo_anual_s2;
      this.estateInfo.flujo_anual_s3 = flujo_anual_s3;
      this.estateInfo.flujo_anual_s4 = flujo_anual_s4;
      this.estateInfo.flujo_anual_s5 = flujo_anual_s5;
      this.estateInfo.flujo_anual_s6 = flujo_anual_s6;
      this.estateInfo.flujo_anual_s7 = flujo_anual_s7;
      this.estateInfo.flujo_anual_s8 = flujo_anual_s8;
      this.estateInfo.flujo_anual_s9 = flujo_anual_s9;
      this.estateInfo.flujo_anual_s30 = flujo_anual_s30;

      this.estateInfo.transformidad = transformidad;
      this.estateInfo.transformidad_f2 = transformidad_f2;
      this.estateInfo.transformidad_s3 = transformidad_s3;
      this.estateInfo.transformidad_s4 = transformidad_s4;
      this.estateInfo.transformidad_s5 = transformidad_s5;
      this.estateInfo.transformidad_s6 = transformidad_s6;
      this.estateInfo.transformidad_s7 = transformidad_s7;
      this.estateInfo.transformidad_s8 = transformidad_s8;
      this.estateInfo.transformidad_s9 = transformidad_s9;
      this.estateInfo.transformidad_s30 = transformidad_s30;

      this.estateInfo.emergia_s1 = emergia_s1;
      this.estateInfo.emergia_s2 = emergia_s2;
      this.estateInfo.emergia_s3 = emergia_s3;
      this.estateInfo.emergia_s4 = emergia_s4;
      this.estateInfo.emergia_s5 = emergia_s5;
      this.estateInfo.emergia_s6 = emergia_s6;
      this.estateInfo.emergia_s7 = emergia_s7;
      this.estateInfo.emergia_s8 = emergia_s8;
      this.estateInfo.emergia_s9 = emergia_s9;
      this.estateInfo.emergia_s30 = emergia_s30;

      this.estateInfo.total_s = total_s;
    },
    async guardar() {
      let plantSnapShot = await db.collection('sumatoriaone').where('s_year', '==', this.estateInfo.d_year).get();
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

      this.energia.s_year = sumaData.s_year;

      this.energia.emergia_s1 = this.estateInfo.emergia_s1;
      this.energia.emergia_s2 = this.estateInfo.emergia_s2;
      this.energia.emergia_s3 = this.estateInfo.emergia_s3;
      this.energia.emergia_s4 = this.estateInfo.emergia_s4;
      this.energia.emergia_s5 = this.estateInfo.emergia_s5;
      this.energia.emergia_s6 = this.estateInfo.emergia_s6;
      this.energia.emergia_s7 = this.estateInfo.emergia_s7;
      this.energia.emergia_s8 = this.estateInfo.emergia_s8;
      this.energia.emergia_s9 = this.estateInfo.emergia_s9;
      this.energia.emergia_s30 = this.estateInfo.emergia_s30;

      this.update();
      alert("Saving");


    },
    async update() {
      await setDoc(this.docRefe, this.energia);
      this.$router.go(-1);
    }
    /* async update(){
      await setDoc(this.docRefe, this.energia);
      this.$router.go(-1);
    } */
    /* async update() {
      if (confirm("Are you sure to update this record?")) {
        await setDoc(this.docRefe, this.energia);
        alert(
          `The estate with ID of ${this.editId} has been updated successfully!`
        );
        this.$router.go(-1);
      }
    }, */
  },
  created() {
    let infoId = this.$route.params.infoId;
    this.infoId = infoId;
    this.getEstate();
  },
}
</script>