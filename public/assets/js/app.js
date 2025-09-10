(()=>{
  // ===== Data =====
  const TAROT = [
    { id:"tarot-basic", title:"Таро с нуля: базовая система",
      badge:"🎬 4 обучающих видео Angela Pearl",
      bullets:[
        "Простая система, которая помогает принимать осознанные решения каждый день.",
        "Первые расклады для понимания себя и ситуаций вокруг.",
        "Освоение навыка, который сразу даёт уверенность и спокойствие.",
      ], price:"5 500 ₽" },
    { id:"pro-interpretation", title:"Таро как личный инструмент",
      badge:"🎬 6 обучающих видео от Angela Pearl",
      bullets:[
        "Узнаете, как использовать карты не только для себя, но и чтобы лучше понимать людей вокруг.",
        "Освоите практику чтения ситуаций: работа, общение, отношения — там, где важен правильный выбор.",
        "Получите навык, который повышает вашу уверенность и делает вас более интересным собеседником.",
      ], price:"12 000 ₽" },
    { id:"love-money-spreads", title:"Таро и отношения: гармония в любви",
      badge:"🎬 8 обучающих видео от Angela Pearl • наставник",
      bullets:[
        "Поймёте, какие сценарии мешают вам в личной жизни и как выйти на честные отношения.",
        "Сможете предсказывать развитие пары: от начала до серьёзных шагов, включая свадьбу и семью.",
        "Получите практики для укрепления доверия и построения долгосрочной гармонии.",
      ], price:"18 000 ₽" },
    { id:"tarot-for-brands", title:"Таро и успех: предназначение, карьера, дело жизни",
      badge:"🎬 9 обучающих видео от Angela Pearl • наставник",
      bullets:[
        "Узнаете, в какой сфере у вас реальные возможности для роста и где лучше не тратить силы.",
        "Освоите расклады для выбора профессии, открытия бизнеса и карьерных шагов.",
        "Получите инструмент для понимания: «моё это или не моё» — и перестанете идти вслепую.",
      ], price:"26 000 ₽" },
    { id:"master-diagnostics", title:"Таро PRO: личное наставничество с Анжелой Перл",
      badge:"👑 Личное наставничество Angela Pearl, все видеокурсы",
      bullets:[
        "Живая практика и обратная связь лично от Анжелы: вы не останетесь один на один с картами.",
        "Поддержка и разбор именно ваших ситуаций, чтобы вы уверенно чувствовали себя на новом уровне.",
        "Навык, который даёт вам личный статус: вы умеете видеть глубже, понимать людей и их выбор.",
      ], price:"35 000 ₽" },
  ];
  const ASTRO = [
    { id:"astro-basic", title:"Астрология с нуля",
      badge:"🎬 3 обучающих видео Angela Pearl",
      bullets:[
        "Разберётесь в знаках зодиака, планетах и домах без лишней сложности.",
        "Научитесь читать простые натальные карты и видеть основные черты характера.",
        "Уже после первых занятий сможете понимать себя и близких на новом уровне.",
      ], price:"6 500 ₽" },
    { id:"astro-profi", title:"Карта личности: кто вы на самом деле",
      badge:"🎬 5 обучающих видео Angela Pearl",
      bullets:[
        "Научитесь глубоко разбирать натальную карту и видеть скрытые сильные стороны.",
        "Поймёте, какие качества помогут вам в жизни и что может мешать развитию.",
        "Узнаете, что в вашей карте говорит о том, как вы проявляетесь в отношениях и привлекаете любовь.",
      ], price:"14 000 ₽" },
    { id:"astro-synastry", title:"Астрология отношений: совместимость и семья",
      badge:"🎬 5 обучающих видео Angela Pearl • наставник",
      bullets:[
        "Чувствуете, что отношения раз за разом идут по одному сценарию? Узнаете, как это остановить.",
        "Сможете точно рассчитать совместимость: подойдёт ли этот человек для брака и семьи.",
        "Поймёте, какие энергии влияют на рождение детей и как заложить фундамент гармоничной семьи.",
      ], price:"20 000 ₽" },
    { id:"astro-blog-business", title:"Астрология успеха: профессия, деньги, предназначение",
      badge:"🎬 7 обучающих видео Angela Pearl • консультация",
      bullets:[
        "Узнаете, какое направление карьеры или бизнеса именно ваше, а где вас ждут тупики.",
        "Сможете прогнозировать не только свой успех, но и помочь мужу/партнёру выбрать правильный путь.",
        "Получите стратегический инструмент: перестанете терять время и деньги, сможете уверенно строить будущее семьи.",
      ], price:"27 000 ₽" },
    { id:"astro-prognostics", title:"Профессиональная астрология с Анжелой Перл",
      badge:"👑 Личное наставничество Angela Pearl, все видеокурсы",
      bullets:[
        "Индивидуальная практика и разбор ваших карт с Анжелой.",
        "Живая обратная связь и сопровождение на пути к экспертному уровню.",
        "Навык, который даёт вам личный статус: вы понимаете людей глубже и можете консультировать других.",
      ], price:"33 000 ₽" },
  ];

  // ===== Catalog render =====
  let currentTab="tarot";
  const cardsEl=document.getElementById("cards");
  const tabTarot=document.getElementById("tab-tarot");
  const tabAstro=document.getElementById("tab-astro");
  const esc=s=>String(s||"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]));
  const card=c=>`
    <article class="card">
      <h3>${esc(c.title)}</h3>
      <div class="badge">${esc(c.badge)}</div>
      <ul>${c.bullets.map(b=>`<li>${esc(b)}</li>`).join("")}</ul>
      <div class="foot">
        <div class="price">${esc(c.price)}</div>
        <a href="/invoice?id=${encodeURIComponent(c.id)}" class="btn btn-soft-strong"
           onclick="event.preventDefault();alert('DEMO: открылось бы /invoice?id=${esc(c.id)}');">Получить доступ</a>
      </div>
    </article>`;
  function render(){ const list=currentTab==="tarot"?TAROT:ASTRO; cardsEl.innerHTML=list.map(card).join(""); }
  tabTarot.addEventListener("click",()=>{currentTab="tarot";tabTarot.classList.add("is-active");tabAstro.classList.remove("is-active");render();});
  tabAstro.addEventListener("click",()=>{currentTab="astro";tabAstro.classList.add("is-active");tabTarot.classList.remove("is-active");render();});
  render();

  // ===== Support form validation (at least one contact) =====
  const form=document.getElementById("supportForm");
  if(form){
    form.addEventListener("submit",(e)=>{
      e.preventDefault();
      const data=new FormData(form);
      const email=(data.get("email")||"").trim();
      const phone=(data.get("phone")||"").trim();
      const tg=(data.get("tg")||"").trim();
      const msg=(data.get("message")||"").trim();
      const err=document.getElementById("formError");
      if(!email && !phone && !tg){ err.textContent="Укажите email, телефон или Telegram — любой один контакт."; return; }
      if(!msg){ err.textContent="Опишите вопрос."; return; }
      err.textContent="";
      alert("DEMO: заявка ушла бы в канал Telegram.\n"+JSON.stringify({email,phone,tg,msg},null,2));
      form.reset();
    });
  }

  // ===== Realistic star sky with moon (canvas) =====
  const cvs=document.getElementById("sky"); const ctx=cvs.getContext("2d",{alpha:true});
  function draw(){
    const dpr=Math.max(1,Math.min(2,window.devicePixelRatio||1));
    const rect=cvs.getBoundingClientRect();
    cvs.width=Math.floor(rect.width*dpr); cvs.height=Math.floor(rect.height*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);

    // space gradient
    const g1=ctx.createRadialGradient(rect.width*0.25,rect.height*0.2,10,rect.width*0.2,rect.height*0.2,Math.max(rect.width,rect.height)*0.9);
    g1.addColorStop(0,"#242f4d"); g1.addColorStop(1,"#13182b");
    ctx.fillStyle=g1; ctx.fillRect(0,0,rect.width,rect.height*0.85);

    // stars
    const count=Math.floor((rect.width*rect.height)/1100);
    for(let i=0;i<count;i++){
      const x=Math.random()*rect.width, y=Math.random()*rect.height*0.82;
      const r=Math.random()<0.06?1.7:(Math.random()<0.15?1.2:0.8); const o=0.4+Math.random()*0.6;
      ctx.globalAlpha=o; ctx.fillStyle="#fff9f0"; ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fill();
      if(Math.random()<0.08){ const gg=ctx.createRadialGradient(x,y,0,x,y,r*4); gg.addColorStop(0,"rgba(255,249,240,0.8)"); gg.addColorStop(1,"rgba(255,249,240,0)"); ctx.fillStyle=gg; ctx.beginPath(); ctx.arc(x,y,r*4,0,Math.PI*2); ctx.fill(); }
    }

    // moon
    const cx=rect.width*0.82, cy=rect.height*0.22, R=rect.height*0.11;
    const mg=ctx.createRadialGradient(cx-R*0.3,cy-R*0.3,R*0.2,cx,cy,R);
    mg.addColorStop(0,"#f7f1e6"); mg.addColorStop(1,"#cfc5b2");
    ctx.save(); ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2); ctx.clip();
    ctx.fillStyle=mg; ctx.fillRect(cx-R*1.2,cy-R*1.2,R*2.4,R*2.4);
    ctx.globalCompositeOperation="destination-out"; ctx.beginPath(); ctx.arc(cx-R*0.2,cy-R*0.1,R*0.8,0,Math.PI*2); ctx.fill();
    ctx.globalCompositeOperation="source-over"; ctx.globalAlpha=0.6;
    for(let i=0;i<18;i++){ const a=Math.random()*Math.PI*2, rr=R*(0.05+Math.random()*0.1);
      const rx=cx+Math.cos(a)*R*0.5, ry=cy+Math.sin(a)*R*0.5;
      const cg=ctx.createRadialGradient(rx-rr*0.3,ry-rr*0.3,rr*0.1,rx,ry,rr);
      cg.addColorStop(0,"#cfc6b6"); cg.addColorStop(1,"rgba(207,198,182,0)");
      ctx.fillStyle=cg; ctx.beginPat
