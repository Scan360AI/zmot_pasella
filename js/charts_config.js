/**
 * SCAN - Strategic Corporate Analysis Navigator
 * Configurazione Dati e Opzioni per Grafici Chart.js
 * Versione 1.2 - DATI CALCIDRATA SPA (DA REPORT LEANUS/KITZANOS)
 *
 * Dati aggiornati sulla base dei file .md forniti per CALCIDRATA SPA al 12/2024.
 * Eventuali dati mancanti o che richiedono normalizzazione specifica sono lasciati come esempio o commentati.
 */

// ======================================
// FUNZIONI PER RECUPERARE I DATI SPECIFICI
// ======================================

// --- Dati per Dashboard Esecutiva (dashboard.html) ---
function getTrendRicaviEbitdaData_Dashboard() {
    // console.log("Fornitura dati per trendRicaviEbitdaChart (Dashboard) - CALCIDRATA SPA");
    // Fonte: PARTE2_calcidrata-analisi-economica.md (2.1.1, 2.1.2), PARTE1 (1.1), PARTE4 (4.1)
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
             {
                 label: "Ricavi (€)",
                 data: [14019070, 13547319, 13427994], // Valori assoluti
                 borderColor: 'rgb(25, 25, 112)',
                 backgroundColor: 'rgba(25, 25, 112, 0.1)',
                 type: 'line', tension: 0.1, yAxisID: 'y', fill: true, pointRadius: 3,
             },
             {
                 label: "EBITDA (€)",
                 data: [3510225, 3019319, 2866018], // Valori assoluti
                 borderColor: 'rgb(77, 140, 87)',
                 backgroundColor: 'rgba(77, 140, 87, 0.7)',
                 type: 'bar', yAxisID: 'y', barPercentage: 0.6, categoryPercentage: 0.7
             },
              {
                  label: "EBITDA Margin (%)",
                  data: [25.0, 22.3, 21.34], // Percentuale (usato 21.34 da Parte4/Parte1 per coerenza)
                  borderColor: 'rgb(217, 140, 0)',
                  backgroundColor: 'transparent',
                  type: 'line', tension: 0.1, yAxisID: 'y1', fill: false, borderDash: [5, 5], pointRadius: 3
              }
        ]
    };
}

function getTrendPfnEbitdaData_Dashboard() {
    // console.log("Fornitura dati per trendPfnEbitdaChart (Dashboard) - CALCIDRATA SPA");
    // Fonte: PARTE1_analisi-parte1.md (1.1), PARTE4_bancabilita-report.md (4.2.1 / 4.5.1)
    return {
         labels: ["2022", "2023", "2024"],
         datasets: [
             {
                 label: "PFN/EBITDA",
                 data: [0.22, 0.16, 0.26], // Valori del rapporto
                 borderColor: 'rgb(214, 34, 70)',
                 backgroundColor: 'rgba(214, 34, 70, 0.2)',
                 tension: 0.1, fill: true, pointRadius: 5, pointHoverRadius: 7,
                 pointBackgroundColor: 'rgb(214, 34, 70)'
             },
              {
                 label: 'Soglia Attenzione (<3x)',
                 data: [3, 3, 3], // Linea target (mantenuta)
                 borderColor: 'rgb(255, 193, 7)',
                 borderDash: [5, 5], fill: false, pointRadius: 0, borderWidth: 2,
             }
         ]
     };
}

// --- Dati per Report Dettagliati (report/parteX_*.html) ---

