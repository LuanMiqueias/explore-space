export interface IPlanets {
  name: string;
  subtitle: string;
  image_url: string;
  surface_temperature: string[];
  orbits: string;
  mass: string;
  orbit_period: number;
  distance_from_the_earth: number | null;
}
export interface IData {
  planets: IPlanets[];
}
