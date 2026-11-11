const points = [
  {
    id: "A1.2.1", level: "SL + HL", title: "DNA as the genetic material of all living organisms",
    syllabus: "DNA is the genetic material of all living organisms.",
    explanation: "DNA and RNA are the two types of nucleic acid. DNA stores hereditary information in living organisms; some viruses use RNA, but viruses are not usually considered living.",
    image: { wide: true, maxWidth: 1095, src: "/manus-storage/genetic-material-pdf_23aa378a.jpg", fallback: "/public/images/genetic-material-pdf.jpg", alt: "A DNA helix beside a seedling, frog, mushroom, bacterium and virus illustration.", caption: "DNA carries hereditary information in living organisms; viruses are not considered living." },
    questions: [
      { q: "What is DNA’s central role in living organisms?", options: ["It stores hereditary information.", "It supplies every cell with energy.", "It forms the cell membrane.", "It digests proteins."], answer: 0 },
      { q: "Do RNA-genome viruses contradict the syllabus statement?", options: ["Yes; viruses are living organisms.", "No; viruses are not considered living organisms.", "Yes; RNA and DNA are identical.", "No; viruses have no genetic material."], answer: 1 }
    ]
  },
  {
    id: "A1.2.2", level: "SL + HL", title: "Components of a nucleotide",
    syllabus: "A nucleotide contains a phosphate group, a pentose sugar and a nitrogenous base.",
    explanation: "Nucleotides are the monomers of nucleic acids. In a simple diagram, show phosphate as a circle, sugar as a pentagon and base as a rectangle.",
    image: { wide: true, maxWidth: 1200, src: "/public/images/nucleotide.png", alt: "Nucleotide parts connected in a nucleic-acid strand", caption: "A nucleotide’s three parts: phosphate, pentose sugar and base." },
    questions: [
      { q: "Which set lists the three components of a nucleotide?", options: ["Phosphate, pentose sugar and nitrogenous base.", "Glycerol, fatty acid and base.", "Amino acid, phosphate and ribose only.", "Glucose, lipid and nitrogenous base."], answer: 0 },
      { q: "In the syllabus diagram convention, what shape represents the sugar?", options: ["A circle.", "A rectangle.", "A pentagon.", "A triangle."], answer: 2 }
    ]
  },
  {
    id: "A1.2.3", level: "SL + HL", title: "The sugar–phosphate backbone",
    syllabus: "Sugar–phosphate bonding forms the backbone of DNA and RNA.",
    explanation: "Covalent links join nucleotides into a continuous chain. Phosphodiester bonds join the sugars and phosphates into a continuous chain. The repeating sugar–phosphate backbone is strong; the bases project from it.",
    image: { wide: true, maxWidth: 1046, src: "/manus-storage/backbone-pdf_96b6b5e0.jpg", fallback: "/public/images/backbone-pdf.jpg", alt: "A labeled comparison of DNA deoxyribose and RNA ribose along sugar–phosphate strands.", caption: "DNA has 2′ H and RNA has 2′ OH; both have repeating sugar–phosphate backbones." },
    questions: [
      { q: "What forms the repeating backbone of a nucleic-acid strand?", options: ["Alternating sugars and phosphates.", "A row of nitrogenous bases only.", "A chain of amino acids.", "Alternating lipids and sugars."], answer: 0 },
      { q: "Where are bases positioned relative to the backbone?", options: ["They replace every phosphate.", "They attach to sugars and project outward.", "They form a separate protein layer.", "They connect two backbones directly."], answer: 1 }
    ]
  },
  {
    id: "A1.2.4", level: "SL + HL", title: "Bases: the molecular code",
    syllabus: "The bases in each nucleic acid form the basis of a code.",
    explanation: "DNA uses adenine (A), thymine (T), cytosine (C) and guanine (G). RNA uses uracil (U) instead of thymine. The order of bases carries information.",
    image: { wide: true, maxWidth: 734, src: "/public/images/bases.png", alt: "Chemical structures of adenine and guanine, the purine bases.", caption: "Purines: adenine (A) and guanine (G)." },
    extraImages: [{ wide: true, maxWidth: 734, src: "/manus-storage/pyrimidines_05d8fa69.png", fallback: "/public/images/pyrimidines.png", alt: "Chemical structures of cytosine, thymine and uracil.", caption: "Pyrimidines: cytosine (C), thymine (T) in DNA and uracil (U) in RNA." }],
    questions: [
      { q: "Which base is found in RNA instead of thymine?", options: ["Guanine.", "Cytosine.", "Uracil.", "Adenine."], answer: 2 },
      { q: "How does a nucleic acid sequence carry information?", options: ["By the order of its bases.", "By the colour of its sugar.", "By changing its phosphate count at every gene.", "By the number of membranes around it."], answer: 0 }
    ]
  },
  {
    id: "A1.2.5", level: "SL + HL", title: "RNA: a polymer made by condensation",
    syllabus: "RNA is a polymer formed by condensation of nucleotide monomers.",
    explanation: "RNA is a single-stranded polymer of ribonucleotides containing ribose. Condensation forms phosphodiester bonds and releases water. Students should recognize a nucleotide and sketch a short RNA polymer.",
    image: { wide: true, maxWidth: 1057, src: "/manus-storage/rna-condensation-pdf_46613777.jpg", fallback: "/public/images/rna-condensation-pdf.jpg", alt: "Ribonucleotides join by condensation to form an RNA strand, with water released and phosphodiester bonds formed.", caption: "Condensation links ribonucleotides into an RNA strand and releases water." },
    questions: [
      { q: "What are the monomers that form an RNA polymer?", options: ["Ribonucleotides.", "Amino acids.", "Fatty acids.", "Monosaccharides only."], answer: 0 },
      { q: "Which reaction joins RNA nucleotide monomers into a chain?", options: ["Hydrolysis.", "Condensation.", "Oxidation.", "Neutralisation."], answer: 1 }
    ]
  },
  {
    id: "A1.2.6", level: "SL + HL", title: "DNA: two complementary strands",
    syllabus: "DNA is a double helix of two antiparallel nucleotide strands linked by hydrogen bonds between complementary base pairs.",
    explanation: "The strands run in opposite directions. Adenine pairs with thymine, and guanine pairs with cytosine; hydrogen bonds connect the bases. In diagrams, show the strands antiparallel. Drawing the helix itself is not required.",
    image: { wide: true, maxWidth: 670, src: "/public/images/antiparallel-dna.png", alt: "Paired DNA strands and complementary base-pair geometry", caption: "Complementary bases hold the two antiparallel strands together." },
    questions: [
      { q: "Which base pairing is correct in DNA?", options: ["A–G and C–T.", "A–T and G–C.", "A–C and T–G.", "A–U and G–C."], answer: 1 },
      { q: "What does antiparallel mean for DNA strands?", options: ["Both run 5′→3′ in the same direction.", "They run in opposite directions.", "They contain no bases.", "They are joined by peptide bonds."], answer: 1 }
    ]
  },
  {
    id: "A1.2.7", level: "SL + HL", title: "DNA and RNA compared",
    syllabus: "Compare DNA and RNA by strand number, nitrogenous bases and pentose sugar.",
    explanation: "DNA is usually double-stranded, contains deoxyribose and uses A, T, C and G. RNA is usually single-stranded, contains ribose and uses A, U, C and G. Be able to sketch the difference between ribose and deoxyribose. Examples of RNA include mRNA, tRNA and rRNA.",
    image: { wide: true, maxWidth: 1088, src: "/manus-storage/dna-rna-comparison-v2_6feffe70.jpg", fallback: "/public/images/dna-rna-comparison-v2.jpg", alt: "DNA shown as a double helix with A, T, C and G beside a single RNA strand with U.", caption: "DNA is double-stranded and uses T; RNA is single-stranded and uses U." },
    questions: [
      { q: "Which comparison of DNA and RNA is correct?", options: ["DNA has ribose and U; RNA has deoxyribose and T.", "DNA usually has two strands and T; RNA usually has one strand and U.", "Both always have two strands and T.", "Both use U and contain identical sugars."], answer: 1 },
      { q: "What differs at the 2′ carbon of ribose and deoxyribose?", options: ["Ribose has –OH; deoxyribose has –H.", "Ribose has –H; deoxyribose has –OH.", "Both have an extra phosphate there.", "Neither sugar has a 2′ carbon."], answer: 0 }
    ]
  },
  {
    id: "A1.2.8", level: "SL + HL", title: "Complementarity copies and expresses information",
    syllabus: "Complementary base pairing allows genetic information to be replicated and expressed.",
    explanation: "During DNA replication, each strand guides a complementary new strand. During transcription, pairing assembles mRNA from a DNA template; mRNA carries the codon sequence to a ribosome. During translation, each mRNA codon pairs with a tRNA anticodon; that tRNA carries the matching amino acid, linking codon order to polypeptide order.",
    image: { wide: true, maxWidth: 670, src: "/public/images/replication-expression.png", alt: "Base pairing during replication and gene expression", caption: "Base pairing connects stored DNA information to new nucleic-acid strands." },
    questions: [
      { q: "How does complementary pairing help copy DNA?", options: ["Each original strand guides a matching new strand.", "It changes DNA into protein directly.", "It removes all bases from the template.", "It prevents new nucleotides from joining."], answer: 0 },
      { q: "Where does complementary matching contribute to gene expression?", options: ["Only during lipid synthesis.", "During transcription and codon–anticodon matching in translation.", "Only when DNA is packaged into nucleosomes.", "It has no role in expression."], answer: 1 }
    ]
  },
  {
    id: "A1.2.9", level: "SL + HL", title: "DNA can store limitless sequences",
    syllabus: "DNA has a diversity of possible base sequences and a limitless capacity for information storage.",
    explanation: "A DNA sequence can be any length and use any order of four bases. A sequence of n positions has 4ⁿ possible arrangements, giving DNA vast information capacity in a compact molecule.",
    image: { wide: true, maxWidth: 643, src: "/manus-storage/base-sequence_2c430675.png", fallback: "/public/images/base-sequence.png", alt: "A single nucleic-acid strand carrying an ordered sequence of A, U, C and G bases.", caption: "An ordered base sequence carries information; DNA uses T where RNA uses U." },
    questions: [
      { q: "How many different sequences can four bases form across n positions?", options: ["4ⁿ.", "4 + n.", "n⁴ only when n is four.", "2n."], answer: 0 },
      { q: "Why does a 100-base sequence have more possible arrangements than a 50-base sequence?", options: ["Each position can contain only one base.", "Every added position multiplies possible sequences by four.", "The longer strand uses more kinds of bases.", "DNA stops being complementary at 50 bases."], answer: 1 }
    ]
  },
  {
    id: "A1.2.10", level: "SL + HL", title: "A conserved code points to common ancestry",
    syllabus: "Conservation of the genetic code across life forms is evidence of universal common ancestry.",
    explanation: "Across living groups, the same codons usually specify the same amino acids. This strong conservation is evidence that life inherited the genetic code from common ancestors; specific examples need not be memorized.",
    image: { wide: true, maxWidth: 1024, src: "/manus-storage/common-ancestry-v2_326ee84a.jpg", fallback: "/public/images/common-ancestry-v2.jpg", alt: "Bacteria, a plant and an animal share the same genetic code and trace back to a common ancestor.", caption: "Bacteria, plants and animals share a conserved genetic code, supporting common ancestry." },
    questions: [
      { q: "What does it mean that the genetic code is conserved?", options: ["The same codons usually correspond to the same amino acids across many organisms.", "Every organism has the same DNA sequence.", "Only one codon is used in all cells.", "Codons differ completely between every species."], answer: 0 },
      { q: "Why does a highly conserved genetic code support common ancestry?", options: ["It is consistent with inheritance from shared ancestors.", "It proves that all organisms are identical.", "It shows that DNA contains no information.", "It means the code evolved separately in every cell."], answer: 0 }
    ]
  },
  {
    id: "A1.2.11", level: "HL", title: "Directionality of DNA and RNA",
    syllabus: "The 5′ and 3′ ends of DNA and RNA differ, giving each strand directionality.",
    explanation: "A strand’s 3′ end has a free –OH; its 5′ end carries a phosphate attached at C5. An incoming nucleotide’s 5′ phosphate forms a phosphodiester bond with the growing strand’s 3′ –OH, so synthesis proceeds 5′→3′. DNA strands are antiparallel, with opposite 5′/3′ orientations.",
    image: { wide: true, maxWidth: 670, src: "/public/images/directionality.png", alt: "Two nucleic-acid strands with opposite 5′ and 3′ orientations", caption: "The 5′ and 3′ ends define each strand’s orientation." },
    questions: [
      { q: "In which direction is a new DNA or RNA strand synthesized?", options: ["3′→5′ by addition at the 5′ end.", "5′→3′ by addition at the 3′ end.", "In both directions equally from every end.", "Direction has no relation to strand growth."], answer: 1 },
      { q: "Why does nucleic-acid directionality matter?", options: ["It determines orientation in replication, transcription and translation.", "It changes the identity of every base.", "It replaces hydrogen bonds with peptide bonds.", "It determines only the molecule’s colour."], answer: 0 }
    ]
  },
  {
    id: "A1.2.12", level: "HL", title: "Purine–pyrimidine pairing stabilizes the helix",
    syllabus: "Purine-to-pyrimidine bonding contributes to DNA helix stability.",
    explanation: "Adenine and guanine are two-ring purines; cytosine and thymine are one-ring pyrimidines. Each DNA base pair contains one of each, keeping pair width consistent and supporting the same helix shape along the sequence.",
    image: { wide: true, maxWidth: 670, src: "/public/images/helix-stability.png", alt: "Molecular structures of complementary DNA base pairs", caption: "A purine pairs with a pyrimidine in both A–T and G–C pairs." },
    video: { id: "TrNeuH6JOVc", title: "Visualising DNA Geometry", description: "Explore antiparallel strands, grooves and helix width alongside purine–pyrimidine pairing." },
    questions: [
      { q: "Which bases are purines?", options: ["Cytosine and thymine.", "Adenine and guanine.", "Adenine and thymine.", "Guanine and cytosine."], answer: 1 },
      { q: "How does one-purine–one-pyrimidine pairing support helix stability?", options: ["It keeps base-pair width consistent.", "It removes the sugar–phosphate backbone.", "It makes both strands run in the same direction.", "It prevents hydrogen bonding."], answer: 0 }
    ]
  },
  {
    id: "A1.2.13", level: "HL", title: "Packaging DNA into nucleosomes",
    syllabus: "A nucleosome is DNA wrapped around a core of eight histone proteins, held together by an additional histone attached to linker DNA.",
    explanation: "In eukaryotes, nucleosomes package DNA into condensed chromosomes and help regulate replication and transcription. DNA wraps around a histone octamer; linker DNA joins adjacent nucleosomes and H1 associates with the linker. Use molecular visualization software to study DNA–protein association.",
    image: { wide: true, maxWidth: 610, src: "/public/images/nucleosome.png", alt: "DNA wrapped around a histone protein core", caption: "A nucleosome: DNA wrapped around a core of eight histones." },
    questions: [
      { q: "What is the core of a nucleosome?", options: ["DNA wrapped around eight histone proteins.", "RNA wrapped around a ribosome.", "A chain of eight nucleotides only.", "A phospholipid bilayer."], answer: 0 },
      { q: "Where is the additional histone associated?", options: ["With linker DNA between nucleosomes.", "Inside every nucleotide base.", "At the end of an mRNA codon.", "On the outside of the cell membrane."], answer: 0 }
    ]
  },
  {
    id: "A1.2.14", level: "HL", title: "Hershey–Chase: evidence for DNA",
    syllabus: "The Hershey–Chase experiment provides evidence that DNA is the genetic material.",
    explanation: "Hershey and Chase used ³⁵S to label phage protein and ³²P to label phage DNA. After infection, blending and centrifugation, most ³²P was found with the bacterial cells, while ³⁵S remained with the phage coats. The results support DNA as the material entering cells to direct new phage production. Radioisotope technology made this experiment possible.",
    image: { wide: true, maxWidth: 610, src: "/public/images/hershey-results.png", alt: "Centrifugation results: sulfur-35 in the supernatant and phosphorus-32 in the bacterial pellet", caption: "Most labeled DNA entered bacterial cells; most labeled protein stayed outside." },
    video: { id: "tSHevjh123A", title: "The Hershey–Chase Experiment", description: "Follow how radioisotope labels and centrifugation tested whether phage DNA or protein entered bacteria." },
    questions: [
      { q: "What did ³⁵S and ³²P label in the experiment?", options: ["³⁵S labeled protein; ³²P labeled DNA.", "³⁵S labeled DNA; ³²P labeled protein.", "Both isotopes labeled only DNA.", "Both isotopes labeled only protein."], answer: 0 },
      { q: "Where was most ³²P detected after infection and centrifugation?", options: ["With the bacterial pellet.", "Only in the phage coats in the supernatant.", "In the blender blades.", "Outside both fractions."], answer: 0 }
    ]
  },
  {
    id: "A1.2.15", level: "HL", title: "Chargaff’s data: diversity and falsification",
    syllabus: "Chargaff’s data describe relative amounts of purine and pyrimidine bases across diverse life forms.",
    explanation: "Chargaff found that base proportions are similar across tissues within a species but vary between species. In double-stranded DNA, A≈T and G≈C, so purines (A+G) and pyrimidines (C+T) each total about 50%. These results refuted the tetranucleotide hypothesis that all four bases repeat equally. Evidence can falsify a hypothesis, while repeated support cannot prove it against every future test.",
    image: { wide: true, maxWidth: 670, src: "/public/images/chargaff-data.png", alt: "Chart comparing DNA base composition across different organisms", caption: "Organisms vary in DNA base composition; paired bases show consistent relationships." },
    questions: [
      { q: "In double-stranded DNA, which relationship did Chargaff’s findings support?", options: ["A ≈ T and G ≈ C.", "A ≈ G and T ≈ C.", "All four bases are always equal.", "A is absent whenever G is present."], answer: 0 },
      { q: "What did Chargaff’s data challenge?", options: ["The idea that DNA is made of nucleotides.", "The tetranucleotide hypothesis of an equal, repeating mixture of four bases.", "The existence of different organisms.", "The use of radioisotopes in experiments."], answer: 1 }
    ]
  }
];

  function renderQuestion(question, pointId, qIndex) {
    const name = `${pointId.toLowerCase().replaceAll(".", "-")}-q${qIndex + 1}`;
    const options = question.options.map((option, index) => `
      <label class="mc-option"><input type="radio" name="${name}" value="${index}" aria-describedby="${name}-feedback" /><span>${option}</span></label>`).join("");
    return `
    <fieldset class="mc-question" data-correct-index="${question.answer}">
      <legend>${qIndex + 1}. ${question.q}</legend>
      <div class="mc-options">${options}
      </div>
      <p id="${name}-feedback" class="mc-feedback" role="status" aria-live="polite" hidden></p>
    </fieldset>`;
  }

