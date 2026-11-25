const products = [
 {name:"BASF Novasil Plus",category:"Mycotoxin Binder",pack:"25 KG",image:"assets/basf-novasil-plus.png",description:"BASF Novasil™ Plus mycotoxin binder. Product packaging identifies it as a mycotoxin binder.",extra:"Pack information shown on supplied product artwork: 25 kg."},
 {name:"Mega-Tox",category:"Clay-Based Toxin Binder",pack:"25 KG",image:"assets/mega-tox.png",description:"Clay-based toxin binder for animal feed.",extra:"Composition per kg: Bentonite 400 g, Clinoptilolite (Zeolite) 300 g, Sepiolite 150 g, Montmorillonite 100 g, Yeast Cell Wall 25 g, Niacin (Vitamin B3) 0.5 g, Calcium Carbonate q.s. Dosage shown: 0.5–1 kg per ton of feed."},
 {name:"Mega-Tox Plus",category:"Natural Yeast Feed Additive",pack:"25 KG",image:null,description:"Natural yeast and vitamins feed additive, as specified for this catalog.",extra:"The supplied PDF does not include a Mega-Tox Plus package image. Contact us to confirm product details and availability."},
 {name:"Heavy Gold",category:"Vitamins and Minerals Supplement",pack:"1 KG",image:"assets/heavy-gold.png",description:"5-in-1 supplement featuring Bypass Fat, Yeast, Vitamins, Minerals and DCP.",extra:"Minimum order: 8 pouches."},
 {name:"Life Gripe Water",category:"Veterinary Oral Liquid",pack:"5 Litres",image:"assets/life-gripe-water.png",description:"Veterinary oral liquid for cattle, goats and sheep.",extra:"Pack size and animal use are stated on the supplied product artwork."},
 {name:"Buttery Milk",category:"Calf Milk Replacer",pack:"20 KG",image:"assets/buttery-milk.png",description:"Calf milk replacer. The packaging states that 1 kg of powder makes 10 litres of milk.",extra:"Mixing statement: 1 kg powder = 10 litres of milk."}
];
const grid = document.getElementById("productGrid");
function waLink(name){const message=`Assalam o Alaikum, I want to know the price and availability of ${name}.`;return `https://wa.me/923192566030?text=${encodeURIComponent(message)}`;}
grid.innerHTML = products.map((p,i)=>`
 <article class="product-card" id="product-${i+1}">
  <div class="product-image">${p.image?`<img src="${p.image}" alt="${p.name} original product artwork" loading="lazy">`:`<div class="product-placeholder"><span>✚</span><strong>${p.name}</strong><small>Product image not included in supplied PDF</small></div>`}</div>
  <div class="product-info"><span class="product-category">${p.category}</span><h3>${p.name}</h3><span class="pack">Pack size: ${p.pack}</span><p>${p.description}</p><div class="product-extra">${p.extra}</div><a class="order-btn" href="${waLink(p.name)}" target="_blank" rel="noopener">Enquire / Order on WhatsApp ↗</a></div>
 </article>`).join("");
document.getElementById("year").textContent = new Date().getFullYear();
const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");}));
