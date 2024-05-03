export interface Fans {
  id: number;
  fan_pn: string;
  image?: string;
  ciscofans?: [
    {
      cisco: {
        ciscopn: string;
        id: number;
      };
    }
  ]
}

export interface Rackmounts {
  id: number;
  rackpn: string;
  image?: string;
}

export interface PowerSupplies {
  id: number;
  power_pn: string;
  image?: string;
  ciscopowers?: [
    {
      cisco: {
        ciscopn: string;
        id: number;
      };
    }
  ]
}
