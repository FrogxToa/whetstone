/* Whetstone — shared site script */
(function(){'use strict';

// ── SEARCH INDEX ──────────────────────────────────────────────────────────────
var IDX=[
  {n:'D-01',t:'Tower of Origins',u:'tower-of-origins.html',g:'Endgame · Resources',x:'honing points origin radiance seasonal counters soul orb bloom balrog ephenia shop priorities season currency winter stumpy potion weakness'},
  {n:'D-02',t:'FAQs and Dailies',u:'faqs-dailies.html',g:'Dailies · Economy',x:'daily checklist red diamonds moonstone prestige servant reward moon mining blue gems friend points arena duel world boss dojo sweep'},
  {n:'D-03',t:'Event Timeline',u:'event-timeline.html',g:'Events · Reference',x:'cultivation event wings fragment lucky recast abyss solvent monthly log server day week w1 w37 server day 63 65 102'},
  {n:'D-04',t:'Coloured Diamonds',u:'coloured-diamonds.html',g:'Spending · F2P',x:'coloured diamonds CD SGD pricing bundles value per diamond 10cd best value monthly card daily pack'},
  {n:'D-05',t:'Daily 600 Prestige',u:'daily-600-prestige.html',g:'Spending · P2W',x:'prestige 600 9cd legendary level benefit mid spender monthly essential servant reward prestige pack'},
  {n:'D-06',t:'Build Fundamentals',u:'build.html',g:'Build · Mechanics',x:'hit rate atk case study monster card distribution rage initial rage gain viking seruf prom mask vampire instinct wings dojo floors'},
  {n:'D-07',t:'Runes and Abyss',u:'runes-abyss.html',g:'Runes · Abyss',x:'rune skill priority solvent lucky recast vortex abyss tier shura nightmare solvent enhancement level rating recast master appraise'},
  {n:'D-08',t:'Pet Compendium',u:'pets.html',g:'Pets · EXR',x:'exr pets soul teddy gatekeeper cornian hobgoblin blue dragon turtle gryphon birk kentaurus optimal lineup pvp pve dojo bond system swell UR copy target MR tier crocky mini castle golem prison guard rhino kru centipede panda day 253 323 379 456 512 568 official names buffoon shortblade lizard hobi nutty sheep'},
  {n:'D-09',t:'EXR Cultivation Events',u:'exr-cultivation.html',g:'Events · Spending',x:'exr cultivation moonstone income rainbow run event shop prestige top up 702 cd 12 copies soul teddy pity'},
  {n:'D-10',t:'Stigmata Reference',u:'stigmata.html',g:'Stigmata · Reference',x:'stigmata shard upgrade costs fragments 1030 attack potential combat scar vampire instinct defense potential star close shop rage bud flower day 134 potential stones ATK DEF HP open days blue stigmata mysterious trace black yaksha prom mask'},
  {n:'D-11',t:'Dojo Tips and Tricks',u:'dojo-tips.html',g:'Dojo · Technique',x:'s1 jump cancel thief 4 rage prerequisite hit rate card guard defense birk rage potion timing hex locked multi boss positioning darkgoo trojan'},
  {n:'D-12',t:'Land of Chaos and Totems',u:'loc-totems.html',g:'Totems · LOC',x:'land of chaos totem critical state steak celebrity stability knockback gold totem resonance guild coins 12000 weekly LOC rewards red diamonds candy coins totem essence totem fragments progress awards divine moon stones silver totem fragment chapter 140 160'},
  {n:'D-13',t:'Devour System',u:'devour.html',g:'Devour · Progression',x:'devour unlock level 160 150 162 172 server day 78 71 99 pet SSR SR UR creature EXP skill bonus stigmata wings orbs'},
  {n:'D-14',t:'Class Guide',u:'class.html',g:'Class · Meta',x:'class tier list mental link pvp pve warrior thief bowman mage cannoneer day 25 change cygnus skill 3 rage skill world boss ranking'},
  {n:'D-15',t:'Wings Cultivation Events',u:'wings-cultivation.html',g:'Events · Wings',x:'nirvana wings fragment point value cd spend N2 N3 N4 N5 N6 N7 soul power fire dusty silent twinkling sparkling burning tinder level 7 gold wings pure intention zakum claw lithe dream glory gilt cyber exoskeleton green blessing unquenched flame ethereal branch thorns coronation doodle jelly utopia fallen wing dream breaker blue bird golden phoenix burning nightmare spectral frozen bough oceanic churning mermaid foam dragon rosebud phantasmagoric fallen angel mercy musical rhythm'},
  {n:'D-16',t:'Monster Cards',u:'monster-cards.html',g:'Cards · Meta',x:'monster card T1 T2 threshold 500 total level set bonus soul of attack guard defense orange yellow card levelling priority extraction purple'},
  {n:'D-17',t:'Soul Orbs',u:'soul-orbs.html',g:'Soul Orbs',x:'ephenia balrog ratio 1.15 fragment ranking event red orb orange orb 1363 1386 1220 soul bloom level stars f2p evil stone magnus cygnus netherworld monk arkarium administrator rousseau von leon holy beast pink bean crimson queen pierre von bon vellum lotus hilla damien day 29 92 148 204 309 365 421 477 533 589 645 701'},
  {n:'D-18',t:'Off-Road Gamblers',u:'off-road.html',g:'Off-Road · Economy',x:'off road gamblers token betting multiplier 5x coins moonstone daily shop 30 moonstones month'},
  {n:'D-19',t:'Costume Guide',u:'costumes.html',g:'Costumes · PvP',x:'costume resistance stun petrify hex time reduction seasonal set no star upgrade hawaiian british prom armor hair'},
  {n:'D-20',t:'Dungeon Guide',u:'dungeons.html',g:'Dungeons · Progression',x:'dungeon daily sweep ticket keys rewards progression gear upgrade'},
  {n:'D-21',t:'Gem Cultivation & Events',u:'gem-cultivation.html',g:'Events · W6',x:'gem cultivation ranking pet competition monster battle happy hammer voucher crazy mode fragment synthesis UR points scoring event shop packs red diamond'},
  {n:'Bible',t:'MapleRevolution Bible',u:'bible.html',g:'Interactive · Calculator',x:'levelling calculator exp soul orb wings fragments tinder stigmata monster cards pets homeland tracker question bank 379 translations resources'}
];

// ── SEARCH OVERLAY ────────────────────────────────────────────────────────────
var overlay,input,results;
function buildOverlay(){
  overlay=document.createElement('div');
  overlay.id='search-overlay';
  overlay.innerHTML='<div id="so-box"><div id="so-header"><span id="so-icon">🔍</span><input id="so-input" type="text" placeholder="Search dossiers…" autocomplete="off" spellcheck="false"/><button id="so-close">ESC</button></div><div id="so-results"></div><div id="so-hint">Press <kbd>/</kbd> to search · <kbd>↑↓</kbd> navigate · <kbd>Enter</kbd> open</div></div>';
  document.body.appendChild(overlay);
  input=overlay.querySelector('#so-input');
  results=overlay.querySelector('#so-results');
  input.addEventListener('input',doSearch);
  input.addEventListener('keydown',navResults);
  overlay.addEventListener('click',function(e){ if(e.target===overlay)closeSearch(); });
  overlay.querySelector('#so-close').addEventListener('click',closeSearch);
}
function openSearch(){
  if(!overlay)buildOverlay();
  overlay.classList.add('open');
  setTimeout(function(){input.focus();},50);
  doSearch();
}
function closeSearch(){
  if(overlay)overlay.classList.remove('open');
  if(input)input.value='';
}
function doSearch(){
  var q=(input.value||'').toLowerCase().trim();
  var hits=q?IDX.filter(function(d){ return (d.t+' '+d.g+' '+d.x+' '+d.n).toLowerCase().indexOf(q)>-1; }):IDX;
  results.innerHTML=hits.length?hits.map(function(d,i){
    return '<a class="so-row" href="'+d.u+'" tabindex="-1"><span class="so-num">'+d.n+'</span><span class="so-info"><strong>'+d.t+'</strong><span class="so-tags">'+d.g+'</span></span><span class="so-arr">→</span></a>';
  }).join(''):'<div class="so-empty">No results for "'+input.value+'"</div>';
}
function navResults(e){
  if(e.key==='Escape'){closeSearch();return;}
  var rows=results.querySelectorAll('.so-row');
  if(!rows.length)return;
  var cur=results.querySelector('.so-row.active');
  var idx=cur?Array.from(rows).indexOf(cur):-1;
  if(e.key==='ArrowDown'){e.preventDefault();var next=rows[Math.min(idx+1,rows.length-1)];if(cur)cur.classList.remove('active');next.classList.add('active');next.scrollIntoView({block:'nearest'});}
  else if(e.key==='ArrowUp'){e.preventDefault();var prev=rows[Math.max(idx-1,0)];if(cur)cur.classList.remove('active');prev.classList.add('active');prev.scrollIntoView({block:'nearest'});}
  else if(e.key==='Enter'){var a=results.querySelector('.so-row.active')||rows[0];if(a){closeSearch();window.location.href=a.href;}}
}
document.addEventListener('keydown',function(e){
  if(e.key==='/'&&e.target.tagName!=='INPUT'&&e.target.tagName!=='TEXTAREA'){e.preventDefault();openSearch();}
  if(e.key==='Escape'&&overlay&&overlay.classList.contains('open'))closeSearch();
});

// ── READING PROGRESS BAR ─────────────────────────────────────────────────────
var bar=document.createElement('div');
bar.id='progress-bar';
document.body.insertBefore(bar,document.body.firstChild);
window.addEventListener('scroll',function(){
  var d=document.documentElement;
  var pct=d.scrollTop/(d.scrollHeight-d.clientHeight)*100;
  bar.style.width=Math.min(100,pct)+'%';
},{passive:true});

// ── MOBILE NAV ────────────────────────────────────────────────────────────────
var navInner=document.querySelector('.nav-inner');
var navLinks=document.querySelector('.nav-links');
if(navInner&&navLinks){
  var ham=document.createElement('button');
  ham.className='hamburger';
  ham.setAttribute('aria-label','Menu');
  ham.innerHTML='<span></span><span></span><span></span>';
  navInner.appendChild(ham);
  ham.addEventListener('click',function(){ham.classList.toggle('open');navLinks.classList.toggle('mobile-open');});
  document.addEventListener('click',function(e){if(!navInner.contains(e.target)){ham.classList.remove('open');navLinks.classList.remove('mobile-open');}});
}

// ── SCROLL REVEAL ────────────────────────────────────────────────────────────
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){entry.target.classList.add('revealed');io.unobserve(entry.target);}
    });
  },{threshold:0.07,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.card,.tldr-cell,.fact,.index-row,.guide-section,.section-head').forEach(function(el){
    el.classList.add('will-reveal');io.observe(el);
  });
}

