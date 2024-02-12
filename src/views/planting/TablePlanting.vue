<template>
    <div class="az-header">
        <br>
        <h2 class="az-content-title">Planting Table - Date {{  estateInfo.p_year  }}</h2>
        <div class="az-container pd-y-20 pd-lg-y-30 pd-xl-y-0">
            <div class="container">
                <div class="az-content-body pd-lg-l-0 d-flex flex-column">
                    <div class="table-responsive">
                        <table class="table table-striped mg-b-10">
                            <thead>
                                <tr class="bg-success">
                                    <th class="text-white">Item</th>
                                    <th class="text-white">Descripción</th>
                                    <th class="text-white">Clase</th>
                                    <th></th>
                                    <th class="text-white">Flujo Anual (unit/year ha)</th>
                                    <th></th>
                                    <th class="text-white">Transformidad (seJ/unit)</th>
                                    <th class="text-white">Emergia (seJ/year ha)</th>
                                </tr>
                                <tr class="bg-success">
                                    <th></th>
                                    <th class="text-white">Plantacion</th>
                                    <th></th>
                                    <th class="text-white">2 Años Iniciales / 30</th>
                                    <th class="text-white">Año Analizado</th>
                                    <th class="text-white">Total</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <th>Solar insolation (J)</th>
                                    <td>R</td>
                                    <td>
                                        {{  estateInfo.dos_anios_p_f1.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.anio_f1_p.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.total_f1.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.transformidad.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  energia.emergia_p_f1.toExponential(2)  }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <th>Wind, kinetic energy (J)</th>
                                    <td>R</td>
                                    <td>
                                        {{  estateInfo.dos_anios_p_f2.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.anio_f2_p.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.total_f2.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.transformidad_f2.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  energia.emergia_p_f2.toExponential(2)  }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <th>Rain, chemical energy (J)</th>
                                    <td>R</td>
                                    <td>
                                        {{  estateInfo.dos_anios_p_f3.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.anio_f3_p.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.total_f3.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.transformidad_f3.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  energia.emergia_p_f3.toExponential(2)  }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>4</th>
                                    <th>Rain, geopotential energy (J)</th>
                                    <td>R</td>
                                    <td>
                                        {{  estateInfo.dos_anios_p_f4.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.anio_f4_p.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.total_f4.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.transformidad_f4.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  energia.emergia_p_f4.toExponential(2)  }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>5</th>
                                    <th>Evapotranspiration (J)</th>
                                    <td>R</td>
                                    <td>
                                        {{  estateInfo.dos_anios_p_f5.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.anio_f5_p.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.total_f5.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.transformidad_f5.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  energia.emergia_p_f5.toExponential(2)  }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>6</th>
                                    <th>Soil erosion (J)</th>
                                    <td>N</td>
                                    <td>
                                        {{  estateInfo.dos_anios_p_f6.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.anio_f6_p.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.total_f6.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.transformidad_f6.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  energia.emergia_p_f6.toExponential(2)  }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>7</th>
                                    <th>Nitrogen (g)</th>
                                    <td>F</td>
                                    <td>
                                        {{  estateInfo.dos_anios_p_f7.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.p_ferti_nitro.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.total_f7.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.transformidad_f7.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  energia.emergia_p_f7.toExponential(2)  }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>8</th>
                                    <th>Phosphate (g)</th>
                                    <td>F</td>
                                    <td>
                                        {{  estateInfo.dos_anios_p_f8.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.p_ferti_fosfato.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.total_f8.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.transformidad_f8.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  energia.emergia_p_f8.toExponential(2)  }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>9</th>
                                    <th>Potassium (g)</th>
                                    <td>F</td>
                                    <td>
                                        {{  estateInfo.dos_anios_p_f9.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.p_ferti_potacio.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.total_f9.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.transformidad_f9.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  energia.emergia_p_f9.toExponential(2)  }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>10</th>
                                    <th>Urea (g)</th>
                                    <td>F</td>
                                    <td>
                                        {{  estateInfo.dos_anios_p_f10.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.p_urea.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.total_f10.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.transformidad_f10.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  energia.emergia_p_f10.toExponential(2)  }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>11</th>
                                    <th>Cal (g)</th>
                                    <td>F</td>
                                    <td>
                                        {{  estateInfo.dos_anios_p_f11.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.p_cal.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.total_f11.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.transformidad_f11.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  energia.emergia_p_f11.toExponential(2)  }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>12</th>
                                    <th>Organic fertilizer (J)</th>
                                    <td>80 % F</td>
                                    <td>
                                        {{  estateInfo.dos_anios_p_f12.toExponential(2)  }}
                                    </td>
                                    <td>
                                        0.0
                                    </td>
                                    <td>
                                        {{  estateInfo.total_f12.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.transformidad_f12.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  energia.emergia_p_f12.toExponential(2)  }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>13</th>
                                    <th>Seeds (J)</th>
                                    <td>F</td>
                                    <td>
                                        {{  estateInfo.dos_anios_p_f13.toExponential(2)  }}
                                    </td>
                                    <td>
                                        0.0
                                    </td>
                                    <td>
                                        {{  estateInfo.total_f13.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.transformidad_f13.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  energia.emergia_p_f13.toExponential(2)  }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>14</th>
                                    <th>Machinery and equipment (g)</th>
                                    <td>F</td>
                                    <td>
                                        {{  estateInfo.dos_anios_p_f14.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.p_maq_man.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.total_f14.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.transformidad_f14.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  energia.emergia_p_f14.toExponential(2)  }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>15</th>
                                    <th>Human Labor (USD)</th>
                                    <td>10% F</td>
                                    <td>
                                        {{  estateInfo.dos_anios_p_f15.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.l_siembra_mante.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.total_f15.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.transformidad_f15.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  energia.emergia_p_f15.toExponential(2)  }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>16</th>
                                    <th>Pesticides and fungicides (g)</th>
                                    <td>R</td>
                                    <td>
                                        {{  estateInfo.dos_anios_p_f16.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.p_pest_fung.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.total_f16.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  estateInfo.transformidad_f16.toExponential(2)  }}
                                    </td>
                                    <td>
                                        {{  energia.emergia_p_f16.toExponential(2)  }}
                                    </td>
                                </tr>
                                <tr class="bg-success text-white">
                                    <th>Total Plantacion</th>
                                    <th></th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>{{  estateInfo.total_p.toExponential(2)  }}</td>
                                </tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th><br><br>
                                <a class="btn btn-dark my-3 mx-2" @click="$router.go(-1)">Back</a>
                                <button type="button" class="btn btn-primary" @click="guardar()">Save</button>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tbody>
                        </table>
                        <input type="hidden" v-model="energia.s_year">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import plantingColl from "../../utlis/firebase1";
import sumatoriaoneColl from "../../utlis/firebase6";
import { getDoc, doc, addDoc } from "firebase/firestore";
export default {
    data() {
        return {

            selectedEstate: {},
            infoId: null,
            docRef: null,
            estateInfo: {
                p_year: null,
                p_albedo: null,
                p_promedio_inso: null,
                p_capa_admos: null,
                p_densidad_aire: null,
                p_vel_viento: null,
                p_duracion_cult: null,
                p_evaporacion_poten: null,
                p_coefi_cult: null,
                p_energia_libre_gibbs: null,
                p_aspec_hidrico: null,
                p_agua: null,
                p_promedio_altura: null,
                p_densidad: null,
                p_transpiracion: null,
                p_perdida_suelo: null,
                p_cont_materia_orga: null,
                p_ferti_nitro: null,
                p_ferti_fosfato: null,
                p_ferti_potacio: null,
                p_urea: null,
                p_cal: null,
                p_materia_orga: null,
                p_semillas: null,
                p_maq_man: null,
                p_pest_fung: null,
                total_p: null,
                area_finca: null,

                dos_anios_p_f1: null,
                dos_anios_p_f2: null,
                dos_anios_p_f3: null,
                dos_anios_p_f4: null,
                dos_anios_p_f5: null,
                dos_anios_p_f6: null,
                dos_anios_p_f7: null,
                dos_anios_p_f8: null,
                dos_anios_p_f9: null,
                dos_anios_p_f10: null,
                dos_anios_p_f11: null,
                dos_anios_p_f12: null,
                dos_anios_p_f13: null,
                dos_anios_p_f14: null,
                dos_anios_p_f15: null,
                dos_anios_p_f16: null,
                anio_f1_p: null,
                anio_f2_p: null,
                anio_f3_p: null,
                anio_f4_p: null,
                anio_f5_p: null,
                anio_f6_p: null,
                total_f1: null,
                total_f2: null,
                total_f3: null,
                total_f4: null,
                total_f5: null,
                total_f6: null,
                total_f7: null,
                total_f8: null,
                total_f9: null,
                total_f10: null,
                total_f11: null,
                total_f12: null,
                total_f13: null,
                total_f14: null,
                total_f15: null,
                total_f16: null,
                transformidad: null,
                transformidad_f2: null,
                transformidad_f3: null,
                transformidad_f4: null,
                transformidad_f5: null,
                transformidad_f6: null,
                transformidad_f7: null,
                transformidad_f8: null,
                transformidad_f9: null,
                transformidad_f10: null,
                transformidad_f11: null,
                transformidad_f12: null,
                transformidad_f13: null,
                transformidad_f14: null,
                transformidad_f15: null,
                transformidad_f16: null,
                l_siembra_mante: null,
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
                s_year: null
            }
        };
    },
    methods: {
        async getEstate() {
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

            let estateRef = doc(plantingColl, this.infoId);
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
            console.log( estateData.p_promedio_inso);
            console.log(estateData.p_duracion_cult);
            console.log(anio_f1_p);
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

            this.energia.emergia_p_f1 = emergia_p_f1;
            this.energia.emergia_p_f2 = emergia_p_f2;
            this.energia.emergia_p_f3 = emergia_p_f3;
            this.energia.emergia_p_f4 = emergia_p_f4;
            this.energia.emergia_p_f5 = emergia_p_f5;
            this.energia.emergia_p_f6 = emergia_p_f6;
            this.energia.emergia_p_f7 = emergia_p_f7;
            this.energia.emergia_p_f8 = emergia_p_f8;
            this.energia.emergia_p_f9 = emergia_p_f9;
            this.energia.emergia_p_f10 = emergia_p_f10;
            this.energia.emergia_p_f11 = emergia_p_f11;
            this.energia.emergia_p_f12 = emergia_p_f12;
            this.energia.emergia_p_f13 = emergia_p_f13;
            this.energia.emergia_p_f14 = emergia_p_f14;
            this.energia.emergia_p_f15 = emergia_p_f15;
            this.energia.emergia_p_f16 = emergia_p_f16;

            this.energia.s_year = estateData.p_year;

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

            this.estateInfo.total_f3 = total_f3;
            this.estateInfo.total_f4 = total_f4;
            this.estateInfo.total_f5 = total_f5;
            this.estateInfo.total_f6 = total_f6;
            this.estateInfo.total_f7 = total_f7;
            this.estateInfo.total_f8 = total_f8;
            this.estateInfo.total_f9 = total_f9;
            this.estateInfo.total_f10 = total_f10;
            this.estateInfo.total_f11 = total_f11;
            this.estateInfo.total_f12 = total_f12;
            this.estateInfo.total_f13 = total_f13;
            this.estateInfo.total_f14 = total_f14;
            this.estateInfo.total_f15 = total_f15;
            this.estateInfo.total_f16 = total_f16;
        },
        async guardar() {
            alert("Saving");
            const addedDoc = await addDoc(sumatoriaoneColl, this.energia);
            console.log(addedDoc);
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

<style>
</style>