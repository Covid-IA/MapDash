// todo rework this to be in common with covid-ia.json, keeping js format for now because it's easier to copy similar structures
var simForecastGraphVisualisationTraces = [
    {
        getField: res => res.data.deceased,
        plotlyConf: {
            name: "deceased",
            mode: "lines",
            line: {
                color: "#ff0000"
            }
        },
    },
    {
        getField: res => res.data.reanimation,
        plotlyConf: {
            name: "reanimation",
            mode: "lines",
            line: {
                color: "#ff6600"
            }
        },
    },
    {
        getField: res => res.data.withoutReanimation,
        plotlyConf: {
            name: "contagious",
            mode: "lines",
            line: {
                color: "#f7ff00"
            }
        },
    },
    {
        getField: res => res.data.infectious,
        plotlyConf: {
            name: "infectious",
            mode: "lines",
            line: {
                color: "#77ff00"
            }
        },
    },
    {
        getField: res => res.data.exposed,
        plotlyConf: {
            name: "exposed",
            mode: "lines",
            line: {
                color: "#00ffea"
            }
        },
    },
    {
        getField: res => res.data.susceptible,
        plotlyConf: {
            name: "susceptible",
            mode: "lines",
            line: {
                color: "#00aeff"
            }
        },
    },
    {
        getField: res => res.data.recovered,
        plotlyConf: {
            name: "recovered",
            mode: "lines",
            line: {
                color: "#00ff22"
            }
        },
    },
];

var Simulations = [
    {
        title: "Forecast",
        description: "Department epidemic temporal analysis",
        color: "darkblue",
        fields: [],
        url: "/api/v2/simu",
        results: null,
        visualisations: [
            {
                type: "chart",
                id: "combined-evolution",
                title: "Overview graph",
                description: "combined line graph of all data",
                x: {
                    getField: res => res.date,
                },
                y: simForecastGraphVisualisationTraces
            },
            {
                type: "chart",
                id: "icu-evolution-graph",
                title: "Stacked",
                description: "Stacked area of % of pop in each state",
                x: {
                    getField: res => res.date,
                },
                y: simForecastGraphVisualisationTraces.map(trace => ({...trace, plotlyConf: {...trace.plotlyConf, stackgroup: "one"}}))
            }
        ]
    }
];
