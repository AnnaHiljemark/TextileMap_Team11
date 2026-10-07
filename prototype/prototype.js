/* =========================================================
   TEXTILEMAP PROTOTYPE
   Vanilla JavaScript port of the team's original prototype
========================================================= */


/* =========================================================
   SUPPLIER DATA
========================================================= */

const suppliers = [
  {
    id: "tr",
    name: "İzmir Organic Textile A.Ş.",
    country: "Turkey",
    type: "manufacturing",
    coords: [27.14, 38.42],

    score: 82,

    co2: "18,900 t/yr",
    water: "94 ML/yr",
    renewable: "55%",
    labor: "88/100",

    employees: "3,800",
    annualVolume: "6,000 t/yr",

    supplyRisk: "Low",
    costOutlook: "Stable",

    certs: [
      "GOTS",
      "Fair Trade",
      "EU Ecolabel",
      "OEKO-TEX 100"
    ],

    note:
      "IKEA's highest-scoring textile supplier. Operates closed-loop water recycling systems and sources 55% of energy from onsite wind turbines and rooftop solar arrays.",

    materials: [
      {
        name: "Organic cotton",
        origin: "Aegean region, TR",
        pct: 60
      },
      {
        name: "Linen / flax",
        origin: "Northern France",
        pct: 28
      },
      {
        name: "Natural dyes",
        origin: "Local botanical sources",
        pct: 12
      }
    ],

    ikeaProducts: [
      "KUNGSBLOMMA bedlinen",
      "LUKTJASMIN pillow covers",
      "ÅKERNEJLIKA throw"
    ],

    process: [
      {
        step: "Fibre sourcing",
        description:
          "Certified organic cotton grown without synthetic pesticides within 200 km of the mill. Flax imported from French retting farms under BCI contracts.",
        co2Share: "12%"
      },
      {
        step: "Spinning & weaving",
        description:
          "Ring-spinning produces 40s–80s count yarns. Air-jet looms run 22 hrs/day on wind power. Grey fabric inspected to EN ISO 13934.",
        co2Share: "18%"
      },
      {
        step: "Wet processing",
        description:
          "Low-temperature reactive dyeing at 40°C using GOTS-certified dyes. Closed-loop water circuit recovers 88% of process water. Zero discharge achieved since 2021.",
        co2Share: "24%"
      },
      {
        step: "Finishing",
        description:
          "Mechanical softening only — no chemical fabric softeners. Calendering and preshrinking to IKEA dimensional tolerance spec ±1%.",
        co2Share: "11%"
      },
      {
        step: "QA & packing",
        description:
          "100% thread-count and colorfastness testing per IKEA IOS specification. Packaging uses 100% recycled cardboard with soy-based inks.",
        co2Share: "8%"
      }
    ],

    challenges: [
      "Flax import adds transport emissions",
      "Seasonal wind variability requires grid backup"
    ],

    improvements: [
      "Battery storage for wind surplus by Q3 2025",
      "Flax retting trial locally in Thrace region"
    ]
  },


  {
    id: "in",
    name: "Gujarat Spinners Co-operative",
    country: "India",
    type: "raw",
    coords: [72.57, 23.02],

    score: 74,

    co2: "22,100 t/yr",
    water: "198 ML/yr",
    renewable: "34%",
    labor: "81/100",

    employees: "8,700",
    annualVolume: "24,000 t/yr",

    supplyRisk: "Medium",
    costOutlook: "Watch",

    certs: [
      "BCI",
      "GOTS",
      "Fair Trade",
      "OEKO-TEX 100"
    ],

    note:
      "Primary cotton sourcing partner under Better Cotton Initiative. Solar panels cover 34% of energy. Drip irrigation deployed on 60% of contracted farmland reduces water draw by approximately 40%.",

    materials: [
      {
        name: "BCI cotton (raw)",
        origin: "Saurashtra & Kutch, Gujarat",
        pct: 74
      },
      {
        name: "Organic jute",
        origin: "West Bengal, IN",
        pct: 16
      },
      {
        name: "Recycled cotton shoddy",
        origin: "Panipat mills, IN",
        pct: 10
      }
    ],

    ikeaProducts: [
      "DVALA bedlinen",
      "NJUTA towels",
      "KORALLKAKTUS cushion cover"
    ],

    process: [
      {
        step: "Cotton ginning",
        description:
          "Raw seed cotton ginned at 14 cooperative-owned facilities. Lint quality graded to Shirley fineness index. Seeds sold locally for oil — zero waste.",
        co2Share: "9%"
      },
      {
        step: "Combing & carding",
        description:
          "Combed cotton for finer counts destined for bedlinen; carded for terry substrates. Dust extraction systems protect worker air quality.",
        co2Share: "14%"
      },
      {
        step: "Ring & open-end spinning",
        description:
          "30,000 ring spindles and 1,200 OE rotors. Solar inverters supply 34% of spinning hall load. Yarn count range: Ne 10–40.",
        co2Share: "22%"
      },
      {
        step: "Dyeing & printing",
        description:
          "Reactive and vat dyes on jiggers and continuous pad-thermosol ranges. Effluent treated to zero liquid discharge through MEE evaporators.",
        co2Share: "28%"
      },
      {
        step: "Fabric inspection & baling",
        description:
          "4-point inspection system per IKEA IOS-TCS-0023. Bales of 200 kg wrapped in recycled HDPE. Digital traceability QR tag per bale.",
        co2Share: "6%"
      }
    ],

    challenges: [
      "High groundwater consumption in Kutch region",
      "Coal grid dependency during monsoon (low solar)"
    ],

    improvements: [
      "200 MW wind PPA signed for 2026 delivery",
      "Waterless dyeing (supercritical CO₂) pilot underway"
    ]
  },


  {
    id: "cn",
    name: "Hangzhou Fiber Technologies",
    country: "China",
    type: "manufacturing",
    coords: [120.15, 30.27],

    score: 68,

    co2: "35,600 t/yr",
    water: "167 ML/yr",
    renewable: "41%",
    labor: "76/100",

    employees: "6,100",
    annualVolume: "11,000 t/yr",

    supplyRisk: "Medium",
    costOutlook: "Watch",

    certs: [
      "GRS",
      "bluesign",
      "OEKO-TEX 100"
    ],

    note:
      "Recycled polyester and technical performance fabric specialist. 41% renewable energy is among the highest in the textile network. Supplies outdoor and functional textile lines.",

    materials: [
      {
        name: "rPET (post-consumer bottles)",
        origin: "Zhejiang & Guangdong recovery",
        pct: 68
      },
      {
        name: "Virgin polyester",
        origin: "Domestic PTA/MEG",
        pct: 18
      },
      {
        name: "Elastane",
        origin: "INVISTA, Shanghai plant",
        pct: 14
      }
    ],

    ikeaProducts: [
      "LURVIG pet textile",
      "TRIPP outdoor cushion",
      "FILODENDRON technical cover"
    ],

    process: [
      {
        step: "PET bottle sorting & washing",
        description:
          "Post-consumer bottles sorted by colour and polymer type. Caustic wash and hot-rinse to FDA food-contact standard. Flake yield above 94%.",
        co2Share: "11%"
      },
      {
        step: "Chip extrusion & solid-state polycondensation",
        description:
          "PET flake extruded into chip, SSP-upgraded to textile IV 0.64–0.68 dl/g. 41% of extrusion energy from hydro and solar PPA.",
        co2Share: "26%"
      },
      {
        step: "Melt spinning",
        description:
          "POY and FDY yarns spun at 3,000–4,500 m/min. Texturing and air-jet entangling for bulk and stretch.",
        co2Share: "19%"
      },
      {
        step: "Knitting & weaving",
        description:
          "Circular knitting for stretch covers; rapier loom for flat technical fabrics. bluesign-certified process chemicals only.",
        co2Share: "16%"
      },
      {
        step: "Dyeing & functional finish",
        description:
          "Disperse dyeing at 130°C. Water-repellent C0 finish, PFC-free. Heat-setting on stenter frames.",
        co2Share: "18%"
      }
    ],

    challenges: [
      "Virgin polyester still represents 18% of the material mix",
      "Disperse dyeing is energy-intensive"
    ],

    improvements: [
      "Chemical recycling feedstock trial",
      "HT dyeing waste-heat recovery installation"
    ]
  },


  {
    id: "vn",
    name: "Hanoi Craft Collective",
    country: "Vietnam",
    type: "manufacturing",
    coords: [105.84, 21.02],

    score: 66,

    co2: "9,800 t/yr",
    water: "52 ML/yr",
    renewable: "22%",
    labor: "83/100",

    employees: "2,100",
    annualVolume: "2,500 t/yr",

    supplyRisk: "Medium",
    costOutlook: "Watch",

    certs: [
      "Fair Trade",
      "OEKO-TEX 100"
    ],

    note:
      "Artisan collective producing hand-embroidered and handwoven textiles for seasonal and limited-edition ranges. Community wages are 28% above Vietnamese legal minimum.",

    materials: [
      {
        name: "Linen",
        origin: "Quảng Nam province, VN",
        pct: 45
      },
      {
        name: "Hand-spun silk",
        origin: "Hà Nam silk village cooperative",
        pct: 30
      },
      {
        name: "Natural indigo dye",
        origin: "Northern Highland minority farms",
        pct: 15
      },
      {
        name: "Bamboo viscose thread",
        origin: "Mekong Delta mills",
        pct: 10
      }
    ],

    ikeaProducts: [
      "SOLFJÄDER cushion cover",
      "SÅNGLÄRKA throw",
      "FRIDFULL table runner"
    ],

    process: [
      {
        step: "Raw fibre preparation",
        description:
          "Linen yarn scoured and bleached using hydrogen peroxide. Silk degummed in soap bath at 90°C. All inputs traced to source.",
        co2Share: "8%"
      },
      {
        step: "Natural dyeing",
        description:
          "Indigo vat dyeing using traditional fermentation chemistry. Mordanting with alum only, without heavy metals.",
        co2Share: "13%"
      },
      {
        step: "Hand weaving",
        description:
          "Traditional backstrap and floor looms. Each metre takes 3–8 hours depending on pattern complexity.",
        co2Share: "5%"
      },
      {
        step: "Hand embroidery",
        description:
          "Artisans embroider at home and in village centres. Motif accuracy checked against colour specification cards.",
        co2Share: "4%"
      },
      {
        step: "Washing, pressing & inspection",
        description:
          "Gentle cold-wash finishing. Dimensional stability and colorfastness are checked before shipment.",
        co2Share: "10%"
      },
      {
        step: "Transport",
        description:
          "Seasonal limited-edition drops may use air freight. Standard lines are shipped by sea from Hai Phong Port.",
        co2Share: "60%"
      }
    ],

    challenges: [
      "Air freight for seasonal drops is the largest emission source",
      "Artisan capacity limits volume scalability"
    ],

    improvements: [
      "Shift seasonal lines to sea freight with longer lead times",
      "Solar cooperative electrification for village workshops"
    ]
  },


  {
    id: "id",
    name: "Surabaya Natural Fibers",
    country: "Indonesia",
    type: "raw",
    coords: [112.75, -7.26],

    score: 71,

    co2: "14,300 t/yr",
    water: "88 ML/yr",
    renewable: "28%",
    labor: "79/100",

    employees: "4,200",
    annualVolume: "5,000 t/yr",

    supplyRisk: "Medium",
    costOutlook: "Watch",

    certs: [
      "FSC",
      "OEKO-TEX 100",
      "Rainforest Alliance"
    ],

    note:
      "Supplies bamboo fibre and FSC-certified rattan for natural textile lines. Bamboo sequesters carbon during growth, partially offsetting processing emissions.",

    materials: [
      {
        name: "Bamboo fibre (Moso)",
        origin: "East Java certified plantations",
        pct: 55
      },
      {
        name: "Rattan",
        origin: "Kalimantan FSC forests",
        pct: 25
      },
      {
        name: "Natural latex binder",
        origin: "West Java rubber smallholders",
        pct: 12
      },
      {
        name: "Sisal fibre",
        origin: "East Java agave farms",
        pct: 8
      }
    ],

    ikeaProducts: [
      "DRÖMSK bath mat",
      "BORSTAD rug",
      "SNIDAD basket textile insert"
    ],

    process: [
      {
        step: "Bamboo harvesting & retting",
        description:
          "4-year Moso bamboo culms harvested mechanically. Retting in water channels separates fibre bundles without chemical treatment.",
        co2Share: "7%"
      },
      {
        step: "Mechanical decortication",
        description:
          "Bamboo crushed and combed into raw fibre on roller mills. Dust is captured and composted on-site.",
        co2Share: "14%"
      },
      {
        step: "Bleaching",
        description:
          "Chlorine-free hydrogen-peroxide bleach bath. Spent liquor is neutralised before reuse.",
        co2Share: "18%"
      },
      {
        step: "Needle-punching & bonding",
        description:
          "Rattan strips are interwoven with bamboo nonwoven layers. Latex binder is applied and oven-cured.",
        co2Share: "22%"
      },
      {
        step: "Cutting & finishing",
        description:
          "Water-jet cutting to dimensional specifications followed by edge sealing and final QA.",
        co2Share: "9%"
      }
    ],

    challenges: [
      "Rattan sourcing requires strict FSC audit trails",
      "Latex binder remains petrochemical-adjacent"
    ],

    improvements: [
      "Bio-based binder trial",
      "Direct vessel call from Surabaya to reduce transhipment"
    ]
  },


  {
    id: "bd",
    name: "Dhaka Textile Mills Ltd.",
    country: "Bangladesh",
    type: "manufacturing",
    coords: [90.41, 23.81],

    score: 61,

    co2: "48,200 t/yr",
    water: "312 ML/yr",
    renewable: "18%",
    labor: "72/100",

    employees: "12,400",
    annualVolume: "18,000 t/yr",

    supplyRisk: "High",
    costOutlook: "Pressure",

    certs: [
      "OEKO-TEX 100",
      "GOTS (partial lines)"
    ],

    note:
      "The largest textile supplier by volume in the prototype. Supplies core cotton bedlinen and terry towel lines. River water abstraction for dyeing is the primary sustainability concern under active remediation.",

    materials: [
      {
        name: "Cotton (standard)",
        origin: "Imported — India, Pakistan",
        pct: 70
      },
      {
        name: "Cotton (BCI certified)",
        origin: "Imported — Gujarat, IN",
        pct: 20
      },
      {
        name: "Polyester weft",
        origin: "Domestic Chittagong mills",
        pct: 10
      }
    ],

    ikeaProducts: [
      "KRATTEN bedlinen set",
      "ULLVIDE fitted sheet",
      "HIMLEÅN towel series"
    ],

    process: [
      {
        step: "Yarn import & storage",
        description:
          "Cotton yarn imported from India and Pakistan. Fibre testing takes place before production.",
        co2Share: "8%"
      },
      {
        step: "Weaving",
        description:
          "Rapier looms produce plain, twill and satin weaves. Electricity is largely sourced from the national grid.",
        co2Share: "21%"
      },
      {
        step: "Wet processing & dyeing",
        description:
          "Reactive dyeing in jigger and jet machines. River water abstraction is one of the primary concerns.",
        co2Share: "32%"
      },
      {
        step: "Printing",
        description:
          "Pigment and reactive printing are used for patterned ranges. Automated dispensing reduces print-paste waste.",
        co2Share: "12%"
      },
      {
        step: "Finishing",
        description:
          "Stenter finishing and sanforizing are used to improve dimensional stability.",
        co2Share: "11%"
      }
    ],

    challenges: [
      "River water abstraction volumes",
      "High fossil electricity dependence",
      "Yarn import adds upstream transport emissions"
    ],

    improvements: [
      "Rooftop solar installation",
      "Closed-loop water recycling upgrade",
      "Renewable energy certificate partnership"
    ]
  },


  {
    id: "pk",
    name: "Karachi Weaving Industries",
    country: "Pakistan",
    type: "manufacturing",
    coords: [67.01, 24.86],

    score: 55,

    co2: "61,400 t/yr",
    water: "445 ML/yr",
    renewable: "12%",
    labor: "65/100",

    employees: "9,200",
    annualVolume: "14,000 t/yr",

    supplyRisk: "High",
    costOutlook: "Pressure",

    certs: [
      "OEKO-TEX 100"
    ],

    note:
      "Produces heavy-duty woven textiles including canvas and upholstery fabrics. Heavy coal dependency in the energy mix is the primary sustainability gap.",

    materials: [
      {
        name: "Raw cotton",
        origin: "Punjab & Sindh, PK",
        pct: 65
      },
      {
        name: "Cotton yarn",
        origin: "India",
        pct: 20
      },
      {
        name: "Polypropylene thread",
        origin: "Domestic petrochemical",
        pct: 15
      }
    ],

    ikeaProducts: [
      "FISKBO canvas frame cover",
      "KIVIK upholstery fabric",
      "ÄPPLARÖ outdoor textile"
    ],

    process: [
      {
        step: "Cotton ginning & bale opening",
        description:
          "Domestic cotton is ginned at satellite facilities before blending and preparation.",
        co2Share: "6%"
      },
      {
        step: "Sizing & warping",
        description:
          "Starch-based sizing is applied to warp ends before weaving.",
        co2Share: "15%"
      },
      {
        step: "Heavy-duty weaving",
        description:
          "Dobby looms produce canvas and heavy woven fabrics. Coal-fired power is the largest emission hotspot.",
        co2Share: "38%"
      },
      {
        step: "Dyeing & mercerising",
        description:
          "Cold-pad-batch reactive dyeing is used for colour ranges. Wastewater treatment remains an improvement area.",
        co2Share: "22%"
      },
      {
        step: "Calendering & coating",
        description:
          "Friction calendering and water-repellent coating are used in finishing.",
        co2Share: "10%"
      }
    ],

    challenges: [
      "Coal captive power",
      "Fluorocarbon coating phase-out",
      "Wastewater treatment performance"
    ],

    improvements: [
      "Solar farm transition project",
      "C0 DWR coating trials",
      "New biological wastewater-treatment stage"
    ]
  }
];



