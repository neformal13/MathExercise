import katex from "katex";
import "katex/dist/katex.min.css";
import "../styles/math.css";
import * as R from "ramda";

let $$ = R.curry(katex.renderToString)(R.__, { displayMode: true });
let $_ = R.curry(katex.renderToString)(R.__, { displayMode: false });

export const tasks = [
  `
    Довжина AB = 1 <br/>
    Визначити координати точок <br/>
    A, B, C, D, E, F

    <svg class="figure" width="314px" height="208px" viewBox="0 0 314 208">
      <g class="figure__axes">
        <line x1="101.5" y1="22.5"  x2="101.5" y2="200"/>
        <line x1="0.5"   y1="187.5" x2="294"   y2="187.5"/>
      </g>

      <text class="figure__axes-label" x="97" y="15">y</text>
      <text class="figure__axes-label" x="303" y="191" >x</text>

      <path d="M66 125.5 l35.8-62 h71.4l35.8 62-35.8 62 h-71.4 z" class="figure__main"/>

      <text class="figure__text-label" x="88" y="203">A</text>
      <text class="figure__text-label" x="214" y="129">C</text>
      <text class="figure__text-label" x="179" y="62">D</text>
      <text class="figure__text-label" x="88" y="63">E</text>
      <text class="figure__text-label" x="52" y="129">F</text>
      <text class="figure__text-label" x="175" y="204">B</text>

      <circle r="2.5" class="figure__point" cx="173.5" cy="64.5"/>
      <circle r="2.5" class="figure__point" cx="208.5" cy="125.5"/>
      <circle r="2.5" class="figure__point" cx="101.5" cy="64.5"/>
      <circle r="2.5" class="figure__point" cx="101.5" cy="187.5"/>
      <circle r="2.5" class="figure__point" cx="173.5" cy="187.5"/>
      <circle r="2.5" class="figure__point" cx="66.5" cy="125.5"/>
    </svg>
  `,
  `Сума цифр двозначного числа рівна 6. Якщо до цього числа додати 18, то отримаємо число, записане тими ж цифрами, тільки в зворотньому порядку. Найдіть це число.`,
  `Якщо деяке двозначне число помножити на суму його цифр, то отримаємо 405. Якщо число написане тими ж цифрами в зворотньому порядку, помножити на суму його цифр, то отримаємо 486. Найдіть це число.`,
  `Знайдіть три числа з яких друге більше першого на стільки ж на скільки третє більше за друге, якщо відомо, що добуток двох менших чисел рівний 85, а добуток двох більших чисел рівний 115.`,
  `Сума двох чисел дорівнює 15, а середнє арифметичне на 25% більше середнього геометричного. Знайдіть ці числа.`,

  `Знайдіть х, якщо: <br/> 
    ${katex.renderToString("\\frac{0,1(6) + 0,(3)}{0,(3)+1,1(6)}x=10", {
      displayMode: true
    })}`
];