// ── PARALLAX HERO ─────────────────────────────────────────────────────────────
var heroFloat=document.querySelector('.hero-float');
if(heroFloat){
  window.addEventListener('scroll',function(){
    heroFloat.style.transform='translateY('+window.scrollY*0.25+'px)';
  },{passive:true});
}

// ── SPARKLE ON CLICK ─────────────────────────────────────────────────────────
var SPARKS=['✦','✧','⋆','✸','✹','★'];
function spark(x,y){
  for(var i=0;i<6;i++){
    var s=document.createElement('span');
    s.className='sparkle-fx';
    s.textContent=SPARKS[Math.floor(Math.random()*SPARKS.length)];
    var angle=Math.random()*360;
    var dist=20+Math.random()*30;
    s.style.cssText='position:fixed;left:'+x+'px;top:'+y+'px;pointer-events:none;z-index:9999;font-size:'+(10+Math.random()*8)+'px;color:var(--amber);animation:sparkPop 0.55s ease-out forwards;--sx:'+(Math.cos(angle*Math.PI/180)*dist)+'px;--sy:'+(Math.sin(angle*Math.PI/180)*dist)+'px';
    document.body.appendChild(s);
    setTimeout(function(el){return function(){if(el.parentNode)el.parentNode.removeChild(el);};}(s),600);
  }
}
document.addEventListener('click',function(e){
  var el=e.target.closest('.section-num,.article-head .dossier,.tldr-cell .n,.brand');
  if(el)spark(e.clientX,e.clientY);
});

