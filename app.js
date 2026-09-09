const cats=["Все",...new Set(COMMANDS.map(x=>x.category))];
let active="Все";

const q=document.querySelector("#q"),
grid=document.querySelector("#grid"),
filters=document.querySelector("#filters"),
shown=document.querySelector("#shown"),
empty=document.querySelector("#empty"),
toast=document.querySelector("#toast");

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

function rf(){
  filters.innerHTML=cats.map(c=>
    `<button class="filter ${c===active?"active":""}" data-c="${esc(c)}">${esc(c)}</button>`
  ).join("");

  filters.querySelectorAll("button").forEach(b=>
    b.onclick=()=>{
      active=b.dataset.c;
      rf();
      render();
    }
  );
}

function render(){
  let s=q.value.toLowerCase().trim();

  let a=COMMANDS.filter(x=>
    (active==="Все"||x.category===active)&&
    (`${x.command} ${x.title} ${x.category}`).toLowerCase().includes(s)
  );

  shown.textContent=`${a.length} из ${COMMANDS.length}`;
  empty.hidden=!!a.length;

  grid.innerHTML=a.map((x,idx)=>`
    <article class="card ${(idx===0&&active==="Все"&&!s)?"featured":""}" data-c="${esc(x.command)}">

      <div class="visual v${x.visual}">
        <span class="v-chip">${esc(x.category)}</span>
        <span class="v-num">${String(x.index).padStart(3,"0")}</span>
        <span class="v-label">${esc(x.abbr)}</span>
      </div>

      <span class="cmd">${esc(x.command)}</span>

      <h3>${esc(x.title)}</h3>

      <div class="meta">
        <span>${esc(x.category)}</span>
        <span>копировать ↗</span>
      </div>

    </article>
  `).join("");

  grid.querySelectorAll(".card").forEach(c=>
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

      setTimeout(
        ()=>toast.classList.remove("show"),
        1100
      );
    }
  );
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
