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
      badge:"👑 Личное наставничество Angela Pearl • Все видеокурсы.",
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
      badge:"👑 Личное наставничество Angela Pearl • Все видеокурсы.",
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
        <a href="/invoice?id=${encodeURIComponent(c.id)}" class="btn btn-cta"
           onclick="event.preventDefault();alert('DEMO: открылось бы /invoice?id=${esc(c.id)}');">Получить доступ</a>
      </div>
    </article>`;
  function render(){ const list=currentTab==="tarot"?TAROT:ASTRO; cardsEl.innerHTML=list.map(card).join(""); }
  tabTarot.addEventListener("click",()=>{currentTab="tarot";tabTarot.classList.add("is-active");tabAstro.classList.remove("is-active");render();});
  tabAstro.addEventListener("click",()=>{currentTab="astro";tabAstro.classList.add("is-active");tabTarot.classList.remove("is-active");render();});
  render();

  // ===== Support form validation =====
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
      alert("DEMO: заявка ушла бы в Telegram.\n"+JSON.stringify({email,phone,tg,msg},null,2));
      form.reset();
    });
  }
})();