// Dati Parte 1
function getMainMetricsData() {
    // console.log("Fornitura dati per mainMetricsChart (Report Parte 1) - CALCIDRATA SPA");
    // Fonte: PARTE1_analisi-parte1.md (1.1 Sintesi)
     return {
         labels: ["2022", "2023", "2024"], // Rimosso previsionale
         datasets: [
             // Dati arrotondati in migliaia
             { label: "Ricavi (€000)", data: [14019, 13547, 13428], backgroundColor: "rgba(25, 25, 112, 0.7)" },
             { label: "EBITDA (€000)", data: [3510, 3019, 2866], backgroundColor: "rgba(77, 140, 87, 0.7)" },
             { label: "Patrimonio Netto (€000)", data: [7414, 8340, 9180], backgroundColor: "rgba(217, 140, 0, 0.7)" }
         ]
     };
}
function getCurrentAssetsLiabilitiesData() {
    // console.log("Fornitura dati per currentAssetsLiabilitiesChart (Report Parte 1) - CALCIDRATA SPA");
    // Fonte: PARTE3_analisi-patrimoniale.md (3.1)
     return {
         labels: ["2023", "2024"],
         datasets: [
             { label: "Attivo Corrente", data: [5236700, 4944631], backgroundColor: "rgba(25, 25, 112, 0.7)" },
             { label: "Passivo Corrente", data: [3664693, 3564850], backgroundColor: "rgba(214, 34, 70, 0.7)" },
             { label: "Capitale Circolante Netto", data: [1572007, 1379781], backgroundColor: "rgba(77, 140, 87, 0.7)" } // Calcolato: AC - PC
         ]
     };
}

// Dati Parte 2
function getEconomicTrendData() {
    // console.log("Fornitura dati per economicTrendChart (Report Parte 2) - CALCIDRATA SPA");
    // Uguale a getTrendRicaviEbitdaData_Dashboard ma usa valori in €000 per coerenza con altre tabelle
    const dataAbs = getTrendRicaviEbitdaData_Dashboard(); // Prende i dati aggiornati
    dataAbs.datasets[0].data = dataAbs.datasets[0].data.map(v => v ? Math.round(v / 1000) : null); // Ricavi in K (arrotondati)
    dataAbs.datasets[1].data = dataAbs.datasets[1].data.map(v => v ? Math.round(v / 1000) : null); // EBITDA in K (arrotondati)
    dataAbs.datasets[0].label = "Ricavi (€000)";
    dataAbs.datasets[1].label = "EBITDA (€000)";
    return dataAbs;
}
function getMarginalityData() {
    // console.log("Fornitura dati per marginalityChart (Report Parte 2) - CALCIDRATA SPA");
    // Fonte: PARTE2_calcidrata-analisi-economica.md (2.1.1, 2.1.2)
     return {
         labels: ["2022", "2023", "2024"],
         datasets: [
            // Valori percentuali dai MD
            { label: "Valore Aggiunto %", data: [55.8, 56.1, 58.5], borderColor: "rgba(25, 25, 112, 1)", fill: false },
            { label: "Margine di Contribuzione %", data: [33.1, 30.8, 30.7], borderColor: "rgba(42, 58, 128, 1)", fill: false },
            { label: "EBITDA %", data: [25.0, 22.3, 21.3], borderColor: "rgba(77, 140, 87, 1)", fill: false }, // Usato 21.3 da Tabella 2.1.2
            { label: "EBIT %", data: [18.4, 16.1, 15.3], borderColor: "rgba(217, 140, 0, 1)", fill: false } // Calcolato da EBIT/Ricavi in 2.1.1
         ]
     };
}
function getProfitabilityIndicesData() {
    // console.log("Fornitura dati per profitabilityIndicesChart (Report Parte 2) - CALCIDRATA SPA");
    // Fonte: PARTE2_calcidrata-analisi-economica.md (2.1.4)
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
            { label: "ROE %", data: [18.44, 14.66, 12.39], borderColor: "rgba(25, 25, 112, 1)", backgroundColor: "rgba(25, 25, 112, 0.2)", fill: true},
            { label: "ROI %", data: [24.92, 23.84, 20.51], borderColor: "rgba(77, 140, 87, 1)", backgroundColor: "rgba(77, 140, 87, 0.2)", fill: true},
            { label: "ROS %", data: [10.7, 11.0, 15.15], borderColor: "rgba(217, 140, 0, 1)", backgroundColor: "rgba(217, 140, 0, 0.2)", fill: true} // ROS da tabella 2.1.4
        ]
    };
}
function getLeverageData() {
     // console.log("Fornitura dati per leverageChart (Report Parte 2) - CALCIDRATA SPA");
     // Fonte: PARTE2_calcidrata-analisi-economica.md (2.1.4)
     return {
         labels: ["2023", "2024"],
         datasets: [
             { label: "ROI (%)", data: [23.84, 20.51], backgroundColor: "rgba(25, 25, 112, 0.7)"},
             { label: "ROE (%)", data: [14.66, 12.39], backgroundColor: "rgba(77, 140, 87, 0.7)"}
         ]
     };
}
function getBenchmarkRadarData() {
    // console.log("Fornitura dati per benchmarkRadarChart (Report Parte 2) - CALCIDRATA SPA");
    // --- DATI ESEMPIO - I DATI REALI NORMALIZZATI NON SONO PRESENTI NEI FILE MD ---
    // È necessario calcolare questi valori normalizzati sulla base di dati di benchmark reali.
    return {
        labels: ["Crescita Ricavi", "EBITDA Margin", "ROI", "Turnover", "Costo Personale (inv)", "PFN/EBITDA (inv)", "D/E (inv)"],
        datasets: [
            {
                label: "CALCIDRATA SPA (Esempio)", // Valori > 100 = Migliore della media
                data: [95, 180, 200, 110, 140, 190, 185], // ESEMPIO NORMALIZZATO DA SOSTITUIRE
                backgroundColor: "rgba(25, 25, 112, 0.3)", borderColor: "rgba(25, 25, 112, 1)", borderWidth: 2, pointBackgroundColor: "rgba(25, 25, 112, 1)"
            },
            {
                label: "Media Settore (Esempio)", // Base 100
                data: [100, 100, 100, 100, 100, 100, 100], // ESEMPIO DA SOSTITUIRE CON BENCHMARK REALE
                backgroundColor: "rgba(217, 140, 0, 0.3)", borderColor: "rgba(217, 140, 0, 1)", borderWidth: 2, pointBackgroundColor: "rgba(217, 140, 0, 1)"
            }
        ]
    };
}

