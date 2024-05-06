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


// profiles interface
export interface Profiles {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  created_at: string;
  email: string;
  avatar: string;
}