// ── FIGURE LIGHTBOX ──────────────────────────────────────────────────────────
(function(){
  var lb=null;
  function buildLB(){
    lb=document.createElement('div');
    lb.id='fig-lightbox';
    lb.innerHTML='<img src="" alt=""/><div class="lb-cap"></div>';
    document.body.appendChild(lb);
    lb.addEventListener('click',closeLB);
    document.addEventListener('keydown',function(e){if(e.key==='Escape')closeLB();});
  }
  function openLB(src,alt,cap){
    if(!lb)buildLB();
    var img=lb.querySelector('img');
    img.src=src;img.alt=alt||'';
    lb.querySelector('.lb-cap').textContent=cap||'';
    lb.classList.add('open');
  }
  function closeLB(){ if(lb)lb.classList.remove('open'); }
  document.addEventListener('click',function(e){
    var fig=e.target.closest('.figure.expandable');
    if(!fig)return;
    var img=fig.querySelector('img');
    var cap=fig.querySelector('figcaption');
    if(img)openLB(img.src,img.alt,cap?cap.textContent.replace(/\s*⊕\s*$/,'').trim():'');
  });
})();

// ── SEARCH BUTTON IN NAV ──────────────────────────────────────────────────────
var nlinks=document.querySelector('.nav-links');
if(nlinks){
  var sbtn=document.createElement('button');
  sbtn.className='nav-search-btn';
  sbtn.setAttribute('aria-label','Search (/)');
  sbtn.innerHTML='<span>⌕</span>';
  nlinks.appendChild(sbtn);
  sbtn.addEventListener('click',openSearch);
}

})();
