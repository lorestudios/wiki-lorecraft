import{_ as a,c,b as t,d as e,a as l,w as n,e as i,r as d,o as r}from"./app.41cfcdb1.js";const st=JSON.parse('{"title":"Commands","description":"","frontmatter":{"title":"Commands"},"headers":[{"level":2,"title":"Teleporting Commands","slug":"teleporting-commands","link":"#teleporting-commands","children":[]},{"level":2,"title":"Moving Commands","slug":"moving-commands","link":"#moving-commands","children":[]},{"level":2,"title":"Selection Commands","slug":"selection-commands","link":"#selection-commands","children":[]},{"level":2,"title":"Clipboard Commands","slug":"clipboard-commands","link":"#clipboard-commands","children":[]},{"level":2,"title":"Copy code outside the table","slug":"copy-code-outside-the-table","link":"#copy-code-outside-the-table","children":[]}],"relativePath":"documentation/commands.md"}'),u={name:"documentation/commands.md"},h={id:"commands-list",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#commands-list","aria-hidden":"true"},"#",-1),m=t("p",null,[e("Lorecraft has a wide range of commands available to players and builders. All commands are started with the forward slash symbol "),t("code",null,"/<command>"),e(", sometimes it is a double foward slash "),t("code",null,"//<command"),e(".")],-1),p=t("h2",{id:"teleporting-commands",tabindex:"-1"},[e("Teleporting Commands "),t("a",{class:"header-anchor",href:"#teleporting-commands","aria-hidden":"true"},"#")],-1),g=t("thead",null,[t("tr",null,[t("th",null,"NAME"),t("th",{style:{"text-align":"center"}},"COMMNAND"),t("th",{style:{"text-align":"left"}},"DESCRIPTION")])],-1),y=t("td",null,[t("strong",null,"Teleport")],-1),f={style:{"text-align":"center"}},x=t("code",null,"/tp <x> <y> <z>",-1),b=t("td",{style:{"text-align":"left"}},"Teleport to the xyz coordinates stated",-1),C=t("td",null,[t("strong",null,"Teleport Request")],-1),N={style:{"text-align":"center"}},T=t("code",null,"/tpr <player name>",-1),S=t("td",{style:{"text-align":"left"}},"Request to teleport to player",-1),v=t("td",null,[t("strong",null,"Teleport Here")],-1),A={style:{"text-align":"center"}},w=t("code",null,"/tph <player name>",-1),M=t("td",{style:{"text-align":"left"}},"Request for player to teleport to you",-1),P=t("td",null,[t("strong",null,"Teleport Accept")],-1),R={style:{"text-align":"center"}},k=t("code",null,"/tpa",-1),D=t("td",{style:{"text-align":"left"}},"Accept Teleport Request/Here",-1),E=t("h2",{id:"moving-commands",tabindex:"-1"},[e("Moving Commands "),t("a",{class:"header-anchor",href:"#moving-commands","aria-hidden":"true"},"#")],-1),I=t("thead",null,[t("tr",null,[t("th",null,"NAME"),t("th",{style:{"text-align":"center"}},"COMMNAND"),t("th",{style:{"text-align":"left"}},"DESCRIPTION")])],-1),O=t("td",null,[t("strong",null,"Speed")],-1),q={style:{"text-align":"center"}},z=t("td",{style:{"text-align":"left"}},"Adjust walk and fly speed",-1),V=t("td",null,[t("strong",null,"No Clip")],-1),B={style:{"text-align":"center"}},F=t("code",null,"/nc",-1),$=t("td",{style:{"text-align":"left"}},"Fly through blocks",-1),L=t("h2",{id:"selection-commands",tabindex:"-1"},[e("Selection Commands "),t("a",{class:"header-anchor",href:"#selection-commands","aria-hidden":"true"},"#")],-1),H=t("thead",null,[t("tr",null,[t("th",null,"NAME"),t("th",null,"COMMNAND"),t("th",{style:{"text-align":"left"}},"DESCRIPTION")])],-1),W=t("td",null,[t("strong",null,"Selection Wand")],-1),j=t("code",null,"/wand",-1),G=t("td",{style:{"text-align":"left"}},"Gives you a selection wand (Wooden Axe)",-1),J=t("tr",null,[t("td",null,[t("strong",null,"Farwand")]),t("td",null,[t("code",null,"/farwand")]),t("td",{style:{"text-align":"left"}},"Allows wand to select from a distance")],-1),K=t("tr",null,[t("td",null,[t("strong",null,"Position Select 1")]),t("td",null,[t("code",null,"//1"),e(" or "),t("code",null,"//pos1")]),t("td",{style:{"text-align":"left"}},"Selects first position of a cuboid area")],-1),Q=t("tr",null,[t("td",null,[t("strong",null,"Position Select 2")]),t("td",null,[t("code",null,"//2"),e(" or "),t("code",null,"//pos2")]),t("td",{style:{"text-align":"left"}},"Selects second position of a cuboid area")],-1),U=t("tr",null,[t("td",null,[t("strong",null,"Clear Selection")]),t("td",null,[t("code",null,"//none")]),t("td",{style:{"text-align":"left"}},"Clears the current selection")],-1),X=i('<h2 id="clipboard-commands" tabindex="-1">Clipboard Commands <a class="header-anchor" href="#clipboard-commands" aria-hidden="true">#</a></h2><table><thead><tr><th>NAME</th><th>COMMNAND</th><th style="text-align:left;">DESCRIPTION</th></tr></thead><tbody><tr><td><strong>Copy</strong></td><td><code>//copy [-b] [-m] [-e]</code></td><td style="text-align:left;">Copy to clipboard</td></tr><tr><td></td><td><code>-b</code></td><td style="text-align:left;">copy biome</td></tr><tr><td></td><td><code>-m</code></td><td style="text-align:left;">copy mask - no air</td></tr><tr><td></td><td><code>-e</code></td><td style="text-align:left;">copy entities</td></tr><tr><td><strong>Lazycopy</strong></td><td><code>//lazycopy [-b] [-m] [-e]</code></td><td style="text-align:left;">For copying large selections</td></tr><tr><td><strong>Paste</strong></td><td><code>//paste [-s] [-a] [-o]</code></td><td style="text-align:left;">Paste clipboard to your position</td></tr><tr><td><strong>Rotate</strong></td><td><code>//rotate &lt;y&gt; [x] [z]</code></td><td style="text-align:left;">Rotates clipboard. eg. <code>//rotate 90</code></td></tr><tr><td><strong>Flip</strong></td><td><code>//flip [direction]</code></td><td style="text-align:left;">Flips clipboard in direction <code>[left]</code> <code>[right]</code></td></tr></tbody></table><h2 id="copy-code-outside-the-table" tabindex="-1">Copy code outside the table <a class="header-anchor" href="#copy-code-outside-the-table" aria-hidden="true">#</a></h2><p>you have to use &quot;&amp;lt&quot; instead of &quot;&lt;&quot;. Otherwise the browser will read this as html tag not a string.</p>',4);function Y(Z,tt,et,lt,ot,nt){const s=d("Badge"),o=d("cc");return r(),c("div",null,[t("h1",h,[e("Commands List "),l(s,{type:"tip",text:"More command coming!"}),e(),_]),m,p,t("table",null,[g,t("tbody",null,[t("tr",null,[y,t("td",f,[l(o,null,{default:n(()=>[x]),_:1})]),b]),t("tr",null,[C,t("td",N,[l(o,null,{default:n(()=>[T]),_:1})]),S]),t("tr",null,[v,t("td",A,[l(o,null,{default:n(()=>[w]),_:1})]),M]),t("tr",null,[P,t("td",R,[l(o,null,{default:n(()=>[k]),_:1})]),D])])]),E,t("table",null,[I,t("tbody",null,[t("tr",null,[O,t("td",q,[l(o,null,{default:n(()=>[e("/speed <1 - 10>")]),_:1})]),z]),t("tr",null,[V,t("td",B,[l(o,null,{default:n(()=>[F]),_:1})]),$])])]),L,t("table",null,[H,t("tbody",null,[t("tr",null,[W,t("td",null,[l(o,null,{default:n(()=>[j]),_:1})]),G]),J,K,Q,U])]),X,l(o,null,{default:n(()=>[e("`/tp <x > <y > <z >`")]),_:1})])}const at=a(u,[["render",Y]]);export{st as __pageData,at as default};
