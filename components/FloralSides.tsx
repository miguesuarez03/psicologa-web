/**
 * FloralSides — botanical line illustrations in the page margins.
 * Fixed position, behind all content, only visible on wide viewports
 * where there's space outside the max-w-content container.
 * Opacity is intentionally low so it's felt, not read.
 */
export function FloralSides() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden xl:block"
      aria-hidden="true"
    >
      {/* LEFT SIDE */}
      <svg
        className="absolute left-0 top-0 h-full"
        style={{ width: "clamp(60px, calc((100vw - 72rem) / 2 + 20px), 160px)", opacity: 0.18 }}
        viewBox="0 0 160 1400"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left — top cluster */}
        <g stroke="#7A3E28" strokeWidth="0.9" strokeLinecap="round">
          {/* Main stem down from top-left */}
          <path d="M 30 0 C 35 80 20 160 40 240" />
          <path d="M 40 240 C 50 290 30 340 55 400" />
          {/* Side branches left cluster top */}
          <path d="M 33 60 C 15 75 5 95 10 115" />
          <path d="M 10 115 C 5 125 8 138 3 148" />
          <path d="M 10 115 C 18 130 14 145 20 155" />
          <path d="M 36 110 C 55 120 65 140 60 158" />
          <path d="M 60 158 C 65 170 58 182 63 192" />
          <path d="M 60 158 C 50 168 52 180 46 190" />
          <path d="M 38 170 C 20 182 12 200 18 218" />
          <path d="M 18 218 C 12 230 15 244 8 252" />
          <path d="M 18 218 C 26 232 22 246 28 255" />
          {/* Leaves top cluster */}
          <ellipse cx="8" cy="132" rx="6" ry="3" transform="rotate(-30 8 132)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="22" cy="162" rx="7" ry="3" transform="rotate(20 22 162)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="65" cy="175" rx="8" ry="3" transform="rotate(-15 65 175)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="45" cy="195" rx="6" ry="2.5" transform="rotate(35 45 195)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="12" cy="248" rx="7" ry="3" transform="rotate(-25 12 248)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="30" cy="260" rx="6" ry="2.5" transform="rotate(15 30 260)" fill="#7A3E28" fillOpacity="0.15"/>
          {/* Small flowers top cluster */}
          <circle cx="10" cy="118" r="2.5" fill="#7A3E28" fillOpacity="0.25"/>
          <circle cx="7" cy="115" r="1.5" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="13" cy="114" r="1.5" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="63" cy="194" r="2.5" fill="#7A3E28" fillOpacity="0.25"/>
          <circle cx="60" cy="191" r="1.5" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="66" cy="191" r="1.5" fill="#7A3E28" fillOpacity="0.2"/>
          {/* 5-petal flowers */}
          <circle cx="19" cy="220" r="3" fill="none" stroke="#7A3E28" strokeWidth="0.7"/>
          <circle cx="19" cy="214" r="2" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="24" cy="217" r="2" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="22" cy="223" r="2" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="15" cy="223" r="2" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="13" cy="217" r="2" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="19" cy="220" r="1.5" fill="#7A3E28" fillOpacity="0.35"/>
        </g>

        {/* Left — middle cluster */}
        <g stroke="#7A3E28" strokeWidth="0.9" strokeLinecap="round">
          <path d="M 55 400 C 60 460 45 520 65 580" />
          <path d="M 58 440 C 40 455 28 475 35 498" />
          <path d="M 35 498 C 28 510 30 525 22 535" />
          <path d="M 35 498 C 44 512 40 528 48 538" />
          <path d="M 62 500 C 78 512 82 530 75 548" />
          <path d="M 75 548 C 80 560 74 574 80 584" />
          <path d="M 75 548 C 66 558 68 572 62 582" />
          <path d="M 60 550 C 44 562 38 580 45 598" />
          <ellipse cx="22" cy="528" rx="7" ry="2.8" transform="rotate(-20 22 528)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="50" cy="542" rx="8" ry="3" transform="rotate(25 50 542)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="80" cy="566" rx="6" ry="2.5" transform="rotate(-35 80 566)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="62" cy="586" rx="7" ry="3" transform="rotate(10 62 586)" fill="#7A3E28" fillOpacity="0.15"/>
          <circle cx="36" cy="500" r="2.5" fill="#7A3E28" fillOpacity="0.25"/>
          <circle cx="76" cy="550" r="2.5" fill="#7A3E28" fillOpacity="0.25"/>
        </g>

        {/* Left — bottom cluster */}
        <g stroke="#7A3E28" strokeWidth="0.9" strokeLinecap="round">
          <path d="M 65 580 C 55 660 70 740 50 820" />
          <path d="M 50 820 C 40 880 55 940 35 1000" />
          <path d="M 52 700 C 35 715 22 735 28 758" />
          <path d="M 28 758 C 20 772 24 788 16 798" />
          <path d="M 28 758 C 38 770 34 786 42 796" />
          <path d="M 60 760 C 75 772 78 792 70 810" />
          <path d="M 48 850 C 30 862 18 882 25 905" />
          <path d="M 25 905 C 18 918 22 933 14 943" />
          <path d="M 25 905 C 34 918 30 934 38 944" />
          <path d="M 55 870 C 70 882 74 902 66 920" />
          <ellipse cx="16" cy="792" rx="7" ry="2.8" transform="rotate(-22 16 792)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="44" cy="800" rx="8" ry="3" transform="rotate(28 44 800)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="70" cy="814" rx="6" ry="2.5" transform="rotate(-18 70 814)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="14" cy="938" rx="7" ry="2.8" transform="rotate(-30 14 938)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="40" cy="948" rx="7" ry="3" transform="rotate(20 40 948)" fill="#7A3E28" fillOpacity="0.15"/>
          {/* Flowers bottom-left */}
          <circle cx="29" cy="760" r="3" fill="none" stroke="#7A3E28" strokeWidth="0.7"/>
          <circle cx="29" cy="754" r="2" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="34" cy="757" r="2" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="32" cy="763" r="2" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="25" cy="763" r="2" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="23" cy="757" r="2" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="29" cy="760" r="1.5" fill="#7A3E28" fillOpacity="0.35"/>
          <circle cx="26" cy="907" r="2.5" fill="#7A3E28" fillOpacity="0.25"/>
          <circle cx="67" cy="922" r="2.5" fill="#7A3E28" fillOpacity="0.25"/>
        </g>
      </svg>

      {/* RIGHT SIDE */}
      <svg
        className="absolute right-0 top-0 h-full"
        style={{ width: "clamp(60px, calc((100vw - 72rem) / 2 + 20px), 160px)", opacity: 0.18 }}
        viewBox="0 0 160 1400"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Mirror of left — branches from right edge */}
        <g stroke="#7A3E28" strokeWidth="0.9" strokeLinecap="round">
          <path d="M 130 0 C 125 80 140 160 120 240" />
          <path d="M 120 240 C 110 290 130 340 105 400" />
          <path d="M 127 60 C 145 75 155 95 150 115" />
          <path d="M 150 115 C 155 125 152 138 157 148" />
          <path d="M 150 115 C 142 130 146 145 140 155" />
          <path d="M 124 110 C 105 120 95 140 100 158" />
          <path d="M 100 158 C 95 170 102 182 97 192" />
          <path d="M 100 158 C 110 168 108 180 114 190" />
          <path d="M 122 170 C 140 182 148 200 142 218" />
          <path d="M 142 218 C 148 230 145 244 152 252" />
          <path d="M 142 218 C 134 232 138 246 132 255" />
          <ellipse cx="152" cy="132" rx="6" ry="3" transform="rotate(30 152 132)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="138" cy="162" rx="7" ry="3" transform="rotate(-20 138 162)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="95" cy="175" rx="8" ry="3" transform="rotate(15 95 175)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="115" cy="195" rx="6" ry="2.5" transform="rotate(-35 115 195)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="148" cy="248" rx="7" ry="3" transform="rotate(25 148 248)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="130" cy="260" rx="6" ry="2.5" transform="rotate(-15 130 260)" fill="#7A3E28" fillOpacity="0.15"/>
          <circle cx="150" cy="118" r="2.5" fill="#7A3E28" fillOpacity="0.25"/>
          <circle cx="153" cy="115" r="1.5" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="147" cy="114" r="1.5" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="97" cy="194" r="2.5" fill="#7A3E28" fillOpacity="0.25"/>
          <circle cx="141" cy="220" r="3" fill="none" stroke="#7A3E28" strokeWidth="0.7"/>
          <circle cx="141" cy="214" r="2" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="146" cy="217" r="2" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="144" cy="223" r="2" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="137" cy="223" r="2" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="135" cy="217" r="2" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="141" cy="220" r="1.5" fill="#7A3E28" fillOpacity="0.35"/>
        </g>

        <g stroke="#7A3E28" strokeWidth="0.9" strokeLinecap="round">
          <path d="M 105 400 C 100 460 115 520 95 580" />
          <path d="M 102 440 C 120 455 132 475 125 498" />
          <path d="M 125 498 C 132 510 130 525 138 535" />
          <path d="M 125 498 C 116 512 120 528 112 538" />
          <path d="M 98 500 C 82 512 78 530 85 548" />
          <path d="M 85 548 C 80 560 86 574 80 584" />
          <path d="M 85 548 C 94 558 92 572 98 582" />
          <path d="M 100 550 C 116 562 122 580 115 598" />
          <ellipse cx="138" cy="528" rx="7" ry="2.8" transform="rotate(20 138 528)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="110" cy="542" rx="8" ry="3" transform="rotate(-25 110 542)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="80" cy="566" rx="6" ry="2.5" transform="rotate(35 80 566)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="98" cy="586" rx="7" ry="3" transform="rotate(-10 98 586)" fill="#7A3E28" fillOpacity="0.15"/>
          <circle cx="124" cy="500" r="2.5" fill="#7A3E28" fillOpacity="0.25"/>
          <circle cx="84" cy="550" r="2.5" fill="#7A3E28" fillOpacity="0.25"/>
        </g>

        <g stroke="#7A3E28" strokeWidth="0.9" strokeLinecap="round">
          <path d="M 95 580 C 105 660 90 740 110 820" />
          <path d="M 110 820 C 120 880 105 940 125 1000" />
          <path d="M 108 700 C 125 715 138 735 132 758" />
          <path d="M 132 758 C 140 772 136 788 144 798" />
          <path d="M 132 758 C 122 770 126 786 118 796" />
          <path d="M 100 760 C 85 772 82 792 90 810" />
          <path d="M 112 850 C 130 862 142 882 135 905" />
          <path d="M 135 905 C 142 918 138 933 146 943" />
          <path d="M 135 905 C 126 918 130 934 122 944" />
          <path d="M 105 870 C 90 882 86 902 94 920" />
          <ellipse cx="144" cy="792" rx="7" ry="2.8" transform="rotate(22 144 792)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="116" cy="800" rx="8" ry="3" transform="rotate(-28 116 800)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="90" cy="814" rx="6" ry="2.5" transform="rotate(18 90 814)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="146" cy="938" rx="7" ry="2.8" transform="rotate(30 146 938)" fill="#7A3E28" fillOpacity="0.15"/>
          <ellipse cx="120" cy="948" rx="7" ry="3" transform="rotate(-20 120 948)" fill="#7A3E28" fillOpacity="0.15"/>
          <circle cx="131" cy="760" r="3" fill="none" stroke="#7A3E28" strokeWidth="0.7"/>
          <circle cx="131" cy="754" r="2" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="136" cy="757" r="2" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="134" cy="763" r="2" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="127" cy="763" r="2" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="125" cy="757" r="2" fill="#7A3E28" fillOpacity="0.2"/>
          <circle cx="131" cy="760" r="1.5" fill="#7A3E28" fillOpacity="0.35"/>
          <circle cx="134" cy="907" r="2.5" fill="#7A3E28" fillOpacity="0.25"/>
          <circle cx="93" cy="922" r="2.5" fill="#7A3E28" fillOpacity="0.25"/>
        </g>
      </svg>
    </div>
  );
}
