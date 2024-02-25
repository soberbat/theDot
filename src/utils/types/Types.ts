export interface Content {
  id: string;
  attributes: contentİnfo;
}

export interface Slider {
  data: {
    attributes: {
      url: string[];
    };
  }[];
}

interface contentİnfo {
  headline: string;
  date: string;
  paragraph: string;
  paragraph2: string;
  contenType: string;
  slider: Slider;
}