function renderPoint(point) {
  const renderFigure = (item) => {
    const imageClasses = item.wide ? "point-visual point-visual-wide" : "point-visual";
    const figureStyle = item.wide ? ` style="--figure-max-width:${item.maxWidth || 1200}px"` : "";
    const fallback = item.fallback ? ` onerror="this.onerror=null;this.src='${item.fallback}'"` : "";
    return `<figure class="${imageClasses}"${figureStyle}><img src="${item.src}" alt="${item.alt}" loading="lazy"${fallback} /><figcaption>${item.caption}</figcaption></figure>`;
  };
  const imageList = [point.image, ...(point.extraImages || [])].filter(Boolean);
  const image = imageList.map(renderFigure).join("");
  const baseKey = point.id === "A1.2.4"
    ? `<div class="base-key" role="list" aria-label="The five nucleobases">
        <div class="base-item base-a" role="listitem"><strong>A</strong><span>Adenine</span></div>
        <div class="base-item base-t" role="listitem"><strong>T</strong><span>Thymine</span></div>
        <div class="base-item base-c" role="listitem"><strong>C</strong><span>Cytosine</span></div>
        <div class="base-item base-g" role="listitem"><strong>G</strong><span>Guanine</span></div>
        <div class="base-item base-u" role="listitem"><strong>U</strong><span>Uracil · RNA</span></div>
      </div>`
    : "";
  const questions = point.questions.map((item, qIndex) => renderQuestion(item, point.id, qIndex)).join("");
  const video = point.video
    ? `<section class="lesson-video" aria-label="Video: ${point.video.title}">
        <h4>${point.video.title}</h4>
        <p>${point.video.description}</p>
        <div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${point.video.id}" title="${point.video.title}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        <a href="https://www.youtube.com/watch?v=${point.video.id}" target="_blank" rel="noreferrer">Watch on YouTube</a>
      </section>`
    : "";
  return `
    <article class="point-card ${point.image ? "" : "no-image"}" id="${point.id.toLowerCase().replaceAll(".", "-")}">
      <div class="point-copy">
        <div class="point-topline"><span class="point-number">${point.id}</span><span class="point-level ${point.level === "HL" ? "hl-only" : ""}">${point.level}</span></div>
        <h3>${point.title}</h3>
        <p class="syllabus-line">${point.syllabus}</p>
        <p class="point-explanation">${point.explanation}</p>
      </div>
      ${baseKey}
      ${image}
      ${video}
      <div class="question-block"><h4>Multiple choice · select an option for instant feedback</h4>${questions}</div>
    </article>`;
}