/* =========================================================
   DOM
========================================================= */

const mapSvg = d3.select("#map-svg");

const mapLayer = mapSvg.select("#map-layer");

const markerLayer = mapSvg.select("#supplier-markers");

const supplierPanel =
  document.querySelector("#supplier-panel");

const supplierFilter =
  document.querySelector("#supplier-filter");

const supplierTableBody =
  document.querySelector("#supplier-table-body");

const compareA =
  document.querySelector("#compare-a");

const compareB =
  document.querySelector("#compare-b");

const comparison =
  document.querySelector("#comparison");



/* =========================================================
   SCORE HELPERS
========================================================= */

function scoreColor(score) {

  if (score >= 80) {
    return "#2f8f5b";
  }

  if (score >= 70) {
    return "#68a35d";
  }

  if (score >= 60) {
    return "#d58b1f";
  }

  return "#b84a42";
}


function scoreClass(score) {

  if (score >= 80) {
    return "score-excellent";
  }

  if (score >= 70) {
    return "score-good";
  }

  if (score >= 60) {
    return "score-moderate";
  }

  return "score-attention";
}


function scoreLabel(score) {

  if (score >= 80) {
    return "Excellent";
  }

  if (score >= 70) {
    return "Good";
  }

  if (score >= 60) {
    return "Fair";
  }

  return "Poor";
}