// Dati Parte 3
function getAssetsData() {
    // console.log("Fornitura dati per assetsChart (Report Parte 3) - CALCIDRATA SPA");
    // Fonte: PARTE3_analisi-patrimoniale.md (3.1, 3.2 - dati 2024)
    const originalData = [5489986, 4451671, 15593, 1297364, 2302104, 619281]; // Imm.Mat, Imm.Fin, Imm.Imm, Riman., Cred.Clienti, Liquidità
    const total = originalData.reduce((a, b) => a + b, 0);
    return {
        labels: ["Immob. Materiali", "Immob. Finanziarie", "Immob. Immateriali", "Magazzino", "Crediti Comm.", "Liquidità"],
        _originalData: originalData, // Valori originali per tooltip
        datasets: [ {
             data: originalData.map(v => total > 0 ? (v/total)*100 : 0), // Dati %
             backgroundColor: ["#191970", "#4a69bd", "#F44336", "#FFC107", "#4CAF50", "#6c757d"] // Palette definita
         } ]
    };
}
function getLiabilitiesData() {
    // console.log("Fornitura dati per liabilitiesChart (Report Parte 3) - CALCIDRATA SPA");
    // Fonte: PARTE3_analisi-patrimoniale.md (3.1, 3.3 - dati 2024)
    const originalData = [9179864, 1134894, 220030, 2437166, 1127684]; // PN, Debt Fin MLT, Debt Fin BT, Debt Comm., Altri Debiti
    const total = originalData.reduce((a, b) => a + b, 0);
     return {
         labels: ["Patrimonio Netto", "Debiti Fin. MLT", "Debiti Fin. BT", "Debiti Comm.", "Altri Debiti"],
         _originalData: originalData,
         datasets: [ {
             data: originalData.map(v => total > 0 ? (v/total)*100 : 0), // Dati %
             backgroundColor: ["#191970", "#4CAF50", "#FFC107", "#4a69bd", "#6c757d"] // Palette coerente
        } ]
     };
}
function getInvestmentsStructureData() {
    // console.log("Fornitura dati per investmentsStructureChart (Report Parte 3) - CALCIDRATA SPA");
    // Fonte: PARTE3_analisi-patrimoniale.md (3.1, 3.2)
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
             // Dati assoluti
             { label: "Immobilizzazioni", data: [9147182, 9141938, 9957250], backgroundColor: "rgba(25, 25, 112, 0.7)", stack: "Stack 0" },
             { label: "Crediti commerciali", data: [2641890, 2485272, 2302104], backgroundColor: "rgba(77, 140, 87, 0.7)", stack: "Stack 0" },
             { label: "Rimanenze", data: [1026336, 810659, 1297364], backgroundColor: "rgba(217, 140, 0, 0.7)", stack: "Stack 0" },
             { label: "Liquidità", data: [973620, 1073974, 619281], backgroundColor: "rgba(79, 109, 122, 0.7)", stack: "Stack 0" }
        ]
    };
}
function getEquityCompositionData() {
    // console.log("Fornitura dati per equityCompositionChart (Report Parte 3) - CALCIDRATA SPA");
    // Fonte: PARTE3_analisi-patrimoniale.md (3.3 - dati 2024)
    // Nota: MD aggrega "Utile Esercizio e utili precedenti". Si assume Utili a Nuovo=0 e Utile Esercizio=1136949 (valore 2024)
    const originalData = [774000, 7268915, 1136949, 0]; // Capitale Sociale, Riserve (che includono utili prec.), Utile Esercizio 2024, Utili a Nuovo (assunto 0)
    const total = originalData.reduce((a, b) => a + b, 0); // Should match 9179864
     return {
         labels: ["Capitale Sociale", "Riserve", "Utile Esercizio", "Utili a Nuovo (approx)"],
         _originalData: originalData,
         datasets: [ {
             data: originalData.map(v => total > 0 ? (v/total)*100 : 0), // Dati %
             backgroundColor: ["#191970", "#4CAF50", "#FFC107", "#4a69bd"]
        } ]
     };
}
function getFinancialDebtSourcesData() { // Rinominato da getFinancialDebtData per evitare conflitti
    // console.log("Fornitura dati per financialDebtSourcesChart (Report Parte 3) - CALCIDRATA SPA");
    // Fonte: PARTE3_analisi-patrimoniale.md (3.1, 3.3 - dati 2024)
    const originalData = [9179864, 1134894, 220030]; // PN, Debt Fin MLT, Debt Fin BT
    const total = originalData.reduce((a, b) => a + b, 0);
    return {
        labels: ["Patrimonio Netto", "Debiti Fin. MLT", "Debiti Fin. BT"],
        _originalData: originalData,
        datasets: [{
            data: originalData.map(v => total > 0 ? (v / total) * 100 : 0), // Dati %
            backgroundColor: ["#191970", "#4CAF50", "#FFC107"]
        }]
    };
}
function getPfnTrendData() {
    // console.log("Fornitura dati per pfnTrendChart (Report Parte 3) - CALCIDRATA SPA");
    // Fonte: PARTE3_analisi-patrimoniale.md (3.4)
    return {
         labels: ["2022", "2023", "2024"],
         datasets: [
             { label: "Debiti Finanziari Tot.", data: [1746999, 1562413, 1354924], type: "bar", backgroundColor: "rgba(214, 34, 70, 0.7)", yAxisID: 'y' },
             { label: "Liquidità", data: [973620, 1073974, 619281], type: "bar", backgroundColor: "rgba(77, 140, 87, 0.7)", yAxisID: 'y'},
             { label: "PFN", data: [773379, 488439, 735643], type: "line", borderColor: "rgba(25, 25, 112, 1)", fill: false, yAxisID: 'y' }
         ]
     };
}

