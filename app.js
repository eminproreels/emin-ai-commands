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

function getVisualType(x){
  const cmd=(x.command||"").toLowerCase();

  if(/billboard|citylight|busstop|airportad|subwayad|buswrap|storefront|streetposter|digitaldisplay|guerrillaad/.test(cmd)) return "billboard";

  if(/headshot|portrait|profilepic|passport|beard|glasses|hairstyle|youngify|oldify|babyversion|avatarstyle/.test(cmd)) return "portrait";

  if(/splash|underwater/.test(cmd)) return "splash";

  if(/anatomy|exploded|crosssection|xray|teardown|components|insideout|cutaway|breakdown|deconstruct/.test(cmd)) return "anatomy";

  if(/infographic|diagram|flowchart|timeline|roadmap|mindmap|systemmap|framework|workflow|process|dataviz/.test(cmd)) return "infographic";

  if(/cinematic|cinereel|filmposter|editorial|magazinecover/.test(cmd)) return "cinematic";

  if(/premiumshowcase|luxury|proshot|studioify|product/.test(cmd)) return "product";

  if(/miniature|clay|claymation|papercraft|papercut|lowpoly|pixelart|isometric/.test(cmd)) return "craft";

  if(/blueprint|schematic|patentdrawing|manual|techsheet|instructions|assembly|measurements|specs/.test(cmd)) return "technical";

  if(/carousel|checklist|cheatsheet|howto|stepbystep|tips|faq|dosdonts|mythsfacts|mistakes/.test(cmd)) return "content";

  if(/beforeafter|comparison|versus|sidebyside|thisorthat|goodbad|wrongright|oldnew|manualvsai/.test(cmd)) return "compare";

  if(/space|cyberpunk|holographic|hologram|fantasy|wizard|superhero|astronaut|warrior|steampunk|surreal/.test(cmd)) return "fantasy";

  return "default";
}

function visualHTML(x){
  const type=getVisualType(x);
  const num=String(x.index).padStart(3,"0");

  const common=`
    <span class="v-chip">${esc(x.category)}</span>
    <span class="v-num">${num}</span>
  `;

  if(type==="billboard"){
    return `
      ${common}
      <div class="scene billboard-scene">
        <div class="billboard-pole"></div>
        <div class="billboard-box"><span>AD</span></div>
        <div class="billboard-ground"></div>
      </div>
    `;
  }

  if(type==="portrait"){
    return `
      ${common}
      <div class="scene portrait-scene">
        <div class="portrait-head"></div>
        <div class="portrait-body"></div>
        <div class="portrait-frame"></div>
      </div>
    `;
  }

  if(type==="splash"){
    return `
      ${common}
      <div class="scene splash-scene">
        <div class="splash-product"></div>
        <span class="drop d1"></span>
        <span class="drop d2"></span>
        <span class="drop d3"></span>
        <span class="drop d4"></span>
      </div>
    `;
  }

  if(type==="anatomy"){
    return `
      ${common}
      <div class="scene anatomy-scene">
        <div class="anatomy-core"></div>
        <span class="part p1"></span>
        <span class="part p2"></span>
        <span class="part p3"></span>
        <span class="line l1"></span>
        <span class="line l2"></span>
        <span class="line l3"></span>
      </div>
    `;
  }

  if(type==="infographic"){
    return `
      ${common}
      <div class="scene info-scene">
        <span class="bar b1"></span>
        <span class="bar b2"></span>
        <span class="bar b3"></span>
        <span class="bar b4"></span>
        <span class="info-dot"></span>
      </div>
    `;
  }

  if(type==="cinematic"){
    return `
      ${common}
      <div class="scene cinematic-scene">
        <div class="cinema-frame"></div>
        <div class="cinema-light"></div>
        <div class="cinema-subject"></div>
      </div>
    `;
  }

  if(type==="product"){
    return `
      ${common}
      <div class="scene product-scene">
        <div class="product-shadow"></div>
        <div class="product-object"></div>
        <div class="product-glow"></div>
      </div>
    `;
  }

  if(type==="craft"){
    return `
      ${common}
      <div class="scene craft-scene">
        <span class="cube c1"></span>
        <span class="cube c2"></span>
        <span class="cube c3"></span>
      </div>
    `;
  }

  if(type==="technical"){
    return `
      ${common}
      <div class="scene technical-scene">
        <div class="tech-box"></div>
        <span class="tech-line t1"></span>
        <span class="tech-line t2"></span>
        <span class="tech-line t3"></span>
        <span class="tech-dot"></span>
      </div>
    `;
  }

  if(type==="content"){
    return `
      ${common}
      <div class="scene content-scene">
        <div class="content-card cc1"></div>
        <div class="content-card cc2"></div>
        <div class="content-card cc3"></div>
      </div>
    `;
  }

  if(type==="compare"){
    return `
      ${common}
      <div class="scene compare-scene">
        <div class="compare-left"></div>
        <div class="compare-right"></div>
        <div class="compare-vs">VS</div>
      </div>
    `;
  }

  if(type==="fantasy"){
    return `
      ${common}
      <div class="scene fantasy-scene">
        <div class="fantasy-orb"></div>
        <div class="fantasy-ring"></div>
        <div class="fantasy-star"></div>
      </div>
    `;
  }

  return `
    ${common}
    <div class="scene default-scene">
      <span class="shape s1"></span>
      <span class="shape s2"></span>
      <span class="shape s3"></span>
      <span class="v-label">${esc(x.abbr)}</span>
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
  let s=q.value.toLowerCase().trim();

  let a=COMMANDS.filter(x=>
    (active==="Все"||x.category===active) &&
    (`${x.command} ${x.title} ${x.category}`).toLowerCase().includes(s)
  );

  shown.textContent=`${a.length} из ${COMMANDS.length}`;
  empty.hidden=!!a.length;

  grid.innerHTML=a.map(x=>`
    <article class="card" data-c="${esc(x.command)}">
      <div class="visual visual-${getVisualType(x)}">
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
