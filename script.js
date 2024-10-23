
var i = 0;
var txt = 
`<span class="keyword">def</span> <span class="function">dylan_tran</span><span class="symbols">():</span><br>
<p><span class="text"># I am a junior in </span></p>
<p><span class="interests">interests = [</span>
<span class="text">linguistics</span><span class="keyword">,</span> <span class="text">hello</span><span class="keyword">,</span> 
<span class="text">cryptography</span><span class="keyword">,</span> <span class="text">and other stuff</span>
<span class="interests">]</span></p>
<p><span class="interests">languages = [</span>
<span class="text">python</span><span class="keyword">,</span> <span class="text">java</span><span class="keyword">,</span> 
<span class="text">c</span><span class="keyword">,</span> <span class="text">sql</span><span class="keyword">,</span> 
<span class="text">html</span><span class="keyword">,</span> <span class="text">css</span><span class="keyword">,</span> 
<span class="text">Arabic</span><span class="interests">]</span></p>`;
var speed = 20;
var step = 3;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter-content").innerText += txt.substring(i, i + step);
    i += step;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("typewriter-content").innerHTML = txt;  // Switch to innerHTML to render the HTML properly after typing is complete
  }
}

// Call the typewriter function when the page loads
window.onload = function() {
  typeWriter();
};
