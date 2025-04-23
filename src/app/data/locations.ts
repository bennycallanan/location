export interface Location {
  id: string;
  name: string;
  country: string;
  flag: string;
  ping?: number;
  isLoading?: boolean;
}

export const locations: Location[] = [
  {
    id: 'nuremberg',
    name: 'Nuremberg',
    country: 'DE',
    flag: '/flags/de.svg',
  },
  {
    id: 'losangeles',
    name: 'Los Angeles',
    country: 'USA',
    flag: '/flags/us.svg',
  },
  {
    id: 'helsinki',
    name: 'Helsinki',
    country: 'FI',
    flag: '/flags/fi.svg',
  },
];