const core = document.querySelector("#core-points");
const higher = document.querySelector("#hl-points");
core.innerHTML = points.slice(0, 10).map(renderPoint).join("");
higher.innerHTML = points.slice(10).map(renderPoint).join("");


document.querySelectorAll(".mc-question").forEach((fieldset) => {
  const correctIndex = Number(fieldset.dataset.correctIndex);
  const options = Array.from(fieldset.querySelectorAll(".mc-option"));
  const feedback = fieldset.querySelector(".mc-feedback");

  fieldset.addEventListener("change", (event) => {
    if (event.target?.type !== "radio") return;
    const selectedIndex = Number(event.target.value);
    options.forEach((option, index) => {
      option.classList.toggle("is-correct", index === correctIndex);
      option.classList.toggle("is-incorrect", index === selectedIndex && selectedIndex !== correctIndex);
    });

    const correctAnswer = options[correctIndex]?.querySelector("span")?.textContent.trim() || "the highlighted option";
    feedback.classList.remove("is-correct", "is-incorrect");
    if (selectedIndex === correctIndex) {
      feedback.classList.add("is-correct");
      feedback.textContent = "Correct.";
    } else {
      feedback.classList.add("is-incorrect");
      feedback.textContent = `Not quite. The correct answer is ${correctAnswer}`;
    }
    feedback.hidden = false;
  });
});
