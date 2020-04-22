# application-map

## Configuration

URL accepts pragmas: 
#YYYY# #MM# #DD# 
#AREA#

var MAPSOURCE={
    title:"France",
    file:"maps/departments.geojson",
    center:[46.705, 1.5],
    zoom:6,
    codIndex:"code"
}


dataSources= [
    {
        url:"https://covid-ia-appdata.azurewebsites.net/api/v2/get/data/#YYYY#/#MM#/#DD#/00",
        intervals:{
            number:7,
            round:true,
            type:"percentile|normal"
        },
        areaField:"codice_provincia", //cod
        nameField:"reg_name",  //nom
        title:"Total Recoveries",
        description:"Total Recoveries since the beginning of the pandemy",
        field:"data.total.recoveries",
        color:"green",
        infoFormat:"daily", <-- format of the info per record
        graphs:["evolution","comparison","comparisonProx"]
    },
]

var GraphsDescription=[
    {
        id:"evolution",
        title:"Evolution",
        description:"Graph with evolution of all data for this department",
        type:"line",
        needSelectedArea:true,
        data:{
            url:"https://covid-ia-appdata.azurewebsites.net/api/v2/get/until?yyyy=#YYYY#&mm=#MM#&dd=#DD#&area=#AREA#",
            x:"date",
            y:["data.total.deaths","data.total.recoveries","data.total.critical","data.total.hospital"],
            titleX:"",
            titleSeries:["Deaths","Recoveries","Critical","Hospital"],
        }
    },
]

var InfoFormats=[
    {
        id:"daily",
        format:[
            {
                title:"Current situation",
                type:"section"
            },
            {
                title:"Current Critical",
                field:"data.current.critical",
                color:"red"
            },
...
        ]
]

var Simulations=[

]

### Libraries used:

Leaflet

Ploty

### Plugins used:

https://github.com/noerw/leaflet-sidebar-v2

Changed this to enable the use of PANE:
https://github.com/lit-forest/leaflet.migrationLayer 

### Icons from:

https://iconify.design/icon-sets/mdi/


## USER STORIES

### DONE
US1(MAP): As a user, I want to display in a simple map page application with all the departments 

US4(INFO): As a user, I want the official figures of the Covid-19 epidemic in a sidebar for each departement when I click on one departement (contaminated, death, …, tbd)

US2(SEARCH): As a user I want a search bar to find my departement of interest and I want the map to zoom on this location

US6(POI): As a user, I want to see hospitals and health facilities in the map for the selected departement

US7(MAPFLOW) : As a user, I want to analyze from where to where are moving people from a departement with the geoloc information,  inter department displacement

### TODO

- Finish Simulations

### TODO

US3: As a user, I want the demographic information in a sidebar for each departement when I click on one departement
Walid: (end of 21/4)
- DATA?
- HOW TO DISPLAY?
=> Just configuration, not expecting development

US5: As a user, I want the to see figures relative to the health system in a sidebar for each departement when I click on one departement (beds, ventilators,.., tbd)
Walid:(end of 21/4)
- DATA?
- HOW TO DISPLAY?
=> Just configuration, not expecting development

US8: As a user, I want to analyse the population motion from public transports data, intra department displacement
MOVEMENT
Angel
=> Just configuration MapFlow?

US9: As a user, I want to have information about facilities opened to the public and their affluence
POIs + INFO + GRAPH

US10: As a user, I want to have the information relative to cleaning water station with their position, their influence zone and possibly the Covid-19 water test results
---

US11: As a user, I want to grasp the public reaction by having a social listening panel by departement
DATASOURCE SOCIAL
