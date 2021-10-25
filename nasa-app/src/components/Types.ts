export type AstroidData = {
  absolute_magnitude_h: number;
  close_approach_data: any;
  designation: string;
  estimated_diameter: any;
  id: string;
  is_potentially_hazardous_asteroid: boolean;
  is_sentry_object: boolean;
  links: { self: string };
  name: string;
  name_limited: string;
  nasa_jpl_url: string;
  neo_reference_id: string;
  orbital_data: any;
};

export type Location = {
  state: {
    id: number;
    nasa_jpl_url: string;
    is_potentially_hazardous_asteroid: string;
    name: string;
  };
};