/* =========================================================
   MAP
========================================================= */

const projection =
  d3
    .geoMercator()
    .scale(135)
    .translate([450, 290]);


const path =
  d3.geoPath(projection);


let zoomLevel = 1;


const zoom =
  d3.zoom()
    .scaleExtent([1, 5])
    .on("zoom", event => {

      mapLayer.attr(
        "transform",
        event.transform
      );

      markerLayer.attr(
        "transform",
        event.transform
      );

      zoomLevel =
        event.transform.k;

    });


mapSvg.call(zoom);



/* =========================================================
   LOAD WORLD MAP
========================================================= */

async function loadMap() {

  try {

    const response =
      await fetch(
        "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
      );


    const world =
      await response.json();


    const countries =
      topojson.feature(
        world,
        world.objects.countries
      );


    mapLayer
      .selectAll("path")
      .data(countries.features)
      .join("path")

      .attr(
        "class",
        "country"
      )

      .attr(
        "d",
        path
      );


    renderMarkers();

  }

  catch (error) {

    console.error(
      "Could not load map:",
      error
    );


    document.querySelector(
      "#world-map"
    ).innerHTML = `

      <div
        style="
          height:100%;
          display:flex;
          align-items:center;
          justify-content:center;
          text-align:center;
          color:#6e7881;
          font-size:13px;
          padding:30px;
        "
      >

        The world map could not be loaded.

      </div>

    `;

  }

}



