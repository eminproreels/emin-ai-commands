const cats=["Все",...new Set(COMMANDS.map(x=>x.category))];
let active="Все";

const q=document.querySelector("#q");
const grid=document.querySelector("#grid");
const filters=document.querySelector("#filters");
const shown=document.querySelector("#shown");
const empty=document.querySelector("#empty");
const toast=document.querySelector("#toast");

document.querySelector("#count").textContent=COMMANDS.length+" команд";

function esc(s){
  return String(s).replace(/[&<>"']/g,m=>({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#039;"
  }[m]))
}

const ICONS={
  "/billboard":"rectangle-horizontal",
  "/headshot":"user-round",
  "/proshot":"camera",
  "/colorfix":"palette",
  "/premiumshowcase":"gem",
  "/infographic":"chart-no-axes-column",
  "/filmposter":"clapperboard",
  "/hairstyle":"scissors",
  "/creativeads":"megaphone",
  "/levitation":"sparkles",
  "/splash":"droplets",
  "/goldenhour":"sunset",
  "/neon":"zap",
  "/minimalist":"minus",
  "/luxury":"crown",
  "/streetstyle":"shirt",
  "/cinematic":"film",
  "/outdoor":"trees",
  "/flatlay":"layout-grid",
  "/unboxing":"package-open",
  "/lifestyle":"coffee",
  "/seasonal":"calendar-days",
  "/miniature":"boxes",
  "/claymation":"circle-dot",
  "/popart":"gallery-horizontal",
  "/watercolor":"paintbrush",
  "/pixelart":"grid-3x3",
  "/lowpoly":"shapes",
  "/holographic":"scan",
  "/chrome":"circle",
  "/glass":"glass-water",
  "/marble":"waves",
  "/icecarved":"snowflake",
  "/underwater":"waves",
  "/space":"orbit",
  "/desert":"sun",
  "/jungle":"leaf",
  "/retro80s":"radio",
  "/steampunk":"settings",
  "/papercraft":"origami",
  "/anatomy":"scan-line",
  "/exploded":"unfold-horizontal",
  "/crosssection":"circle-dashed",
  "/ingredients":"flask-conical",
  "/blueprint":"ruler",
  "/schematic":"waypoints",
  "/sizechart":"move-horizontal",
  "/comparison":"columns-2",
  "/beforeafter":"panel-left-right",
  "/howitworks":"workflow",
  "/stepbystep":"list-ordered",
  "/materials":"layers-3",
  "/specs":"list-checks",
  "/timeline":"git-commit-horizontal",
  "/flowchart":"network",
  "/xray":"scan",
  "/teardown":"wrench",
  "/components":"boxes",
  "/features":"list-plus",
  "/instructions":"notebook-tabs",
  "/assembly":"combine",
  "/measurements":"ruler",
  "/prosandcons":"scale",
  "/patentdrawing":"file-pen-line",
  "/manual":"book-open",
  "/techsheet":"file-spreadsheet",
  "/originmap":"map-pinned",
  "/nutrition":"apple",
  "/composition":"layers",
  "/diagram":"git-fork",
  "/handwritten":"pen-line",
  "/labeled":"tags",
  "/oldify":"history",
  "/youngify":"baby",
  "/cartoon":"smile",
  "/anime":"sparkles",
  "/pixarstyle":"wand-sparkles",
  "/oilportrait":"frame",
  "/renaissance":"landmark",
  "/superhero":"shield",
  "/royal":"crown",
  "/astronaut":"rocket",
  "/warrior":"swords",
  "/wizard":"wand",
  "/vintagephoto":"camera",
  "/polaroid":"image",
  "/blackandwhite":"circle-half",
  "/sepia":"contrast",
  "/neonportrait":"zap",
  "/popartportrait":"gallery-horizontal",
  "/comicportrait":"message-square",
  "/watercolorportrait":"paintbrush",
  "/statue":"landmark",
  "/hologram":"scan-face",
  "/cyberpunk":"cpu",
  "/fantasyportrait":"sparkles",
  "/gamecharacter":"gamepad-2",
  "/avatarstyle":"circle-user-round",
  "/pixelportrait":"grid-2x2",
  "/sketchportrait":"pencil",
  "/magazinecover":"newspaper",
  "/babyversion":"baby",
  "/handwrittennote":"notebook-pen",
  "/newbg":"image-plus",
  "/hdreel":"badge-hd",
  "/together":"users-round",
  "/sunglasses":"glasses",
  "/lightfix":"sun",
  "/sharpclean":"focus",
  "/restorephoto":"history",
  "/cleanbg":"eraser",
  "/studioify":"lamp-desk",
  "/editorial":"newspaper",
  "/profilepic":"circle-user",
  "/passportplus":"contact-round",
  "/beardstyle":"user-round",
  "/glasses":"glasses",
  "/outfitpreview":"shirt",
  "/skinretouch":"sparkles",
  "/cinereel":"film",
  "/3dbillboard":"box",
  "/citylight":"lightbulb",
  "/busstopad":"bus",
  "/airportad":"plane",
  "/subwayad":"train-front",
  "/buswrap":"bus-front",
  "/storefront":"store",
  "/guerrillaad":"megaphone",
  "/phonemockup":"smartphone",
  "/instagrammockup":"camera",
  "/telegrammockup":"send",
  "/iceberg":"triangle",
  "/funnel":"funnel",
  "/matrix":"table-2",
  "/venndiagram":"circles",
  "/comicstrip":"panels-top-left",
  "/herojourney":"route",
  "/dayinthelife":"clock-3",
  "/pov":"eye",
  "/loopstory":"repeat-2",
  "/surrealconcept":"brain",
  "/hybridobject":"combine",
  "/impossibleobject":"infinity",
  "/personification":"person-standing",
  "/papercut":"scissors",
  "/isometric":"box"
};

