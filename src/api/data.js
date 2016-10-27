import katex from 'katex';
import 'katex/dist/katex.min.css';
import '../styles/math.css';

import R from 'ramda';

let $$ = R.curry (katex.renderToString) (R.__, {displayMode: true});
let $_ = R.curry (katex.renderToString) (R.__, {displayMode: false});


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
    ${katex.renderToString('\\frac{0,1(6) + 0,(3)}{0,(3)+1,1(6)}x=10',  { displayMode: true })}`,
];

export const helpers = [
  {
    title: "Квадратне рівняння",
    tags: ["Дискрімінант"],
    description: `
      <span class="math">${$$('ax^{2}+bx+c=0')}</span>
      <span class="math">${$$('D = b^{2}-4ac')}</span>
      <span class="math">${$$('x_{1,2} = \\frac{-b \\pm \\sqrt D}{2a}')}</span>
    `
  }
];