// Dati Parte 4
function getDebtSustainabilityData() {
    // console.log("Fornitura dati per debtSustainabilityChart (Report Parte 4) - CALCIDRATA SPA");
     // --- DATI ESEMPIO - I DATI REALI NORMALIZZATI NON SONO PRESENTI NEI FILE MD ---
     // È necessario calcolare questi valori normalizzati sulla base di dati reali e benchmark.
     return {
         labels: ["PFN/EBITDA (inv)", "D/E (inv)", "DSCR", "Oneri Fin./Ricavi (inv)", "Cash Flow Op./Ricavi", "Leanus Score"], // Invertiti D/E e OF/Ricavi
         datasets: [
             { label: "CALCIDRATA SPA (Esempio)", data: [90, 95, 85, 90, 70, 69], backgroundColor: "rgba(25, 25, 112, 0.2)", borderColor: "rgba(25, 25, 112, 1)" }, // Esempio > 100 = Migliore
             { label: "Target/Benchmark (Esempio)", data: [67, 83, 60, 90, 50, 75], backgroundColor: "rgba(77, 140, 87, 0.2)", borderColor: "rgba(77, 140, 87, 1)" } // Esempio
         ]
     };
}
function getDebtCostData() { // Grafico Capacità Indebitamento
    // console.log("Fornitura dati per debtCostChart (Report Parte 4) - CALCIDRATA SPA");
    // Fonte: PARTE2_calcidrata-analisi-economica.md (2.1.1)
    return {
         labels: ["2022", "2023", "2024"],
         datasets: [
             // Dati arrotondati in migliaia
             { label: "EBITDA (€000)", data: [3510, 3019, 2866], type: "bar", yAxisID: "y", backgroundColor: "rgba(77, 140, 87, 0.7)" },
             { label: "Capacità Teorica Indeb. (3x EBITDA, €000)", data: [10530, 9057, 8598], type: "line", yAxisID: "y", borderColor: "rgba(25, 25, 112, 1)", fill: false } // Calcolato: EBITDA * 3
         ]
     };
}