export const helpers = [
  {
    title: "Квадратне рівняння",
    tags: ["Дискрімінант"],
    description: `
      <span class="math">${$$("ax^{2}+bx+c=0")}</span>
      <span class="math">${$$("D = b^{2}-4ac")}</span>
      <span class="math">${$$("x_{1,2} = \\frac{-b \\pm \\sqrt D}{2a}")}</span>
    `
  },
  {
    //TODO: use MahtJax
    // online renderer - https://viereck.ch/latex-to-svg/
    /*
laTeX source
0.\alpha_{1}\alpha_{2}...\alpha_{n}(\beta_{1}\beta_{2}...\beta_{m})=
\frac{
    \overline{\alpha_{1}\alpha_{2}...\alpha_{n}\beta_{1}\beta_{2}...\beta_{m}} -
    \overline{\alpha_{1}\alpha_{2}...\alpha_{n}}
  }
{\underbrace{99...9}_{\text{m}}\underbrace{00...0}_{\text{n}}}
     */
    title: "Дійсні числа, перетворення алгебраїчних виразів",
    tags: ["Дискрімінант"],
    description: `
Змішаний нескінчений дійсний періодичний дріб в простий дріб перетворюється за формулою:  
<span class="math">
      
<svg style="max-width: 100%;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64.964ex" height="9.392ex" viewBox="0 -1809.3 27970.3 4043.8" role="img" focusable="false">
<defs id="MathJax_SVG_glyphs"><path stroke-width="1" id="MJMATHI-78" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path><path stroke-width="1" id="MJMAIN-3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path><path stroke-width="1" id="MJMAIN-73" d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"></path><path stroke-width="1" id="MJMAIN-69" d="M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z"></path><path stroke-width="1" id="MJMAIN-6E" d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q450 438 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path><path stroke-width="1" id="MJMATHI-3C0" d="M132 -11Q98 -11 98 22V33L111 61Q186 219 220 334L228 358H196Q158 358 142 355T103 336Q92 329 81 318T62 297T53 285Q51 284 38 284Q19 284 19 294Q19 300 38 329T93 391T164 429Q171 431 389 431Q549 431 553 430Q573 423 573 402Q573 371 541 360Q535 358 472 358H408L405 341Q393 269 393 222Q393 170 402 129T421 65T431 37Q431 20 417 5T381 -10Q370 -10 363 -7T347 17T331 77Q330 86 330 121Q330 170 339 226T357 318T367 358H269L268 354Q268 351 249 275T206 114T175 17Q164 -11 132 -11Z"></path><path stroke-width="1" id="MJMAIN-30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path><path stroke-width="1" id="MJMAIN-2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z"></path><path stroke-width="1" id="MJMATHI-61" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path><path stroke-width="1" id="MJMATHI-6C" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path><path stroke-width="1" id="MJMATHI-70" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"></path><path stroke-width="1" id="MJMATHI-68" d="M137 683Q138 683 209 688T282 694Q294 694 294 685Q294 674 258 534Q220 386 220 383Q220 381 227 388Q288 442 357 442Q411 442 444 415T478 336Q478 285 440 178T402 50Q403 36 407 31T422 26Q450 26 474 56T513 138Q516 149 519 151T535 153Q555 153 555 145Q555 144 551 130Q535 71 500 33Q466 -10 419 -10H414Q367 -10 346 17T325 74Q325 90 361 192T398 345Q398 404 354 404H349Q266 404 205 306L198 293L164 158Q132 28 127 16Q114 -11 83 -11Q69 -11 59 -2T48 16Q48 30 121 320L195 616Q195 629 188 632T149 637H128Q122 643 122 645T124 664Q129 683 137 683Z"></path><path stroke-width="1" id="MJMAIN-31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path><path stroke-width="1" id="MJMAIN-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path stroke-width="1" id="MJMATHI-6E" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"></path><path stroke-width="1" id="MJMAIN-28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path><path stroke-width="1" id="MJMATHI-62" d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"></path><path stroke-width="1" id="MJMATHI-65" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"></path><path stroke-width="1" id="MJMATHI-74" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"></path><path stroke-width="1" id="MJMATHI-6D" d="M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path><path stroke-width="1" id="MJMAIN-29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path><path stroke-width="1" id="MJMATHI-66" d="M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z"></path><path stroke-width="1" id="MJMATHI-72" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path><path stroke-width="1" id="MJMATHI-63" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"></path><path stroke-width="1" id="MJMATHI-6F" d="M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z"></path><path stroke-width="1" id="MJMATHI-76" d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"></path><path stroke-width="1" id="MJMATHI-69" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path><path stroke-width="1" id="MJMAIN-2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path><path stroke-width="1" id="MJMATHI-75" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path><path stroke-width="1" id="MJMATHI-64" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"></path><path stroke-width="1" id="MJMAIN-39" d="M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z"></path><path stroke-width="1" id="MJMATHI-3B1" d="M34 156Q34 270 120 356T309 442Q379 442 421 402T478 304Q484 275 485 237V208Q534 282 560 374Q564 388 566 390T582 393Q603 393 603 385Q603 376 594 346T558 261T497 161L486 147L487 123Q489 67 495 47T514 26Q528 28 540 37T557 60Q559 67 562 68T577 70Q597 70 597 62Q597 56 591 43Q579 19 556 5T512 -10H505Q438 -10 414 62L411 69L400 61Q390 53 370 41T325 18T267 -2T203 -11Q124 -11 79 39T34 156ZM208 26Q257 26 306 47T379 90L403 112Q401 255 396 290Q382 405 304 405Q235 405 183 332Q156 292 139 224T121 120Q121 71 146 49T208 26Z"></path><path stroke-width="1" id="MJMATHI-3B2" d="M29 -194Q23 -188 23 -186Q23 -183 102 134T186 465Q208 533 243 584T309 658Q365 705 429 705H431Q493 705 533 667T573 570Q573 465 469 396L482 383Q533 332 533 252Q533 139 448 65T257 -10Q227 -10 203 -2T165 17T143 40T131 59T126 65L62 -188Q60 -194 42 -194H29ZM353 431Q392 431 427 419L432 422Q436 426 439 429T449 439T461 453T472 471T484 495T493 524T501 560Q503 569 503 593Q503 611 502 616Q487 667 426 667Q384 667 347 643T286 582T247 514T224 455Q219 439 186 308T152 168Q151 163 151 147Q151 99 173 68Q204 26 260 26Q302 26 349 51T425 137Q441 171 449 214T457 279Q457 337 422 372Q380 358 347 358H337Q258 358 258 389Q258 396 261 403Q275 431 353 431Z"></path><path stroke-width="1" id="MJMAIN-AF" d="M69 544V590H430V544H69Z"></path><path stroke-width="1" id="MJSZ4-E152" d="M-24 327L-18 333H-1Q11 333 15 333T22 329T27 322T35 308T54 284Q115 203 225 162T441 120Q454 120 457 117T460 95V60V28Q460 8 457 4T442 0Q355 0 260 36Q75 118 -16 278L-24 292V327Z"></path><path stroke-width="1" id="MJSZ4-E153" d="M-10 60V95Q-10 113 -7 116T9 120Q151 120 250 171T396 284Q404 293 412 305T424 324T431 331Q433 333 451 333H468L474 327V292L466 278Q375 118 190 36Q95 0 8 0Q-5 0 -7 3T-10 24V60Z"></path><path stroke-width="1" id="MJSZ4-E151" d="M-10 60Q-10 104 -10 111T-5 118Q-1 120 10 120Q96 120 190 84Q375 2 466 -158L474 -172V-207L468 -213H451H447Q437 -213 434 -213T428 -209T423 -202T414 -187T396 -163Q331 -82 224 -41T9 0Q-4 0 -7 3T-10 25V60Z"></path><path stroke-width="1" id="MJSZ4-E150" d="M-18 -213L-24 -207V-172L-16 -158Q75 2 260 84Q334 113 415 119Q418 119 427 119T440 120Q454 120 457 117T460 98V60V25Q460 7 457 4T441 0Q308 0 193 -55T25 -205Q21 -211 18 -212T-1 -213H-18Z"></path><path stroke-width="1" id="MJSZ4-E154" d="M-10 0V120H410V0H-10Z"></path><path stroke-width="1" id="MJMAIN-75" d="M383 58Q327 -10 256 -10H249Q124 -10 105 89Q104 96 103 226Q102 335 102 348T96 369Q86 385 36 385H25V408Q25 431 27 431L38 432Q48 433 67 434T105 436Q122 437 142 438T172 441T184 442H187V261Q188 77 190 64Q193 49 204 40Q224 26 264 26Q290 26 311 35T343 58T363 90T375 120T379 144Q379 145 379 161T380 201T380 248V315Q380 361 370 372T320 385H302V431Q304 431 378 436T457 442H464V264Q464 84 465 81Q468 61 479 55T524 46H542V0Q540 0 467 -5T390 -11H383V58Z"></path><path stroke-width="1" id="MJMAIN-64" d="M376 495Q376 511 376 535T377 568Q377 613 367 624T316 637H298V660Q298 683 300 683L310 684Q320 685 339 686T376 688Q393 689 413 690T443 693T454 694H457V390Q457 84 458 81Q461 61 472 55T517 46H535V0Q533 0 459 -5T380 -11H373V44L365 37Q307 -11 235 -11Q158 -11 96 50T34 215Q34 315 97 378T244 442Q319 442 376 393V495ZM373 342Q328 405 260 405Q211 405 173 369Q146 341 139 305T131 211Q131 155 138 120T173 59Q203 26 251 26Q322 26 373 103V342Z"></path><path stroke-width="1" id="MJMAIN-65" d="M28 218Q28 273 48 318T98 391T163 433T229 448Q282 448 320 430T378 380T406 316T415 245Q415 238 408 231H126V216Q126 68 226 36Q246 30 270 30Q312 30 342 62Q359 79 369 104L379 128Q382 131 395 131H398Q415 131 415 121Q415 117 412 108Q393 53 349 21T250 -11Q155 -11 92 58T28 218ZM333 275Q322 403 238 411H236Q228 411 220 410T195 402T166 381T143 340T127 274V267H333V275Z"></path><path stroke-width="1" id="MJMAIN-72" d="M36 46H50Q89 46 97 60V68Q97 77 97 91T98 122T98 161T98 203Q98 234 98 269T98 328L97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 60 434T96 436Q112 437 131 438T160 441T171 442H174V373Q213 441 271 441H277Q322 441 343 419T364 373Q364 352 351 337T313 322Q288 322 276 338T263 372Q263 381 265 388T270 400T273 405Q271 407 250 401Q234 393 226 386Q179 341 179 207V154Q179 141 179 127T179 101T180 81T180 66V61Q181 59 183 57T188 54T193 51T200 49T207 48T216 47T225 47T235 46T245 46H276V0H267Q249 3 140 3Q37 3 28 0H20V46H36Z"></path><path stroke-width="1" id="MJMAIN-6D" d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"></path></defs>
<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-30"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="500" y="0"></use><g transform="translate(779,0)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMATHI-3B1" x="0" y="0"></use><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-31" x="905" y="-213"></use></g><g transform="translate(1873,0)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMATHI-3B1" x="0" y="0"></use><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-32" x="905" y="-213"></use></g><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="2967" y="0"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="3412" y="0"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="3858" y="0"></use><g transform="translate(4303,0)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMATHI-3B1" x="0" y="0"></use><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMATHI-6E" x="905" y="-213"></use></g><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-28" x="5468" y="0"></use><g transform="translate(5857,0)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMATHI-3B2" x="0" y="0"></use><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-31" x="801" y="-213"></use></g><g transform="translate(6878,0)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMATHI-3B2" x="0" y="0"></use><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-32" x="801" y="-213"></use></g><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="7898" y="0"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="8343" y="0"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="8789" y="0"></use><g transform="translate(9234,0)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMATHI-3B2" x="0" y="0"></use><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMATHI-6D" x="801" y="-213"></use></g><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-29" x="10521" y="0"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-3D" x="11189" y="0"></use><g transform="translate(11967,0)"><g transform="translate(397,0)"><rect stroke="none" width="15484" height="60" x="0" y="220"></rect><g transform="translate(60,676)"><g transform="translate(24,0)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMATHI-3B1" x="0" y="0"></use><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-31" x="905" y="-213"></use><g transform="translate(1094,0)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMATHI-3B1" x="0" y="0"></use><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-32" x="905" y="-213"></use></g><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="2188" y="0"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="2633" y="0"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="3079" y="0"></use><g transform="translate(3524,0)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMATHI-3B1" x="0" y="0"></use><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMATHI-6E" x="905" y="-213"></use></g><g transform="translate(4689,0)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMATHI-3B2" x="0" y="0"></use><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-31" x="801" y="-213"></use></g><g transform="translate(5709,0)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMATHI-3B2" x="0" y="0"></use><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-32" x="801" y="-213"></use></g><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="6730" y="0"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="7175" y="0"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="7620" y="0"></use><g transform="translate(8065,0)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMATHI-3B2" x="0" y="0"></use><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMATHI-6D" x="801" y="-213"></use></g></g><g transform="translate(0,522)"><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-AF" x="-70" y="0"></use><g transform="translate(-1447.177883697781,0) scale(34.64199410491792,1)"><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-AF"></use></g><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-AF" x="12797" y="0"></use></g><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2212" x="9625" y="0"></use><g transform="translate(10625,0)"><g transform="translate(24,0)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMATHI-3B1" x="0" y="0"></use><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-31" x="905" y="-213"></use><g transform="translate(1094,0)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMATHI-3B1" x="0" y="0"></use><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-32" x="905" y="-213"></use></g><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="2188" y="0"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="2633" y="0"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="3079" y="0"></use><g transform="translate(3524,0)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMATHI-3B1" x="0" y="0"></use><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMATHI-6E" x="905" y="-213"></use></g></g><g transform="translate(0,259)"><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-AF" x="-70" y="0"></use><g transform="translate(-549.2596009576481,0) scale(16.370796790473957,1)"><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-AF"></use></g><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-AF" x="6201" y="0"></use></g></g></g><g transform="translate(5405,-686)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-39"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-39" x="500" y="0"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="1001" y="0"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="1279" y="0"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="1558" y="0"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-39" x="1836" y="0"></use><g transform="translate(12,-537)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJSZ4-E152" x="23" y="0"></use><g transform="translate(489.29285714285714,0) scale(0.5571428571428572,1)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJSZ4-E154"></use></g><g transform="translate(718,0)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJSZ4-E151"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJSZ4-E150" x="450" y="0"></use></g><g transform="translate(1624.2928571428572,0) scale(0.5571428571428572,1)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJSZ4-E154"></use></g><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJSZ4-E153" x="1862" y="0"></use></g><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-6D" x="1235" y="-1911"></use><g transform="translate(2337,0)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-30"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-30" x="500" y="0"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="1001" y="0"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="1279" y="0"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-2E" x="1558" y="0"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-30" x="1836" y="0"></use><g transform="translate(12,-537)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJSZ4-E152" x="23" y="0"></use><g transform="translate(489.29285714285714,0) scale(0.5571428571428572,1)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJSZ4-E154"></use></g><g transform="translate(718,0)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJSZ4-E151"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJSZ4-E150" x="450" y="0"></use></g><g transform="translate(1624.2928571428572,0) scale(0.5571428571428572,1)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJSZ4-E154"></use></g><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJSZ4-E153" x="1862" y="0"></use></g><use transform="scale(0.707)" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#MJMAIN-6E" x="1374" y="-1911"></use></g></g></g></g></g>
</svg>
      
</span>
    `
  }
];
