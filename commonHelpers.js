import{S as l,i}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();function d(t){const n=`https://pixabay.com/api/?key=43322409-71cdbf6ef8f62fb1f69ac5609&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(r=>{if(!r.status)throw new Error("Network response was not ok");return r.json()})}const c=new l("#gallery .image-card",{captionsData:"alt",captionsPosition:"bottom",captionDelay:250});c.refresh();function u(t){const o=document.getElementById("gallery");o.innerHTML="";const n=t.map(r=>f(r));o.append(...n),c.refresh()}function f(t){const o=`
    <a class="image-card" href="${t.largeImageURL}">
      <img src="${t.webformatURL}" alt="${t.tags}">
      <div class="metadata-container">
        <p>Likes: ${t.likes}</p>
        <p>Views: ${t.views}</p>
        <p>Comments: ${t.comments}</p>
        <p>Downloads: ${t.downloads}</p>
      </div>
    </a>
  `,n=document.createElement("div");return n.innerHTML=o,n.firstElementChild}document.getElementById("search-form").addEventListener("submit",function(t){t.preventDefault();const o=document.getElementById("search-input").value.trim();if(o===""){i.error({title:"Error",message:"Please enter a search keyword."});return}document.getElementById("search-input").value="";const n=document.getElementById("loader");n.style.display="block",d(o).then(r=>{if(r.hits.length===0)throw new Error("No images found");return r.hits}).then(r=>{if(r.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}u(r)}).catch(r=>{}).finally(()=>{n.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