/* =========================================================
   MAP MARKERS
========================================================= */

function currentSuppliers() {

  const filter =
    supplierFilter.value;


  if (filter === "all") {

    return suppliers;

  }


  return suppliers.filter(
    supplier =>
      supplier.type === filter
  );

}



function renderMarkers() {

  markerLayer
    .selectAll("*")
    .remove();


  currentSuppliers()
    .forEach(supplier => {

      const [x, y] =
        projection(
          supplier.coords
        );


      const group =
        markerLayer
          .append("g")

          .attr(
            "class",
            "supplier-marker"
          )

          .attr(
            "transform",
            `translate(${x},${y})`
          )

          .on(
            "click",
            () => {

              selectSupplier(
                supplier
              );

            }
          );


      group
        .append("circle")

        .attr(
          "r",
          15
        )

        .attr(
          "fill",
          scoreColor(
            supplier.score
          )
        );


      group
        .append("text")

        .text(
          supplier.score
        );


      group
        .append("text")

        .attr(
          "class",
          "marker-name"
        )

        .attr(
          "y",
          27
        )

        .text(
          supplier.country
        );

    });

}



/* =========================================================
   SELECT SUPPLIER
========================================================= */

function selectSupplier(supplier) {

  renderSupplierPanel(
    supplier,
    "overview"
  );

}



