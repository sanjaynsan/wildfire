mapboxgl.accessToken = 'pk.eyJ1IjoibW9kZWxvbiIsImEiOiJjbTc0enQ0dWUwOWppMnFxdnN5eDI2ZHR3In0.wi3R1hrSQ_P-zQANKtROFw';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/modelon/cmam9lakf01e901slh4erbjaf',
  center: [0, 0],
  zoom: 50,
  pitch: 0,
  bearing: 0
});

const chapters = [
  {
    id: 'In the pursuit of water',
    type: 'image',
    src: './images/In the pursuit od water.jpg',
    map: { center: [0, 0], zoom: 50, pitch: 0 },
    text: `.`
  },
  {
    id: 'Global freshwater use',
    type: 'iframe',
    src:  "https://www.canva.com/design/DAGmNHr-3EU/x8_UvI7UhO0oR6bRfK5RlQ/view?embed",
    text: `<h3>Global freshwater use</p>
           <h6>A growing global population and economic shift towards more resource-intensive consumption patterns means that global freshwater use has increased approximately six-fold since 1900. Freshwater use includes freshwater withdrawals for agriculture, industry, and municipal uses. This is shown in the chart. Rates of global freshwater use increased sharply from the 1950s onwards but since 2000 appear to be plateauing, or at least slowing.</p>`,
    map: { center: [0, 20], zoom: 2.1, pitch: 0 }
  },
  {
    id: 'Renewable freshwater resources per capita',
    type: 'iframe',
    src:  "https://ourworldindata.org/grapher/annual-carbon-dioxide-emissions?tab=map&time=latest",
    text: `<h3>Renewable freshwater resources per capita.</p>
           <h6>A growing global population and economic shift towards more resource-intensive consumption patterns means that global freshwater use has increased approximately six-fold since 1900. Freshwater use includes freshwater withdrawals for agriculture, industry, and municipal uses. This is shown in the chart. Rates of global freshwater use increased sharply from the 1950s onwards but since 2000 appear to be plateauing, or at least slowing</p>`,
    map: { center: [0, 20], zoom: 2.3, pitch: 0 }
  },
  {
    id: 'Water withdrawals',
    type: 'iframe',
    src:  "https://ourworldindata.org/explorers/natural-disasters?time=2000..latest&facet=none&Disaster+Type=Wildfires&Impact=Deaths&Timespan=Annual&Per+capita=false&country=~OWID_WRL&tab=chart&hideControls=true",
    text: `<h3>Water withdrawals</p>
           <h6>Water withdrawals (also sometimes known as <b>'water abstractions'</b>) are defined as freshwater taken from ground or surface water sources (such as rivers or lakes), <b>either permanently or temporarily</b>, and used for agricultural, industrial, or municipal (domestic) uses.</p>`,
    map: { center: [0, 20], zoom: 2.5, pitch: 0 }
  },
  {
    id: 'Renewable internal freshwater resources2',
    type: 'iframe',
    src:  "https://ourworldindata.org/grapher/per-capita-renewable-freshwater-resources?tab=map",
    text: `<h3>Renewable internal freshwater resources</p>
           <h6>Freshwater from inflowing river basins and recharging groundwater aquifers. Data on renewable resources <b>should be treated with caution</b>; since this data is gathered intermittently, it fails to capture seasonal and annual variance in water resources, which can be significant in some nations.

Data at a national level also <b>fails to capture variability at more local levels</b>, which can be important when analyzing the sustainability of particular groundwater aquifers or surface water basins.
</p>`,
    map: { center: [0, 20], zoom: 2.6, pitch: 0 }
  },
  {
    id: 'POLYSOLUTION',
    type: 'image',
    src:  "./images/POLYSOLUTION1.jpg",
    map: { center: [0, 20], zoom: 2.7, pitch: 0 },
    text: `<h6>.`
  },
  {
    id: 'lets take a look at India',
    type: 'text',
    map: { center: [78.3,24.37], zoom: 4, pitch: 0 },
    text: `<h3>Is there a way to act from the bottom up?</p>
           <h6></p>`
  },
  {
    id: 'nirmal',
    type: 'image',
    src: "./images/nirmal.jpg",
    map: { center: [78.3,24.37], zoom: 4, pitch: 0 },
    text: 'Lets look what he and his community have done.'
  },
  {
    id: 'comparison-frame3',
    type: 'iframe',
    src: 'https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=ec4e22d0-31db-11f0-bb24-0936e1cb08fb',
    map: { center: [78.72 ,10.72], zoom: 14, pitch: 8 },
    text: 'Guntur lake in Guntur, Trichy - Pudukkottai NH (5kms from Trichy airport) was not maintained for years. After our restoration work the lake is now filled with water. The transformation picture shows the condition before and after our restoration work. Location: Guntur Panchayat, Trichy District.'
  },
  {
    id: 'comparison-frame4',
    type: 'iframe',
    src: 'https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=b026a4ee-31db-11f0-bb24-0936e1cb08fb',
    map: { center: [79.22 ,10.28], zoom: 14, pitch: 8 },
    text: 'Vathalaikkundu Nochchi Kulam.Area of the lake: 55 acresWater storage capacity: 80 crore litresGps co-ordinates: 10.289601, 79.227898 Shrubs and invasive species were remobed from the lake region, desilted it, established boundaries. Two lake islands were created inside the lake and planted hundreds of native trees.  Water we brought to the lake via the inlet and ensured that maximum rainwater is saved in this water body'
  },
  {
    id: 'Growing awareness',
    type: 'image',
    src: "./images/Growing awareness.jpg",
    map: { center: [0, 20], zoom: 2.7, pitch: 0 },
    text: '<h6>Be an Action Hero! Join the movement to save our water resources. '
  },
  {
    id: 'how do others mitigate water crisis',
    type: 'image',
    src: "./images/how do others.jpg",
    map: { center: [0, 20], zoom: 2.5, pitch: 0 },
    text: '.'
  },
  {
    id: 'Know of any grassroots',
    type: 'image',
    src: "./images/final map.jpeg",
    map: { center: [0, 0], zoom: 50, pitch: 0 },
    text: '<h6>Know of any grassroots or community-led efforts tackling the water crisis? Share the story with us — we’re here to amplify local voices and connect them to global impact.</p>'
  }
];

const container = document.getElementById('story-container');

chapters.forEach(chap => {
  const div = document.createElement('div');
  div.className = 'chapter';
  div.id = chap.id;

  if (chap.type === 'image') {
    div.innerHTML = `<img src="${chap.src}" /><div class="text-box">${chap.text}</div>`;
  } else if (chap.type === 'iframe') {
    div.innerHTML = `<iframe src="${chap.src}" frameborder="0" height="720"></iframe><div class="text-box">${chap.text}</div>`;
  } else if (chap.type === 'text') {
    div.innerHTML = `<div class="text-box">${chap.text}</div>`;
  }

  container.appendChild(div);
});

const scroller = scrollama();
scroller
  .setup({
    step: '.chapter',
    offset: 0.5,
    debug: false
  })
  .onStepEnter(response => {
    document.querySelectorAll('.chapter').forEach(el => el.classList.remove('active'));
    response.element.classList.add('active');

    const chapter = chapters.find(c => c.id === response.element.id);
    if (chapter && chapter.map) {
      map.flyTo(chapter.map);
    }
  });

window.addEventListener('resize', scroller.resize);
