export interface Content {
  id: string;
  attributes: contentİnfo;
}

interface contentİnfo {
  headline: string;
  subText: string;
  description: string;
  imageUrl: string;
  contentType: string;
}