/* =========================================================
   SUPPLIER PANEL
========================================================= */

function renderSupplierPanel(
  supplier,
  activeTab
) {

  supplierPanel.innerHTML = `

    <div
      class="supplier-panel-content"
    >


      <div
        class="supplier-top"
      >


        <div
          class="supplier-meta"
        >

          <small>
            SELECTED SUPPLIER
          </small>

          <strong>
            ${supplier.name}
          </strong>

          <span>
            ${supplier.country}
            ·
            ${supplier.employees} employees
          </span>

        </div>


        <div
          class="
            sustainability-score
            ${scoreClass(supplier.score)}
          "
        >

          ${supplier.score}

        </div>


      </div>



      <p
        class="supplier-description"
      >

        ${supplier.note}

      </p>



      <div
        class="metric-grid"
      >


        <div
          class="metric-card"
        >

          <span>
            CO₂ emissions
          </span>

          <strong>
            ${supplier.co2}
          </strong>

        </div>



        <div
          class="metric-card"
        >

          <span>
            Water usage
          </span>

          <strong>
            ${supplier.water}
          </strong>

        </div>



        <div
          class="metric-card"
        >

          <span>
            Renewable energy
          </span>

          <strong>
            ${supplier.renewable}
          </strong>

        </div>



        <div
          class="metric-card"
        >

          <span>
            Labor score
          </span>

          <strong>
            ${supplier.labor}
          </strong>

        </div>



        <div
          class="metric-card"
        >

          <span>
            Supply risk
          </span>

          <strong>
            ${supplier.supplyRisk}
          </strong>

        </div>



        <div
          class="metric-card"
        >

          <span>
            Cost outlook
          </span>

          <strong>
            ${supplier.costOutlook}
          </strong>

        </div>


      </div>



      <div
        class="detail-tabs"
      >


        ${tabButton(
          "overview",
          "Overview",
          activeTab
        )}


        ${tabButton(
          "materials",
          "Materials",
          activeTab
        )}


        ${tabButton(
          "process",
          "Process",
          activeTab
        )}


        ${tabButton(
          "roadmap",
          "Roadmap",
          activeTab
        )}


      </div>



      <div
        class="detail-content"
        id="detail-content"
      >

        ${renderTabContent(
          supplier,
          activeTab
        )}

      </div>


    </div>

  `;


  supplierPanel
    .querySelectorAll(
      ".detail-tab"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          renderSupplierPanel(

            supplier,

            button.dataset.tab

          );

        }
      );

    });

}



