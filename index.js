import{a as d,S as g,i}from"./assets/vendor-D8hBcPQM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="52351532-fc595975ad786aa616f582edd";function y(a){return d("https://pixabay.com/api/",{params:{key:h,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),p=document.querySelector(".loader"),v=new g(".gallery a",{captionsData:"alt",captionDelay:250});function L(a){const r=a.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:n,comments:f,downloads:m})=>`
      <li class="gallery-item">
        <a href="${o}">
          <img src="${s}" alt="${e}" />
          <div class="info">
            <p><span class='label'>Likes:</span><span class='value'>${t}</span></p>
            <p><span class='label'>Views:</span> <span class='value'>${n}</span></p>
            <p><span class='label'>Comments:</span> <span class='value'>${f}</span></p>
            <p><span class='label'>Downloads:</span> <span class='value'>${m}</span></p>
          </div>
        </a>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),v.refresh()}function b(){c.innerHTML=""}function S(){p.classList.add("active")}function l(){p.classList.remove("active")}const u=document.querySelector(".form"),q=u.querySelector('input[name="search-text"]');u.addEventListener("submit",w);function w(a){a.preventDefault();const r=q.value.trim();if(!r){i.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}b(),S(),y(r).then(s=>{if(l(),!s.hits||s.hits.length===0){i.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(s.hits)}).catch(s=>{l(),i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(s)})}
//# sourceMappingURL=index.js.map
