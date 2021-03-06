export type StrapiType = 'string' | 'number' | 'boolean' | 'text' | 'date' | 'email' | 'component';

export interface IStrapiModelAttribute {
  unique?: boolean;
  required?: boolean;
  type?: StrapiType;
  default?: string | number | boolean;
  dominant?: boolean;
  collection?: string;
  model?: string;
  via?: string;
  plugin?: string;
  enum?: string[];
  component?: string;
  repeatable?: boolean;
}

export interface IStrapiModel {
  /** Not from Strapi, but is the filename on disk */
  _filename: string;
  connection: string;
  collectionName: string;
  info: {
    name: string;
    description: string;
  };
  options?: {
    timestamps: boolean;
  };
  attributes: { [attr: string]: IStrapiModelAttribute };
}