function tabButton(
  tab,
  label,
  activeTab
) {

  return `

    <button
      class="
        detail-tab
        ${tab === activeTab
          ? "active"
          : ""}
      "

      data-tab="${tab}"
    >

      ${label}

    </button>

  `;

}



/* =========================================================
   TAB CONTENT
========================================================= */

function renderTabContent(
  supplier,
  tab
) {

  if (tab === "materials") {

    return renderMaterials(
      supplier
    );

  }


  if (tab === "process") {

    return renderProcess(
      supplier
    );

  }


  if (tab === "roadmap") {

    return renderRoadmap(
      supplier
    );

  }


  return renderOverview(
    supplier
  );

}



/* =========================================================
   OVERVIEW TAB
========================================================= */

function renderOverview(supplier) {

  return `

    <h3>
      Supplier overview
    </h3>


    <div
      class="detail-list"
    >


      <div
        class="detail-row"
      >

        <span>
          Sustainability
        </span>

        <strong>
          ${supplier.score}/100
          ·
          ${scoreLabel(supplier.score)}
        </strong>

      </div>



      <div
        class="detail-row"
      >

        <span>
          Annual volume
        </span>

        <strong>
          ${supplier.annualVolume}
        </strong>

      </div>



      <div
        class="detail-row"
      >

        <span>
          Employees
        </span>

        <strong>
          ${supplier.employees}
        </strong>

      </div>



      <div
        class="detail-row"
      >

        <span>
          Certifications
        </span>

        <strong>
          ${supplier.certs.join(", ")}
        </strong>

      </div>


    </div>



    <h3
      style="margin-top:18px"
    >
      IKEA products supplied
    </h3>


    <ul>

      ${supplier.ikeaProducts
        .map(
          product => `
            <li>
              ${product}
            </li>
          `
        )
        .join("")}

    </ul>

  `;

}



/* =========================================================
   MATERIALS TAB
========================================================= */

function renderMaterials(
  supplier
) {

  return `

    <h3>
      Material composition
    </h3>


    <div
      class="detail-list"
    >

      ${supplier.materials
        .map(
          material => `

            <div
              class="detail-row"
            >

              <span>

                ${material.name}

                <br>

                <small>
                  ${material.origin}
                </small>

              </span>


              <strong>
                ${material.pct}%
              </strong>

            </div>

          `
        )
        .join("")}

    </div>

  `;

}