// Dati Parte 5
function getWorkingCapitalCycleData() {
    // console.log("Fornitura dati per workingCapitalCycleChart (Report Parte 5) - CALCIDRATA SPA");
    // Fonte: PARTE5_analisi-circolante-flussi.md (5.1.1, 5.1.2, 5.1.3, 5.1.4)
    return {
        labels: ["Crediti Clienti (DSO)", "Magazzino (DIO)", "Debiti Fornitori (DPO)", "Ciclo Circolante"],
        datasets: [
            // Dati 2024 per CALCIDRATA, Benchmark da 5.1.3 / 5.1.4
            { label: "CALCIDRATA SPA (Giorni)", data: [62, 84, 89, 57], backgroundColor: "rgba(25, 25, 112, 0.7)" },
            { label: "Benchmark Settore (Giorni)", data: [65, 70, 95, 40], backgroundColor: "rgba(77, 140, 87, 0.7)" } // Benchmark DSO=65, DIO=70, DPO=95 -> Ciclo=40
        ]
    };
}
function getCashFlowWaterfallData() {
    // console.log("Fornitura dati per cashFlowWaterfallChart (Report Parte 5) - CALCIDRATA SPA");
    // Implementazione con barre semplici per rappresentare la cascata
    // Fonte: PARTE5_analisi-circolante-flussi.md (5.2.1, 5.2.2 - dati 2024)
    // Calcolo: EBITDA(2866018) - Imposte(411492) + DeltaCirc(-809692) = CFO(1644834) - Invest(1595041) = FCF(49793) + DeltaDebt(-207489) - Dividendi(296997) = DeltaCassa(-454693)
     return {
         labels: ["EBITDA", "Imposte", "+Δ Circ.", "=CF Op.", "-Invest.", "=FCF", "+Δ Debt", "-Divid.", "=Δ Cassa"],
         datasets: [{
             data: [2866018, -411492, -809692, 1644834, -1595041, 49793, -207489, -296997, -454693],
             backgroundColor: [ // Colori significativi
                 '#4CAF50', // EBITDA
                 '#F44336', // Imposte (-)
                 '#F44336', // Delta Circ. (-) in questo caso
                 '#2E8B57', // CF Op (=)
                 '#F44336', // Investimenti (-)
                 '#2E8B57', // FCF (=)
                 '#F44336', // Delta Debt (-)
                 '#FFC107', // Dividendi (-) - Warning color
                 '#F44336'  // Delta Cassa (=) - Negative color
             ]
         }]
     };
}
function getCashFlowTrendData() {
    // console.log("Fornitura dati per cashFlowTrendChart (Report Parte 5) - CALCIDRATA SPA");
    // Fonte: PARTE5_analisi-circolante-flussi.md (5.2.2)
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
            { label: "Cash Flow Operativo", data: [3139648, 1366718, 1644834], borderColor: "rgba(77, 140, 87, 1)", fill: true, backgroundColor: "rgba(77, 140, 87, 0.1)"},
            { label: "Cash Flow Investimenti", data: [-4282889, -784773, -1595041], borderColor: "rgba(214, 34, 70, 1)", fill: true, backgroundColor: "rgba(214, 34, 70, 0.1)" },
            { label: "Variazione Netta di Cassa", data: [259906, 100354, -454693], borderColor: "rgba(25, 25, 112, 1)", fill: true, backgroundColor: "rgba(25, 25, 112, 0.1)" }
        ]
    };
}
function getCashFlowProjectionData() {
    // console.log("Fornitura dati per cashFlowProjectionChart (Report Parte 5) - CALCIDRATA SPA");
    // Fonte: PARTE5_analisi-circolante-flussi.md (5.2.1, 5.2.2, 5.2.3)
    return {
        labels: ["2024", "2025E", "2026E", "2027E", "2028E"],
        datasets: [
            // Dati 2024 reali + Proiezioni
            { label: "Cash Flow Operativo", data: [1644834, 1882715, 2016468, 2025777, 2031982], type: 'bar', backgroundColor: "rgba(79, 109, 122, 0.7)", yAxisID: 'y' },
            // Usato CF Finanziamento come proxy Var Debiti (dato che no dividendi/equity previsti)
            { label: "Variazione Debiti Fin. (Proj: CF Fin)", data: [-207489, -378298, -252199, -168132, -112088], type: 'bar', backgroundColor: "rgba(214, 34, 70, 0.7)", yAxisID: 'y' },
            { label: "Liquidità Finale", data: [619281, 2123698, 3887968, 5745612, 7665506], type: 'line', borderColor: "rgba(77, 140, 87, 1)", fill: false, yAxisID: 'y1' }
        ]
    };
}

