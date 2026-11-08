const points = [
  {
    id: "A1.2.1", level: "SL + HL", title: "DNA as the genetic material of all living organisms",
    syllabus: "DNA is the genetic material of all living organisms.",
    explanation: "DNA stores hereditary information in the cells of living organisms. Some viruses use RNA as their genetic material, but viruses are not considered living organisms.",
    questions: [
      { q: "What is DNA’s central role in living organisms?", a: "It stores hereditary information that can be passed on and used by cells." },
      { q: "Do RNA-genome viruses contradict the syllabus statement? Why?", a: "No. The statement concerns living organisms; viruses are not considered living." }
    ]
  },
  {
    id: "A1.2.2", level: "SL + HL", title: "Components of a nucleotide",
    syllabus: "A nucleotide contains a phosphate group, a pentose sugar and a nitrogenous base.",
    explanation: "Nucleotides are the monomers of nucleic acids. In a simple diagram, show phosphate as a circle, sugar as a pentagon and base as a rectangle.",
    image: { src: "/public/images/nucleotide.png", alt: "PowerPoint diagram of nucleotide parts connected in a strand", caption: "A nucleotide’s three parts: phosphate, pentose sugar and base." },
    questions: [
      { q: "Name the three components of a nucleotide.", a: "A phosphate group, a pentose sugar and a nitrogenous base." },
      { q: "Which shape represents the sugar in the syllabus diagram convention?", a: "A pentagon. The phosphate is a circle and the base is a rectangle." }
    ]
  },
  {
    id: "A1.2.3", level: "SL + HL", title: "The sugar–phosphate backbone",
    syllabus: "Sugar–phosphate bonding forms the backbone of DNA and RNA.",
    explanation: "Covalent links join nucleotides into a continuous chain. Phosphodiester bonds join the sugars and phosphates into a continuous chain. The repeating sugar–phosphate backbone is strong; the bases project from it.",
    questions: [
      { q: "What forms the repeating backbone of a nucleic acid strand?", a: "Alternating sugar and phosphate groups joined by covalent bonds." },
      { q: "Where are the bases found relative to the backbone?", a: "They attach to the sugars and extend outward from the backbone." }
    ]
  },
  {
    id: "A1.2.4", level: "SL + HL", title: "Bases: the molecular code",
    syllabus: "The bases in each nucleic acid form the basis of a code.",
    explanation: "DNA uses adenine (A), thymine (T), cytosine (C) and guanine (G). RNA uses uracil (U) instead of thymine. The order of bases carries information.",
    image: { src: "/public/images/bases.png", alt: "PowerPoint diagrams of the chemical structures of nitrogenous bases", caption: "The base sequence is information; RNA uses U where DNA uses T." },
    questions: [
      { q: "Name the four bases in DNA. Which base replaces thymine in RNA?", a: "Adenine, thymine, cytosine and guanine; RNA uses uracil instead of thymine." },
      { q: "How can a sequence of bases carry information?", a: "Different base orders create different messages in the nucleic acid." }
    ]
  },
  {
    id: "A1.2.5", level: "SL + HL", title: "RNA: a polymer made by condensation",
    syllabus: "RNA is a polymer formed by condensation of nucleotide monomers.",
    explanation: "RNA nucleotides join by condensation to form a single polynucleotide strand. Students should recognize a nucleotide and sketch a short RNA polymer.",
    questions: [
      { q: "What is the monomer of RNA, and what is the polymer?", a: "The monomer is a ribonucleotide; the polymer is an RNA polynucleotide." },
      { q: "What kind of reaction joins the nucleotide monomers?", a: "A condensation reaction joins them into a chain." }
    ]
  },
  {
    id: "A1.2.6", level: "SL + HL", title: "DNA: two complementary strands",
    syllabus: "DNA is a double helix of two antiparallel nucleotide strands linked by hydrogen bonds between complementary base pairs.",
    explanation: "The strands run in opposite directions. Adenine pairs with thymine, and guanine pairs with cytosine; hydrogen bonds connect the bases. In diagrams, show the strands antiparallel. Drawing the helix itself is not required.",
    image: { src: "/public/images/antiparallel-dna.png", alt: "PowerPoint diagram of paired DNA strands and base-pair geometry", caption: "Complementary bases hold the two antiparallel strands together." },
    questions: [
      { q: "Which bases pair in DNA? What type of bond links each pair?", a: "A pairs with T, and G pairs with C. Hydrogen bonds link the paired bases." },
      { q: "What does antiparallel mean for the two DNA strands?", a: "They run in opposite directions: one 5′→3′ and the other 3′→5′." }
    ]
  },
  {
    id: "A1.2.7", level: "SL + HL", title: "DNA and RNA compared",
    syllabus: "Compare DNA and RNA by strand number, nitrogenous bases and pentose sugar.",
    explanation: "DNA is usually double-stranded, contains deoxyribose and uses A, T, C and G. RNA is usually single-stranded, contains ribose and uses A, U, C and G. Be able to sketch the difference between ribose and deoxyribose. Examples of RNA include mRNA, tRNA and rRNA.",
    image: { src: "/public/images/dna-rna.png", alt: "PowerPoint comparison of DNA and RNA strand structures", caption: "A quick structural comparison of DNA and RNA." },
    questions: [
      { q: "Give two structural differences between DNA and RNA.", a: "DNA is usually double-stranded and has deoxyribose and thymine; RNA is usually single-stranded and has ribose and uracil." },
      { q: "What differs at the 2′ carbon in ribose and deoxyribose?", a: "Ribose has an –OH group; deoxyribose has –H." }
    ]
  },
  {
    id: "A1.2.8", level: "SL + HL", title: "Complementarity copies and expresses information",
    syllabus: "Complementary base pairing allows genetic information to be replicated and expressed.",
    explanation: "During DNA replication, each strand can guide a complementary new strand. During transcription, DNA base pairing guides RNA assembly. During translation, matching between mRNA codons and tRNA anticodons helps deliver amino acids in sequence.",
    image: { src: "/public/images/replication-expression.png", alt: "PowerPoint diagram of nucleic acid pairing during replication or expression", caption: "Base pairing connects stored DNA information to new nucleic acid strands." },
    questions: [
      { q: "How does complementary pairing help copy DNA accurately?", a: "Each original strand acts as a template for a matching new strand." },
      { q: "Where does complementary matching contribute during gene expression?", a: "It guides RNA formation during transcription and codon–anticodon matching during translation." }
    ]
  },
  {
    id: "A1.2.9", level: "SL + HL", title: "DNA can store limitless sequences",
    syllabus: "DNA has a diversity of possible base sequences and a limitless capacity for information storage.",
    explanation: "A DNA sequence can be any length and use any order of four bases. A sequence of n positions has 4ⁿ possible arrangements, giving DNA vast information capacity in a compact molecule.",
    questions: [
      { q: "How many sequences can be made from four bases across n positions?", a: "There are 4ⁿ possible sequences." },
      { q: "Which has more possible sequences: a 50-base sequence or a 100-base sequence?", a: "A 100-base sequence, because each added position multiplies the possibilities by four." }
    ]
  },
  {
    id: "A1.2.10", level: "SL + HL", title: "A conserved code points to common ancestry",
    syllabus: "Conservation of the genetic code across life forms is evidence of universal common ancestry.",
    explanation: "Across living groups, the same codons usually specify the same amino acids. This strong conservation is evidence that life inherited the genetic code from common ancestors; the guide does not require memorizing specific examples.",
    questions: [
      { q: "What does it mean that the genetic code is conserved?", a: "The same codons usually correspond to the same amino acids across diverse organisms." },
      { q: "Why does this support common ancestry?", a: "A shared, highly conserved code is consistent with inheritance from common ancestors." }
    ]
  },
  {
    id: "A1.2.11", level: "HL", title: "Directionality of DNA and RNA",
    syllabus: "DNA and RNA have 5′→3′ linkages and directionality that matters in replication, transcription and translation.",
    explanation: "A strand has a 5′ end and a 3′ end, giving it direction. Nucleic acids are synthesized 5′→3′ as new nucleotides join at the 3′ end. This affects how DNA is replicated, how RNA is transcribed and how mRNA is read in translation.",
    image: { src: "/public/images/directionality.png", alt: "PowerPoint diagram showing opposite 5′ and 3′ orientations of two strands", caption: "Directionality: the 5′ and 3′ ends define each strand’s orientation." },
    questions: [
      { q: "In which direction is a new DNA or RNA strand synthesized?", a: "5′→3′, by addition at the strand’s 3′ end." },
      { q: "Why does directionality matter for gene expression?", a: "It determines the direction in which DNA is transcribed and mRNA is read." }
    ]
  },
  {
    id: "A1.2.12", level: "HL", title: "Purine–pyrimidine pairing stabilizes the helix",
    syllabus: "Purine-to-pyrimidine bonding contributes to DNA helix stability.",
    explanation: "Adenine and guanine are two-ring purines; cytosine and thymine are one-ring pyrimidines. Each DNA base pair contains one of each, keeping pair width consistent and supporting the same helix shape along the sequence.",
    image: { src: "/public/images/helix-stability.png", alt: "PowerPoint molecular diagrams comparing complementary DNA base pairs", caption: "A purine pairs with a pyrimidine in both A–T and G–C pairs." },
    questions: [
      { q: "Which DNA bases are purines, and which are pyrimidines?", a: "Adenine and guanine are purines; cytosine and thymine are pyrimidines." },
      { q: "How does one-purine–one-pyrimidine pairing help the helix?", a: "It keeps the base-pair width consistent and helps maintain helix geometry." }
    ]
  },
  {
    id: "A1.2.13", level: "HL", title: "Packaging DNA into nucleosomes",
    syllabus: "A nucleosome is DNA wrapped around a core of eight histone proteins, held together by an additional histone attached to linker DNA.",
    explanation: "DNA wraps around a histone octamer to form a nucleosome. Linker DNA connects neighboring nucleosomes; an additional histone protein associates with the linker. Use molecular visualization software to study how DNA associates with the proteins.",
    image: { src: "/public/images/nucleosome.png", alt: "PowerPoint model of DNA wrapped around a histone protein core", caption: "A nucleosome: DNA wrapped around a core of eight histones." },
    questions: [
      { q: "What are the main components of a nucleosome?", a: "DNA wrapped around an eight-histone core, with an additional histone associated with linker DNA." },
      { q: "What could molecular visualization software help you inspect?", a: "How the DNA strand wraps around and associates with the histone proteins." }
    ]
  },
  {
    id: "A1.2.14", level: "HL", title: "Hershey–Chase: evidence for DNA",
    syllabus: "The Hershey–Chase experiment provides evidence that DNA is the genetic material.",
    explanation: "Hershey and Chase used ³⁵S to label phage protein and ³²P to label phage DNA. After infection, blending and centrifugation, most ³²P was found with the bacterial cells, while ³⁵S remained with the phage coats. The results support DNA as the material entering cells to direct new phage production. Radioisotope technology made this experiment possible.",
    image: { src: "/public/images/hershey-results.png", alt: "PowerPoint centrifugation diagram with sulfur-35 in supernatant and phosphorus-32 in bacterial pellet", caption: "The labeled DNA entered bacterial cells; most labeled protein stayed outside." },
    questions: [
      { q: "What did ³⁵S and ³²P label in the experiment?", a: "³⁵S labeled phage protein; ³²P labeled phage DNA." },
      { q: "Where was most ³²P detected, and what did that support?", a: "In the bacterial pellet; this supported DNA as the genetic material entering the cells." }
    ]
  },
  {
    id: "A1.2.15", level: "HL", title: "Chargaff’s data: diversity and falsification",
    syllabus: "Chargaff’s data describe relative amounts of purine and pyrimidine bases across diverse life forms.",
    explanation: "Chargaff found that DNA base composition varies among organisms while, in double-stranded DNA, A is approximately equal to T and G to C. The data challenged the tetranucleotide idea that DNA repeated all four bases equally. This is an example of evidence falsifying a scientific hypothesis.",
    image: { src: "/public/images/chargaff-data.png", alt: "PowerPoint chart comparing DNA base composition across different organisms", caption: "Different organisms vary in base composition; paired bases show consistent relationships." },
    questions: [
      { q: "If double-stranded DNA is 28% cytosine, what percentage is adenine?", a: "22%. Guanine is also 28%, leaving 44% for A and T, or 22% each." },
      { q: "What did Chargaff’s measurements challenge?", a: "The tetranucleotide hypothesis that DNA had a repeating, equal mixture of its four bases." }
    ]
  }
];

