<template>
    <div class="az-header">
        <br>
        <h2 class="az-content-title pd-lg-l-40 d-flex flex-column">Estate Info</h2>
        <div class="az-container pd-y-04 pd-lg-y-30 pd-xl-y-10">
            <div class="container">
                <div class="az-container-body pd-lg-l-40 d-flex flex-column">
                    <div class="table-responsive">
                        <table class="table table-striped mg-b-0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name Estate</th>
                                    <th>Year</th>
                                    <th>Type Crop</th>
                                    <th>Product Area</th>
                                    <th>Total Area</th>
                                    <th>Convertion Almendra</th>
                                    <th>Dolar-Pesos</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">{{ infoId }}</th>
                                    <td>
                                        {{ estateInfo.ename }}
                                    </td>
                                    <td>
                                        {{ estateInfo.eyear }}
                                    </td>
                                    <td>
                                        {{ estateInfo.etypecrop }}
                                    </td>
                                    <td>
                                        {{ estateInfo.eproductarea }}
                                    </td>
                                    <td>
                                        {{ estateInfo.etotalarea }}
                                    </td>
                                    <td>
                                        {{ estateInfo.econvertionalmendra }}
                                    </td>
                                    <td>
                                        {{ estateInfo.edolar }}
                                    </td>
                                </tr>
                            </tbody>
                        </table><br><br>
                        <h4>Production</h4><br>
                        <table class="table table-striped mg-b-0">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        Plantation
                                    </th>
                                    <th scope="col">
                                        Harvest
                                    </th>
                                    <th scope="col">
                                        Drying
                                    </th>
                                    <th scope="col">
                                        Pre-processing
                                    </th>
                                    <!-- <th scope="col">
                                    Work
                                </th> -->
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <router-link :to="{ path: `/planting/info/${infoId}` }" class="btn btn-info mx-2">
                                            Info</router-link>
                                        <router-link :to="{ path: `/planting/new/${infoId}` }" class="btn btn-success my-1">
                                            New</router-link>
                                    </td>
                                    <td>
                                        <router-link :to="{ path: `/harvest/info/${infoId}` }" class="btn btn-info mx-2">
                                            Info</router-link>
                                        <router-link :to="{ path: `/harvest/new/${infoId}` }" class="btn btn-success my-1">
                                            New</router-link>
                                    </td>
                                    <td>
                                        <router-link :to="{ path: `/drying/info/${infoId}` }" class="btn btn-info mx-2">
                                            Info</router-link>
                                        <router-link :to="{ path: `/drying/new/${infoId}` }" class="btn btn-success my-1">
                                            New</router-link>
                                    </td>
                                    <td>
                                        <router-link :to="{ path: `/beaten/info/${infoId}` }" class="btn btn-info mx-2">
                                            Info</router-link>
                                        <router-link :to="{ path: `/beaten/new/${infoId}` }" class="btn btn-success my-1">
                                            New</router-link>
                                    </td>
                                </tr>
                            </tbody>
                        </table><br>
                      
                        <div class="rom">
                            <br>
                            <h3>Consolidado</h3>
                            <br>
                            <table class="table table-striped">
                                <thead>
                                    <tr class="bg-success">
                                        <td class="text-white" colspan="2">
                                            Contribucion de la Naturaleza
                                        </td>
                                        <td class="text-white" colspan="2">
                                            Contribucion de la Economia
                                        </td>
                                        <td class="text-white">
                                            Total
                                        </td>
                                    </tr>
                                    <tr class="bg-success">
                                        <td class="text-white">
                                            Renovables
                                        </td>
                                        <td class="text-white">
                                            No Renovables
                                        </td>
                                        <td class="text-white">
                                            Renovables
                                        </td>
                                        <td class="text-white">
                                            No Renovables
                                        </td>
                                        <td class="text-white">
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>
                                            {{ sumaReno.toExponential(2) }}
                                        </th>
                                        <th>
                                            {{
                                                emergia_p_f6.toExponential(2)
                                            }}
                                        </th>
                                        <th>
                                            {{
                                                Crenovables.toExponential(2)
                                            }}
                                        </th>
                                        <th>
                                            {{
                                                CNrenovables.toExponential(2)
                                            }}
                                        </th>
                                        <th>
                                            {{
                                                total.toExponential(2)
                                            }}
                                        </th>
                                    </tr>
                                </tbody>
                            </table><br><br>
                            <figure class="highcharts-figure">
                                <div id="barras"></div>
                                <div id="circular"></div>
                                <div class="rom">
                                    <br><br>
                                    <hr><br>
                                    <h3>Indicador</h3>
                                    <br>
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Indicador de transormación
                                                </th>
                                                <th>
                                                    {{ year }}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>EYR=Y_coffee/F</th>
                                                <td>{{ eyr }}</td>

                                            </tr>
                                            <tr>
                                                <th>ELR=(N+F_N)/(R+F_R )</th>
                                                <td>{{ elr }}</td>

                                            </tr>
                                            <tr>
                                                <th>EIR=F/(N+R)</th>
                                                <td>{{ eir }}</td>

                                            </tr>
                                            <tr>
                                                <th>ESI=EYR/ELR</th>
                                                <td>{{ esi }}</td>

                                            </tr>
                                            <tr>
                                                <th>Transformity</th>
                                                <td>{{ transf2018 }}</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div><br><br>
                                <div id="barrasetap"></div>
                                <hr><br>
                                <div id="container"></div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import estateColl from "../../firebase";