// Dati Parte 6
function getZscoreData() {
    // console.log("Fornitura dati per zscoreChart (Report Parte 6) - CALCIDRATA SPA");
    // Fonte: PARTE6_analisi-rischi-raccomandazioni.md (6.2)
    // Nota: MD fornisce solo Z-Score 2024 (4.07). Dati 2022 e 2023 sono mantenuti come esempio.
    return {
        labels: ["2022 (Ex.)", "2023 (Ex.)", "2024"],
        datasets: [
            { label: "Z-Score", data: [2.7, 2.9, 4.07], borderColor: "rgba(25, 25, 112, 1)", fill: false }, // Dati 2022, 2023 da verificare/calcolare
            { label: "Soglia Sicurezza", data: [2.99, 2.99, 2.99], borderColor: "rgba(77, 140, 87, 1)", borderDash: [5, 5], fill: false, pointRadius: 0 },
            { label: "Soglia Rischio", data: [1.81, 1.81, 1.81], borderColor: "rgba(214, 34, 70, 1)", borderDash: [5, 5], fill: false, pointRadius: 0 }
        ]
    };
}
function getRiskIndicatorsData() {
     // console.log("Fornitura dati per riskIndicatorsChart (Report Parte 6) - CALCIDRATA SPA");
     // --- DATI ESEMPIO - I DATI REALI NORMALIZZATI NON SONO PRESENTI NEI FILE MD ---
     // È necessario calcolare questi valori normalizzati sulla base di dati reali e benchmark.
    return {
        labels: ["ROI", "ROS", "D/E (inv)", "Cop. Immob.", "DSO (inv)", "DPO (inv)"], // Giorni invertiti
        datasets: [{
             label: "CALCIDRATA SPA (Esempio)",
             data: [130, 120, 95, 90, 110, 95], // Esempio normalizzato DA SOSTITUIRE
             backgroundColor: "rgba(136, 141, 194, 0.5)", borderColor: "rgba(97, 103, 173, 1)", borderWidth: 2
            }, {
             label: "Target/Benchmark (Esempio)",
             data: [100, 100, 67, 100, 67, 75], // Benchmark normalizzato Esempio
             backgroundColor: "rgba(145, 190, 145, 0.4)", borderColor: "rgba(103, 167, 103, 1)", borderWidth: 2
        }]
    };
}
function getSensitivityData() {
    // console.log("Fornitura dati per sensitivityChart (Report Parte 6) - CALCIDRATA SPA");
    // Fonte: PARTE6_analisi-rischi-raccomandazioni.md (6.5)
     return {
         labels: ["Ricavi (%)", "Costi Fissi (%)", "Crediti Clienti (gg)", "Debiti Fornitori (gg)"],
         datasets: [{
             label: "Variazione Critica",
             data: [-49.29, 161.34, 17, -22], // Valori da Tabella 6.5.1
             backgroundColor: ["#F44336", "#4CAF50", "#F44336", "#F44336"] // Colori per impatto (negativo/positivo/negativo/negativo)
         }]
     };
}