function renderPoint(point, index) {
  const image = point.image
    ? `<figure class="point-visual"><img src="${point.image.src}" alt="${point.image.alt}" loading="lazy" /><figcaption>${point.image.caption}</figcaption></figure>`
    : "";
  const questions = point.questions.map((item, qIndex) => `
    <li>
      <span>${item.q}</span>
      <details><summary>Reveal an answer</summary><p>${item.a}</p></details>
    </li>`).join("");
  return `
    <article class="point-card ${point.image ? "" : "no-image"}" id="${point.id.toLowerCase().replaceAll(".", "-")}">
      <div class="point-copy">
        <div class="point-topline"><span class="point-number">${point.id}</span><span class="point-level ${point.level === "HL" ? "hl-only" : ""}">${point.level}</span></div>
        <h3>${point.title}</h3>
        <p class="syllabus-line">${point.syllabus}</p>
        <p class="point-explanation">${point.explanation}</p>
        <div class="question-block"><h4>Check your understanding</h4><ol>${questions}</ol></div>
      </div>
      ${image}
    </article>`;
}

const core = document.querySelector("#core-points");
const higher = document.querySelector("#hl-points");
core.innerHTML = points.slice(0, 10).map(renderPoint).join("");
higher.innerHTML = points.slice(10).map(renderPoint).join("");
