export function FloralSides() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden xl:block"
      aria-hidden="true"
    >
      {/* LEFT SIDE */}
      <svg
        className="absolute left-0 top-0 h-full"
        style={{ width: "clamp(80px, calc((100vw - 72rem) / 2 + 40px), 200px)", opacity: 0.32 }}
        viewBox="0 0 200 1600"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── TOP CLUSTER ── */}
        <g stroke="#7A3E28" strokeLinecap="round" strokeLinejoin="round">
          {/* Main spine */}
          <path d="M 60 -10 C 55 60 70 130 50 210" strokeWidth="1.4"/>
          <path d="M 50 210 C 40 280 60 350 38 430" strokeWidth="1.2"/>

          {/* Branch set 1 */}
          <path d="M 57 45 C 35 58 18 78 25 102" strokeWidth="1.1"/>
          <path d="M 25 102 C 14 118 18 136 8 148" strokeWidth="0.9"/>
          <path d="M 25 102 C 36 116 30 134 38 146" strokeWidth="0.9"/>
          <path d="M 8 148 C 4 158 7 168 2 176" strokeWidth="0.7"/>
          <path d="M 38 146 C 44 156 40 168 46 176" strokeWidth="0.7"/>

          {/* Branch set 2 */}
          <path d="M 54 115 C 72 126 84 148 76 170" strokeWidth="1.1"/>
          <path d="M 76 170 C 82 184 74 198 82 210" strokeWidth="0.9"/>
          <path d="M 76 170 C 66 182 68 196 60 208" strokeWidth="0.9"/>
          <path d="M 82 210 C 87 220 82 232 88 240" strokeWidth="0.7"/>
          <path d="M 60 208 C 54 218 56 230 50 238" strokeWidth="0.7"/>

          {/* Branch set 3 */}
          <path d="M 46 190 C 26 204 14 226 22 250" strokeWidth="1.0"/>
          <path d="M 22 250 C 14 264 18 280 10 290" strokeWidth="0.9"/>
          <path d="M 22 250 C 32 264 28 280 36 290" strokeWidth="0.9"/>

          {/* Leaves — larger, more visible */}
          <ellipse cx="7" cy="138" rx="10" ry="4" transform="rotate(-35 7 138)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="40" cy="152" rx="11" ry="4.5" transform="rotate(22 40 152)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="80" cy="184" rx="12" ry="4.5" transform="rotate(-18 80 184)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="58" cy="214" rx="10" ry="4" transform="rotate(30 58 214)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="10" cy="286" rx="10" ry="4" transform="rotate(-28 10 286)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="38" cy="294" rx="11" ry="4.5" transform="rotate(18 38 294)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="88" cy="238" rx="9" ry="3.5" transform="rotate(-12 88 238)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="50" cy="242" rx="9" ry="3.5" transform="rotate(25 50 242)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="2" cy="172" rx="8" ry="3" transform="rotate(-40 2 172)" fill="#7A3E28" fillOpacity="0.22"/>
          <ellipse cx="46" cy="180" rx="8" ry="3" transform="rotate(15 46 180)" fill="#7A3E28" fillOpacity="0.22"/>

          {/* Flowers — 5 petal, fuller */}
          {/* Flower 1 */}
          <ellipse cx="24" cy="96" rx="5" ry="3" transform="rotate(-72 24 96)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="30" cy="96" rx="5" ry="3" transform="rotate(-36 30 96)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="28" cy="103" rx="5" ry="3" transform="rotate(0 28 103)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="21" cy="103" rx="5" ry="3" transform="rotate(36 21 103)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="18" cy="97" rx="5" ry="3" transform="rotate(72 18 97)" fill="#7A3E28" fillOpacity="0.30"/>
          <circle cx="24" cy="100" r="3" fill="#7A3E28" fillOpacity="0.50"/>

          {/* Flower 2 */}
          <ellipse cx="76" cy="164" rx="5" ry="3" transform="rotate(-72 76 164)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="82" cy="164" rx="5" ry="3" transform="rotate(-36 82 164)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="80" cy="171" rx="5" ry="3" transform="rotate(0 80 171)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="73" cy="171" rx="5" ry="3" transform="rotate(36 73 171)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="70" cy="165" rx="5" ry="3" transform="rotate(72 70 165)" fill="#7A3E28" fillOpacity="0.30"/>
          <circle cx="76" cy="168" r="3" fill="#7A3E28" fillOpacity="0.50"/>

          {/* Flower 3 — smaller bud */}
          <ellipse cx="22" cy="244" rx="4" ry="2.5" transform="rotate(-72 22 244)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="27" cy="244" rx="4" ry="2.5" transform="rotate(-36 27 244)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="25" cy="249" rx="4" ry="2.5" transform="rotate(0 25 249)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="19" cy="249" rx="4" ry="2.5" transform="rotate(36 19 249)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="17" cy="244" rx="4" ry="2.5" transform="rotate(72 17 244)" fill="#7A3E28" fillOpacity="0.28"/>
          <circle cx="22" cy="247" r="2.5" fill="#7A3E28" fillOpacity="0.50"/>

          {/* Small berry clusters */}
          <circle cx="3" cy="152" r="2.5" fill="#7A3E28" fillOpacity="0.40"/>
          <circle cx="8" cy="156" r="2" fill="#7A3E28" fillOpacity="0.35"/>
          <circle cx="0" cy="158" r="1.8" fill="#7A3E28" fillOpacity="0.30"/>
          <circle cx="88" cy="214" r="2.5" fill="#7A3E28" fillOpacity="0.40"/>
          <circle cx="84" cy="218" r="2" fill="#7A3E28" fillOpacity="0.35"/>
          <circle cx="90" cy="220" r="1.8" fill="#7A3E28" fillOpacity="0.30"/>
        </g>

        {/* ── MIDDLE CLUSTER ── */}
        <g stroke="#7A3E28" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 38 430 C 50 500 35 570 55 640" strokeWidth="1.3"/>
          <path d="M 42 468 C 20 482 8 504 16 530" strokeWidth="1.1"/>
          <path d="M 16 530 C 6 546 10 562 0 574" strokeWidth="0.9"/>
          <path d="M 16 530 C 28 546 24 563 32 574" strokeWidth="0.9"/>
          <path d="M 50 510 C 68 524 74 548 64 570" strokeWidth="1.1"/>
          <path d="M 64 570 C 70 584 62 600 70 610" strokeWidth="0.9"/>
          <path d="M 64 570 C 54 582 56 598 48 610" strokeWidth="0.9"/>
          <path d="M 48 590 C 30 604 22 626 30 650" strokeWidth="1.0"/>

          <ellipse cx="0" cy="568" rx="10" ry="4" transform="rotate(-22 0 568)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="34" cy="578" rx="11" ry="4.5" transform="rotate(26 34 578)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="70" cy="586" rx="10" ry="4" transform="rotate(-14 70 586)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="48" cy="614" rx="10" ry="4" transform="rotate(20 48 614)" fill="#7A3E28" fillOpacity="0.28"/>

          {/* Flower middle */}
          <ellipse cx="16" cy="524" rx="5" ry="3" transform="rotate(-72 16 524)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="22" cy="524" rx="5" ry="3" transform="rotate(-36 22 524)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="20" cy="531" rx="5" ry="3" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="13" cy="531" rx="5" ry="3" transform="rotate(36 13 531)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="11" cy="525" rx="5" ry="3" transform="rotate(72 11 525)" fill="#7A3E28" fillOpacity="0.30"/>
          <circle cx="16" cy="528" r="3" fill="#7A3E28" fillOpacity="0.50"/>

          <circle cx="64" cy="572" r="2.5" fill="#7A3E28" fillOpacity="0.40"/>
          <circle cx="60" cy="576" r="2" fill="#7A3E28" fillOpacity="0.35"/>
          <circle cx="68" cy="577" r="2" fill="#7A3E28" fillOpacity="0.30"/>
        </g>

        {/* ── LOWER CLUSTER ── */}
        <g stroke="#7A3E28" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 55 640 C 42 720 58 800 40 880" strokeWidth="1.3"/>
          <path d="M 40 880 C 28 950 44 1020 25 1090" strokeWidth="1.2"/>
          <path d="M 50 720 C 28 736 14 760 22 786" strokeWidth="1.1"/>
          <path d="M 22 786 C 12 802 16 820 6 832" strokeWidth="0.9"/>
          <path d="M 22 786 C 34 802 30 820 38 832" strokeWidth="0.9"/>
          <path d="M 58 750 C 76 764 80 788 70 812" strokeWidth="1.1"/>
          <path d="M 70 812 C 76 826 68 842 76 852" strokeWidth="0.9"/>
          <path d="M 38 870 C 18 886 6 910 14 936" strokeWidth="1.0"/>
          <path d="M 14 936 C 4 952 8 970 0 982" strokeWidth="0.9"/>
          <path d="M 14 936 C 26 952 22 970 30 982" strokeWidth="0.9"/>
          <path d="M 48 900 C 66 914 70 938 60 962" strokeWidth="1.0"/>

          <ellipse cx="6" cy="826" rx="10" ry="4" transform="rotate(-24 6 826)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="40" cy="836" rx="11" ry="4.5" transform="rotate(22 40 836)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="76" cy="846" rx="10" ry="4" transform="rotate(-16 76 846)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="0" cy="978" rx="9" ry="3.5" transform="rotate(-30 0 978)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="32" cy="986" rx="11" ry="4" transform="rotate(18 32 986)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="60" cy="966" rx="10" ry="4" transform="rotate(-10 60 966)" fill="#7A3E28" fillOpacity="0.28"/>

          {/* Flower lower-1 */}
          <ellipse cx="22" cy="780" rx="5" ry="3" transform="rotate(-72 22 780)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="28" cy="780" rx="5" ry="3" transform="rotate(-36 28 780)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="26" cy="787" rx="5" ry="3" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="19" cy="787" rx="5" ry="3" transform="rotate(36 19 787)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="17" cy="781" rx="5" ry="3" transform="rotate(72 17 781)" fill="#7A3E28" fillOpacity="0.30"/>
          <circle cx="22" cy="784" r="3" fill="#7A3E28" fillOpacity="0.50"/>

          {/* Flower lower-2 */}
          <ellipse cx="14" cy="930" rx="5" ry="3" transform="rotate(-72 14 930)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="20" cy="930" rx="5" ry="3" transform="rotate(-36 20 930)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="18" cy="937" rx="5" ry="3" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="11" cy="937" rx="5" ry="3" transform="rotate(36 11 937)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="9" cy="931" rx="5" ry="3" transform="rotate(72 9 931)" fill="#7A3E28" fillOpacity="0.30"/>
          <circle cx="14" cy="934" r="3" fill="#7A3E28" fillOpacity="0.50"/>

          <circle cx="70" cy="814" r="2.5" fill="#7A3E28" fillOpacity="0.40"/>
          <circle cx="66" cy="818" r="2" fill="#7A3E28" fillOpacity="0.35"/>
          <circle cx="74" cy="820" r="2" fill="#7A3E28" fillOpacity="0.30"/>
          <circle cx="60" cy="964" r="2.5" fill="#7A3E28" fillOpacity="0.40"/>
          <circle cx="56" cy="968" r="2" fill="#7A3E28" fillOpacity="0.30"/>
          <circle cx="64" cy="969" r="2" fill="#7A3E28" fillOpacity="0.30"/>
        </g>
      </svg>

      {/* RIGHT SIDE — mirrored */}
      <svg
        className="absolute right-0 top-0 h-full"
        style={{ width: "clamp(80px, calc((100vw - 72rem) / 2 + 40px), 200px)", opacity: 0.32 }}
        viewBox="0 0 200 1600"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#7A3E28" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 140 -10 C 145 60 130 130 150 210" strokeWidth="1.4"/>
          <path d="M 150 210 C 160 280 140 350 162 430" strokeWidth="1.2"/>
          <path d="M 143 45 C 165 58 182 78 175 102" strokeWidth="1.1"/>
          <path d="M 175 102 C 186 118 182 136 192 148" strokeWidth="0.9"/>
          <path d="M 175 102 C 164 116 170 134 162 146" strokeWidth="0.9"/>
          <path d="M 192 148 C 196 158 193 168 198 176" strokeWidth="0.7"/>
          <path d="M 162 146 C 156 156 160 168 154 176" strokeWidth="0.7"/>
          <path d="M 146 115 C 128 126 116 148 124 170" strokeWidth="1.1"/>
          <path d="M 124 170 C 118 184 126 198 118 210" strokeWidth="0.9"/>
          <path d="M 124 170 C 134 182 132 196 140 208" strokeWidth="0.9"/>
          <path d="M 118 210 C 113 220 118 232 112 240" strokeWidth="0.7"/>
          <path d="M 140 208 C 146 218 144 230 150 238" strokeWidth="0.7"/>
          <path d="M 154 190 C 174 204 186 226 178 250" strokeWidth="1.0"/>
          <path d="M 178 250 C 186 264 182 280 190 290" strokeWidth="0.9"/>
          <path d="M 178 250 C 168 264 172 280 164 290" strokeWidth="0.9"/>

          <ellipse cx="193" cy="138" rx="10" ry="4" transform="rotate(35 193 138)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="160" cy="152" rx="11" ry="4.5" transform="rotate(-22 160 152)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="120" cy="184" rx="12" ry="4.5" transform="rotate(18 120 184)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="142" cy="214" rx="10" ry="4" transform="rotate(-30 142 214)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="190" cy="286" rx="10" ry="4" transform="rotate(28 190 286)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="162" cy="294" rx="11" ry="4.5" transform="rotate(-18 162 294)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="112" cy="238" rx="9" ry="3.5" transform="rotate(12 112 238)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="150" cy="242" rx="9" ry="3.5" transform="rotate(-25 150 242)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="198" cy="172" rx="8" ry="3" transform="rotate(40 198 172)" fill="#7A3E28" fillOpacity="0.22"/>
          <ellipse cx="154" cy="180" rx="8" ry="3" transform="rotate(-15 154 180)" fill="#7A3E28" fillOpacity="0.22"/>

          <ellipse cx="176" cy="96" rx="5" ry="3" transform="rotate(72 176 96)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="170" cy="96" rx="5" ry="3" transform="rotate(36 170 96)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="172" cy="103" rx="5" ry="3" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="179" cy="103" rx="5" ry="3" transform="rotate(-36 179 103)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="182" cy="97" rx="5" ry="3" transform="rotate(-72 182 97)" fill="#7A3E28" fillOpacity="0.30"/>
          <circle cx="176" cy="100" r="3" fill="#7A3E28" fillOpacity="0.50"/>

          <ellipse cx="124" cy="164" rx="5" ry="3" transform="rotate(72 124 164)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="118" cy="164" rx="5" ry="3" transform="rotate(36 118 164)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="120" cy="171" rx="5" ry="3" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="127" cy="171" rx="5" ry="3" transform="rotate(-36 127 171)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="130" cy="165" rx="5" ry="3" transform="rotate(-72 130 165)" fill="#7A3E28" fillOpacity="0.30"/>
          <circle cx="124" cy="168" r="3" fill="#7A3E28" fillOpacity="0.50"/>

          <ellipse cx="178" cy="244" rx="4" ry="2.5" transform="rotate(72 178 244)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="173" cy="244" rx="4" ry="2.5" transform="rotate(36 173 244)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="175" cy="249" rx="4" ry="2.5" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="181" cy="249" rx="4" ry="2.5" transform="rotate(-36 181 249)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="183" cy="244" rx="4" ry="2.5" transform="rotate(-72 183 244)" fill="#7A3E28" fillOpacity="0.28"/>
          <circle cx="178" cy="247" r="2.5" fill="#7A3E28" fillOpacity="0.50"/>

          <circle cx="197" cy="152" r="2.5" fill="#7A3E28" fillOpacity="0.40"/>
          <circle cx="192" cy="156" r="2" fill="#7A3E28" fillOpacity="0.35"/>
          <circle cx="200" cy="158" r="1.8" fill="#7A3E28" fillOpacity="0.30"/>
          <circle cx="112" cy="214" r="2.5" fill="#7A3E28" fillOpacity="0.40"/>
          <circle cx="116" cy="218" r="2" fill="#7A3E28" fillOpacity="0.35"/>
          <circle cx="110" cy="220" r="1.8" fill="#7A3E28" fillOpacity="0.30"/>
        </g>

        <g stroke="#7A3E28" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 162 430 C 150 500 165 570 145 640" strokeWidth="1.3"/>
          <path d="M 158 468 C 180 482 192 504 184 530" strokeWidth="1.1"/>
          <path d="M 184 530 C 194 546 190 562 200 574" strokeWidth="0.9"/>
          <path d="M 184 530 C 172 546 176 563 168 574" strokeWidth="0.9"/>
          <path d="M 150 510 C 132 524 126 548 136 570" strokeWidth="1.1"/>
          <path d="M 136 570 C 130 584 138 600 130 610" strokeWidth="0.9"/>
          <path d="M 136 570 C 146 582 144 598 152 610" strokeWidth="0.9"/>
          <path d="M 152 590 C 170 604 178 626 170 650" strokeWidth="1.0"/>

          <ellipse cx="200" cy="568" rx="10" ry="4" transform="rotate(22 200 568)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="166" cy="578" rx="11" ry="4.5" transform="rotate(-26 166 578)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="130" cy="586" rx="10" ry="4" transform="rotate(14 130 586)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="152" cy="614" rx="10" ry="4" transform="rotate(-20 152 614)" fill="#7A3E28" fillOpacity="0.28"/>

          <ellipse cx="184" cy="524" rx="5" ry="3" transform="rotate(72 184 524)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="178" cy="524" rx="5" ry="3" transform="rotate(36 178 524)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="180" cy="531" rx="5" ry="3" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="187" cy="531" rx="5" ry="3" transform="rotate(-36 187 531)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="189" cy="525" rx="5" ry="3" transform="rotate(-72 189 525)" fill="#7A3E28" fillOpacity="0.30"/>
          <circle cx="184" cy="528" r="3" fill="#7A3E28" fillOpacity="0.50"/>

          <circle cx="136" cy="572" r="2.5" fill="#7A3E28" fillOpacity="0.40"/>
          <circle cx="140" cy="576" r="2" fill="#7A3E28" fillOpacity="0.35"/>
          <circle cx="132" cy="577" r="2" fill="#7A3E28" fillOpacity="0.30"/>
        </g>

        <g stroke="#7A3E28" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 145 640 C 158 720 142 800 160 880" strokeWidth="1.3"/>
          <path d="M 160 880 C 172 950 156 1020 175 1090" strokeWidth="1.2"/>
          <path d="M 150 720 C 172 736 186 760 178 786" strokeWidth="1.1"/>
          <path d="M 178 786 C 188 802 184 820 194 832" strokeWidth="0.9"/>
          <path d="M 178 786 C 166 802 170 820 162 832" strokeWidth="0.9"/>
          <path d="M 142 750 C 124 764 120 788 130 812" strokeWidth="1.1"/>
          <path d="M 130 812 C 124 826 132 842 124 852" strokeWidth="0.9"/>
          <path d="M 162 870 C 182 886 194 910 186 936" strokeWidth="1.0"/>
          <path d="M 186 936 C 196 952 192 970 200 982" strokeWidth="0.9"/>
          <path d="M 186 936 C 174 952 178 970 170 982" strokeWidth="0.9"/>
          <path d="M 152 900 C 134 914 130 938 140 962" strokeWidth="1.0"/>

          <ellipse cx="194" cy="826" rx="10" ry="4" transform="rotate(24 194 826)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="160" cy="836" rx="11" ry="4.5" transform="rotate(-22 160 836)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="124" cy="846" rx="10" ry="4" transform="rotate(16 124 846)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="200" cy="978" rx="9" ry="3.5" transform="rotate(30 200 978)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="168" cy="986" rx="11" ry="4" transform="rotate(-18 168 986)" fill="#7A3E28" fillOpacity="0.28"/>
          <ellipse cx="140" cy="966" rx="10" ry="4" transform="rotate(10 140 966)" fill="#7A3E28" fillOpacity="0.28"/>

          <ellipse cx="178" cy="780" rx="5" ry="3" transform="rotate(72 178 780)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="172" cy="780" rx="5" ry="3" transform="rotate(36 172 780)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="174" cy="787" rx="5" ry="3" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="181" cy="787" rx="5" ry="3" transform="rotate(-36 181 787)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="183" cy="781" rx="5" ry="3" transform="rotate(-72 183 781)" fill="#7A3E28" fillOpacity="0.30"/>
          <circle cx="178" cy="784" r="3" fill="#7A3E28" fillOpacity="0.50"/>

          <ellipse cx="186" cy="930" rx="5" ry="3" transform="rotate(72 186 930)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="180" cy="930" rx="5" ry="3" transform="rotate(36 180 930)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="182" cy="937" rx="5" ry="3" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="189" cy="937" rx="5" ry="3" transform="rotate(-36 189 937)" fill="#7A3E28" fillOpacity="0.30"/>
          <ellipse cx="191" cy="931" rx="5" ry="3" transform="rotate(-72 191 931)" fill="#7A3E28" fillOpacity="0.30"/>
          <circle cx="186" cy="934" r="3" fill="#7A3E28" fillOpacity="0.50"/>

          <circle cx="130" cy="814" r="2.5" fill="#7A3E28" fillOpacity="0.40"/>
          <circle cx="134" cy="818" r="2" fill="#7A3E28" fillOpacity="0.35"/>
          <circle cx="126" cy="820" r="2" fill="#7A3E28" fillOpacity="0.30"/>
          <circle cx="140" cy="964" r="2.5" fill="#7A3E28" fillOpacity="0.40"/>
          <circle cx="144" cy="968" r="2" fill="#7A3E28" fillOpacity="0.30"/>
          <circle cx="136" cy="969" r="2" fill="#7A3E28" fillOpacity="0.30"/>
        </g>
      </svg>
    </div>
  );
}