// ======================================
// OPZIONI COMUNI PER I GRAFICI (INVARIATE)
// ======================================
// --- Utility di formattazione ---
function formatCurrency(value, decimals = 0) {
    if (value === null || value === undefined || isNaN(value)) return 'N/D';
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value);
}

function formatPercentage(value, decimals = 1) {
    if (value === null || value === undefined || isNaN(value)) return 'N/D';
    return value.toFixed(decimals) + '%';
}

const commonChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: { boxWidth: 12, padding: 15, font: { size: 11 } }
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleFont: { weight: 'bold', size: 13 },
            bodyFont: { size: 12 },
            padding: 10,
            cornerRadius: 4,
            displayColors: true,
            boxPadding: 4,
            callbacks: { // Callback di default migliorato
                 label: function(context) {
                     let label = context.dataset.label || context.label || '';
                     if (label) label += ': ';
                     let value = context.parsed.y;
                      if (value === null || value === undefined) value = context.parsed.r; // Per radar

                     if (value !== null && value !== undefined) {
                         const axisID = context.dataset.yAxisID;
                         const labelText = context.label || ''; // Assicurati che labelText sia una stringa
                         const datasetLabel = context.dataset.label || ''; // Assicurati che datasetLabel sia una stringa

                          if (datasetLabel.includes('%') || (axisID === 'y1' && context.chart.options.scales?.y1?.title?.text.includes('%'))) {
                             label += formatPercentage(value);
                          } else if (datasetLabel.includes('(Giorni)') || labelText.includes('(gg)')) {
                             label += value.toFixed(0) + ' gg';
                          } else if (datasetLabel.includes('(x)') || labelText.includes('(x)') || datasetLabel.includes('PFN/EBITDA') || datasetLabel.includes('D/E') || datasetLabel.includes('Z-Score')) {
                             label += value.toFixed(2) + (datasetLabel.includes('Z-Score') ? '' : 'x');
                          } else if (datasetLabel.includes('Score') && !datasetLabel.includes('Z-Score')) {
                              label += value.toFixed(2);
                          } else if (datasetLabel.includes('Variazione Critica')) { // Per grafico sensitività
                               label += value.toFixed(2) + (labelText.includes('(gg)') ? ' gg' : '%');
                          }
                          else if (Math.abs(value) >= 1000000) {
                             label += formatCurrency(value / 1000000, 2) + ' M';
                         } else if (Math.abs(value) >= 1000) {
                             label += formatCurrency(value / 1000, 0) + ' K'; // Mostra K€ per valori >= 1000
                         } else if (Math.abs(value) < 1 && value !== 0) {
                             label += formatCurrency(value, 2); // Decimali per valori < 1
                         }
                         else {
                              label += formatCurrency(value, 0); // Valori assoluti < 1000 senza decimali
                         }
                     } else {
                         label += 'N/D';
                     }
                     return label;
                 }
             }
        }
    },
    scales: {
        x: {
            grid: { display: false },
            ticks: { font: { size: 11 } }
        },
        y: {
            grid: { color: '#e0e0e0', borderDash: [2, 3] },
            ticks: {
                font: { size: 11 },
                // Formattazione assi Y per K€ o M€
                 callback: function(value, index, ticks) {
                      if (Math.abs(value) >= 1000000) {
                          return (value / 1000000) + ' M';
                      } else if (Math.abs(value) >= 1000) {
                          return (value / 1000) + ' K';
                      } else if (Math.abs(value) < 10 && value !== 0) {
                           return value.toFixed(2); // Decimali per valori piccoli (es. rapporti)
                      } else if (Number.isInteger(value)) {
                          return value.toFixed(0); // Interi senza decimali
                      }
                      return value; // Default
                  }
            }
        },
        // Eventuale asse Y1 per percentuali o altri indici
        y1: {
            position: 'right',
            grid: { display: false }, // Nasconde griglia asse dx
            ticks: {
                 font: { size: 11 },
                 callback: function(value, index, ticks) {
                     // Esempio: Formattazione % per asse Y1
                     // if (context.chart.options.scales.y1.title.text.includes('%')) {
                         return value.toFixed(1) + '%';
                     // }
                     // return value.toFixed(1) + 'x'; // O altra unità
                 }
            }
        }
    },
    animation: { duration: 400 }
};

