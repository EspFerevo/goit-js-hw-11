import{i as a,S as i}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();function l(n){const s=`https://pixabay.com/api/?key=43322409-71cdbf6ef8f62fb1f69ac5609&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{if(r.hits.length===0)throw new Error("No images found");return r.hits}).catch(r=>[])}function d(n){const e=document.getElementById("gallery");if(e.innerHTML="",n.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}n.forEach(s=>{const r=u(s);e.appendChild(r)}),new i("#gallery .image-card").refresh()}function u(n){const e=document.createElement("a");e.classList.add("image-card"),e.href=n.largeImageURL;const s=document.createElement("img");s.src=n.webformatURL,s.alt=n.tags;const r=document.createElement("p");r.textContent=`Likes: ${n.likes}`;const t=document.createElement("p");t.textContent=`Views: ${n.views}`;const o=document.createElement("p");o.textContent=`Comments: ${n.comments}`;const c=document.createElement("p");return c.textContent=`Downloads: ${n.downloads}`,e.appendChild(s),e.appendChild(r),e.appendChild(t),e.appendChild(o),e.appendChild(c),e}document.getElementById("search-form").addEventListener("submit",async function(n){n.preventDefault();const e=document.getElementById("search-input").value.trim();if(e===""){a.error({title:"Error",message:"Please enter a search keyword."});return}const s=document.getElementById("loader");s.style.display="block";try{const r=await l(e);d(r)}catch{}finally{s.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
