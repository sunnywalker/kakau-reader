type Ref = {
  id:
    | "Ka Tuitui Malamalama | Episode 1: Hoolauna"
    | "Hawaiian Medicine with Tuti Kanahele"
    | "#10 TUTI KANAHELE"
    | "Ka Tuitui Malamalama | Episode 6: E Welo Mau Ka Olelo Kanaka";
  time: string | string[];
  text?: string;
};

type Rule = {
  id: string;
  pairs: {
    niihau: string;
    hawaii: string;
  }[];
  refs?: Ref[];
};

// tela me teia tupuna - Kamehameha Nui p.16
// tana kumu - Kamehameha Nui p.46. na tumu p.72
// kapa tai atau - Kamehameha Nui p.46
// to Kaahumanu - Kamehameha Nui p.58
// ka tahawai - Kamehameha Nui p.62
// tona kino - Kamehameha Nui p.62

// akula - Kamehameha Nui p.84

// hootahi kanaka #10 TUTI KANAHELE 25:11
// tā laua #10 TUTI KANAHELE 25:55

export const rules: Rule[] = [
  {
    id: "itaita",
    pairs: [
      {
        hawaii: "ikaika",
        niihau: "itaita",
      },
      {
        hawaii: "hōʻikaika",
        niihau: "hōʻitaita",
      },
    ],
    refs: [
      {
        id: "Ka Tuitui Malamalama | Episode 6: E Welo Mau Ka Olelo Kanaka",
        time: ["39:28"],
        text: "hoitaita",
      },
    ],
  },

  {
    id: "ite",
    pairs: [{ hawaii: "ike", niihau: "ite" }],
    refs: [
      {
        id: "Ka Tuitui Malamalama | Episode 6: E Welo Mau Ka Olelo Kanaka",
        time: ["38:39"],
        text: "tela ite",
      },
    ],
  },
  {
    id: "kanu",
    pairs: [{ hawaii: "kanu", niihau: "kanu" }],
    refs: [{ id: "Ka Tuitui Malamalama | Episode 1: Hoolauna", time: "30:14" }],
  },
  // {
  //   id: "kā",
  //   pairs: [{ hawaii: "kā", niihau: "kā" }],
  //   refs: [
  //     {
  //       id: "Ka Tuitui Malamalama | Episode 6: E Welo Mau Ka Olelo Kanaka",
  //       time: "40:05",
  //       text: "teia ka ta olelo",
  //     },
  //   ],
  // },
  {
    id: "kātau",
    pairs: [{ hawaii: "kākau", niihau: "kātau" }],
    refs: [
      {
        id: "Ka Tuitui Malamalama | Episode 6: E Welo Mau Ka Olelo Kanaka",
        time: "40:00",
      },
    ],
  },
  {
    id: "kātou",
    pairs: [{ hawaii: "kākou", niihau: "kātou" }],
    refs: [{ id: "Ka Tuitui Malamalama | Episode 1: Hoolauna", time: "30:14" }],
  },
  {
    id: "keitamāhine",
    pairs: [
      // Ke Tuitui Malamalama Episode 3. 19:09
      { hawaii: "ke kaikamāhine", niihau: "ta keitamāhine" },
      { hawaii: "kaikamāhine", niihau: "keitamāhine" },
    ],
  },
  {
    id: "kula",
    pairs: [{ hawaii: "kula", niihau: "kula" }],
    refs: [
      {
        id: "Ka Tuitui Malamalama | Episode 6: E Welo Mau Ka Olelo Kanaka",
        time: ["39:28"],
        text: "tumu kula",
      },
    ],
  },

  {
    id: "mata",
    pairs: [{ hawaii: "maka", niihau: "mata" }],
    refs: [
      {
        id: "Ka Tuitui Malamalama | Episode 1: Hoolauna",
        time: "12:33",
        text: "ite mata",
      },
      {
        id: "Ka Tuitui Malamalama | Episode 6: E Welo Mau Ka Olelo Kanaka",
        time: "41:32",
        text: "",
      },
    ],
  },
  {
    id: "mataʻu",
    pairs: [{ hawaii: "makaʻu", niihau: "mataʻu" }],
    refs: [
      {
        id: "Ka Tuitui Malamalama | Episode 6: E Welo Mau Ka Olelo Kanaka",
        time: ["41:34"],
      },
    ],
  },
  {
    id: "mātuʻe",
    pairs: [{ hawaii: "mākuʻe", niihau: "mātuʻe" }],
    refs: [
      {
        id: "Ka Tuitui Malamalama | Episode 6: E Welo Mau Ka Olelo Kanaka",
        time: ["42:30"],
      },
    ],
  },
  {
    id: "paʻakitī",
    pairs: [{ hawaii: "paʻakikī", niihau: "paʻakitī" }],
    refs: [
      {
        id: "Ka Tuitui Malamalama | Episode 6: E Welo Mau Ka Olelo Kanaka",
        time: ["38:56"],
      },
    ],
  },
  {
    id: "pito",
    pairs: [{ hawaii: "piko", niihau: "pito" }],
    refs: [
      {
        id: "Ka Tuitui Malamalama | Episode 1: Hoolauna",
        time: ["30:12", "30:20"],
      },
    ],
  },
  {
    id: "tāhea",
    pairs: [{ hawaii: "kāhea", niihau: "tāhea" }],
    refs: [
      {
        id: "Hawaiian Medicine with Tuti Kanahele",
        time: ["43:18"],
      },
    ],
  },
  {
    // tai - Kamehameha Nui p.32
    // ka tai tuono - Kamehameha Nui p.69
    id: "tai",
    pairs: [{ hawaii: "kai", niihau: "tai" }],
  },
  {
    id: "tau",
    pairs: [{ hawaii: "kau", niihau: "tau" }],
    refs: [
      {
        id: "Ka Tuitui Malamalama | Episode 6: E Welo Mau Ka Olelo Kanaka",
        time: ["40:18"],
        text: "tau i luna … i loko o ta pahu",
      },
    ],
  },
  {
    id: "tīloi",
    pairs: [{ hawaii: "kīloi", niihau: "tīloi" }],
    refs: [
      {
        id: "Ka Tuitui Malamalama | Episode 1: Hoolauna",
        time: ["30:12", "30:20"],
      },
    ],
  },
  {
    id: "toʻitoʻi",
    pairs: [{ hawaii: "koʻikoʻi", niihau: "toʻitoʻi" }],
    refs: [
      {
        id: "#10 TUTI KANAHELE",
        time: ["36:56"],
      },
    ],
  },
  {
    id: "tūʻē",
    pairs: [{ hawaii: "kūʻē", niihau: "tūʻē" }],
    refs: [
      {
        id: "Ka Tuitui Malamalama | Episode 6: E Welo Mau Ka Olelo Kanaka",
        time: ["37:49"],
      },
    ],
  },
  {
    id: "tumu",
    pairs: [{ hawaii: "kumu", niihau: "tumu" }],
    refs: [
      {
        id: "Ka Tuitui Malamalama | Episode 6: E Welo Mau Ka Olelo Kanaka",
        time: ["38:39"],
        text: "tela ka tumu",
      },
    ],
  },
  {
    id: "tūpono",
    pairs: [{ hawaii: "kūpono", niihau: "tūpono" }],
    refs: [
      {
        id: "Ka Tuitui Malamalama | Episode 6: E Welo Mau Ka Olelo Kanaka",
        time: ["41:34"],
        text: "tūpono ʻole",
      },
    ],
  },
];

export function alertIfNotAlphabetical() {
  const items = rules;
  const normalize = (str: string) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // remove macrons
      .replace(/ʻ/g, "") // remove U+02BB ʻokina
      .normalize("NFC");

  for (let i = 1; i < items.length; i++) {
    const prev = normalize(items[i - 1].id);
    const current = normalize(items[i].id);

    if (prev > current) {
      window.alert(
        `List is not alphabetical at "${items[i - 1].id}" → "${items[i].id}"`,
      );
      return;
    }
  }
}