// Opzioni specifiche per grafici a torta/ciambella
const pieChartOptions = {
    ...commonChartOptions,
    cutout: '0%',
     plugins: {
         ...commonChartOptions.plugins,
        tooltip: {
             ...commonChartOptions.plugins.tooltip,
            callbacks: { // Callback specifico per Torta/Ciambella
                label: function(context) {
                    const label = context.label || '';
                    const value = context.raw || 0; // Usa valore raw (percentuale)
                    // Cerca il valore originale corrispondente
                    const originalValue = context.dataset._originalData && context.dataset._originalData.length > context.dataIndex
                                          ? context.dataset._originalData[context.dataIndex]
                                          : value; // Fallback se _originalData non è definito o non ha l'indice
                    const percentage = formatPercentage(value); // Formatta la percentuale
                    // Formatta il valore originale in K€ o M€ se necessario
                    let formattedOriginalValue;
                    if (Math.abs(originalValue) >= 1000000) {
                        formattedOriginalValue = formatCurrency(originalValue / 1000000, 2) + ' M';
                    } else if (Math.abs(originalValue) >= 1000) {
                         formattedOriginalValue = formatCurrency(originalValue / 1000, 0) + ' K';
                    } else {
                         formattedOriginalValue = formatCurrency(originalValue, 0);
                    }
                    return `${label}: ${formattedOriginalValue} (${percentage})`;
                }
            }
        }
     },
     scales: undefined // Rimuove gli assi per grafici a torta
};
const doughnutChartOptions = { ...pieChartOptions, cutout: '50%' };

// Opzioni specifiche per grafici radar
const radarChartOptions = {
     ...commonChartOptions,
      scales: {
         r: {
             angleLines: { color: '#e0e0e0' },
             grid: { color: '#e0e0e0' },
             pointLabels: { font: { size: 10 } },
             ticks: {
                 backdropColor: 'rgba(255, 255, 255, 0.75)',
                 font: { size: 9 },
                 maxTicksLimit: 5,
                 // callback: function(value) { return value + '%'; } // Esempio se scala è %
             },
             suggestedMin: 0,
             // suggestedMax: 150 // Adattare se necessario per i dati normalizzati
         }
      },
      plugins: {
          ...commonChartOptions.plugins,
          tooltip: {
              ...commonChartOptions.plugins.tooltip,
               callbacks: {
                   label: function(context) {
                       let label = context.dataset.label || '';
                       if (label) label += ': ';
                       if (context.parsed.r !== null) {
                          label += context.parsed.r.toFixed(1); // Valore asse radiale
                       }
                       return label;
                   }
               }
          }
      }
};

console.log("charts_config.js caricato e aggiornato con dati CALCIDRATA SPA (dove disponibili).");