/* =========================================================
   PROCESS TAB
========================================================= */

function renderProcess(
  supplier
) {

  return `

    <h3>
      Manufacturing process
    </h3>


    <div
      class="detail-list"
    >

      ${supplier.process
        .map(
          (step, index) => `

            <div
              style="
                padding:11px 0;
                border-bottom:1px solid #edf0f2;
              "
            >

              <div
                style="
                  display:flex;
                  justify-content:space-between;
                  gap:15px;
                "
              >

                <strong
                  style="
                    font-size:12px;
                  "
                >

                  ${index + 1}.
                  ${step.step}

                </strong>


                <span
                  style="
                    color:#0058a3;
                    font-size:11px;
                    font-weight:700;
                  "
                >

                  ${step.co2Share}
                  CO₂

                </span>

              </div>


              <p
                style="
                  margin:5px 0 0;
                "
              >

                ${step.description}

              </p>

            </div>

          `
        )
        .join("")}

    </div>

  `;

}



/* =========================================================
   ROADMAP TAB
========================================================= */

function renderRoadmap(
  supplier
) {

  return `

    <h3>
      Current challenges
    </h3>


    <ul>

      ${supplier.challenges
        .map(
          challenge => `

            <li>
              ${challenge}
            </li>

          `
        )
        .join("")}

    </ul>



    <h3
      style="
        margin-top:18px;
      "
    >
      Improvement roadmap
    </h3>


    <ul>

      ${supplier.improvements
        .map(
          improvement => `

            <li>
              ${improvement}
            </li>

          `
        )
        .join("")}

    </ul>

  `;

}



/* =========================================================
   FILTER
========================================================= */

supplierFilter.addEventListener(
  "change",
  () => {

    renderMarkers();

  }
);



/* =========================================================
   MAP CONTROLS
========================================================= */

document
  .querySelector(
    "#zoom-in"
  )
  .addEventListener(
    "click",
    () => {

      mapSvg
        .transition()
        .duration(300)
        .call(
          zoom.scaleBy,
          1.4
        );

    }
  );


document
  .querySelector(
    "#zoom-out"
  )
  .addEventListener(
    "click",
    () => {

      mapSvg
        .transition()
        .duration(300)
        .call(
          zoom.scaleBy,
          0.7
        );

    }
  );


document
  .querySelector(
    "#reset-map"
  )
  .addEventListener(
    "click",
    () => {

      mapSvg
        .transition()
        .duration(350)
        .call(
          zoom.transform,
          d3.zoomIdentity
        );

    }
  );



/* =========================================================
   MAIN NAVIGATION
========================================================= */

document
  .querySelectorAll(
    ".nav-item"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const view =
          button.dataset.view;


        document
          .querySelectorAll(
            ".nav-item"
          )
          .forEach(item => {

            item
              .classList
              .remove(
                "active"
              );

          });


        button
          .classList
          .add(
            "active"
          );


        document
          .querySelectorAll(
            ".view"
          )
          .forEach(section => {

            section
              .classList
              .remove(
                "active"
              );

          });


        document
          .querySelector(
            `#${view}-view`
          )
          .classList
          .add(
            "active"
          );

      }
    );

  });



/* =========================================================
   SUPPLIER TABLE
========================================================= */

function renderSupplierTable() {

  supplierTableBody.innerHTML =
    suppliers
      .map(
        supplier => `

          <tr>


            <td>

              <strong>
                ${supplier.name}
              </strong>

            </td>


            <td>
              ${supplier.country}
            </td>


            <td>
              ${formatType(
                supplier.type
              )}
            </td>


            <td>

              <span
                class="table-score"
              >

                <i
                  class="table-score-dot"
                  style="
                    background:
                    ${scoreColor(
                      supplier.score
                    )}
                  "
                ></i>

                ${supplier.score}

              </span>

            </td>


            <td>
              ${supplier.co2}
            </td>


            <td>
              ${supplier.renewable}
            </td>


            <td>

              <button
                class="table-action"
                data-supplier="${supplier.id}"
              >

                View

              </button>

            </td>


          </tr>

        `
      )
      .join("");


  document
    .querySelectorAll(
      ".table-action"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const supplier =
            suppliers.find(
              item =>
                item.id ===
                button.dataset.supplier
            );


          switchToMap();


          selectSupplier(
            supplier
          );

        }
      );

    });

}