function getIcon(x){
  return ICONS[(x.command||"").toLowerCase()]||"sparkles";
}

function visualHTML(x){
  const num=String(x.index).padStart(3,"0");
  const icon=getIcon(x);

  return `
    <span class="v-chip">${esc(x.category)}</span>
    <span class="v-num">${num}</span>
    <div class="icon-scene">
      <i data-lucide="${icon}"></i>
    </div>
  `;
}

function rf(){
  filters.innerHTML=cats.map(c=>`
    <button class="filter ${c===active?"active":""}" data-c="${esc(c)}">
      ${esc(c)}
    </button>
  `).join("");

  filters.querySelectorAll("button").forEach(b=>{
    b.onclick=()=>{
      active=b.dataset.c;
      rf();
      render();
    }
  });
}

function render(){
  const s=q.value.toLowerCase().trim();

  const a=COMMANDS.filter(x=>
    (active==="Все"||x.category===active)&&
    (`${x.command} ${x.title} ${x.category}`).toLowerCase().includes(s)
  );

  shown.textContent=`${a.length} из ${COMMANDS.length}`;
  empty.hidden=!!a.length;

  grid.innerHTML=a.map(x=>`
    <article class="card" data-c="${esc(x.command)}">
      <div class="visual">
        ${visualHTML(x)}
      </div>

      <span class="cmd">${esc(x.command)}</span>
      <h3>${esc(x.title)}</h3>

      <div class="meta">
        <span>${esc(x.category)}</span>
        <span>копировать ↗</span>
      </div>
    </article>
  `).join("");

  if(window.lucide){
    lucide.createIcons();
  }

  grid.querySelectorAll(".card").forEach(c=>{
    c.onclick=async()=>{
      const text=c.dataset.c;

      try{
        await navigator.clipboard.writeText(text);
      }catch{
        const t=document.createElement("textarea");
        t.value=text;
        document.body.appendChild(t);
        t.select();
        document.execCommand("copy");
        t.remove();
      }

      toast.textContent=text+" скопирована";
      toast.classList.add("show");

      setTimeout(()=>{
        toast.classList.remove("show");
      },1100);
    }
  });
}

q.oninput=render;

document.addEventListener("keydown",e=>{
  if(e.key==="/"&&document.activeElement!==q){
    e.preventDefault();
    q.focus();
  }
});

rf();
render();
