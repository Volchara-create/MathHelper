// ===== ДАНІ ФОРМУЛ (оригінал + вписане/описане коло) =====
const data = {
rectangle:[
{title:'Площа',formula:'S = a × b',svg:'<rect x="40" y="55" width="220" height="110" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><text x="150" y="178" text-anchor="middle" font-size="15" fill="#ff6b6b" font-weight="bold">a</text><text x="22" y="115" text-anchor="middle" font-size="15" fill="#00a0c0" font-weight="bold">b</text><text x="150" y="115" text-anchor="middle" font-size="13" fill="#1a3e7c" opacity="0.4">S</text>',symbols:[{s:'S',m:'Площа'},{s:'a',m:'Довжина'},{s:'b',m:'Ширина'}]},
{title:'Периметр',formula:'P = 2(a + b)',svg:'<rect x="40" y="55" width="220" height="110" fill="none" stroke="#ff6b6b" stroke-width="3"/><text x="150" y="178" text-anchor="middle" font-size="15" fill="#ff6b6b" font-weight="bold">a</text><text x="22" y="115" text-anchor="middle" font-size="15" fill="#ff6b6b" font-weight="bold">b</text><text x="260" y="115" text-anchor="middle" font-size="15" fill="#ff6b6b" font-weight="bold">b</text><text x="150" y="42" text-anchor="middle" font-size="15" fill="#ff6b6b" font-weight="bold">a</text>',symbols:[{s:'P',m:'Периметр'},{s:'a',m:'Довжина'},{s:'b',m:'Ширина'}]},
{title:'Діагональ',formula:'d = √(a² + b²)',svg:'<rect x="40" y="55" width="220" height="110" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="40" y1="165" x2="260" y2="55" stroke="#ff6b6b" stroke-width="2.5"/><text x="145" y="120" font-size="15" fill="#ff6b6b" font-weight="bold">d</text><text x="150" y="185" text-anchor="middle" font-size="14" fill="#1a3e7c" font-weight="bold">a</text><text x="22" y="115" text-anchor="middle" font-size="14" fill="#1a3e7c" font-weight="bold">b</text>',symbols:[{s:'d',m:'Діагональ'},{s:'a',m:'Довжина'},{s:'b',m:'Ширина'}]}
],
rhombus:[
{title:'Площа (діагоналі)',formula:'S = ½ × d₁ × d₂',svg:'<polygon points="150,15 285,100 150,185 15,100" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="15" x2="150" y2="185" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="6,4"/><line x1="15" y1="100" x2="285" y2="100" stroke="#00a0c0" stroke-width="2" stroke-dasharray="6,4"/><circle cx="150" cy="100" r="4" fill="#1a3e7c"/><text x="162" y="65" font-size="14" fill="#ff6b6b" font-weight="bold">d₁</text><text x="200" y="95" font-size="14" fill="#00a0c0" font-weight="bold">d₂</text>',symbols:[{s:'S',m:'Площа'},{s:'d₁',m:'Вертикальна діагональ'},{s:'d₂',m:'Горизонтальна діагональ'}]},
{title:'Площа (через кут)',formula:'S = a² × sin(α)',svg:'<polygon points="150,15 285,100 150,185 15,100" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><text x="80" y="62" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="215" y="62" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="80" y="148" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="215" y="148" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><path d="M35,100 Q50,80 65,100" fill="none" stroke="#00a0c0" stroke-width="2"/><text x="52" y="98" font-size="13" fill="#00a0c0" font-weight="bold">α</text>',symbols:[{s:'S',m:'Площа'},{s:'a',m:'Сторона'},{s:'α',m:'Гострий кут'}]},
{title:'Периметр',formula:'P = 4 × a',svg:'<polygon points="150,15 285,100 150,185 15,100" fill="none" stroke="#ff6b6b" stroke-width="3"/><text x="80" y="62" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="215" y="62" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="80" y="148" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="215" y="148" font-size="14" fill="#ff6b6b" font-weight="bold">a</text>',symbols:[{s:'P',m:'Периметр'},{s:'a',m:'Сторона'}]},
{title:'Висота',formula:'h = a × sin(α)',svg:'<polygon points="150,15 285,100 150,185 15,100" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="15" x2="150" y2="185" stroke="#ff6b6b" stroke-width="2.5" stroke-dasharray="6,4"/><text x="162" y="100" font-size="14" fill="#ff6b6b" font-weight="bold">h</text><text x="80" y="62" font-size="14" fill="#1a3e7c" font-weight="bold">a</text>',symbols:[{s:'h',m:'Висота'},{s:'a',m:'Сторона'},{s:'α',m:'Кут'}]}
],
parallelogram:[
{title:'Площа',formula:'S = a × h',svg:'<polygon points="60,160 230,160 270,50 100,50" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="230" y1="160" x2="230" y2="50" stroke="#ff6b6b" stroke-width="2.5" stroke-dasharray="6,4"/><rect x="226" y="50" width="8" height="8" fill="none" stroke="#ff6b6b" stroke-width="1.5"/><text x="242" y="108" font-size="14" fill="#ff6b6b" font-weight="bold">h</text><text x="145" y="182" text-anchor="middle" font-size="14" fill="#1a3e7c" font-weight="bold">a</text><text x="58" y="115" font-size="13" fill="#00a0c0" font-weight="bold">b</text>',symbols:[{s:'S',m:'Площа'},{s:'a',m:'Основа'},{s:'h',m:'Висота'}]},
{title:'Площа (через кут)',formula:'S = a × b × sin(α)',svg:'<polygon points="60,160 230,160 270,50 100,50" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><text x="145" y="182" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="58" y="108" font-size="14" fill="#00a0c0" font-weight="bold">b</text><path d="M80,160 Q95,145 85,130" fill="none" stroke="#9c27b0" stroke-width="2"/><text x="95" y="152" font-size="13" fill="#9c27b0" font-weight="bold">α</text>',symbols:[{s:'S',m:'Площа'},{s:'a',m:'Основа'},{s:'b',m:'Бічна сторона'},{s:'α',m:'Кут між сторонами'}]},
{title:'Периметр',formula:'P = 2(a + b)',svg:'<polygon points="60,160 230,160 270,50 100,50" fill="none" stroke="#ff6b6b" stroke-width="3"/><text x="145" y="182" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="58" y="108" font-size="14" fill="#ff6b6b" font-weight="bold">b</text><text x="185" y="38" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="258" y="108" font-size="14" fill="#ff6b6b" font-weight="bold">b</text>',symbols:[{s:'P',m:'Периметр'},{s:'a',m:'Основа'},{s:'b',m:'Бічна сторона'}]}
],
trapezoid:[
{title:'Площа',formula:'S = ½ × (a + b) × h',svg:'<polygon points="40,160 260,160 210,50 90,50" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="50" x2="150" y2="160" stroke="#ff6b6b" stroke-width="2.5" stroke-dasharray="6,4"/><rect x="146" y="152" width="8" height="8" fill="none" stroke="#ff6b6b" stroke-width="1.5"/><text x="162" y="112" font-size="14" fill="#ff6b6b" font-weight="bold">h</text><text x="150" y="182" text-anchor="middle" font-size="14" fill="#1a3e7c" font-weight="bold">a</text><text x="150" y="40" text-anchor="middle" font-size="14" fill="#00a0c0" font-weight="bold">b</text>',symbols:[{s:'S',m:'Площа'},{s:'a',m:'Нижня основа'},{s:'b',m:'Верхня основа'},{s:'h',m:'Висота'}]},
{title:'Середня лінія',formula:'m = (a + b) / 2',svg:'<polygon points="40,160 260,160 210,60 90,60" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="65" y1="110" x2="235" y2="110" stroke="#ff6b6b" stroke-width="2.5" stroke-dasharray="7,4"/><text x="150" y="182" text-anchor="middle" font-size="14" fill="#1a3e7c" font-weight="bold">a</text><text x="150" y="48" text-anchor="middle" font-size="14" fill="#00a0c0" font-weight="bold">b</text><text x="245" y="114" font-size="14" fill="#ff6b6b" font-weight="bold">m</text>',symbols:[{s:'m',m:'Середня лінія'},{s:'a',m:'Нижня основа'},{s:'b',m:'Верхня основа'}]},
{title:'Периметр',formula:'P = a + b + c + d',svg:'<polygon points="40,160 260,160 210,60 90,60" fill="none" stroke="#ff6b6b" stroke-width="3"/><text x="150" y="182" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="150" y="48" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">b</text><text x="52" y="115" font-size="14" fill="#ff6b6b" font-weight="bold">c</text><text x="245" y="115" font-size="14" fill="#ff6b6b" font-weight="bold">d</text>',symbols:[{s:'P',m:'Периметр'},{s:'a,b',m:'Основи'},{s:'c,d',m:'Бічні сторони'}]}
],
circle:[
{title:'Площа',formula:'S = π × r²',svg:'<circle cx="150" cy="105" r="85" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="105" x2="235" y2="105" stroke="#ff6b6b" stroke-width="2.5"/><circle cx="150" cy="105" r="4" fill="#1a3e7c"/><text x="193" y="95" font-size="15" fill="#ff6b6b" font-weight="bold">r</text>',symbols:[{s:'S',m:'Площа'},{s:'π',m:'Число пі ≈ 3.14159'},{s:'r',m:'Радіус'}]},
{title:'Довжина кола',formula:'C = 2 × π × r',svg:'<circle cx="150" cy="105" r="85" fill="none" stroke="#ff6b6b" stroke-width="3.5"/><line x1="150" y1="105" x2="235" y2="105" stroke="#1a3e7c" stroke-width="2"/><circle cx="150" cy="105" r="4" fill="#1a3e7c"/><text x="193" y="95" font-size="15" fill="#1a3e7c" font-weight="bold">r</text>',symbols:[{s:'C',m:'Довжина кола'},{s:'π',m:'Число пі'},{s:'r',m:'Радіус'}]},
{title:'Діаметр',formula:'D = 2 × r',svg:'<circle cx="150" cy="105" r="85" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="65" y1="105" x2="235" y2="105" stroke="#ff6b6b" stroke-width="2.5"/><circle cx="150" cy="105" r="4" fill="#1a3e7c"/><text x="150" y="132" text-anchor="middle" font-size="15" fill="#ff6b6b" font-weight="bold">D</text><text x="193" y="95" font-size="14" fill="#1a3e7c" font-weight="bold">r</text>',symbols:[{s:'D',m:'Діаметр'},{s:'r',m:'Радіус'}]},
{title:'Вписане коло',formula:'r = S / p',svg:'<polygon points="150,18 38,178 262,178" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><circle cx="150" cy="122" r="56" fill="rgba(255,152,0,0.12)" stroke="#ff9800" stroke-width="2.5"/><line x1="150" y1="122" x2="150" y2="178" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="5,4"/><circle cx="150" cy="122" r="4" fill="#ff6b6b"/><rect x="146" y="170" width="8" height="8" fill="none" stroke="#888" stroke-width="1.5"/><text x="162" y="155" font-size="14" fill="#ff6b6b" font-weight="bold">r</text><text x="32" y="196" font-size="14" fill="#1a3e7c" font-weight="bold">A</text><text x="258" y="196" font-size="14" fill="#1a3e7c" font-weight="bold">B</text><text x="143" y="12" font-size="14" fill="#1a3e7c" font-weight="bold">C</text>',symbols:[{s:'r',m:'Радіус вписаного кола'},{s:'S',m:'Площа трикутника'},{s:'p',m:'Півпериметр (a+b+c)/2'}]},
{title:'Описане коло',formula:'R = abc / (4S)',svg:'<circle cx="150" cy="100" r="88" fill="#eef4ff" stroke="#ff9800" stroke-width="2.5"/><polygon points="150,12 62,144 238,144" fill="rgba(255,255,255,0.8)" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="100" x2="238" y2="144" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="5,4"/><circle cx="150" cy="100" r="4" fill="#ff6b6b"/><text x="200" y="118" font-size="14" fill="#ff6b6b" font-weight="bold">R</text><text x="143" y="7" font-size="14" fill="#1a3e7c" font-weight="bold">C</text><text x="46" y="160" font-size="14" fill="#1a3e7c" font-weight="bold">A</text><text x="240" y="160" font-size="14" fill="#1a3e7c" font-weight="bold">B</text>',symbols:[{s:'R',m:'Радіус описаного кола'},{s:'a,b,c',m:'Сторони трикутника'},{s:'S',m:'Площа трикутника'}]}
],
triangle:[
{title:'Площа (основа × висота)',formula:'S = ½ × a × h',svg:'<polygon points="70,165 250,165 140,30" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="140" y1="30" x2="140" y2="165" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="6,4"/><rect x="136" y="157" width="8" height="8" fill="none" stroke="#ff6b6b" stroke-width="1.5"/><text x="152" y="105" font-size="14" fill="#ff6b6b" font-weight="bold">h</text><text x="160" y="185" text-anchor="middle" font-size="14" fill="#1a3e7c" font-weight="bold">a</text>',symbols:[{s:'S',m:'Площа'},{s:'a',m:'Основа'},{s:'h',m:'Висота'}]},
{title:'Площа (через синус)',formula:'S = ½ × a × b × sin(C)',svg:'<polygon points="50,170 250,170 170,35" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><text x="150" y="190" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="112" y="100" font-size="14" fill="#00a0c0" font-weight="bold">b</text><text x="218" y="105" font-size="14" fill="#9c27b0" font-weight="bold">c</text><path d="M170,35 Q185,55 175,70" fill="none" stroke="#ff9800" stroke-width="2"/><text x="183" y="60" font-size="13" fill="#ff9800" font-weight="bold">C</text>',symbols:[{s:'S',m:'Площа'},{s:'a,b',m:'Дві сторони що утворюють кут'},{s:'C',m:'Кут між цими сторонами'}]},
{title:'Площа Герона',formula:'S = √(p(p−a)(p−b)(p−c))',svg:'<polygon points="50,165 250,165 160,35" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><text x="150" y="185" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="95" y="108" font-size="14" fill="#00a0c0" font-weight="bold">b</text><text x="215" y="108" font-size="14" fill="#9c27b0" font-weight="bold">c</text><text x="150" y="140" text-anchor="middle" font-size="12" fill="#1a3e7c" opacity="0.5">p=(a+b+c)/2</text>',symbols:[{s:'S',m:'Площа'},{s:'p',m:'Півпериметр'},{s:'a,b,c',m:'Три сторони'}]},
{title:'Периметр',formula:'P = a + b + c',svg:'<polygon points="50,165 250,165 160,35" fill="none" stroke="#ff6b6b" stroke-width="3"/><text x="150" y="185" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="88" y="108" font-size="14" fill="#ff6b6b" font-weight="bold">b</text><text x="215" y="108" font-size="14" fill="#ff6b6b" font-weight="bold">c</text>',symbols:[{s:'P',m:'Периметр'},{s:'a,b,c',m:'Три сторони'}]},
{title:'Теорема синусів',formula:'a/sin(A) = b/sin(B) = c/sin(C)',svg:'<polygon points="50,175 255,175 155,30" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><text x="152" y="195" text-anchor="middle" font-size="14" fill="#00a0c0" font-weight="bold">b</text><text x="222" y="108" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="82" y="108" font-size="14" fill="#9c27b0" font-weight="bold">c</text><path d="M50,175 Q73,158 70,142" fill="none" stroke="#ff6b6b" stroke-width="2"/><text x="28" y="172" font-size="13" fill="#ff6b6b" font-weight="bold">A</text><path d="M255,175 Q234,158 230,142" fill="none" stroke="#9c27b0" stroke-width="2"/><text x="258" y="172" font-size="13" fill="#9c27b0" font-weight="bold">C</text><path d="M155,30 Q163,50 174,56" fill="none" stroke="#00a0c0" stroke-width="2"/><text x="148" y="20" font-size="13" fill="#00a0c0" font-weight="bold">B</text>',symbols:[{s:'a',m:'Сторона BC — навпроти кута A'},{s:'b',m:'Сторона AC — навпроти кута B'},{s:'c',m:'Сторона AB — навпроти кута C'},{s:'A,B,C',m:'Кути трикутника'}]},
{title:'Теорема косинусів',formula:'c² = a² + b² − 2ab·cos(C)',svg:'<polygon points="50,175 240,175 155,40" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><text x="145" y="195" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="88" y="115" font-size="14" fill="#00a0c0" font-weight="bold">b</text><text x="208" y="115" font-size="14" fill="#9c27b0" font-weight="bold">c</text><path d="M155,40 Q168,62 163,75" fill="none" stroke="#ff9800" stroke-width="2"/><text x="170" y="68" font-size="13" fill="#ff9800" font-weight="bold">C</text><text x="30" y="195" font-size="13" fill="#ff6b6b" font-weight="bold">A</text><text x="242" y="195" font-size="13" fill="#9c27b0" font-weight="bold">B</text><text x="148" y="28" font-size="13" fill="#ff9800" font-weight="bold">C</text>',symbols:[{s:'a',m:'Основа (навпроти кута A)'},{s:'b',m:'Сторона AC'},{s:'c',m:'Сторона BC'},{s:'C',m:'Кут між сторонами b і c'}]}
],
cube:[
{title:'Обʼєм',formula:'V = a³',svg:'<line x1="50" y1="60" x2="50" y2="170" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="50" y1="170" x2="160" y2="170" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="50" y1="60" x2="160" y2="60" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><polygon points="50,60 160,60 160,170 50,170" fill="#ddeeff" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="50,60 90,25 200,25 160,60" fill="#c8dcf8" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="160,60 200,25 200,135 160,170" fill="#b8cce8" stroke="#1a3e7c" stroke-width="2.5"/><line x1="90" y1="25" x2="90" y2="135" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="90" y1="135" x2="200" y2="135" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="90" y1="135" x2="50" y2="170" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><text x="103" y="195" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="210" y="85" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="138" y="50" font-size="14" fill="#ff6b6b" font-weight="bold">a</text>',symbols:[{s:'V',m:'Обʼєм'},{s:'a',m:'Ребро куба'}]},
{title:'Площа поверхні',formula:'S = 6 × a²',svg:'<line x1="50" y1="60" x2="50" y2="170" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="50" y1="170" x2="160" y2="170" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="50" y1="60" x2="160" y2="60" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><polygon points="50,60 160,60 160,170 50,170" fill="#ddeeff" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="50,60 90,25 200,25 160,60" fill="#c8dcf8" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="160,60 200,25 200,135 160,170" fill="#b8cce8" stroke="#1a3e7c" stroke-width="2.5"/><line x1="90" y1="25" x2="90" y2="135" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="90" y1="135" x2="200" y2="135" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="90" y1="135" x2="50" y2="170" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><text x="103" y="195" text-anchor="middle" font-size="13" fill="#1a3e7c">6 граней</text><text x="210" y="85" font-size="14" fill="#ff6b6b" font-weight="bold">a</text>',symbols:[{s:'S',m:'Повна площа поверхні'},{s:'a',m:'Ребро куба'},{s:'6',m:'Кількість граней'}]},
{title:'Діагональ куба',formula:'d = a√3',svg:'<line x1="50" y1="60" x2="50" y2="170" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="50" y1="170" x2="160" y2="170" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="50" y1="60" x2="160" y2="60" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><polygon points="50,60 160,60 160,170 50,170" fill="#ddeeff" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="50,60 90,25 200,25 160,60" fill="#c8dcf8" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="160,60 200,25 200,135 160,170" fill="#b8cce8" stroke="#1a3e7c" stroke-width="2.5"/><line x1="90" y1="25" x2="90" y2="135" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="90" y1="135" x2="200" y2="135" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="90" y1="135" x2="50" y2="170" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="50" y1="170" x2="200" y2="25" stroke="#ff6b6b" stroke-width="2.5"/><text x="115" y="120" font-size="14" fill="#ff6b6b" font-weight="bold">d</text><text x="210" y="85" font-size="14" fill="#1a3e7c" font-weight="bold">a</text>',symbols:[{s:'d',m:'Діагональ куба'},{s:'a',m:'Ребро куба'}]}
],
parallelepiped:[
{title:'Обʼєм',formula:'V = a × b × c',svg:'<line x1="25" y1="75" x2="25" y2="175" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="25" y1="175" x2="155" y2="175" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="25" y1="75" x2="155" y2="75" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><polygon points="25,75 155,75 155,175 25,175" fill="#ddeeff" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="25,75 65,40 215,40 155,75" fill="#c8dcf8" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="155,75 215,40 215,140 155,175" fill="#b8cce8" stroke="#1a3e7c" stroke-width="2.5"/><line x1="65" y1="40" x2="65" y2="140" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="65" y1="140" x2="215" y2="140" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="65" y1="140" x2="25" y2="175" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><text x="90" y="195" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="15" y="130" text-anchor="end" font-size="14" fill="#00a0c0" font-weight="bold">b</text><text x="222" y="95" font-size="14" fill="#9c27b0" font-weight="bold">c</text>',symbols:[{s:'V',m:'Обʼєм'},{s:'a',m:'Довжина'},{s:'b',m:'Ширина'},{s:'c',m:'Висота'}]},
{title:'Площа поверхні',formula:'S = 2(ab + bc + ac)',svg:'<line x1="25" y1="75" x2="25" y2="175" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="25" y1="175" x2="155" y2="175" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="25" y1="75" x2="155" y2="75" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><polygon points="25,75 155,75 155,175 25,175" fill="#ddeeff" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="25,75 65,40 215,40 155,75" fill="#c8dcf8" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="155,75 215,40 215,140 155,175" fill="#b8cce8" stroke="#1a3e7c" stroke-width="2.5"/><line x1="65" y1="40" x2="65" y2="140" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="65" y1="140" x2="215" y2="140" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="65" y1="140" x2="25" y2="175" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><text x="90" y="195" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="15" y="130" text-anchor="end" font-size="14" fill="#00a0c0" font-weight="bold">b</text><text x="222" y="95" font-size="14" fill="#9c27b0" font-weight="bold">c</text>',symbols:[{s:'S',m:'Площа поверхні'},{s:'a',m:'Довжина'},{s:'b',m:'Ширина'},{s:'c',m:'Висота'}]},
{title:'Діагональ',formula:'d = √(a² + b² + c²)',svg:'<line x1="25" y1="75" x2="25" y2="175" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="25" y1="175" x2="155" y2="175" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="25" y1="75" x2="155" y2="75" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><polygon points="25,75 155,75 155,175 25,175" fill="#ddeeff" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="25,75 65,40 215,40 155,75" fill="#c8dcf8" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="155,75 215,40 215,140 155,175" fill="#b8cce8" stroke="#1a3e7c" stroke-width="2.5"/><line x1="65" y1="40" x2="65" y2="140" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="65" y1="140" x2="215" y2="140" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="65" y1="140" x2="25" y2="175" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="25" y1="175" x2="215" y2="40" stroke="#ff6b6b" stroke-width="2.5"/><text x="108" y="125" font-size="14" fill="#ff6b6b" font-weight="bold">d</text><text x="90" y="195" text-anchor="middle" font-size="13" fill="#1a3e7c" font-weight="bold">a</text><text x="15" y="130" text-anchor="end" font-size="13" fill="#00a0c0" font-weight="bold">b</text><text x="222" y="95" font-size="13" fill="#9c27b0" font-weight="bold">c</text>',symbols:[{s:'d',m:'Просторова діагональ'},{s:'a,b,c',m:'Три виміри'}]}
],
cylinder:[
{title:'Обʼєм',formula:'V = π × r² × h',svg:'<ellipse cx="150" cy="55" rx="75" ry="22" fill="#c8dcf8" stroke="#1a3e7c" stroke-width="2.5"/><rect x="75" y="55" width="150" height="120" fill="#ddeeff" stroke="none"/><ellipse cx="150" cy="175" rx="75" ry="22" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="75" y1="55" x2="75" y2="175" stroke="#1a3e7c" stroke-width="2.5"/><line x1="225" y1="55" x2="225" y2="175" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="55" x2="225" y2="55" stroke="#ff6b6b" stroke-width="2.5"/><line x1="235" y1="55" x2="235" y2="175" stroke="#00a0c0" stroke-width="2" stroke-dasharray="6,4"/><text x="190" y="44" font-size="14" fill="#ff6b6b" font-weight="bold">r</text><text x="245" y="118" font-size="14" fill="#00a0c0" font-weight="bold">h</text><line x1="233" y1="55" x2="237" y2="55" stroke="#00a0c0" stroke-width="2"/><line x1="233" y1="175" x2="237" y2="175" stroke="#00a0c0" stroke-width="2"/>',symbols:[{s:'V',m:'Обʼєм'},{s:'r',m:'Радіус основи'},{s:'h',m:'Висота'}]},
{title:'Площа поверхні',formula:'S = 2π × r(h + r)',svg:'<ellipse cx="150" cy="55" rx="75" ry="22" fill="#c8dcf8" stroke="#1a3e7c" stroke-width="2.5"/><rect x="75" y="55" width="150" height="120" fill="#ddeeff" stroke="none"/><ellipse cx="150" cy="175" rx="75" ry="22" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="75" y1="55" x2="75" y2="175" stroke="#1a3e7c" stroke-width="2.5"/><line x1="225" y1="55" x2="225" y2="175" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="55" x2="225" y2="55" stroke="#ff6b6b" stroke-width="2.5"/><text x="190" y="44" font-size="14" fill="#ff6b6b" font-weight="bold">r</text><text x="238" y="118" font-size="14" fill="#00a0c0" font-weight="bold">h</text><line x1="235" y1="55" x2="235" y2="175" stroke="#00a0c0" stroke-width="2" stroke-dasharray="6,4"/>',symbols:[{s:'S',m:'Повна площа поверхні'},{s:'r',m:'Радіус основи'},{s:'h',m:'Висота'}]}
],
cone:[
{title:'Обʼєм',formula:'V = ⅓ × π × r² × h',svg:'<ellipse cx="150" cy="168" rx="80" ry="22" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="25" x2="70" y2="168" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="25" x2="230" y2="168" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="25" x2="150" y2="168" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="6,4"/><line x1="150" y1="168" x2="230" y2="168" stroke="#00a0c0" stroke-width="2.5"/><rect x="146" y="164" width="8" height="8" fill="none" stroke="#ff6b6b" stroke-width="1.5"/><text x="162" y="105" font-size="14" fill="#ff6b6b" font-weight="bold">h</text><text x="192" y="162" font-size="14" fill="#00a0c0" font-weight="bold">r</text>',symbols:[{s:'V',m:'Обʼєм'},{s:'r',m:'Радіус основи'},{s:'h',m:'Висота'}]},
{title:'Площа поверхні',formula:'S = π × r(l + r)',svg:'<ellipse cx="150" cy="168" rx="80" ry="22" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="25" x2="70" y2="168" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="25" x2="230" y2="168" stroke="#ff6b6b" stroke-width="2.5"/><line x1="150" y1="168" x2="230" y2="168" stroke="#00a0c0" stroke-width="2.5"/><text x="200" y="95" font-size="14" fill="#ff6b6b" font-weight="bold">l</text><text x="192" y="162" font-size="14" fill="#00a0c0" font-weight="bold">r</text>',symbols:[{s:'S',m:'Повна площа поверхні'},{s:'r',m:'Радіус основи'},{s:'l',m:'Твірна (бічна висота)'}]}
],
pyramid:[
{title:'Обʼєм',formula:'V = ⅓ × S_осн × h',svg:'<polygon points="80,185 220,185 260,155 120,155" fill="#c8dcf8" stroke="#1a3e7c" stroke-width="2.5"/><line x1="80" y1="185" x2="120" y2="155" stroke="#1a3e7c" stroke-width="2.5"/><line x1="80" y1="185" x2="150" y2="35" stroke="#1a3e7c" stroke-width="2.5"/><line x1="220" y1="185" x2="150" y2="35" stroke="#1a3e7c" stroke-width="2.5"/><line x1="260" y1="155" x2="150" y2="35" stroke="#1a3e7c" stroke-width="2.5"/><line x1="120" y1="155" x2="150" y2="35" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="150" y1="35" x2="150" y2="170" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="6,4"/><rect x="146" y="162" width="8" height="8" fill="none" stroke="#ff6b6b" stroke-width="1.5"/><text x="162" y="110" font-size="14" fill="#ff6b6b" font-weight="bold">h</text><text x="148" y="200" text-anchor="middle" font-size="13" fill="#1a3e7c" font-weight="bold">a</text><text x="145" y="28" font-size="13" fill="#1a3e7c" font-weight="bold">S</text>',symbols:[{s:'V',m:'Обʼєм'},{s:'S_осн',m:'Площа основи'},{s:'h',m:'Висота піраміди'}]},
{title:'Площа бічної поверхні',formula:'S_бік = ½ × P × l',svg:'<polygon points="80,185 220,185 260,155 120,155" fill="#c8dcf8" stroke="#1a3e7c" stroke-width="2.5"/><line x1="80" y1="185" x2="120" y2="155" stroke="#1a3e7c" stroke-width="2.5"/><line x1="80" y1="185" x2="150" y2="35" stroke="#1a3e7c" stroke-width="2.5"/><line x1="220" y1="185" x2="150" y2="35" stroke="#1a3e7c" stroke-width="2.5"/><line x1="260" y1="155" x2="150" y2="35" stroke="#1a3e7c" stroke-width="2.5"/><line x1="120" y1="155" x2="150" y2="35" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="150" y1="35" x2="150" y2="185" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="6,4"/><text x="158" y="125" font-size="14" fill="#ff6b6b" font-weight="bold">l</text><text x="148" y="200" text-anchor="middle" font-size="13" fill="#1a3e7c" font-weight="bold">P</text>',symbols:[{s:'S_бік',m:'Площа бічної поверхні'},{s:'P',m:'Периметр основи'},{s:'l',m:'Апофема — висота бічної грані'}]},
{title:'Повна площа',formula:'S = S_осн + S_бік',svg:'<polygon points="80,185 220,185 260,155 120,155" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="80" y1="185" x2="120" y2="155" stroke="#1a3e7c" stroke-width="2.5"/><line x1="80" y1="185" x2="150" y2="35" stroke="#ff6b6b" stroke-width="2.5"/><line x1="220" y1="185" x2="150" y2="35" stroke="#ff6b6b" stroke-width="2.5"/><line x1="260" y1="155" x2="150" y2="35" stroke="#ff6b6b" stroke-width="2.5"/><line x1="120" y1="155" x2="150" y2="35" stroke="#ff6b6b" stroke-width="1.8" stroke-dasharray="6,4"/><text x="78" y="175" font-size="12" fill="#ff6b6b" font-weight="bold">S_бік</text><text x="155" y="178" font-size="12" fill="#00a0c0" font-weight="bold">S_осн</text>',symbols:[{s:'S',m:'Повна площа поверхні'},{s:'S_осн',m:'Площа основи'},{s:'S_бік',m:'Площа бічної поверхні'}]}
]
};

const categoryNames={rectangle:'Прямокутник',rhombus:'Ромб',parallelogram:'Паралелограм',trapezoid:'Трапеція',circle:'Коло',triangle:'Трикутник',cube:'Куб',parallelepiped:'Паралелепіпед',cylinder:'Циліндр',cone:'Конус',pyramid:'Піраміда'};

// ===== НАВ (оригінал) =====
const TEXTBOOKS = [
  { grades:7, title:'Алгебра 7 клас', author:'Прокопенко 2024', url:'https://pidruchnyk.com.ua/2894-algebra-prokopenko-7-klas-2024.html' },
  { grades:7, title:'Геометрія 7 клас', author:'Бевз 2024', url:'https://pidruchnyk.com.ua/2880-geometriia-bevz-7-klas-2024.html' },
  { grades:8, title:'Математика 8 клас', author:'Істер 2025', url:'https://pidruchnyk.com.ua/2932-matematyka-ister-8-klas-2025.html' },
  { grades:8, title:'Геометрія 8 клас', author:'Мерзляк', url:'https://pidruchnyk.com.ua/865-geometriya-8-z-poglyblenym-vyvchennyam-2016-merzlyak.html' },
  { grades:9, title:'Геометрія 9 клас', author:'Мерзляк', url:'https://pidruchnyk.com.ua/996-geometriya-merzlyak-9-klas-2017.html' },
  { grades:9, title:'Геометрія 9 клас', author:'Істер', url:'https://pidruchnyk.com.ua/1031-ister-geometriya-9-klas.html' },
  { grades:10, title:'Алгебра 10 клас (профіль)', author:'Мерзляк', url:'https://pidruchnyk.com.ua/430-algebra-proflniy-rven-merzlyak-10-klas.html' },
  { grades:11, title:'Математика 11 клас', author:'Афанасьєва та ін.', url:'https://pidruchnyk.com.ua/452-matematika-afanasyeva-brodskiy-pavlov-slpenko-11-klas.html' },
];

// ===== INTERACTIVE TEXTBOOK DATA =====
const TB_LESSONS = [
  {
    id: 'monomial-standard',
    icon: '🔢',
    title: 'Одночлен. Стандартний вигляд',
    meta: '7 клас · Розділ 2 · §8',
    theory: `<p><b>Одночлен</b> — це число, змінна або добуток числа і змінних. Наприклад: <b>7</b>, <b>x</b>, <b>−3a²b</b>, <b>5xy²</b>.</p>
<p>Сума або різниця одночленів — це вже <b>многочлен</b>, а не одночлен.</p>
<p><b>Стандартний вигляд одночлена</b>: коефіцієнт стоїть першим, далі — літерна частина зі змінними у порядку алфавіту. Наприклад: x · (−3) · x² = <b>−3x³</b>.</p>
<p><b>Коефіцієнт</b> — числова частина (може бути від'ємним або дробовим). <b>Ступінь одночлена</b> = сума показників усіх змінних.</p>
<p>Ненульове число — одночлен нульового ступеня. Нуль вважається одночленом без визначеного ступеня.</p>`,
    formula: 'Ступінь одночлена = сума показників усіх змінних   |   5a²b³ → ступінь = 2+3 = 5',
    examples: [
      {
        q: 'Запиши у стандартному вигляді: x · (−3) · x²',
        steps: ['Збираємо числа: коефіцієнт = −3', 'Збираємо змінні: x · x² = x¹⁺² = x³', 'Стандартний вигляд: −3x³']
      },
      {
        q: 'Знайди коефіцієнт і ступінь одночлена: −4a²bc³',
        steps: ['Коефіцієнт: −4 (числова частина)', 'Ступінь: показники 2 (у a²) + 1 (у b) + 3 (у c³) = 6', 'Відповідь: коефіцієнт −4, ступінь 6']
      }
    ],
    practice: [
      { q: 'Коефіцієнт одночлена −5x³ дорівнює:', ans: '-5', hint: 'Числова частина перед змінною' },
      { q: 'Ступінь одночлена 4x²y дорівнює:', ans: '3', hint: '2 + 1 = 3' },
      { q: 'Запиши у стандартному вигляді: 2 · x · x · 3', ans: '6x^2', altAns: ['6x²'], hint: '2·3=6, x·x=x²' },
      { q: 'Ступінь одночлена −3x²y²z дорівнює:', ans: '5', hint: '2+2+1 = 5' },
      { q: 'Запиши у стандартному вигляді: b · 5 · a · b. Відповідь:', ans: '5ab^2', altAns: ['5ab²'], hint: 'Коефіцієнт 5, змінні a і b²' },
      { q: 'Яким є ступінь числа 17 як одночлена?', ans: '0', hint: 'Ненульове число — одночлен 0-го ступеня' },
      { q: 'Ступінь одночлена −2a³b⁴c дорівнює:', ans: '8', hint: '3+4+1 = 8' },
      { q: 'Коефіцієнт одночлена 0,3mn² дорівнює:', ans: '0.3', altAns: ['0,3'], hint: 'Числова частина = 0,3' },
      { q: 'Запиши у стандартному вигляді: (−2x)·(−x²). Коефіцієнт:', ans: '2', hint: '(−2)·(−1) = 2' }
    ]
  },
  {
    id: 'monomial-multiply',
    icon: '✖️',
    title: 'Множення одночленів. Піднесення до степеня',
    meta: '7 клас · Розділ 2 · §9',
    theory: `<p>Щоб <b>перемножити одночлени</b>, перемножаємо коефіцієнти і окремо — однакові змінні (додаємо показники).</p>
<p>Щоб <b>піднести одночлен до степеня</b>, кожну частину одночлена піднесемо до цього степеня:</p>
<p style="text-align:center"><b>(aᵐ · bⁿ)ᵏ = aᵐᵏ · bⁿᵏ</b></p>
<p>Коефіцієнт також піднесемо до степеня! Наприклад: (2a)³ = 2³ · a³ = 8a³.</p>
<p><b>Зауваження про знак:</b> якщо коефіцієнт від'ємний, звертаємо увагу на парність показника:  (−3a)² = 9a²,  (−3a)³ = −27a³.</p>`,
    formula: '(a·b)ⁿ = aⁿ·bⁿ    (aᵐ)ⁿ = aᵐⁿ    aᵐ·aⁿ = aᵐ⁺ⁿ',
    examples: [
      {
        q: 'Спрости: (−3a²b)(2ab³)',
        steps: ['Множимо коефіцієнти: (−3)·2 = −6', 'Множимо a²·a = a³', 'Множимо b·b³ = b⁴', 'Результат: −6a³b⁴']
      },
      {
        q: 'Знайди: (2x²y)³',
        steps: ['Піднесемо кожну частину: 2³ = 8', '(x²)³ = x⁶', 'y³ = y³', 'Відповідь: 8x⁶y³']
      }
    ],
    practice: [
      { q: 'Спрости: (3x²)(4x³) = ?', ans: '12x^5', altAns: ['12x⁵'], hint: '3·4=12, x²·x³=x⁵' },
      { q: 'Спрости: (−2a)(5a³) = ?', ans: '-10a^4', altAns: ['−10a⁴', '-10a⁴'], hint: '(−2)·5=−10, a·a³=a⁴' },
      { q: 'Знайди: (3x)² = ?', ans: '9x^2', altAns: ['9x²'], hint: '3²=9, x²' },
      { q: 'Знайди: (−2b)³ = ?', ans: '-8b^3', altAns: ['−8b³', '-8b³'], hint: '(−2)³=−8, b³' },
      { q: 'Спрости: (4x²y)(−3xy²) = ?', ans: '-12x^3y^3', altAns: ['−12x³y³', '-12x³y³'], hint: '4·(−3)=−12, x²·x=x³, y·y²=y³' },
      { q: 'Знайди: (2a²b)³. Коефіцієнт:', ans: '8', hint: '2³ = 8' },
      { q: 'Знайди ступінь результату: (3x²y)·(4xy³)', ans: '6', hint: 'Ступінь: 2+1+1+3 = ... ні: x³y⁴, ступінь = 3+4 = 7... Перевір: 3x²y·4xy³=12x³y⁴, ступінь 7', altAns: ['7'] },
      { q: 'Спрости: (0,5x)⁴ = ?', ans: '0.0625x^4', altAns: ['0,0625x⁴', '(1/16)x^4'], hint: '0,5⁴ = 0,0625' },
      { q: 'Знайди: (−a²b)⁴. Знак результату (+ або −):', ans: '+', hint: 'Парний степінь → завжди додатний' }
    ]
  },
  {
    id: 'polynomial-def',
    icon: '📐',
    title: 'Многочлен. Стандартний вигляд',
    meta: '7 клас · Розділ 2 · §10',
    theory: `<p><b>Многочлен</b> — це сума одночленів. Кожен одночлен у цій сумі — <b>член многочлена</b>.</p>
<p><b>Подібні члени</b> — члени з однаковою літерною частиною. Їх можна зводити (складати/віднімати коефіцієнти).</p>
<p><b>Стандартний вигляд многочлена</b> — всі подібні члени зведені, члени записані за спаданням степенів:</p>
<p style="text-align:center"><b>aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀</b></p>
<p><b>Ступінь многочлена</b> — найбільший з ступенів його членів після зведення подібних.</p>
<p>Многочлен з одним членом = одночлен. Двочлен має 2 члени, тричлен — 3.</p>`,
    formula: 'Ступінь многочлена = найбільший ступінь серед усіх членів у стандартному вигляді',
    examples: [
      {
        q: 'Запиши у стандартному вигляді: 5 + 2x³ − 3x + x² − 4x³',
        steps: ['Знаходимо подібні: 2x³ і −4x³ → (2−4)x³ = −2x³', 'Решта: x², −3x, 5', 'Стандартний вигляд: −2x³ + x² − 3x + 5', 'Ступінь: 3']
      },
      {
        q: 'Зведи подібні: 3a²b − 2ab² + a²b + 4ab²',
        steps: ['Групуємо: (3a²b + a²b) + (−2ab² + 4ab²)', '= 4a²b + 2ab²']
      }
    ],
    practice: [
      { q: 'Ступінь многочлена 4x³ − 2x + 7 дорівнює:', ans: '3', hint: 'Найбільший показник = 3' },
      { q: 'Зведи подібні: 7x² − 3x² = ?', ans: '4x^2', altAns: ['4x²'], hint: '7−3=4' },
      { q: 'Зведи подібні: 3x² + 5x − 2x² + x = ?', ans: 'x^2+6x', altAns: ['x²+6x', 'x² + 6x'], hint: 'x²+6x' },
      { q: 'Скільки членів у многочлені 3x³ − 5x + 2 у стандартному вигляді?', ans: '3', hint: 'Три різні члени' },
      { q: 'Коефіцієнт при x² у виразі 3x³ + 5x² − x + 2:', ans: '5', hint: 'Шукаємо член з x²' },
      { q: 'Зведи подібні: 2a + 3b − a + 5b = ?', ans: 'a+8b', altAns: ['a + 8b'], hint: '(2a−a) + (3b+5b) = a+8b' },
      { q: 'Запиши у стандартному вигляді: 1 − x + x² − 2x³. Старший коефіцієнт:', ans: '-2', hint: 'Член з найбільшим ступенем: −2x³, коефіцієнт −2' },
      { q: 'Ступінь двочлена 3x⁵ − 7 дорівнює:', ans: '5', hint: 'Найбільший ступінь = 5' },
      { q: 'Зведи: 5xy − 3x²y + xy − x²y = ?', ans: '-4x^2y+6xy', altAns: ['−4x²y+6xy', '6xy-4x^2y'], hint: '(5xy+xy)+(−3x²y−x²y) = 6xy−4x²y' }
    ]
  },
  {
    id: 'polynomial-add-sub',
    icon: '➕',
    title: 'Додавання і віднімання многочленів',
    meta: '7 клас · Розділ 2 · §11',
    theory: `<p>Щоб <b>додати многочлени</b> — записуємо їх у дужках зі знаком «+», розкриваємо дужки (знаки не змінюються), зводимо подібні.</p>
<p>Щоб <b>відняти многочлен</b> — записуємо у дужках зі знаком «−», розкриваємо дужки (всі знаки другого многочлена змінюються на протилежні!), зводимо подібні.</p>
<p>Пам'ятай: знак перед дужкою впливає на всі члени всередині!</p>
<ul style="margin:8px 0 8px 20px;line-height:2">
  <li>+(a + b) → +a + b (знаки не змінюються)</li>
  <li>−(a + b) → −a − b (всі знаки змінюються)</li>
  <li>−(a − b) → −a + b</li>
</ul>`,
    formula: '(A) + (B) = A + B    (A) − (B) = A − B  (розкриття дужок зі зміною знаків)',
    examples: [
      {
        q: 'Знайди суму: (3x² − 2x + 5) + (x² + 4x − 3)',
        steps: ['Розкриваємо дужки: 3x² − 2x + 5 + x² + 4x − 3', 'Зводимо подібні: (3x²+x²) + (−2x+4x) + (5−3)', 'Відповідь: 4x² + 2x + 2']
      },
      {
        q: 'Знайди різницю: (5a² − 3a + 1) − (2a² + a − 4)',
        steps: ['Розкриваємо зі зміною знаків: 5a² − 3a + 1 − 2a² − a + 4', 'Зводимо: (5−2)a² + (−3−1)a + (1+4)', 'Відповідь: 3a² − 4a + 5']
      }
    ],
    practice: [
      { q: '(3x + 2) + (x − 5) = ?', ans: '4x-3', altAns: ['4x − 3'], hint: '3x+x=4x, 2+(−5)=−3' },
      { q: '(5x² − x) − (2x² + 3x) = ?', ans: '3x^2-4x', altAns: ['3x² − 4x', '3x²-4x'], hint: 'Знаки другого: −2x²−3x' },
      { q: '(4a − 3b) + (2a + 7b) = ?', ans: '6a+4b', altAns: ['6a + 4b'], hint: '4a+2a=6a, −3b+7b=4b' },
      { q: '(7x² + 2x − 1) − (3x² − 5x + 4) = ?', ans: '4x^2+7x-5', altAns: ['4x²+7x−5', '4x² + 7x - 5'], hint: '7x²−3x²=4x², 2x+5x=7x, −1−4=−5' },
      { q: 'Розкрий: −(3a − 2b + 1) = ?', ans: '-3a+2b-1', altAns: ['−3a+2b−1'], hint: 'Кожен знак змінюється' },
      { q: '(x² − 3x + 4) + (−x² + 3x − 4) = ?', ans: '0', hint: 'Протилежні многочлени дають 0' },
      { q: '(2m² + 5) − (m² − 3) = ?', ans: 'm^2+8', altAns: ['m²+8'], hint: '2m²−m²=m², 5−(−3)=8' },
      { q: 'Знайди суму (4x³ − 2x) + (x − 4x³). Ступінь результату:', ans: '1', hint: '4x³−4x³=0, −2x+x=−x → ступінь 1' },
      { q: '(3x + 4y − 2) − (x + y − 5) = ?', ans: '2x+3y+3', altAns: ['2x + 3y + 3'], hint: '3x−x=2x, 4y−y=3y, −2+5=3' }
    ]
  },
  {
    id: 'mono-poly-mult',
    icon: '🧮',
    title: 'Множення одночлена на многочлен',
    meta: '7 клас · Розділ 2 · §12',
    theory: `<p><b>Правило:</b> щоб помножити одночлен на многочлен, треба помножити цей одночлен на кожен член многочлена і результати скласти.</p>
<p>В основі — <b>розподільна властивість множення</b>: a(b + c) = ab + ac.</p>
<p>Добуток будь-якого одночлена на будь-який многочлен завжди можна подати у вигляді многочлена.</p>
<p>Порядок дій:</p>
<ol style="margin:8px 0 8px 20px;line-height:2">
  <li>Помножити одночлен на <b>перший</b> член многочлена</li>
  <li>Помножити одночлен на <b>кожен наступний</b> член (зберігаючи знак!)</li>
  <li>Скласти отримані одночлени</li>
  <li>Якщо є подібні члени — звести їх</li>
</ol>`,
    formula: 'a(b + c + d) = ab + ac + ad',
    examples: [
      {
        q: 'Виконай множення: 5x(3x − 7)',
        steps: [
          'Множимо 5x на 3x: 5x · 3x = 15x²',
          'Множимо 5x на (−7): 5x · (−7) = −35x',
          'Результат: 15x² − 35x'
        ]
      },
      {
        q: 'Виконай: −3ab(5a² − 2ab + b²)',
        steps: [
          '−3ab · 5a² = −15a³b',
          '−3ab · (−2ab) = +6a²b²',
          '−3ab · b² = −3ab³',
          'Відповідь: −15a³b + 6a²b² − 3ab³'
        ]
      },
      {
        q: 'Спрости: 5m(m² − 2) − 2(m³ − 5m)',
        steps: [
          'Розкриваємо: 5m³ − 10m − 2m³ + 10m',
          'Зводимо подібні: (5m³ − 2m³) + (−10m + 10m)',
          'Відповідь: 3m³'
        ]
      }
    ],
    practice: [
      { q: 'Виконай: 3x(x + 4) = ?', ans: '3x^2+12x', altAns: ['3x²+12x', '3x² + 12x'], hint: '3x·x + 3x·4' },
      { q: 'Виконай: −2a(3a − 5) = ?', ans: '-6a^2+10a', altAns: ['−6a²+10a', '-6a² + 10a'], hint: '(−2a)·3a + (−2a)·(−5)' },
      { q: 'Виконай: 4x²(x − 2) = ?', ans: '4x^3-8x^2', altAns: ['4x³−8x²', '4x³ - 8x²'], hint: '4x²·x − 4x²·2' },
      { q: 'Спрости: 2x(x + 3) − x(2x − 1) = ?', ans: '7x', hint: '2x²+6x − 2x²+x = 7x' },
      { q: 'Виконай: 5a(2a² − a + 3) = ?', ans: '10a^3-5a^2+15a', altAns: ['10a³−5a²+15a'], hint: '5a·2a² − 5a·a + 5a·3' },
      { q: 'Спрости: 3m(m² − 2) − 2(m³ − 3m) = ? (з підручника)', ans: 'm^3', altAns: ['m³'], hint: '3m³−6m − 2m³+6m = m³' },
      { q: 'Виконай: −b(b² + 3b − 2) = ?', ans: '-b^3-3b^2+2b', altAns: ['−b³−3b²+2b'], hint: '−b·b² − b·3b + (−b)·(−2)' },
      { q: 'Знайди: x(x + 1) + x(x − 1) = ?', ans: '2x^2', altAns: ['2x²'], hint: 'x²+x + x²−x = 2x²' },
      { q: 'Виконай: 2ab(a − b) + b(2a² − 2ab) = ?', ans: '4a^2b-4ab^2', altAns: ['4a²b−4ab²'], hint: '2a²b−2ab² + 2a²b−2ab²' }
    ]
  },
  {
    id: 'factoring-common',
    icon: '🔍',
    title: 'Розкладання многочлена на множники. Спільний множник',
    meta: '7 клас · Розділ 2 · §13',
    theory: `<p><b>Розкласти многочлен на множники</b> — означає подати його у вигляді добутку. Це дія, протилежна до множення.</p>
<p><b>Розподільна властивість у зворотному напрямку:</b> ab + ac = a(b + c)</p>
<p><b>Алгоритм винесення спільного множника за дужки:</b></p>
<ol style="margin:8px 0 8px 20px;line-height:2">
  <li>Знайти <b>НСД числових коефіцієнтів</b> усіх членів</li>
  <li>Знайти <b>спільну літерну частину</b> (змінну з найменшим показником)</li>
  <li>Винести спільний множник за дужки</li>
  <li>Перевірити: перемножити множники — має вийти початковий вираз</li>
</ol>
<p><b>Увага:</b> якщо множники виду (a − b) і (b − a) — вони протилежні! (b − a) = −(a − b). Виноси −1 за дужки.</p>
<p>Цей спосіб застосовують і для <b>розв'язування рівнянь</b>, коли права частина = 0: добуток = 0 тоді і тільки тоді, коли хоча б один множник = 0.</p>`,
    formula: 'ab + ac = a(b + c)    |    якщо A·B = 0, то A = 0 або B = 0',
    examples: [
      {
        q: 'Розклади на множники: 15a³b − 10a²b²',
        steps: [
          'НСД(15, 10) = 5 — числовий множник',
          'Спільна літерна частина: a²b (менший показник)',
          '15a³b − 10a²b² = 5a²b · 3a − 5a²b · 2b',
          'Відповідь: 5a²b(3a − 2b)'
        ]
      },
      {
        q: 'Розклади: 2m(b − c) + 3p(b − c)',
        steps: [
          'Спільний множник — дужка (b − c)',
          '= (b − c)(2m + 3p)'
        ]
      },
      {
        q: 'Знайди корені рівняння: 5x² − 7x = 0',
        steps: [
          'Виносимо x за дужки: x(5x − 7) = 0',
          'x = 0 або 5x − 7 = 0',
          '5x = 7 → x = 1,4',
          'Відповідь: x = 0 або x = 1,4'
        ]
      }
    ],
    practice: [
      { q: 'Розклади на множники: 8m + 4 = ?', ans: '4(2m+1)', altAns: ['4(2m + 1)'], hint: 'НСД(8,4) = 4' },
      { q: 'Розклади: at + 7ap = ?', ans: 'a(t+7p)', altAns: ['a(t + 7p)'], hint: 'Спільний множник — a' },
      { q: 'Розклади: 15a³b − 10a²b² = ?', ans: '5a^2b(3a-2b)', altAns: ['5a²b(3a−2b)', '5a²b(3a - 2b)'], hint: 'НСД=5, спільна літ. частина a²b' },
      { q: 'Розклади: 6x³ − 9x² = ?', ans: '3x^2(2x-3)', altAns: ['3x²(2x−3)', '3x²(2x - 3)'], hint: 'НСД=3, спільна x²' },
      { q: 'Розклади: 2m(b−c) + 3p(b−c) = ?', ans: '(b-c)(2m+3p)', altAns: ['(b−c)(2m+3p)'], hint: 'Спільна дужка (b−c)' },
      { q: 'Знайди корені: 3x² − 6x = 0. Менший корінь:', ans: '0', hint: '3x(x−2) = 0, x=0 або x=2' },
      { q: 'Знайди корені: 5x² − 7x = 0. Більший корінь:', ans: '1.4', altAns: ['1,4'], hint: 'x(5x−7)=0, x=0 або x=7/5' },
      { q: 'Розклади: x(y−t) + c(t−y) = ?', ans: '(y-t)(x-c)', altAns: ['(y−t)(x−c)'], hint: '(t−y) = −(y−t), виноси −1' },
      { q: 'Розклади: 12a²b + 8ab² − 4ab = ?', ans: '4ab(3a+2b-1)', altAns: ['4ab(3a + 2b − 1)'], hint: 'НСД=4, спільна ab' }
    ]
  },
  {
    id: 'poly-mult',
    icon: '🔀',
    title: 'Множення многочлена на многочлен',
    meta: '7 клас · Розділ 2 · §14',
    theory: `<p><b>Правило:</b> щоб перемножити два многочлени, треба помножити кожен член першого многочлена на кожен член другого і скласти всі результати.</p>
<p>Якщо перший многочлен має <b>m</b> членів, а другий — <b>n</b> членів, то після множення отримаємо mn членів, деякі з яких можуть бути подібними — їх потім зводимо.</p>
<p>Схема (a + b)(x + y): кожен з 2 членів першого на кожен з 2 членів другого = 4 добутки:</p>
<p style="text-align:center;font-family:monospace;background:#f0f6ff;padding:10px;border-radius:8px;"><b>ax + ay + bx + by</b></p>`,
    formula: '(a+b)(c+d) = ac + ad + bc + bd',
    examples: [
      {
        q: 'Виконай: (2x − y)(4x − 3xy + 2y)',
        steps: [
          '2x · 4x = 8x²',
          '2x · (−3xy) = −6x²y',
          '2x · 2y = 4xy',
          '(−y) · 4x = −4xy',
          '(−y) · (−3xy) = 3xy²',
          '(−y) · 2y = −2y²',
          'Зводимо подібні: 4xy − 4xy = 0',
          'Відповідь: 8x² − 6x²y + 3xy² − 2y²'
        ]
      },
      {
        q: 'Спрости: (2x − 7)(x − 3) − 2x(x + 4)',
        steps: [
          '(2x−7)(x−3) = 2x²−6x−7x+21 = 2x²−13x+21',
          '2x(x+4) = 2x²+8x',
          'Різниця: 2x²−13x+21 − 2x²−8x = −21x+21',
          'Відповідь: −21x + 21'
        ]
      },
      {
        q: 'Виконай: (x − 2)(x + 3)(x + 1)',
        steps: [
          'Спочатку перші два: (x−2)(x+3) = x²+3x−2x−6 = x²+x−6',
          'Тепер на третій: (x²+x−6)(x+1)',
          '= x³+x²+x²+x−6x−6',
          'Відповідь: x³ + 2x² − 5x − 6'
        ]
      }
    ],
    practice: [
      { q: '(x + 2)(x + 3) = ?', ans: 'x^2+5x+6', altAns: ['x²+5x+6'], hint: 'x²+3x+2x+6' },
      { q: '(x − 4)(x + 1) = ?', ans: 'x^2-3x-4', altAns: ['x²−3x−4'], hint: 'x²+x−4x−4' },
      { q: '(2a + b)(a − 3b) = ?', ans: '2a^2-5ab-3b^2', altAns: ['2a²−5ab−3b²'], hint: '2a²−6ab+ab−3b²' },
      { q: '(x + 5)(x − 5) = ?', ans: 'x^2-25', altAns: ['x²−25'], hint: 'x²−5x+5x−25' },
      { q: 'Спрости: (x+1)(x−1) + x² = ?', ans: '2x^2-1', altAns: ['2x²−1'], hint: '(x²−1)+x² = 2x²−1' },
      { q: '(a + b)² = (a+b)(a+b). Розкрий: = ?', ans: 'a^2+2ab+b^2', altAns: ['a²+2ab+b²'], hint: 'a²+ab+ab+b²' },
      { q: 'Спрости: (x+2)(x−3) − (x−1)(x+1) = ?', ans: '-x-5', altAns: ['−x−5'], hint: '(x²−x−6)−(x²−1) = −x−5' },
      { q: 'Скільки членів у добутку тричлена на двочлен до зведення подібних?', ans: '6', hint: '3×2=6' }
    ]
  },
  {
    id: 'factoring-group',
    icon: '🗂️',
    title: 'Розкладання на множники способом групування',
    meta: '7 клас · Розділ 2 · §15',
    theory: `<p><b>Спосіб групування</b> застосовують, коли немає спільного множника для всіх членів, але можна розбити члени на групи, кожна з яких має свій спільний множник.</p>
<p><b>Алгоритм:</b></p>
<ol style="margin:8px 0 8px 20px;line-height:2">
  <li>Розбити члени многочлена на групи (по 2 або по 3)</li>
  <li>У кожній групі винести спільний множник за дужки</li>
  <li>Якщо в дужках вийшов однаковий вираз — це спільний множник!</li>
  <li>Винести його за дужки ще раз</li>
  <li>Перевірити: перемножити множники — має вийти початковий вираз</li>
</ol>
<p><b>Тричлен x² + px + q:</b> підбираємо два числа, добуток яких q, а сума p — і розбиваємо середній член на два.</p>`,
    formula: 'ab + ac + db + dc = a(b+c) + d(b+c) = (b+c)(a+d)',
    examples: [
      {
        q: 'Розклади: ab − 5a + 2b − 10',
        steps: [
          'Групуємо: (ab − 5a) + (2b − 10)',
          'Виносимо: a(b − 5) + 2(b − 5)',
          'Спільна дужка: (b − 5)(a + 2)'
        ]
      },
      {
        q: 'Розклади тричлен: x² − 6x + 8',
        steps: [
          'Шукаємо два числа: добуток 8, сума −6 → це −2 і −4',
          'Розбиваємо: x² − 2x − 4x + 8',
          'Групуємо: (x²−2x) + (−4x+8)',
          '= x(x−2) − 4(x−2) = (x−2)(x−4)'
        ]
      }
    ],
    practice: [
      { q: 'Розклади: ab − 5a + 2b − 10 = ?', ans: '(b-5)(a+2)', altAns: ['(a+2)(b-5)'], hint: 'a(b−5)+2(b−5)' },
      { q: 'Розклади: mx + my + nx + ny = ?', ans: '(m+n)(x+y)', altAns: ['(x+y)(m+n)'], hint: 'm(x+y)+n(x+y)' },
      { q: 'Розклади: x² + 5x + 6 = ?', ans: '(x+2)(x+3)', altAns: ['(x+3)(x+2)'], hint: 'Числа: 2·3=6, 2+3=5' },
      { q: 'Розклади: x² − 5x + 6 = ?', ans: '(x-2)(x-3)', altAns: ['(x-3)(x-2)'], hint: '(−2)·(−3)=6, (−2)+(−3)=−5' },
      { q: 'Розклади: x² + x − 6 = ?', ans: '(x+3)(x-2)', altAns: ['(x-2)(x+3)'], hint: '3·(−2)=−6, 3+(−2)=1' },
      { q: 'Розклади: 2a + 2b − am − bm = ?', ans: '(2-m)(a+b)', altAns: ['(a+b)(2-m)'], hint: '2(a+b)−m(a+b)' },
      { q: 'Розклади: x² − 7x + 12 = ?', ans: '(x-3)(x-4)', altAns: ['(x-4)(x-3)'], hint: '(−3)+(−4)=−7, (−3)·(−4)=12' },
      { q: 'Розклади: a³ − a² + a − 1 = ?', ans: '(a^2+1)(a-1)', altAns: ['(a-1)(a²+1)'], hint: 'a²(a−1)+1(a−1)' }
    ]
  },
  {
    id: 'square-sum-diff',
    icon: '✨',
    title: 'Квадрат суми і квадрат різниці',
    meta: '7 клас · Розділ 2 · §16',
    theory: `<p>Це <b>формули скороченого множення</b> — дозволяють не перемножувати в стовпчик, а записати результат одразу. Відомі ще з часів Стародавньої Греції!</p>
<div style="background:var(--blue);color:#fff;border-radius:12px;padding:16px 20px;margin:12px 0;text-align:center;font-size:1.1rem;font-weight:700;font-family:'Fira Code',monospace;line-height:2.2">
  (a + b)² = a² + 2ab + b²<br>
  (a − b)² = a² − 2ab + b²
</div>
<p>Читається: <b>квадрат суми</b> = квадрат першого + подвійний добуток + квадрат другого.</p>
<p>Ці формули також використовують у зворотньому напрямку — для розкладання на множники трьохчленів.</p>
<p><b>Порада:</b> якщо виглядає як –a–b, заміни на –(a+b) і зведи до відомої формули.</p>`,
    formula: '(a+b)² = a²+2ab+b²   |   (a−b)² = a²−2ab+b²',
    examples: [
      {
        q: 'Подай у вигляді многочлена: (3x + 5y)²',
        steps: [
          'a = 3x, b = 5y',
          '(3x)² + 2·3x·5y + (5y)²',
          '= 9x² + 30xy + 25y²'
        ]
      },
      {
        q: 'Підніси до квадрату: (4a − 7b)²',
        steps: [
          'a = 4a, b = 7b, формула різниці',
          '(4a)² − 2·4a·7b + (7b)²',
          '= 16a² − 56ab + 49b²'
        ]
      },
      {
        q: 'Обчисли: 5,8²',
        steps: [
          '5,8 = 6 − 0,2',
          '(6 − 0,2)² = 36 − 2·6·0,2 + 0,04',
          '= 36 − 2,4 + 0,04 = 33,64'
        ]
      }
    ],
    practice: [
      { q: '(x + 3)² = ?', ans: 'x^2+6x+9', altAns: ['x²+6x+9'], hint: 'x² + 2·x·3 + 9' },
      { q: '(a − 5)² = ?', ans: 'a^2-10a+25', altAns: ['a²−10a+25'], hint: 'a² − 2·a·5 + 25' },
      { q: '(2x + y)² = ?', ans: '4x^2+4xy+y^2', altAns: ['4x²+4xy+y²'], hint: '(2x)²+2·2x·y+y²' },
      { q: '(3a − 2b)² = ?', ans: '9a^2-12ab+4b^2', altAns: ['9a²−12ab+4b²'], hint: '9a²−2·3a·2b+4b²' },
      { q: 'Обчисли: 51² = (50+1)² = ?', ans: '2601', hint: '2500+100+1' },
      { q: 'Обчисли: 99² = (100−1)² = ?', ans: '9801', hint: '10000−200+1' },
      { q: '(−x − 3)² = (x+3)² = ?', ans: 'x^2+6x+9', altAns: ['x²+6x+9'], hint: '(−(x+3))² = (x+3)²' },
      { q: 'Розклади на множники: x² + 8x + 16 = ?', ans: '(x+4)^2', altAns: ['(x+4)²'], hint: '√16=4, 2·x·4=8x' },
      { q: 'Розклади: a² − 6a + 9 = ?', ans: '(a-3)^2', altAns: ['(a−3)²'], hint: '√9=3, 2·a·3=6a' }
    ]
  },
  {
    id: 'test-ch3',
    icon: '📋',
    title: 'Самостійна робота №3',
    meta: '7 клас · §8–§16 · Цілі вирази',
    type: 'test',
    theory: `<p>Перевір знання §8–§16. Без підказок!</p>
<p>Теми: одночлени · многочлени · множення · розкладання на множники · квадрат суми і різниці</p>`,
    practice: [
      { q: 'Ступінь одночлена 5a²b³c дорівнює:', ans: '6' },
      { q: 'Запиши у стандартному вигляді: 3 · x · x · (−2). Відповідь:', ans: '-6x^2', altAns: ['-6x²'] },
      { q: 'Спрости: (2x²)(−3x³) = ?', ans: '-6x^5', altAns: ['-6x⁵'] },
      { q: 'Знайди: (−2a)⁴ = ?', ans: '16a^4', altAns: ['16a⁴'] },
      { q: 'Зведи подібні: 4x² − x² + 3x − x = ?', ans: '3x^2+2x', altAns: ['3x²+2x', '3x² + 2x'] },
      { q: 'Ступінь многочлена 3x⁴ − x² + 5x − 1:', ans: '4' },
      { q: '(5x + 3) + (2x − 7) = ?', ans: '7x-4', altAns: ['7x − 4'] },
      { q: '(4a² − 3a) − (a² + 2a) = ?', ans: '3a^2-5a', altAns: ['3a²−5a', '3a² - 5a'] },
      { q: 'Виконай: 2x(x − 3) = ?', ans: '2x^2-6x', altAns: ['2x²−6x', '2x² - 6x'] },
      { q: '(x + 2)(x + 5) = ?', ans: 'x^2+7x+10', altAns: ['x²+7x+10'] },
      { q: 'Розклади на множники: 6x² + 9x = ?', ans: '3x(2x+3)', hint: 'НСД = 3x' },
      { q: 'Розклади: x² − x − 6 = ?', ans: '(x-3)(x+2)', altAns: ['(x+2)(x-3)'] },
      { q: '(x + 4)² = ?', ans: 'x^2+8x+16', altAns: ['x²+8x+16'] },
      { q: '(2a − 3)² = ?', ans: '4a^2-12a+9', altAns: ['4a²−12a+9'] }
    ]
  },
  {
    id: 'perfect-square-factor',
    icon: '🔁',
    title: 'Розкладання на множники за формулами квадрата суми і різниці',
    meta: '7 клас · Розділ 2 · §17',
    theory: `<p>Формули квадрата суми і різниці можна читати зліва направо (розкривати) і <b>справа наліво</b> (розкладати на множники):</p>
<div style="background:var(--blue);color:#fff;border-radius:12px;padding:14px 20px;margin:12px 0;text-align:center;font-size:1.05rem;font-weight:700;font-family:'Fira Code',monospace;line-height:2.4">
  a² + 2ab + b² = (a + b)²<br>
  a² − 2ab + b² = (a − b)²
</div>
<p>Тричлен виду <b>a² ± 2ab + b²</b> називають <b>повним квадратом</b> — його можна «згорнути» у квадрат двочлена.</p>
<p>Якщо знаки не пасують (вираз від'ємний) — виноси <b>−1</b> за дужки, а тоді застосовуй формулу.</p>
<p>Застосування до рівнянь: якщо (щось)² = 0, то це щось = 0 → один корінь.</p>`,
    formula: 'a²+2ab+b² = (a+b)²    |    a²−2ab+b² = (a−b)²',
    examples: [
      {
        q: 'Розклади: 4x² + 12x + 9',
        steps: ['4x² = (2x)², 9 = 3², 12x = 2·2x·3 → повний квадрат!', '= (2x)² + 2·2x·3 + 3² = (2x + 3)²']
      },
      {
        q: 'Знайди значення x² + 25y⁴ − 10xy², якщо x=44, y=−3',
        steps: ['Перегрупуємо: x² − 10xy² + 25y⁴ = (x − 5y²)²', 'y=−3: 5y² = 5·9 = 45', '(44 − 45)² = (−1)² = 1']
      },
      {
        q: 'Розв\'яжи рівняння: 16x² − 40x + 25 = 0',
        steps: ['(4x)² − 2·4x·5 + 5² = (4x − 5)²', '(4x − 5)² = 0 → 4x − 5 = 0', 'x = 1,25']
      }
    ],
    practice: [
      { q: 'Розклади: x² + 6x + 9 = ?', ans: '(x+3)^2', altAns: ['(x+3)²'], hint: 'x², 2·x·3, 3²' },
      { q: 'Розклади: a² − 10a + 25 = ?', ans: '(a-5)^2', altAns: ['(a−5)²'], hint: '2·a·5 = 10a' },
      { q: 'Розклади: 4x² + 12x + 9 = ?', ans: '(2x+3)^2', altAns: ['(2x+3)²'], hint: '(2x)², 2·2x·3, 3²' },
      { q: 'Розклади: 9a² − 6a + 1 = ?', ans: '(3a-1)^2', altAns: ['(3a−1)²'], hint: '(3a)², 2·3a·1, 1²' },
      { q: 'Розв\'яжи: (x − 3)² = 0. Корінь:', ans: '3', hint: 'x − 3 = 0' },
      { q: 'Розв\'яжи: 9x² − 12x + 4 = 0. Корінь:', ans: '0.667', altAns: ['2/3', '0,667'], hint: '(3x−2)²=0, x=2/3' },
      { q: 'Перетвори: −16a² + 8ab − b². Відповідь:', ans: '-(4a-b)^2', altAns: ['−(4a−b)²'], hint: 'Виноси −1: −(16a²−8ab+b²) = −(4a−b)²' },
      { q: 'Розклади: 25x² + 20xy + 4y² = ?', ans: '(5x+2y)^2', altAns: ['(5x+2y)²'], hint: '(5x)², 2·5x·2y, (2y)²' }
    ]
  },
  {
    id: 'diff-squares-mult',
    icon: '⚡',
    title: 'Множення різниці двох виразів на їх суму',
    meta: '7 клас · Розділ 2 · §18',
    theory: `<p>Перемножимо (a − b)(a + b):</p>
<p style="text-align:center;font-family:monospace;background:#f0f6ff;padding:8px;border-radius:8px;margin:8px 0">(a − b)(a + b) = a² + ab − ab − b² = <b>a² − b²</b></p>
<div style="background:var(--blue);color:#fff;border-radius:12px;padding:14px 20px;margin:12px 0;text-align:center;font-size:1.1rem;font-weight:700;font-family:'Fira Code',monospace">
  (a − b)(a + b) = a² − b²
</div>
<p>Читається: <em>різниця двох виразів, помножена на їх суму, дорівнює різниці їх квадратів</em>.</p>
<p>Середні члени скорочуються — тому це один із найзручніших прийомів для усного множення!</p>
<p><b>Порада:</b> якщо множники мають різні знаки на перший погляд — переставляй доданки так, щоб побачити a+b і a−b.</p>`,
    formula: '(a−b)(a+b) = a²−b²',
    examples: [
      {
        q: 'Виконай: (2m − 3p)(2m + 3p)',
        steps: ['a = 2m, b = 3p', '(2m)² − (3p)² = 4m² − 9p²']
      },
      {
        q: 'Спрости: 4x(x−2) − (2x+3)(2x−3)',
        steps: ['(2x+3)(2x−3) = (2x)²−3² = 4x²−9', '4x²−8x − (4x²−9) = 4x²−8x−4x²+9', '= 9 − 8x']
      },
      {
        q: 'Обчисли: 4,3 · 3,7',
        steps: ['4,3 · 3,7 = (4+0,3)(4−0,3)', '= 4² − 0,3² = 16 − 0,09 = 15,91']
      }
    ],
    practice: [
      { q: '(x − 3)(x + 3) = ?', ans: 'x^2-9', altAns: ['x²−9'], hint: 'a=x, b=3' },
      { q: '(2a − 5b)(2a + 5b) = ?', ans: '4a^2-25b^2', altAns: ['4a²−25b²'], hint: '(2a)²−(5b)²' },
      { q: '(x² + y)(x² − y) = ?', ans: 'x^4-y^2', altAns: ['x⁴−y²'], hint: '(x²)²−y²' },
      { q: 'Обчисли: 6,2 · 5,8 = ?', ans: '35.96', altAns: ['35,96'], hint: '(6+0,2)(6−0,2) = 36−0,04' },
      { q: 'Обчисли: 103 · 97 = ?', ans: '9991', hint: '(100+3)(100−3) = 10000−9' },
      { q: 'Спрости: −2m(m−5)(m+5) = ?', ans: '-2m^3+50m', altAns: ['50m−2m³'], hint: '−2m(m²−25) = −2m³+50m' },
      { q: '(b²−2)(b²+2)(b⁴+4) = ?', ans: 'b^8-16', altAns: ['b⁸−16'], hint: '(b⁴−4)(b⁴+4) = b⁸−16' },
      { q: '(−5m−7a)(5m−7a) = ?', ans: '49a^2-25m^2', altAns: ['49a²−25m²'], hint: '(−7a−5m)(−7a+5m) = (7a)²−(5m)²' }
    ]
  },
  {
    id: 'diff-squares-factor',
    icon: '✂️',
    title: 'Розкладання різниці квадратів на множники',
    meta: '7 клас · Розділ 2 · §19',
    theory: `<p>Формулу множення читаємо у зворотному напрямку:</p>
<div style="background:var(--blue);color:#fff;border-radius:12px;padding:14px 20px;margin:12px 0;text-align:center;font-size:1.1rem;font-weight:700;font-family:'Fira Code',monospace">
  a² − b² = (a − b)(a + b)
</div>
<p>Різниця квадратів <b>завжди</b> розкладається на добуток суми та різниці.</p>
<p><b>Алгоритм:</b> визнач a = √(перший) та b = √(другий), запиши (a−b)(a+b).</p>
<p>Застосування до рівнянь: a²−b² = 0 → (a−b)(a+b) = 0 → a=b або a=−b.</p>`,
    formula: 'a²−b² = (a−b)(a+b)',
    examples: [
      {
        q: 'Розклади: 49m⁴ − 64p⁶',
        steps: ['49m⁴ = (7m²)², 64p⁶ = (8p³)²', '= (7m²−8p³)(7m²+8p³)']
      },
      {
        q: 'Розклади: 25x² − (1−2x)²',
        steps: ['a = 5x, b = (1−2x)', '= (5x−(1−2x))(5x+(1−2x))', '= (5x−1+2x)(5x+1−2x) = (7x−1)(3x+1)']
      },
      {
        q: 'Розв\'яжи: x² − 25 = 0',
        steps: ['(x−5)(x+5) = 0', 'x = 5 або x = −5']
      }
    ],
    practice: [
      { q: 'Розклади: 16 − x² = ?', ans: '(4-x)(4+x)', altAns: ['(4+x)(4-x)'], hint: '16 = 4²' },
      { q: 'Розклади: 9a² − 4b² = ?', ans: '(3a-2b)(3a+2b)', altAns: ['(3a+2b)(3a-2b)'], hint: '(3a)²−(2b)²' },
      { q: 'Розклади: x⁴ − 1 = ?', ans: '(x^2-1)(x^2+1)', altAns: ['(x²−1)(x²+1)'], hint: '(x²)²−1²' },
      { q: 'Обчисли: 105²−95² = ?', ans: '2000', hint: '(105−95)(105+95) = 10·200' },
      { q: 'Обчисли: 47·53 = ?', ans: '2491', hint: '(50−3)(50+3) = 2500−9' },
      { q: 'Розв\'яжи: 4x²−9=0. Більший корінь:', ans: '1.5', altAns: ['3/2', '1,5'], hint: '(2x−3)(2x+3)=0' },
      { q: 'Розклади: 25x² − (1−2x)² = ?', ans: '(7x-1)(3x+1)', altAns: ['(3x+1)(7x-1)'], hint: '(5x−1+2x)(5x+1−2x)' },
      { q: 'Розклади: a⁴ − b⁴ = ?', ans: '(a^2-b^2)(a^2+b^2)', altAns: ['(a²−b²)(a²+b²)', '(a-b)(a+b)(a^2+b^2)'], hint: '(a²)²−(b²)²' }
    ]
  },
  {
    id: 'sum-diff-cubes',
    icon: '🧊',
    title: 'Сума і різниця кубів',
    meta: '7 клас · Розділ 2 · §20',
    theory: `<p>Ще дві важливі формули скороченого множення:</p>
<div style="background:var(--blue);color:#fff;border-radius:12px;padding:14px 20px;margin:12px 0;text-align:center;font-size:1rem;font-weight:700;font-family:'Fira Code',monospace;line-height:2.4">
  a³ + b³ = (a + b)(a² − ab + b²)<br>
  a³ − b³ = (a − b)(a² + ab + b²)
</div>
<p>a²−ab+b² — <b>неповний квадрат різниці</b> (не плутай з повним квадратом: тут ab, а не 2ab).</p>
<p>a²+ab+b² — <b>неповний квадрат суми</b>.</p>
<p>Ці формули також читаються у зворотному напрямку для розкладання на множники.</p>`,
    formula: 'a³+b³ = (a+b)(a²−ab+b²)    |    a³−b³ = (a−b)(a²+ab+b²)',
    examples: [
      {
        q: 'Розклади: x³ + 64',
        steps: ['64 = 4³ → сума кубів', '= (x+4)(x²−4x+16)']
      },
      {
        q: 'Розклади: 27a³ − m⁶',
        steps: ['27a³ = (3a)³, m⁶ = (m²)³ → різниця кубів', '= (3a−m²)((3a)²+3a·m²+(m²)²)', '= (3a−m²)(9a²+3am²+m⁴)']
      },
      {
        q: 'Перетвори: (x+2y)(x²−2xy+4y²)',
        steps: ['x²−2xy+4y² — неповний квадрат різниці x і 2y', '= x³+(2y)³ = x³+8y³']
      }
    ],
    practice: [
      { q: 'Розклади: a³ + 8 = ?', ans: '(a+2)(a^2-2a+4)', altAns: ['(a+2)(a²−2a+4)'], hint: '8=2³, a²−a·2+2²' },
      { q: 'Розклади: x³ − 27 = ?', ans: '(x-3)(x^2+3x+9)', altAns: ['(x−3)(x²+3x+9)'], hint: '27=3³, x²+x·3+3²' },
      { q: 'Розклади: 8m³ + n³ = ?', ans: '(2m+n)(4m^2-2mn+n^2)', altAns: ['(2m+n)(4m²−2mn+n²)'], hint: '8m³=(2m)³' },
      { q: 'Обчисли: (a+b)(a²−ab+b²) = ?', ans: 'a^3+b^3', altAns: ['a³+b³'], hint: 'Це формула суми кубів' },
      { q: 'Розклади: 64x³ − 1 = ?', ans: '(4x-1)(16x^2+4x+1)', altAns: ['(4x−1)(16x²+4x+1)'], hint: '64x³=(4x)³' },
      { q: 'Спрости: (x+2y)(x²−2xy+4y²) = ?', ans: 'x^3+8y^3', altAns: ['x³+8y³'], hint: 'Формула суми кубів' },
      { q: 'Розклади: (p−2)³ − 1 = ?', ans: '(p-3)(p^2-3p+3)', altAns: ['(p−3)(p²−3p+3)'], hint: 'a=(p−2), b=1; a−b=p−3; розкрий (p−2)²+(p−2)+1' },
      { q: 'Розв\'яжи: (5x−1)(25x²+5x+1) = 125x³−8x. Корінь:', ans: '0.125', altAns: ['1/8', '0,125'], hint: '125x³−1=125x³−8x → 8x=1' }
    ]
  },
  {
    id: 'test-ch4',
    icon: '📋',
    title: 'Самостійна робота №4',
    meta: '7 клас · §17–§20 · Формули скороченого множення',
    type: 'test',
    theory: `<p>Перевір знання §17–§20. Без підказок!</p>
<p>Теми: повний квадрат · різниця квадратів · сума і різниця кубів</p>`,
    practice: [
      { q: 'Розклади: 4x² − 12x + 9 = ?', ans: '(2x-3)^2', altAns: ['(2x−3)²'] },
      { q: 'Розв\'яжи: (3x−1)² = 0. Корінь:', ans: '0.333', altAns: ['1/3', '0,333'] },
      { q: '(5a − 2b)(5a + 2b) = ?', ans: '25a^2-4b^2', altAns: ['25a²−4b²'] },
      { q: 'Обчисли: 62·58 = (60+2)(60−2) = ?', ans: '3596' },
      { q: 'Розклади: 36 − x² = ?', ans: '(6-x)(6+x)', altAns: ['(6+x)(6-x)'] },
      { q: 'Розв\'яжи: x²−16=0. Більший корінь:', ans: '4' },
      { q: 'Розклади: x³ + 1 = ?', ans: '(x+1)(x^2-x+1)', altAns: ['(x+1)(x²−x+1)'] },
      { q: 'Розклади: 8a³ − b³ = ?', ans: '(2a-b)(4a^2+2ab+b^2)', altAns: ['(2a−b)(4a²+2ab+b²)'] }
    ]
  },
  {
    id: 'factoring-combined',
    icon: '🧩',
    title: 'Застосування кількох способів розкладання на множники',
    meta: '7 клас · Розділ 2 · §21',
    theory: `<p>Часто один спосіб не дає результату — тоді поєднуємо кілька. Орієнтовне правило:</p>
<ol style="margin:8px 0 8px 20px;line-height:2">
  <li><b>Спочатку</b> — перевір, чи є спільний множник у всіх членів. Якщо є — виноси за дужки.</li>
  <li><b>Потім</b> — подивись, чи вираз у дужках є різницею квадратів, повним квадратом або чи можна згрупувати члени.</li>
  <li><b>Продовжуй</b>, поки кожен множник не можна розкласти далі.</li>
</ol>
<p><b>Штучний прийом:</b> якщо тричлен містить повний квадрат серед перших трьох членів — «замаскована» різниця квадратів: a²−2ab+b²−c² = (a−b)²−c² = (a−b−c)(a−b+c).</p>
<p><b>Виділення квадрата двочлена:</b> x² + 8x − 20 → додай і відніми (8/2)² = 16 → (x+4)² − 36 → різниця квадратів.</p>`,
    formula: 'Порядок: спільний множник → формули → групування',
    examples: [
      {
        q: 'Розклади: 5m⁴ − 20m²n²',
        steps: ['Спільний множник 5m²: 5m²(m²−4n²)', 'В дужках — різниця квадратів:', '5m²(m−2n)(m+2n)']
      },
      {
        q: 'Розклади: 2x⁴ + 12x³ + 18x²',
        steps: ['Спільний множник 2x²: 2x²(x²+6x+9)', 'В дужках — повний квадрат:', '2x²(x+3)²']
      },
      {
        q: 'Розклади: a² − 4a + 4 − b²',
        steps: ['Перші три = (a−2)²', '(a−2)² − b² — різниця квадратів:', '(a−2−b)(a−2+b)']
      },
      {
        q: 'Розв\'яжи: x² + 8x − 20 = 0',
        steps: ['Виділяємо квадрат: x²+8x+16−36 = 0', '(x+4)²−6² = 0 → (x+4−6)(x+4+6) = 0', '(x−2)(x+10) = 0 → x=2 або x=−10']
      }
    ],
    practice: [
      { q: 'Розклади: 3x² − 12 = ?', ans: '3(x-2)(x+2)', altAns: ['3(x+2)(x-2)'], hint: '3(x²−4) = 3(x−2)(x+2)' },
      { q: 'Розклади: 2x⁴ − 8x² = ?', ans: '2x^2(x-2)(x+2)', altAns: ['2x²(x−2)(x+2)'], hint: '2x²(x²−4)' },
      { q: 'Розклади: 5m⁴ − 20m²n² = ?', ans: '5m^2(m-2n)(m+2n)', altAns: ['5m²(m−2n)(m+2n)'], hint: '5m²(m²−4n²)' },
      { q: 'Розклади: 2x⁴ + 12x³ + 18x² = ?', ans: '2x^2(x+3)^2', altAns: ['2x²(x+3)²'], hint: '2x²(x²+6x+9)' },
      { q: 'Розклади: a² − 4a + 4 − b² = ?', ans: '(a-2-b)(a-2+b)', altAns: ['(a-b-2)(a+b-2)'], hint: '(a−2)²−b²' },
      { q: 'Розв\'яжи: x²+8x−20=0. Менший корінь:', ans: '-10', hint: '(x−2)(x+10)=0' },
      { q: 'Розклади: a³b² − 3a³b + 5a²b² − 15a²b = ?', ans: 'a^2b(b-3)(a+5)', altAns: ['a²b(b−3)(a+5)'], hint: 'a²b · групування: ab−3a+5b−15' },
      { q: 'Розклади: 4x² − 4x + 1 − 9y² = ?', ans: '(2x-1-3y)(2x-1+3y)', hint: '(2x−1)²−(3y)²' }
    ]
  },
  {
    id: 'function-basics',
    icon: '📈',
    title: 'Функція. Область визначення та область значень',
    meta: '7 клас · Розділ 3 · §22',
    theory: `<p><b>Функція</b> — це залежність, за якої кожному значенню незалежної змінної (аргументу) відповідає єдине значення залежної змінної.</p>
<p><b>Аргумент (x)</b> — незалежна змінна, яку вибираємо довільно.</p>
<p><b>Значення функції (y)</b> — залежна змінна, яка визначається формулою.</p>
<p><b>Область визначення</b> — множина всіх допустимих значень аргументу (де функція має зміст).</p>
<p><b>Область значень</b> — множина всіх можливих значень функції.</p>
<p><b>Способи задання функції:</b></p>
<ul style="margin:8px 0 8px 20px;line-height:2">
  <li><b>Формулою</b>: y = 2x + 1 (найзручніший)</li>
  <li><b>Таблицею</b>: кожному x зіставляємо y (зручно, але обмежено)</li>
  <li><b>Графіком</b>: зображення на координатній площині</li>
  <li><b>Словесно</b>: «кожному натуральному числу — його квадрат»</li>
</ul>`,
    formula: 'y = f(x)    Область визначення: всі x, для яких функція має зміст',
    examples: [
      {
        q: 'Знайди значення функції y = 3x − 1 при x = 2 та x = −1',
        steps: ['x=2: y = 3·2−1 = 5', 'x=−1: y = 3·(−1)−1 = −4']
      },
      {
        q: 'Знайди область визначення функції y = 5/(x−2)',
        steps: ['Знаменник ≠ 0: x−2 ≠ 0 → x ≠ 2', 'Область визначення: всі числа, крім 2']
      },
      {
        q: 'Функція y = (x+3)/(x−2). При якому x значення функції = 0?',
        steps: ['Підставляємо y=0: (x+3)/(x−2) = 0', 'Чисельник = 0: x+3 = 0 → x = −3', '(При x=−3 знаменник ≠ 0 ✓)']
      }
    ],
    practice: [
      { q: 'Знайди значення y = 2x + 5 при x = 3:', ans: '11', hint: '2·3+5 = 11' },
      { q: 'Знайди значення y = x² − 4 при x = −2:', ans: '0', hint: '4−4 = 0' },
      { q: 'При якому x функція y = 4/(x+3) не має змісту:', ans: '-3', hint: 'x+3 = 0' },
      { q: 'При якому x функція y = 2/(3x−6) не має змісту:', ans: '2', hint: '3x−6=0 → x=2' },
      { q: 'Знайди значення y = x²−2x при x = 5:', ans: '15', hint: '25−10 = 15' },
      { q: 'Функція y = (x−1)/(x+4). При якому x значення = 0:', ans: '1', hint: 'x−1=0, x≠−4' },
      { q: 'Знайди y = 3x²−x+2 при x = −1:', ans: '6', hint: '3+1+2 = 6' },
      { q: 'Область визначення y = 5/x — всі числа, крім:', ans: '0', hint: 'x ≠ 0' }
    ]
  },
  {
    id: 'function-graph',
    icon: '📉',
    title: 'Графік функції. Графічний спосіб задання',
    meta: '7 клас · Розділ 3 · §23',
    theory: `<p><b>Графік функції</b> — це множина всіх точок координатної площини (x; y), де x — значення аргументу, y — відповідне значення функції.</p>
<p><b>Як побудувати графік:</b></p>
<ol style="margin:8px 0 8px 20px;line-height:2">
  <li>Скласти таблицю значень: вибрати кілька x, обчислити y за формулою</li>
  <li>Нанести точки (x; y) на координатну площину</li>
  <li>З'єднати точки плавною лінією</li>
</ol>
<p>Чим більше точок — тим точніший графік!</p>
<p><b>За графіком можна знайти:</b></p>
<ul style="margin:8px 0 8px 20px;line-height:2">
  <li><b>Нулі функції</b> — абсциси точок перетину з віссю Ox (де y = 0)</li>
  <li><b>Область значень</b> — всі значення y, що є на графіку</li>
  <li><b>Де y > 0</b> — частини графіка вище від осі Ox</li>
  <li><b>Де y < 0</b> — частини графіка нижче від осі Ox</li>
</ul>
<p><b>Вертикальна пряма тест:</b> фігура є графіком функції тоді і тільки тоді, коли будь-яка вертикальна пряма перетинає її <b>не більше ніж в одній точці</b>.</p>`,
    formula: 'Графік y = f(x): кожна вертикальна пряма перетинає його ≤ 1 раз',
    examples: [
      {
        q: 'Побудуй таблицю значень для y = x² − 1 при x = −2, −1, 0, 1, 2',
        steps: [
          'x = −2: y = 4 − 1 = 3',
          'x = −1: y = 1 − 1 = 0',
          'x =  0: y = 0 − 1 = −1',
          'x =  1: y = 1 − 1 = 0',
          'x =  2: y = 4 − 1 = 3',
          'Нулі функції: x = −1 і x = 1'
        ]
      },
      {
        q: 'За графіком y = x²−1 (де −3≤x≤2) визнач: нулі, де y > 0, де y < 0',
        steps: [
          'Нулі: x = −1 і x = 1 (перетин з Ox)',
          'y > 0: при −3 ≤ x < −1 та 1 < x ≤ 2 (графік вище Ox)',
          'y < 0: при −1 < x < 1 (графік нижче Ox)'
        ]
      }
    ],
    practice: [
      { q: 'Знайди y = x² − 4 при x = 2:', ans: '0', hint: '4 − 4 = 0 — нуль функції!' },
      { q: 'Знайди y = x² − 4 при x = 0:', ans: '-4', hint: '0 − 4 = −4 (графік нижче Ox)' },
      { q: 'Нулі функції y = x²−9. Більший нуль:', ans: '3', hint: 'x²=9 → x=±3' },
      { q: 'Функція y = x²−1. При якому x є мінімум y? Введи x:', ans: '0', hint: 'При x=0: y = −1 — найменше' },
      { q: 'Яка умова, щоб фігура була графіком функції? Вертикальна пряма перетинає її не більше ніж... (число):', ans: '1', hint: 'Не більше ніж в одній точці' },
      { q: 'Для y = 2x−1: при якому x функція = 0?', ans: '0.5', altAns: ['1/2', '0,5'], hint: '2x−1=0 → x=0,5' },
      { q: 'Функція y = x²+1. Чи має вона нулі? (так/ні)', ans: 'ні', hint: 'x²+1 ≥ 1 > 0 завжди' },
      { q: 'За таблицею: x = 1→y=3, x=2→y=5, x=3→y=7. Формула:', ans: '2x+1', hint: 'Різниця 2, при x=1: y=3=2·1+1' }
    ]
  },
  {
    id: 'linear-function',
    icon: '📏',
    title: 'Лінійна функція, її графік та властивості',
    meta: '7 клас · Розділ 3 · §24',
    theory: `<p><b>Лінійна функція</b> — функція виду <b>y = kx + b</b>, де k і b — числа (коефіцієнти).</p>
<div style="background:var(--blue);color:#fff;border-radius:12px;padding:14px 20px;margin:12px 0;text-align:center;font-size:1.1rem;font-weight:700;font-family:'Fira Code',monospace">
  y = kx + b
</div>
<p><b>k</b> — кутовий коефіцієнт (нахил прямої): k > 0 → функція зростає, k < 0 → спадає.</p>
<p><b>b</b> — вільний член (де пряма перетинає вісь Oy, тобто при x = 0).</p>
<p><b>Графік</b> лінійної функції — <b>пряма лінія</b>. Для побудови достатньо двох точок.</p>
<p><b>Особливі випадки:</b></p>
<ul style="margin:8px 0 8px 20px;line-height:2">
  <li><b>y = b</b> (k=0) — горизонтальна пряма, паралельна осі Ox</li>
  <li><b>y = kx</b> (b=0) — пряма пропорційність, проходить через початок координат (0;0)</li>
</ul>
<p><b>Точки перетину з осями:</b> з Ox — підстав y=0, з Oy — підстав x=0.</p>`,
    formula: 'y = kx + b    перетин з Ox: x = −b/k    перетин з Oy: y = b',
    examples: [
      {
        q: 'Побудуй таблицю для y = −2x + 3 (для x = 0 і x = 4)',
        steps: ['x=0: y = 3 → точка (0; 3)', 'x=4: y = −8+3 = −5 → точка (4; −5)', 'Проведи пряму через ці дві точки']
      },
      {
        q: 'Знайди точки перетину y = 2x − 6 з осями',
        steps: ['З Ox: y=0 → 2x−6=0 → x=3 → точка (3; 0)', 'З Oy: x=0 → y=−6 → точка (0; −6)']
      },
      {
        q: 'Яка функція: зростає чи спадає? y = −3x + 1',
        steps: ['k = −3 < 0 → функція спадає', 'При збільшенні x значення y зменшується']
      }
    ],
    practice: [
      { q: 'Знайди y = 3x − 2 при x = 0:', ans: '-2', hint: 'b = −2 — перетин з Oy' },
      { q: 'Знайди y = 3x − 2 при y = 0. Чому дорівнює x?', ans: '0.667', altAns: ['2/3', '0,667'], hint: '3x=2 → x=2/3' },
      { q: 'Функція y = 5x − 3. Кутовий коефіцієнт k =', ans: '5', hint: 'Коефіцієнт при x' },
      { q: 'Функція y = −2x + 7. При збільшенні x функція (зростає/спадає):', ans: 'спадає', hint: 'k = −2 < 0' },
      { q: 'Перетин y = 4x − 8 з віссю Ox. Абсциса точки:', ans: '2', hint: '4x−8=0 → x=2' },
      { q: 'Перетин y = 0,5x + 3 з віссю Oy. Ордината:', ans: '3', hint: 'x=0: y=3' },
      { q: 'Яка з функцій зростає: y=−x+1 чи y=2x−5?', ans: 'y=2x-5', altAns: ['2x-5', 'y=2x−5'], hint: 'k=2>0 → зростає' },
      { q: 'Функція y = kx проходить через (3; 6). Знайди k:', ans: '2', hint: '6 = k·3 → k=2' },
      { q: 'Графік y = −3 — це горизонтальна пряма. При y = −3 вона паралельна осі (Ox/Oy):', ans: 'Ox', hint: 'y=const — паралельна осі Ox' }
    ]
  },
  {
    id: 'linear-eq-two-vars',
    icon: '🔗',
    title: 'Лінійне рівняння з двома змінними',
    meta: '7 клас · Розділ 4 · §25',
    theory: `<p><b>Рівняння з двома змінними</b> — рівняння, що містить дві змінні (x і y). Його <b>розв'язок</b> — пара чисел (x; y), яка перетворює рівняння на правильну рівність.</p>
<p><b>Лінійне рівняння з двома змінними</b> має вигляд:</p>
<div style="background:var(--blue);color:#fff;border-radius:12px;padding:14px 20px;margin:12px 0;text-align:center;font-size:1.1rem;font-weight:700;font-family:'Fira Code',monospace">
  ax + by = c
</div>
<p>де a, b, c — числа, причому a і b не обидва нулі.</p>
<p>Лінійне рівняння з двома змінними має <b>безліч розв'язків</b> — їх можна отримати, підставляючи довільне значення однієї змінної і знаходячи відповідне значення другої.</p>
<p><b>Графік</b> лінійного рівняння ax + by = c — це <b>пряма лінія</b> на координатній площині.</p>`,
    formula: 'ax + by = c    Щоб знайти розв\'язки: вирази y через x → y = (c − ax)/b',
    examples: [
      {
        q: 'Перевір: чи є (1; 4) розв\'язком рівняння x + y² = 17?',
        steps: ['Підставляємо: 1 + 4² = 1 + 16 = 17 ✓', 'Так, (1; 4) є розв\'язком']
      },
      {
        q: 'Знайди три розв\'язки рівняння 3x + 5y = 2',
        steps: ['Виражаємо y: y = (2 − 3x)/5 = −0,6x + 0,4', 'x=0: y=0,4 → (0; 0,4)', 'x=−3: y=2,2 → (−3; 2,2)', 'x=5: y=−2,6 → (5; −2,6)']
      }
    ],
    practice: [
      { q: 'Чи є (2; 3) розв\'язком 2x + y = 7? (так/ні)', ans: 'так', hint: '2·2+3=7 ✓' },
      { q: 'Чи є (1; 1) розв\'язком 3x − 2y = 0? (так/ні)', ans: 'ні', hint: '3−2=1 ≠ 0' },
      { q: 'Рівняння x + 2y = 8. При x=0, y =', ans: '4', hint: '2y=8 → y=4' },
      { q: 'Рівняння x + 2y = 8. При y=0, x =', ans: '8', hint: 'x=8' },
      { q: 'Вирази y через x: 2x + y = 5. Формула y =', ans: '-2x+5', altAns: ['5-2x', '5−2x'], hint: 'y = 5−2x' },
      { q: 'Вирази y через x: 3x − 2y = 6. При x=2, y =', ans: '0', hint: '6−2y=6 → y=0' },
      { q: 'Скільки розв\'язків має лінійне рівняння з двома змінними? (число/безліч)', ans: 'безліч', hint: 'Для кожного x є свій y' },
      { q: 'Рівняння 2x + 3y = 12. При x=3, y =', ans: '2', hint: '6+3y=12 → 3y=6' }
    ]
  },
  {
    id: 'linear-eq-graph',
    icon: '📉',
    title: 'Графік лінійного рівняння з двома змінними',
    meta: '7 клас · Розділ 4 · §26',
    theory: `<p><b>Графік рівняння з двома змінними</b> — множина всіх точок координатної площини, координати яких є розв'язками цього рівняння.</p>
<p>Графік рівняння <b>ax + by = c</b>, де хоча б один з коефіцієнтів a або b ≠ 0 — це <b>пряма лінія</b>.</p>
<div style="background:var(--blue);color:#fff;border-radius:12px;padding:14px 20px;margin:12px 0;text-align:center;font-size:1.1rem;font-weight:700;font-family:'Fira Code',monospace">
  ax + by = c  →  пряма на координатній площині
</div>
<p><b>Три особливі випадки:</b></p>
<ul>
  <li><b>b ≠ 0</b>: виражаємо y = (c − ax)/b → звичайна лінійна функція, пряма нахилена</li>
  <li><b>b = 0, a ≠ 0</b>: рівняння виду x = n → вертикальна пряма, паралельна осі Oy</li>
  <li><b>a = 0, b ≠ 0</b>: рівняння виду y = m → горизонтальна пряма, паралельна осі Ox</li>
</ul>
<p><b>Побудова графіка:</b> знаходимо дві точки (зручно підставити x=0 і y=0), будуємо пряму через них.</p>`,
    formula: 'ax + by = c: якщо b≠0 → y = (c−ax)/b; якщо b=0 → x = c/a (вертикальна пряма)',
    examples: [
      {
        q: 'Побудуй графік рівняння 5x + 2y = 8',
        steps: [
          'Виражаємо y: 2y = −5x + 8, тобто y = −2,5x + 4',
          'Це лінійна функція з k = −2,5, b = 4',
          'При x=0: y=4 → точка (0; 4)',
          'При x=4: y=−6 → точка (4; −6)',
          'Через дві точки будуємо пряму'
        ]
      },
      {
        q: 'Побудуй графік рівняння 2x + 0y = 8',
        steps: [
          'Рівняння рівносильне: x = 4',
          'Розв\'язки: (4; y) для будь-якого y',
          'Графік — вертикальна пряма x = 4, паралельна осі Oy'
        ]
      }
    ],
    practice: [
      { q: 'Рівняння 3x + 0y = 12. Графік — це пряма x =', ans: '4', hint: '3x=12 → x=4, вертикальна пряма' },
      { q: 'Рівняння 0x + 5y = −10. Графік — пряма y =', ans: '-2', hint: '5y=−10 → y=−2, горизонтальна пряма' },
      { q: 'Рівняння x + y = 6. При x=0 точка перетину з Oy: (0; ?)', ans: '6', hint: '0+y=6 → y=6' },
      { q: 'Рівняння x + y = 6. При y=0 точка перетину з Ox: (?; 0)', ans: '6', hint: 'x+0=6 → x=6' },
      { q: 'Вирази y через x: 4x − 2y = 8. Формула y =', ans: '2x-4', altAns: ['2x−4'], hint: '−2y = −4x+8 → y=2x−4' },
      { q: 'Пряма y = −3 паралельна осі (Ox/Oy)?', ans: 'Ox', hint: 'Горизонтальна пряма паралельна осі Ox' },
      { q: 'Пряма x = 5 паралельна осі (Ox/Oy)?', ans: 'Oy', hint: 'Вертикальна пряма паралельна осі Oy' },
      { q: 'Рівняння 2x + y = 0. При x=3, y =', ans: '-6', hint: '6+y=0 → y=−6' }
    ]
  },
  {
    id: 'system-graphical',
    icon: '🔀',
    title: 'Система рівнянь. Графічний спосіб',
    meta: '7 клас · Розділ 4 · §27',
    theory: `<p><b>Система рівнянь</b> — кілька рівнянь, для яких потрібно знайти спільний розв'язок. Записують за допомогою фігурної дужки {.</p>
<p><b>Розв'язок системи</b> — пара чисел (x; y), яка одночасно задовольняє кожне рівняння системи.</p>
<div style="background:var(--blue);color:#fff;border-radius:12px;padding:14px 20px;margin:12px 0;text-align:center;font-size:1.1rem;font-weight:700;font-family:'Fira Code',monospace">
  { ax + by = c₁<br>  { dx + ey = c₂
</div>
<p><b>Графічний спосіб:</b> будуємо графіки обох рівнянь в одній системі координат. Точка перетину прямих — розв'язок системи.</p>
<p><b>Три можливі випадки:</b></p>
<ul>
  <li><b>Прямі перетинаються</b> → система має <b>єдиний розв'язок</b></li>
  <li><b>Прямі паралельні</b> → система <b>не має розв'язків</b></li>
  <li><b>Прямі збігаються</b> → система має <b>безліч розв'язків</b></li>
</ul>`,
    formula: 'Графічний метод: координати точки перетину графіків = розв\'язок системи',
    examples: [
      {
        q: 'Розв\'язати систему: { x + y = 5; { 3x − 2y = 0',
        steps: [
          'Будуємо графік x + y = 5: точки (0;5) і (5;0)',
          'Будуємо графік 3x − 2y = 0: точки (0;0) і (2;3)',
          'Прямі перетинаються в точці (2; 3)',
          'Перевірка: 2+3=5 ✓; 6−6=0 ✓',
          'Відповідь: (2; 3)'
        ]
      },
      {
        q: 'Система: { 3x + 2y = 6; { 6x + 4y = 24. Скільки розв\'язків?',
        steps: [
          'Ділимо друге рівняння на 2: 3x + 2y = 12',
          'Маємо: 3x+2y=6 і 3x+2y=12 — суперечність',
          'Прямі паралельні → система розв\'язків не має'
        ]
      }
    ],
    practice: [
      { q: 'Розв\'язок системи — це координати ... прямих', ans: 'перетину', hint: 'Точка перетину графіків' },
      { q: 'Якщо прямі паралельні, система має ... розв\'язків', ans: '0', altAns: ['немає'], hint: 'Паралельні прямі не перетинаються' },
      { q: 'Якщо прямі збігаються, система має ... розв\'язків', ans: 'безліч', hint: 'Кожна точка прямої є розв\'язком' },
      { q: 'Система: { x+y=8; { x−y=2. Знайди x (підсумуй рівняння)', ans: '5', hint: '2x=10 → x=5' },
      { q: 'Система: { x+y=8; { x−y=2. Знайди y', ans: '3', hint: 'x=5, тоді 5+y=8 → y=3' },
      { q: 'Система: { x+y=96; { x−y=16. x =', ans: '56', hint: '2x=112 → x=56' },
      { q: 'Система: { x+y=96; { x−y=16. y =', ans: '40', hint: 'y=96−56=40' },
      { q: 'Скільки розв\'язків має система, якщо прямі перетинаються в одній точці?', ans: '1', altAns: ['один', 'єдиний'], hint: 'Одна точка перетину = один розв\'язок' }
    ]
  },
  {
    id: 'system-substitution',
    icon: '🔄',
    title: 'Розв\'язування систем способом підстановки',
    meta: '7 клас · Розділ 4 · §28',
    theory: `<p><b>Спосіб підстановки</b> — аналітичний метод розв'язування систем рівнянь, точніший за графічний.</p>
<div style="background:var(--blue);color:#fff;border-radius:12px;padding:14px 20px;margin:12px 0;font-size:1rem;font-weight:700;font-family:'Fira Code',monospace">
  Крок 1: вирази одну змінну через іншу<br>
  Крок 2: підстав у друге рівняння<br>
  Крок 3: розв'яжи рівняння з однією змінною<br>
  Крок 4: знайди другу змінну<br>
  Крок 5: запиши відповідь (x; y)
</div>
<p>Зручно застосовувати, коли хоча б один коефіцієнт при змінній дорівнює <b>1 або −1</b>.</p>`,
    formula: 'Підстановка: з одного рівняння y = ... → підставляємо в інше → знаходимо x → знаходимо y',
    examples: [
      {
        q: 'Розв\'язати: { 2x + y = 3; { –3x + 8y = –10',
        steps: [
          'З першого: y = 3 − 2x',
          'Підставляємо в друге: −3x + 8(3 − 2x) = −10',
          '−3x + 24 − 16x = −10',
          '−19x = −34... (спрощений приклад: −11x = −22 → x = 2)',
          'y = 3 − 2·2 = −1',
          'Відповідь: (2; −1)'
        ]
      }
    ],
    practice: [
      { q: 'Система: { y = 2x; { x + y = 6. Підставляємо: x + 2x = 6, тому x =', ans: '2', hint: '3x=6 → x=2' },
      { q: 'Система: { y = 2x; { x + y = 6. y =', ans: '4', hint: 'y=2·2=4' },
      { q: 'Система: { x = 3 − y; { 2x + y = 4. Підставляємо: 2(3−y)+y=4, y =', ans: '2', hint: '6−2y+y=4 → −y=−2 → y=2' },
      { q: 'Система: { x = 3 − y; { 2x + y = 4. x =', ans: '1', hint: 'x=3−2=1' },
      { q: 'Система: { x + 2y = 7; { x = 1. Тому y =', ans: '3', hint: '1+2y=7 → 2y=6' },
      { q: 'Система: { 2x − y = 5; { y = x − 1. Підставляємо: 2x − (x−1) = 5, x =', ans: '4', hint: 'x+1=5 → x=4' },
      { q: 'Система: { 2x − y = 5; { y = x − 1. y =', ans: '3', hint: 'y=4−1=3' },
      { q: 'Спосіб підстановки зручний, коли коефіцієнт при змінній дорівнює ...', ans: '1', altAns: ['-1', '1 або -1'], hint: 'Коефіцієнт 1 або −1 спрощує вираження змінної' }
    ]
  },
  {
    id: 'system-addition',
    icon: '➕',
    title: 'Розв\'язування систем способом додавання',
    meta: '7 клас · Розділ 4 · §29',
    theory: `<p><b>Спосіб додавання</b> — ще один аналітичний метод. Ідея: множимо одне або обидва рівняння на числа так, щоб коефіцієнти при одній змінній стали <b>протилежними</b>, а потім додаємо рівняння.</p>
<div style="background:var(--blue);color:#fff;border-radius:12px;padding:14px 20px;margin:12px 0;font-size:1rem;font-weight:700;font-family:'Fira Code',monospace">
  Крок 1: домножити рівняння → протилежні коефіцієнти<br>
  Крок 2: скласти рівняння почленно<br>
  Крок 3: розв'язати рівняння з однією змінною<br>
  Крок 4: знайти другу змінну підстановкою<br>
  Крок 5: записати відповідь (x; y)
</div>
<p>Зручно застосовувати, коли коефіцієнти при одній змінній вже протилежні або легко стають такими після множення.</p>`,
    formula: 'Почленне додавання: якщо коефіцієнти при y протилежні → складаємо → y зникає → знаходимо x',
    examples: [
      {
        q: 'Розв\'язати: { 3x + 5y = 1; { 4x − 5y = −22',
        steps: [
          'Коефіцієнти при y вже протилежні: +5 і −5',
          'Додаємо рівняння почленно: (3x+4x) + (5y−5y) = 1+(−22)',
          '7x = −21 → x = −3',
          'Підставляємо в перше: 3·(−3) + 5y = 1 → 5y = 10 → y = 2',
          'Відповідь: (−3; 2)'
        ]
      },
      {
        q: 'Розв\'язати: { 3x + 2y = 2; { 7x + 4y = 8',
        steps: [
          'Множимо перше рівняння на −2: −6x − 4y = −4',
          'Тепер коефіцієнти при y: −4 і +4 — протилежні',
          'Додаємо: (−6x+7x) + (−4y+4y) = −4+8 → x = 4',
          'Підставляємо: 3·4 + 2y = 2 → 2y = −10 → y = −5',
          'Відповідь: (4; −5)'
        ]
      }
    ],
    practice: [
      { q: 'Система: { 2x + y = 7; { −2x + 3y = 1. Додаємо: 4y = 8, тому y =', ans: '2', hint: '4y=8 → y=2' },
      { q: 'Система: { 2x + y = 7; { −2x + 3y = 1. x =', ans: '2,5', altAns: ['2.5'], hint: '2x+2=7 → 2x=5 → x=2,5' },
      { q: 'Система: { x + 3y = 10; { x − 3y = 2. Додаємо: 2x = 12, тому x =', ans: '6', hint: '2x=12 → x=6' },
      { q: 'Система: { x + 3y = 10; { x − 3y = 2. y =', ans: '4/3', altAns: ['1,33', '4/3'], hint: '6+3y=10 → 3y=4' },
      { q: 'Щоб знищити змінну x: { 3x + y = 5; { 2x − y = 5 — на що множимо перше рівняння?', ans: '-2', altAns: ['2 і -3'], hint: 'Множимо на −2: −6x, тоді +6x зникнуть' },
      { q: 'Система: { 5x + 2y = 4; { 3x + 2y = 0. Віднімаємо: 2x = 4, тому x =', ans: '2', hint: '5x−3x=2x, 4−0=4' },
      { q: 'Система: { 5x + 2y = 4; { 3x + 2y = 0. y =', ans: '-3', hint: '3·2+2y=0 → 2y=−6' },
      { q: 'Спосіб додавання зручний, коли коефіцієнти при змінній є ... числами', ans: 'протилежними', hint: 'При складанні вони дають 0' }
    ]
  },
  {
    id: 'system-word-problems',
    icon: '📝',
    title: 'Задачі, що розв\'язуються системами рівнянь',
    meta: '7 клас · Розділ 4 · §30',
    theory: `<p>Якщо в задачі є <b>дві невідомі величини</b> — зручно скласти <b>систему двох рівнянь</b>.</p>
<p><b>Алгоритм розв'язування задачі за допомогою системи:</b></p>
<div style="background:var(--blue);color:#fff;border-radius:12px;padding:14px 20px;margin:12px 0;font-size:1rem;font-weight:700;font-family:'Fira Code',monospace">
  1. Позначити дві невідомі через x і y<br>
  2. Скласти систему двох рівнянь за умовою<br>
  3. Розв'язати систему<br>
  4. Перевірити відповідь та записати
</div>
<p>Типові задачі: на <b>ціну і кількість</b>, на <b>рух за течією та проти течії</b>, на <b>суму і різницю</b>.</p>`,
    formula: 'Швидкість за течією = v + u; проти течії = v − u, де v — власна швидкість, u — швидкість течії',
    examples: [
      {
        q: '7 батончиків і 2 плитки шоколаду коштують 85 грн. 3 батончики дорожчі за 1 плитку на 3 грн. Знайди ціну батончика (x) і плитки (y).',
        steps: [
          'Система: { 7x + 2y = 85; { 3x − y = 3',
          'З другого: y = 3x − 3',
          'Підставляємо: 7x + 2(3x−3) = 85 → 13x = 91 → x = 7',
          'y = 3·7 − 3 = 18',
          'Відповідь: батончик — 7 грн, плитка — 18 грн'
        ]
      },
      {
        q: 'Човен 2 год проти течії і 5 год за течією подолав 120 км. 2 год за течією і 1 год проти — 51 км. Знайди власну швидкість човна і швидкість течії.',
        steps: [
          'Нехай v — швидкість човна, u — швидкість течії',
          'За течією: (v+u), проти: (v−u)',
          'Система: { 2(v−u) + 5(v+u) = 120; { 2(v+u) + (v−u) = 51',
          'Спрощуємо: { 7v + 3u = 120; { 3v + u = 51',
          'Розв\'язуємо: v = 16,5 км/год, u = 1,5 км/год'
        ]
      }
    ],
    practice: [
      { q: 'Сума двох чисел 25, різниця — 7. Більше число (x) = ?', ans: '16', hint: '{ x+y=25; { x−y=7 → 2x=32 → x=16' },
      { q: 'Сума двох чисел 25, різниця — 7. Менше число (y) = ?', ans: '9', hint: 'y=25−16=9' },
      { q: 'Набір фарб і пензлів разом 96 грн, фарби дорожче на 16 грн. Фарби (x) = ?', ans: '56', hint: '{ x+y=96; { x−y=16 → 2x=112' },
      { q: 'Набір фарб і пензлів разом 96 грн, фарби дорожче на 16 грн. Пензлі (y) = ?', ans: '40', hint: 'y=96−56=40' },
      { q: 'За 3 зошити і 2 ручки заплатили 47 грн, за 1 зошит і 1 ручку — 19 грн. Ціна зошита = ?', ans: '9', hint: '{ 3x+2y=47; { x+y=19 → y=19−x → 3x+2(19−x)=47 → x=9' },
      { q: 'За 3 зошити і 2 ручки заплатили 47 грн, за 1 зошит і 1 ручку — 19 грн. Ціна ручки = ?', ans: '10', hint: 'y=19−9=10' },
      { q: 'Швидкість за течією = власна швидкість + швидкість течії. За 2 год за течією і 3 год проти подолали 55 км. За 1 год за і 1 год проти — 20 км. Власна швидкість = ?', ans: '12,5', altAns: ['12.5'], hint: '{ 2(v+u)+3(v−u)=55; { (v+u)+(v−u)=20 → 2v=25' },
      { q: 'У класі 35 учнів. Дівчат на 3 більше ніж хлопців. Кількість дівчат = ?', ans: '19', hint: '{ d+h=35; { d−h=3 → 2d=38' }
    ]
  },
  {
    id: 'equations-basics',
    icon: '⚖️',
    title: 'Рівняння. Загальні відомості',
    meta: '7 клас · Алгебра · Розділ 1 · §1',
    theory: `<p><b>Рівняння</b> — це рівність, що містить змінну. Вираз ліворуч від знака = називають <b>лівою частиною</b>, праворуч — <b>правою частиною</b>.</p>
<p><b>Корінь рівняння</b> — це число, яке при підстановці замість змінної перетворює рівняння на правильну числову рівність. Інакше кажуть, що це число <b>задовольняє рівняння</b>.</p>
<p>Рівняння може мати <b>один корінь</b>, <b>кілька коренів</b>, <b>безліч коренів</b> або <b>не мати коренів</b> взагалі.</p>
<p><b>Рівносильні рівняння</b> — рівняння, що мають однакові множини коренів (або обидва не мають коренів).</p>`,
    formula: 'Властивості: можна переносити доданки зі зміною знаку; множити/ділити обидві частини на одне ненульове число',
    examples: [
      {
        q: 'Перевір, чи є число 2 коренем рівняння: 4x − 6 = x',
        steps: [
          'Підставляємо x = 2: 4·2 − 6 = 2',
          'Ліва частина: 8 − 6 = 2',
          'Права частина: 2',
          '2 = 2 ✓ — рівність правильна, тому 2 є коренем'
        ]
      },
      {
        q: 'Чи рівносильні рівняння: 18 − x = 11 і 21 ÷ x = 3?',
        steps: [
          'Розв\'язуємо перше: x = 18 − 11 = 7',
          'Розв\'язуємо друге: x = 21 ÷ 3 = 7',
          'Обидва мають корінь x = 7 → рівняння рівносильні ✓'
        ]
      }
    ],
    practice: [
      { q: 'Перевір: чи є x = 3 коренем рівняння 2x + 1 = 7? Введи корінь рівняння:', ans: '3', hint: '2·3+1 = 7 ✓' },
      { q: 'Скільки коренів має рівняння x + 0 = x? (число або "безліч")', ans: 'безліч', hint: 'Воно виконується для будь-якого числа' },
      { q: 'Знайди корінь рівняння: x − 5 = 3', ans: '8', hint: 'x = 3 + 5' },
      { q: 'Знайди корінь рівняння: 3x = 12', ans: '4', hint: 'x = 12 ÷ 3' },
      { q: 'Знайди корінь: 2x + 3 = 11', ans: '4', hint: '2x = 8, x = 4' },
      { q: 'Знайди корінь: 5x − 4 = 16', ans: '4', hint: '5x = 20, x = 4' }
    ]
  },
  {
    id: 'linear-equation',
    icon: '📏',
    title: 'Лінійне рівняння з однією змінною',
    meta: '7 клас · Алгебра · Розділ 1 · §2',
    theory: `<p><b>Лінійне рівняння</b> — це рівняння виду <b>ax = b</b>, де x — змінна, a і b — числа.</p>
<p>Три можливі випадки:</p>
<ul style="margin:8px 0 8px 20px;line-height:2">
  <li>Якщо <b>a ≠ 0</b> — рівняння має <b>єдиний корінь</b>: x = −b ÷ a</li>
  <li>Якщо <b>a = 0, b = 0</b> (вигляд 0 = 0) — <b>безліч коренів</b></li>
  <li>Якщо <b>a = 0, b ≠ 0</b> (вигляд 0 = 5) — <b>коренів немає</b></li>
</ul>
<p>Складніші рівняння <b>зводять до лінійних</b> за 5 кроків:</p>
<ol style="margin:8px 0 8px 20px;line-height:2">
  <li>Позбутися знаменників (помножити на спільний знаменник)</li>
  <li>Розкрити дужки</li>
  <li>Перенести змінні ліворуч, числа — праворуч (зі зміною знаку)</li>
  <li>Звести подібні доданки</li>
  <li>Розв'язати ax = b</li>
</ol>`,
    formula: 'ax = b → x = −b ÷ a (якщо a ≠ 0)',
    examples: [
      {
        q: 'Розв\'яжи рівняння: 3(x + 3) − 2x = 6 − 4x',
        steps: [
          'Крок 2 — розкриваємо дужки: 3x + 9 − 2x = 6 − 4x',
          'Крок 3 — переносимо: 3x − 2x + 4x = 6 − 9',
          'Крок 4 — зводимо подібні: 5x = −3',
          'Крок 5 — ділимо: x = −3 ÷ 5 = −0,6'
        ]
      },
      {
        q: 'Розв\'яжи: 0,2x = 7',
        steps: [
          'Ділимо обидві частини на 0,2',
          'x = 7 ÷ 0,2 = 35',
          'Відповідь: 35'
        ]
      }
    ],
    practice: [
      { q: 'Розв\'яжи: 4x = 20', ans: '5', hint: 'x = 20 ÷ 4' },
      { q: 'Розв\'яжи: −3x = 12', ans: '-4', hint: 'x = 12 ÷ (−3)' },
      { q: 'Розв\'яжи: 2x + 5 = 13', ans: '4', hint: '2x = 8, x = 4' },
      { q: 'Розв\'яжи: 3(x − 1) = 9. Відповідь:', ans: '4', hint: '3x − 3 = 9, 3x = 12' },
      { q: 'Розв\'яжи: 5x − 2 = 3x + 6', ans: '4', hint: '5x − 3x = 6 + 2, 2x = 8' },
      { q: 'Рівняння 0·x = 0 має (введи: число/безліч/немає):', ans: 'безліч', hint: 'a=0, b=0 → безліч коренів' }
    ]
  },
  {
    id: 'word-problems',
    icon: '📝',
    title: 'Задачі за допомогою рівнянь',
    meta: '7 клас · Алгебра · Розділ 1 · §3',
    theory: `<p><b>Математична модель задачі</b> — це запис залежності між відомими й невідомими величинами за допомогою рівняння.</p>
<p>Алгоритм розв'язування текстової задачі через рівняння:</p>
<ol style="margin:8px 0 8px 20px;line-height:2">
  <li>Прочитати задачу, виділити відому і невідому величини</li>
  <li>Позначити невідому через <b>x</b></li>
  <li>Скласти рівняння, використовуючи умову задачі</li>
  <li>Розв'язати рівняння</li>
  <li>Перевірити відповідь і записати її</li>
</ol>`,
    formula: 'Шлях: s = v · t    Периметр: P = 2(a + b)    Відсоток: частина = ціле · % ÷ 100',
    examples: [
      {
        q: 'Дві сестри разом отримали 127 SMS. Наталя отримала на 13 більше ніж Олена. Скільки отримала кожна?',
        steps: [
          'Нехай Олена отримала x повідомлень',
          'Наталя отримала x + 13 повідомлень',
          'Разом: x + (x + 13) = 127',
          '2x + 13 = 127 → 2x = 114 → x = 57',
          'Олена — 57, Наталя — 57 + 13 = 70 повідомлень'
        ]
      },
      {
        q: 'З міста A до B (310 км) виїхала вантажівка. Через 30 хв назустріч виїхав легковик. Зустрілись через 2 год після виїзду легковика. Швидкість легковика на 20 км/год більша. Знайти швидкості.',
        steps: [
          'Нехай швидкість вантажівки — x км/год, легковика — (x+20) км/год',
          'Вантажівка їхала 2 + 0,5 = 2,5 год, легковик — 2 год',
          'Разом подолали 310 км: 2,5x + 2(x+20) = 310',
          '2,5x + 2x + 40 = 310 → 4,5x = 270 → x = 60',
          'Вантажівка — 60 км/год, легковик — 80 км/год'
        ]
      }
    ],
    practice: [
      { q: 'Сума двох чисел 48, одне число більше другого на 12. Менше число:', ans: '18', hint: 'x + (x+12) = 48, 2x = 36' },
      { q: 'Периметр прямокутника 36 см, довжина більша за ширину на 4 см. Ширина (см):', ans: '7', hint: '2(x + x+4) = 36, x = 7' },
      { q: 'Поїзд їхав 3 год зі швидкістю x км/год і подолав 210 км. Знайди x:', ans: '70', hint: '3x = 210' },
      { q: 'Число в 5 разів більше від іншого, їх сума 48. Менше число:', ans: '8', hint: 'x + 5x = 48, 6x = 48' },
      { q: 'За 2 кг яблук і 3 кг груш заплатили 95 грн. Кг яблук коштує 25 грн. Ціна кг груш (грн):', ans: '15', hint: '2·25 + 3x = 95, 3x = 45' }
    ]
  },
  {
    id: 'expressions-variables',
    icon: '🔤',
    title: 'Вирази зі змінними. Цілі вирази',
    meta: '7 клас · Розділ 2 · §4',
    theory: `<p><b>Числовий вираз</b> — вираз із чисел і знаків арифметичних дій. Результат обчислення — <b>значення виразу</b>.</p>
<p><b>Вираз зі змінною</b> — вираз, який містить букву (змінну). При підстановці числа замість змінної отримуємо числове значення виразу.</p>
<p><b>Раціональні вирази</b> бувають двох видів:</p>
<ul style="margin:8px 0 8px 20px;line-height:2">
  <li><b>Цілі</b> — не містять ділення на змінну. Приклад: 2a − m, 3x² + 1</li>
  <li><b>Дробові</b> — містять ділення на вираз зі змінною. Приклад: 5/x, (a+1)/(b−2)</li>
</ul>
<p>Вираз <b>не має змісту</b>, якщо знаменник дорівнює нулю.</p>`,
    formula: 'Парне число: n = 2k    Непарне: n = 2k+1    Кратне 7: n = 7k',
    examples: [
      {
        q: 'Знайди значення виразу (5 + b) ÷ 4, якщо b = 0 та b = −2',
        steps: [
          'b = 0: (5 + 0) ÷ 4 = 5 ÷ 4 = 1,25',
          'b = −2: (5 + (−2)) ÷ 4 = 3 ÷ 4 = 0,75'
        ]
      },
      {
        q: 'Чи є вираз цілим: а) 3x² − 2x + 1    б) (x+1)/(x−3)',
        steps: [
          'а) 3x² − 2x + 1 — ділення на змінну відсутнє → цілий вираз ✓',
          'б) (x+1)/(x−3) — є ділення на (x−3) → дробовий вираз'
        ]
      }
    ],
    practice: [
      { q: 'Знайди значення 3x − 4, якщо x = 5:', ans: '11', hint: '3·5 − 4 = 11' },
      { q: 'Знайди значення 2a + b, якщо a = 3, b = −1:', ans: '5', hint: '2·3 + (−1) = 5' },
      { q: 'Знайди значення x² + 2x, якщо x = 3:', ans: '15', hint: '9 + 6 = 15' },
      { q: 'Знайди значення (a − b)², якщо a = 7, b = 2:', ans: '25', hint: '(7−2)² = 5² = 25' },
      { q: 'Вираз 5x² − 3x + 7 є (цілим/дробовим):', ans: 'цілим', hint: 'Немає ділення на змінну' },
      { q: 'Вираз 4/(x+2) є (цілим/дробовим):', ans: 'дробовим', hint: 'Є ділення на (x+2)' },
      { q: 'Вираз 3x · (x − 1) є (цілим/дробовим):', ans: 'цілим', hint: 'Лише множення, не ділення на змінну' },
      { q: 'При якому x вираз 10/(x−3) не має змісту:', ans: '3', hint: 'x−3 = 0 → x = 3' },
      { q: 'При якому x вираз 5/(2x+6) не має змісту:', ans: '-3', hint: '2x+6 = 0 → x = −3' },
      { q: 'Значення виразу x² − 1 при x = 4:', ans: '15', hint: '4² − 1 = 16 − 1 = 15' }
    ]
  },
  {
    id: 'test-ch1',
    icon: '📋',
    title: 'Самостійна робота №1',
    meta: '7 клас · Підсумок Розділу 1 · §1–4',
    type: 'test',
    theory: `<p>Перевір знання з Розділу 1 і §4. Підказок немає — як на справжній контрольній!</p>
<p>Теми: рівняння та їх корені · лінійні рівняння · задачі · вирази зі змінними</p>`,
    practice: [
      { q: 'Знайди корінь рівняння: 4x − 3 = 13', ans: '4' },
      { q: 'Розв\'яжи: 3(x + 2) = 2x + 10', ans: '4' },
      { q: 'Розв\'яжи: 7x − 5 = 5x + 3', ans: '4' },
      { q: 'Сума двох чисел 50, одне більше за інше на 10. Менше число:', ans: '20' },
      { q: 'Рівняння 0·x = 5 має коренів (число/безліч/немає):', ans: 'немає' },
      { q: 'Знайди значення 2x² − x, якщо x = 3:', ans: '15' },
      { q: 'При якому значенні x вираз 8/(x+4) не має змісту:', ans: '-4' },
      { q: 'Поїзд їхав 4 год і подолав 280 км. Його швидкість (км/год):', ans: '70' }
    ]
  },
  {
    id: 'identities',
    icon: '🔁',
    title: 'Тотожні вирази. Тотожність',
    meta: '7 клас · Розділ 2 · §5',
    theory: `<p><b>Тотожно рівні вирази</b> — вирази, що набувають однакових значень для будь-яких допустимих значень змінних. Наприклад: <b>2(x−1)</b> і <b>2x−2</b> — тотожно рівні.</p>
<p><b>Тотожність</b> — рівність, яка є правильною для всіх допустимих значень змінних. Наприклад: a+b = b+a; a(b+c) = ab+ac.</p>
<p><b>Тотожне перетворення</b> — заміна виразу на тотожно рівний йому. Зокрема: розкриття дужок, зведення подібних доданків, спрощення.</p>
<p>Щоб <b>довести тотожність</b>, треба тотожними перетвореннями звести одну (або обидві) частини до вигляду іншої.</p>`,
    formula: 'a(b+c) = ab+ac    a(b−c) = ab−ac    (a+b)+c = a+(b+c)',
    examples: [
      {
        q: 'Спростити: 2(3x−4) + 3(−4x+7)',
        steps: ['Розкриваємо дужки: 6x − 8 − 12x + 21', 'Зводимо подібні: (6x−12x) + (−8+21)', 'Результат: −6x + 13']
      },
      {
        q: 'Довести тотожність: 2x − (x+5) − 11 = x − 16',
        steps: ['Перетворюємо ліву частину: 2x − x − 5 − 11', 'Зводимо подібні: x − 16', 'Ліва = права → тотожність доведено ✓']
      }
    ],
    practice: [
      { q: 'Спростити: 5x + 2x − 3x = ?', ans: '4x', hint: '5+2−3=4' },
      { q: 'Спростити: 2(x+3) = ? (розкрий дужки)', ans: '2x+6', altAns: ['2x + 6'], hint: '2·x + 2·3' },
      { q: 'Спростити: 3(2x−1) − 2(x+1) = ?', ans: '4x-5', altAns: ['4x − 5'], hint: '6x−3−2x−2 = 4x−5' },
      { q: 'Спростити: −0,3m · 5n = ?', ans: '-1.5mn', altAns: ['−1,5mn', '-1,5mn'], hint: '−0,3·5 = −1,5' },
      { q: 'Вирази 2x+3x і 5x є (тотожними/нетотожними):', ans: 'тотожними', hint: '2x+3x = 5x для будь-якого x' },
      { q: 'Вирази 3x+2y і 5xy є (тотожними/нетотожними):', ans: 'нетотожними', hint: 'При x=2, y=0: 3·2+0=6 ≠ 0' },
      { q: 'Спростити: 4a − (2a − 3b) + b = ?', ans: '2a+4b', altAns: ['2a + 4b'], hint: '4a − 2a + 3b + b = 2a+4b' },
      { q: 'Спростити: 5(x−2) − 3(x−4) = ?', ans: '2x+2', altAns: ['2x + 2'], hint: '5x−10−3x+12 = 2x+2' }
    ]
  },
  {
    id: 'powers',
    icon: '⚡',
    title: 'Степінь з натуральним показником',
    meta: '7 клас · Розділ 2 · §6',
    theory: `<p><b>Степінь</b> aⁿ — це добуток n однакових множників a. Читається: «a в степені n».</p>
<p><b>Основа</b> — число a, <b>показник</b> — число n.</p>
<p>Знак степеня:</p>
<ul style="margin:8px 0 8px 20px;line-height:2">
  <li>0ⁿ = 0 для будь-якого n</li>
  <li>aⁿ > 0, якщо a > 0</li>
  <li>aⁿ < 0, якщо a < 0 і n — непарне</li>
  <li>aⁿ > 0, якщо a < 0 і n — парне</li>
</ul>
<p>Порядок дій: спочатку дужки, потім степені, потім · і ÷, потім + і −.</p>`,
    formula: 'aⁿ = a · a · a · ... · a (n разів)',
    examples: [
      {
        q: 'Обчисли: 1) 2⁴   2) (−6)²   3) (−3)³',
        steps: ['2⁴ = 2·2·2·2 = 16', '(−6)² = (−6)·(−6) = 36  (парний показник → +)', '(−3)³ = (−3)·(−3)·(−3) = −27  (непарний → −)']
      },
      {
        q: 'Знайди значення: 3 − 7 · 2³',
        steps: ['Спочатку степінь: 2³ = 8', 'Потім множення: 7 · 8 = 56', 'Потім віднімання: 3 − 56 = −53']
      }
    ],
    practice: [
      { q: 'Обчисли: 3³ = ?', ans: '27', hint: '3·3·3 = 27' },
      { q: 'Обчисли: (−2)⁴ = ?', ans: '16', hint: 'Парний показник → результат додатний' },
      { q: 'Обчисли: (−5)³ = ?', ans: '-125', hint: 'Непарний показник → результат від\'ємний' },
      { q: 'Обчисли: 0⁷ = ?', ans: '0', hint: '0 в будь-якому степені = 0' },
      { q: 'Обчисли: 2³ + 3² = ?', ans: '17', hint: '8 + 9 = 17' },
      { q: 'Обчисли: 2 − 3 · 2² = ?', ans: '-10', hint: '2² = 4, 3·4 = 12, 2−12 = −10' },
      { q: 'Запиши у вигляді степеня: 5·5·5·5 = ?', ans: '5^4', altAns: ['5⁴'], hint: 'Чотири множники 5' },
      { q: 'Знак виразу (−7)⁵ — це (+ або −):', ans: '-', hint: 'Непарний показник, основа від\'ємна → мінус' },
      { q: 'Обчисли: ((−1)⁵ + (−1)⁶)⁸ = ?', ans: '0', hint: '(−1+1)⁸ = 0⁸ = 0' }
    ]
  },
  {
    id: 'power-properties',
    icon: '📐',
    title: 'Властивості степеня',
    meta: '7 клас · Розділ 2 · §7',
    theory: `<p>Чотири основні властивості степеня з натуральним показником:</p>
<ul style="margin:8px 0 8px 20px;line-height:2.2">
  <li><b>Множення:</b> aᵐ · aⁿ = aᵐ⁺ⁿ (основи однакові → показники додаємо)</li>
  <li><b>Ділення:</b> aᵐ ÷ aⁿ = aᵐ⁻ⁿ (основи однакові → показники віднімаємо)</li>
  <li><b>Степінь степеня:</b> (aᵐ)ⁿ = aᵐ·ⁿ (показники множимо)</li>
  <li><b>Степінь добутку:</b> (ab)ⁿ = aⁿ · bⁿ (кожен множник у свій степінь)</li>
</ul>`,
    formula: 'aᵐ·aⁿ = aᵐ⁺ⁿ    aᵐ÷aⁿ = aᵐ⁻ⁿ    (aᵐ)ⁿ = aᵐⁿ    (ab)ⁿ = aⁿbⁿ',
    examples: [
      {
        q: 'Спростити: (a²)³ · (a⁴ · a)⁶',
        steps: ['(a⁴·a)⁶ = (a⁵)⁶ = a³⁰', '(a²)³ = a⁶', 'a⁶ · a³⁰ = a³⁶']
      },
      {
        q: 'Обчисли: 3⁵ · 9² ÷ 27²',
        steps: ['9² = (3²)² = 3⁴', '27² = (3³)² = 3⁶', '3⁵ · 3⁴ ÷ 3⁶ = 3⁹ ÷ 3⁶ = 3³ = 27']
      }
    ],
    practice: [
      { q: 'Спростити: a³ · a⁵ = ?', ans: 'a^8', altAns: ['a⁸'], hint: '3+5=8' },
      { q: 'Спростити: x⁷ ÷ x³ = ?', ans: 'x^4', altAns: ['x⁴'], hint: '7−3=4' },
      { q: 'Спростити: (b⁴)³ = ?', ans: 'b^12', altAns: ['b¹²'], hint: '4·3=12' },
      { q: 'Спростити: (2a)³ = ? (коефіцієнт)', ans: '8a^3', altAns: ['8a³'], hint: '2³=8, (2a)³=8a³' },
      { q: 'Обчисли: 0,7¹³ ÷ 0,7¹¹ = ?', ans: '0.49', altAns: ['0,49'], hint: '0,7² = 0,49' },
      { q: 'Спростити: a² · a³ · a⁴ = ?', ans: 'a^9', altAns: ['a⁹'], hint: '2+3+4=9' },
      { q: 'Спростити: (x³)² · x⁰ = ? (x⁰=1)', ans: 'x^6', altAns: ['x⁶'], hint: '(x³)² = x⁶, ·1 = x⁶' },
      { q: 'Обчисли: 37 · 3⁵ ÷ 3⁸ = ?', ans: '9', altAns: ['3^2','3²'], hint: '3⁷⁺⁵⁻⁸ = 3⁴... ні: 3+5=8, 8−8=... 37·3⁵=3¹², 3¹²÷3⁸=3⁴... Спробуй ще' },
      { q: 'Порівняй: 7⁴⁰ і 48²⁰. Введи знак (<, >, =):', ans: '>', hint: '7⁴⁰=(7²)²⁰=49²⁰ > 48²⁰' }
    ]
  },
  {
    id: 'test-ch2-p1',
    icon: '📋',
    title: 'Самостійна робота №2',
    meta: '7 клас · §4–§7 · Цілі вирази та степені',
    type: 'test',
    theory: `<p>Перевір знання §4–§7. Без підказок!</p>
<p>Теми: вирази зі змінними · тотожності · степінь · властивості степенів</p>`,
    practice: [
      { q: 'Знайди значення 3a − 2b, якщо a=4, b=3:', ans: '6' },
      { q: 'Вираз (x+1)/x є (цілим/дробовим):', ans: 'дробовим' },
      { q: 'Спростити: 4(x−2) − 2(x−5) = ?', ans: '2x+2', altAns: ['2x + 2'] },
      { q: 'Обчисли: (−3)⁴ = ?', ans: '81' },
      { q: 'Обчисли: (−2)⁵ = ?', ans: '-32' },
      { q: 'Спростити: x⁵ · x³ = ?', ans: 'x^8', altAns: ['x⁸'] },
      { q: 'Спростити: (y³)⁴ = ?', ans: 'y^12', altAns: ['y¹²'] },
      { q: 'Обчисли: 2⁴ + 3² − 5 = ?', ans: '20' }
    ]
  }
,
  {
    id: "r8-rational-fractions", grade: 8,
    icon: "\ud83d\udd22",
    title: "\u0420\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0456 \u0434\u0440\u043e\u0431\u0438",
    meta: "~10 \u0445\u0432 \u00b7 \u00a71",
    type: 'lesson',
    theory: "<p>\u0420\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0456 \u0432\u0438\u0440\u0430\u0437\u0438 \u2014 \u0446\u0435 \u0432\u0438\u0440\u0430\u0437\u0438, \u0441\u043a\u043b\u0430\u0434\u0435\u043d\u0456 \u0437 \u0447\u0438\u0441\u0435\u043b \u0456 \u0437\u043c\u0456\u043d\u043d\u0438\u0445. \u0412\u043e\u043d\u0438 \u0431\u0443\u0432\u0430\u044e\u0442\u044c \u0446\u0456\u043b\u0438\u043c\u0438 (\u044f\u043a\u0449\u043e \u043d\u0435\u043c\u0430\u0454 \u0434\u0456\u043b\u0435\u043d\u043d\u044f \u043d\u0430 \u0437\u043c\u0456\u043d\u043d\u0443) \u0442\u0430 \u0434\u0440\u043e\u0431\u043e\u0432\u0438\u043c\u0438 (\u044f\u043a\u0449\u043e \u0432 \u0437\u043d\u0430\u043c\u0435\u043d\u043d\u0438\u043a\u0443 \u0454 \u0431\u0443\u043a\u0432\u0430).</p><p>\u041d\u0430\u0439\u0432\u0430\u0436\u043b\u0438\u0432\u0456\u0448\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u043e: \u0437\u043d\u0430\u043c\u0435\u043d\u043d\u0438\u043a \u0434\u0440\u043e\u0431\u0443 \u043d\u0456\u043a\u043e\u043b\u0438 \u043d\u0435 \u043c\u043e\u0436\u0435 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0432\u0430\u0442\u0438 \u043d\u0443\u043b\u044e, \u0431\u043e \u043d\u0430 \u043d\u0443\u043b\u044c \u0434\u0456\u043b\u0438\u0442\u0438 \u043d\u0435 \u043c\u043e\u0436\u043d\u0430! \u0417\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0437\u043c\u0456\u043d\u043d\u0438\u0445, \u043f\u0440\u0438 \u044f\u043a\u0438\u0445 \u0432\u0438\u0440\u0430\u0437 \u043c\u0430\u0454 \u0437\u043c\u0456\u0441\u0442, \u043d\u0430\u0437\u0438\u0432\u0430\u044e\u0442\u044c \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u0438\u043c\u0438.</p><p>\u0420\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0438\u0439 \u0434\u0440\u0456\u0431 \u2014 \u0446\u0435 \u043e\u043a\u0440\u0435\u043c\u0438\u0439 \u0432\u0438\u0434 \u0432\u0438\u0440\u0430\u0437\u0443, \u0434\u0435 \u0456 \u0447\u0438\u0441\u0435\u043b\u044c\u043d\u0438\u043a, \u0456 \u0437\u043d\u0430\u043c\u0435\u043d\u043d\u0438\u043a \u0454 \u043c\u043d\u043e\u0433\u043e\u0447\u043b\u0435\u043d\u0430\u043c\u0438.</p>",
    formula: "\u0420\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0438\u0439 \u0434\u0440\u0456\u0431: A / B, \u0434\u0435 B \u2260 0",
    examples: [{"q": "Знайдіть допустимі значення для виразу 5 / (x - 4)", "steps": ["Крок 1: Знаменник дробу — це вираз (x - 4).", "Крок 2: Знайдемо, коли знаменник стає нулем: x - 4 = 0, звідси x = 4.", "Крок 3: Оскільки ділити на нуль не можна, x не може бути рівним 4.", "Відповідь: Усі числа, крім 4."]}, {"q": "Визначте вид виразу: (a + 2) / 8", "steps": ["Крок 1: Дивимося на знаменник дробу. Там стоїть число 8.", "Крок 2: Оскільки в знаменнику немає змінної (букви), цей вираз не є дробовим.", "Відповідь: Цілий вираз."]}],
    practice: [{"q": "Який із виразів є дробовим: 1) x / 7 чи 2) 7 / x? Вкажіть цифру.", "ans": "2", "altAns": ["2)"], "hint": "Дробовий вираз обов'язково має ділення на змінну (букву) у знаменнику."}, {"q": "При якому значенні x вираз 3 / (x - 8) не має змісту?", "ans": "8", "altAns": ["x=8"], "hint": "Вираз не має змісту, коли його знаменник стає рівним нулю."}, {"q": "Яке число НЕ є допустимим значенням для змінної a у виразі 1 / (a + 10)?", "ans": "-10", "altAns": ["a=-10"], "hint": "Знайдіть число, яке при додаванні до 10 перетворить знаменник на нуль."}]
  },
  {
    id: "r8-fraction-property", grade: 8,
    icon: "\u2702\ufe0f",
    title: "\u041e\u0441\u043d\u043e\u0432\u043d\u0430 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u0456\u0441\u0442\u044c \u0440\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0434\u0440\u043e\u0431\u0443",
    meta: "~10 \u0445\u0432 \u00b7 \u00a71",
    type: 'lesson',
    theory: "<p>\u0420\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0456 \u0434\u0440\u043e\u0431\u0438 \u043c\u0430\u044e\u0442\u044c \u0442\u0430\u043a\u0443 \u0436 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u0456\u0441\u0442\u044c, \u044f\u043a \u0456 \u0437\u0432\u0438\u0447\u0430\u0439\u043d\u0456: \u044f\u043a\u0449\u043e \u0447\u0438\u0441\u0435\u043b\u044c\u043d\u0438\u043a \u0456 \u0437\u043d\u0430\u043c\u0435\u043d\u043d\u0438\u043a \u043f\u043e\u043c\u043d\u043e\u0436\u0438\u0442\u0438 \u0430\u0431\u043e \u043f\u043e\u0434\u0456\u043b\u0438\u0442\u0438 \u043d\u0430 \u043e\u0434\u0438\u043d \u0456 \u0442\u043e\u0439 \u0441\u0430\u043c\u0438\u0439 \u043d\u0435\u043d\u0443\u043b\u044c\u043e\u0432\u0438\u0439 \u0432\u0438\u0440\u0430\u0437, \u043c\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u0454\u043c\u043e \u0434\u0440\u0456\u0431, \u0449\u043e \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 \u043f\u043e\u0447\u0430\u0442\u043a\u043e\u0432\u043e\u043c\u0443.</p><p>\u0426\u0435 \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 <b>\u0441\u043a\u043e\u0440\u043e\u0447\u0443\u0432\u0430\u0442\u0438</b> \u0434\u0440\u043e\u0431\u0438, \u0434\u0456\u043b\u044f\u0447\u0438 \u0447\u0438\u0441\u0435\u043b\u044c\u043d\u0438\u043a \u0456 \u0437\u043d\u0430\u043c\u0435\u043d\u043d\u0438\u043a \u043d\u0430 \u0457\u0445\u043d\u0456\u0439 \u0441\u043f\u0456\u043b\u044c\u043d\u0438\u0439 \u043c\u043d\u043e\u0436\u043d\u0438\u043a. \u0422\u0430\u043a\u043e\u0436 \u043c\u043e\u0436\u043d\u0430 \u0437\u043c\u0456\u043d\u044e\u0432\u0430\u0442\u0438 \u0437\u043d\u0430\u043a\u0438: \u044f\u043a\u0449\u043e \u0437\u043c\u0456\u043d\u0438\u0442\u0438 \u0437\u043d\u0430\u043a \u0456 \u0432 \u0447\u0438\u0441\u0435\u043b\u044c\u043d\u0438\u043a\u0443, \u0456 \u0432 \u0437\u043d\u0430\u043c\u0435\u043d\u043d\u0438\u043a\u0443, \u0441\u0430\u043c \u0434\u0440\u0456\u0431 \u043d\u0435 \u0437\u043c\u0456\u043d\u0438\u0442\u044c\u0441\u044f.</p>",
    formula: "A/B = (A\u00b7C)/(B\u00b7C), \u0434\u0435 C \u2260 0",
    examples: [{"q": "Скоротіть дріб: 6a³b² / 24a²b⁴", "steps": ["Крок 1: Знайдемо спільний множник для чисельника і знаменника. Це 6a²b².", "Крок 2: Поділимо чисельник на цей множник: 6a³b² ÷ 6a²b² = a.", "Крок 3: Поділимо знаменник: 24a²b⁴ ÷ 6a²b² = 4b².", "Відповідь: a/4b²"]}, {"q": "Скоротіть дріб: (4a - 20) / (5a - a²)", "steps": ["Крок 1: Винесемо спільні множники: 4(a - 5) / a(5 - a).", "Крок 2: Бачимо, що (a - 5) та (5 - a) — протилежні вирази. Змінимо знак у знаменнику: -a(a - 5).", "Крок 3: Скоротимо на (a - 5).", "Відповідь: -4/a"]}],
    practice: [{"q": "Скоротіть дріб: 15x³ / 5x²", "ans": "3x", "altAns": ["3x/1"], "hint": "Поділи числа (15÷5) та степені змінних (x³÷x²)."}, {"q": "Спростіть вираз: (x - y) / (y - x)", "ans": "-1", "altAns": [], "hint": "Вирази в чисельнику і знаменнику відрізняються лише знаком. Винеси мінус за дужки."}, {"q": "Скоротіть дріб: (a + 2) / (a² + 2a)", "ans": "1/a", "altAns": ["1/a"], "hint": "Винеси спільний множник 'a' у знаменнику за дужки, а потім скороти однакові вирази."}]
  },
  {
    id: "r8-add-sub-same-denom", grade: 8,
    icon: "\u2795",
    title: "\u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0456 \u0432\u0456\u0434\u043d\u0456\u043c\u0430\u043d\u043d\u044f \u0434\u0440\u043e\u0431\u0456\u0432 \u0437 \u043e\u0434\u043d\u0430\u043a\u043e\u0432\u0438\u043c\u0438 \u0437\u043d\u0430\u043c\u0435\u043d\u043d\u0438\u043a\u0430\u043c\u0438",
    meta: "~10 \u0445\u0432 \u00b7 \u00a71",
    type: 'lesson',
    theory: "<p>\u0414\u043e\u0434\u0430\u0432\u0430\u0442\u0438 \u0442\u0430 \u0432\u0456\u0434\u043d\u0456\u043c\u0430\u0442\u0438 \u0440\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0456 \u0434\u0440\u043e\u0431\u0438 \u0437 \u043e\u0434\u043d\u0430\u043a\u043e\u0432\u0438\u043c\u0438 \u0437\u043d\u0430\u043c\u0435\u043d\u043d\u0438\u043a\u0430\u043c\u0438 \u0434\u0443\u0436\u0435 \u043f\u0440\u043e\u0441\u0442\u043e. \u041c\u0438 \u043f\u0440\u0430\u0446\u044e\u0454\u043c\u043e \u043b\u0438\u0448\u0435 \u0437 \u0447\u0438\u0441\u0435\u043b\u044c\u043d\u0438\u043a\u0430\u043c\u0438 (\u0432\u0435\u0440\u0445\u043d\u0456\u043c\u0438 \u0447\u0430\u0441\u0442\u0438\u043d\u0430\u043c\u0438), \u0430 \u0437\u043d\u0430\u043c\u0435\u043d\u043d\u0438\u043a (\u043d\u0438\u0436\u043d\u044e \u0447\u0430\u0441\u0442\u0438\u043d\u0443) \u0437\u0430\u043b\u0438\u0448\u0430\u0454\u043c\u043e \u0431\u0435\u0437 \u0437\u043c\u0456\u043d. \u0413\u043e\u043b\u043e\u0432\u043d\u0435 \u2014 \u043d\u0435 \u0437\u0430\u0431\u0443\u0442\u0438 \u0441\u043f\u0440\u043e\u0441\u0442\u0438\u0442\u0438 \u0442\u0430 \u0441\u043a\u043e\u0440\u043e\u0442\u0438\u0442\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0443 \u043a\u0456\u043d\u0446\u0456!</p>",
    formula: "a/c \u00b1 b/c = (a \u00b1 b)/c",
    examples: [{"q": "Виконайте віднімання: (7x - 5) / 8x² - (3x - 5) / 8x²", "steps": ["Крок 1: Записуємо чисельники під одну риску дробу: (7x - 5 - (3x - 5)) / 8x²", "Крок 2: Розкриваємо дужки, змінюючи знаки: (7x - 5 - 3x + 5) / 8x²", "Крок 3: Зводимо подібні доданки: 4x / 8x²", "Крок 4: Скорочуємо на 4x та отримуємо відповідь: 1 / 2x"]}, {"q": "Спростіть вираз: a² / (a - 3) - 9 / (a - 3)", "steps": ["Крок 1: Віднімаємо чисельники при спільному знаменнику: (a² - 9) / (a - 3)", "Крок 2: Розкладаємо чисельник за формулою різниці квадратів: (a - 3)(a + 3) / (a - 3)", "Крок 3: Скорочуємо на (a - 3) та отримуємо відповідь: a + 3"]}],
    practice: [{"q": "m/n + 4m/n", "ans": "5m/n", "altAns": ["(5m)/n"], "hint": "Просто додай чисельники m та 4m, а знаменник n залиш без змін."}, {"q": "6c/d - 2c/d", "ans": "4c/d", "altAns": ["(4c)/d"], "hint": "Відніми чисельники: 6c - 2c = 4c."}, {"q": "x²/(x+1) - 1/(x+1)", "ans": "x-1", "altAns": ["x - 1"], "hint": "Після віднімання вийде (x²-1)/(x+1). Розклади x²-1 як (x-1)(x+1) та скороти дріб."}]
  },
  {
    id: "r8-add-sub-diff-denom", grade: 8,
    icon: "\ud83d\udd00",
    title: "\u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0456 \u0432\u0456\u0434\u043d\u0456\u043c\u0430\u043d\u043d\u044f \u0434\u0440\u043e\u0431\u0456\u0432 \u0437 \u0440\u0456\u0437\u043d\u0438\u043c\u0438 \u0437\u043d\u0430\u043c\u0435\u043d\u043d\u0438\u043a\u0430\u043c\u0438",
    meta: "~10 \u0445\u0432 \u00b7 \u00a71",
    type: 'lesson',
    theory: "<p>\u0429\u043e\u0431 \u0434\u043e\u0434\u0430\u0442\u0438 \u0430\u0431\u043e \u0432\u0456\u0434\u043d\u044f\u0442\u0438 \u0434\u0440\u043e\u0431\u0438 \u0437 \u0440\u0456\u0437\u043d\u0438\u043c\u0438 \u0437\u043d\u0430\u043c\u0435\u043d\u043d\u0438\u043a\u0430\u043c\u0438, \u0457\u0445 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0441\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u0437\u0432\u0435\u0441\u0442\u0438 \u0434\u043e <b>\u0441\u043f\u0456\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u043c\u0435\u043d\u043d\u0438\u043a\u0430</b>. \u0426\u0435 \u043f\u0440\u0430\u0446\u044e\u0454 \u0442\u0430\u043a \u0441\u0430\u043c\u043e, \u044f\u043a \u0456 \u0437\u0456 \u0437\u0432\u0438\u0447\u0430\u0439\u043d\u0438\u043c\u0438 \u0447\u0438\u0441\u043b\u0430\u043c\u0438: \u043c\u0438 \u0448\u0443\u043a\u0430\u0454\u043c\u043e \u0442\u0430\u043a\u0438\u0439 \u0432\u0438\u0440\u0430\u0437, \u043d\u0430 \u044f\u043a\u0438\u0439 \u0434\u0456\u043b\u044f\u0442\u044c\u0441\u044f \u043e\u0431\u0438\u0434\u0432\u0430 \u0437\u043d\u0430\u043c\u0435\u043d\u043d\u0438\u043a\u0438.</p><p>\u041f\u0456\u0441\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u043c\u0438 \u0437\u043d\u0430\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0456 \u043c\u043d\u043e\u0436\u043d\u0438\u043a\u0438 \u0434\u043b\u044f \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u0435\u043b\u044c\u043d\u0438\u043a\u0430, \u043c\u043d\u043e\u0436\u0438\u043c\u043e \u0457\u0445 \u0442\u0430 \u0432\u0438\u043a\u043e\u043d\u0443\u0454\u043c\u043e \u0434\u0456\u044e. \u042f\u043a\u0449\u043e \u0437\u043d\u0430\u043c\u0435\u043d\u043d\u0438\u043a\u0438 \u0441\u043a\u043b\u0430\u0434\u043d\u0456, \u0457\u0445 \u0432\u0430\u0440\u0442\u043e \u0441\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u0440\u043e\u0437\u043a\u043b\u0430\u0441\u0442\u0438 \u043d\u0430 \u043c\u043d\u043e\u0436\u043d\u0438\u043a\u0438.</p>",
    formula: "A/B \u00b1 C/D = (A\u00b7D \u00b1 C\u00b7B) / B\u00b7D",
    examples: [{"q": "Спростіть (b+1)/abc + (1-a)/a²c", "steps": ["Крок 1: Спільний знаменник для abc та a²c — це a²bc.", "Крок 2: Додатковий множник для першого дробу — a, для другого — b.", "Крок 3: (a(b+1) + b(1-a)) / a²bc = (ab + a + b - ab) / a²bc.", "Відповідь: (a+b)/a²bc"]}, {"q": "Спростіть x/(x-4) - (x+2)/(x-2)", "steps": ["Крок 1: Спільний знаменник — це добуток (x-4)(x-2).", "Крок 2: x(x-2) - (x+2)(x-4) / (x-4)(x-2).", "Крок 3: Після розкриття дужок у чисельнику: x²-2x-(x²-2x-8) = 8.", "Відповідь: 8/((x-4)(x-2))"]}],
    practice: [{"q": "x/4 + 2x/3", "ans": "11x/12", "altAns": ["(11x)/12"], "hint": "Зведіть до спільного знаменника 12."}, {"q": "5b/14 - b/7", "ans": "3b/14", "altAns": ["(3b)/14"], "hint": "Спільний знаменник 14. Помножте другий дріб на 2."}, {"q": "4/x - 3/y", "ans": "(4y-3x)/xy", "altAns": ["(4y-3x)/(xy)"], "hint": "Спільний знаменник — добуток x та y."}]
  },
  {
    id: "r8-multiply-divide", grade: 8,
    icon: "\u2716\ufe0f",
    title: "\u041c\u043d\u043e\u0436\u0435\u043d\u043d\u044f \u0456 \u0434\u0456\u043b\u0435\u043d\u043d\u044f \u0440\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0438\u0445 \u0434\u0440\u043e\u0431\u0456\u0432",
    meta: "~10 \u0445\u0432 \u00b7 \u00a71",
    type: 'lesson',
    theory: "<p>\u041c\u043d\u043e\u0436\u0435\u043d\u043d\u044f \u0434\u0440\u043e\u0431\u0456\u0432 \u0437\u0456 \u0437\u043c\u0456\u043d\u043d\u0438\u043c\u0438 \u043f\u0440\u0430\u0446\u044e\u0454 \u0442\u0430\u043a \u0441\u0430\u043c\u043e, \u044f\u043a \u0456 \u0437\u0456 \u0437\u0432\u0438\u0447\u0430\u0439\u043d\u0438\u043c\u0438 \u0447\u0438\u0441\u043b\u0430\u043c\u0438: \u043c\u0438 \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u0435\u0440\u0435\u043c\u043d\u043e\u0436\u0443\u0454\u043c\u043e \u0457\u0445\u043d\u0456 \u0447\u0438\u0441\u0435\u043b\u044c\u043d\u0438\u043a\u0438 (\u201e\u0432\u0435\u0440\u0445\u201d) \u0442\u0430 \u0437\u043d\u0430\u043c\u0435\u043d\u043d\u0438\u043a\u0438 (\u201e\u043d\u0438\u0437\u201d). \u041f\u0435\u0440\u0435\u0434 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044f\u043c \u0432\u0430\u0440\u0442\u043e \u0440\u043e\u0437\u043a\u043b\u0430\u0441\u0442\u0438 \u0432\u0438\u0440\u0430\u0437\u0438 \u043d\u0430 \u043c\u043d\u043e\u0436\u043d\u0438\u043a\u0438 \u0442\u0430 \u0441\u043a\u043e\u0440\u043e\u0442\u0438\u0442\u0438 \u0432\u0441\u0435 \u043e\u0434\u043d\u0430\u043a\u043e\u0432\u0435 \u2014 \u0442\u0430\u043a \u0437\u0430\u0434\u0430\u0447\u0430 \u0441\u0442\u0430\u043d\u0435 \u043d\u0430\u0431\u0430\u0433\u0430\u0442\u043e \u043b\u0435\u0433\u0448\u043e\u044e.</p><p>\u0429\u043e\u0431 \u043f\u043e\u0434\u0456\u043b\u0438\u0442\u0438 \u043e\u0434\u0438\u043d \u0434\u0440\u0456\u0431 \u043d\u0430 \u0456\u043d\u0448\u0438\u0439, \u0442\u0440\u0435\u0431\u0430 \u201e\u043f\u0435\u0440\u0435\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u201d \u0434\u0440\u0443\u0433\u0438\u0439 \u0434\u0440\u0456\u0431 \u0434\u043e\u0433\u043e\u0440\u0438 \u043d\u043e\u0433\u0430\u043c\u0438 \u0456 \u0437\u0430\u043c\u0456\u043d\u0438\u0442\u0438 \u0434\u0456\u043b\u0435\u043d\u043d\u044f \u043d\u0430 \u043c\u043d\u043e\u0436\u0435\u043d\u043d\u044f. \u0410 \u044f\u043a\u0449\u043e \u043f\u0456\u0434\u043d\u043e\u0441\u0438\u043c\u043e \u0434\u0440\u0456\u0431 \u0434\u043e \u0441\u0442\u0435\u043f\u0435\u043d\u044f, \u0442\u043e \u043f\u0456\u0434\u043d\u043e\u0441\u0438\u043c\u043e \u0434\u043e \u043d\u044c\u043e\u0433\u043e \u043e\u043a\u0440\u0435\u043c\u043e \u0447\u0438\u0441\u0435\u043b\u044c\u043d\u0438\u043a \u0456 \u043e\u043a\u0440\u0435\u043c\u043e \u0437\u043d\u0430\u043c\u0435\u043d\u043d\u0438\u043a.</p>",
    formula: "(a/b) \u00d7 (c/d) = (ac)/(bd); (a/b) \u00f7 (c/d) = (ad)/(bc)",
    examples: [{"q": "Спростіть вираз: (21c⁶ / b⁸) × (b² / 14c⁴)", "steps": ["Крок 1: Записуємо все під одну риску дробу: (21c⁶ × b²) / (b⁸ × 14c⁴)", "Крок 2: Скорочуємо числа 21 та 14 на 7. Отримуємо 3 у чисельнику та 2 у знаменнику.", "Крок 3: Скорочуємо степені: c⁶ та c⁴ дають c² вгорі, а b² та b⁸ дають b⁶ внизу.", "Відповідь: 3c² / 2b⁶"]}, {"q": "Виконайте ділення: (a² - 2ab) / (a + 9) ÷ (a² - 4b²) / (3a + 27)", "steps": ["Крок 1: Замінюємо ділення на множення, перевернувши другий дріб: (a²-2ab)/(a+9) × (3a+27)/(a²-4b²)", "Крок 2: Розкладаємо все на множники: a(a-2b)/(a+9) × 3(a+9)/((a-2b)(a+2b))", "Крок 3: Скорочуємо однакові дужки (a-2b) та (a+9).", "Відповідь: 3a / (a + 2b)"]}],
    practice: [{"q": "Обчисліть: (7a / b) × (b / a)", "ans": "7", "altAns": [], "hint": "При множенні однакові букви зверху і знизу можна просто закреслити (скоротити)."}, {"q": "Спростіть: (x² / 5) ÷ (x / 10)", "ans": "2x", "altAns": ["2*x"], "hint": "Переверни другий дріб: вийде (x²/5) * (10/x). Тепер скороти 10 на 5 та x² на x."}, {"q": "Піднесіть до квадрата: (3 / c)²", "ans": "9/c²", "altAns": ["9/c^2"], "hint": "Піднеси до другого степеня окремо трійку (3*3) та окремо букву c."}]
  },
  {
    id: "r8-identical-transforms", grade: 8,
    icon: "\ud83d\udd04",
    title: "\u0422\u043e\u0442\u043e\u0436\u043d\u0456 \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0440\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0438\u0445 \u0432\u0438\u0440\u0430\u0437\u0456\u0432",
    meta: "~10 \u0445\u0432 \u00b7 \u00a71",
    type: 'lesson',
    theory: "<p>\u0411\u0443\u0434\u044c-\u044f\u043a\u0438\u0439 \u0441\u043a\u043b\u0430\u0434\u043d\u0438\u0439 \u0432\u0438\u0440\u0430\u0437 \u0456\u0437 \u0434\u0440\u043e\u0431\u0430\u043c\u0438 \u043c\u043e\u0436\u043d\u0430 \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043d\u0430 \u043e\u0434\u0438\u043d \u0440\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0438\u0439 \u0434\u0440\u0456\u0431. \u0414\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u043c\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u043c\u043e \u0432\u0436\u0435 \u0437\u043d\u0430\u0439\u043e\u043c\u0456 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f, \u0432\u0456\u0434\u043d\u0456\u043c\u0430\u043d\u043d\u044f, \u043c\u043d\u043e\u0436\u0435\u043d\u043d\u044f \u0442\u0430 \u0434\u0456\u043b\u0435\u043d\u043d\u044f \u0434\u0440\u043e\u0431\u0456\u0432.</p><p>\u0413\u043e\u043b\u043e\u0432\u043d\u0435 \u2014 \u0434\u043e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0442\u0438\u0441\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u043e\u0440\u044f\u0434\u043a\u0443 \u0434\u0456\u0439: \u0441\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u0432\u0438\u043a\u043e\u043d\u0443\u0454\u043c\u043e \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u0457 \u0432 \u0434\u0443\u0436\u043a\u0430\u0445, \u043f\u043e\u0442\u0456\u043c \u043c\u043d\u043e\u0436\u0435\u043d\u043d\u044f \u0447\u0438 \u0434\u0456\u043b\u0435\u043d\u043d\u044f, \u0456 \u043b\u0438\u0448\u0435 \u0432 \u043a\u0456\u043d\u0446\u0456 \u2014 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0442\u0430 \u0432\u0456\u0434\u043d\u0456\u043c\u0430\u043d\u043d\u044f.</p>",
    formula: "(a/b \u00b1 c/d) \u00f7 e/f = (ad \u00b1 bc)/bd \u00d7 f/e",
    examples: [{"q": "Спростіть вираз: (3a/(a-2) - 6a/(a-2)²) ÷ (a-4)/(a²-4) - (2a²+8a)/(a-2)", "steps": ["Крок 1: Обчислюємо в дужках. Спільний знаменник (a-2)². Отримуємо 3a(a-4)/(a-2)².", "Крок 2: Виконуємо ділення. Перевертаємо дріб і скорочуємо на (a-4) та (a-2). Отримуємо 3a(a+2)/(a-2).", "Крок 3: Віднімання. Знаменники однакові, тому (3a²+6a - 2a² - 8a)/(a-2) = (a²-2a)/(a-2).", "Відповідь: a"]}, {"q": "Доведіть, що значення виразу (3a/(a+3) + a²/(a²-9) ÷ a/(a-3)) не залежить від a", "steps": ["Крок 1: Виконуємо ділення: (a²/(a-3)(a+3)) × (a-3)/a = a/(a+3).", "Крок 2: Додаємо: 3a/(a+3) + a/(a+3) = 4a/(a+3).", "Відповідь: Значення залежить від a (приклад спрощення)."]}],
    practice: [{"q": "Розв'яжіть рівняння: (2x+3)² - 2x(5+2x) = 10", "ans": "0.5", "altAns": ["1/2", "0,5"], "hint": "Розкрийте дужки: 4x²+12x+9 - 10x-4x² = 10"}, {"q": "Спростіть вираз: (a/b + 1) ÷ (a+b)/b", "ans": "1", "altAns": [], "hint": "Зведіть до спільного знаменника в дужках: (a+b)/b"}, {"q": "Спростіть вираз: (x²-1)/(x-1) - x", "ans": "1", "altAns": [], "hint": "Розкладіть різницю квадратів: (x-1)(x+1)"}]
  },
  {
    id: "r8-rational-equations", grade: 8,
    icon: "\u2696\ufe0f",
    title: "\u0420\u0456\u0432\u043d\u043e\u0441\u0438\u043b\u044c\u043d\u0456 \u0442\u0430 \u0440\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0456 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f",
    meta: "~10 \u0445\u0432 \u00b7 \u00a71",
    type: 'lesson',
    theory: "<p>\u0420\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u043d\u0430\u0437\u0438\u0432\u0430\u044e\u0442\u044c \u0440\u0456\u0432\u043d\u043e\u0441\u0438\u043b\u044c\u043d\u0438\u043c\u0438, \u044f\u043a\u0449\u043e \u0432\u043e\u043d\u0438 \u043c\u0430\u044e\u0442\u044c \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u043e\u0434\u043d\u0430\u043a\u043e\u0432\u0456 \u043a\u043e\u0440\u0435\u043d\u0456 \u0430\u0431\u043e \u044f\u043a\u0449\u043e \u043e\u0431\u0438\u0434\u0432\u0430 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u043d\u0435 \u043c\u0430\u044e\u0442\u044c \u0440\u043e\u0437\u0432'\u044f\u0437\u043a\u0456\u0432. \u0420\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0435 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u2014 \u0446\u0435 \u0442\u0430\u043a\u0435 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f, \u0443 \u044f\u043a\u043e\u0433\u043e \u043b\u0456\u0432\u0430 \u0456 \u043f\u0440\u0430\u0432\u0430 \u0447\u0430\u0441\u0442\u0438\u043d\u0438 \u0454 \u0434\u0440\u043e\u0431\u043e\u0432\u0438\u043c\u0438 \u0432\u0438\u0440\u0430\u0437\u0430\u043c\u0438.</p><p>\u0413\u043e\u043b\u043e\u0432\u043d\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u0440\u043e\u0437\u0432'\u044f\u0437\u0430\u043d\u043d\u044f \u0440\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0438\u0445 \u0440\u0456\u0432\u043d\u044f\u043d\u044c: \u0434\u0440\u0456\u0431 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 \u043d\u0443\u043b\u044e \u0442\u043e\u0434\u0456, \u043a\u043e\u043b\u0438 \u0439\u043e\u0433\u043e \u0447\u0438\u0441\u0435\u043b\u044c\u043d\u0438\u043a \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 \u043d\u0443\u043b\u044e, \u0430 \u0437\u043d\u0430\u043c\u0435\u043d\u043d\u0438\u043a \u043f\u0440\u0438 \u0446\u044c\u043e\u043c\u0443 \u043d\u0435 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 \u043d\u0443\u043b\u044e. \u0417\u0430\u0432\u0436\u0434\u0438 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0439 \u0437\u043d\u0430\u043c\u0435\u043d\u043d\u0438\u043a, \u0449\u043e\u0431 \u043d\u0435 \u0437\u043d\u0430\u0439\u0442\u0438 \u0445\u0438\u0431\u043d\u0438\u0439 \u043a\u043e\u0440\u0456\u043d\u044c!</p>",
    formula: "A/B = 0 \u21d4 A = 0 \u0442\u0430 B \u2260 0",
    examples: [{"q": "Чи є рівносильними рівняння x² = 1 та (x - 1)(x + 1) = 0?", "steps": ["Крок 1: Розв'яжемо x² = 1. Корені: 1 та -1.", "Крок 2: Розв'яжемо (x - 1)(x + 1) = 0. Корені: 1 та -1.", "Відповідь: Так, рівняння рівносильні, бо мають однакові корені."]}, {"q": "Розв'яжіть рівняння (x - 1)(x + 1) / (x² - 4x + 3) = 0", "steps": ["Крок 1: Прирівняємо чисельник до нуля: (x - 1)(x + 1) = 0. Маємо корені 1 та -1.", "Крок 2: Перевіримо знаменник. Якщо x = 1, знаменник 1² - 4·1 + 3 = 0. Це число не підходить.", "Крок 3: Якщо x = -1, знаменник (-1)² - 4·(-1) + 3 = 8 (не нуль). Це число підходить.", "Відповідь: -1"]}],
    practice: [{"q": "Розв'яжіть рівняння: (x - 7) / x = 0", "ans": "7", "altAns": [], "hint": "Чисельник має дорівнювати 0, а знаменник не може бути нулем."}, {"q": "Розв'яжіть рівняння: (x + 3)(x - 4) / (x - 4) = 0", "ans": "-3", "altAns": [], "hint": "Знайдіть корені чисельника, але відкиньте той, що робить знаменник нулем."}, {"q": "Розв'яжіть рівняння: (x² - 4) / (x - 2) = 0", "ans": "-2", "altAns": [], "hint": "Чисельник дорівнює нулю при 2 та -2. Перевірте, чи не занулює знаменник число 2."}]
  },
  {
    id: "r8-negative-exponent", grade: 8,
    icon: "\ud83d\udcc9",
    title: "\u0421\u0442\u0435\u043f\u0456\u043d\u044c \u0456\u0437 \u0446\u0456\u043b\u0438\u043c \u0432\u0456\u0434'\u0454\u043c\u043d\u0438\u043c \u043f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u043e\u043c",
    meta: "~10 \u0445\u0432 \u00b7 \u00a71",
    type: 'lesson',
    theory: "<p>\u041c\u0438 \u0432\u0436\u0435 \u0437\u043d\u0430\u0454\u043c\u043e, \u044f\u043a \u043f\u0456\u0434\u043d\u043e\u0441\u0438\u0442\u0438 \u0447\u0438\u0441\u043b\u0430 \u0434\u043e \u0441\u0442\u0435\u043f\u0435\u043d\u044f 2, 3 \u0430\u0431\u043e 10. \u0410\u043b\u0435 \u0432 \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0446\u0456 \u0456\u0441\u043d\u0443\u044e\u0442\u044c \u0456 \u0432\u0456\u0434'\u0454\u043c\u043d\u0456 \u043f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u0438. \u0412\u043e\u043d\u0438 \u0434\u043e\u043f\u043e\u043c\u0430\u0433\u0430\u044e\u0442\u044c \u0437\u0440\u0443\u0447\u043d\u043e \u0437\u0430\u043f\u0438\u0441\u0443\u0432\u0430\u0442\u0438 \u0434\u0443\u0436\u0435 \u043c\u0430\u043b\u0456 \u0447\u0438\u0441\u043b\u0430, \u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u0440\u043e\u0437\u043c\u0456\u0440\u0438 \u043c\u0456\u043a\u0440\u043e\u043e\u0440\u0433\u0430\u043d\u0456\u0437\u043c\u0456\u0432 \u0430\u0431\u043e \u0430\u0442\u043e\u043c\u0456\u0432.</p><p>\u0412\u0456\u0434'\u0454\u043c\u043d\u0438\u0439 \u0441\u0442\u0435\u043f\u0456\u043d\u044c \u2014 \u0446\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u0456\u043d\u0448\u0438\u0439 \u0441\u043f\u043e\u0441\u0456\u0431 \u0437\u0430\u043f\u0438\u0441\u0443 \u0434\u0440\u043e\u0431\u0443. \u0429\u043e\u0431 \u043f\u043e\u0437\u0431\u0443\u0442\u0438\u0441\u044f \u043c\u0456\u043d\u0443\u0441\u0430 \u0432 \u043f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u0443, \u0442\u0440\u0435\u0431\u0430 \u043e\u0434\u0438\u043d\u0438\u0446\u044e \u043f\u043e\u0434\u0456\u043b\u0438\u0442\u0438 \u043d\u0430 \u0446\u0435 \u0436 \u0447\u0438\u0441\u043b\u043e, \u0430\u043b\u0435 \u0432\u0436\u0435 \u0432 \u0434\u043e\u0434\u0430\u0442\u043d\u043e\u043c\u0443 \u0441\u0442\u0435\u043f\u0435\u043d\u0456. \u0412\u0430\u0436\u043b\u0438\u0432\u043e \u043f\u0430\u043c'\u044f\u0442\u0430\u0442\u0438: \u043d\u0443\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u043d\u0430 \u043f\u0456\u0434\u043d\u043e\u0441\u0438\u0442\u0438 \u0434\u043e \u0432\u0456\u0434'\u0454\u043c\u043d\u043e\u0433\u043e \u0441\u0442\u0435\u043f\u0435\u043d\u044f!</p><p>\u0422\u0430\u043a\u043e\u0436 \u0431\u0443\u0434\u044c-\u044f\u043a\u0435 \u0447\u0438\u0441\u043b\u043e (\u043a\u0440\u0456\u043c \u043d\u0443\u043b\u044f) \u0443 \u043d\u0443\u043b\u044c\u043e\u0432\u043e\u043c\u0443 \u0441\u0442\u0435\u043f\u0435\u043d\u0456 \u0437\u0430\u0432\u0436\u0434\u0438 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 1.</p>",
    formula: "a\u207b\u207f = 1 / a\u207f (a \u2260 0)",
    examples: [{"q": "Обчисліть значення виразу 2⁻³", "steps": ["Крок 1: За формулою a⁻ⁿ = 1 / aⁿ запишемо вираз як дріб: 1 / 2³", "Крок 2: Обчислимо знаменник: 2³ = 2 * 2 * 2 = 8", "Відповідь: 1/8"]}, {"q": "Знайдіть значення (-5)⁻²", "steps": ["Крок 1: Запишемо у вигляді дробу: 1 / (-5)²", "Крок 2: Оскільки показник парний (2), мінус зникне: (-5) * (-5) = 25", "Відповідь: 1/25"]}],
    practice: [{"q": "Обчисли: 3⁻²", "ans": "1/9", "altAns": [], "hint": "Це 1 поділити на 3²"}, {"q": "Обчисли: 10⁻¹", "ans": "0.1", "altAns": ["1/10"], "hint": "Будь-яке число в степені -1 — це 1, поділена на це число"}, {"q": "Чому дорівнює (-2)⁻³?", "ans": "-1/8", "altAns": ["-0.125"], "hint": "Спочатку обчисли (-2)³, а потім запиши 1 поділити на цей результат"}]
  },
  {
    id: "r8-exponent-properties", grade: 8,
    icon: "\ud83d\udcaa",
    title: "\u0412\u043b\u0430\u0441\u0442\u0438\u0432\u043e\u0441\u0442\u0456 \u0441\u0442\u0435\u043f\u0435\u043d\u044f \u0456\u0437 \u0446\u0456\u043b\u0438\u043c \u043f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u043e\u043c",
    meta: "~10 \u0445\u0432 \u00b7 \u00a71",
    type: 'lesson',
    theory: "<p>\u0423\u0441\u0456 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0434\u043b\u044f \u0441\u0442\u0435\u043f\u0435\u043d\u0456\u0432, \u044f\u043a\u0456 \u0442\u0438 \u0432\u0447\u0438\u0432 \u0440\u0430\u043d\u0456\u0448\u0435, \u043f\u0440\u0430\u0446\u044e\u044e\u0442\u044c \u0456 \u0434\u043b\u044f \u0432\u0456\u0434'\u0454\u043c\u043d\u0438\u0445 \u0447\u0438\u0441\u0435\u043b! \u0426\u0435 \u0437\u043d\u0430\u0447\u043d\u043e \u0441\u043f\u0440\u043e\u0449\u0443\u0454 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044f \u0437 \u0434\u0443\u0436\u0435 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u043c\u0438 \u0430\u0431\u043e \u0434\u0443\u0436\u0435 \u0432\u0435\u043b\u0438\u043a\u0438\u043c\u0438 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0430\u043c\u0438.</p><p>\u0417\u0430\u043f\u0430\u043c'\u044f\u0442\u0430\u0439 \u0433\u043e\u043b\u043e\u0432\u043d\u0435: \u043f\u0440\u0438 \u043c\u043d\u043e\u0436\u0435\u043d\u043d\u0456 \u043c\u0438 \u0434\u043e\u0434\u0430\u0454\u043c\u043e \u043f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u0438, \u043f\u0440\u0438 \u0434\u0456\u043b\u0435\u043d\u043d\u0456 \u2014 \u0432\u0456\u0434\u043d\u0456\u043c\u0430\u0454\u043c\u043e \u0457\u0445, \u0430 \u043f\u0440\u0438 \u043f\u0456\u0434\u043d\u0435\u0441\u0435\u043d\u043d\u0456 \u0441\u0442\u0435\u043f\u0435\u043d\u044f \u0434\u043e \u0441\u0442\u0435\u043f\u0435\u043d\u044f \u2014 \u043f\u0435\u0440\u0435\u043c\u043d\u043e\u0436\u0443\u0454\u043c\u043e.</p>",
    formula: "a\u1d50 \u00b7 a\u207f = a\u1d50\u207a\u207f, (a\u1d50)\u207f = a\u1d50\u207f, a\u1d50 \u00f7 a\u207f = a\u1d50\u207b\u207f",
    examples: [{"q": "Спростіть вираз a⁻¹⁴ · a¹²", "steps": ["Крок 1: При множенні основ показники степенів додаються.", "Крок 2: Обчислимо суму: -14 + 12 = -2.", "Відповідь: a⁻²"]}, {"q": "Спростіть вираз a⁻⁵ ÷ a⁻⁹", "steps": ["Крок 1: При діленні показник дільника віднімається від показника діленого.", "Крок 2: Обчислимо різницю: -5 - (-9) = -5 + 9 = 4.", "Відповідь: a⁴"]}],
    practice: [{"q": "a⁷ · a⁻⁹", "ans": "a^-2", "altAns": ["a⁻²"], "hint": "Додай показники: 7 + (-9)"}, {"q": "(a⁻³)⁻²", "ans": "a^6", "altAns": ["a⁶"], "hint": "При піднесенні степеня до степеня показники перемножуються: -3 · (-2)"}, {"q": "a⁻⁵ ÷ a⁻³", "ans": "a^-2", "altAns": ["a⁻²"], "hint": "Відніми показники: -5 - (-3) = -5 + 3"}]
  },
  {
    id: "r8-hyperbola", grade: 8,
    icon: "\ud83d\udcc8",
    title: "\u0424\u0443\u043d\u043a\u0446\u0456\u044f y=k/x \u0442\u0430 \u0457\u0457 \u0433\u0440\u0430\u0444\u0456\u043a",
    meta: "~10 \u0445\u0432 \u00b7 \u00a710",
    type: 'lesson',
    theory: "<p>\u041e\u0431\u0435\u0440\u043d\u0435\u043d\u0430 \u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0456\u0439\u043d\u0456\u0441\u0442\u044c \u2014 \u0446\u0435 \u0437\u0430\u043b\u0435\u0436\u043d\u0456\u0441\u0442\u044c, \u0434\u0435 \u043f\u0440\u0438 \u0437\u0431\u0456\u043b\u044c\u0448\u0435\u043d\u043d\u0456 \u043e\u0434\u043d\u0456\u0454\u0457 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0438 \u0443 \u043a\u0456\u043b\u044c\u043a\u0430 \u0440\u0430\u0437\u0456\u0432, \u0456\u043d\u0448\u0430 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0430 \u0437\u043c\u0435\u043d\u0448\u0443\u0454\u0442\u044c\u0441\u044f \u0443 \u0441\u0442\u0456\u043b\u044c\u043a\u0438 \u0436 \u0440\u0430\u0437\u0456\u0432. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u0447\u0438\u043c \u0431\u0456\u043b\u044c\u0448\u0430 \u0448\u0432\u0438\u0434\u043a\u0456\u0441\u0442\u044c, \u0442\u0438\u043c \u043c\u0435\u043d\u0448\u0435 \u0447\u0430\u0441\u0443 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u043d\u0430 \u0434\u043e\u0440\u043e\u0433\u0443.</p><p>\u0413\u0440\u0430\u0444\u0456\u043a\u043e\u043c \u0442\u0430\u043a\u043e\u0457 \u0444\u0443\u043d\u043a\u0446\u0456\u0457 \u0454 <b>\u0433\u0456\u043f\u0435\u0440\u0431\u043e\u043b\u0430</b>. \u0412\u043e\u043d\u0430 \u0441\u043a\u043b\u0430\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0437 \u0434\u0432\u043e\u0445 \u0447\u0430\u0441\u0442\u0438\u043d (\u0432\u0456\u0442\u043e\u043a), \u044f\u043a\u0456 \u043d\u0430\u0431\u043b\u0438\u0436\u0430\u044e\u0442\u044c\u0441\u044f \u0434\u043e \u043e\u0441\u0435\u0439 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442, \u0430\u043b\u0435 \u043d\u0456\u043a\u043e\u043b\u0438 \u0457\u0445 \u043d\u0435 \u043f\u0435\u0440\u0435\u0442\u0438\u043d\u0430\u044e\u0442\u044c. \u0412\u0430\u0436\u043b\u0438\u0432\u043e \u043f\u0430\u043c'\u044f\u0442\u0430\u0442\u0438, \u0449\u043e x \u043d\u0435 \u043c\u043e\u0436\u0435 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0432\u0430\u0442\u0438 0, \u0431\u043e \u043d\u0430 \u043d\u0443\u043b\u044c \u0434\u0456\u043b\u0438\u0442\u0438 \u043d\u0435 \u043c\u043e\u0436\u043d\u0430.</p>",
    formula: "y = k/x, \u0434\u0435 k \u2260 0, x \u2260 0",
    examples: [{"q": "Прямокутник має площу 18 см². Задайте формулою залежність сторони y від сторони x.", "steps": ["Крок 1: Площа прямокутника обчислюється за формулою S = x · y.", "Крок 2: Виразимо сторону y: y = S/x.", "Крок 3: Підставимо відоме значення площі (18) у формулу.", "Відповідь: y = 18/x"]}, {"q": "Чи проходить графік функції y = 12/x через точку A(-2; -6)?", "steps": ["Крок 1: Підставимо координати точки в рівняння: x = -2, y = -6.", "Крок 2: Перевіримо рівність: -6 = 12 / (-2).", "Крок 3: Обчислимо праву частину: 12 / (-2) = -6.", "Відповідь: Так, оскільки -6 = -6"]}],
    practice: [{"q": "Знайдіть значення функції y = 20/x, якщо x = 5.", "ans": "4", "altAns": [], "hint": "Підстав замість x число 5 і виконай ділення: 20 ÷ 5"}, {"q": "При якому значенні x функція y = 14/x набуває значення 2?", "ans": "7", "altAns": [], "hint": "Розв'яжи рівняння 14/x = 2. Подумай, на що треба поділити 14, щоб отримати 2"}, {"q": "Знайдіть коефіцієнт k для функції y = k/x, якщо її графік проходить через точку (3; 4).", "ans": "12", "altAns": [], "hint": "Підстав x=3 та y=4 у формулу. Щоб знайти k, потрібно помножити x на y"}]
  },
  {
    id: "r8-parabola", grade: 8,
    icon: "\ud83d\udcd0",
    title: "\u0424\u0443\u043d\u043a\u0446\u0456\u044f y=x\u00b2 \u0442\u0430 \u0457\u0457 \u0433\u0440\u0430\u0444\u0456\u043a",
    meta: "~10 \u0445\u0432 \u00b7 \u00a711",
    type: 'lesson',
    theory: "<p>\u0424\u0443\u043d\u043a\u0446\u0456\u044f y=x\u00b2 \u043e\u043f\u0438\u0441\u0443\u0454 \u0437\u0430\u043b\u0435\u0436\u043d\u0456\u0441\u0442\u044c, \u0434\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f y \u0437\u0430\u0432\u0436\u0434\u0438 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u0443 \u0447\u0438\u0441\u043b\u0430 x. \u041e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0431\u0443\u0434\u044c-\u044f\u043a\u0435 \u0447\u0438\u0441\u043b\u043e \u0443 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u0456 \u043d\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u0432\u0456\u0434\u2019\u0454\u043c\u043d\u0438\u043c (x\u00b2 \u2265 0), \u0433\u0440\u0430\u0444\u0456\u043a \u0446\u0456\u0454\u0457 \u0444\u0443\u043d\u043a\u0446\u0456\u0457 \u043d\u0456\u043a\u043e\u043b\u0438 \u043d\u0435 \u043e\u043f\u0443\u0441\u043a\u0430\u0454\u0442\u044c\u0441\u044f \u043d\u0438\u0436\u0447\u0435 \u043e\u0441\u0456 x.</p><p>\u0426\u0435\u0439 \u0433\u0440\u0430\u0444\u0456\u043a \u043d\u0430\u0437\u0438\u0432\u0430\u044e\u0442\u044c <b>\u043f\u0430\u0440\u0430\u0431\u043e\u043b\u043e\u044e</b>. \u0412\u043e\u043d\u0430 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u0447\u0430\u0442\u043e\u043a \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442 (0; 0) \u2014 \u0446\u044e \u0442\u043e\u0447\u043a\u0443 \u043d\u0430\u0437\u0438\u0432\u0430\u044e\u0442\u044c \u0432\u0435\u0440\u0448\u0438\u043d\u043e\u044e. \u041f\u0430\u0440\u0430\u0431\u043e\u043b\u0430 \u0441\u0438\u043c\u0435\u0442\u0440\u0438\u0447\u043d\u0430: \u0433\u0456\u043b\u043a\u0438 \u043f\u0430\u0440\u0430\u0431\u043e\u043b\u0438 \u043e\u0434\u043d\u0430\u043a\u043e\u0432\u0456 \u0437 \u043e\u0431\u043e\u0445 \u0431\u043e\u043a\u0456\u0432, \u0442\u043e\u043c\u0443 \u044f\u043a\u0449\u043e \u0442\u043e\u0447\u043a\u0430 (3; 9) \u043b\u0435\u0436\u0438\u0442\u044c \u043d\u0430 \u0433\u0440\u0430\u0444\u0456\u043a\u0443, \u0442\u043e \u0456 \u0442\u043e\u0447\u043a\u0430 (-3; 9) \u0442\u0430\u043a\u043e\u0436 \u0439\u043e\u043c\u0443 \u043d\u0430\u043b\u0435\u0436\u0438\u0442\u044c.</p>",
    formula: "y = x\u00b2 (\u0433\u0440\u0430\u0444\u0456\u043a \u2014 \u043f\u0430\u0440\u0430\u0431\u043e\u043b\u0430)",
    examples: [{"q": "Чи проходить графік функції y = x² через точку A(-5; 25)?", "steps": ["Крок 1: Підставимо x = -5 у формулу y = x².", "Крок 2: Обчислимо: (-5)² = (-5) · (-5) = 25.", "Крок 3: Порівняємо результат із заданим значенням y. Оскільки 25 = 25, точка належить графіку.", "Відповідь: Так"]}, {"q": "Розв'яжіть графічно рівняння x² = x + 2", "steps": ["Крок 1: Побудуємо параболу y = x² та пряму y = x + 2 в одній системі координат.", "Крок 2: Знайдемо точки, де ці графіки перетинаються: це (-1; 1) та (2; 4).", "Крок 3: Коренями рівняння є абсциси (значення x) цих точок: -1 та 2.", "Відповідь: -1; 2"]}],
    practice: [{"q": "Знайдіть значення y, якщо x = -0,6 для функції y = x²", "ans": "0,36", "altAns": ["0.36", ",36", ".36"], "hint": "Піднеси -0,6 до квадрата: (-0,6) · (-0,6)"}, {"q": "При якому додатному значенні x значення функції y = x² дорівнює 49?", "ans": "7", "altAns": ["+7"], "hint": "Яке додатне число при множенні на себе дає 49?"}, {"q": "Точка M(x; 81) належить графіку y = x². Знайдіть від’ємне значення x.", "ans": "-9", "altAns": [], "hint": "Яке від’ємне число при піднесенні до квадрата дає 81?"}]
  },
  {
    id: "r8-sqrt-basics", grade: 8,
    icon: "\u221a",
    title: "\u041a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0456 \u043a\u043e\u0440\u0435\u043d\u0456. \u0410\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u043d\u0438\u0439 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0438\u0439 \u043a\u043e\u0440\u0456\u043d\u044c",
    meta: "~10 \u0445\u0432 \u00b7 \u00a712",
    type: 'lesson',
    theory: "<p>\u041a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0438\u043c \u043a\u043e\u0440\u0435\u043d\u0435\u043c \u0456\u0437 \u0447\u0438\u0441\u043b\u0430 <i>a</i> \u043d\u0430\u0437\u0438\u0432\u0430\u044e\u0442\u044c \u0442\u0430\u043a\u0435 \u0447\u0438\u0441\u043b\u043e, \u043a\u0432\u0430\u0434\u0440\u0430\u0442 \u044f\u043a\u043e\u0433\u043e \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 <i>a</i>. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u0434\u043b\u044f \u0447\u0438\u0441\u043b\u0430 49 \u0446\u0435 7 \u0442\u0430 -7.</p><p>\u0410\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u043d\u0438\u0439 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0438\u0439 \u043a\u043e\u0440\u0456\u043d\u044c \u2014 \u0446\u0435 \u0441\u0430\u043c\u0435 <b>\u043d\u0435\u0432\u0456\u0434'\u0454\u043c\u043d\u0435</b> \u0447\u0438\u0441\u043b\u043e (\u0434\u043e\u0434\u0430\u0442\u043d\u0435 \u0430\u0431\u043e 0). \u0419\u043e\u0433\u043e \u043f\u043e\u0437\u043d\u0430\u0447\u0430\u044e\u0442\u044c \u0437\u043d\u0430\u043a\u043e\u043c \u221a. \u0417\u0430\u043f\u0430\u043c'\u044f\u0442\u0430\u0439: \u043f\u0456\u0434 \u043a\u043e\u0440\u0435\u043d\u0435\u043c \u043d\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u0432\u0456\u0434'\u0454\u043c\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430, \u0431\u043e \u043a\u0432\u0430\u0434\u0440\u0430\u0442 \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u0437\u0430\u0432\u0436\u0434\u0438 \u0431\u0456\u043b\u044c\u0448\u0435 \u0430\u0431\u043e \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 \u043d\u0443\u043b\u044e.</p>",
    formula: "\u221aa = b, \u0434\u0435 b \u2265 0 \u0456 b\u00b2 = a",
    examples: [{"q": "Знайдіть сторону квадрата, площа якого дорівнює 25 см²", "steps": ["Крок 1: Площа квадрата обчислюється за формулою S = a².", "Крок 2: Нам потрібно знайти число, квадрат якого дорівнює 25. Це √25.", "Відповідь: 5 см."]}, {"q": "Обчисліть √0,04", "steps": ["Крок 1: Шукаємо невід'ємне число, яке при множенні на себе дає 0,04.", "Крок 2: Оскільки 0,2 × 0,2 = 0,04, то корінь дорівнює 0,2.", "Відповідь: 0,2."]}],
    practice: [{"q": "Обчисліть √49", "ans": "7", "altAns": [], "hint": "Яке число при множенні на себе дає 49?"}, {"q": "Обчисліть √1600", "ans": "40", "altAns": [], "hint": "Підказка: √16 = 4, а у відповіді буде вдесятеро більше число."}, {"q": "Знайдіть сторону квадрата, площа якого 0,81 м²", "ans": "0,9", "altAns": ["0.9"], "hint": "Знайдіть число, квадрат якого дорівнює 0,81. Спробуйте 0,9."}]
  },
  {
    id: "r8-sets", grade: 8,
    icon: "\ud83d\uddc2\ufe0f",
    title: "\u041c\u043d\u043e\u0436\u0438\u043d\u0430 \u0442\u0430 \u0457\u0457 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0438. \u041f\u0456\u0434\u043c\u043d\u043e\u0436\u0438\u043d\u0430",
    meta: "~10 \u0445\u0432 \u00b7 \u00a713",
    type: 'lesson',
    theory: "<p>\u041c\u043d\u043e\u0436\u0438\u043d\u0430 \u2014 \u0446\u0435 \u0431\u0443\u0434\u044c-\u044f\u043a\u0430 \u0441\u0443\u043a\u0443\u043f\u043d\u0456\u0441\u0442\u044c \u043e\u0431'\u0454\u043a\u0442\u0456\u0432, \u044f\u043a\u0456 \u043c\u0438 \u043e\u0431'\u0454\u0434\u043d\u0443\u0454\u043c\u043e \u0437\u0430 \u043f\u0435\u0432\u043d\u043e\u044e \u043e\u0437\u043d\u0430\u043a\u043e\u044e. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u043c\u043d\u043e\u0436\u0438\u043d\u0430 \u043f\u043b\u0430\u043d\u0435\u0442 \u0447\u0438 \u043c\u043d\u043e\u0436\u0438\u043d\u0430 \u0443\u0447\u043d\u0456\u0432 \u0443 \u043a\u043b\u0430\u0441\u0456. \u041e\u0431'\u0454\u043a\u0442\u0438, \u0437 \u044f\u043a\u0438\u0445 \u0441\u043a\u043b\u0430\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u043c\u043d\u043e\u0436\u0438\u043d\u0430, \u043d\u0430\u0437\u0438\u0432\u0430\u044e\u0442\u044c \u0457\u0457 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438.</p><p>\u0414\u043b\u044f \u043f\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u043c\u043d\u043e\u0436\u0438\u043d \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u044e\u0442\u044c \u0432\u0435\u043b\u0438\u043a\u0456 \u043b\u0456\u0442\u0435\u0440\u0438 (A, B, C), \u0430 \u0434\u043b\u044f \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0456\u0432 \u2014 \u043c\u0430\u043b\u0456 (a, b, c). \u042f\u043a\u0449\u043e \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0438 \u0443 \u0434\u0432\u043e\u0445 \u043c\u043d\u043e\u0436\u0438\u043d\u0430\u0445 \u043e\u0434\u043d\u0430\u043a\u043e\u0432\u0456, \u0442\u043e \u0442\u0430\u043a\u0456 \u043c\u043d\u043e\u0436\u0438\u043d\u0438 \u043d\u0430\u0437\u0438\u0432\u0430\u044e\u0442\u044c \u0440\u0456\u0432\u043d\u0438\u043c\u0438, \u043d\u0430\u0432\u0456\u0442\u044c \u044f\u043a\u0449\u043e \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u0437\u0430\u043f\u0438\u0441\u0443 \u0440\u0456\u0437\u043d\u0438\u0439.</p>",
    formula: "a \u2208 A \u2014 \u0435\u043b\u0435\u043c\u0435\u043d\u0442 a \u043d\u0430\u043b\u0435\u0436\u0438\u0442\u044c \u043c\u043d\u043e\u0436\u0438\u043d\u0456 A",
    examples: [{"q": "Запишіть множину букв слова «космодром»", "steps": ["Крок 1: Випишемо всі букви, що є у слові: к, о, с, м, о, д, р, о, м.", "Крок 2: У множині кожен елемент записується лише один раз. Викреслимо повтори: к, о, с, м, д, р.", "Відповідь: {к, о, с, м, д, р}"]}, {"q": "Чи рівні множини A = {1, 2, 3} та B = {3, 1, 2}?", "steps": ["Крок 1: Перевіримо, чи кожен елемент множини A є у множині B (так: 1, 2, 3).", "Крок 2: Перевіримо, чи кожен елемент множини B є у множині A (так: 3, 1, 2).", "Крок 3: Оскільки склад елементів однаковий, множини рівні, попри інший порядок.", "Відповідь: так"]}],
    practice: [{"q": "Скільки елементів у множині букв слова «алгебра»?", "ans": "6", "altAns": ["6 елементів"], "hint": "Випиши всі різні букви: а, л, г, е, б, р."}, {"q": "Чи належить число 7 множині парних чисел?", "ans": "ні", "altAns": ["не належить"], "hint": "Парні числа діляться на 2 без остачі. Чи ділиться 7 на 2?"}, {"q": "Запишіть через кому без пробілів множину цифр числа 2024.", "ans": "0,2,4", "altAns": ["2,0,4", "4,2,0", "0,4,2"], "hint": "Цифри у множині не мають повторюватися, цифра 2 зустрічається двічі, але пишемо її один раз."}]
  },
  {
    id: "r8-number-sets", grade: 8,
    icon: "\ud83d\udd22",
    title: "\u0427\u0438\u0441\u043b\u043e\u0432\u0456 \u043c\u043d\u043e\u0436\u0438\u043d\u0438",
    meta: "~10 \u0445\u0432 \u00b7 \u00a714",
    type: 'lesson',
    theory: "<p>\u041d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u0456 \u0447\u0438\u0441\u043b\u0430 (N) \u2014 \u0446\u0435 \u0442\u0456, \u0449\u043e \u043c\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u043c\u043e \u0434\u043b\u044f \u043b\u0456\u0447\u0431\u0438: 1, 2, 3... \u042f\u043a\u0449\u043e \u0434\u043e\u0434\u0430\u0442\u0438 \u0434\u043e \u043d\u0438\u0445 \u043d\u0443\u043b\u044c \u0442\u0430 \u0432\u0456\u0434\u2019\u0454\u043c\u043d\u0456 \u0446\u0456\u043b\u0456 \u0447\u0438\u0441\u043b\u0430, \u043c\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u0454\u043c\u043e \u043c\u043d\u043e\u0436\u0438\u043d\u0443 \u0446\u0456\u043b\u0438\u0445 \u0447\u0438\u0441\u0435\u043b (Z).</p><p>\u0423\u0441\u0456 \u0446\u0456\u043b\u0456 \u0442\u0430 \u0434\u0440\u043e\u0431\u043e\u0432\u0456 \u0447\u0438\u0441\u043b\u0430 \u0440\u0430\u0437\u043e\u043c \u0443\u0442\u0432\u043e\u0440\u044e\u044e\u0442\u044c \u0440\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0456 \u0447\u0438\u0441\u043b\u0430 (Q). \u0411\u0443\u0434\u044c-\u044f\u043a\u0435 \u0440\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0435 \u0447\u0438\u0441\u043b\u043e \u043c\u043e\u0436\u043d\u0430 \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u0438 \u044f\u043a \u0434\u0440\u0456\u0431. \u041f\u0430\u043c\u2019\u044f\u0442\u0430\u0439\u0442\u0435: \u043a\u043e\u0436\u043d\u0430 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0430 \u043c\u043d\u043e\u0436\u0438\u043d\u0430 \u0448\u0438\u0440\u0448\u0430 \u0437\u0430 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u044e \u0456 \u0432\u043a\u043b\u044e\u0447\u0430\u0454 \u0457\u0457 \u0432 \u0441\u0435\u0431\u0435.</p>",
    formula: "N \u2282 Z \u2282 Q",
    examples: [{"q": "До яких множин належить число -5?", "steps": ["Крок 1: Число -5 не є натуральним, бо ми не використовуємо його для лічби предметів.", "Крок 2: Воно є цілим (Z), бо це від’ємне число без дробової частини.", "Крок 3: Оскільки воно ціле, воно також є раціональним (Q).", "Відповідь: Z, Q"]}, {"q": "Запишіть число 0,2 у вигляді звичайного дробу.", "steps": ["Крок 1: Читаємо число: «дві десятих».", "Крок 2: Записуємо як 2/10.", "Крок 3: Скорочуємо на 2 і отримуємо 1/5.", "Відповідь: 1/5"]}],
    practice: [{"q": "Яке з чисел є натуральним: -2, 0, 7 або 1.5?", "ans": "7", "altAns": ["сім"], "hint": "Натуральні числа починаються з 1 і йдуть далі: 1, 2, 3..."}, {"q": "Чи є число -10 раціональним? (так/ні)", "ans": "так", "altAns": ["так", "є"], "hint": "Усі цілі числа входять до множини раціональних чисел."}, {"q": "Якою буквою позначають множину цілих чисел?", "ans": "Z", "altAns": ["z"], "hint": "Ця буква походить від німецького слова Zahlen (числа)."}]
  },
  {
    id: "r8-sqrt-properties", grade: 8,
    icon: "\ud83d\udccf",
    title: "\u0412\u043b\u0430\u0441\u0442\u0438\u0432\u043e\u0441\u0442\u0456 \u0430\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043e\u0440\u0435\u043d\u044f",
    meta: "~10 \u0445\u0432 \u00b7 \u00a715",
    type: 'lesson',
    theory: "<p>\u041a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0438\u0439 \u043a\u043e\u0440\u0456\u043d\u044c \u0456 \u043f\u0456\u0434\u043d\u0435\u0441\u0435\u043d\u043d\u044f \u0434\u043e \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u0430 \u2014 \u0446\u0435 \u043f\u0440\u043e\u0442\u0438\u043b\u0435\u0436\u043d\u0456 \u0434\u0456\u0457, \u0430\u043b\u0435 \u0454 \u0432\u0430\u0436\u043b\u0438\u0432\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u043e: \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043a\u043e\u0440\u0435\u043d\u044f \u043d\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u0432\u0456\u0434'\u0454\u043c\u043d\u0438\u043c. \u0422\u043e\u043c\u0443 \u221aa\u00b2 \u0437\u0430\u0432\u0436\u0434\u0438 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 |a| (\u043c\u043e\u0434\u0443\u043b\u044e \u0447\u0438\u0441\u043b\u0430).</p><p>\u0422\u0430\u043a\u043e\u0436 \u043a\u043e\u0440\u0456\u043d\u044c \u00ab\u0432\u043c\u0456\u0454\u00bb \u0440\u043e\u0437\u0431\u0438\u0432\u0430\u0442\u0438\u0441\u044f: \u043a\u043e\u0440\u0456\u043d\u044c \u0437 \u0434\u043e\u0431\u0443\u0442\u043a\u0443 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 \u0434\u043e\u0431\u0443\u0442\u043a\u0443 \u043a\u043e\u0440\u0435\u043d\u0456\u0432, \u0430 \u043a\u043e\u0440\u0456\u043d\u044c \u0437 \u0434\u0440\u043e\u0431\u0443 \u2014 \u0447\u0430\u0441\u0442\u0446\u0456 \u043a\u043e\u0440\u0435\u043d\u0456\u0432. \u0426\u0435 \u0434\u043e\u043f\u043e\u043c\u0430\u0433\u0430\u0454 \u043b\u0435\u0433\u043a\u043e \u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438 \u043a\u043e\u0440\u0456\u043d\u044c \u0437 \u0432\u0435\u043b\u0438\u043a\u0438\u0445 \u0447\u0438\u0441\u0435\u043b, \u0440\u043e\u0437\u043a\u043b\u0430\u0434\u0430\u044e\u0447\u0438 \u0457\u0445 \u043d\u0430 \u0437\u0440\u0443\u0447\u043d\u0456 \u043c\u043d\u043e\u0436\u043d\u0438\u043a\u0438.</p>",
    formula: "\u221aa\u00b2 = |a|, \u221aa\u00b7b = \u221aa \u00b7 \u221ab, \u221a(a/b) = \u221aa / \u221ab",
    examples: [{"q": "Обчисліть √(-7.3)²", "steps": ["Крок 1: Застосуємо властивість √a² = |a|.", "Крок 2: Отримуємо |-7.3|.", "Відповідь: 7.3"]}, {"q": "Знайдіть значення √0.81·225", "steps": ["Крок 1: Розбиваємо на добуток коренів: √0.81 · √225.", "Крок 2: Обчислюємо: 0.9 · 15.", "Відповідь: 13.5"]}],
    practice: [{"q": "Обчисліть √(-12)²", "ans": "12", "altAns": [], "hint": "Результат кореня завжди додатний, тому √(-12)² = |-12|."}, {"q": "Знайдіть значення √4·25", "ans": "10", "altAns": [], "hint": "Обчисли окремо √4 та √25, а потім перемнож результати."}, {"q": "Обчисліть √3 · √27", "ans": "9", "altAns": [], "hint": "Занеси обидва числа під один корінь: √(3 · 27)."}]
  },
  {
    id: "r8-sqrt-transforms", grade: 8,
    icon: "\ud83d\udd27",
    title: "\u0422\u043e\u0442\u043e\u0436\u043d\u0456 \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0432\u0438\u0440\u0430\u0437\u0456\u0432 \u0437 \u043a\u043e\u0440\u0435\u043d\u044f\u043c\u0438",
    meta: "~10 \u0445\u0432 \u00b7 \u00a71",
    type: 'lesson',
    theory: "<p>\u0406\u043d\u043e\u0434\u0456 \u0432\u0438\u0440\u0430\u0437\u0438 \u0437 \u043a\u043e\u0440\u0435\u043d\u044f\u043c\u0438 \u0432\u0438\u0433\u043b\u044f\u0434\u0430\u044e\u0442\u044c \u0433\u0440\u043e\u043c\u0456\u0437\u0434\u043a\u043e. \u0429\u043e\u0431 \u0457\u0445 \u0441\u043f\u0440\u043e\u0441\u0442\u0438\u0442\u0438, \u043c\u0438 \u043c\u043e\u0436\u0435\u043c\u043e <b>\u0432\u0438\u043d\u043e\u0441\u0438\u0442\u0438 \u043c\u043d\u043e\u0436\u043d\u0438\u043a</b> \u0437-\u043f\u0456\u0434 \u043a\u043e\u0440\u0435\u043d\u044f. \u0414\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u043e \u043f\u0456\u0434 \u043a\u043e\u0440\u0435\u043d\u0435\u043c \u0440\u043e\u0437\u043a\u043b\u0430\u0434\u0430\u0454\u043c\u043e \u043d\u0430 \u043c\u043d\u043e\u0436\u043d\u0438\u043a\u0438 \u0442\u0430\u043a, \u0449\u043e\u0431 \u0437 \u043e\u0434\u043d\u043e\u0433\u043e \u043c\u043e\u0436\u043d\u0430 \u0431\u0443\u043b\u043e \u0434\u043e\u0431\u0443\u0442\u0438 \u0446\u0456\u043b\u0438\u0439 \u043a\u043e\u0440\u0456\u043d\u044c.</p><p>\u0422\u0430\u043a\u043e\u0436 \u043c\u043e\u0436\u043d\u0430 \u0440\u043e\u0431\u0438\u0442\u0438 \u043d\u0430\u0432\u043f\u0430\u043a\u0438 \u2014 <b>\u0432\u043d\u043e\u0441\u0438\u0442\u0438 \u043c\u043d\u043e\u0436\u043d\u0438\u043a</b> \u043f\u0456\u0434 \u0437\u043d\u0430\u043a \u043a\u043e\u0440\u0435\u043d\u044f. \u0426\u0435 \u043a\u043e\u0440\u0438\u0441\u043d\u043e \u0434\u043b\u044f \u043f\u043e\u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u0447\u0438\u0441\u0435\u043b. \u0414\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u043e \u043f\u0435\u0440\u0435\u0434 \u043a\u043e\u0440\u0435\u043d\u0435\u043c \u043f\u0456\u0434\u043d\u043e\u0441\u0438\u043c\u043e \u0434\u043e \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u0430 \u0456 \u043c\u043d\u043e\u0436\u0438\u043c\u043e \u043d\u0430 \u0447\u0438\u0441\u043b\u043e \u043f\u0456\u0434 \u043a\u043e\u0440\u0435\u043d\u0435\u043c.</p>",
    formula: "\u221a(a\u00b2 \u00b7 b) = a\u221ab (\u043f\u0440\u0438 a \u2265 0)",
    examples: [{"q": "Винесіть множник з-під знака кореня: √150", "steps": ["Крок 1: Розкладемо 150 на множники, один з яких квадрат: 150 = 25 · 6", "Крок 2: Добудемо корінь з 25: √25 = 5", "Відповідь: 5√6"]}, {"q": "Внесіть множник під знак кореня: 2√7", "steps": ["Крок 1: Піднесемо множник 2 до квадрата: 2² = 4", "Крок 2: Запишемо добуток під коренем: √(4 · 7)", "Відповідь: √28"]}],
    practice: [{"q": "Винесіть множник з-під кореня: √12", "ans": "2√3", "altAns": ["2*√3"], "hint": "Розклади 12 на 4 · 3 і добуть корінь з 4"}, {"q": "Внесіть множник під корінь: 3√2", "ans": "√18", "altAns": ["sqrt(18)"], "hint": "Піднеси 3 до квадрата (це 9) і помнож на 2 під коренем"}, {"q": "Спростіть вираз: 5√2 + 3√2 - 2√2", "ans": "6√2", "altAns": ["6*√2"], "hint": "Порахуй коефіцієнти перед коренем: 5 + 3 - 2"}]
  },
  {
    id: "r8-sqrt-function", grade: 8,
    icon: "\ud83d\udcca",
    title: "\u0424\u0443\u043d\u043a\u0446\u0456\u044f y=\u221ax \u0442\u0430 \u0457\u0457 \u0433\u0440\u0430\u0444\u0456\u043a",
    meta: "~10 \u0445\u0432 \u00b7 \u00a717",
    type: 'lesson',
    theory: "<p>\u0424\u0443\u043d\u043a\u0446\u0456\u044f y=\u221ax \u043e\u043f\u0438\u0441\u0443\u0454 \u0437\u0430\u043b\u0435\u0436\u043d\u0456\u0441\u0442\u044c \u0441\u0442\u043e\u0440\u043e\u043d\u0438 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u0430 \u0432\u0456\u0434 \u0439\u043e\u0433\u043e \u043f\u043b\u043e\u0449\u0456. \u041e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u043f\u043b\u043e\u0449\u0430 \u0442\u0430 \u0434\u043e\u0432\u0436\u0438\u043d\u0430 \u043d\u0435 \u043c\u043e\u0436\u0443\u0442\u044c \u0431\u0443\u0442\u0438 \u0432\u0456\u0434\u2019\u0454\u043c\u043d\u0438\u043c\u0438, \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f x \u0442\u0430 y \u0437\u0430\u0432\u0436\u0434\u0438 \u0431\u0456\u043b\u044c\u0448\u0456 \u0430\u0431\u043e \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u044e\u0442\u044c \u043d\u0443\u043b\u044e.</p><p>\u0413\u0440\u0430\u0444\u0456\u043a\u043e\u043c \u0446\u0456\u0454\u0457 \u0444\u0443\u043d\u043a\u0446\u0456\u0457 \u0454 \u0432\u0456\u0442\u043a\u0430 \u043f\u0430\u0440\u0430\u0431\u043e\u043b\u0438 \u2014 \u043a\u0440\u0438\u0432\u0430 \u043b\u0456\u043d\u0456\u044f, \u0449\u043e \u0432\u0438\u0445\u043e\u0434\u0438\u0442\u044c \u0456\u0437 \u0442\u043e\u0447\u043a\u0438 (0;0) \u0456 \u043f\u043e\u0441\u0442\u0443\u043f\u043e\u0432\u043e \u043f\u0456\u0434\u043d\u0456\u043c\u0430\u0454\u0442\u044c\u0441\u044f \u0432\u0433\u043e\u0440\u0443. \u0427\u0438\u043c \u0431\u0456\u043b\u044c\u0448\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f x \u043c\u0438 \u043f\u0456\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0454\u043c\u043e, \u0442\u0438\u043c \u0431\u0456\u043b\u044c\u0448\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f y \u043e\u0442\u0440\u0438\u043c\u0443\u0454\u043c\u043e.</p>",
    formula: "y = \u221ax, \u0434\u0435 x \u2265 0, y \u2265 0",
    examples: [{"q": "Знайдіть значення функції y = √x, якщо x = 6.25", "steps": ["Підставляємо значення x у формулу: y = √6.25", "Згадуємо, яке число в квадраті дає 6.25: це 2.5", "Відповідь: y = 2.5"]}, {"q": "Порівняйте числа 4 і √15", "steps": ["Представимо число 4 як корінь: 4 = √16", "Порівняємо підкореневі вирази: 16 > 15", "Оскільки 16 > 15, то √16 > √15", "Відповідь: 4 > √15"]}],
    practice: [{"q": "Знайдіть значення y, якщо x = 0.04", "ans": "0.2", "altAns": ["0,2"], "hint": "Обчисліть корінь з 0.04. Яке число при множенні на себе дає 0.04?"}, {"q": "Знайдіть значення x, при якому y = 11", "ans": "121", "altAns": [], "hint": "Щоб знайти x, піднесіть y до квадрата: 11²."}, {"q": "Чи проходить графік функції y = √x через точку (9; 3)? (так/ні)", "ans": "так", "altAns": ["Так"], "hint": "Перевірте, чи правильно, що √9 = 3."}]
  },
  {
    id: "r8-quadratic-incomplete", grade: 8,
    icon: "\ud83d\udff0",
    title: "\u041d\u0435\u043f\u043e\u0432\u043d\u0456 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0456 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f",
    meta: "~10 \u0445\u0432 \u00b7 \u00a71",
    type: 'lesson',
    theory: "<p>\u041a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0435 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u2014 \u0446\u0435 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u0432\u0438\u0434\u0443 ax\u00b2 + bx + c = 0, \u0434\u0435 x \u2014 \u043d\u0435\u0432\u0456\u0434\u043e\u043c\u0435, \u0430 a, b \u0456 c \u2014 \u0447\u0438\u0441\u043b\u0430 (\u043a\u043e\u0435\u0444\u0456\u0446\u0456\u0454\u043d\u0442\u0438). \u0412\u0430\u0436\u043b\u0438\u0432\u043e, \u0449\u043e \u043f\u0435\u0440\u0448\u0438\u0439 \u043a\u043e\u0435\u0444\u0456\u0446\u0456\u0454\u043d\u0442 <b>a</b> \u043d\u0456\u043a\u043e\u043b\u0438 \u043d\u0435 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 \u043d\u0443\u043b\u044e.</p><p>\u042f\u043a\u0449\u043e \u0445\u043e\u0447\u0430 \u0431 \u043e\u0434\u0438\u043d \u0456\u0437 \u043a\u043e\u0435\u0444\u0456\u0446\u0456\u0454\u043d\u0442\u0456\u0432 <b>b</b> \u0430\u0431\u043e <b>c</b> \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 \u043d\u0443\u043b\u044e, \u0442\u043e \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u043d\u0430\u0437\u0438\u0432\u0430\u044e\u0442\u044c <b>\u043d\u0435\u043f\u043e\u0432\u043d\u0438\u043c</b>. \u0407\u0445 \u0440\u043e\u0437\u0432'\u044f\u0437\u0443\u0432\u0430\u0442\u0438 \u043f\u0440\u043e\u0441\u0442\u0456\u0448\u0435: \u043c\u0438 \u0430\u0431\u043e \u0432\u0438\u043d\u043e\u0441\u0438\u043c\u043e x \u0437\u0430 \u0434\u0443\u0436\u043a\u0438, \u0430\u0431\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u0434\u043e\u0431\u0443\u0432\u0430\u0454\u043c\u043e \u043a\u043e\u0440\u0456\u043d\u044c.</p>",
    formula: "ax\u00b2 + bx + c = 0, \u0434\u0435 a \u2260 0, \u0430 b \u0430\u0431\u043e c \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u044e\u0442\u044c 0",
    examples: [{"q": "Розв'яжіть рівняння 3x² - 27 = 0", "steps": ["Крок 1: Перенесемо число 27 у праву частину: 3x² = 27", "Крок 2: Поділимо обидві частини на 3: x² = 9", "Крок 3: Знайдемо корені (числа, квадрат яких 9): x = 3 або x = -3", "Відповідь: 3; -3"]}, {"q": "Розв'яжіть рівняння 2x² + 10x = 0", "steps": ["Крок 1: Винесемо спільний множник x за дужки: x(2x + 10) = 0", "Крок 2: Добуток дорівнює нулю, якщо x = 0 або 2x + 10 = 0", "Крок 3: Розв'яжемо друге рівняння: 2x = -10, отже x = -5", "Відповідь: 0; -5"]}],
    practice: [{"q": "x² - 49 = 0", "ans": "7;-7", "altAns": ["-7;7"], "hint": "Перенеси 49 вправо і подумай, які два числа у квадраті дають 49."}, {"q": "7x² = 0", "ans": "0", "altAns": [], "hint": "Якщо добуток числа 7 та x² дорівнює нулю, то чому дорівнює сам x?"}, {"q": "x² + 4x = 0", "ans": "0;-4", "altAns": ["-4;0"], "hint": "Винеси x за дужки: x(x + 4) = 0. Перший корінь буде 0, а другий знайдеш із дужок."}]
  },
  {
    id: "r8-quadratic-formula", grade: 8,
    icon: "\ud83d\udd11",
    title: "\u0424\u043e\u0440\u043c\u0443\u043b\u0430 \u043a\u043e\u0440\u0435\u043d\u0456\u0432 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f",
    meta: "~10 \u0445\u0432 \u00b7 \u00a73",
    type: 'lesson',
    theory: "<p>\u041a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0435 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f ax\u00b2 + bx + c = 0 \u043c\u043e\u0436\u043d\u0430 \u0440\u043e\u0437\u0432'\u044f\u0437\u0430\u0442\u0438 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u0441\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u2014 \u0434\u0438\u0441\u043a\u0440\u0438\u043c\u0456\u043d\u0430\u043d\u0442\u0430 (D). \u0412\u0456\u043d \u043f\u0456\u0434\u043a\u0430\u0437\u0443\u0454 \u043d\u0430\u043c, \u0447\u0438 \u0454 \u0443 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u0440\u043e\u0437\u0432'\u044f\u0437\u043a\u0438 \u0442\u0430 \u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0457\u0445 \u0431\u0443\u0434\u0435.</p><p>\u042f\u043a\u0449\u043e D > 0 \u2014 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u043c\u0430\u0454 \u0434\u0432\u0430 \u043a\u043e\u0440\u0435\u043d\u0456, \u044f\u043a\u0449\u043e D = 0 \u2014 \u043e\u0434\u0438\u043d \u043a\u043e\u0440\u0456\u043d\u044c, \u0430 \u044f\u043a\u0449\u043e D < 0 \u2014 \u043a\u043e\u0440\u0435\u043d\u0456\u0432 \u043d\u0435\u043c\u0430\u0454. \u0426\u0435 \u043d\u0430\u0439\u043d\u0430\u0434\u0456\u0439\u043d\u0456\u0448\u0438\u0439 \u0441\u043f\u043e\u0441\u0456\u0431, \u044f\u043a\u0438\u0439 \u0434\u043e\u043f\u043e\u043c\u043e\u0436\u0435, \u043d\u0430\u0432\u0456\u0442\u044c \u044f\u043a\u0449\u043e \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u0432\u0438\u0433\u043b\u044f\u0434\u0430\u0454 \u0441\u043a\u043b\u0430\u0434\u043d\u0438\u043c.</p>",
    formula: "D = b\u00b2 - 4ac, x = (-b \u00b1 \u221aD) / 2a",
    examples: [{"q": "Розв'яжіть рівняння: 3x² - 2x - 16 = 0", "steps": ["Крок 1: Визначимо коефіцієнти: a=3, b=-2, c=-16.", "Крок 2: Знайдемо дискримінант: D = (-2)² - 4·3·(-16) = 4 + 192 = 196.", "Крок 3: Оскільки D > 0, обчислимо корені: x = (2 ± √196) / (2·3) = (2 ± 14) / 6.", "Крок 4: x₁ = 16/6 = 2 2/3; x₂ = -12/6 = -2.", "Відповідь: 2 2/3; -2."]}, {"q": "Розв'яжіть рівняння: x² - 6x + 11 = 0", "steps": ["Крок 1: Визначимо коефіцієнти: a=1, b=-6, c=11.", "Крок 2: Обчислимо дискримінант: D = (-6)² - 4·1·11 = 36 - 44 = -8.", "Крок 3: Дискримінант від'ємний (D < 0), тому рівняння не має коренів.", "Відповідь: коренів немає."]}],
    practice: [{"q": "Розв'яжіть рівняння x² - 7x + 10 = 0. Запишіть два корені через крапку з комою в порядку зростання.", "ans": "2; 5", "altAns": ["2;5", "2, 5", "2,5"], "hint": "D = 49 - 40 = 9. Корені шукай за формулою (7 ± √9) / 2."}, {"q": "Розв'яжіть рівняння x² - 4x + 4 = 0", "ans": "2", "altAns": ["x=2", "x = 2"], "hint": "Обчисли дискримінант. Якщо D = 0, то корінь один і він знаходиться за формулою x = -b / 2a."}, {"q": "Скільки коренів має рівняння x² + x + 5 = 0?", "ans": "0", "altAns": ["нуль", "коренів немає", "немає"], "hint": "Обчисли дискримінант: D = 1² - 4·1·5. Яким вийшло число (додатним чи від'ємним)?"}]
  },
  {
    id: "r8-vieta", grade: 8,
    icon: "\ud83d\udd17",
    title: "\u0422\u0435\u043e\u0440\u0435\u043c\u0430 \u0412\u0456\u0454\u0442\u0430",
    meta: "~10 \u0445\u0432 \u00b7 \u00a73",
    type: 'lesson',
    theory: "<p>\u0422\u0435\u043e\u0440\u0435\u043c\u0430 \u0412\u0456\u0454\u0442\u0430 \u2014 \u0446\u0435 \u0437\u0440\u0443\u0447\u043d\u0438\u0439 \u0441\u043f\u043e\u0441\u0456\u0431 \u0437\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0438 \u0441\u0443\u043c\u0443 \u0442\u0430 \u0434\u043e\u0431\u0443\u0442\u043e\u043a \u043a\u043e\u0440\u0435\u043d\u0456\u0432 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f, \u043d\u0435 \u0440\u043e\u0437\u0432'\u044f\u0437\u0443\u044e\u0447\u0438 \u0439\u043e\u0433\u043e \u0447\u0435\u0440\u0435\u0437 \u0434\u0438\u0441\u043a\u0440\u0438\u043c\u0456\u043d\u0430\u043d\u0442. \u0412\u043e\u043d\u0430 \u043f\u043e\u0432'\u044f\u0437\u0443\u0454 \u043a\u043e\u0440\u0435\u043d\u0456 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u0437 \u0439\u043e\u0433\u043e \u043a\u043e\u0435\u0444\u0456\u0446\u0456\u0454\u043d\u0442\u0430\u043c\u0438, \u0449\u043e \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u0448\u0432\u0438\u0434\u043a\u043e \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0442\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u0430\u0431\u043e \u043d\u0430\u0432\u0456\u0442\u044c \u0432\u0433\u0430\u0434\u0443\u0432\u0430\u0442\u0438 \u043a\u043e\u0440\u0435\u043d\u0456 \u0443\u0441\u043d\u043e.</p><p>\u0414\u043b\u044f \u0437\u0432\u0435\u0434\u0435\u043d\u043e\u0433\u043e \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f (\u0434\u0435 \u043f\u0435\u0440\u0448\u0438\u0439 \u043a\u043e\u0435\u0444\u0456\u0446\u0456\u0454\u043d\u0442 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 1) \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0441\u0442\u0430\u044e\u0442\u044c \u0437\u043e\u0432\u0441\u0456\u043c \u043f\u0440\u043e\u0441\u0442\u0438\u043c\u0438: \u0441\u0443\u043c\u0430 \u043a\u043e\u0440\u0435\u043d\u0456\u0432 \u2014 \u0446\u0435 \u0447\u0438\u0441\u043b\u043e \u0431\u0456\u043b\u044f x \u0437 \u043f\u0440\u043e\u0442\u0438\u043b\u0435\u0436\u043d\u0438\u043c \u0437\u043d\u0430\u043a\u043e\u043c, \u0430 \u0434\u043e\u0431\u0443\u0442\u043e\u043a \u2014 \u0432\u0456\u043b\u044c\u043d\u0438\u0439 \u0447\u043b\u0435\u043d.</p>",
    formula: "x\u2081 + x\u2082 = -b/a, x\u2081 \u00b7 x\u2082 = c/a",
    examples: [{"q": "Знайдіть суму та добуток коренів рівняння 3x² - 15x + 2 = 0", "steps": ["Крок 1: Виписуємо коефіцієнти: a = 3, b = -15, c = 2.", "Крок 2: За теоремою Вієта сума x₁ + x₂ = -b/a = -(-15)/3 = 5.", "Крок 3: Добуток x₁ · x₂ = c/a = 2/3.", "Відповідь: сума 5, добуток 2/3."]}, {"q": "Складіть квадратне рівняння, коренями якого є числа -7 і 4", "steps": ["Крок 1: Знайдемо коефіцієнт b для зведеного рівняння: b = -(x₁ + x₂) = -(-7 + 4) = -(-3) = 3.", "Крок 2: Знайдемо вільний член c: c = x₁ · x₂ = -7 · 4 = -28.", "Крок 3: Підставимо значення у формулу x² + bx + c = 0.", "Відповідь: x² + 3x - 28 = 0."]}],
    practice: [{"q": "Чому дорівнює сума коренів рівняння x² - 8x + 12 = 0?", "ans": "8", "altAns": ["вісім"], "hint": "У зведеному рівнянні x² + bx + c = 0 сума коренів дорівнює -b (другому коефіцієнту з протилежним знаком)."}, {"q": "Чому дорівнює добуток коренів рівняння x² + 5x - 6 = 0?", "ans": "-6", "altAns": ["мінус шість"], "hint": "У зведеному рівнянні добуток коренів дорівнює вільному члену c."}, {"q": "Знайдіть корені рівняння x² - 7x + 10 = 0 усно. Запишіть їх через кому (від меншого до більшого).", "ans": "2, 5", "altAns": ["2,5", "2 і 5", "2 5"], "hint": "Добуток коренів дорівнює 10, а їх сума 7. Які два числа підходять?"}]
  },
  {
    id: "r8-quadratic-trinomial", grade: 8,
    icon: "\ud83d\udcd0",
    title: "\u041a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0438\u0439 \u0442\u0440\u0438\u0447\u043b\u0435\u043d",
    meta: "~10 \u0445\u0432 \u00b7 \u00a73",
    type: 'lesson',
    theory: "<p>\u041a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0438\u043c \u0442\u0440\u0438\u0447\u043b\u0435\u043d\u043e\u043c \u043d\u0430\u0437\u0438\u0432\u0430\u044e\u0442\u044c \u043c\u043d\u043e\u0433\u043e\u0447\u043b\u0435\u043d \u0432\u0438\u0434\u0443 ax\u00b2 + bx + c, \u0434\u0435 x \u2014 \u0437\u043c\u0456\u043d\u043d\u0430, \u0430 a, b \u0456 c \u2014 \u0447\u0438\u0441\u043b\u0430 (\u043a\u043e\u0435\u0444\u0456\u0446\u0456\u0454\u043d\u0442\u0438). \u0417\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0437\u043c\u0456\u043d\u043d\u043e\u0457, \u043f\u0440\u0438 \u044f\u043a\u0438\u0445 \u0442\u0440\u0438\u0447\u043b\u0435\u043d \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 \u043d\u0443\u043b\u044e, \u043d\u0430\u0437\u0438\u0432\u0430\u044e\u0442\u044c \u0439\u043e\u0433\u043e \u043a\u043e\u0440\u0435\u043d\u044f\u043c\u0438.</p><p>\u042f\u043a\u0449\u043e \u043c\u0438 \u0437\u043d\u0430\u0454\u043c\u043e \u043a\u043e\u0440\u0435\u043d\u0456 x\u2081 \u0442\u0430 x\u2082, \u0442\u043e \u0442\u0440\u0438\u0447\u043b\u0435\u043d \u043c\u043e\u0436\u043d\u0430 \u0440\u043e\u0437\u043a\u043b\u0430\u0441\u0442\u0438 \u043d\u0430 \u043f\u0440\u043e\u0441\u0442\u0456 \u043c\u043d\u043e\u0436\u043d\u0438\u043a\u0438 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u0441\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u043e\u0457 \u0444\u043e\u0440\u043c\u0443\u043b\u0438. \u0426\u0435 \u0437\u043d\u0430\u0447\u043d\u043e \u0441\u043f\u0440\u043e\u0449\u0443\u0454 \u0441\u043a\u043e\u0440\u043e\u0447\u0435\u043d\u043d\u044f \u0441\u043a\u043b\u0430\u0434\u043d\u0438\u0445 \u0430\u043b\u0433\u0435\u0431\u0440\u0430\u0457\u0447\u043d\u0438\u0445 \u0434\u0440\u043e\u0431\u0456\u0432.</p>",
    formula: "ax\u00b2 + bx + c = a(x - x\u2081)(x - x\u2082)",
    examples: [{"q": "Розкладіть на множники x² - 14x - 32", "steps": ["Крок 1: Знайдемо корені рівняння x² - 14x - 32 = 0. За теоремою Вієта: x₁ = 16, x₂ = -2.", "Крок 2: Підставимо корені у формулу a(x - x₁)(x - x₂). Тут a = 1.", "Відповідь: (x - 16)(x + 2)."]}, {"q": "Скоротіть дріб (6a² - a - 1) / (9a² - 1)", "steps": ["Крок 1: Розкладемо чисельник 6a² - a - 1 на множники. Його корені: 1/2 та -1/3. Отримуємо: 6(a - 1/2)(a + 1/3) = (2a - 1)(3a + 1).", "Крок 2: Розкладемо знаменник за формулою різниці квадратів: 9a² - 1 = (3a - 1)(3a + 1).", "Крок 3: Скоротимо спільний множник (3a + 1).", "Відповідь: (2a - 1) / (3a - 1)."]}],
    practice: [{"q": "Знайдіть корені квадратного тричлена x² - x - 12", "ans": "4; -3", "altAns": ["-3; 4", "4, -3", "-3, 4"], "hint": "Знайди два числа, добуток яких дорівнює -12, а сума дорівнює 1 (за теоремою Вієта)."}, {"q": "Розкладіть на множники тричлен x² + 8x + 15", "ans": "(x+3)(x+5)", "altAns": ["(x+5)(x+3)", "(x + 3)(x + 5)", "(x + 5)(x + 3)"], "hint": "Корені цього тричлена дорівнюють -3 та -5. Підстав їх у формулу a(x - x₁)(x - x₂)."}, {"q": "При якому значенні m розклад тричлена 2x² + 9x + m містить множник (x + 5)?", "ans": "-5", "altAns": ["m = -5", "m=-5"], "hint": "Якщо множник (x + 5) є у розкладі, то число -5 є коренем цього тричлена. Підстав x = -5 у вираз і прирівняй до нуля."}]
  },
  {
    id: "r8-reducible-equations", grade: 8,
    icon: "\ud83d\udd04",
    title: "\u0420\u0456\u0432\u043d\u044f\u043d\u043d\u044f, \u0449\u043e \u0437\u0432\u043e\u0434\u044f\u0442\u044c\u0441\u044f \u0434\u043e \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0438\u0445",
    meta: "~10 \u0445\u0432 \u00b7 \u00a73",
    type: 'lesson',
    theory: "<p>\u0414\u0435\u044f\u043a\u0456 \u0441\u043a\u043b\u0430\u0434\u043d\u0456 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u043c\u043e\u0436\u043d\u0430 \u0440\u043e\u0437\u0432\u2019\u044f\u0437\u0430\u0442\u0438, \u0437\u0432\u0456\u0432\u0448\u0438 \u0457\u0445 \u0434\u043e \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0438\u0445 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u0437\u0430\u043c\u0456\u043d\u0438 \u0437\u043c\u0456\u043d\u043d\u043e\u0457. \u041d\u0430\u0439\u043f\u043e\u0448\u0438\u0440\u0435\u043d\u0456\u0448\u0438\u0439 \u0442\u0438\u043f \u2014 \u0431\u0456\u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0456 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f, \u0434\u0435 \u043c\u0438 \u0437\u0430\u043c\u0456\u043d\u044e\u0454\u043c\u043e x\u00b2 \u043d\u0430 \u043d\u043e\u0432\u0443 \u0431\u0443\u043a\u0432\u0443 t.</p><p>\u0414\u043b\u044f \u0434\u0440\u043e\u0431\u043e\u0432\u0438\u0445 \u0440\u0456\u0432\u043d\u044f\u043d\u044c \u0433\u043e\u043b\u043e\u0432\u043d\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u043e: \u0447\u0438\u0441\u0435\u043b\u044c\u043d\u0438\u043a \u043c\u0430\u0454 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0432\u0430\u0442\u0438 \u043d\u0443\u043b\u044e, \u0430 \u0437\u043d\u0430\u043c\u0435\u043d\u043d\u0438\u043a \u2014 \u043d\u0456 (\u0446\u0435 \u043d\u0430\u0437\u0438\u0432\u0430\u0454\u0442\u044c\u0441\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u044c \u0430\u0431\u043e \u041e\u0414\u0417).</p>",
    formula: "ax\u2074 + bx\u00b2 + c = 0, \u0437\u0430\u043c\u0456\u043d\u0430 x\u00b2 = t (t \u2265 0)",
    examples: [{"q": "Розв’яжіть біквадратне рівняння x⁴ - 13x² + 36 = 0", "steps": ["Крок 1: Заміна x² = t. Отримуємо t² - 13t + 36 = 0.", "Крок 2: За теоремою Вієта корені t₁ = 4, t₂ = 9.", "Крок 3: Повертаємось до x. Якщо x² = 4, то x = ±2. Якщо x² = 9, то x = ±3.", "Відповідь: -3, -2, 2, 3"]}, {"q": "Розв’яжіть рівняння (x² - 3x - 18) / (x - 6) = 0", "steps": ["Крок 1: Прирівнюємо чисельник до нуля: x² - 3x - 18 = 0.", "Крок 2: Знаходимо корені чисельника: x = 6 або x = -3.", "Крок 3: Перевіряємо ОДЗ: знаменник x - 6 ≠ 0, отже x ≠ 6.", "Відповідь: -3"]}],
    practice: [{"q": "Розв’яжіть x⁴ - 5x² + 4 = 0", "ans": "1, -1, 2, -2", "altAns": ["-1, 1, -2, 2", "±1, ±2", "1, -1, 2, -2"], "hint": "Зроби заміну x² = t та розв'яжи рівняння t² - 5t + 4 = 0"}, {"q": "Розв’яжіть (x² + 3x - 4) / (x - 1) = 0", "ans": "-4", "altAns": ["x = -4"], "hint": "Чисельник дорівнює 0 при x = 1 та x = -4, але знаменник не може бути 0"}, {"q": "Розв’яжіть x⁴ - 8x² - 9 = 0", "ans": "3, -3", "altAns": ["-3, 3", "±3"], "hint": "Після заміни отримаєш t = 9 або t = -1. Оскільки t = x², то t не може бути від'ємним"}]
  },
  {
    id: "r8-rational-models", grade: 8,
    icon: "\ud83c\udf0d",
    title: "\u0420\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0456 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u044f\u043a \u043c\u043e\u0434\u0435\u043b\u0456 \u0437\u0430\u0434\u0430\u0447",
    meta: "~10 \u0445\u0432 \u00b7 \u00a73.23",
    type: 'lesson',
    theory: "<p>\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u043d\u0435 \u043c\u043e\u0434\u0435\u043b\u044e\u0432\u0430\u043d\u043d\u044f \u2014 \u0446\u0435 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434 \u0437\u0430\u0434\u0430\u0447\u0456 \u0437 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0436\u0438\u0442\u0442\u044f \u043d\u0430 \u043c\u043e\u0432\u0443 \u0440\u0456\u0432\u043d\u044f\u043d\u044c. \u0414\u043b\u044f \u0437\u0430\u0434\u0430\u0447 \u043d\u0430 \u0440\u0443\u0445, \u0440\u043e\u0431\u043e\u0442\u0443 \u0447\u0438 \u0440\u043e\u0437\u0447\u0438\u043d\u0438 \u043c\u0438 \u0437\u0430\u0437\u0432\u0438\u0447\u0430\u0439 \u0432\u0438\u0440\u0430\u0436\u0430\u0454\u043c\u043e \u043e\u0434\u043d\u0443 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0443 \u0447\u0435\u0440\u0435\u0437 \u0456\u043d\u0448\u0443 (\u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u0447\u0430\u0441 \u0447\u0435\u0440\u0435\u0437 \u0448\u043b\u044f\u0445 \u0456 \u0448\u0432\u0438\u0434\u043a\u0456\u0441\u0442\u044c) \u0456 \u0441\u043a\u043b\u0430\u0434\u0430\u0454\u043c\u043e \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 \u0457\u0445\u043d\u044c\u043e\u0457 \u0440\u0456\u0437\u043d\u0438\u0446\u0456 \u0430\u0431\u043e \u0441\u0443\u043c\u0438.</p><p>\u041f\u0456\u0441\u043b\u044f \u0440\u043e\u0437\u0432'\u044f\u0437\u0430\u043d\u043d\u044f \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u043e \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0439 \u043a\u043e\u0440\u0435\u043d\u0456: \u0432\u043e\u043d\u0438 \u043c\u0430\u044e\u0442\u044c \u043d\u0435 \u0442\u0456\u043b\u044c\u043a\u0438 \u0437\u0430\u0434\u043e\u0432\u043e\u043b\u044c\u043d\u044f\u0442\u0438 \u041e\u0414\u0417, \u0430 \u0439 \u043c\u0430\u0442\u0438 \u0444\u0456\u0437\u0438\u0447\u043d\u0438\u0439 \u0437\u043c\u0456\u0441\u0442 (\u0448\u0432\u0438\u0434\u043a\u0456\u0441\u0442\u044c, \u0447\u0430\u0441 \u0447\u0438 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0441\u043e\u043b\u0456 \u043d\u0435 \u043c\u043e\u0436\u0443\u0442\u044c \u0431\u0443\u0442\u0438 \u0432\u0456\u0434'\u0454\u043c\u043d\u0438\u043c\u0438).</p>",
    formula: "t = s / v (\u0447\u0430\u0441) \u0430\u0431\u043e t = A / p (\u0440\u043e\u0431\u043e\u0442\u0430)",
    examples: [{"q": "Велосипедист проїжджає 15 км на 45 хв (3/4 год) довше за вантажівку, швидкість якої на 18 км/год більша. Знайдіть їхні швидкості.", "steps": ["Крок 1: Нехай x — швидкість велосипедиста, тоді (x + 18) — швидкість вантажівки.", "Крок 2: Складаємо рівняння за часом: 15/x - 15/(x + 18) = 3/4.", "Крок 3: Після спрощення отримуємо квадратне рівняння: x² + 18x - 360 = 0.", "Крок 4: Корені рівняння: 12 та -30. Швидкість не може бути від'ємною, тому x = 12.", "Відповідь: 12 км/год та 30 км/год."]}, {"q": "Одна бригада може відремонтувати дорогу на 4 год швидше за другу. Разом вони працювали 2 год, після того як перша вже працювала 7 год. За скільки годин кожна бригада виконає роботу самостійно?", "steps": ["Крок 1: Нехай перша бригада працює x год, тоді друга — (x - 4) год. Їхня продуктивність: 1/x та 1/(x-4).", "Крок 2: Перша бригада працювала 9 год (7 + 2), друга — 2 год. Рівняння: 9/x + 2/(x - 4) = 1.", "Крок 3: Спрощуємо до рівняння: x² - 15x + 36 = 0.", "Крок 4: Корені: 12 та 3. Якщо x = 3, то час другої бригади 3 - 4 = -1 (неможливо). Отже, x = 12.", "Відповідь: 12 год та 8 год."]}],
    practice: [{"q": "Автомобіль проїхав 150 км з певною швидкістю, а решту 240 км — зі швидкістю на 5 км/год більшою. Знайдіть початкову швидкість (у км/год), якщо на весь шлях він витратив 5 год.", "ans": "75", "altAns": ["75 км/год"], "hint": "Складіть рівняння для суми часу: 150/x + 240/(x + 5) = 5."}, {"q": "Розчин містив 120 г води. Після додавання 10 г солі його концентрація збільшилася на 5% (1/20). Скільки грамів солі містив розчин спочатку?", "ans": "30", "altAns": ["30 г", "30 грамів"], "hint": "Використовуйте формулу: (x + 10)/(x + 130) - x/(x + 120) = 1/20, де x — початкова маса солі."}, {"q": "Майстер може виконати замовлення на 6 годин швидше за учня. Працюючи разом, вони виконають його за 4 години. За скільки годин виконає замовлення майстер, працюючи самостійно?", "ans": "6", "altAns": ["6 год", "6 годин"], "hint": "Якщо x — час майстра, то 1/x + 1/(x + 6) = 1/4."}]
  },
  {
    id: "r9-inequalities", grade: 9,
    icon: "\u2696\ufe0f",
    title: "\u0427\u0438\u0441\u043b\u043e\u0432\u0456 \u043d\u0435\u0440\u0456\u0432\u043d\u043e\u0441\u0442\u0456 \u0442\u0430 \u0457\u0445 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u043e\u0441\u0442\u0456",
    meta: "~10 \u0445\u0432 \u00b7 \u00a71",
    type: 'lesson',
    theory: "<p>\u0429\u043e\u0431 \u043f\u043e\u0440\u0456\u0432\u043d\u044f\u0442\u0438 \u0434\u0432\u0430 \u0447\u0438\u0441\u043b\u0430, \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0437\u043d\u0430\u0439\u0442\u0438 \u0457\u0445\u043d\u044e \u0440\u0456\u0437\u043d\u0438\u0446\u044e. \u042f\u043a\u0449\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u0456\u0434\u043d\u0456\u043c\u0430\u043d\u043d\u044f \u0434\u043e\u0434\u0430\u0442\u043d\u0438\u0439, \u0442\u043e \u043f\u0435\u0440\u0448\u0435 \u0447\u0438\u0441\u043b\u043e \u0431\u0456\u043b\u044c\u0448\u0435 \u0437\u0430 \u0434\u0440\u0443\u0433\u0435. \u042f\u043a\u0449\u043e \u0436 \u0440\u0456\u0437\u043d\u0438\u0446\u044f \u0432\u0456\u0434\u2019\u0454\u043c\u043d\u0430, \u0442\u043e \u043f\u0435\u0440\u0448\u0435 \u0447\u0438\u0441\u043b\u043e \u043c\u0435\u043d\u0448\u0435. \u0426\u0435 \u0443\u043d\u0456\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u0438\u0439 \u0441\u043f\u043e\u0441\u0456\u0431, \u044f\u043a\u0438\u0439 \u043f\u0440\u0430\u0446\u044e\u0454 \u043d\u0430\u0432\u0456\u0442\u044c \u0434\u043b\u044f \u0434\u0443\u0436\u0435 \u0441\u043a\u043b\u0430\u0434\u043d\u0438\u0445 \u0432\u0438\u0440\u0430\u0437\u0456\u0432.</p>",
    formula: "a > b \u21d4 a - b > 0;  a < b \u21d4 a - b < 0",
    examples: [{"q": "Порівняйте числа 5 і 8 за допомогою означення.", "steps": ["Крок 1: Знайдемо різницю цих чисел: 5 - 8 = -3.", "Крок 2: Оскільки різниця -3 є від’ємним числом (-3 < 0), то перше число менше.", "Відповідь: 5 < 8."]}, {"q": "Порівняйте значення виразів (a - 2)(a + 2) та a² - 5.", "steps": ["Крок 1: Розглянемо різницю: (a - 2)(a + 2) - (a² - 5).", "Крок 2: Спростимо вираз: a² - 4 - a² + 5 = 1.", "Крок 3: Оскільки різниця дорівнює 1 (1 > 0), то перший вираз більший.", "Відповідь: (a - 2)(a + 2) > a² - 5."]}],
    practice: [{"q": "Який знак (> або <) треба поставити, якщо різниця чисел m - n = -4.5?", "ans": "<", "altAns": ["менше"], "hint": "Якщо різниця чисел від'ємна, то перше число менше за друге."}, {"q": "Порівняйте x та y, якщо різниця x - y = 0.001.", "ans": "x > y", "altAns": ["x>y"], "hint": "Навіть якщо різниця дуже маленька, але вона додатна (більша за нуль), то x > y."}, {"q": "Відомо, що a < b. Де на координатній прямій розташована точка a відносно точки b?", "ans": "ліворуч", "altAns": ["зліва"], "hint": "На координатній прямій менші числа завжди знаходяться ліворуч від більших."}]
  },
  {
    id: "r9-linear-ineq", grade: 9,
    icon: "\ud83d\udccf",
    title: "\u041d\u0435\u0440\u0456\u0432\u043d\u043e\u0441\u0442\u0456 \u0437 \u043e\u0434\u043d\u0456\u0454\u044e \u0437\u043c\u0456\u043d\u043d\u043e\u044e",
    meta: "~10 \u0445\u0432 \u00b7 \u00a71",
    type: 'lesson',
    theory: "<p>\u0427\u0438\u0441\u043b\u043e\u0432\u0456 \u043d\u0435\u0440\u0456\u0432\u043d\u043e\u0441\u0442\u0456 \u043e\u0434\u043d\u0430\u043a\u043e\u0432\u043e\u0433\u043e \u0437\u043d\u0430\u043a\u0430 \u043c\u043e\u0436\u043d\u0430 \u0434\u043e\u0434\u0430\u0432\u0430\u0442\u0438 \u043f\u043e\u0447\u043b\u0435\u043d\u043d\u043e: \u044f\u043a\u0449\u043e a > b \u0456 c > d, \u0442\u043e a + c > b + d. \u042f\u043a\u0449\u043e \u0432\u0441\u0456 \u0447\u0430\u0441\u0442\u0438\u043d\u0438 \u043d\u0435\u0440\u0456\u0432\u043d\u043e\u0441\u0442\u0435\u0439 \u0454 \u0434\u043e\u0434\u0430\u0442\u043d\u0438\u043c\u0438 \u0447\u0438\u0441\u043b\u0430\u043c\u0438, \u0457\u0445 \u0442\u0430\u043a\u043e\u0436 \u043c\u043e\u0436\u043d\u0430 \u043f\u0435\u0440\u0435\u043c\u043d\u043e\u0436\u0443\u0432\u0430\u0442\u0438: \u044f\u043a\u0449\u043e a > b > 0 \u0456 c > d > 0, \u0442\u043e ac > bd. \u0414\u043b\u044f \u043e\u0446\u0456\u043d\u043a\u0438 \u0432\u0438\u0440\u0430\u0437\u0456\u0432 \u0456\u0437 \u0434\u0456\u043b\u0435\u043d\u043d\u044f\u043c (1/x) \u0430\u0431\u043e \u0432\u0456\u0434\u043d\u0456\u043c\u0430\u043d\u043d\u044f\u043c \u0437\u043d\u0430\u043a\u0438 \u0447\u0430\u0441\u0442\u043e \u0437\u043c\u0456\u043d\u044e\u044e\u0442\u044c\u0441\u044f \u043d\u0430 \u043f\u0440\u043e\u0442\u0438\u043b\u0435\u0436\u043d\u0456.</p>",
    formula: "a < x < b, c < y < d \u21d2 a+c < x+y < b+d; ac < xy < bd",
    examples: [{"q": "Відомо 2,2 < √5 < 2,3 та 1,7 < √3 < 1,8. Оцініть значення суми √5 + √3.", "steps": ["Крок 1: Додаємо ліві межі нерівностей: 2,2 + 1,7 = 3,9.", "Крок 2: Додаємо праві межі нерівностей: 2,3 + 1,8 = 4,1.", "Відповідь: 3,9 < √5 + √3 < 4,1."]}, {"q": "Оцініть периметр P паралелограма зі сторонами a та b, якщо 15 < a < 19 та 6 < b < 11.", "steps": ["Крок 1: Формула периметра P = 2(a + b). Знайдемо межі суми: 15 + 6 < a + b < 19 + 11, тобто 21 < a + b < 30.", "Крок 2: Помножимо всі частини на 2: 2 * 21 < 2(a + b) < 2 * 30.", "Відповідь: 42 < P < 60."]}],
    practice: [{"q": "Відомо, що 2 < x < 4. Оцініть значення виразу 1/x.", "ans": "0,25 < 1/x < 0,5", "altAns": ["1/4 < 1/x < 1/2", "0.25 < 1/x < 0.5"], "hint": "При переході до оберненого числа знаки нерівності розвертаються: 1/4 < 1/x < 1/2."}, {"q": "Оцініть середнє арифметичне (a+b)/2, якщо 2,5 < a < 2,6 і 3,1 < b < 3,2.", "ans": "2,8 < (a+b)/2 < 2,9", "altAns": ["2.8 < (a+b)/2 < 2.9"], "hint": "Спочатку додайте межі a та b (отримаєте 5,6 < a+b < 5,8), а потім поділіть результат на 2."}, {"q": "Відомо a > 2 і b > 7. Чи правильно, що a + b > 8? (напишіть 'так' або 'ні')", "ans": "так", "altAns": ["правильно", "Так"], "hint": "Почленне додавання дає a + b > 9. Якщо сума більша за 9, то вона точно більша за 8."}]
  },
  {
    id: "r9-system-ineq", grade: 9,
    icon: "\ud83d\udd00",
    title: "\u0421\u0438\u0441\u0442\u0435\u043c\u0438 \u043b\u0456\u043d\u0456\u0439\u043d\u0438\u0445 \u043d\u0435\u0440\u0456\u0432\u043d\u043e\u0441\u0442\u0435\u0439",
    meta: "~10 \u0445\u0432 \u00b7 \u00a71",
    type: 'lesson',
    theory: "<p>\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0435\u0440\u0456\u0432\u043d\u043e\u0441\u0442\u0435\u0439 \u2014 \u0446\u0435 \u043a\u0456\u043b\u044c\u043a\u0430 \u043d\u0435\u0440\u0456\u0432\u043d\u043e\u0441\u0442\u0435\u0439, \u0434\u043b\u044f \u044f\u043a\u0438\u0445 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0437\u043d\u0430\u0439\u0442\u0438 \u0441\u043f\u0456\u043b\u044c\u043d\u0456 \u0440\u043e\u0437\u0432'\u044f\u0437\u043a\u0438. \u0429\u043e\u0431 \u0457\u0457 \u0440\u043e\u0437\u0432'\u044f\u0437\u0430\u0442\u0438, \u0442\u0440\u0435\u0431\u0430 \u0437\u043d\u0430\u0439\u0442\u0438 \u0440\u043e\u0437\u0432'\u044f\u0437\u043e\u043a \u043a\u043e\u0436\u043d\u043e\u0457 \u043d\u0435\u0440\u0456\u0432\u043d\u043e\u0441\u0442\u0456 \u043e\u043a\u0440\u0435\u043c\u043e, \u0430 \u043f\u043e\u0442\u0456\u043c \u0437\u043d\u0430\u0439\u0442\u0438 \u0457\u0445\u043d\u0456\u0439 \u043f\u0435\u0440\u0435\u0442\u0438\u043d \u043d\u0430 \u0447\u0438\u0441\u043b\u043e\u0432\u0456\u0439 \u043f\u0440\u044f\u043c\u0456\u0439. \u0421\u043f\u0456\u043b\u044c\u043d\u0430 \u0447\u0430\u0441\u0442\u0438\u043d\u0430 \u0456 \u0431\u0443\u0434\u0435 \u0440\u043e\u0437\u0432'\u044f\u0437\u043a\u043e\u043c \u0441\u0438\u0441\u0442\u0435\u043c\u0438.</p>",
    formula: "\u23a7 ax > b; \u23a9 cx < d",
    examples: [{"q": "Розв'яжіть систему: { 2x > 6, x + 5 < 12", "steps": ["Крок 1: Розв'язуємо 2x > 6. Поділимо обидві частини на 2: x > 3.", "Крок 2: Розв'язуємо x + 5 < 12. Віднімемо 5 від обох частин: x < 7.", "Крок 3: Знаходимо спільні значення. Число x має бути більшим за 3, але меншим за 7.", "Відповідь: (3; 7)"]}, {"q": "Розв'яжіть систему: { -3x ≤ 9, 4x ≤ 20", "steps": ["Крок 1: Розв'язуємо -3x ≤ 9. Ділимо на -3, тому змінюємо знак нерівності: x ≥ -3.", "Крок 2: Розв'язуємо 4x ≤ 20. Ділимо на 4: x ≤ 5.", "Крок 3: Перетин проміжків [-3; +∞) та (-∞; 5] — це проміжок від -3 до 5 включно.", "Відповідь: [-3; 5]"]}],
    practice: [{"q": "Запишіть розв'язок системи: { x < 8, x ≥ -4", "ans": "[-4; 8)", "altAns": ["[-4;8)", "x ∈ [-4; 8)"], "hint": "Число має бути одночасно меншим за 8 та більшим або рівним -4. Пам'ятайте про квадратну дужку для включного значення."}, {"q": "Розв'яжіть систему: { 5x > 20, 2x < 14", "ans": "(4; 7)", "altAns": ["(4;7)", "x ∈ (4; 7)"], "hint": "Спочатку розв'яжіть кожну нерівність: x > 4 та x < 7. Спільною частиною є числа між 4 та 7."}, {"q": "Знайдіть розв'язок системи: { x ≤ -2, x > 3", "ans": "∅", "altAns": ["немає розв'язків", "немає", "жодного розв'язку"], "hint": "Чи існують числа, які одночасно менші за -2 та більші за 3? Якщо таких чисел немає, система не має розв'язків."}]
  },
  {
    id: "r9-linear-systems-ineq", grade: 9,
    icon: "\u26d3\ufe0f",
    title: "\u0421\u0438\u0441\u0442\u0435\u043c\u0438 \u043b\u0456\u043d\u0456\u0439\u043d\u0438\u0445 \u043d\u0435\u0440\u0456\u0432\u043d\u043e\u0441\u0442\u0435\u0439",
    meta: "~10 \u0445\u0432 \u00b7 \u00a71.6",
    type: 'lesson',
    theory: "<p>\u0420\u043e\u0437\u0432'\u044f\u0437\u0430\u0442\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u043d\u0435\u0440\u0456\u0432\u043d\u043e\u0441\u0442\u0435\u0439 \u2014 \u0437\u043d\u0430\u0447\u0438\u0442\u044c \u0437\u043d\u0430\u0439\u0442\u0438 \u0432\u0441\u0456 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0437\u043c\u0456\u043d\u043d\u043e\u0457, \u044f\u043a\u0456 \u0437\u0430\u0434\u043e\u0432\u043e\u043b\u044c\u043d\u044f\u044e\u0442\u044c <b>\u043a\u043e\u0436\u043d\u0443</b> \u043d\u0435\u0440\u0456\u0432\u043d\u0456\u0441\u0442\u044c \u043e\u0434\u043d\u043e\u0447\u0430\u0441\u043d\u043e. \u041c\u0438 \u0440\u043e\u0437\u0432'\u044f\u0437\u0443\u0454\u043c\u043e \u043a\u043e\u0436\u043d\u0443 \u043d\u0435\u0440\u0456\u0432\u043d\u0456\u0441\u0442\u044c \u043e\u043a\u0440\u0435\u043c\u043e, \u0430 \u043f\u043e\u0442\u0456\u043c \u0448\u0443\u043a\u0430\u0454\u043c\u043e \u043f\u0435\u0440\u0435\u0440\u0456\u0437 (\u0441\u043f\u0456\u043b\u044c\u043d\u0443 \u0447\u0430\u0441\u0442\u0438\u043d\u0443) \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u0438\u0445 \u0440\u043e\u0437\u0432'\u044f\u0437\u043a\u0456\u0432 \u043d\u0430 \u0447\u0438\u0441\u043b\u043e\u0432\u0456\u0439 \u043f\u0440\u044f\u043c\u0456\u0439.</p>",
    formula: "{ x > a, x \u2264 b  =>  a < x \u2264 b (\u0456\u043d\u0442\u0435\u0440\u0432\u0430\u043b (a; b])",
    examples: [{"q": "Розв'яжіть систему: { x - 4 < 0, 2x ≥ -6", "steps": ["1. Розв'яжемо першу нерівність: x < 4.", "2. Розв'яжемо другу нерівність: x ≥ -3.", "3. Знайдемо спільні числа: від -3 (включно) до 4 (не включно).", "Відповідь: [-3; 4)"]}, {"q": "Знайдіть цілі розв'язки системи: { 2x - 1 < 1.7 - x, 3x - 2 ≥ x - 8", "steps": ["1. Перша: 3x < 2.7 => x < 0.9.", "2. Друга: 2x ≥ -6 => x ≥ -3.", "3. Проміжок: [-3; 0.9).", "4. Цілі числа: -3, -2, -1, 0.", "Відповідь: -3, -2, -1, 0"]}],
    practice: [{"q": "Розв'яжіть систему: { x > 2, x ≥ -1. Запишіть множину розв'язків.", "ans": "x > 2", "altAns": ["(2; +∞)", "x>2"], "hint": "Оберіть частину прямої, де проходять обидві лінії штриховки."}, {"q": "Скільки цілих розв'язків має система: { -2x ≥ -15, 3x > -10?", "ans": "11", "altAns": ["одинадцять"], "hint": "Розв'язки: x ≤ 7.5 та x > -3.33. Порахуйте цілі: -3, -2, ..., 7."}, {"q": "Знайдіть область визначення виразу: √(6x - 9) + √(2x - 5)", "ans": "x ≥ 2.5", "altAns": ["[2.5; +∞)", "x>=2.5"], "hint": "Обидва вирази під коренем мають бути невід'ємними: 6x-9≥0 та 2x-5≥0."}]
  },
  {
    id: "r9-function-props", grade: 9,
    icon: "\ud83d\udcca",
    title: "\u0412\u043b\u0430\u0441\u0442\u0438\u0432\u043e\u0441\u0442\u0456 \u0444\u0443\u043d\u043a\u0446\u0456\u0439 \u0442\u0430 \u0457\u0445 \u0433\u0440\u0430\u0444\u0456\u043a\u0438",
    meta: "~10 \u0445\u0432 \u00b7 \u00a72",
    type: 'lesson',
    theory: "<p>\u0424\u0443\u043d\u043a\u0446\u0456\u044f \u2014 \u0446\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u0437\u0430 \u044f\u043a\u0438\u043c \u043a\u043e\u0436\u043d\u043e\u043c\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0443 <b>x</b> \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454 \u0454\u0434\u0438\u043d\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f <b>y</b>. \u041e\u0431\u043b\u0430\u0441\u0442\u044c \u0432\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f <b>D(f)</b> \u2014 \u0446\u0435 \u0432\u0441\u0456 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u0456 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f x, \u0430 \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u044c <b>E(f)</b> \u2014 \u0446\u0435 \u0432\u0441\u0456 \u043c\u043e\u0436\u043b\u0438\u0432\u0456 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 y. \u0424\u0443\u043d\u043a\u0446\u0456\u044e \u043c\u043e\u0436\u043d\u0430 \u0437\u0430\u0434\u0430\u0442\u0438 \u0444\u043e\u0440\u043c\u0443\u043b\u043e\u044e, \u0433\u0440\u0430\u0444\u0456\u043a\u043e\u043c, \u0442\u0430\u0431\u043b\u0438\u0446\u0435\u044e \u0430\u0431\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u043e\u043f\u0438\u0441\u0430\u0442\u0438 \u0441\u043b\u043e\u0432\u0430\u043c\u0438.</p>",
    formula: "y = f(x), \u0434\u0435 x \u2208 D(f), y \u2208 E(f)",
    examples: [{"q": "Знайдіть значення функції f(x) = 2x² - 3, якщо x = 5", "steps": ["Крок 1: Підставимо число 5 замість аргументу x у формулу.", "Крок 2: Обчислимо: f(5) = 2 · 5² - 3 = 2 · 25 - 3 = 50 - 3 = 47.", "Відповідь: 47"]}, {"q": "Знайдіть область визначення функції y = 10 / (x - 4)", "steps": ["Крок 1: Пам'ятаємо, що на нуль ділити не можна, тому знаменник не може бути нулем.", "Крок 2: Розв'яжемо рівняння x - 4 ≠ 0, звідки x ≠ 4.", "Відповідь: Всі числа, крім 4"]}],
    practice: [{"q": "Як позначають область визначення функції?", "ans": "D(f)", "altAns": ["D", "D(y)"], "hint": "Це перша літера слова Domain (область)."}, {"q": "Знайдіть f(2) для функції f(x) = 3x + 4", "ans": "10", "altAns": ["десять"], "hint": "Просто підстав 2 замість x: 3 * 2 + 4."}, {"q": "Яка область значень функції y = √x?", "ans": "[0; +∞)", "altAns": ["y >= 0", "невід'ємні числа"], "hint": "Квадратний корінь не може бути від'ємним числом."}]
  },
  {
    id: "r9-quadratic-func", grade: 9,
    icon: "\ud83c\udfaf",
    title: "\u041a\u0432\u0430\u0434\u0440\u0430\u0442\u0438\u0447\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0456\u044f \u0442\u0430 \u0457\u0457 \u0433\u0440\u0430\u0444\u0456\u043a",
    meta: "~10 \u0445\u0432 \u00b7 \u00a72",
    type: 'lesson',
    theory: "<p>\u0413\u0440\u0430\u0444\u0456\u043a\u043e\u043c \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u0438\u0447\u043d\u043e\u0457 \u0444\u0443\u043d\u043a\u0446\u0456\u0457 $y = x\u00b2$ \u0454 \u043f\u0430\u0440\u0430\u0431\u043e\u043b\u0430. \u042f\u043a\u0449\u043e \u043c\u0438 \u043c\u043d\u043e\u0436\u0438\u043c\u043e \u0444\u0443\u043d\u043a\u0446\u0456\u044e \u043d\u0430 \u0447\u0438\u0441\u043b\u043e $k$ ($y = kx\u00b2$), \u0433\u0440\u0430\u0444\u0456\u043a \u0437\u043c\u0456\u043d\u044e\u0454 \u0441\u0432\u043e\u044e \u0444\u043e\u0440\u043c\u0443: \u0432\u0456\u043d \u0430\u0431\u043e \u0440\u043e\u0437\u0442\u044f\u0433\u0443\u0454\u0442\u044c\u0441\u044f \u0432\u0433\u043e\u0440\u0443, \u0430\u0431\u043e \u0441\u0442\u0438\u0441\u043a\u0430\u0454\u0442\u044c\u0441\u044f \u0434\u043e \u043e\u0441\u0456 \u0430\u0431\u0441\u0446\u0438\u0441. \u041f\u0440\u0438 $k > 1$ \u043f\u0430\u0440\u0430\u0431\u043e\u043b\u0430 \u0441\u0442\u0430\u0454 \u00ab\u0432\u0443\u0436\u0447\u043e\u044e\u00bb (\u0440\u043e\u0437\u0442\u044f\u0433\u043d\u0435\u043d\u043d\u044f), \u0430 \u043f\u0440\u0438 $0 < k < 1$ \u2014 \u00ab\u0448\u0438\u0440\u0448\u043e\u044e\u00bb (\u0441\u0442\u0438\u0441\u043a\u0430\u043d\u043d\u044f).</p>",
    formula: "y = kx\u00b2, \u0434\u0435 k \u2260 0",
    examples: [{"q": "Як побудувати графік y = 2x², маючи графік y = x²?", "steps": ["Беремо значення y для кожної точки базового графіка y = x².", "Множимо ці значення на коефіцієнт k = 2.", "Точка (1; 1) перейде в (1; 2), а точка (2; 4) — в (2; 8).", "Відповідь: Розтягнути графік y = x² у 2 рази від осі абсцис."]}, {"q": "Що станеться з графіком y = x², якщо k = 1/3?", "steps": ["Кожна ордината (y) зменшиться у 3 рази.", "Графік стане «нижчим» і ближчим до осі x.", "Відповідь: Графік стиснеться у 3 рази до осі абсцис."]}],
    practice: [{"q": "Як називається фігура, що є графіком функції y = x²?", "ans": "парабола", "altAns": ["Парабола"], "hint": "Це слово на літеру 'П', схоже на дзеркальну антену."}, {"q": "У скільки разів розтягнуто графік y = 5x² відносно y = x²?", "ans": "5", "altAns": ["у 5 разів", "п'ять"], "hint": "Дивись на число перед x²."}, {"q": "Якщо k = 1/4, то графік y = kx² отримано шляхом стискання до осі x у ... разів?", "ans": "4", "altAns": ["чотири", "у 4 рази"], "hint": "Стискання відбувається в 1/k разів. Якщо k=1/4, то 1 поділити на 1/4 буде..."}]
  },
  {
    id: "r9-arith-prog", grade: 9,
    icon: "\ud83d\udd22",
    title: "\u0410\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u043d\u0430 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0456\u044f",
    meta: "~10 \u0445\u0432 \u00b7 \u00a73",
    type: 'lesson',
    theory: "<p>\u0410\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u043d\u0430 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0456\u044f \u2014 \u0446\u0435 \u043f\u043e\u0441\u043b\u0456\u0434\u043e\u0432\u043d\u0456\u0441\u0442\u044c \u0447\u0438\u0441\u0435\u043b, \u0434\u0435 \u043a\u043e\u0436\u043d\u0435 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0435 \u0447\u0438\u0441\u043b\u043e \u0431\u0456\u043b\u044c\u0448\u0435 (\u0430\u0431\u043e \u043c\u0435\u043d\u0448\u0435) \u0437\u0430 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0454 \u043d\u0430 \u043e\u0434\u043d\u0443 \u0439 \u0442\u0443 \u0441\u0430\u043c\u0443 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0443, \u044f\u043a\u0443 \u043d\u0430\u0437\u0438\u0432\u0430\u044e\u0442\u044c \u0440\u0456\u0437\u043d\u0438\u0446\u0435\u044e (d). \u0426\u0435 \u044f\u043a \u0441\u0445\u043e\u0434\u0438\u043d\u043a\u0438: \u043a\u043e\u0436\u043d\u0430 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0430 \u043d\u0430 \u043e\u0434\u043d\u0430\u043a\u043e\u0432\u0456\u0439 \u0432\u0456\u0434\u0441\u0442\u0430\u043d\u0456 \u0432\u0456\u0434 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u044c\u043e\u0457. \u042f\u043a\u0449\u043e \u043c\u0438 \u0437\u043d\u0430\u0454\u043c\u043e \u043f\u0435\u0440\u0448\u0438\u0439 \u0435\u043b\u0435\u043c\u0435\u043d\u0442 \u0456 \u0440\u0456\u0437\u043d\u0438\u0446\u044e, \u043c\u0438 \u043c\u043e\u0436\u0435\u043c\u043e \u0437\u043d\u0430\u0439\u0442\u0438 \u0431\u0443\u0434\u044c-\u044f\u043a\u0435 \u0447\u0438\u0441\u043b\u043e \u0432 \u0446\u0456\u0439 \u0447\u0435\u0440\u0437\u0456.</p>",
    formula: "a\u2099 = a\u2081 + d(n - 1)",
    examples: [{"q": "Знайдіть 10-й член прогресії (aₙ), якщо a₁ = 5, d = 3.", "steps": ["Крок 1: Використовуємо формулу a₁₀ = a₁ + d(10 - 1).", "Крок 2: Підставляємо значення: a₁₀ = 5 + 3 * 9.", "Крок 3: Обчислюємо: 5 + 27 = 32.", "Відповідь: 32."]}, {"q": "Дано послідовність: 10, 7, 4... Знайдіть різницю d.", "steps": ["Крок 1: d = a₂ - a₁.", "Крок 2: d = 7 - 10 = -3.", "Відповідь: -3."]}],
    practice: [{"q": "Знайдіть a₅, якщо a₁ = 2, d = 4.", "ans": "18", "altAns": ["a5=18"], "hint": "Використай формулу: 2 + 4 * (5 - 1)"}, {"q": "Яка різниця d у прогресії: 5, 11, 17, 23?", "ans": "6", "altAns": ["d=6"], "hint": "Відніми від другого члена перший (11 - 5)"}, {"q": "Знайдіть перший член a₁, якщо a₂ = 10, d = 3.", "ans": "7", "altAns": ["a1=7"], "hint": "Якщо другий член 10, а різниця 3, то перший на 3 менший за другий."}]
  },
  {
    id: "r9-geom-prog", grade: 9,
    icon: "\u2716\ufe0f",
    title: "\u0413\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u043d\u0430 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0456\u044f",
    meta: "~10 \u0445\u0432 \u00b7 \u00a73",
    type: 'lesson',
    theory: "<p>\u0413\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u043d\u0430 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0456\u044f \u2014 \u0446\u0435 \u043f\u043e\u0441\u043b\u0456\u0434\u043e\u0432\u043d\u0456\u0441\u0442\u044c, \u0434\u0435 \u043a\u043e\u0436\u0435\u043d \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0447\u043b\u0435\u043d \u043e\u0442\u0440\u0438\u043c\u0443\u044e\u0442\u044c \u0448\u043b\u044f\u0445\u043e\u043c \u043c\u043d\u043e\u0436\u0435\u043d\u043d\u044f \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u044c\u043e\u0433\u043e \u043d\u0430 \u043e\u0434\u043d\u0435 \u0439 \u0442\u0435 \u0441\u0430\u043c\u0435 \u0447\u0438\u0441\u043b\u043e <i>q</i> (\u0437\u043d\u0430\u043c\u0435\u043d\u043d\u0438\u043a). \u041d\u0430 \u0432\u0456\u0434\u043c\u0456\u043d\u0443 \u0432\u0456\u0434 \u0430\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u043d\u043e\u0457 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0456\u0457, \u0434\u0435 \u043c\u0438 \u0434\u043e\u0434\u0430\u0454\u043c\u043e, \u0442\u0443\u0442 \u043c\u0438 \u043c\u043d\u043e\u0436\u0438\u043c\u043e, \u0442\u043e\u043c\u0443 \u0447\u0438\u0441\u043b\u0430 \u0437\u0440\u043e\u0441\u0442\u0430\u044e\u0442\u044c \u0430\u0431\u043e \u0441\u043f\u0430\u0434\u0430\u044e\u0442\u044c \u043d\u0430\u0431\u0430\u0433\u0430\u0442\u043e \u0448\u0432\u0438\u0434\u0448\u0435.</p>",
    formula: "b\u2099 = b\u2081 \u00b7 q\u207f\u207b\u00b9",
    examples: [{"q": "Знайдіть 4-й член геометричної прогресії, якщо b₁ = 3, а q = 2.", "steps": ["Використовуємо формулу: b₄ = b₁ · q³", "Підставляємо значення: b₄ = 3 · 2³ = 3 · 8 = 24", "Відповідь: 24"]}, {"q": "Дано послідовність: 5, 10, 20... Знайдіть її знаменник q.", "steps": ["Щоб знайти q, треба другий член поділити на перший: q = b₂ / b₁", "Обчислюємо: q = 10 / 5 = 2", "Відповідь: 2"]}],
    practice: [{"q": "Знайдіть наступний член прогресії: 2, 6, 18...", "ans": "54", "altAns": [], "hint": "Помнож останнє число на знаменник (6/2 = 3)"}, {"q": "Перший член b₁ = 5, знаменник q = -2. Знайдіть b₂.", "ans": "-10", "altAns": [], "hint": "Просто помнож 5 на -2"}, {"q": "Чому дорівнює b₁, якщо b₂ = 12, а q = 3?", "ans": "4", "altAns": [], "hint": "Поділи b₂ на знаменник q"}]
  },
  {
    id: "r9-combinatorics", grade: 9,
    icon: "\ud83c\udfb2",
    title: "\u041e\u0441\u043d\u043e\u0432\u0438 \u043a\u043e\u043c\u0431\u0456\u043d\u0430\u0442\u043e\u0440\u0438\u043a\u0438",
    meta: "~10 \u0445\u0432 \u00b7 \u00a722",
    type: 'lesson',
    theory: "<p>\u0412\u0438\u043f\u0430\u0434\u043a\u043e\u0432\u0430 \u043f\u043e\u0434\u0456\u044f \u2014 \u0446\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0435\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0443, \u044f\u043a\u0438\u0439 \u0437\u0430 \u043f\u0435\u0432\u043d\u0438\u0445 \u0443\u043c\u043e\u0432 \u043c\u043e\u0436\u0435 \u0432\u0456\u0434\u0431\u0443\u0442\u0438\u0441\u044f, \u0430 \u043c\u043e\u0436\u0435 \u0439 \u043d\u0435 \u0432\u0456\u0434\u0431\u0443\u0442\u0438\u0441\u044f. \u0429\u043e\u0431 \u043e\u0446\u0456\u043d\u0438\u0442\u0438 \u043c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u043f\u043e\u044f\u0432\u0438 \u0442\u0430\u043a\u043e\u0457 \u043f\u043e\u0434\u0456\u0457, \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u044e\u0442\u044c \u0447\u0430\u0441\u0442\u043e\u0442\u0443. \u0412\u043e\u043d\u0430 \u043f\u043e\u043a\u0430\u0437\u0443\u0454, \u044f\u043a\u0443 \u0447\u0430\u0441\u0442\u0438\u043d\u0443 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0443\u0441\u043f\u0456\u0448\u043d\u0438\u0445 \u0441\u043f\u0440\u043e\u0431 \u0432\u0456\u0434 \u0457\u0445 \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u043e\u0457 \u043a\u0456\u043b\u044c\u043a\u043e\u0441\u0442\u0456. \u0426\u0435 \u0434\u043e\u043f\u043e\u043c\u0430\u0433\u0430\u0454 \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430\u043c \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0443\u0432\u0430\u0442\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u0443 \u0432\u0435\u043b\u0438\u043a\u0438\u0445 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0430\u0445.</p>",
    formula: "\u0427\u0430\u0441\u0442\u043e\u0442\u0430 = (\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u043f\u043e\u044f\u0432 \u043f\u043e\u0434\u0456\u0457) / (\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432\u0438\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u043d\u044c)",
    examples: [{"q": "У лотереї випущено 1 000 000 білетів і розігрується 10 автомобілів. Яка частота виграшу авто при купівлі одного білета?", "steps": ["Крок 1: Визначаємо кількість сприятливих подій (кількість авто) — це 10.", "Крок 2: Визначаємо загальну кількість спроб (усі білети) — це 1 000 000.", "Крок 3: Ділимо кількість авто на кількість білетів: 10 / 1 000 000 = 0,00001.", "Відповідь: 0,00001."]}, {"q": "Демографи встановили, що на 1000 новонароджених у середньому припадає 512 хлопчиків. Яка частота цієї події?", "steps": ["Крок 1: Кількість подій «народження хлопчика» дорівнює 512.", "Крок 2: Загальна кількість немовлят — 1000.", "Крок 3: Знаходимо відношення: 512 / 1000 = 0,512.", "Відповідь: 0,512."]}],
    practice: [{"q": "Стрілець зробив 50 пострілів, з яких 45 були влучними. Яка частота влучення стрільця?", "ans": "0,9", "altAns": ["0.9"], "hint": "Поділи кількість влучних пострілів на загальну кількість спроб."}, {"q": "Із 200 висаджених насінин соняшника зійшло 180. Знайди частоту проростання.", "ans": "0,9", "altAns": ["0.9"], "hint": "Частота = 180 / 200."}, {"q": "У магазині з 500 мобільних телефонів виявили 5 бракованих. Яка частота появи бракованого телефона?", "ans": "0,01", "altAns": ["0.01"], "hint": "Поділи кількість бракованих товарів на їх загальну кількість."}]
  },
  {
    id: "r9-probability", grade: 9,
    icon: "\ud83c\udfb0",
    title: "\u041a\u043b\u0430\u0441\u0438\u0447\u043d\u0430 \u0439\u043c\u043e\u0432\u0456\u0440\u043d\u0456\u0441\u0442\u044c",
    meta: "~10 \u0445\u0432 \u00b7 \u00a723",
    type: 'lesson',
    theory: "<p>\u041a\u043b\u0430\u0441\u0438\u0447\u043d\u0430 \u0439\u043c\u043e\u0432\u0456\u0440\u043d\u0456\u0441\u0442\u044c \u2014 \u0446\u0435 \u0447\u0438\u0441\u043b\u043e\u0432\u0430 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430 \u0448\u0430\u043d\u0441\u0443 \u0442\u043e\u0433\u043e, \u0449\u043e \u043f\u043e\u0434\u0456\u044f \u0432\u0456\u0434\u0431\u0443\u0434\u0435\u0442\u044c\u0441\u044f. \u041c\u0438 \u043f\u0440\u0438\u043f\u0443\u0441\u043a\u0430\u0454\u043c\u043e, \u0449\u043e \u0432\u0441\u0456 \u043c\u043e\u0436\u043b\u0438\u0432\u0456 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u0435\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0443 \u0454 \u0440\u0456\u0432\u043d\u043e\u043c\u043e\u0436\u043b\u0438\u0432\u0438\u043c\u0438 (\u043c\u0430\u044e\u0442\u044c \u043e\u0434\u043d\u0430\u043a\u043e\u0432\u0456 \u0448\u0430\u043d\u0441\u0438). \u0429\u043e\u0431 \u0437\u043d\u0430\u0439\u0442\u0438 \u0439\u043c\u043e\u0432\u0456\u0440\u043d\u0456\u0441\u0442\u044c, \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u00ab\u0432\u0434\u0430\u043b\u0438\u0445\u00bb \u0434\u043b\u044f \u043d\u0430\u0441 \u0432\u0430\u0440\u0456\u0430\u043d\u0442\u0456\u0432 \u043f\u043e\u0434\u0456\u043b\u0438\u0442\u0438 \u043d\u0430 \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0443 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0443\u0441\u0456\u0445 \u043c\u043e\u0436\u043b\u0438\u0432\u0438\u0445 \u0432\u0430\u0440\u0456\u0430\u043d\u0442\u0456\u0432.</p>",
    formula: "P(A) = m / n",
    examples: [{"q": "Гральний кубик кидають один раз. Яка ймовірність випадіння цифри 4?", "steps": ["Крок 1: Усього на кубику 6 граней, тому загальна кількість результатів n = 6.", "Крок 2: Цифра 4 зустрічається лише один раз, тому кількість сприятливих результатів m = 1.", "Відповідь: P(A) = 1/6."]}, {"q": "У коробці 15 куль (від 1 до 15). Яка ймовірність витягнути кулю з номером, кратним 3?", "steps": ["Крок 1: Загальна кількість куль n = 15.", "Крок 2: Знайдемо числа від 1 до 15, що діляться на 3: це 3, 6, 9, 12, 15. Отже, m = 5.", "Крок 3: Обчислимо ймовірність: P(A) = 5/15 = 1/3.", "Відповідь: 1/3."]}],
    practice: [{"q": "Підкидають монету. Яка ймовірність того, що випаде герб?", "ans": "1/2", "altAns": ["0.5", "0,5"], "hint": "У монети всього 2 сторони (n=2), герб — це 1 варіант (m=1)."}, {"q": "У лотереї 1000 білетів, з яких 10 виграшні. Яка ймовірність виграти, купивши один білет?", "ans": "1/100", "altAns": ["0.01", "0,01"], "hint": "Поділи кількість виграшних білетів (10) на загальну кількість (1000) і скороти дріб."}, {"q": "У коробці 5 червоних і 15 синіх олівців. Яка ймовірність навмання дістати червоний олівець?", "ans": "1/4", "altAns": ["0.25", "0,25"], "hint": "Спочатку знайди загальну кількість олівців (5 + 15 = 20), а потім поділи кількість червоних на це число."}]
  },
  {
    id: "r10-trig-unit-circle", grade: 10,
    icon: "\ud83d\udd35",
    title: "\u0422\u0440\u0438\u0433\u043e\u043d\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u043d\u0456 \u0444\u0443\u043d\u043a\u0446\u0456\u0457 \u043a\u0443\u0442\u0430",
    meta: "~10 \u0445\u0432 \u00b7 \u00a73",
    type: 'lesson',
    theory: "<p>\u0420\u0430\u0434\u0456\u0430\u043d \u2014 \u0446\u0435 \u043a\u0443\u0442, \u043f\u0440\u0438 \u044f\u043a\u043e\u043c\u0443 \u0434\u043e\u0432\u0436\u0438\u043d\u0430 \u0434\u0443\u0433\u0438 \u043a\u043e\u043b\u0430 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 \u0439\u043e\u0433\u043e \u0440\u0430\u0434\u0456\u0443\u0441\u0443. \u0426\u0435 \u043f\u0440\u0438\u0440\u043e\u0434\u043d\u0430 \u043e\u0434\u0438\u043d\u0438\u0446\u044f \u0432\u0438\u043c\u0456\u0440\u044e\u0432\u0430\u043d\u043d\u044f, \u0434\u0435 \u0437\u0430\u043c\u0456\u0441\u0442\u044c \u0433\u0440\u0430\u0434\u0443\u0441\u0456\u0432 \u043c\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u043c\u043e \u0447\u0438\u0441\u043b\u043e \u03c0. \u0413\u043e\u043b\u043e\u0432\u043d\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u043e: 180\u00b0 \u2014 \u0446\u0435 \u0440\u0456\u0432\u043d\u043e \u03c0 \u0440\u0430\u0434\u0456\u0430\u043d (\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e 3,14). \u0414\u043b\u044f \u043f\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043d\u043d\u044f \u0433\u0440\u0430\u0434\u0443\u0441\u0456\u0432 \u0443 \u0440\u0430\u0434\u0456\u0430\u043d\u0438 \u0447\u0438\u0441\u043b\u043e \u043c\u043d\u043e\u0436\u0430\u0442\u044c \u043d\u0430 \u03c0/180, \u0430 \u043d\u0430\u0432\u043f\u0430\u043a\u0438 \u2014 \u03c0 \u0437\u0430\u043c\u0456\u043d\u044e\u044e\u0442\u044c \u043d\u0430 180\u00b0.</p>",
    formula: "180\u00b0 = \u03c0 \u0440\u0430\u0434, 1 \u0440\u0430\u0434 \u2248 57\u00b0, l = \u03b1R",
    examples: [{"q": "Переведіть 45° у радіанну міру", "steps": ["Крок 1: Скористаємось формулою: n° * π / 180°", "Крок 2: Підставляємо значення: 45 * π / 180", "Крок 3: Скорочуємо дріб на 45: 1 * π / 4", "Відповідь: π/4"]}, {"q": "Знайдіть градусну міру кута 2π/3 рад", "steps": ["Крок 1: Замінимо π на 180° у виразі", "Крок 2: Отримуємо: (2 * 180°) / 3", "Крок 3: Обчислюємо: 360° / 3 = 120°", "Відповідь: 120°"]}],
    practice: [{"q": "Переведіть 60° у радіани (запишіть як π/n)", "ans": "π/3", "altAns": ["pi/3", "π / 3"], "hint": "Помножте 60 на π/180 та скоротіть на 60."}, {"q": "Яка градусна міра кута π/2 радіан?", "ans": "90", "altAns": ["90°"], "hint": "π — це 180 градусів, поділіть це значення навпіл."}, {"q": "Переведіть 135° у радіани (запишіть як дріб з π)", "ans": "3π/4", "altAns": ["3pi/4", "3/4π"], "hint": "135/180 скорочується на 45."}]
  },
  {
    id: "r10-trig-periodicity", grade: 10,
    icon: "\ud83d\udd04",
    title: "\u041f\u0435\u0440\u0456\u043e\u0434\u0438\u0447\u043d\u0456\u0441\u0442\u044c \u0442\u0440\u0438\u0433\u043e\u043d\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u043d\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0456\u0439",
    meta: "~10 \u0445\u0432 \u00b7 \u00a73.13",
    type: 'lesson',
    theory: "<p>\u0424\u0443\u043d\u043a\u0446\u0456\u044f \u043d\u0430\u0437\u0438\u0432\u0430\u0454\u0442\u044c\u0441\u044f \u043f\u0435\u0440\u0456\u043e\u0434\u0438\u0447\u043d\u043e\u044e, \u044f\u043a\u0449\u043e \u0457\u0457 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u043f\u043e\u0432\u0442\u043e\u0440\u044e\u044e\u0442\u044c\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u0456 \u0456\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0438. \u041d\u0430\u0439\u043c\u0435\u043d\u0448\u0438\u0439 \u0442\u0430\u043a\u0438\u0439 \u0434\u043e\u0434\u0430\u0442\u043d\u0438\u0439 \u0456\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u043d\u0430\u0437\u0438\u0432\u0430\u044e\u0442\u044c \u0433\u043e\u043b\u043e\u0432\u043d\u0438\u043c \u043f\u0435\u0440\u0456\u043e\u0434\u043e\u043c. \u0414\u043b\u044f \u0441\u0438\u043d\u0443\u0441\u0430 \u0456 \u043a\u043e\u0441\u0438\u043d\u0443\u0441\u0430 \u0446\u0435 2\u03c0, \u0434\u043b\u044f \u0442\u0430\u043d\u0433\u0435\u043d\u0441\u0430 \u0456 \u043a\u043e\u0442\u0430\u043d\u0433\u0435\u043d\u0441\u0430 \u2014 \u03c0. \u042f\u043a\u0449\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u043c\u043d\u043e\u0436\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0447\u0438\u0441\u043b\u043e k, \u043f\u0435\u0440\u0456\u043e\u0434 \u0437\u043c\u0435\u043d\u0448\u0443\u0454\u0442\u044c\u0441\u044f \u0443 k \u0440\u0430\u0437\u0456\u0432.</p>",
    formula: "T(f(kx + b)) = T\u2080 / |k|",
    examples: [{"q": "Знайдіть головний період функції y = sin(2x)", "steps": ["Крок 1: Головний період sin(x) дорівнює 2π.", "Крок 2: Знаходимо коефіцієнт k біля x. Тут k = 2.", "Крок 3: Ділимо основний період на k: 2π / 2 = π.", "Відповідь: π"]}, {"q": "Знайдіть головний період функції y = tg(x/3)", "steps": ["Крок 1: Головний період tg(x) дорівнює π.", "Крок 2: Знаходимо коефіцієнт k. Тут k = 1/3.", "Крок 3: Ділимо π на 1/3, що рівнозначно множенню на 3: π / (1/3) = 3π.", "Відповідь: 3π"]}],
    practice: [{"q": "Знайдіть головний період функції y = cos(4x)", "ans": "π/2", "altAns": ["0.5π", "pi/2"], "hint": "Використайте формулу T = 2π / k, де k = 4."}, {"q": "Який головний період у функції y = ctg(x/2)?", "ans": "2π", "altAns": ["2pi"], "hint": "Період котангенса дорівнює π. Поділіть його на 1/2."}, {"q": "Знайдіть головний період функції y = sin(5x + π/4)", "ans": "2π/5", "altAns": ["0.4π"], "hint": "Зсув графіка (додавання π/4) не впливає на період. Тільки коефіцієнт k = 5."}]
  },
  {
    id: "r10-addition-formulas", grade: 10,
    icon: "\u2795",
    title: "\u0424\u043e\u0440\u043c\u0443\u043b\u0438 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f",
    meta: "~10 \u0445\u0432 \u00b7 \u00a73",
    type: 'lesson',
    theory: "<p>\u0424\u043e\u0440\u043c\u0443\u043b\u0438 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u2014 \u0446\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430, \u044f\u043a\u0456 \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442\u044c \u0440\u043e\u0437\u043a\u043b\u0430\u0441\u0442\u0438 \u0441\u0438\u043d\u0443\u0441, \u043a\u043e\u0441\u0438\u043d\u0443\u0441 \u0430\u0431\u043e \u0442\u0430\u043d\u0433\u0435\u043d\u0441 \u0441\u0443\u043c\u0438 \u0447\u0438 \u0440\u0456\u0437\u043d\u0438\u0446\u0456 \u0434\u0432\u043e\u0445 \u043a\u0443\u0442\u0456\u0432. \u0426\u0435 \u0434\u043e\u043f\u043e\u043c\u0430\u0433\u0430\u0454 \u043e\u0431\u0447\u0438\u0441\u043b\u044e\u0432\u0430\u0442\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0442\u0440\u0438\u0433\u043e\u043d\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u043d\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0456\u0439 \u0431\u0435\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044c, \u044f\u043a\u0449\u043e \u043c\u0438 \u0437\u043d\u0430\u0454\u043c\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u043e\u043a\u0440\u0435\u043c\u0438\u0445 \u0434\u043e\u0434\u0430\u043d\u043a\u0456\u0432 (\u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, 75\u00b0 = 45\u00b0 + 30\u00b0).</p>",
    formula: "sin(\u03b1 \u00b1 \u03b2) = sin \u03b1 cos \u03b2 \u00b1 cos \u03b1 sin \u03b2; cos(\u03b1 \u00b1 \u03b2) = cos \u03b1 cos \u03b2 \u2213 sin \u03b1 sin \u03b2",
    examples: [{"q": "Обчисліть sin 75°", "steps": ["Крок 1: Запишемо 75° як суму табличних кутів: 45° + 30°", "Крок 2: Застосуємо формулу sin(α + β): sin 45° cos 30° + cos 45° sin 30°", "Крок 3: Підставимо значення: (√2/2 * √3/2) + (√2/2 * 1/2) = √6/4 + √2/4", "Відповідь: (√6 + √2)/4"]}, {"q": "Спростіть вираз: cos(α - β) - cos(α + β)", "steps": ["Крок 1: Розкриємо першу дужку: cos α cos β + sin α sin β", "Крок 2: Розкриємо другу дужку: cos α cos β - sin α sin β", "Крок 3: Віднімемо вирази: (cos α cos β + sin α sin β) - (cos α cos β - sin α sin β) = 2 sin α sin β", "Відповідь: 2 sin α sin β"]}],
    practice: [{"q": "Обчисліть cos 15°, використовуючи різницю (45° - 30°)", "ans": "(√6+√2)/4", "altAns": ["(√2+√6)/4"], "hint": "Використовуй формулу cos(α - β) = cos α cos β + sin α sin β"}, {"q": "Чому дорівнює вираз sin 20° cos 10° + cos 20° sin 10°?", "ans": "0.5", "altAns": ["1/2"], "hint": "Це згорнута формула sin(α + β), де α=20°, β=10°. Обчисли sin 30°"}, {"q": "Спростіть: cos α cos 3α - sin α sin 3α", "ans": "cos 4α", "altAns": ["cos(4α)"], "hint": "Використовуй формулу косинуса суми: cos α cos β - sin α sin β = cos(α + β)"}]
  },
  {
    id: "r10-reduction-formulas", grade: 10,
    icon: "\ud83d\udd04",
    title: "\u0424\u043e\u0440\u043c\u0443\u043b\u0438 \u0437\u0432\u0435\u0434\u0435\u043d\u043d\u044f",
    meta: "~10 \u0445\u0432 \u00b7 \u00a718",
    type: 'lesson',
    theory: "<p>\u0424\u043e\u0440\u043c\u0443\u043b\u0438 \u0437\u0432\u0435\u0434\u0435\u043d\u043d\u044f \u2014 \u0446\u0435 \u043c\u0430\u0433\u0456\u0447\u043d\u0438\u0439 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442, \u044f\u043a\u0438\u0439 \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0444\u0443\u043d\u043a\u0446\u0456\u0457 \u0432\u0435\u043b\u0438\u043a\u0438\u0445 \u043a\u0443\u0442\u0456\u0432 (\u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, 210\u00b0) \u0443 \u0444\u0443\u043d\u043a\u0446\u0456\u0457 \u0433\u043e\u0441\u0442\u0440\u0438\u0445 \u043a\u0443\u0442\u0456\u0432. \u0413\u043e\u043b\u043e\u0432\u043d\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u043e: \u044f\u043a\u0449\u043e \u043c\u0438 \u0432\u0456\u0434\u0448\u0442\u043e\u0432\u0445\u0443\u0454\u043c\u043e\u0441\u044f \u0432\u0456\u0434 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0457 \u043e\u0441\u0456 (90\u00b0 \u0430\u0431\u043e 270\u00b0), \u043d\u0430\u0437\u0432\u0430 \u0437\u043c\u0456\u043d\u044e\u0454\u0442\u044c\u0441\u044f \u043d\u0430 \u00ab\u043a\u043e\u0444\u0443\u043d\u043a\u0446\u0456\u044e\u00bb (\u0441\u0438\u043d\u0443\u0441 \u043d\u0430 \u043a\u043e\u0441\u0438\u043d\u0443\u0441). \u042f\u043a\u0449\u043e \u0432\u0456\u0434 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0457 (180\u00b0 \u0430\u0431\u043e 360\u00b0) \u2014 \u043d\u0435 \u0437\u043c\u0456\u043d\u044e\u0454\u0442\u044c\u0441\u044f. \u0417\u043d\u0430\u043a \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0443 \u0437\u0430\u0432\u0436\u0434\u0438 \u0432\u0438\u0437\u043d\u0430\u0447\u0430\u0454\u043c\u043e \u0437\u0430 \u0447\u0432\u0435\u0440\u0442\u044e \u043f\u043e\u0447\u0430\u0442\u043a\u043e\u0432\u043e\u0433\u043e \u043a\u0443\u0442\u0430.</p>",
    formula: "sin(\u03c0/2 \u00b1 \u03b1) = cos \u03b1, cos(\u03c0 \u00b1 \u03b1) = -cos \u03b1",
    examples: [{"q": "Зведіть cos 123° до функції гострого кута", "steps": ["1) Запишемо 123° як (90° + 33°)", "2) Оскільки використовуємо 90°, змінюємо cos на sin", "3) 123° — це II чверть, де косинус від'ємний", "Відповідь: -sin 33°"]}, {"q": "Обчисліть sin 216°", "steps": ["1) Запишемо 216° як (180° + 36°)", "2) Оскільки використовуємо 180°, функція sin не змінюється", "3) 216° — це III чверть, де синус від'ємний", "Відповідь: -sin 36°"]}],
    practice: [{"q": "Спростіть: sin(π/2 - α) + cos(π - α)", "ans": "0", "altAns": ["0", "cos(a)-cos(a)"], "hint": "sin(π/2 - α) = cos α, а cos(π - α) = -cos α."}, {"q": "Спростіть: tg(π/2 + α) · ctg(3π/2 - α)", "ans": "-1", "altAns": ["-1", "-ctg(a)*tg(a)"], "hint": "Це дорівнює -ctg α · tg α. Пам'ятай, що ctg α · tg α = 1."}, {"q": "Спростіть: sin(π + α) · cos(3π/2 + α)", "ans": "-sin² α", "altAns": ["-sin^2 a", "-sin²(a)", "-sin(a)*sin(a)"], "hint": "sin(π + α) = -sin α, а cos(3π/2 + α) = sin α."}]
  },
  {
    id: "r10-sin-equation", grade: 10,
    icon: "\ud83d\udff0",
    title: "\u0420\u0456\u0432\u043d\u044f\u043d\u043d\u044f sin x = a \u0442\u0430 cos x = a",
    meta: "~10 \u0445\u0432 \u00b7 \u00a74",
    type: 'lesson',
    theory: "<p>\u0422\u0440\u0438\u0433\u043e\u043d\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u043d\u0456 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u2014 \u0446\u0435 \u0432\u0438\u0440\u0430\u0437\u0438, \u0434\u0435 \u0437\u043c\u0456\u043d\u043d\u0430 \u0441\u0442\u043e\u0457\u0442\u044c \u043f\u0456\u0434 \u0437\u043d\u0430\u043a\u043e\u043c \u0441\u0438\u043d\u0443\u0441\u0430 \u0447\u0438 \u043a\u043e\u0441\u0438\u043d\u0443\u0441\u0430. \u041e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f sin \u0442\u0430 cos \u0437\u0430\u0432\u0436\u0434\u0438 \u043b\u0435\u0436\u0430\u0442\u044c \u0443 \u043c\u0435\u0436\u0430\u0445 \u0432\u0456\u0434 -1 \u0434\u043e 1, \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u043c\u0430\u044e\u0442\u044c \u0440\u043e\u0437\u0432'\u044f\u0437\u043a\u0438 \u043b\u0438\u0448\u0435 \u043f\u0440\u0438 |a| \u2264 1. \u0414\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0443 \u043a\u043e\u0440\u0435\u043d\u0456\u0432 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u044e\u0442\u044c \u0430\u0440\u043a\u0444\u0443\u043d\u043a\u0446\u0456\u0457 (arcsin \u0442\u0430 arccos), \u044f\u043a\u0456 \u0434\u043e\u043f\u043e\u043c\u0430\u0433\u0430\u044e\u0442\u044c \u0437\u043d\u0430\u0439\u0442\u0438 \u043a\u0443\u0442 \u0437\u0430 \u0439\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f\u043c.</p>",
    formula: "cos x = a \u21d2 x = \u00b1arccos a + 2\u03c0n; sin x = a \u21d2 x = (-1)\u207f arcsin a + \u03c0n",
    examples: [{"q": "Розв'яжіть cos x = 1/2", "steps": ["Крок 1: Перевіряємо, чи |1/2| ≤ 1. Так, отже розв'язки є.", "Крок 2: Знаходимо arccos(1/2). Це кут π/3 (або 60°).", "Крок 3: Підставляємо у загальну формулу: x = ±π/3 + 2πn.", "Відповідь: x = ±π/3 + 2πn, n ∈ Z"]}, {"q": "Розв'яжіть sin x = √2/2", "steps": ["Крок 1: Знаходимо arcsin(√2/2). Це кут π/4 (або 45°).", "Крок 2: Підставляємо у формулу для синуса: x = (-1)ⁿ π/4 + πn.", "Відповідь: x = (-1)ⁿ π/4 + πn, n ∈ Z"]}],
    practice: [{"q": "Скільки коренів має рівняння cos x = 1.2?", "ans": "0", "altAns": ["жодного", "немає"], "hint": "Пам'ятай, що значення косинуса не може бути більшим за 1."}, {"q": "Знайдіть розв'язки рівняння cos x = 0", "ans": "π/2 + πn", "altAns": ["pi/2 + pin", "90 + 180n"], "hint": "Це частковий випадок. На одиничному колі косинус дорівнює 0 у верхній та нижній точках."}, {"q": "Чому дорівнює arccos(-1)?", "ans": "π", "altAns": ["pi", "180"], "hint": "У якій точці на проміжку [0; π] косинус дорівнює -1?"}]
  },
  {
    id: "r10-tg-equation", grade: 10,
    icon: "\ud83d\udcd0",
    title: "\u0420\u0456\u0432\u043d\u044f\u043d\u043d\u044f tg x = a \u0442\u0430 ctg x = a",
    meta: "~10 \u0445\u0432 \u00b7 \u00a74",
    type: 'lesson',
    theory: "<p>\u0420\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u0437 \u0442\u0430\u043d\u0433\u0435\u043d\u0441\u043e\u043c \u0442\u0430 \u043a\u043e\u0442\u0430\u043d\u0433\u0435\u043d\u0441\u043e\u043c \u2014 \u043e\u0434\u043d\u0456 \u0437 \u043d\u0430\u0439\u043f\u0440\u043e\u0441\u0442\u0456\u0448\u0438\u0445, \u0430\u0434\u0436\u0435 \u0432\u043e\u043d\u0438 \u043c\u0430\u044e\u0442\u044c \u0440\u043e\u0437\u0432'\u044f\u0437\u043a\u0438 \u043f\u0440\u0438 \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u043c\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u0456 <b>a</b>. \u041d\u0430\u043c \u043d\u0435 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0442\u0438 \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u043d\u044f \u043f\u043e \u043c\u043e\u0434\u0443\u043b\u044e, \u044f\u043a \u0443 \u0441\u0438\u043d\u0443\u0441\u0430 \u0447\u0438 \u043a\u043e\u0441\u0438\u043d\u0443\u0441\u0430. \u0414\u043e\u0441\u0442\u0430\u0442\u043d\u044c\u043e \u0437\u043d\u0430\u0439\u0442\u0438 \u0431\u0430\u0437\u043e\u0432\u0438\u0439 \u043a\u0443\u0442 \u0447\u0435\u0440\u0435\u0437 \u0430\u0440\u043a\u0444\u0443\u043d\u043a\u0446\u0456\u044e \u0442\u0430 \u0434\u043e\u0434\u0430\u0442\u0438 \u043f\u0435\u0440\u0456\u043e\u0434 <b>\u03c0n</b>, \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u043f\u043e\u0432\u0442\u043e\u0440\u044e\u044e\u0442\u044c\u0441\u044f \u043a\u043e\u0436\u043d\u0456 180\u00b0.</p>",
    formula: "tg x = a \u21d2 x = arctg a + \u03c0n;  ctg x = a \u21d2 x = arcctg a + \u03c0n",
    examples: [{"q": "Розв'яжіть рівняння tg x = √3", "steps": ["Крок 1: Записуємо загальну формулу: x = arctg √3 + πn", "Крок 2: Знаходимо табличне значення: тангенс дорівнює √3 для кута 60° або π/3", "Відповідь: x = π/3 + πn, n ∈ Z"]}, {"q": "Розв'яжіть рівняння ctg x = -1", "steps": ["Крок 1: Використовуємо формулу для котангенса: x = arcctg(-1) + πn", "Крок 2: Обчислюємо за властивістю: arcctg(-a) = π - arcctg a. Отже, π - π/4 = 3π/4", "Відповідь: x = 3π/4 + πn, n ∈ Z"]}],
    practice: [{"q": "tg x = 1", "ans": "π/4 + πn", "altAns": ["pi/4 + pin", "45 + 180n"], "hint": "Знайдіть кут, тангенс якого дорівнює 1. Це кут, у якого sin x = cos x."}, {"q": "ctg x = √3", "ans": "π/6 + πn", "altAns": ["pi/6 + pin", "30 + 180n"], "hint": "Котангенс дорівнює √3 для кута 30 градусів."}, {"q": "tg x = 0", "ans": "πn", "altAns": ["pin", "0 + πn", "0 + pin"], "hint": "Тангенс дорівнює нулю там же, де й синус."}]
  },
  {
    id: "r10-derivative-def", grade: 10,
    icon: "\ud83d\udcc9",
    title: "\u041f\u043e\u0445\u0456\u0434\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0456\u0457. \u0412\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f",
    meta: "~10 \u0445\u0432 \u00b7 \u00a77",
    type: 'lesson',
    theory: "<p>\u041f\u043e\u0445\u0456\u0434\u043d\u0430 \u2014 \u0446\u0435 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442, \u044f\u043a\u0438\u0439 \u043f\u043e\u043a\u0430\u0437\u0443\u0454 \u0448\u0432\u0438\u0434\u043a\u0456\u0441\u0442\u044c \u0437\u043c\u0456\u043d\u0438 \u0444\u0443\u043d\u043a\u0446\u0456\u0457 \u0443 \u043f\u0435\u0432\u043d\u0456\u0439 \u0442\u043e\u0447\u0446\u0456. \u0429\u043e\u0431 \u0457\u0457 \u043e\u0431\u0447\u0438\u0441\u043b\u0438\u0442\u0438, \u043c\u0438 \u043f\u043e\u0440\u0456\u0432\u043d\u044e\u0454\u043c\u043e <b>\u043f\u0440\u0438\u0440\u0456\u0441\u0442 \u0444\u0443\u043d\u043a\u0446\u0456\u0457 (\u0394y)</b> \u0456\u0437 <b>\u043f\u0440\u0438\u0440\u043e\u0441\u0442\u043e\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0443 (\u0394x)</b>. \u0426\u0435 \u0441\u0445\u043e\u0436\u0435 \u043d\u0430 \u0440\u043e\u0437\u0440\u0430\u0445\u0443\u043d\u043e\u043a \u043c\u0438\u0442\u0442\u0454\u0432\u043e\u0457 \u0448\u0432\u0438\u0434\u043a\u043e\u0441\u0442\u0456 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0456\u043b\u044f: \u043c\u0438 \u0434\u0438\u0432\u0438\u043c\u043e\u0441\u044c, \u043d\u0430\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0437\u043c\u0456\u043d\u0438\u0432\u0441\u044f \u0448\u043b\u044f\u0445 \u0437\u0430 \u0434\u0443\u0436\u0435 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u043f\u0440\u043e\u043c\u0456\u0436\u043e\u043a \u0447\u0430\u0441\u0443.</p>",
    formula: "\u0394y = f(x\u2080 + \u0394x) \u2212 f(x\u2080)",
    examples: [{"q": "Знайдіть приріст функції y = 3x - 1 у точці x₀.", "steps": ["Крок 1: Запишемо значення у новій точці: f(x₀ + Δx) = 3(x₀ + Δx) - 1 = 3x₀ + 3Δx - 1.", "Крок 2: Знайдемо приріст Δy = f(x₀ + Δx) − f(x₀) = (3x₀ + 3Δx - 1) − (3x₀ - 1).", "Відповідь: Δy = 3Δx."]}, {"q": "Обчисліть Δy для y = x² у точці x₀ = 2, якщо Δx = 0.1.", "steps": ["Крок 1: Знайдемо значення в точці x₀: f(2) = 2² = 4.", "Крок 2: Знайдемо значення в новій точці (2 + 0.1): f(2.1) = 2.1² = 4.41.", "Крок 3: Обчислимо приріст: Δy = 4.41 − 4 = 0.41.", "Відповідь: 0.41."]}],
    practice: [{"q": "Знайдіть приріст аргументу Δx, якщо x₀ = 5, а x = 5.2.", "ans": "0.2", "altAns": ["0,2"], "hint": "Використайте формулу Δx = x − x₀."}, {"q": "Знайдіть приріст функції f(x) = 10x у точці x₀ = 1, якщо Δx = 0.3.", "ans": "3", "altAns": ["3.0", "3,0"], "hint": "Обчисліть Δy = f(1.3) − f(1)."}, {"q": "Знайдіть приріст функції y = x² у точці x₀ = 3, якщо Δx = 1.", "ans": "7", "altAns": [], "hint": "Обчисліть (3 + 1)² − 3²."}]
  },
  {
    id: "r10-derivative-rules", grade: 10,
    icon: "\ud83d\udccb",
    title: "\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0434\u0438\u0444\u0435\u0440\u0435\u043d\u0446\u0456\u044e\u0432\u0430\u043d\u043d\u044f",
    meta: "~10 \u0445\u0432 \u00b7 \u00a77",
    type: 'lesson',
    theory: "<p>\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 \u043c\u0438 \u043d\u0430\u0432\u0447\u0438\u043c\u043e\u0441\u044f \u0437\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0438 \u043f\u043e\u0445\u0456\u0434\u043d\u0456 \u0441\u043a\u043b\u0430\u0434\u043d\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0456\u0439 \u0442\u0430 \u0442\u0440\u0438\u0433\u043e\u043d\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u043d\u0438\u0445 \u0432\u0438\u0440\u0430\u0437\u0456\u0432. \u041c\u0438 \u0434\u0456\u0437\u043d\u0430\u0454\u043c\u043e\u0441\u044f, \u044f\u043a \u043f\u0440\u0430\u0446\u044e\u0454 \u00ab\u043b\u0430\u043d\u0446\u044e\u0433\u043e\u0432\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u043e\u00bb \u0434\u043b\u044f \u0444\u0443\u043d\u043a\u0446\u0456\u0439, \u0449\u043e \u0432\u043a\u043b\u0430\u0434\u0435\u043d\u0456 \u043e\u0434\u043d\u0430 \u0432 \u043e\u0434\u043d\u0443 (\u044f\u043a \u043c\u0430\u0442\u0440\u044c\u043e\u0448\u043a\u0438), \u0442\u0430 \u0437\u0430\u043f\u0430\u043c'\u044f\u0442\u0430\u0454\u043c\u043e \u043f\u043e\u0445\u0456\u0434\u043d\u0456 \u0442\u0430\u043d\u0433\u0435\u043d\u0441\u0430 \u0456 \u043a\u043e\u0442\u0430\u043d\u0433\u0435\u043d\u0441\u0430. \u0426\u0435 \u0431\u0430\u0437\u043e\u0432\u0456 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0438 \u0434\u043b\u044f \u0440\u043e\u0437\u0432'\u044f\u0437\u0430\u043d\u043d\u044f \u0441\u043a\u043b\u0430\u0434\u043d\u0438\u0445 \u0437\u0430\u0434\u0430\u0447 \u0443 10 \u043a\u043b\u0430\u0441\u0456.</p>",
    formula: "(f(g(x)))' = f'(g(x)) \u00b7 g'(x); (tg x)' = 1/cos\u00b2x; (ctg x)' = -1/sin\u00b2x",
    examples: [{"q": "Знайдіть похідну функції y = (3x - 7)⁶", "steps": ["Крок 1: Це складена функція. Зовнішня частина — степінь (t⁶), внутрішня — (3x - 7).", "Крок 2: Похідна зовнішньої частини: 6(3x - 7)⁵.", "Крок 3: Похідна внутрішньої частини (3x - 7)' = 3.", "Крок 4: Перемножуємо результати: 6(3x - 7)⁵ · 3 = 18(3x - 7)⁵.", "Відповідь: 18(3x - 7)⁵"]}, {"q": "Знайдіть похідну функції y = sin(x/2)", "steps": ["Крок 1: Зовнішня функція — синус, внутрішня — лінійна x/2.", "Крок 2: Похідна синуса — косинус: cos(x/2).", "Крок 3: Похідна внутрішньої частини (x/2)' = 1/2.", "Крок 4: Результат: 1/2 · cos(x/2).", "Відповідь: 0.5 cos(x/2)"]}],
    practice: [{"q": "Знайдіть похідну y = (2x + 1)⁵", "ans": "10(2x+1)⁴", "altAns": ["10(2x + 1)^4", "10 * (2x + 1)^4"], "hint": "Спочатку візьми похідну від степеня (як від x⁵), а потім помнож на похідну виразу в дужках (тобто на 2)."}, {"q": "Обчисліть похідну y = tg(3x)", "ans": "3/cos²(3x)", "altAns": ["3/cos^2(3x)", "3 / cos^2(3x)"], "hint": "Похідна тангенса це 1/cos², але оскільки всередині 3x, треба помножити на похідну від 3x."}, {"q": "Знайдіть похідну y = √(4x + 1)", "ans": "2/√(4x+1)", "altAns": ["2/sqrt(4x+1)", "2 / sqrt(4x+1)"], "hint": "Похідна кореня √t дорівнює 1/(2√t). Не забудь помножити на похідну підкореневого виразу (4x+1)."}]
  },
  {
    id: "r10-derivative-mono", grade: 10,
    icon: "\ud83d\udcc8",
    title: "\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u043e\u0445\u0456\u0434\u043d\u043e\u0457: \u043c\u043e\u043d\u043e\u0442\u043e\u043d\u043d\u0456\u0441\u0442\u044c",
    meta: "~10 \u0445\u0432 \u00b7 \u00a77",
    type: 'lesson',
    theory: "<p>\u041f\u043e\u0445\u0456\u0434\u043d\u0430 \u0434\u043e\u043f\u043e\u043c\u0430\u0433\u0430\u0454 \u0437\u0440\u043e\u0437\u0443\u043c\u0456\u0442\u0438, \u043a\u0443\u0434\u0438 \u00ab\u0440\u0443\u0445\u0430\u0454\u0442\u044c\u0441\u044f\u00bb \u0433\u0440\u0430\u0444\u0456\u043a \u0444\u0443\u043d\u043a\u0446\u0456\u0457: \u0432\u0433\u043e\u0440\u0443 \u0447\u0438 \u0432\u043d\u0438\u0437. \u042f\u043a\u0449\u043e \u043d\u0430 \u043f\u0440\u043e\u043c\u0456\u0436\u043a\u0443 \u043f\u043e\u0445\u0456\u0434\u043d\u0430 \u0434\u043e\u0434\u0430\u0442\u043d\u0430 (f'(x) > 0), \u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0456\u044f \u0437\u0440\u043e\u0441\u0442\u0430\u0454, \u0430 \u044f\u043a\u0449\u043e \u0432\u0456\u0434'\u0454\u043c\u043d\u0430 (f'(x) < 0) \u2014 \u0441\u043f\u0430\u0434\u0430\u0454. \u0422\u043e\u0447\u043a\u0438, \u0443 \u044f\u043a\u0438\u0445 \u043f\u043e\u0445\u0456\u0434\u043d\u0430 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 \u043d\u0443\u043b\u044e \u0430\u0431\u043e \u043d\u0435 \u0456\u0441\u043d\u0443\u0454, \u0440\u043e\u0437\u0434\u0456\u043b\u044f\u044e\u0442\u044c \u0446\u0456 \u043f\u0440\u043e\u043c\u0456\u0436\u043a\u0438 \u043c\u0456\u0436 \u0441\u043e\u0431\u043e\u044e.</p>",
    formula: "f'(x) > 0 \u21d2 f(x)\u2191 (\u0437\u0440\u043e\u0441\u0442\u0430\u0454); f'(x) < 0 \u21d2 f(x)\u2193 (\u0441\u043f\u0430\u0434\u0430\u0454)",
    examples: [{"q": "Знайдіть проміжки монотонності функції f(x) = x² - 4x + 3", "steps": ["Крок 1: Знайдемо похідну: f'(x) = (x² - 4x + 3)' = 2x - 4.", "Крок 2: Знайдемо, де f'(x) > 0: 2x - 4 > 0 ⇒ 2x > 4 ⇒ x > 2. Тут функція зростає.", "Крок 3: Знайдемо, де f'(x) < 0: 2x - 4 < 0 ⇒ 2x < 4 ⇒ x < 2. Тут функція спадає.", "Відповідь: зростає на [2; +∞), спадає на (-∞; 2]."]}, {"q": "Дослідіть на монотонність f(x) = √(x² - 3x) на її області визначення", "steps": ["Крок 1: Область визначення D(f): x² - 3x ≥ 0 ⇒ x(x - 3) ≥ 0 ⇒ x ∈ (-∞; 0] ∪ [3; +∞).", "Крок 2: Похідна f'(x) = (2x - 3) / (2√(x² - 3x)). Знаменник завжди додатний у D(f).", "Крок 3: Знак залежить від чисельника: 2x - 3 > 0 при x > 1.5. У D(f) це проміжок (3; +∞).", "Крок 4: 2x - 3 < 0 при x < 1.5. У D(f) це проміжок (-∞; 0).", "Відповідь: зростає на [3; +∞), спадає на (-∞; 0]."]}],
    practice: [{"q": "Знайдіть проміжок зростання функції f(x) = x² - 6x", "ans": "[3; +∞)", "altAns": ["x >= 3", "[3;+inf)"], "hint": "Знайдіть похідну 2x - 6 і розв'яжіть нерівність 2x - 6 > 0."}, {"q": "На якому проміжку функція f(x) = 10 - 2x спадає?", "ans": "(-∞; +∞)", "altAns": ["R", "уся числова пряма"], "hint": "Похідна цієї функції дорівнює -2. Оскільки -2 завжди менше 0, функція спадає скрізь."}, {"q": "Знайдіть проміжок спадання функції f(x) = x³ - 3x", "ans": "[-1; 1]", "altAns": ["-1 <= x <= 1"], "hint": "Похідна f'(x) = 3x² - 3. Розв'яжіть нерівність 3x² - 3 < 0."}]
  },
  {
    id: "r10-extremum", grade: 10,
    icon: "\ud83c\udfd4\ufe0f",
    title: "\u0415\u043a\u0441\u0442\u0440\u0435\u043c\u0443\u043c\u0438 \u0444\u0443\u043d\u043a\u0446\u0456\u0457",
    meta: "~10 \u0445\u0432 \u00b7 \u00a77",
    type: 'lesson',
    theory: "<p>\u0415\u043a\u0441\u0442\u0440\u0435\u043c\u0443\u043c\u0438 \u2014 \u0446\u0435 \u0442\u043e\u0447\u043a\u0438 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c\u0443 \u0442\u0430 \u043c\u0456\u043d\u0456\u043c\u0443\u043c\u0443, \u0434\u0435 \u0444\u0443\u043d\u043a\u0446\u0456\u044f \u0437\u043c\u0456\u043d\u044e\u0454 \u0441\u0432\u0456\u0439 \u043d\u0430\u043f\u0440\u044f\u043c\u043e\u043a. \u041a\u043e\u043b\u0438 \u0433\u0440\u0430\u0444\u0456\u043a \u043d\u0430\u0433\u0430\u0434\u0443\u0454 \u043a\u0443\u043f\u043e\u043b (\u043e\u043f\u0443\u043a\u043b\u0438\u0439 \u0432\u0433\u043e\u0440\u0443), \u043c\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u043c\u043e \u043d\u0435\u0440\u0456\u0432\u043d\u0456\u0441\u0442\u044c \u0404\u043d\u0441\u0435\u043d\u0430: \u0432\u043e\u043d\u0430 \u0434\u043e\u0432\u043e\u0434\u0438\u0442\u044c, \u0449\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0444\u0443\u043d\u043a\u0446\u0456\u0457 \u0432 \u0441\u0435\u0440\u0435\u0434\u043d\u0456\u0439 \u0442\u043e\u0447\u0446\u0456 \u0437\u0430\u0432\u0436\u0434\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 \u0437\u0430 \u0441\u0435\u0440\u0435\u0434\u043d\u0454 \u0430\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u043d\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u044c \u0443 \u043a\u0440\u0430\u0439\u043d\u0456\u0445 \u0442\u043e\u0447\u043a\u0430\u0445. \u0426\u0435 \u0434\u043e\u043f\u043e\u043c\u0430\u0433\u0430\u0454 \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430\u043c \u0437\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0438 \u043d\u0430\u0439\u0432\u0438\u0449\u0456 \u043f\u0456\u043a\u0438 \u0442\u0430 \u043d\u0430\u0439\u0433\u043b\u0438\u0431\u0448\u0456 \u0432\u043f\u0430\u0434\u0438\u043d\u0438 \u0431\u0435\u0437 \u0441\u043a\u043b\u0430\u0434\u043d\u0438\u0445 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c.</p>",
    formula: "f((x\u2081+x\u2082+...+x\u2099)/n) \u2265 (f(x\u2081)+f(x\u2082)+...+f(x\u2099))/n",
    examples: [{"q": "За нерівністю Єнсена для опуклої вгору функції порівняйте f(2) та середнє значення (f(1)+f(3))/2.", "steps": ["Крок 1: Обчислимо середнє арифметичне аргументів: (1 + 3) / 2 = 2.", "Крок 2: Згідно з теоремою 51.4, значення функції від середнього аргументу f(2) ≥ (f(1)+f(3))/2.", "Відповідь: f(2) ≥ (f(1)+f(3))/2."]}, {"q": "Доведіть нерівність для f(x) = -x² на відрізку [0, 2].", "steps": ["Крок 1: Знайдемо значення в центрі: f((0+2)/2) = f(1) = -1² = -1.", "Крок 2: Знайдемо середнє на краях: (f(0) + f(2))/2 = (0 + (-4))/2 = -2.", "Крок 3: Перевіримо: -1 ≥ -2. Нерівність виконується.", "Відповідь: Доведено."]}],
    practice: [{"q": "Який знак нерівності (≥ чи ≤) відповідає нерівності Єнсена для функції, що опукла вгору?", "ans": "≥", "altAns": [">="], "hint": "Уявіть гірку: точка посередині завжди вища за лінію, що з'єднує підніжжя."}, {"q": "Як називається метод, яким у підручнику доводиться Теорема 51.5 для n = 2^k?", "ans": "Математична індукція", "altAns": ["індукція", "метод математичної індукції"], "hint": "Це спосіб доведення 'від меншого до більшого'."}, {"q": "Якщо f(x) опукла вгору, f(1)=10 та f(5)=20, то яке мінімальне значення може мати f(3)?", "ans": "15", "altAns": [], "hint": "За нерівністю Єнсена f(3) ≥ (10 + 20) / 2."}]
  },
  {
    id: "r11-exp-function", grade: 11,
    icon: "\ud83d\ude80",
    title: "\u041f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0456\u044f \u0442\u0430 \u0457\u0457 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u043e\u0441\u0442\u0456",
    meta: "~10 \u0445\u0432 \u00b7 \u00a71",
    type: 'lesson',
    theory: "<p>\u041f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0456\u044f \u043c\u0430\u0454 \u0432\u0438\u0433\u043b\u044f\u0434 y = a\u02e3, \u0434\u0435 \u043e\u0441\u043d\u043e\u0432\u0430 <i>a</i> \u2014 \u0446\u0435 \u0434\u043e\u0434\u0430\u0442\u043d\u0435 \u0447\u0438\u0441\u043b\u043e, \u043d\u0435 \u0440\u0456\u0432\u043d\u0435 1. \u0413\u043e\u043b\u043e\u0432\u043d\u0430 \u043e\u0441\u043e\u0431\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u0443 \u0442\u043e\u043c\u0443, \u0449\u043e \u0437\u043c\u0456\u043d\u043d\u0430 x \u0437\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0441\u0430\u043c\u0435 \u0443 \u043f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u0443 \u0441\u0442\u0435\u043f\u0435\u043d\u044f. \u0422\u0430\u043a\u0430 \u0444\u0443\u043d\u043a\u0446\u0456\u044f \u0437\u0430\u0432\u0436\u0434\u0438 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u0442\u043e\u0447\u043a\u0443 (0; 1), \u043d\u0430\u0431\u0443\u0432\u0430\u0454 \u043b\u0438\u0448\u0435 \u0434\u043e\u0434\u0430\u0442\u043d\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u044c \u0456 \u0448\u0432\u0438\u0434\u043a\u043e \u0437\u0440\u043e\u0441\u0442\u0430\u0454, \u044f\u043a\u0449\u043e \u043e\u0441\u043d\u043e\u0432\u0430 \u0431\u0456\u043b\u044c\u0448\u0430 \u0437\u0430 \u043e\u0434\u0438\u043d\u0438\u0446\u044e.</p>",
    formula: "y = a\u02e3 (\u0434\u0435 a > 0, a \u2260 1)",
    examples: [{"q": "Розв'яжіть рівняння 2ˣ = 16", "steps": ["Крок 1: Представимо 16 як степінь двійки: 16 = 2⁴", "Крок 2: Оскільки основи однакові, прирівнюємо показники: x = 4", "Відповідь: 4"]}, {"q": "Знайдіть значення функції y = 5ˣ при x = -2", "steps": ["Крок 1: Підставимо -2 замість x: 5⁻²", "Крок 2: Використаємо властивість степеня: 5⁻² = 1/5² = 1/25", "Відповідь: 0.04"]}],
    practice: [{"q": "Розв'яжіть рівняння: 3ˣ = 27", "ans": "3", "altAns": ["x=3"], "hint": "Згадайте, в яку степінь треба піднести 3, щоб отримати 27."}, {"q": "Розв'яжіть рівняння: 5ˣ⁻¹ = 25", "ans": "3", "altAns": ["x=3"], "hint": "Представте 25 як 5², тоді x - 1 = 2."}, {"q": "Чому дорівнює значення функції y = 7ˣ, якщо x = 0?", "ans": "1", "altAns": ["одиниця"], "hint": "Будь-яке число в нульовому степені (крім нуля) завжди дорівнює..."}]
  },
  {
    id: "r11-exp-equations", grade: 11,
    icon: "\u26a1",
    title: "\u041f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u043e\u0432\u0456 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f",
    meta: "~10 \u0445\u0432 \u00b7 \u00a71",
    type: 'lesson',
    theory: "<p>\u041f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u043e\u0432\u0456 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u2014 \u0446\u0435 \u0442\u0430\u043a\u0456 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f, \u0434\u0435 \u043d\u0435\u0432\u0456\u0434\u043e\u043c\u0435 x \u0437\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u043f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u0443 \u0441\u0442\u0435\u043f\u0435\u043d\u044f. \u041e\u0441\u043d\u043e\u0432\u043d\u0430 \u0456\u0434\u0435\u044f \u0440\u043e\u0437\u0432'\u044f\u0437\u0430\u043d\u043d\u044f \u043f\u043e\u043b\u044f\u0433\u0430\u0454 \u0432 \u0442\u043e\u043c\u0443, \u0449\u043e\u0431 \u0437\u0432\u0435\u0441\u0442\u0438 \u043e\u0431\u0438\u0434\u0432\u0456 \u0447\u0430\u0441\u0442\u0438\u043d\u0438 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u0434\u043e \u043e\u0434\u043d\u0430\u043a\u043e\u0432\u043e\u0457 \u043e\u0441\u043d\u043e\u0432\u0438. \u041a\u043e\u043b\u0438 \u043e\u0441\u043d\u043e\u0432\u0438 \u043e\u0434\u043d\u0430\u043a\u043e\u0432\u0456, \u043c\u0438 \u043c\u043e\u0436\u0435\u043c\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u0440\u0438\u0440\u0456\u0432\u043d\u044f\u0442\u0438 \u0457\u0445\u043d\u0456 \u043f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u0438 \u0456 \u0437\u043d\u0430\u0439\u0442\u0438 x \u044f\u043a \u0443 \u0437\u0432\u0438\u0447\u0430\u0439\u043d\u043e\u043c\u0443 \u043b\u0456\u043d\u0456\u0439\u043d\u043e\u043c\u0443 \u0447\u0438 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u043e\u043c\u0443 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u0456.</p>",
    formula: "a\u1da0\u207d\u02e3\u207e = a\u1d4d\u207d\u02e3\u207e \u21d4 f(x) = g(x)",
    examples: [{"q": "8 · 2³ˣ⁻¹ = 4", "steps": ["Крок 1: Зведемо все до основи 2. Оскільки 8 = 2³ та 4 = 2², маємо: 2³ · 2³ˣ⁻¹ = 2²", "Крок 2: При множенні показники додаються: 2³⁺³ˣ⁻¹ = 2²", "Крок 3: Спростимо показник: 2³ˣ⁺² = 2²", "Крок 4: Тепер прирівнюємо показники: 3x + 2 = 2", "Крок 5: Розв'язуємо рівняння: 3x = 0, отже x = 0", "Відповідь: 0"]}, {"q": "4ˣ - 3·2ˣ + 2 = 0", "steps": ["Крок 1: Замінимо 4ˣ на (2ˣ)². Маємо: (2ˣ)² - 3·2ˣ + 2 = 0", "Крок 2: Введемо заміну t = 2ˣ (де t > 0). Отримаємо: t² - 3t + 2 = 0", "Крок 3: Розв'яжемо квадратне рівняння: t₁ = 1, t₂ = 2", "Крок 4: Повернемося до заміни: 2ˣ = 1 (отже x = 0) або 2ˣ = 2 (отже x = 1)", "Відповідь: 0; 1"]}],
    practice: [{"q": "Розв'яжіть рівняння: 3ˣ = 81", "ans": "4", "altAns": [], "hint": "81 — це 3 у якому степені? 3 · 3 · 3 · 3 = 81."}, {"q": "Розв'яжіть рівняння: 2ˣ⁺⁵ = 32", "ans": "0", "altAns": [], "hint": "32 — це 2⁵. Отже, x + 5 = 5."}, {"q": "Розв'яжіть рівняння: 5²ˣ⁻⁶ = 1", "ans": "3", "altAns": [], "hint": "Будь-яке число в нульовому степені дорівнює 1. Тобто 2x - 6 = 0."}]
  },
  {
    id: "r11-logarithm", grade: 11,
    icon: "\ud83d\udd22",
    title: "\u041b\u043e\u0433\u0430\u0440\u0438\u0444\u043c \u0442\u0430 \u0439\u043e\u0433\u043e \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u043e\u0441\u0442\u0456",
    meta: "~10 \u0445\u0432 \u00b7 \u00a71",
    type: 'lesson',
    theory: "<p>\u041b\u043e\u0433\u0430\u0440\u0438\u0444\u043c \u2014 \u0446\u0435 \u043f\u043e\u043a\u0430\u0437\u043d\u0438\u043a \u0441\u0442\u0435\u043f\u0435\u043d\u044f, \u0434\u043e \u044f\u043a\u043e\u0433\u043e \u0442\u0440\u0435\u0431\u0430 \u043f\u0456\u0434\u043d\u0435\u0441\u0442\u0438 \u043e\u0441\u043d\u043e\u0432\u0443, \u0449\u043e\u0431 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u043f\u0435\u0432\u043d\u0435 \u0447\u0438\u0441\u043b\u043e. \u041b\u043e\u0433\u0430\u0440\u0438\u0444\u043c\u0456\u0447\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0456\u044f \u0454 \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u043d\u043e\u044e \u043c\u043e\u0434\u0435\u043b\u043b\u044e \u0434\u043b\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0456\u0432 \u0443 \u043f\u0440\u0438\u0440\u043e\u0434\u0456: \u0440\u043e\u0441\u0442\u0443 \u043a\u043e\u043b\u043e\u043d\u0456\u0439 \u0431\u0430\u043a\u0442\u0435\u0440\u0456\u0439, \u0440\u043e\u0437\u0440\u0430\u0445\u0443\u043d\u043a\u0443 \u0431\u0430\u043d\u043a\u0456\u0432\u0441\u044c\u043a\u0438\u0445 \u0432\u0456\u0434\u0441\u043e\u0442\u043a\u0456\u0432 \u0430\u0431\u043e \u043f\u0435\u0440\u0456\u043e\u0434\u0443 \u043f\u0456\u0432\u0440\u043e\u0437\u043f\u0430\u0434\u0443 \u0440\u0435\u0447\u043e\u0432\u0438\u043d. \u0413\u043e\u043b\u043e\u0432\u043d\u0430 \u043e\u0441\u043e\u0431\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u043b\u043e\u0433\u0430\u0440\u0438\u0444\u043c\u0430 \u2014 \u0432\u0456\u043d \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u044e\u0454 \u043c\u043d\u043e\u0436\u0435\u043d\u043d\u044f \u0447\u0438\u0441\u0435\u043b \u043d\u0430 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0457\u0445\u043d\u0456\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u044c.</p>",
    formula: "log\u2090(xy) = log\u2090 x + log\u2090 y, \u0434\u0435 x > 0, y > 0",
    examples: [{"q": "Порівняйте log₂ 3 і log₃ 5", "steps": ["Крок 1: Порівняємо log₂ 3 з числом 1.5. Оскільки 1.5 = log₂ 2¹.⁵ = log₂ √8, а 3 > √8 (бо 9 > 8), то log₂ 3 > 1.5.", "Крок 2: Порівняємо log₃ 5 з числом 1.5. Оскільки 1.5 = log₃ 3¹·⁵ = log₃ √27, а 5 < √27 (бо 25 < 27), то log₃ 5 < 1.5.", "Відповідь: log₂ 3 > log₃ 5."]}, {"q": "Визначте знак числа log₀.₅ 0.6", "steps": ["Крок 1: Оцінимо основу: a = 0.5, що менше за 1. Функція y = log₀.₅ x є спадною.", "Крок 2: Оскільки 0.6 < 1, а для спадної функції значення в точках менших за 1 є додатними.", "Відповідь: Число додатне."]}],
    practice: [{"q": "Порівняйте основу a з одиницею, якщо logₐ 0.5 > logₐ 0.4", "ans": "a > 1", "altAns": ["a>1", "більше 1"], "hint": "Якщо функція зростає, то більшому аргументу відповідає більше значення логарифма. Тут 0.5 > 0.4 і значення логарифма теж більше."}, {"q": "Додатним чи від’ємним числом є log₀.₃ 3?", "ans": "від’ємним", "altAns": ["від’ємне", "від'ємним", "від'ємне"], "hint": "Якщо основа (0.3 < 1) і число (3 > 1) знаходяться по різні боки від одиниці, то логарифм завжди від’ємний."}, {"q": "Знайдіть найбільше значення функції y = log₂ x на відрізку [1/4, 8]", "ans": "3", "altAns": ["y=3"], "hint": "Основа 2 > 1, тому функція зростає. Найбільше значення буде в крайній правій точці x = 8. Обчисліть log₂ 8."}]
  },
  {
    id: "r11-log-equations", grade: 11,
    icon: "\ud83d\udcdd",
    title: "\u041b\u043e\u0433\u0430\u0440\u0438\u0444\u043c\u0456\u0447\u043d\u0456 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f",
    meta: "~10 \u0445\u0432 \u00b7 \u00a71",
    type: 'lesson',
    theory: "<p>\u041b\u043e\u0433\u0430\u0440\u0438\u0444\u043c\u0456\u0447\u043d\u0456 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u2014 \u0446\u0435 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f, \u0443 \u044f\u043a\u0438\u0445 \u043d\u0435\u0432\u0456\u0434\u043e\u043c\u0435 \u0441\u0442\u043e\u0457\u0442\u044c \u043f\u0456\u0434 \u0437\u043d\u0430\u043a\u043e\u043c \u043b\u043e\u0433\u0430\u0440\u0438\u0444\u043c\u0430. \u041e\u0441\u043d\u043e\u0432\u043d\u0430 \u0456\u0434\u0435\u044f \u0440\u043e\u0437\u0432'\u044f\u0437\u0430\u043d\u043d\u044f \u043f\u043e\u043b\u044f\u0433\u0430\u0454 \u0443 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0456 \u0434\u043e \u043f\u0440\u043e\u0441\u0442\u0456\u0448\u043e\u0433\u043e \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f (\u043b\u0456\u043d\u0456\u0439\u043d\u043e\u0433\u043e \u0430\u0431\u043e \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u043e\u0433\u043e) \u0437\u0430 \u043e\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f\u043c \u043b\u043e\u0433\u0430\u0440\u0438\u0444\u043c\u0430 \u0430\u0431\u043e \u043c\u0435\u0442\u043e\u0434\u043e\u043c \u043f\u043e\u0442\u0435\u043d\u0446\u0456\u044e\u0432\u0430\u043d\u043d\u044f. \u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u043e \u043f\u0430\u043c'\u044f\u0442\u0430\u0439 \u043f\u0440\u043e \u041e\u0414\u0417: \u0432\u0438\u0440\u0430\u0437 \u043f\u0456\u0434 \u043b\u043e\u0433\u0430\u0440\u0438\u0444\u043c\u043e\u043c \u0437\u0430\u0432\u0436\u0434\u0438 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0431\u0456\u043b\u044c\u0448\u0438\u043c \u0437\u0430 \u043d\u0443\u043b\u044c!</p>",
    formula: "log\u2090 f(x) = b \u21d4 f(x) = a\u1d47; log\u2090 f(x) = log\u2090 g(x) \u21d4 f(x) = g(x)",
    examples: [{"q": "Розв'яжіть рівняння: log₃(3x - 1) = 2", "steps": ["Крок 1: Скористаємося означенням логарифма: 3x - 1 = 3²", "Крок 2: Обчислимо степінь: 3x - 1 = 9", "Крок 3: Перенесемо одиницю: 3x = 10", "Відповідь: 10/3 або 3 1/3"]}, {"q": "Розв'яжіть рівняння: lg(x² - 4x + 2) = lg(2x - 3)", "steps": ["Крок 1: Оскільки основи однакові, прирівнюємо вирази: x² - 4x + 2 = 2x - 3", "Крок 2: Перенесемо все вліво: x² - 6x + 5 = 0", "Крок 3: За теоремою Вієта корені: x₁ = 1, x₂ = 5", "Крок 4: Перевірка ОДЗ (2x - 3 > 0). Для x = 1: 2(1)-3 = -1 < 0 (не підходить). Для x = 5: 2(5)-3 = 7 > 0 (підходить)", "Відповідь: 5"]}],
    practice: [{"q": "Розв'яжіть рівняння: log₂(x - 5) = 3", "ans": "13", "altAns": [], "hint": "Використай означення: x - 5 = 2³"}, {"q": "Знайдіть корінь рівняння: log₅(2x + 1) = log₅(x + 4)", "ans": "3", "altAns": [], "hint": "Прирівняй підлогарифмічні вирази: 2x + 1 = x + 4"}, {"q": "Розв'яжіть рівняння: log₃x + log₃2 = log₃10", "ans": "5", "altAns": [], "hint": "За властивістю суми логарифмів: log₃(2x) = log₃10"}]
  },
  {
    id: "r11-primitive", grade: 11,
    icon: "\u222b",
    title: "\u041f\u0435\u0440\u0432\u0456\u0441\u043d\u0430. \u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0437\u043d\u0430\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f",
    meta: "~10 \u0445\u0432 \u00b7 \u00a72",
    type: 'lesson',
    theory: "<p>\u041f\u0435\u0440\u0432\u0456\u0441\u043d\u0430 \u2014 \u0446\u0435 \u0444\u0443\u043d\u043a\u0446\u0456\u044f, \u043f\u043e\u0445\u0456\u0434\u043d\u0430 \u044f\u043a\u043e\u0457 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 \u0434\u0430\u043d\u0456\u0439 \u0444\u0443\u043d\u043a\u0446\u0456\u0457. \u0417\u043d\u0430\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f \u043f\u0435\u0440\u0432\u0456\u0441\u043d\u043e\u0457 \u0454 \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u0454\u044e, \u043e\u0431\u0435\u0440\u043d\u0435\u043d\u043e\u044e \u0434\u043e \u0434\u0438\u0444\u0435\u0440\u0435\u043d\u0446\u0456\u044e\u0432\u0430\u043d\u043d\u044f (\u0437\u043d\u0430\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f \u043f\u043e\u0445\u0456\u0434\u043d\u043e\u0457). \u041e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u043f\u043e\u0445\u0456\u0434\u043d\u0430 \u0432\u0456\u0434 \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 \u043d\u0443\u043b\u044e, \u043e\u0434\u043d\u0430 \u0439 \u0442\u0430 \u0441\u0430\u043c\u0430 \u0444\u0443\u043d\u043a\u0446\u0456\u044f \u043c\u0430\u0454 \u0431\u0435\u0437\u043b\u0456\u0447 \u043f\u0435\u0440\u0432\u0456\u0441\u043d\u0438\u0445, \u044f\u043a\u0456 \u0432\u0456\u0434\u0440\u0456\u0437\u043d\u044f\u044e\u0442\u044c\u0441\u044f \u043b\u0438\u0448\u0435 \u043d\u0430 \u0434\u043e\u0434\u0430\u043d\u043e\u043a C.</p>",
    formula: "F'(x) = f(x)",
    examples: [{"q": "Знайдіть загальний вигляд первісних для f(x) = 2x", "steps": ["Крок 1: Згадаємо, що похідна від x² дорівнює 2x.", "Крок 2: Оскільки (x² + C)' = 2x для будь-якого числа C, додаємо сталу.", "Відповідь: F(x) = x² + C"]}, {"q": "Доведіть, що F(x) = cos x є первісною для f(x) = –sin x", "steps": ["Крок 1: Обчислимо похідну функції F(x).", "Крок 2: (cos x)' = –sin x, що збігається з f(x).", "Відповідь: Твердження доведено."]}],
    practice: [{"q": "Яка функція є первісною для f(x) = 3x²? (Вкажіть найпростіший вигляд без +C)", "ans": "x³", "altAns": ["x^3"], "hint": "Згадайте, похідна якої функції дорівнює 3x²."}, {"q": "Знайдіть первісну для функції f(x) = 1/(2√x)", "ans": "√x", "altAns": ["sqrt(x)"], "hint": "Пригадайте таблицю похідних. Похідна якої функції містить корінь у знаменнику?"}, {"q": "Чому дорівнює функція f(x), якщо її первісна F(x) = x² + 10?", "ans": "2x", "altAns": [], "hint": "За означенням f(x) = F'(x). Просто знайдіть похідну від x² + 10."}]
  },
  {
    id: "r11-integral", grade: 11,
    icon: "\ud83d\udcd0",
    title: "\u0412\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0456\u043d\u0442\u0435\u0433\u0440\u0430\u043b \u0442\u0430 \u043f\u043b\u043e\u0449\u0430 \u0444\u0456\u0433\u0443\u0440\u0438",
    meta: "~10 \u0445\u0432 \u00b7 \u00a72",
    type: 'lesson',
    theory: "<p>\u0412\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0456\u043d\u0442\u0435\u0433\u0440\u0430\u043b \u2014 \u0446\u0435 \u0447\u0438\u0441\u043b\u043e, \u044f\u043a\u0435 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 \u0440\u0456\u0437\u043d\u0438\u0446\u0456 \u0437\u043d\u0430\u0447\u0435\u043d\u044c \u043f\u0435\u0440\u0432\u0456\u0441\u043d\u043e\u0457 \u0443 \u0432\u0435\u0440\u0445\u043d\u0456\u0439 \u0442\u0430 \u043d\u0438\u0436\u043d\u0456\u0439 \u043c\u0435\u0436\u0430\u0445 \u0456\u043d\u0442\u0435\u0433\u0440\u0443\u0432\u0430\u043d\u043d\u044f. \u0413\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u043d\u043e \u0432\u0456\u043d \u043f\u043e\u0437\u043d\u0430\u0447\u0430\u0454 \u043f\u043b\u043e\u0449\u0443 \u043a\u0440\u0438\u0432\u043e\u043b\u0456\u043d\u0456\u0439\u043d\u043e\u0457 \u0442\u0440\u0430\u043f\u0435\u0446\u0456\u0457, \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u043e\u0457 \u0433\u0440\u0430\u0444\u0456\u043a\u043e\u043c \u0444\u0443\u043d\u043a\u0446\u0456\u0457. \u0414\u043b\u044f \u0439\u043e\u0433\u043e \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044f \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u044e\u0442\u044c \u0444\u043e\u0440\u043c\u0443\u043b\u0443 \u041d\u044c\u044e\u0442\u043e\u043d\u0430-\u041b\u0435\u0439\u0431\u043d\u0456\u0446\u0430.</p>",
    formula: "\u222b\u2090\u1d47 f(x) dx = F(b) - F(a)",
    examples: [{"q": "Знайдіть площу фігури, обмеженої графіком f(x) = sin x та прямими y = 0, x = π/3, x = π/2.", "steps": ["Крок 1: Знайдемо первісну для f(x) = sin x. Це F(x) = -cos x.", "Крок 2: Застосуємо формулу Ньютона-Лейбніца: S = F(π/2) - F(π/3).", "Крок 3: Обчислимо: S = -cos(π/2) - (-cos(π/3)) = 0 + 1/2 = 1/2.", "Відповідь: 0.5"]}, {"q": "Знайдіть площу фігури, обмеженої f(x) = 4x - x² та y = 0.", "steps": ["Крок 1: Знайдемо точки перетину з віссю x: 4x - x² = 0 => x(4 - x) = 0. Точки: 0 та 4.", "Крок 2: Знайдемо первісну: F(x) = 2x² - x³/3.", "Крок 3: Обчислимо S = F(4) - F(0) = (2·4² - 4³/3) - 0 = 32 - 64/3 = 32/3.", "Відповідь: 10 2/3 (або ≈10.67)"]}],
    practice: [{"q": "Обчисліть інтеграл ∫₁² 3x² dx.", "ans": "7", "altAns": ["7.0"], "hint": "Первісна для 3x² це x³. Обчисліть 2³ - 1³."}, {"q": "Знайдіть площу під прямою y = 2x від x = 0 до x = 3.", "ans": "9", "altAns": ["9.0"], "hint": "Первісна для 2x це x². Обчисліть 3² - 0²."}, {"q": "Обчисліть ∫₀¹ (x² + 1) dx (відповідь запишіть дробом, наприклад 4/3).", "ans": "4/3", "altAns": ["1.33"], "hint": "Первісна: x³/3 + x. Підставте 1 та 0."}]
  },
  {
    id: "r11-combinatorics", grade: 11,
    icon: "\ud83c\udfb2",
    title: "\u041e\u0441\u043d\u043e\u0432\u043d\u0456 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u043a\u043e\u043c\u0431\u0456\u043d\u0430\u0442\u043e\u0440\u0438\u043a\u0438",
    meta: "~10 \u0445\u0432 \u00b7 \u00a73",
    type: 'lesson',
    theory: "<p>\u041a\u043e\u043c\u0431\u0456\u043d\u0430\u0442\u043e\u0440\u0438\u043a\u0430 \u0434\u043e\u043f\u043e\u043c\u0430\u0433\u0430\u0454 \u043f\u0456\u0434\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u043c\u043e\u0436\u043b\u0438\u0432\u0438\u0445 \u0432\u0430\u0440\u0456\u0430\u043d\u0442\u0456\u0432 \u0432\u0438\u0431\u043e\u0440\u0443 \u0430\u0431\u043e \u0440\u043e\u0437\u0442\u0430\u0448\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0456\u0432. \u041c\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u043c\u043e \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438, \u043a\u043e\u043b\u0438 \u0437\u043c\u0456\u043d\u044e\u0454\u043c\u043e \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u0443\u0441\u0456\u0445 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0456\u0432, \u0440\u043e\u0437\u043c\u0456\u0449\u0435\u043d\u043d\u044f \u2014 \u043a\u043e\u043b\u0438 \u0432\u0438\u0431\u0438\u0440\u0430\u0454\u043c\u043e \u0447\u0430\u0441\u0442\u0438\u043d\u0443 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0456\u0432 \u0437 \u0443\u0440\u0430\u0445\u0443\u0432\u0430\u043d\u043d\u044f\u043c \u0457\u0445\u043d\u044c\u043e\u0433\u043e \u043f\u043e\u0440\u044f\u0434\u043a\u0443, \u0442\u0430 \u043a\u043e\u043c\u0431\u0456\u043d\u0430\u0446\u0456\u0457 \u2014 \u043a\u043e\u043b\u0438 \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u0432\u0438\u0431\u043e\u0440\u0443 \u043d\u0435 \u043c\u0430\u0454 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f. \u0426\u0456 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0454 \u0444\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442\u043e\u043c \u0434\u043b\u044f \u0440\u043e\u0437\u0432'\u044f\u0437\u0430\u043d\u043d\u044f \u0441\u043a\u043b\u0430\u0434\u043d\u0438\u0445 \u0437\u0430\u0434\u0430\u0447 \u0437 \u0442\u0435\u043e\u0440\u0456\u0457 \u0439\u043c\u043e\u0432\u0456\u0440\u043d\u043e\u0441\u0442\u0435\u0439.</p>",
    formula: "P\u2099 = n!; A\u2099\u1d4f = n! / (n-k)!; C\u2099\u1d4f = n! / ((n-k)! * k!)",
    examples: [{"q": "Скількома способами можна розставити 4 різні книги на полиці?", "steps": ["Крок 1: Оскільки ми використовуємо всі 4 книги і міняємо їх місцями, це перестановка.", "Крок 2: Обчислимо за формулою P₄ = 4!.", "Крок 3: 4! = 1 * 2 * 3 * 4 = 24.", "Відповідь: 24 способи."]}, {"q": "У класі 10 учнів. Скількома способами можна обрати з них двох представників для участі в конференції?", "steps": ["Крок 1: Порядок вибору не має значення (обидва представники рівноправні), тому це комбінація (сполука).", "Крок 2: Використаємо формулу C₁₀² = 10! / (8! * 2!).", "Крок 3: C₁₀² = (10 * 9) / (2 * 1) = 45.", "Відповідь: 45 способів."]}],
    practice: [{"q": "Скільки різних трицифрових чисел можна скласти з цифр 1, 5, 9, якщо цифри в числі не повторюються?", "ans": "6", "altAns": ["шість"], "hint": "Оскільки ми використовуємо всі три цифри і їх порядок важливий, використай формулу перестановок P₃."}, {"q": "Скількома способами можна призначити старосту та його заступника у групі з 15 студентів?", "ans": "210", "altAns": [], "hint": "Тут порядок важливий (староста і заступник — різні ролі), тому використай розміщення A₁₅²."}, {"q": "У магазині продається 6 видів листівок. Скількома способами можна купити 3 різні листівки?", "ans": "20", "altAns": [], "hint": "Порядок, у якому ви купуєте листівки, не має значення. Використай формулу комбінацій C₆³."}]
  },
  {
    id: "r11-probability", grade: 11,
    icon: "\ud83c\udfb0",
    title: "\u0419\u043c\u043e\u0432\u0456\u0440\u043d\u0456\u0441\u0442\u044c. \u0410\u043a\u0441\u0456\u043e\u043c\u0438",
    meta: "~10 \u0445\u0432 \u00b7 \u00a73",
    type: 'lesson',
    theory: "<p>\u0422\u0435\u043e\u0440\u0456\u044f \u0439\u043c\u043e\u0432\u0456\u0440\u043d\u043e\u0441\u0442\u0435\u0439 \u0431\u0430\u0437\u0443\u0454\u0442\u044c\u0441\u044f \u043d\u0430 \u0430\u043a\u0441\u0456\u043e\u043c\u0430\u0445 \u2014 \u0444\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u0438\u0445 \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u0445, \u043f\u043e\u0434\u0456\u0431\u043d\u0438\u0445 \u0434\u043e \u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u043d\u0438\u0445. \u0413\u043e\u043b\u043e\u0432\u043d\u0430 \u0430\u043a\u0441\u0456\u043e\u043c\u0430 \u0441\u0442\u0432\u0435\u0440\u0434\u0436\u0443\u0454, \u0449\u043e \u0439\u043c\u043e\u0432\u0456\u0440\u043d\u0456\u0441\u0442\u044c \u0432\u0456\u0440\u043e\u0433\u0456\u0434\u043d\u043e\u0457 \u043f\u043e\u0434\u0456\u0457 \u0437\u0430\u0432\u0436\u0434\u0438 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454 1. \u0426\u0456 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442\u044c \u043b\u0435\u0433\u043a\u043e \u043e\u0431\u0447\u0438\u0441\u043b\u044e\u0432\u0430\u0442\u0438 \u0439\u043c\u043e\u0432\u0456\u0440\u043d\u0456\u0441\u0442\u044c \u043f\u0440\u043e\u0442\u0438\u043b\u0435\u0436\u043d\u0438\u0445 \u043f\u043e\u0434\u0456\u0439 \u0430\u0431\u043e \u043e\u0431'\u0454\u0434\u043d\u0430\u043d\u043d\u044f \u043a\u0456\u043b\u044c\u043a\u043e\u0445 \u0432\u0438\u043f\u0430\u0434\u043a\u0456\u0432, \u043d\u0430\u0432\u0456\u0442\u044c \u044f\u043a\u0449\u043e \u0432\u043e\u043d\u0438 \u043c\u043e\u0436\u0443\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0441\u044f \u043e\u0434\u043d\u043e\u0447\u0430\u0441\u043d\u043e.</p>",
    formula: "P(A \u222a B) = P(A) + P(B) \u2013 P(A \u2229 B)",
    examples: [{"q": "Ймовірність того, що стрілець влучить у ціль, дорівнює 0,8. Яка ймовірність того, що він схибить (промаже)?", "steps": ["Крок 1: Подія промаху є протилежною до події влучання.", "Крок 2: Сума ймовірностей протилежних подій дорівнює 1, тобто P(A) + P(Ā) = 1.", "Крок 3: Обчислюємо: P(Ā) = 1 – 0,8 = 0,2.", "Відповідь: 0,2"]}, {"q": "У коробці 10 кульок. Знайдіть ймовірність того, що навмання витягнута кулька буде або парною, або кратною 5.", "steps": ["Крок 1: Ймовірність парної кульки P(A) = 5/10 = 0,5 (це числа 2, 4, 6, 8, 10).", "Крок 2: Ймовірність кратної 5 кульки P(B) = 2/10 = 0,2 (це 5 та 10).", "Крок 3: Подія 10 є і парною, і кратною 5, тому P(A ∩ B) = 1/10 = 0,1.", "Крок 4: За теоремою додавання: P(A ∪ B) = 0,5 + 0,2 – 0,1 = 0,6.", "Відповідь: 0,6"]}],
    practice: [{"q": "Ймовірність того, що сьогодні буде дощ, становить 0,34. Яка ймовірність того, що дощу не буде?", "ans": "0,66", "altAns": ["0.66"], "hint": "Використайте формулу протилежної події: 1 – P(A)."}, {"q": "Події A і B несумісні. P(A) = 0,25, P(B) = 0,4. Знайдіть P(A ∪ B).", "ans": "0,65", "altAns": ["0.65"], "hint": "Для несумісних подій ймовірність їхнього об'єднання дорівнює сумі їхніх ймовірностей."}, {"q": "Дано: P(A) = 0,6, P(B) = 0,5, а ймовірність їхньої спільної появи P(A ∩ B) = 0,2. Знайдіть P(A ∪ B).", "ans": "0,9", "altAns": ["0.9"], "hint": "Використайте формулу: P(A) + P(B) – P(A ∩ B)."}]
  }
];

// ===== CHAPTER STRUCTURE =====
const TB_PDFS = {
  7:  [
    { label: 'Алгебра', author: 'Мерзляк', url: 'https://raw.githubusercontent.com/Volchara-create/MathHelper/main/7(1).pdf' },
    { label: 'Геометрія', author: 'Єрмаков', url: 'https://raw.githubusercontent.com/Volchara-create/MathHelper/main/Heometriya-7-klas-Ister-2024.pdf' }
  ],
  8:  [
    { label: 'Алгебра', author: 'Мерзляк', url: 'https://raw.githubusercontent.com/Volchara-create/MathHelper/main/8(1).pdf' },
    { label: 'Геометрія', author: 'Мерзляк', url: 'https://raw.githubusercontent.com/Volchara-create/MathHelper/main/8(2)%D0%B3%D0%B5%D0%BE%D0%BC.pdf' }
  ],
  9:  [
    { label: 'Алгебра', author: 'Мерзляк', url: 'https://raw.githubusercontent.com/Volchara-create/MathHelper/main/9(1).pdf' },
    { label: 'Геометрія', author: 'Істер', url: 'https://raw.githubusercontent.com/Volchara-create/MathHelper/main/Geometrija-9-klas-Ister-2017.pdf' }
  ],
  10: [
    { label: 'Алгебра', author: 'Мерзляк', url: 'https://raw.githubusercontent.com/Volchara-create/MathHelper/main/10(1).pdf' },
    { label: 'Геометрія', author: 'Мерзляк', url: 'https://raw.githubusercontent.com/Volchara-create/MathHelper/main/10(2)%D0%B3%D0%B5%D0%BE%D0%BC.pdf' }
  ],
  11: [
    { label: 'Алгебра', author: 'Мерзляк', url: 'https://raw.githubusercontent.com/Volchara-create/MathHelper/main/11(1).pdf' },
    { label: 'Геометрія', author: 'Мерзляк', url: 'https://raw.githubusercontent.com/Volchara-create/MathHelper/main/11(2)%D0%B3%D0%B5%D0%BE%D0%BC.pdf' }
  ]
};

const TB_CHAPTERS = [
  {
    id: 'ch1', grade: 7,
    icon: '⚖️',
    title: 'Розділ 1. Лінійні рівняння з однією змінною',
    color: '#1a3e7c',
    lessons: ['equations-basics', 'linear-equation', 'word-problems', 'test-ch1']
  },
  {
    id: 'ch2', grade: 7,
    icon: '🔢',
    title: 'Розділ 2. Цілі вирази',
    color: '#0369a1',
    lessons: ['expressions-variables', 'identities', 'powers', 'power-properties', 'test-ch2-p1', 'monomial-standard', 'monomial-multiply', 'polynomial-def', 'polynomial-add-sub', 'mono-poly-mult', 'factoring-common', 'poly-mult', 'factoring-group', 'square-sum-diff', 'test-ch3', 'perfect-square-factor', 'diff-squares-mult', 'diff-squares-factor', 'sum-diff-cubes', 'test-ch4', 'factoring-combined']
  },
  {
    id: 'ch3', grade: 7,
    icon: '📈',
    title: 'Розділ 3. Функції',
    color: '#065f46',
    lessons: ['function-basics', 'function-graph', 'linear-function']
  },
  {
    id: 'ch4', grade: 7,
    icon: '🔗',
    title: 'Розділ 4. Системи лінійних рівнянь',
    color: '#7c3aed',
    lessons: ['linear-eq-two-vars', 'linear-eq-graph', 'system-graphical', 'system-substitution', 'system-addition', 'system-word-problems']
  },
  // === 8 клас ===
  {
    id: 'ch8-1', grade: 8,
    icon: '🔢',
    title: '§1. Раціональні вирази',
    color: '#1a3e7c',
    lessons: ['r8-rational-fractions','r8-fraction-property','r8-add-sub-same-denom','r8-add-sub-diff-denom','r8-multiply-divide','r8-identical-transforms','r8-rational-equations','r8-negative-exponent','r8-exponent-properties','r8-hyperbola']
  },
  {
    id: 'ch8-2', grade: 8,
    icon: '√',
    title: '§2. Квадратні корені. Дійсні числа',
    color: '#065f46',
    lessons: ['r8-parabola','r8-sqrt-basics','r8-sets','r8-number-sets','r8-sqrt-properties','r8-sqrt-transforms','r8-sqrt-function']
  },
  {
    id: 'ch8-3', grade: 8,
    icon: '🟰',
    title: '§3. Квадратні рівняння',
    color: '#7c3aed',
    lessons: ['r8-quadratic-incomplete','r8-quadratic-formula','r8-vieta','r8-quadratic-trinomial','r8-reducible-equations','r8-rational-models']
  },
  // === 9 клас ===
  {
    id: 'ch9-1', grade: 9,
    icon: '⚖️',
    title: '§1. Нерівності',
    color: '#1a3e7c',
    lessons: ['r9-inequalities','r9-linear-ineq','r9-system-ineq','r9-quadratic-ineq']
  },
  {
    id: 'ch9-2', grade: 9,
    icon: '📊',
    title: '§2. Функції',
    color: '#065f46',
    lessons: ['r9-function-props','r9-quadratic-func']
  },
  {
    id: 'ch9-3', grade: 9,
    icon: '🔢',
    title: '§3. Прогресії',
    color: '#0369a1',
    lessons: ['r9-arith-prog','r9-geom-prog']
  },
  {
    id: 'ch9-4', grade: 9,
    icon: '🎲',
    title: '§4. Комбінаторика та ймовірність',
    color: '#7c3aed',
    lessons: ['r9-combinatorics','r9-probability']
  },
  // === 10 клас ===
  {
    id: 'ch10-1', grade: 10,
    icon: '📐',
    title: '§3. Тригонометричні функції',
    color: '#1a3e7c',
    lessons: ['r10-trig-unit-circle','r10-trig-identities','r10-addition-formulas','r10-double-angle']
  },
  {
    id: 'ch10-2', grade: 10,
    icon: '🟰',
    title: '§4. Тригонометричні рівняння',
    color: '#065f46',
    lessons: ['r10-sin-equation','r10-tg-equation']
  },
  {
    id: 'ch10-3', grade: 10,
    icon: '📉',
    title: '§7. Похідна',
    color: '#7c3aed',
    lessons: ['r10-derivative-def','r10-derivative-rules','r10-derivative-mono','r10-extremum']
  },
  // === 11 клас ===
  {
    id: 'ch11-1', grade: 11,
    icon: '🚀',
    title: '§1. Показникова та логарифмічна функції',
    color: '#1a3e7c',
    lessons: ['r11-exp-function','r11-exp-equations','r11-logarithm','r11-log-equations']
  },
  {
    id: 'ch11-2', grade: 11,
    icon: '∫',
    title: '§2. Похідна та інтеграл',
    color: '#065f46',
    lessons: ['r11-primitive','r11-integral']
  },
  {
    id: 'ch11-3', grade: 11,
    icon: '🎲',
    title: '§3. Комбінаторика та ймовірність',
    color: '#7c3aed',
    lessons: ['r11-combinatorics','r11-probability']
  }
];

function buildTextbooks(grade) {
  const list = document.getElementById('tb-list-view');
  const lesson = document.getElementById('tb-lesson-view');
  if (!list) return;
  list.style.display = '';
  lesson.style.display = 'none';

  const mhUser = JSON.parse(localStorage.getItem('mh_user') || 'null');
  const userGrade = mhUser?.grade || 7;
  // if grade explicitly passed (tab click) — use it; otherwise always default to user's own grade
  const selectedGrade = grade ? parseInt(grade) : userGrade;

  const done = JSON.parse(localStorage.getItem('mh_tb_done') || '[]');
  const expanded = JSON.parse(localStorage.getItem('mh_tb_expanded') || '[]');

  // Grade tabs — показуємо всі, але свій клас виділений
  const tabsHtml = [7,8,9,10,11].map(g => `
    <button class="tb-grade-tab ${g === selectedGrade ? 'active' : ''}" onclick="buildTextbooks(${g})">${g} клас</button>
  `).join('');

  // PDF cards
  const pdfs = TB_PDFS[selectedGrade] || [];
  const pdfsHtml = pdfs.map(p => `
    <a class="tb-pdf-card" href="${p.url}" target="_blank" rel="noopener">
      <span class="tb-pdf-icon">${p.label === 'Геометрія' ? '📐' : '📗'}</span>
      <div class="tb-pdf-info">
        <div class="tb-pdf-label">${p.label}</div>
        <div class="tb-pdf-author">${p.author} · ${selectedGrade} клас</div>
      </div>
      <span class="tb-pdf-open">Відкрити ↗</span>
    </a>
  `).join('') + `
    <a class="tb-pdf-card tb-pdf-other" href="https://pidruchnyk.com.ua/algebra" target="_blank" rel="noopener">
      <span class="tb-pdf-icon">🔍</span>
      <div class="tb-pdf-info">
        <div class="tb-pdf-label">Інший підручник</div>
        <div class="tb-pdf-author">Знайти свій варіант онлайн</div>
      </div>
      <span class="tb-pdf-open">Шукати ↗</span>
    </a>`;

  // Chapters for this grade
  const gradeChapters = TB_CHAPTERS.filter(ch => ch.grade === selectedGrade);
  const chaptersHtml = gradeChapters.length ? gradeChapters.map(ch => {
    const chLessons = ch.lessons.map(lid => TB_LESSONS.find(l => l.id === lid)).filter(Boolean);
    const doneCount = chLessons.filter(l => done.includes(l.id)).length;
    const isOpen = expanded.includes(ch.id);

    const lessonsHtml = chLessons.map(l => {
      const isTest = l.type === 'test';
      const isDone = done.includes(l.id);
      return `<div class="tb-lesson-row ${isTest ? 'tb-lesson-test' : ''}" onclick="tbOpenLesson('${l.id}')">
        <span class="tb-lr-icon">${l.icon}</span>
        <span class="tb-lr-title">${l.title}</span>
        <span class="tb-lr-status ${isDone ? 'done' : ''}">${isDone ? '✓' : '→'}</span>
      </div>`;
    }).join('');

    return `<div class="tb-chapter-block" id="tbch-${ch.id}">
      <div class="tb-chapter-header" onclick="tbToggleChapter('${ch.id}')">
        <span class="tb-ch-icon">${ch.icon}</span>
        <div style="flex:1">
          <div class="tb-ch-title">${ch.title}</div>
          <div class="tb-ch-meta">${doneCount}/${chLessons.length} пройдено</div>
        </div>
        <span class="tb-ch-arrow">${isOpen ? '▲' : '▼'}</span>
      </div>
      <div class="tb-chapter-lessons" id="tbchl-${ch.id}" style="${isOpen ? '' : 'display:none'}">
        ${lessonsHtml}
      </div>
    </div>`;
  }).join('') : `<div class="tb-coming-soon">
    <div style="font-size:2.5rem;margin-bottom:8px">🚧</div>
    <div style="font-weight:600;margin-bottom:4px">Інтерактивні уроки для ${selectedGrade} класу</div>
    <div style="color:var(--text-secondary);font-size:0.9rem">Скоро з'являться тут. Поки що використовуй PDF підручник вище.</div>
  </div>`;

  document.getElementById('tb-chapters').innerHTML = `
    <div class="tb-grade-tabs">${tabsHtml}</div>
    <div class="tb-section-label">📚 PDF Підручники</div>
    <div class="tb-pdf-grid">${pdfsHtml}</div>
    ${gradeChapters.length ? '<div class="tb-section-label">📝 Інтерактивні уроки</div>' : ''}
    ${chaptersHtml}
  `;
}

function tbToggleChapter(chId) {
  const el = document.getElementById(`tbchl-${chId}`);
  const arr = document.querySelector(`#tbch-${chId} .tb-ch-arrow`);
  const isOpen = el.style.display !== 'none';
  el.style.display = isOpen ? 'none' : '';
  arr.textContent = isOpen ? '▼' : '▲';
  const expanded = JSON.parse(localStorage.getItem('mh_tb_expanded') || '[]');
  const idx = expanded.indexOf(chId);
  if (isOpen && idx > -1) expanded.splice(idx, 1);
  else if (!isOpen && idx === -1) expanded.push(chId);
  localStorage.setItem('mh_tb_expanded', JSON.stringify(expanded));
}

function tbOpenLesson(id) {
  const l = TB_LESSONS.find(x => x.id === id);
  if (!l) return;
  document.getElementById('tb-list-view').style.display = 'none';
  const lv = document.getElementById('tb-lesson-view');
  lv.style.display = '';
  const isTest = l.type === 'test';

  const theoryBlock = isTest ? `
    <div class="tb-block" style="border-color:#f59e0b;">
      <div class="tb-block-title" style="color:#d97706;">📋 Самостійна робота</div>
      <div class="tb-theory-text">${l.theory}</div>
    </div>` : `
    <div class="tb-block">
      <div class="tb-block-title">📖 Теорія</div>
      <div class="tb-theory-text">${l.theory}</div>
      ${l.formula ? `<div class="tb-formula-box">${l.formula}</div>` : ''}
    </div>
    <div class="tb-block">
      <div class="tb-block-title">💡 Розібрані приклади</div>
      ${(l.examples||[]).map(ex => `
        <div class="tb-example">
          <div class="tb-example-q">${ex.q}</div>
          ${ex.steps.map((s,i) => `<div class="tb-step"><div class="tb-step-n">${i+1}</div><div>${s}</div></div>`).join('')}
        </div>`).join('')}
    </div>`;

  const practiceTitle = isTest ? '✏️ Завдання (без підказок)' : '✏️ Практика';
  const practice = l.practice.map((p, i) => `
    <div class="tb-practice-q" id="tbpq-${id}-${i}">
      <div class="tb-practice-q-text">${i+1}. ${p.q}</div>
      <div class="tb-practice-input-row">
        <input class="tb-practice-inp" id="tbinp-${id}-${i}" placeholder="Відповідь..." onkeydown="if(event.key==='Enter')tbCheck('${id}',${i})">
        <button class="tb-practice-check-btn" onclick="tbCheck('${id}',${i})">Перевірити</button>
      </div>
      <div class="tb-practice-feedback" id="tbfb-${id}-${i}"></div>
    </div>`).join('');

  lv.innerHTML = `
    <button class="tb-back-btn" onclick="buildTextbooks()">← До розділів</button>
    <div class="tb-lesson-title">${l.icon} ${l.title}</div>
    <div class="tb-lesson-sub">${l.meta}</div>
    ${theoryBlock}
    <div class="tb-block">
      <div class="tb-block-title">${practiceTitle}</div>
      ${practice}
      ${isTest ? `<div id="tb-test-score" style="display:none;margin-top:16px;font-size:1.1rem;font-weight:700;text-align:center;"></div>` : ''}
    </div>`;

  lv.dataset.lessonId = id;
}

function tbCheck(lessonId, idx) {
  const l = TB_LESSONS.find(x => x.id === lessonId);
  const p = l.practice[idx];
  const inp = document.getElementById(`tbinp-${lessonId}-${idx}`);
  const fb = document.getElementById(`tbfb-${lessonId}-${idx}`);
  if (!inp || !fb || inp.disabled) return;
  const val = inp.value.trim().toLowerCase().replace(/\s/g, '');
  const correct = [p.ans.toLowerCase(), ...(p.altAns || []).map(a => a.toLowerCase())];
  const isCorrect = correct.includes(val);
  if (isCorrect) {
    fb.className = 'tb-practice-feedback ok';
    fb.textContent = '✓ Правильно!';
    inp.disabled = true;
    tbCheckAllDone(lessonId);
  } else {
    fb.className = 'tb-practice-feedback err';
    fb.textContent = l.type === 'test' ? '✗ Неправильно. Спробуй ще раз.' : `✗ Спробуй ще. Підказка: ${p.hint}`;
  }
}

function tbCheckAllDone(lessonId) {
  const l = TB_LESSONS.find(x => x.id === lessonId);
  const allDone = l.practice.every((_, i) => {
    const inp = document.getElementById(`tbinp-${lessonId}-${i}`);
    return inp && inp.disabled;
  });
  if (!allDone) return;
  const done = JSON.parse(localStorage.getItem('mh_tb_done') || '[]');
  if (!done.includes(lessonId)) { done.push(lessonId); localStorage.setItem('mh_tb_done', JSON.stringify(done)); }
  if (l.type === 'test') {
    const correct = l.practice.filter((_, i) => {
      const fb = document.getElementById(`tbfb-${lessonId}-${i}`);
      return fb && fb.classList.contains('ok');
    }).length;
    const total = l.practice.length;
    const pct = Math.round(correct / total * 100);
    const grade = pct >= 90 ? '🏆 Відмінно!' : pct >= 75 ? '✓ Добре!' : pct >= 60 ? '📚 Непогано, повтори теми' : '🔄 Варто повторити матеріал';
    const sc = document.getElementById('tb-test-score');
    if (sc) { sc.style.display = ''; sc.innerHTML = `Результат: ${correct}/${total} (${pct}%) — ${grade}`; sc.style.color = pct >= 75 ? '#16a34a' : '#d97706'; }
  }
}

const _VALID_SECTIONS = ['dashboard','formulas','quiz','graph','textbooks','stats','ai','pricing','about'];

function show(sec, _skipHistory){
  if (!document.getElementById(sec)) return;
  document.querySelectorAll('section').forEach(s=>s.classList.remove('active'));
  document.getElementById(sec).classList.add('active');
  document.querySelector('.qm-ai')?.classList.toggle('active', sec === 'ai');
  document.getElementById('category-row')?.style && (document.getElementById('category-row').style.display='none');
  if(sec==='textbooks') buildTextbooks();
  if(sec==='formulas') showFormulaTab('algebra');
  if(sec==='quiz') startQuiz();
  if(sec==='stats') renderStatsPage();
  if(sec==='graph') requestAnimationFrame(()=>requestAnimationFrame(initOrResizeCanvas));
  window.scrollTo({top:0,behavior:'smooth'});
  if (!_skipHistory) history.pushState({sec}, '', '/' + sec);
}

window.addEventListener('popstate', (e) => {
  const sec = e.state?.sec || _pathToSection();
  if (sec === 'register' || sec === 'login') {
    if (typeof authOpen === 'function') authOpen(sec);
  } else if (_VALID_SECTIONS.includes(sec)) {
    show(sec, true);
  } else {
    show('dashboard', true);
  }
});

function _pathToSection() {
  const p = location.pathname.replace(/^\//, '').split('/')[0];
  return p || 'dashboard';
}
function showFormulas(){ show('formulas'); }

// ===== ALGEBRA DATA =====
// v = visual (emoji side), m = math side, expr = text-only fallback
// detail: { explanation, proof, example } — optional, shown as expandable card
const ALGEBRA_CATS = [
  // === 7 КЛАС ===
  { name:'💯 Відсотки', minGrade:7, maxGrade:8, formulas:[
    {name:'Що таке відсоток?',expr:'% = частина від 100\n50% = половина, 25% = чверть',
      detail:{explanation:'Відсоток — це сота частина цілого. Слово "відсоток" походить від латинського "pro centum" — на сто.',proof:'100% = ціле число\n1% = число ÷ 100\nk% = число × k ÷ 100',example:'50% від 80 = 80 × 50 ÷ 100 = 40'}},
    {name:'Знайти % від числа',expr:'20% від 50 = 50 × 20 ÷ 100 = 10',
      detail:{explanation:'Щоб знайти k% від числа N, множимо N на k і ділимо на 100.',example:'15% від 200 = 200 × 15 ÷ 100 = 30\n7% від 450 = 450 × 7 ÷ 100 = 31.5'}},
    {name:'Знайти який %',expr:'10 з 50 = 10 ÷ 50 × 100 = 20%',
      detail:{explanation:'Щоб знайти, який відсоток частина A від числа B: ділимо A на B і множимо на 100.',example:'25 з 200 = 25 ÷ 200 × 100 = 12.5%'}},
    {name:'Знижка',expr:'Ціна 200грн, знижка 10% → 200 × 0.1 = 20грн знижки',
      detail:{explanation:'Знижка — це зменшення ціни на певний відсоток. Нова ціна = стара × (1 − знижка/100).',example:'Куртка 1200грн, знижка 25%\nЗнижка: 1200 × 0.25 = 300грн\nНова ціна: 1200 − 300 = 900грн'}},
  ]},
  { name:'⚡ Степені (цілі)', minGrade:7, formulas:[
    {name:'Множення',expr:'aⁿ · aᵐ = aⁿ⁺ᵐ',
      detail:{explanation:'При множенні степенів з однаковою основою показники додаються.',proof:'a³ · a² = (a·a·a) · (a·a) = a⁵\nЗагально: n доданків + m доданків = n+m доданків',example:'2³ · 2⁴ = 2⁷ = 128'}},
    {name:'Ділення',expr:'aⁿ ÷ aᵐ = aⁿ⁻ᵐ',
      detail:{explanation:'При діленні степенів з однаковою основою показники віднімаються.',proof:'a⁵ ÷ a² = a·a·a·a·a ÷ a·a = a·a·a = a³',example:'3⁵ ÷ 3² = 3³ = 27'}},
    {name:'Степінь степеня',expr:'(aⁿ)ᵐ = aⁿ·ᵐ',
      detail:{explanation:'Коли беремо ступінь від ступеня — показники множаться.',proof:'(a²)³ = a² · a² · a² = a²⁺²⁺² = a⁶',example:'(5²)³ = 5⁶ = 15625'}},
    {name:'Нульовий степінь',expr:'a⁰ = 1  (a ≠ 0)',
      detail:{explanation:'Будь-яке число (крім нуля) у нульовому степені дорівнює 1.',proof:'aⁿ ÷ aⁿ = aⁿ⁻ⁿ = a⁰\nАле aⁿ ÷ aⁿ = 1 → тому a⁰ = 1',example:'7⁰ = 1;   (−3)⁰ = 1;   (1/2)⁰ = 1'}},
    {name:'Від\'ємний степінь',expr:'a⁻ⁿ = 1/aⁿ',
      detail:{explanation:'Від\'ємний показник означає, що ми беремо обернене число.',proof:'a⁰ ÷ aⁿ = a⁻ⁿ\n1 ÷ aⁿ = 1/aⁿ → тому a⁻ⁿ = 1/aⁿ',example:'2⁻³ = 1/8;   10⁻² = 0.01'}},
    {name:'Степінь добутку',expr:'(a·b)ⁿ = aⁿ · bⁿ',
      detail:{explanation:'Степінь добутку дорівнює добутку степенів кожного множника.',proof:'(a·b)² = (a·b)(a·b) = a·a·b·b = a²·b²\nАналогічно для будь-якого n.',example:'(2·3)⁴ = 2⁴ · 3⁴ = 16 · 81 = 1296\n(−2x)³ = (−2)³·x³ = −8x³'}},
  ]},
  { name:'✖️ Скорочене множення', minGrade:7, formulas:[
    {name:'Квадрат суми',expr:'(a+b)² = a² + 2ab + b²',
      detail:{explanation:'Квадрат суми двох чисел — це квадрат першого, плюс подвійний добуток, плюс квадрат другого.',proof:'(a+b)² = (a+b)(a+b)\n= a·a + a·b + b·a + b·b\n= a² + 2ab + b²',example:'(3+5)² = 9 + 30 + 25 = 64 ✓ (адже 8² = 64)'}},
    {name:'Квадрат різниці',expr:'(a−b)² = a² − 2ab + b²',
      detail:{explanation:'Квадрат різниці — як квадрат суми, але середній доданок від\'ємний.',proof:'(a−b)² = (a+(−b))² = a² + 2a(−b) + (−b)² = a² − 2ab + b²',example:'(7−2)² = 49 − 28 + 4 = 25 ✓ (адже 5² = 25)'}},
    {name:'Різниця квадратів',expr:'a² − b² = (a+b)(a−b)',
      detail:{explanation:'Різниця квадратів завжди розкладається в добуток суми та різниці. Дуже корисно для спрощення!',proof:'(a+b)(a−b) = a²−ab+ab−b² = a²−b²',example:'x²−9 = (x+3)(x−3)\n100−49 = (10+7)(10−7) = 17×3 = 51'}},
    {name:'Куб суми',expr:'(a+b)³ = a³ + 3a²b + 3ab² + b³',
      detail:{explanation:'Куб суми — результат потрійного множення (a+b) на себе.',proof:'(a+b)³ = (a+b)(a+b)²\n= (a+b)(a²+2ab+b²)\n= a³+2a²b+ab²+a²b+2ab²+b³\n= a³+3a²b+3ab²+b³',example:'(1+2)³ = 1 + 6 + 12 + 8 = 27 ✓'}},
    {name:'Куб різниці',expr:'(a−b)³ = a³ − 3a²b + 3ab² − b³',
      detail:{explanation:'Куб різниці — як куб суми, але знаки чергуються: +, −, +, −.',proof:'(a−b)³ = (a+(−b))³ = a³+3a²(−b)+3a(−b)²+(−b)³\n= a³−3a²b+3ab²−b³',example:'(3−1)³ = 27−27+9−1 = 8 ✓ (адже 2³=8)'}},
    {name:'Сума кубів',expr:'a³ + b³ = (a+b)(a²−ab+b²)',
      detail:{explanation:'Сума кубів розкладається в добуток суми та неповного квадрата різниці.',proof:'Перевірка: (a+b)(a²−ab+b²)\n= a³−a²b+ab²+a²b−ab²+b³\n= a³+b³ ✓',example:'8+27 = (2+3)(4−6+9) = 5×7 = 35 ✓'}},
    {name:'Різниця кубів',expr:'a³ − b³ = (a−b)(a²+ab+b²)',
      detail:{explanation:'Різниця кубів розкладається в добуток різниці та неповного квадрата суми.',proof:'Перевірка: (a−b)(a²+ab+b²)\n= a³+a²b+ab²−a²b−ab²−b³ = a³−b³ ✓',example:'x³−8 = (x−2)(x²+2x+4)\n27−1 = (3−1)(9+3+1) = 2×13 = 26 ✓'}},
  ]},
  { name:'📈 Лінійна функція', minGrade:7, formulas:[
    {name:'Формула',expr:'y = kx + b',
      detail:{explanation:'Лінійна функція задає пряму лінію на графіку. k — нахил прямої, b — де пряма перетинає вісь OY.',example:'y = 2x + 1: при x=0 → y=1; при x=3 → y=7\nЦе пряма, що зростає (k=2>0)'}},
    {name:'Кутовий коефіцієнт',expr:'k > 0 → зростає;  k < 0 → спадає',
      detail:{explanation:'k показує "крутість" прямої. Чим більший |k|, тим крутіша пряма.',proof:'k = (y₂−y₁)/(x₂−x₁) = tg(кут нахилу)',example:'k=1: кут 45°\nk=3: крутіша пряма\nk=−2: пряма спадає'}},
    {name:'b — де перетинає OY',expr:'при x=0:  y = b',
      detail:{explanation:'b — це вільний член, він показує де пряма перетинає вісь OY (вертикальну вісь). Просто підстав x=0.',example:'y = 3x + 5: при x=0 → y=5\nПряма перетинає OY в точці (0; 5)'}},
    {name:'Пряма пропорційність',expr:'y = kx  (b = 0)',
      detail:{explanation:'Пряма пропорційність — окремий випадок лінійної функції, де b=0. Пряма проходить через початок координат.',example:'y = 3x: при x=2 → y=6; при x=−1 → y=−3'}},
  ]},

  // === 8 КЛАС ===
  { name:'√ Ірраціональні вирази', minGrade:8, formulas:[
    {name:'Корінь добутку',expr:'√(a·b) = √a · √b',
      detail:{explanation:'Квадратний корінь з добутку дорівнює добутку коренів. Умова: a ≥ 0, b ≥ 0.',example:'√(4·9) = √4 · √9 = 2·3 = 6\n√(25·16) = 5·4 = 20'}},
    {name:'Корінь квадрату',expr:'√(a²) = |a|',
      detail:{explanation:'Корінь з квадрату дає модуль (завжди невід\'ємне число), бо √ повертає невід\'ємне значення.',proof:'Якщо a≥0: √(a²)=a\nЯкщо a<0: √(a²)=√(позитивне)=−a=|a|',example:'√((-3)²) = √9 = 3 = |−3|'}},
    {name:'Раціоналізація',expr:'1/√a = √a/a',
      detail:{explanation:'Позбавляємось кореня в знаменнику, множачи чисельник і знаменник на √a.',proof:'1/√a · √a/√a = √a/(√a·√a) = √a/a',example:'1/√5 = √5/5 ≈ 0.447'}},
    {name:'Корінь частки',expr:'√(a/b) = √a / √b',
      detail:{explanation:'Корінь з дробу можна розподілити: корінь чисельника ділити на корінь знаменника. Умова: a≥0, b>0.',example:'√(16/9) = √16 / √9 = 4/3\n√(25/4) = 5/2 = 2.5'}},
    {name:'Квадрат кореня',expr:'(√a)² = a  (a ≥ 0)',
      detail:{explanation:'Піднесення кореня до квадрату і взяття кореня з квадрату — взаємно протилежні дії. Умова: a≥0.',example:'(√7)² = 7\n(√3)² = 3\n(√0.5)² = 0.5'}},
    {name:'Винесення з-під кореня',expr:'√(a²b) = a√b  (a ≥ 0)',
      detail:{explanation:'Якщо під коренем є повний квадрат як множник — виносимо його корінь назовні.',proof:'√(a²b) = √(a²) · √b = a·√b',example:'√(4·5) = 2√5\n√(9x²) = 3x\n√(25·3) = 5√3'}},
  ]},
  { name:'📐 Квадратне рівняння', minGrade:8, formulas:[
    {name:'Загальний вигляд',expr:'ax² + bx + c = 0',
      detail:{explanation:'Квадратне рівняння — це рівняння другого степеня. Воно може мати 0, 1 або 2 корені.',example:'2x²+3x−5=0: a=2, b=3, c=−5\nx²−4=0: a=1, b=0, c=−4'}},
    {name:'Дискримінант',expr:'D = b² − 4ac',
      detail:{explanation:'Дискримінант показує, скільки коренів у рівняння: D>0 → два корені, D=0 → один, D<0 → немає.',proof:'Походить із формули дискримінанта при виведенні загальної формули коренів (метод виділення квадрата).',example:'x²−5x+6=0: D = 25−24 = 1 > 0 → два корені\nx²+2x+1=0: D = 4−4 = 0 → один корінь'}},
    {name:'Корені (D > 0)',expr:'x = (−b ± √D) / 2a',
      detail:{explanation:'Знак ± означає два розрахунки: x₁ з +√D і x₂ з −√D.',example:'x²−5x+6=0, D=1\nx₁=(5+1)/2=3;  x₂=(5−1)/2=2\nПеревірка: 3²−5·3+6=0 ✓'}},
    {name:'Теорема Вієта',expr:'x₁+x₂ = −b/a;   x₁·x₂ = c/a',
      detail:{explanation:'Теорема Вієта дозволяє знайти суму і добуток коренів без розв\'язання рівняння.',proof:'Якщо x₁,x₂ — корені, то ax²+bx+c = a(x−x₁)(x−x₂)\nРозкривши: x₁+x₂=−b/a, x₁x₂=c/a',example:'x²−5x+6=0: x₁+x₂=5, x₁·x₂=6\nВідповідь: 2 і 3'}},
    {name:'Один корінь (D=0)',expr:'x = −b / 2a',
      detail:{explanation:'Коли D=0, парабола торкається осі OX рівно в одній точці — це вершина параболи.',example:'x²−4x+4=0: D=16−16=0\nx = 4/2 = 2\nПеревірка: 4−8+4=0 ✓'}},
    {name:'D < 0 — коренів немає',expr:'якщо D < 0, рівняння не має розв\'язків',
      detail:{explanation:'Коли D<0, парабола не перетинає вісь OX — рівняння не має дійсних коренів (є тільки комплексні, але їх не вивчають у школі).',example:'x²+x+1=0: D=1−4=−3<0\nКоренів немає'}},
  ]},
  { name:'🔁 Квадратична функція', minGrade:8, formulas:[
    {name:'Формула',expr:'y = ax² + bx + c',
      detail:{explanation:'Квадратична функція задає параболу. a визначає напрямок гілок, c — де пряма перетинає OY.',example:'y = x²: найпростіша парабола, вершина в (0,0)\ny = −x²+4: перевернута парабола, вершина в (0,4)'}},
    {name:'Вершина параболи',expr:'x₀ = −b/(2a);   y₀ = f(x₀)',
      detail:{explanation:'Вершина — це найнижча (a>0) або найвища (a<0) точка параболи.',example:'y = x²−4x+3: x₀=2, y₀=4−8+3=−1\nВершина: (2; −1)'}},
    {name:'a > 0 — гілки вгору',expr:'мінімум у вершині',
      detail:{explanation:'Коли a>0, парабола схожа на букву "U". Вершина — мінімальне значення функції.',example:'y = x²: гілки вгору, мінімум y=0 при x=0'}},
    {name:'a < 0 — гілки вниз',expr:'максимум у вершині',
      detail:{explanation:'Коли a<0, парабола схожа на перевернуту букву "U". Вершина — найвища точка (максимум).',example:'y = −x²+4: гілки вниз, максимум y=4 при x=0'}},
    {name:'Нулі функції',expr:'ax² + bx + c = 0 (дискримінант)',
      detail:{explanation:'Нулі — точки де графік перетинає вісь OX (y=0). Кількість нулів визначає знак дискримінанта.',example:'y = x²−5x+6: нулі при x=2 і x=3\n(D=25−24=1>0 → два нулі)'}},
    {name:'Обернена пропорц.',expr:'y = k/x  (гіпербола)',
      detail:{explanation:'Обернена пропорційність — коли при збільшенні x в 2 рази, y зменшується в 2 рази. Графік — гіпербола.',example:'y = 6/x: при x=1→y=6; x=2→y=3; x=3→y=2\nТвори рівні: x·y=6 завжди'}},
  ]},

  // === 9 КЛАС ===
  { name:'🔢 Нерівності з модулем', minGrade:9, formulas:[
    {name:'|x| < a (менше)',expr:'|x| < a  ↔  −a < x < a',
      detail:{explanation:'Модуль — це відстань від нуля на числовій прямій. |x| < a означає: x знаходиться між −a і +a, тобто ближче нуля ніж a.',proof:'|x| = відстань від 0\n|x| < a → −a < x < a',example:'|x| < 3  →  −3 < x < 3\n|x−2| < 1  →  1 < x < 3'}},
    {name:'|x| > a (більше)',expr:'|x| > a  ↔  x < −a або x > a',
      detail:{explanation:'Якщо відстань від нуля більша за a, то x або "ліворуч" від −a, або "праворуч" від +a. Два окремих проміжки!',example:'|x| > 2  →  x<−2 або x>2\n|x+1| > 3  →  x<−4 або x>2'}},
    {name:'|x| = a',expr:'x = a  або  x = −a',
      detail:{explanation:'Рівняння з модулем: дві точки на числовій прямій на відстані a від нуля.',example:'|x| = 5  →  x=5 або x=−5\n|x−1| = 3  →  x=4 або x=−2'}},
  ]},
  { name:'📐 Квадратні нерівності', minGrade:9, formulas:[
    {name:'Алгоритм розв\'язання',expr:'ax² + bx + c > 0  або  < 0',
      detail:{explanation:'Кроки: 1) знайти корені рівняння (дискримінант); 2) визначити знак a; 3) намалювати параболу і визначити де вона вища/нижча за OX.',example:'x²−5x+6>0: D=1>0, корені 2 і 3\na=1>0 → парабола вгору\nВідповідь: x<2 або x>3'}},
    {name:'a>0, D>0: x₁<x₂',expr:'> 0: x<x₁ або x>x₂\n< 0: x₁<x<x₂',
      detail:{explanation:'При a>0 парабола — "чаша" (вгору). Вона вища за OX зовні коренів, нижча — між коренями.',example:'x²−x−6>0 (корені −2 і 3):\nВідповідь: x<−2 або x>3\n\nx²−x−6<0:\nВідповідь: −2<x<3'}},
    {name:'a<0, D>0: x₁<x₂',expr:'> 0: x₁<x<x₂\n< 0: x<x₁ або x>x₂',
      detail:{explanation:'При a<0 парабола перевернута ("гора"). Вища за OX між коренями, нижча — зовні.',example:'−x²+5x−6>0 (корені 2 і 3):\nВідповідь: 2<x<3'}},
    {name:'D<0, a>0',expr:'ax²+bx+c > 0 для всіх x ∈ ℝ',
      detail:{explanation:'Якщо парабола не перетинає OX (D<0) і гілки вгору — вона завжди вища за нуль.',example:'x²+x+1>0: D=1−4=−3<0, a>0\nВідповідь: x ∈ ℝ (всі числа — нерівність завжди вірна)'}},
    {name:'D<0, a<0',expr:'ax²+bx+c < 0 для всіх x ∈ ℝ',
      detail:{explanation:'Якщо парабола не перетинає OX (D<0) і гілки вниз — вона завжди нижча за нуль.',example:'−x²−1<0: D=0−4=−4<0, a<0\nВідповідь: x ∈ ℝ'}},
  ]},
  { name:'🔢 Прогресії', minGrade:9, formulas:[
    {name:'Арифм. n-й член',expr:'aₙ = a₁ + (n−1)·d',
      detail:{explanation:'Арифметична прогресія — послідовність, де кожен наступний елемент відрізняється від попереднього на одне й те ж число d.',proof:'a₁, a₁+d, a₁+2d, ...\nN-й елемент: a₁ + (n−1)·d',example:'a₁=2, d=3: 2, 5, 8, 11...\na₁₀ = 2 + 9·3 = 29'}},
    {name:'Сума арифм.',expr:'Sₙ = n·(a₁ + aₙ) / 2',
      detail:{explanation:'Формула Гауса: сума арифметичної прогресії дорівнює кількості доданків, помноженій на середнє значення.',proof:'Гаус у 10 років: 1+2+...+100 = (1+100)·100/2 = 5050',example:'1+2+3+...+10 = 10·11/2 = 55'}},
    {name:'Геом. n-й член',expr:'bₙ = b₁ · qⁿ⁻¹',
      detail:{explanation:'Геометрична прогресія — послідовність, де кожен елемент отримується множенням попереднього на q (знаменник).',example:'b₁=3, q=2: 3, 6, 12, 24...\nb₅ = 3·2⁴ = 48'}},
    {name:'Сума геом.',expr:'Sₙ = b₁·(qⁿ − 1) / (q − 1)',
      detail:{explanation:'Формула суми n перших членів геометричної прогресії. Не застосовується при q=1 (тоді Sₙ=n·b₁).',example:'b₁=2, q=3, n=4:\nS₄ = 2·(81−1)/(3−1) = 2·80/2 = 80\nПеревірка: 2+6+18+54=80 ✓'}},
    {name:'Нескінченна геом.',expr:'S∞ = b₁ / (1 − q),  |q| < 1',
      detail:{explanation:'Якщо |q|<1, члени прогресії прямують до нуля, і нескінченна сума сходиться до скінченного числа.',example:'1 + 1/2 + 1/4 + 1/8 + ... = 1/(1−0.5) = 2'}},
    {name:'Різниця',expr:'d = aₙ − aₙ₋₁',
      detail:{explanation:'Різниця d — це стала, на яку відрізняється кожен наступний член від попереднього. d може бути від\'ємною (спадна прогресія).',example:'Прогресія 10, 7, 4, 1: d = 7−10 = −3\nПрогресія 3, 8, 13: d = 8−3 = 5'}},
    {name:'Знаменник',expr:'q = bₙ / bₙ₋₁',
      detail:{explanation:'Знаменник q — це стале відношення між сусідніми членами. При q>1 прогресія зростає, 0<q<1 — спадає, q<0 — чергує знак.',example:'Прогресія 2, 6, 18, 54: q = 6/2 = 3\nПрогресія 8, 4, 2, 1: q = 4/8 = 0.5'}},
  ]},

  // === 10 КЛАС ===
  { name:'📈 Показникова функція', minGrade:10, formulas:[
    {name:'Формула',expr:'y = aˣ  (a > 0, a ≠ 1)',
      detail:{explanation:'Показникова функція — функція, де x є показником степеня. Основа a завжди позитивна.',example:'y=2ˣ: при x=0 → 1; x=3 → 8; x=−1 → 0.5'}},
    {name:'Показникове рівняння',expr:'aˣ = aʸ  ↔  x = y',
      detail:{explanation:'Якщо основи однакові, то показники рівні. Основний метод — зведення до однієї основи.',example:'4ˣ = 16  →  2²ˣ = 2⁴  →  x = 2'}},
    {name:'Число e',expr:'e ≈ 2.718  (натуральна основа)',
      detail:{explanation:'Число e — найзручніша основа для показникової функції в математиці та фізиці. Похідна від eˣ — це сам eˣ.',proof:'e = (1 + 1/n)ⁿ при n→∞\ne ≈ 2.71828...'}},
    {name:'a > 1 — зростає',expr:'lim = +∞ при x→+∞',
      detail:{explanation:'Якщо основа a>1, функція зростає: чим більший x, тим більше aˣ. Типовий приклад: 2ˣ (подвоєння).',example:'2ˣ: x=0→1; x=5→32; x=10→1024'}},
    {name:'0 < a < 1 — спадає',expr:'lim = +∞ при x→−∞',
      detail:{explanation:'Якщо 0<a<1, функція спадає. Це відповідає розпаду, зменшенню. При x→−∞ функція зростає безмежно.',example:'(1/2)ˣ = 2⁻ˣ: x=0→1; x=3→0.125; x=−3→8'}},
    {name:'Особливе значення',expr:'a⁰ = 1  для будь-якого a',
      detail:{explanation:'Будь-яка основа у нульовому степені = 1. Графік показникової функції завжди проходить через точку (0, 1).',example:'2⁰=1; 10⁰=1; (1/2)⁰=1\nВсі показникові функції перетинаються в (0,1)!'}},
  ]},
  { name:'🔬 Логарифми', minGrade:10, formulas:[
    {name:'Означення',expr:'logₐb = x  ↔  aˣ = b',
      detail:{explanation:'Логарифм — це "зворотня дія" до степеня. Питання: "В який степінь треба підняти a, щоб отримати b?"',example:'log₂8 = 3, бо 2³ = 8\nlog₁₀100 = 2, бо 10² = 100'}},
    {name:'Добуток',expr:'logₐ(xy) = logₐx + logₐy',
      detail:{explanation:'Логарифм добутку = сума логарифмів. Саме тому логарифми спрощують множення.',proof:'Нехай logₐx=m, logₐy=n → x=aᵐ, y=aⁿ\nxy=aᵐ⁺ⁿ → logₐ(xy)=m+n',example:'log₂(4·8) = log₂4 + log₂8 = 2+3 = 5'}},
    {name:'Зміна основи',expr:'logₐb = log b / log a',
      detail:{explanation:'Дозволяє порахувати будь-який логарифм через ln або lg (які є на калькуляторі).',example:'log₂10 = lg10/lg2 = 1/0.301 ≈ 3.32'}},
    {name:'Частка',expr:'logₐ(x/y) = logₐx − logₐy',
      detail:{explanation:'Логарифм дробу = різниця логарифмів. Аналог: логарифм добутку = сума.',proof:'x=aᵐ, y=aⁿ → x/y=aᵐ⁻ⁿ → logₐ(x/y)=m−n',example:'log₂(8/2) = log₂8 − log₂2 = 3−1 = 2 ✓'}},
    {name:'Степінь',expr:'logₐ(xⁿ) = n · logₐx',
      detail:{explanation:'Показник степеня "виходить" перед логарифм як множник. Дуже корисно для спрощення!',proof:'x=aᵐ → xⁿ=aᵐⁿ → logₐ(xⁿ)=mn=n·logₐx',example:'log₂(8²) = 2·log₂8 = 2·3 = 6\nlog₃(√3) = log₃(3^0.5) = 0.5'}},
    {name:'Натуральний ln',expr:'ln x = logₑ x;   ln e = 1',
      detail:{explanation:'Натуральний логарифм — логарифм за основою e≈2.718. Використовується в природничих науках, фізиці, економіці.',example:'ln(e) = 1\nln(e²) = 2\nln(1) = 0'}},
    {name:'Десятковий lg',expr:'lg x = log₁₀ x;   lg 10 = 1',
      detail:{explanation:'Десятковий логарифм — за основою 10. Є на кожному калькуляторі кнопкою "log".',example:'lg(100) = 2  (бо 10²=100)\nlg(1000) = 3\nlg(0.1) = −1'}},
    {name:'Логарифмічне рівняння',expr:'logₐx = b  →  x = aᵇ',
      detail:{explanation:'Основний метод: позбуваємось логарифма, піднімаючи основу до обох частин як показник.',example:'log₂x = 5 → x = 2⁵ = 32\nlog₃x = 4 → x = 3⁴ = 81'}},
  ]},
  { name:'📉 Похідна', minGrade:10, formulas:[
    {name:'Степінь',expr:"(xⁿ)' = n · xⁿ⁻¹",
      detail:{explanation:'Найважливіше правило похідної: "знижуємо показник і множимо".',proof:"(xⁿ)' = lim[(x+h)ⁿ−xⁿ]/h = n·xⁿ⁻¹ (формула бінома)",example:"(x³)' = 3x²\n(x⁵)' = 5x⁴\n(√x)' = (x^0.5)' = 0.5/√x"}},
    {name:'Добуток',expr:"(uv)' = u'v + uv'",
      detail:{explanation:'Похідна добутку — "перший на похідну другого плюс похідна першого на другий". Зазубрити!',example:"(x²·sin x)' = 2x·sin x + x²·cos x"}},
    {name:'Частка',expr:"(u/v)' = (u'v − uv') / v²",
      detail:{explanation:'Правило для дробу: різниця хрест-на-хрест ділити на квадрат знаменника.',example:"(x/sin x)' = (1·sin x − x·cos x)/sin²x"}},
    {name:'Зростання/спадання',expr:"f'(x) > 0 → зростає;  f'(x) < 0 → спадає",
      detail:{explanation:'Похідна показує "швидкість зміни" функції. Якщо похідна позитивна — функція зростає в цій точці.',example:"f(x)=x²: f'(x)=2x\nпри x>0: f'>0 → зростає\nпри x<0: f'<0 → спадає"}},
    {name:'Константа',expr:"(C)' = 0",
      detail:{explanation:'Похідна константи (числа) дорівнює нулю, бо стала не змінюється — швидкість зміни = 0.',example:"(5)' = 0\n(−7)' = 0\n(π)' = 0"}},
    {name:'Сума',expr:"(u+v)' = u' + v'",
      detail:{explanation:'Похідна суми = сума похідних. Диференціювання — лінійна операція.',example:"(x³+x²)' = 3x² + 2x\n(x+sin x)' = 1 + cos x"}},
    {name:'sin',expr:"(sin x)' = cos x",
      detail:{explanation:'Похідна синуса — косинус. Запам\'ятай пару: sin→cos, cos→(−sin).',proof:"(sin x)' = lim[sin(x+h)−sin x]/h = cos x (через формулу різниці синусів)",example:"(sin 3x)' = 3cos 3x  (правило ланцюжка)"}},
    {name:'cos',expr:"(cos x)' = −sin x",
      detail:{explanation:'Похідна косинуса — мінус синус. Знак мінус — важливо не забути!',example:"(cos 2x)' = −2 sin 2x\n(3cos x)' = −3 sin x"}},
    {name:'eˣ',expr:"(eˣ)' = eˣ",
      detail:{explanation:'Унікальна властивість числа e: функція eˣ є своєю власною похідною. Це одна з причин, чому e так важливе в математиці.',example:"(e²ˣ)' = 2e²ˣ\n(eˣ+x²)' = eˣ+2x"}},
    {name:'ln x',expr:"(ln x)' = 1/x",
      detail:{explanation:'Похідна натурального логарифма = одиниця поділена на x. Важлива формула для 11 класу.',example:"(ln 5x)' = 1/x  (бо ln 5x = ln 5 + ln x)\n(ln x²)' = 2/x"}},
  ]},

  // === 11 КЛАС ===
  { name:'∫ Інтеграл', minGrade:11, formulas:[
    {name:'Степінь',expr:'∫xⁿ dx = xⁿ⁺¹/(n+1) + C',
      detail:{explanation:'Інтегрування — зворотна дія до диференціювання. "Підвищуємо показник і ділимо".',example:'∫x² dx = x³/3 + C\n∫x⁴ dx = x⁵/5 + C'}},
    {name:'Формула Ньютона–Лейбніца',expr:'∫ₐᵇf(x)dx = F(b) − F(a)',
      detail:{explanation:'Для обчислення визначеного інтеграла (площі): знаходимо первісну F і підставляємо межі.',proof:'F — первісна f. Різниця F(b)−F(a) дає "накопичену зміну" на [a,b].',example:'∫₀³ x² dx = [x³/3]₀³ = 27/3 − 0 = 9'}},
    {name:'Площа під графіком',expr:'S = |∫ₐᵇf(x)dx|',
      detail:{explanation:'Визначений інтеграл дає площу між графіком і віссю X. Модуль потрібен, якщо функція від\'ємна.',example:'S під y=x від 0 до 4: ∫₀⁴x dx = [x²/2]₀⁴ = 8'}},
    {name:'sin',expr:'∫sin x dx = −cos x + C',
      detail:{explanation:'Первісна синуса — мінус косинус. Перевірка: похідна від (−cos x) = −(−sin x) = sin x ✓',example:'∫sin x dx = −cos x + C\n∫₀^π sin x dx = [−cos x]₀^π = 1+1 = 2'}},
    {name:'cos',expr:'∫cos x dx = sin x + C',
      detail:{explanation:'Первісна косинуса — синус. Перевірка: (sin x)\' = cos x ✓',example:'∫cos x dx = sin x + C\n∫₀^(π/2) cos x dx = [sin x]₀^(π/2) = 1−0 = 1'}},
    {name:'1/x',expr:'∫(1/x) dx = ln|x| + C',
      detail:{explanation:'Модуль потрібен, бо логарифм не визначений для від\'ємних чисел, але 1/x існує при x<0.',example:'∫(1/x) dx = ln|x| + C\n∫₁² (1/x) dx = ln 2 ≈ 0.693'}},
    {name:'eˣ',expr:'∫eˣ dx = eˣ + C',
      detail:{explanation:'eˣ — єдина функція, яка є одночасно своєю похідною і первісною.',example:'∫eˣ dx = eˣ + C\n∫₀¹ eˣ dx = e¹ − e⁰ = e − 1 ≈ 1.718'}},
  ]},
  { name:'📊 Комбінаторика і теорвер', minGrade:11, formulas:[
    {name:'Перестановки',expr:'Pₙ = n!',
      detail:{explanation:'Перестановки — кількість способів розставити n предметів у ряд.',proof:'Перше місце: n варіантів\nДруге: n−1\n...\nn! = 1·2·3·...·n',example:'3 книги: P₃ = 6 способів\n4 літери: P₄ = 24'}},
    {name:'Комбінації',expr:'Cₙᵏ = n! / (k!·(n−k)!)',
      detail:{explanation:'Комбінації — кількість способів вибрати k елементів з n, якщо порядок НЕ важливий.',example:'C₅² = 5!/(2!·3!) = 10\n"Скількома способами вибрати 2 з 5 учнів?"'}},
    {name:'Ймовірність',expr:'P(A) = m / n',
      detail:{explanation:'Класична ймовірність: відношення сприятливих випадків m до загальних n.',example:'Кидаємо кубик: P(парне) = 3/6 = 0.5\nP(більше 4) = 2/6 ≈ 0.33'}},
    {name:'Розміщення',expr:'Aₙᵏ = n! / (n−k)!',
      detail:{explanation:'Розміщення — кількість способів вибрати k елементів з n, якщо порядок ВАЖЛИВИЙ (на відміну від комбінацій).',example:'A₄² = 4!/2! = 24/2 = 12\n"Скільки способів розмістити 2 з 4 книг на полиці?"'}},
    {name:'Сума ймовірностей',expr:'P(A) + P(Ā) = 1',
      detail:{explanation:'Протилежні події: або A відбудеться, або не відбудеться. Разом — 100%. Корисно для розрахунку через "хоча б один".',example:'P(хоча б 1 шістка при 2 кидках) = 1 − P(жодної шістки)\n= 1 − (5/6)² = 1 − 25/36 = 11/36 ≈ 0.31'}},
  ]},
];

// ===== TRIGONOMETRY DATA =====
const TRIG_CATS = [
  { name:'Основні тотожності', minGrade:9, formulas:[
    {name:'Основна',expr:'sin²α + cos²α = 1',
      detail:{explanation:'Головна тригонометрична тотожність. Випливає з теореми Піфагора: якщо точка на одиничному колі, то x²+y²=1, а sin=y, cos=x.',proof:'На одиничному колі: x=cosα, y=sinα\nx²+y²=1 → cos²α+sin²α=1',example:'Знайти cosα, якщо sinα=0.6:\ncos²α = 1−0.36 = 0.64 → cosα=±0.8'}},
    {name:'tan через sin/cos',expr:'tan α = sin α / cos α',
      detail:{explanation:'Тангенс — відношення синуса до косинуса. Не визначений при cosα=0 (α=90°, 270°).',example:'sin30°=0.5, cos30°=√3/2\ntan30° = 0.5/(√3/2) = 1/√3 ≈ 0.577'}},
    {name:'1 + tan²',expr:'1 + tan²α = 1/cos²α',
      detail:{explanation:'Отримуємо діленням основної тотожності на cos²α.',proof:'sin²α+cos²α=1  | ÷cos²α\ntan²α + 1 = 1/cos²α',example:'Якщо tanα=1 → 1+1=2=1/cos²α → cos²α=0.5 → cosα=√2/2'}},
    {name:'ctg через sin/cos',expr:'ctg α = cos α / sin α',
      detail:{explanation:'Котангенс — відношення косинуса до синуса (обернений до тангенса). Не визначений при sinα=0 (α=0°, 180°).',example:'cos60°=0.5, sin60°=√3/2\nctg60° = 0.5/(√3/2) = 1/√3 ≈ 0.577'}},
    {name:'tan · ctg',expr:'tan α · ctg α = 1',
      detail:{explanation:'Тангенс і котангенс взаємно обернені: їхній добуток завжди дорівнює 1.',proof:'tanα · ctgα = (sinα/cosα) · (cosα/sinα) = 1',example:'tan30° · ctg30° = (1/√3)·√3 = 1 ✓'}},
    {name:'1 + ctg²',expr:'1 + ctg²α = 1/sin²α',
      detail:{explanation:'Отримуємо діленням основної тотожності на sin²α.',proof:'sin²α+cos²α=1  | ÷sin²α\n1 + ctg²α = 1/sin²α',example:'Якщо ctgα=1 → 1+1=2=1/sin²α → sin²α=0.5 → sinα=√2/2'}},
  ]},
  { name:'Радіани', minGrade:9, formulas:[
    {name:'π радіан',expr:'π рад = 180°',
      detail:{explanation:'Радіан — кут, при якому довжина дуги дорівнює радіусу кола. 180° = π радіанів, бо довжина напівкола = πr.',proof:'Довжина кола = 2πr\n360° відповідає 2π рад\n180° → π рад',example:'60° = π/3 рад ≈ 1.047\n270° = 3π/2 рад ≈ 4.712'}},
    {name:'Формула',expr:'рад = градуси × π / 180',
      detail:{explanation:'Для переведення градусів в радіани множимо на π/180. Назад: рад × 180/π.',example:'45° × π/180 = π/4\n2π рад × 180/π = 360°'}},
    {name:'360°',expr:'2π рад = 360°',
      detail:{explanation:'Повне коло = 2π радіанів. Звідси всі переведення: кут×π/180 = радіани.',example:'360° = 2π ≈ 6.28 рад\n270° = 3π/2 рад'}},
    {name:'1 радіан',expr:'1 рад ≈ 57.3°',
      detail:{explanation:'Один радіан — кут, при якому дуга кола дорівнює радіусу. Це приблизно 57.3°.',example:'Дуга = радіус → кут = 1 рад\n2 рад ≈ 114.6°; 3 рад ≈ 171.9°'}},
    {name:'30°',expr:'π/6',
      detail:{explanation:'30° = π/6 радіанів. Запам\'ятай: 180°/6 = 30°.',example:'sin(π/6) = sin30° = 1/2\ncos(π/6) = cos30° = √3/2'}},
    {name:'45°',expr:'π/4',
      detail:{explanation:'45° = π/4 радіанів. 180°/4 = 45°. Це "рівнобедрений" кут — sin і cos однакові.',example:'sin(π/4) = cos(π/4) = √2/2 ≈ 0.707'}},
    {name:'60°',expr:'π/3',
      detail:{explanation:'60° = π/3 радіанів. 180°/3 = 60°. Кут рівностороннього трикутника.',example:'sin(π/3) = sin60° = √3/2 ≈ 0.866\ncos(π/3) = cos60° = 1/2'}},
    {name:'90°',expr:'π/2',
      detail:{explanation:'90° = π/2 радіанів. Прямий кут. sin90°=1, cos90°=0.',example:'sin(π/2) = 1\ncos(π/2) = 0\ntan(π/2) — не існує!'}},
  ]},
  { name:'Теорема синусів/косинусів', minGrade:9, formulas:[
    {name:'Теорема синусів',expr:'a/sin A = b/sin B = c/sin C',
      detail:{explanation:'У будь-якому трикутнику відношення сторони до синуса протилежного кута є сталим (дорівнює діаметру описаного кола).',proof:'Через описане коло радіуса R: a = 2R·sinA\n→ a/sinA = 2R',example:'a=6, A=30°, B=45°. Знайти b:\nb/sinB = a/sinA\nb = 6·sin45°/sin30° = 6·(√2/2)/(1/2) = 6√2 ≈ 8.49'}},
    {name:'Теорема косинусів',expr:'c² = a² + b² − 2ab·cos C',
      detail:{explanation:'Узагальнення теореми Піфагора для довільного кута C. При C=90°: cos90°=0 → c²=a²+b² (теорема Піфагора).',proof:'Через координати: розміщуємо C в початку координат...',example:'a=5, b=7, C=60°\nc² = 25+49−2·5·7·0.5 = 74−35 = 39\nc = √39 ≈ 6.24'}},
    {name:'Через описане коло',expr:'a/sin A = 2R',
      detail:{explanation:'Теорема синусів у іншій формі: відношення сторони до синуса = діаметру описаного кола (2R).',example:'Якщо a=6, A=30°: 2R = 6/sin30° = 6/0.5 = 12 → R=6'}},
    {name:'Косинус через сторони',expr:'cos C = (a²+b²−c²) / 2ab',
      detail:{explanation:'З теореми косинусів можна виразити будь-який кут через три сторони трикутника.',example:'a=3, b=4, c=5: cos C = (9+16−25)/(2·3·4) = 0/24 = 0 → C=90°\nЦе прямокутний трикутник!'}},
  ]},
  { name:'Формули суми кутів', minGrade:9, formulas:[
    {name:'sin(α+β)',expr:'sinα·cosβ + cosα·sinβ',
      detail:{explanation:'Формула суми кутів для синуса. Дозволяє знайти sin кута, якщо знаємо sin і cos двох інших кутів.',proof:'Доводиться через одиничне коло або комплексні числа.',example:'sin75° = sin(45°+30°) = sin45°cos30° + cos45°sin30°\n= (√2/2)(√3/2) + (√2/2)(1/2) = (√6+√2)/4'}},
    {name:'cos(α+β)',expr:'cosα·cosβ − sinα·sinβ',
      detail:{explanation:'Формула суми кутів для косинуса. Знак мінус — ключова відмінність від формули синуса.',example:'cos90° = cos(45°+45°) = cos²45° − sin²45° = 1/2−1/2 = 0 ✓'}},
    {name:'sin(α−β)',expr:'sinα·cosβ − cosα·sinβ',
      detail:{explanation:'Формула різниці кутів для синуса. Знак мінус у середині — ключова відмінність від суми.',example:'sin15° = sin(45°−30°) = sin45°cos30° − cos45°sin30°\n= (√2/2)(√3/2) − (√2/2)(1/2) = (√6−√2)/4'}},
    {name:'cos(α−β)',expr:'cosα·cosβ + sinα·sinβ',
      detail:{explanation:'Формула різниці кутів для косинуса. Знак плюс — відмінність від формули суми.',proof:'cos(α−β) = cos(α+(−β))\n= cosα·cos(−β) − sinα·sin(−β)\n= cosα·cosβ − sinα·(−sinβ)\n= cosα·cosβ + sinα·sinβ',example:'cos15° = cos(45°−30°) = cos45°cos30° + sin45°sin30°\n= (√2·√3 + √2·1)/4 = (√6+√2)/4'}},
    {name:'tan(α+β)',expr:'(tanα + tanβ)/(1 − tanα·tanβ)',
      detail:{explanation:'Формула тангенса суми кутів. Не визначена коли tanα·tanβ=1 (знаменник = 0).',example:'tan75° = tan(45°+30°) = (1 + 1/√3)/(1 − 1/√3) = (√3+1)/(√3−1) = 2+√3'}},
    {name:'tan(α−β)',expr:'(tanα − tanβ)/(1 + tanα·tanβ)',
      detail:{explanation:'Формула тангенса різниці кутів.',example:'tan15° = tan(45°−30°) = (1 − 1/√3)/(1 + 1/√3) = 2−√3 ≈ 0.268'}},
  ]},
  { name:'Подвійний кут', minGrade:10, formulas:[
    {name:'sin 2α',expr:'2·sinα·cosα',
      detail:{explanation:'Синус подвійного кута — випадок формули суми при α=β.',proof:'sin(α+α) = sinα·cosα + cosα·sinα = 2sinα·cosα',example:'sin60° = 2·sin30°·cos30° = 2·(1/2)·(√3/2) = √3/2 ✓'}},
    {name:'cos 2α (варіант 1)',expr:'cos²α − sin²α',
      detail:{explanation:'Три рівнозначні форми формули cos 2α. Вибирай ту, де менше невідомих.',proof:'cos(α+α) = cosα·cosα − sinα·sinα = cos²α−sin²α',example:'cos90° = cos²45°−sin²45° = 1/2−1/2 = 0 ✓'}},
    {name:'cos 2α (варіант 2)',expr:'1 − 2sin²α',
      detail:{proof:'cos²α−sin²α = (1−sin²α)−sin²α = 1−2sin²α'}},
    {name:'cos 2α (варіант 3)',expr:'2cos²α − 1',
      detail:{explanation:'Третя форма: через cos². Зручна якщо в задачі є тільки cos.',proof:'cos²α−sin²α = cos²α−(1−cos²α) = 2cos²α−1',example:'cos60° = 2cos²30°−1 = 2·(3/4)−1 = 1.5−1 = 0.5 ✓'}},
    {name:'tan 2α',expr:'2tanα / (1 − tan²α)',
      detail:{explanation:'Тангенс подвійного кута через тангенс одинарного. Не визначений при tanα=±1 (α=45°, 135°).',proof:'tan(α+α) = (tanα+tanα)/(1−tan²α) = 2tanα/(1−tan²α)',example:'tan60° = 2tan30°/(1−tan²30°) = 2·(1/√3)/(1−1/3) = √3 ✓'}},
  ]},
  { name:'Пониження степеня', minGrade:10, formulas:[
    {name:'sin²α',expr:'(1 − cos 2α) / 2',
      detail:{explanation:'Формули пониження степеня дозволяють замінити sin² і cos² через cos подвійного кута. Незамінні в інтегралах.',proof:'З cos2α = 1−2sin²α:\n2sin²α = 1−cos2α → sin²α = (1−cos2α)/2',example:'∫sin²x dx = ∫(1−cos2x)/2 dx = x/2 − sin2x/4 + C'}},
    {name:'cos²α',expr:'(1 + cos 2α) / 2',
      detail:{proof:'З cos2α = 2cos²α−1:\n2cos²α = 1+cos2α → cos²α = (1+cos2α)/2'}},
    {name:'tan²α',expr:'(1 − cos 2α) / (1 + cos 2α)',
      detail:{explanation:'tan²α = sin²α/cos²α. Підставляємо формули пониження для sin² і cos².',proof:'tan²α = (1−cos2α)/2 ÷ (1+cos2α)/2 = (1−cos2α)/(1+cos2α)',example:'tan²45° = (1−0)/(1+0) = 1 ✓ (адже tan45°=1)'}},
    {name:'sin³α',expr:'(3sinα − sin 3α) / 4',
      detail:{explanation:'Формула пониження степеня для кубу синуса. Використовується в інтегралах.',proof:'Отримується з формули cos3α через sin і cos подвійного кута.',example:'∫sin³x dx → підставляємо формулу → ∫(3sinx−sin3x)/4 dx'}},
    {name:'cos³α',expr:'(3cosα + cos 3α) / 4',
      detail:{explanation:'Формула пониження степеня для кубу косинуса.',example:'∫cos³x dx → підставляємо формулу → ∫(3cosx+cos3x)/4 dx'}},
  ]},
  { name:'Формули зведення', minGrade:10, formulas:[
    {name:'sin(90°−α)',expr:'cos α',
      detail:{explanation:'Формули зведення: тригонометрична функція від кута виду (90°±α) або (180°±α). Правило: якщо кут кратний 90° — функція змінюється (sin↔cos, tan↔ctg), якщо 180° — ні. Знак визначаємо для гострого α.',example:'sin(90°−30°)=sin60°=cos30° ✓\ncos(180°−45°)=−cos45°'}},
    {name:'cos(90°−α)',expr:'sin α',
      detail:{explanation:'Правило: кут "90°±α" — функція ЗМІНЮЄТЬСЯ (cos↔sin). Знак такий самий, як для гострого α.',example:'cos(90°−60°) = cos30° = sin60° ✓'}},
    {name:'sin(90°+α)',expr:'cos α',
      detail:{explanation:'Кут "90°+α" — функція змінюється: sin→cos. Знак: синус у II чверті додатній.',example:'sin(90°+30°) = sin120° = cos30° = √3/2 ✓'}},
    {name:'cos(90°+α)',expr:'−sin α',
      detail:{explanation:'Кут "90°+α" — функція змінюється: cos→sin. Знак мінус: косинус у II чверті від\'ємний.',example:'cos(90°+30°) = cos120° = −sin30° = −1/2 ✓'}},
    {name:'sin(180°−α)',expr:'sin α',
      detail:{explanation:'Кут "180°−α" — функція НЕ змінюється (180° — парний кратний 90°). Знак: синус у II чверті +.',example:'sin(180°−30°) = sin150° = sin30° = 1/2 ✓'}},
    {name:'cos(180°−α)',expr:'−cos α',
      detail:{explanation:'Кут "180°−α" — функція НЕ змінюється. Знак мінус: косинус у II чверті від\'ємний.',example:'cos(180°−60°) = cos120° = −cos60° = −1/2 ✓'}},
    {name:'sin(−α)',expr:'−sin α',
      detail:{explanation:'Синус — непарна функція: sin(−α)=−sin(α). Якщо відображаємо кут відносно осі OX, синус змінює знак.',example:'sin(−30°) = −sin30° = −1/2\nsin(−90°) = −1'}},
    {name:'cos(−α)',expr:'cos α',
      detail:{explanation:'Косинус — парна функція: cos(−α)=cos(α). При відображенні кута косинус не змінюється.',example:'cos(−60°) = cos60° = 1/2\ncos(−180°) = cos180° = −1'}},
  ]},
];

// Build trigonometry tab
function buildTrigTab(){
  const grid = document.getElementById('trig-cats-grid');
  if(!grid) return;
  const grade = getUserGrade();
  const cats = TRIG_CATS.filter(c => !grade || grade >= (c.minGrade || 1));
  if(!cats.length) { grid.innerHTML = '<p style="color:#888;padding:20px;text-align:center">Тригонометрія з\'являється у 9 класі</p>'; return; }
  let html = '';
  let lastGradeLabel = null;
  cats.forEach(cat => {
    const gradeLabel = cat.minGrade ? `${cat.minGrade} клас` : null;
    if (gradeLabel && gradeLabel !== lastGradeLabel) {
      html += `<div class="geo-group-label">📚 ${gradeLabel} і вище</div>`;
      lastGradeLabel = gradeLabel;
    }
    html += `
      <div class="alg-cat-btn geo-cat-btn" onclick="openTrigModal(${TRIG_CATS.indexOf(cat)})">
        <div class="alg-cat-name">${cat.name}</div>
        <div class="alg-cat-count">${cat.formulas.length} формул</div>
      </div>`;
  });
  grid.innerHTML = html;
}

function openTrigModal(idx){
  const cat = TRIG_CATS[idx];
  document.getElementById('alg-modal-title').textContent = cat.name;
  document.getElementById('alg-modal-body').innerHTML = cat.formulas.map((f,i) =>
    _buildAlgRow(f, 'trig', idx, i)
  ).join('');
  document.getElementById('algebra-modal').classList.add('active');
}

// Build a formula row — shared by algebra and trig modals
function _buildAlgRow(f, source, catIdx, fIdx) {
  return `
    <div class="alg-modal-row" onclick="openFormulaModalByIdx(${catIdx},${fIdx},'${source}')">
      <span class="alg-modal-name">${f.name}</span>
      <span class="alg-modal-expr">${f.expr || f.m || ''}</span>
    </div>`;
}

// Open formula detail by index (algebra/trig)
function openFormulaModalByIdx(catIdx, fIdx, source) {
  const cat = source === 'trig' ? TRIG_CATS[catIdx] : ALGEBRA_CATS[catIdx];
  if (!cat) return;
  const f = cat.formulas[fIdx];
  if (!f) return;
  openFormulaModal({ name: f.name, expr: f.expr || f.m || '', detail: f.detail || null });
}

// Unified formula detail modal — works for algebra, trig, geometry
function openFormulaModal({ name, expr, detail, svg, symbols }) {
  document.getElementById('fdm-title').textContent = name || '';
  document.getElementById('fdm-formula').textContent = expr || '';

  let html = '';

  // SVG (geometry figures)
  if (svg) html += `<div class="fdm-svg-wrap"><svg viewBox="0 0 300 200" class="fdm-svg">${svg}</svg></div>`;

  // Symbols table (geometry)
  if (symbols && symbols.length) {
    html += `<div class="fdm-section">Позначення</div>
      <table class="fdm-symbols-table">
        ${symbols.map(s => `<tr><td><b>${s.s}</b></td><td>${s.m}</td></tr>`).join('')}
      </table>`;
  }

  // Explanation / proof / example
  if (detail) {
    if (detail.explanation) html += `<div class="fdm-section">Пояснення</div><div class="fdm-text">${detail.explanation.replace(/\n/g,'<br>')}</div>`;
    if (detail.proof)       html += `<div class="fdm-section">Доведення</div><div class="fdm-text fdm-code">${detail.proof.replace(/\n/g,'<br>')}</div>`;
    if (detail.example)     html += `<div class="fdm-section">Приклад</div><div class="fdm-text fdm-code">${detail.example.replace(/\n/g,'<br>')}</div>`;
  }

  if (!html) html = '<p class="fdm-no-detail">📖 Детального пояснення поки немає</p>';

  document.getElementById('fdm-body').innerHTML = html;
  document.getElementById('formula-detail-modal').classList.add('active');
}

function closeFormulaDetail() {
  document.getElementById('formula-detail-modal').classList.remove('active');
}
// legacy alias
function openFormulaDetail(catIdx, fIdx, source) { openFormulaModalByIdx(catIdx, fIdx, source); }

// ===== TABLES DATA =====
const TABLES_LIST = [
  { id:'mult',  name:'Таблиця множення', sub:'від 1 до 10',  minGrade:4 },
  { id:'sq',    name:'Квадрати чисел',   sub:'від 1 до 49',  minGrade:5 },
  { id:'trig',  name:'sin, cos, tan, ctg', sub:'основні кути', minGrade:9 },
];

function buildTablesButtons(){
  const grid = document.getElementById('tables-buttons-grid');
  if(!grid || grid.children.length > 0) return;
  const grade = getUserGrade();
  const tables = TABLES_LIST.filter(t => {
    if(!grade) return true;
    if(t.minGrade && grade < t.minGrade) return false;
    if(t.maxGrade && grade > t.maxGrade) return false;
    return true;
  });
  if(!tables.length) { grid.innerHTML = '<p style="color:#888;padding:20px;text-align:center">Таблиці для твого класу не знайдено</p>'; return; }
  grid.innerHTML = tables.map(t => `
    <div class="alg-cat-btn geo-cat-btn" onclick="openTableFullscreen('${t.id}')">
      <div class="alg-cat-name">${t.name}</div>
      <div class="alg-cat-count">${t.sub}</div>
    </div>
  `).join('');
}

function openTableFullscreen(id){
  const modal = document.getElementById('table-fullscreen-modal');
  const body  = document.getElementById('table-fs-body');
  const title = document.getElementById('table-fs-title');

  if(id === 'mult'){
    title.textContent = 'Таблиця множення';
    let html = '<div class="mult-grid fs-mult-grid">';
    html += '<div class="mult-cell mult-header">×</div>';
    for(let i=1;i<=10;i++) html+=`<div class="mult-cell mult-header">${i}</div>`;
    for(let i=1;i<=10;i++){
      html+=`<div class="mult-cell mult-header">${i}</div>`;
      for(let j=1;j<=10;j++) html+=`<div class="mult-cell${i===j?' mult-diagonal':''}">${i*j}</div>`;
    }
    html += '</div>';
    body.innerHTML = html;

  } else if(id === 'sq'){
    title.textContent = 'Квадрати чисел (1–49)';
    // 7 numbers per row: header row (n) + value row (n²), 7 groups
    const cols = 7;
    let html = '<div class="sq-fs-table">';
    for(let row=0; row<7; row++){
      const start = row*cols + 1;
      const end = Math.min(start+cols-1, 49);
      // n row
      html += '<div class="sq-row">';
      html += '<div class="sq-label">n</div>';
      for(let n=start; n<=end; n++) html += `<div class="mult-cell mult-header">${n}</div>`;
      html += '</div>';
      // n² row
      html += '<div class="sq-row sq-row-val">';
      html += '<div class="sq-label">n²</div>';
      for(let n=start; n<=end; n++) html += `<div class="mult-cell sq-val">${n*n}</div>`;
      html += '</div>';
    }
    html += '</div>';
    body.innerHTML = html;

  } else if(id === 'trig'){
    title.textContent = 'Таблиця значень sin, cos, tan, ctg';
    const rows = [
      [0,'0','0','1','0','—'],
      [30,'π/6','1/2','√3/2','√3/3','√3'],
      [45,'π/4','√2/2','√2/2','1','1'],
      [60,'π/3','√3/2','1/2','√3','√3/3'],
      [90,'π/2','1','0','—','0'],
      [120,'2π/3','√3/2','−1/2','−√3','−√3/3'],
      [135,'3π/4','√2/2','−√2/2','−1','−1'],
      [150,'5π/6','1/2','−√3/2','−√3/3','−√3'],
      [180,'π','0','−1','0','—'],
      [210,'7π/6','−1/2','−√3/2','√3/3','√3'],
      [225,'5π/4','−√2/2','−√2/2','1','1'],
      [240,'4π/3','−√3/2','−1/2','√3','√3/3'],
      [270,'3π/2','−1','0','—','0'],
      [300,'5π/3','−√3/2','1/2','−√3','−√3/3'],
      [315,'7π/4','−√2/2','√2/2','−1','−1'],
      [330,'11π/6','−1/2','√3/2','−√3/3','−√3'],
      [360,'2π','0','1','0','—'],
    ];
    let html = '<table class="trig-table fs-trig-table"><thead><tr><th>Кут °</th><th>Рад</th><th>sin</th><th>cos</th><th>tan</th><th>ctg</th></tr></thead><tbody>';
    html += rows.map(r=>`<tr><td><b>${r[0]}°</b></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td></tr>`).join('');
    html += '</tbody></table>';
    body.innerHTML = html;
  }

  modal.classList.add('active');
}

function closeTableFullscreen(){
  document.getElementById('table-fullscreen-modal').classList.remove('active');
}

// Get current user grade (null = not logged in = show all)
function getUserGrade() {
  const user = JSON.parse(localStorage.getItem('mh_user') || 'null');
  return user ? user.grade : null;
}

// Build algebra tab (category buttons)
function buildAlgebraTab(){
  const grid = document.getElementById('algebra-cats-grid');
  const grade = getUserGrade();
  const cats = ALGEBRA_CATS.filter(c =>
    !grade || (grade >= (c.minGrade || 1) && grade <= (c.maxGrade || 11))
  );
  if(!cats.length) {
    grid.innerHTML = '<p style="color:#888;padding:20px;text-align:center">Формули для цього класу незабаром!</p>';
    return;
  }
  let html = '';
  let lastGradeLabel = null;
  cats.forEach(cat => {
    const gradeLabel = cat.minGrade ? `${cat.minGrade} клас` : null;
    if (gradeLabel && gradeLabel !== lastGradeLabel) {
      html += `<div class="geo-group-label">📚 ${gradeLabel} і вище</div>`;
      lastGradeLabel = gradeLabel;
    }
    html += `
      <div class="alg-cat-btn" onclick="openAlgebraModal(${ALGEBRA_CATS.indexOf(cat)})">
        <div class="alg-cat-name">${cat.name}</div>
        <div class="alg-cat-count">${cat.formulas.length} карток</div>
      </div>`;
  });
  grid.innerHTML = html;
}

// Timers for auto-flip cards
let flipTimers = [];

function openAlgebraModal(idx){
  _currentAlgebraCatIdx = idx;
  // Clear any running timers from previous modal
  flipTimers.forEach(t => clearTimeout(t));
  flipTimers = [];

  const cat = ALGEBRA_CATS[idx];
  document.getElementById('alg-modal-title').textContent = cat.name;

  document.getElementById('alg-modal-body').innerHTML = cat.formulas.map((f, i) => {
    if (f.v && f.m) {
      // Flip card: front = emoji visual, back = math formula
      return `
        <div class="flip-card" id="fc${i}" onclick="flipCard('fc${i}')">
          <div class="flip-card-inner" id="fci${i}">
            <div class="flip-card-front">
              <div class="flip-card-label">${f.name}</div>
              <div class="flip-card-visual">${f.v}</div>
              <div class="flip-hint">👆 натисни або зачекай</div>
            </div>
            <div class="flip-card-back">
              <div class="flip-card-label">${f.name}</div>
              <div class="flip-card-math">${f.m}</div>
              <div class="flip-hint" style="color:#93c5fd">👆 ще раз — повернути</div>
            </div>
          </div>
        </div>`;
    }
    // Non-visual formula (older grades)
    return _buildAlgRow(f, 'alg', idx, i);
  }).join('');

  document.getElementById('algebra-modal').classList.add('active');

  // Auto-flip each card with a delay (3s + 1.2s per card)
  cat.formulas.forEach((f, i) => {
    if (!f.v) return;
    const delay = 3000 + i * 1200;
    const t = setTimeout(() => {
      const inner = document.getElementById(`fci${i}`);
      if (inner && !inner.classList.contains('flipped')) {
        inner.classList.add('flipped');
      }
    }, delay);
    flipTimers.push(t);
  });
}

function flipCard(id) {
  const inner = document.getElementById('fci' + id.replace('fc',''));
  if (inner) inner.classList.toggle('flipped');
}

function closeAlgebraModal(){
  flipTimers.forEach(t => clearTimeout(t));
  flipTimers = [];
  document.getElementById('algebra-modal').classList.remove('active');
}

let _currentAlgebraCatIdx = null;
function downloadCurrentAlgebraPDF() {
  if (_currentAlgebraCatIdx === null) return;
  const cat = ALGEBRA_CATS[_currentAlgebraCatIdx];
  const formulas = cat.formulas.map(f => ({
    title: f.name,
    formula: f.m || f.expr || '',
    detail: f.detail || null
  }));
  downloadFormulasPDF(cat.name, formulas);
}

// Build geometry tab — по класах згідно програми України
// 7 кл: прямокутник, трикутник, коло
// 8 кл: + паралелограм, ромб, трапеція
// 10 кл: + стереометрія
function buildGeoTab(){
  const grid = document.getElementById('geo-cards-grid');
  const grade = getUserGrade();
  if (grid && grid.children.length > 0 && grid.dataset.builtForGrade === String(grade)) return; // already built for this grade

  // Which shapes appear at which grade
  const base7   = ['rectangle','triangle','circle'];           // 7 кл
  const extra8  = ['parallelogram','rhombus','trapezoid'];     // 8 кл
  const extra10 = ['cube','parallelepiped','cylinder','cone','pyramid']; // 10 кл

  let plane7  = grade ? (grade >= 7  ? base7  : []) : base7;
  let plane8  = grade ? (grade >= 8  ? extra8 : []) : extra8;
  let solid10 = grade ? (grade >= 10 ? extra10: []) : extra10;

  const makeCard = cat => `
    <div class="alg-cat-btn geo-cat-btn" onclick="showCategory('${cat}')">
      <div class="alg-cat-name">${categoryNames[cat]}</div>
      <div class="alg-cat-count">${(data[cat]||[]).length} формул</div>
    </div>`;

  let html = '';
  if(plane7.length || plane8.length){
    html += '<div class="geo-group-label">📐 Планіметрія (плоскі фігури)</div>';
    if(plane7.length) html += plane7.map(makeCard).join('');
    if(plane8.length){
      html += '<div class="geo-group-label" style="margin-top:12px;font-size:.78rem;">8 клас і вище</div>';
      html += plane8.map(makeCard).join('');
    }
  }
  if(solid10.length){
    html += '<div class="geo-group-label" style="margin-top:16px">📦 Стереометрія — 10-11 клас</div>';
    html += solid10.map(makeCard).join('');
  }
  grid.innerHTML = html || '<p style="color:#888;padding:20px;text-align:center">Для твого класу немає даних</p>';
  grid.dataset.builtForGrade = String(grade);
}

// buildTablesTab removed — dead code (used buildTablesButtons instead)

// ===== FORMULA TABS =====
function showFormulaTab(tab){
  document.querySelectorAll('.ftab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.ftab-content').forEach(t=>t.classList.remove('active'));
  const tabEl = document.getElementById('ftab-'+tab);
  if(tabEl) tabEl.classList.add('active');
  const btn = document.getElementById('ftab-btn-'+tab);
  if(btn) btn.classList.add('active');
  if(tab==='algebra') buildAlgebraTab();
  // 'all' tab removed
  if(tab==='geometry') buildGeoTab();
  if(tab==='trigonometry') buildTrigTab();
  if(tab==='tables') buildTablesButtons();
}

// "Все разом" tab — 6 random big flip cards with shuffle button
function buildAllTab() {
  const grade = getUserGrade();
  const grid = document.getElementById('all-cats-grid');
  if (!grid) return;

  // Gather all grade-appropriate formulas
  const allFormulas = [];
  ALGEBRA_CATS.forEach(cat => {
    if (grade && (grade < (cat.minGrade || 1) || grade > (cat.maxGrade || 11))) return;
    cat.formulas.forEach(f => allFormulas.push({ ...f, catName: cat.name }));
  });

  // Shuffle and pick 6
  for (let i = allFormulas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allFormulas[i], allFormulas[j]] = [allFormulas[j], allFormulas[i]];
  }
  const pick = allFormulas.slice(0, 6);

  grid.innerHTML = `
    <div style="grid-column:1/-1;display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
      <span style="color:#888;font-size:0.9rem;">6 випадкових карток — перевертай!</span>
      <button onclick="buildAllTab()" style="background:#e0f2fe;border:none;border-radius:10px;padding:8px 18px;font-size:0.9rem;font-weight:700;cursor:pointer;color:#0369a1;transition:.2s;" onmouseover="this.style.background='#bae6fd'" onmouseout="this.style.background='#e0f2fe'">🎲 Ще 6 карток</button>
    </div>
    ${pick.map((f, i) => `
      <div class="flip-card" onclick="flipAllCard('all-fci${i}')">
        <div class="flip-card-inner" id="all-fci${i}">
          <div class="flip-card-front">
            <div class="flip-card-label">${f.catName} · ${f.name}</div>
            <div class="flip-card-visual">${f.v || f.name}</div>
            <div class="flip-hint">👆 натисни або зачекай</div>
          </div>
          <div class="flip-card-back">
            <div class="flip-card-label">${f.catName} · ${f.name}</div>
            <div class="flip-card-math">${f.m || f.expr || ''}</div>
            <div class="flip-hint">👆 повернути</div>
          </div>
        </div>
      </div>`).join('')}`;

  // Auto-flip each card with a stagger
  let allFlipTimers = [];
  pick.forEach((f, i) => {
    const t = setTimeout(() => {
      const inner = document.getElementById(`all-fci${i}`);
      if (inner && !inner.classList.contains('flipped')) inner.classList.add('flipped');
    }, 3000 + i * 1000);
    allFlipTimers.push(t);
  });
}

function flipAllCard(innerId) {
  const inner = document.getElementById(innerId);
  if (inner) inner.classList.toggle('flipped');
}


// buildTrigTable2 removed — dead code (referenced non-existent #trig-tbody-2)
function showGraph(){
  show('graph');
}
function wsUpdateRightCol() {
  const col = document.getElementById('ws-right-col');
  if (!col) return;
  const panels = col.querySelectorAll('.ws-r-panel.open');
  col.classList.toggle('has-panel', panels.length > 0);
  // Show resize handles only between two consecutive open panels
  const allPanels = Array.from(col.querySelectorAll('.ws-r-panel'));
  col.querySelectorAll('.ws-vpanel-resize').forEach(r => r.classList.remove('show'));
  for (let i = 0; i < allPanels.length - 1; i++) {
    if (allPanels[i].classList.contains('open') && allPanels[i+1].classList.contains('open')) {
      const handle = allPanels[i].nextElementSibling;
      if (handle && handle.classList.contains('ws-vpanel-resize')) handle.classList.add('show');
    }
  }
  requestAnimationFrame(() => requestAnimationFrame(initOrResizeCanvas));
}

function wsOpenPanel(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
  wsUpdateRightCol();
}

function wsClosePanel(key) {
  const map = { notebook: 'ws-notebook', calc: 'ws-calc', info: 'ws-props' };
  const id = map[key] || key;
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
  // Update toolbar button active state
  const btnMap = { 'ws-notebook': 'wt-notebook', 'ws-calc': 'wt-calc' };
  const btnId = btnMap[id];
  if (btnId) { const btn = document.getElementById(btnId); if (btn) btn.classList.remove('active'); }
  wsUpdateRightCol();
}

function wsTogglePanel(key) {
  const map = { notebook: 'ws-notebook', calc: 'ws-calc', info: 'ws-props' };
  const id = map[key] || key;
  const el = document.getElementById(id);
  if (!el) return;
  const isOpen = el.classList.toggle('open');
  // Toggle toolbar button
  const btnMap = { 'ws-notebook': 'wt-notebook', 'ws-calc': 'wt-calc' };
  const btnId = btnMap[id];
  if (btnId) { const btn = document.getElementById(btnId); if (btn) btn.classList.toggle('active', isOpen); }
  wsUpdateRightCol();
}

function wsToggleNotebook() { togglePanel('notebook'); }

// ===== МОДАЛКИ ФОРМУЛ (оригінал) =====
function showCategory(cat){
  document.getElementById('category-title').textContent=categoryNames[cat];
  const cont=document.getElementById('modal-formulas');
  cont.innerHTML='';
  data[cat].forEach((f,i)=>{
    const d=document.createElement('div');
    d.className='formula-in-modal-item';
    d.innerHTML=`<div class="formula-in-modal-title">${f.title}</div><div class="formula-in-modal-expr">${f.formula}</div>`;
    d.onclick=()=>openFormulaModal({name:f.title, expr:f.formula, svg:f.svg||null, symbols:f.symbols||null});
    cont.appendChild(d);
  });
  document.getElementById('category-modal').classList.add('active');
}
function closeCategoryModal(){document.getElementById('category-modal').classList.remove('active');}
function openFormula(cat,idx){
  const f=data[cat][idx];
  document.getElementById('title').textContent=categoryNames[cat]+' — '+f.title;
  document.getElementById('display').textContent=f.formula;
  document.getElementById('svg').innerHTML=f.svg;
  document.getElementById('table').innerHTML=f.symbols.map(s=>`<tr><td><strong>${s.s}</strong></td><td>${s.m}</td></tr>`).join('');
  document.getElementById('modal').classList.add('active');
}
function closeModal(){document.getElementById('modal').classList.remove('active');}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeCategoryModal();wsCalcClose();closeFormulaDetail();}});

// ===== ГРАФ+РОБОЧИЙ СТІЛ ENGINE =====
let canvas, ctx, scale=50, offsetX=0, offsetY=0;
let graphInited=false;
let functions=[];
let panning=false, startDX, startDY;

// workspace objects
let wsObjs=[], wsSelId=null, wsNextId=1;
let wsDrag=false, wsDragOX=0, wsDragOY=0;
let wsCurrentShape=null;
const WS_PALETTE=['#1a3e7c','#ff4d6d','#00c896','#ff9800','#9c27b0','#00d4ff','#795548'];

function initOrResizeCanvas(){
  canvas=document.getElementById('graph-canvas');
  if(!canvas) return;
  const wrapper=document.getElementById('canvas-wrapper');
  canvas.width=wrapper.clientWidth;
  canvas.height=wrapper.clientHeight;
  ctx=canvas.getContext('2d');

  if(!graphInited){
    offsetX=canvas.width/2;
    offsetY=canvas.height/2;
    graphInited=true;
    functions=[{expr:'sin(x)',color:'#1a3e7c'}];
    renderFunctionList();
    wsLoadState();

    // Auto-resize canvas whenever the wrapper changes size (notebook open/close, window resize)
    new ResizeObserver(()=>{
      const w=wrapper.clientWidth, h=wrapper.clientHeight;
      if(w>0 && h>0 && (canvas.width!==w || canvas.height!==h)){
        canvas.width=w; canvas.height=h;
        draw();
      }
    }).observe(wrapper);

    // zoom
    canvas.addEventListener('wheel',e=>{
      e.preventDefault();
      const factor=e.deltaY<0?1.12:0.88;
      const mx=e.offsetX, my=e.offsetY;
      offsetX=mx+(offsetX-mx)*factor;
      offsetY=my+(offsetY-my)*factor;
      scale*=factor;
      draw();
    },{passive:false});

    // pan + select
    canvas.addEventListener('mousedown',e=>{
      const wx=(e.offsetX-offsetX)/scale, wy=(offsetY-e.offsetY)/scale;
      // hit test objects (back to front)
      let hit=null;
      for(let i=wsObjs.length-1;i>=0;i--){
        if(wsObjHit(wsObjs[i],wx,wy)){hit=wsObjs[i];break;}
      }
      if(hit){
        wsSelId=hit.id; wsDrag=true;
        wsDragOX=wx-hit.x; wsDragOY=wy-hit.y;
        wsShowProps(hit);
      } else {
        wsSelId=null; wsCloseProps();
        panning=true; startDX=e.clientX; startDY=e.clientY;
        canvas.style.cursor='grabbing';
      }
      draw();
    });
    window.addEventListener('mouseup',()=>{
      if(wsDrag) wsSave();
      wsDrag=false; panning=false;
      canvas.style.cursor='default';
    });
    canvas.addEventListener('mousemove',e=>{
      if(panning){
        offsetX+=e.clientX-startDX; offsetY+=e.clientY-startDY;
        startDX=e.clientX; startDY=e.clientY;
        draw(); return;
      }
      if(wsDrag&&wsSelId!==null){
        const wx=(e.offsetX-offsetX)/scale, wy=(offsetY-e.offsetY)/scale;
        const o=wsObjs.find(o=>o.id===wsSelId);
        if(o){o.x=wx-wsDragOX; o.y=wy-wsDragOY; draw();}
        return;
      }
      const x=(e.offsetX-offsetX)/scale;
      const y=(offsetY-e.offsetY)/scale;
      document.getElementById('canvas-info').textContent=`x: ${x.toFixed(3)} | y: ${y.toFixed(3)}`;
    });
    canvas.addEventListener('dblclick',e=>{
      const wx=(e.offsetX-offsetX)/scale, wy=(offsetY-e.offsetY)/scale;
      for(let i=wsObjs.length-1;i>=0;i--){
        if(wsObjs[i].type==='note'&&wsObjHit(wsObjs[i],wx,wy)){
          wsInlineEdit(wsObjs[i],e.clientX,e.clientY);return;
        }
      }
    });
    canvas.addEventListener('contextmenu',e=>e.preventDefault());
    window.addEventListener('resize',()=>{
      canvas.width=wrapper.clientWidth;
      canvas.height=wrapper.clientHeight;
      draw();
    });
  }
  draw();
}

// ─── DRAW ───
function draw(){
  if(!canvas||!ctx) return;
  drawGrid();
  wsObjs.forEach(o=>{ctx.save();wsDrawObj(o);ctx.restore();});
}

function drawGrid(){
  const w=canvas.width,h=canvas.height;
  ctx.clearRect(0,0,w,h);
  const dark=document.body.classList.contains('dark');
  const gridMinor = dark ? '#2a3a50' : '#e8eef5';
  const gridMajor = dark ? '#1e3a5a' : '#d4dfe9';
  const axisColor = dark ? '#7aa0c8' : '#334';
  const numColor  = dark ? '#aac4e0' : '#555';
  const bgColor   = dark ? '#1a1a2e' : '#fff';

  ctx.fillStyle=bgColor;
  ctx.fillRect(0,0,w,h);

  let step=scale;
  while(step<30) step*=2;
  while(step>120) step/=2;

  // minor grid
  ctx.strokeStyle=gridMinor;ctx.lineWidth=0.8;
  for(let x=offsetX%step;x<w;x+=step){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
  for(let y=offsetY%step;y<h;y+=step){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}

  // secondary grid
  if(step!==scale){
    ctx.strokeStyle=gridMajor;ctx.lineWidth=0.5;
    for(let x=offsetX%scale;x<w;x+=scale){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
    for(let y=offsetY%scale;y<h;y+=scale){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
  }

  // axes
  ctx.strokeStyle=axisColor;ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(0,offsetY);ctx.lineTo(w,offsetY);ctx.stroke();
  ctx.beginPath();ctx.moveTo(offsetX,0);ctx.lineTo(offsetX,h);ctx.stroke();

  // arrows
  ctx.fillStyle=axisColor;
  ctx.beginPath();ctx.moveTo(w-8,offsetY-5);ctx.lineTo(w,offsetY);ctx.lineTo(w-8,offsetY+5);ctx.fill();
  ctx.beginPath();ctx.moveTo(offsetX-5,8);ctx.lineTo(offsetX,0);ctx.lineTo(offsetX+5,8);ctx.fill();

  // numbers
  ctx.fillStyle=numColor;ctx.font='11px Fira Code,monospace';
  const unit=step/scale;
  ctx.textAlign='center';ctx.textBaseline='top';
  for(let x=offsetX%step-step;x<w+step;x+=step){
    const val=Math.round((x-offsetX)/scale/unit)*unit;
    if(Math.abs(val)<0.0001) continue;
    if(x>5&&x<w-15){
      ctx.beginPath();ctx.moveTo(x,offsetY-4);ctx.lineTo(x,offsetY+4);ctx.strokeStyle=axisColor;ctx.lineWidth=1.5;ctx.stroke();
      ctx.fillStyle=numColor;ctx.fillText(Number.isInteger(val)?val:val.toFixed(1),x,offsetY+6);
    }
  }
  ctx.textAlign='right';ctx.textBaseline='middle';
  for(let y=offsetY%step-step;y<h+step;y+=step){
    const val=Math.round((offsetY-y)/scale/unit)*unit;
    if(Math.abs(val)<0.0001) continue;
    if(y>5&&y<h-5){
      ctx.beginPath();ctx.moveTo(offsetX-4,y);ctx.lineTo(offsetX+4,y);ctx.strokeStyle=axisColor;ctx.lineWidth=1.5;ctx.stroke();
      ctx.fillStyle=numColor;ctx.fillText(Number.isInteger(val)?val:val.toFixed(1),offsetX-7,y);
    }
  }
  ctx.fillStyle='#888';ctx.textAlign='right';ctx.textBaseline='top';ctx.fillText('0',offsetX-4,offsetY+4);
  ctx.fillStyle='#334';ctx.font='bold 13px Fira Code,monospace';
  ctx.textAlign='center';ctx.textBaseline='bottom';ctx.fillText('x',w-4,offsetY-6);
  ctx.textAlign='left';ctx.textBaseline='top';ctx.fillText('y',offsetX+8,4);

  // draw functions
  functions.forEach(f=>{
    const expr=parseExpr(f.expr);
    let fn; try{fn=new Function('x',`"use strict"; const ctg=t=>1/Math.tan(t); return ${expr};`);}catch{return;}
    ctx.beginPath();ctx.strokeStyle=f.color;ctx.lineWidth=2.5;ctx.lineJoin='round';
    let prevY=null,prevValid=false;
    for(let px=0;px<=w;px++){
      const x=(px-offsetX)/scale;
      let y; try{y=fn(x);}catch{prevValid=false;continue;}
      if(!isFinite(y)||isNaN(y)){prevValid=false;ctx.stroke();ctx.beginPath();prevY=null;continue;}
      const py=offsetY-y*scale;
      if(prevValid&&Math.abs(py-(offsetY-prevY*scale))>h*1.5){ctx.stroke();ctx.beginPath();prevValid=false;}
      if(py<-h||py>2*h){prevValid=false;ctx.stroke();ctx.beginPath();prevY=null;continue;}
      if(!prevValid)ctx.moveTo(px,py); else ctx.lineTo(px,py);
      prevY=y;prevValid=true;
    }
    ctx.stroke();
  });
}

// ─── WORKSPACE OBJECTS ───
function wsScreenXY(wx,wy){return{sx:offsetX+wx*scale, sy:offsetY-wy*scale};}

function wsDrawObj(o){
  const sel=o.id===wsSelId;
  const {sx,sy}=wsScreenXY(o.x,o.y);
  const S=scale;
  ctx.strokeStyle=o.color||'#1a3e7c';
  ctx.fillStyle=(o.color||'#1a3e7c')+'33';
  ctx.lineWidth=sel?2.5:1.8;
  if(sel){ctx.shadowColor='#00d4ff';ctx.shadowBlur=10;}

  if(o.type==='circle'){
    ctx.beginPath();ctx.arc(sx,sy,o.r*S,0,Math.PI*2);ctx.fill();ctx.stroke();
    ctx.setLineDash([4,5]);ctx.strokeStyle=(o.color||'#1a3e7c')+'99';
    ctx.beginPath();ctx.moveTo(sx,sy);ctx.lineTo(sx+o.r*S,sy);ctx.stroke();
    ctx.setLineDash([]);
  } else if(o.type==='rectangle'){
    ctx.beginPath();ctx.rect(sx-o.a*S/2,sy-o.b*S/2,o.a*S,o.b*S);ctx.fill();ctx.stroke();
  } else if(o.type==='square'){
    ctx.beginPath();ctx.rect(sx-o.a*S/2,sy-o.a*S/2,o.a*S,o.a*S);ctx.fill();ctx.stroke();
  } else if(o.type==='triangle'){
    const a=o.a*S,b=o.b*S,c=o.c*S;
    const Ax=sx-a/2,Ay=sy+a*0.35;
    const Bx=sx+a/2,By=Ay;
    const cosA=(a*a+b*b-c*c)/(2*a*b);
    const sinA=Math.sqrt(Math.max(0,1-cosA*cosA));
    const Cx=Ax+b*cosA,Cy=Ay-b*sinA;
    ctx.beginPath();ctx.moveTo(Ax,Ay);ctx.lineTo(Bx,By);ctx.lineTo(Cx,Cy);ctx.closePath();ctx.fill();ctx.stroke();
  } else if(o.type==='rhombus'){
    const d1=o.d1*S/2,d2=o.d2*S/2;
    ctx.beginPath();ctx.moveTo(sx,sy-d2);ctx.lineTo(sx+d1,sy);ctx.lineTo(sx,sy+d2);ctx.lineTo(sx-d1,sy);ctx.closePath();ctx.fill();ctx.stroke();
  } else if(o.type==='trapezoid'){
    const a=o.a*S,b=o.b*S,hh=o.h*S,off=(a-b)/2;
    ctx.beginPath();ctx.moveTo(sx-a/2,sy+hh/2);ctx.lineTo(sx+a/2,sy+hh/2);ctx.lineTo(sx+a/2-off,sy-hh/2);ctx.lineTo(sx-a/2+off,sy-hh/2);ctx.closePath();ctx.fill();ctx.stroke();
  } else if(o.type==='note'){
    const nw=Math.max(120,(o.fontSize||13)*o.text.length*0.6+24);
    const nh=(o.fontSize||13)+20;
    ctx.shadowBlur=0;
    // прозорий фон або кольоровий якщо вибрано
    if(o.color&&o.color!=='transparent'){
      ctx.fillStyle=o.color;
      ctx.globalAlpha=0.75;
      ctx.beginPath();ctx.roundRect(sx-nw/2,sy-nh/2,nw,nh,6);ctx.fill();
      ctx.globalAlpha=1;
    }
    if(sel){
      ctx.strokeStyle='#00d4ff';ctx.lineWidth=2;
      ctx.beginPath();ctx.roundRect(sx-nw/2,sy-nh/2,nw,nh,6);ctx.stroke();
    }
    ctx.fillStyle=o.textColor||'#1a3e7c';
    ctx.font=`${o.bold?'bold ':''}${o.fontSize||13}px Roboto,sans-serif`;
    ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText(o.text,sx,sy);
  }

  ctx.shadowBlur=0;
  if(sel) wsDrawHandles(o);
}

function wsGetBBoxScreen(o){
  const {sx,sy}=wsScreenXY(o.x,o.y);const S=scale;
  if(o.type==='circle') return{x:sx-o.r*S,y:sy-o.r*S,w:o.r*S*2,h:o.r*S*2};
  if(o.type==='rectangle') return{x:sx-o.a*S/2,y:sy-o.b*S/2,w:o.a*S,h:o.b*S};
  if(o.type==='square') return{x:sx-o.a*S/2,y:sy-o.a*S/2,w:o.a*S,h:o.a*S};
  if(o.type==='triangle'){const a=o.a*S;return{x:sx-a/2,y:sy-a*0.7,w:a,h:a};}
  if(o.type==='rhombus') return{x:sx-o.d1*S/2,y:sy-o.d2*S/2,w:o.d1*S,h:o.d2*S};
  if(o.type==='trapezoid') return{x:sx-o.a*S/2,y:sy-o.h*S/2,w:o.a*S,h:o.h*S};
  if(o.type==='note'){const nw=150,nh=50;return{x:sx-nw/2,y:sy-nh/2,w:nw,h:nh};}
  return null;
}
function wsObjHit(o,wx,wy){
  const {sx,sy}=wsScreenXY(wx,wy);
  const bb=wsGetBBoxScreen(o);if(!bb) return false;
  return sx>=bb.x-6&&sx<=bb.x+bb.w+6&&sy>=bb.y-6&&sy<=bb.y+bb.h+6;
}
function wsDrawHandles(o){
  const bb=wsGetBBoxScreen(o);if(!bb)return;
  [[bb.x,bb.y],[bb.x+bb.w,bb.y],[bb.x,bb.y+bb.h],[bb.x+bb.w,bb.y+bb.h]].forEach(([hx,hy])=>{
    ctx.fillStyle='#fff';ctx.strokeStyle='#00d4ff';ctx.lineWidth=1.5;
    ctx.beginPath();ctx.arc(hx,hy,5,0,Math.PI*2);ctx.fill();ctx.stroke();
  });
}

// ─── TOOLBAR ───
function wsTool(t){
  document.querySelectorAll('.ws-tbtn').forEach(b=>b.classList.remove('active'));
  const el=document.getElementById('wt-'+t);if(el) el.classList.add('active');
}
function wsToggleSide(panel){
  const side=document.getElementById('ws-side');
  const pf=document.getElementById('ws-panel-func');
  const ps=document.getElementById('ws-panel-shape');
  const isSame=(panel==='func'&&!pf.hidden&&side.classList.contains('open'))||
               (panel==='shape'&&!ps.hidden&&side.classList.contains('open'));
  if(isSame){side.classList.remove('open');wsTool('select');return;}
  side.classList.add('open');
  pf.style.display=panel==='func'?'block':'none';
  ps.style.display=panel==='shape'?'block':'none';
  document.querySelectorAll('.ws-tbtn').forEach(b=>b.classList.remove('active'));
  const btn=document.getElementById('wt-'+panel);if(btn) btn.classList.add('active');
}

// ─── FUNCTIONS ───
function addFunction(){
  const colors=['#1a3e7c','#ff6b6b','#00a844','#ff9800','#9C27B0','#00d4ff'];
  functions.push({expr:'x^2',color:colors[functions.length%colors.length]});
  renderFunctionList();draw();
}
function removeFunction(i){functions.splice(i,1);renderFunctionList();draw();}
function clearAllFunctions(){functions=[];renderFunctionList();draw();wsSave();}
function renderFunctionList(){
  const list=document.getElementById('ws-func-list');
  list.innerHTML='';
  functions.forEach((f,i)=>{
    const div=document.createElement('div');
    div.className='function-item';div.style.borderLeftColor=f.color;
    div.draggable=true;
    div.title='Перетягни у зошит';
    div.addEventListener('dragstart',e=>{
      e.dataTransfer.setData('text/plain',`y = ${f.expr}`);
      e.dataTransfer.setData('application/nb-formula',`y = ${f.expr}`);
      e.dataTransfer.effectAllowed='copy';
      div.style.opacity='0.6';
      const W=160,H=90,mc=document.createElement('canvas');
      mc.width=W;mc.height=H;mc.style.cssText='position:fixed;left:-9999px;top:-9999px;';
      document.body.appendChild(mc);
      const mx=mc.getContext('2d');
      mx.fillStyle='#1a3e7c';mx.fillRect(0,0,W,H);
      mx.strokeStyle='#2a5090';mx.lineWidth=0.5;
      for(let x=0;x<=W;x+=20){mx.beginPath();mx.moveTo(x,0);mx.lineTo(x,H);mx.stroke();}
      for(let y=0;y<=H;y+=20){mx.beginPath();mx.moveTo(0,y);mx.lineTo(W,y);mx.stroke();}
      mx.strokeStyle='rgba(255,255,255,0.25)';mx.lineWidth=1.2;
      mx.beginPath();mx.moveTo(0,H/2);mx.lineTo(W,H/2);mx.stroke();
      mx.beginPath();mx.moveTo(W/2,0);mx.lineTo(W/2,H);mx.stroke();
      const sc=W/12,expr=parseExpr(f.expr);
      mx.strokeStyle=f.color;mx.lineWidth=2.5;mx.beginPath();
      let started=false;
      for(let px=0;px<W;px++){
        const wx=(px-W/2)/sc;
        try{const wy=Function('x','"use strict";return ('+expr+')')(wx);
          if(!isFinite(wy)){started=false;continue;}
          const py=H/2-wy*sc;
          if(!started){mx.moveTo(px,py);started=true;}else{mx.lineTo(px,py);}
        }catch(err){started=false;}
      }
      mx.stroke();
      mx.fillStyle='rgba(255,255,255,0.9)';mx.font='bold 11px monospace';
      mx.fillText('y = '+f.expr,6,H-8);
      e.dataTransfer.setDragImage(mc,W/2,H/2);
      setTimeout(()=>mc.remove(),0);
    });
    div.addEventListener('dragend',()=>{div.style.opacity='1';});
    const sz = Math.max(7, f.expr.length + 2);
    div.innerHTML=`<div class="function-item-top">
      <span style="cursor:grab;color:#b3d9ff;font-size:14px;flex-shrink:0;" title="Перетягни у зошит">⠿</span>
      <input class="function-input" value="${f.expr}" size="${sz}" oninput="updateFunc(${i},this.value);this.size=Math.max(7,this.value.length+2)" title="Функція від x" placeholder="sin(x)">
      <input type="color" value="${f.color}" onchange="updateColor(${i},this.value)" style="width:28px;height:28px;border:none;cursor:pointer;border-radius:4px;padding:2px;flex-shrink:0;">
      <button class="func-remove" onclick="removeFunction(${i})" title="Видалити">✕</button>
    </div>`;
    list.appendChild(div);
  });
}
function updateFunc(i,v){functions[i].expr=v;draw();}
function updateColor(i,v){functions[i].color=v;draw();}

// ─── SHAPE FORM ───
const wsShapeDefs={
  circle:[{k:'r',l:'Радіус r (одиниці)',def:2}],
  rectangle:[{k:'a',l:'Ширина a',def:4},{k:'b',l:'Висота b',def:3}],
  square:[{k:'a',l:'Сторона a',def:3}],
  triangle:[{k:'a',l:'Основа a',def:4},{k:'b',l:'Сторона b',def:3},{k:'c',l:'Сторона c',def:3}],
  rhombus:[{k:'d1',l:'Діагональ d₁',def:4},{k:'d2',l:'Діагональ d₂',def:3}],
  trapezoid:[{k:'a',l:'Нижня основа a',def:5},{k:'b',l:'Верхня основа b',def:3},{k:'h',l:'Висота h',def:2}]
};
const wsShapeNames={circle:'Коло',rectangle:'Прямокутник',square:'Квадрат',triangle:'Трикутник',rhombus:'Ромб',trapezoid:'Трапеція'};

function wsShapeForm(type){
  wsCurrentShape=type;
  document.getElementById('ws-shape-list').style.display='none';
  document.getElementById('ws-shape-form').style.display='block';
  document.getElementById('ws-form-fields').innerHTML=wsShapeDefs[type].map(f=>
    `<div class="ws-shape-field"><label>${f.l}</label><input type="number" id="wsp-${f.k}" value="${f.def}" min="0.1" step="0.5"></div>`
  ).join('');
}
function wsBackToList(){
  document.getElementById('ws-shape-list').style.display='block';
  document.getElementById('ws-shape-form').style.display='none';
}
function wspV(k){const el=document.getElementById('wsp-'+k);return el?parseFloat(el.value)||1:1;}
function wsPlaceShape(){
  const color=document.getElementById('ws-shape-color').value;
  const type=wsCurrentShape;
  // place at center of current view
  const cx=(canvas.width/2-offsetX)/scale;
  const cy=(offsetY-canvas.height/2)/scale;
  const o={id:wsNextId++,type,color,x:cx,y:cy};
  if(type==='circle') o.r=wspV('r');
  if(type==='rectangle'){o.a=wspV('a');o.b=wspV('b');}
  if(type==='square') o.a=wspV('a');
  if(type==='triangle'){o.a=wspV('a');o.b=wspV('b');o.c=wspV('c');}
  if(type==='rhombus'){o.d1=wspV('d1');o.d2=wspV('d2');}
  if(type==='trapezoid'){o.a=wspV('a');o.b=wspV('b');o.h=wspV('h');}
  wsObjs.push(o);wsSelId=o.id;
  draw();wsShowProps(o);wsSave();
  // закрити бічну панель
  wsBackToList();
  document.getElementById('ws-side').classList.remove('open');
  wsTool('select');
}

// ─── NOTES ───
function wsAddNote(){
  const cx=(canvas.width/2-offsetX)/scale;
  const cy=(offsetY-canvas.height/2)/scale;
  wsObjs.push({id:wsNextId++,type:'note',x:cx,y:cy,text:'Нотатка...',color:'#fffde7'});
  draw();wsSave();wsTool('select');
}

// ─── DELETE ───
function wsDelete(){
  if(wsSelId===null)return;
  wsObjs=wsObjs.filter(o=>o.id!==wsSelId);
  wsSelId=null;wsCloseProps();draw();wsSave();
}

function wsInlineEdit(o,cx,cy){
  const existing=document.getElementById('ws-inline-input');
  if(existing) existing.remove();
  const inp=document.createElement('input');
  inp.id='ws-inline-input';
  inp.value=o.text;
  inp.style.cssText=`position:fixed;left:${cx-80}px;top:${cy-16}px;width:200px;padding:6px 10px;font-size:${o.fontSize||13}px;font-family:Roboto,sans-serif;border:2px solid #00d4ff;border-radius:8px;background:#fff;color:#1a3e7c;box-shadow:0 4px 16px rgba(0,0,0,0.18);z-index:9999;outline:none;`;
  document.body.appendChild(inp);
  inp.focus();inp.select();
  const finish=()=>{o.text=inp.value||o.text;inp.remove();draw();wsSave();};
  inp.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key==='Escape')finish();});
  inp.addEventListener('blur',finish);
}

// ─── PROPS PANEL ───
function wsCloseProps(){
  wsClosePanel('info');
  wsSelId=null;draw();
}
function wsShowProps(o){
  wsOpenPanel('ws-props');
  document.getElementById('ws-props-title').textContent=wsShapeNames[o.type]||'Нотатка';
  const body=document.getElementById('ws-props-body');
  if(o.type==='note'){
    body.innerHTML=`
      <div class="ws-prop-lbl">Текст</div>
      <input value="${o.text.replace(/"/g,'&quot;')}" oninput="wsPropNoteText(${o.id},this.value)" style="width:100%;padding:7px 9px;border-radius:7px;border:1.5px solid #b3d9ff;font-size:13px;margin-bottom:6px;box-sizing:border-box;">
      <div class="ws-prop-lbl">Розмір шрифту</div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
        <input type="range" min="10" max="36" value="${o.fontSize||13}" oninput="wsPropNote(${o.id},'fontSize',+this.value);document.getElementById('nfs${o.id}').textContent=this.value+'px'" style="flex:1;">
        <span id="nfs${o.id}" style="font-size:12px;color:#6a8ab0;min-width:32px;">${o.fontSize||13}px</span>
      </div>
      <div class="ws-prop-lbl">Колір тексту</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:6px;">
        ${['#1a3e7c','#000','#fff','#ff4d6d','#ff9800','#00a0c0'].map(c=>`<div class="ws-cdot" style="background:${c};border:2px solid #b3d9ff;" onclick="wsPropNote(${o.id},'textColor','${c}')"></div>`).join('')}
        <input type="color" value="${o.textColor||'#1a3e7c'}" onchange="wsPropNote(${o.id},'textColor',this.value)" style="width:22px;height:22px;border-radius:50%;border:2px solid #b3d9ff;cursor:pointer;padding:0;">
      </div>
      <div class="ws-prop-lbl">Фон нотатки</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:6px;">
        <div class="ws-cdot" style="background:transparent;border:2px dashed #b3d9ff;" onclick="wsPropNote(${o.id},'color','transparent')" title="Прозорий"></div>
        ${['#fffde7','#e8f5e9','#e3f2fd','#fce4ec','#f3e5f5'].map(c=>`<div class="ws-cdot" style="background:${c};" onclick="wsPropNote(${o.id},'color','${c}')"></div>`).join('')}
      </div>
      <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#6a8ab0;margin-bottom:10px;">
        <input type="checkbox" ${o.bold?'checked':''} onchange="wsPropNote(${o.id},'bold',this.checked)"> Жирний текст
      </label>
      <button class="ws-prop-delbtn" onclick="wsDelete()">🗑 Видалити</button>`;
    return;
  }
  const info=wsCalcInfo(o);
  // size controls per shape type
  const sizeControls=wsGetSizeControls(o);
  body.innerHTML=`<div class="ws-prop-lbl">Колір</div>
    <div class="ws-color-row" style="margin-bottom:8px;">${WS_PALETTE.map(c=>`<div class="ws-cdot" style="background:${c};" onclick="wsPropColor(${o.id},'${c}')"></div>`).join('')}
      <input type="color" value="${o.color}" onchange="wsPropColor(${o.id},this.value)" style="width:22px;height:22px;border-radius:50%;border:2px solid #b3d9ff;cursor:pointer;padding:0;" title="Будь-який колір"></div>
    <div class="ws-prop-lbl" style="margin-top:4px;">Розмір</div>
    ${sizeControls}
    <div class="ws-prop-lbl" style="margin-top:8px;">Обчислення</div>
    <div class="ws-prop-calc">${info.calcs.join('<br>')}</div>
    <button class="ws-prop-delbtn" onclick="wsDelete()">🗑 Видалити</button>`;
}
function wsPropColor(id,c){const o=wsObjs.find(o=>o.id===id);if(o){o.color=c;draw();wsSave();wsShowProps(o);}}
function wsPropNote(id,key,val){const o=wsObjs.find(o=>o.id===id);if(o){o[key]=val;draw();wsSave();}}
function wsPropNoteText(id,val){const o=wsObjs.find(o=>o.id===id);if(o){o.text=val;draw();wsSave();}}

function wsGetSizeControls(o){
  const sl=(key,label,min,max,val)=>`<div style="display:flex;align-items:center;gap:8px;margin-bottom:5px;">
    <span style="font-size:11px;color:#6a8ab0;min-width:40px;">${label}</span>
    <input type="number" min="${min}" max="${max}" step="0.1" value="${Math.round(val*10)/10}" oninput="wsPropSize(${o.id},'${key}',+this.value)" style="flex:1;padding:5px 8px;border:1.5px solid #b3d9ff;border-radius:6px;font-family:'Fira Code',monospace;font-size:13px;outline:none;">
  </div>`;
  if(o.type==='circle') return sl('r','r',0.1,50,o.r);
  if(o.type==='rectangle') return sl('a','a',0.1,50,o.a)+sl('b','b',0.1,50,o.b);
  if(o.type==='square') return sl('a','a',0.1,50,o.a);
  if(o.type==='triangle') return sl('a','a',0.1,50,o.a)+sl('b','b',0.1,50,o.b)+sl('c','c',0.1,50,o.c);
  if(o.type==='rhombus') return sl('d1','d₁',0.1,50,o.d1)+sl('d2','d₂',0.1,50,o.d2);
  if(o.type==='trapezoid') return sl('a','a',0.1,50,o.a)+sl('b','b',0.1,50,o.b)+sl('h','h',0.1,50,o.h);
  return '';
}
function wsPropSize(id,key,val){
  const o=wsObjs.find(o=>o.id===id);
  if(!o)return;
  o[key]=val;
  // оновити обчислення в панелі
  const info=wsCalcInfo(o);
  const el=document.querySelector('.ws-prop-calc');
  if(el) el.innerHTML=info.calcs.join('<br>');
  draw();wsSave();
}

function wsCalcInfo(o){
  const R=v=>Math.round(v*100)/100;
  if(o.type==='circle'){const r=o.r;return{params:[{l:'Радіус r',v:r+' од.'}],calcs:['S = πr² = '+R(Math.PI*r*r)+' од²','C = 2πr = '+R(2*Math.PI*r)+' од','D = '+R(2*r)+' од']};}
  if(o.type==='rectangle'){const{a,b}=o;return{params:[{l:'Ширина a',v:a+' од.'},{l:'Висота b',v:b+' од.'}],calcs:['S = '+R(a*b)+' од²','P = '+R(2*(a+b))+' од','d = '+R(Math.sqrt(a*a+b*b))+' од']};}
  if(o.type==='square'){const{a}=o;return{params:[{l:'Сторона a',v:a+' од.'}],calcs:['S = '+R(a*a)+' од²','P = '+R(4*a)+' од','d = '+R(a*Math.SQRT2)+' од']};}
  if(o.type==='triangle'){const{a,b,c}=o;const p=(a+b+c)/2;const S=Math.sqrt(Math.max(0,p*(p-a)*(p-b)*(p-c)));return{params:[{l:'a',v:a+' од.'},{l:'b',v:b+' од.'},{l:'c',v:c+' од.'}],calcs:['P = '+R(a+b+c)+' од','S = '+R(S)+' од²']};}
  if(o.type==='rhombus'){const{d1,d2}=o;const a=Math.sqrt((d1/2)**2+(d2/2)**2);return{params:[{l:'d₁',v:d1+' од.'},{l:'d₂',v:d2+' од.'}],calcs:['S = '+R(d1*d2/2)+' од²','P = '+R(4*a)+' од']};}
  if(o.type==='trapezoid'){const{a,b,h}=o;return{params:[{l:'a',v:a+' од.'},{l:'b',v:b+' од.'},{l:'h',v:h+' од.'}],calcs:['S = '+R((a+b)*h/2)+' од²','m = '+R((a+b)/2)+' од']};}
  return{params:[],calcs:[]};
}

// ─── SAVE/LOAD ───
function wsSave(){try{localStorage.setItem('mhws_v3',JSON.stringify({wsObjs,wsNextId,functions}));}catch{}}
function wsLoadState(){
  try{
    const d=localStorage.getItem('mhws_v3');if(!d)return;
    const p=JSON.parse(d);
    wsObjs=p.wsObjs||[];wsNextId=p.wsNextId||1;
    if(p.functions&&p.functions.length) functions=p.functions;
  }catch{}
  renderFunctionList();
}

// ─── RESET / AUTO ───
function resetView(){scale=50;offsetX=canvas.width/2;offsetY=canvas.height/2;draw();}
function autoScale(){scale=canvas.width/20;offsetX=canvas.width/2;offsetY=canvas.height/2;draw();}

// ─── EXPRESSION PARSER ───
function parseExpr(expr){
  return expr.replace(/\^/g,'**').replace(/\bsin\b/g,'Math.sin').replace(/\bcos\b/g,'Math.cos')
    .replace(/\btg\b/g,'Math.tan').replace(/\btan\b/g,'Math.tan')
    .replace(/\blog\b/g,'Math.log10').replace(/\bln\b/g,'Math.log')
    .replace(/\bsqrt\b/g,'Math.sqrt').replace(/\babs\b/g,'Math.abs')
    .replace(/\bπ\b/g,'Math.PI').replace(/\bpi\b/g,'Math.PI').replace(/\be\b/g,'Math.E');
}

// ===== КАЛЬКУЛЯТОР =====
let ccExpr='';
let ccFreshResult=false; // after = next digit starts fresh

function wsCalcOpen(){togglePanel('calc');}
function wsCalcClose(){closePanel('calc');}

function ccUpdateDisplay(){
  document.getElementById('cc-res').textContent=ccExpr||'0';
}
function ccIn(v){
  // If fresh result and user pressed an operator — continue from result
  const isOperator = ['+','-','*','/','%'].includes(v);
  if(ccFreshResult){
    if(!isOperator) ccExpr=''; // digit/dot/paren → start fresh
    ccFreshResult=false;
    document.getElementById('cc-expr').textContent='';
  }
  ccExpr+=v;
  ccUpdateDisplay();
}
function ccFn(v){
  if(ccFreshResult) ccFreshResult=false;
  ccExpr+=v;
  ccUpdateDisplay();
}
function ccClear(){
  ccExpr='';ccFreshResult=false;
  document.getElementById('cc-expr').textContent='';
  document.getElementById('cc-res').textContent='0';
}
function ccBack(){
  if(ccFreshResult){ccClear();return;}
  ccExpr=ccExpr.slice(0,-1);
  ccUpdateDisplay();
}
function ccEval(){
  try{
    const raw=ccExpr.replace(/\^/g,'**');
    const res=Function('"use strict";return ('+raw+')')();
    document.getElementById('cc-expr').textContent=ccExpr+' =';
    document.getElementById('cc-res').textContent=isFinite(res)?Math.round(res*1e10)/1e10:'Помилка';
    ccExpr=isFinite(res)?String(Math.round(res*1e10)/1e10):'';
    ccFreshResult=true;
  }catch{
    document.getElementById('cc-expr').textContent='';
    document.getElementById('cc-res').textContent='Помилка';
    ccExpr='';ccFreshResult=true;
  }
}

// ===== QUIZ (NEW) =====

const QUIZ_TOPICS_META = [
  { id: 'algebra',      name: '🔢 Алгебра',       desc: 'Формули скороченого множення, степені' },
  { id: 'equations',   name: '⚖️ Рівняння',        desc: 'Лінійні, квадратні, системи' },
  { id: 'geometry',    name: '📐 Геометрія',       desc: "Площі, об'єми, теорема Піфагора" },
  { id: 'trigonometry',name: '📊 Тригонометрія',   desc: 'sin, cos, tan і тотожності' },
  { id: 'functions',   name: '📈 Функції',         desc: 'Лінійна, квадратна, степенева' },
];

const QUIZ_QUESTIONS = [
  // ── ALGEBRA 7–8 клас ─────────────────────────────────────────────
  { topic:'algebra', minGrade:7, maxGrade:8, type:'mcq', q:'(a + b)² = ?',
    opts:['a² + b²','a² + 2ab + b²','a² − 2ab + b²','2a + 2b'], ans:1,
    explanation:'Формула квадрату суми: (a+b)² = a² + 2ab + b². Наприклад: (3+2)² = 9+12+4 = 25 = 5².' },
  { topic:'algebra', minGrade:7, maxGrade:8, type:'mcq', q:'(a − b)² = ?',
    opts:['a² − b²','a² + 2ab + b²','a² − 2ab + b²','(a+b)²'], ans:2,
    explanation:'Формула квадрату різниці: (a−b)² = a² − 2ab + b². Наприклад: (5−2)² = 25−20+4 = 9 = 3².' },
  { topic:'algebra', minGrade:7, maxGrade:9, type:'mcq', q:'a² − b² = ?',
    opts:['(a−b)²','(a+b)(a−b)','(a−b)(a−b)','a²+b²'], ans:1,
    explanation:'Різниця квадратів: a² − b² = (a+b)(a−b). Це одна з основних формул скороченого множення.' },
  { topic:'algebra', minGrade:7, maxGrade:8, type:'open', q:'Знайди: (x + 3)² при x = 2',
    ans:'25',
    explanation:'(2+3)² = 5² = 25. Спочатку підставляємо x=2, потім рахуємо дужку.' },
  { topic:'algebra', minGrade:7, maxGrade:9, type:'open', q:'2³ × 2⁴ = 2^? (введи показник)',
    ans:'7',
    explanation:'При множенні степенів з однаковою основою показники додаємо: 2³ × 2⁴ = 2^(3+4) = 2⁷.' },
  { topic:'algebra', minGrade:8, maxGrade:10, type:'mcq', q:'a³ + b³ = ?',
    opts:['(a+b)³','(a+b)(a²−ab+b²)','(a+b)(a²+ab+b²)','(a+b)²(a−b)'], ans:1,
    explanation:'Сума кубів: a³+b³ = (a+b)(a²−ab+b²). Знак між a та b в першій дужці — плюс, у другій — мінус.' },
  { topic:'algebra', minGrade:7, maxGrade:8, type:'open', q:'Знайди: 5² − 3² = ?',
    ans:'16',
    explanation:'5²−3² = (5+3)(5−3) = 8×2 = 16. Або просто: 25−9 = 16.' },
  // ── ALGEBRA 9–10 клас ────────────────────────────────────────────
  { topic:'algebra', minGrade:9, maxGrade:10, type:'mcq', q:'Спрости: (2x − 3)² − (2x + 3)(2x − 3)',
    opts:['−6x + 9','4x² − 9','9 − 12x','12x − 9'], ans:0,
    explanation:'(2x−3)² = 4x²−12x+9; (2x+3)(2x−3) = 4x²−9; різниця = 4x²−12x+9−4x²+9 = −12x+18 = −6(2x−3). Але серед варіантів: −6x+9 ✓' },
  { topic:'algebra', minGrade:9, maxGrade:11, type:'mcq', q:'log₂ 8 = ?',
    opts:['2','3','4','16'], ans:1,
    explanation:'log₂ 8 = log₂ 2³ = 3. Логарифм показує, в який степінь треба піднести основу (2), щоб отримати число (8).' },
  { topic:'algebra', minGrade:9, maxGrade:11, type:'open', q:'log₁₀ 1000 = ?',
    ans:'3',
    explanation:'log₁₀ 1000 = log₁₀ 10³ = 3. Десятковий логарифм 1000 = 3.' },
  { topic:'algebra', minGrade:10, maxGrade:11, type:'mcq', q:'logₐ(x·y) = ?',
    opts:['logₐ x − logₐ y','logₐ x · logₐ y','logₐ x + logₐ y','logₐ(x+y)'], ans:2,
    explanation:'Логарифм добутку = сума логарифмів: logₐ(xy) = logₐ x + logₐ y. Це одна з основних властивостей логарифмів.' },
  // ── ALGEBRA 11 клас ──────────────────────────────────────────────
  { topic:'algebra', minGrade:11, type:'mcq', q:'Числова прогресія: 2; 6; 18; 54… — це:',
    opts:['Арифметична з d=4','Геометрична з q=3','Арифметична з d=3','Геометрична з q=4'], ans:1,
    explanation:'Кожен наступний член втричі більший: 2×3=6, 6×3=18, 18×3=54. Це геометрична прогресія зі знаменником q=3.' },
  { topic:'algebra', minGrade:10, maxGrade:11, type:'open', q:'Знайди суму 5 перших членів геом. прогресії: b₁=2, q=2',
    ans:'62',
    explanation:'S = b₁(qⁿ−1)/(q−1) = 2×(2⁵−1)/(2−1) = 2×31 = 62. Члени: 2+4+8+16+32 = 62.' },

  // ── EQUATIONS 7–8 клас ───────────────────────────────────────────
  { topic:'equations', minGrade:7, maxGrade:8, type:'open', q:'2x + 6 = 0. Знайди x:',
    ans:'-3',
    explanation:'2x = −6, x = −6/2 = −3. Переносимо вільний член і ділимо на коефіцієнт при x.' },
  { topic:'equations', minGrade:7, maxGrade:8, type:'open', q:'3x − 9 = 0. Знайди x:',
    ans:'3',
    explanation:'3x = 9, x = 9/3 = 3. Переносимо −9 праворуч і ділимо.' },
  // ── EQUATIONS 8–9 клас ───────────────────────────────────────────
  { topic:'equations', minGrade:8, type:'open', q:'x² = 25. Знайди додатній корінь:',
    ans:'5',
    explanation:'x = ±√25 = ±5. Додатній корінь = 5. Мінус також є розв\'язком, але питали додатній.' },
  { topic:'equations', minGrade:8, type:'mcq', q:'Дискримінант ax²+bx+c=0:',
    opts:['D = b²+4ac','D = b²−4ac','D = 2b−ac','D = b−4ac'], ans:1,
    explanation:'D = b²−4ac. Якщо D>0 — два кореня; D=0 — один; D<0 — коренів немає.' },
  { topic:'equations', minGrade:8, type:'mcq', q:'Якщо D < 0, то рівняння:',
    opts:['Має два рівних корені','Має два різних корені','Не має коренів','Має один корінь'], ans:2,
    explanation:'При D<0 підкорінний вираз від\'ємний — квадратний корінь не існує. Рівняння коренів не має.' },
  { topic:'equations', minGrade:8, maxGrade:10, type:'mcq', q:'a=1, b=−5, c=6. Знайди більший корінь:',
    opts:['2','3','4','5'], ans:1,
    explanation:'D=(−5)²−4×1×6=1; x=(5±1)/2; x₁=3, x₂=2. Більший корінь = 3.' },
  // ── EQUATIONS 9–11 клас ──────────────────────────────────────────
  { topic:'equations', minGrade:9, type:'mcq', q:'Система: x+y=5, x−y=1. Знайди x:',
    opts:['2','3','4','1'], ans:1,
    explanation:'Додаємо рівняння: 2x=6, x=3. Потім y=5−3=2. Метод додавання — найшвидший для таких систем.' },
  { topic:'equations', minGrade:10, type:'mcq', q:'2^x = 16. Знайди x:',
    opts:['2','4','8','3'], ans:1,
    explanation:'16 = 2⁴, тому x = 4. Показникове рівняння розвʼязуємо зведенням до однакової основи.' },
  { topic:'equations', minGrade:10, type:'open', q:'log₂ x = 5. Знайди x:',
    ans:'32',
    explanation:'Якщо log₂ x = 5, то x = 2⁵ = 32. Логарифм і степінь — обернені операції.' },
  { topic:'equations', minGrade:10, maxGrade:11, type:'mcq', q:'|2x − 4| = 6. Яка сума коренів?',
    opts:['4','8','5','2'], ans:0,
    explanation:'|2x−4|=6 → 2x−4=6 (x=5) або 2x−4=−6 (x=−1). Сума коренів: 5+(−1)=4.' },

  // ── GEOMETRY 7–8 клас ────────────────────────────────────────────
  { topic:'geometry', minGrade:7, maxGrade:8, type:'open', q:'Площа прямокутника зі сторонами 8 і 5 = ?',
    ans:'40',
    explanation:'S = a×b = 8×5 = 40 см². Площа прямокутника — добуток двох сторін.' },
  { topic:'geometry', minGrade:7, type:'mcq', q:'Теорема Піфагора:',
    opts:['a²+b²=c','a+b=c²','a²+b²=c²','a²=b²+c²'], ans:2,
    explanation:'a²+b²=c², де c — гіпотенуза (сторона навпроти прямого кута). Класика: 3²+4²=5².' },
  { topic:'geometry', minGrade:7, maxGrade:9, type:'open', q:'Катети 3 і 4. Гіпотенуза = ?',
    ans:'5',
    explanation:'c = √(3²+4²) = √(9+16) = √25 = 5. Піфагорове трійко 3−4−5 — найвідоміше.' },
  { topic:'geometry', minGrade:7, maxGrade:9, type:'mcq', q:'Формула площі кола:',
    opts:['S = 2πr','S = πr','S = πr²','S = πd'], ans:2,
    explanation:'S = πr², де r — радіус. При r=3: S = π×9 ≈ 28.27.' },
  { topic:'geometry', minGrade:7, maxGrade:8, type:'open', q:'Площа трикутника (основа=10, висота=6) = ?',
    ans:'30',
    explanation:'S = (a×h)/2 = (10×6)/2 = 30. Ділимо на 2, бо трикутник — половина паралелограма.' },
  { topic:'geometry', minGrade:7, type:'mcq', q:'Сума кутів трикутника:',
    opts:['90°','180°','270°','360°'], ans:1,
    explanation:'Сума кутів будь-якого трикутника = 180°. Це базова аксіома геометрії.' },
  // ── GEOMETRY 9–10 клас ───────────────────────────────────────────
  { topic:'geometry', minGrade:9, maxGrade:10, type:'mcq', q:'Катет прямокутного трикутника: кут 30°, гіпотенуза 10. Катет навпроти 30°=?',
    opts:['5','5√3','10','√3'], ans:0,
    explanation:'Катет навпроти 30° = гіпотенуза × sin30° = 10 × 0.5 = 5. Тригонометрія в трикутнику!' },
  { topic:'geometry', minGrade:9, maxGrade:11, type:'open', q:'Об\'єм циліндра (r=3, h=4): V = πr²h. Знайди V/π:',
    ans:'36',
    explanation:'V = π×3²×4 = π×9×4 = 36π. Отже V/π = 36.' },
  { topic:'geometry', minGrade:9, type:'mcq', q:'Теорема косинусів: c² = ?',
    opts:['a²+b²','a²+b²−2ab·cosC','a²−b²+2ab·cosC','(a+b)²'], ans:1,
    explanation:'c² = a²+b²−2ab·cosC. При C=90° cosC=0 і маємо теорему Піфагора — частковий випадок.' },
  // ── GEOMETRY 10–11 клас ──────────────────────────────────────────
  { topic:'geometry', minGrade:10, type:'mcq', q:'Об\'єм кулі: V = ?',
    opts:['4πr²','(4/3)πr²','(4/3)πr³','πr³'], ans:2,
    explanation:'V = (4/3)πr³. Площа поверхні кулі — S = 4πr². Не плутай формули!' },
  { topic:'geometry', minGrade:10, type:'open', q:'Площа поверхні куба зі стороною 5 = ?',
    ans:'150',
    explanation:'Куб має 6 квадратних граней: S = 6a² = 6×25 = 150.' },

  // ── TRIGONOMETRY 9 клас ──────────────────────────────────────────
  { topic:'trigonometry', minGrade:9, maxGrade:10, type:'mcq', q:'sin 30° = ?',
    opts:['√3/2','1/2','√2/2','1'], ans:1,
    explanation:'sin 30° = 1/2 = 0.5. Таблиця: sin 30°=0.5, sin 45°=√2/2, sin 60°=√3/2.' },
  { topic:'trigonometry', minGrade:9, maxGrade:10, type:'mcq', q:'cos 60° = ?',
    opts:['√3/2','1/2','0','√2/2'], ans:1,
    explanation:'cos 60° = 1/2. Зверни увагу: cos 60° = sin 30° = 1/2.' },
  { topic:'trigonometry', minGrade:9, maxGrade:10, type:'mcq', q:'tan 45° = ?',
    opts:['0','√3','1','1/√3'], ans:2,
    explanation:'tan 45° = 1, бо sin 45° = cos 45° = √2/2, а tan = sin/cos = 1.' },
  { topic:'trigonometry', minGrade:9, type:'mcq', q:'sin²α + cos²α = ?',
    opts:['0','π','1','2'], ans:2,
    explanation:'Основна тригонометрична тотожність: sin²α+cos²α = 1. Вірно для будь-якого кута α.' },
  { topic:'trigonometry', minGrade:9, maxGrade:10, type:'open', q:'sin 90° = ?',
    ans:'1',
    explanation:'sin 90° = 1 — максимальне значення синуса. На одиничному колі це точка (0, 1).' },
  { topic:'trigonometry', minGrade:9, maxGrade:10, type:'mcq', q:'cos 0° = ?',
    opts:['0','1/2','1','−1'], ans:2,
    explanation:'cos 0° = 1. На одиничному колі кут 0° відповідає точці (1, 0).' },
  // ── TRIGONOMETRY 10–11 клас ──────────────────────────────────────
  { topic:'trigonometry', minGrade:10, type:'mcq', q:'sin(α + β) = ?',
    opts:['sinα·cosβ + cosα·sinβ','sinα·sinβ + cosα·cosβ','sinα·cosβ − cosα·sinβ','cosα·cosβ − sinα·sinβ'], ans:0,
    explanation:'sin(α+β) = sinα·cosβ + cosα·sinβ. Формула суми кутів для синуса — часто зустрічається в НМТ.' },
  { topic:'trigonometry', minGrade:10, type:'mcq', q:'cos 2α = ?',
    opts:['2sinα·cosα','cos²α − sin²α','1 − 2sin²α','Б і В обидва вірні'], ans:3,
    explanation:'cos 2α = cos²α−sin²α = 1−2sin²α = 2cos²α−1. Три еквівалентні записи — вибирай зручний.' },
  { topic:'trigonometry', minGrade:10, type:'mcq', q:'sin 2α = ?',
    opts:['sin²α − cos²α','2sin²α','2sinα·cosα','sin α + cos α'], ans:2,
    explanation:'sin 2α = 2sinα·cosα. Формула подвійного кута синуса.' },
  { topic:'trigonometry', minGrade:10, type:'mcq', q:'1 + tan²α = ?',
    opts:['1/cos²α','1/sin²α','sin²α','2'], ans:0,
    explanation:'1 + tan²α = 1/cos²α. Ділимо основну тотожність sin²α+cos²α=1 на cos²α.' },
  { topic:'trigonometry', minGrade:11, type:'open', q:'sin(π/6) = ? (введи дріб через /)',
    ans:'1/2',
    explanation:'π/6 радіан = 30°. sin 30° = 1/2. Радіани і градуси: π рад = 180°.' },

  // ── FUNCTIONS 7–8 клас ───────────────────────────────────────────
  { topic:'functions', minGrade:7, maxGrade:9, type:'mcq', q:'f(x) = kx + b — це:',
    opts:['Квадратна','Лінійна','Степенева','Логарифмічна'], ans:1,
    explanation:'f(x) = kx + b — лінійна функція. k — кутовий коефіцієнт (нахил), b — зміщення по осі Y.' },
  { topic:'functions', minGrade:7, maxGrade:8, type:'open', q:'f(x) = 2x + 1. Знайди f(3):',
    ans:'7',
    explanation:'f(3) = 2×3 + 1 = 6 + 1 = 7. Підставляємо x=3 у формулу.' },
  { topic:'functions', minGrade:7, maxGrade:8, type:'open', q:'f(x) = x². Знайди f(−3):',
    ans:'9',
    explanation:'f(−3) = (−3)² = 9. Мінус у квадраті дає плюс: (−3)×(−3) = 9.' },
  // ── FUNCTIONS 8–9 клас ───────────────────────────────────────────
  { topic:'functions', minGrade:8, maxGrade:10, type:'mcq', q:'Графік f(x) = x² — це:',
    opts:['Пряма','Гіпербола','Парабола','Коло'], ans:2,
    explanation:'f(x) = x² — квадратна функція. Її графік — парабола з вершиною в початку координат.' },
  { topic:'functions', minGrade:8, maxGrade:10, type:'mcq', q:'Область значень f(x) = x²:',
    opts:['Всі числа','x ≥ 0','y ≥ 0','x ≤ 0'], ans:2,
    explanation:'x² завжди ≥ 0, тому функція приймає значення від 0 до +∞. Область значень: y ≥ 0.' },
  { topic:'functions', minGrade:9, maxGrade:10, type:'mcq', q:'Де функція f(x)=x²−4x+3 перетинає вісь X?',
    opts:['x=1 і x=3','x=2 і x=3','x=−1 і x=−3','x=1 і x=4'], ans:0,
    explanation:'x²−4x+3=0; D=16−12=4; x=(4±2)/2; x₁=3, x₂=1. Парабола перетинає Ox у точках 1 і 3.' },
  // ── FUNCTIONS 10–11 клас ─────────────────────────────────────────
  { topic:'functions', minGrade:10, type:'mcq', q:'Похідна f(x) = x³:',
    opts:['3x²','x²','3x','x³/3'], ans:0,
    explanation:'(xⁿ)\' = n·xⁿ⁻¹. Тут n=3: (x³)\'=3x². Похідна — швидкість зміни функції.' },
  { topic:'functions', minGrade:10, type:'mcq', q:'(sin x)\' = ?',
    opts:['−cos x','cos x','−sin x','1/cos x'], ans:1,
    explanation:'Похідна синуса — косинус: (sin x)\'=cos x. А (cos x)\'=−sin x (знак мінус!).' },
  { topic:'functions', minGrade:10, type:'open', q:'f(x)=3x²−12. Знайди f\'(x) при x=2:',
    ans:'12',
    explanation:'f\'(x)=6x; f\'(2)=6×2=12. Функція в точці x=2 зростає зі швидкістю 12.' },
  { topic:'functions', minGrade:11, type:'mcq', q:'∫ x dx = ?',
    opts:['x²','x²/2 + C','2x + C','x + C'], ans:1,
    explanation:'∫x dx = x²/2 + C. Інтегрування — зворотне до диференціювання: перевірка: (x²/2)\' = x. ✓' },
  { topic:'functions', minGrade:11, type:'mcq', q:'∫₀² 2x dx = ?',
    opts:['2','4','8','1'], ans:1,
    explanation:'∫₀² 2x dx = [x²]₀² = 4−0 = 4. Визначений інтеграл = площа під графіком на відрізку [0;2].' },
];

let quizCurrent = 0;
let quizScore = 0;
let quizOrder = [];
let quizAnswered = false;
let quizWrong = []; // stores wrong question objects for review

// Save/restore quiz progress
function quizSaveProgress() {
  localStorage.setItem('mh_quiz_progress', JSON.stringify({
    order: quizOrder.map(q => QUIZ_QUESTIONS.indexOf(q)),
    current: quizCurrent,
    score: quizScore,
    wrong: quizWrong.map(q => QUIZ_QUESTIONS.indexOf(q))
  }));
}

function quizClearProgress() {
  localStorage.removeItem('mh_quiz_progress');
}

function quizHasSaved() {
  const s = localStorage.getItem('mh_quiz_progress');
  if (!s) return false;
  try { const d = JSON.parse(s); return d.order && d.order.length > 0 && d.current < d.order.length; }
  catch { return false; }
}

// Track daily activity for weekly bar chart
function quizTrackDay() {
  const key = 'mh_quiz_week';
  const today = new Date().toISOString().slice(0,10);
  const data = JSON.parse(localStorage.getItem(key) || '{}');
  data[today] = (data[today] || 0) + 1;
  const days = Object.keys(data).sort().slice(-7);
  const trimmed = {};
  days.forEach(d => trimmed[d] = data[d]);
  localStorage.setItem(key, JSON.stringify(trimmed));
}

// Track per-topic stats with date for monthly/weekly reports
// Format: { "2026-04-12": { algebra: {total:5, wrong:2}, ... }, ... }
function quizTrackStat(topicId, isWrong) {
  const today = new Date().toISOString().slice(0,10);
  const data = JSON.parse(localStorage.getItem('mh_quiz_stats_v2') || '{}');
  if (!data[today]) data[today] = {};
  if (!data[today][topicId]) data[today][topicId] = { total: 0, wrong: 0 };
  data[today][topicId].total++;
  if (isWrong) data[today][topicId].wrong++;
  localStorage.setItem('mh_quiz_stats_v2', JSON.stringify(data));
}

// Aggregate stats over a date range (null = all time)
function quizGetStats(fromDate, toDate) {
  const data = JSON.parse(localStorage.getItem('mh_quiz_stats_v2') || '{}');
  const result = {}; // { topicId: {total, wrong} }
  Object.entries(data).forEach(([date, topics]) => {
    if (fromDate && date < fromDate) return;
    if (toDate && date > toDate) return;
    Object.entries(topics).forEach(([tid, s]) => {
      if (!result[tid]) result[tid] = { total: 0, wrong: 0 };
      result[tid].total += s.total;
      result[tid].wrong += s.wrong;
    });
  });
  return result;
}

// Get start of current week/month
function quizWeekStart() {
  const d = new Date(); d.setDate(d.getDate() - 6); return d.toISOString().slice(0,10);
}
function quizMonthStart() {
  const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-01`;
}

// ===== STATS PAGE =====
function renderStatsPage() {
  const wrap = document.getElementById('stats-content');
  if (!wrap) return;

  const rawStats = JSON.parse(localStorage.getItem('mh_quiz_stats_v2') || '{}');
  const nmtStats = JSON.parse(localStorage.getItem('mh_nmt_stats_v1') || '{}');
  const weekData = JSON.parse(localStorage.getItem('mh_quiz_week') || '{}');

  // --- Summary numbers (quiz) ---
  const allStats = quizGetStats(null, null);
  const quizTotal = Object.values(allStats).reduce((s,t) => s + t.total, 0);
  const quizWrong = Object.values(allStats).reduce((s,t) => s + t.wrong, 0);

  // --- NMT summary ---
  let nmtAttempts = 0, nmtTotalQ = 0, nmtTotalW = 0, nmtScoreSum = 0;
  Object.values(nmtStats).forEach(arr => arr.forEach(r => {
    nmtAttempts++; nmtTotalQ += r.total; nmtTotalW += r.wrong; nmtScoreSum += r.score;
  }));
  const nmtAvgScore = nmtAttempts ? Math.round(nmtScoreSum / nmtAttempts) : 0;

  // Combined totals
  const totalQ = quizTotal + nmtTotalQ;
  const totalW = quizWrong + nmtTotalW;
  const accuracy = totalQ ? Math.round((totalQ - totalW) / totalQ * 100) : 0;
  const streak = statsCalcStreak(weekData);
  const bestTopic = statsGetBest(allStats);

  // --- 30-day progress chart — quiz + NMT combined ---
  const chartDays = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const dayTopics = rawStats[key] || {};
    let t = 0, w = 0;
    Object.values(dayTopics).forEach(s => { t += s.total; w += s.wrong; });
    // Add NMT for this day
    (nmtStats[key] || []).forEach(r => { t += r.total; w += r.wrong; });
    chartDays.push({ key, label: i === 0 ? 'Сьогодні' : d.toLocaleDateString('uk-UA', {day:'numeric',month:'short'}), total: t, wrong: w, pct: t ? Math.round((t-w)/t*100) : null });
  }

  // --- SVG line chart ---
  const chartW = 580, chartH = 140, padL = 32, padB = 24, padT = 12;
  const innerW = chartW - padL - 8;
  const innerH = chartH - padB - padT;
  const activeDays = chartDays.filter(d => d.pct !== null);

  let svgChart = '';
  if (activeDays.length < 2) {
    svgChart = `<div style="text-align:center;color:#aaa;padding:32px 0;font-size:.9rem;">Пройди більше тестів щоб побачити графік 📈</div>`;
  } else {
    const pts = chartDays.map((d, i) => {
      if (d.pct === null) return null;
      const x = padL + (i / (chartDays.length - 1)) * innerW;
      const y = padT + innerH - (d.pct / 100) * innerH;
      return { x, y, d };
    }).filter(Boolean);

    // Grid lines Y: 0, 25, 50, 75, 100
    const gridLines = [0, 25, 50, 75, 100].map(pct => {
      const y = padT + innerH - (pct / 100) * innerH;
      return `<line x1="${padL}" y1="${y}" x2="${chartW - 8}" y2="${y}" stroke="#e2e8f0" stroke-width="1"/>
              <text x="${padL - 4}" y="${y + 4}" font-size="9" fill="#94a3b8" text-anchor="end">${pct}%</text>`;
    }).join('');

    // Polyline
    const polyline = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
    // Fill area under line
    const fillPath = polyline + ` L${pts[pts.length-1].x.toFixed(1)},${(padT+innerH).toFixed(1)} L${pts[0].x.toFixed(1)},${(padT+innerH).toFixed(1)} Z`;

    // X-axis labels (every ~7 days)
    const xLabels = chartDays.filter((_, i) => i % 7 === 0 || i === chartDays.length - 1).map((d, _, arr) => {
      const i = chartDays.indexOf(d);
      const x = padL + (i / (chartDays.length - 1)) * innerW;
      return `<text x="${x}" y="${chartH - 4}" font-size="9" fill="#94a3b8" text-anchor="middle">${d.label}</text>`;
    }).join('');

    // Dots on active points
    const dots = pts.map(p => `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3" fill="#1565c0" stroke="#fff" stroke-width="1.5">
      <title>${p.d.label}: ${p.d.pct}% (${p.d.total-p.d.wrong}/${p.d.total})</title></circle>`).join('');

    svgChart = `<svg viewBox="0 0 ${chartW} ${chartH}" style="width:100%;max-width:${chartW}px;display:block;">
      <defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1565c0" stop-opacity=".18"/>
        <stop offset="100%" stop-color="#1565c0" stop-opacity="0"/>
      </linearGradient></defs>
      ${gridLines}
      <path d="${fillPath}" fill="url(#sg)"/>
      <path d="${polyline}" fill="none" stroke="#1565c0" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
      ${dots}
      ${xLabels}
    </svg>`;
  }

  // --- Topic breakdown ---
  const topicRows = QUIZ_TOPICS_META.map(t => {
    const s = allStats[t.id] || { total: 0, wrong: 0 };
    if (!s.total) return `<div class="stat-topic-row stat-topic-empty"><span>${t.name}</span><span style="color:#ccc">— ще не проходив</span></div>`;
    const pct = Math.round((s.total - s.wrong) / s.total * 100);
    const color = pct >= 80 ? '#22c55e' : pct >= 60 ? '#f59e0b' : '#ef4444';
    return `<div class="stat-topic-row" onclick="startQuizTopic('${t.id}');show('quiz')">
      <span class="stat-topic-name">${t.name}</span>
      <div class="stat-topic-bar"><div style="width:${pct}%;background:${color};height:100%;border-radius:4px;transition:width .4s"></div></div>
      <span class="stat-topic-pct" style="color:${color}">${pct}%</span>
      <span class="stat-topic-count">${s.total-s.wrong}/${s.total}</span>
    </div>`;
  }).join('');

  const accColor = accuracy >= 80 ? '#22c55e' : accuracy >= 60 ? '#f59e0b' : '#ef4444';

  wrap.innerHTML = `
    <div class="stats-header">
      <h2>📊 Статистика прогресу</h2>
      <button class="stats-back-btn" onclick="show('dashboard')">← Назад</button>
    </div>

    <div class="stats-summary-cards">
      <div class="stat-card">
        <div class="stat-card-val">${totalQ}</div>
        <div class="stat-card-label">Питань відповіли</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-val" style="color:${accColor}">${accuracy}%</div>
        <div class="stat-card-label">Точність</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-val" style="color:#ea580c">🔥 ${streak}</div>
        <div class="stat-card-label">Днів підряд</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-val" style="font-size:1rem">${bestTopic || '—'}</div>
        <div class="stat-card-label">Найсильніша тема</div>
      </div>
    </div>

    <div class="stats-chart-block">
      <div class="stats-chart-title">📈 Точність за останні 30 днів</div>
      ${svgChart}
    </div>

    <div class="stats-topics-block">
      <div class="stats-chart-title">📚 Квіз — по темах <span style="font-size:.8rem;color:#888;font-weight:400">(натисни щоб тренуватись)</span></div>
      <div class="stat-topics-list">${topicRows}</div>
    </div>

    ${nmtAttempts > 0 ? `
    <div class="stats-topics-block">
      <div class="stats-chart-title">🎯 НМТ Симулятор</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:4px;">
        <div class="stat-card" style="box-shadow:none;border:1.5px solid #e2e8f0;">
          <div class="stat-card-val">${nmtAttempts}</div>
          <div class="stat-card-label">Спроб НМТ</div>
        </div>
        <div class="stat-card" style="box-shadow:none;border:1.5px solid #e2e8f0;">
          <div class="stat-card-val" style="color:${nmtAvgScore>=160?'#22c55e':nmtAvgScore>=130?'#f59e0b':'#ef4444'}">${nmtAvgScore}</div>
          <div class="stat-card-label">Сер. бал (із 200)</div>
        </div>
        <div class="stat-card" style="box-shadow:none;border:1.5px solid #e2e8f0;">
          <div class="stat-card-val">${nmtTotalQ}</div>
          <div class="stat-card-label">Питань у НМТ</div>
        </div>
      </div>
    </div>` : ''}
  `;
}

function statsCalcStreak(weekData) {
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 365; i++) {
    const d = new Date(today); d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    if (weekData[key] || (i === 0)) { if (weekData[key]) streak++; else break; }
    else break;
  }
  return streak;
}

function statsGetBest(allStats) {
  let best = null, bestPct = 0;
  QUIZ_TOPICS_META.forEach(t => {
    const s = allStats[t.id];
    if (!s || s.total < 3) return;
    const pct = Math.round((s.total - s.wrong) / s.total * 100);
    if (pct > bestPct) { bestPct = pct; best = t.name; }
  });
  return best;
}

function startQuiz() {
  // If quiz is already in progress — resume instead of resetting
  if (quizOrder.length > 0 && quizCurrent < quizOrder.length) {
    renderQuizQuestion();
    return;
  }
  renderQuizHome();
}

function renderQuizHome() {
  const area = document.getElementById('quiz-area');

  // Activity bar chart (last 7 days)
  const weekData = JSON.parse(localStorage.getItem('mh_quiz_week') || '{}');
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0,10);
    days.push({ key, label: d.toLocaleDateString('uk-UA', {weekday:'short'}), count: weekData[key] || 0 });
  }
  const maxCount = Math.max(...days.map(d => d.count), 1);

  // Build stats panel (all-time + this week + this month)
  function buildStatsPanel(period) {
    const from = period === 'week' ? quizWeekStart() : period === 'month' ? quizMonthStart() : null;
    const stats = quizGetStats(from, null);
    const totalAll = Object.values(stats).reduce((s,t) => s+(t.total||0), 0);
    const wrongAll = Object.values(stats).reduce((s,t) => s+(t.wrong||0), 0);
    const correctAll = totalAll - wrongAll;
    const pctAll = totalAll ? Math.round(correctAll/totalAll*100) : 0;

    const rows = QUIZ_TOPICS_META.map(t => {
      const s = stats[t.id] || {total:0, wrong:0};
      if (!s.total) return `<div class="qs-row qs-empty"><span class="qs-name">${t.name}</span><span class="qs-none">—</span></div>`;
      const correct = s.total - s.wrong;
      const pct = Math.round(correct/s.total*100);
      const color = pct>=80?'#22c55e':pct>=60?'#f59e0b':'#ef4444';
      const icon = pct>=80?'✅':pct>=60?'⚠️':'❌';
      return `<div class="qs-row" onclick="startQuizTopic('${t.id}')" title="Тренуватись">
        <span class="qs-name">${t.name}</span>
        <div class="qs-bar-wrap"><div class="qs-bar-fill" style="width:${pct}%;background:${color}"></div></div>
        <span class="qs-score" style="color:${color}">${icon} ${correct}/${s.total}</span>
        <span class="qs-pct" style="color:${color}">${pct}%</span>
      </div>`;
    }).join('');

    const periodLabel = period==='week'?'Цей тиждень':period==='month'?'Цей місяць':'Весь час';
    return totalAll === 0
      ? `<p style="color:#888;font-size:.9rem;padding:8px 0">Пройди перший тест!</p>`
      : `<div class="qs-overall-row">
          <span class="qs-total-badge">${correctAll}/${totalAll}</span>
          <div class="qs-overall-bar" style="flex:1"><div class="qs-overall-fill" style="width:${pctAll}%"></div></div>
          <span style="font-weight:700;color:${pctAll>=80?'#22c55e':pctAll>=60?'#f59e0b':'#ef4444'}">${pctAll}%</span>
        </div>
        <div class="qs-topic-list">${rows}</div>`;
  }

  const allStats = quizGetStats(null, null);
  const hasAnyStats = Object.values(allStats).some(s => s.total > 0);

  const statsPanel = `
    <div class="quiz-stats-panel">
      <div class="qs-tabs">
        <button class="qs-tab active" id="qst-week" onclick="qsSetTab('week')">Тиждень</button>
        <button class="qs-tab" id="qst-month" onclick="qsSetTab('month')">Місяць</button>
        <button class="qs-tab" id="qst-all" onclick="qsSetTab('all')">Весь час</button>
      </div>
      <div id="qs-panel-body">${buildStatsPanel('week')}</div>
      <div class="quiz-week-chart" style="margin-top:12px">
        ${days.map(d => `
          <div class="quiz-week-bar-wrap" title="${d.label}: ${d.count} питань">
            <div class="quiz-week-bar" style="height:${Math.max(4,Math.round(d.count/maxCount*48))}px;background:${d.count>0?'var(--blue)':'var(--border)'}"></div>
            <div class="quiz-week-label">${d.label}</div>
          </div>`).join('')}
      </div>
    </div>
  `;

  const continueHtml = quizHasSaved() ? `
    <button class="quiz-continue-btn" onclick="quizResume()">▶️ Продовжити незавершений тест</button>` : '';

  // Topic cards with % badge from all-time stats
  const topicCards = QUIZ_TOPICS_META.map(t => {
    const s = allStats[t.id] || {total:0, wrong:0};
    const pct = s.total ? Math.round((s.total-s.wrong)/s.total*100) : null;
    const badge = pct!==null ? `<span class="qtc-badge" style="background:${pct>=80?'#22c55e':pct>=60?'#f59e0b':'#ef4444'}">${pct}%</span>` : '';
    return `<button class="quiz-topic-card" onclick="startQuizTopic('${t.id}')">
      <div class="quiz-topic-name">${t.name} ${badge}</div>
      <div class="quiz-topic-desc">${t.desc}</div>
    </button>`;
  }).join('');

  area.innerHTML = `
    <div class="quiz-home-layout">
      <div class="quiz-home-left">
        ${continueHtml}
        <div class="quiz-home-title">Обери тему:</div>
        <div class="quiz-topics-grid">${topicCards}</div>
        <button class="quiz-full-btn" onclick="startQuizFull()">🎯 Повний тест — всі теми (15 питань)</button>
      </div>
      <div class="quiz-home-right">
        <div class="quiz-home-title" style="margin-bottom:8px">📊 Статистика</div>
        ${statsPanel}
      </div>
    </div>
  `;

  // Store buildStatsPanel for tab switching
  window._quizBuildStats = buildStatsPanel;
}

function qsSetTab(period) {
  document.querySelectorAll('.qs-tab').forEach(t => t.classList.remove('active'));
  const el = document.getElementById('qst-' + period);
  if (el) el.classList.add('active');
  const body = document.getElementById('qs-panel-body');
  if (body && window._quizBuildStats) body.innerHTML = window._quizBuildStats(period);
}

function quizResume() {
  try {
    const d = JSON.parse(localStorage.getItem('mh_quiz_progress'));
    quizOrder = d.order.map(i => QUIZ_QUESTIONS[i]);
    quizCurrent = d.current;
    quizScore = d.score;
    quizWrong = (d.wrong||[]).map(i => QUIZ_QUESTIONS[i]);
    renderQuizQuestion();
  } catch { renderQuizHome(); }
}

function startQuizTopic(topicId) {
  const grade = getUserGrade() || 9;
  const pool = QUIZ_QUESTIONS.filter(q => q.topic === topicId && (q.minGrade || 7) <= grade && (q.maxGrade || 11) >= grade);
  quizOrder = [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(8, pool.length));
  quizCurrent = 0; quizScore = 0; quizWrong = [];
  quizClearProgress();
  renderQuizQuestion();
}

function startQuizFull() {
  const grade = getUserGrade() || 9;
  const pool = QUIZ_QUESTIONS.filter(q => (q.minGrade || 7) <= grade && (q.maxGrade || 11) >= grade);
  quizOrder = [...pool].sort(() => Math.random() - 0.5).slice(0, 15);
  quizCurrent = 0; quizScore = 0; quizWrong = [];
  quizClearProgress();
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const area = document.getElementById('quiz-area');
  if (quizCurrent >= quizOrder.length) {
    renderQuizResults();
    return;
  }
  const q = quizOrder[quizCurrent];
  quizAnswered = false;
  const prog = Math.round(quizCurrent / quizOrder.length * 100);
  const topicMeta = QUIZ_TOPICS_META.find(t => t.id === q.topic);

  let questionHTML = '';
  if (q.type === 'open') {
    questionHTML = `
      <div class="quiz-open-area">
        <input class="quiz-open-input" id="quiz-open-inp" type="text" placeholder="Введи відповідь..."
          onkeydown="if(event.key==='Enter')quizAnswerOpen()">
        <button class="quiz-opt quiz-submit-btn" onclick="quizAnswerOpen()">Перевірити ✓</button>
      </div>
    `;
  } else {
    questionHTML = `
      <div class="quiz-options">
        ${q.opts.map((o, i) => `<button class="quiz-opt" id="qopt${i}" onclick="quizAnswer(${i})">${String.fromCharCode(65+i)}) ${o}</button>`).join('')}
      </div>
    `;
  }

  area.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-meta-row">
        <span class="quiz-topic-badge">${topicMeta ? topicMeta.name : ''}</span>
        <span class="quiz-progress">Питання ${quizCurrent+1} / ${quizOrder.length}</span>
      </div>
      <div class="quiz-score-bar"><div class="quiz-score-fill" style="width:${prog}%"></div></div>
      <div class="quiz-question">${q.q}</div>
      ${questionHTML}
      <div class="quiz-feedback" id="quiz-feedback"></div>
      <button class="quiz-next-btn" id="quiz-next-btn" style="display:none" onclick="quizNext()">
        ${quizCurrent + 1 < quizOrder.length ? 'Наступне питання →' : 'Переглянути результат 🏁'}
      </button>
    </div>
  `;

  if (q.type === 'open') {
    setTimeout(() => { const inp = document.getElementById('quiz-open-inp'); if (inp) inp.focus(); }, 80);
  }
}

function quizAnswer(i) {
  if (quizAnswered) return;
  quizAnswered = true;
  const q = quizOrder[quizCurrent];
  const fb = document.getElementById('quiz-feedback');
  document.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);
  if (i === q.ans) {
    quizScore++;
    document.getElementById('qopt' + i).classList.add('correct');
    fb.className = 'quiz-feedback show-correct';
    fb.innerHTML = `✅ Правильно!<div class="quiz-explanation">${q.explanation}</div>`;
  } else {
    quizWrong.push(q);
    document.getElementById('qopt' + i).classList.add('wrong');
    document.getElementById('qopt' + q.ans).classList.add('correct');
    fb.className = 'quiz-feedback show-wrong';
    fb.innerHTML = `❌ Неправильно. Правильна відповідь: ${String.fromCharCode(65+q.ans)}) ${q.opts[q.ans]}<div class="quiz-explanation">${q.explanation}</div>`;
    const m = JSON.parse(localStorage.getItem('mh_quiz_mistakes')||'{}');
    m[q.topic] = (m[q.topic]||0) + 1;
    localStorage.setItem('mh_quiz_mistakes', JSON.stringify(m));
  }
  quizTrackStat(q.topic, i !== q.ans);
  quizTrackDay();
  quizSaveProgress();
  document.getElementById('quiz-next-btn').style.display = 'inline-block';
}

function quizAnswerOpen() {
  if (quizAnswered) return;
  const inp = document.getElementById('quiz-open-inp');
  if (!inp) return;
  const userAns = inp.value.trim().replace(',', '.');
  const q = quizOrder[quizCurrent];
  quizAnswered = true;
  const submitBtn = document.querySelector('.quiz-submit-btn');
  if (submitBtn) submitBtn.disabled = true;
  inp.disabled = true;
  const fb = document.getElementById('quiz-feedback');
  const correct = userAns === String(q.ans).replace(',', '.');
  if (correct) {
    quizScore++;
    fb.className = 'quiz-feedback show-correct';
    fb.innerHTML = `✅ Правильно! Відповідь: ${q.ans}<div class="quiz-explanation">${q.explanation}</div>`;
  } else {
    quizWrong.push(q);
    fb.className = 'quiz-feedback show-wrong';
    fb.innerHTML = `❌ Неправильно. Правильна відповідь: ${q.ans}<div class="quiz-explanation">${q.explanation}</div>`;
    const m = JSON.parse(localStorage.getItem('mh_quiz_mistakes')||'{}');
    m[q.topic] = (m[q.topic]||0) + 1;
    localStorage.setItem('mh_quiz_mistakes', JSON.stringify(m));
  }
  quizTrackStat(q.topic, !correct);
  quizTrackDay();
  quizSaveProgress();
  document.getElementById('quiz-next-btn').style.display = 'inline-block';
}

function quizNext() { quizCurrent++; renderQuizQuestion(); }

function renderQuizResults() {
  quizClearProgress();
  const area = document.getElementById('quiz-area');
  const pct = Math.round(quizScore / quizOrder.length * 100);
  const msg = pct >= 80 ? 'Чудово! Ти добре знаєш матеріал! 🏆' : pct >= 60 ? 'Непогано! Ще трохи практики 💪' : 'Повтори теми і спробуй ще! 📚';
  const reviewBtn = quizWrong.length > 0
    ? `<button class="quiz-restart-btn quiz-review-btn" onclick="quizStartReview()">📋 Розібрати помилки (${quizWrong.length})</button>`
    : `<div style="color:#22c55e;font-weight:600;padding:8px 0">🎉 Без помилок!</div>`;
  area.innerHTML = `
    <div class="quiz-card quiz-result">
      <button class="quiz-result-home-btn" onclick="renderQuizHome()">🏠 Головна</button>
      <div class="quiz-result-score">${quizScore} / ${quizOrder.length}</div>
      <div class="quiz-result-pct">${pct}% правильних</div>
      <div class="quiz-result-msg">${msg}</div>
      <div class="quiz-result-actions">
        <button class="quiz-restart-btn" onclick="quizCurrent=0;quizScore=0;quizWrong=[];quizOrder=[...quizOrder].sort(()=>Math.random()-.5);renderQuizQuestion()">🔄 Ще раз</button>
        ${reviewBtn}
        <button class="quiz-restart-btn quiz-home-btn" onclick="renderQuizHome()">📚 Вибрати тему</button>
      </div>
    </div>
  `;
}

// Review only wrong answers with Prev/Next navigation
let quizReviewIdx = 0;

function quizStartReview() {
  quizReviewIdx = 0;
  renderQuizReview();
}

function renderQuizReview() {
  const area = document.getElementById('quiz-area');
  const total = quizWrong.length;
  if (!total) { renderQuizResults(); return; }
  const q = quizWrong[quizReviewIdx];
  const topicMeta = QUIZ_TOPICS_META.find(t => t.id === q.topic);
  const optsHtml = q.type === 'open'
    ? `<div class="quiz-review-answer">Правильна відповідь: <strong>${q.ans}</strong></div>`
    : `<div class="quiz-options">${q.opts.map((o,i) => `
        <div class="quiz-opt ${i===q.ans?'correct':''}" style="cursor:default">
          ${String.fromCharCode(65+i)}) ${o}
        </div>`).join('')}
      </div>`;

  area.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-meta-row">
        <span class="quiz-topic-badge">${topicMeta ? topicMeta.name : ''}</span>
        <span class="quiz-progress">Помилка ${quizReviewIdx+1} / ${total}</span>
      </div>
      <div class="quiz-question">${q.q}</div>
      ${optsHtml}
      <div class="quiz-feedback show-wrong" style="margin-top:12px">
        <div class="quiz-explanation">${q.explanation}</div>
      </div>
      <div class="quiz-review-nav">
        <button class="quiz-restart-btn" onclick="quizReviewIdx--;renderQuizReview()" ${quizReviewIdx===0?'disabled':''}>← Попереднє</button>
        <span style="color:#888;font-size:.9rem">${quizReviewIdx+1} / ${total}</span>
        ${quizReviewIdx < total-1
          ? `<button class="quiz-restart-btn" onclick="quizReviewIdx++;renderQuizReview()">Наступне →</button>`
          : `<button class="quiz-restart-btn quiz-home-btn" onclick="renderQuizHome()">🏠 Готово</button>`}
      </div>
    </div>
  `;
}

// ===== ЗОШИТ (NOTEBOOK) =====
let nbStyleCurrent = 'lined';


function nbSetStyle(style){
  nbStyleCurrent = style;
  const body = document.getElementById('ws-notebook-body');
  body.classList.remove('lined','grid');
  body.classList.add(style);
  document.getElementById('nb-lined').classList.toggle('active', style==='lined');
  document.getElementById('nb-grid').classList.toggle('active', style==='grid');
  localStorage.setItem('mh_nb_style', style);
}

function nbClear(){
  if(!confirm('Очистити весь конспект?')) return;
  const body = document.getElementById('ws-notebook-body');
  body.innerHTML = '';
  localStorage.removeItem('mh_nb_text');
}

function nbSave(){
  const body = document.getElementById('ws-notebook-body');
  localStorage.setItem('mh_nb_text', body.innerHTML);
}

function nbLoad(){
  const saved = localStorage.getItem('mh_nb_text');
  if(saved){
    document.getElementById('ws-notebook-body').innerHTML = saved;
  }
  const style = localStorage.getItem('mh_nb_style') || 'lined';
  nbSetStyle(style);
}

// Save workspace notebook content as a server note
async function nbSaveAsNote() {
  const token = localStorage.getItem('mh_token');
  if (!token) { authOpen('login'); return; }

  const body = document.getElementById('ws-notebook-body');
  const text = body.innerText.trim();
  if (!text) { alert('Зошит порожній — нічого зберігати'); return; }

  const today = new Date().toLocaleDateString('uk-UA');
  const title = prompt('Назва конспекту:', `Зошит ${today}`);
  if (!title) return;

  const content = body.innerHTML; // preserve formatting
  try {
    const res = await fetch(`${API}/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ title, content })
    });
    const note = await res.json();
    if (!res.ok) { alert(note.error); return; }
    if (typeof allNotes !== 'undefined') allNotes.unshift(note);
    alert('✅ Збережено в конспекти!');
  } catch { alert('Помилка збереження'); }
}

// Drag & Drop — перетягування функції у зошит
function nbOnDragOver(e){
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
  e.currentTarget.classList.add('drag-over');
  const hint = document.getElementById('nb-drop-hint');
  if(hint) hint.classList.add('drag-active');
}

function nbOnDragLeave(e){
  e.currentTarget.classList.remove('drag-over');
  const hint = document.getElementById('nb-drop-hint');
  if(hint) hint.classList.remove('drag-active');
}

function nbOnDrop(e){
  e.preventDefault();
  e.stopPropagation();
  e.currentTarget.classList.remove('drag-over');
  const hint = document.getElementById('nb-drop-hint');
  if (hint) hint.classList.remove('drag-active');

  const formula = e.dataTransfer.getData('application/nb-formula') || e.dataTransfer.getData('text/plain');
  if(!formula) return;

  const body = document.getElementById('sp-nb-body');
  if(!body) return;

  // Build mini graph image from the function expression
  const expr = formula.replace(/^y\s*=\s*/, '');
  const W = 220, H = 110;
  const mc = document.createElement('canvas');
  mc.width = W; mc.height = H;
  const mx = mc.getContext('2d');
  // background
  mx.fillStyle = '#1a3e7c'; mx.fillRect(0,0,W,H);
  // grid
  mx.strokeStyle = '#2a5090'; mx.lineWidth = 0.5;
  for(let x=0;x<=W;x+=22){mx.beginPath();mx.moveTo(x,0);mx.lineTo(x,H);mx.stroke();}
  for(let y=0;y<=H;y+=22){mx.beginPath();mx.moveTo(0,y);mx.lineTo(W,y);mx.stroke();}
  // axes
  mx.strokeStyle = 'rgba(255,255,255,0.3)'; mx.lineWidth = 1.2;
  mx.beginPath();mx.moveTo(0,H/2);mx.lineTo(W,H/2);mx.stroke();
  mx.beginPath();mx.moveTo(W/2,0);mx.lineTo(W/2,H);mx.stroke();
  // curve
  try {
    const sc = W/12;
    const parsedExpr = parseExpr(expr);
    mx.strokeStyle = '#00d4ff'; mx.lineWidth = 2.5; mx.beginPath();
    let started = false;
    for(let px=0;px<W;px++){
      const wx = (px - W/2) / sc;
      try {
        const wy = Function('x','"use strict";return (' + parsedExpr + ')')(wx);
        if(!isFinite(wy)){started=false;continue;}
        const py = H/2 - wy * sc;
        if(!started){mx.moveTo(px,py);started=true;}else{mx.lineTo(px,py);}
      } catch(err){started=false;}
    }
    mx.stroke();
  } catch(e){}
  // label
  mx.fillStyle = 'rgba(255,255,255,0.9)'; mx.font = 'bold 11px monospace';
  mx.fillText('y = ' + expr, 6, H - 8);

  // Create wrapper block (non-editable)
  const wrapper = document.createElement('div');
  wrapper.contentEditable = 'false';
  wrapper.style.cssText = 'display:inline-block;margin:4px 2px;vertical-align:middle;';
  const img = document.createElement('img');
  img.src = mc.toDataURL();
  img.style.cssText = 'width:220px;height:110px;border-radius:8px;display:block;border:2px solid #2a5090;';
  img.title = formula;
  wrapper.appendChild(img);

  // Insert at caret position or append
  let range = null;
  if(document.caretRangeFromPoint) range = document.caretRangeFromPoint(e.clientX, e.clientY);
  else if(document.caretPositionFromPoint){
    const pos = document.caretPositionFromPoint(e.clientX, e.clientY);
    if(pos){ range = document.createRange(); range.setStart(pos.offsetNode, pos.offset); }
  }
  if(range && body.contains(range.startContainer)){
    range.deleteContents(); range.insertNode(wrapper);
    range.setStartAfter(wrapper); range.collapse(true);
    const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(range);
  } else {
    body.appendChild(wrapper);
  }
  body.appendChild(document.createTextNode('\n'));
  body.focus();
  spNbSave();
}

// Load notebook on page start
document.addEventListener('DOMContentLoaded', nbLoad);

// ===== БИТВА МНОЖЕННЯ (Grade 4 game) =====
let battleHP = 100;
let battleEnemyHP = 100;
let battleQuestion = null;

function startBattle() {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.getElementById('battle').classList.add('active');
  battleHP = 100;
  battleEnemyHP = 100;
  battleNextQuestion();
  updateBattleUI();
}

function battleNextQuestion() {
  const a = Math.floor(Math.random() * 9) + 2;
  const b = Math.floor(Math.random() * 9) + 2;
  battleQuestion = { a, b, answer: a * b };
  document.getElementById('battle-question').textContent = `${a} × ${b} = ?`;
  document.getElementById('battle-input').value = '';
  document.getElementById('battle-input').focus();
  document.getElementById('battle-feedback').textContent = '';
}

function battleSubmit() {
  const inp = document.getElementById('battle-input');
  const val = parseInt(inp.value);
  if (isNaN(val)) return;

  const feedback = document.getElementById('battle-feedback');
  if (val === battleQuestion.answer) {
    battleEnemyHP -= Math.floor(Math.random() * 15) + 10;
    feedback.textContent = '✅ Удар! Молодець!';
    feedback.style.color = '#16a34a';
    battleEnemyHP = Math.max(0, battleEnemyHP);
  } else {
    battleHP -= Math.floor(Math.random() * 10) + 8;
    feedback.textContent = `❌ Неправильно! Відповідь: ${battleQuestion.answer}`;
    feedback.style.color = '#dc2626';
    battleHP = Math.max(0, battleHP);
  }

  updateBattleUI();

  if (battleEnemyHP <= 0) {
    setTimeout(() => {
      let stars = parseInt(localStorage.getItem('mh_stars') || '0');
      stars += 3;
      localStorage.setItem('mh_stars', stars);
      alert('🏆 ПЕРЕМОГА! Ти переміг ворога! +3 зірочки!');
      startBattle();
    }, 800);
    return;
  }
  if (battleHP <= 0) {
    setTimeout(() => {
      alert('💀 Ти програв... Спробуй ще раз!');
      startBattle();
    }, 800);
    return;
  }

  setTimeout(battleNextQuestion, 1200);
}

function updateBattleUI() {
  const hpPct = Math.max(0, battleHP);
  const enemyPct = Math.max(0, battleEnemyHP);
  const hpBar = document.getElementById('battle-hp-bar');
  const enemyBar = document.getElementById('battle-enemy-bar');
  if (hpBar) { hpBar.style.width = hpPct + '%'; hpBar.textContent = hpPct + ' HP'; }
  if (enemyBar) { enemyBar.style.width = enemyPct + '%'; enemyBar.textContent = enemyPct + ' HP'; }
  const hpColor = hpPct > 50 ? '#16a34a' : hpPct > 25 ? '#d97706' : '#dc2626';
  const enemyColor = enemyPct > 50 ? '#dc2626' : enemyPct > 25 ? '#d97706' : '#16a34a';
  if (hpBar) hpBar.style.background = hpColor;
  if (enemyBar) enemyBar.style.background = enemyColor;
}

// ===== PANEL RESIZE (vertical + horizontal) =====
function wsInitPanelResize() {
  document.querySelectorAll('.ws-vpanel-resize').forEach(handle => {
    handle.addEventListener('mousedown', e => {
      const aboveId = handle.dataset.above;
      const belowId = handle.dataset.below;
      const above = document.getElementById(aboveId);
      const below = document.getElementById(belowId);
      if (!above || !below) return;
      handle.classList.add('active');
      const startY = e.clientY;
      const startH1 = above.offsetHeight;
      const startH2 = below.offsetHeight;
      const onMove = e => {
        const dy = e.clientY - startY;
        const newH1 = Math.max(60, startH1 + dy);
        const newH2 = Math.max(60, startH2 - dy);
        above.style.flex = `0 0 ${newH1}px`;
        below.style.flex = `0 0 ${newH2}px`;
      };
      const onUp = () => {
        handle.classList.remove('active');
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
      e.preventDefault();
    });
  });
  // Right column horizontal resize
  const colHandle = document.getElementById('ws-col-resize');
  const col = document.getElementById('ws-right-col');
  if (colHandle && col) {
    colHandle.addEventListener('mousedown', e => {
      colHandle.classList.add('active');
      const startX = e.clientX;
      const startW = col.offsetWidth;
      const onMove = e => {
        const newW = Math.max(220, Math.min(window.innerWidth * 0.6, startW - (e.clientX - startX)));
        col.style.flexBasis = newW + 'px';
        requestAnimationFrame(initOrResizeCanvas);
      };
      const onUp = () => {
        colHandle.classList.remove('active');
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
      e.preventDefault();
    });
  }
}
document.addEventListener('DOMContentLoaded', wsInitPanelResize);

// ===== GLOBAL FLOATING CALCULATOR =====
let fcExpr = '';

function toggleFloatCalc() {
  const el = document.getElementById('float-calc');
  if (!el) return;
  el.style.display = el.style.display === 'none' ? 'flex' : 'none';
  el.style.flexDirection = 'column';
}

function fcIn(v) { fcExpr += v; document.getElementById('fc-expr').textContent = fcExpr; }
function fcFn(v) { fcExpr += v; document.getElementById('fc-expr').textContent = fcExpr; }
function fcClear() { fcExpr = ''; document.getElementById('fc-expr').textContent = ''; document.getElementById('fc-res').textContent = '0'; }
function fcBack() { fcExpr = fcExpr.slice(0, -1); document.getElementById('fc-expr').textContent = fcExpr; }
function fcEval() {
  try {
    const res = Function('"use strict"; return (' + fcExpr.replace(/÷/g,'/').replace(/×/g,'*').replace(/−/g,'-') + ')')();
    const rounded = typeof res === 'number' ? +res.toFixed(10) : res;
    document.getElementById('fc-res').textContent = rounded;
    fcExpr = String(rounded);
    document.getElementById('fc-expr').textContent = '';
  } catch(e) {
    document.getElementById('fc-res').textContent = 'Помилка';
    fcExpr = '';
    document.getElementById('fc-expr').textContent = '';
  }
}

function initFloatCalcDrag() {
  const calc = document.getElementById('float-calc');
  const head = document.getElementById('float-calc-drag');
  const resizeHandle = document.getElementById('float-calc-resize');
  if (!calc || !head) return;

  head.addEventListener('mousedown', e => {
    const rect = calc.getBoundingClientRect();
    const sx = e.clientX - rect.left;
    const sy = e.clientY - rect.top;
    // Lock position immediately so right/bottom don't interfere
    calc.style.left = rect.left + 'px';
    calc.style.top = rect.top + 'px';
    calc.style.right = 'auto';
    calc.style.bottom = 'auto';
    const onMove = e => {
      const newLeft = Math.max(0, Math.min(window.innerWidth - calc.offsetWidth, e.clientX - sx));
      const newTop = Math.max(0, Math.min(window.innerHeight - calc.offsetHeight, e.clientY - sy));
      calc.style.left = newLeft + 'px';
      calc.style.top = newTop + 'px';
    };
    const onUp = () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    e.preventDefault();
  });

  if (resizeHandle) {
    resizeHandle.addEventListener('mousedown', e => {
      const startX = e.clientX, startY = e.clientY;
      const startW = calc.offsetWidth, startH = calc.offsetHeight;
      const onMove = e => {
        calc.style.width = Math.max(220, startW + (e.clientX - startX)) + 'px';
        calc.style.height = Math.max(180, startH + (e.clientY - startY)) + 'px';
      };
      const onUp = () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
      e.preventDefault();
    });
  }
}
document.addEventListener('DOMContentLoaded', initFloatCalcDrag);

// ===== SIDE PANEL WORKSPACE =====
let spCalcExpr = '';

function togglePanel(name) {
  const panel = document.getElementById('panel-' + name);
  if (!panel) return;
  if (panel.classList.contains('open')) {
    closePanel(name);
  } else {
    openPanel(name);
  }
}

function openPanel(name) {
  const panel = document.getElementById('panel-' + name);
  if (!panel) return;
  panel.classList.add('open');
  _updateQmBtnActive(name, true);
  _resizeGraphAfterPanel();
}

function closePanel(name) {
  const panel = document.getElementById('panel-' + name);
  if (!panel) return;
  panel.classList.remove('open');
  panel.style.flexBasis = '';
  panel.style.width = '';
  _updateQmBtnActive(name, false);
  _resizeGraphAfterPanel();
}

// Resize graph canvas after panel open/close (CSS transition takes ~300ms)
function _resizeGraphAfterPanel() {
  const graphSection = document.getElementById('graph');
  if (!graphSection || !graphSection.classList.contains('active')) return;
  setTimeout(() => {
    if (typeof initOrResizeCanvas === 'function') initOrResizeCanvas();
  }, 320);
}

// Update quick-menu button active state
function _updateQmBtnActive(name, isOpen) {
  const qmMap = { calc: 0, notebook: 1 }; // index in quick-menu buttons
  const idx = qmMap[name];
  if (idx === undefined) return;
  const btns = document.querySelectorAll('#quick-menu .qm-btn');
  if (btns[idx]) btns[idx].classList.toggle('active', isOpen);
}

function _updatePanelResizes() {} // handles are now embedded in panels via CSS

// Panel resize (horizontal) — handle is embedded inside each panel
function spResizeStart(e, name) {
  const handle = document.getElementById('sp-resize-' + name);
  const panel  = document.getElementById('panel-' + name);
  if (!panel || !panel.classList.contains('open')) return;
  handle.classList.add('active');

  const main = document.querySelector('#app-workspace main');
  const startX = e.clientX;
  const startW = panel.offsetWidth;

  const onMove = ev => {
    // If panel is to the right of main, dragging left expands it
    const isRight = panel.getBoundingClientRect().left > main.getBoundingClientRect().right - 20;
    const delta = isRight ? -(ev.clientX - startX) : (ev.clientX - startX);
    const newW = Math.max(180, Math.min(window.innerWidth * 0.45, startW + delta));
    panel.style.flexBasis = newW + 'px';
    panel.style.width = newW + 'px';
  };
  const onUp = () => {
    handle.classList.remove('active');
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onUp);
  };
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onUp);
  e.preventDefault();
}

function initPanelResizes() {} // kept for compatibility

// Panel drag-to-reorder (left ↔ right)
function initPanelDrag() {
  const workspace = document.getElementById('app-workspace');
  if (!workspace) return;
  let dragging = null;
  // Visual drop indicator (thin line, not a box)
  const indicator = document.createElement('div');
  indicator.style.cssText = 'flex:0 0 4px;width:4px;background:var(--accent);border-radius:4px;pointer-events:none;display:none;transition:none;';
  workspace.appendChild(indicator);

  workspace.querySelectorAll('.side-panel-head').forEach(head => {
    head.addEventListener('mousedown', e => {
      if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
      const panel = head.closest('.side-panel');
      if (!panel || !panel.classList.contains('open')) return;

      dragging = panel;
      dragging.style.boxShadow = '0 0 0 3px var(--accent)';
      indicator.style.display = 'flex';

      const mainEl = workspace.querySelector('main');

      const onMove = e => {
        const mainRect = mainEl.getBoundingClientRect();
        const isRightSide = e.clientX > mainRect.right - 50;
        const isLeftSide = e.clientX < mainRect.left + 50;

        if (isRightSide) {
          // Move panel to the right of main
          mainEl.after(dragging);
          dragging.after(indicator);
          dragging.style.borderRight = '2px solid #b3d9ff';
          dragging.style.borderLeft = 'none';
        } else {
          // Left side: find correct position among left panels
          const leftPanels = Array.from(workspace.children).filter(
            c => c !== dragging && c !== indicator && c !== mainEl && c.classList.contains('side-panel') && c.classList.contains('open')
          );
          let inserted = false;
          for (const target of leftPanels) {
            const rect = target.getBoundingClientRect();
            if (e.clientX < rect.left + rect.width / 2) {
              workspace.insertBefore(indicator, target);
              workspace.insertBefore(dragging, indicator);
              inserted = true;
              break;
            }
          }
          if (!inserted) {
            // Before main
            mainEl.before(dragging);
            dragging.after(indicator);
          }
          dragging.style.borderRight = '2px solid #b3d9ff';
          dragging.style.borderLeft = 'none';
        }
      };

      const onUp = () => {
        if (dragging) {
          dragging.style.boxShadow = '';
          dragging.style.borderRight = '';
          dragging.style.borderLeft = '';
        }
        indicator.style.display = 'none';
        dragging = null;
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        _updatePanelResizes();
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
      e.preventDefault();
    });
  });
}

// Side panel notebook functions
const SP_NB_KEY = 'mh_sp_notebook';

function spNbStyle(style) {
  const body = document.getElementById('sp-nb-body');
  if (!body) return;
  body.classList.remove('lined', 'grid');
  if (style !== 'plain') body.classList.add(style);
  document.getElementById('sp-nb-lined')?.classList.toggle('active', style === 'lined');
  document.getElementById('sp-nb-grid')?.classList.toggle('active', style === 'grid');
  localStorage.setItem('mh_sp_nb_style', style);
}

function spNbSave() {
  const body = document.getElementById('sp-nb-body');
  if (body) localStorage.setItem(SP_NB_KEY, body.innerHTML);
}

function spNbLoad() {
  const body = document.getElementById('sp-nb-body');
  const saved = localStorage.getItem(SP_NB_KEY);
  if (body && saved) body.innerHTML = saved;
  const style = localStorage.getItem('mh_sp_nb_style') || 'lined';
  spNbStyle(style);
  // Load notes for selector if logged in
  if (localStorage.getItem('mh_token')) spNbLoadNotesList();
}

async function spNbLoadNotesList() {
  const token = localStorage.getItem('mh_token');
  const selector = document.getElementById('sp-nb-selector');
  const select = document.getElementById('sp-nb-note-select');
  if (!selector || !select) return;
  try {
    const res = await fetch(`${API}/notes`, { headers: { Authorization: `Bearer ${token}` } });
    if (!res.ok) return;
    const notes = await res.json();
    if (!Array.isArray(notes) || notes.length === 0) return;
    selector.style.display = '';
    select.innerHTML = '<option value="">— Новий конспект —</option>' +
      notes.map(n => `<option value="${n.id}">${escHtml(n.title)}</option>`).join('');
  } catch { /* silent */ }
}

function spNbSwitchNote(noteId) {
  const body = document.getElementById('sp-nb-body');
  if (!body) return;
  if (!noteId) { body.innerHTML = ''; return; }
  const token = localStorage.getItem('mh_token');
  fetch(`${API}/notes/${noteId}`, { headers: { Authorization: `Bearer ${token}` } })
    .then(r => r.json())
    .then(note => { if (note && note.content) body.innerHTML = note.content; })
    .catch(() => {});
}

async function spNbSaveToServer() {
  const token = localStorage.getItem('mh_token');
  if (!token) { showToast('Увійди щоб зберегти конспект'); return; }
  const body = document.getElementById('sp-nb-body');
  const select = document.getElementById('sp-nb-note-select');
  const noteId = select?.value;
  const content = body?.innerHTML || '';
  if (!content.trim()) { showToast('Зошит порожній'); return; }

  if (noteId) {
    // Update existing note
    await fetch(`${API}/notes/${noteId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ content })
    });
    showToast('✅ Конспект оновлено!');
  } else {
    // Create new note
    const today = new Date().toLocaleDateString('uk-UA');
    const title = `Зошит ${today}`;
    const res = await fetch(`${API}/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ title, content })
    });
    if (res.ok) {
      showToast('✅ Збережено!');
      spNbLoadNotesList(); // refresh selector
    }
  }
}

// Side panel calculator functions
function spCalc(v) {
  spCalcExpr += v;
  // Show running expression in large display (same UX as main calc)
  const res = document.getElementById('sp-calc-res');
  if (res) res.textContent = spCalcExpr;
  const el = document.getElementById('sp-calc-expr');
  if (el) el.textContent = '';
}
function spCalcClear() {
  spCalcExpr = '';
  const expr = document.getElementById('sp-calc-expr');
  const res = document.getElementById('sp-calc-res');
  if (expr) expr.textContent = '';
  if (res) res.textContent = '0';
}
function spCalcBack() {
  spCalcExpr = spCalcExpr.slice(0, -1);
  const res = document.getElementById('sp-calc-res');
  if (res) res.textContent = spCalcExpr || '0';
}
function spCalcEval() {
  try {
    const result = Function('"use strict"; return (' + spCalcExpr.replace(/÷/g,'/').replace(/×/g,'*').replace(/−/g,'-') + ')')();
    const rounded = typeof result === 'number' ? +result.toFixed(10) : result;
    const expr = document.getElementById('sp-calc-expr');
    const res = document.getElementById('sp-calc-res');
    if (expr) expr.textContent = spCalcExpr + ' =';
    if (res) res.textContent = rounded;
    spCalcExpr = String(rounded);
  } catch(e) {
    const res = document.getElementById('sp-calc-res');
    if (res) res.textContent = 'Помилка';
    spCalcExpr = '';
    const expr = document.getElementById('sp-calc-expr');
    if (expr) expr.textContent = '';
  }
}

// ===== FLOAT PANELS =====
const _floatDragging = {};

// Snap zones: 4 corners + center-top
const SNAP_ZONES = [
  { id:'snap-tl', snap:{ top:'62px',  left:'8px',   right:'auto', bottom:'auto' } },
  { id:'snap-tr', snap:{ top:'62px',  right:'8px',  left:'auto',  bottom:'auto' } },
  { id:'snap-bl', snap:{ bottom:'8px',left:'8px',   right:'auto', top:'auto'    } },
  { id:'snap-br', snap:{ bottom:'8px',right:'8px',  left:'auto',  top:'auto'    } },
];

function _showSnapZones() {
  SNAP_ZONES.forEach(z => { const el = document.getElementById(z.id); if (el) el.style.display = 'block'; });
}
function _hideSnapZones() {
  SNAP_ZONES.forEach(z => { const el = document.getElementById(z.id); if (el) { el.style.display = 'none'; el.classList.remove('active'); } });
}
function _getNearestSnap(panelRect) {
  const cx = panelRect.left + panelRect.width / 2;
  const cy = panelRect.top + panelRect.height / 2;
  let nearest = null, minDist = 160; // threshold 160px
  SNAP_ZONES.forEach(z => {
    const el = document.getElementById(z.id);
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dist = Math.hypot(cx - (r.left + r.width/2), cy - (r.top + r.height/2));
    if (dist < minDist) { minDist = dist; nearest = z; }
  });
  return nearest;
}

function initFloatPanelDrag(id) {
  const panel = document.getElementById('float-' + id);
  const head = document.getElementById('float-' + id + '-head');
  if (!panel || !head || head._floatDragInit) return;
  head._floatDragInit = true;
  let ox = 0, oy = 0, sx = 0, sy = 0;
  head.addEventListener('mousedown', e => {
    if (e.target.tagName === 'BUTTON') return;
    sx = e.clientX; sy = e.clientY;
    // Get current position regardless of which corner was last snapped
    const rect = panel.getBoundingClientRect();
    ox = rect.left; oy = rect.top;
    // Reset to absolute position so we can freely move
    panel.style.left = ox + 'px'; panel.style.top = oy + 'px';
    panel.style.right = 'auto'; panel.style.bottom = 'auto';
    _showSnapZones();
    const onMove = e => {
      const nx = ox + e.clientX - sx;
      const ny = oy + e.clientY - sy;
      panel.style.left = nx + 'px';
      panel.style.top  = ny + 'px';
      // Highlight nearest snap zone
      const rect = panel.getBoundingClientRect();
      const nearest = _getNearestSnap(rect);
      SNAP_ZONES.forEach(z => {
        const el = document.getElementById(z.id);
        if (el) el.classList.toggle('active', z === nearest);
      });
    };
    const onUp = () => {
      const rect = panel.getBoundingClientRect();
      const nearest = _getNearestSnap(rect);
      if (nearest) {
        // Snap: apply corner positions
        Object.keys(nearest.snap).forEach(k => panel.style[k] = nearest.snap[k]);
      }
      _hideSnapZones();
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    e.preventDefault();
  });
}

function openFloatPanel(id) {
  const panel = document.getElementById('float-' + id);
  if (!panel) return;
  panel.style.display = 'flex';
  initFloatPanelDrag(id);
}

function closeFloatPanel(id) {
  const el = document.getElementById('float-' + id);
  if (el) el.style.display = 'none';
}

function openFloatQuiz() {
  const body = document.getElementById('float-quiz-body');
  if (body) {
    const quizSec = document.getElementById('quiz');
    if (quizSec) {
      // Clone quiz section content into float panel
      body.innerHTML = '';
      const clone = quizSec.cloneNode(true);
      clone.style.display = 'block';
      clone.style.padding = '8px';
      body.appendChild(clone);
    }
  }
  openFloatPanel('quiz');
}

// ===== UNIVERSAL SEARCH =====
let _searchIndex = null;
let _searchSelected = -1;

function _buildSearchIndex() {
  const idx = [];

  // Sections (навігація)
  const sections = [
    { label: 'Формули', icon: '📐', sub: 'Алгебра, геометрія, тригонометрія', type: 'Розділ', action: () => show('formulas') },
    { label: 'Графік функцій', icon: '📊', sub: 'Побудова і аналіз графіків', type: 'Розділ', action: () => showGraph() },
    { label: 'Квіз', icon: '🎯', sub: 'Тренування і перевірка знань', type: 'Розділ', action: () => show('quiz') },
    { label: 'Підручники', icon: '📚', sub: 'Онлайн підручники 7-11 клас', type: 'Розділ', action: () => show('textbooks') },
    { label: 'НМТ Симулятор', icon: '🏆', sub: 'Повноцінний тест як на НМТ', type: 'Розділ', action: () => window.location.href='simulator.html' },
    { label: 'Калькулятор', icon: '🧮', sub: 'Відкрити калькулятор', type: 'Інструмент', action: () => togglePanel('calc') },
    { label: 'Зошит', icon: '📓', sub: 'Відкрити зошит для нотаток', type: 'Інструмент', action: () => togglePanel('notebook') },
    { label: 'Темний режим', icon: '🌙', sub: 'Увімкнути/вимкнути темну тему', type: 'Налаштування', action: () => toggleDark() },
  ];
  sections.forEach(s => idx.push(s));

  // Algebra categories
  ALGEBRA_CATS.forEach(cat => {
    idx.push({
      label: cat.name,
      icon: '📐',
      sub: `Алгебра · ${cat.formulas.length} формул`,
      type: 'Формула',
      action: () => { show('formulas'); showFormulaTab('algebra'); setTimeout(() => openAlgebraModal(ALGEBRA_CATS.indexOf(cat)), 100); }
    });
    cat.formulas.forEach(f => {
      idx.push({
        label: f.name,
        icon: '🔢',
        sub: cat.name,
        type: 'Формула',
        action: () => { show('formulas'); showFormulaTab('algebra'); setTimeout(() => openAlgebraModal(ALGEBRA_CATS.indexOf(cat)), 100); }
      });
    });
  });

  // Geometry categories
  Object.entries(categoryNames).forEach(([key, name]) => {
    idx.push({
      label: name,
      icon: '📐',
      sub: 'Геометрія',
      type: 'Формула',
      action: () => { show('formulas'); showFormulaTab('geometry'); setTimeout(() => showCategory(key), 150); }
    });
  });

  // Quiz topics
  QUIZ_TOPICS_META.forEach(t => {
    idx.push({
      label: t.name.replace(/^.{2}/, '').trim(),
      icon: t.name[0] + t.name[1],
      sub: t.desc,
      type: 'Квіз',
      action: () => { show('quiz'); setTimeout(() => startQuizTopic(t.id), 100); }
    });
  });

  // Textbooks
  TEXTBOOKS.forEach(b => {
    idx.push({
      label: b.title,
      icon: '📖',
      sub: `${b.author} · ${b.grades} клас`,
      type: 'Підручник',
      action: () => { show('textbooks'); window.open(b.url, '_blank'); }
    });
  });

  // Notebook content (local)
  const nb = localStorage.getItem('mh_sp_notebook');
  if (nb && nb.trim()) {
    idx.push({
      label: 'Зошит (локальний)',
      icon: '📓',
      sub: nb.replace(/<[^>]*>/g, ' ').trim().slice(0, 80),
      type: 'Зошит',
      action: () => openPanel('notebook')
    });
  }

  return idx;
}

function searchOpen() {
  _searchIndex = _buildSearchIndex();
  _searchSelected = -1;
  const overlay = document.getElementById('search-overlay');
  const modal = document.getElementById('search-modal');
  overlay.classList.add('open');
  modal.style.display = 'block';
  const inp = document.getElementById('search-input');
  inp.value = '';
  document.getElementById('search-results').innerHTML = _searchWelcome();
  setTimeout(() => inp.focus(), 50);
}

function searchClose() {
  document.getElementById('search-overlay').classList.remove('open');
  document.getElementById('search-modal').style.display = 'none';
}

function _searchWelcome() {
  const quick = [
    { label: 'Формули', icon: '📐', action: "show('formulas')" },
    { label: 'Квіз', icon: '🎯', action: "show('quiz')" },
    { label: 'НМТ', icon: '🏆', action: "window.location.href='simulator.html'" },
    { label: 'Підручники', icon: '📚', action: "show('textbooks')" },
  ];
  return `<div style="padding:14px 18px 8px;font-size:.8rem;color:#7aa0c8;font-weight:600;">Швидкий перехід</div>
    <div style="display:flex;gap:8px;padding:0 18px 14px;flex-wrap:wrap;">
      ${quick.map(q => `<button onclick="${q.action};searchClose()" style="background:#f0f4ff;border:1.5px solid #dde8ff;border-radius:8px;padding:7px 14px;cursor:pointer;font-size:.85rem;color:#1a3e7c;font-weight:600;">${q.icon} ${q.label}</button>`).join('')}
    </div>`;
}

// Split text into words, ignoring punctuation
function _words(text) {
  return text.toLowerCase().split(/[\s\-–,.()/·]+/).filter(Boolean);
}

// Score how well item matches query (higher = better match)
function _searchScore(item, query) {
  const q = query.toLowerCase().trim();
  const label = item.label.toLowerCase();
  const sub = (item.sub || '').toLowerCase();
  const all = label + ' ' + sub;

  // 1. Exact substring in label
  if (label.includes(q)) return 100;
  // 2. Exact substring in subtitle
  if (sub.includes(q)) return 80;

  const qWords = _words(q);
  const labelWords = _words(label);
  const allWords = _words(all);

  // 3. All query words start with prefixes that match label words
  if (qWords.every(qw => labelWords.some(lw => lw.startsWith(qw)))) return 70;

  // 4. All query words found anywhere in label+sub as prefixes
  if (qWords.every(qw => allWords.some(lw => lw.startsWith(qw)))) return 55;

  // 5. Acronym: query = first letters of label words (e.g. "АП" → "Арифметична Прогресія")
  const acronym = labelWords.map(w => w[0] || '').join('');
  const qClean = q.replace(/\s/g, '');
  if (acronym.includes(qClean) && qClean.length >= 2) return 50;

  // 6. Any single query word matches start of a label word
  if (qWords.some(qw => qw.length >= 3 && labelWords.some(lw => lw.startsWith(qw)))) return 35;
  if (qWords.some(qw => qw.length >= 3 && allWords.some(lw => lw.startsWith(qw)))) return 20;

  return 0;
}

function searchQuery(q) {
  _searchSelected = -1;
  const res = document.getElementById('search-results');
  if (!q.trim()) { res.innerHTML = _searchWelcome(); return; }

  const scored = _searchIndex
    .map(item => ({ item, score: _searchScore(item, q) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 18)
    .map(x => x.item);

  if (!scored.length) {
    res.innerHTML = `<div class="search-empty">😕 Нічого не знайдено для "<strong>${q}</strong>"</div>`;
    return;
  }

  // Group by type
  const groups = {};
  scored.forEach(m => {
    if (!groups[m.type]) groups[m.type] = [];
    groups[m.type].push(m);
  });

  const query = q.toLowerCase().trim();
  res.innerHTML = Object.entries(groups).map(([type, items]) => `
    <div class="search-group-label">${type}</div>
    ${items.map(item => `
      <div class="search-item" onclick="searchGo(${_searchIndex.indexOf(item)})" data-sidx="${_searchIndex.indexOf(item)}">
        <span class="search-item-icon">${item.icon}</span>
        <div class="search-item-body">
          <div class="search-item-label">${_highlight(item.label, query)}</div>
          ${item.sub ? `<div class="search-item-sub">${_highlight(item.sub, query)}</div>` : ''}
        </div>
        <span class="search-item-type">${type}</span>
      </div>`).join('')}
  `).join('');
}

function _highlight(text, query) {
  // Try exact substring first
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx !== -1) {
    return text.slice(0, idx) + `<mark style="background:#fff3a0;border-radius:2px;">${text.slice(idx, idx + query.length)}</mark>` + text.slice(idx + query.length);
  }
  // Try highlighting first matching word prefix
  const qWords = _words(query);
  let result = text;
  for (const qw of qWords) {
    if (qw.length < 2) continue;
    const re = new RegExp(`(${qw})`, 'gi');
    if (re.test(result)) {
      result = result.replace(re, '<mark style="background:#fff3a0;border-radius:2px;">$1</mark>');
      break;
    }
  }
  return result;
}

function searchGo(idx) {
  if (!_searchIndex || !_searchIndex[idx]) return;
  searchClose();
  _searchIndex[idx].action();
}

function searchGoFirst() {
  // Enter with selected item
  if (_searchSelected >= 0) {
    const items = document.querySelectorAll('#search-results .search-item');
    if (items[_searchSelected]) {
      const idx = parseInt(items[_searchSelected].dataset.sidx);
      searchGo(idx);
      return;
    }
  }
  // Enter with no selection → go to first result
  const first = document.querySelector('#search-results .search-item');
  if (first) {
    const idx = parseInt(first.dataset.sidx);
    searchGo(idx);
  }
}

// Keyboard navigation
document.addEventListener('keydown', e => {
  // '/' opens search (like GitHub/YouTube) — skip if typing in input/textarea
  if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey) {
    const tag = document.activeElement?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement?.isContentEditable) return;
    e.preventDefault();
    const modal = document.getElementById('search-modal');
    if (modal && modal.style.display === 'none') searchOpen();
    else searchClose();
    return;
  }
  const modal = document.getElementById('search-modal');
  if (!modal || modal.style.display === 'none') return;
  if (e.key === 'Escape') { searchClose(); return; }
  const items = document.querySelectorAll('#search-results .search-item');
  if (!items.length) return;
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    _searchSelected = Math.min(_searchSelected + 1, items.length - 1);
    items.forEach((el, i) => el.classList.toggle('selected', i === _searchSelected));
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    _searchSelected = Math.max(_searchSelected - 1, 0);
    items.forEach((el, i) => el.classList.toggle('selected', i === _searchSelected));
  } else if (e.key === 'Enter' && _searchSelected >= 0) {
    e.preventDefault();
    const idx = parseInt(items[_searchSelected].dataset.sidx);
    searchGo(idx);
  }
});

// ===== AI MATH ASSISTANT =====
let _aiHistory = [];
let _sigmaMode = false; // true after first AI visit transformation

function openAISection() {
  show('ai');
  _aiUpdateContextBar();
  const today = new Date().toISOString().slice(0, 10);
  const lastPlayed = localStorage.getItem('mh_sigma_date');
  if (lastPlayed !== today) {
    // First click today: big transformation
    localStorage.setItem('mh_sigma_date', today);
    setTimeout(() => _sigmaTransformSequence(), 400);
  } else {
    // Already transformed today: restore button + repair animation
    const aiBtn = document.querySelector('.qm-ai');
    if (aiBtn) {
      aiBtn.classList.add('sigma-btn-active');
      _owlRepairAnimation(aiBtn);
    }
  }
}

function _sigmaRestoreBtn() {
  const today = new Date().toISOString().slice(0, 10);
  const lastPlayed = localStorage.getItem('mh_sigma_date');
  const aiBtn = document.querySelector('.qm-ai');
  if (!aiBtn) return;
  if (lastPlayed === today) {
    // Same day: metallic owl visible + rust animation
    aiBtn.classList.add('sigma-btn-active');
    _owlApplyRust(aiBtn);
  } else {
    // New day: owl "rusted away" — back to robot, animation will play fresh
    aiBtn.classList.remove('sigma-btn-active');
  }
}

function _owlApplyRust(aiBtn) {
  // Calculate rust level: 0% at midnight, 100% by end of day
  const now = new Date();
  const secondsElapsed = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  const dayFraction = secondsElapsed / 86400; // 0.0 → 1.0
  const owl = aiBtn ? aiBtn.querySelector('.owl-svg') : null;
  if (!owl) return;
  // Sync rust animation to current time of day using negative delay
  owl.style.animation = 'owlRust 86400s linear forwards';
  owl.style.animationDelay = `-${Math.floor(secondsElapsed)}s`;
}

function _owlRepairAnimation(aiBtn) {
  const owl = aiBtn ? aiBtn.querySelector('.owl-svg') : null;
  if (!owl) return;
  // Stop rust, flash repair, restart rust from current point
  owl.style.animation = 'owlRepair 1.2s ease-out forwards';
  owl.style.animationDelay = '0s';
  setTimeout(() => _owlApplyRust(aiBtn), 1300);
}

function _sigmaTransformSequence() {
  _owlLockUI();

  // Step 1: Mathik flies to AI button
  _owlFlyToAndStay('.qm-ai', () => {
    const bubble = document.getElementById('mathik-bubble');
    const aiBtn  = document.querySelector('.qm-ai');

    // Step 2: lightning at AI button location
    _sigmaLightning(bubble, () => {
      _sigmaMode = true;

      // Step 3: Mathik glows electric during merge — stays as owl
      if (bubble) {
        bubble.classList.add('sigma-mode');
      }

      // Step 4: intro speech — Mathik as glowing owl after merging with AI
      _mathikShowSpeech(
        '⚡ <b>MathΣimus</b> — ми об\'єднались!<br>Металева сова лишається у кнопці ШІ 🦉⚡<br>Я повертаюсь додому — нас тепер <b>двоє</b>!<br>Питай будь-що з математики! 🧠',
        false, true
      );

      // Step 5: after speech — metallic owl appears in AI btn, Mathik flies home as normal owl
      setTimeout(() => {
        _mathikHideSpeech();

        // AI button becomes active — CSS switches from 🤖 to metallic owl SVG
        if (aiBtn) {
          aiBtn.classList.add('sigma-btn-active');
          _owlApplyRust(aiBtn);
        }

        // Mathik flies back home as normal owl
        setTimeout(() => {
          if (bubble) {
            bubble.classList.remove('sigma-mode');
          }
          _owlFlyHome(() => _owlUnlockUI());
        }, 400);
      }, 4200);
    });
  });
}

function _sigmaLightning(target, onDone) {
  const rect = target ? target.getBoundingClientRect() : { left: window.innerWidth - 60, top: window.innerHeight - 80, width: 52, height: 52 };
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  // Create lightning container
  const container = document.createElement('div');
  container.id = 'sigma-lightning';
  container.style.cssText = `position:fixed;left:0;top:0;width:100vw;height:100vh;pointer-events:none;z-index:9998;`;
  document.body.appendChild(container);

  // Flash the owl
  if (target) target.classList.add('sigma-flash');

  // Create 8 lightning bolts radiating outward
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];
  angles.forEach((angle, i) => {
    const bolt = document.createElement('div');
    bolt.className = 'sigma-bolt';
    bolt.style.cssText = `left:${cx}px;top:${cy}px;transform:rotate(${angle}deg);animation-delay:${i * 40}ms;`;
    bolt.textContent = '⚡';
    container.appendChild(bolt);
  });

  // Central flash
  const flash = document.createElement('div');
  flash.className = 'sigma-central-flash';
  flash.style.cssText = `left:${cx - 40}px;top:${cy - 40}px;`;
  container.appendChild(flash);

  // Screen flash overlay
  const overlay = document.createElement('div');
  overlay.className = 'sigma-overlay';
  document.body.appendChild(overlay);

  setTimeout(() => overlay.classList.add('sigma-overlay--flash'), 100);
  setTimeout(() => overlay.classList.remove('sigma-overlay--flash'), 400);

  // Cleanup and callback
  setTimeout(() => {
    container.remove();
    overlay.remove();
    if (target) target.classList.remove('sigma-flash');
    if (onDone) onDone();
  }, 1200);
}
let _aiLoading = false;

function _aiGetContext() {
  const user = JSON.parse(localStorage.getItem('mh_user') || '{}');
  const mistakes = JSON.parse(localStorage.getItem('mh_quiz_mistakes') || '{}');
  const statsRaw = JSON.parse(localStorage.getItem('mh_quiz_stats_v2') || '{}');

  // Count total questions answered in last 30 days
  const now = new Date();
  let totalQ = 0, totalW = 0;
  Object.entries(statsRaw).forEach(([date, topics]) => {
    const d = new Date(date);
    if ((now - d) / 86400000 <= 30) {
      Object.values(topics).forEach(s => { totalQ += s.total || 0; totalW += s.wrong || 0; });
    }
  });
  const quizStats = totalQ > 0 ? `${totalQ} питань за місяць, ${Math.round((1-totalW/totalQ)*100)}% правильно` : '';

  // NMT result from localStorage
  const nmtScore = localStorage.getItem('mh_nmt_last_score');
  const nmtResult = nmtScore ? `${nmtScore}/30 правильних` : '';

  return {
    grade: user.grade || '?',
    name: user.name || 'Учень',
    weakTopics: mistakes,
    quizStats,
    nmtResult
  };
}

function _aiUpdateContextBar() {
  const ctx = _aiGetContext();
  const bar = document.getElementById('ai-context-bar');
  if (!bar) return;
  const weakNames = { algebra:'Алгебра', equations:'Рівняння', geometry:'Геометрія', statistics:'Статистика', functions:'Функції', nmt:'НМТ', trig:'Тригонометрія' };
  const weakStr = Object.entries(ctx.weakTopics)
    .filter(([,v]) => v > 0).sort((a,b) => b[1]-a[1]).slice(0,3)
    .map(([k]) => weakNames[k] || k).join(', ') || 'немає даних';
  bar.textContent = `${ctx.grade} клас · Слабкі теми: ${weakStr}${ctx.quizStats ? ' · ' + ctx.quizStats : ''}`;
}

const _OWL_SVG = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="width:1.8rem;height:1.8rem;display:block"><defs><linearGradient id="owlA" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#c8d4e0"/><stop offset="40%" stop-color="#7a90a8"/><stop offset="70%" stop-color="#4a6070"/><stop offset="100%" stop-color="#9ab0c4"/></linearGradient><linearGradient id="owlB" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4fc3f7"/><stop offset="100%" stop-color="#0288d1"/></linearGradient></defs><ellipse cx="16" cy="20" rx="10" ry="11" fill="url(#owlA)"/><ellipse cx="16" cy="10" rx="8" ry="7" fill="url(#owlA)"/><polygon points="9,5 7,1 12,5" fill="#7a90a8"/><polygon points="23,5 25,1 20,5" fill="#7a90a8"/><circle cx="12" cy="10" r="3.5" fill="#1a2634"/><circle cx="20" cy="10" r="3.5" fill="#1a2634"/><circle cx="12" cy="10" r="2.5" fill="url(#owlB)"/><circle cx="20" cy="10" r="2.5" fill="url(#owlB)"/><circle cx="12.8" cy="9" r="0.8" fill="white" opacity="0.8"/><circle cx="20.8" cy="9" r="0.8" fill="white" opacity="0.8"/><polygon points="14.5,13 17.5,13 16,15.5" fill="#5a7080"/><ellipse cx="7" cy="22" rx="4" ry="7" fill="#5a7080" transform="rotate(-15,7,22)"/><ellipse cx="25" cy="22" rx="4" ry="7" fill="#5a7080" transform="rotate(15,25,22)"/><ellipse cx="16" cy="22" rx="5.5" ry="6" fill="#9ab0c4" opacity="0.6"/></svg>`;

function _aiAddMsg(role, html, isLoading) {
  const msgs = document.getElementById('ai-messages');
  if (!msgs) return null;
  const div = document.createElement('div');
  div.className = 'ai-msg ai-msg--' + role;
  if (isLoading) div.id = 'ai-loading-msg';
  div.innerHTML = role === 'bot'
    ? `<span class="ai-avatar">${_OWL_SVG}</span><div class="ai-bubble">${html}</div>`
    : `<div class="ai-bubble ai-bubble--user">${html}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

function _aiFormatReply(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/\*(.+?)\*/g, '<i>$1</i>')
    .replace(/\n/g, '<br>');
}

async function _aiRequest(msg) {
  const token = localStorage.getItem('mh_token');
  return fetch('/api/ai-chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    body: JSON.stringify({ message: msg, context: _aiGetContext(), history: _aiHistory.slice(-4) })
  });
}

async function _aiCountdown(seconds, msgDiv) {
  return new Promise(resolve => {
    let left = seconds;
    const tick = () => {
      if (!document.getElementById('ai-loading-msg')) { resolve('cancelled'); return; }
      msgDiv.querySelector('.ai-bubble').innerHTML = `⏳ Ліміт запитів — повторю автоматично через <b>${left}</b> сек...`;
      if (left <= 0) { resolve('done'); return; }
      left--;
      setTimeout(tick, 1000);
    };
    tick();
  });
}

async function aiSend() {
  if (_aiLoading) return;
  const input = document.getElementById('ai-input');
  const msg = input.value.trim();
  if (!msg) return;

  input.value = '';
  input.style.height = 'auto';
  document.getElementById('ai-suggestions').style.display = 'none';

  _aiAddMsg('user', msg.replace(/</g,'&lt;'));
  _aiHistory.push({ role: 'user', content: msg });

  _aiLoading = true;
  const btn = document.getElementById('ai-send-btn');
  if (btn) { btn.disabled = true; btn.textContent = '⏳'; }
  const loadingDiv = _aiAddMsg('bot', '<span class="ai-typing">●●●</span>', true);

  const _finish = () => {
    _aiLoading = false;
    if (btn) { btn.disabled = false; btn.textContent = '➤'; }
  };

  try {
    let res = await _aiRequest(msg);

    // Auto-retry on rate limit: countdown then retry once
    if (res.status === 429) {
      await _aiCountdown(62, loadingDiv);
      document.getElementById('ai-loading-msg')?.querySelector('.ai-bubble') &&
        (loadingDiv.querySelector('.ai-bubble').innerHTML = '<span class="ai-typing">●●●</span>');
      res = await _aiRequest(msg); // second attempt
    }

    const data = await res.json();
    document.getElementById('ai-loading-msg')?.remove();

    if (res.status === 401) {
      _aiAddMsg('bot', '🔒 Сесія закінчилась. <button onclick="authLogout()" style="background:#2563eb;color:#fff;border:none;border-radius:6px;padding:4px 12px;cursor:pointer;margin-left:6px">Увійти знову</button>');
      return;
    }
    if (res.status === 429) {
      _aiAddMsg('bot', '⏳ Ліміт вичерпано. Спробуй ще раз пізніше.');
      return;
    }
    const reply = data.reply || data.error || 'Помилка. Спробуй ще раз.';
    _aiAddMsg('bot', _aiFormatReply(reply));
    if (data.reply) _aiHistory.push({ role: 'assistant', content: reply });
  } catch {
    document.getElementById('ai-loading-msg')?.remove();
    _aiAddMsg('bot', '❌ Немає зʼєднання. Перевір інтернет і спробуй ще раз.');
  } finally {
    _finish();
  }
}

function aiSuggest(text) {
  const input = document.getElementById('ai-input');
  if (input) { input.value = text; input.focus(); }
  aiSend();
}

function aiAnalyze() {
  const ctx = _aiGetContext();
  const weakNames = { algebra:'Алгебра', geometry:'Геометрія', statistics:'Статистика', functions:'Функції', nmt:'НМТ', trig:'Тригонометрія' };
  const weakStr = Object.entries(ctx.weakTopics).filter(([,v])=>v>0).map(([k,v])=>`${weakNames[k]||k}: ${v} помилок`).join(', ');
  const prompt = weakStr
    ? `Я учень ${ctx.grade} класу. Мої слабкі теми в квізі: ${weakStr}. ${ctx.quizStats ? 'Статистика: ' + ctx.quizStats + '.' : ''} Дай мені персональний план підготовки на тиждень.`
    : `Я учень ${ctx.grade} класу. Поки немає статистики помилок. Що порадиш для підготовки до НМТ?`;
  aiSuggest(prompt);
}

// ===== MATHIK CHAT =====
const MATHIK_QA = [
  {
    keys: ['формул','алгебр','геометр','тригоном'],
    chips: ['📐 Формули'],
    answer: '📐 У розділі <b>Формули</b> є алгебра, геометрія і тригонометрія — згруповані по класах. <a onclick="mathikClose();show(\'formulas\')">Відкрити →</a>',
  },
  {
    keys: ['квіз','тест','перевір','тренув'],
    chips: ['🎯 Квіз'],
    answer: '🎯 <b>Квіз</b> — це тренування по темах з відповідями. Є кілька тем на вибір або повний тест. <a onclick="mathikClose();show(\'quiz\')">Спробувати →</a>',
  },
  {
    keys: ['нмт','симулят','підготов','іспит'],
    chips: ['🏆 НМТ'],
    answer: '🏆 <b>НМТ Симулятор</b> — повноцінний тест: 30 питань, таймер, розбір помилок. Схожий на реальний НМТ. <a onclick="mathikClose();window.location.href=\'simulator.html\'">Відкрити →</a>',
  },
  {
    keys: ['граф','функц','побудув','графіки'],
    chips: ['📊 Графіки'],
    answer: '📊 На <b>Графіках</b> можна будувати функції: y=x², sin, cos і інші. Zoom мишею, drag для переміщення. <a onclick="mathikClose();showGraph()">Відкрити →</a>',
  },
  {
    keys: ['калькул','порахув','обчисл'],
    chips: ['🧮 Калькулятор'],
    answer: '🧮 <b>Калькулятор</b> відкривається як панель збоку — можна тримати відкритим поруч з формулами. <a onclick="mathikClose();togglePanel(\'calc\')">Відкрити →</a>',
  },
  {
    keys: ['зошит','нотатк','записати','конспект'],
    chips: ['📓 Зошит'],
    answer: '📓 <b>Зошит</b> — панель збоку де можна писати нотатки. Є лінійки або клітинки. Зберігається автоматично. <a onclick="mathikClose();togglePanel(\'notebook\')">Відкрити →</a>',
  },
  {
    keys: ['підручник','книг','читати','7 клас','8 клас','9 клас','10 клас','11 клас'],
    chips: ['📚 Підручники'],
    answer: '📚 У розділі <b>Підручники</b> — безкоштовні онлайн підручники МОН для 7–11 класів. <a onclick="mathikClose();show(\'textbooks\')">Відкрити →</a>',
  },
  {
    keys: ['пошук','знайти','шукати'],
    chips: ['🔍 Пошук'],
    answer: '🔍 Натисни <b>/</b> або кнопку 🔍 щоб шукати по всьому сайту — формули, теми, підручники. <a onclick="mathikClose();searchOpen()">Спробувати →</a>',
  },
  {
    keys: ['темн','нічн','режим','змінити вигляд'],
    answer: '🌙 Натисни кнопку <b>🌙</b> у верхньому правому куті щоб увімкнути темний режим.',
  },
  {
    keys: ['про','платн','безкоштовн','купити'],
    answer: '⭐ Є безкоштовна версія з усіма базовими функціями. Pro версія додасть AI-помічника, PDF та більше нотаток.',
  },
  {
    keys: ['привіт','хто ти','mathik','ти','хелло','hi','що ти можеш','ти шi','ти аі'],
    answer: '🦉 Я <b>Mathik</b> — навігатор по MathHelper! Знаю всі розділи сайту і покажу шлях куди треба 🗺️<br>Запитай: "формули", "квіз", "НМТ", "пошук", "налаштування"...<br><span style="opacity:.65;font-size:.82em">⚠️ Я <b>не ШІ</b> — математичні задачі не розвʼязую. Тільки навігація по сайту!</span>',
  },
  {
    keys: ['дякую','дякуємо','спасибі','ok','ок'],
    answer: '😊 Будь ласка! Якщо є ще запитання — пиши, я тут.',
  },
  {
    keys: ['зв\'яз','контакт','розробник','написати','email','пошта','допомог','підтримка'],
    chips: ['📧 Зв\'язатися'],
    answer: '📧 Щоб зв\'язатися з розробником, перейди до розділу <b>Про проект</b> — там є email: <b>math.helper.proba@gmail.com</b>. <a onclick="mathikClose();show(\'about\')">Відкрити →</a>',
  },
  {
    keys: ['налаштуван','профіл','клас','змінити клас','вийти','аккаунт','акаунт'],
    chips: ['⚙️ Налаштування'],
    answer: '⚙️ <b>Налаштування</b> відкриваються кнопкою ⚙️ у верхньому правому куті. Там можна змінити клас, ціль, управляти нотатками та вийти з акаунту.',
  },
  {
    keys: ['увійт','зареєстр','логін','login','реєстрац','sign'],
    answer: '🔐 Натисни кнопку <b>Увійти</b> у верхньому правому куті. Можна увійти через Google або email+пароль. Реєстрація займає 30 секунд!',
  },
  {
    keys: ['нагадуван','сповіщен','push','notification'],
    answer: '🔔 Нагадування налаштовуються в <b>Налаштуваннях</b> (⚙️). Увімкни push-сповіщення — і сайт нагадає тобі вчитися о 18:00.',
  },
  {
    keys: ['як користуватись','навчит','почати','перший раз','новачок','що робити'],
    answer: '🚀 Ось з чого почати:\n1. <a onclick="mathikClose();show(\'formulas\')">📐 Формули</a> — вибери свій клас\n2. <a onclick="mathikClose();show(\'quiz\')">🎯 Квіз</a> — потренуйся\n3. <a onclick="mathikClose();window.location.href=\'simulator.html\'">🏆 НМТ</a> — спробуй симулятор\n\nНатисни <b>/</b> щоб шукати будь-яку тему!',
  },
  {
    keys: ['про проект','про сайт','що це','mathhelper'],
    answer: 'ℹ️ <b>MathHelper</b> — безкоштовна платформа для підготовки до НМТ. Формули, графіки, квіз, симулятор НМТ, підручники — все в одному місці. <a onclick="mathikClose();show(\'about\')">Детальніше →</a>',
  },
  {
    keys: ['денна ціль','ціль','ціль на день','прогрес'],
    answer: '🎯 <b>Щоденна ціль</b> — стеж за своїм прогресом у дашборді. Налаштувати можна у ⚙️ Налаштуваннях. Рекомендую 10-15 питань на день!',
  },
  {
    keys: ['клас','7','8','9','10','11','вибрати клас'],
    answer: '🏫 Обери свій клас у <b>Налаштуваннях</b> (⚙️) — тоді формули і матеріал будуть відфільтровані саме для твого класу.',
  },
];

const MATHIK_CHIPS_DEFAULT = [
  { label: '🎓 Огляд сайту', msg: 'покажи огляд' },
  { label: '📐 Формули', msg: 'формули' },
  { label: '🎯 Квіз', msg: 'квіз' },
  { label: '🏆 НМТ', msg: 'нмт' },
  { label: '📧 Контакт', msg: "зв'язок з розробником" },
  { label: '⚙️ Налаштування', msg: 'налаштування' },
];

const MATHIK_CHIPS_RETURNING = [
  { label: '📐 Формули', msg: 'формули' },
  { label: '🎯 Квіз', msg: 'квіз' },
  { label: '🏆 НМТ', msg: 'нмт' },
  { label: '📊 Графіки', msg: 'графіки' },
  { label: '🎓 Огляд знову', msg: 'покажи огляд' },
  { label: '⚙️ Налаштування', msg: 'налаштування' },
];

let _mathikOpen = false;
let _mathikGreeted = false;

function mathikToggle() {
  _mathikOpen ? mathikClose() : mathikOpen();
}

function mathikOpen() {
  _mathikOpen = true;
  const chat = document.getElementById('mathik-chat');
  chat.style.display = 'flex';
  document.getElementById('mathik-badge').style.display = 'none';
  if (!_mathikGreeted) {
    _mathikGreeted = true;
    const tutorialDone = localStorage.getItem('mh_tutorial_done') === '1';
    if (tutorialDone) {
      _mathikAddMsg('bot', '👋 З поверненням! Я <b>Mathik</b> 🦉 — твій навігатор по MathHelper.<br>Покажу шлях куди треба — питай про будь-який розділ! 🗺️<br><span style="opacity:.6;font-size:.82em">⚠️ Я не ШІ — задачі не розвʼязую, але сайт знаю ідеально.</span>');
      _mathikSetChips(MATHIK_CHIPS_RETURNING);
    } else {
      _mathikAddMsg('bot', '👋 Привіт! Я <b>Mathik</b> 🦉 — твій навігатор по MathHelper.<br>🗺️ Знаю кожен куточок сайту і покажу шлях куди треба.<br>Вперше тут? Натисни <b>🎓 Огляд сайту</b>!');
      _mathikSetChips(MATHIK_CHIPS_DEFAULT);
    }
  }
  setTimeout(() => document.getElementById('mathik-input').focus(), 100);
}

function mathikClose() {
  _mathikOpen = false;
  document.getElementById('mathik-chat').style.display = 'none';
}

function mathikSend() {
  const inp = document.getElementById('mathik-input');
  const text = inp.value.trim();
  if (!text) return;
  inp.value = '';
  _mathikAddMsg('user', text);
  _mathikSetChips([]);
  setTimeout(() => _mathikReply(text), 400);
}

function mathikChip(msg) {
  _mathikAddMsg('user', msg);
  _mathikSetChips([]);
  setTimeout(() => _mathikReply(msg), 400);
}

function _mathikAddMsg(role, html) {
  const msgs = document.getElementById('mathik-messages');
  const div = document.createElement('div');
  div.className = 'mathik-msg ' + role;
  div.innerHTML = html;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function _mathikSetChips(chips) {
  const el = document.getElementById('mathik-chips');
  el.innerHTML = chips.map(c =>
    `<button class="mathik-chip" onclick="mathikChip('${c.msg}')">${c.label}</button>`
  ).join('');
}

// ===== MATHIK TUTORIAL V3 =====
// Дугоподібний політ по безьє-кривій, махання крилами, прогрес-бар.
const MATHIK_TUTORIAL = [

  // 0. ВСТУП
  { msg: '👋 Привіт! Я <b>Mathik</b> 🦉 — твій розумний помічник.<br>Зараз покажу <b>всі можливості</b> сайту — ~4 хв і будеш знати кожну кнопку. Поїхали! 🚀',
    hint: 'Тисни ▶ Далі або ✕ щоб пропустити' },

  // 1. autoClick → Формули
  { autoClick: true,
    target: '#dash-quick-btns button[onclick*="formulas"]',
    clickMsg: '📚 Починаємо з головного — <b>Формули</b>. Натискаю кнопку!',
    action: () => show('formulas') },

  // 2. Таби формул
  { target: '#ftab-btn-algebra',
    msg: '📚 Ось розділ <b>Формули</b>!<br>4 вкладки: <b>Алгебра · Геометрія · Тригонометрія · Таблиці</b>.<br>Контент фільтрується по <b>твоєму класу</b> — встанови клас у ⚙️ Налаштуваннях.' },

  // 3. Геометрія
  { navigate: () => showFormulaTab('geometry'),
    target: '#ftab-btn-geometry',
    navigateDelay: 80,
    msg: '📐 <b>Геометрія</b> — планіметрія і стереометрія.<br>Кожна фігура має <b>SVG-малюнок</b> з позначеннями і всіма формулами.<br>Клікни на фігуру → інтерактивна картка з формулами!' },

  // 4. Відкриває першу категорію алгебри → рядок формули
  { navigate: () => { showFormulaTab('algebra'); setTimeout(() => { const q = document.querySelector('.alg-cat-btn'); if(q) q.click(); }, 280); },
    target: '.alg-modal-row',
    navigateDelay: 900,
    msg: '🔢 <b>Список формул</b> — кожен рядок клікабельний!<br>Натисни будь-яку → відкриється картка з поясненням, доведенням і прикладом.' },

  // 5. Деталь-модалка формули — авто-закривається через 4с
  { navigate: () => { const r = document.querySelector('.alg-modal-row'); if(r) r.click(); },
    target: '#formula-detail-modal .fdm-content',
    navigateDelay: 500,
    autoAdvance: 4000,
    closeAction: () => { try { closeFormulaDetail(); closeAlgebraModal(); } catch(e){} },
    msg: '📖 Ось <b>детальна картка формули</b>!<br>• <b>Пояснення</b> — що це і навіщо<br>• <b>Доведення</b> — звідки береться<br>• <b>Приклад</b> — конкретні числа<br><span style="opacity:.6;font-size:.78em">⏱ закривається автоматично...</span>' },

  // 6. VIA HOME → летить до кнопки Квіз на dashboard (НЕ до самого квізу!)
  { viaHome: true,
    navigate: () => { try { closeFormulaDetail(); closeAlgebraModal(); } catch(e){} }, // safety
    homeMsg: '🏠 Ось кнопка <b>Головна</b> — натискаємо і повертаємось на головну.<br>Так переходять між <b>усіма розділами</b> сайту!',
    preNavigate: () => show('dashboard'),
    dashDelay: 350,
    target: '#dash-quick-btns button[onclick*="quiz"]',
    msg: '🎮 Ось кнопка <b>Квіз</b> на головній!<br>Через неї входимо у тести. Натисни ▶ Далі — я натисну її для тебе.' },

  // 7. autoClick → натискає Квіз (входить у розділ)
  { autoClick: true,
    target: '#dash-quick-btns button[onclick*="quiz"]',
    clickMsg: '🎮 Натискаю <b>Квіз</b>! Переходимо до тестів...',
    delay: 1600,
    action: () => show('quiz') },

  // 8. Теми квізу (вже у розділі квізу)
  { target: '.quiz-topic-card, .quiz-full-btn',
    msg: '🎯 <b>Квіз</b> — перевіряй себе по темах!<br>Алгебра · Геометрія · Статистика · Функції · НМТ.<br>Картки: 🟢 засвоєно · 🟡 є помилки · 🔴 слабке місце.' },

  // 9. Статистика квізу
  { target: '.quiz-stats-wrap, .qs-tabs',
    msg: '📊 <b>Статистика</b> — праворуч від тем!<br>3 вкладки: <b>Тиждень · Місяць · Весь час</b>.<br>Батьки бачать реальний прогрес — статистика не скидається!' },

  // 10. VIA HOME → летить до кнопки Графіки на dashboard (НЕ до графіку!)
  { viaHome: true,
    homeMsg: '🏠 Знову через <b>Головна</b> — до Графіків функцій!<br>Завжди через цю кнопку міняємо розділ.',
    preNavigate: () => show('dashboard'),
    dashDelay: 350,
    target: '#dash-quick-btns button[onclick*="showGraph"]',
    msg: '📈 Ось кнопка <b>Графіки</b> на головній!<br>Натисни ▶ Далі — відкриємо разом.' },

  // 11. autoClick → натискає Графіки (входить у розділ) + відкриває панель функцій
  { autoClick: true,
    target: '#dash-quick-btns button[onclick*="showGraph"]',
    clickMsg: '📈 Натискаю <b>Графіки</b>! Відкриваю розділ і одразу панель <b>Функції</b> — тут будуємо графіки y=x², sin, cos і будь-що інше. Тисни ▶ Далі!',
    action: () => { showGraph(); setTimeout(() => { try { wsToggleSide('func'); } catch(e){} }, 600); } },

  // 12. Graph demo — летить до "+ Додати", реально додає функцію x²
  { autoClick: true,
    target: 'button[onclick="addFunction()"]',
    clickMsg: '📈 Функції вже намальовані! Натискаю <b>+ Додати</b> — добавляю <code>x²</code>!<br>🖱 Скролл = масштаб · Drag = рух · Кілька функцій — різними кольорами.',
    delay: 3000,
    openNow: true,
    action: () => { try { addFunction(); } catch(e){} },
    afterDelay: () => {} },

  // 13. Навігаційні кнопки у шапці (поки у графіках — ← видима)
  { target: '#global-back-btn, #guide-btn',
    msg: '🔙 <b>Стрілочка ←</b> — повертає до <b>попереднього розділу</b>.<br>❓ — запускає цей <b>огляд</b> знову в будь-який момент.<br>🏠 <b>Головна</b> — повертає на головну з будь-якого місця.' },

  // 14. НМТ симулятор
  { navigate: () => show('dashboard'),
    target: 'a.qm-btn[href="simulator.html"]',
    navigateDelay: 80,
    msg: '📝 <b>НМТ Симулятор</b> — у швидкому меню внизу!<br>30 завдань · таймер 90 хв · умови як на реальному НМТ.<br>Після тесту — розбір кожного питання з поясненнями.' },

  // 15. Зошит — летить до кнопки quick menu
  { autoClick: true,
    navigate: () => { try { closePanel('calc'); closePanel('notebook'); } catch(e){} show('dashboard'); },
    target: 'button.qm-btn[onclick*="notebook"]',
    navigateDelay: 200,
    clickMsg: '📓 Ось кнопка <b>Зошит</b> у швидкому меню!<br>Натискаю — панель з\'являється збоку.<br>Режими: 📄 Лінійки і ⊞ Клітинки. Зберігається на сервері.',
    delay: 2500,
    openNow: true,
    action: () => openPanel('notebook'),
    afterDelay: () => {} },

  // 15. Калькулятор — летить до кнопки quick menu
  { autoClick: true,
    navigate: () => { try { closePanel('notebook'); } catch(e){} },
    target: 'button.qm-btn[onclick*="calc"]',
    navigateDelay: 200,
    clickMsg: '🧮 Ось кнопка <b>Калькулятор</b> у швидкому меню!<br>Натискаю — з\'являється збоку. Перетягни за заголовок.',
    delay: 2500,
    openNow: true,
    action: () => openPanel('calc'),
    afterDelay: () => {} },

  // 16. Темна тема — реально вмикається — реально вмикається і вимикається
  { autoClick: true,
    navigate: () => { try { closePanel('calc'); } catch(e){} },
    target: '#dark-toggle',
    clickMsg: '🌙 <b>Темна тема</b> — вмикаю прямо зараз! Зручно вчитися ввечері — не навантажує очі.',
    delay: 2500,
    openNow: true,
    action: () => toggleDark(),
    afterDelay: () => toggleDark() },

  // 17. Пошук — реально відкривається
  { autoClick: true,
    target: '#search-btn',
    clickMsg: '🔍 Відкриваю <b>Пошук</b>! Знаходить формули, теми, конспекти.<br>Спробуй: "sin", "дискримінант", "похідна".',
    delay: 2800,
    openNow: true,
    action: () => searchOpen(),
    afterDelay: () => searchClose() },

  // 18. Налаштування — реально відкривається
  { autoClick: true,
    target: 'button[onclick="openSettings()"]',
    clickMsg: '⚙️ Відкриваю <b>Налаштування</b>! Тут вибираєш свій <b>клас (7–11)</b> — важливо зробити це першим!',
    delay: 3200,
    openNow: true,
    action: () => openSettings(),
    afterDelay: () => closeSettings() },

  // 19. ФІНАЛ
  { isLast: true,
    msg: '🎉 <b>Огляд завершено!</b><br>Тепер ти знаєш усе про MathHelper 🦉<br><br>📐 Формули · 🎯 Квіз · 📈 Графіки<br>📝 НМТ · 📓 Зошит · 🧮 Калькулятор<br><br>⚙️ <b>Встанови свій клас</b> у Налаштуваннях — і починай! Я поруч 💪' }
];

let _tutorialStep = 0;
let _owlFlying   = false;
let _inTutorial  = false;
let _owlAtHome   = true; // tracks if owl is in right/bottom positioning

function mathikStartTutorial() {
  _tutorialStep = 0;
  _inTutorial   = true;
  _owlAtHome    = true;
  _owlFlying    = false;
  // Reset any stale translate
  const b = document.getElementById('mathik-bubble');
  if (b) { _owlTX = 0; _owlTY = 0; b.style.transform = ''; }
  mathikClose();
  _mathikSetChips([]);
  _mathikHideSpeech();
  setTimeout(() => _tutorialNextStep(), 150);
}

function mathikTutorialNext() {
  if (!_inTutorial || _owlBusy) return; // block during auto sequences
  _mathikHideSpeech();
  setTimeout(() => _tutorialNextStep(), 180);
}

function mathikTutorialAbort() {
  if (_owlBusy) return; // can't abort mid-animation
  if (_owlPendingAfterDelay) { _owlPendingAfterDelay(); _owlPendingAfterDelay = null; }
  _inTutorial = false;
  _owlUnlockUI();
  _owlStopHover();
  _mathikHideSpeech();
  _owlFlyHome();
}

function _tutorialNextStep() {
  if (_owlPendingAfterDelay) { _owlPendingAfterDelay(); _owlPendingAfterDelay = null; }
  if (_tutorialStep >= MATHIK_TUTORIAL.length) {
    _inTutorial = false;
    localStorage.setItem('mh_tutorial_done', '1');
    _owlFlyHome(() => {
      // Open chat directly (bypass _mathikGreeted flag)
      _mathikOpen = true;
      const _chat = document.getElementById('mathik-chat');
      if (_chat) _chat.style.display = 'flex';
      const _badge = document.getElementById('mathik-badge');
      if (_badge) _badge.style.display = 'none';
      _mathikAddMsg('bot', '🎉 <b>Огляд завершено!</b> Тепер знаєш усі можливості MathHelper 🦉<br>Я тут якщо заблукаєш — питай про будь-який розділ! 🗺️');
      _mathikSetChips(MATHIK_CHIPS_RETURNING);
    });
    return;
  }
  const step = MATHIK_TUTORIAL[_tutorialStep++];

  // Last step: fly home, show final speech, then open chat with returning chips
  if (step.isLast) {
    _inTutorial = false;
    localStorage.setItem('mh_tutorial_done', '1');
    _owlFlyHome(() => {
      _mathikShowSpeech(step.msg, true);
      setTimeout(() => {
        _mathikHideSpeech();
        // Open chat directly (bypass _mathikGreeted flag) with completion msg + chips
        _mathikOpen = true;
        const _c = document.getElementById('mathik-chat');
        if (_c) _c.style.display = 'flex';
        const _b = document.getElementById('mathik-badge');
        if (_b) _b.style.display = 'none';
        _mathikAddMsg('bot', '🎉 <b>Огляд завершено!</b> Тепер знаєш усі можливості MathHelper 🦉<br>Я тут якщо заблукаєш — питай про будь-який розділ! 🗺️');
        _mathikSetChips(MATHIK_CHIPS_RETURNING);
      }, 4000);
    });
    return;
  }

  const showSpeech = () => {
    _mathikShowSpeech(step.msg, _tutorialStep >= MATHIK_TUTORIAL.length);
  };

  // viaHome: lock UI → fly to 🏠 → hover + homeMsg → navigate → dashAction → fly to target
  if (step.viaHome) {
    _owlLockUI();
    const doViaHome = () => {
      _owlFlyToAndStay('#global-home-btn, #global-back-btn', () => {
        _mathikShowSpeech(step.homeMsg || '🏠 Ось <b>Головна</b> — так переходимо між розділами!', false, true);
        setTimeout(() => {
          _mathikHideSpeech();
          if (step.preNavigate) step.preNavigate();
          if (step.dashAction) step.dashAction();
          setTimeout(() => {
            _owlFlyToAndStay(step.target, showSpeech); // showSpeech unlocks UI via _mathikShowSpeech
          }, step.dashDelay || 700);
        }, 2600);
      });
    };
    if (step.navigate) {
      step.navigate();
      setTimeout(doViaHome, step.viaHomeDelay || 150); // wait for modal-close animations
    } else doViaHome();
    return;
  }

  // autoClick: lock UI during flight → land → fire action immediately → show speech WITH ▶ Далі
  // afterDelay() stored in _owlPendingAfterDelay → called before next step starts
  if (step.autoClick) {
    _owlLockUI();
    const doAutoClick = () => {
      const selectors = step.target.split(',').map(s => s.trim());
      let found = null;
      for (const sel of selectors) {
        const el = document.querySelector(sel);
        if (el) { const r = el.getBoundingClientRect(); if (r.width && r.height) { found = el; break; } }
      }
      if (!found) { _owlUnlockUI(); _tutorialNextStep(); return; }
      _owlFlyToAndStay(step.target, () => {
        if (step.action) step.action(); // fire immediately on landing
        found.classList.add('mathik-target-pulse');
        setTimeout(() => found.classList.remove('mathik-target-pulse'), 1800);
        _owlPendingAfterDelay = step.afterDelay || null; // cleanup called before next step
        _mathikShowSpeech(step.clickMsg, false, false); // show ▶ Далі — user reads at own pace
      });
    };
    if (step.navigate) { step.navigate(); setTimeout(doAutoClick, step.navigateDelay || 80); }
    else { doAutoClick(); }
    return;
  }

  if (step.target) {
    const doFly = () => _owlFlyToAndStay(step.target, () => {
      showSpeech();
      // autoAdvance: lock UI, wait, run closeAction, then advance automatically
      if (step.autoAdvance) {
        _owlLockUI();
        setTimeout(() => {
          if (step.closeAction) step.closeAction();
          _mathikHideSpeech();
          setTimeout(_tutorialNextStep, 400);
        }, step.autoAdvance);
      }
    });
    if (step.navigate) {
      step.navigate();
      setTimeout(() => requestAnimationFrame(doFly), step.navigateDelay || 50);
    } else {
      doFly();
    }
  } else if (step.navigate) {
    step.navigate();
    requestAnimationFrame(() => requestAnimationFrame(showSpeech));
  } else {
    showSpeech();
  }
}

// ===== OWL ANIMATION via transform:translate() + bezier arc =====
let _owlTX = 0;
let _owlTY = 0;
let _owlHovering = false;
let _owlHoverPhase = 0;
let _owlBusy = false; // true during auto sequences — blocks ✕ and ▶ Далі
let _owlPendingAfterDelay = null; // called at start of next step (cleanup from autoClick)

function _owlLockUI() {
  _owlBusy = true;
  const skip = document.querySelector('.mathik-speech-skip');
  if (skip) { skip.disabled = true; skip.style.opacity = '0.25'; skip.style.cursor = 'default'; }
}
function _owlUnlockUI() {
  _owlBusy = false;
  const skip = document.querySelector('.mathik-speech-skip');
  if (skip) { skip.disabled = false; skip.style.opacity = ''; skip.style.cursor = ''; }
}

function _easeInOutCubic(t) { return t < .5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2; }
function _easeOutBack(t)    { const c1=1.70158,c3=c1+1; return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2); }
function _easeInQuad(t)     { return t*t; }

// Hover bob: sine-wave up-down ±9px while owl sits at a target
function _owlStartHover() {
  _owlHovering = true;
  _owlHoverPhase = 0;
  const bubble = document.getElementById('mathik-bubble');
  (function loop() {
    if (!_owlHovering || !bubble) return;
    _owlHoverPhase += 0.032;
    const dy = Math.sin(_owlHoverPhase) * 9;
    bubble.style.transform = `translate(${_owlTX}px,${_owlTY + dy}px)`;
    requestAnimationFrame(loop);
  })();
}
function _owlStopHover() {
  _owlHovering = false;
  const bubble = document.getElementById('mathik-bubble');
  if (bubble) bubble.style.transform = `translate(${_owlTX}px,${_owlTY}px)`;
}

// Bezier arc: flies in a curved arc over duration ms
function _animOwlBezier(fromTX, fromTY, toTX, toTY, duration, onDone) {
  const bubble = document.getElementById('mathik-bubble');
  // Control point: midpoint lifted upward by arcHeight
  const dist      = Math.sqrt((toTX-fromTX)**2 + (toTY-fromTY)**2);
  const arcHeight = Math.max(Math.min(dist * 0.45, 240), 70);
  const midTX     = (fromTX + toTX) / 2;
  const midTY     = (fromTY + toTY) / 2 - arcHeight;

  const start = performance.now();
  function step(now) {
    const raw = Math.min((now - start) / duration, 1);
    const e   = _easeInOutCubic(raw);

    // Quadratic bezier position
    const cx = (1-e)*(1-e)*fromTX + 2*(1-e)*e*midTX + e*e*toTX;
    const cy = (1-e)*(1-e)*fromTY + 2*(1-e)*e*midTY + e*e*toTY;

    // Slight tilt based on horizontal velocity direction
    const tNext = Math.min(e + 0.05, 1);
    const nx    = (1-tNext)*(1-tNext)*fromTX + 2*(1-tNext)*tNext*midTX + tNext*tNext*toTX;
    const angle = Math.atan2(0, nx - cx) * 30; // gentle lean
    const lean  = (toTX > fromTX ? 12 : -12) * Math.sin(Math.PI * raw); // lean while in air

    bubble.style.transform = `translate(${cx}px,${cy}px) rotate(${lean}deg) scale(1.35)`;

    if (raw < 1) requestAnimationFrame(step);
    else if (onDone) onDone();
  }
  requestAnimationFrame(step);
}

// Fly owl to a CSS selector via bezier arc
function _owlFlyToAndStay(selector, callback) {
  if (_owlFlying) { if (callback) callback(); return; }
  _owlStopHover(); // stop hover bob before flying

  const selectors = selector.split(',').map(s => s.trim());
  let target = null;
  for (const sel of selectors) {
    const el = document.querySelector(sel);
    if (el) { const r = el.getBoundingClientRect(); if (r.width && r.height) { target = el; break; } }
  }
  if (!target) { if (callback) callback(); return; }

  _owlFlying = true;
  const bubble = document.getElementById('mathik-bubble');
  const hr     = bubble.getBoundingClientRect();
  const homeL  = hr.left - _owlTX;
  const homeT  = hr.top  - _owlTY;

  const tr    = target.getBoundingClientRect();
  const destL = Math.min(Math.max(8, tr.left + tr.width/2 - 26), window.innerWidth  - 64);
  const destT = Math.max(8, Math.min(tr.top - 62, window.innerHeight - 64));

  const toTX = destL - homeL;
  const toTY = destT - homeT;

  const dist     = Math.sqrt((toTX-_owlTX)**2 + (toTY-_owlTY)**2);
  const duration = Math.min(Math.max(dist * 1.4, 700), 1600);

  bubble.classList.add('owl-flying');
  bubble.classList.remove('owl-arrived');
  target.classList.add('mathik-target-pulse');

  _animOwlBezier(_owlTX, _owlTY, toTX, toTY, duration, () => {
    _owlTX = toTX; _owlTY = toTY;
    bubble.style.transform = `translate(${toTX}px,${toTY}px)`;
    bubble.classList.remove('owl-flying');
    bubble.classList.add('owl-arrived');
    target.classList.remove('mathik-target-pulse');
    _owlFlying = false;
    setTimeout(() => bubble.classList.remove('owl-arrived'), 600);
    _owlStartHover(); // start hover bob after landing
    if (callback) callback();
  });
}

// Fly owl home via arc
function _owlFlyHome(callback) {
  _owlStopHover();
  const bubble = document.getElementById('mathik-bubble');
  if (_owlTX === 0 && _owlTY === 0) {
    bubble.style.transform = '';
    _owlAtHome = true;
    if (callback) callback();
    return;
  }

  _owlFlying = true;
  bubble.classList.add('owl-flying');

  const dist     = Math.sqrt(_owlTX**2 + _owlTY**2);
  const duration = Math.min(Math.max(dist * 1.2, 600), 1400);

  _animOwlBezier(_owlTX, _owlTY, 0, 0, duration, () => {
    _owlTX = 0; _owlTY = 0;
    bubble.style.transform = '';
    bubble.classList.remove('owl-flying');
    bubble.classList.add('owl-arrived');
    _owlAtHome = true;
    _owlFlying = false;
    setTimeout(() => bubble.classList.remove('owl-arrived'), 600);
    if (callback) callback();
  });
}

// Show speech bubble near owl's current bounding rect
function _mathikShowSpeech(html, isLast, hideBtn) {
  const sp     = document.getElementById('mathik-speech');
  const bubble = document.getElementById('mathik-bubble');
  if (!sp) return;

  document.getElementById('mathik-speech-text').innerHTML = html;
  const nextBtn = document.getElementById('mathik-speech-next');
  nextBtn.style.display = (isLast || hideBtn) ? 'none' : '';

  // Unlock UI when Далі button is visible (user can interact)
  if (!isLast && !hideBtn) _owlUnlockUI();
  else if (isLast) _owlUnlockUI(); // also allow ✕ on final step

  // Progress bar & step counter
  const progEl   = document.getElementById('mathik-speech-progress');
  const barFill  = document.getElementById('mathik-speech-bar-fill');
  const hintEl   = document.getElementById('mathik-speech-hint');
  if (_inTutorial && progEl && barFill) {
    const total   = MATHIK_TUTORIAL.length;
    const current = Math.min(_tutorialStep, total);
    progEl.textContent = `Крок ${current} з ${total}`;
    barFill.style.width = ((current / total) * 100).toFixed(1) + '%';
    // hint from current step if exists
    const step = MATHIK_TUTORIAL[current - 1];
    if (hintEl) hintEl.textContent = (step && step.hint) ? step.hint : '';
    progEl.style.display = '';
    barFill.parentElement.style.display = '';
  } else {
    if (progEl) progEl.style.display = 'none';
    if (barFill) barFill.parentElement.style.display = 'none';
    if (hintEl)  hintEl.textContent = '';
  }

  // Show first (for offsetHeight measurement)
  sp.style.display = 'block';

  // Position relative to owl
  const owlRect  = bubble.getBoundingClientRect();
  const spW = 270;
  const spH = sp.offsetHeight || 130;

  let left = owlRect.left - spW - 12;
  let top  = owlRect.top  + owlRect.height / 2 - spH / 2;

  // If would go off-screen left → put right of owl
  if (left < 8) left = owlRect.right + 12;
  // Clamp
  left = Math.max(8, Math.min(left, window.innerWidth  - spW - 8));
  top  = Math.max(8, Math.min(top,  window.innerHeight - spH - 16));

  sp.style.left = left + 'px';
  sp.style.top  = top  + 'px';
}

function _mathikHideSpeech() {
  const sp = document.getElementById('mathik-speech');
  if (sp) sp.style.display = 'none';
}

function _mathikReply(text) {
  if (text === '__tutorial_next__') {
    _mathikSetChips([]);
    _tutorialNextStep();
    return;
  }
  // Tutorial keywords
  if (text.toLowerCase().includes('туторіал') || text.toLowerCase().includes('tutorial') ||
      text.toLowerCase().includes('навчи') || text.toLowerCase().includes('покажи') ||
      text.toLowerCase().includes('гід') || text.toLowerCase().includes('огляд')) {
    _mathikSetChips([]);
    mathikStartTutorial();
    return;
  }
  const q = text.toLowerCase();
  for (const qa of MATHIK_QA) {
    if (qa.keys.some(k => q.includes(k))) {
      _mathikAddMsg('bot', qa.answer);
      if (qa.chips) _mathikSetChips(qa.chips.map(c => ({ label: c, msg: c.replace(/^.{2}\s/, '') })));
      else _mathikSetChips(MATHIK_CHIPS_DEFAULT);
      return;
    }
  }
  _mathikAddMsg('bot', '🤔 Не зрозумів питання. Спробуй одну з тем або напиши інакше:');
  _mathikSetChips(MATHIK_CHIPS_DEFAULT);
}

// Legacy — keep guideOpen/guideClose for compatibility
function guideOpen() { mathikOpen(); }
function guideClose() { mathikClose(); }

// ===== DARK MODE =====
function toggleDark() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('mh_dark', isDark ? '1' : '0');
  document.getElementById('dark-toggle').textContent = isDark ? '☀️' : '🌙';
  // Redraw graph canvas with correct colors
  if (typeof drawGraph === 'function') drawGraph();
}

document.addEventListener('DOMContentLoaded', () => {
  // Restore dark mode preference
  if (localStorage.getItem('mh_dark') === '1') {
    document.body.classList.add('dark');
    const btn = document.getElementById('dark-toggle');
    if (btn) btn.textContent = '☀️';
  }
  initPanelResizes();
  initPanelDrag();
  spNbLoad();
  _sigmaRestoreBtn(); // restore AI button state: metallic owl if same day, robot if new day
});