function formatType(type) {

  if (type === "raw") {
    return "Raw material";
  }

  if (type === "manufacturing") {
    return "Manufacturing";
  }

  return "Distribution";

}



/* =========================================================
   SWITCH BACK TO MAP
========================================================= */

function switchToMap() {

  document
    .querySelectorAll(
      ".nav-item"
    )
    .forEach(button => {

      button
        .classList
        .toggle(
          "active",
          button.dataset.view === "map"
        );

    });


  document
    .querySelectorAll(
      ".view"
    )
    .forEach(view => {

      view
        .classList
        .remove(
          "active"
        );

    });


  document
    .querySelector(
      "#map-view"
    )
    .classList
    .add(
      "active"
    );

}



/* =========================================================
   COMPARISON DROPDOWNS
========================================================= */

function populateComparisonSelectors() {

  const options =
    suppliers
      .map(
        supplier => `

          <option
            value="${supplier.id}"
          >

            ${supplier.name}

          </option>

        `
      )
      .join("");


  compareA.innerHTML =
    options;


  compareB.innerHTML =
    options;


  compareA.value =
    suppliers[0].id;


  compareB.value =
    suppliers[1].id;


  renderComparison();

}



compareA.addEventListener(
  "change",
  renderComparison
);


compareB.addEventListener(
  "change",
  renderComparison
);



/* =========================================================
   COMPARISON
========================================================= */

function renderComparison() {

  const a =
    suppliers.find(
      supplier =>
        supplier.id ===
        compareA.value
    );


  const b =
    suppliers.find(
      supplier =>
        supplier.id ===
        compareB.value
    );


  comparison.innerHTML = `

    <div
      class="comparison-header"
    >

      <strong>
        Indicator
      </strong>

      <strong>
        ${a.name}
      </strong>

      <strong>
        ${b.name}
      </strong>

    </div>


    ${comparisonRow(
      "Sustainability score",
      `${a.score}/100`,
      `${b.score}/100`,
      a.score,
      b.score,
      true
    )}


    ${comparisonRow(
      "CO₂ emissions",
      a.co2,
      b.co2,
      numericValue(a.co2),
      numericValue(b.co2),
      false
    )}


    ${comparisonRow(
      "Water usage",
      a.water,
      b.water,
      numericValue(a.water),
      numericValue(b.water),
      false
    )}


    ${comparisonRow(
      "Renewable energy",
      a.renewable,
      b.renewable,
      numericValue(a.renewable),
      numericValue(b.renewable),
      true
    )}


    ${comparisonRow(
      "Labor score",
      a.labor,
      b.labor,
      numericValue(a.labor),
      numericValue(b.labor),
      true
    )}


    ${textComparisonRow(
      "Supply risk",
      a.supplyRisk,
      b.supplyRisk
    )}


    ${textComparisonRow(
      "Cost outlook",
      a.costOutlook,
      b.costOutlook
    )}


    ${textComparisonRow(
      "Annual volume",
      a.annualVolume,
      b.annualVolume
    )}

  `;

}



function numericValue(value) {

  return Number(
    String(value)
      .replace(
        /,/g,
        ""
      )
      .match(
        /[\d.]+/
      )?.[0] || 0
  );

}



function comparisonRow(
  label,
  displayA,
  displayB,
  valueA,
  valueB,
  higherIsBetter
) {

  let betterA = false;

  let betterB = false;


  if (valueA !== valueB) {

    if (higherIsBetter) {

      betterA =
        valueA > valueB;

      betterB =
        valueB > valueA;

    }

    else {

      betterA =
        valueA < valueB;

      betterB =
        valueB < valueA;

    }

  }


  return `

    <div
      class="comparison-row"
    >

      <span>
        ${label}
      </span>


      <span
        class="
          comparison-value
          ${betterA
            ? "better-value"
            : ""}
        "
      >

        ${displayA}

      </span>


      <span
        class="
          comparison-value
          ${betterB
            ? "better-value"
            : ""}
        "
      >

        ${displayB}

      </span>


    </div>

  `;

}



function textComparisonRow(
  label,
  a,
  b
) {

  return `

    <div
      class="comparison-row"
    >

      <span>
        ${label}
      </span>


      <span
        class="comparison-value"
      >
        ${a}
      </span>


      <span
        class="comparison-value"
      >
        ${b}
      </span>


    </div>

  `;

}



/* =========================================================
   INITIALIZE
========================================================= */

function initialize() {

  loadMap();

  renderSupplierTable();

  populateComparisonSelectors();


  /* Open the same supplier that was prominent
     in the original prototype */

  selectSupplier(
    suppliers[0]
  );

}


initialize();