//import db from "../../utlis/comparation/firebase-1";
import { getDoc, doc, getDocs,where,query } from 'firebase/firestore';
import Highcharts from 'highcharts';
import plantingColl from "../../utlis/firebase1";
import harvestColl from "../../utlis/firebase4";
import dryingColl from "../../utlis/firebase3";
import beatenColl from "@/utlis/firebase2";


export default {
    data() {
        return {
            selectedEstate: {},
            infoId: null,
            docRef: null,
            info: null,
            date: null,
            plants: [],
            selectedDoc: null,
            estateInfo: {
                ename: null,
                eyear: null,
                eproductarea: null,
                etotalarea: null,
                econvertionalmendra: null,
                etypecrop: null,
                edolar: null,
            },
            Rrenovables: null,
            emergia_p_f6: 0,
            Crenovables: 0,
            CNrenovables: 0,
            total: 0,
            eyr: null,
            elr: null,
            eir: null,
            esi: null,
            transf2018: null,
            year: null,
            yearFormat: null,
            sumaReno: 0,
            plantationEtap:{
                siwret:0,
                fertilizers:0,
                organicFertilizer:0,
                humanlabor:0,
                machinaryandequipment:0,
                //harvest
                machinaryandEquipmentH:0,
                fuelandlubricants:0,
                HTvehicle:0,
                humanlaborH:0,
                //drying
                siweD:0,
                waterD:0,
                machinaryandEquipmentD:0,
                humanlaborD:0,
                buildingsD:0,
                electricityandfuelD:0,
                //preprocessing
                machinaryandequipmentP:0,
                humanlaborP:0,
                buildingsP:0,
                electricityP:0

            }
        };
    },
    computed: {
        estateId() {
            return this.$route.params.infoId;
        }
    },
    methods: {
        async getEstate() {
            let estateRef = doc(estateColl, this.infoId);
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
        async plant() {
            //console.log("GRAFICOS SI CLARO ");
            // ################### empieza planting por que no
            //console.log(this.infoId);
            const transformidad = 1;
            this.estateInfo.transformidad = transformidad;
            const transformidad_f2 = 2520;
            this.estateInfo.transformidad_f2 = transformidad_f2;
            const transformidad_f3 = 30600;
            this.estateInfo.transformidad_f3 = transformidad_f3;
            const transformidad_f4 = 17600;
            this.estateInfo.transformidad_f4 = transformidad_f4;
            const transformidad_f5 = 39800;
            this.estateInfo.transformidad_f5 = transformidad_f5;
            const transformidad_f6 = 74000;
            this.estateInfo.transformidad_f6 = transformidad_f6;
            const transformidad_f7 = 6620000000;
            this.estateInfo.transformidad_f7 = transformidad_f7;
            const transformidad_f8 = 9350000000;
            this.estateInfo.transformidad_f8 = transformidad_f8;
            const transformidad_f9 = 932000000;
            this.estateInfo.transformidad_f9 = transformidad_f9;
            const transformidad_f10 = 6620000000;
            this.estateInfo.transformidad_f10 = transformidad_f10;
            const transformidad_f11 = 1680000000;
            this.estateInfo.transformidad_f11 = transformidad_f11;
            const transformidad_f12 = 3870000000;
            this.estateInfo.transformidad_f12 = transformidad_f12;
            const transformidad_f13 = 58500;
            this.estateInfo.transformidad_f13 = transformidad_f13;
            const transformidad_f14 = 6700000000;
            this.estateInfo.transformidad_f14 = transformidad_f14;
            const transformidad_f15 = 22500000000000;
            this.estateInfo.transformidad_f15 = transformidad_f15;
            const transformidad_f16 = 14800000000;
            this.estateInfo.transformidad_f16 = transformidad_f16;
            const ins_m2 = 3600000;

            const v_dolar2010 = 337.18;
            const v_dolar2009 = 580.59;
            var docplantingid

            // const querySnapshot = await getDocs(plantingColl);
            // querySnapshot.forEach((doc) => {
            //     console.log(`id planting ${doc.id} => ${doc.data.estateId}`);
            //     docplantingid = doc.id
            // });
            
            const q = query(plantingColl, where("estateId", "==", this.infoId));
            //let idplanting
            await getDocs(q)
                .then((querySnapshot) => {
                   // console.log("es id prueba",querySnapshot.docs[0].id);
                    docplantingid=querySnapshot.docs[0].id;
                })
                .catch((error) => {
                    console.error("Error al obtener documentos: ", error);
                });
            //console.log("id",docplantingid);
            let estateRef =await doc(plantingColl, docplantingid);
            this.docRef = estateRef;
            let estate = await getDoc(this.docRef);
            let estateData = estate.data();
            this.estateInfo.p_year = estateData.p_year;
            this.estateInfo.p_albedo = estateData.p_albedo;
            this.estateInfo.p_promedio_inso = estateData.p_promedio_inso;
            this.estateInfo.p_capa_admos = estateData.p_capa_admos;
            this.estateInfo.p_densidad_aire = estateData.p_densidad_aire;
            this.estateInfo.p_vel_viento = estateData.p_vel_viento;
            this.estateInfo.p_duracion_cult = estateData.p_duracion_cult;
            this.estateInfo.p_evaporacion_poten = estateData.p_evaporacion_poten;
            this.estateInfo.p_coefi_cult = estateData.p_coefi_cult;
            this.estateInfo.p_energia_libre_gibbs = estateData.p_energia_libre_gibbs;
            this.estateInfo.p_aspec_hidrico = estateData.p_aspec_hidrico;
            this.estateInfo.p_agua = estateData.p_agua;
            this.estateInfo.p_promedio_altura = estateData.p_promedio_altura;
            this.estateInfo.p_densidad = estateData.p_densidad;
            this.estateInfo.p_transpiracion = estateData.p_transpiracion;
            this.estateInfo.p_perdida_suelo = estateData.p_perdida_suelo;
            this.estateInfo.p_cont_materia_orga = estateData.p_materia_orga;
            this.estateInfo.p_ferti_nitro = estateData.p_ferti_nitro;
            this.estateInfo.p_ferti_fosfato = estateData.p_ferti_fosfato;
            this.estateInfo.p_ferti_potacio = estateData.p_ferti_potacio;
            this.estateInfo.p_urea = estateData.p_urea;
            this.estateInfo.p_cal = estateData.p_cal;
            this.estateInfo.p_materia_orga = estateData.p_materia_orga;
            this.estateInfo.p_semillas = estateData.p_semillas;
            this.estateInfo.p_maq_man = estateData.p_maq_man;
            this.estateInfo.p_pest_fung = estateData.p_pest_fung;
            this.estateInfo.area_finca = estateData.area_finca;

            //operaciones
            //PLANTACION FILA 1
            //esta formula es solar insolation de plantacion fila 1
            var insilacion_p_uno = estateData.p_promedio_inso * ins_m2;
            var insolation_p_anio = insilacion_p_uno * estateData.p_duracion_cult;
            var anio_f1_p = insolation_p_anio * (1 - estateData.p_albedo) * estateData.area_finca;
            //console.log(estateData.p_promedio_inso);
            //console.log(estateData.p_duracion_cult);
            //console.log(anio_f1_p);
            this.estateInfo.anio_f1_p = anio_f1_p;

            var dos_anios_p_f1 = (anio_f1_p / 30) * 2;

            this.estateInfo.dos_anios_p_f1 = dos_anios_p_f1;

            var total_f1 = dos_anios_p_f1 + anio_f1_p;

            this.estateInfo.total_f1 = total_f1;

            let emergia_p_f1 = total_f1 * transformidad

            //PLANTACION FILA 2
            var anio_f2_p = estateData.p_capa_admos * estateData.area_finca *
                estateData.p_densidad_aire * estateData.p_vel_viento * (estateData.p_duracion_cult / 365);
            this.estateInfo.anio_f2_p = anio_f2_p;
            //2 años iniciales
            var dos_anios_p_f2 = (anio_f2_p / 30) * 2;
            this.estateInfo.dos_anios_p_f2 = dos_anios_p_f2;

            var total_f2 = anio_f2_p + dos_anios_p_f2;
            this.estateInfo.total_f2 = total_f2;
            let emergia_p_f2 = total_f2 * transformidad_f2;

            //PLANTACION F3
            //año analizado f3
            var evap_p = 3.3;
            var evap_p_f3 = (evap_p * estateData.p_duracion_cult) / 1000;
            var cropEt_p_f3 = evap_p_f3 * estateData.p_coefi_cult;
            //año iniciales
            var anio_f3_p = estateData.area_finca * cropEt_p_f3 * estateData.p_energia_libre_gibbs * 1000;
            this.estateInfo.anio_f3_p = anio_f3_p;
            //2años analizados f3
            var dos_anios_p_f3 = (anio_f3_p / 30) * 2;
            //total_f3
            var total_f3 = anio_f3_p + dos_anios_p_f3;
            let emergia_p_f3 = total_f3 * transformidad_f3;

            //PLANTACION F4
            //año analizado f4
            const gravedad_f4 = 9.8;

            //año anaalizado
            var anio_f4_p = estateData.area_finca * estateData.p_aspec_hidrico * estateData.p_agua *
                estateData.p_promedio_altura * estateData.p_densidad * gravedad_f4;

            var dos_anios_p_f4 = (anio_f4_p / 30) * 2;
            var total_f4 = anio_f4_p + dos_anios_p_f4;
            let emergia_p_f4 = total_f4 * transformidad_f4;

            //PLANTACION F5
            //año analizado f5
            var anio_f5_p = estateData.area_finca * estateData.p_transpiracion *
                estateData.p_densidad * estateData.p_energia_libre_gibbs;
            var dos_anios_p_f5 = (anio_f5_p / 30) * 2;
            var total_f5 = anio_f5_p + dos_anios_p_f5;
            let emergia_p_f5 = total_f5 * transformidad_f5;

            //PLANTACION F6
            const kcal = 5400;
            const jkcal = 4186;
            //año analizado f6
            const anio_f6_p = estateData.area_finca * estateData.p_perdida_suelo *
                estateData.p_cont_materia_orga * kcal * jkcal;
            //dos años analizados
            var dos_anios_p_f6 = (anio_f6_p / 30) * 2;
            var total_f6 = anio_f6_p + dos_anios_p_f6;
            let emergia_p_f6 = total_f6 * transformidad_f6;

            //PLANTACION F7
            var dos_anios_p_f7 = (estateData.p_ferti_nitro / 30) * 2;
            var total_f7 = dos_anios_p_f7 + estateData.p_ferti_nitro;
            let emergia_p_f7 = total_f7 * transformidad_f7;

            //PLANTACION F8
            var dos_anios_p_f8 = (estateData.p_ferti_fosfato / 30) * 2;
            var total_f8 = estateData.p_ferti_fosfato + dos_anios_p_f8;
            let emergia_p_f8 = total_f8 * transformidad_f8;

            //PLANTACION F9
            var dos_anios_p_f9 = (estateData.p_ferti_potacio / 30) * 2;
            var total_f9 = dos_anios_p_f9 + estateData.p_ferti_potacio;
            let emergia_p_f9 = total_f9 * transformidad_f9;

            //PLANTACION F10
            var dos_anios_p_f10 = (estateData.p_urea / 30) * 2;
            var total_f10 = estateData.p_urea + dos_anios_p_f10;
            let emergia_p_f10 = total_f10 * transformidad_f10;

            //PLANTACION F11
            var dos_anios_p_f11 = (estateData.p_cal / 30) * 2;
            var total_f11 = estateData.p_cal + dos_anios_p_f11;
            let emergia_p_f11 = total_f11 * transformidad_f11;

            //PLANTACION F12
            var dos_anios_p_f12 = (estateData.p_materia_orga) / 30;
            var total_f12 = dos_anios_p_f12;
            let emergia_p_f12 = total_f12 * transformidad_f12;

            //PLANTACION F13
            var const2 = estateData.p_semillas * 3000 * 4186;
            var dos_anios_p_f13 = (const2 / 30);
            var total_f13 = dos_anios_p_f13;
            let emergia_p_f13 = total_f13 * transformidad_f13;

            //PLANTACION F14
            var dos_anios_p_f14 = (estateData.p_maq_man / 30) * 2;
            var total_f14 = estateData.p_maq_man + dos_anios_p_f14;
            let emergia_p_f14 = total_f14 * transformidad_f14;

            //PLANTACION F15
            //   let l_siembra_mante = 10000;
            this.estateInfo.l_siembra_mante = estateData.l_siembra_mante;

            //   this.estateInfo.l_siembra_mante = l_siembra_mante;
            var dos_anios_p_f15 = (v_dolar2009 + v_dolar2010) / 30;
            var total_f15 = dos_anios_p_f15 + estateData.l_siembra_mante;
            let emergia_p_f15 = total_f15 * transformidad_f15;

            //PLANTACION F16 l_siembra_mante 
            var dos_anios_p_f16 = (estateData.p_pest_fung / 30) * 2;
            var total_f16 = estateData.p_pest_fung + dos_anios_p_f16;
            let emergia_p_f16 = total_f16 * transformidad_f16;

            //TOTAL PLANTACION
            var total_P = emergia_p_f1 + emergia_p_f2 + emergia_p_f3 +
                emergia_p_f4 + emergia_p_f5 + emergia_p_f6 + emergia_p_f7 +
                emergia_p_f8 + emergia_p_f9 + emergia_p_f10 + emergia_p_f11 +
                emergia_p_f12 + emergia_p_f13 + emergia_p_f14 + emergia_p_f15 + emergia_p_f16;

            this.estateInfo.total_p = total_P;



            this.estateInfo.dos_anios_p_f3 = dos_anios_p_f3;
            this.estateInfo.dos_anios_p_f4 = dos_anios_p_f4;
            this.estateInfo.dos_anios_p_f5 = dos_anios_p_f5;
            this.estateInfo.dos_anios_p_f6 = dos_anios_p_f6;
            this.estateInfo.dos_anios_p_f7 = dos_anios_p_f7;
            this.estateInfo.dos_anios_p_f8 = dos_anios_p_f8;
            this.estateInfo.dos_anios_p_f9 = dos_anios_p_f9;
            this.estateInfo.dos_anios_p_f10 = dos_anios_p_f10;
            this.estateInfo.dos_anios_p_f11 = dos_anios_p_f11;
            this.estateInfo.dos_anios_p_f12 = dos_anios_p_f12;
            this.estateInfo.dos_anios_p_f13 = dos_anios_p_f13;
            this.estateInfo.dos_anios_p_f14 = dos_anios_p_f14;
            this.estateInfo.dos_anios_p_f15 = dos_anios_p_f15;
            this.estateInfo.dos_anios_p_f16 = dos_anios_p_f16;

            this.estateInfo.anio_f3_p = anio_f3_p;
            this.estateInfo.anio_f4_p = anio_f4_p;
            this.estateInfo.anio_f5_p = anio_f5_p;
            this.estateInfo.anio_f6_p = anio_f6_p;

            this.sumaReno = emergia_p_f1 + emergia_p_f2 + emergia_p_f3 + emergia_p_f4 + emergia_p_f5;
            this.emergia_p_f6 = emergia_p_f6;
            this.total += emergia_p_f6;
            this.Crenovables = (emergia_p_f12 * 0.8) + (emergia_p_f15 * 0.1);
            this.CNrenovables = emergia_p_f7 + emergia_p_f8 + emergia_p_f9 + emergia_p_f10 + emergia_p_f11 + (emergia_p_f12 * 0.2)
                + emergia_p_f13 + emergia_p_f14 + (emergia_p_f15 * 0.9) + emergia_p_f16;

            //console.log("emergia planting",emergia_p_f1, emergia_p_f2, emergia_p_f3, emergia_p_f4, emergia_p_f5, emergia_p_f6,
              //  emergia_p_f7, emergia_p_f8, emergia_p_f9, emergia_p_f10, emergia_p_f11, emergia_p_f12, emergia_p_f13
              //  , emergia_p_f14, emergia_p_f15, emergia_p_f16)
            //estateData.p_year;
            this.plantationEtap.siwret=emergia_p_f1+ emergia_p_f2+ emergia_p_f3+ emergia_p_f4+ emergia_p_f5;
            this.plantationEtap.fertilizers=emergia_p_f7+
                emergia_p_f8+ emergia_p_f9+ emergia_p_f10+emergia_p_f11;
            this.plantationEtap.organicFertilizer= emergia_p_f12;
            this.plantationEtap.humanlabor= emergia_p_f15;
            this.plantationEtap.machinaryandequipment= emergia_p_f14;
            
          //  console.log("etap plantation",this.plantationEtap.siwret);
            //console.log("etap fertilizer",this.plantationEtap.fertilizers);
            //console.log("etap Ofertilizer",this.plantationEtap.organicFertilizer);
            //console.log("etap hLabor",this.plantationEtap.humanlabor);
            //console.log("etap MYEqio",this.plantationEtap.machinaryandequipment);
        },
        async harvest() {

            //##################### harvest
            //console.log("harvestmethod");
            const transformidad_f17 = 6700000000;
            const transformidad_f18 = 111111;
            const transformidad_f19 = 22500000000000;
            const transformidad_c20 = 22500000000000;
            let docharvestid
            // const querySnapshot = await getDocs(harvestColl);
            // querySnapshot.forEach((doc) => {
            //     //console.log(`${doc.id} => ${doc.data().estateId}`);
            //     docharvestid = doc.id
            // });
            const q = query(harvestColl, where("estateId", "==", this.infoId));
            //let idplanting
            await getDocs(q)
                .then((querySnapshot) => {
                   // console.log("es id prueba",querySnapshot.docs[0].id);
                    docharvestid=querySnapshot.docs[0].id;
                })
                .catch((error) => {
                    console.error("Error al obtener documentos: ", error);
                });
           // console.log("id",docharvestid);
            let estateRefh = doc(harvestColl, docharvestid);
            this.docRef = estateRefh;
            let estateh = await getDoc(this.docRef);
            let estateDatah = estateh.data();
            this.estateInfo.h_year = estateDatah.h_year;
            this.estateInfo.h_maq_man = estateDatah.h_maq_man;
            this.estateInfo.h_combustible = estateDatah.h_combustible;
            this.estateInfo.h_transport = estateDatah.h_transport;
            this.estateInfo.l_Pjornal_recole = estateDatah.l_Pjornal_recole;

            ///operaciones
            //COSECHA F17
            let emergia_p_f17 = estateDatah.h_maq_man * transformidad_f17;
            //COSECHA F18
            var anio_analizado_c1 = estateDatah.h_combustible * 39500000;
            let emergia_p_f18 = anio_analizado_c1 * transformidad_f18;
            //COSECHA F19
            let emergia_p_f19 = estateDatah.h_transport * transformidad_f19;
            //COSECHA F20
            let emergia_p_f20 = estateDatah.l_Pjornal_recole * transformidad_c20;
            //TOTAL COSECHA
            var total_c = emergia_p_f17 + emergia_p_f18 + emergia_p_f19 + emergia_p_f20;

            this.estateInfo.total_c = total_c;



            this.estateInfo.transformidad_f17 = transformidad_f17;
            this.estateInfo.transformidad_f18 = transformidad_f18;
            this.estateInfo.transformidad_f19 = transformidad_f19;
            this.estateInfo.transformidad_c20 = transformidad_c20;

            this.estateInfo.anio_analizado_c1 = anio_analizado_c1;
            this.Crenovables += (emergia_p_f20 * 0.1);
            this.CNrenovables += emergia_p_f17 + emergia_p_f18 + emergia_p_f19 + (emergia_p_f20 * 0.9);
            //console.log(emergia_p_f17, emergia_p_f18, emergia_p_f19, emergia_p_f20);

            this.plantationEtap.machinaryandEquipmentH=emergia_p_f17;
            this.plantationEtap.fuelandlubricants= emergia_p_f18;
            this.plantationEtap.HTvehicle= emergia_p_f19;
            this.plantationEtap.humanlaborH= emergia_p_f20;
           // console.log("etap HMchinery",this.plantationEtap.machinaryandEquipmentH);
           // console.log("etap Hfuel",this.plantationEtap.fuelandlubricants);
           // console.log("etap Hvehicle",this.plantationEtap.HTvehicle);
           // console.log("etap HLaborh",this.plantationEtap.humanlaborH);
        },
        async drying() {
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
            let docdryingid
            // const querySnapshot = await getDocs(dryingColl);
            // querySnapshot.forEach((doc) => {
            //     //console.log(`${doc.id} => ${doc.data().estateId}`);
            //     docdryingid = doc.id
            // });
            const q = query(dryingColl, where("estateId", "==", this.infoId));
            //let idplanting
            await getDocs(q)
                .then((querySnapshot) => {
                   // console.log("es id drying",querySnapshot.docs[0].id);
                    docdryingid=querySnapshot.docs[0].id;
                })
                .catch((error) => {
                    console.error("Error al obtener documentos: ", error);
                });
           // console.log("id",docdryingid);

            let estateRef = doc(dryingColl, docdryingid);
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
            this.sumaReno += emergia_s1 + emergia_s2 + emergia_s3 + emergia_s4;
            this.total += this.sumaReno;
            this.Crenovables += (emergia_s7 * 0.1);

            //console.log(emergia_s1, emergia_s2, emergia_s3, emergia_s4, emergia_s5, emergia_s6, emergia_s7, emergia_s8,
             //   emergia_s9, emergia_s30);
            this.CNrenovables += emergia_s5 + emergia_s6 + (emergia_s7 * 0.9) + emergia_s8 + emergia_s9 + emergia_s30;

            this.estateInfo.total_s = total_s;

            this.plantationEtap.siweD=emergia_s1+ emergia_s2+ emergia_s3;
            this.plantationEtap.waterD= emergia_s4;
            this.plantationEtap.machinaryandEquipmentD= emergia_s6;
            this.plantationEtap.humanlaborD= emergia_s7;
            this.plantationEtap.buildingsD= emergia_s9+emergia_s5;
            this.plantationEtap.electricityandfuelD= emergia_s30+emergia_s8;
            //console.log("etap siweD",this.plantationEtap.siweD);
            //console.log("etap waterD",this.plantationEtap.waterD);
            //console.log("etap machinaryandEquipmentD",this.plantationEtap.machinaryandEquipmentD);
            //console.log("etap humanlaborD",this.plantationEtap.humanlaborD);
            //console.log("etap buildingsD",this.plantationEtap.buildingsD);
            //console.log("etap electricityandfuelD",this.plantationEtap.electricityandfuelD);
        },
        async beaten() {
            const v_dolar2014 = 2000;
            const transformidad_t1 = 26500000000000;
            const transformidad_t2 = 22500000000000;
            const transformidad_t5 = 23100000000;
            let docbeatenid
            // const querySnapshot = await getDocs(beatenColl);
            // querySnapshot.forEach((doc) => {
            //     console.log(`id doc: ${doc.id} => ${doc.data().docbeatenid}`);
            //     docbeatenid = doc.id
            // });


            // console.log("id del primero", querySnapshot[0]);
            const q = query(beatenColl, where("estateId", "==", this.infoId));
            //let idplanting
            await getDocs(q)
                .then((querySnapshot) => {
                   // console.log("es id drying",querySnapshot.docs[0].id);
                    docbeatenid=querySnapshot.docs[0].id;
                })
                .catch((error) => {
                    console.error("Error al obtener documentos: ", error);
                });
           // console.log("id",docbeatenid);

            let estateRef = doc(beatenColl, docbeatenid);
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
            //console.log(estateData.b_gf_Benef);
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
           // console.log("Beaten : ", t1, t2, t3, t4, t5)
            this.Crenovables += (t2 * 0.1);
            this.estateInfo.total = totales;
            this.CNrenovables += t1 + (t2 * 0.9) + t3 + t4 + t5
            this.total += this.Crenovables + this.CNrenovables;

            this.plantationEtap.machinaryandEquipmentP= t1;
            this.plantationEtap.humanlaborP= t2;
            this.plantationEtap.buildingsP= t3;
            this.plantationEtap.electricityP= t4;
           // console.log("etap machinaryandEquipmentP",this.plantationEtap.machinaryandEquipmentP);
            //console.log("etap humanlaborP",this.plantationEtap.humanlaborP);
           // console.log("etap buildingsP",this.plantationEtap.buildingsP);
           // console.log("etap electricityP",this.plantationEtap.electricityP);
        }
    },
    created() {
        let infoId = this.$route.params.infoId;
        this.infoId = infoId;




    },
    async mounted() {
        await this.getEstate();
        await this.plant();
        await this.harvest();
        await this.drying();
        await this.beaten();

        //console.log("existe suma : ", this.sumaReno, this.emergia_p_f6, this.Crenovables, this.CNrenovables);

        // GRAFICA DE BARRAS
        Highcharts.chart('barras', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Emergy Flow (year/ha), coffe production'
            },
            accessibility: {
                announceNewData: {
                    enabled: true
                }
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}'
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
            },
            series: [
                {
                    name: "Browsers",
                    colorByPoint: true,
                    data: [
                        {
                            name: "R-Renobables",
                            y: this.sumaReno,
                        },
                        {
                            name: "R-No Renobables",
                            y: this.emergia_p_f6,
                        },
                        {
                            name: "N-Renobables",
                            y: this.Crenovables,
                        },
                        {
                            name: "N-No Renobables",
                            y: this.CNrenovables,
                        }
                    ]
                }
            ],
            drilldown: {
                breadcrumbs: {
                    position: {
                        align: 'right'
                    }
                },
                series: [
                    {
                        name: "R-Renobables",
                        id: "R-Renobables",
                        data: [
                            [
                                "v65.0",
                                0.1
                            ],
                            [
                                "v64.0",
                                1.3
                            ],
                            [
                                "v63.0",
                                53.02
                            ],
                            [
                                "v62.0",
                                1.4
                            ],
                            [
                                "v61.0",
                                0.88
                            ],
                            [
                                "v60.0",
                                0.56
                            ],
                            [
                                "v59.0",
                                0.45
                            ],
                            [
                                "v58.0",
                                0.49
                            ],
                            [
                                "v57.0",
                                0.32
                            ],
                            [
                                "v56.0",
                                0.29
                            ],
                            [
                                "v55.0",
                                0.79
                            ],
                            [
                                "v54.0",
                                0.18
                            ],
                            [
                                "v51.0",
                                0.13
                            ],
                            [
                                "v49.0",
                                2.16
                            ],
                            [
                                "v48.0",
                                0.13
                            ],
                            [
                                "v47.0",
                                0.11
                            ],
                            [
                                "v43.0",
                                0.17
                            ],
                            [
                                "v29.0",
                                0.26
                            ]
                        ]
                    },
                    {
                        name: "R-No Renobables",
                        id: "R-No Renobables",
                        data: [
                            [
                                "v58.0",
                                1.02
                            ],
                            [
                                "v57.0",
                                7.36
                            ],
                            [
                                "v56.0",
                                0.35
                            ],
                            [
                                "v55.0",
                                0.11
                            ],
                            [
                                "v54.0",
                                0.1
                            ],
                            [
                                "v52.0",
                                0.95
                            ],
                            [
                                "v51.0",
                                0.15
                            ],
                            [
                                "v50.0",
                                0.1
                            ],
                            [
                                "v48.0",
                                0.31
                            ],
                            [
                                "v47.0",
                                0.12
                            ]
                        ]
                    },
                    {
                        name: "N-Renobables",
                        id: "N-Renobables",
                        data: [
                            [
                                "v11.0",
                                6.2
                            ],
                            [
                                "v10.0",
                                0.29
                            ],
                            [
                                "v9.0",
                                0.27
                            ],
                            [
                                "v8.0",
                                0.47
                            ]
                        ]
                    },
                    {
                        name: "N-No Renobables",
                        id: "N-No Renobables",
                        data: [
                            [
                                "v11.0",
                                3.39
                            ],
                            [
                                "v10.1",
                                0.96
                            ],
                            [
                                "v10.0",
                                0.36
                            ],
                            [
                                "v9.1",
                                0.54
                            ],
                            [
                                "v9.0",
                                0.13
                            ],
                            [
                                "v5.1",
                                0.2
                            ]
                        ]
                    }
                ]
            }
        });

        // circular
        Highcharts.chart('circular', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Emergy Flow (year/ha), coffe production'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: ''
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} '
                    }
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'R-Renobables',
                    y: this.sumaReno,
                    sliced: true,
                    selected: true
                },
                {
                    name: 'R- No Renobables',
                    y: this.emergia_p_f6
                },
                {
                    name: 'N-Renobables',
                    y: this.Crenovables
                },
                {
                    name: 'N-No Renobables',
                    y: this.CNrenovables
                }
                ]
            }]
        });

        let factor_f = this.estateInfo.econvertionalmendra;
            let equiv1k = 24500000;
            let s_prodCereza = 0.18;
            let prodAlmendra = s_prodCereza * factor_f;
            console.log(equiv1k);
            console.log(prodAlmendra);
            let flujoAnual = prodAlmendra * equiv1k;
            console.log(this.total);
            console.log(flujoAnual);
            let transf2018 = this.total / flujoAnual;
            this.transf2018=transf2018.toExponential(2);



        this.eyr = (this.total / (this.Crenovables + this.CNrenovables)).toExponential(2);
        this.elr = ((this.emergia_p_f6 + this.CNrenovables) / (this.sumaReno + this.Crenovables)).toExponential(2);
        this.eir = ((this.Crenovables + this.CNrenovables) / (this.emergia_p_f6 + this.sumaReno)).toExponential(2);
        this.esi = (this.eyr / this.elr).toExponential(2);
        //seguimiento

        Highcharts.chart('container', {

            title: {
                text: 'Transformity indicator'
            },

            yAxis: {
                title: {
                    text: ''
                }
            },

            xAxis: {
                accessibility: {
                    rangeDescription: 'Range: 2022'
                }
            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: +this.yearFormat//{{ year }}vaiable de año year
                }
            },
            series: [{
                name: 'EYR',
                data: [this.eyr]
            }, {
                name: 'ELR',
                data: [this.elr]
            }, {
                name: 'EIR',
                data: [this.eir]
            }, {
                name: 'ESI',
                data: [this.esi]
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        });

        //grafico nuevo etap
        // GRAFICA DE BARRAS
        Highcharts.chart('barrasetap', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Emergy inputs per stage of the coffee production farm'
            },
            accessibility: {
                announceNewData: {
                    enabled: true
                }
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}'
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
            },
            series: [
                {
                    name: "planting",
                    colorByPoint: true,
                    data: [
                        {
                            color:"#13A102",
                            name: "Solar insolation, Wind, Rain, Evapotranspiration",
                            y: this.plantationEtap.siwret,
                            
                        },
                        {
                            color:"#13A102",
                            name: "fertilizer",
                            y: this.plantationEtap.fertilizers,
                        },
                        {
                            color:"#13A102",
                            name: "Organic fertilizer",
                            y: this.plantationEtap.organicFertilizer,
                        },
                        {
                            color:"#13A102",
                            name: "Human Labor",
                            y: this.plantationEtap.humanlabor,
                        },
                        {
                            color:"#13A102",
                            name: "Machinery and equipment",
                            y: this.plantationEtap.machinaryandequipment,
                        }
                    ]
                },{
                    name: "harvest",
                    colorByPoint: true,
                    data: [
                        {
                            color:"#E74C3C",
                            name: "Machinery and equipment H",
                            y: this.plantationEtap.machinaryandEquipmentH,
                            
                        },
                        {
                            color:"#E74C3C",
                            name: "Fuel and lubricants",
                            y: this.plantationEtap.fuelandlubricants,
                        },
                        {
                            color:"#E74C3C",
                            name: "Harvest transportation-vehicle",
                            y: this.plantationEtap.HTvehicle,
                        },
                        {
                            color:"#E74C3C",
                            name: "Human Labor H",
                            y: this.plantationEtap.humanlaborH,
                        }
                    ]
                },{
                    name: "drying",
                    colorByPoint: true,
                    data: [
                        {
                            color:"#D4AC0D",
                            name: "Solar insolation, Wind, Rain, Evapotranspiration D",
                            y: this.plantationEtap.siweD,},{
                                color:"#D4AC0D",
                            name: "Water",
                            y: this.plantationEtap.waterD,
                        }, {
                            color:"#D4AC0D",
                            name: "Machinery and equipment D",
                            y: this.plantationEtap.machinaryandEquipmentD,
                        }, {
                            color:"#D4AC0D",
                            name: "Human Labor D",
                            y: this.plantationEtap.humanlaborD,
                        }, {
                            color:"#D4AC0D",
                            name: "Buildings, and Drying Yard",
                            y: this.plantationEtap.buildingsD,
                        }, {
                            color:"#D4AC0D",
                            name: "Electricity and Fuel",
                            y: this.plantationEtap.electricityandfuelD,
                        }
                    ]
                },{
                    name: "beaten",
                    colorByPoint: true,
                    data: [
                        {
                            color:"#2471A3",
                            name: "Machinery and equipment B",
                            y: this.plantationEtap.machinaryandequipmentP,
                        }, {
                            color:"#2471A3",
                            name: "Human Labor B",
                            y: this.plantationEtap.humanlaborP,
                        }, {
                            color:"#2471A3",
                            name: "Buildings",
                            y: this.plantationEtap.buildingsP,
                        }, {
                            color:"#2471A3",
                            name: "Electricity",
                            y: this.plantationEtap.electricityP,
                        }
                    ]
                }
            ],
            drilldown: {
                breadcrumbs: {
                    position: {
                        align: 'right'
                    }
                },
            }
        });

    }
}
</script>

<style>
.highcharts-figure,
.highcharts-data-table table {
    min-width: 310px;
    max-width: 800px;
    margin: 3em auto;
}

#barras {
    height: 400px;
}

.highcharts-data-table table {
    font-family: Verdana, sans-serif;
    border-collapse: collapse;
    border: 1px solid #ebebeb;
    margin: 10px auto;
    text-align: center;
    width: 100%;
    max-width: 500px;
}

.highcharts-data-table caption {
    padding: 1em 0;
    font-size: 1.2em;
    color: #555;
}

.highcharts-data-table th {
    font-weight: 600;
    padding: 0.5em;
}

.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
    padding: 0.5em;
}

.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
    background: #f8f8f8;
}

.highcharts-data-table tr:hover {
    background: #f1f7ff;
}
</style>