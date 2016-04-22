/**
 * Created by piotrek on 16.04.16.
 */

angular.module('myApp').factory('StudentFactory', function ($http) {
    return {
        getLoggedStudentInfo: function() {
            return $http.get('rest/student/');
            /*var obj = '{'
                +'"title" : "Technologia i charakteryzacja struktur MISFET z dielektrykami bramkowymi w postaci ultra-cienkich warstw dielektrycznych wytwarzanych metodą PECVD",'
                +'"details"  : "Praca dotyczy opracowania technologii wytwarzania ultra-cienkich (do 10 nm) warstw dielektrycznych za pomocą metody PECVD. Głównym celem pracy będzie optymalizacja technologii warstw dielektrycznych, np. tlenku krzemu (SiO2), tlenko-azotku krzemu (SiOxNy) czy azotku krzemu (Si3N4), o jak najlepszych właściwościach elektro-fizycznych. Wykonane dielektryki zostaną zastosowane jako dielektryki bramkowe w strukturach testowych MIS (kondensatory i tranzystory MOS/MIS), które zostaną poddane charakteryzacji elektrycznej (pomiary charakterystyk pojemnościowo-napięciowych (C-V) oraz prądowo-napięciowych (I-V). Dokonane zostaną także próby korelacji właściwości elektrycznych i strukturalnych warstw wykonanych metodą PECVD",'
                +'"tools" : "sprzęt technologiczno-pomiarowy znajdujący się w laboratoriach IMiO PW (m.in. w clean-roomie)"'
                +'}';*/
            //return obj;
            /*return "{ id: 1, title: \"AAaaa\", details: \"xxxxxxxxxxxxxxxxxxxxxxxxx\", tools: \"iiiiii\", supervisor: null }";*/
        }
    }

});