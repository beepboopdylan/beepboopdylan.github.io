
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
var speed = 50;

function typeWriter() {
  if (i <= txt.length) {
    // Update innerHTML by slicing the txt variable to get progressively more of the string
    document.getElementById("typewriter-content").innerHTML = txt.slice(0, i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Call the typewriter function when the page loads
window.onload = function() {
  typeWriter();
};
